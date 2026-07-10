const rutasAprendizaje = {
    semi: {
        label: "Aprendizaje Semi-Técnico", /* Para usuarios que tienen conocimiento básico del tema */
        sources: [ /* Indica referencias bibliográficas de la información entregada */
            {
                title: "Reinforcement Learning: An Introduction",
                detail: "Libro de Richard Sutton y Andrew Barto que define el aprendizaje por refuerzo " +
                "y sus elementos fundamentales, como el estado, la acción, tasa de aprendizaje, entre " +
                "otros.",
                url: "http://incompleteideas.net/book/RLbook2020.pdf"
            },
            {
                title: "Deep Reinforcement Learning: An Overview",
                detail: "Artículo científico de Yuxi Li que presenta una visión más amplia sobre los " +
                "elementos clave sobre el aprendizaje por refuerzo y sus logros más recientes",
                url: "https://arxiv.org/abs/1701.07274"
            },
            {
                title: "OpenAI Spinning Up",
                detail: "Guía introductoria con conceptos clave, videos, esquemas y ejempos en código " +
                "para estudiar aprendizaje por refuerzo de forma práctica.",
                url: "https://spinningup.openai.com/en/latest/spinningup/rl_intro.html"
            }
        ],
        steps: [
            {
                term: "agente",
                text: "Para resolver un problema, se necesita a alguien que tome decisiones. En el " +
                "aprendizaje por refuerzo, ese rol lo cumple el agente. Para poner en perspectiva, " +
                "imaginemos a un atleta que participa en una maratón y encuentra un gran charco de agua " + 
                "en su camino. Allí, el corredor actúa como un agente inteligente. y deberá decidir si " +
                "lo salta o lo rodea para continuar avanzando hacia la meta.",
                definition: "Un agente es un programa de software capaz de recopilar información, " +
                "tomar decisiones y realizar acciones para alcanzar uno o más objetivos establecidos.",
                img: "semitecnico/content/resources/reinforcementlearning_1.jpg",
                imgAlt: "Diagrama del agente y el entorno en aprendizaje por refuerzo",
                textBeforeImg: "Para resolver un problema, se necesita a alguien que tome decisiones. En el " +
                "aprendizaje por refuerzo, ese rol lo cumple el agente. Para poner en perspectiva, " +
                "imaginemos a un atleta que participa en una maratón y encuentra un gran charco de agua " +
                "en su camino.",
                textAfterImg: "Allí, el corredor actúa como un agente inteligente. y deberá decidir si " +
                "lo salta o lo rodea para continuar avanzando hacia la meta.",
                quiz: {
                    type: "multiple",
                    question: "¿Cuál de las siguientes corresponde a una característica del aprendizaje por refuerzo?",
                    options: [
                        { label: "a) Un superior otorga la respuesta correcta al agente", val: false },
                        { label: "b) Se aprende mediante prueba y error para maximizar las recompensas", val: true },
                        { label: "c) Está basado en el uso de datos estáticos acerca del ambiente del agente, sin interactuar con él de manera directa", val: false }
                    ],
                    feedbackCorrecto: "¡Excelente! El agente descubre las mejores acciones interactuando con su alrededor.",
                    feedbackIncorrecto: "No. En el aprendizaje por refuerzo, no hay un supervisor que dé la respuesta óptima desde el principio, el agente debe interactuar con el entorno para descubrir las respuestas."
                }
            },
            {
                term: "entorno",
                text: "El atleta no toma decisiones al azar, sino que lo hace de acuerdo a lo que " + 
                "sucede a su alrededor. El camino, los obstáculos y todo aquello que puede observar " +
                "forman parte de su entorno. Cada acción que realiza cambia la situación y produce un " +
                "resultado que le servirá para decidir mejor en el futuro.",
                definition: "El entorno es el medio externo donde el agente interactúa. Es la fuente " +
                "de información que utiliza para la toma de decisiones, y el lugar donde ocurren las " +
                "consecuencias de sus acciones realizadas.",
                img: "semitecnico/content/resources/reinforcementlearning_2.jpg",
                imgAlt: "Diagrama del agente y el entorno",
                textBeforeImg: "El atleta no toma decisiones al azar, sino que lo hace de acuerdo a lo que " +
                "sucede a su alrededor. El camino, los obstáculos y todo aquello que puede observar " +
                "forman parte de su entorno.",
                textAfterImg: "Cada acción que realiza cambia la situación y produce un " +
                "resultado que le servirá para decidir mejor en el futuro."
            },
            {
                term: "estado",
                text: "Antes de decidir qué hacer, el atleta necesita conocer la situación actual, como " +
                "posición actual en el recorrido, la distancia que le falta para llegar a la meta y la " +
                "presencia de obstáculos son algunos de los elementos que describen el estado en ese " +
                "instante.",
                definition: "Un estado corresponde a una configuración específica del entorno en un " +
                "momento determinado. Representa la información disponible que el agente utiliza para " +
                "tomar decisiones. El conjunto de todos los estados posibles se denomina espacio de " +
                "estados.",
                img: "semitecnico/content/resources/reinforcementlearning_3.jpg",
                imgAlt: "Representación del estado del agente",
                textBeforeImg: "Antes de decidir qué hacer, el atleta necesita conocer la situación actual, como " +
                "posición actual en el recorrido, la distancia que le falta para llegar a la meta y ",
                textAfterImg: "la presencia de obstáculos son algunos de los elementos que describen el estado en ese " +
                "instante.",
                quiz: {
                    type: "truefalse",
                    question: "(Verdadero o Falso) El estado contiene información útil para que el agente decida qué hacer.",
                    options: [
                        { label: "Verdadero", val: true },
                        { label: "Falso", val: false }
                    ],
                    feedbackCorrecto: "¡Correcto! El estado proporciona la información necesaria para la toma de decisiones del agente.",
                    feedbackIncorrecto: "Incorrecto. El estado es la representación de la situación actual que el agente usa para decidir."
                }
            },
            {
                term: "acción",
                text: "Conociendo la información que se tiene, el atleta ya puede actuar. Puede decidir " +
                "entre acelerar, mantener el ritmo, saltar el charco o rodearlo. Cada una de estas " +
                "decisiones producirá un resultado distinto y modificará la situación en la que se encuentra.",
                definition: "Una acción corresponde a la decisión que el agente ejecuta sobre el entorno " +
                "desde un estado determinado. Las acciones pertenecen a un conjunto de decisiones posibles " +
                "que dependen del estado actual y determinan el cambio hacia un nuevo estado.",
                img: "semitecnico/content/resources/reinforcementlearning_4.jpg",
                imgAlt: "Representación de las acciones del agente",
                textBeforeImg: "Conociendo la información que se tiene, el atleta ya puede actuar. Puede decidir " +
                "entre acelerar, mantener el ritmo, saltar el charco o rodearlo.",
                textAfterImg: "Cada una de estas " +
                "decisiones producirá un resultado distinto y modificará la situación en la que se encuentra."
            },
            {
                term: "recompensa",
                text: "Después de actuar, el atleta observa el resultado de su decisión. Si logró " +
                "superar el obstáculo sin perder tiempo, la decisión fue adecuada. En cambio, si " +
                "tropezó o se retrasó, el resultado será menos favorable. Esta información le ayuda " +
                "a saber qué decisiones le acercan más a su objetivo en estados similares.",
                definition: "La recompensa es una señal escalar de retroalimentación definida por " +
                "una función de recompensa que asigna un valor a la transición entre estados que " +
                "ocurre por una acción tomada. Esta recompensa guía el aprendizaje del agente " +
                "para maximizar el valor acumulada a lo largo del tiempo. Las recompensas pueden " +
                "ser positivas o negativas, incentivando o desincentivando ciertas decisiones.",
                img: "semitecnico/content/resources/reinforcementlearning_5.jpg",
                imgAlt: "Representación de la recompensa",
                textBeforeImg: "Después de actuar, el atleta observa el resultado de su decisión. Si logró " +
                "superar el obstáculo sin perder tiempo, la decisión fue adecuada.",
                textAfterImg: "En cambio, si " +
                "tropezó o se retrasó, el resultado será menos favorable. Esta información le ayuda " +
                "a saber qué decisiones le acercan más a su objetivo en estados similares."
            },
            {
                term: "aprendizaje",
                text: "Tras enfrentarse a situaciones similares varias veces, el atleta comienza a " +
                " reconocer qué decisiones producen mejores resultados. Gracias a esa experiencia, " +
                "aprende cuándo conviene saltar el charco y cuándo es preferible rodearlo, aumentando " +
                "sus posibilidades de llegar antes a la meta.",
                definition: "El aprendizaje es el proceso donde el agente mejora su toma de decisiones a" +
                " partir de la experiencia obtenida durante la interacción con el entorno. Su objetivo " +
                "es mejorar progresivamente la toma de decisiones para maximizar las recompensas a lo " +
                "largo de diferentes estados.",
                img: "semitecnico/content/resources/reinforcementlearning_6.jpg",
                imgAlt: "Representación de la política de aprendizaje",
                textBeforeImg: "Tras enfrentarse a situaciones similares varias veces, el atleta comienza a " +
                "reconocer qué decisiones producen mejores resultados.",
                textAfterImg: "Gracias a esa experiencia, " +
                "aprende cuándo conviene saltar el charco y cuándo es preferible rodearlo, aumentando " +
                "sus posibilidades de llegar antes a la meta.",
                quiz: {
                    type: "multiple",
                    question: "¿Cómo se define la política de un agente que aprende por refuerzo?",
                    options: [
                        { label: "a) Una guía del comportamiento del agente basado en estados", val: true },
                        { label: "b) Corresponde a la recompensa final obtenida por el agente tras enfrentar varios estados del entorno", val: false },
                        { label: "c) Las reglas definidas del entorno donde se desenvuelve el agente", val: false }
                    ],
                    feedbackCorrecto: "¡Correcto! La política es la estrategia que sigue el agente para decidir qué acción tomar en cada estado.",
                    feedbackIncorrecto: "Incorrecto. La política es una regla que guía el comportamiento del agente según el estado en que se encuentre."
                }
            },
            {
                term: "exploración vs explotación",
                text: "Para ganar y obtener un buen resultado acumulado, el agente debe explotar lo que " +
                "ya sabe que da recompensas altas, pero para descubrir mejores decisiones, debe explorar " +
                "opciones nuevas que aún no ha probado lo suficiente. No es posible hacer ambas al " +
                "mismo tiempo de forma exclusiva, sino que debe encontrar un equilibrio entre ambas.",
                definition: "La exploración consiste en probar acciones no óptimas conocidas para " +
                "mejorar la estimación de la política, mientras que la explotación consiste en " +
                "seleccionar la mejor acción según el conocimiento actual.",
                img: "semitecnico/content/resources/reinforcementlearning_7.jpg",
                imgAlt: "Representación de la exploración vs explotación",
                textBeforeImg: "Para ganar y obtener un buen resultado acumulado, el agente debe explotar lo que " +
                "ya sabe que da recompensas altas, pero para descubrir mejores decisiones, debe explorar " +
                "opciones nuevas que aún no ha probado lo suficiente.",
                textAfterImg: "No es posible hacer ambas al " +
                "mismo tiempo de forma exclusiva, sino que debe encontrar un equilibrio entre ambas.",
                quiz: {
                    type: "truefalse",
                    question: "(Verdadero o Falso) El agente inteligente deja de usar la exploración cuando encuentra una acción que le da un resultado positivo.",
                    options: [
                        { label: "Verdadero", val: false },
                        { label: "Falso", val: true }
                    ],
                    feedbackCorrecto: "¡Correcto! El agente nunca debe dejar de explorar por completo, ya que podría existir una acción aún mejor por descubrir.",
                    feedbackIncorrecto: "Incorrecto. El agente debe equilibrar exploración y explotación, ya que explorar nuevas opciones puede llevar a mejores resultados a largo plazo."
                }
            }
        ]
    },
    technical: {
        label: "Aprendizaje Técnico",
        sources: [
            {
                title: "Reinforcement Learning: An Introduction",
                detail: "Libro de Richard Sutton y Andrew Barto que define el aprendizaje por refuerzo " +
                "y sus elementos fundamentales, como el estado, la acción, tasa de aprendizaje, entre " +
                "otros.",
                url: "http://incompleteideas.net/book/RLbook2020.pdf"
            },
            {
                title: "Algorithms for Reinforcement Learning",
                detail: "Libro de Csaba Szpesvári que define y explica algoritmos de aprendizaje " +
                "por refuerzo, como el Q-Learnin, y su aplicación en procesos de decisión de Markov.",
                url: "https://sites.ualberta.ca/~szepesva/papers/RLAlgsInMDPs.pdf"
            },
            {
                title: "Q-learning",
                detail: "Artículo principal sobre el algoritmo Q-Learning, que define la función " +
                "de valor Q(s,a), que asocia una acción con su estado, y modela la recompensa " +
                "obtenida por el agente luego de tomar dicha decisión.",
                url: "https://link.springer.com/article/10.1007/BF00992698"
            }
        ],
        steps: [
            {
                term: "qué es el aprendizaje por refuerzo",
                text: "El aprendizaje por refuerzo se define como un paradigma del aprendizaje " +
                "automático en el que un agente aprende a tomar decisiones a través de la interacción " +
                "constante con un entorno. Mediante un proceso de prueba y error, el agente recibe " +
                "recompensas o penalizaciones que le permiten ajustar y mejorar su comportamiento " +
                "con el objetivo de maximizar una recompensa final acumulada.",
                definition: "El aprendizaje por refuerzo es un paradigma del aprendizaje automático " +
                "en el que un agente aprende a tomar decisiones mediante la interacción con un " +
                "entorno, recibiendo recompensas o penalizaciones que guían su comportamiento hacia " +
                "la maximización de una recompensa acumulada.",
                img: "tecnico/content/resources/aprendizaje_reforzado_portada.jpg",
                imgAlt: "Representación del aprendizaje por refuerzo",
                textBeforeImg: "El aprendizaje por refuerzo se define como un paradigma del " +
                "aprendizaje automático en el que un agente aprende a tomar decisiones a través de " +
                "la interacción constante con un entorno.",
                textAfterImg: "Mediante un proceso de prueba y error, el agente recibe recompensas " +
                "o penalizaciones que le permiten ajustar y mejorar su comportamiento con el " +
                "objetivo de maximizar una recompensa final acumulada.",
                quiz: {
                    type: "multiple",
                    question: "(Selección múltiple) ¿Cuál(es) de los siguientes casos corresponde " +
                    "a un problema de aprendizaje por refuerzo?",
                    options: [
                        { label: "a) Clasificar correos electrónicos como spam o no spam " +
                        "utilizando ejemplos previamente etiquetados", val: false },
                        { label: "b) Desplazarse por un almacén encontrando rutas más eficientes",
                            val: true },
                        { label: "c) Agrupar clientes de acuerdo a sus hábitos de compra sin " +
                        "conocer categorías previas", val: false },
                        { label: "d) Estimar el precio de una nueva vivienda a partir de datos " +
                        "históricos", val: false }
                    ],
                    feedbackCorrecto: "¡Excelente! En este caso, el modelo de aprendizaje por " +
                    "refuerzo obtendrá mejores recompensas si la ruta encontrada es más óptima",
                    feedbackIncorrecto: "No, la clasificación y estimación no corresponden a " +
                    "ejemplos para este tipo de aprendizaje"
                }
            },
            {
                term: "agente",
                text: "El agente corresponde a la entidad responsable de tomar decisiones dentro " +
                "de un entorno. Su propósito es seleccionar las acciones que le permitan maximizar " +
                "la recompensa acumulada a lo largo del tiempo. El agente no dispone de un conjunto " +
                "de respuestas correctas, sino que aprende interactuando, observando los resultados " +
                "de sus acciones y ajustando su comportamiento.",
                definition: "El agente es la entidad responsable de tomar decisiones dentro de un " +
                "entorno. Su propósito es seleccionar acciones que maximicen la recompensa " +
                "acumulada, aprendiendo mediante la interacción y la retroalimentación del entorno.",
                img: "tecnico/content/resources/chatbot-720x420.jpg",
                imgAlt: "Representación del agente en el aprendizaje por refuerzo",
                textBeforeImg: "El agente corresponde a la entidad responsable de tomar decisiones " +
                "dentro de un entorno. Su propósito es seleccionar las acciones que le permitan " +
                "maximizar la recompensa acumulada a lo largo del tiempo.",
                textAfterImg: "El agente no dispone de un conjunto de respuestas correctas, sino " +
                "que aprende interactuando, observando los resultados de sus acciones y ajustando " +
                "su comportamiento en función de las recompensas o penalizaciones recibidas."
            },
            {
                term: "entorno",
                text: "En el aprendizaje por refuerzo, el entorno es el contexto o sistema con el " +
                "que el agente inteligente interactúa. Representa todo aquello que rodea al agente " +
                "y responde a las acciones que este realiza. Cuando se ejecuta una acción, el " +
                "entorno cambia de estado y entrega una recompensa que indica qué tan favorable " +
                "fue la decisión tomada.",
                definition: "El entorno es el contexto o sistema con el que el agente interactúa. " +
                "Responde a las acciones del agente cambiando de estado y entregando recompensas " +
                "que indican qué tan favorable fue cada decisión.",
                img: "tecnico/content/resources/entorno_ia.jpeg",
                imgAlt: "Diagrama del entorno en el aprendizaje por refuerzo",
                textBeforeImg: "En el aprendizaje por refuerzo, el entorno es el contexto o " +
                "sistema con el que el agente inteligente interactúa. Representa todo aquello que " +
                "rodea al agente y responde a las acciones que este realiza.",
                textAfterImg: "Cuando se ejecuta una acción en particular, el entorno cambia de " +
                "estado y entrega una recompensa, positiva o negativa, indicando qué tan favorable " +
                "fue la decisión tomada. Esta interacción permite que el agente pueda aprender una " +
                "estrategia progresivamente para alcanzar su objetivo.",
                quiz: {
                    type: "truefalse",
                    question: "(Verdadero o Falso) El entorno permanece constante tras una acción " +
                    "efectuada por el agente",
                    options: [
                        { label: "Verdadero", val: false },
                        { label: "Falso", val: true }
                    ],
                    feedbackCorrecto: "¡Correcto! El entorno cambia constantemente como respuesta " +
                    "a las acciones del agente, generando nuevos estados y recompensas.",
                    feedbackIncorrecto: "Incorrecto. El entorno no permanece constante, ya que " +
                    "cada acción del agente modifica el estado del entorno."
                }
            },
            {
                term: "estado",
                text: "Un estado representa la situación actual del entorno en un momento " +
                "determinado. Contiene la información necesaria para que el agente inteligente " +
                "pueda comprender el contexto en el que se encuentra y seleccionar la acción más " +
                "adecuada. Cada vez que el agente ejecuta una acción, el entorno puede cambiar, " +
                "generando un nuevo estado.",
                definition: "Un estado representa la situación actual del entorno en un momento " +
                "determinado. Contiene la información necesaria para que el agente comprenda el " +
                "contexto y seleccione la acción más adecuada.",
                img: "tecnico/content/resources/estados_ia.png",
                imgAlt: "Representación del estado en el aprendizaje por refuerzo",
                textBeforeImg: "Un estado representa la situación actual del entorno en un momento " +
                "determinado. Contiene la información necesaria para que el agente inteligente " +
                "pueda comprender el contexto en el que se encuentra y seleccionar la acción más " +
                "adecuada.",
                textAfterImg: "Cada vez que el agente ejecuta una acción, el entorno puede " +
                "cambiar, generando un nuevo estado que servirá como punto de partida para la " +
                "siguiente decisión."
            },
            {
                term: "acción",
                text: "La acción corresponde a una decisión que el agente inteligente toma al " +
                "encontrarse en un estado determinado del entorno. Cada acción ejecutada produce " +
                "una respuesta del entorno, la cual puede modificar la situación actual, generar " +
                "un nuevo estado y otorgar una recompensa o penalización.",
                definition: "Una acción es una decisión que el agente toma al encontrarse en un " +
                "estado determinado. Cada acción produce una respuesta del entorno, modificando " +
                "la situación y generando una recompensa.",
                img: "tecnico/content/resources/acciones_ia.png",
                imgAlt: "Representación de las acciones del agente",
                textBeforeImg: "La acción corresponde a una decisión que el agente inteligente " +
                "toma al encontrarse en un estado determinado del entorno. Cada acción ejecutada " +
                "produce una respuesta del entorno, la cual puede modificar la situación actual, " +
                "generar un nuevo estado y otorgar una recompensa o penalización en función del " +
                "resultado obtenido.",
                textAfterImg: "Resumidamente, las acciones son un conjunto de alternativas " +
                "disponibles para que el agente interactúe con el entorno y avance hacia el " +
                "cumplimiento de su objetivo, y varían dependiendo del problema que se quiera " +
                "resolver."
            },
            {
                term: "recompensa",
                text: "La recompensa es una señal de retroalimentación que el entorno proporciona " +
                "al agente luego de ejecutar una acción. Esta señal indica qué tan favorable o " +
                "desfavorable fue la decisión tomada con respecto al objetivo del problema. Las " +
                "recompensas permiten que el agente evalúe las consecuencias de sus acciones.",
                definition: "La recompensa es una señal de retroalimentación que el entorno " +
                "proporciona al agente luego de ejecutar una acción, indicando qué tan favorable " +
                "o desfavorable fue la decisión con respecto al objetivo del problema.",
                img: "tecnico/content/resources/reward.jpg",
                imgAlt: "Representación de la recompensa en el aprendizaje por refuerzo",
                textBeforeImg: "La recompensa es una señal de retroalimentación que el entorno " +
                "proporciona al agente luego de ejecutar una acción. Esta señal indica qué tan " +
                "favorable o desfavorable fue la decisión tomada con respecto al objetivo del " +
                "problema a resolver.",
                textAfterImg: "Las recompensas permiten que el agente evalúe las consecuencias " +
                "de sus acciones y aprenda cuáles producen mejores resultados. Generalmente, una " +
                "recompensa positiva incentiva la repetición de un comportamiento, mientras que " +
                "una recompensa negativa o penalización desincentiva aquellas acciones que alejan " +
                "al agente de su objetivo.",
                quiz: {
                    type: "multiple",
                    question: "(Selección múltiple) ¿Cuál es la función principal de la " +
                    "recompensa en el aprendizaje por refuerzo?",
                    options: [
                        { label: "a) Determinar la estructura de la red neuronal", val: false },
                        { label: "b) Reemplazar la política de decisión", val: false },
                        { label: "c) Indicar al agente qué tan favorable fue el resultado " +
                        "de una acción", val: true },
                        { label: "d) Eliminar la necesidad de explorar el entorno", val: false }
                    ],
                    feedbackCorrecto: "¡Muy bien! La recompensa indica al agente la eficiencia " +
                    "de la acción realizada, permitiéndole aprender cuáles decisiones producen " +
                    "mejores resultados",
                    feedbackIncorrecto: "No. Revisa el concepto de recompensa en el aprendizaje " +
                    "por refuerzo e inténtalo nuevamente."
                }
            },
            {
                term: "cómo aprende un agente",
                text: "El aprendizaje por refuerzo se basa en la interacción continua entre el " +
                "agente y el entorno. En cada interacción, el agente observa el estado actual, " +
                "selecciona una acción y recibe una recompensa como retroalimentación. A partir " +
                "de esta experiencia, ajusta progresivamente su comportamiento para mejorar sus " +
                "decisiones futuras. Para ello, emplea algoritmos como Q-Learning, que le " +
                "permiten estimar qué acciones son más convenientes en cada estado.",
                definition: "El aprendizaje por refuerzo se basa en la interacción continua " +
                "entre agente y entorno. El agente observa, actúa y recibe retroalimentación, " +
                "ajustando su comportamiento mediante algoritmos como Q-Learning para mejorar " +
                "sus decisiones futuras.",
                img: "tecnico/content/resources/grafica_rl.png",
                imgAlt: "Diagrama del proceso de aprendizaje por refuerzo",
                textBeforeImg: "El aprendizaje por refuerzo se basa en la interacción continua " +
                "entre el agente y el entorno. En cada interacción, el agente observa el estado " +
                "actual, selecciona una acción y recibe una recompensa como retroalimentación.",
                textAfterImg: "A partir de esta experiencia, ajusta progresivamente su " +
                "comportamiento para mejorar sus decisiones futuras. Para ello, emplea algoritmos " +
                "como Q-Learning, que le permiten estimar qué acciones son más convenientes en " +
                "cada estado. Durante este proceso, el agente debe equilibrar la exploración de " +
                "nuevas alternativas con la explotación de aquellas que han demostrado obtener " +
                "mejores resultados."
            },
            {
                term: "exploración vs explotación",
                text: "Durante el proceso de aprendizaje, el agente debe decidir constantemente " +
                "entre explorar nuevas acciones o explotar el conocimiento que ha adquirido " +
                "previamente. La exploración consiste en probar acciones que el agente aún no " +
                "conoce completamente, con el objetivo de obtener nueva información. Por otro " +
                "lado, la explotación consiste en seleccionar la acción que ofrece la mayor " +
                "recompensa esperada según la experiencia acumulada.",
                definition: "La exploración consiste en probar acciones nuevas para obtener " +
                "información sobre el entorno, mientras que la explotación consiste en " +
                "seleccionar la acción con mayor recompensa esperada según el conocimiento " +
                "adquirido. El equilibrio entre ambas se conoce como el dilema " +
                "exploración-explotación.",
                img: "tecnico/content/resources/decisions.jpg",
                imgAlt: "Representación del dilema exploración vs explotación",
                textBeforeImg: "Durante el proceso de aprendizaje, el agente debe decidir " +
                "constantemente entre explorar nuevas acciones o explotar el conocimiento que " +
                "ha adquirido previamente. Este equilibrio se conoce como el dilema " +
                "exploración-explotación y constituye uno de los principales desafíos del " +
                "aprendizaje por refuerzo.",
                textAfterImg: "La exploración consiste en probar acciones que el agente aún no " +
                "conoce completamente, con el objetivo de obtener nueva información sobre el " +
                "entorno y descubrir estrategias potencialmente más beneficiosas. Por otro lado, " +
                "la explotación consiste en seleccionar la acción que, según la experiencia " +
                "acumulada, ofrece la mayor recompensa esperada.",
                quiz: {
                    type: "multiple",
                    question: "Un agente decide probar una acción que nunca ha realizado antes, " +
                    "aunque existe otra acción que normalmente le entrega una recompensa alta. " +
                    "¿Qué estrategia está aplicando el agente?",
                    options: [
                        { label: "Explotación", val: false },
                        { label: "Exploración", val: true }
                    ],
                    feedbackCorrecto: "¡Maravilloso! El agente está probando una acción nueva " +
                    "para obtener información adicional sobre el entorno, en lugar de elegir " +
                    "únicamente la opción conocida con mejor recompensa",
                    feedbackIncorrecto: "No. Recuerda que explorar implica probar nuevas acciones " +
                    "para aprender más sobre el entorno, mientras que explotar implica elegir " +
                    "acciones conocidas que ya entregan buenos resultados"
                }
            },
            {
                term: "q-learning",
                text: "Q-Learning es un algoritmo de aprendizaje por refuerzo que permite a un " +
                "agente aprender qué acciones son más convenientes en cada estado del entorno. " +
                "Para ello, utiliza una función de valor Q(s,a), que estima la recompensa " +
                "acumulada esperada al ejecutar una acción determinada, permitiendo que el " +
                "agente seleccione aquellas acciones con mayor valor aprendido.",
                definition: "Q-Learning es un algoritmo de aprendizaje por refuerzo que utiliza " +
                "una función de valor Q(s,a) para estimar la recompensa acumulada esperada al " +
                "ejecutar una acción en un estado, permitiendo al agente seleccionar las " +
                "acciones más convenientes.",
                img: "tecnico/content/resources/formula_qlearning.jpg",
                imgAlt: "Fórmula del algoritmo Q-Learning",
                textBeforeImg: "Q-Learning es un algoritmo de aprendizaje por refuerzo que " +
                "permite a un agente aprender qué acciones son más convenientes en cada estado " +
                "del entorno. Para ello, utiliza una función de valor Q(s,a), que estima la " +
                "recompensa acumulada esperada al ejecutar una acción determinada, permitiendo " +
                "que el agente seleccione aquellas acciones con mayor valor aprendido.",
                textAfterImg: "El valor Q se actualiza mediante la experiencia obtenida durante " +
                "la interacción con el entorno. Donde α representa la tasa de aprendizaje, r la " +
                "recompensa obtenida después de ejecutar la acción, γ el factor de descuento de " +
                "recompensas futuras y max Q(s',a') el mayor valor estimado para las acciones " +
                "disponibles en el siguiente estado."
            },
            {
                term: "q-table",
                text: "El Q-Learning utiliza una estructura denominada Q-Table para almacenar " +
                "los valores asociados a cada combinación de estado y acción. Cada celda " +
                "representa el valor Q(s,a), que indica qué tan conveniente es ejecutar una " +
                "determinada acción cuando el agente se encuentra en un estado específico. " +
                "Durante el aprendizaje, el agente actualiza estos valores mediante la " +
                "experiencia obtenida del entorno.",
                definition: "La Q-Table es una estructura que almacena los valores Q(s,a) para " +
                "cada combinación de estado y acción. Durante el aprendizaje, el agente " +
                "actualiza estos valores mediante la experiencia, permitiendo identificar qué " +
                "acciones ofrecen mejores recompensas esperadas.",
                img: "tecnico/content/resources/qtable.jpg",
                imgAlt: "Representación de una Q-Table",
                textBeforeImg: "El Q-Learning utiliza una estructura denominada Q-Table para " +
                "almacenar los valores asociados a cada combinación de estado y acción. Cada " +
                "celda representa el valor Q(s,a), que indica qué tan conveniente es ejecutar " +
                "una determinada acción cuando el agente se encuentra en un estado específico.",
                textAfterImg: "Durante el aprendizaje, el agente actualiza estos valores " +
                "mediante la experiencia obtenida del entorno. Con el tiempo, la tabla Q permite " +
                "identificar qué acciones ofrecen mejores recompensas esperadas, ayudando al " +
                "agente a construir una estrategia de decisión eficiente.",
                quiz: [
                    {
                        type: "multiple",
                        question: "(Selección múltiple) ¿Cuál es el propósito principal de una " +
                        "Q-Table en el aprendizaje por refuerzo?",
                        options: [
                            { label: "a) Almacenar los valores estimados de recompensa para pares " +
                            "estado-acción", val: true },
                            { label: "b) Registrar las acciones que el agente no ha realizado",
                                val: false },
                            { label: "c) Eliminar la necesidad de interacción entre el agente y " +
                            "el entorno", val: false },
                            { label: "d) Controlar directamente la velocidad de aprendizaje del " +
                            "agente", val: false }
                        ],
                        feedbackCorrecto: "¡Muy bien! La tabla Q almacena los valores estimados de " +
                        "recompensa para cada par estado-acción para que el agente pueda seleccionar " +
                        "aquellas que le otorguen mejores recompensas",
                        feedbackIncorrecto: "No. Recuerda que la función principal de la tabla es " +
                        "guardar la información aprendida sobre los valores de las acciones en " +
                        "distintos estados para apoyar la toma de decisiones del agente"
                    },
                    {
                        type: "multiple",
                        question: "(Selección múltiple) En la fórmula del Q-Learning, ¿qué " +
                        "representa el valor Q(s,a)?",
                        options: [
                            { label: "a) La recompensa inmediata obtenida por una acción sin " +
                            "considerar el futuro", val: false },
                            { label: "b) El número de veces que una acción ha sido seleccionada " +
                            "por el agente", val: false },
                            { label: "c) La cantidad de estados existentes dentro del entorno",
                                val: false },
                            { label: "d) La recompensa acumulada esperada al realizar una acción " +
                            "determinada en un estado específico", val: true }
                        ],
                        feedbackCorrecto: "¡Asombroso! El valor Q(s,a) representa la recompensa " +
                        "acumulada esperada al ejecutar una acción en un estado determinado",
                        feedbackIncorrecto: "No. Debes recordar que el valor estima el beneficio " +
                        "esperado de realizar una acción en un estado en particular"
                    }
                ]
            }
        ]
    },
    practice: {
        label: "Vista Práctica",
        sources: [
            {
                title: "OpenAI Spinning Up: Key Papers",
                detail: "Colección curada de papers clave para profundizar en RL y RL profundo.",
                url: "https://spinningup.openai.com/en/latest/spinningup/keypapers.html"
            },
            {
                title: "Deep Reinforcement Learning: An Overview",
                detail: "Revisión útil para conectar fundamentos con aplicaciones y casos prácticos.",
                url: "https://arxiv.org/abs/1701.07274"
            },
            {
                title: "Human-level control through deep reinforcement learning",
                detail: "Ejemplo clásico de cómo un agente aprende políticas efectivas desde experiencia.",
                url: "https://www.nature.com/articles/nature14236"
            }
        ],
        steps: [
            {
                term: "caso sospechoso",
                text: "Caso inicial: el sistema observa tráfico sospechoso. No parece completamente normal, pero tampoco hay evidencia suficiente para bloquear de inmediato.",
                definition: "Un caso sospechoso es una situación intermedia donde conviene reducir incertidumbre antes de actuar con fuerza."
            },
            {
                term: "investigar",
                text: "La acción recomendada es Investigar. Es una decisión prudente: evita bloquear tráfico legítimo y permite reunir más señales.",
                definition: "Investigar significa pedir más evidencia antes de permitir o bloquear."
            },
            {
                term: "resultado",
                text: "Si la investigación confirma una amenaza, bloquear después tendrá mejor fundamento. Si no confirma nada grave, se reduce el riesgo de falso positivo.",
                definition: "El resultado es la consecuencia observada luego de ejecutar una acción."
            },
            {
                term: "lección",
                text: "La idea práctica es esta: un buen agente no solo bloquea mucho. Aprende cuándo permitir, cuándo mirar con cuidado y cuándo detener una amenaza.",
                definition: "La lección es el criterio que el agente debería reforzar para decidir mejor en el futuro."
            }
        ]
    }
};

