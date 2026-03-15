import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-6 animate-fade-in max-w-md">
                <div className="flex justify-center text-brand-yellow">
                    <AlertTriangle className="w-24 h-24" />
                </div>

                <h1 className="text-6xl font-bold text-white tracking-widest">404</h1>
                <h2 className="text-2xl font-semibold text-gray-300">Página no encontrada</h2>

                <p className="text-gray-400">
                    Oops! Parece que te has perdido en el mapa. La lección o página que buscas no existe o ha sido movida.
                </p>

                <div className="pt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green hover:bg-emerald-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-brand-green/20"
                    >
                        <Home className="w-5 h-5" />
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        </div>
    );
}
