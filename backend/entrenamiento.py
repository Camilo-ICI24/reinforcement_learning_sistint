from configuracion import (N_ESTADOS, N_ACCIONES, ALPHA, GAMMA, EPSILON, EPISODIOS, PASOS_POR_EPISODIO,
                           EPSILON_MIN, EPSILON_DECAY)
from environment import NetworkEnvironment
from metricas import Metrics
from qlearning import QLearningAgent


def entrenar(): # Proceso de entrenamiento del agente de aprendizaje por refuerzo
    agente = QLearningAgent(N_ESTADOS, N_ACCIONES, ALPHA, GAMMA, EPSILON, EPSILON_MIN, EPSILON_DECAY)
    ambiente = NetworkEnvironment()
    metricas = Metrics()

    for episodio_aprendizaje in range(EPISODIOS):

        estado = ambiente.reiniciar_estados()
        recompensa_total = 0
        aciertos_conseguidos = 0
        acciones_tomadas_aprendizaje = 0

        for _ in range(PASOS_POR_EPISODIO):

            # El agente elige una acción según la política definida
            accion = agente.elegir_accion(estado) 

            # El ambiente responde a la acción con el estado y recompensa correspondiente
            proximo_estado, recompensa = ambiente.paso(estado, accion)

            # Aprendizaje por refuerzo
            agente.actualizar(estado, accion, recompensa, proximo_estado)

            # Se actualizan las métricas
            recompensa_total += recompensa
            acciones_tomadas_aprendizaje += 1

            if recompensa > 0:
                aciertos_conseguidos += 1

            # El estado avanza
            estado = proximo_estado

        metricas.guardar_episodio( # Guardar las métricas del episodio
            episodio=episodio_aprendizaje,
            recompensa_obtenida=recompensa_total,
            epsilon=agente.epsilon,
            aciertos=aciertos_conseguidos,
            acciones_tomadas=acciones_tomadas_aprendizaje
        )

        # Cambia el épsilon para el siguiente episodio
        agente.decaer_epsilon()

    return agente, metricas