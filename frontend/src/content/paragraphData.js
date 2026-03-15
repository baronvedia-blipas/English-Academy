import { module1 } from './paragraphModules/module1';
import { module2 } from './paragraphModules/module2';
import { module3 } from './paragraphModules/module3';
import { module4 } from './paragraphModules/module4';
import { module5 } from './paragraphModules/module5';

export const paragraphData = [
    ...module1,
    ...module2,
    ...module3,
    ...module4,
    ...module5
];

export const paragraphModulesInfo = [
    { id: 'm1', title: 'Fundamentos del Párrafo', color: 'bg-indigo-600', hoverColor: 'hover:bg-indigo-700', topics: module1.length },
    { id: 'm2', title: 'Tipos de Párrafos', color: 'bg-emerald-600', hoverColor: 'hover:bg-emerald-700', topics: module2.length },
    { id: 'm3', title: 'Párrafos por Contexto', color: 'bg-orange-600', hoverColor: 'hover:bg-orange-700', topics: module3.length },
    { id: 'm4', title: 'Técnicas Avanzadas', color: 'bg-purple-600', hoverColor: 'hover:bg-purple-700', topics: module4.length },
    { id: 'm5', title: 'Práctica y Aplicación', color: 'bg-rose-600', hoverColor: 'hover:bg-rose-700', topics: module5.length },
];
