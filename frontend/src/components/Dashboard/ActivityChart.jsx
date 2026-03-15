import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ActivityChart({ data }) {
    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#13151A]/80 backdrop-blur-md border border-gray-700/50 p-4 rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-green"></div>
                    <p className="text-gray-400 text-xs mb-1 uppercase font-bold tracking-wider">{label}</p>
                    <p className="text-brand-green font-bold text-2xl drop-shadow-md">{payload[0].value} <span className="text-sm text-brand-green/70">XP</span></p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-dark-card border border-gray-800/60 rounded-3xl p-6 h-[380px] w-full flex flex-col relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-green/5 hover:border-gray-700/80 transition-all duration-500">
            <div className="flex items-center justify-between mb-8 z-10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></span>
                    Actividad Semanal
                </h3>
                <span className="text-xs font-bold text-brand-green/70 bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20">XP Gained</span>
            </div>
            <div className="flex-1 w-full z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                            <filter id="shadow" height="200%">
                              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#22c55e" floodOpacity="0.3"/>
                            </filter>
                        </defs>
                        <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '3 3' }} />
                        <Area type="monotone" dataKey="xp" stroke="#22c55e" strokeWidth={4} fillOpacity={1} fill="url(#colorXp)" style={{ filter: 'url(#shadow)' }} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-green/20 transition-all duration-700"></div>
        </div>
    );
}
