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
