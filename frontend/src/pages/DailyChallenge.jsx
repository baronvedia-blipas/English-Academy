import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';
import { Trophy, BrainCircuit, X, CheckCircle2, Star, ArrowRight } from 'lucide-react';

// Exercises
import Flashcard from '../components/exercises/Flashcard';
import MultipleChoice from '../components/exercises/MultipleChoice';
import FillBlank from '../components/exercises/FillBlank';
import WordOrder from '../components/exercises/WordOrder';

export default function DailyChallenge() {
    const { generateDailyChallenge, markDailyChallengeCompleted, lastDailyChallengeDate, completedLessons } = useProgress();
    const navigate = useNavigate();

    const [exercises, setExercises] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);

    const today = new Date().toISOString().split('T')[0];
    const isAlreadyCompleted = lastDailyChallengeDate === today;

    useEffect(() => {
        if (!isAlreadyCompleted && completedLessons.length > 0) {
            setExercises(generateDailyChallenge());
        }
    }, [completedLessons, isAlreadyCompleted]);

    const handleStart = () => {
        setStarted(true);
    };

    const handleExerciseComplete = (isCorrect, earnedPoints = 10) => {
        if (isCorrect) {
            setScore(prev => prev + earnedPoints);
            setCorrectCount(prev => prev + 1);
        }

        setTimeout(() => {
            if (currentIndex < exercises.length - 1) {
                setCurrentIndex(prev => prev + 1);
            } else {
                setCompleted(true);
                markDailyChallengeCompleted();
            }
        }, 1500);
    };

    // Edge Cases
    if (completedLessons.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <BrainCircuit className="w-16 h-16 text-gray-600 mb-6 opacity-50" />
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Aún no hay suficiente contenido</h2>
                <p className="text-slate-400 max-w-md text-center mb-8">
                    El Reto Diario utiliza el principio de repaso espaciado. Necesitas completar al menos una lección para generar ejercicios.
                </p>
                <button 
                    onClick={() => navigate('/map')}
                    className="flex items-center gap-2 px-6 py-3 bg-brand-green text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors"
                >
                    Ir al Mapa <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        );
    }

    if (isAlreadyCompleted) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-green" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 text-center">¡Reto Completado!</h2>
                <p className="text-slate-400 text-center mb-8 text-lg">
                    Has terminado tu repaso diario. Vuelve mañana para seguir afianzando tus conocimientos.
                </p>
                <button 
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 px-6 py-3 bg-[#13151A] border border-gray-700 hover:border-brand-green hover:text-brand-green text-white rounded-xl font-bold transition-all"
                >
                    Volver al Inicio
                </button>
            </div>
        );
    }

    if (!started) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-fade-in">
                <div className="bg-dark-card border border-brand-green/30 w-full max-w-lg p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-green to-transparent"></div>
                    <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                        <BrainCircuit className="w-10 h-10 text-brand-green" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Reto Diario</h1>
                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                        Es hora de poner a prueba lo que ya has aprendido. Completa este quiz rápido generado a partir de tus lecciones terminadas.
                    </p>
                    <div className="bg-[#13151A] p-4 rounded-xl mb-8 border border-gray-800 flex justify-around">
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-white">{exercises.length}</span>
                            <span className="text-xs text-gray-500 uppercase font-semibold">Preguntas</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-brand-yellow">+50</span>
                            <span className="text-xs text-gray-500 uppercase font-semibold">Puntos</span>
                        </div>
                    </div>
                    <button 
                        onClick={handleStart}
                        className="w-full py-4 bg-brand-green text-white rounded-xl font-bold text-lg shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] hover:bg-emerald-600 transition-all active:scale-95"
                    >
                        Empezar Reto Ahora
                    </button>
                </div>
            </div>
        );
    }

    if (completed) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 animate-fade-in">
                <div className="bg-dark-card border border-gray-800 w-full max-w-md p-8 md:p-10 rounded-3xl shadow-2xl text-center">
                    <div className="w-24 h-24 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Trophy className="w-12 h-12 text-brand-yellow" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">¡Excelente Trabajo!</h2>
                    <p className="text-slate-400 mb-8">Has completado el repaso diario. Aquí están tus resultados:</p>
                    
                    <div className="bg-[#13151A] rounded-2xl border border-gray-800 p-6 mb-8 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Puntaje Base</span>
                            <span className="font-bold text-white">+{score} XP</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Bonus Diario</span>
                            <span className="font-bold text-brand-yellow">+50 XP</span>
                        </div>
                        <div className="h-px bg-gray-800 my-4"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Aciertos</span>
                            <span className="font-bold text-brand-green">{correctCount} de {exercises.length}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => navigate('/dashboard')}
                        className="w-full py-3 bg-white text-dark rounded-xl font-bold hover:bg-gray-200 transition-colors"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        );
    }

    const currentExercise = exercises[currentIndex];
    if (!currentExercise) return null;

    return (
        <div className="min-h-screen bg-dark flex flex-col">
            {/* Header / Progress Bar */}
            <header className="bg-dark-lighter border-b border-gray-800 p-4 sticky top-0 z-10 w-full">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <button onClick={() => navigate('/dashboard')} className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                    
                    <div className="flex-1 mx-8">
                        <div className="flex justify-between text-xs font-bold text-gray-500 mb-2 uppercase">
                            <span>Reto Diario</span>
                            <span>{currentIndex + 1} de {exercises.length}</span>
                        </div>
                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-brand-green transition-all duration-500 ease-out rounded-full"
                                style={{ width: `${((currentIndex) / exercises.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 px-3 bg-[#13151A] rounded-lg border border-gray-800">
                        <Star className="w-4 h-4 text-brand-yellow fill-current" />
                        <span className="font-bold text-white">{score}</span>
                    </div>
                </div>
            </header>

            {/* Exercise Content */}
            <main className="flex-1 w-full max-w-2xl mx-auto p-4 md:p-8 flex flex-col items-center justify-center animate-fade-in">
                <div className="w-full bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-10 shadow-xl">
                    <div className="mb-6 pb-6 border-b border-gray-800/60 text-center">
                        <span className="text-brand-green font-semibold text-sm uppercase tracking-wider block mb-2">PREGUNTA {currentIndex + 1}</span>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                            {currentExercise.type === 'flashcard' ? 'Repasa este concepto' :
                             currentExercise.type === 'multiple-choice' ? 'Elige la respuesta correcta' :
                             currentExercise.type === 'fill-blanks' ? 'Completa la oración' :
                             'Ordena las palabras'}
                        </h2>
                    </div>

                    {currentExercise.type === 'flashcard' && (
                        <Flashcard data={currentExercise} onComplete={handleExerciseComplete} />
                    )}
                    {currentExercise.type === 'multiple-choice' && (
                        <MultipleChoice data={currentExercise} onComplete={handleExerciseComplete} />
                    )}
                    {currentExercise.type === 'fill-blanks' && (
                        <FillBlank data={currentExercise} onComplete={handleExerciseComplete} />
                    )}
                    {currentExercise.type === 'word-order' && (
                        <WordOrder data={currentExercise} onComplete={handleExerciseComplete} />
                    )}
                </div>
            </main>
        </div>
    );
}
