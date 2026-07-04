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

document.addEventListener('DOMContentLoaded', () => {
    const btnRegresar = document.getElementById('btn-regresar');
    const btnJugar = document.getElementById('btn-jugar');

    if (btnRegresar) {
        btnRegresar.addEventListener('click', () => {
            mostrarLoadingYRedirigir('/aprender/');
        });
    }

    if (btnJugar) {
        btnJugar.addEventListener('click', () => {
            alert('¡Próximamente! El juego Urban Learner está en desarrollo.');
        });
    }
});