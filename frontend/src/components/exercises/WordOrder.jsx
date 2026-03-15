import React, { useState, useEffect } from 'react';

export default function WordOrder({ sentence, translation, onComplete }) {
    const [availableWords, setAvailableWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [checked, setChecked] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        // Shuffle words for initial state
        const words = sentence.split(' ');
        const shuffled = [...words].sort(() => Math.random() - 0.5).map((word, i) => ({ id: i, text: word }));
        setAvailableWords(shuffled);
        setSelectedWords([]);
        setChecked(false);
    }, [sentence]);

    const selectWord = (word) => {
        if (checked) return;
        setAvailableWords(availableWords.filter(w => w.id !== word.id));
        setSelectedWords([...selectedWords, word]);
    };

    const removeWord = (word) => {
        if (checked) return;
        setSelectedWords(selectedWords.filter(w => w.id !== word.id));
        setAvailableWords([...availableWords, word]);
    };

    const handleCheck = () => {
        const userSentence = selectedWords.map(w => w.text).join(' ');
        const correct = userSentence === sentence;
        setIsCorrect(correct);
        setChecked(true);
    };

    const handleContinue = () => {
        if (onComplete) {
            onComplete({ success: isCorrect, score: isCorrect ? 100 : 0 });
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-8">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Ordena las palabras</h3>
            {translation && (
                <p className="text-gray-400 mb-8 text-center">"{translation}"</p>
            )}

            {/* Drop Zone */}
            <div className={`min-h-[100px] w-full bg-dark-card border-b-2 p-6 rounded-t-xl flex flex-wrap gap-3 items-start transition-colors ${checked ? (isCorrect ? 'border-brand-green bg-brand-green/5' : 'border-brand-red bg-brand-red/5') : 'border-gray-700'}`}>
                {selectedWords.length === 0 && !checked && (
                    <span className="text-gray-500 italic mt-2">Toca las palabras para formar la frase...</span>
                )}
                {selectedWords.map(word => (
                    <button
                        key={word.id}
                        onClick={() => removeWord(word)}
                        disabled={checked}
                        className={`px-4 py-2 rounded-lg font-bold shadow-sm transition-transform active:scale-95 ${checked && !isCorrect ? 'bg-brand-red/20 text-brand-red border border-brand-red/50' : 'bg-dark border border-gray-600 text-white hover:bg-gray-800'}`}
                    >
                        {word.text}
                    </button>
                ))}
            </div>

            {checked && (
                <div className={`w-full p-4 mb-8 flex gap-4 ${isCorrect ? 'text-brand-green' : 'text-brand-red'}`}>
                    <div>
                        <h4 className="font-bold text-lg mb-1">
                            {isCorrect ? '¡Perfecto!' : 'Respuesta Incorrecta'}
                        </h4>
                        {!isCorrect && (
                            <p className="text-gray-300">
                                La respuesta correcta es: <span className="font-bold text-white">{sentence}</span>
                            </p>
                        )}
                    </div>
                </div>
            )}

            {/* Available Words */}
            <div className="min-h-[150px] w-full p-6 flex flex-wrap justify-center gap-3 mt-4">
                {availableWords.map((word) => (
                    <button
                        key={word.id}
                        onClick={() => selectWord(word)}
                        disabled={checked}
                        className="px-4 py-2 bg-dark-lighter border border-gray-700 text-white rounded-lg font-bold shadow-sm hover:border-brand-yellow hover:text-brand-yellow transition-all active:scale-95 disabled:opacity-0 disabled:scale-90"
                    >
                        {word.text}
                    </button>
                ))}
            </div>

            <div className="mt-8 flex justify-center w-full">
                {!checked ? (
                    <button
                        onClick={handleCheck}
                        disabled={availableWords.length > 0}
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
