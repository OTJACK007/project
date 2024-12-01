'use client';

import { useState } from 'react';
import { InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  address: string;
  postalCode: string;
  city: string;
  paymentMethod: 'card' | 'sepa' | '';
}

export function PaymentForm() {
  const [formData, setFormData] = useState<FormData>({
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: ''
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

  const handlePaymentMethodChange = (value: 'card' | 'sepa') => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: value
    }));
    setIsDirty(true);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    
    if (!formData.address) {
      newErrors.push("L'adresse est requise");
    }
    if (!formData.postalCode) {
      newErrors.push("Le code postal est requis");
    }
    if (!formData.city) {
      newErrors.push("La ville est requise");
    }
    if (!formData.paymentMethod) {
      newErrors.push("Le mode de paiement est requis");
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
        <h2 className="text-lg font-semibold text-foreground">Adresse de facturation</h2>
        <p className="text-sm text-muted-foreground">
          Ces informations figureront sur vos factures
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Adresse
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Votre adresse"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Code postal
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Code postal"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ville
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Ville"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Pays
          </label>
          <input
            type="text"
            value="Sénégal"
            disabled
            className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
          />
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-lg font-semibold text-foreground">Mode de paiement</h3>
          <div className="space-y-4">
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={() => handlePaymentMethodChange('card')}
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label className="text-sm font-medium text-foreground">Prélèvement carte bancaire</label>
                <p className="text-sm text-muted-foreground">
                  Le montant des factures sera prélevé sur le compte bancaire associé à cette carte.
                </p>
              </div>
            </div>

            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="sepa"
                  checked={formData.paymentMethod === 'sepa'}
                  onChange={() => handlePaymentMethodChange('sepa')}
                  className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                />
              </div>
              <div className="ml-3">
                <label className="text-sm font-medium text-foreground">Prélèvement SEPA</label>
                <p className="text-sm text-muted-foreground">
                  Le montant des factures sera prélevé sur votre compte bancaire.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 rounded-md bg-muted p-4">
            <InfoIcon className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Le paiement et le stockage sont entièrement gérés par Stripe, l&apos;entreprise ne détient aucune informations bancaires.
            </p>
          </div>
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