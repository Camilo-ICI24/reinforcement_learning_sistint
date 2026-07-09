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
                title: "Human-level control through deep reinforcement learning",
                detail: "Artículo de Nature donde DeepMind presenta DQN para aprender desde píxeles " +
                "en Atari.",
                url: "https://www.nature.com/articles/nature14236"
            },
            {
                title: "Playing Atari with Deep Reinforcement Learning",
                detail: "Trabajo original en arXiv sobre Deep Q-Networks aplicado a juegos Atari.",
                url: "https://arxiv.org/abs/1312.5602"
            },
            {
                title: "Continuous control with deep reinforcement learning",
                detail: "Artículo sobre DDPG, actor-critic y control continuo con RL profundo.",
                url: "https://arxiv.org/abs/1509.02971"
            }
        ],
        steps: [
            {
                term: "agente",
                text: "El agente selecciona acciones siguiendo una política definida. En el " +
                "Q-learning, dicha política se induce a partir de una Q-table que estima el valor " +
                "esperado de cada par estado-acción.",
                definition: "En el aprendizaje por refuerzo, el agente es el componente que interactúa " +
                "con el entorno mediante la observación de estados, la selección de acciones y la " +
                "actualización de su política a partir de recompensas obtenidas."
            },
            {
                term: "entorno",
                text: "El entorno recibe la acción tomada por el agente, transita a un nuevo estado y " +
                "devuelve una recompensa. Es el componente que define la dinámica del problema de " +
                "aprendizaje, definiendo la manera en la que evolucionan los estados y la " +
                "retroalimentación que el agente recibe tras cada acción realizada.",
                definition: "El entorno es el sistema que define la dinámica del proceso de decisión " +
                "en el aprendizaje por refuerzo, especificado mediante un conjunto de estados, una " +
                "función de transición y una de recompensa. En cada interacción, el entorno recibe " +
                "una decisión tomada por el agente y retorna una nueva observación del estado y " +
                "una recompensa."
            },
            {
                term: "estado",
                text: "Los estados son valores discretos: 0 puede representar 'OK', 1 'Sospechoso' y " +
                "2 'Peligroso'. Esta discretización permite construir una tabla de valores Q por " +
                "cada combinación estado-acción obtenida.",
                definition: "Un estado es una representación formal del entorno en un momento " +
                "determinado, utilizada por el agente para tomar decisiones."
            },
            {
                term: "acción",
                text: "Las acciones también corresponden a valores discretas: 0 puede representar "+
                "'Permitir', 1 'Investigar' y 2 'Bloquear'. La tabla de valores Q almacena " +
                "estimaciones del retorno esperado para cada par estado-acción guardados.",
                definition: "Una acción es una decisión seleccionada por el agente que afecta " +
                "la transición del entorno y la recompensa obtenida."
            },
            {
                term: "recompensa",
                text: "La recompensa guía la actualización de la Q-table. El agente actualiza sus " +
                "estimaciones combinando recompensa inmediata y valor futuro descontado mediante " +
                "parámetros como α (tasa de aprendizaje) y γ (factor de descuento).",
                definition: "La recompensa es una señal escalar que cuantifica la utilidad de un " +
                "cambio, utilizado para mejorar la toma de decisiones del agente."
            },
            {
                term: "exploración",
                text: "El parámetro ε controla el balance entre la exploración y explotación. Con " +
                "probabilidad ε el agente explora acciones aleatorias; en caso contrario, selecciona " +
                "la acción con mayor valor Q.",
                definition: "La exploración consiste en probar acciones no óptimas conocidas para " +
                "mejorar la estimación de la política, mientras que la explotación consiste en " +
                "seleccionar la mejor acción según el conocimiento actual."
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

/* Deshabilita todos los botones excepto el seleccionado */
function deshabilitarOpciones(botonSeleccionado) {
    optionButtons.forEach((boton) => {
        if (boton !== botonSeleccionado) {
            boton.disabled = true;
        }
    });
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
    const step = obtenerStep();
    definicionMostrada = true;
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());
    escribirTexto(`Definición: ${step.definition}`, renderizarAcciones);
}

/* Muestra el mensaje de finalización del curso */
function mostrarMensajeCompletado() {
    limpiarEscritura();
    document.querySelectorAll(".console-img-text-container, .console-img-card, #console-text-2").forEach((el) => el.remove());

    consoleText.textContent = "¡Felicidades, ya sabes cómo funciona el aprendizaje por refuerzo! Ahora puedes reforzar tu conocimiento usando el juego de simulación o mediante un caso práctico.";
    consoleActions.innerHTML = "";
    consoleMode.textContent = "¡Completado!";
    consoleProgress.textContent = "✅";

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
    const quiz = paso.quiz;
    if (!quiz) return;

    consoleText.textContent = quiz.question;
    consoleActions.innerHTML = "";

    quiz.options.forEach((op) => {
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
            mostrarResultadoQuiz(op.val, quiz.feedbackCorrecto, quiz.feedbackIncorrecto);
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
        const btn = document.createElement("button");
        btn.textContent = "Siguiente";
        btn.className = "console-action";
        btn.type = "button";
        btn.dataset.action = "next";
        btn.style.fontWeight = "bold";
        btn.style.background = "#22c55e";
        btn.style.color = "#050816";
        consoleActions.appendChild(btn);
    } else {
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

        if (button.dataset.mode === "semi" || button.dataset.mode === "technical") {
            deshabilitarOpciones(button);
        }

        cambiarModoAprendizaje(button.dataset.mode, button);
    });
});