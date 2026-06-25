const canvas = document.getElementById("background-canvas"); // Obtener el diseño del fondo
const ctx = canvas.getContext("2d"); // Traza figuras en el fondo

canvas.width = window.innerWidth; // Usará el ancho de la pantalla
canvas.height = window.innerHeight; // Usará el alto de la pantalla

const colores = [
    "#ff3b30", // Chispas rojas
    "#ffd60a", // Chispas amarillas
    "#0a84ff"  // Chispas azules
];

const particulas = [];

class Particula {
    constructor() {
        this.x = Math.random() * canvas.width; 
        this.y = Math.random() * canvas.height; 

        this.tamaño = Math.random() * 4 + 2;

        this.velocidad_x = (Math.random() - 0.5) * (0.5 + Math.random() * 2);
        this.velocidad_y = (Math.random() - 0.5) * (0.5 + Math.random() * 2);

        this.color = colores[Math.floor(Math.random() * colores.length)];

        this.direccion = Math.random() < 0.5 ? "x" : "y";
        this.cambioDireccion = Math.floor(Math.random() * 120) + 60;

        this.trail = []; // Historial de posición de la cola
        this.maxTrail = 30; // Largo de la cola 
    } 

    actualizar() {
        this.cambioDireccion--;

        if (this.cambioDireccion <= 0) {
            this.direccion = this.direccion === "x" ? "y" : "x";
            this.cambioDireccion = Math.floor(Math.random() * 120) + 60;
        }

        // La posición se guarda antes del movimiento de la partícula
        this.trail.push({ x: this.x, y: this.y });

        if (this.trail.length > this.maxTrail) {
            this.trail.shift();
        }

        if (this.direccion === "x") {
            this.x += this.velocidad_x;

            if (this.x < 0 || this.x > canvas.width) {
                this.velocidad_x *= -1;
                this.direccion = "y";
            }
        }

        else {
            this.y += this.velocidad_y;

            if (this.y < 0 || this.y > canvas.height) {
                this.velocidad_y *= -1;
                this.direccion = "x";
            }
        }
    }

    dibujar() {
        ctx.save();

        ctx.shadowBlur = 3;
        ctx.shadowColor = this.color;

        ctx.fillStyle = this.color;

        for (let i = 0; i < this.trail.length; i++) {
            let t = this.trail[i];

            ctx.globalAlpha = i / this.trail.length;

            ctx.fillRect(
                t.x,
                t.y,
                this.tamaño * 0.9,
                this.tamaño * 0.9
            );
        }

        // Partícula principal
        ctx.globalAlpha = 1;
        ctx.fillRect(this.x, this.y, this.tamaño, this.tamaño);

        ctx.restore();
    }
}

// Se llena la pantalla de partículas para decorar
for (let numero = 0; numero < 50; numero++) {
    particulas.push(new Particula()); 
}

// Animación de las partículas con estelas
function animar() {

    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particulas.forEach(p => {
        p.actualizar();
        p.dibujar();
    });

    requestAnimationFrame(animar);
}

animar();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});