const consoleText = document.getElementById("console-text");
const consoleMode = document.getElementById("console-mode");
const consoleProgress = document.getElementById("console-progress");
const consoleActions = document.getElementById("console-actions");
const sourcesList = document.getElementById("sources-list");
const sourcesCount = document.getElementById("sources-count");
const optionButtons = document.querySelectorAll(".learn-option");

const velocidadImpresion = 22; /* Velocidad de impresión de la lección */
let modoAprendizajeActual = null; /* Semi-técnico o Técnico */
let stepActual = 0; /* Tópico que se muestra en el contenedor */
let timeoutEscritura = null; /* Imprime texto caracter por caracter */
let escribiendo = false; /* Indica si se está escribiendo la lección */
let definicionMostrada = false; /* Se muestra la definición del término o no */
let quizActualIndex = 0; /* Índice del quiz actual cuando hay múltiples quizzes en un paso */
let quizReintentarDesde = null; /* Índice desde el cual reintentar el quiz tras fallar */

/* Obtiene la ruta de aprendizaje (semi-técnico o técnico) */
function obtenerRuta() {
    return rutasAprendizaje[modoAprendizajeActual];
}

/* Obtiene y muestra el siguiente paso del aprendizaje */
function obtenerStep() {
    return obtenerRuta().steps[stepActual];
}

