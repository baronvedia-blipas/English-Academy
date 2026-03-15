export const module2 = [
    {
        id: 'p7',
        title: '7. Narrative Paragraph (Párrafo Narrativo)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El Narrative Paragraph se utiliza para contar una historia, relatar una anécdota o describir una secuencia de eventos. Funciona como un pequeño cuento que tiene un principio, un nudo y un final. Normalmente, se utiliza el pasado simple y el pasado continuo, organizando las ideas en estricto orden cronológico usando conectores de tiempo.',
        structure: {
            title: 'Estructura Narrativa',
            points: [
                'Topic Sentence: Establece qué evento o historia se va a contar (Ej: El peor día de mi vida).',
                'Supporting (Body): Relata los eventos en orden cronológico.',
                'Concluding Sentence: La lección aprendida o el resultado final.'
            ]
        },
        example: {
            topicSense: 'My first day of high school was a complete disaster from start to finish.',
            supportingSentences: [
                'First, my alarm did not go off, causing me to miss the school bus.',
                'Then, while I was running to class, I tripped and dropped all my books in the hallway.',
                'Later that afternoon, I realized I had accidentally worn my shirt inside out all day.'
            ],
            concludingSense: 'Looking back, I can laugh at those silly moments, but I hope to never repeat that stressful day.',
            translation: 'Mi primer día de secundaria fue un completo desastre de principio a fin. Primero, mi alarma no sonó, lo que me hizo perder el autobús escolar. Luego, mientras corría hacia clase, me tropecé y dejé caer todos mis libros en el pasillo. Más tarde esa tarde, me di cuenta de que había usado mi camisa al revés todo el día por accidente. Mirando hacia atrás, puedo reírme de esos momentos tontos, pero espero nunca repetir ese estresante día.'
        },
        usefulPhrases: [
            'First of all, ... (Antes que nada...)',
            'Suddenly, ... (De repente...)',
            'In the end, ... (Al final...)'
        ],
        commonMistakes: [
            {
                wrong: 'Saltar el tiempo aleatoriamente: "Llegué tarde. Pero después fui a almorzar. Ah, olvidaba decir que me robaron temprano."',
                correct: 'Mantener un flujo cronológico estricto: First → Then → After that → Finally.',
                explanation: 'En una narrativa el orden del tiempo debe fluir de forma lineal.'
            }
        ],
        exercise: {
            question: '¿Cuál es el propósito principal de un párrafo narrativo?',
            options: ['Describir cómo funciona algo', 'Contar un evento en orden cronológico', 'Convencer al lector de una opinión'],
            correctAnswer: 1,
            explanation: 'Un párrafo narrativo narra o cuenta una secuencia de eventos en el tiempo.'
        }
    },
    {
        id: 'p8',
        title: '8. Descriptive Paragraph (Párrafo Descriptivo)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El Descriptive Paragraph pinta una imagen con palabras. Se usa para que el lector "vea, escuche, toque o sienta" lo que estás describiendo (una persona, un lugar o un objeto). Su herramienta principal es el uso abundante de adjetivos, adverbios y un fuerte sentido del Orden Espacial (Spatial order: de izquierda a derecha, de arriba abajo, o de cerca a lejos).',
        structure: {
            title: 'Elementos Descriptivos',
            points: [
                'Evocar los 5 sentidos (vista, olfato, tacto, etc).',
                'Precisión en vocabulario: en lugar de decir "The tree was big", usar "The immense, ancient oak tree...".',
                'Order: Descripciones físicas lógicas (ej: de la cabeza a los pies).'
            ]
        },
        example: {
            topicSense: 'The antique bookstore at the corner of my street holds a magical, cozy atmosphere.',
            supportingSentences: [
                'As soon as you walk in, the rich smell of old paper and roasted coffee greets you.',
                'Ceiling-high wooden shelves are densely packed with colorful, worn-out volumes.',
                'In the back, soft jazz plays gently while a golden stray cat sleeps on a velvet armchair.'
            ],
            concludingSense: 'It is a peaceful sanctuary where time seems to slow down completely.',
            translation: 'La antigua librería de la esquina de mi calle tiene una atmósfera mágica y acogedora. Tan pronto como entras, te recibe el rico olor a papel viejo y café tostado. Los estantes de madera hasta el techo están densamente llenos de volúmenes coloridos y desgastados. En la parte de atrás, el jazz suave suena suavemente mientras un gato callejero dorado duerme en un sillón de terciopelo. Es un santuario pacífico donde el tiempo parece ralentizarse por completo.'
        },
        usefulPhrases: [
            'To the left... / On the right... (A la izquierda... / A la derecha...)',
            'It smells like... / It sounds like... (Huele a... / Suena como...)',
            'In the background... (Al fondo...)'
        ],
        commonMistakes: [
            {
                wrong: 'Usar palabras vagas o sosas: "It was a nice room with good things."',
                correct: 'Usar adjetivos específicos: "It was an elegant room illuminated by a crystal chandelier."',
                explanation: 'La descripción necesita palabras visuales fuertes para funcionar.'
            }
        ],
        exercise: {
            question: '¿Qué es el "Spatial Order" en un párrafo descriptivo?',
            options: ['Describir un espacio exterior.', 'Organizar la descripción espacialmente (ej. de arriba hacia abajo).', 'Usar palabras sobre el espacio y los planetas.'],
            correctAnswer: 1,
            explanation: 'Spatial Order es dirigir la mirada del lector de forma ordenada (ej. empezar desde la entrada hasta el fondo).'
        }
    },
    {
        id: 'p9',
        title: '9. Expository Paragraph (Párrafo Expositivo)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Un Párrafo Expositivo tiene como fin informar, definir o explicar un tema al lector de manera objetiva. A diferencia del párrafo de opinión o el persuasivo, aquí NO expresas tus sentimientos. Presentas los hechos tal como son, como si estuvieras escribiendo una entrada de enciclopedia o un artículo informativo.',
        structure: {
            title: 'Características Expositivas',
            points: [
                'Tono neutro, informativo y objetivo.',
                'Oraciones que definen, analizan o clasifican el tema.',
                'Uso extensivo del Presente Simple para referirse a hechos reales.'
            ]
        },
        example: {
            topicSense: 'Photosynthesis is the essential process by which green plants produce their own food.',
            supportingSentences: [
                'During this process, leaves absorb sunlight and carbon dioxide from the atmosphere.',
                'Simultaneously, the plant roots draw up water and vital minerals from the soil.',
                'Using the energy from the sun, the plant converts these ingredients into glucose and releases oxygen.'
            ],
            concludingSense: 'Ultimately, this remarkable biochemical reaction is responsible for sustaining almost all life on Earth.',
            translation: 'La fotosíntesis es el proceso esencial mediante el cual las plantas verdes producen su propio alimento. Durante este proceso, las hojas absorben la luz solar y el dióxido de carbono de la atmósfera. Simultáneamente, las raíces de la planta extraen agua y minerales vitales del suelo. Usando la energía del sol, la planta convierte estos ingredientes en glucosa y libera oxígeno. En última instancia, esta notable reacción bioquímica es responsable de sostener casi toda la vida en la Tierra.'
        },
        usefulPhrases: [
            'This process involves... (Este proceso implica...)',
            'It consists of... (Consiste en...)',
            'In other words,... (En otras palabras,...)'
        ],
        commonMistakes: [
            {
                wrong: 'Añadir opinión personal: "Photosynthesis is the coolest thing ever. I love plants."',
                correct: 'Mantenerse objetivo: "Photosynthesis is a vital biological mechanism."',
                explanation: 'Un texto expositivo no es el lugar para expresar emociones o usar la palabra "I" (yo).'
            }
        ],
        exercise: {
            question: 'El tono correcto de un párrafo expositivo debe ser:',
            options: ['Emocional y personal, intentando convencer.', 'Imaginativo y poético.', 'Objetivo e informativo, basado en hechos reales.'],
            correctAnswer: 2,
            explanation: 'El propósito principal de exponer es informar sin sesgos ni emociones.'
        }
    },
    {
        id: 'p10',
        title: '10. Persuasive Paragraph (Párrafo Persuasivo)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El Párrafo Persuasivo busca convencer al lector de que acepte una opinión particular o que tome una acción. Combina lógica y emoción. La "Topic Sentence" aquí se llama "Claim" (afirmación), la cual luego debe ser respaldada por evidencia sólida, lógica y conclusiones contundentes.',
        structure: {
            title: 'Elementos Persuasivos',
            points: [
                'Claim (Topic Sentence): Tu afirmación fuerte u opinión.',
                'Evidence/Reasons: ¿A quién o a qué apelas? (Estudios, ética, emociones).',
                'Call to action (cierre): Un exhorto al lector para que actúe o piense diferente.'
            ]
        },
        example: {
            topicSense: 'Schools should make financial literacy a mandatory subject for all high school students.',
            supportingSentences: [
                'Currently, millions of young adults graduate without knowing how to pay taxes or manage a credit card.',
                'This lack of crucial real-world knowledge often leads to early debt and extreme stress.',
                'Teaching students budgeting skills would prepare them for true independence.'
            ],
            concludingSense: 'Therefore, education boards must update the curriculum immediately to secure a stable future for the next generation.',
            translation: 'Las escuelas deberían hacer de la educación financiera una materia obligatoria para todos los estudiantes de secundaria. Actualmente, millones de jóvenes adultos se gradúan sin saber cómo pagar impuestos o administrar una tarjeta de crédito. Esta falta de conocimiento crucial del mundo real a menudo lleva a deudas tempranas y estrés extremo. Enseñar a los estudiantes habilidades para hacer presupuestos los prepararía para la verdadera independencia. Por lo tanto, las juntas de educación deben actualizar el plan de estudios de inmediato para asegurar un futuro estable para la próxima generación.'
        },
        usefulPhrases: [
            'It is crucial that... (Es crucial que...)',
            'Without a doubt,... (Sin lugar a dudas,...)',
            'We must take action... (Debemos tomar acción...)'
        ],
        commonMistakes: [
            {
                wrong: 'Mostrar debilidad: "I am not sure, but maybe we should teach finances..."',
                correct: 'Usar lenguaje asertivo: "It is strictly necessary to teach finances..."',
                explanation: 'Si no crees firmemente en tu idea, ¿cómo vas a convencer a otros?'
            }
        ],
        exercise: {
            question: '¿Qué elemento es comúnmente usado en la Concluding Sentence de un persuasivo?',
            options: ['Un "Call to Action" (llamado a la acción).', 'Un adjetivo descriptivo para el clima.', 'Una fecha histórica irrelevante.'],
            correctAnswer: 0,
            explanation: 'El Cierre a menudo anima al lector a tomar acción basándose en lo expuesto (Call to action).'
        }
    },
    {
        id: 'p11',
        title: '11. Opinion Paragraph (Párrafo de Opinión)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El Párrafo de Opinión es similar al persuasivo, pero suele ser más personal y subjetivo ("Yo siento que... / Mi punto de vista es..."). Mientras que en el persuasivo tratas de que el otro tome acción o te dé la razón fuertemente, aquí simplemente expones y explicas por qué TÚ piensas de cierta forma.',
        structure: {
            title: 'Estructura de Opinión',
            points: [
                'State your opinion: Da tu punto de vista de inmediato.',
                'Give reasons: Justifica por qué piensas así basados en tu óptica personal o general.',
                'Reiterate opinion: Cierra reafirmando tu sensación inicial con otras palabras.'
            ]
        },
        example: {
            topicSense: 'In my opinion, traditional printed books are still far superior to digital e-readers.',
            supportingSentences: [
                'I strongly believe that the tactile sensation of turning a paper page enhances the reading experience.',
                'Moreover, looking at a physical book provides a much-needed break from the digital screens we stare at all day.',
                'I also love the distinctive smell of old pages, which a tablet simply cannot replicate.'
            ],
            concludingSense: 'For me, these timeless physical qualities make printed books irreplaceable.',
            translation: 'En mi opinión, los libros impresos tradicionales siguen siendo muy superiores a los lectores electrónicos digitales. Creo firmemente que la sensación táctil de pasar una página de papel mejora la experiencia de lectura. Además, mirar un libro físico proporciona un descanso muy necesario de las pantallas digitales a las que miramos todo el día. También me encanta el olor distintivo de las páginas viejas, que una tableta simplemente no puede reproducir. Para mí, estas cualidades físicas atemporales hacen que los libros impresos sean irreemplazables.'
        },
        usefulPhrases: [
            'In my opinion,... (En mi opinión...)',
            'I strongly believe that... (Creo firmemente que...)',
            'From my perspective,... (Desde mi perspectiva...)'
        ],
        commonMistakes: [
            {
                wrong: 'Olvidar dar el porqué: "I think action movies are bad. I do not like them. The end."',
                correct: 'Dar razones válidas: "Action movies are bad because they rely on explosions instead of good plots."',
                explanation: 'Una opinión sin explicación carece de valor.'
            }
        ],
        exercise: {
            question: '¿Qué conector usarías para introducir tu Párrafo de Opinión?',
            options: ['Consequently', 'I strongly believe that', 'Next'],
            correctAnswer: 1,
            explanation: 'Es la única frase que establece propiedad sobre un pensamiento ("Yo creo...").'
        }
    },
    {
        id: 'p12',
        title: '12. Argumentative Paragraph (Párrafo Argumentativo)',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'A diferencia de la simple opinión, el Párrafo Argumentativo es un género académico formal donde no utilizas el "yo". En vez de decir "En mi opinión...", argumentas presentando un hecho objetivo como tu base ("Claim"), ofreciendo Evidencia (estudios/estadísticas), reconociendo un argumento opuesto (Counter-argument) y procediendo a refutarlo.',
        structure: {
            title: 'Elementos del Argumentativo',
            points: [
                'Claim: Postura directa.',
                'Evidence: Hecho que lo respalda.',
                'Counter-argument + Rebuttal: Mencionas a los que opinan diferente para demostrar que sus ideas son defectuosas.'
            ]
        },
        example: {
            topicSense: 'Universal basic income (UBI) would drastically reduce poverty rates in developing nations.',
            supportingSentences: [
                'Economic studies show that direct cash transfers allow citizens to invest in better nutrition and start small businesses.',
                'Critics argue that UBI discourages people from working by providing free money.',
                'However, pilot programs in multiple regions demonstrate that employment actually rises, as people use the UBI to cover transport and job-hunting costs.'
            ],
            concludingSense: 'Ultimately, empowering individuals with a financial safety net fuels economic growth rather than hindering it.',
            translation: 'El ingreso básico universal (IBU) reduciría drásticamente las tasas de pobreza en las naciones en desarrollo. Los estudios económicos muestran que las transferencias directas de efectivo permiten a los ciudadanos invertir en una mejor nutrición y comenzar pequeñas empresas. Los críticos argumentan que el IBU desanima a las personas a trabajar al proporcionar dinero gratis. Sin embargo, los programas piloto en múltiples regiones demuestran que el empleo en realidad aumenta, ya que las personas usan el IBU para cubrir costos de transporte y búsqueda de empleo. En última instancia, empoderar a las personas con una red de seguridad financiera impulsa el crecimiento económico en lugar de obstaculizarlo.'
        },
        usefulPhrases: [
            'Critics argue that... (Los críticos argumentan que...)',
            'However, evidence shows... (Sin embargo, la evidencia muestra...)',
            'This proves that... (Esto prueba que...)'
        ],
        commonMistakes: [
            {
                wrong: 'Escribirlo como Párrafo de Opinión: "I think UBI is good because I would like free money."',
                correct: 'Evidencia académica: "Studies indicate UBI stimulates local economies."',
                explanation: 'En redacción académica, toda "opinión" debe sustentarse en hechos y lógica objetiva.'
            }
        ],
        exercise: {
            question: '¿Qué es el "Counter-argument" en un Párrafo Argumentativo?',
            options: ['El argumento inicial que pones.', 'La oración final que cierra tu párrafo.', 'Introducir lo que piensa la otra parte opuesta a ti, para luego refutarla.'],
            correctAnswer: 2,
            explanation: 'Un argumento brillante siempre reconoce y destruye las excusas de la oposición ("Algunos dicen X, sin embargo, se equivocan por Y").'
        }
    },
    {
        id: 'p13',
        title: '13. Compare and Contrast Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El párrafo de Compare and Contrast evalúa las similitudes ("compare") y/o diferencias ("contrast") entre dos conceptos, lugares, cosas o puntos de vista. Típicamente se estructura de forma Point-by-Point (alternando entre los elementos) o Block method (todo sobre la Cosa 1, seguido de todo sobre la Cosa 2).',
        structure: {
            title: 'Point-by-Point vs Block',
            points: [
                'Elegir bien el foco: si son casi iguales, contrasta todo.',
                'Usar transición explícitamente equilibrada (On the one hand... On the other hand...).'
            ]
        },
        example: {
            topicSense: 'Although online learning and traditional classrooms both aim to educate, they offer completely different student experiences.',
            supportingSentences: [
                'In a traditional classroom, students benefit from direct, face-to-face social interaction and immediate feedback from teachers.',
                'In contrast, online learning provides unmatched flexibility, allowing students to study at any time and in any location.',
                'While offline schooling requires a strict daily commute, digital education depends entirely on self-discipline and internet access.'
            ],
            concludingSense: 'Ultimately, both systems are effective, but the choice heavily depends on an individual’s learning style and schedule.',
            translation: 'Aunque el aprendizaje en línea y las aulas tradicionales apuntan a educar, ofrecen experiencias estudiantiles completamente diferentes. En un aula tradicional, los estudiantes se benefician de la interacción social directa cara a cara y la retroalimentación inmediata de los profesores. En contraste, el aprendizaje en línea proporciona una flexibilidad inigualable, permitiendo a los estudiantes estudiar a cualquier hora y en cualquier lugar. Mientras que la escolarización presencial requiere un estricto viaje diario, la educación digital depende por completo de la autodisciplina y el acceso a Internet. En última instancia, ambos sistemas son efectivos, pero la elección depende en gran medida del estilo de aprendizaje y el horario del individuo.'
        },
        usefulPhrases: [
            'In contrast, ... (Por el contrario...)',
            'Similarly, ... (De manera similar...)',
            'While X is ..., Y is ... (Mientras X es ..., Y es ...)'
        ],
        commonMistakes: [
            {
                wrong: 'Desorden: Hablar del Elemento A, Elemento A, Elemento B, B, A, B, B.',
                correct: 'Agrupar: Hablar Elemento A, luego conector, luego Elemento B.',
                explanation: 'Falta de estructura hace confusa la lectura y comparación.'
            }
        ],
        exercise: {
            question: '¿Qué par de conectores se usa para Contrastar?',
            options: ['Similarly / Likewise', 'However / On the other hand', 'Furthermore / In addition'],
            correctAnswer: 1,
            explanation: 'However, on the other hand, in contrast, whereas: todos sirven para diferenciar o contraste.'
        }
    },
    {
        id: 'p14',
        title: '14. Cause and Effect Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'El de Causa y Efecto explora el razonamiento de POR QUÉ ocurren las cosas y resulta sumamente útil en redacciones científicas y sociales. Puedes centrarte solo en Causas (¿por qué pasó un accidente?), solo en Efectos (¿qué provocó la radiación?), o un formato integral conectándolas en dominó.',
        structure: {
            title: 'Cadenas Lógicas',
            points: [
                'Conectores de causa (debido a que, puesto que).',
                'Conectores de efecto (como resultado, por consiguiente).',
                'Flujo: X causó Y, y por culpa de Y surgió Z.'
            ]
        },
        example: {
            topicSense: 'Heavy deforestation has led to several devastating environmental consequences.',
            supportingSentences: [
                'Because large amounts of trees are cut down daily, thousands of animal species lose their natural habitats.',
                'As a result, many of these species face imminent extinction.',
                'Moreover, without trees to absorb carbon dioxide, greenhouse gas levels rise globally, which accelerates severe climate change.'
            ],
            concludingSense: 'Clearly, destroying forests causes a chain reaction that harms both wildlife and human survival.',
            translation: 'La fuerte deforestación ha provocado varias consecuencias ambientales devastadoras. Debido a que grandes cantidades de árboles se talan diariamente, miles de especies animales pierden sus hábitats naturales. Como resultado, muchas de estas especies se enfrentan a una extinción inminente. Además, sin árboles que absorban el dióxido de carbono, los niveles de gases de efecto invernadero aumentan a nivel mundial, lo que acelera el severo cambio climático. Claramente, destruir bosques causa una reacción en cadena que daña tanto a la fauna silvestre como a la supervivencia humana.'
        },
        usefulPhrases: [
            'Due to... (Debido a...)',
            'As a consequence,... (Como consecuencia...)',
            'This leads to... (Esto conduce a...)'
        ],
        commonMistakes: [
            {
                wrong: 'Confundir las palabras: The affect of the weather...',
                correct: 'The effect of the weather...',
                explanation: 'Effect es sustantivo (el efecto). Affect es verbo (Afectar). Excepción en uso clínico (afecto).'
            }
        ],
        exercise: {
            question: 'En la frase "X happened therefore Y occured", ¿qué representa Y?',
            options: ['Causa', 'Efecto', 'Aclaración'],
            correctAnswer: 1,
            explanation: 'Y es el efecto ocasionado por la causa X.'
        }
    },
    {
        id: 'p15',
        title: '15. Problem-Solution Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Presentas una situación problemática que demanda arreglo inmediato y propones tu o tus salidas a flote o remedios en la mitad hacia adelante del texto.',
        structure: {
            title: 'Estructura PS',
            points: [
                'Planteamiento del problema en la primera o segunda oración.',
                'Identificación o listado de posibles soluciones pragmáticas.',
                'Resultados positivos (si la solución se aplicara).'
            ]
        },
        example: {
            topicSense: 'Traffic congestion in downtown areas has become an unbearable problem during rush hours.',
            supportingSentences: [
                'Thousands of commuters waste over two hours daily stuck in their cars, which increases pollution.',
                'One effective solution would be for the city council to expand public bicycle paths and subsidize e-bikes.',
                'Additionally, implementing a congestion tax for private vehicles entering the center could encourage people to ride buses instead.'
            ],
            concludingSense: 'By prioritizing alternative transport, cities could eliminate daily gridlocks and improve air quality simultaneously.',
            translation: 'La congestión del tráfico en las áreas céntricas se ha convertido en un problema insoportable durante las horas pico. Miles de viajeros pierden más de dos horas al día atrapados en sus automóviles, lo que aumenta la contaminación. Una solución efectiva sería que el consejo de la ciudad ampliara los carriles para bicicletas públicos y subsidiara las bicicletas eléctricas. Además, implementar un impuesto de congestión para los vehículos privados que entran al centro podría animar a la gente a usar autobuses. Al priorizar el transporte alternativo, las ciudades podrían eliminar los embotellamientos diarios y mejorar la calidad del aire simultáneamente.'
        },
        usefulPhrases: [
            'One potential solution is... (Una posible solución es...)',
            'To tackle this issue,... (Para abordar este problema,...)',
            'This could be solved by... (Esto podría resolverse por medio de...)'
        ],
        commonMistakes: [
            {
                wrong: 'Ofrecer problemas abstractos inarticulados.',
                correct: 'Plantear explícito: "Air pollution is a danger" → solución clara.',
                explanation: 'Falta de conexión: Tienes que resolver explícitamente el problema puntual que formulaste.'
            }
        ],
        exercise: {
            question: '¿Después de qué parte de la estructura se plantea la "Solución"?',
            options: ['A la vez que la conclusión.', 'Justo en la Topic Sentence.', 'Inmediatamente después de presentar el problema.'],
            correctAnswer: 2,
            explanation: 'Primero afirmas un "Problem Statement" comprensible y como Support insertas la "Solution".'
        }
    },
    {
        id: 'p16',
        title: '16. Process Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Mismo que las recetas en un manual: te relatará paso por paso de forma detallada qué realizar; es instruccional, secuencial usando imperativos y una estricta alineación gramatical (first.. then.. finally).',
        structure: {
            title: 'Reglas del Proceso',
            points: [
                'Direccional: El que te dice qué hacer a ti (You fold the paper).',
                'Cronología literal en pasos ordenados irrompibles.'
            ]
        },
        example: {
            topicSense: 'Brewing the perfect cup of pour-over coffee is a simple but precise process.',
            supportingSentences: [
                'First, boil filtered water to exactly 200 degrees Fahrenheit.',
                'Next, place a paper filter in your dripper and rinse it lightly with hot water to remove any paper taste.',
                'After adding two tablespoons of freshly ground coffee, slowly pour the hot water in a circular motion until the mug is full.'
            ],
            concludingSense: 'By following these methodical steps, anyone can enjoy a barista-level coffee at home.',
            translation: 'Preparar la taza perfecta de café filtrado es un proceso simple pero preciso. Primero, hierva agua filtrada a exactamente 200 grados Fahrenheit. Luego, coloque un filtro de papel en su gotero y enjuáguelo ligeramente con agua caliente para eliminar cualquier sabor a papel. Después de agregar dos cucharadas de café recién molido, vierta lentamente el agua caliente con un movimiento circular hasta que la taza esté llena. Al seguir estos pasos metódicos, cualquiera puede disfrutar de un café a nivel de barista en casa.'
        },
        usefulPhrases: [
            'First of all,... (Antes de todo,...)',
            'The next step is... (El próximo paso es...)',
            'Finally,... (Finalmente...)'
        ],
        commonMistakes: [
            {
                wrong: 'Falta de vocabulario transitivo: "Haz el café. Tuesta el café. Fin."',
                correct: 'Adicionar "Steps": "First you take... Then you roast... Afterwards..."',
                explanation: 'Si no guías un párrafo instructivo sin marcadores, el lector se confundirá al perder el orden.'
            }
        ],
        exercise: {
            question: 'El tipo de escritura instruccional es ideal para:',
            options: ['Un poema.', 'Un manual de cocina o técnico.', 'Una opinión fuerte.'],
            correctAnswer: 1,
            explanation: 'Porque sirve para guiar el camino de confección de un paso a paso.'
        }
    },
    {
        id: 'p17',
        title: '17. Classification Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Enseña clasificaciones, ordena o agrupa elementos según rasgos comunes. De un conjunto en tu "topic", tu bloque se dedica a fragmentarlo y catalogarlo.',
        structure: {
            title: 'Bases de Clasificar',
            points: [
                'Bases Claras: ¿Por qué subdivides? No pueden repetirse lógicamente.'
            ]
        },
        example: {
            topicSense: 'Consumers can generally be divided into three classes according to their shopping habits.',
            supportingSentences: [
                'The first group, impulse buyers, purchase items entirely based on sudden emotions and desires.',
                'The second type consists of bargain hunters, who spend hours looking for coupons and discounts before spending a dime.',
                'The final category is the loyalists, customers who strictly stick to the brands they already trust regardless of cost.'
            ],
            concludingSense: 'Understanding these distinct purchaser types helps companies tailor their marketing strategies effectively.',
            translation: 'Los consumidores en general se pueden dividir en tres clases según sus hábitos de compra. El primer grupo, los compradores impulsivos, adquieren artículos basándose completamente en emociones y deseos repentinos. El segundo tipo consiste en los cazadores de gangas, que pasan horas buscando cupones y descuentos antes de gastar un centavo. La categoría final son los leales, clientes que se adhieren estrictamente a las marcas en las que ya confían independientemente del costo. Comprender estos diferentes tipos de compradores ayuda a las empresas a adaptar sus estrategias de marketing de manera efectiva.'
        },
        usefulPhrases: [
            'Can be classified as... (Puede ser catalogado como...)',
            'The first kind is... (El primer tipo es...)',
            'Another category is... (Otra categoría es...)'
        ],
        commonMistakes: [
            {
                wrong: 'Superponer taxonomías por error.',
                correct: 'Alinear a un solo criterio de ramificación.',
                explanation: 'Separar coches por "Color, Tamaño y Veloces" rompe el patrón. Separarlos por "Rojos, Azules, Negros" es consistente en un párrafo de clasificación.'
            }
        ],
        exercise: {
            question: 'Una frase de transición clave para "Clasificación" sería:',
            options: ['Conversely,...', 'The primary category includes...', 'Therefore,...'],
            correctAnswer: 1,
            explanation: '"The primary category includes..." es directa a clasificar agrupaciones.'
        }
    },
    {
        id: 'p18',
        title: '18. Definition Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Desentraña un término singular y expande sus matices para el entendimiento (particularmente argot complejo, patologías médicas o axiomas abstractos).',
        structure: {
            title: 'Mecánica Analítica',
            points: [
                'Term + Class + Characteristics = Complete Scope Definition.'
            ]
        },
        example: {
            topicSense: 'Resilience is best defined as the psychological capacity to recover from difficulties and traumatic events quickly.',
            supportingSentences: [
                'It is not merely ignoring emotional pain, but rather bouncing back stronger after facing adversity.',
                'A highly resilient person adapts flexibly to stressful scenarios without breaking down.',
                'For example, when an athlete loses a championship, resilience is what pushes them to train even harder the next day.'
            ],
            concludingSense: 'In short, it is the vital mental armor that helps human beings survive their toughest challenges.',
            translation: 'La resiliencia se define mejor como la capacidad psicológica para recuperarse rápidamente de dificultades y eventos traumáticos. No es meramente ignorar el dolor emocional, sino recuperarse más fuerte después de enfrentar la adversidad. Una persona altamente resiliente se adapta con flexibilidad a escenarios estresantes sin quebrarse. Por ejemplo, cuando un atleta pierde un campeonato, la resiliencia es lo que lo empuja a entrenar aún más duro al día siguiente. En resumen, es la armadura mental vital que ayuda a los seres humanos a sobrevivir a sus desafíos más duros.'
        },
        usefulPhrases: [
            'Is defined as... (Es definido como...)',
            'This term refers to... (Este léxico refiere a...)',
            'In essence, ... (En esencia...)'
        ],
        commonMistakes: [
            {
                wrong: 'Es un concepto circular: "Happiness is when you are happy.".',
                correct: 'Romper la circularidad explicativo: "Happiness is a state of well-being characterized by contentment."',
                explanation: 'Eludir la premisa base arruina el concepto de un "Párrafo de Definición".'
            }
        ],
        exercise: {
            question: 'El párrafo define un concepto apoyado por...',
            options: ['Historietas visuales.', 'Ejemplos o sub-análisis del origen del término.', 'Disertaciones políticas.'],
            correctAnswer: 1,
            explanation: 'Ejemplificarlo da sentido a toda la definición académica aportada al inicio.'
        }
    },
    {
        id: 'p19',
        title: '19. Summary Paragraph',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Sintetiza lo troncal expuesto por una lectura original más gigantesca. Usualmente un sumario suelta todos los detalles periféricos guardando las esencias para recordarlas rápido y NO mete nunca opinión ni críticas propias de quien lo escribe.',
        structure: {
            title: 'Regla Resumen',
            points: [
                'Paráfrasis Total.',
                'Apertura: Mención de la Obra y su tesis general.'
            ]
        },
        example: {
            topicSense: 'In his article "The Sleep Epidemic," Dr. Collins argues that modern society is suffering from severe sleep deprivation.',
            supportingSentences: [
                'He states that artificial lighting and the continuous use of smartphones trick the brain into staying awake late at night.',
                'Furthermore, the author emphasizes that chronic lack of rest is leading to higher rates of cardiovascular diseases.',
                'To combat this, Collins proposes implementing strict screen-free hours before bedtime.'
            ],
            concludingSense: 'Ultimately, the text serves as a stark warning to prioritize deep rest over constant productivity.',
            translation: 'En su artículo "La epidemia del sueño", el Dr. Collins argumenta que la sociedad moderna sufre de una severa privación del sueño. Afirma que la iluminación artificial y el uso continuo de los teléfonos inteligentes engañan al cerebro para que se mantenga despierto hasta altas horas de la noche. Además, el autor enfatiza que la falta crónica de descanso está conduciendo a mayores tasas de enfermedades cardiovasculares. Para combatir esto, Collins propone implementar estrictas horas sin pantalla antes de acostarse. En última instancia, el texto sirve como una severa advertencia para priorizar el descanso profundo sobre la productividad constante.'
        },
        usefulPhrases: [
            'The author argues that... (El autor argumenta que...)',
            'According to the text,... (Según el texto,...)',
            'The article summarizes that... (El artículo sintetiza que...)'
        ],
        commonMistakes: [
            {
                wrong: '"El texto dice que estemos acostados y yo considero eso una tontera."',
                correct: 'Limpieza total de sesgos: "The text explains people must lie down..."',
                explanation: 'Jamás poner el "Yo/I" en un summary, perderás puntaje en todo examen en inglés.'
            }
        ],
        exercise: {
            question: '¿Qué es un Párrafo Resumen?',
            options: ['Donde das tu opinión personal extendida.', 'Sintetiza la obra sin alterarla con valoraciones propias.', 'Cuenta tu biografía breve.'],
            correctAnswer: 1,
            explanation: 'Sintetizar y parafrasear lo dicho, como reporteros neutros.'
        }
    },
    {
        id: 'p20',
        title: '20. Reaction & Response',
        moduleId: 'm2',
        moduleTitle: 'Módulo 2: Tipos de Párrafos',
        moduleColor: 'bg-emerald-600',
        explanation: 'Sintiéndose aludido al sumario anterior, responde, valora o comenta sobre lo sentido sobre aquel texto, con su vivencia o punto disonante propio con permiso literario al Yo.',
        structure: {
            title: 'Formato Respuesta',
            points: [
                'Síntesis ligera (1 línea) conectivo luego con Sensación (Reaction).'
            ]
        },
        example: {
            topicSense: 'After reading the report about plastic in our oceans, I felt a deep sense of anger and responsibility.',
            supportingSentences: [
                'The staggering fact that millions of marine animals die yearly due to our disposable plastic bags is genuinely heartbreaking.',
                'I never realized how simply drinking coffee from a plastic cup contributes directly to this massive ecological crisis.',
                'As a consumer, I feel ashamed, but also motivated to immediately change my daily habits.'
            ],
            concludingSense: 'This undeniable eye-opener has pushed me to adopt a completely zero-waste lifestyle from now on.',
            translation: 'Después de leer el informe sobre el plástico en nuestros océanos, sentí un profundo sentido de enojo y responsabilidad. El asombroso hecho de que millones de animales marinos mueren cada año debido a nuestras bolsas de plástico desechables es verdaderamente desgarrador. Nunca me di cuenta de cómo el simple hecho de beber café de un vaso de plástico contribuye directamente a esta crisis ecológica masiva. Como consumidor, me siento avergonzado, pero también motivado a cambiar de inmediato mis hábitos diarios. Este innegable abre-ojos me ha empujado a adoptar un estilo de vida de cero residuos completamente a partir de ahora.'
        },
        usefulPhrases: [
            'It made me realize... (Me hizo darme cuenta de...)',
            'I was shocked to learn... (Me sorprendió saber...)',
            'I strongly connected with... (Conecté fuertemente con...)'
        ],
        commonMistakes: [
            {
                wrong: 'Contar lo del texto otra vez idéntico.',
                correct: 'Responder su interioridad (I connect to X problem because...).',
                explanation: 'Response Paragraphs deben emitir emociones o intelecto frente a eso.'
            }
        ],
        exercise: {
            question: '¿Debe utilizarse el "I" en este Reaction Paragraph?',
            options: ['Jamás', 'Solo si no duele.', 'Sí, es precisamente de donde nace la Reacción.'],
            correctAnswer: 2,
            explanation: 'Reaction requiere involucrar y comprometer al yo.'
        }
    }
];
