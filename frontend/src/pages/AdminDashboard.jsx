import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';
import { Users, Shield, Award, Flame, AlertCircle, Loader } from 'lucide-react';
import { Navigate } from 'react-router-dom';

export default function AdminDashboard() {
    const { user, profile, loading: authLoading } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Only fetch if admin
        if (profile?.role === 'admin') {
            fetchUsersProgress();
        } else {
            setLoading(false);
        }
    }, [profile]);

    const fetchUsersProgress = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .order('total_score', { ascending: false });

            if (error) throw error;
            setUsers(data || []);
        } catch (err) {
            console.error('Error fetching admin data:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (authLoading || loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <Loader className="w-8 h-8 text-brand-green animate-spin" />
            </div>
        );
    }

    // Protection: If not admin, redirect to regular dashboard
    if (profile?.role !== 'admin') {
        return <Navigate to="/dashboard" replace />;
    }

    // Calculate aggregated stats
    const totalUsers = users.length;
    const totalLessonsCompleted = users.reduce((acc, current) => acc + (current.completed_lessons?.length || 0), 0);
    const averageScore = totalUsers > 0
        ? Math.round(users.reduce((acc, current) => acc + (current.total_score || 0), 0) / totalUsers)
        : 0;

    return (
        <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Shield className="w-8 h-8 text-brand-red" />
                        <h2 className="text-3xl font-bold text-white">Panel de Administración</h2>
                    </div>
                    <p className="text-gray-400">Supervisa el progreso general de todos los estudiantes de English Academy.</p>
                </div>
            </header>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex gap-3 text-red-500">
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <p>{error}</p>
                </div>
            )}

            {/* Global Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-dark-card border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-brand-green/10 rounded-full mb-3">
                        <Users className="w-8 h-8 text-brand-green" />
                    </div>
                    <p className="text-gray-400 font-medium mb-1">Estudiantes Totales</p>
                    <p className="text-3xl font-bold text-white">{totalUsers}</p>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-brand-yellow/10 rounded-full mb-3">
                        <Award className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <p className="text-gray-400 font-medium mb-1">Puntaje Promedio</p>
                    <p className="text-3xl font-bold text-white">{averageScore}</p>
                </div>

                <div className="bg-dark-card border border-gray-800 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="p-4 bg-purple-500/10 rounded-full mb-3">
                        <Flame className="w-8 h-8 text-purple-500" />
                    </div>
                    <p className="text-gray-400 font-medium mb-1">Lecciones Totales Completadas</p>
                    <p className="text-3xl font-bold text-white">{totalLessonsCompleted}</p>
                </div>
            </div>

            {/* Students Table */}
            <div className="bg-dark-card border border-gray-800 rounded-xl overflow-hidden shadow-lg shadow-black/20">
                <div className="p-6 border-b border-gray-800">
                    <h3 className="text-xl font-bold text-white">Clasificación de Estudiantes</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-dark-lighter border-b border-gray-800 text-gray-400 text-sm">
                                <th className="p-4 font-medium">Estudiante</th>
                                <th className="p-4 font-medium text-center">Rol</th>
                                <th className="p-4 font-medium text-center">Lecciones Term.</th>
                                <th className="p-4 font-medium text-center">Racha (Días)</th>
                                <th className="p-4 font-medium text-right">Puntaje Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {users.map((u) => (
                                <tr key={u.id} className="hover:bg-dark-lighter/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={u.avatar_url || `https://ui-avatars.com/api/?name=${u.username}&background=random`}
                                                alt={u.username}
                                                className="w-10 h-10 rounded-full bg-gray-800"
                                            />
                                            <div>
                                                <p className="font-bold text-white">{u.username}</p>
                                                <p className="text-xs text-gray-500">{new Date(u.created_at).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium uppercase ${u.role === 'admin' ? 'bg-brand-red/10 text-brand-red' : 'bg-gray-800 text-gray-300'}`}>
                                            {u.role}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <span className="text-gray-300 font-medium">{u.completed_lessons?.length || 0}</span>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-1">
                                            <Flame className={`w-4 h-4 ${u.streak_days > 0 ? 'text-brand-yellow' : 'text-gray-600'}`} />
                                            <span className="text-white font-bold">{u.streak_days || 0}</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <span className="text-brand-green font-bold bg-brand-green/10 px-3 py-1 rounded-full">{u.total_score || 0} XP</span>
                                    </td>
                                </tr>
                            ))}
                            {users.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-gray-400">
                                        No se encontraron usuarios.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
