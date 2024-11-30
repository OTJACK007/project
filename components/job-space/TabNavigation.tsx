'use client';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'missions', label: 'MISSIONS' },
    { id: 'brouillons', label: 'BROUILLONS' },
    { id: 'terminees', label: 'TERMINÉES' },
  ];

  return (
    <nav className="flex space-x-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            relative px-1 pb-4 text-sm font-medium
            ${activeTab === tab.id
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground'
            }
          `}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </nav>
  );
}