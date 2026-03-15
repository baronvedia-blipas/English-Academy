import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, AlertCircle, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { updateUserPassword } = useAuth();
    const navigate = useNavigate();

    // The user lands here after clicking the magic link in their email.
    // Supabase Auth automatically logs them in with a 'recovery' session.
    // They just need to enter the new password.

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setLoading(true);

        try {
            const { error } = await updateUserPassword(password);
            if (error) throw error;

            toast.success("¡Contraseña actualizada con éxito!");
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || "Error al actualizar contraseña");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <BookOpen className="w-12 h-12 text-brand-green" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Nueva Contraseña
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Establece tu nueva contraseña para acceder.
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-dark-card py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-800">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-brand-red/10 border border-brand-red text-brand-red p-3 rounded-md flex items-start gap-2 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <p>{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-300">Contraseña Nueva</label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-green focus:border-transparent sm:text-sm text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300">Confirmar Contraseña</label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-green focus:border-transparent sm:text-sm text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading || !password || !confirmPassword}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green disabled:opacity-50 transition-colors"
                            >
                                {loading ? 'Guardando...' : 'Cambiar y Entrar'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
