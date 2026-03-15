import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Lock, CheckCircle2, CircleDashed } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { useAuth } from '../hooks/useAuth';

export default function LevelMap() {
    const { isLessonCompleted } = useProgress();
    const { profile } = useAuth();

    // Base structure without status
    const basePath = [
        {
            id: 'l1', title: 'Fundamentos', category: 'básico', difficulty: 'A1',
            lessons: [
                { id: 'le1', title: 'Alphabet & Pronunciation', type: 'speaking' },
                { id: 'le2', title: 'Greetings & Introductions', type: 'vocabulary' },
                { id: 'le3', title: 'Numbers and Colors', type: 'grammar' }
            ]
        },
        {
            id: 'l2', title: 'Tiempos Verbales I', category: 'intermedio', difficulty: 'B1',
            lessons: [
                { id: 'le4', title: 'Present Continuous', type: 'grammar' },
                { id: 'le5', title: 'Past Simple', type: 'vocabulary' },
                { id: 'le6', title: 'Future (Will / Going to)', type: 'grammar' }
            ]
        },
        {
            id: 'l3', title: 'Gramática Compleja', category: 'avanzado', difficulty: 'C1',
            lessons: [
                { id: 'le7', title: 'Present Perfect', type: 'grammar' },
                { id: 'le8', title: 'Passive Voice', type: 'grammar' },
                { id: 'le9', title: 'Conditionals (Mixed)', type: 'grammar' }
            ]
        },
        {
            id: 'l4', title: 'Inglés Nativo & Slang', category: 'nativo', difficulty: 'C2',
            lessons: [
                { id: 'le10', title: 'Contractions: Wanna, Gonna, Gotta', type: 'vocabulary' },
                { id: 'le11', title: 'Connected Speech: Whadya / Dontcha', type: 'speaking' },
                { id: 'le12', title: 'Native Expressions & Idioms', type: 'vocabulary' }
            ]
        }
    ];

    const path = useMemo(() => {
        let foundActive = false;

        return basePath.map(level => {
            return {
                ...level,
                lessons: level.lessons.map(lesson => {
                    const completed = isLessonCompleted(lesson.id);
                    const isQA = profile?.role === 'admin' || import.meta.env.DEV;

                    if (completed && !isQA) {
                        return { ...lesson, status: 'completed' };
                    }
                    if (completed && isQA) {
                        return { ...lesson, status: 'active' };
                    }
                    if (!foundActive) {
                        foundActive = true;
                        return { ...lesson, status: 'active' };
                    }
                    return { ...lesson, status: isQA ? 'active' : 'locked' };
                })
            };
        });
    }, [isLessonCompleted, profile]);

    const catToId = { 'básico': 'basic', 'intermedio': 'intermediate', 'avanzado': 'advanced', 'nativo': 'native' };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="w-8 h-8 text-brand-green" />;
            case 'active': return <CircleDashed className="w-8 h-8 text-brand-yellow animate-spin" style={{ animationDuration: '3s' }} />;
            default: return <Lock className="w-6 h-6 text-gray-600" />;
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'completed': return 'border-brand-green bg-brand-green/10';
            case 'active': return 'border-brand-yellow bg-brand-yellow/10 ring-2 ring-brand-yellow/20';
            default: return 'border-gray-800 bg-dark-card opacity-60';
        }
    };

    return (
        <div className="space-y-12 max-w-2xl mx-auto py-8">
            <header className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-white">Ruta de Aprendizaje</h2>
                <p className="text-gray-400">Completa las lecciones para desbloquear nuevos niveles</p>
            </header>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[2.25rem] md:left-1/2 top-4 bottom-4 w-1 bg-gray-800 rounded-full -translate-x-1/2 z-0"></div>

                <div className="space-y-16">
                    {path.map((level, lIndex) => (
                        <div key={level.id} className="relative z-10" id={catToId[level.category] || 'basic'}>
                            <div className="bg-dark-lighter py-2 px-4 rounded-xl border border-gray-800 inline-block mb-8 relative md:left-1/2 md:-translate-x-1/2 left-[2.25rem] -translate-x-4 shadow-lg">
                                <h3 className="font-bold text-lg text-white">{level.title}</h3>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">{level.difficulty} - {level.category}</span>
                            </div>

                            <div className="space-y-6">
                                {level.lessons.map((lesson, i) => {
                                    const isLeft = i % 2 === 0;
                                    return (
                                        <div key={lesson.id} className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                            {/* Empty space for alternating layout on desktop */}
                                            <div className="hidden md:block w-1/2"></div>

                                            {/* Node Icon */}
                                            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-dark">
                                                <div className={`w-12 h-12 flex items-center justify-center rounded-full border-2 ${getStatusClass(lesson.status)} transition-colors duration-300`}>
                                                    {getStatusIcon(lesson.status)}
                                                </div>
                                            </div>

                                            {/* Card */}
                                            <div className="flex-1 md:w-1/2">
                                                {lesson.status !== 'locked' ? (
                                                    <Link
                                                        to={`/lesson/${lesson.id}`}
                                                        className={`block p-4 rounded-xl border ${getStatusClass(lesson.status)} hover:scale-[1.02] transition-transform`}
                                                    >
                                                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider block mb-1">
                                                            {lesson.type}
                                                        </span>
                                                        <h4 className="font-bold text-white text-lg">{lesson.title}</h4>
                                                    </Link>
                                                ) : (
                                                    <div className={`p-4 rounded-xl border ${getStatusClass(lesson.status)}`}>
                                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">
                                                            {lesson.type}
                                                        </span>
                                                        <h4 className="font-bold text-gray-500 text-lg">{lesson.title}</h4>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
