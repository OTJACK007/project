'use client';

import { EmptyState } from '@/components/fiches/EmptyState';

export default function Fiches() {
  return (
    <div className="flex flex-col h-full bg-background">
      <main className="flex-1 overflow-y-auto p-6">
        <EmptyState />
      </main>
    </div>
  );
}