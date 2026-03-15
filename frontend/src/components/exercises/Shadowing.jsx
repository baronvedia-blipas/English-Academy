import React, { useState, useEffect } from 'react';
import { Volume2, Mic, StopCircle, RefreshCcw } from 'lucide-react';
import { useSpeech } from '../../hooks/useSpeech';

export default function Shadowing({ sentence, translation, onComplete }) {
    const { speak, isSpeaking, listen, stopListening, isListening, transcript } = useSpeech();
    const [hasRecorded, setHasRecorded] = useState(false);
    const [similarity, setSimilarity] = useState(0);
    const [recognitionObj, setRecognitionObj] = useState(null);

    useEffect(() => {
        // When the component mounts or sentence changes, play the audio automatically
        const timer = setTimeout(() => {
            speak(sentence);
        }, 500);
        return () => clearTimeout(timer);
    }, [sentence, speak]);

    useEffect(() => {
        // Stop listening automatically if the user pauses for too long, though speech recognition
        // generally handles this on its own via onend. This is just for cleanup.
        return () => stopListening(recognitionObj);
    }, [recognitionObj, stopListening]);

    const toggleRecording = () => {
        if (isListening) {
            stopListening(recognitionObj);
            setHasRecorded(true);
            calculateSimilarity(transcript, sentence);
        } else {
            setHasRecorded(false);
            const rec = listen((result) => {
                calculateSimilarity(result, sentence);
                setHasRecorded(true);
            });
            setRecognitionObj(rec);
        }
    };

    const calculateSimilarity = (userText, originalText) => {
        if (!userText) {
            setSimilarity(0);
            return;
        }

        // Simple word overlap similarity for now
        const normalize = (s) => s.toLowerCase().replace(/[.,?!]/g, "").trim();
        const userWords = normalize(userText).split(' ');
        const origWords = normalize(originalText).split(' ');

        let matches = 0;
        userWords.forEach(word => {
            if (origWords.includes(word)) matches++;
        });

        const score = Math.min(100, Math.round((matches / origWords.length) * 100));
        setSimilarity(score);
    };

    const renderWords = () => {
        if (!transcript) return null;

        const normalize = (s) => s.toLowerCase().replace(/[.,?!]/g, "").trim();
        const origWords = normalize(sentence).split(' ');
        const userWords = transcript.split(' ');

        return (
            <div className="flex flex-wrap gap-2 text-xl font-medium justify-center mt-4">
                {userWords.map((word, i) => {
                    const isCorrect = origWords.includes(normalize(word));
                    return (
                        <span key={i} className={`p-1 rounded ${isCorrect ? 'text-brand-green bg-brand-green/10' : 'text-brand-red line-through bg-brand-red/10'}`}>
                            {word}
                        </span>
                    );
                })}
            </div>
        );
    };

    const handleContinue = () => {
        if (onComplete) {
            // Considered successful if >= 70% similar
            const isSuccess = similarity >= 70;
            onComplete({ success: isSuccess, score: similarity });
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col pt-8 items-center space-y-8">
            <h3 className="text-xl font-bold text-white text-center">Escucha y repite (Shadowing)</h3>

            <div className="bg-dark-card border border-gray-800 p-8 rounded-2xl w-full text-center">
                <div className="mb-6">
                    <p className="text-2xl font-bold text-white mb-2 leading-relaxed">"{sentence}"</p>
                    {translation && <p className="text-gray-400 italic">"{translation}"</p>}
                </div>

                <button
                    onClick={() => speak(sentence)}
                    disabled={isSpeaking || isListening}
                    className="p-4 bg-brand-green/10 rounded-full text-brand-green hover:bg-brand-green/20 transition-transform active:scale-95 disabled:opacity-50"
                >
                    <Volume2 className="w-8 h-8" />
                </button>
            </div>

            <div className="w-full text-center space-y-6">
                <button
                    onClick={toggleRecording}
                    className={`relative p-8 rounded-full shadow-2xl transition-all duration-300 ${isListening ? 'bg-brand-red text-white animate-pulse scale-110' : 'bg-dark-lighter border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 hover:scale-105'}`}
                >
                    {isListening ? <StopCircle className="w-10 h-10" /> : <Mic className="w-10 h-10" />}

                    {isListening && (
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-brand-red font-bold whitespace-nowrap">
                            Escuchando...
                        </span>
                    )}
                </button>

                {hasRecorded && !isListening && (
                    <div className="mt-8 pt-8 border-t border-gray-800 animate-fade-in w-full text-center">
                        <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">Tu pronunciación</h4>
                        {transcript ? (
                            <>
                                {renderWords()}
                                <div className="mt-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-dark">
                                        <span className="text-gray-400 text-sm">Precisión:</span>
                                        <span className={`font-bold ${similarity >= 80 ? 'text-brand-green' : similarity >= 50 ? 'text-brand-yellow' : 'text-brand-red'}`}>
                                            {similarity}%
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="text-brand-red italic">No se pudo reconocer tu voz. Intenta de nuevo.</p>
                        )}

                        <button
                            onClick={() => { setHasRecorded(false); setSimilarity(0); }}
                            className="mt-6 mx-auto flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <RefreshCcw className="w-4 h-4" /> Intentar de nuevo
                        </button>
                    </div>
                )}
            </div>

            <div className="w-full mt-auto pt-8">
                <button
                    onClick={handleContinue}
                    disabled={!hasRecorded || isListening}
                    className="w-full py-4 text-white font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-brand-yellow hover:bg-yellow-500 text-black"
                >
                    Aceptar y Continuar
                </button>
            </div>
        </div>
    );
}
