'use client';

import { useState } from 'react';
import { Mail, Phone, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CandidateProfile() {
  const [activeTab, setActiveTab] = useState('experiences');
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-full bg-background">
      {/* Header with back button */}
      <div className="border-b border-border bg-background px-6 py-4">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux analytiques
        </button>
      </div>

      {/* Profile Banner */}
      <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/5 relative">
        <div className="absolute -bottom-16 left-6 flex items-end gap-6">
          <div className="h-32 w-32 rounded-full border-4 border-background bg-primary/10 flex items-center justify-center">
            <span className="text-4xl font-semibold text-primary">FD</span>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Fatou Diallo</h1>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4" />
                fatou.diallo@example.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                +221 77 123 45 67
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 bottom-4">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            Contacter
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mt-20 px-6 border-b border-border">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('experiences')}
            className="relative py-4 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Expériences
            {activeTab === 'experiences' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className="relative py-4 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            CV
            {activeTab === 'cv' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {activeTab === 'experiences' ? (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Développeur Full Stack</h3>
              <p className="text-sm text-muted-foreground mb-4">TechCorp • 2020 - Présent</p>
              <p className="text-sm">
                Développement d&apos;applications web et mobiles, gestion de projets techniques, 
                collaboration avec les équipes design et produit.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="font-semibold mb-2">Développeur Frontend</h3>
              <p className="text-sm text-muted-foreground mb-4">WebAgency • 2018 - 2020</p>
              <p className="text-sm">
                Création d&apos;interfaces utilisateur réactives, optimisation des performances, 
                intégration avec les API REST.
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border bg-card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">CV</h3>
              <button className="px-4 py-2 text-sm border rounded-md hover:bg-accent">
                Télécharger
              </button>
            </div>
            <div className="aspect-[3/4] bg-accent/50 rounded-lg flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Aperçu du CV</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}