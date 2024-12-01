'use client';

import { PlusCircle } from 'lucide-react';

export function WelcomeMessage() {
  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Bonjour %Ismaila !
      </h1>
      <p className="text-gray-600 mb-6">
        Toutes vos missions avec Side s&apos;afficheront ici. Pour démarrer, il suffit de cliquer sur le bouton &quot;+ Nouvelle demande&quot; en bas de la barre de navigation de gauche.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm">
          <PlusCircle className="h-5 w-5 mr-2" />
          Nouvelle demande
        </button>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center"
          >
            <span className="text-sm text-gray-400">Placeholder {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}