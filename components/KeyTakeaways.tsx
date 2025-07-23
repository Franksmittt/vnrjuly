'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';

const KeyTakeaways = ({ takeaways }: { takeaways: string[] }) => (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h3>
        <ul className="space-y-3">
            {takeaways.map((item, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default KeyTakeaways;