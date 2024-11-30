'use client';

import { useState } from 'react';

export function Calendar() {
  const [currentDate] = useState(new Date());
  
  // Get the dates for the current week
  const getWeekDates = () => {
    const dates = [];
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay() + 1); // Start with Monday
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();
  const currentDay = currentDate.getDate();

  return (
    <div className="grid grid-cols-7 h-full border-b border-gray-200">
      {weekDates.map((date, index) => (
        <div
          key={index}
          className={`border-r border-gray-200 ${
            date.getDate() === currentDay
              ? 'bg-blue-50'
              : 'hover:bg-gray-50'
          }`}
        >
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-2 py-3">
            <div className="text-sm text-gray-900">
              {date.getDate()}
            </div>
          </div>
          <div className="px-2 py-2 h-full">
            {/* Time slots will be added here */}
          </div>
        </div>
      ))}
    </div>
  );
}