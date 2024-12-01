'use client';

import { useState } from 'react';
import { CreditCard, Smartphone, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FormData {
  address: string;
  postalCode: string;
  city: string;
  paymentMethod: 'mobile' | 'card' | 'sepa' | '';
  mobileProvider: 'orange' | 'wave' | 'free' | 'naboo' | 'paydunya' | '';
}

const mobileProviders = [
  { 
    id: 'orange', 
    name: 'Orange Money', 
    logo: 'https://static.wixstatic.com/media/c67dd6_5f82e65e6a574c16a121587771bcb130~mv2.png'
  },
  { 
    id: 'wave', 
    name: 'Wave Mobile Money', 
    logo: 'https://static.wixstatic.com/media/c67dd6_c6945c03285e4a728ca8efbf35094f0d~mv2.png'
  },
  { 
    id: 'free', 
    name: 'Free Money', 
    logo: 'https://static.wixstatic.com/media/c67dd6_370e990d7e8c40e1a77f2a3c247ee54b~mv2.png'
  },
  { 
    id: 'naboo', 
    name: 'NabooPay', 
    logo: 'https://static.wixstatic.com/media/c67dd6_c63aff211d374be7858b4d323900bd12~mv2.png'
  },
  { 
    id: 'paydunya', 
    name: 'Paydunya', 
    logo: 'https://static.wixstatic.com/media/c67dd6_ee4920760d364113b925f509e6f1e073~mv2.png'
  }
];

export function PaymentForm() {
  const [formData, setFormData] = useState<FormData>({
    address: '',
    postalCode: '',
    city: '',
    paymentMethod: '',
    mobileProvider: ''
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

  const handlePaymentMethodChange = (method: FormData['paymentMethod']) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: method,
      mobileProvider: method === 'mobile' ? prev.mobileProvider : ''
    }));
    setIsDirty(true);
  };

  const handleMobileProviderChange = (provider: FormData['mobileProvider']) => {
    setFormData(prev => ({
      ...prev,
      mobileProvider: provider
    }));
    setIsDirty(true);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    
    if (!formData.address) newErrors.push("L'adresse est requise");
    if (!formData.postalCode) newErrors.push("Le code postal est requis");
    if (!formData.city) newErrors.push("La ville est requise");
    if (!formData.paymentMethod) newErrors.push("Le mode de paiement est requis");
    if (formData.paymentMethod === 'mobile' && !formData.mobileProvider) {
      newErrors.push("Le fournisseur de paiement mobile est requis");
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Billing Address Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Adresse de facturation</h2>
          <p className="text-sm text-muted-foreground">
            Cette adresse sera utilisée pour vos factures
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Adresse
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 rue de la Paix"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Code postal
              </label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="17000"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Ville
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Dakar"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Pays
            </label>
            <select
              disabled
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="SN">Sénégal</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Mode de paiement</h2>
          <p className="text-sm text-muted-foreground">
            Choisissez votre mode de paiement préféré
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {/* Mobile Money Option */}
            <div
              onClick={() => handlePaymentMethodChange('mobile')}
              className={cn(
                "relative p-4 rounded-lg border cursor-pointer transition-all",
                formData.paymentMethod === 'mobile'
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Mobile Money</h3>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="mobile"
                      checked={formData.paymentMethod === 'mobile'}
                      onChange={() => handlePaymentMethodChange('mobile')}
                      className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Le montant des factures sera prélevé via votre compte Mobile Money
                  </p>
                </div>
              </div>

              {formData.paymentMethod === 'mobile' && (
                <div className="mt-4 pt-4 border-t grid grid-cols-5 gap-4">
                  {mobileProviders.map((provider) => (
                    <div
                      key={provider.id}
                      className={cn(
                        "relative flex flex-col items-center p-4 rounded-lg border cursor-pointer transition-all",
                        formData.mobileProvider === provider.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMobileProviderChange(provider.id as FormData['mobileProvider']);
                      }}
                    >
                      <div className="w-full aspect-square relative mb-4">
                        <img 
                          src={provider.logo}
                          alt={provider.name}
                          className="absolute inset-0 w-full h-full object-contain p-2"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">{provider.name}</span>
                      <input
                        type="radio"
                        name="mobileProvider"
                        value={provider.id}
                        checked={formData.mobileProvider === provider.id}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleMobileProviderChange(provider.id as FormData['mobileProvider']);
                        }}
                        className="absolute top-2 right-2 h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Card Payment Option */}
            <div
              onClick={() => handlePaymentMethodChange('card')}
              className={cn(
                "p-4 rounded-lg border cursor-pointer transition-all",
                formData.paymentMethod === 'card'
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Prélèvement carte bancaire</h3>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => handlePaymentMethodChange('card')}
                      className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Le montant des factures sera prélevé sur le compte bancaire associé à cette carte
                  </p>
                </div>
              </div>
            </div>

            {/* SEPA Payment Option */}
            <div
              onClick={() => handlePaymentMethodChange('sepa')}
              className={cn(
                "p-4 rounded-lg border cursor-pointer transition-all",
                formData.paymentMethod === 'sepa'
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Prélèvement SEPA</h3>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="sepa"
                      checked={formData.paymentMethod === 'sepa'}
                      onChange={() => handlePaymentMethodChange('sepa')}
                      className="h-4 w-4 rounded-full border border-primary text-primary focus:ring-primary"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Le montant des factures sera prélevé sur votre compte bancaire
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            Le paiement et le stockage sont entièrement gérés par nos fournisseurs, l&apos;entreprise ne conserve aucune information bancaire.
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

      <div className="flex justify-end">
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
    </form>
  );
}