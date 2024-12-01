'use client';

import { useState } from 'react';
import { SettingsNavigation } from '@/components/settings/navigation/SettingsNavigation';
import { LegalInformationForm } from '@/components/settings/forms/LegalInformationForm';
import { PaymentForm } from '@/components/settings/forms/PaymentForm';
import { RemunerationForm } from '@/components/settings/forms/RemunerationForm';
import { CompanyProfileForm } from '@/components/settings/forms/CompanyProfileForm';
import { TeamForm } from '@/components/settings/forms/TeamForm';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('legal');

  const renderContent = () => {
    switch (activeTab) {
      case 'legal':
        return <LegalInformationForm />;
      case 'payment':
        return <PaymentForm />;
      case 'remuneration':
        return <RemunerationForm />;
      case 'company':
        return <CompanyProfileForm />;
      case 'team':
        return <TeamForm />;
      default:
        return <LegalInformationForm />;
    }
  };

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
        {renderContent()}
      </main>
    </div>
  );
}