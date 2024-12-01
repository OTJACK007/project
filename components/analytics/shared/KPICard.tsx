'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
}

export function KPICard({ title, value, change, trend, icon: Icon }: KPICardProps) {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="rounded-full bg-primary/10 p-2">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <span className={cn(
          "text-sm font-medium",
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        )}>
          {change}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="mt-2 text-2xl font-semibold">{value}</p>
      </div>
    </div>
  );
}