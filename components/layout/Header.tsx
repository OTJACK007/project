'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [currentDate] = useState(new Date());
  
  const days = ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.'];
  
  return (
    <div className="flex flex-col border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            {currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
          </h1>
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-100">
              <ChevronRight className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            Aujourd'hui
          </button>
          <select className="form-select rounded-md border-gray-300 text-sm">
            <option>Semaine</option>
            <option>Mois</option>
            <option>Année</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-7 border-t border-gray-200">
        {days.map((day) => (
          <div
            key={day}
            className="py-2 text-center text-sm font-medium text-gray-500"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}