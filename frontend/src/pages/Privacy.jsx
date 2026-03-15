import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-brand-green hover:text-emerald-400 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Volver
                    </Link>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <Shield className="w-10 h-10 text-brand-green" />
                    <h1 className="text-3xl font-bold text-white">Política de Privacidad</h1>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-10 text-gray-300 space-y-6">
                    <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Información que recopilamos</h2>
                        <p>Recopilamos la siguiente información cuando te registras y utilizas nuestra plataforma:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Dirección de correo electrónico (para registro y autenticación).</li>
                            <li>Nombre de usuario (opcional o autogenerado).</li>
                            <li>Datos de rendimiento en los ejercicios (puntuaciones, rachas, lecciones completadas).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Uso del Reconocimiento de Voz e Inteligencia Artificial</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Voz:</strong> El reconocimiento de voz ocurre directamente en tu navegador (Web Speech API). No enviamos fragmentos de voz a nuestros servidores para almacenamiento.</li>
                            <li><strong>Textos (Writing):</strong> Los textos que escribes pueden ser analizados mediante APIs externas seguras con el único propósito de revisión gramatical.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Seguridad</h2>
                        <p>Tus datos están asegurados mediante encriptación vía Supabase. Nosotros no almacenamos ni tenemos acceso a tu contraseña en texto plano.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
