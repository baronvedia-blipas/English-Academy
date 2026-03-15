import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export default function SkillRadar({ data }) {
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-[#13151A] border border-gray-800 p-3 rounded-xl shadow-xl">
                    <p className="text-gray-400 text-xs mb-1 uppercase font-bold">{payload[0].payload.subject}</p>
                    <p className="text-blue-400 font-bold text-lg">{payload[0].value}% Completado</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-dark-card border border-gray-800 rounded-2xl p-6 h-[350px] w-full flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-2 z-10">Mapa de Habilidades</h3>
            <div className="flex-1 w-full z-10">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke="#334155" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar name="Habilidades" dataKey="A" stroke="#3b82f6" strokeWidth={2} fill="#3b82f6" fillOpacity={0.3} />
                        <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
             {/* Ambient Background Glow */}
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
        </div>
    );
}
