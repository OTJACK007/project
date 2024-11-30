'use client';

import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';

export function CalendarHeader() {
  const [currentDate] = useState(new Date());
  const weekNumber = getWeekNumber(currentDate);
  
  function getWeekNumber(date: Date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }

  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-medium text-foreground">
            {currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
          </h1>
          <span className="text-sm text-muted-foreground">S{weekNumber}</span>
          <div className="flex items-center space-x-2">
            <button className="p-1.5 rounded-full hover:bg-accent">
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-accent">
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-sm text-primary hover:text-primary/90">
            Aujourd'hui
          </button>
          <button className="p-1.5 rounded-full hover:bg-accent">
            <Download className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}