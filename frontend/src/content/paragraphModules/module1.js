export const module1 = [
    {
        id: 'p1',
        title: '1. ¿Qué es un Párrafo en Inglés?',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'Un párrafo es un grupo de oraciones ordenadas que desarrollan una sola idea principal. A diferencia del español, donde tendemos a escribir ideas largas y conectadas (estilo espiral), el inglés prefiere un estilo directo y lineal. Un párrafo estándar en inglés tiene entre 5 y 10 oraciones y se compone estrictamente de tres partes: la Topic Sentence, las Supporting Sentences y la Concluding Sentence.',
        structure: {
            title: 'Las 3 Partes Obligatorias',
            points: [
                'Topic Sentence (Oración Principal): Declara la idea del párrafo.',
                'Supporting Sentences (Oraciones de Apoyo): Dan ejemplos, razones o hechos.',
                'Concluding Sentence (Oración de Cierre): Resume y finaliza la idea.'
            ]
        },
        example: {
            topicSense: 'Learning a new language is highly beneficial for the brain.',
            supportingSentences: [
                'First, it improves memory by forcing the brain to remember new vocabulary and grammar rules.',
                'Second, studying languages enhances problem-solving skills and critical thinking.',
                'In addition, bilingual individuals often have better concentration and can multitask more efficiently.'
            ],
            concludingSense: 'Overall, the mental exercise of acquiring a second language keeps the mind sharp and healthy.',
            translation: 'Aprender un nuevo idioma es muy beneficioso para el cerebro. En primer lugar, mejora la memoria al obligar al cerebro a recordar nuevo vocabulario y reglas gramaticales. En segundo lugar, estudiar idiomas mejora las habilidades de resolución de problemas y el pensamiento crítico. Además, las personas bilingües a menudo tienen mejor concentración y pueden realizar múltiples tareas de manera más eficiente. En general, el ejercicio mental de adquirir un segundo idioma mantiene la mente ágil y saludable.'
        },
        usefulPhrases: [
            'In general... (En general...)',
            'The main reason is... (La razón principal es...)',
            'For instance... (Por ejemplo...)'
        ],
        commonMistakes: [
            {
                wrong: 'Poner múltiples ideas principales en un párrafo (Ej: Hablar sobre el cerebro y luego sobre el clima)',
                correct: 'Una sola idea central por párrafo',
                explanation: 'En inglés, si cambias de idea principal, debes empezar un nuevo párrafo.'
            },
            {
                wrong: 'Párrafos de 1 o 2 oraciones gigantescas',
                correct: 'Párrafos de 5 a 10 oraciones cortas y claras',
                explanation: 'Las oraciones con muchas comas o conectores son difíciles de leer.'
            }
        ],
        exercise: {
            question: '¿Cuántas ideas principales debe tener un párrafo en inglés?',
            options: ['Tantas como sean posibles mientras estén relacionadas.', 'Una sola idea principal.', 'Al menos tres ideas principales.'],
            correctAnswer: 1,
            explanation: 'El principio de "Unity" dicta que cada párrafo debe enfocarse en una sola idea principal.'
        }
    },
    {
        id: 'p2',
        title: '2. Topic Sentence (Oración Principal)',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'La Topic Sentence es la oración más importante de tu párrafo (usualmente la primera). Indica al lector exactamente de qué vas a hablar. Debe ser lo suficientemente específica para ser desarrollada en un párrafo, pero no tan específica que no deje nada más por decir. Si es demasiado general (ej. "Los perros son buenos"), no tendrás dirección.',
        structure: {
            title: 'Fórmula de Topic Sentence',
            points: [
                'Topic (El Tema) + Controlling Idea (La idea central que aportarás sobre ese tema)'
            ]
        },
        example: {
            topicSense: 'Living in a big city has several major advantages for young professionals.',
            supportingSentences: [
                'To begin with, urban areas offer a wide variety of job opportunities across different industries.',
                'Furthermore, cities provide excellent networking events and professional meetups.',
                'Lastly, public transportation makes it easy to commute to work without needing a car.'
            ],
            concludingSense: 'For these reasons, a metropolitan environment is ideal for career growth.',
            translation: 'Vivir en una gran ciudad tiene varias ventajas importantes para los jóvenes profesionales. Para empezar, las áreas urbanas ofrecen una amplia variedad de oportunidades laborales en diferentes industrias. Además, las ciudades ofrecen excelentes eventos de networking y reuniones profesionales. Por último, el transporte público facilita el trayecto al trabajo sin necesidad de tener un auto. Por estas razones, un entorno metropolitano es ideal para el crecimiento profesional.'
        },
        usefulPhrases: [
            'There are several reasons why... (Hay varias razones por las cuales...)',
            'The most important factor is... (El factor más importante es...)',
            '...has three main benefits. (...tiene tres beneficios principales.)'
        ],
        commonMistakes: [
            {
                wrong: 'Smartphones are popular.',
                correct: 'Smartphones have changed how we communicate in three significant ways.',
                explanation: 'La original es demasiado general. La versión corregida da un "Controlling Idea" (han cambiado cómo comunicamos en 3 formas).'
            },
            {
                wrong: 'I have a dog and he is brown.',
                correct: 'My dog is the perfect companion for outdoor activities.',
                explanation: 'Decir que es café es un hecho muerto, no hay nada que explicar. "Perfect companion" da lugar a dar ejemplos en el párrafo.'
            }
        ],
        exercise: {
            question: '¿Cuál de las siguientes es una buena Topic Sentence?',
            options: ['New York is a city in the United States.', 'I am going to write about the benefits of exercise.', 'Regular exercise improves physical health in various ways.'],
            correctAnswer: 2,
            explanation: 'La opción 3 tiene un tema y una idea controladora clara. La 1 es un simple hecho, y la 2 "anuncia" en lugar de declarar.'
        }
    },
    {
        id: 'p3',
        title: '3. Supporting Sentences (Oraciones de Apoyo)',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'Las Supporting Sentences son el "cuerpo" del párrafo. Su trabajo es probar, explicar o desarrollar la Topic Sentence. Puedes apoyar tu idea usando diferentes técnicas: Facts (hechos), Examples (ejemplos), Reasons (razones), Statistics (estadísticas) o Anecdotes (anécdotas breves). Es CRUCIAL que todas las oraciones de apoyo sean relevantes, cualquier oración que no apoye directamente la idea principal debe borrarse.',
        structure: {
            title: 'Tipos de Oraciones de Apoyo',
            points: [
                'Razones explican por qué la Topic Sentence es cierta.',
                'Detalles y Ejemplos visualizan el concepto.',
                'Hechos/Estadísticas dan sustento objetivo.'
            ]
        },
        example: {
            topicSense: 'Regular exercise is essential for maintaining strong mental health.',
            supportingSentences: [
                'For example, physical activity releases endorphins, which act as natural mood lifters.',
                'Studies show that people who work out three times a week experience less anxiety.',
                'Moreover, focusing on a sport helps distract the mind from stressful daily problems.'
            ],
            concludingSense: 'Therefore, staying active is just as important for the mind as it is for the body.',
            translation: 'El ejercicio regular es esencial para mantener una salud mental fuerte. Por ejemplo, la actividad física libera endorfinas, que actúan como elevadores naturales del ánimo. Los estudios demuestran que las personas que hacen ejercicio tres veces a la semana experimentan menos ansiedad. Además, concentrarse en un deporte ayuda a distraer la mente de los estresantes problemas diarios. Por lo tanto, mantenerse activo es tan importante para la mente como para el cuerpo.'
        },
        usefulPhrases: [
            'For example, ... (Por ejemplo...)',
            'This is because... (Esto se debe a que...)',
            'According to a recent study... (Según un estudio reciente...)'
        ],
        commonMistakes: [
            {
                wrong: 'Incluir detalles fuera de tema: "...Exercise is great. I also like watching TV... "',
                correct: 'Mantenerse estrictamente en el tema: "...Exercise is great. It helps lower blood pressure..."',
                explanation: 'Añadir información no relacionada (ver TV) arruina la unidad del párrafo.'
            }
        ],
        exercise: {
            question: 'Si tu Topic Sentence es "Los gatos son mascotas excelentes para departamentos", ¿qué Supporting Sentence es irrelevante?',
            options: ['Los gatos no necesitan salir a caminar.', 'Los perros a menudo ladran fuerte.', 'Son animales muy independientes y limpios.'],
            correctAnswer: 1,
            explanation: 'Hablar de los perros ladrando no apoya directamente por qué los *gatos* son buenas mascotas en este párrafo específico.'
        }
    },
    {
        id: 'p4',
        title: '4. Concluding Sentence (Oración de Cierre)',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'La Concluding Sentence marca el final de tu párrafo. Su función es recordar al lector la idea principal, pero sin repetir la Topic Sentence palabra por palabra. Se puede hacer resumiendo los puntos principales, ofreciendo una sugerencia (call to action), o dando una opinión final. NUNCA introduzcas información nueva en la última oración.',
        structure: {
            title: 'Formas de cerrar un párrafo',
            points: [
                'Restate: Reafirma la idea principal con otras palabras.',
                'Summary: Resume brevemente las oraciones de apoyo.',
                'Call to action: Ofrece una sugerencia final o predicción.'
            ]
        },
        example: {
            topicSense: 'Drinking enough water every day provides immense health benefits.',
            supportingSentences: [
                'It helps maintain clear skin and flushes toxins from the body.',
                'Additionally, adequate hydration keeps energy levels high and prevents fatigue.',
                'Furthermore, water aids in digestion and prevents headaches.'
            ],
            concludingSense: 'Clearly, staying hydrated is a simple yet vital habit for a healthy lifestyle.',
            translation: 'Beber suficiente agua todos los días proporciona inmensos beneficios para la salud. Ayuda a mantener la piel clara y elimina las toxinas del cuerpo. Además, una hidratación adecuada mantiene altos los niveles de energía y previene la fatiga. Asimismo, el agua ayuda a la digestión y previene dolores de cabeza. Claramente, mantenerse hidratado es un hábito simple pero vital para un estilo de vida saludable.'
        },
        usefulPhrases: [
            'In conclusion, ... (En conclusión...)',
            'To sum up, ... (Para resumir...)',
            'Clearly, ... (Claramente...)'
        ],
        commonMistakes: [
            {
                wrong: 'Repetir la Topic Sentence: "In conclusion, drinking enough water provides health benefits."',
                correct: 'Usar sinónimos: "Clearly, staying hydrated is a vital habit for a healthy lifestyle."',
                explanation: 'Es de mal gusto repetir la misma oración al principio y al final.'
            },
            {
                wrong: 'Añadir ideas nuevas: "In conclusion, water is healthy and you should also eat apples."',
                correct: 'Cerrar lo ya dicho: "In conclusion, water is healthy completely."',
                explanation: 'Nunca introduzcas nuevos ejemplos en la conclusión.'
            }
        ],
        exercise: {
            question: '¿Cuál de estas opciones NO debe hacerse en una Concluding Sentence?',
            options: ['Resumir la idea principal.', 'Introducir un nuevo ejemplo que olvidaste mencionar arriba.', 'Reafirmar la Topic Sentence con diferentes palabras.'],
            correctAnswer: 1,
            explanation: 'Si introduces nueva información al final, el párrafo queda "abierto" e incompleto.'
        }
    },
    {
        id: 'p5',
        title: '5. Unity y Coherence (Unidad y Coherencia)',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'Un buen párrafo tiene *Unity* (Unidad) y *Coherence* (Coherencia). Unity significa que todas las oraciones discuten un solo tema central (la Topic Sentence). Si hablas de las vacaciones y mencionas tu trabajo actual, rompiste la Unity. Coherence significa que las oraciones fluyen lógicamente de una a otra sin saltos bruscos. Para lograr esto, se usan pronombres, sinónimos y orden lógico.',
        structure: {
            title: 'Cómo lograr flujo (Flow)',
            points: [
                'Orden cronológico: para historias o eventos.',
                'Orden de importancia: del punto más suave al más fuerte.',
                'Usar Reference words (it, they, this idea) para encadenar oraciones.'
            ]
        },
        example: {
            topicSense: 'Gold has been valued by humans for thousands of years due to its unique properties.',
            supportingSentences: [
                'First, this precious metal is extremely durable and does not rust like iron.',
                'Because of its durability, it has been used to make long-lasting jewelry and coins.',
                'Moreover, its bright yellow color creates an aesthetic appeal that is universally admired.'
            ],
            concludingSense: 'Consequently, humanity’s fascination with gold is likely to continue for centuries to come.',
            translation: 'El oro ha sido valorado por los humanos durante miles de años debido a sus propiedades únicas. Primero, este metal precioso es extremadamente duradero y no se oxida como el hierro. Debido a su durabilidad, se ha utilizado para hacer joyas y monedas duraderas. Además, su color amarillo brillante crea un atractivo estético que es universalmente admirado. En consecuencia, es probable que la fascinación de la humanidad por el oro continúe por siglos.'
        },
        usefulPhrases: [
            'This issue... (Este problema...) - usando "this" para referenciar',
            'Such an event... (Tal evento...)',
            'These characteristics... (Estas características...)'
        ],
        commonMistakes: [
            {
                wrong: 'Poner oraciones desconectadas: "Gold is great. I bought a ring. Rings are expensive."',
                correct: 'Encadenar ideas lógicamente con pronombres/sinónimos.',
                explanation: 'Falta de fluidez hace que el párrafo suene como un robot ("choppy sentences").'
            }
        ],
        exercise: {
            question: '¿Qué es Unity en un párrafo?',
            options: ['Que empiece con mayúscula y termine en punto.', 'Que las oraciones estén conectadas lógicamente.', 'Que todas las oraciones traten exclusiva y directamente sobre la Topic Sentence.'],
            correctAnswer: 2,
            explanation: 'Unity se refiere a enfocarse en UN solo tema central sin divagar.'
        }
    },
    {
        id: 'p6',
        title: '6. Transition Words (Palabras de Transición)',
        moduleId: 'm1',
        moduleTitle: 'Módulo 1: Fundamentos del Párrafo',
        moduleColor: 'bg-indigo-600',
        explanation: 'Las Transition Words son los "semáforos" de tu escritura. Le dicen al lector qué dirección va a tomar tu siguiente idea. Existen conectores para diferentes funciones: Añadir información, Contrastar, Mostrar Causa/Efecto o Dar secuencia de tiempo. Usarlas correctamente da a tu párrafo nivel nativo y arregla problemas de coherencia al instante.',
        structure: {
            title: 'Categorías Principales',
            points: [
                'Addition (agregar): furthermore, moreover, additionally.',
                'Contrast (contraste): however, on the other hand, although.',
                'Result (resultado): therefore, consequently, as a result.'
            ]
        },
        example: {
            topicSense: 'Working from home offers significant flexibility for employees.',
            supportingSentences: [
                'For instance, professionals can create their own schedules without strict office hours.',
                'Furthermore, they save time and money by avoiding the daily commute.',
                'However, remote work can sometimes lead to feelings of isolation and loneliness.'
            ],
            concludingSense: 'Therefore, while telecommuting is highly convenient, it requires conscious effort to maintain social connections.',
            translation: 'Trabajar desde casa ofrece una flexibilidad significativa para los empleados. Por ejemplo, los profesionales pueden crear sus propios horarios sin horas estrictas de oficina. Además, ahorran tiempo y dinero al evitar el viaje diario. Sin embargo, el trabajo remoto a veces puede llevar a sentimientos de aislamiento y soledad. Por lo tanto, aunque el teletrabajo es muy conveniente, requiere un esfuerzo consciente para mantener conexiones sociales.'
        },
        usefulPhrases: [
            'Furthermore, ... (Además...)',
            'On the other hand, ... (Por otro lado...)',
            'Consequently, ... (En consecuencia...)'
        ],
        commonMistakes: [
            {
                wrong: 'Usar siempre "and" o "but": "I like apple and I like banana but I don\'t like grape."',
                correct: 'Variar conectores: "I enjoy apples; furthermore, I love bananas. However, I dislike grapes."',
                explanation: 'El exceso de and/but es el signo principal de un nivel básico de inglés.'
            }
        ],
        exercise: {
            question: 'Si quieres presentar una idea opuesta o contradictoria a la anterior, ¿qué conector usas?',
            options: ['Moreover', 'However', 'Therefore'],
            correctAnswer: 1,
            explanation: 'However significa "sin embargo" y se usa para el contraste.'
        }
    }
];
