'use client';

import { FileSpreadsheet } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="rounded-full bg-primary/10 p-3 mb-4">
        <FileSpreadsheet className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">
        C'est tout bon !
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
        Vous n'avez aucun contrat à signer pour le moment.
      </p>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm">
        + Nouveau contrat
      </button>
    </div>
  );
}