/* Borra lo escrito en el contenedor para cargar el próximo step */
function limpiarEscritura() {
    if (timeoutEscritura) {
        clearTimeout(timeoutEscritura);
        timeoutEscritura = null;
    }

    escribiendo = false;
}

/* Cambia el botón seleccionado en la pantalla */
function botonActivo(botonSeleccionado) {
    optionButtons.forEach((boton) => {
        boton.classList.toggle("active", boton === botonSeleccionado);
    });
}

function bloquearModoAprendizaje(botonSeleccionado) {
    optionButtons.forEach((boton) => {
        if (boton !== botonSeleccionado) {
            boton.disabled = true;
        }
    });
    const undoContainer = document.getElementById("undo-container");
    if (undoContainer) undoContainer.classList.remove("hidden");
}

function desbloquearModoAprendizaje() {
    habilitarOpciones();
    const undoContainer = document.getElementById("undo-container");
    if (undoContainer) undoContainer.classList.add("hidden");
}

/* Habilita todos los botones de opción */
function habilitarOpciones() {
    optionButtons.forEach((boton) => {
        boton.disabled = false;
    });
}

/* Actualiza el contenedor del panel de aprendizaje */
function actualizarConsola() {
    const ruta = obtenerRuta();
    const paso = obtenerStep();
    consoleMode.textContent = paso.term.charAt(0).toUpperCase() + paso.term.slice(1);
    consoleProgress.textContent = `${stepActual + 1}/${ruta.steps.length}`;
}
 
