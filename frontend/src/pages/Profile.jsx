import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Settings, LogOut, Code, User, Mail, X, Check, Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

export default function Profile() {
    const { user, profile, signOut, updateUserPassword } = useAuth();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [newUsername, setNewUsername] = useState(profile?.username || user?.user_metadata?.username || '');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        let successMessage = "Perfil actualizado correctamente";

        try {
            if (newUsername && newUsername !== profile?.username) {
                const { error: dbError } = await supabase
                    .from('profiles')
                    .update({ username: newUsername })
                    .eq('id', user.id);
                if (dbError) throw dbError;

                // Update local metadata as well
                await supabase.auth.updateUser({ data: { username: newUsername } });
            }

            if (newPassword) {
                if (newPassword.length < 6) {
                    throw new Error("La contraseña debe tener al menos 6 caracteres");
                }
                const { error: passError } = await updateUserPassword(newPassword);
                if (passError) throw passError;
                successMessage = "Contraseña y perfil actualizados";
                setNewPassword(''); // clear field
            }

            toast.success(successMessage);
            setIsSettingsOpen(false);
            // Optionally, we could trigger a refetch of the profile here
        } catch (error) {
            toast.error(error.message || "Error al actualizar el perfil");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
            <header>
                <h2 className="text-3xl font-bold text-white mb-2">Mi Perfil</h2>
                <p className="text-gray-400">Gestiona tu información y preferencias</p>
            </header>

            <div className="bg-dark-card border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-black/20">
                <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                        src={profile?.avatar_url || user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${profile?.username || user?.user_metadata?.username || 'U'}&background=10b981&color=fff`}
                        alt="Avatar"
                        className="w-24 h-24 rounded-full border-4 border-dark shadow-xl"
                    />
                    <div className="text-center sm:text-left flex-1 space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{profile?.username || user?.user_metadata?.username || 'Usuario'}</h3>
                            <span className={`inline-block px-2 py-1 mt-1 rounded text-xs font-medium uppercase ${profile?.role === 'admin' ? 'bg-brand-red/10 text-brand-red' : 'bg-brand-green/10 text-brand-green'}`}>
                                {profile?.role === 'admin' ? 'Administrador' : 'Estudiante'}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <span>{user?.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <User className="w-5 h-5 text-gray-500" />
                                <span>Registrado el: {new Date(user?.created_at || Date.now()).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 divide-y divide-gray-800">
                    <button
                        onClick={() => {
                            setNewUsername(profile?.username || '');
                            setNewPassword('');
                            setIsSettingsOpen(true);
                        }}
                        className="w-full flex items-center gap-3 p-4 hover:bg-gray-800/50 transition-colors text-left text-gray-300 hover:text-white"
                    >
                        <Settings className="w-5 h-5 text-gray-400 shrink-0" />
                        <span className="font-medium">Configuración de la cuenta</span>
                    </button>
                    <button
                        onClick={() => toast('El idioma está fijo en Español (Latino) por defecto', { icon: '🇪🇸' })}
                        className="w-full flex items-center gap-3 p-4 hover:bg-gray-800/50 transition-colors text-left text-gray-300 hover:text-white"
                    >
                        <Code className="w-5 h-5 text-gray-400 shrink-0" />
                        <span className="font-medium">Preferencias de Idioma (Español)</span>
                    </button>
                    <button onClick={() => signOut()} className="w-full flex items-center gap-3 p-4 hover:bg-red-500/10 transition-colors text-left text-brand-red">
                        <LogOut className="w-5 h-5 shrink-0" />
                        <span className="font-medium">Cerrar Sesión Global</span>
                    </button>
                </div>
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-dark-card border border-gray-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between p-4 border-b border-gray-800">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Settings className="w-5 h-5 text-brand-green" />
                                Configuración
                            </h3>
                            <button
                                onClick={() => setIsSettingsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors p-1"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <form onSubmit={handleUpdateProfile} className="p-6 space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Nombre de Usuario</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        value={newUsername}
                                        onChange={e => setNewUsername(e.target.value)}
                                        className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 bg-dark rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-brand-green focus:border-transparent sm:text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">
                                    Cambiar Contraseña <span className="text-gray-500 text-xs font-normal">(Opcional)</span>
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Nueva contraseña"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-700 bg-dark rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-brand-green focus:border-transparent sm:text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsSettingsOpen(false)}
                                    className="flex-1 py-2 px-4 border border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading || (!newPassword && newUsername === profile?.username)}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark bg-brand-green hover:bg-emerald-500 transition-colors disabled:opacity-50"
                                >
                                    {loading ? 'Guardando...' : <><Check className="w-4 h-4" /> Guardar</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
