'use client';

import { cn } from '@/lib/utils';
import { 
  FileText, 
  CreditCard, 
  DollarSign, 
  Building2, 
  Users 
} from 'lucide-react';

interface SettingsNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function SettingsNavigation({ activeTab, onTabChange }: SettingsNavigationProps) {
  const tabs = [
    { 
      id: 'legal', 
      label: 'Informations légales',
      icon: FileText
    },
    { 
      id: 'payment', 
      label: 'Paiement',
      icon: CreditCard
    },
    { 
      id: 'remuneration', 
      label: 'Politique de rémunération',
      icon: DollarSign
    },
    { 
      id: 'company', 
      label: 'Profil de l\'entreprise',
      icon: Building2
    },
    { 
      id: 'team', 
      label: 'Équipe',
      icon: Users
    },
  ];

  return (
    <nav className="flex items-center h-[68px] space-x-12">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative group"
          >
            <div className={cn(
              "flex items-center gap-2 py-1 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}>
              <Icon className="h-4 w-4" />
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute left-0 right-0 bottom-[-2px] h-0.5 bg-primary" />
              )}
            </div>
          </button>
        )}
      )}
    </nav>
  );
}