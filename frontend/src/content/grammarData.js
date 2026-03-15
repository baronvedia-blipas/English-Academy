export const grammarData = [
    // --- NIVEL BÁSICO ---
    {
        id: "articulos",
        title: "Artículos (a, an, the)",
        level: "Básico",
        explanation: "Los artículos en inglés determinan si nos referimos a algo específico o general. Usamos 'the' para cosas específicas e identificables. Usamos 'a' o 'an' para cosas singulares generales (usamos 'an' cuando la siguiente palabra empieza con sonido vocal).",
        structure: "A/An + Noun (General) | The + Noun (Específico)",
        examples: [
            { en: "I have a car.", es: "Tengo un auto. (Cualquier auto)" },
            { en: "I want an apple.", es: "Quiero una manzana. (Empieza con sonido vocal)" },
            { en: "The car is blue.", es: "El auto es azul. (Ese auto específico)" },
            { en: "She is a teacher.", es: "Ella es profesora." },
            { en: "The sun is hot.", es: "El sol es caliente. (Solo hay un sol)" }
        ],
        commonMistakes: "No uses 'a/an' con palabras plurales (*a cars). No uses 'a' si la palabra empieza con sonido vocal, incluso si es una 'h' muda (es 'an hour', no 'a hour').",
        exercise: {
            type: "multiple",
            question: "Choose the correct article: I bought ___ umbrella yesterday.",
            options: ["a", "an", "the", "no article"],
            correctIndex: 1,
            explanation: "'Umbrella' empieza con un sonido vocal, por lo que usamos 'an'."
        }
    },
    {
        id: "pronombres-personales",
        title: "Pronombres Personales (I, you, he...)",
        level: "Básico",
        explanation: "Los pronombres personales sustituyen al sujeto de la oración para no repetir su nombre. 'It' se usa exclusivamente para referirse a animales solitarios o cosas/objetos.",
        structure: "Sujeto + Verbo + Predicado",
        examples: [
            { en: "I am happy.", es: "Yo estoy feliz." },
            { en: "She likes music.", es: "A ella le gusta la música." },
            { en: "It is a dog.", es: "Es un perro." },
            { en: "We are friends.", es: "Nosotros somos amigos." },
            { en: "They speak English.", es: "Ellos hablan inglés." }
        ],
        commonMistakes: "Olvidar escribir el pronombre. En español podemos decir 'llueve', pero en inglés siempre se necesita el sujeto: 'It rains'.",
        exercise: {
            type: "fill",
            text: "{0} is my brother, John.",
            blanks: ["He"],
            explanation: "John es un hombre (él), así que usamos el pronombre 'He'."
        }
    },
    {
        id: "verbo-to-be",
        title: "Verbo To Be (am, is, are)",
        level: "Básico",
        explanation: "El verbo 'to be' significa 'ser' o 'estar'. Dependiendo de la persona, toma la forma am (I), is (he/she/it), o are (you/we/they). En el pasado usa 'was/were'.",
        structure: "Sujeto + am/is/are + Complemento",
        examples: [
            { en: "I am a student.", es: "Yo soy un estudiante." },
            { en: "She is very tall.", es: "Ella es muy alta." },
            { en: "They are at home.", es: "Ellos están en casa." },
            { en: "I was tired yesterday.", es: "Yo estaba cansado ayer." },
            { en: "We were friends.", es: "Nosotros éramos amigos." }
        ],
        commonMistakes: "Usar 'have' para decir la edad. En inglés se usa el verbo To Be (*I have 20 years* -> I am 20 years old).",
        exercise: {
            type: "multiple",
            question: "My parents ___ in Paris right now.",
            options: ["am", "is", "are", "was"],
            correctIndex: 2,
            explanation: "'My parents' equivale a 'They' (plural), por lo tanto usamos 'are'."
        }
    },
    {
        id: "presente-simple",
        title: "Presente Simple",
        level: "Básico",
        explanation: "Se usa para hablar de rutinas, cosas que son siempre verdad y hábitos. Con He, She, It, agregamos una 's' o 'es' al final del verbo afirmativo.",
        structure: "Sujeto + Verbo(s) | Negativo: Sujeto + don't/doesn't + Verbo",
        examples: [
            { en: "I play tennis every day.", es: "Juego tenis todos los días." },
            { en: "She works in a bank.", es: "Ella trabaja en un banco." },
            { en: "They don't like pizza.", es: "A ellos no les gusta la pizza." },
            { en: "He doesn't speak Japanese.", es: "Él no habla japonés." },
            { en: "Do you like music?", es: "¿Te gusta la música?" }
        ],
        commonMistakes: "Olvidar la 's' final en la tercera persona singular (he/she/it). (*She play* -> She plays).",
        exercise: {
            type: "fill",
            text: "My brother {0} early every morning.",
            blanks: ["wakes up"],
            explanation: "'My brother' (He) requiere que el verbo lleve 's'."
        }
    },

    // --- NIVEL INTERMEDIO ---
    {
        id: "presente-perfecto",
        title: "Presente Perfecto",
        level: "Intermedio",
        explanation: "Se usa para hablar de experiencias en el pasado sin decir CUÁNDO sucedieron exactamente, o para acciones que empezaron en el pasado y continúan en el presente.",
        structure: "Subject + have/has + Past Participle",
        examples: [
            { en: "I have visited Tokyo.", es: "He visitado Tokio." },
            { en: "She has lived here for 10 years.", es: "Ella ha vivido aquí por 10 años." },
            { en: "We haven't finished yet.", es: "No hemos terminado todavía." },
            { en: "Have you ever eaten sushi?", es: "¿Alguna vez has comido sushi?" },
            { en: "He has already left.", es: "Él ya se ha ido." }
        ],
        commonMistakes: "Confundir el Past Simple con el Present Perfect. Si mencionas el tiempo exacto (yesterday, 2010), DEBES usar Past Simple. (*I have seen him yesterday* -> I saw him yesterday).",
        exercise: {
            type: "multiple",
            question: "I ___ to London three times.",
            options: ["went", "have been", "go", "has been"],
            correctIndex: 1,
            explanation: "Para hablar de experiencias de vida sin fechas exactas usamos Have/Has + Participio."
        }
    },
    {
        id: "primer-condicional",
        title: "First Conditional",
        level: "Intermedio",
        explanation: "Se utiliza para hablar de situaciones futuras reales o muy probables si se cumple una condición presente.",
        structure: "If + Present Simple, ... will + infinitive",
        examples: [
            { en: "If it rains, I will stay home.", es: "Si llueve, me quedaré en casa." },
            { en: "If she studies, she will pass.", es: "Si ella estudia, aprobará." },
            { en: "I will call you if I have time.", es: "Te llamaré si tengo tiempo." },
            { en: "If we don't hurry, we will miss the train.", es: "Si no nos apuramos, perderemos el tren." },
            { en: "What will you do if they arrive late?", es: "¿Qué harás si ellos llegan tarde?" }
        ],
        commonMistakes: "Usar 'will' en la cláusula 'if'. (*If it will rain...* -> If it rains).",
        exercise: {
            type: "fill",
            text: "If I find your keys, I {0} give them back to you.",
            blanks: ["will"],
            explanation: "Es el resultado futuro de una condición presente."
        }
    },
    {
        id: "voz-pasiva",
        title: "Voz Pasiva (Passive Voice)",
        level: "Intermedio",
        explanation: "Usamos la voz pasiva cuando la acción (o su receptor) es más importante que la persona o cosa que realizó la acción.",
        structure: "Object + Verb to be + Past Participle (+ by subject)",
        examples: [
            { en: "The house was built in 1990.", es: "La casa fue construida en 1990." },
            { en: "My car was stolen.", es: "Mi auto fue robado." },
            { en: "English is spoken all over the world.", es: "El inglés se habla en todo el mundo." },
            { en: "The book will be published next year.", es: "El libro será publicado el próximo año." },
            { en: "These cars are made in Japan.", es: "Estos autos son fabricados en Japón." }
        ],
        commonMistakes: "Olvidar el verbo 'to be', que indica el tiempo verbal de la voz pasiva.",
        exercise: {
            type: "multiple",
            question: "The Mona Lisa ___ painted by Leonardo da Vinci.",
            options: ["is", "was", "has", "paint"],
            correctIndex: 1,
            explanation: "Como ocurrió en el pasado simple, necesitamos el verbo To Be en pasado: 'was'."
        }
    },

    // --- NIVEL AVANZADO ---
    {
        id: "tercer-condicional",
        title: "Third Conditional",
        level: "Avanzado",
        explanation: "Se usa para hablar de situaciones imposibles en el pasado que nunca ocurrieron, usualmente para expresar arrepentimiento.",
        structure: "If + past perfect, ... would have + past participle",
        examples: [
            { en: "If I had studied, I would have passed.", es: "Si hubiera estudiado, habría aprobado." },
            { en: "If we had left earlier, we wouldn't have missed the flight.", es: "Si nos hubiéramos ido antes, no habríamos perdido el vuelo." },
            { en: "She would have been happy if you had called her.", es: "Ella habría estado feliz si la hubieras llamado." },
            { en: "If he hadn't driven so fast, he wouldn't have crashed.", es: "Si no hubiera conducido tan rápido, no habría chocado." },
            { en: "I wouldn't have known if you hadn't told me.", es: "Yo no lo habría sabido si no me lo hubieras dicho." }
        ],
        commonMistakes: "Mezclar los tiempos. Poner 'would have' en la parte del 'If'. (*If I would have studied...* -> If I had studied...).",
        exercise: {
            type: "fill",
            text: "If I {0} known about the party, I would have gone.",
            blanks: ["had"],
            explanation: "En tercer condicional, la condición va en Past Perfect (had + participio)."
        }
    },
    {
        id: "inversion",
        title: "Inversion for Emphasis",
        level: "Avanzado",
        explanation: "Es un recurso literario y formal muy avanzado. Cuando comenzamos una frase con una adverbial negativa (Never, Rarely, Seldom, Little), los sujetos y auxiliares cambian de lugar (como en una pregunta).",
        structure: "Negative Adverb + Auxiliary Verb + Subject + Main Verb",
        examples: [
            { en: "Never have I seen such a beautiful sunset.", es: "Nunca he visto una puesta de sol tan hermosa." },
            { en: "Rarely does he listen to me.", es: "Rara vez él me escucha." },
            { en: "Little did they know.", es: "Poco sabían ellos." },
            { en: "Hardly had I arrived when the phone rang.", es: "Apenas había llegado cuando sonó el teléfono." },
            { en: "Not only is he smart, but he is also funny.", es: "No solo es inteligente, sino que también es divertido." }
        ],
        commonMistakes: "Olvidarse de invertir el verbo y usar el orden normal (*Never I have seen* -> Never have I seen).",
        exercise: {
            type: "multiple",
            question: "Not only ___ the exam, but he also got the best grade.",
            options: ["he passed", "did he pass", "he did pass", "passed he"],
            correctIndex: 1,
            explanation: "Cuando 'Not only' va al principio, invertimos como si fuera pregunta: Auxiliar (did) + Sujeto (he) + Verbo base (pass)."
        }
    }
,
{
    id: "presente-continuo",
        title: "Presente Continuo",
            level: "Básico",
                explanation: "Se usa para hablar de acciones que están ocurriendo en este momento exacto, o para planes futuros muy cercanos y confirmados. A diferencia del presente simple (rutinas), el continuo es temporal.",
                    structure: "Sujeto + am/is/are + Verbo(-ing)",
                        examples: [
                            { en: "I am studying right now.", es: "Estoy estudiando justo ahora." },
                            { en: "She is not working today.", es: "Ella no está trabajando hoy." },
                            { en: "Are they playing soccer?", es: "¿Están ellos jugando fútbol?" },
                            { en: "We are traveling to Paris tomorrow.", es: "Nosotros viajaremos a París mañana. (Plan futuro)" },
                            { en: "Look! It is raining.", es: "¡Mira! Está lloviendo." },
                            { en: "He is running in the park.", es: "Él está corriendo en el parque. (Regla de doble consonante)" }
                        ],
                            commonMistakes: "Olvidar el verbo 'to be'. (*I playing soccer* -> I am playing soccer). Usarlo para hábitos permanentes (*I am living in Mexico* cuando quieres decir que siempre vives ahí, debería ser 'I live').",
                                exercise: {
        type: "multiple",
            question: "Listen! The baby ___.",
                options: ["cries", "cry", "is crying", "crying"],
                    correctIndex: 2,
                        explanation: "La palabra 'Listen!' (¡Escucha!) indica que la acción está pasando en el momento, por lo tanto usamos presente continuo."
    }
},
{
    id: "pasado-simple",
        title: "Pasado Simple",
            level: "Básico",
                explanation: "Se usa para acciones que comenzaron y terminaron en el pasado (ya finalizaron). Los verbos regulares terminan en '-ed', pero hay muchos irregulares muy comunes. En negativo y pregunta usamos el auxiliar 'did'.",
                    structure: "Afirmativo: Sujeto + Verbo(-ed/irregular)\nNegativo: Sujeto + didn't + Verbo(base)\nPregunta: Did + Sujeto + Verbo(base)",
                        examples: [
                            { en: "I worked late yesterday.", es: "Trabajé hasta tarde ayer. (Regular)" },
                            { en: "She went to the cinema.", es: "Ella fue al cine. (Irregular: go -> went)" },
                            { en: "We didn't see that movie.", es: "Nosotros no vimos esa película." },
                            { en: "Did you buy the tickets?", es: "¿Compraste los boletos?" },
                            { en: "They studied for the exam.", es: "Ellos estudiaron para el examen." },
                            { en: "He eat a lot -> No, he ate a lot.", es: "Él comió mucho. (Irregular: eat -> ate)" }
                        ],
                            commonMistakes: "Usar el verbo en pasado cuando ya usaste 'didn't' o 'did'. (*Did you went?* -> Did you go?).",
                                exercise: {
        type: "fill",
            text: "{0} you finish your homework last night?",
                blanks: ["Did"],
                    explanation: "Para hacer preguntas en el pasado simple con cualquier verbo (excepto to be) usamos el auxiliar 'Did'."
    }
},
{
    id: "pasado-continuo",
        title: "Pasado Continuo",
            level: "Básico",
                explanation: "Describe una acción que estaba en progreso en un momento específico del pasado. A menudo se interrumpe por una acción más corta en pasado simple (usando when/while).",
                    structure: "Sujeto + was/were + Verbo(-ing)",
                        examples: [
                            { en: "I was sleeping at 10 PM.", es: "Yo estaba durmiendo a las 10 PM." },
                            { en: "They were playing tennis when it started raining.", es: "Ellos estaban jugando tenis cuando empezó a llover." },
                            { en: "While she was reading, the phone rang.", es: "Mientras ella estaba leyendo, el teléfono sonó." },
                            { en: "We weren't paying attention.", es: "Nosotros no estábamos prestando atención." },
                            { en: "What were you doing yesterday?", es: "¿Qué estabas haciendo ayer?" },
                            { en: "The sun was shining.", es: "El sol estaba brillando (Descripción de escenario)." }
                        ],
                            commonMistakes: "Usarlo para acciones terminadas (*I was watching a movie yesterday evening* vs *I watched a movie yesterday evening*). Se emplea más para contexto/fondo.",
                                exercise: {
        type: "multiple",
            question: "While I ___ down the street, I saw an old friend.",
                options: ["walked", "was walking", "walk", "am walking"],
                    correctIndex: 1,
                        explanation: "La acción larga ('walking') fue interrumpida por la corta ('saw'), por eso usamos 'was walking'."
    }
},
{
    id: "futuro-will",
        title: "Futuro con 'Will'",
            level: "Básico",
                explanation: "Se usa 'will' para hacer promesas, predicciones sin evidencia (creencias) o decisiones espontáneas tomadas en el momento de hablar. Su forma negativa es 'won't'.",
                    structure: "Sujeto + will + Verbo(base)",
                        examples: [
                            { en: "I promise I will call you.", es: "Te prometo que te llamaré." },
                            { en: "I think it will rain tomorrow.", es: "Creo que lloverá mañana. (Predicción)" },
                            { en: "I forgot my wallet! I will pay you back.", es: "¡Olvidé mi billetera! Te lo pagaré. (Decisión espontánea)" },
                            { en: "They won't come to the party.", es: "Ellos no vendrán a la fiesta." },
                            { en: "Will you help me, please?", es: "¿Me ayudarás, por favor?" },
                            { en: "She'll be here soon.", es: "Ella estará aquí pronto. (Contracción)" }
                        ],
                            commonMistakes: "Anexar 'to' después del will. (*I will to go* -> I will go).",
                                exercise: {
        type: "multiple",
            question: "A: The phone is ringing. B: I ___ answer it!",
                options: ["answer", "am going to answer", "will answer", "answered"],
                    correctIndex: 2,
                        explanation: "Como es una decisión espontánea que B acaba de tomar en el momento, se usa 'will answer'."
    }
},
{
    id: "futuro-going-to",
        title: "Futuro con 'Going To'",
            level: "Básico",
                explanation: "Se emplea 'going to' para hablar sobre planes e intenciones ya pensadas con anticipación, o para hacer predicciones cuando tienes evidencia visual inmediata (ej. nubes grises).",
                    structure: "Sujeto + am/is/are + going to + Verbo(base)",
                        examples: [
                            { en: "I am going to visit my grandmother this weekend.", es: "Voy a visitar a mi abuela este fin de semana. (Plan)" },
                            { en: "Look at those dark clouds! It is going to rain.", es: "¡Mira esas nubes oscuras! Va a llover. (Evidencia)" },
                            { en: "She isn't going to buy that house.", es: "Ella no va a comprar esa casa." },
                            { en: "Are they going to stay here?", es: "¿Se van a quedar ellos aquí?" },
                            { en: "We are going to start a business.", es: "Vamos a empezar un negocio." },
                            { en: "He's going to study medicine.", es: "Él va a estudiar medicina." }
                        ],
                            commonMistakes: "Olvidar el verbo 'to be' antes del going. (*I going to sleep* -> I am going to sleep).",
                                exercise: {
        type: "fill",
            text: "Look out! That tree {0} to fall!",
                blanks: ["is going"],
                    explanation: "Hay una clara evidencia visual inminente, por eso usamos 'is going to'."
    }
},
{
    id: "adjetivos-pronombres-posesivos",
        title: "Adjetivos y Pronombres Posesivos",
            level: "Básico",
                explanation: "Indican a quién pertenece algo. Los ADJETIVOS posesivos (my, your, his, her, its, our, their) van ANTES del sustantivo. Los PRONOMBRES posesivos (mine, yours, his, hers, ours, theirs) REEMPLAZAN al sustantivo.",
                    structure: "Adjetivo + Sustantivo (My book) | Pronombre Posesivo (The book is mine)",
                        examples: [
                            { en: "This is my car. (Adjetivo)", es: "Este es mi auto." },
                            { en: "This car is mine. (Pronombre)", es: "Este auto es mío." },
                            { en: "Is that your pen?", es: "¿Ese es tu bolígrafo?" },
                            { en: "No, it is hers.", es: "No, es de ella." },
                            { en: "Their house is huge.", es: "Su casa (de ellos) es enorme." },
                            { en: "The dog wagged its tail.", es: "El perro movió su cola." }
                        ],
                            commonMistakes: "Confundir 'its' (posesivo) con 'it's' (it is / it has). Además, los pronombres posesivos jamás se usan con apóstrofe S (*hers'* o *theirs'* es incorrecto).",
                                exercise: {
        type: "multiple",
            question: "I forgot my jacket. Can I borrow ___?",
                options: ["your", "yours", "you", "my"],
                    correctIndex: 1,
                        explanation: "Reemplazamos 'your jacket' con el pronombre posesivo 'yours'."
    }
},
{
    id: "plural-sustantivos",
        title: "Plural de Sustantivos",
            level: "Básico",
                explanation: "Generalmente añadimos '-s'. Si termina en ch, x, s, sh, z, agregamos '-es'. Si termina en consonante + 'y', cambiamos la 'y' por 'ies'. Además, existen varios sustantivos completamente irregulares.",
                    structure: "Singular -> Plural (car -> cars, box -> boxes, city -> cities)",
                        examples: [
                            { en: "One cat, two cats.", es: "Un gato, dos gatos." },
                            { en: "One class, two classes.", es: "Una clase, dos clases." },
                            { en: "One baby, two babies.", es: "Un bebé, dos bebés." },
                            { en: "One knife, two knives.", es: "Un cuchillo, dos cuchillos. (f -> ves)" },
                            { en: "One man, two men. (Irregular)", es: "Un hombre, dos hombres." },
                            { en: "One child, two children.", es: "Un niño, dos niños." }
                        ],
                            commonMistakes: "Escribir mal los irregulares más comunes. (*womens* -> women, *childs* -> children, *persons* -> people).",
                                exercise: {
        type: "fill",
            text: "There are three {0} standing. (woman)",
                blanks: ["women"],
                    explanation: "El plural irregular de 'woman' es 'women'."
    }
},
{
    id: "preposiciones-tiempo-lugar",
        title: "Preposiciones de Tiempo y Lugar (IN, ON, AT)",
            level: "Básico",
                explanation: "AT = lugares u horas muy específicas (at 8am, at the door). ON = días, fechas, o superficies (on Monday, on the table). IN = meses, años, ciudades, o espacios cerrados (in June, in Paris, in the box).",
                    structure: "IN (General / Grande) -> ON (Más específico / Superficie) -> AT (Muy específico / Punto exacto)",
                        examples: [
                            { en: "I wake up at 7:00 AM.", es: "Me despierto a las 7:00 AM. (Hora exacta)" },
                            { en: "She is at the bus stop.", es: "Ella está en la parada de autobús. (Punto específico)" },
                            { en: "My birthday is on July 24th.", es: "Mi cumpleaños es el 24 de Julio. (Fecha específica)" },
                            { en: "The book is on the desk.", es: "El libro está sobre el escritorio. (Superficie)" },
                            { en: "We live in Colombia.", es: "Vivimos en Colombia. (País)" },
                            { en: "It gets cold in winter.", es: "Hace frío en invierno. (Estación)" }
                        ],
                            commonMistakes: "Decir 'in Monday' (*on Monday*), o 'at the morning' (*in the morning*).",
                                exercise: {
        type: "multiple",
            question: "Let's meet ___ Friday ___ 6 PM.",
                options: ["in / at", "on / at", "at / on", "in / in"],
                    correctIndex: 1,
                        explanation: "Usamos ON para días de la semana y AT para horas exactas."
    }
},
{
    id: "there-is-are",
        title: "There is / There are",
            level: "Básico",
                explanation: "'There is' y 'There are' significan 'HAY'. Usamos 'There is' para singular o sustantivos incontables, y 'There are' para plural. En pasado, son 'There was' y 'There were'.",
                    structure: "There is + singular | There are + plural | (+ any/some/a/an)",
                        examples: [
                            { en: "There is an apple on the table.", es: "Hay una manzana sobre la mesa." },
                            { en: "There are three cats in the garden.", es: "Hay tres gatos en el jardín." },
                            { en: "There isn't any milk left.", es: "No queda nada de leche. (Incontable)" },
                            { en: "Are there any questions?", es: "¿Hay alguna pregunta?" },
                            { en: "There was a party yesterday.", es: "Hubo una fiesta ayer." },
                            { en: "There were many people.", es: "Había mucha gente." }
                        ],
                            commonMistakes: "No confundir el pronombre 'They are' (Ellos son/están) con 'There are' (Hay cosas). (*They are three books on the table* -> There are three books).",
                                exercise: {
        type: "fill",
            text: "{0} you any money in your pocket? -> No, there isn't.",
                blanks: ["Is there"],
                    explanation: "Es una pregunta sobre dinero (money = incontable singular), por lo que se invierte a 'Is there'."
    }
},
{
    id: "can-cant-could",
        title: "Can / Can't / Could",
            level: "Básico",
                explanation: "'Can' indica habilidad o posibilidad en el presente ('poder'). Su pasado es 'Could'. Ambos van seguidos del verbo base SIEMPRE.",
                    structure: "Sujeto + can/could + Verbo(base)",
                        examples: [
                            { en: "I can speak three languages.", es: "Puedo hablar tres idiomas." },
                            { en: "She can't swim very well.", es: "Ella no sabe nadar muy bien." },
                            { en: "Can you help me, please?", es: "¿Puedes ayudarme, por favor?" },
                            { en: "I could run very fast when I was young.", es: "Yo podía correr muy rápido cuando era joven." },
                            { en: "Could you pass the salt?", es: "¿Podrías pasarme la sal? (Formal)" },
                            { en: "It could rain tonight.", es: "Podría llover esta noche. (Posibilidad)" }
                        ],
                            commonMistakes: "Poner 'to' después del can. (*I can to speak English* -> I can speak English). También agregarles 's' a los modales en tercera persona (*He cans swim* -> He can swim).",
                                exercise: {
        type: "multiple",
            question: "When I was five years old, I ___ read.",
                options: ["can", "can't", "could", "couldn't"],
                    correctIndex: 3,
                        explanation: "Al hablar de una falta de habilidad en el pasado (cuando tenía 5 años), usamos el negativo 'couldn't'."
    }
},
{
    id: "adjetivos-adverbios",
        title: "Adjetivos y Adverbios",
            level: "Básico",
                explanation: "Los ADJETIVOS describen cosas/personas (sustantivos). Los ADVERBIOS describen cómo se hace una acción (verbos), y usualmente se forman agregando '-ly' al adjetivo.",
                    structure: "Adjetivo (Slow) -> Adverbio (Slowly)",
                        examples: [
                            { en: "He is a slow driver. (Adjetivo)", es: "Él es un conductor lento." },
                            { en: "He drives slowly. (Adverbio)", es: "Él conduce lentamente." },
                            { en: "She speaks English fluently.", es: "Ella habla inglés fluidamente." },
                            { en: "They played very well. (Irregular de Good)", es: "Ellos jugaron muy bien." },
                            { en: "He runs fast. (Irregular - no es fastly)", es: "Él corre rápido." },
                            { en: "She is a good singer.", es: "Ella es una buena cantante." }
                        ],
                            commonMistakes: "Confundir 'Good' (adjetivo) con 'Well' (adverbio). (*He did the job good* -> He did the job well). Y creer que 'fast' lleva -ly (*fastly* no existe).",
                                exercise: {
        type: "fill",
            text: "Please open the door {0} (quiet).",
                blanks: ["quietly"],
                    explanation: "Como estamos describiendo CÓMO debe abrir la puerta (un verbo), convertimos el adjetivo 'quiet' a adverbio 'quietly'."
    }
},
{
    id: "wh-questions",
        title: "Wh- Questions",
            level: "Básico",
                explanation: "Palabras interrogativas que buscan información específica, no un simple sí o no. What (Qué), Where (Dónde), When (Cuándo), Who (Quién), Why (Por qué), Which (Cuál), How (Cómo).",
                    structure: "Wh- word + Auxiliary + Subject + Verb",
                        examples: [
                            { en: "Where do you live?", es: "¿Dónde vives?" },
                            { en: "Why are you crying?", es: "¿Por qué estás llorando?" },
                            { en: "When did they arrive?", es: "¿Cuándo llegaron?" },
                            { en: "Who is that man?", es: "¿Quién es ese hombre?" },
                            { en: "How often do you go to the gym?", es: "¿Con qué frecuencia vas al gimnasio?" },
                            { en: "What are you looking at?", es: "¿A qué estás mirando? (Preposición al final)" }
                        ],
                            commonMistakes: "En español se pone la preposición antes (Con quién, A dónde). En inglés, a menudo la preposición va al final de la pregunta: *Where are you going to? / Who are you talking with?*.",
                                exercise: {
        type: "multiple",
            question: "___ did you do your homework? -> Because I had free time.",
                options: ["What", "Where", "When", "Why"],
                    correctIndex: 3,
                        explanation: "La respuesta ('Because...') da una razón, por lo que la pregunta debe ser con 'Why' (Por qué)."
    }
},
{
    id: "numeros-fechas-horas",
        title: "Números, Fechas y Horas",
            level: "Básico",
                explanation: "Los números ordinales (1st, 2nd, 3rd) se usan para nombrar los días en fechas. Al decir la hora, usamos 'past' para minutos 1-30 y 'to' para minutos 31-59 en el formato británico tradicional.",
                    structure: "Horas: It's quarter past three (3:15) | Fechas: May 4th (May the fourth)",
                        examples: [
                            { en: "It is half past ten.", es: "Son las diez y media (10:30)." },
                            { en: "It is a quarter to five.", es: "Falta un cuarto para las cinco (4:45)." },
                            { en: "My birthday is on the 3rd of October.", es: "Mi cumpleaños es el 3 de octubre." },
                            { en: "Two thousand and twenty-four. (UK) / Twenty twenty-four. (US)", es: "2024." },
                            { en: "She won 1st (first) place.", es: "Ella ganó el primer lugar." },
                            { en: "I wake up at six o'clock.", es: "Me despierto a las seis en punto." }
                        ],
                            commonMistakes: "Confundir minutos con hora en el formato británico (*It's ten past half* -> It's half past ten). Y olvidar pronunciar 'th' en los ordinales.",
                                exercise: {
        type: "fill",
            text: "It is a quarter {0} nine (8:45).",
                blanks: ["to"],
                    explanation: "Para 8:45, faltan 15 min (un cuarto) 'para' las nueve, usando la palabra 'to'."
    }
},
{
    id: "countable-uncountable",
        title: "Countable vs Uncountable Nouns",
            level: "Básico",
                explanation: "CONTABLES (manzanas, autos): se pueden contar en unidades (1, 2, 3), pueden ser singulares/plurales y usan 'many' o 'a few'. INCONTABLES (agua, información, dinero): se miden en masa, no pueden ponerse en plural ni usar 'a/an', y usan 'much' o 'a little'.",
                    structure: "How many + plural contable? | How much + incontable?",
                        examples: [
                            { en: "I have an apple. (Countable)", es: "Tengo una manzana." },
                            { en: "I need some water. (Uncountable)", es: "Necesito algo de agua." },
                            { en: "How many friends do you have?", es: "¿Cuántos amigos tienes?" },
                            { en: "How much money do cost?", es: "¿Cuánto dinero cuesta?" },
                            { en: "I have a few coins.", es: "Tengo unas pocas monedas." },
                            { en: "There is a little milk left.", es: "Queda muy poca leche." }
                        ],
                            commonMistakes: "Tratar sustantivos como INCONTABLES en inglés que son contables en español. En inglés, palabras como advice (consejos), furniture (muebles), news (noticias) e information (información) NO SE PUEDEN PONER EN PLURAL. (*I have two news*).",
                                exercise: {
        type: "multiple",
            question: "How ___ time do we have left before the movie starts?",
                options: ["much", "many", "little", "few"],
                    correctIndex: 0,
                        explanation: "'Time' (tiempo en general) es incontable, por lo que usamos 'How much'."
    }
}
,
{
    id: "pasado-perfecto",
        title: "Pasado Perfecto",
            level: "Intermedio",
                explanation: "El 'pasado del pasado'. Se usa para mostrar que una acción en el pasado ocurrió *antes* que otra acción del pasado. La acción más antigua va en Pasado Perfecto (had + participio), y la reciente en Pasado Simple.",
                    structure: "Sujeto + had + Past Participle",
                        examples: [
                            { en: "When I arrived, the train had already left.", es: "Cuando llegué, el tren ya se había ido." },
                            { en: "She had finished the test before the bell rang.", es: "Ella había terminado el examen antes de que sonara la campana." },
                            { en: "I didn't want to see the movie because I had seen it.", es: "No quise ver la película porque ya la había visto." },
                            { en: "Had you ever flown before today?", es: "¿Habías volado alguna vez antes de hoy?" },
                            { en: "They failed because they hadn't studied.", es: "Reprobaron porque no habían estudiado." },
                            { en: "By the time we got there, it had stopped raining.", es: "Para cuando llegamos, había dejado de llover." }
                        ],
                            commonMistakes: "Poner ambas oraciones en Pasado Simple confunde el orden de los eventos. El 'had' es como la máquina del tiempo que retrocede aún más.",
                                exercise: {
        type: "multiple",
            question: "I couldn't get in because I ___ my keys.",
                options: ["have lost", "lost", "had lost", "was losing"],
                    correctIndex: 2,
                        explanation: "Primero perdiste las llaves (pasado perfecto: had lost), y por esa causa luego no pudiste entrar (pasado simple)."
    }
},
{
    id: "presente-perfecto-continuo",
        title: "Presente Perfecto Continuo",
            level: "Intermedio",
                explanation: "Se usa para acciones que empezaron en el pasado y continúan SIN INTERRUPCIÓN hasta el presente. Hace mucho énfasis en 'cuánto tiempo' (la duración) ha estado ocurriendo algo.",
                    structure: "Sujeto + have/has + been + Verbo(-ing)",
                        examples: [
                            { en: "I have been waiting for two hours.", es: "He estado esperando por dos horas." },
                            { en: "She has been studying since 8 AM.", es: "Ella ha estado estudiando desde las 8 AM." },
                            { en: "It has been raining all morning.", es: "Ha estado lloviendo toda la mañana." },
                            { en: "How long have you been living here?", es: "¿Cuánto tiempo has estado viviendo aquí?" },
                            { en: "I am tired because I have been working hard.", es: "Estoy cansado porque he estado trabajando duro." },
                            { en: "They haven't been talking to each other.", es: "Ellos no se han estado hablando mutuamente." }
                        ],
                            commonMistakes: "Usar verbs de estado ('know', 'love', 'believe') en forma continua. (*I have been knowing him for years* -> I have known him).",
                                exercise: {
        type: "fill",
            text: "Your eyes are red. {0} you been crying?",
                blanks: ["Have"],
                    explanation: "Estamos preguntando sobre la acción continua que afectó el presente (ojos rojos), estructurando como 'Have you been...'."
    }
},
{
    id: "zero-conditional",
        title: "Zero Conditional",
            level: "Intermedio",
                explanation: "Expresa realidades universales, leyes científicas o cosas que siempre son verdad. No se habla de futuro, todo está en presente asumiendo que el resultado es 100% certero.",
                    structure: "If + Present Simple, ... Present Simple",
                        examples: [
                            { en: "If you heat ice, it melts.", es: "Si calientas hielo, se derrite." },
                            { en: "If people eat too much, they get fat.", es: "Si la gente come demasiado, engordan." },
                            { en: "Plant dies if they don't get enough water.", es: "Una planta muere si no recibe suficiente agua." },
                            { en: "If you mix red and blue, you get purple.", es: "Si mezclas rojo y azul, obtienes morado." },
                            { en: "When the sun goes down, it gets dark.", es: "Cuando el sol se pone, se oscurece. ('When' funciona igual que 'If')." },
                            { en: "If I touch fire, I burn myself.", es: "Si toco el fuego, me quemo." }
                        ],
                            commonMistakes: "Poner 'will' en la oración de resultado para leyes universales. (*If you heat ice, it will melt* -> es gramaticalmente posible pero pierde la fuerza de la ley científica).",
                                exercise: {
        type: "multiple",
            question: "If water reaches 100 degrees Celsius, it ___.",
                options: ["will boil", "is boiling", "boils", "boiled"],
                    correctIndex: 2,
                        explanation: "Al ser un hecho científico inalterable, se emplea presente simple en ambas frases: Zero Conditional."
    }
},
{
    id: "segundo-condicional",
        title: "Second Conditional",
            level: "Intermedio",
                explanation: "Se usa para escenarios hipotéticos, irreales o imaginarios en el presente/futuro. El verbo en el 'If' va en Pasado Simple, pero el significado NO es pasado, es imaginario.",
                    structure: "If + Pasado Simple, ... would + Verbo(infinitive)",
                        examples: [
                            { en: "If I won the lottery, I would buy a mansion.", es: "Si ganara la lotería, compraría una mansión. (Pero no la he ganado)" },
                            { en: "If she knew the answer, she would tell us.", es: "Si ella supiera la respuesta, nos la diría." },
                            { en: "If I were you, I would study more.", es: "Si yo fuera tú, estudiaría más. (Consejo clásico)" },
                            { en: "We would travel more if we had time.", es: "Viajaríamos más si tuviéramos tiempo." },
                            { en: "What would you do if you saw a ghost?", es: "¿Qué harías si vieras un fantasma?" },
                            { en: "If animals could talk, what would they say?", es: "Si los animales pudieran hablar, ¿qué dirían?" }
                        ],
                            commonMistakes: "Romper la regla de oro: después del If va PASADO SIMPLE. Algunos ponen el would ahí. (*If I would win the lottery* -> incorrecto). Otra particularidad es que con 'I', 'He', 'She', se suele usar 'were' en vez de 'was' en estilo formal (If I were you).",
                                exercise: {
        type: "fill",
            text: "If I {0} rich, I would travel the world.",
                blanks: ["were", "was"],
                    explanation: "Para situaciones hipotéticas con el verbo To Be, se prefiere 'were' para todas las personas (aunque 'was' es soportado informalmente)."
    }
},
{
    id: "verbos-modales",
        title: "Verbos Modales Completos",
            level: "Intermedio",
                explanation: "Los modales (Must, Should, Could, Might, Would) alteran la intención del verbo principal. No llevan '-s' en tercera persona y van seguidos de un verbo puro sin el 'to'.",
                    structure: "Modal + Verbo base",
                        examples: [
                            { en: "You must wear a seatbelt. (Obligación obligatoria)", es: "Debes usar cinturón de seguridad." },
                            { en: "You shouldn't eat so much sugar. (Consejo)", es: "No deberías comer tanta azúcar." },
                            { en: "It might rain tomorrow. (Probabilidad baja)", es: "Puede que llueva mañana." },
                            { en: "Could you open the window? (Peticiones corteses)", es: "¿Podrías abrir la ventana?" },
                            { en: "I would like a coffee, please. (Deseo formal)", es: "Me gustaría un café, por favor." },
                            { en: "You mustn't touch that! (Prohibición estricta)", es: "¡No debes tocar eso!" }
                        ],
                            commonMistakes: "El modal siempre va acompañado de un verbo sin alteraciones. Jamás decir (*She musts to go* -> She must go).",
                                exercise: {
        type: "multiple",
            question: "You have a terrible headache. You ___ go to sleep.",
                options: ["mustn't", "should", "would", "might"],
                    correctIndex: 1,
                        explanation: "Se está dando un consejo sobre salud ('deberías ir a dormir'), por lo que 'should' es la opción correcta."
    }
},
{
    id: "reported-speech",
        title: "Reported Speech (Estilo Indirecto)",
            level: "Intermedio",
                explanation: "Se usa para contarle a otra persona lo que alguien más dijo. Al reportarlo, los tiempos verbales suelen dar 'un paso atrás' hacia el pasado (Backshift), y los pronombres cambian lógicamente.",
                    structure: "He said (that) + [Oración con tiempos transformados]",
                        examples: [
                            { en: "Direct: 'I am happy' -> He said he was happy.", es: "Dijo que estaba feliz." },
                            { en: "Direct: 'I will call you' -> She said she would call me.", es: "Ella dijo que me llamaría." },
                            { en: "Direct: 'I bought a car' -> He said he had bought a car.", es: "Él dijo que había comprado un auto." },
                            { en: "She asked if I liked pizza. (Reportando una pregunta)", es: "Me preguntó si me gustaba la pizza." },
                            { en: "They told me to wait. (Reportando una orden)", es: "Me dijeron que esperara." },
                            { en: "He explained that it was impossible.", es: "Él explicó que era imposible." }
                        ],
                            commonMistakes: "Conservar el tiempo presente original en lugar de realizar el 'backshift'.",
                                exercise: {
        type: "fill",
            text: "'I can do it' -> She said that she {0} do it.",
                blanks: ["could"],
                    explanation: "El modal 'can' (presente) retrocede un paso hacia el pasado, convirtiéndose en 'could'."
    }
},
{
    id: "comparativos-superlativos",
        title: "Comparativos y Superlativos",
            level: "Intermedio",
                explanation: "Comparativos comparan 2 cosas (suelen terminar en -er o usar 'more'). Superlativos sobresalen entre 3 o más elementos (terminan en -est o usan 'the most').",
                    structure: "A is bigger than B. | C is the biggest of all.",
                        examples: [
                            { en: "My house is smaller than yours. (Corto)", es: "Mi casa es más pequeña que la tuya." },
                            { en: "This book is more interesting than the movie. (Largo)", es: "Este libro es más interesante que la peli." },
                            { en: "She is the smartest student in the class. (Superlativo)", es: "Es la estudiante más lista de la clase." },
                            { en: "It was the most beautiful song I've ever heard.", es: "Fue la canción más hermosa que he escuchado." },
                            { en: "He is as tall as his father. (Igualdad)", es: "Él es tan alto como su padre." },
                            { en: "Good -> Better -> The Best. (Irregular)", es: "Bueno -> Mejor -> El Mejor." }
                        ],
                            commonMistakes: "Combinar ambas reglas (las palabras cortas no llevan 'more'). (*It is more colder* -> It is colder). Y usar 'that' en vez de 'than' para comparar.",
                                exercise: {
        type: "multiple",
            question: "Mount Everest is ___ mountain in the world.",
                options: ["higher than", "the high", "the highest", "most high"],
                    correctIndex: 2,
                        explanation: "Al comparar una cosa frente a todo el conjunto ('in the world') se requiere el superlativo con 'the'."
    }
},
{
    id: "phrasal-verbs",
        title: "Phrasal Verbs Comunes",
            level: "Intermedio",
                explanation: "Son combinaciones de un Verbo + Preposición/Adverbio que crean un significado completamente distinto. Existen literalmente miles; la clave está en memorizarlos por contexto.",
                    structure: "Verbo normal + Partícula (ej: Give + up = Rendirse)",
                        examples: [
                            { en: "Never give up!", es: "¡Nunca te rindas!" },
                            { en: "Please turn off the lights. (Separable: Turn the lights off)", es: "Por favor, apaga las luces." },
                            { en: "Hold on a minute.", es: "Espera un minuto." },
                            { en: "She is looking forward to the trip.", es: "Ella está ansiosa (esperando con ilusión) el viaje." },
                            { en: "Can you pick me up at 8?", es: "¿Puedes recogerme a las 8? (Separable)" },
                            { en: "My car broke down on the highway.", es: "Mi auto se averió en la autopista." }
                        ],
                            commonMistakes: "Traducirlos literalmente. ('Look up' significa 'buscar en diccionario/internet', no 'mirar arriba'). Separar los phrasal verbs inseparables.",
                                exercise: {
        type: "fill",
            text: "Take {0} your shoes before entering.",
                blanks: ["off"],
                    explanation: "Para decir 'quitarse la ropa/zapatos', la colocación correcta es 'Take off'."
    }
},
{
    id: "conectores",
        title: "Conectores y Conjunciones",
            level: "Intermedio",
                explanation: "Palabras vitales que unen ideas creando un discurso sofisticado. Indican: Contraste (However, Although), Causa/Efecto (Because, Therefore), o Adición (Moreover, In addition).",
                    structure: "Idea A + Conector + Idea B",
                        examples: [
                            { en: "I love pizza. However, I am on a diet.", es: "Amo la pizza. Sin embargo, estoy a dieta." },
                            { en: "Although it was raining, we went out.", es: "Aunque estaba lloviendo, salimos." },
                            { en: "Therefore, the company went bankrupt.", es: "Por lo tanto, la empresa quebró." },
                            { en: "Despites the noise, I fell asleep. (Despite + noun)", es: "A pesar del ruido, me quedé dormido." },
                            { en: "We stayed home due to the bad weather.", es: "Nos quedamos en casa debido al mal clima." },
                            { en: "Furthermore, the results were impressive.", es: "Además, los resultados fueron impresionantes." }
                        ],
                            commonMistakes: "Usar 'Although' en medio de comas (*I love pizza, although, I am on a diet*). Aunque y sin embargo no operan idénticamente a nivel de puntuación.",
                                exercise: {
        type: "multiple",
            question: "___ being very sick, she went to work.",
                options: ["However", "Although", "Despite", "Because"],
                    correctIndex: 2,
                        explanation: "A pesar de... 'Despite' va seguido de un nombre o un verbo en -ing ('being sick')."
    }
},
{
    id: "quantifiers-avanzados",
        title: "Quantifiers Avanzados",
            level: "Intermedio",
                explanation: "Determinan cantidad. Diferencias clave: 'A few/A little' (pocos/poco, visión positiva). 'Few/Little' (muy pocos casi nada, visión negativa).",
                    structure: "Quantifier + Noun",
                        examples: [
                            { en: "I have a few friends in London. (Positivo: tengo algunos)", es: "Tengo unos (pocos) amigos en Londres." },
                            { en: "I have few friends in London. (Negativo: estoy solo)", es: "Tengo muy pocos amigos en Londres." },
                            { en: "Both cars are expensive.", es: "Ambos autos son caros." },
                            { en: "Neither option is good.", es: "Ninguna (de las dos) opciones es buena." },
                            { en: "Every student must pass the exam.", es: "Todos los/Cada estudiante debe pasar el examen." },
                            { en: "All the milk was spilled.", es: "Toda la leche fue derramada." }
                        ],
                            commonMistakes: "Usar 'All' en vez de 'Every' acompañando verbos en plural (*All student are* -> Every student is / All students are).",
                                exercise: {
        type: "fill",
            text: "{0} of the two boys wanted to take out the trash. They both hate it.",
                blanks: ["Neither"],
                    explanation: "Al hablar de dos opciones/personas en un contexto puramente negativo, usamos 'Neither'."
    }
}
,
{
    id: "mixed-conditionals",
        title: "Mixed Conditionals",
            level: "Avanzado",
                explanation: "Crea escenarios extremadamente complejos al mezclar tiempos irreales. Usualmente mezcla algo que ocurrió o no en el PASADO, que está afectando tu situación en el PRESENTE.",
                    structure: "If + Past Perfect (Ayer), ... would + base (Hoy)",
                        examples: [
                            { en: "If I had saved money, I would be rich now.", es: "Si hubiera ahorrado dinero (pasado), sería rico ahora (presente)." },
                            { en: "If she hadn't missed the flight, she would be here.", es: "Si ella no hubiera perdido el vuelo, estaría aquí." },
                            { en: "If I were a trained doctor, I would have saved him.", es: "Si yo fuera un doctor entrenado (soy así siempre), lo habría salvado (en aquel momento pasado)." },
                            { en: "If you had listened to me, you wouldn't be in this mess.", es: "Si me hubieras escuchado, no estarías en este lío." },
                            { en: "If he spoke English, he would have gotten the job.", es: "Si él hablara inglés (presente), habría conseguido el empleo (pasado)." },
                            { en: "If we had won the lottery, we wouldn't work today.", es: "Si hubiéramos ganado la lotería la semana pasada, hoy no trabajaríamos." }
                        ],
                            commonMistakes: "Equivocarse en la concordancia sintáctica al olvidar separar lo que pasó antes vs el impacto actual.",
                                exercise: {
        type: "multiple",
            question: "If I ___ English at school, I would have a better job now.",
                options: ["learned", "had learned", "learn", "have learned"],
                    correctIndex: 1,
                        explanation: "Una causa pasada profunda (had learned) generando una consecuencia que se ve hoy (would have)."
    }
},
{
    id: "wish-if-only",
        title: "Wish / If Only",
            level: "Avanzado",
                explanation: "Formulaciones para expresar lamentos o deseos que algo fuera diferente. 'Wish' seguido de pasado simple = deseo de cambiar algo en el presente. 'Wish' + pasado perfecto = lamento por algo que ya pasó en el pasado.",
                    structure: "I wish / If only + Past Simple / Past Perfect",
                        examples: [
                            { en: "I wish I were taller.", es: "Desearía ser más alto. (Hoy)" },
                            { en: "If only I had studied more.", es: "Ojalá hubiera estudiado más. (Pasado)" },
                            { en: "I wish he would stop talking.", es: "Desearía que él dejara de hablar. (Queja sobre el comportamiento de otro)" },
                            { en: "I wish it didn't rain so much here.", es: "Ojalá no lloviera tanto aquí." },
                            { en: "If only we hadn't eaten that sushi.", es: "Ojalá no hubiésemos comido ese sushi." },
                            { en: "I wish I knew the answer.", es: "Desearía saber la respuesta." }
                        ],
                            commonMistakes: "Para desear que una circunstancia personal futura/presente cambie, la gente suele usar *I wish I will*, lo cual es incorrecto. La gramática requiere el verbo retroceder (I wish I gained...).",
                                exercise: {
        type: "fill",
            text: "I missed the train! I wish I {0} woken up earlier.",
                blanks: ["had"],
                    explanation: "Para lamentarse por un evento pasado, se usa Wish + Past Perfect (had + participio)."
    }
},
{
    id: "causative-verbs",
        title: "Causative Have / Get",
            level: "Avanzado",
                explanation: "Se usa cuando TÚ no realizas la acción por ti mismo, sino que pagas, mandas u organizas para que un profesional (u otra persona) lo haga por ti. También se usa para accidentes desafortunados.",
                    structure: "Sujeto + Have/Get + Objeto + Participio Pasado",
                        examples: [
                            { en: "I had my car fixed.", es: "Me arreglaron el auto. (Pagué para que lo hicieran)" },
                            { en: "She is getting her hair cut tomorrow.", es: "Le van a cortar el pelo mañana." },
                            { en: "We must have the roof repaired.", es: "Debemos mandar a reparar el techo." },
                            { en: "I got my phone stolen yesterday! (Accidente)", es: "¡Me robaron el teléfono ayer!" },
                            { en: "Did you have your dress made for you?", es: "¿Te hicieron el vestido a la medida?" },
                            { en: "He wants to get his nose pierced.", es: "Él quiere hacerse una perforación en la nariz." }
                        ],
                            commonMistakes: "Usar la forma activa (*I cut my hair*). Esto significaría que tú tomaste las tijeras y te rapaste tú solo.",
                                exercise: {
        type: "multiple",
            question: "I took my car to the mechanic because I needed to ___.",
                options: ["fix it", "have fixed my car", "have my car fixed", "repair it"],
                    correctIndex: 2,
                        explanation: "Have + [Object: my car] + [Past Participle: fixed]."
    }
},
{
    id: "modal-perfects",
        title: "Modal Perfects",
            level: "Avanzado",
                explanation: "Son modales + have + participio pasado. 'Should have' se usa para críticas y arrepentimientos por cosas que no se hicieron bien. 'Must have' / 'Can't have' se usan para fuertes deducciones/conclusiones literales de cosas del pasado que no presenciaste.",
                    structure: "Modal + have + Past Participle",
                        examples: [
                            { en: "You should have called me!", es: "¡Deberías haberme llamado! (Crítica)" },
                            { en: "The streets are deeply wet. It must have rained all night.", es: "Las calles están empapadas. Debe haber llovido toda la noche. (Deducción 99%)" },
                            { en: "He couldn't have committed the crime. He was with me.", es: "Él no pudo haber cometido el crimen. (Certeza negativa)" },
                            { en: "Where is my pen? I might have left it at home.", es: "Puede que lo haya dejado en casa." },
                            { en: "We would have helped you.", es: "Te habríamos ayudado." },
                            { en: "They shouldn't have bought that expensive car.", es: "No debieron haber comprado ese auto tan caro." }
                        ],
                            commonMistakes: "Usar 'Modal + had' en el pasado (*You should had called me*). Siempre debe ser 'have' sin importar el sujeto o situación.",
                                exercise: {
        type: "fill",
            text: "He looks very tired. He {0} have slept very badly last night.",
                blanks: ["must"],
                    explanation: "Haciendo una deducción fuerte de una acción pasada (deduces que no durmió) con base en la evidencia presente (se ve cansado)."
    }
},
{
    id: "cleft-sentences",
        title: "Cleft Sentences",
            level: "Avanzado",
                explanation: "Es una técnica para tomar una frase normal y 'dividirla' (cleave) en dos partes dándole máximo énfasis gramatical y entonación a una cosa. Especialmente usadas en contextos persuasivos o argumentativos.",
                    structure: "It is/was + [Lo que quieres enfatizar] + that/who ... | What I [verbo] is ...",
                        examples: [
                            { en: "It was John who broke the window! (No fue Peter).", es: "¡Fue John quien rompió la ventana!" },
                            { en: "What I loved most about the movie was the music.", es: "Lo que más me encantó de la película fue su música." },
                            { en: "It is my mother that I am calling.", es: "Es a mi madre a quien estoy llamando." },
                            { en: "The reason why I am late is the terrible traffic.", es: "La razón por la que llegué tarde es el terrible tráfico." },
                            { en: "It was in Paris where they first met.", es: "Fue en París donde se conocieron por primera vez." },
                            { en: "What we need is more time.", es: "Lo que necesitamos es más tiempo." }
                        ],
                            commonMistakes: "Tratar de hacerlas demasiado retorcidas. Una frase simple 'John ate the cake' se vuelve simplemente 'It was John who ate the cake'.",
                                exercise: {
        type: "multiple",
            question: "___ really annoys me about him is his arrogance.",
                options: ["The thing what", "That which", "What", "It was"],
                    correctIndex: 2,
                        explanation: "Estructura pseudo-cleft comun: 'What' [sujeto+verbo] 'is/was' [enfasis]."
    }
},
{
    id: "discourse-markers",
        title: "Discourse Markers Avanzados",
            level: "Avanzado",
                explanation: "Palabras o frases largas que estructuran, guían y cambian la dirección del texto o discurso en niveles profesionales de Cambridge/IELTS.",
                    structure: "Marker +, + Oración",
                        examples: [
                            { en: "To put it another way, the project is a failure.", es: "Para ponerlo de otro modo, el proyecto es un fracaso." },
                            { en: "All things considered, we had a good time.", es: "Considerando todo, nos la pasamos bien." },
                            { en: "Needless to say, the food was delicious.", es: "No hace falta decir que la comida estaba deliciosa." },
                            { en: "Having said that, I still respect his decision.", es: "Habiendo dicho esto, aún respeto su decisión." },
                            { en: "As far as I'm concerned, it's over.", es: "Por lo que a mí respecta, eso se acabó." },
                            { en: "By and large, it is a safe neighborhood.", es: "En términos generales, es un vecindario seguro." }
                        ],
                            commonMistakes: "Olvidar la coma fuerte visual/oral después del marcador antes de introducir la idea principal.",
                                exercise: {
        type: "fill",
            text: "{0} things considered, it was a successful event despite the rain.",
                blanks: ["All"],
                    explanation: "La expresión fija de conclusión global es 'All things considered'."
    }
},
{
    id: "gerundios-infinitivos",
        title: "Gerundios vs Infinitivos",
            level: "Avanzado",
                explanation: "Cuando aparecen dos verbos juntos en inglés, el último sufre una metamorfosis dependiendo EXCLUSIVAMENTE de quién era el anterior. Algunos lo obligan a llevar 'ing' (gerundio) y otros lo obligan a llevar 'to' (infinitivo).",
                    structure: "Verbo 1 + Verbo 2(ing) | Verbo 1 + to Verbo 2(base)",
                        examples: [
                            { en: "I enjoy reading books. (Enjoy siempre pide -ing).", es: "Disfruto leyendo libros." },
                            { en: "She decided to leave early. (Decide siempre pide to).", es: "Ella decidió irse temprano." },
                            { en: "He avoided answering the question.", es: "Él evitó responder la pregunta." },
                            { en: "I hope to see you soon.", es: "Espero verte pronto." },
                            { en: "I remember locking the door. (Significado pasa por el recuerdo)", es: "Recuerdo haber cerrado la puerta." },
                            { en: "Remember to lock the door! (Significado pasa por la obligación futura)", es: "¡Recuerda cerrar la puerta!" }
                        ],
                            commonMistakes: "Muchos latinos usan el infinitivo siempre por defecto porque el español lo permite. 'Stop to smoke' (Detenerte en la acera para prender un cigarro) vs 'Stop smoking' (Dejar el vicio para siempre).",
                                exercise: {
        type: "multiple",
            question: "I really miss ___ in the countryside.",
                options: ["live", "living", "to live", "to living"],
                    correctIndex: 1,
                        explanation: "Regla inflexible: El verbo 'miss' obliga a su siguiente verbo acompañante a ir en gerundio (-ing)."
    }
},
{
    id: "emphasis-structures",
        title: "Emphasis Structures",
            level: "Avanzado",
                explanation: "Consiste en torcer la gramática normal a propósito para inyectar muchísima fuerza a una afirmación. Puede hacerse con auxiliares (do/does/did) u operando cambios extremos del orden (Inversión frontal).",
                    structure: "I DO love you. | Never have I...",
                        examples: [
                            { en: "We DO know the answer! (Ante alguien que dice que no sabemos)", es: "¡SÍ SÉ la respuesta!" },
                            { en: "He DID try to call you.", es: "Él SÍ intentó llamarte." },
                            { en: "Into the room walked the beast. (Fronting poético).", es: "A la habitación entró la bestia." },
                            { en: "On no account should you press this button.", es: "Bajo ninguna circunstancia deberías presionar este botón." },
                            { en: "What you need is a good sleep.", es: "Lo que tú necesitas es dormir bien." },
                            { en: "I DO apologize.", es: "Realmente pido disculpas." }
                        ],
                            commonMistakes: "Después de usar DO/DOES/DID para enfatizar, debes dejar el siguiente verbo puramente en su forma base. (*He did tried* -> He did try).",
                                exercise: {
        type: "fill",
            text: "No, you are wrong! She {0} like pizza; she eats it every week.",
                blanks: ["does"],
                    explanation: "Para contraargumentar enfatizando de forma categórica que 'Efectivamente' a ELLA sí le gusta la pizza, forzamos usar 'does' afirmativamente antes del verbo."
    }
}
,
{
    id: "verbos-irregulares-tabla",
        title: "Verbos Irregulares — Tabla Completa",
            level: "Secciones Especiales",
                explanation: "Los verbos irregulares no siguen la regla de agregar '-ed' para formar el pasado simple y el participio pasado. Hay que aprenderlos de memoria. Aquí tienes los más esenciales para dominar el idioma.",
                    structure: "Base Form -> Past Simple -> Past Participle",
                        tableData: {
        title: "Top Verbos Irregulares",
            headers: ["Base Form", "Past Simple", "Past Participle", "Traducción"],
                rows: [
                    ["be", "was/were", "been", "ser / estar"],
                    ["become", "became", "become", "convertirse"],
                    ["begin", "began", "begun", "empezar"],
                    ["break", "broke", "broken", "romper"],
                    ["bring", "brought", "brought", "traer"],
                    ["build", "built", "built", "construir"],
                    ["buy", "bought", "bought", "comprar"],
                    ["catch", "caught", "caught", "atrapar"],
                    ["choose", "chose", "chosen", "elegir"],
                    ["come", "came", "come", "venir"],
                    ["cost", "cost", "cost", "costar"],
                    ["do", "did", "done", "hacer"],
                    ["draw", "drew", "drawn", "dibujar"],
                    ["drink", "drank", "drunk", "beber"],
                    ["drive", "drove", "driven", "conducir"],
                    ["eat", "ate", "eaten", "comer"],
                    ["feel", "felt", "felt", "sentir"],
                    ["find", "found", "found", "encontrar"],
                    ["fly", "flew", "flown", "volar"],
                    ["forget", "forgot", "forgotten", "olvidar"],
                    ["get", "got", "got/gotten", "obtener / conseguir"],
                    ["give", "gave", "given", "dar"],
                    ["go", "went", "gone", "ir"],
                    ["have", "had", "had", "tener / haber"],
                    ["hear", "heard", "heard", "escuchar"],
                    ["keep", "kept", "kept", "mantener / guardar"],
                    ["know", "knew", "known", "saber / conocer"],
                    ["leave", "left", "left", "dejar / irse"],
                    ["lose", "lost", "lost", "perder"],
                    ["make", "made", "made", "hacer / fabricar"],
                    ["meet", "met", "met", "conocer / reunirse"],
                    ["pay", "paid", "paid", "pagar"],
                    ["put", "put", "put", "poner"],
                    ["read", "read (red)", "read (red)", "leer"],
                    ["run", "ran", "run", "correr"],
                    ["say", "said", "said", "decir"],
                    ["see", "saw", "seen", "ver"],
                    ["sell", "sold", "sold", "vender"],
                    ["send", "sent", "sent", "enviar"],
                    ["speak", "spoke", "spoken", "hablar"],
                    ["spend", "spent", "spent", "gastar / pasar tiempo"],
                    ["take", "took", "taken", "tomar / llevar"],
                    ["teach", "taught", "taught", "enseñar"],
                    ["tell", "told", "told", "decir / contar"],
                    ["think", "thought", "thought", "pensar"],
                    ["understand", "understood", "understood", "entender"],
                    ["wear", "wore", "worn", "usar (ropa)"],
                    ["win", "won", "won", "ganar"],
                    ["write", "wrote", "written", "escribir"]
                ]
    },
    commonMistakes: "Tratar de agregar '-ed' a estos verbos (*I buyed a car* -> I bought a car). Confundir la pronunciación del verbo 'read' en el que todas sus escrituras son idénticas pero sus pasados suenan como el color rojo (red).",
        exercise: {
        type: "fill",
            text: "I {0} (buy) a new pair of shoes yesterday.",
                blanks: ["bought"],
                    explanation: "Para 'yesterday' se usa Pasado Simple. El pasado simple del verbo irregular 'buy' es 'bought'."
    }
},
{
    id: "false-friends",
        title: "Falsos Amigos (False Friends)",
            level: "Secciones Especiales",
                explanation: "Palabras en inglés que se escriben o suenan muy parecido a una palabra en español, pero que en realidad significan algo completamente distinto.",
                    structure: "Palabra engañosa -> Lo que crees que es -> Lo que realmente es",
                        tableData: {
        title: "Los Falsos Amigos más Peligrosos",
            headers: ["Palabra en Inglés", "Falsa Interpretación", "Significado Real", "Ejemplo"],
                rows: [
                    ["Actually", "Actualmente (Nowadays)", "En realidad / De hecho", "Actually, I don't agree."],
                    ["Embarrassed", "Embarazada (Pregnant)", "Avergonzado", "I felt so embarrassed!"],
                    ["Library", "Librería (Bookshop)", "Biblioteca", "I borrowed books from the library."],
                    ["Sensible", "Sensible (Sensitive)", "Sensato / Razonable", "That is a sensible decision."],
                    ["Sensitive", "Sensato (Sensible)", "Sensible / Delicado", "My teeth are sensitive to cold."],
                    ["Carpet", "Carpeta (Folder)", "Alfombra / Moqueta", "We bought a new red carpet."],
                    ["Realize", "Realizar (Carry out)", "Darse cuenta de", "She realized she lost her keys."],
                    ["Success", "Suceso (Event)", "Éxito", "The business was a great success."],
                    ["Exit", "Éxito (Success)", "Salida", "The emergency exit is here."],
                    ["Fabric", "Fábrica (Factory)", "Tela / Tejido", "This fabric is so soft."],
                    ["Support", "Soportar dolor (Endure)", "Apoyar", "Thanks for your support."],
                    ["Career", "Carrera univ. (Degree)", "Trayectoria profesional", "She has a brilliant career."],
                    ["Parents", "Parientes (Relatives)", "Padres (papá y mamá)", "My parents live in Paris."],
                    ["Rope", "Ropa (Clothes)", "Cuerda", "Tie the boat with this rope."],
                    ["Deception", "Decepción (Disappointment)", "Engaño / Fraude", "His smile was a deception."]
                ]
    },
    commonMistakes: "Producir malentendidos penosos, como decir 'I am embarrassed' a los 8 años de edad creyendo que eso significa estar embarazado/a, en lugar de avergonzado.",
        exercise: {
        type: "multiple",
            question: "I need to go to the ___ to buy some new notebooks and pens.",
                options: ["library", "bookstore", "carpet", "fabric"],
                    correctIndex: 1,
                        explanation: "Library es biblioteca (prestar libros), mientras que bookstore es librería (comprar cosas)."
    }
},
{
    id: "british-vs-american",
        title: "British vs American English",
            level: "Secciones Especiales",
                explanation: "Aunque es el mismo idioma, existen enormes diferencias de vocabulario local (qué palabras usan), ortografía (spelling) y modismos entre Inglaterra y los Estados Unidos.",
                    structure: "Término Británico (UK) vs Término Americano (US)",
                        tableData: {
        title: "Principales Diferencias",
            headers: ["Categoría", "British English (UK)", "American English (US)", "Traducción"],
                rows: [
                    ["Vocabulario", "Flat", "Apartment", "Departamento"],
                    ["Vocabulario", "Lift", "Elevator", "Ascensor"],
                    ["Vocabulario", "Holiday", "Vacation", "Vacaciones"],
                    ["Vocabulario", "Lorry", "Truck", "Camión"],
                    ["Vocabulario", "Boot (car)", "Trunk", "Maletero / Cajuela"],
                    ["Vocabulario", "Chips", "French fries", "Papas fritas"],
                    ["Vocabulario", "Crisps", "Potato chips", "Papas de bolsa"],
                    ["Vocabulario", "Biscuits", "Cookies", "Galletas"],
                    ["Vocabulario", "Pavement", "Sidewalk", "Acera / Banqueta"],
                    ["Vocabulario", "Petrol", "Gas / Gasoline", "Gasolina"],
                    ["Vocabulario", "Queue", "Line", "Fila / Cola"],
                    ["Vocabulario", "Trainers", "Sneakers", "Zapatos deportivos"],
                    ["Vocabulario", "Trousers", "Pants", "Pantalones"],
                    ["Ortografía", "Colour / Flavour", "Color / Flavor", "Color / Sabor (-our vs -or)"],
                    ["Ortografía", "Centre / Theatre", "Center / Theater", "Centro / Teatro (-re vs -er)"],
                    ["Ortografía", "Analyse / Realise", "Analyze / Realize", "Analizar / Darse cuenta (-ise vs -ize)"],
                    ["Ortografía", "Travelled / Cancelling", "Traveled / Canceling", "Viajado / Cancelando (Doble L vs Una L)"],
                    ["Puntuación", "Mr (Sin punto)", "Mr. (Con punto)", "Señor"],
                    ["Fechas", "DD/MM/YYYY (24/12/24)", "MM/DD/YYYY (12/24/24)", "24 de diciembre"]
                ]
    },
    commonMistakes: "Considerar que una forma es 'más correcta' que otra. Ambas son perfectas, pero es altamente recomendable mezclar dialectos en un mismo examen oficial (usar 'colour' y luego 'elevator'). Sé consistente con el estilo que elijas.",
        exercise: {
        type: "multiple",
            question: "Choose the purely American sentence:",
                options: ["I'm going on holiday in my lorry.", "I took the lift to my flat.", "I stood in line to get some fries.", "Have a biscuit in the queue."],
                    correctIndex: 2,
                        explanation: "Line (Queue) y Fries (Chips) son los equivalentes norteamericanos puros."
    }
},
{
    id: "idioms-top",
        title: "Expresiones Idiomáticas (Idioms) Top",
            level: "Secciones Especiales",
                explanation: "Un 'idiom' es una frase cuyo significado no puede deducirse traduciendo las palabras una a una. Son el corazón del inglés nativo e informal; dominarlos te hará sonar 100% natural.",
                    structure: "Idiom -> Significado Oculto -> Ejemplo en Contexto",
                        tableData: {
        title: "Idioms Más Útiles",
            headers: ["Idiom (Expresión)", "Significado Literal", "Significado Real", "Ejemplo"],
                rows: [
                    ["Piece of cake", "Pedazo de pastel", "Muy fácil / Pan comido", "That exam was a piece of cake!"],
                    ["Break a leg", "Rómpete una pierna", "¡Buena suerte!", "You have the audition today! Break a leg!"],
                    ["Under the weather", "Bajo el clima", "Sentirse enfermo", "I'm feeling a bit under the weather."],
                    ["Bite the bullet", "Morder la bala", "Afrontar algo desagradable", "I have to bite the bullet and go to the dentist."],
                    ["Hit the sack", "Golpear el saco", "Irse a dormir", "It's midnight, time to hit the sack."],
                    ["To cost an arm and a leg", "Costar un brazo y una pierna", "Ser carísimo", "This designer bag cost an arm and a leg."],
                    ["To kick the bucket", "Patear la cubeta", "Morir / Estirar la pata", "The old man kicked the bucket."],
                    ["By the skin of your teeth", "Por la piel de tus dientes", "Por los pelos / Apenas", "I passed the test by the skin of my teeth."],
                    ["Spill the beans", "Derramar los frijoles", "Revelar un secreto", "Come on, spill the beans! Who is she?"],
                    ["Let the cat out of the bag", "Dejar salir al gato de la bolsa", "Arruinar una sorpresa", "Tim let the cat out of the bag about the party."],
                    ["Beat around the bush", "Golpear alrededor del arbusto", "Irse por las ramas / Evadir", "Stop beating around the bush and answer me!"],
                    ["To feel blue", "Sentirse azul", "Sentirse triste / Deprimido", "He has been feeling blue all week."]
                ]
    },
    commonMistakes: "Traducir los modismos al pie de la letra. Un hispanohablante podría reaccionar con horror si le dicen 'Break a leg', sin saber que en el teatro significa buena suerte.",
        exercise: {
        type: "fill",
            text: "That was easy! It was a {0} of cake.",
                blanks: ["piece"],
                    explanation: "La expresión clásica para decir que algo fue muy fácil es 'a piece of cake'."
    }
},
{
    id: "puntuacion-ingles",
        title: "Puntuación en Inglés",
            level: "Secciones Especiales",
                explanation: "Las reglas de puntuación difieren drásticamente del español, particularmente con los signos de apertura y el trato de las comas en listas.",
                    structure: "Símbolo -> Uso en Inglés -> Diferencia vs Español",
                        tableData: {
        title: "Reglas de Puntuación Contrastadas",
            headers: ["Signo", "Regla de Oro en Inglés", "Diferencia con el Español", "Ejemplo Correcto"],
                rows: [
                    ["? y !", "Solo existe el signo de cierre, jamás el de apertura.", "En español ¡ y ¿ son obligatorios. En inglés NO existen.", "How are you? / Watch out!"],
                    ["Apóstrofe (')", "Indica propiedad (John's dog) o contracción (it's).", "En español el apóstrofe casi no existe.", "The student's book."],
                    ["Oxford Comma (,)", "Se pone una coma antes de 'and/or' en una lista de 3+ cosas.", "En español es un error garrafal poner coma antes de 'y'.", "I bought apples, bananas, and oranges."],
                    ["Punto (.)", "Los decimales se marcan con punto. Los millares con coma.", "Es totalmente al revés que en países latinos.", "$3,500.50 (Tres mil quinientos)"],
                    ["Mayúsculas", "Días, meses y nacionalidades van siempre en mayúscula.", "En español los días/meses van en minúscula.", "I am French. I fly on Monday, July 1st."],
                    ["Comillas (' vs \")", "Las comillas dobles (\") se usan para citas directas. Las simples (') son raras.", "Uso similar, pero los dialectos británicos difieren.", "She said, \"Hello!\""]
                ]
    },
    commonMistakes: "Poner signo de interrogación al principio (*¿How are you?*). Usar la coma para decimales (*$3,50* -> $3.50).",
        exercise: {
        type: "multiple",
            question: "Which date format has correct English capitalization and punctuation?",
                options: ["I will travel on monday, april 3rd.", "I will travel on Monday, April 3rd.", "¿Will you travel on Monday?", "I will travel on Monday, april 3rd"],
                    correctIndex: 1,
                        explanation: "Tanto días de la semana (Monday) como meses (April) requieren mayúscula inicial obligatoriamente."
    }
}

];
