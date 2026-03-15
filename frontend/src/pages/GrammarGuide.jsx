import React, { useState, useEffect } from 'react';
import { grammarData } from '../content/grammarData';
import { Search, Book, CheckCircle, ChevronRight, Menu, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/UI/Breadcrumbs';

export default function GrammarGuide() {
    const [activeTopicId, setActiveTopicId] = useState(grammarData[0].id);
    const [searchQuery, setSearchQuery] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Progress state mapped by topic ID: { "articulos": true, "verbo-to-be": true }
    const [progress, setProgress] = useState({});

    // Exercise state
    const [exerciseAnswer, setExerciseAnswer] = useState('');
    const [exerciseStatus, setExerciseStatus] = useState(null); // null, 'correct', 'incorrect'

    useEffect(() => {
        const savedProgress = localStorage.getItem('grammar_progress');
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }
    }, []);

    const toggleCompletion = (topicId) => {
        const newProgress = { ...progress, [topicId]: !progress[topicId] };
        setProgress(newProgress);
        localStorage.setItem('grammar_progress', JSON.stringify(newProgress));
    };

    const activeTopic = grammarData.find(t => t.id === activeTopicId) || grammarData[0];

    // Filter topics based on search query
    const filteredTopics = grammarData.filter(t =>
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const checkExercise = () => {
        if (!activeTopic.exercise) return;

        let isCorrect = false;
        if (activeTopic.exercise.type === 'multiple') {
            const correctAnswerText = activeTopic.exercise.options[activeTopic.exercise.correctIndex];
            isCorrect = exerciseAnswer === correctAnswerText;
        } else if (activeTopic.exercise.type === 'fill') {
            isCorrect = exerciseAnswer.toLowerCase().trim() === activeTopic.exercise.blanks[0].toLowerCase().trim();
        }

        setExerciseStatus(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect && !progress[activeTopic.id]) {
            toggleCompletion(activeTopic.id);
        }
    };

    // Reset exercise when switching topics
    useEffect(() => {
        setExerciseAnswer('');
        setExerciseStatus(null);
        setMobileMenuOpen(false); // close mobile menu on selection
    }, [activeTopicId]);

    const getLevelBadge = (level) => {
        const badgeClasses = {
            'Básico': 'bg-brand-green/20 text-brand-green border-brand-green/30',
            'Intermedio': 'bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30',
            'Avanzado': 'bg-brand-red/20 text-brand-red border-brand-red/30',
            'Secciones Especiales': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
        };
        return (
            <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full border ${badgeClasses[level] || 'bg-gray-800 text-gray-300'}`}>
                {level}
            </span>
        );
    };

    return (
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-dark animate-fade-in relative max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">

            {/* Mobile Header Toggle */}
            <div className="md:hidden bg-dark-card border-b border-gray-800 p-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                    <Book className="w-5 h-5 text-brand-green" />
                    <span className="font-bold text-white">Guía de Gramática</span>
                </div>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-400">
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside className={`${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform absolute md:relative z-10 w-full md:w-80 bg-dark-card border-r border-gray-800 flex flex-col h-full inset-y-0 left-0`}>
                <div className="p-4 border-b border-gray-800 space-y-4 bg-dark-card">
                    <div className="hidden md:flex items-center gap-2 mb-2">
                        <Book className="w-6 h-6 text-brand-green" />
                        <h2 className="text-xl font-bold text-white">Gramática</h2>
                    </div>
                    <div className="relative">
                        <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                        <input
                            type="text"
                            placeholder="Buscar tema..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-dark border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-200 focus:outline-none focus:border-brand-green"
                        />
                    </div>

                    {/* Progress Summary */}
                    <div className="flex items-center justify-between text-xs text-brand-green">
                        <span className="font-medium">Tu Progreso Total:</span>
                        <span className="font-bold">{Object.keys(progress).length} / {grammarData.length}</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-1.5">
                        <div className="bg-brand-green h-1.5 rounded-full" style={{ width: `${(Object.keys(progress).length / grammarData.length) * 100}%` }}></div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-3 space-y-1">
                    {filteredTopics.length === 0 ? (
                        <p className="text-gray-500 text-sm text-center py-4">No se encontraron temas.</p>
                    ) : (
                        ['Básico', 'Intermedio', 'Avanzado', 'Secciones Especiales'].map(level => {
                            const levelTopics = filteredTopics.filter(t => t.level === level);
                            if (levelTopics.length === 0) return null;

                            return (
                                <div key={level} className="mb-4">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider px-3 mb-2 mt-2">{level}</h3>
                                    {levelTopics.map(topic => (
                                        <button
                                            key={topic.id}
                                            onClick={() => setActiveTopicId(topic.id)}
                                            className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-colors ${activeTopicId === topic.id ? 'bg-brand-green/10 text-brand-green' : 'text-gray-300 hover:bg-gray-800'}`}
                                        >
                                            <span className="text-sm font-medium pr-2 truncate">{topic.title}</span>
                                            {progress[topic.id] && <CheckCircle className={`w-4 h-4 shrink-0 ${activeTopicId === topic.id ? 'text-brand-green' : 'text-gray-500'}`} />}
                                        </button>
                                    ))}
                                </div>
                            );
                        })
                    )}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 bg-dark overflow-y-auto h-full p-4 md:p-8">
                {activeTopic ? (
                    <div className="max-w-3xl mx-auto space-y-8 pb-12">
                        {/* Header */}
                        <header className="space-y-4">
                            <Breadcrumbs 
                                items={[
                                    { label: 'Librería', href: '/recursos' },
                                    { label: 'Gramática', href: '/gramatica' },
                                    { label: activeTopic.level, href: null }
                                ]}
                            />

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-800 pb-6">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{activeTopic.title}</h1>
                                    {getLevelBadge(activeTopic.level)}
                                </div>
                                <button
                                    onClick={() => toggleCompletion(activeTopic.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${progress[activeTopic.id] ? 'bg-brand-green/10 border-brand-green text-brand-green' : 'bg-dark-card border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'}`}
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
                                    <span className="w-1.5 h-6 rounded-full bg-blue-500"></span>
                                    Regla General
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg">{activeTopic.explanation}</p>
                            </div>

                            <div className="bg-dark-lighter border border-gray-700 p-5 rounded-xl">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-2">Estructura / Fórmula</span>
                                <code className="text-sm md:text-base text-brand-yellow font-mono font-medium block">{activeTopic.structure}</code>
                            </div>
                        </section>

                        {/* Examples or Table */}
                        {activeTopic.tableData ? (
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full bg-purple-500"></span>
                                    {activeTopic.tableData.title || "Tabla de Referencia"}
                                </h3>
                                <div className="overflow-x-auto rounded-xl border border-gray-700">
                                    <table className="w-full text-left border-collapse min-w-max">
                                        <thead>
                                            <tr className="bg-gray-800/80 text-gray-300">
                                                {activeTopic.tableData.headers.map((h, i) => (
                                                    <th key={i} className="p-4 border-b border-gray-700 font-bold">{h}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {activeTopic.tableData.rows.map((row, i) => (
                                                <tr key={i} className="border-b border-gray-800/50 hover:bg-white/5 transition-colors">
                                                    {row.map((cell, j) => (
                                                        <td key={j} className="p-4 text-gray-300">{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        ) : (
                            <section>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-6 rounded-full bg-brand-green"></span>
                                    Ejemplos Clave
                                </h3>
                                <div className="grid gap-3">
                                    {activeTopic.examples.map((ex, idx) => (
                                        <div key={idx} className="bg-dark-card border-l-4 border-brand-green border-y border-r border-gray-800 p-4 rounded-r-xl flex flex-col md:flex-row md:items-center gap-2 md:gap-4 hover:bg-gray-800/50 transition-colors">
                                            <div className="text-white font-medium md:flex-1">{ex.en}</div>
                                            <div className="text-gray-400 italic md:flex-1 md:text-right text-sm md:text-base">"{ex.es}"</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Common Mistakes */}
                        <section className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-brand-red mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full bg-brand-red"></span>
                                Cuidado: Errores Comunes
                            </h3>
                            <p className="text-red-200/80 leading-relaxed">{activeTopic.commonMistakes}</p>
                        </section>

                        {/* Mini Exercise */}
                        {activeTopic.exercise && (
                            <section className="bg-gradient-to-br from-brand-yellow/10 to-dark-card border border-brand-yellow/30 rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                    <span className="text-brand-yellow">⚡</span>
                                    Práctica Rápida
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm">Responde para confirmar que entendiste la teoría.</p>

                                <div className="space-y-4 mb-6">
                                    {activeTopic.exercise.type === 'multiple' && (
                                        <>
                                            <p className="text-lg font-medium text-white mb-4">{activeTopic.exercise.question}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {activeTopic.exercise.options.map((opt, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => {
                                                            setExerciseAnswer(opt);
                                                            setExerciseStatus(null);
                                                        }}
                                                        className={`p-3 rounded-xl border text-left transition-all ${exerciseAnswer === opt ? 'bg-brand-yellow/20 border-brand-yellow text-white ring-1 ring-brand-yellow' : 'bg-dark border-gray-700 text-gray-300 hover:border-gray-500'}`}
                                                    >
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}

                                    {activeTopic.exercise.type === 'fill' && (
                                        <div className="bg-dark p-6 rounded-xl border border-gray-700 text-xl text-center">
                                            {activeTopic.exercise.text.split('{0}').map((part, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {part}
                                                    {i !== arr.length - 1 && (
                                                        <input
                                                            type="text"
                                                            value={exerciseAnswer}
                                                            onChange={(e) => {
                                                                setExerciseAnswer(e.target.value);
                                                                setExerciseStatus(null);
                                                            }}
                                                            placeholder="___"
                                                            className="bg-transparent border-b-2 border-brand-yellow text-white w-24 text-center mx-2 focus:outline-none focus:border-white transition-colors"
                                                            autoComplete="off"
                                                        />
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={checkExercise}
                                    disabled={!exerciseAnswer}
                                    className="w-full md:w-auto bg-brand-yellow hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Verificar
                                </button>

                                {exerciseStatus && (
                                    <div className={`mt-6 p-4 rounded-xl border flex gap-3 ${exerciseStatus === 'correct' ? 'bg-brand-green/10 border-brand-green/50 text-brand-green' : 'bg-brand-red/10 border-brand-red/50 text-brand-red'}`}>
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
