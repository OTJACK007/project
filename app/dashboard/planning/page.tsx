'use client';

import { WeeklyCalendar } from '@/components/planning/WeeklyCalendar';
import { CalendarHeader } from '@/components/planning/CalendarHeader';
import { EmptyState } from '@/components/planning/EmptyState';

export default function Planning() {
  return (
    <div className="flex flex-col h-full">
      <CalendarHeader />
      <div className="flex-1 relative overflow-hidden">
        <WeeklyCalendar />
        <EmptyState />
      </div>
    </div>
  );
}