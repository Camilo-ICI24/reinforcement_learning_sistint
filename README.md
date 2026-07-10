# Detector de Anomalías con Aprendizaje por Refuerzo

Plataforma educativa interactiva en sitio web para aprender el concepto del aprendizaje por refuerzo mediante un agente Q-Learning que gestiona el tráfico urbano. Combina contenido teórico para público semitécnico y técnico, una consola de aprendizaje interactiva, un juego de simulación y un dashboard de entrenamiento en vivo.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías](#tecnologías)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
  - [Cursos SCORM](#cursos-scorm)
  - [Contenerización](#contenerización)
- [Requisitos Previos](#requisitos-previos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Cómo Funciona](#cómo-funciona)
  - [Algoritmo Q-Learning](#algoritmo-q-learning)
  - [Agente Inteligente](#agente-inteligente)
  - [Entorno de Tráfico](#entorno-de-tráfico)
  - [Juego Urban Learner](#juego-urban-learner)
- [API REST](#api-rest)
- [Streaming SSE (Entrenamiento en Vivo)](#streaming-sse-entrenamiento-en-vivo)
- [Configuración](#configuración)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

---

## Descripción

El Aprendizaje por Refuerzo  es una de las áreas más interesantes de la Inteligencia Artificial. A diferencia del aprendizaje supervisado, un agente aprende mediante la interacción con un entorno, recibiendo recompensas o penalizaciones según las acciones realizadas. Esta capacidad permite resolver problemas de toma de decisiones secuenciales en contextos dinámicos e inciertos.

Este proyecto es una plataforma educativa integral sobre el aprendizaje por refuerzo aplicado a un caso práctico de gestión del tráfico urbano. Está diseñada para que estudiantes y entusiastas de la inteligencia artificial puedan:

1. Aprender los fundamentos teóricos del RL mediante cursos SCORM, tanto para nivel semitécnico y técnico, sin importar su nivel de conocimiento previo o expertiz en el área.
2. Experimentar con una consola interactiva que explica paso a paso cada concepto relacionado a este modelo de aprendizaje.
3. Visualizar el entrenamiento de un agente Q-Learning en tiempo real con gráficos y tablas Q.
4. Jugar como un agente de tráfico, tomando decisiones y viendo cómo las recompensas guían el aprendizaje por refuerzo.

El backend implementa un agente Q-Learning clásico desde cero a través de NumPy, expuesto mediante una API FastAPI con soporte para eventos enviados por el servidor (SSE) que permite ver el entrenamiento episodio por episodio en vivo.

---

## Características

### Backend
- API RESTful desarrollada con FastAPI
- Algoritmo Q-Learning implementado con NumPy
- Entrenamiento síncrono y en streaming (SSE)
- 20 estados de tráfico con una matriz de recompensas predefinida
- 500 episodios de entrenamiento con 50 pasos por episodio
- Política epsilon-greedy con decaimiento por cada episodio de entrenamiento
- Velocidad de entrenamiento ajustable en tiempo real

### Frontend
- Página de inicio con animación de partículas y diseño cyberpunk con motivos de bytes en distintos colores moviéndose por la pantalla
- Cursos SCORM completos (nivel técnico y semitécnico) con quizzes interactivos y evaluación de conocimientos constante y retroalimentación activa
- Consola de aprendizaje con efecto máquina de escribir, imágenes explicativas y evaluaciones
- Dashboard de entrenamiento en vivo con:
  - Código fuente del modelo Q-Learning resaltado con colores para las funciones, variables y comentarios
  - Tabla Q actualizada en tiempo real con cuatro acciones para 20 estados definidos
  - Gráficos de recompensa y tasa de éxito por episodio
  - Control de velocidad de entrenamiento
  - Consulta interactiva al agente entrenado
- Juego interactivo "Urban Learner" con 40 situaciones de tráfico, 15 estados seleccionados al azar, cuatro acciones posibles, sistema de puntuación (recompensa) y feedback visual
- Música ambiental con menú de control de volumen en el juego
- Diseño responsivo y tema oscuro con motivo cyberpunk

---

## Estructura del Proyecto

```
reinforcement_learning_sistint/
│
├── backend/                              # API y lógica interna del modelo de RL
│   ├── main.py                           # FastAPI: endpoints, datos en vivo
│   ├── qlearning.py                      # Algoritmo Q-Learning
│   ├── environment.py                    # Entorno de tráfico (20 estados)
│   ├── entrenamiento.py                  # Bucle de entrenamiento (500 episodios)
│   ├── metricas.py                       # Registro de métricas
│   ├── modelos.py                        # Modelos Pydantic
│   ├── configuracion.py                  # Constantes e hiperparámetros iniciales
│   └── __init__.py
│
├── frontend/
│   ├── index.html                        # Página de inicio
│   │
│   ├── aprender/                         # Directorio para el aprendizaje de RL
│   │   ├── index.html                    # Página de aprendizaje
│   │   ├── semitecnico/                  # Curso SCORM para el nivel semitécnico
│   │   └── tecnico/                      # Curso SCORM para el nivel técnico
│   │
│   ├── jugando/                          # Directorio del juego
│   │   ├── index.html                    # Página del juego interactivo
│   │   └── reinforcementlearning_game_audio.m4a  # Música de fondo
│   │
│   ├── vista-practica/                   # Dashboard de entrenamiento
│   │   └── index.html                    # Página del dashboard del entrenamiento del modelo real
│   │
│   ├── css/
│   │   ├── styles.css                    # Estilos globales para las páginas (motivo cyberpunk)
│   │   ├── jugando.css
│   │   └── practica.css
│   │
│   ├── js/
│   │   ├── views.js                      # Enrutador de vistas
│   │   ├── particulas.js                 # Animación de partículas
│   │   ├── aprender.js                   # Consola interactiva de aprendizaje
│   │   ├── practica.js                   # Dashboard SSE, charts, Q‑Table
│   │   └── jugando.js                    # Lógica interna del juego interactivo
│   │
│   ├── assets/
│   │   └── imagenes/estados/             # 30 imágenes JPG para el juego interactivo
│   │
│   └── datos/
│       ├── curiosidades.js               # Curiosidades y chistes internos para pantalla de carga
│       └── estados.json                  # 40 estados con recompensas
│
├── qlearn/                               # Entorno virtual de Python
├── docker-compose.yml                    # Orquestación de contenedores
├── backend/Dockerfile                    # Imagen del backend (Python/FastAPI)
├── frontend/Dockerfile                   # Imagen del frontend (nginx)
├── .gitignore
└── README.md                             # Documentación del proyecto
```

---

## Tecnologías

### Backend
- **Python 3.12** — Lenguaje de programación
- **FastAPI** — Framework API web asíncrono
- **Uvicorn** — Servidor ASGI
- **NumPy** — Cómputo numérico para la tabla Q
- **Pydantic** — Validación de datos

### Frontend
- **HTML5 / CSS3** — Sin frameworks, vanilla JavaScript
- **Font Awesome 6.5.1** — Librería de iconos
- **Highlight.js 11.9.0** — Resaltado de sintaxis para código Python
- **Canvas API** — Animación de partículas de fondo
- **Server-Sent Events (EventSource)** — Streaming de datos en vivo

### Cursos (SCORM)
- **eXeLearning** — Herramienta de autoría de contenido educativo
- **SCORM 1.2** — Estándar de interoperabilidad LMS
- **Bootstrap 4** — Framework CSS para los cursos

### Contenerización
- **Docker** — Construcción de contenedores para backend y frontend
- **Docker Compose** — Orquestación multi-contenedor

---

## Requisitos Previos

- **Python 3.10+**: Se recomienda utilizar la versión 3.12.3
- **pip**: Gestor de paquetes de Python
- **Docker** y **Docker Compose**: Para la ejecución de los contenedores del proyecto (opcional)
- Navegador web moderno (p.e.: Chrome, Firefox, Edge, Brave)
- Servidor HTTP estático para desarrollo (opcional)

---

## Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/Camilo-ICI24/reinforcement_learning_sistint.git
cd reinforcement_learning_sistint
```

---

### Opción A — Ejecución por terminal

#### 2. Crear y activar el entorno virtual

En Linux, ejecutar:

```bash
python -m venv qlearn
source qlearn/bin/activate   # Se recomienda mantener el nombre ya que es en éste ambiente donde el proyecto fue ejecutado
```

#### 3. Instalar dependencias del backend

```bash
pip install -r requirements.txt
```

#### 4. Iniciar el backend

```bash
uvicorn backend.main:app --reload --host 127.0.0.1 --port 8000
```

La API del proyecto se encontrará disponible en `http://127.0.0.1:8000`, mientras que la documentación interactiva estará en `http://127.0.0.1:8000/docs`.

#### 5. Iniciar el frontend

El frontend está construido con HTML, CSS y JavaScript vanilla. Para servirlo, puedes utilizar cualquier servidor HTTP:

```bash
cd frontend
python -m http.server 3000
```

Abre el navegador en `http://localhost:3000` y verás la interfaz gráfica del proyecto corriendo.

> **Nota**: Necesitarás dos terminales, puedes abrir una pestaña para el backend y otra para el frontend.

---

### Opción B — Ejecución con Docker

Requisito: debes tener **Docker** y **Docker Compose** instalados.

#### 2. Construir e iniciar los servicios

```bash
docker compose up --build -d
```

Esto levanta ambos contenedores automáticamente:
- Backend en `http://127.0.0.1:8000` (con su documentación disponible en `/docs`)
- Frontend en `http://localhost:3000`

#### 3. Comandos útiles

```bash
# Ver logs en vivo de la ejecución de los contenedores
docker compose logs -f

# Detener contenedores
docker compose down

# Reconstruir después de cambios internos
docker compose up --build -d
```

---

## Cómo Funciona

### Algoritmo Q-Learning

Q-Learning corresponde a un algoritmo de aprendizaje cuyo objetivo es que el agente inteligente pueda aprender a tomar decisiones óptimas mediante prueba y error para maximizar una recompensa a largo plazo. TIene una ecuación asociada la cual es:

```
Q(s, a) ← Q(s, a) + α · [r + γ · maxₐ' Q(s', a') − Q(s, a)]
```
, donde: 

| Símbolo | Significado | Valor |
|---------|-------------|-------|
| Q(s, a) | Valor estimado de tomar la acción a en el estado s | — |
| α (alpha) | Tasa de aprendizaje | 0.1 |
| r | Recompensa recibida tras ejecutar la acción a en el estado s | — |
| γ (gamma) | Factor de descuento (importancia de recompensas futuras) | 0.95 |
| max Q(s', a') | Mejor valor estimado del siguiente estado | — |

### Agente Inteligente

El agente (`QLearningAgent` en `backend/qlearning.py`) implementa:

- **Política ε-greedy**: con probabilidad ε explora (acción aleatoria), con probabilidad 1-ε explota (mejor acción según Q).
- **Decaimiento de ε**: ε comienza con el valor inicial 0.3 y se multiplica por 0.995 durante cada episodio de entrenamiento hasta un mínimo de 0.01.
- **Tabla Q**: Matriz NumPy de 20 filas (representando los estados) × 4 columnas (representando las acciones), inicializada en ceros.

### Entorno de Tráfico

El entorno (`TrafficEnvironment` en `backend/environment.py`) modela 20 situaciones de tráfico con 4 acciones posibles. La matriz de recompensas (20×4) está diseñada para que cada estado tenga una acción óptima distinta, creando un problema de aprendizaje no trivial.

| Estado | Descripción | Mejor Acción |
|--------|-------------|--------------|
| 0-2 | Flujo normal | Optimizar / Analizar |
| 3-6 | Congestión | Desviar / Emergencia |
| 7-10 | Accidentes | Emergencia |
| 11-14 | Infraestructura | Desviar |
| 15-17 | Eventos especiales | Analizar / Desviar |
| 18-19 | Emergencias activas | Emergencia |

### Juego Interactivo "Urban Learner"

El juego (`frontend/jugando/`) es una simulación interactiva donde el jugador asume el rol del agente de tráfico para comprender los fundamentos de un modelo inteligente que aprende por refuerzo:

1. Se muestran **15 situaciones** seleccionadas aleatoriamente de un total de 40.
2. Cada situación (entorno) incluye una imagen, título y descripción breve del estado del tráfico.
3. El jugador elige una de 4 acciones: **Optimizar**, **Analizar**, **Emergencia** o **Esperar**.
4. El sistema muestra una retroalimentación inmediata: si fue correcto, casi correcto, o incorrecto, junto con la recompensa obtenida y una explicación.
5. Al finalizar el juego, se muestra la recompensa total acumulada y un ranking asociado a dicha puntuación (Bronce/Plata/Oro).

---

## API REST

| Método | Ruta | Parámetros | Descripción |
|--------|------|------------|-------------|
| GET | `/` | — | Información de la API, lista de estados y acciones |
| GET | `/estado-sistema` | — | Health check |
| POST | `/entrenar` | — | Entrenamiento completo (500 episodios, síncrono) |
| GET | `/metricas` | — | Métricas del último entrenamiento |
| GET | `/qtable` | — | Tabla Q final del agente entrenado |
| GET | `/funcionamiento` | `?estado=int` | Acción recomendada para un estado dado |
| GET | `/labels` | — | Nombres de estados y acciones |
| GET | `/velocidad` | `?velocidad=float` | Actualiza velocidad de entrenamiento (mín. 0.1) |
| GET | `/codigo` | — | Código fuente del modelo Q-Learning |
| GET | `/entrenar-stream` | `?velocidad=float` | Entrenamiento en streaming (SSE) |

### Ejemplos de uso

```bash
# Ver estados y acciones disponibles
curl http://127.0.0.1:8000/

# Consultar acción recomendada para el estado p (Reemplazar p por un número)
curl "http://127.0.0.1:8000/funcionamiento?estado=p" 

# Obtener código fuente del modelo
curl http://127.0.0.1:8000/codigo

# Cambiar velocidad de entrenamiento a 20x
curl "http://127.0.0.1:8000/velocidad?velocidad=20"
```

---

## Streaming SSE (Entrenamiento en Vivo)

El endpoint `/entrenar-stream` utiliza la tecnología de Eventos Enviados por el Servidor (**Server-Sent Events**, SSE) para transmitir el progreso del entrenamiento del agente inteligente en tiempo real. Este endpoint es la base fundamental del dashboard de la Vista Práctica.

### Formato de los eventos

Cada evento es una línea `data: {json}\n\n` con una estructura similar a este ejemplo:

```json
{
  "episodio": 57,
  "recompensa_total": 198.2,
  "epsilon": 0.199,
  "tasa_exito": 0.79,
  "q_table": [[0.3, 0.9, ...], ...],
  "estados": ["Flujo libre", "Hora punta", ...],
  "acciones": ["Optimizar semáforos", "Analizar situación", ...]
}
```

Evento final (cuando el entrenamiento termina):

```json
{
  "completado": true,
  "estados": ["Flujo libre", ...],
  "acciones": ["Optimizar semáforos", ...]
}
```

### Conexión desde el frontend

```javascript
const eventSource = new EventSource("http://127.0.0.1:8000/entrenar-stream?velocidad=10");

eventSource.onmessage = (e) => {
    const datos = JSON.parse(e.data);
    if (datos.completado) {
        // Entrenamiento terminado
        return;
    }
    // Actualizar interfaz con datos.episodio, datos.recompensa_total, datos.q_table, etc.
};

eventSource.onerror = () => {
    // Manejar error de conexión
};
```

### Control de velocidad en vivo

El parámetro `velocidad` controla la rapidez entre eventos a voluntad del usuario:
- `velocidad=1` → 1 segundo entre episodios
- `velocidad=10` → 0.1 segundos (100ms)
- `velocidad=100` → 0.01 segundos (10ms)
- Valor mínimo: 0.1 (10 segundos entre episodios)

Se puede modificar durante el entrenamiento vía `GET /velocidad?velocidad=N` sin necesidad de reconectar.

---

## Configuración

### Hiperparámetros del Agente

Todos los hiperparámetros para el entrenamiento del agente inteligente se configuran en `backend/configuracion.py`:

```python
ALPHA = 0.1           # Tasa de aprendizaje
GAMMA = 0.95          # Factor de descuento
EPSILON = 0.3         # Tasa de exploración inicial
EPSILON_MIN = 0.01    # Tasa de exploración mínima
EPSILON_DECAY = 0.995 # Decaimiento por episodio
EPISODIOS = 500       # Número de episodios
PASOS_POR_EPISODIO = 50 # Pasos por episodio
N_ESTADOS = 20        # Número de estados
N_ACCIONES = 4        # Número de acciones
```

### Estados de Tráfico

Los 20 estados están definidos en `backend/configuracion.py` como la lista `ESTADOS`:

```
"Flujo libre", "Hora punta", "Alta densidad", "Congestión severa",
"Derrumbe", "Accidente mayor", "Accidente menor", "Vehículo averiado",
"Obstrucción", "Cierre de carril", "Corte total", "Zona de obras",
"Festival", "Manifestación", "Evento deportivo", "Niebla densa",
"Lluvia intensa", "Inundación", "Ambulancia", "Corte programado"
```

Es posible agregar más o eliminar ciertos estados.

### Acciones

Las 4 acciones disponibles (en `backend/configuracion.py`):

```
"Optimizar semáforos", "Analizar situación", "Desviar tráfico", "Activar emergencia"
```

---

## Despliegue

### Servidor de Producción (Backend)

```bash
# Sin recarga automática
uvicorn backend.main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Servidor de Producción (Frontend)

Puedes usar cualquier servidor web estático:

```bash
# Con nginx (ejemplo de configuración)
server {
    listen 80;
    server_name dominio-que-tengas.com;
    root /alguna/ruta/hacia/frontend;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Despliegue con Docker

```bash
# Construir y ejecutar en segundo plano
docker compose up --build -d

# Verificar funcionamiento
docker compose ps
```

### Variables de Entorno (opcional)

Actualmente no se requieren variables de entorno. La URL del backend está hardcodeada como `http://127.0.0.1:8000` en `frontend/js/practica.js`. Para entornos de producción, modifica esta constante.

---

## Contacto

**Camilo Cifuentes** - Desarrollador del proyecto

- GitHub: [@Camilo-ICI24](https://github.com/Camilo-ICI24)
- Correo: — c.cifuentes14@ufromail.cl

---

*ICC608-1 - Sistemas Inteligentes. 10 Julio 2026.*