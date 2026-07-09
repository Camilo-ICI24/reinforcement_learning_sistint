const API_BASE = "http://127.0.0.1:8000"; /* API del modelo de aprendizaje por refeurzo */

const ICONOS_ACCION = ["fa-arrows-spin", "fa-magnifying-glass", "fa-route", "fa-truck-fast"];
const CLASES_ACCION = ["accion-opt", "accion-anal", "accion-desv", "accion-emer"];
const NOMBRES_ACCION = ["Optimizar semáforos", "Analizar situación", "Desviar tráfico", "Activar emergencia"];

let etiquetasEstado = []; /* Etiquetas de cada estado del entorno obtenidas desde backend */
let etiquetasAccion = []; /* Etiquetas de cada acción que el modelo puede tomar */
let episodiosDatos = [];  /* Información del episodio de entrenamiento, para graficar */
let recompensasDatos = []; /* Recompensa conseguida por cada episodio */
let exitoDatos = []; /* Nivel de éxito por episodio de entrenamiento */
let mejorReward = -Infinity; /* Mejor recompensa obtenida */
let entrenando = false; /* Indicador de si el entrenamiento está activo o no */
let eventSource = null; /* Fuente de eventos para recibir datos de entrenamiento en vivo (streaming data) */
let animFrameId = null; /* Identificador de la animación para actualizar el gráfico */

/* Muestra la pantalla de carga al acceder a esta página */
function mostrarLoading() {
    const v = document.getElementById("loading");
    if (v) { v.classList.remove("hidden"); v.classList.add("active"); }
}

/* Oculta la pantalla de carga cuando el sitio se despliega */
function ocultarLoading() {
    const v = document.getElementById("loading");
    if (v) { v.classList.remove("active"); v.classList.add("hidden"); }
}

/* Carga las etiquetas de estados y acciones que vienen desde el backend */
async function cargarLabels() {
    try {
        const r = await fetch(`${API_BASE}/labels`); 
        if (!r.ok) return;
        const d = await r.json();
        etiquetasEstado = d.estados || [];
        etiquetasAccion = d.acciones || [];
        llenarSelectEstado();
        renderizarQTableInicial();
    } catch (e) { /* silencioso */ }
}

/* Muestra el código fuente del modelo de aprendizaje por refuerzo */
async function cargarCodigo() {
    try {
        const r = await fetch(`${API_BASE}/codigo`);
        if (!r.ok) return;
        const d = await r.json();
        if (d.codigo) {
            const el = document.getElementById("codigo-modelo");
            el.textContent = d.codigo;
            if (typeof hljs !== "undefined") hljs.highlightElement(el);
        }
    } catch (e) { /* silencioso */ }
}

/* Llena la sección desplegable de selección de estado con las etiquetas del backend */
function llenarSelectEstado() {
    const sel = document.getElementById("select-estado");
    if (!sel) return;
    sel.innerHTML = "";
    etiquetasEstado.forEach((nombre, i) => { /* Agrega cada estado como una opción seleccionable */
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `${i}. ${nombre}`;
        sel.appendChild(opt);
    });
}

/* Reinicia la tabla Q con valores iniciales y etiquetas de los estados del entorno */
function renderizarQTableInicial() {
    const tbody = document.getElementById("qtable-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        const tr = document.createElement("tr");
        const label = etiquetasEstado[i] || `Estado ${i}`;

        /* Este HTML representa una fila de la tabla Q con su estado y valores iniciales para cada acción */
        tr.innerHTML = `<td>${i}. ${label}</td> 
            <td class="val-opt">0.000</td>
            <td class="val-anal">0.000</td>
            <td class="val-desv">0.000</td>
            <td class="val-emer">0.000</td>`;
        tbody.appendChild(tr); /* Agrega esta fila a la Q-Table en el DOM */
    }
}

