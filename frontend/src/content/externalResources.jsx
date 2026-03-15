import React from 'react';
import { BookOpen, Globe, Headphones, PenTool, Wrench } from 'lucide-react';

export const externalResources = [
    {
        category: "Herramientas de Traducción",
        icon: <Wrench className="w-6 h-6 text-emerald-400" />,
        background: "bg-emerald-500/10",
        items: [
            {
                title: "DeepL Translator",
                desc: "Considerado el traductor automático más preciso del mundo.",
                url: "https://www.deepl.com/translator",
                badge: "Recomendado",
                difficulty: "Todos",
                accent: "from-emerald-500/20 to-teal-900/20 text-emerald-400",
                iconType: "wrench"
            },
            {
                title: "WordReference",
                desc: "Excelente diccionario online con foros donde nativos resuelven dudas complejas.",
                url: "https://www.wordreference.com/",
                badge: "Esencial",
                difficulty: "Todos",
                accent: "from-purple-500/20 to-indigo-900/20 text-purple-400",
                iconType: "book"
            }
        ]
    },
    {
        category: "Gramática y Ejercicios",
        icon: <PenTool className="w-6 h-6 text-blue-400" />,
        background: "bg-blue-500/10",
        items: [
            {
                title: "Agenda Web",
                desc: "Miles de ejercicios gratuitos de gramática, vocabulario y lectura.",
                url: "https://agendaweb.org/",
                badge: "Práctico",
                difficulty: "Principiante",
                accent: "from-blue-500/20 to-cyan-900/20 text-blue-400",
                iconType: "pen"
            },
            {
                title: "Perfect English Grammar",
                desc: "Explicaciones claras y concisas de las reglas gramaticales con ejercicios.",
                url: "https://www.perfect-english-grammar.com/",
                difficulty: "Intermedio",
                accent: "from-indigo-500/20 to-blue-900/20 text-indigo-400",
                iconType: "pen"
            }
        ]
    },
    {
        category: "Plataformas de Cursos Grátis",
        icon: <Globe className="w-6 h-6 text-brand-yellow" />,
        background: "bg-brand-yellow/10",
        items: [
            {
                title: "BBC Learning English",
                desc: "Material gratuito en audio, texto y video para aprender desde Reino Unido.",
                url: "https://www.bbc.co.uk/learningenglish/",
                badge: "Oficial",
                difficulty: "Intermedio",
                accent: "from-amber-500/20 to-orange-900/20 text-amber-500",
                iconType: "globe"
            },
            {
                title: "Duolingo",
                desc: "Ideal para adquirir vocabulario básico de forma gamificada 5 minutos al día.",
                url: "https://www.duolingo.com/",
                badge: "Popular",
                difficulty: "Principiante",
                accent: "from-green-500/20 to-emerald-900/20 text-brand-green",
                iconType: "play"
            },
            {
                title: "Babbel",
                desc: "Cursos estructurados para la conversación real empresarial y cotidiana.",
                url: "https://babbel.com/",
                difficulty: "Todos",
                accent: "from-orange-500/20 to-red-900/20 text-orange-400",
                iconType: "globe"
            }
        ]
    },
    {
        category: "Podcasts Recomendados",
        icon: <Headphones className="w-6 h-6 text-purple-400" />,
        background: "bg-purple-500/10",
        items: [
            {
                title: "Luke's English Podcast",
                desc: "Un comediante británico enseña inglés a través de contenido entretenido.",
                url: "https://teacherluke.co.uk/",
                badge: "Favorito",
                difficulty: "Avanzado",
                accent: "from-rose-500/20 to-pink-900/20 text-rose-400",
                iconType: "headphone"
            },
            {
                title: "All Ears English",
                desc: "Inglés americano auténtico. Para escuchar cómo hablan los nativos en el día a día.",
                url: "https://www.allearsenglish.com/",
                difficulty: "Intermedio",
                accent: "from-yellow-400/20 to-orange-800/20 text-yellow-400",
                iconType: "headphone"
            },
            {
                title: "Coffee Break English",
                desc: "Episodios cortos ideales para escuchar mientras tomas tu café de la mañana.",
                url: "https://radiolingua.com/coffee-break-english/",
                difficulty: "Principiante",
                accent: "from-fuchsia-500/20 to-purple-900/20 text-fuchsia-400",
                iconType: "headphone"
            }
        ]
    },
    {
        category: "Diccionarios Oficiales",
        icon: <BookOpen className="w-6 h-6 text-slate-400" />,
        background: "bg-slate-500/10",
        items: [
            {
                title: "Cambridge Dictionary",
                desc: "Diccionario ideal para aprender el significado de las palabras directamente en inglés.",
                url: "https://dictionary.cambridge.org/",
                badge: "Imprescindible",
                difficulty: "Avanzado",
                accent: "from-red-600/20 to-rose-900/20 text-red-500",
                iconType: "book"
            },
            {
                title: "Oxford Learner's Dictionaries",
                desc: "Incluye la lista de palabras 'Oxford 3000', el vocabulario esencial.",
                url: "https://www.oxfordlearnersdictionaries.com/",
                difficulty: "Todos",
                accent: "from-sky-500/20 to-blue-900/20 text-sky-400",
                iconType: "book"
            }
        ]
    }
];