/* Cambia la fuente de la impresión de la lección */
function actualizarFuentes() {
    const refsContent = document.getElementById("console-refs-content");
    if (!refsContent) return;
    const ruta = obtenerRuta();
    refsContent.innerHTML = ruta.sources.map((source) => `
        <a class="source-item" href="${source.url}" target="_blank" rel="noopener noreferrer">
            <span>${source.title}</span>
            <p>${source.detail}</p>
            <small>Leer artículo <i class="fa-solid fa-arrow-up-right-from-square"></i></small>
        </a>
    `).join("");
}

/* Crea los botones con íconos para la interfaz gráfica */
function crearBotonDeAccion(label, accion, icon) {
    const button = document.createElement("button");
    button.className = "console-action";
    button.dataset.action = accion;
    button.innerHTML = `<i class="fa-solid ${icon}"></i>${label}`;
    return button;
}

/* Muestra los botones que se despliegan en cada paso de la lección */
function renderizarAcciones() {
    const ruta = obtenerRuta();
    const step = obtenerStep();
    consoleActions.innerHTML = "";

    if (stepActual > 0) {
        consoleActions.appendChild(crearBotonDeAccion("Anterior", "previous", "fa-arrow-left"));
    }

    if (!definicionMostrada) {
        consoleActions.appendChild(crearBotonDeAccion(`¿Qué es ${step.term}?`, "definition", 
            "fa-circle-question"));
    }

    if (stepActual < ruta.steps.length - 1) {
        consoleActions.appendChild(crearBotonDeAccion("Continuemos", "next", "fa-arrow-right"));
    } else {
        consoleActions.appendChild(crearBotonDeAccion("Finalizar curso", "complete", "fa-check"));
    }
}

