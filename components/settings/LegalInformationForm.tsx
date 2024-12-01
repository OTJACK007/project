'use client';

import { useState } from 'react';
import { InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  companyName: string;
  legalName: string;
  siret: string;
}

export function LegalInformationForm() {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    legalName: '',
    siret: ''
  });

  const [isDirty, setIsDirty] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setIsDirty(true);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    
    if (!formData.companyName) {
      newErrors.push("Le nom de l'entreprise est requis");
    }
    if (!formData.legalName) {
      newErrors.push("La raison sociale est requise");
    }
    if (!formData.siret) {
      newErrors.push("Le SIRET est requis");
    } else if (!/^\d{14}$/.test(formData.siret.replace(/\s/g, ''))) {
      newErrors.push("Le SIRET doit contenir 14 chiffres");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // TODO: Implement API call here
    console.log('Form submitted:', formData);
    setIsDirty(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Informations légales</h2>
        <p className="text-sm text-muted-foreground">
          Ces informations figureront sur les contrats de mise à disposition
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Nom de l&apos;entreprise
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Placemento"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Raison sociale
            </label>
            <button 
              type="button" 
              className="inline-flex items-center text-sm text-primary hover:text-primary/90"
              aria-label="Plus d'informations sur la raison sociale"
            >
              <InfoIcon className="h-4 w-4 mr-1" />
              En savoir plus
            </button>
          </div>
          <input
            type="text"
            name="legalName"
            value={formData.legalName}
            onChange={handleChange}
            placeholder="Raison sociale"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              SIRET
            </label>
            <button 
              type="button" 
              className="inline-flex items-center text-sm text-primary hover:text-primary/90"
              aria-label="Plus d'informations sur le SIRET"
            >
              <InfoIcon className="h-4 w-4 mr-1" />
              En savoir plus
            </button>
          </div>
          <input
            type="text"
            name="siret"
            value={formData.siret}
            onChange={handleChange}
            placeholder="000 000 000 00000"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        {errors.length > 0 && (
          <div className="rounded-md bg-destructive/15 p-3">
            <div className="flex">
              <div className="flex-1 text-sm text-destructive">
                <ul className="list-disc space-y-1 pl-5">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={!isDirty}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              isDirty
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            )}
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </form>
  );
}