'use client';

import { useState } from 'react';

export function WeeklyCalendar() {
  const [currentDate] = useState(new Date());
  const days = ['lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.', 'dim.'];
  
  const getWeekDates = () => {
    const dates = [];
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + 1);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();

  return (
    <div className="flex-1">
      <div className="grid grid-cols-7 border-b border-border">
        {days.map((day, index) => {
          const date = weekDates[index];
          const isToday = date.toDateString() === new Date().toDateString();
          
          return (
            <div key={day} className="border-r border-border last:border-r-0">
              <div className={`
                px-4 py-3 text-center
                ${isToday ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground'}
              `}>
                <div className="text-sm font-medium">{day}</div>
                <div className="text-lg">{date.getDate()}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}