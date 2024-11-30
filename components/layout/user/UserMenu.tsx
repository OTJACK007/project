'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, CreditCard, HelpCircle, LogOut, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserAvatar } from './UserAvatar';

const menuItems = [
  { icon: User, label: 'Modifier le profil', onClick: () => {} },
  { icon: CreditCard, label: 'Voir l\'abonnement', onClick: () => {} },
  { icon: HelpCircle, label: 'Centre d\'aide', onClick: () => {} },
];

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    router.push('/auth/login');
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between w-full">
        <UserAvatar initials="IS" name="Ismaila S." />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-full hover:bg-accent ml-2"
          aria-label="Menu options"
        >
          <MoreVertical className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-56 rounded-md shadow-lg bg-popover ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center w-full px-4 py-2 text-sm text-foreground hover:bg-accent"
                  role="menuitem"
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                >
                  <Icon className="mr-3 h-5 w-5 text-muted-foreground" />
                  {item.label}
                </button>
              );
            })}
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-destructive hover:bg-accent"
              role="menuitem"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              <LogOut className="mr-3 h-5 w-5 text-destructive" />
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
}