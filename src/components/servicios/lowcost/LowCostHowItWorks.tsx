'use client';

import React from 'react';
import { MessageSquare, Truck, CheckSquare } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

export default function LowCostHowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Solicitud',
      desc: 'Nos solicitás el envío por WhatsApp.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Retiro',
      desc: 'Retiramos el paquete por tu local o depósito en el transcurso del día.',
      icon: Truck,
    },
    {
      number: '03',
      title: 'Entrega',
      desc: 'Entregamos de forma segura en manos de tu destinatario.',
      icon: CheckSquare,
    },
  ];

  return (
    <section 
      id="lowcost-how-it-works" 
      className="py-24 bg-brand-blue-50 relative overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue text-brand-yellow rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
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

        {/* Steps Grid Bento Layout with Stepper Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Stepper Connector Line for Desktop */}
          <div className="absolute top-[2.4rem] left-12 right-12 h-1 bg-brand-blue hidden lg:block rounded-full z-0">
            <div className="w-full h-full bg-brand-blue-400 rounded-full" />
          </div>

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="lg:col-span-4 z-10">
                <DoubleBezelCard>
                  <div className="h-full flex flex-col items-center text-center relative overflow-hidden space-y-4">
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue/5 pointer-events-none select-none" />

                    {/* Concentric Node Circle in Yellow #FFEC01 with Geist Mono */}
                    <div className="w-12 h-12 rounded-full bg-brand-yellow border-2 border-brand-white ring-2 ring-brand-blue shadow-md flex items-center justify-center font-mono text-sm font-bold text-brand-blue tabular-nums z-10">
                      {step.number}
                    </div>

                    <div className="h-14 w-14 bg-brand-blue text-brand-yellow border border-brand-blue rounded-2xl flex items-center justify-center shadow-md relative z-10">
                      <Icon className="h-6 w-6 shrink-0" />
                    </div>

                    <div className="space-y-1.5 relative z-10">
                      <h3 className="text-xl font-display uppercase tracking-wider text-brand-ink leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-brand-ink font-sans leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </DoubleBezelCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
