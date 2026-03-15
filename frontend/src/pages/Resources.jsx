import React from 'react';
import { BookOpen, Globe, FileText, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resources() {
    const resources = [
        {
            title: "Guía de Párrafos",
            desc: "Aprende a estructurar tus ideas y escribir párrafos en inglés como un profesional.",
            icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
            color: "border-indigo-500 bg-indigo-500/10",
            link: "/parrafos"
        },
        {
            title: "Verbos Irregulares",
            desc: "Lista interactiva de los 100 verbos irregulares más usados en pasado y participio.",
            icon: <FileText className="w-8 h-8 text-brand-green" />,
            color: "border-brand-green bg-brand-green/10"
        },
        {
            title: "Guía de Pronunciación IPA",
            desc: "Cómo leer los símbolos fonéticos (alfabeto fonético internacional) para mejorar tu acento.",
            icon: <Headphones className="w-8 h-8 text-brand-yellow" />,
            color: "border-brand-yellow bg-brand-yellow/10"
        },
        {
            title: "Cultura Americana",
            desc: "Artículos cortos sobre las costumbres y cómo socializar naturalmente en EEUU.",
            icon: <Globe className="w-8 h-8 text-blue-500" />,
            color: "border-blue-500 bg-blue-500/10"
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in max-w-4xl mx-auto py-8">
            <header className="space-y-2">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-brand-green" />
                    <h2 className="text-3xl font-bold text-white">Recursos de Estudio</h2>
                </div>
                <p className="text-gray-400">Material de apoyo que puedes leer en cualquier momento para mejorar tus bases gramaticales y vocabulario.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {resources.map((res, i) => {
                    const CardContent = (
                        <div className="bg-dark-card border border-gray-800 rounded-xl p-6 hover:-translate-y-1 transition-transform cursor-pointer shadow-lg shadow-black/50 group h-full">
                            <div className={`p-4 rounded-xl inline-block mb-4 border ${res.color} group-hover:scale-110 transition-transform`}>
                                {res.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{res.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{res.desc}</p>
                        </div>
                    );

                    return res.link ? (
                        <Link key={i} to={res.link} className="block h-full">
                            {CardContent}
                        </Link>
                    ) : (
                        <div key={i} className="h-full">
                            {CardContent}
                        </div>
                    );
                })}
            </div>

            <section className="mt-12 bg-dark-lighter border border-gray-800 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">¿Buscas herramientas adicionales?</h3>
                <p className="text-gray-400 max-w-xl mx-auto mb-6">Hemos recopilado las mejores herramientas, diccionarios, canales de YouTube y plataformas de la comunidad para complementar tu aprendizaje.</p>
                <Link to="/recursos-comunidad" className="bg-dark-card border border-brand-green text-brand-green hover:bg-brand-green/10 font-medium px-6 py-3 rounded-xl transition-colors inline-block">
                    Ver Recursos de la Comunidad
                </Link>
            </section>
        </div>
    );
}
