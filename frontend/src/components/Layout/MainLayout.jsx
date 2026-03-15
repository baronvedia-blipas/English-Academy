import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LogOut, Home, Map, User, BookOpen, Library, Shield, GraduationCap, ChevronRight, PenTool } from 'lucide-react';

export default function MainLayout() {
    const { user, profile, signOut } = useAuth();
    const location = useLocation();

    const isActive = (path) => location.pathname.startsWith(path);

    const navLinkClass = (path, accentColor = 'bg-brand-green') => {
        const active = isActive(path);
        return `group relative flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${active ? 'bg-white/5 text-white shadow-sm ring-1 ring-white/10' : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'}`;
    };

    const ActiveIndicator = ({ active, colorClass = 'bg-brand-green' }) => {
        if (!active) return null;
        return (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-md overflow-hidden flex items-center justify-center">
                <div className={`w-full h-full ${colorClass} shadow-[0_0_10px_rgba(34,197,94,0.5)]`}></div>
            </div>
        );
    };

    const PingDot = ({ active, colorClass = 'bg-brand-green' }) => {
        if (!active) return null;
        return (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colorClass} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${colorClass}`}></span>
            </span>
        );
    };

    return (
        <div className="flex h-screen bg-[#0F1117] text-slate-200 font-sans selection:bg-brand-green/30 selection:text-brand-green">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex flex-col w-72 bg-[#13151A] border-r border-slate-800/60 shadow-2xl relative z-20">

                {/* User Profile Glass Header */}
                <div className="p-6 border-b border-slate-800/60 bg-gradient-to-b from-white/[0.03] to-transparent">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <img
                                src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email?.charAt(0) || 'U'}&background=22c55e&color=fff`}
                                alt="Avatar"
                                className="w-12 h-12 rounded-full ring-2 ring-slate-800 group-hover:ring-brand-green/50 transition-all duration-300 object-cover shadow-lg"
                            />
                            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"></div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full ring-2 ring-[#13151A]"></div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <h2 className="text-sm font-bold text-white truncate pr-2">{profile?.username || user?.email?.split('@')[0] || 'Estudiante'}</h2>
                            <p className="text-xs text-slate-500 font-medium truncate">{profile?.role === 'admin' ? 'Administrador' : 'Nivel Básico'}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-brand-green transition-colors" />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 custom-scrollbar">
                    {/* Main Menu Segment */}
                    <div className="mb-6">
                        <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Aprendizaje</p>
                        <ul className="space-y-1.5">
                            <li>
                                <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                                    <ActiveIndicator active={isActive('/dashboard')} />
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive('/dashboard') ? 'bg-brand-green/20 text-brand-green' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                        <Home className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-sm">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/map" className={navLinkClass('/map')}>
                                    <ActiveIndicator active={isActive('/map')} />
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive('/map') ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                        <Map className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-sm">Mapa Aventura</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/gramatica" className={navLinkClass('/gramatica')}>
                                    <ActiveIndicator active={isActive('/gramatica')} />
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive('/gramatica') ? 'bg-purple-500/20 text-purple-400' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-sm">Gramática</span>
                                    {isActive('/gramatica') && <PingDot active={true} colorClass="bg-purple-500" />}
                                </Link>
                            </li>
                            <li>
                                <Link to="/parrafos" className={navLinkClass('/parrafos')}>
                                    <ActiveIndicator active={isActive('/parrafos')} colorClass="bg-indigo-500" />
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive('/parrafos') ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                        <PenTool className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-sm">Párrafos</span>
                                    {isActive('/parrafos') && <PingDot active={true} colorClass="bg-indigo-500" />}
                                </Link>
                            </li>
                            <li>
                                <Link to="/recursos" className={navLinkClass('/recursos')}>
                                    <ActiveIndicator active={isActive('/recursos')} colorClass="bg-brand-yellow" />
                                    <div className={`p-1.5 rounded-lg transition-colors ${isActive('/recursos') ? 'bg-brand-yellow/20 text-brand-yellow' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                        <Library className="w-4 h-4" />
                                    </div>
                                    <span className="font-semibold text-sm">Recursos Extras</span>
                                    {isActive('/recursos') && <PingDot active={true} colorClass="bg-brand-yellow" />}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Admin Menu Segment */}
                    {profile?.role === 'admin' && (
                        <div className="mb-6">
                            <div className="h-px bg-slate-800/60 mb-6 mx-2"></div>
                            <p className="px-3 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-brand-red ring-2 ring-brand-red/20 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
                                Administración
                            </p>
                            <ul className="space-y-1.5">
                                <li>
                                    <Link to="/admin" className={navLinkClass('/admin', 'bg-brand-red')}>
                                        <ActiveIndicator active={isActive('/admin')} colorClass="bg-brand-red" />
                                        <div className={`p-1.5 rounded-lg transition-colors ${isActive('/admin') ? 'bg-brand-red/20 text-brand-red' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                                            <Shield className="w-4 h-4" />
                                        </div>
                                        <span className="font-semibold text-sm">Panel Global</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-4 pb-6 px-4 border-t border-slate-800/60 bg-[#13151A]">
                    <Link to="/profile" className={navLinkClass('/profile')}>
                        <ActiveIndicator active={isActive('/profile')} />
                        <div className={`p-1.5 rounded-lg transition-colors ${isActive('/profile') ? 'bg-slate-500/20 text-slate-300' : 'bg-slate-800/50 text-slate-400 group-hover:bg-slate-700/50 group-hover:text-white'}`}>
                            <User className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-sm">Mi Perfil</span>
                    </Link>
                    <button
                        onClick={signOut}
                        className="w-full mt-2 group relative flex items-center justify-between p-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-500/20"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-800/50 group-hover:bg-red-500/20 transition-colors">
                                <LogOut className="w-4 h-4" />
                            </div>
                            <span className="font-semibold text-sm">Cerrar Sesión</span>
                        </div>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 relative overflow-y-auto overflow-x-hidden min-h-screen custom-scrollbar">
                {/* Subtle Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none mix-blend-overlay"></div>
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-brand-green/5 blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 w-full h-full pb-20 md:pb-0">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Bottom Bar (Refined) */}
            <nav className="md:hidden fixed bottom-0 w-full bg-[#13151A]/90 backdrop-blur-xl border-t border-white/5 pb-safe pt-2 px-2 flex justify-around items-center z-50">
                <Link to="/dashboard" className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive('/dashboard') ? 'text-brand-green' : 'text-slate-500'} `}>
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Inicio</span>
                </Link>
                <Link to="/map" className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive('/map') ? 'text-brand-green' : 'text-slate-500'} `}>
                    <Map className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Niveles</span>
                </Link>
                <Link to="/gramatica" className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive('/gramatica') ? 'text-brand-green' : 'text-slate-500'} `}>
                    <GraduationCap className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Librería</span>
                </Link>
                <Link to="/profile" className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive('/profile') ? 'text-brand-green' : 'text-slate-500'} `}>
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Mi Perfil</span>
                </Link>
            </nav>
        </div>
    );
}