/* Imprime el contenido de la lección en el contenedor o consola */
function escribirTexto(text, onComplete) {
    limpiarEscritura();
    consoleText.textContent = "";
    consoleActions.innerHTML = "";
    escribiendo = true;

    let index = 0;

    /* Imprime la siguiente letra de la oración */
    function escribirProximoCaracter() {
        consoleText.textContent = text.slice(0, index);
        index++;

        if (index <= text.length) {
            timeoutEscritura = setTimeout(escribirProximoCaracter, velocidadImpresion);
            return;
        }

        limpiarEscritura();
        onComplete();
    }

    escribirProximoCaracter();
}

/* Muestra la definición de los conceptos presentados en la lección */
function mostrarDefinicion() {
    quizActualIndex = 0;
    quizReintentarDesde = null;
    const step = obtenerStep();
    definicionMostrada = true;
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());
    escribirTexto(`Definición: ${step.definition}`, renderizarAcciones);
}

/* Muestra el mensaje de finalización del curso */
function mostrarMensajeCompletado() {
    quizActualIndex = 0;
    quizReintentarDesde = null;
    limpiarEscritura();
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());

    consoleText.textContent = "¡Felicidades, ya sabes cómo funciona el aprendizaje por refuerzo! Ahora puedes reforzar tu conocimiento usando el juego de simulación o mediante un caso práctico.";
    consoleActions.innerHTML = "";
    consoleMode.textContent = "¡Completado!";
    consoleProgress.textContent = "✅";

    desbloquearModoAprendizaje();
    habilitarOpciones();
}

