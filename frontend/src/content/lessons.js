export const lessonsData = {
    // --- BÁSICO (A1-A2) ---
    l1: {
        id: 'l1',
        title: 'Fundamentos',
        level: 'básico',
        lessons: [
            {
                id: 'le1',
                title: 'Alphabet & Pronunciation',
                theory: {
                    title: 'The Alphabet & Basic Sounds',
                    content: [
                        { subtitle: 'Vocales (Vowels)', text: 'Las vocales en inglés tienen sonidos cortos y largos, a diferencia del español. Por ejemplo, la "a" en "cat" suena diferente a la "a" en "cake".' },
                        { subtitle: 'Reconocimiento de Letras', text: 'Entender el alfabeto es vital para deletrear nombres y direcciones, una tarea súper común al iniciar conversaciones.', examples: [{ en: 'Could you spell your name, please?', es: '¿Podría deletrear su nombre, por favor?' }, { en: 'A as in Apple', es: 'A como en Manzana' }] }
                    ]
                },
                exercises: [
                    { type: 'flashcard', word: { id: 'w1', en: 'Apple', es: 'Manzana', pronunciation: 'ˈæp.əl', example_en: 'An apple a day.', example_es: 'Una manzana al día.' } },
                    { type: 'flashcard', word: { id: 'w2', en: 'Book', es: 'Libro', pronunciation: 'bʊk', example_en: 'I read a book.', example_es: 'Leo un libro.' } },
                    { type: 'shadowing', sentence: 'Hello, how are you?', translation: 'Hola, ¿cómo estás?' },
                    { type: 'dictation', sentence: 'I am a student.', translation: 'Soy un estudiante.' }
                ]
            },
            {
                id: 'le2',
                title: 'Greetings & Introductions',
                theory: {
                    title: 'Saludando a los demás',
                    content: [
                        { subtitle: 'Saludos Formales', text: 'Úsalos en el trabajo o con personas que no conoces (Good morning, Good afternoon, Nice to meet you).', examples: [{ en: 'Good morning', es: 'Buenos días' }] },
                        { subtitle: 'Saludos Informales', text: 'Para amigos o situaciones relajadas (Hi, Hello, What\'s up?).', examples: [{ en: 'Hi there!', es: '¡Hola!' }] }
                    ]
                },
                exercises: [
                    { type: 'multipleChoice', question: 'How do you say "Buenos días" in English?', options: ['Good night', 'Good morning', 'Hello', 'Goodbye'], correctIndex: 1, explanation: 'Good morning se usa por la mañana.' },
                    { type: 'fillBlank', text: 'Nice to {0} you.', blanks: ['meet'], explanation: 'La expresión común es "Nice to meet you" (Encantado de conocerte).' },
                    { type: 'wordOrder', sentence: 'My name is John.', translation: 'Mi nombre es John.' }
                ]
            },
            {
                id: 'le3',
                title: 'Numbers and Colors',
                theory: {
                    title: 'Adjetivos Básicos: Números y Colores',
                    content: [
                        { subtitle: 'Orden del Adjetivo', text: 'Los colores y números SIEMPRE van antes del sustantivo que describen.', examples: [{ en: 'The red car', es: 'El auto rojo' }, { en: 'Two apples', es: 'Dos manzanas' }] }
                    ]
                },
                exercises: [
                    { type: 'multipleChoice', question: 'What color is the sky?', options: ['Red', 'Green', 'Blue', 'Yellow'], correctIndex: 2, explanation: 'The sky is blue (azul).' },
                    { type: 'dictation', sentence: 'The car is red.', translation: 'El coche es rojo.' },
                    { type: 'fillBlank', text: 'I have {0} apples.', blanks: ['two'], explanation: 'Two significa dos.' }
                ]
            }
        ]
    },

    // --- INTERMEDIO (B1-B2) ---
    l2: {
        id: 'l2',
        title: 'Tiempos Verbales I',
        level: 'intermedio',
        lessons: [
            {
                id: 'le4',
                title: 'Present Continuous',
                theory: {
                    title: 'Present Continuous (Presente Continuo)',
                    content: [
                        { subtitle: '¿Para qué sirve?', text: 'Para describir acciones que están sucediendo en este mismo instante o temporalmente.', examples: [{ en: 'Look! It is raining.', es: '¡Mira! Está lloviendo.' }] },
                        { subtitle: 'Estructura', text: 'Sujeto + Verb to be (am/is/are) + Verbo terminado en -ing.', examples: [{ en: 'I am playing', es: 'Yo estoy jugando' }, { en: 'She is eating', es: 'Ella está comiendo' }, { en: 'They are not listening', es: 'Ellos no están escuchando' }] }
                    ]
                },
                exercises: [
                    { type: 'multipleChoice', question: 'Which sentence is Correct?', options: ['I is playing.', 'I am playing.', 'I are playing.', 'I playing.'], correctIndex: 1, explanation: 'Se usa am con I.' },
                    { type: 'fillBlank', text: 'She {0} watching TV right now.', blanks: ['is'], explanation: 'Con he/she/it usamos is.' },
                    { type: 'wordOrder', sentence: 'They are studying for the test.', translation: 'Ellos están estudiando para el examen.' }
                ]
            },
            {
                id: 'le5',
                title: 'Past Simple',
                theory: {
                    title: 'Past Simple (Pasado Simple)',
                    content: [
                        { subtitle: 'Verbos Regulares vs Irregulares', text: 'Los verbos regulares terminan en -ed. Los irregulares cambian por completo y hay que memorizarlos.', examples: [{ en: 'I played tennis yesterday (Regular)', es: 'Ayer jugué al tenis' }, { en: 'I went to the cinema (Irregular)', es: 'Fui al cine' }, { en: 'She did not like the food', es: 'A ella no le gustó la comida' }] }
                    ]
                },
                exercises: [
                    { type: 'flashcard', word: { id: 'w3', en: 'Went', es: 'Fui', pronunciation: 'wɛnt', example_en: 'I went to the store.', example_es: 'Fui a la tienda.' } },
                    { type: 'shadowing', sentence: 'I travelled to London last year.', translation: 'Viajé a Londres el año pasado.' },
                    { type: 'dictation', sentence: 'She worked yesterday.', translation: 'Ella trabajó ayer.' }
                ]
            },
            {
                id: 'le6',
                title: 'Future (Will / Going to)',
                theory: {
                    title: 'El Futuro (Will vs Going to)',
                    content: [
                        { subtitle: 'Will', text: 'Decisiones espontáneas, predicciones sin mucha evidencia y promesas.', examples: [{ en: 'I will help you!', es: '¡Yo te ayudaré!' }] },
                        { subtitle: 'Going to', text: 'Planes ya decididos previos al momento de hablar y predicciones con evidencia obvia.', examples: [{ en: 'I am going to travel tomorrow.', es: 'Voy a viajar mañana.' }] }
                    ]
                },
                exercises: [
                    { type: 'wordOrder', sentence: 'I am going to visit my family.', translation: 'Voy a visitar a mi familia.' },
                    { type: 'multipleChoice', question: 'We use "will" for:', options: ['Plans already made', 'Spontaneous decisions', 'Past events', 'Habits'], correctIndex: 1, explanation: '"Will" se usa para decisiones en el momento, predicciones y promesas.' },
                    { type: 'writingAI', prompt: 'Escribe de 1 a 3 oraciones sobre qué harás este fin de semana.', level: 'intermedio' }
                ]
            }
        ]
    },

    // --- AVANZADO (C1) ---
    l3: {
        id: 'l3',
        title: 'Gramática Compleja',
        level: 'avanzado',
        lessons: [
            {
                id: 'le7',
                title: 'Present Perfect',
                theory: {
                    title: 'Present Perfect',
                    content: [
                        { subtitle: 'Conexión Pasado-Presente', text: 'Se usa para experiencias de vida, o acciones del pasado que afectan al presente. NO mencionamos cuándo ocurrió exactamente.' },
                        { subtitle: 'Estructura', text: 'Sujeto + have/has + Participio Pasado (Past Participle)', examples: [{ en: 'I have visited France.', es: 'He visitado Francia.' }, { en: 'She has eaten.', es: 'Ella ha comido.' }] }
                    ]
                },
                exercises: [
                    { type: 'fillBlank', text: 'I {0} already {1} my homework.', blanks: ['have', 'done'], explanation: 'Present perfect uses have/has + past participle.' },
                    { type: 'dictation', sentence: 'She has never been to Japan.', translation: 'Ella nunca ha estado en Japón.' },
                    { type: 'multipleChoice', question: 'What does "I have worked here for 5 years" mean?', options: ['Started 5 years ago and still working', 'Worked 5 years and stopped', 'Will work for 5 years', 'Want to work for 5 years'], correctIndex: 0, explanation: 'Indica una acción que empezó en el pasado y continúa.' }
                ]
            },
            {
                id: 'le8',
                title: 'Passive Voice',
                theory: {
                    title: 'Passive Voice (Voz Pasiva)',
                    content: [
                        { subtitle: 'El Enfoque Cambia', text: 'Usamos voz pasiva cuando la acción (o su objeto) es más importante que QUIÉN la realizó.' },
                        { subtitle: 'Estructura', text: 'Objeto + Verbo to be + Participio Pasado', examples: [{ en: 'The house was built in 1990.', es: 'La casa fue construida en 1990. (No importa quién)' }] }
                    ]
                },
                exercises: [
                    { type: 'wordOrder', sentence: 'The book was written by Stephen King.', translation: 'El libro fue escrito por Stephen King.' },
                    { type: 'shadowing', sentence: 'The new bridge will be built next year.', translation: 'El nuevo puente será construido el próximo año.' },
                    { type: 'writingAI', prompt: 'Write 2 sentences describing your city using the passive voice (e.g. "The city was founded in...").', level: 'avanzado' }
                ]
            },
            {
                id: 'le9',
                title: 'Conditionals (Mixed)',
                theory: {
                    title: 'Third & Mixed Conditionals',
                    content: [
                        { subtitle: 'Tercer Condicional', text: 'Para hablar de cosas imposibles porque sucedieron diferentes en el pasado (Arrepentimientos).', examples: [{ en: 'If I had studied, I would have passed.', es: 'Si hubiera estudiado, habría aprobado.' }] }
                    ]
                },
                exercises: [
                    { type: 'fillBlank', text: 'If I {0} known, I would have come.', blanks: ['had'], explanation: 'Tercer condicional requiere past perfect en la cláusula "if".' },
                    { type: 'multipleChoice', question: 'If she had studied harder, she...', options: ['will pass', 'would pass', 'would have passed', 'passed'], correctIndex: 2, explanation: 'Tercer condicional (past perfect + would have + past participle).' },
                    { type: 'writingAI', prompt: 'Write a short paragraph about what would have happened if you had chosen a different career.', level: 'avanzado' }
                ]
            }
        ]
    },

    // --- NATIVO E INFORMAL (Slang, Contractions) ---
    l4: {
        id: 'l4',
        title: 'Inglés Nativo & Slang',
        level: 'nativo',
        lessons: [
            {
                id: 'le10',
                title: 'Contractions: Wanna, Gonna, Gotta',
                theory: {
                    title: 'Informal Contractions',
                    content: [
                        { subtitle: 'Reducciones Comunes', text: 'En el inglés hablado rápido fluido americano, las palabras se fusionan.' },
                        { subtitle: 'Reglas principales', text: 'Gotta = Got to (Tengo que). Wanna = Want to (Quiero). Gonna = Going to (Voy a).', examples: [{ en: 'I am gonna go.', es: 'Voy a ir.' }, { en: 'I gotta run.', es: 'Tengo que correr (irme).' }] }
                    ]
                },
                exercises: [
                    { type: 'flashcard', word: { id: 'w4', en: 'Gotta', es: 'Tengo que (Got to)', pronunciation: 'ˈgɒt.ə', example_en: 'I gotta go now.', example_es: 'Me tengo que ir ahora.' } },
                    { type: 'multipleChoice', question: 'What does "wanna" stand for?', options: ['Want to', 'Won\'t to', 'Went to', 'Want a'], correctIndex: 0, explanation: '"Wanna" es la contracción informal de "want to".' },
                    { type: 'dictation', sentence: 'I am gonna call you later.', translation: 'Te voy a llamar más tarde.' }
                ]
            },
            {
                id: 'le11',
                title: 'Connected Speech: Whadya / Dontcha',
                theory: {
                    title: 'Connected Speech (Flujo del Habla)',
                    content: [
                        { subtitle: 'Asimilación Fonética', text: 'Cuando una palabra termina en sonido \'T\' o \'D\' y la siguiente comienza con \'Y\', los sonidos mutan a un sonido "Ch" o "J".' },
                        { subtitle: 'Ejemplos', text: 'What do you... -> Whadya. Don\'t you... -> Dontcha.', examples: [{ en: 'Whatcha doing?', es: '¿Qué estás haciendo? (What are you doing)' }] }
                    ]
                },
                exercises: [
                    { type: 'shadowing', sentence: 'Whadya think about this?', translation: '¿Qué piensas de esto? (What do you...)' },
                    { type: 'fillBlank', text: 'Why {0} you tell me? (Dontcha)', blanks: ['don\'t'], explanation: '"Dontcha" es el sonido que se forma al decir rápido "don\'t you".' },
                    { type: 'wordOrder', sentence: 'Whatcha doing tonight?', translation: '¿Qué estás haciendo esta noche? (What are you...)' }
                ]
            },
            {
                id: 'le12',
                title: 'Native Expressions & Idioms',
                theory: {
                    title: 'Idioms and Slang (Modismos)',
                    content: [
                        { subtitle: '¿Qué es un idiom?', text: 'Es una frase donde el significado de la oración completa es diferente al significado literal de cada palabra.' },
                        { subtitle: 'Phrasal Verbs Comunes', text: '"Hang out" (pasar tiempo relajado interactuando), "My bad" (mi error, lo siento).', examples: [{ en: 'Do you wanna hang out?', es: '¿Quieres que salgamos a pasar el rato?' }] }
                    ]
                },
                exercises: [
                    { type: 'flashcard', word: { id: 'w5', en: 'Hang out', es: 'Pasar el rato', pronunciation: 'hæŋ aʊt', example_en: 'Let\'s hang out tomorrow.', example_es: 'Pasemos el rato mañana.' } },
                    { type: 'multipleChoice', question: 'If someone says "My bad", what are they doing?', options: ['Insulting you', 'Apologizing (Mis disculpas)', 'Saying they are sick', 'Leaving'], correctIndex: 1, explanation: '"My bad" significa "es mi culpa" o "mis disculpas".' },
                    { type: 'writingAI', prompt: 'Escribe una frase informal invitando a un amigo a salir usando "wanna" o "hang out".', level: 'nativo' }
                ]
            }
        ]
    }
};

export const getLessonById = (lessonId) => {
    for (const group of Object.values(lessonsData)) {
        for (const lesson of group.lessons) {
            if (lesson.id === lessonId) return lesson;
        }
    }
    return null;
};
