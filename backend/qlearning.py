import numpy as np
import random

class QLearningAgent:
    def __init__(
        self,
        n_estados, # Cantidad de situaciones posibles 
        n_acciones, # Número de acciones posibles
        tasa_aprendizaje=0.1, # Alfa. Peso de la información frente a la experiencia antigua
        factor_descuento=0.95, # Gamma. Peso de las recompensas futuras frente a las inmediatas
        epsilon=0.2, # Equilibra exploración con explotación
        epsilon_min=0.05, # Minimo valor de épsilon
        epsilon_decay=0.995 # Decrecimiento de épsilon
    ):

        self.n_estados = n_estados
        self.n_acciones = n_acciones

        self.alpha = tasa_aprendizaje
        self.gamma = factor_descuento
        self.epsilon = epsilon
        self.epsilon_min = epsilon_min
        self.delta_epsilon = epsilon_decay

        # Tabla Q
        self.q_table = np.zeros((n_estados, n_acciones))

    def elegir_accion(self, estado):

        # Exploración
        if random.uniform(0, 1) < self.epsilon:
            return random.randint(0, self.n_acciones - 1)

        # Explotación
        return np.argmax(self.q_table[estado])

    def actualizar(self, estado, accion, recompensa, proximo_estado):
        original = self.q_table[estado, accion] # Q(s, a)

        maximo_siguiente = np.max(self.q_table[proximo_estado]) # max Q(s', a')

        nuevo_valor = original + self.alpha * (recompensa + self.gamma * maximo_siguiente - original)
        # Q(s, a) = Q(s, a) + lr(R + gamma*max(Q(s', a')) - Q(s, a))

        self.q_table[estado, accion] = nuevo_valor

    def obtener_q_table(self):
        return self.q_table.tolist()
    
    def decaer_epsilon(self):
        self.epsilon = max(self.epsilon_min, self.epsilon * self.epsilon_decay)