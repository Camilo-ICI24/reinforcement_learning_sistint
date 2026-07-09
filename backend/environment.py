import random
from backend.configuracion import N_ESTADOS, N_ACCIONES, ESTADOS, ACCIONES

# Matriz de recompensas: 20 estados × 4 acciones
# Acciones: 0=Optimizar, 1=Analizar, 2=Desviar, 3=Emergencia
REWARDS = [
    # 0-2: Flujo normal
    [ 8,  3, -1, -5],  # 0  Flujo libre
    [ 6,  5, -1, -4],  # 1  Flujo moderado
    [ 4,  6,  1, -3],  # 2  Flujo denso
    # 3-6: Congestión
    [ 1,  8,  4, -1],  # 3  Congestión leve
    [-2,  5,  7,  2],  # 4  Congestión moderada
    [-5,  2,  8,  5],  # 5  Congestión severa
    [-8,  0,  5,  9],  # 6  Congestión crítica
    # 7-10: Accidentes
    [-6, -1,  3, 10],  # 7  Accidente menor
    [-8, -3,  3, 10],  # 8  Accidente múltiple
    [-9, -4,  2, 10],  # 9  Accidente con heridos
    [-4,  2,  8,  4],  # 10 Avería en la vía
    # 11-14: Infraestructura
    [ 4,  2,  8,  0],  # 11 Obras en 1 carril
    [ 2,  1,  9,  1],  # 12 Obras multi-carril
    [ 6,  7,  2, -1],  # 13 Semáforo fuera de servicio
    [-6, -1,  4,  9],  # 14 Inundación
    # 15-17: Eventos
    [ 3,  4,  8,  1],  # 15 Evento masivo
    [ 1,  9,  5, -1],  # 16 Protesta o manifestación
    [ 4,  7,  1, -2],  # 17 Niebla densa
    # 18-19: Emergencias
    [-5, -3,  4, 10],  # 18 Ambulancia en ruta
    [ 3,  1,  8,  0],  # 19 Corte programado
]

class TrafficEnvironment:
    def __init__(self):
        self.estados = list(range(N_ESTADOS))

    def reiniciar_estados(self):
        return random.choice(self.estados)

    def obtener_recompensa(self, estado, accion):
        return REWARDS[estado][accion]

    def siguiente_estado(self):
        return random.choice(self.estados)

    def paso(self, estado, accion):
        recompensa = self.obtener_recompensa(estado, accion)
        proximo_estado = self.siguiente_estado()
        return proximo_estado, recompensa