/* Alterna el estilo de aprendizaje de semi-técnico a técnico y viceversa */
function cambiarModoAprendizaje(modo, selectedButton) {
    modoAprendizajeActual = modo;
    stepActual = 0;
    definicionMostrada = false;
    botonActivo(selectedButton);
    actualizarFuentes();
    renderizarStepActual();
}

/* Escribe texto con imagen insertada entre dos párrafos (solo step 0 de semi) */
function escribirTextoConImagen(paso, onComplete) {
    limpiarEscritura();
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());
    consoleText.textContent = "";
    consoleActions.innerHTML = "";
    escribiendo = true;

    let index = 0;
    let fase = 1;

    function escribirProximoCaracter() {
        if (fase === 1) {
            consoleText.textContent = paso.textBeforeImg.slice(0, index);
            index++;
            if (index <= paso.textBeforeImg.length) {
                timeoutEscritura = setTimeout(escribirProximoCaracter, 7);
                return;
            }
            fase = 2;
            index = 0;

            const flexContainer = document.createElement("div");
            flexContainer.className = "console-img-text-container";

            const imgCard = document.createElement("div");
            imgCard.className = "console-img-card neon-blue";
            imgCard.style.flex = "0 0 auto";
            imgCard.style.maxWidth = "340px";
            imgCard.style.width = "100%";
            imgCard.style.padding = "14px";
            imgCard.style.borderRadius = "10px";
            imgCard.style.background = "rgba(8, 13, 28, 0.92)";
            imgCard.style.textAlign = "center";
            imgCard.style.boxSizing = "border-box";
            imgCard.innerHTML =
                '<img src="' + paso.img + '" alt="' + paso.imgAlt +
                '" style="max-width:100%;max-height:240px;width:auto;height:auto;border-radius:6px;display:inline-block" />';

            const text2El = document.createElement("div");
            text2El.id = "console-text-2";
            text2El.style.flex = "1";
            text2El.style.minWidth = "0";

            flexContainer.appendChild(imgCard);
            flexContainer.appendChild(text2El);
            consoleText.insertAdjacentElement("afterend", flexContainer);

            timeoutEscritura = setTimeout(escribirProximoCaracter, 400);
            return;
        }

        if (fase === 2) {
            const text2El = document.getElementById("console-text-2");
            if (!text2El) return;
            text2El.textContent = paso.textAfterImg.slice(0, index);
            index++;
            if (index <= paso.textAfterImg.length) {
                timeoutEscritura = setTimeout(escribirProximoCaracter, 7);
                return;
            }
            escribiendo = false;
            onComplete();
        }
    }

    escribirProximoCaracter();
}

