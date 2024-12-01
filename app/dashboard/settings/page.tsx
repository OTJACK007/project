'use client';

import { useState } from 'react';
import { SettingsNavigation } from '@/components/settings/SettingsNavigation';
import { LegalInformationForm } from '@/components/settings/LegalInformationForm';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('legal');

  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-border bg-background sticky top-0 z-10">
        <div className="px-8">
          <SettingsNavigation 
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      <main className="flex-1 overflow-y-auto p-8">
        {activeTab === 'legal' && <LegalInformationForm />}
        {/* Add other tab content components here */}
      </main>
    </div>
  );
}