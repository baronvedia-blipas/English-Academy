import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, BookOpen, PenTool, Map, X, Keyboard } from 'lucide-react';
import { grammarData } from '../../content/grammarData';
import { lessonsData } from '../../content/lessons';
import { paragraphData } from '../../content/paragraphData';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // Flatten all data
    const allData = React.useMemo(() => {
        const grammarItems = grammarData.map(item => ({
            id: item.id,
            title: item.title,
            type: 'Gramática',
            route: `/gramatica?t=${item.id}`,
            icon: BookOpen,
            color: 'text-purple-400',
            bg: 'bg-purple-500/10'
        }));

        const paragraphItems = paragraphData.map(item => ({
            id: item.id,
            title: item.title,
            type: 'Párrafos',
            route: `/parrafos?t=${item.id}`,
            icon: PenTool,
            color: 'text-indigo-400',
            bg: 'bg-indigo-500/10'
        }));

        const lessonItems = [];
        Object.values(lessonsData).forEach(group => {
            group.lessons.forEach(lesson => {
                lessonItems.push({
                    id: lesson.id,
                    title: lesson.title,
                    type: 'Lección Aventura',
                    route: `/lesson/${lesson.id}`,
                    icon: Map,
                    color: 'text-blue-400',
                    bg: 'bg-blue-500/10'
                });
            });
        });

        return [...grammarItems, ...paragraphItems, ...lessonItems];
    }, []);

    // Handle Keyboard Shortcut
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setQuery('');
            setSelectedIndex(0);
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    // Handle Search
    useEffect(() => {
        if (!query.trim()) {
            setResults(allData.slice(0, 5)); // Show some default suggestions
            return;
        }

        const filtered = allData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.type.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 8)); // Max 8 results to avoid huge list
        setSelectedIndex(0);
    }, [query, allData]);

    // Handle Result Navigation
    useEffect(() => {
        const handleNavigation = (e) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (results[selectedIndex]) {
                    handleSelect(results[selectedIndex].route);
                }
            }
        };
        document.addEventListener('keydown', handleNavigation);
        return () => document.removeEventListener('keydown', handleNavigation);
    }, [isOpen, results, selectedIndex]);

    const handleSelect = (route) => {
        navigate(route);
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-black/50 overflow-hidden" onClick={() => setIsOpen(false)}>
            <div 
                className="w-full max-w-2xl bg-[#13151A] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Search Header */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-800 bg-[#0F1117]">
                    <Search className="w-5 h-5 text-brand-green" />
                    <input 
                        ref={inputRef}
                        type="text" 
                        placeholder="Buscar lección, gramática o párrafo..." 
                        className="flex-1 bg-transparent border-none outline-none text-white text-lg placeholder-gray-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Results List */}
                <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
                    {results.length === 0 ? (
                        <div className="px-4 py-12 text-center text-gray-500 flex flex-col items-center">
                            <Search className="w-8 h-8 mb-3 opacity-20" />
                            <p>No se encontraron resultados para "{query}"</p>
                            <p className="text-sm mt-1 opacity-70">Intenta buscar temas como "Presente", "Topic Sentence" o "Saludos"</p>
                        </div>
                    ) : (
                        <div className="space-y-1">
                            {!query.trim() && (
                                <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    Sugerencias
                                </p>
                            )}
                            {results.map((item, index) => {
                                const Icon = item.icon;
                                const isSelected = index === selectedIndex;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleSelect(item.route)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                                            isSelected 
                                                ? 'bg-brand-green/10 ring-1 ring-brand-green/30' 
                                                : 'hover:bg-white/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${item.bg}`}>
                                                <Icon className={`w-5 h-5 ${item.color}`} />
                                            </div>
                                            <div className="text-left">
                                                <p className={`font-semibold ${isSelected ? 'text-brand-green' : 'text-slate-200'}`}>
                                                    {item.title}
                                                </p>
                                                <p className="text-xs text-slate-500 mt-0.5">{item.type}</p>
                                            </div>
                                        </div>
                                        {isSelected && <ChevronRightIcon className="w-5 h-5 text-brand-green" />}
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Footer hints */}
                <div className="px-4 py-3 bg-[#0F1117] border-t border-gray-800 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><kbd className="bg-gray-800 border border-gray-700 rounded px-1 min-w-[20px] text-center font-sans font-medium text-gray-400">&uarr;&darr;</kbd> para navegar</span>
                        <span className="flex items-center gap-1"><kbd className="bg-gray-800 border border-gray-700 rounded px-1.5 font-sans font-medium text-gray-400">Enter</kbd> para abrir</span>
                    </div>
                    <span className="flex items-center gap-1"><kbd className="bg-gray-800 border border-gray-700 rounded px-1.5 font-sans font-medium text-gray-400">Esc</kbd> para cerrar</span>
                </div>
            </div>
        </div>
    );
}

// Small helper component
function ChevronRightIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    )
}
