import React, { useState, useEffect } from 'react';
import { paragraphData, paragraphModulesInfo } from '../content/paragraphData';
import { Search, Book, CheckCircle, ChevronRight, Menu, X, CheckCircle2, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ParagraphGuide() {
    const [activeTopicId, setActiveTopicId] = useState(paragraphData[0].id);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Progress state mapped by topic ID: { "p1": true, "p2": true }
    const [progress, setProgress] = useState({});

    // Exercise state
    const [exerciseAnswer, setExerciseAnswer] = useState(null);
    const [exerciseStatus, setExerciseStatus] = useState(null); // null, 'correct', 'incorrect'

    // Translation toggle for examples
    const [showTranslation, setShowTranslation] = useState(false);

    useEffect(() => {
        const savedProgress = localStorage.getItem('paragraph_progress');
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }
    }, []);

    const toggleCompletion = (topicId) => {
        const newProgress = { ...progress, [topicId]: !progress[topicId] };
        setProgress(newProgress);
        localStorage.setItem('paragraph_progress', JSON.stringify(newProgress));
    };

    const activeTopic = paragraphData.find(t => t.id === activeTopicId) || paragraphData[0];

    // Filter topics based on search query
    const filteredTopics = paragraphData.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.moduleTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const checkExercise = () => {
        if (!activeTopic.exercise || exerciseAnswer === null) return;

        let isCorrect = false;
        if (activeTopic.exercise.options) { // Multiple choice
            isCorrect = exerciseAnswer === activeTopic.exercise.correctAnswer;
        }

        setExerciseStatus(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect && !progress[activeTopic.id]) {
            toggleCompletion(activeTopic.id);
        }
    };

    // Reset exercise when switching topics
    useEffect(() => {
        setExerciseAnswer(null);
        setExerciseStatus(null);
        setShowTranslation(false);
        setMobileMenuOpen(false); // close mobile menu on selection
    }, [activeTopicId]);

    const colorStyles = {
        'bg-indigo-600': {
            badge: 'bg-indigo-600/20 text-indigo-400 border-indigo-600/30',
            sidebarActive: 'bg-indigo-600/10 text-indigo-400',
            sidebarIcon: 'text-indigo-400',
            exerciseContainer: 'from-indigo-600/10 border-indigo-600/30',
            exerciseIcon: 'text-indigo-400',
            exerciseButtonActive: 'bg-indigo-600/20 border-indigo-500 text-white ring-1 ring-indigo-500',
            verifyButton: 'bg-indigo-600 hover:bg-indigo-500 text-white'
        },
        'bg-emerald-600': {
            badge: 'bg-emerald-600/20 text-emerald-400 border-emerald-600/30',
            sidebarActive: 'bg-emerald-600/10 text-emerald-400',
            sidebarIcon: 'text-emerald-400',
            exerciseContainer: 'from-emerald-600/10 border-emerald-600/30',
            exerciseIcon: 'text-emerald-400',
            exerciseButtonActive: 'bg-emerald-600/20 border-emerald-500 text-white ring-1 ring-emerald-500',
            verifyButton: 'bg-emerald-600 hover:bg-emerald-500 text-white'
        },
        'bg-orange-600': {
            badge: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
            sidebarActive: 'bg-orange-600/10 text-orange-400',
            sidebarIcon: 'text-orange-400',
            exerciseContainer: 'from-orange-600/10 border-orange-600/30',
            exerciseIcon: 'text-orange-400',
            exerciseButtonActive: 'bg-orange-600/20 border-orange-500 text-white ring-1 ring-orange-500',
            verifyButton: 'bg-orange-600 hover:bg-orange-500 text-white'
        },
        'bg-purple-600': {
            badge: 'bg-purple-600/20 text-purple-400 border-purple-600/30',
            sidebarActive: 'bg-purple-600/10 text-purple-400',
            sidebarIcon: 'text-purple-400',
            exerciseContainer: 'from-purple-600/10 border-purple-600/30',
            exerciseIcon: 'text-purple-400',
            exerciseButtonActive: 'bg-purple-600/20 border-purple-500 text-white ring-1 ring-purple-500',
            verifyButton: 'bg-purple-600 hover:bg-purple-500 text-white'
        },
        'bg-rose-600': {
            badge: 'bg-rose-600/20 text-rose-400 border-rose-600/30',
            sidebarActive: 'bg-rose-600/10 text-rose-400',
            sidebarIcon: 'text-rose-400',
            exerciseContainer: 'from-rose-600/10 border-rose-600/30',
            exerciseIcon: 'text-rose-400',
            exerciseButtonActive: 'bg-rose-600/20 border-rose-500 text-white ring-1 ring-rose-500',
            verifyButton: 'bg-rose-600 hover:bg-rose-500 text-white'
        }
    };

    const getModuleBadge = (moduleId) => {
        const moduleInfo = paragraphModulesInfo.find(m => m.id === moduleId);
        if (!moduleInfo) return null;

        const style = colorStyles[moduleInfo.color]?.badge || 'bg-gray-800 text-gray-300 border-gray-700';

        return (
            <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full border ${style}`}>
                {moduleInfo.title}
            </span>
        );
    };

    // Group topics by module
    const groupedTopics = paragraphModulesInfo.map(module => ({
        ...module,
        topics: filteredTopics.filter(t => t.moduleId === module.id)
    })).filter(group => group.topics.length > 0);

    return (
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-dark animate-fade-in relative max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">

            {/* Mobile Header Toggle */}
            <div className="md:hidden bg-dark-card border-b border-gray-800 p-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                    <Book className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold text-white">Guía de Párrafos</span>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400">
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform absolute md:relative z-10 w-full md:w-80 bg-dark-card border-r border-gray-800 flex flex-col h-full inset-y-0 left-0`}>
                <div className="p-4 border-b border-gray-800 space-y-4 bg-dark-card">
                    <div className="hidden md:flex items-center gap-2 mb-2">
                        <Book className="w-6 h-6 text-indigo-500" />
                        <h2 className="text-xl font-bold text-white">Guía de Párrafos</h2>
                    </div>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                            type="text"
                            placeholder="Buscar tema..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-dark border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    {/* Progress Summary */}
                    <div className="flex items-center justify-between text-xs text-indigo-400">
                        <span className="font-medium">Tu Progreso Total:</span>
                        <span className="font-bold">{Object.keys(progress).length} / {paragraphData.length}</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-1.5">
                        <div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(Object.keys(progress).length / paragraphData.length) * 100}%` }}></div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
                    {groupedTopics.length === 0 ? (
                        <p className="text-gray-500 text-sm text-center py-4">No se encontraron temas.</p>
                    ) : (
                        groupedTopics.map(group => (
                            <div key={group.id} className="mb-6">
                                <h3 className={`text-xs font-bold uppercase tracking-wider px-3 mb-2 mt-2 flex items-center gap-2 ${colorStyles[group.color]?.sidebarIcon || 'text-gray-400'}`}>
                                    <span className={`w-2 h-2 rounded-full ${group.color}`}></span>
                                    {group.title}
                                </h3>
                                <div className="space-y-1">
                                    {group.topics.map(topic => {
                                        const isActive = activeTopicId === topic.id;
                                        const activeStyle = colorStyles[group.color]?.sidebarActive || 'bg-gray-800 text-white';
                                        const iconStyle = colorStyles[group.color]?.sidebarIcon || 'text-gray-400';

                                        return (
                                            <button
                                                key={topic.id}
                                                onClick={() => setActiveTopicId(topic.id)}
                                                className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${isActive ? activeStyle : 'text-gray-300 hover:bg-gray-800'}`}
                                            >
                                                <span className="text-sm font-medium pr-2 truncate" title={topic.title}>{topic.title}</span>
                                                {progress[topic.id] && <CheckCircle className={`w-4 h-4 shrink-0 ${isActive ? iconStyle : 'text-gray-500'}`} />}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 bg-dark overflow-y-auto h-full p-4 md:p-8 custom-scrollbar relative">
                {activeTopic ? (
                    <div className="max-w-3xl mx-auto space-y-8 pb-12">
                        {/* Header */}
                        <header className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <Link to="/recursos" className="hover:text-white transition-colors">Recursos</Link>
                                <ChevronRight className="w-4 h-4" />
                                <span>Párrafos</span>
                                <ChevronRight className="w-4 h-4" />
                                <span className="text-gray-400">{activeTopic.moduleTitle}</span>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">{activeTopic.title}</h1>
                                    {getModuleBadge(activeTopic.moduleId)}
                                </div>
                                <button
                                    onClick={() => toggleCompletion(activeTopic.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${progress[activeTopic.id] ? 'bg-indigo-500/10 border-indigo-500 text-indigo-400' : 'bg-dark-card border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'}`}
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    {progress[activeTopic.id] ? 'Completado' : 'Marcar Aprendido'}
                                </button>
                            </div>
                        </header>

                        {/* Explanation */}
                        <section className="bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-8 space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className={`w-1.5 h-6 rounded-full ${activeTopic.moduleColor}`}></span>
                                    Explicación
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{activeTopic.explanation}</p>
                            </div>

                            <div className="bg-dark-lighter border border-gray-700 p-5 rounded-xl">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-3">{activeTopic.structure.title}</span>
                                <ul className="space-y-2">
                                    {activeTopic.structure.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-300">
                                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${activeTopic.moduleColor}`}></span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        {/* Interactive Paragraph Example */}
                        <section>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full bg-brand-green"></span>
                                    Párrafo de Ejemplo Analizado
                                </h3>
                                <button
                                    onClick={() => setShowTranslation(!showTranslation)}
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-dark-card px-3 py-1.5 rounded-lg border border-gray-700"
                                >
                                    <Languages className="w-4 h-4" />
                                    {showTranslation ? 'Ocultar Traducción' : 'Ver Traducción'}
                                </button>
                            </div>

                            <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-8 space-y-4">
                                {/* Anatomical View */}
                                <div className="space-y-3">
                                    {/* Topic Sentence */}
                                    {activeTopic.example.topicSense && (
                                        <div className="group relative">
                                            <div className="border-l-4 border-green-500 pl-4 py-1">
                                                <p className="text-white text-lg leading-relaxed">{activeTopic.example.topicSense}</p>
                                            </div>
                                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity bg-dark border border-gray-700 px-2 py-1 rounded text-xs text-green-400 whitespace-nowrap hidden md:block">
                                                Topic Sentence
                                            </div>
                                        </div>
                                    )}

                                    {/* Supporting Sentences */}
                                    {activeTopic.example.supportingSentences && activeTopic.example.supportingSentences.map((sent, i) => (
                                        <div key={i} className="group relative">
                                            <div className="border-l-4 border-blue-500 pl-4 py-1">
                                                <p className="text-gray-300 text-lg leading-relaxed">{sent}</p>
                                            </div>
                                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity bg-dark border border-gray-700 px-2 py-1 rounded text-xs text-blue-400 whitespace-nowrap hidden md:block">
                                                Supporting Idea
                                            </div>
                                        </div>
                                    ))}

                                    {/* Concluding Sentence */}
                                    {activeTopic.example.concludingSense && (
                                        <div className="group relative">
                                            <div className="border-l-4 border-yellow-500 pl-4 py-1">
                                                <p className="text-gray-200 text-lg leading-relaxed">{activeTopic.example.concludingSense}</p>
                                            </div>
                                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:opacity-100 transition-opacity bg-dark border border-gray-700 px-2 py-1 rounded text-xs text-yellow-500 whitespace-nowrap hidden md:block">
                                                Concluding Sentence
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Translation Display */}
                                {showTranslation && activeTopic.example.translation && (
                                    <div className="mt-6 pt-6 border-t border-gray-800 bg-gray-900/50 p-4 rounded-xl animate-fade-in border-l-4 border-gray-600">
                                        <p className="text-gray-400 italic leading-relaxed text-sm md:text-base">
                                            "{activeTopic.example.translation}"
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Useful Phrases */}
                        {activeTopic.usefulPhrases && activeTopic.usefulPhrases.length > 0 && (
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full bg-cyan-500"></span>
                                    Frases Útiles
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {activeTopic.usefulPhrases.map((phrase, i) => {
                                        const [en, es] = phrase.split(' (');
                                        return (
                                            <div key={i} className="bg-dark-card border border-gray-800 p-4 rounded-xl hover:border-cyan-500/50 transition-colors">
                                                <p className="text-white font-medium mb-1">{en}</p>
                                                {es && <p className="text-sm text-gray-500 italic">({es}</p>}
                                            </div>
                                        )
                                    })}
                                </div>
                            </section>
                        )}

                        {/* Common Mistakes */}
                        <section className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-brand-red mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full bg-brand-red"></span>
                                Frases o Estructuras a Evitar
                            </h3>
                            <div className="space-y-4">
                                {activeTopic.commonMistakes.map((mistake, index) => (
                                    <div key={index} className="bg-dark/50 border border-red-500/20 rounded-xl p-4">
                                        <div className="flex flex-col md:flex-row gap-4 mb-3 pb-3 border-b border-gray-800/50">
                                            <div className="flex-1">
                                                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">Incorrecto ❌</span>
                                                <p className="text-gray-300 italic line-through decoration-red-500/50">{mistake.wrong}</p>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider block mb-1">Correcto ✅</span>
                                                <p className="text-white font-medium">{mistake.correct}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-red-200/80"><span className="font-bold opacity-75">Por qué:</span> {mistake.explanation}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Mini Exercise */}
                        {activeTopic.exercise && (
                            <section className={`bg-gradient-to-br transition-colors rounded-2xl p-6 md:p-8 to-dark-card border ${colorStyles[activeTopic.moduleColor]?.exerciseContainer || 'from-gray-800/20 border-gray-700'}`}>
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className={colorStyles[activeTopic.moduleColor]?.exerciseIcon || 'text-gray-400'}>⚡</span>
                                    Práctica de Comprensión
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm">Responde para confirmar que entendiste la teoría de este tema.</p>

                                <div className="space-y-4 mb-6">
                                    <p className="text-lg font-medium text-white mb-4">{activeTopic.exercise.question}</p>
                                    <div className="grid grid-cols-1 gap-3">
                                        {activeTopic.exercise.options.map((opt, i) => {
                                            const isSelected = exerciseAnswer === i;
                                            const activeButtonStyle = colorStyles[activeTopic.moduleColor]?.exerciseButtonActive || 'bg-gray-700 text-white';
                                            return (
                                                <button
                                                    key={i}
                                                    onClick={() => {
                                                        setExerciseAnswer(i);
                                                        setExerciseStatus(null);
                                                    }}
                                                    className={`p-4 rounded-xl border text-left transition-all ${isSelected ? activeButtonStyle : 'bg-dark border-gray-700 text-gray-300 hover:border-gray-500'}`}
                                                >
                                                    {opt}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                <button
                                    onClick={checkExercise}
                                    disabled={exerciseAnswer === null}
                                    className={`w-full md:w-auto font-bold py-3 px-8 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${colorStyles[activeTopic.moduleColor]?.verifyButton || 'bg-gray-600 text-white hover:bg-gray-500'}`}
                                >
                                    Verificar
                                </button>

                                {exerciseStatus && (
                                    <div className={`mt-6 p-4 rounded-xl border flex gap-3 ${exerciseStatus === 'correct' ? 'bg-green-500/10 border-green-500/50 text-green-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
                                        <div className="mt-1 shrink-0">
                                            {exerciseStatus === 'correct' ? <CheckCircle2 className="w-5 h-5" /> : <X className="w-5 h-5" />}
                                        </div>
                                        <div>
                                            <p className="font-bold">{exerciseStatus === 'correct' ? '¡Excelente!' : 'Casi, intenta otra vez.'}</p>
                                            <p className={`text-sm mt-1 opacity-90 ${exerciseStatus === 'incorrect' && 'hidden'}`}>{activeTopic.exercise.explanation}</p>
                                        </div>
                                    </div>
                                )}
                            </section>
                        )}
                    </div>
                ) : null}
            </main>
        </div>
    );
}
