import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ActivityChart({ data }) {
    // Custom Tooltip
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#13151A] border border-gray-800 p-3 rounded-xl shadow-xl">
                    <p className="text-gray-400 text-xs mb-1 uppercase font-bold">{label}</p>
                    <p className="text-brand-green font-bold text-lg">{payload[0].value} XP</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 h-[350px] w-full flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-6 z-10">Actividad XP (Últimos 7 Días)</h3>
            <div className="flex-1 w-full z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '3 3' }} />
                        <Area type="monotone" dataKey="xp" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-green/10 blur-3xl rounded-full pointer-events-none"></div>
        </div>
    );
}
