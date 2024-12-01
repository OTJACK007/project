'use client';

export function AnalyticsNavigation() {
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble' },
    { id: 'analytics', label: 'Analyses' },
    { id: 'reports', label: 'Rapports' },
    { id: 'notifications', label: 'Notifications' },
  ];

  return (
    <div className="border-b border-border bg-background px-6">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className="relative py-4 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {tab.label}
            {tab.id === 'overview' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}