import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function SkillRadar({ data }) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#13151A]/80 backdrop-blur-md border border-gray-700/50 p-4 rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                    <p className="text-gray-400 text-xs mb-1 uppercase font-bold tracking-wider">{payload[0].payload.subject}</p>
                    <p className="text-blue-400 font-bold text-2xl drop-shadow-md">{payload[0].value}<span className="text-sm text-blue-500/70">%</span></p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-dark-card border border-gray-800/60 rounded-3xl p-6 h-[380px] w-full flex flex-col relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/5 hover:border-gray-700/80 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 z-10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></span>
                    Mapa de Habilidades
                </h3>
            </div>
            <div className="flex-1 w-full z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <defs>
                            <radialGradient id="radarGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#1e3a8a" stopOpacity={0.1} />
                            </radialGradient>
                            <filter id="radarGlow" height="200%">
                              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                        </defs>
                        <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#cbd5e1', fontSize: 13, fontWeight: 600 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Habilidades" dataKey="A" stroke="#60a5fa" strokeWidth={3} fill="url(#radarGradient)" style={{ filter: 'url(#radarGlow)' }} />
                        <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
             {/* Ambient Background Glow */}
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-700"></div>
        </div>
    );
}
