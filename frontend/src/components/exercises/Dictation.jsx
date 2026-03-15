import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, Turtle } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

export default function Dictation({ sentence, translation, onComplete }) {
    const [input, setInput] = useState('');
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const { speak, isSpeaking } = useSpeech();

    const inputRef = useRef(null);

    useEffect(() => {
        // Auto focus input on mount
        if (inputRef.current) inputRef.current.focus();
        // Auto play audio once
        const timeout = setTimeout(() => {
            speak(sentence);
        }, 500);
        return () => clearTimeout(timeout);
    }, [sentence, speak]);

    const cleanString = (str) => {
        return str.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim();
    };

    const handleCheck = () => {
        const isMatch = cleanString(input) === cleanString(sentence);
        // Simple tolerance could be added here using Levenshtein distance, but exact match (ignoring punct) requested.
        setIsCorrect(isMatch);
        setChecked(true);
    };

    const handleContinue = () => {
        if (onComplete) {
            onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-8 space-y-8 items-center">
            <h3 className="text-xl font-bold text-white text-center">Escribe lo que escuches</h3>

            <div className="flex gap-4 justify-center items-center mb-4">
                <button
                    onClick={() => speak(sentence)}
                    disabled={isSpeaking}
                    className="p-6 bg-brand-green/20 rounded-full text-brand-green hover:bg-brand-green/30 transition-transform active:scale-95 disabled:opacity-50"
                >
                    <Volume2 className="w-12 h-12" />
                </button>

                <button
                    onClick={() => speak(sentence, 0.6)}
                    disabled={isSpeaking}
                    className="p-4 bg-brand-yellow/20 rounded-full text-brand-yellow hover:bg-brand-yellow/30 transition-transform active:scale-95 disabled:opacity-50"
                    title="Escuchar lento"
                >
                    <Turtle className="w-8 h-8" />
                </button>
            </div>

            <div className="w-full mt-4">
                <label className="sr-only">Tu respuesta</label>
                <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={checked}
                    rows={3}
                    placeholder="Type what you hear..."
                    className={`w-full bg-dark-lighter border-2 rounded-xl p-4 text-xl font-medium text-white resize-none outline-none transition-colors ${checked ? (isCorrect ? 'border-brand-green bg-brand-green/5' : 'border-brand-red bg-brand-red/5') : 'border-gray-700 focus:border-brand-yellow'}`}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (input.trim() && !checked) handleCheck();
                        }
                    }}
                />
            </div>

            {checked && (
                <div className={`w-full p-6 border rounded-xl animate-fade-in ${isCorrect ? 'bg-brand-green/10 border-brand-green/30' : 'bg-brand-red/10 border-brand-red/30'}`}>
                    <h4 className={`font-bold text-xl mb-2 ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
                        {isCorrect ? '¡Excelente oído!' : 'Hay algunos errores...'}
                    </h4>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-400 font-medium">Respuesta correcta:</p>
                            <p className="text-lg text-white font-bold">{sentence}</p>
                        </div>
                        {translation && (
                            <div>
                                <p className="text-sm text-gray-400 font-medium">Traducción:</p>
                                <p className="text-base text-gray-300 italic">{translation}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="w-full mt-auto pt-8">
                {!checked ? (
                    <button
                        onClick={handleCheck}
                        disabled={!input.trim()}
                        className="w-full py-4 bg-brand-yellow hover:bg-yellow-500 text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Comprobar
                    </button>
                ) : (
                    <button
                        onClick={handleContinue}
                        className={`w-full py-4 text-white font-bold text-lg rounded-xl transition-colors ${isCorrect ? 'bg-brand-green hover:bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        Continuar
                    </button>
                )}
            </div>
        </div>
    );
}
