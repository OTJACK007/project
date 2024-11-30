'use client';

import { Calendar } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="rounded-full bg-primary/10 p-3 mb-4">
        <Calendar className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">
        Aucun créneau cette semaine
      </h3>
      <p className="text-sm text-muted-foreground text-center max-w-sm mb-6">
        Vous n'avez pas de créneau prévu cette semaine.
        Affichez une autre semaine ou postez une nouvelle mission.
      </p>
      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm">
        + Nouvelle demande
      </button>
    </div>
  );
}