'use client';

import { AnalyticsHeader } from '@/components/analytics/layout/Header';
import { AnalyticsNavigation } from '@/components/analytics/layout/Navigation';
import { KPISection } from '@/components/analytics/layout/KPISection';
import { Overview } from '@/components/analytics/features/Overview';
import { RecentPayments } from '@/components/analytics/features/RecentPayments';

export default function Analytics() {
  return (
    <div className="flex flex-col h-full bg-background">
      <AnalyticsHeader />
      <AnalyticsNavigation />
      <main className="flex-1 overflow-y-auto p-6 space-y-6">
        <KPISection />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Overview />
          <RecentPayments />
        </div>
      </main>
    </div>
  );
}