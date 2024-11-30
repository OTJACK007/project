'use client';

export default function Settings() {
  return (
    <div className="flex flex-col h-full p-6">
      <h1 className="text-2xl font-semibold text-foreground mb-6">Paramètres</h1>
      <div className="grid gap-6">
        <div className="p-6 bg-card rounded-lg border border-border">
          <h2 className="text-lg font-medium text-card-foreground mb-4">Préférences</h2>
          <p className="text-sm text-muted-foreground">
            Configurez vos préférences de compte et d'application.
          </p>
        </div>
      </div>
    </div>
  );
}