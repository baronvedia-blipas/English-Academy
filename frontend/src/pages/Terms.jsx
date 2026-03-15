import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function Terms() {
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
                    <BookOpen className="w-10 h-10 text-brand-green" />
                    <h1 className="text-3xl font-bold text-white">Términos y Condiciones</h1>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 md:p-10 text-gray-300 space-y-6">
                    <p className="text-sm text-gray-500">Última actualización: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">1. Aceptación de los Términos</h2>
                        <p>Al acceder y usar English Academy, usted acepta estar sujeto a estos términos y condiciones de uso. Si no está de acuerdo, por favor no utilice la aplicación.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">2. Uso del Servicio</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>El servicio es provisto con fines educativos.</li>
                            <li>Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.</li>
                            <li>Está prohibido el uso del servicio para cualquier propósito ilegal o no autorizado.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">3. Progreso y Datos de Usuario</h2>
                        <p>Nos esforzamos por proteger su progreso. Sus datos son almacenados de forma segura mediante Supabase. Conservamos sus datos únicamente para que pueda continuar su aprendizaje.</p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl font-bold text-white">4. Propiedad Intelectual</h2>
                        <p>Todo el contenido original, ejercicios, y diseño en English Academy están protegidos y no pueden ser copiados ni redistribuidos sin autorización explícita.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
