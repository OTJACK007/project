'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationLinkProps {
  href: string;
  icon: LucideIcon;
  name: string;
  isActive: boolean;
  isCollapsed: boolean;
}

export function NavigationLink({ href, icon: Icon, name, isActive, isCollapsed }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
        isActive 
          ? "bg-primary text-primary-foreground" 
          : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
        isCollapsed && "justify-center"
      )}
    >
      <Icon className={cn("h-5 w-5", isActive && "text-primary-foreground")} />
      {!isCollapsed && (
        <span className={cn(isActive && "font-medium")}>
          {name}
        </span>
      )}
    </Link>
  );
}