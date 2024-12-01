'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { UserMenu } from '@/components/layout/user/UserMenu';
import {
  ChevronLeft,
  ChevronRight,
  Blocks,
  BarChart3,
  CalendarDays,
  Users2,
  Zap,
  FileSpreadsheet,
  Clock,
  Settings,
  Receipt,
  PlusCircle
} from 'lucide-react';

const navigation = [
  { name: 'JOB Space', href: '/dashboard/job-space', icon: Blocks },
  { name: 'Analytiques', href: '/dashboard/analytiques', icon: BarChart3 },
  { name: 'Planning', href: '/dashboard/planning', icon: CalendarDays },
  { name: 'Prestations', href: '/dashboard/prestations', icon: Users2 },
  { name: 'Fiches de poste', href: '/dashboard/fiches', icon: Zap },
  { name: 'Contrats', href: '/dashboard/contrats', icon: FileSpreadsheet },
  { name: "Relevés d'heures", href: '/dashboard/releves', icon: Clock },
  { name: 'Factures', href: '/dashboard/factures', icon: Receipt },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside 
      className={cn(
        "flex flex-col h-screen sticky top-0 border-r border-border bg-background transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/dashboard/job-space" className={cn(
          "flex items-center gap-2",
          isCollapsed && "justify-center"
        )}>
          <Image
            src="https://static.wixstatic.com/media/c67dd6_5170cd115f2c4fe089db15aceb4b63d6~mv2.png"
            alt="Burok JOB Logo"
            width={32}
            height={32}
            className="rounded-md"
            priority
          />
          {!isCollapsed && <span className="font-semibold text-xl">Burok JOB</span>}
        </Link>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md hover:bg-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          )}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = isActiveRoute(item.href);
          
          return (
            <Link
              key={item.name}
              href={item.href}
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
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4 space-y-4">
        <button className={cn(
          "w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90",
          isCollapsed && "px-2"
        )}>
          <PlusCircle className={cn("h-5 w-5", !isCollapsed && "mr-2")} />
          {!isCollapsed && "Nouvelle demande"}
        </button>

        <div className="relative w-full" style={{ paddingBottom: `${(1/2.7) * 100}%` }}>
          <Image
            src="https://static.wixstatic.com/media/c67dd6_d6bb54df117040cc864831ff9de85218~mv2.gif"
            alt="Promotional Image"
            fill
            className="object-contain rounded-[18px]"
            sizes={isCollapsed ? "80px" : "256px"}
            priority
          />
        </div>

        <div className="border-t border-border pt-4">
          <div className="px-3">
            <ThemeToggle isCollapsed={isCollapsed} />
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="px-3">
            <UserMenu isCollapsed={isCollapsed} />
          </div>
        </div>
      </div>
    </aside>
  );
}