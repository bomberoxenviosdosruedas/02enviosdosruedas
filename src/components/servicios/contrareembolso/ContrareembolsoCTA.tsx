import React from 'react';
import { ArrowRight } from 'lucide-react';
import CTANestedPill from '@/components/ui/CTANestedPill';

export default function ContrareembolsoCTA() {
  return (
    <section
      id="contrareembolso-cta"
      aria-label="Coordinar primer retiro contra reembolso por WhatsApp"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-blue-500 text-white text-center"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
          ¿QUERÉS EMPEZAR A COBRAR EN DESTINO HOY?
        </h2>
        <p className="font-sans text-base sm:text-lg text-brand-blue-100 max-w-xl mx-auto">
          Escribinos por WhatsApp y coordinamos tu primer retiro contra reembolso en minutos. Sin contratos forzosos ni comisiones ocultas.
        </p>
        <div className="pt-2 flex justify-center">
          <CTANestedPill
            href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Quiero%20activar%20env%C3%ADos%20con%20cobro%20contra%20reembolso%20para%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Pedí por WhatsApp
          </CTANestedPill>
        </div>
      </div>
    </section>
  );
}

