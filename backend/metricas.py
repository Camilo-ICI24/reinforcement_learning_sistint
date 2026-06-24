class Metrics:
    def __init__(self):
        self.episodios = [] # Lista de episodios para guardar el avance del aprendizaje

        self.recompensas_totales = [] # Lista de recompensas por episodio

        self.epsilons = [] # Épsilon (exploración) por episodio

        self.tasa_exito = [] # Tasa de decisiones correctas por episodio

    def guardar_episodio(self, episodio, recompensa_obtenida, epsilon, aciertos, acciones_tomadas):
        # Guarda los episodios de aprendizaje del agente

        self.episodios.append(episodio)
        self.recompensas_totales.append(recompensa_obtenida)
        self.epsilons.append(epsilon)

        exito = 0
        if acciones_tomadas > 0:
            exito = aciertos / acciones_tomadas

        self.tasa_exito.append(exito)

    def obtener_metricas(self): # Obtiene las métricas para ser mostradas en la página web
        return {
            "episodios": self.episodios,
            "recompensas_totales": self.recompensas_totales,
            "epsilons": self.epsilons,
            "tasa_exito": self.tasa_exito
        }

    def reset(self): # Reinicia las métricas al presionar un botón de reseteo en la interfaz
        self.__init__()