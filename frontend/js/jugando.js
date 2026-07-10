function obtenerCuriosidadRandom() {
    if (!Array.isArray(curiosidades) || curiosidades.length === 0) {
        return "Cargando una idea brillante...";
    }
    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    return curiosidades[randomIndex];
}

function mostrarLoadingYRedirigir(destino) {
    const loadingView = document.getElementById('loading');
    const jugandoView = document.getElementById('jugando');
    const fact = document.getElementById('fact');

    if (fact) {
        fact.textContent = obtenerCuriosidadRandom();
    }

    if (jugandoView) {
        jugandoView.classList.remove('active');
        jugandoView.classList.add('hidden');
    }

    if (loadingView) {
        loadingView.classList.remove('hidden');
        loadingView.classList.add('active');
    }

    setTimeout(() => {
        window.location.href = destino;
    }, 700);
}

let estadosDisponibles = [];
let estadoSeleccionados = [];
let indiceActual = 0;
let puntajeTotal = 0;
let correctas = 0;
let incorrectas = 0;
let accionesHistorial = [];

function seleccionarEstados(cantidad, datos) {
    const usadosRecientemente = [];
    const seleccion = [];

    for (let i = 0; i < cantidad; i++) {
        const disponibles = datos.filter(e => !usadosRecientemente.includes(e.id));
        const elegido = disponibles[Math.floor(Math.random() * disponibles.length)];
        seleccion.push(elegido);
        usadosRecientemente.push(elegido.id);
        if (usadosRecientemente.length > 5) {
            usadosRecientemente.shift();
        }
    }

    return seleccion;
}

function mostrarEstado() {
    const estado = estadoSeleccionados[indiceActual];
    document.getElementById('estado-actual').textContent = indiceActual + 1;
    document.getElementById('contexto-titulo').textContent = estado.titulo;
    document.getElementById('contexto-descripcion').textContent = estado.descripcion;
    document.getElementById('juego-imagen').src = '/assets/' + estado.imagen;
    document.getElementById('juego-imagen').alt = estado.titulo;
}

function rankingAcciones(recompensas) {
    return Object.entries(recompensas)
        .sort((a, b) => b[1] - a[1])
        .map(([accion, valor], idx) => ({ accion, valor, rank: idx }));
}

const ETIQUETAS_RANK = [
    { texto: '¡Correcto!',   icono: 'fa-circle-check', css: 'feedback-correcto', color: '#22c55e' },
    { texto: '¡Casi!',       icono: 'fa-circle-exclamation', css: 'feedback-casi',    color: '#facc15' },
    { texto: 'Uhm...',        icono: 'fa-circle-question', css: 'feedback-uhm',     color: '#fb923c' },
    { texto: 'Incorrecto',    icono: 'fa-circle-xmark', css: 'feedback-incorrecto', color: '#ef4444' },
];

function avanzarEstado() {
    const overlay = document.getElementById('feedback-overlay');
    if (overlay) overlay.remove();

    indiceActual++;
    if (indiceActual >= estadoSeleccionados.length) {
        document.body.classList.remove('no-scroll');
        mostrarResultadoFinal();
    } else {
        mostrarEstado();
        habilitarAcciones(true);
    }
}

function manejarAccion(event) {
    const btn = event.currentTarget;
    const accion = btn.dataset.accion;
    const estado = estadoSeleccionados[indiceActual];
    const recompensa = estado.recompensas[accion];
    const ranking = rankingAcciones(estado.recompensas);
    const entrada = ranking.find(r => r.accion === accion);
    const rank = entrada.rank;
    const esCorrecta = rank === 0;

    puntajeTotal += recompensa;
    if (esCorrecta) {
        correctas++;
    } else {
        incorrectas++;
    }

    accionesHistorial.push({
        estadoId: estado.id,
        accion: accion,
        recompensa: recompensa,
        correcta: esCorrecta
    });

    actualizarPuntaje();
    mostrarFeedback(recompensa, rank, estado);
}

