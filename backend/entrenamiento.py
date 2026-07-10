from configuracion import (
    N_ESTADOS, N_ACCIONES, ALPHA, GAMMA, EPSILON,
    EPISODIOS, PASOS_POR_EPISODIO, EPSILON_MIN, EPSILON_DECAY,
    ESTADOS, ACCIONES
)
from environment import TrafficEnvironment
from metricas import Metrics
from qlearning import QLearningAgent


def entrenar(progreso=None): # Proceso de entrenamiento del agente de aprendizaje por refuerzo
    agente = QLearningAgent(N_ESTADOS, N_ACCIONES, ALPHA, GAMMA,
                            EPSILON, EPSILON_MIN, EPSILON_DECAY)
    ambiente = TrafficEnvironment()
    metricas = Metrics()

    for episodio in range(EPISODIOS):
        estado = ambiente.reiniciar_estados()
        recompensa_total = 0
        aciertos = 0

        for _ in range(PASOS_POR_EPISODIO):
            # El agente elige una acción según la política definida
            accion = agente.elegir_accion(estado)

            # El ambiente responde a la acción con el estado y recompensa correspondiente
            prox_estado, recompensa = ambiente.paso(estado, accion)

            # Aprendizaje por refuerzo
            agente.actualizar(estado, accion, recompensa, prox_estado)

            # Se actualizan las métricas
            recompensa_total += recompensa

            if recompensa > 0:
                aciertos += 1

            # El estado avanza
            estado = prox_estado

        # Cambia el épsilon para el siguiente episodio
        agente.decaer_epsilon()

        q_table = agente.obtener_q_table()
        metricas.guardar_episodio( # Guardar las métricas del episodio
            episodio=episodio,
            recompensa_obtenida=recompensa_total,
            epsilon=agente.epsilon,
            aciertos=aciertos,
            acciones_tomadas=PASOS_POR_EPISODIO,
            q_table=q_table
        )

        if progreso:
            progreso(episodio, {
                "episodio": episodio,
                "recompensa_total": recompensa_total,
                "epsilon": agente.epsilon,
                "tasa_exito": aciertos / PASOS_POR_EPISODIO,
                "q_table": q_table,
                "estados": ESTADOS,
                "acciones": ACCIONES
            })

    return agente, metricas
