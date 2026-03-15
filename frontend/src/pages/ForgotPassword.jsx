import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, AlertCircle, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const { resetPasswordForEmail } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const { error } = await resetPasswordForEmail(email);
            if (error) throw error;
            setSuccess(true);
        } catch (err) {
            setError(err.message || "Error al solicitar reestablecimiento");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
                <Link to="/login" className="absolute -top-12 left-0 sm:-left-12 text-gray-400 hover:text-white flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                </Link>

                <div className="flex justify-center">
                    <BookOpen className="w-12 h-12 text-brand-green" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Recuperar Contraseña
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400 px-4">
                    Ingresa tu correo y te enviaremos un enlace para crear una nueva contraseña.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-dark-card py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-800">
                    {success ? (
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <CheckCircle2 className="w-16 h-16 text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white">¡Correo enviado!</h3>
                            <p className="text-gray-400">
                                Revisa tu bandeja de entrada o spam. Hemos enviado un enlace para que reestablezcas tu acceso.
                            </p>
                            <Link to="/login" className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark bg-brand-green hover:bg-emerald-500 transition-colors mt-6">
                                Volver a Iniciar Sesión
                            </Link>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {error && (
                                <div className="bg-brand-red/10 border border-brand-red text-brand-red p-3 rounded-md flex items-start gap-2 text-sm">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                    <p>{error}</p>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-300">Correo Electrónico</label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="tu@correo.com"
                                        className="appearance-none block w-full px-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-green focus:border-transparent sm:text-sm text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading || !email}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-brand-yellow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow disabled:opacity-50 transition-colors"
                                >
                                    {loading ? 'Enviando...' : 'Enviar enlace mágico'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
