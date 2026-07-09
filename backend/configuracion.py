N_ESTADOS = 20
N_ACCIONES = 4

ALPHA = 0.1
GAMMA = 0.95
EPSILON = 0.3
EPSILON_MIN = 0.01
EPSILON_DECAY = 0.995

EPISODIOS = 500
PASOS_POR_EPISODIO = 50

CORS_ORIGINS = ["*"]

ESTADOS = [
    "Flujo libre",
    "Flujo moderado",
    "Flujo denso",
    "Congestión leve",
    "Congestión moderada",
    "Congestión severa",
    "Congestión crítica",
    "Accidente menor",
    "Accidente múltiple",
    "Accidente con heridos",
    "Avería en la vía",
    "Obras en 1 carril",
    "Obras multi-carril",
    "Semáforo fuera de servicio",
    "Inundación",
    "Evento masivo",
    "Protesta o manifestación",
    "Niebla densa",
    "Ambulancia en ruta",
    "Corte programado"
]

ACCIONES = [
    "Optimizar semáforos",
    "Analizar situación",
    "Desviar tráfico",
    "Activar emergencia"
]
