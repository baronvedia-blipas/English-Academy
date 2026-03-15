import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useProgress } from '../hooks/useProgress';
import { lessonsData } from '../content/lessons';
import { Flame, Star, Zap, BookOpen, ChevronRight, Sparkles, PlayCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const { user, profile } = useAuth();
    const { score, streak, calculateCategoryProgress, completedLessons, getNextLesson } = useProgress();
    const [showOnboarding, setShowOnboarding] = useState(false);
    
    const nextLesson = getNextLesson();

    useEffect(() => {
        if (profile && profile.total_score === 0 && profile.streak_days === 0 && (!completedLessons || completedLessons.length === 0)) {
            setShowOnboarding(true);
        }
    }, [profile, completedLessons]);

    const stats = {
        streak: streak,
        totalScore: score,
        wordsLearned: completedLessons.length * 8 // Estimation based on lessons done
    };

    const categories = [
        { title: 'Básico', description: 'A1-A2', progress: calculateCategoryProgress(lessonsData, 'l1'), color: 'bg-brand-green', path: '/map#basic' },
        { title: 'Intermedio', description: 'B1-B2', progress: calculateCategoryProgress(lessonsData, 'l2'), color: 'bg-brand-yellow', path: '/map#intermediate' },
        { title: 'Avanzado', description: 'C1', progress: calculateCategoryProgress(lessonsData, 'l3'), color: 'bg-brand-red', path: '/map#advanced' },
        { title: 'Nativo / Slang', description: 'Práctico', progress: calculateCategoryProgress(lessonsData, 'l4'), color: 'bg-purple-500', path: '/map#native' }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
                        ¡Hola, {user?.user_metadata?.username || 'Estudiante'}!
                    </h2>
                    <p className="text-gray-400 mt-1">Sigue así, tu progreso es constante.</p>
                </div>
                <div className="flex gap-4">
                    {/* Streak Card */}
                    <div className="bg-dark-card border border-gray-800 rounded-xl px-4 py-2 flex items-center gap-2">
                        <Flame className="w-6 h-6 text-brand-yellow animate-pulse" />
                        <div>
                            <p className="text-xs text-gray-400 font-medium">Racha</p>
                            <p className="text-lg font-bold text-white">{stats.streak} días</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-dark-card border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-brand-green/50 transition-colors">
                    <div className="p-3 bg-brand-green/10 rounded-lg">
                        <Star className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Puntaje Total</p>
                        <p className="text-2xl font-bold text-white">{stats.totalScore}</p>
                    </div>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                        <Zap className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Flashcards para Hoy</p>
                        <p className="text-2xl font-bold text-white">0</p>
                    </div>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-xl p-5 flex items-center gap-4 hover:border-purple-500/50 transition-colors">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                        <BookOpen className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400 font-medium">Palabras Aprendidas</p>
                        <p className="text-2xl font-bold text-white">{stats.wordsLearned}</p>
                    </div>
                </div>
            </div>

            {/* Next Step / Continue Learning Hero Card */}
            {nextLesson ? (
                <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-blue-400 font-bold mb-2 text-sm uppercase tracking-wider">
                                <PlayCircle className="w-5 h-5" />
                                Módulo Siguiente
                            </div>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                                {nextLesson.title}
                            </h3>
                            <p className="text-slate-300 max-w-lg mb-1">
                                Estás en el nivel <strong className="text-white capitalize">{nextLesson.level}</strong> - {nextLesson.groupTitle}.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Continúa justo donde te quedaste y alcanza tu meta diaria.
                            </p>
                        </div>
                        <Link 
                            to={`/lesson/${nextLesson.id}`} 
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group-hover:scale-105 shrink-0"
                        >
                            Continuar Lección <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </section>
            ) : (
                <section className="bg-gradient-to-r from-brand-green/10 to-transparent border border-gray-800 rounded-xl p-6 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-2">¡Es hora de repasar!</h3>
                        <p className="text-gray-300 mb-4 max-w-md">Tienes tarjetas programadas para revisión. El repaso espaciado es clave para la retención.</p>
                        <Link to="/map" className="bg-brand-green hover:bg-emerald-500 text-white font-medium py-2 px-6 rounded-lg transition-colors inline-block mt-2">
                            Ir a Flashcards
                        </Link>
                    </div>
                </section>
            )}

            {/* Levels Progress */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Tu Progreso</h3>
                    <Link to="/map" className="text-sm text-brand-green hover:text-emerald-400 transition-colors flex items-center">
                        Ver ruta <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {categories.map((cat, i) => (
                        <Link key={i} to={cat.path} className="bg-dark-card border border-gray-800 rounded-xl p-5 hover:border-gray-600 transition-colors block">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h4 className="font-bold text-lg text-white">{cat.title}</h4>
                                    <p className="text-sm text-gray-400">{cat.description}</p>
                                </div>
                                <span className="text-sm font-semibold text-gray-300">{cat.progress}%</span>
                            </div>
                            <div className="w-full bg-dark-lighter rounded-full h-2.5">
                                <div className={`h-2.5 rounded-full ${cat.color}`} style={{ width: `${cat.progress}%` }}></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Onboarding Welcome Modal for New Users */}
            {showOnboarding && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="bg-dark-card border border-brand-green/30 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green to-emerald-400"></div>

                        <div className="p-8 text-center space-y-6">
                            <div className="mx-auto w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center border-2 border-brand-green shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                                <Sparkles className="w-10 h-10 text-brand-green" />
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-2">¡Bienvenido a English Academy!</h3>
                                <p className="text-gray-400 text-lg">
                                    Estamos emocionados de acompañarte en tu aventura de aprender inglés.
                                </p>
                            </div>

                            <div className="bg-dark-lighter p-6 rounded-xl border border-gray-800 text-left space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0"><PlayCircle className="w-6 h-6 text-blue-400" /></div>
                                    <div>
                                        <p className="font-bold text-white">1. Tu primera misión</p>
                                        <p className="text-sm text-gray-400">Ve al <strong className="text-gray-300">Mapa Aventura</strong> para empezar desde el principio.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-purple-500/10 rounded-lg shrink-0"><BookOpen className="w-6 h-6 text-purple-400" /></div>
                                    <div>
                                        <p className="font-bold text-white">2. Practica con IA</p>
                                        <p className="text-sm text-gray-400">Evaluaremos tu pronunciación y gramática en tiempo real.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2 bg-brand-yellow/10 rounded-lg shrink-0"><Flame className="w-6 h-6 text-brand-yellow" /></div>
                                    <div>
                                        <p className="font-bold text-white">3. Mantén tu racha</p>
                                        <p className="text-sm text-gray-400">Estudia un poco cada día para mantener ardiendo tu fuego de racha.</p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowOnboarding(false)}
                                className="w-full py-4 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand-green/20 bg-brand-green hover:bg-emerald-500 flex items-center justify-center gap-2"
                            >
                                ¡Estoy listo, vamos! <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
