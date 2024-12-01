'use client';

export function EmptyState() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Bonjour %Ismaila !
      </h1>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Toutes vos missions avec Side s&apos;afficheront ici. Pour démarrer, il suffit de cliquer sur le bouton &quot;+ Nouvelle demande&quot; en bas de la barre de navigation de gauche.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-32 rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center"
          >
            <div className="text-sm text-gray-500">Mission {i}</div>
          </div>
        ))}
      </div>
    </div>
  );
}