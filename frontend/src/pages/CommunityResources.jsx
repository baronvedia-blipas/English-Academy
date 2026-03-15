import React, { useState } from 'react';
import { externalResources } from '../content/externalResources';
import { ExternalLink, Search, Sparkles, BookOpen, Headphones, Wrench, Globe, Play, PenTool } from 'lucide-react';

export default function CommunityResources() {
    const [searchQuery, setSearchQuery] = useState('');

    // Map string identifiers to actual lucide components dynamically for cards
    const iconMap = {
        'wrench': Wrench,
        'book': BookOpen,
        'pen': PenTool,
        'globe': Globe,
        'play': Play,
        'headphone': Headphones
    };

    const allResourcesCount = externalResources.reduce((acc, cat) => acc + cat.items.length, 0);

    const filteredResources = externalResources.map(category => {
        const filteredItems = category.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-12 animate-fade-in relative">

            {/* Hero Banner Area */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#13151A] to-slate-900 border border-white/5 shadow-2xl mt-4">
                {/* Decorative background blurs inside hero */}
                <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative p-8 md:p-12 lg:p-16 flex flex-col items-center text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-green font-medium text-sm backdrop-blur-md mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span>Curaduría Exclusiva</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Recursos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Aprendizaje</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Explora nuestra colección seleccionada a mano de las mejores herramientas, podcasts y diccionarios gratuitos en la web para potenciar tu inglés.
                    </p>

                    <div className="pt-4 w-full max-w-xl">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex items-center bg-[#1A1D24]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden focus-within:border-brand-green/50 focus-within:ring-1 focus-within:ring-brand-green/50 transition-all">
                                <Search className="w-5 h-5 text-slate-400 ml-4 shrink-0" />
                                <input
                                    type="text"
                                    placeholder={`Buscar entre ${allResourcesCount}+ recursos disponibles...`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-transparent border-none text-slate-200 px-4 py-4 focus:outline-none focus:ring-0 placeholder:text-slate-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Status */}
            {searchQuery && (
                <div className="text-slate-400 text-sm font-medium pl-2">
                    {filteredResources.length === 0 ?
                        <span>No se encontraron resultados para "<span className="text-white">{searchQuery}</span>"</span> :
                        <span>Mostrando resultados para "<span className="text-white">{searchQuery}</span>"</span>
                    }
                </div>
            )}

            {/* Resources Categories */}
            <div className="space-y-16">
                {filteredResources.map((category, catIndex) => (
                    <section key={catIndex} className="space-y-6">
                        {/* Section Header */}
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl ${category.background} border border-white/5 shadow-lg`}>
                                {category.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                                    {category.category}
                                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 text-xs font-bold border border-white/5">
                                        {category.items.length}
                                    </span>
                                </h2>
                                <div className="h-0.5 w-12 bg-gradient-to-r from-slate-700 to-transparent mt-2 rounded-full"></div>
                            </div>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.items.map((item, itemIndex) => {
                                const CardIcon = item.iconType && iconMap[item.iconType] ? iconMap[item.iconType] : ExternalLink;

                                return (
                                    <a
                                        key={itemIndex}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative bg-[#1A1D24] rounded-3xl border border-white/5 p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col min-h-[220px]"
                                    >
                                        {/* Hover Gradient Glow Border Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                        {/* Giant Background Watermark Icon */}
                                        <CardIcon className="absolute -bottom-6 -right-6 w-32 h-32 text-slate-800/30 group-hover:text-slate-700/30 group-hover:scale-110 transition-all duration-500 -rotate-12 pointer-events-none" />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Top Row: Badges */}
                                            <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
                                                <div className="flex gap-2">
                                                    {item.badge && (
                                                        <span className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-gradient-to-r ${item.accent} border border-white/10 shadow-sm`}>
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                    {item.difficulty && (
                                                        <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold rounded-md bg-slate-800 text-slate-300 border border-white/5 shadow-sm">
                                                            {item.difficulty}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                                                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                                {item.desc}
                                            </p>

                                            {/* Hidden pseudo-button that slides up on hover */}
                                            <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center gap-2 text-sm font-semibold">
                                                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${item.accent}`}>Visitar Recurso</span>
                                                <ChevronRight className={`w-4 h-4 ${item.accent.split(' ').pop()}`} />
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            <div className="pt-8 flex justify-center">
                <p className="text-slate-500 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Actualizado constantemente con nuevos recursos
                </p>
            </div>
        </div>
    );
}

// ChevronRight is needed for the hover state text, need to import it up top or inline it. Polyfilling it inline to avoid breaking the import block if it wasn't there.
const ChevronRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m9 18 6-6-6-6" />
    </svg>
);
