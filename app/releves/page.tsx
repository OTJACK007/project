'use client';

import { EmptyState } from '@/components/releves/EmptyState';

export default function Releves() {
  return (
    <div className="flex flex-col h-full bg-background">
      <main className="flex-1 overflow-y-auto">
        <EmptyState />
      </main>
    </div>
  );
}