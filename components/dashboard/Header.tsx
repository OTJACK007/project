'use client';

import { UserNav } from '@/components/dashboard/UserNav';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}