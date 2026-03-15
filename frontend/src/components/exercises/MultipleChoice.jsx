import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function MultipleChoice({ question, options, correctIndex, explanation, onComplete }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [checked, setChecked] = useState(false);

    const handleSelect = (index) => {
        if (checked) return;
        setSelectedIndex(index);
    };

    const handleCheck = () => {
        if (selectedIndex === null) return;
        setChecked(true);
    };

    const handleContinue = () => {
        const isCorrect = selectedIndex === correctIndex;
        if (onComplete) {
            onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
        }
    };

    const getOptionClass = (index) => {
        const isSelected = selectedIndex === index;
        const isCorrectOpt = index === correctIndex;

        if (!checked) {
            if (isSelected) return 'border-brand-yellow bg-brand-yellow/10 text-brand-yellow';
            return 'border-gray-700 bg-dark-lighter hover:border-gray-500 text-gray-300 hover:bg-gray-800/50';
        }

        if (isCorrectOpt) {
            return 'border-brand-green bg-brand-green/20 text-white';
        }
        if (isSelected && !isCorrectOpt) {
            return 'border-brand-red bg-brand-red/20 text-white opacity-80';
        }
        return 'border-gray-800 bg-dark opacity-50 text-gray-500'; // Unselected wrong options
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-8 space-y-8">
            <div>
                <h3 className="text-xl font-bold text-white mb-6 leading-relaxed">
                    {question}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((opt, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        disabled={checked}
                        className={`p-4 rounded-xl border-2 text-left font-medium transition-all duration-200 flex items-center justify-between group ${getOptionClass(index)}`}
                    >
                        <span>{opt}</span>
                        {checked && index === correctIndex && <CheckCircle2 className="w-5 h-5 text-brand-green" />}
                        {checked && selectedIndex === index && index !== correctIndex && <XCircle className="w-5 h-5 text-brand-red" />}
                    </button>
                ))}
            </div>

            {checked && (
                <div className={`p-4 mt-6 rounded-xl border ${selectedIndex === correctIndex ? 'bg-brand-green/10 border-brand-green/30' : 'bg-gray-800/50 border-gray-700'}`}>
                    <h4 className={`font-bold mb-2 ${selectedIndex === correctIndex ? 'text-brand-green' : 'text-gray-300'}`}>
                        {selectedIndex === correctIndex ? '¡Correcto!' : 'Respuesta Incorrecta'}
                    </h4>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{explanation}</p>
                </div>
            )}

            {!checked ? (
                <button
                    onClick={handleCheck}
                    disabled={selectedIndex === null}
                    className="w-full py-4 bg-brand-yellow hover:bg-yellow-500 text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                >
                    Comprobar
                </button>
            ) : (
                <button
                    onClick={handleContinue}
                    className={`w-full py-4 text-white font-bold text-lg rounded-xl transition-colors mt-8 ${selectedIndex === correctIndex ? 'bg-brand-green hover:bg-emerald-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                >
                    Continuar
                </button>
            )}
        </div>
    );
}
