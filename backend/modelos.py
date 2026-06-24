from pydantic import BaseModel
from typing import List

class StateResponse(BaseModel): # Estados del sistema
    estado: int
    descripcion: str

class StepResponse(BaseModel): # Respuestas del paso del ambiente 
    estado: int
    accion: int
    recompensa: float
    proximo_estado: int

class StepBackendResponse(BaseModel): # Paso del entorno para el frontend
    estado: str
    accion: str
    recompensa: float
    proximo_estado: str

class QTableResponse(BaseModel): # Q-Table
    q_table: List[List[float]]

class PolicyResponse(BaseModel): # Políticas aprendidas
    politicas: List[int]

class TrainRequest(BaseModel): # Proceso de entrenamiento del agente inteligente
    episodios: int = 1000

class ActionResponse(BaseModel): # Respuesta genérica para las acciones del ambiente
    status: str
    mensaje: str

class MetricsResponse(BaseModel): # Métricas del proceso de aprendizaje 
    episodios: List[int]
    recompensas: List[float]
    epsilon: float # Probabilidad de exploración sobre explotación