function mostrarFeedback(recompensa, rank, estado) {
    habilitarAcciones(false);

    const etiqueta = ETIQUETAS_RANK[rank];
    const recompensaStr = recompensa >= 0 ? '+' + recompensa : '' + recompensa;

    const overlay = document.createElement('div');
    overlay.id = 'feedback-overlay';
    overlay.className = 'feedback-overlay';

    overlay.innerHTML = `
        <div class="feedback-modal ${etiqueta.css}">
            <div class="feedback-header">
                <i class="fa-solid ${etiqueta.icono}"></i>
                <span>${etiqueta.texto}</span>
                <span class="feedback-recompensa ${recompensa >= 0 ? 'recompensa-positiva' : 'recompensa-negativa'}">${recompensaStr}</span>
            </div>
            <p class="feedback-explicacion">${estado.explicacion}</p>
            <button class="feedback-continuar btn-neon btn-neon-green">
                ¡Entiendo!
                <i class="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    `;

    overlay.querySelector('.feedback-continuar').addEventListener('click', avanzarEstado);

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('feedback-overlay-visible'));
}

function habilitarAcciones(habilitar) {
    const btns = document.querySelectorAll('.btn-accion');
    btns.forEach(btn => {
        btn.disabled = !habilitar;
        btn.style.pointerEvents = habilitar ? 'auto' : 'none';
        btn.style.opacity = habilitar ? '1' : '0.5';
    });
}

function actualizarPuntaje() {
    document.getElementById('puntaje-total').textContent = puntajeTotal;
    document.getElementById('puntaje-correctas').textContent = correctas;
    document.getElementById('puntaje-incorrectas').textContent = incorrectas;
}

function mostrarResultadoFinal() {
    document.getElementById('juego-panel').classList.add('mostrando-resultado');
    document.getElementById('juego-resultado').classList.remove('hidden');

    const resultadoTitulo = document.getElementById('resultado-titulo');
    const resultadoMensaje = document.getElementById('resultado-mensaje');
    const resultadoPuntaje = document.getElementById('resultado-puntaje');
    const resultadoIcono = document.getElementById('resultado-icono');

    resultadoPuntaje.textContent = puntajeTotal;

    if (puntaje >= 200) {
        resultadoTitulo.textContent = '¡Experto en tráfico!';
        resultadoMensaje.textContent = 'Tus decisiones demuestran un dominio excepcional de la gestión del tráfico urbano.';
        resultadoIcono.className = 'fa-solid fa-award resultado-icono icono-oro';
    } else if (puntaje >= 100) {
        resultadoTitulo.textContent = '¡Buen trabajo!';
        resultadoMensaje.textContent = 'Tomaste buenas decisiones, pero aún puedes mejorar tu estrategia.';
        resultadoIcono.className = 'fa-solid fa-medal resultado-icono icono-plata';
    } else {
        resultadoTitulo.textContent = 'Sigue practicando';
        resultadoMensaje.textContent = 'Analiza mejor cada situación y recuerda que no siempre intervenir es la mejor opción.';
        resultadoIcono.className = 'fa-solid fa-shield-halved resultado-icono icono-bronce';
    }
}

function reiniciarJuego() {
    indiceActual = 0;
    puntajeTotal = 0;
    correctas = 0;
    incorrectas = 0;
    accionesHistorial = [];
    estadoSeleccionados = [];

    document.getElementById('juego-resultado').classList.add('hidden');
    document.getElementById('juego-panel').classList.remove('mostrando-resultado');

    const overlay = document.getElementById('feedback-overlay');
    if (overlay) overlay.remove();
    document.body.classList.remove('no-scroll');

    iniciarJuego();
}

