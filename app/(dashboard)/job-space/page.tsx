'use client';

import { useState } from 'react';
import { TabNavigation } from '@/components/job-space/TabNavigation';
import { EmptyState } from '@/components/job-space/EmptyState';
import { UserFilter } from '@/components/job-space/UserFilter';

export default function JobSpace() {
  const [activeTab, setActiveTab] = useState('missions');

  return (
    <div className="flex flex-col h-screen">
      <div className="border-b border-border bg-background">
        <div className="flex justify-between items-center px-6 py-4">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          <UserFilter />
        </div>
      </div>
      <main className="flex-1 overflow-y-auto bg-background">
        <EmptyState />
      </main>
    </div>
  );
}