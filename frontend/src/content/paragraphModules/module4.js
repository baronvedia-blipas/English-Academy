export const module4 = [
    {
        id: 'p26',
        title: '26. Sentence Variety (Variedad de Oraciones)',
        moduleId: 'm4',
        moduleTitle: 'Módulo 4: Técnicas Avanzadas',
        moduleColor: 'bg-purple-600',
        explanation: 'Un párrafo compuesto únicamente por oraciones cortas del mismo tamaño aburre profundamente; suena como un libro de jardín de infantes. El texto avanzado requiere Sentence Variety: debes mezclar fluidamente Simple Sentences (cortas), Compound Sentences (unidas por and/but) y Complex Sentences (condicionales y cláusulas independientes). Altere siempre el ritmo.',
        structure: {
            title: 'Fórmulas para Variar',
            points: [
                'Simple: I like coffee (Corta y directa, excelente para generar tensión o resumen rápido).',
                'Compound: I like coffee, and my brother prefers tea (Dos ideas iguales de peso unidas).',
                'Complex: Although I like coffee, I try not to drink it at night (Una depende de la otra).'
            ]
        },
        example: {
            topicSense: 'Many aspiring writers struggle significantly to finish their first full-length novel.',
            supportingSentences: [
                'They often begin with wild enthusiasm. However, halfway through the story, that initial excitement quietly evaporates into doubt.',
                'Because they lack an outlined plot, these writers find themselves trapped in a confusing narrative maze with no logical exit.',
                'Eventually, frustration sets in.'
            ],
            concludingSense: 'Unless they develop unyielding discipline, their beautifully imagined books will remain permanently unfinished.',
            translation: 'Muchos aspirantes a escritores luchan significativamente para terminar su primera novela de larga duración. A menudo comienzan con un entusiasmo salvaje. Sin embargo, a mitad de la historia, esa emoción inicial se evapora silenciosamente en duda. Debido a que carecen de una trama resumida, estos escritores se encuentran atrapados en un confuso laberinto narrativo sin salida lógica. Eventualmente, la frustración se establece. A menos que desarrollen una disciplina inquebrantable, sus libros bellamente imaginados permanecerán permanentemente inacabados.'
        },
        usefulPhrases: [
            'Although... (Aunque... - Inicia oraciones complejas)',
            'Since... (Ya que... - Rompe el ritmo tradicional)',
            'Consequently... (Por lo tanto...)'
        ],
        commonMistakes: [
            {
                wrong: 'Párrafos monótonos (T-rex Style): "I run fast. I win races. I like running. It is very fun."',
                correct: 'Párrafos ágiles fluyendo como música: "Because I run fast, I often win races. In fact, running is one of the most fun hobbies I have ever tried."',
                explanation: 'El nivel gramatical (C1-C2) demanda imperativamente variar el esqueleto de lo escrito.'
            }
        ],
        exercise: {
            question: '¿Por qué se usan oraciones extremadamente cortas (Simple Sentences) en un párrafo altamente literario y variado?',
            options: ['Porque el escritor olvidó el vocabulario restante.', 'Para causar impacto dramático o pausas de tensión severas en el lector.', 'Porque así es el inglés norteamericano puro.'],
            correctAnswer: 1,
            explanation: 'Tras tres oraciones muy largas, poner "Then, he died." es un latigazo psicológico en la lectura.'
        }
    },
    {
        id: 'p27',
        title: '27. Active vs Passive Voice',
        moduleId: 'm4',
        moduleTitle: 'Módulo 4: Técnicas Avanzadas',
        moduleColor: 'bg-purple-600',
        explanation: 'Un escritor avanzado usa deliberadamente la Voz Activa para dar fuerza, movimiento directo y claridad ("El estudiante hizo la tarea"). La Voz Pasiva ("La tarea fue hecha por el estudiante") se usa casi exclusivamente en párrafos académicos o de investigación para centrar la atención en EL OBJETO y no en la persona que lo investiga.',
        structure: {
            title: 'Cuándo escoger cada una',
            points: [
                'Active: Historias, Business emails (menos palabras, postura firme y empoderada).',
                'Passive: Reportes médicos o policiales (The patient was transferred). El agente no importa.'
            ]
        },
        example: {
            topicSense: 'The revolutionary new software update was heavily criticized by industry experts upon release.',
            supportingSentences: [
                'Instead of fixing old bugs, several new critical errors were accidentally introduced into the core system.',
                'Consequently, thousands of user complaints were filed within the very first 24 hours of operation.',
                'However, the developers actively listened to the fierce feedback and rapidly engineered a massive patch.'
            ],
            concludingSense: 'In the end, this rapid response successfully restored the community’s broken trust.',
            translation: 'La nueva actualización revolucionaria de software fue fuertemente criticada por los expertos de la industria tras su lanzamiento. En lugar de corregir viejos errores, varios nuevos errores críticos fueron introducidos accidentalmente en el sistema central. En consecuencia, miles de quejas de usuarios fueron presentadas dentro de las primeras 24 horas de operación. Sin embargo, los desarrolladores escucharon activamente los feroces comentarios y rápidamente diseñaron un parche masivo. Al final, esta rápida respuesta restauró con éxito la confianza rota de la comunidad.'
        },
        usefulPhrases: [
            'It was discovered that... (Fue descubierto que... - Passive)',
            'The board evaluated... (La junta evaluó... - Active)',
            'Has been implemented... (Ha sido implementado... - Passive)'
        ],
        commonMistakes: [
            {
                wrong: 'Usar voz pasiva en descripciones triviales: "A delicious cake was eaten by me."',
                correct: 'Activa siempre que puedas: "I ate a delicious cake."',
                explanation: 'La voz pasiva es aburrida e indirecta. En la literatura y el habla normal, aburre y agota al lector si se abusa.'
            }
        ],
        exercise: {
            question: 'En un párrafo donde informas sobre un experimento científico en el que el creador es anónimo o irrelevante, ¿qué voz usarías?',
            options: ['Active Voice', 'Passive Voice', 'Middle Voice'],
            correctAnswer: 1,
            explanation: 'Exacto, en los laboratorios lo importante es el invento (The vaccine was created in 1990) y no el científico.'
        }
    },
    {
        id: 'p28',
        title: '28. Parallel Structure',
        moduleId: 'm4',
        moduleTitle: 'Módulo 4: Técnicas Avanzadas',
        moduleColor: 'bg-purple-600',
        explanation: 'El Paralelismo Gramatical exige que en una lista o en una sucesión de ideas todas las palabras mantengan el mismo tiempo o forma gramatical (ej: todos infinitivos, todos gerundios o todos sustantivos). Mezclarlos es feo acústicamente y le roba "flow" a tu párrafo.',
        structure: {
            title: 'Equilibrio Puro',
            points: [
                'Gerundio ❌ Infinitivo: I like swimming, running, and to jump.',
                'Corección Paralela: I like swimming, running, and jumping.',
                'Aplica para el interior de grandes enumeraciones descriptivas en el grueso del Paragraph.'
            ]
        },
        example: {
            topicSense: 'A truly great leader possesses a combination of empathy, courage, and unwavering dedication.',
            supportingSentences: [
                'They inspire their team not by giving harsh orders, but by setting a strong personal example.',
                'Additionally, a skillful manager excels at listening carefully, communicating clearly, and solving problems efficiently.',
                'Whenever a severe crisis arises, they remain calm, act decisively, and support everyone involved rather than assigning blame.'
            ],
            concludingSense: 'Ultimately, possessing these balanced, parallel traits guarantees long-term organizational success.',
            translation: 'Un líder verdaderamente grande posee una combinación de empatía, coraje y dedicación inquebrantable. Inspiran a su equipo no dando órdenes severas, sino dando un fuerte ejemplo personal. Además, un gerente hábil sobresale en escuchar atentamente, comunicarse con claridad y resolver problemas de manera eficiente. Siempre que surge una crisis severa, mantienen la calma, actúan con decisión y apoyan a todos los involucrados en lugar de asignar culpas. En última instancia, poseer estos rasgos paralelos y equilibrados garantiza el éxito organizacional a largo plazo.'
        },
        usefulPhrases: [
            'Not only X but also Y ... (No solo X sino también Y...) - ambas deben ser paralelas',
            'Either playing or resting... (O jugando o descansando...)',
            'By walking and observing... (Caminando y observando...)'
        ],
        commonMistakes: [
            {
                wrong: 'Desalinear listas: "Her duties include answering emails, to make calls, and she coordinates events."',
                correct: 'Alinear matemáticamente: "Her duties include answering emails, making calls, and coordinating events."',
                explanation: 'En el examen TOEFL/IELTS, romper la estructura paralela es brutalmente penalizado.'
            }
        ],
        exercise: {
            question: 'Elige la oración que mantenga perfecta Parallel Structure.',
            options: ['He wanted to eat quickly, take a nap, and going back to work.', 'The project requires patience, focused thinking, and being dedicated.', 'My morning routine consists of brewing coffee, reading the news, and stretching on the floor.'],
            correctAnswer: 2,
            explanation: 'La opción 3 usa impecablemente ING + ING + ING (brewing, reading, stretching).'
        }
    },
    {
        id: 'p29',
        title: '29. Avoiding Repetition',
        moduleId: 'm4',
        moduleTitle: 'Módulo 4: Técnicas Avanzadas',
        moduleColor: 'bg-purple-600',
        explanation: 'El exceso de repetición del mismo sujeto o conector en inglés rompe la inmersión de lectura. Un redactor pulido esquiva repetir la palabra usando Pronombres, Sinónimos Avanzados, o "Reference Words" (This problem / Such behaviors / The latter).',
        structure: {
            title: 'Sustitutos de Élite',
            points: [
                'Sustitución nominal: El "Oceano Atlántico" puede nombrarse como "the vast aquatic territory".',
                'Referencia Directa: This, these, those, such.',
                'Elisión: Hay cosas que se omiten porque están ya implícitas gramaticalmente.'
            ]
        },
        example: {
            topicSense: 'Artificial intelligence is rapidly transforming how modern healthcare professionals diagnose rare diseases.',
            supportingSentences: [
                'Instead of relying solely on human intuition, doctors can now use these advanced neural networks to scan thousands of medical records in seconds.',
                'Such incredible computational power identifies subtle patterns that the human eye might completely overlook.',
                'Furthermore, the technology significantly reduces dangerous misdiagnosis rates across pediatric departments.'
            ],
            concludingSense: 'Undoubtedly, this digital revolution is saving countless lives while streamlining hospital workflows.',
            translation: 'La inteligencia artificial está transformando rápidamente la forma en que los profesionales de la salud modernos diagnostican enfermedades raras. En lugar de depender únicamente de la intuición humana, los médicos ahora pueden usar estas redes neuronales avanzadas para escanear miles de registros médicos en segundos. Dicho increíble poder computacional identifica patrones sutiles que el ojo humano podría pasar completamente por alto. Además, la tecnología reduce significativamente las peligrosas tasas de diagnósticos erróneos en los departamentos pediátricos. Sin duda, esta revolución digital está salvando innumerables vidas mientras agiliza los flujos de trabajo de los hospitales.'
        },
        usefulPhrases: [
            'Such an approach... (Tal acercamiento/enfoque...)',
            'The aforementioned... (Lo antes mencionado...)',
            'These factors... (Estos factores...)'
        ],
        commonMistakes: [
            {
                wrong: 'Repetir la base ciegamente: "The car is red. The car is fast. The car uses expensive gasoline."',
                correct: 'Enlazar pronombres y sinónimos: "The red car is incredibly fast. Furthermore, this sports vehicle consumes premium gasoline."',
                explanation: 'En las primeras redacciones todos cometen el error del pronombre huérfano (el coche mágico y robótico).'
            }
        ],
        exercise: {
            question: '¿Qué es una estrategia efectiva de "Avoiding Repetition" al hablar por tercera vez sobre "The President of the United States"?',
            options: ['Llamarlo solo "He" repetidamente en todo el texto.', 'Usar frase sustituta o elipsis como "The Commander in Chief" o referirse a "This leader".', 'Asumir que si no pones sujeto, la oración sirve de igual manera.'],
            correctAnswer: 1,
            explanation: 'Llamarlo "The Commander in Chief" o simplemente "this leader" muestra enorme riqueza de vocabulario.'
        }
    },
    {
        id: 'p30',
        title: '30. Paragraph Length & Pacing',
        moduleId: 'm4',
        moduleTitle: 'Módulo 4: Técnicas Avanzadas',
        moduleColor: 'bg-purple-600',
        explanation: 'El tamaño de tu párrafo no responde solamente a las "5 o 10 reglas", depende firmemente del terreno. Los bloques de ensayo universitarios suelen engordar hasta los 250 vocablos. Empero, el ritmo (Pacing) en un redactor web o copywriter exige romper los bloques en diminutas ráfagas de 2 a 3 oraciones para mantener al lector retenido en el teléfono.',
        structure: {
            title: 'Ajuste de Longitud',
            points: [
                'Short Paragraphs (2-3 líneas): Añaden aire, claridad o sorpresa rotunda.',
                'Medium Paragraphs (5-7 líneas): El estándar para explicar bien de forma concisa.',
                'Long Paragraphs (10+ líneas): Denso. Ensayo puramente analítico, sumamente peligroso por agotamiento.'
            ]
        },
        example: {
            topicSense: 'Reading long blocks of text on mobile devices can drastically reduce user engagement.',
            supportingSentences: [
                'When confronted with a giant, unbroken wall of letters, a person’s eyes naturally tire, causing them to abandon the page instantly.',
                'Smart digital writers counter this by aggressively splitting their paragraphs into bite-sized, digestible pieces.',
                'White space is essentially the oxygen that allows digital content to breathe beautifully.'
            ],
            concludingSense: 'Consequently, mastering spacing and brevity is the true secret to keeping an online audience hooked.',
            translation: 'Leer largos bloques de texto en dispositivos móviles puede reducir drásticamente el compromiso del usuario. Cuando se enfrenta a un gigantesco e ininterrumpido muro de letras, los ojos de una persona se cansan naturalmente, haciéndolos abandonar la página al instante. Los escritores digitales inteligentes contrarrestan esto al dividir agresivamente sus párrafos en piezas pequeñas y digeribles. El espacio en blanco es esencialmente el oxígeno que permite que el contenido digital respire bellamente. En consecuencia, dominar el espaciado y la brevedad es el verdadero secreto para mantener a una audiencia en línea enganchada.'
        },
        usefulPhrases: [
            'In a nutshell,... (En resumen...)',
            'Simply put,... (Simplemente dicho/En pocas palabras...)',
            'To clarify,... (Para clarificar...)'
        ],
        commonMistakes: [
            {
                wrong: 'Esforzarse para siempre escribir el párrafo tipo bloque enorme (Block text).',
                correct: 'Permitirse dividir una idea en dos Sub-Párrafos si esta es excesivamente intrincada o pesada.',
                explanation: 'En redacción contemporánea (Emails o Blogs), una pantalla con un párrafo gigante se "espanta".'
            }
        ],
        exercise: {
            question: 'Bajo contextos altamente digitales como Blogs post o Emails de Marketing, ¿qué medida de párrafo es la preferida universalmente?',
            options: ['Megapárrafos continuos de más de 300 palabras.', 'Textos que no rebasen más allá de las 2 a 4 oraciones.', 'Expositores vacíos solo conteniendo la URL.'],
            correctAnswer: 1,
            explanation: 'Para asegurar la legibilidad en pantallas finas sin aturdir, se privilegian los párrafos muy breves, dando "aire" visual (White-space).'
        }
    }
];
