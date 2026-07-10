class Metrics:
    def __init__(self):
        self.episodios = []
        self.recompensas_totales = []
        self.epsilons = []
        self.tasa_exito = []
        self.q_tables = []

    # Almacena las métricas resultantes de un episodio de entrenamiento
    def guardar_episodio(self, episodio, recompensa_obtenida, epsilon, aciertos,
                         acciones_tomadas, q_table=None):
        self.episodios.append(episodio)
        self.recompensas_totales.append(recompensa_obtenida)
        self.epsilons.append(epsilon)
        exito = (aciertos / acciones_tomadas) if acciones_tomadas > 0 else 0
        self.tasa_exito.append(exito)
        if q_table is not None:
            self.q_tables.append(q_table)

    # Devuelve un diccionario con el historial de métricas tras un proceso de entrenamiento completo
    def obtener_metricas(self):
        return {
            "episodios": self.episodios,
            "recompensas_totales": self.recompensas_totales,
            "epsilons": self.epsilons,
            "tasa_exito": self.tasa_exito,
            "q_tables": self.q_tables
        }

    # Reseteo completo a su estado inicial
    def reset(self):
        self.__init__()
