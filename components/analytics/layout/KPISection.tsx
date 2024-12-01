'use client';

import { Wallet, Users, Clock, Mail } from 'lucide-react';
import { KPICard } from '@/components/analytics/shared/KPICard';

export function KPISection() {
  const kpis = [
    {
      title: 'Salaires versés',
      value: '12,450,000 FCFA',
      change: '+12.5%',
      trend: 'up',
      icon: Wallet
    },
    {
      title: 'Employés recrutés',
      value: '1,234',
      change: '+3.2%',
      trend: 'up',
      icon: Users
    },
    {
      title: 'Heures travaillés',
      value: '2,450 heures',
      change: '-0.8%',
      trend: 'down',
      icon: Clock
    },
    {
      title: 'Candidatures reçues',
      value: '573',
      change: '+8.3%',
      trend: 'up',
      icon: Mail
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi) => (
        <KPICard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
}