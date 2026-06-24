from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware as cmw
from configuracion import CORS_ORIGINS
from entrenamiento import entrenar

app = FastAPI(title="Sistema de Aprendizaje por Refuerzo para Detección de Anomalías", 
                     version="1.0.0")

# Permitir conexiones desde el frontend
app.add_middleware(cmw, allow_origins=CORS_ORIGINS, allow_credentials=True, allow_methods=["*"],
                   allow_headers=["*"])

# Variables globales
agente_entrenado = None
metricas_entrenamiento = None

# Iniciar el programa
@app.get("/")
def inicio():
    return { "mensaje": "API de Aprendizaje por Refuerzo para Detección de Anomalías" }

# Obtener estado del sistema
@app.get("/estado-sistema")
def estado_sistema():
    return { "estado": "ok" }

# Entrenar agente
@app.post("/entrenar")
def entrenar_agente():
    global agente_entrenado
    global metricas_entrenamiento

    agente_entrenado, metricas_entrenamiento = entrenar()

    return { "mensaje": "Entrenamiento del agente concluído exitosamente" }

# Obtener métricas del entrenamiento del agente
@app.get("/metricas")
def metricas():
    if metricas_entrenamiento is None:
        return { "error": "No se ha entrenado el agente todavía" }

    return metricas_entrenamiento.obtener_metricas()

# Obtener Q-Table
@app.get("/qtable")
def qtable():
    if agente_entrenado is None:
        return { "error": "No se ha entrenado el agente todavía" }

    return { "q_table": agente_entrenado.obtener_q_table() }