function iniciarJuego() {
    estadoSeleccionados = seleccionarEstados(15, estadosDisponibles);
    indiceActual = 0;
    puntajeTotal = 0;
    correctas = 0;
    incorrectas = 0;
    accionesHistorial = [];

    document.getElementById('jugando').classList.add('juego-activo');
    document.querySelector('.jugando-header').classList.add('hidden');
    document.getElementById('menu-inicio').classList.add('hidden');
    document.getElementById('juego-panel').classList.remove('hidden');
    document.body.classList.add('no-scroll');

    actualizarPuntaje();
    mostrarEstado();
    habilitarAcciones(true);
}

let audioIniciado = false;

function iniciarAudio() {
    if (audioIniciado) return;
    const audio = document.getElementById('bg-audio');
    if (!audio) return;
    audio.volume = parseInt(document.getElementById('slider-volumen').value) / 100;
    audio.play().then(() => {
        audioIniciado = true;
    }).catch(() => {
        /* El navegador bloqueó autoplay; se iniciará en el primer click */
        document.addEventListener('click', iniciarAudio, { once: true });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnRegresar = document.getElementById('btn-regresar');
    const btnJugar = document.getElementById('btn-jugar');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const btnSalir = document.getElementById('btn-salir');

    /* Audio: toggle deslizable en sidebar */
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    const audioContent = document.getElementById('audio-sidebar-content');
    if (btnAudioToggle && audioContent) {
        btnAudioToggle.addEventListener('click', () => {
            audioContent.classList.toggle('open');
            btnAudioToggle.querySelector('.toggle-icon').classList.toggle('open');
        });
    }

    /* Audio: mute toggle */
    const btnMute = document.getElementById('btn-mute');
    const sliderVol = document.getElementById('slider-volumen');
    const audio = document.getElementById('bg-audio');

    if (btnMute && sliderVol && audio) {
        let muted = false;
        let volAntes = parseFloat(sliderVol.value) / 100;

        sliderVol.addEventListener('input', () => {
            const v = parseFloat(sliderVol.value) / 100;
            audio.volume = v;
            volAntes = v;
            muted = v === 0;
            btnMute.innerHTML = v === 0
                ? '<i class="fa-solid fa-volume-xmark"></i>'
                : v < 0.5
                    ? '<i class="fa-solid fa-volume-low"></i>'
                    : '<i class="fa-solid fa-volume-high"></i>';
        });

        btnMute.addEventListener('click', (e) => {
            e.stopPropagation();
            if (muted) {
                audio.volume = volAntes || 0.5;
                sliderVol.value = (volAntes || 0.5) * 100;
                muted = false;
            } else {
                volAntes = audio.volume;
                audio.volume = 0;
                sliderVol.value = 0;
                muted = true;
            }
            btnMute.innerHTML = muted
                ? '<i class="fa-solid fa-volume-xmark"></i>'
                : audio.volume < 0.5
                    ? '<i class="fa-solid fa-volume-low"></i>'
                    : '<i class="fa-solid fa-volume-high"></i>';
        });
    }

    /* Iniciar audio al cargar la página */
    iniciarAudio();

    fetch('/datos/estados.json')
        .then(res => res.json())
        .then(datos => {
            estadosDisponibles = datos;
        })
        .catch(err => {
            console.error('Error al cargar estados:', err);
        });

    if (btnRegresar) {
        btnRegresar.addEventListener('click', () => {
            mostrarLoadingYRedirigir('/aprender/');
        });
    }

    if (btnJugar) {
        btnJugar.addEventListener('click', iniciarJuego);
    }

    if (btnReiniciar) {
        btnReiniciar.addEventListener('click', reiniciarJuego);
    }

    if (btnSalir) {
        btnSalir.addEventListener('click', () => {
            mostrarLoadingYRedirigir('/aprender/');
        });
    }

    const btnsAccion = document.querySelectorAll('.btn-accion');
    btnsAccion.forEach(btn => {
        btn.addEventListener('click', manejarAccion);
    });
});
