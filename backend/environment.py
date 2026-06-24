import random

class NetworkEnvironment:
    def __init__(self):
        self.estados = [0, 1, 2]  # Okay, sospechoso, peligroso

    def reiniciar_estados(self): # Genera estados aleatorios nuevos
        return random.choice(self.estados)
    
    def recompensa_okay(self, accion): # Define recompensas para el estado Okay
        if accion == 0:
            return 2
        
        elif accion == 1:
            return -1
        
        else:
            return -5

    def recompensa_sospechoso(self, accion): # Define recompensas para el estado Sospechoso
        if accion == 1:
            return 5
        
        elif accion == 0:
            return -2
        
        else:
            return 1

    def recompensa_peligroso(self, accion): # Define recompensas para el estado Peligroso
        if accion == 2:
            return 10
        
        elif accion == 1:
            return 3
        
        else:
            return -10

    def obtener_recompensa_por_estado(self, estado, accion):
        if estado == 0: # Estado Okay
            return self.recompensa_okay(accion)
        
        elif estado == 1: # Estado Sospechoso
            return self.recompensa_sospechoso(accion)
        
        else: # Estado Peligroso
            return self.recompensa_peligroso(accion)
        
    def proximo_estado(self): # Cambia el estado del agente aleatoriamentes
        return random.choice(self.estados)
    
    def paso(self, estado, accion): # Interacción del agente con el ambiente
        recompensa = self.obtener_recompensa(estado, accion)
        proximo_estado = self.siguiente_estado()

        return proximo_estado, recompensa 