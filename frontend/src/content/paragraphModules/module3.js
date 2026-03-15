export const module3 = [
    {
        id: 'p21',
        title: '21. Academic Paragraph',
        moduleId: 'm3',
        moduleTitle: 'Módulo 3: Párrafos por Contexto',
        moduleColor: 'bg-orange-600',
        explanation: 'El Párrafo Académico requiere un registro formal y completamente objetivo. A diferencia del lenguaje general, en la universidad no se usan contracciones (don\'t → do not), ni jerga coloquial. Las afirmaciones deben estar sustentadas mediante citas o referencias (como APA o MLA) y se emplea un vocabulario extraído de la Academic Word List (AWL).',
        structure: {
            title: 'Rigidez Académica',
            points: [
                'No personal pronouns: Evitar "I think" o "We feel".',
                'Strong Topic Sentences apoyadas por evidencia o literatura establecida.',
                'Citas integradas (In-text citations).'
            ]
        },
        example: {
            topicSense: 'The implementation of renewable energy sources significantly decreases dependence on fossil fuels in urban infrastructures.',
            supportingSentences: [
                'According to recent data from the International Energy Agency (2023), cities integrating solar power grids observed a 15% reduction in carbon emissions.',
                'Furthermore, the transition to wind energy diminishes economic vulnerability to volatile global oil prices.',
                'Such structural shifts require substantial initial financial investments from local governments (Smith, 2021).'
            ],
            concludingSense: 'Consequently, while the upfront costs are considerable, the long-term environmental and economic stability justifies the transition.',
            translation: 'La implementación de fuentes de energía renovable disminuye significativamente la dependencia de los combustibles fósiles en las infraestructuras urbanas. Según datos recientes de la Agencia Internacional de Energía (2023), las ciudades que integran redes de energía solar observaron una reducción del 15% en las emisiones de carbono. Además, la transición a la energía eólica disminuye la vulnerabilidad económica a los volátiles precios mundiales del petróleo. Tales cambios estructurales requieren inversiones financieras iniciales sustanciales de los gobiernos locales (Smith, 2021). En consecuencia, si bien los costos iniciales son considerables, la estabilidad ambiental y económica a largo plazo justifica la transición.'
        },
        usefulPhrases: [
            'According to X (2023)... (De acuerdo a X (2023)...)',
            'Previous research indicates that... (Investigaciones previas indican que...)',
            'It is widely acknowledged that... (Es ampliamente reconocido que...)'
        ],
        commonMistakes: [
            {
                wrong: 'Usar lenguaje informal: "In this paper I will talk about how bad pollution is getting."',
                correct: 'Formalidad pura: "This paper examines the increasing severity of pollution levels."',
                explanation: 'Las frases como "I will talk about" son conversacionales; "examines/discusses" son académicas.'
            }
        ],
        exercise: {
            question: '¿Qué NO se debe hacer nunca en un párrafo de corte estrictamente académico?',
            options: ['Emplear sinónimos elaborados.', 'Evocar citas o estudios previos.', 'Utilizar contracciones (isn\'t, doesn\'t) y jerga.'],
            correctAnswer: 2,
            explanation: 'El estilo debe ser inmaculado, usando siempre palabras completas: is not, does not.'
        }
    },
    {
        id: 'p22',
        title: '22. Business Paragraph',
        moduleId: 'm3',
        moduleTitle: 'Módulo 3: Párrafos por Contexto',
        moduleColor: 'bg-orange-600',
        explanation: 'El Párrafo de Negocios se utiliza para redactar reportes corporativos, propuestas y memorandos. Su regla de oro es BLUF (Bottom Line Up Front): debes colocar el punto más importante inmediatamente. No se adorna el lenguaje ni se da preámbulo; el tiempo de quien lo lee (jefes, clientes) es dinero. Debe ser directo, claro y profesional.',
        structure: {
            title: 'Estilo Corporativo',
            points: [
                'Main Point First (BLUF).',
                'Actionable details (datos precisos que lleven a una acción clara).',
                'Concisión máxima (cortar la paja).'
            ]
        },
        example: {
            topicSense: 'To address the recent decline in Q3 sales, we propose launching a targeted digital marketing campaign next week.',
            supportingSentences: [
                'Our analytics explicitly show a 20% drop in user engagement among the 18-25 demographic.',
                'By reallocating $50,000 from traditional print media to Instagram and TikTok ads, we can effectively reach this lost demographic.',
                'Initial simulations project a 15% recovery in overall revenue within the first month of the new strategy.'
            ],
            concludingSense: 'Please review the attached budget breakdown and approve the funds by Friday so we can begin implementation immediately.',
            translation: 'Para abordar la reciente disminución en las ventas del tercer trimestre, proponemos lanzar una campaña de marketing digital focalizada la próxima semana. Nuestros análisis muestran explícitamente una caída del 20% en la participación de los usuarios entre el grupo demográfico de 18 a 25 años. Al reasignar $50,000 de los medios impresos tradicionales a los anuncios de Instagram y TikTok, podemos llegar efectivamente a este grupo demográfico perdido. Las simulaciones iniciales proyectan una recuperación del 15% en los ingresos generales durante el primer mes de la nueva estrategia. Revise el desglose del presupuesto adjunto y apruebe los fondos para el viernes de modo que podamos comenzar la implementación de inmediato.'
        },
        usefulPhrases: [
            'To address this issue,... (Para abordar este asunto...)',
            'Please review the attached... (Por favor revise el archivo adjunto...)',
            'Based on the current data,... (Basados en los datos actuales...)'
        ],
        commonMistakes: [
            {
                wrong: 'Esconder la idea al final: "Hola, espero estés bien. He pensado mucho y al final de todo creo que necesitamos presupuesto..."',
                correct: 'Ir al grano rápido: "We request a budget increase of 10% for the following reasons..."',
                explanation: 'En los negocios, oculta el punto principal es falta de profesionalismo.'
            }
        ],
        exercise: {
            question: '¿Qué significa el estándar BLUF en Business Writing?',
            options: ['Beautiful Letters Upon Forms', 'Bottom Line Up Front (El punto principal al frente)', 'Basic Language Use Forever'],
            correctAnswer: 1,
            explanation: 'La regla corporativa base exige la demanda o problema real expuesto en las primeras líneas.'
        }
    },
    {
        id: 'p23',
        title: '23. Creative Writing',
        moduleId: 'm3',
        moduleTitle: 'Módulo 3: Párrafos por Contexto',
        moduleColor: 'bg-orange-600',
        explanation: 'El Párrafo de Escritura Creativa no sigue las leyes restrictivas del párrafo académico ni expositivo. Su objetivo es sumergir emocional e imaginativamente al lector. Rige el principio magistral de "Show, Don\'t Tell" (Muestra, no lo digas). En vez de decir "Él estaba triste", debes mostrar las lágrimas, el silencio, el lenguaje corporal melancólico.',
        structure: {
            title: 'Herramientas Creativas',
            points: [
                'Uso poderoso y sin miramientos de Metáforas y Símiles.',
                'Ritmo intercalado: Oraciones largas descriptivas seguidas de una brutalmente corta.',
                '"Show, don\'t tell": Ilustrar la emoción en vez de reportarla.'
            ]
        },
        example: {
            topicSense: 'The old mansion sat on the hill like a forgotten ghost, slowly rotting away under the pale autumn moon.',
            supportingSentences: [
                'Its shattered windows stared blankly into the dense, overgrown forest, while the wooden porch groaned with every gust of wind.',
                'Inside, a thick layer of dust blanketed the cracked leather furniture, preserving the silence of decades untouched.',
                'Even the crows avoided resting on its jagged, decaying roof.'
            ],
            concludingSense: 'Every shadow in that cursed place whispered secrets no living soul was meant to hear.',
            translation: 'La vieja mansión se alzaba sobre la colina como un fantasma olvidado, pudriéndose lentamente bajo la pálida luna de otoño. Sus ventanas destrozadas miraban fijamente hacia el bosque denso y cubierto de maleza, mientras el porche de madera gemía con cada ráfaga de viento. En el interior, una gruesa capa de polvo cubría los muebles de cuero agrietados, preservando el silencio de décadas intactas. Incluso los cuervos evitaban descansar en su techo irregular y decadente. Cada sombra en ese maldito lugar susurraba secretos que ninguna alma viviente estaba destinada a escuchar.'
        },
        usefulPhrases: [
            'It felt as though... (Se sentía como si...)',
            'Like a... (Como un...)',
            'The silence was broken by... (El silencio fue roto por...)'
        ],
        commonMistakes: [
            {
                wrong: 'Telling (Decir): "The man was very angry and frustrated."',
                correct: 'Showing (Mostrar): "The man clenched his fists so tightly his knuckles turned white, grinding his teeth."',
                explanation: 'A los lectores les gusta descubrir la emoción leyendo pistas físicas, no que se las cuenten textualmente.'
            }
        ],
        exercise: {
            question: 'Elegir el mejor ejemplo de la técnica "Show, don\'t tell" para "The boy was scared":',
            options: ['He was extremely frightened by the monster.', 'His heart hammered against his ribs as he hid trembling in the dark.', 'Fear was the main emotion he felt vividly.'],
            correctAnswer: 1,
            explanation: 'Describir los latidos y el temblor permite al lector visualizar perfectamente el miedo del niño sin decir "estaba asustado".'
        }
    },
    {
        id: 'p24',
        title: '24. Informal/Personal',
        moduleId: 'm3',
        moduleTitle: 'Módulo 3: Párrafos por Contexto',
        moduleColor: 'bg-orange-600',
        explanation: 'El Párrafo Informal se emplea en la comunicación casual: mensajes de WhatsApp extensos, entradas de diarios o emails a amigos cercanos. Aquí permites romper reglas formales intencionalmente para reflejar calidez y naturalidad: abundancia de contracciones (I\'m, gonna, couldn\'t), modismos (slang) e incluso puntuación emocional exuberante (!!!).',
        structure: {
            title: 'Lenguaje Conversacional',
            points: [
                'Redacción relajada y fluida, imitando la voz hablada.',
                'Libertad para empezar oraciones con "And" o "But".',
                'No es necesario llevar una Topic Sentence severa o escolástica.'
            ]
        },
        example: {
            topicSense: 'I literally just got back from the most insane concert of my entire life!',
            supportingSentences: [
                'We were so lucky because we managed to get front row tickets at the very last second.',
                'The band played all of my favorite classic songs, and the energy in the crowd was absolutely unreal.',
                'And guess what? The lead singer even high-fived me during the final encore!'
            ],
            concludingSense: 'I’m completely exhausted and my throat hurts from screaming, but it was so worth it.',
            translation: '¡Literalmente acabo de regresar del concierto más loco de toda mi vida! Tuvimos tanta suerte porque logramos conseguir boletos para la primera fila en el último segundo. La banda tocó todas mis canciones clásicas favoritas, y la energía de la multitud era absolutamente irreal. ¿Y adivina qué? ¡El cantante principal incluso me chocó los cinco durante el bis final! Estoy completamente agotado y me duele la garganta de gritar, pero valió mucho la pena.'
        },
        usefulPhrases: [
            'Guess what... (Adivina qué...)',
            'To be honest... (Para ser sincero...)',
            'It was literally the best... (Fue literalmente el mejor/lo mejor...)'
        ],
        commonMistakes: [
            {
                wrong: 'Sonar robótico a un amigo: "Greeting friend. I am writing to inform you that I enjoyed the concert."',
                correct: 'Natural y caluroso: "Hey! You won\'t believe how awesome the concert was."',
                explanation: 'Un error fatal de los estudiantes de inglés es hablar con amigos o familia con inglés corporativo.'
            }
        ],
        exercise: {
            question: '¿Qué palabra se ve mayormente en un Párrafo Informal, pero está casi vetada en formatos Académicos?',
            options: ['Consequently', 'Insane / Literally / Gonna', 'Therefore'],
            correctAnswer: 1,
            explanation: 'Las palabras de uso exagerado y superlativas como Literally o modismos (Gonna) pertenecen al ecosistema callejero e íntimo.'
        }
    },
    {
        id: 'p25',
        title: '25. Email Paragraph',
        moduleId: 'm3',
        moduleTitle: 'Módulo 3: Párrafos por Contexto',
        moduleColor: 'bg-orange-600',
        explanation: 'Un correo electrónico rara vez está compuesto por un solo bloque enorme. Se debe segmentar en diminutos "Email Paragraphs" muy digeribles. El 1° párrafo apertura y saluda indicando el "por qué" (purpose); el 2° párrafo expande los detalles; y el 3° párrafo exige un seguimiento (next steps) con una despedida afable.',
        structure: {
            title: 'Trilogía del Email',
            points: [
                'Apertura: Saludo profesional + "The reason I am writing is..."',
                'Desarrollo: Párrafo de 3-4 líneas (jamás testamentos inmensos).',
                'Cierre (Next steps): Despedida + "Looking forward to hearing from you."'
            ]
        },
        example: {
            topicSense: 'I am writing to formally request a few days of paid time off (PTO) early next month.',
            supportingSentences: [
                'Specifically, I would like to take off from Wednesday, October 12, to Friday, October 14, for personal family reasons.',
                'Before leaving, I will ensure that all my weekly reports are completed and submitted to the shared drive.',
                'Additionally, Sarah has agreed to cover any urgent client calls while I am away.'
            ],
            concludingSense: 'Please let me know if this request is approved or if you need me to adjust the dates.',
            translation: 'Le escribo para solicitar formalmente unos días de tiempo libre remunerado a principios del próximo mes. Específicamente, me gustaría tomarme los días libres del miércoles 12 de octubre al viernes 14 de octubre por razones familiares personales. Antes de irme, me aseguraré de que todos mis informes semanales estén completos y enviados a la unidad compartida. Además, Sarah ha aceptado cubrir cualquier llamada urgente de clientes mientras no esté. Avíseme si esta solicitud es aprobada o si necesita que ajuste las fechas.'
        },
        usefulPhrases: [
            'I am writing to... (Le escribo para...)',
            'Please let me know if... (Por favor avíseme si...)',
            'Looking forward to your reply. (Espero con ansias su respuesta.)'
        ],
        commonMistakes: [
            {
                wrong: 'Esconder el propósito del correo detrás de 4 párrafos que nadie lee.',
                correct: 'Ir directo al "Action item": Abriendo el mail con "I am writing to request..."',
                explanation: 'Las personas escanean sus buzones; si no ven la tarea rápido, archivarán tu email.'
            }
        ],
        exercise: {
            question: '¿Qué se debe colocar sin excepción en el último párrafo de un correo electrónico laboral?',
            options: ['Un último saludo antes que se corra la hora del día.', 'Las fotos de las vacaciones prometidas.', 'Los "Next Steps" (próximos pasos o llamada a la acción).'],
            correctAnswer: 2,
            explanation: 'Un correo eficaz jamás cierra dejando la pelota en tu cancha, cierra indicando que tú esperas la acción del receptor ("Favor de aprobar").'
        }
    }
];
