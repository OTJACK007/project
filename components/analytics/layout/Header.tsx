'use client';

import { CalendarDays } from 'lucide-react';

export function AnalyticsHeader() {
  return (
    <div className="border-b border-border bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Analytiques</h1>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md hover:bg-accent">
            <CalendarDays className="h-4 w-4" />
            Les 30 derniers jours
          </button>
        </div>
      </div>
    </div>
  );
}