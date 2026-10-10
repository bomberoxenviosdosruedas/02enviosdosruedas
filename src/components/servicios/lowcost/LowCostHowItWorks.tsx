'use client';

import React from 'react';
import { MessageSquare, Truck, CheckSquare } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import StepperVertical, { type VerticalStep } from '@/components/ui/StepperVertical';

export default function LowCostHowItWorks() {
  const steps: VerticalStep[] = [
    {
      number: '01',
      title: 'Solicitud',
      description: 'Nos solicitás el envío por WhatsApp.',
    },
    {
      number: '02',
      title: 'Retiro',
      description: 'Retiramos el paquete por tu local o depósito en el transcurso del día.',
    },
    {
      number: '03',
      title: 'Entrega',
      description: 'Entregamos de forma segura en manos de tu destinatario.',
    },
  ];

  return (
    <section 
      id="lowcost-how-it-works" 
      className="py-24 bg-brand-blue-50 relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase tracking-widest shadow-sm">
            PASO A PASO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-ink leading-[0.98]">
            ¿CÓMO FUNCIONA?
          </h2>
          <p className="text-brand-ink font-sans text-sm sm:text-base max-w-lg mx-auto">
            Un proceso simple, transparente y diseñado milimétricamente para maximizar tu productividad logística.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow mx-auto rounded-full" />
        </div>

        {/* Stepper Vertical */}
        <StepperVertical 
          steps={steps} 
          activeStep={steps.length - 1} 
          completedSteps={steps.map((_, i) => i)}
          variant="light"
        />

      </div>
    </section>
  );
}
