import React, { useState } from 'react';
import { CheckSquare, AlertCircle, SpellCheck, CheckCircle2 } from 'lucide-react';

export default function WritingAI({ prompt, onComplete }) {
    const [text, setText] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        if (!text.trim() || text.length < 10) {
            setError("Por favor escribe un poco más (mínimo 10 caracteres).");
            return;
        }

        setError(null);
        setLoading(true);

        try {
            // Usamos el API público y gratuito de LanguageTool (no requiere API key)
            const response = await fetch('https://api.languagetool.org/v2/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    text: text,
                    language: 'en-US', // Validamos en inglés americano
                })
            });

            if (!response.ok) {
                throw new Error("Servicio de corrección no disponible temporalmente.");
            }

            const data = await response.json();

            // Calculamos un puntaje simple: 10 base, -1 por cada error
            const errorCount = data.matches?.length || 0;
            let score = Math.max(1, 10 - errorCount);

            setFeedback({
                matches: data.matches || [],
                score: score
            });
        } catch {
            setError("No pudimos revisar la gramática, pero puedes avanzar de todas formas.");
            setFeedback({ matches: [], score: 10, isFallback: true });
        } finally {
            setLoading(false);
        }
    };

    const handleContinue = () => {
        if (onComplete) {
            onComplete({
                success: feedback?.score >= 6,
                score: (feedback?.score || 0) * 10
            });
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto flex flex-col pt-8 space-y-6">
            <div className="flex items-center gap-3">
                <CheckSquare className="w-8 h-8 text-brand-green" />
                <h3 className="text-xl font-bold text-white">Práctica de Escritura</h3>
            </div>

            <div className="bg-dark-lighter border-2 border-dashed border-gray-700 p-6 rounded-xl">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-2">Instrucciones</p>
                <p className="text-lg text-brand-yellow font-medium">{prompt}</p>
            </div>

            <div className="w-full relative">
                <textarea
                    value={text}
                    onChange={(e) => { setText(e.target.value); setError(null); }}
                    disabled={loading || feedback !== null}
                    placeholder="Escribe tu respuesta en inglés aquí..."
                    className="w-full min-h-[150px] p-4 bg-dark-card border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green resize-y transition-colors disabled:opacity-70"
                />
                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                    {text.length} caracteres
                </div>
            </div>

            {error && (
                <div className="p-4 bg-brand-red/10 border border-brand-red/30 rounded-xl flex items-start gap-3 text-brand-red">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {loading && (
                <div className="flex flex-col items-center justify-center p-8 bg-dark-card rounded-xl border border-gray-800">
                    <div className="w-10 h-10 border-4 border-t-brand-green border-gray-700 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-300 font-medium">Revisando tu ortografía y gramática...</p>
                </div>
            )}

            {feedback && !loading && (
                <div className="bg-dark-card border border-brand-green/30 rounded-xl overflow-hidden animate-fade-in">
                    <div className={`p-4 border-b flex justify-between items-center ${feedback.score >= 6 ? 'bg-brand-green/10 border-brand-green/20' : 'bg-brand-red/10 border-brand-red/20'}`}>
                        <h4 className={`font-bold flex items-center gap-2 ${feedback.score >= 6 ? 'text-brand-green' : 'text-brand-red'}`}>
                            <CheckCircle2 className="w-5 h-5" />
                            Resultados
                        </h4>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">Puntaje:</span>
                            <span className={`font-bold px-3 py-1 rounded-full text-sm ${feedback.score >= 8 ? 'bg-brand-green text-dark' : feedback.score >= 6 ? 'bg-brand-yellow text-dark' : 'bg-brand-red text-white'}`}>
                                {feedback.score}/10
                            </span>
                        </div>
                    </div>

                    <div className="p-6 space-y-6">
                        {feedback.isFallback ? (
                            <p className="text-gray-400">No se encontraron errores automáticamente (modo sin conexión).</p>
                        ) : feedback.matches.length === 0 ? (
                            <div className="flex items-center gap-2 text-brand-green bg-brand-green/10 p-4 rounded-lg">
                                <CheckCircle2 className="w-6 h-6" />
                                <p className="font-medium">¡Excelente redacción! No se encontraron errores ortográficos ni gramaticales.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <p className="text-gray-300 font-medium mb-4">Se encontraron {feedback.matches.length} detalle(s) a mejorar:</p>
                                {feedback.matches.map((match, idx) => (
                                    <div key={idx} className="bg-dark p-4 rounded-lg border border-gray-800">
                                        <p className="text-brand-red font-medium mb-1">
                                            Error: "{text.substring(match.context.offset, match.context.offset + match.context.length)}"
                                        </p>
                                        <p className="text-gray-400 text-sm mb-3">{match.message}</p>

                                        {match.replacements.length > 0 && (
                                            <div className="flex flex-wrap gap-2 items-center">
                                                <span className="text-sm text-brand-green font-medium">Sugerencia:</span>
                                                {match.replacements.slice(0, 3).map((rep, rIdx) => (
                                                    <span key={rIdx} className="bg-brand-green/20 text-brand-green px-2 py-1 rounded text-sm font-bold">
                                                        {rep.value}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="mt-8">
                {!feedback ? (
                    <button
                        onClick={handleSubmit}
                        disabled={loading || !text.trim()}
                        className="w-full py-4 bg-brand-yellow hover:bg-yellow-500 text-black font-bold text-lg rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Revisar Texto
                    </button>
                ) : (
                    <button
                        onClick={handleContinue}
                        className="w-full py-4 bg-brand-green hover:bg-emerald-500 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-brand-green/20"
                    >
                        Continuar
                    </button>
                )}
            </div>
        </div>
    );
}
