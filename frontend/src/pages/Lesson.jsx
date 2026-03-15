import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getLessonById } from '../content/lessons';
import { useProgress } from '../hooks/useProgress';
import { X, Trophy, BookOpen } from 'lucide-react';
import Breadcrumbs from '../components/UI/Breadcrumbs';

// Exercises
import Flashcard from '../components/exercises/Flashcard';
import FillBlank from '../components/exercises/FillBlank';
import MultipleChoice from '../components/exercises/MultipleChoice';
import WordOrder from '../components/exercises/WordOrder';
import Dictation from '../components/exercises/Dictation';
import Shadowing from '../components/exercises/Shadowing';
import WritingAI from '../components/exercises/WritingAI';

export default function Lesson() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [lesson, setLesson] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [showTheory, setShowTheory] = useState(true);
    const { markLessonCompleted } = useProgress();

    useEffect(() => {
        const data = getLessonById(id);
        if (!data) {
            navigate('/map');
            return;
        }
        setLesson(data);
        setCurrentIndex(0);
        setCompleted(false);
        setScore(0);
        setShowTheory(!!data.theory); // Show theory only if it exists
    }, [id, navigate]);

    if (!lesson) return null;

    const currentExercise = lesson.exercises[currentIndex];
    // Calculate progress (theory screen is 0%)
    const progressPercentage = showTheory ? 0 : ((currentIndex) / lesson.exercises.length) * 100;

    const handleNext = (result) => {
        // result = { success, score }
        const pointsGained = result?.score || 0;
        setScore(prev => prev + pointsGained);

        if (currentIndex < lesson.exercises.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCompleted(true);
            markLessonCompleted(id, score + pointsGained);
        }
    };

    const renderExercise = () => {
        if (!currentExercise) return null;

        switch (currentExercise.type) {
            case 'flashcard':
                return <Flashcard
                    word={currentExercise.word}
                    onReview={(id, quality) => handleNext({ success: true, score: quality === 'easy' ? 100 : 50 })}
                />;
            case 'fillBlank':
                return <FillBlank {...currentExercise} onComplete={handleNext} />;
            case 'multipleChoice':
                return <MultipleChoice {...currentExercise} onComplete={handleNext} />;
            case 'wordOrder':
                return <WordOrder {...currentExercise} onComplete={handleNext} />;
            case 'dictation':
                return <Dictation {...currentExercise} onComplete={handleNext} />;
            case 'shadowing':
                return <Shadowing {...currentExercise} onComplete={handleNext} />;
            case 'writingAI':
                return <WritingAI {...currentExercise} onComplete={handleNext} />;
            default:
                return <div>Tipo de ejercicio desconocido</div>;
        }
    };

    if (completed) {
        return (
            <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
                <div className="bg-dark-card border border-brand-green p-8 rounded-2xl max-w-md w-full text-center shadow-2xl shadow-brand-green/20">
                    <Trophy className="w-20 h-20 text-brand-yellow mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-2">¡Lección Completada!</h2>
                    <p className="text-gray-400 mb-6">Puntaje obtenido: <span className="text-brand-green font-bold text-xl">{score}</span></p>
                    <button
                        onClick={() => navigate('/map')}
                        className="w-full py-4 bg-brand-green hover:bg-emerald-500 text-white font-bold text-lg rounded-xl transition-colors"
                    >
                        Volver al Mapa
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark flex flex-col">
            {/* Header / Progress Bar */}
            <header className="p-4 border-b border-gray-800 flex items-center justify-between sticky top-0 bg-dark z-50">
                <button
                    onClick={() => navigate('/map')}
                    className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-gray-800 rounded-full"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex-1 px-8">
                    <div className="h-3 w-full bg-dark-lighter rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand-green transition-all duration-500 ease-out"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="font-bold text-gray-400">
                    {currentIndex + 1} / {lesson.exercises.length}
                </div>
            </header>

            {/* Main Exercise Area */}
            <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
                {showTheory && lesson.theory ? (
                    <div className="w-full max-w-2xl bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-10 shadow-xl animate-fade-in">
                        <Breadcrumbs 
                            items={[
                                { label: 'Ruta Aventura', href: '/map' },
                                { label: `Nivel ${lesson.level}`, href: null },
                                { label: 'Teoría', href: null }
                            ]}
                        />
                        <div className="flex items-center gap-4 mb-6 mt-2">
                            <div className="p-3 bg-brand-green/10 rounded-xl">
                                <BookOpen className="w-8 h-8 text-brand-green" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">{lesson.theory.title}</h2>
                        </div>

                        <div className="space-y-6 text-gray-300 mb-8">
                            {lesson.theory.content.map((block, idx) => (
                                <div key={idx} className="bg-dark-lighter p-4 rounded-xl border border-gray-800/50">
                                    <h3 className="text-xl font-bold text-white mb-2">{block.subtitle}</h3>
                                    <p className="leading-relaxed">{block.text}</p>
                                    {block.examples && (
                                        <ul className="mt-4 space-y-2">
                                            {block.examples.map((ex, eIdx) => (
                                                <li key={eIdx} className="flex gap-2">
                                                    <span className="text-brand-green">✓</span>
                                                    <span className="font-mono bg-dark px-2 rounded">{ex.en}</span>
                                                    <span className="text-gray-500">— {ex.es}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setShowTheory(false)}
                            className="w-full py-4 bg-brand-green hover:bg-emerald-500 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-brand-green/20"
                        >
                            Comenzar Práctica
                        </button>
                    </div>
                ) : (
                    renderExercise()
                )}
            </main>
        </div>
    );
}
