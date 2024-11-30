'use client';

import { ChevronDown } from 'lucide-react';

export function UserFilter() {
  return (
    <button className="inline-flex items-center px-4 py-2 text-sm text-foreground bg-background border border-border rounded-md hover:bg-accent">
      Tous les collaborateur
      <ChevronDown className="ml-2 h-4 w-4" />
    </button>
  );
}