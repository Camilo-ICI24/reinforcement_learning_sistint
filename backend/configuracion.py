n_estados = 3
# 0 = Okay, 1 = Sospechoso, 2 = Peligroso

n_acciones = 3
# 0 = Permitir, 1 = Investigar, 2 = Bloquear

alpha = 0.1 # Tasa de aprendizaje
gamma = 0.95 # Importancia del futuro
epsilon = 0.2 # Exploración inicial

epsilon_min = 0.05 # Mínimo valor de épsilon
delta_epsilon = 0.995 # Factor de decrecimiento de épsilon por episodio

recompensa_okay_bien = 2
recompensa_okay_mal = -5

recompensa_sospechoso_bien = 5
recompensa_sospechoso_mal = -2

recompensa_peligroso_bien = 10
recompensa_peligroso_mal = -10

episodios = 500
pasos_por_episodio = 50

cors_origins = ["*"] # Permitir solicitudes desde cualquier origen