/* Muestra botón "Probar conocimientos" */
function mostrarBotonProbarConocimientos() {
    consoleActions.innerHTML = "";
    const btn = document.createElement("button");
    btn.textContent = "Probar conocimientos";
    btn.className = "console-action";
    btn.type = "button";
    btn.dataset.action = "quiz-agente";
    btn.style.fontWeight = "bold";
    btn.style.background = "#22c55e";
    btn.style.color = "#050816";
    btn.style.margin = "18px 0";
    consoleActions.appendChild(btn);
}

/* Cuestionario integrado - Lee la pregunta del step actual */
function mostrarCuestionarioAgente() {
    document.querySelectorAll(".console-img-card, #console-text-2").forEach((el) => el.remove());

    const paso = obtenerStep();
    const quizData = Array.isArray(paso.quiz) ? paso.quiz[quizActualIndex] : paso.quiz;
    if (!quizData) return;

    consoleText.textContent = quizData.question;
    consoleActions.innerHTML = "";

    quizData.options.forEach((op) => {
        const btn = document.createElement("button");
        btn.textContent = op.label;
        btn.className = "console-action";
        btn.type = "button";
        btn.style.minWidth = "200px";
        btn.style.fontWeight = "bold";
        btn.style.marginRight = "12px";
        btn.style.marginBottom = "8px";
        btn.style.textAlign = "left";
        btn.onclick = function () {
            mostrarResultadoQuiz(op.val, quizData.feedbackCorrecto, quizData.feedbackIncorrecto);
        };
        consoleActions.appendChild(btn);
    });
}

function mostrarResultadoQuiz(acierto, fbCorrecto, fbIncorrecto) {
    consoleActions.innerHTML = "";

    const feedback = document.createElement("p");
    feedback.style.fontSize = "1rem";
    feedback.style.fontWeight = "bold";
    feedback.style.margin = "10px 0";
    feedback.innerHTML = acierto
        ? "✔️ " + fbCorrecto
        : "❌ " + fbIncorrecto;
    consoleActions.appendChild(feedback);

    if (acierto) {
        const paso = obtenerStep();
        const hayMasQuizzes = Array.isArray(paso.quiz) && quizActualIndex < paso.quiz.length - 1;

        if (!hayMasQuizzes) {
            quizReintentarDesde = null;
        }

        if (hayMasQuizzes) {
            const btn = document.createElement("button");
            btn.textContent = "Siguiente pregunta";
            btn.className = "console-action";
            btn.type = "button";
            btn.dataset.action = "next-quiz";
            btn.style.fontWeight = "bold";
            btn.style.background = "#22c55e";
            btn.style.color = "#050816";
            consoleActions.appendChild(btn);
        } else {
            const btn = document.createElement("button");
            btn.textContent = "Siguiente";
            btn.className = "console-action";
            btn.type = "button";
            btn.dataset.action = "next";
            btn.style.fontWeight = "bold";
            btn.style.background = "#22c55e";
            btn.style.color = "#050816";
            consoleActions.appendChild(btn);
        }
    } else {
        quizReintentarDesde = quizActualIndex;
        const btn = document.createElement("button");
        btn.textContent = "Ver lección otra vez";
        btn.className = "console-action";
        btn.type = "button";
        btn.dataset.action = "retry-lesson";
        btn.style.fontWeight = "bold";
        btn.style.background = "#facc15";
        btn.style.color = "#050816";
        consoleActions.appendChild(btn);
    }
}

