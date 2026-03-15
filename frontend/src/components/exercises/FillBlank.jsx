import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

export default function FillBlank({ text, blanks, explanation, onComplete }) {
    // `text` is a string like "I {0} a doctor."
    // `blanks` is array of correct answers: ['am']
    const [answers, setAnswers] = useState(Array(blanks.length).fill(''));
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleInput = (index, value) => {
        if (checked) setChecked(false);
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleCheck = () => {
        let correct = true;
        for (let i = 0; i < blanks.length; i++) {
            if (answers[i].trim().toLowerCase() !== blanks[i].toLowerCase()) {
                correct = false;
            }
        }
        setIsCorrect(correct);
        setChecked(true);
    };

    const handleContinue = () => {
        if (onComplete) {
            onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
        }
    };

    // Replace {0}, {1} with inputs
    const renderText = () => {
        let parts = text.split(/(\{\d+\})/g);
        return parts.map((part, i) => {
            const match = part.match(/\{(\d+)\}/);
            if (match) {
                const index = parseInt(match[1]);
                let inputColor = "border-brand-green focus:border-emerald-400";
                if (checked && answers[index].trim().toLowerCase() !== blanks[index].toLowerCase()) {
                    inputColor = "border-brand-red text-brand-red focus:border-red-400";
                }

                return (
                    <input
                        key={`input-${index}`}
                        type="text"
                        className={`mx-2 bg-dark-lighter border-b-2 outline-none text-center text-xl font-bold px-2 py-1 w-24 transition-colors ${inputColor} disabled:opacity-80`}
                        value={answers[index]}
                        disabled={checked && isCorrect}
                        onChange={(e) => handleInput(index, e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    />
                );
            }
            return <span key={i} className="text-xl md:text-2xl text-white">{part}</span>;
        });
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center pt-8">
            <h3 className="text-xl text-gray-400 font-medium mb-12 self-start">Completa la oración:</h3>

            <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl w-full mb-8 leading-loose flex flex-wrap items-center">
                {renderText()}
            </div>

            {checked && (
                <div className={`w-full p-4 rounded-xl mb-8 flex gap-4 items-start ${isCorrect ? 'bg-brand-green/10 border border-brand-green/30' : 'bg-brand-red/10 border border-brand-red/30'}`}>
                    <div className={`p-2 rounded-full ${isCorrect ? 'bg-brand-green/20 text-brand-green' : 'bg-brand-red/20 text-brand-red'}`}>
                        {isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                    </div>
                    <div>
                        <h4 className={`font-bold text-lg ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
                            {isCorrect ? '¡Excelente!' : 'Casi, inténtalo de nuevo.'}
                        </h4>
                        {(!isCorrect || explanation) && (
                            <p className="text-gray-300 mt-1">{explanation}</p>
                        )}
                        {!isCorrect && (
                            <p className="text-gray-400 mt-2 text-sm italic">
                                Respuesta(s) correcta(s): {blanks.join(', ')}
                            </p>
                        )}
                    </div>
                </div>
            )}

            {!checked ? (
                <button
                    onClick={handleCheck}
                    disabled={answers.some(a => a.trim() === '')}
                    className="w-full py-4 bg-brand-yellow hover:bg-yellow-500 text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                >
                    Comprobar
                </button>
            ) : (
                <button
                    onClick={handleContinue}
                    className={`w-full py-4 text-white font-bold text-lg rounded-xl transition-colors mt-auto ${isCorrect ? 'bg-brand-green hover:bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                    Continuar
                </button>
            )}
        </div>
    );
}
