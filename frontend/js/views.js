function obtenerCuriosidadRandom() { 
    /* Esto carga las curiosidades que se muestran en la pantalla de carga*/
    if (!Array.isArray(curiosidades) || curiosidades.length === 0) {
        return "Cargando una idea brillante...";
    }

    const randomIndex = Math.floor(Math.random() * curiosidades.length);
    return curiosidades[randomIndex];
}

function mostrarVista(viewId) {
    document.querySelectorAll(".view").forEach((vista) => {
        vista.classList.remove("active");
        vista.classList.add("hidden");
    });

    document.body.classList.toggle("home-background", viewId === "home");

    const siguienteVista = document.getElementById(viewId);

    if (siguienteVista) {
        siguienteVista.classList.remove("hidden");
        siguienteVista.classList.add("active");
    }
}

function startApp() {
    const fact = document.getElementById("fact");

    if (fact) {
        fact.textContent = obtenerCuriosidadRandom();
    }

    mostrarVista("loading");

    setTimeout(() => {
        window.location.href = "./aprender/";
    }, 700);
}

/* Muestra pantalla de carga y redirige a una URL */
function mostrarLoadingYRedirigir(destino) {
    const fact = document.getElementById("fact");
    const loadingView = document.getElementById("loading");

    if (fact) {
        fact.textContent = obtenerCuriosidadRandom();
    }

    if (loadingView) {
        document.querySelectorAll(".view").forEach((vista) => {
            vista.classList.remove("active");
            vista.classList.add("hidden");
        });
        loadingView.classList.remove("hidden");
        loadingView.classList.add("active");
    }

    setTimeout(() => {
        window.location.href = destino;
    }, 700);
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash === "#dashboard") {
        mostrarVista("dashboard");
    }
});
