import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { BookOpen, AlertCircle } from 'lucide-react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { signUp } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const { error } = await signUp(email, password, username);
            if (error) throw error;
            // Depending on Supabase settings, auto-login might occur or email confirmation needed.
            // We assume simple auth without email verification for this demo
            navigate('/dashboard');
        } catch (err) {
            setError(err.message || "Error al registrarse");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <BookOpen className="w-12 h-12 text-brand-yellow" />
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Crear una cuenta
                </h2>
                <p className="mt-2 text-center text-sm text-gray-400">
                    Únete y comienza a aprender hoy
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-dark-card py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-gray-800">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-brand-red/10 border border-brand-red text-brand-red p-3 rounded-md flex items-center gap-2 text-sm">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p>{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-300">Nombre de Usuario</label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    required
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-yellow focus:border-transparent sm:text-sm text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300">Email</label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-yellow focus:border-transparent sm:text-sm text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300">Contraseña</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    required
                                    minLength={6}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-700 bg-dark rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-brand-yellow focus:border-transparent sm:text-sm text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-yellow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-yellow disabled:opacity-50 transition-colors"
                                style={{ color: '#000' }}
                            >
                                {loading ? 'Cargando...' : 'Registrarse'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            ¿Ya tienes una cuenta?{' '}
                            <Link to="/login" className="font-medium text-brand-yellow hover:text-yellow-400 transition-colors">
                                Inicia sesión aquí
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
