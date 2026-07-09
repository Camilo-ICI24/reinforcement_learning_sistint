import json
from backend.configuracion import (
    N_ESTADOS, N_ACCIONES, ALPHA, GAMMA, EPSILON,
    EPISODIOS, PASOS_POR_EPISODIO, EPSILON_MIN, EPSILON_DECAY,
    ESTADOS, ACCIONES
)
from backend.environment import TrafficEnvironment
from backend.metricas import Metrics
from backend.qlearning import QLearningAgent


def entrenar(progreso=None):
    agente = QLearningAgent(N_ESTADOS, N_ACCIONES, ALPHA, GAMMA,
                            EPSILON, EPSILON_MIN, EPSILON_DECAY)
    ambiente = TrafficEnvironment()
    metricas = Metrics()

    for episodio in range(EPISODIOS):
        estado = ambiente.reiniciar_estados()
        recompensa_total = 0
        aciertos = 0

        for _ in range(PASOS_POR_EPISODIO):
            accion = agente.elegir_accion(estado)
            prox_estado, recompensa = ambiente.paso(estado, accion)
            agente.actualizar(estado, accion, recompensa, prox_estado)
            recompensa_total += recompensa
            if recompensa > 0:
                aciertos += 1
            estado = prox_estado

        agente.decaer_epsilon()

        q_table = agente.obtener_q_table()
        metricas.guardar_episodio(
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
