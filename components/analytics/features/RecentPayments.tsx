'use client';

import { useRouter } from 'next/navigation';

const recentPayments = [
  {
    id: 1,
    name: 'Fatou Diallo',
    email: 'fatou.diallo@example.com',
    avatar: 'FD',
    amount: '450,000 FCFA'
  },
  {
    id: 2,
    name: 'Amadou Sow',
    email: 'amadou.sow@example.com',
    avatar: 'AS',
    amount: '380,000 FCFA'
  },
  {
    id: 3,
    name: 'Mariama Ba',
    email: 'mariama.ba@example.com',
    avatar: 'MB',
    amount: '425,000 FCFA'
  },
  {
    id: 4,
    name: 'Omar Fall',
    email: 'omar.fall@example.com',
    avatar: 'OF',
    amount: '395,000 FCFA'
  },
  {
    id: 5,
    name: 'Aissatou Diop',
    email: 'aissatou.diop@example.com',
    avatar: 'AD',
    amount: '410,000 FCFA'
  }
];

export function RecentPayments() {
  const router = useRouter();

  const handleViewProfile = (id: number) => {
    router.push('/dashboard/analytiques/candidatprofile');
  };

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Derniers versements</h2>
      <div className="space-y-4">
        {recentPayments.map((payment) => (
          <div key={payment.id} className="flex items-center gap-4 p-2 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-sm font-medium text-primary">
                {payment.avatar}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {payment.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {payment.email}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium whitespace-nowrap">
                {payment.amount}
              </span>
              <button 
                className="px-3 py-1 text-sm rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                onClick={() => handleViewProfile(payment.id)}
              >
                Voir Profil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}