/* Actualiza la tabla Q con los valores obtenidos durante el entrenamiento */
function actualizarQTable(qTable) {
    const tbody = document.getElementById("qtable-body");
    if (!tbody || !qTable) return;
    const filas = tbody.querySelectorAll("tr");
    qTable.forEach((fila, i) => {

        if (filas[i]) {
            const celdas = filas[i].querySelectorAll("td");

            if (celdas.length === 5) {
                const vals = [parseFloat(fila[0]), parseFloat(fila[1]),
                             parseFloat(fila[2]), parseFloat(fila[3])];

                for (let j = 0; j < 4; j++) {
                    celdas[j + 1].textContent = vals[j].toFixed(3);
                    celdas[j + 1].style.color = vals[j] >= 0 ? "#22c55e" : "#ef4444";
                    /* Verde para recompesas positivas, y rojo para penalizaciones */
                }
            }
        }
    });
}

/* Traza el gráfico visual de recompensas durante los episodios de entrenamiento */
function dibujarGrafico(canvasId, datos, color, label) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 16;
    canvas.height = 110;

    const w = canvas.width, h = canvas.height; /* Dimensiones del canvas (lienzo) */
    const pad = { top: 10, right: 8, bottom: 20, left: 42 };
    const gw = w - pad.left - pad.right, gh = h - pad.top - pad.bottom;

    ctx.clearRect(0, 0, w, h); /* El lienzo se limpia antes de trazar todo */

    if (datos.length < 2) {
        ctx.fillStyle = "#475569";
        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Esperando datos...", w / 2, h / 2 + 4);
        return;
    }

    /* Los datos se filtran para no atiborrar el gráfico con muchos puntos */
    const sub = Math.max(1, Math.floor(datos.length / 80));
    const pts = datos.filter((_, i) => i % sub === 0);

    /* Valores máximo y mínimo para escalar el gráfico */
    const maxV = Math.max(...pts, 1);
    const minV = Math.min(...pts, 0);
    const rango = maxV - minV || 1; /* Evita divisiones por cero */

    /* Dibuja líneas de referencia para ciertos valores del eje Y y sus etiquetas */
    ctx.strokeStyle = "rgba(71, 85, 105, 0.25)";
    ctx.lineWidth = 1;
    ctx.font = "9px monospace";
    ctx.textAlign = "right";
    for (let i = 0; i <= 3; i++) {
        const y = pad.top + (gh * i) / 3;
        ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
        ctx.fillStyle = "#475569";
        ctx.fillText((maxV - (rango * i) / 3).toFixed(1), pad.left - 4, y + 3);
    }

    /* Dibuja la línea de recompensa a través de los episodios de entrenamiento */
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    pts.forEach((v, i) => {
        const x = pad.left + (gw * i) / Math.max(pts.length - 1, 1);
        const y = pad.top + gh * (1 - (v - minV) / rango);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    /* Se ponen puntos en los últimos 5 episodios para resaltar la tendencia más reciente */
    const last = pts.slice(-5);
    ctx.fillStyle = color;
    last.forEach((v, i) => {
        const x = pad.left + gw * (1 - (last.length - 1 - i) / Math.max(pts.length - 1, 1));
        const y = pad.top + gh * (1 - (v - minV) / rango);
        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
    });
}

/* Refresca el gráfico visual en la página */
function actualizarCharts() {
    dibujarGrafico("chart-recompensas", recompensasDatos, "#22c55e", "Recompensa");
    dibujarGrafico("chart-exito", exitoDatos, "#38bdf8", "Tasa de éxito");
}

/* Actualiza la información del episodio de entrenamiento en la página */
function actualizarInfoEpisodio(ep, reward, epsilon) {
    const episodio = document.getElementById("episodio-actual");
    if (episodio) episodio.textContent = `Episodio: ${String(ep).padStart(3, "0")} / 500`;

    const eps = document.getElementById("epsilon-actual");
    if (eps) eps.textContent = `ε = ${epsilon.toFixed(3)}`;

    if (reward > mejorReward) {
        mejorReward = reward;
        const rew = document.getElementById("mejor-recompensa");
        if (rew) rew.textContent = `Mejor: ${reward.toFixed(1)}`;
    }
}

/* Procesa los datos que llegan desde el backend durante el entrenamiento y refresca la interfaz */
function procesarDatosEntrenamiento(datos) {
    if (!datos || datos.completado) return;

    const ep = datos.episodio; /* Episodio actual */
    const reward = datos.recompensa_total; /* Recompensa total por episodio */
    const exito = datos.tasa_exito; /* Tasa de éxito del episodio */
    const epsilon = datos.epsilon; /* Valor de exploración vs explotación */

    episodiosDatos.push(ep);
    recompensasDatos.push(reward);
    exitoDatos.push(exito);

    actualizarInfoEpisodio(ep, reward, epsilon);
    actualizarQTable(datos.q_table);
    actualizarCharts();
}

/* Comienza el entrenamiento del modelo en vivo, recibiendo datos en streaming */
function entrenarStream() {
    const velocidad = parseInt(document.getElementById("slider-velocidad").value) || 10;

    entrenando = true;
    document.getElementById("btn-entrenar").disabled = true;
    document.getElementById("btn-detener").disabled = false;

    episodiosDatos = [];
    recompensasDatos = [];
    exitoDatos = [];
    mejorReward = -Infinity;

    const url = `${API_BASE}/entrenar-stream?velocidad=${velocidad}`;
    eventSource = new EventSource(url);

    eventSource.onmessage = (e) => {
        try {
            const datos = JSON.parse(e.data);
            if (datos.completado) {
                if (datos.estados) {
                    etiquetasEstado = datos.estados;
                    etiquetasAccion = datos.acciones;
                }
                finalizarEntrenamiento();
                return;
            }
            procesarDatosEntrenamiento(datos);
        } catch (err) { /* ignorar */ }
    };

    eventSource.onerror = () => {
        finalizarEntrenamiento();
    };
}

/* Frena el entrenamiento */
function detenerEntrenamiento() {
    if (eventSource) {
        eventSource.close();
        eventSource = null;
    }
    finalizarEntrenamiento();
}

/* Finaliza el proceso de entrenamiento, ya sea por todos los episodios o detenido por el usuario */
function finalizarEntrenamiento() {
    if (eventSource) {
        eventSource.close();
        eventSource = null;
    }
    entrenando = false;
    document.getElementById("btn-entrenar").disabled = false;
    document.getElementById("btn-detener").disabled = true;
}

/* Consulta la acción recomendada por el agente para el estado seleccionado y muestra el resultado en la interfaz */
async function consultarAgente() {
    const select = document.getElementById("select-estado");
    const estado = parseInt(select.value);
    const resultado = document.getElementById("resultado-consulta");

    try {
        const r = await fetch(`${API_BASE}/funcionamiento?estado=${estado}`);
        if (!r.ok) throw new Error("Error");
        const d = await r.json();
        if (d.error) {
            resultado.innerHTML = `<p>${d.error}</p>`;
            return;
        }

        const accion = d.accion;
        const icono = ICONOS_ACCION[accion] || "fa-question";
        const cls = CLASES_ACCION[accion] || "";
        const nombreAccion = NOMBRES_ACCION[accion] || "Desconocida";

        resultado.innerHTML = `
            <div class="resultado-accion">
                <div class="accion-icono ${cls}">
                    <i class="fa-solid ${icono}"></i>
                </div>
                <div>
                    <div class="accion-texto">${nombreAccion}</div>
                    <div class="accion-detalle">Estado: ${d.estado_nombre || "Desconocido"}</div>
                </div>
            </div>`;
    } catch (e) {
        resultado.innerHTML = `<p style="color:#ef4444;">Error al consultar. ¿Backend corriendo?</p>`;
    }
}

/* Inicializa los eventos de la página y carga los datos necesarios para mostrar */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-entrenar").addEventListener("click", entrenarStream);
    document.getElementById("btn-detener").addEventListener("click", detenerEntrenamiento);
    document.getElementById("btn-consultar").addEventListener("click", consultarAgente);

    const slider = document.getElementById("slider-velocidad");
    const label = document.getElementById("velocidad-label");
    if (slider && label) {
        slider.addEventListener("input", () => {
            label.textContent = `${slider.value}x`;
            if (entrenando) {
                fetch(`${API_BASE}/velocidad?velocidad=${parseFloat(slider.value)}`)
                    .catch(() => {});
            }
        });
    }

    cargarLabels();
    cargarCodigo();
});

/* Oculta la pantalla de carga al volver a mostrar la página */
window.addEventListener("pageshow", () => {
    const v = document.getElementById("loading");
    if (v) { v.classList.remove("active"); v.classList.add("hidden"); }
});
