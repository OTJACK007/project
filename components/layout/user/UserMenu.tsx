'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, CreditCard, HelpCircle, LogOut, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserMenuProps {
  isCollapsed?: boolean;
}

export function UserMenu({ isCollapsed }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/auth/login');
  };

  const menuItems = [
    { icon: User, label: 'Modifier le profil', onClick: () => {} },
    { icon: CreditCard, label: 'Voir l\'abonnement', onClick: () => {} },
    { icon: HelpCircle, label: 'Centre d\'aide', onClick: () => {} },
    { 
      icon: LogOut, 
      label: 'Se déconnecter', 
      onClick: handleLogout,
      className: 'text-destructive hover:text-destructive' 
    },
  ];

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        {isCollapsed ? (
          <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
            <span className="text-sm font-medium text-muted-foreground">IS</span>
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground">IS</span>
            </div>
            <div className="flex-shrink-0">
              <p className="text-sm font-medium text-foreground">Ismaila S.</p>
              <p className="text-xs text-muted-foreground">Voir le profil</p>
            </div>
          </div>
        )}
        {!isCollapsed && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full hover:bg-accent ml-2"
            aria-label="Menu options"
          >
            <MoreVertical className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
      </div>

      {isOpen && !isCollapsed && (
        <div className="absolute bottom-full right-0 mb-2 w-56 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className={cn(
                    "flex items-center w-full px-4 py-2 text-sm hover:bg-accent",
                    item.className || "text-foreground"
                  )}
                  role="menuitem"
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                >
                  <Icon className={cn(
                    "mr-3 h-5 w-5",
                    item.className ? "text-destructive" : "text-muted-foreground"
                  )} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}