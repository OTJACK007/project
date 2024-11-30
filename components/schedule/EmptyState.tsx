'use client';

import { Calendar } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-12">
      <div className="rounded-full bg-blue-50 p-3">
        <Calendar className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">
        Aucun créneau cette semaine
      </h3>
      <p className="mt-1 text-sm text-gray-500 text-center max-w-sm">
        Vous n'avez pas de créneau prévu cette semaine.
        Affichez une autre semaine ou postez une nouvelle mission.
      </p>
      <button className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
        Nouvelle demande
      </button>
    </div>
  );
}