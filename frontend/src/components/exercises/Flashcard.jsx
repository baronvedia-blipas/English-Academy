import React, { useState } from 'react';
import { Volume2, RotateCcw } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

export default function Flashcard({ word, onReview }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const { speak } = useSpeech();

    const handleReview = (quality) => {
        // quality: 'hard', 'good', 'easy'
        if (onReview) onReview(word.id, quality);
        setIsFlipped(false); // Reset for next word if needed
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto h-full">
            <div
                className="w-full h-80 relative cursor-pointer group"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ perspective: '1000px' }}
            >
                <div
                    className={`w-full h-full transition-transform duration-500 rounded-3xl relative shadow-2xl ${isFlipped ? '' : ''}`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                    {/* Front */}
                    <div
                        className="absolute w-full h-full bg-dark-card border border-gray-800 rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    >
                        <h3 className="text-4xl font-bold text-white mb-4">{word.en}</h3>
                        {word.pronunciation && (
                            <p className="text-lg text-gray-400 font-mono mb-8">/{word.pronunciation}/</p>
                        )}

                        <button
                            onClick={(e) => { e.stopPropagation(); speak(word.en); }}
                            className="p-4 bg-brand-green/20 rounded-full text-brand-green hover:bg-brand-green/30 transition-colors"
                        >
                            <Volume2 className="w-8 h-8" />
                        </button>
                        <p className="absolute bottom-6 text-sm text-gray-500 flex items-center gap-2">
                            <RotateCcw className="w-4 h-4" /> Toca para voltear
                        </p>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute w-full h-full bg-dark-lighter border-2 border-brand-green rounded-3xl flex flex-col items-center justify-center p-8 text-center"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-2">{word.es}</h3>

                        <div className="mt-8 space-y-4">
                            <p className="text-lg text-gray-300 italic">"{word.example_en}"</p>
                            <p className="text-gray-400">"{word.example_es}"</p>
                        </div>

                        <button
                            onClick={(e) => { e.stopPropagation(); speak(word.example_en); }}
                            className="mt-6 p-2 bg-brand-green/10 rounded-full text-brand-green hover:bg-brand-green/20 transition-colors"
                        >
                            <Volume2 className="w-5 h-5 flex-shrink-0" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Spaced Repetition Buttons */}
            <div className={`mt-8 flex gap-4 w-full transition-all duration-300 ${isFlipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <button
                    onClick={() => handleReview('hard')}
                    className="flex-1 bg-brand-red/20 text-brand-red border border-brand-red/50 py-3 rounded-xl font-medium hover:bg-brand-red hover:text-white transition-colors"
                >
                    No lo sé
                </button>
                <button
                    onClick={() => handleReview('good')}
                    className="flex-1 bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/50 py-3 rounded-xl font-medium hover:bg-brand-yellow hover:text-black transition-colors"
                >
                    Más o menos
                </button>
                <button
                    onClick={() => handleReview('easy')}
                    className="flex-1 bg-brand-green/20 text-brand-green border border-brand-green/50 py-3 rounded-xl font-medium hover:bg-brand-green hover:text-white transition-colors"
                >
                    Lo sé bien
                </button>
            </div>
        </div>
    );
}
