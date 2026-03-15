import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <nav className="flex mb-6 text-sm font-medium" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/dashboard" className="inline-flex items-center text-gray-500 hover:text-brand-green transition-colors">
                        <Home className="w-4 h-4 mr-2" />
                        Inicio
                    </Link>
                </li>
                
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-600 mx-1" />
                                {isLast || !item.href ? (
                                    <span className="text-gray-300 pointer-events-none">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link to={item.href} className="text-gray-500 hover:text-brand-green transition-colors">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
