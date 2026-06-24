N_ESTADOS = 3
# 0 = Okay, 1 = Sospechoso, 2 = Peligroso

N_ACCIONES = 3
# 0 = Permitir, 1 = Investigar, 2 = Bloquear

ALPHA = 0.1 # Tasa de aprendizaje
GAMMA = 0.95 # Importancia del futuro
EPSILON = 0.2 # Exploración inicial

EPSILON_MIN = 0.05 # Mínimo valor de épsilon
EPSILON_DECAY = 0.995 # Factor de decrecimiento de épsilon por episodio

RECOMPENSA_OKAY_BIEN = 2
RECOMPENSA_OKAY_MAL = -5

RECOMPENSA_SOSPECHOSO_BIEN = 5
RECOMPENSA_SOSPECHOSO_MAL = -2

RECOMPENSA_PELIGROSO_BIEN = 10
RECOMPENSA_PELIGROSO_MAL = -10

EPISODIOS = 500
PASOS_POR_EPISODIO = 50

CORS_ORIGINS = ["*"] # Permitir solicitudes desde cualquier origen