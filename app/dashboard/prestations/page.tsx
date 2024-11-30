'use client';

import { EmptyState } from '@/components/prestations/EmptyState';

export default function Prestations() {
  return (
    <div className="flex flex-col h-full bg-background">
      <main className="flex-1 overflow-y-auto p-6">
        <EmptyState />
      </main>
    </div>
  );
}