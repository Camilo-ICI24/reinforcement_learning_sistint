import asyncio
import json
import os
import threading
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware as cmw
from fastapi.responses import StreamingResponse
from backend.configuracion import CORS_ORIGINS, ESTADOS, ACCIONES, EPISODIOS
from backend.entrenamiento import entrenar

app = FastAPI(title="Sistema de Agente de Tráfico Inteligente",
              version="1.0.0")

app.add_middleware(cmw, allow_origins=CORS_ORIGINS, allow_credentials=True,
                   allow_methods=["*"], allow_headers=["*"])

agente_entrenado = None
metricas_entrenamiento = None
velocidad_actual = 1.0


@app.get("/")
def inicio():
    return {
        "mensaje": "API de Agente de Tráfico Inteligente",
        "estados": ESTADOS,
        "acciones": ACCIONES
    }


@app.get("/estado-sistema")
def estado_sistema():
    return {"estado": "ok"}


@app.post("/entrenar")
def entrenar_agente():
    global agente_entrenado, metricas_entrenamiento
    agente_entrenado, metricas_entrenamiento = entrenar()
    return {"mensaje": "Entrenamiento concluido exitosamente"}


@app.get("/metricas")
def metricas():
    if metricas_entrenamiento is None:
        return {"error": "No se ha entrenado el agente"}
    m = metricas_entrenamiento.obtener_metricas()
    m["estados"] = ESTADOS
    m["acciones"] = ACCIONES
    return m


@app.get("/qtable")
def qtable():
    if agente_entrenado is None:
        return {"error": "No se ha entrenado el agente"}
    return {
        "q_table": agente_entrenado.obtener_q_table(),
        "estados": ESTADOS,
        "acciones": ACCIONES
    }


@app.get("/funcionamiento")
def funcionamiento(estado: int):
    if agente_entrenado is None:
        return {"error": "No se ha entrenado el agente"}
    accion = agente_entrenado.elegir_accion(estado)
    return {
        "estado": estado,
        "estado_nombre": ESTADOS[estado],
        "accion": int(accion),
        "accion_nombre": ACCIONES[accion]
    }


@app.get("/labels")
def labels():
    return {"estados": ESTADOS, "acciones": ACCIONES}


@app.get("/velocidad")
def actualizar_velocidad(velocidad: float):
    global velocidad_actual
    velocidad_actual = max(0.1, velocidad)
    return {"velocidad": velocidad_actual}


@app.get("/codigo")
def codigo():
    ruta = os.path.join(os.path.dirname(__file__), "qlearning.py")
    try:
        with open(ruta) as f:
            return {"codigo": f.read()}
    except Exception as e:
        return {"error": str(e)}


def _entrenar_con_queue(q, loop):
    def on_progreso(episodio, datos):
        asyncio.run_coroutine_threadsafe(q.put(datos), loop)
    agente, metrics = entrenar(progreso=on_progreso)
    asyncio.run_coroutine_threadsafe(q.put(None), loop)
    global agente_entrenado, metricas_entrenamiento
    agente_entrenado = agente
    metricas_entrenamiento = metrics


@app.get("/entrenar-stream")
async def entrenar_stream(velocidad: float = 1.0):
    global velocidad_actual
    velocidad_actual = max(0.1, velocidad)
    q = asyncio.Queue()
    loop = asyncio.get_event_loop()

    hilo = threading.Thread(target=_entrenar_con_queue, args=(q, loop), daemon=True)
    hilo.start()

    async def generar():
        while True:
            datos = await q.get()
            if datos is None:
                yield f"data: {json.dumps({'completado': True, 'estados': ESTADOS, 'acciones': ACCIONES})}\n\n"
                return
            yield f"data: {json.dumps(datos)}\n\n"
            delay = max(0.001, 1.0 / max(velocidad_actual, 0.1))
            await asyncio.sleep(delay)

    return StreamingResponse(
        generar(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        }
    )
