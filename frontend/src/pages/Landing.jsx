import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, Mic, BrainCircuit, Shield, ChevronRight, Globe, Zap, Star } from 'lucide-react';

export default function Landing() {
    const { user } = useAuth();

    // If already logged in, redirect to dashboard
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="min-h-screen bg-dark selection:bg-brand-green/30 selection:text-brand-green overflow-hidden">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/5 top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-8 h-8 text-brand-green" />
                        <span className="text-xl font-bold tracking-tight text-white">English<span className="text-brand-green">Academy</span></span>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Iniciar Sesión</Link>
                        <Link to="/register" className="text-sm font-bold bg-brand-green text-dark px-4 py-2 rounded-lg hover:bg-emerald-500 transition-all hover:scale-105 shadow-lg shadow-brand-green/20">
                            Regístrate
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main>
                <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
                    {/* Background effects */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay z-0"></div>
                    <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
                    <div className="absolute bottom-0 left-0 -m-32 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-medium mb-4 animate-fade-in">
                            <Sparkles className="w-4 h-4" />
                            <span>La forma inteligente de aprender inglés</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
                            Domina el inglés con <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-300">
                                Inteligencia Artificial
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 leading-relaxed">
                            Desde pronunciación perfecta hasta gramática impecable. Aprende a tu propio ritmo con feedback en tiempo real y una ruta diseñada a tu medida.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-brand-green text-dark font-bold text-lg rounded-xl hover:bg-emerald-500 transition-all hover:-translate-y-1 shadow-xl shadow-brand-green/20 flex items-center justify-center gap-2">
                                Comienza Gratis Ahora <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link to="/login" className="w-full sm:w-auto px-8 py-4 bg-dark-lighter border border-gray-700 text-white font-bold text-lg rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center">
                                Ya tengo una cuenta
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-24 bg-dark-lighter/50 border-y border-white/5 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Aprende haciendo, no solo viendo</h2>
                            <p className="text-gray-400">Nuestra plataforma interactiva asegura que practiques todas las habilidades necesarias para ser fluido en inglés.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <FeatureCard
                                icon={<Mic className="w-8 h-8 text-blue-400" />}
                                title="Pronunciación con IA"
                                description="Habla libremente y recibe feedback instantáneo en tu pronunciación utilizando tecnología de reconocimiento de voz."
                            />
                            <FeatureCard
                                icon={<BrainCircuit className="w-8 h-8 text-purple-400" />}
                                title="Redacción Corregida"
                                description="Escribe respuestas y ensayos, y nuestra IA señalará tus errores gramaticales y sugerirá correcciones nativas."
                            />
                            <FeatureCard
                                icon={<Globe className="w-8 h-8 text-brand-yellow" />}
                                title="Inglés del Mundo Real"
                                description="Aprende slang, expresiones idiomáticas y cómo hablan los nativos en la vida cotidiana."
                            />
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="py-24 relative z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
                        <div className="flex justify-center flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Dummy logos for aesthetics */}
                            <div className="flex items-center gap-2 text-xl font-bold text-white"><Zap className="w-6 h-6" /> FastLearn</div>
                            <div className="flex items-center gap-2 text-xl font-bold text-white"><Globe className="w-6 h-6" /> GlobalEd</div>
                            <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="w-6 h-6" /> SecureData</div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#0a0a0c] py-12 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-brand-green" />
                        <span className="text-lg font-bold text-white">EnglishAcademy</span>
                    </div>

                    <div className="flex gap-6">
                        <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">Términos y Condiciones</Link>
                        <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">Privacidad</Link>
                    </div>

                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} English Academy. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-dark p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {icon}
            </div>
            <div className="w-14 h-14 rounded-xl bg-gray-800/50 flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
}

function Sparkles({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
            <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
        </svg>
    )
}