/* Muestra la pantalla de carga y redirige a la simulación */
function irASimulacion() {
    const loadingView = document.getElementById('loading');
    const fact = document.getElementById('fact');

    if (fact && typeof obtenerCuriosidadRandom === 'function') {
        fact.textContent = obtenerCuriosidadRandom();
    }

    document.querySelectorAll(".view").forEach((vista) => {
        vista.classList.remove("active");
        vista.classList.add("hidden");
    });

    if (loadingView) {
        loadingView.classList.remove("hidden");
        loadingView.classList.add("active");
    }

    setTimeout(() => {
        window.location.href = "/jugando/";
    }, 700);
}

/* Muestra la lección completa al instante (sin typewriter) */
function mostrarLeccionCompletaInstantanea() {
    quizActualIndex = 0;
    const paso = obtenerStep();

    limpiarEscritura();
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());

    consoleText.textContent = paso.textBeforeImg;
    consoleActions.innerHTML = "";

    const flexContainer = document.createElement("div");
    flexContainer.className = "console-img-text-container";

    const imgCard = document.createElement("div");
    imgCard.className = "console-img-card neon-blue";
    imgCard.style.flex = "0 0 auto";
    imgCard.style.maxWidth = "340px";
    imgCard.style.width = "100%";
    imgCard.style.padding = "14px";
    imgCard.style.borderRadius = "10px";
    imgCard.style.background = "rgba(8, 13, 28, 0.92)";
    imgCard.style.textAlign = "center";
    imgCard.style.boxSizing = "border-box";
    imgCard.innerHTML =
        '<img src="' + paso.img + '" alt="' + paso.imgAlt +
        '" style="max-width:100%;max-height:240px;width:auto;height:auto;border-radius:6px;display:inline-block" />';

    const text2El = document.createElement("div");
    text2El.id = "console-text-2";
    text2El.textContent = paso.textAfterImg;
    text2El.style.flex = "1";
    text2El.style.minWidth = "0";

    flexContainer.appendChild(imgCard);
    flexContainer.appendChild(text2El);
    consoleText.insertAdjacentElement("afterend", flexContainer);

    mostrarBotonProbarConocimientos();
}

/* Renderiza el step actual con soporte para imagen en cualquier step */
function renderizarStepActual() {
    quizActualIndex = 0;
    quizReintentarDesde = null;
    definicionMostrada = false;
    actualizarConsola();

    const paso = obtenerStep();

    if (paso.img) {
        const onComplete = paso.quiz ? mostrarBotonProbarConocimientos : renderizarAcciones;
        escribirTextoConImagen(paso, onComplete);
        return;
    }

    escribirTexto(paso.text, renderizarAcciones);
}

consoleActions.addEventListener("click", (event) => {
    const botonDeAccion = event.target.closest(".console-action");

    if (!botonDeAccion || escribiendo) {
        return;
    }

    const accion = botonDeAccion.dataset.action;

    if (accion === "quiz-agente") {
        quizActualIndex = quizReintentarDesde !== null ? quizReintentarDesde : 0;
        mostrarCuestionarioAgente();
        return;
    }

    if (accion === "next-quiz") {
        quizActualIndex++;
        mostrarCuestionarioAgente();
        return;
    }

    if (accion === "retry-lesson") {
        mostrarLeccionCompletaInstantanea();
        return;
    }

    if (accion === "previous" && stepActual > 0) {
        stepActual--;
        renderizarStepActual();
    }

    if (accion === "next") {
        if (stepActual < obtenerRuta().steps.length - 1) {
            stepActual++;
            renderizarStepActual();
        } else {
            mostrarMensajeCompletado();
            return;
        }
    }

    if (accion === "definition") {
        mostrarDefinicion();
    }

    if (accion === "simulation") {
        irASimulacion();
    }

    if (accion === "complete") {
        mostrarMensajeCompletado();
    }
});

function irASimulacion() {
    if (typeof mostrarLoadingYRedirigir === "function") {
        mostrarLoadingYRedirigir("/jugando/");
    } else {
        window.location.href = "/jugando/";
    }
}

window.addEventListener("pageshow", () => {
    const loadingView = document.getElementById("loading");
    if (loadingView) {
        loadingView.classList.remove("active");
        loadingView.classList.add("hidden");
    }
});

optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.dataset.action === "simulation") {
            irASimulacion();
            return;
        }

        if (button.dataset.mode === "practice") {
            if (typeof mostrarLoadingYRedirigir === "function") {
                mostrarLoadingYRedirigir("/vista-practica/");
            } else {
                window.location.href = "/vista-practica/";
            }
            return;
        }

        if (button.dataset.mode === "semi" || button.dataset.mode === "technical") {
            bloquearModoAprendizaje(button);
        }

        cambiarModoAprendizaje(button.dataset.mode, button);
    });
});

document.addEventListener("click", (event) => {
    const btn = event.target.closest("#btn-deshacer-modo");
    if (!btn) return;
    desbloquearModoAprendizaje();
    stepActual = 0;
    modoAprendizajeActual = null;
    definicionMostrada = false;
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2")
        .forEach((el) => el.remove());
    consoleText.textContent = "Escoge tu tipo de aprendizaje antes de comenzar";
    consoleActions.innerHTML = "";
    consoleMode.textContent = "Sin ruta seleccionada";
    consoleProgress.textContent = "0/0";
    optionButtons.forEach((boton) => {
        boton.classList.remove("active");
    });
    document.querySelectorAll(".source-item").forEach((el) => el.remove());
    const refsContent = document.getElementById("console-refs-content");
    if (refsContent) {
        refsContent.innerHTML = "<p>Las fuentes aparecerán cuando selecciones un tipo de aprendizaje.</p>";
    }
});