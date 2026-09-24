'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Clock } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function FlexRequirements() {
  const requirements = [
    {
      title: 'Cuenta activa de vendedor',
      desc: 'Tener una cuenta activa de vendedor dentro de MercadoLibre.',
      icon: Sparkles,
      badge: 'MERCADOLIBRE',
    },
    {
      title: 'Envíos flex activados',
      desc: 'Habilitar la opción de envíos rápidos en el día en tu configuración logística.',
      icon: MapPin,
      badge: 'CONFIGURACIÓN',
    },
    {
      title: 'Embalaje apto para moto',
      desc: 'Tener tus paquetes embalados de forma adecuada para el traslado seguro en moto.',
      icon: Clock,
      badge: 'DESPACHO',
    },
  ];

  return (
    <section 
      id="flex-requirements" 
      className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden border-t border-[#D6E4FE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFEC01] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
            PUESTA EN MARCHA
          </span>
          <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight inline-block leading-[0.98]">
            ¿QUÉ NECESITÁS?
          </h2>
          <p className="text-[#0950F6]/80 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos mínimos e indispensables para empezar a ofrecer envíos Same-Day y potenciar tu e-commerce hoy mismo.
          </p>
          <div className="h-1.5 w-16 bg-[#FFEC01] mx-auto rounded-full" />
        </div>

        {/* Requirements Grid Bento Grid layout with Double Bezel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <div key={req.title} className="lg:col-span-4">
                <DoubleBezelCard>
                  <div className="h-full flex flex-col gap-5 text-left relative overflow-hidden">
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none" />

                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-[#FFEC01] text-[#0950F6] rounded-xl shrink-0 border border-[#FFEC01] shadow-glow-yellow relative z-10">
                        <Icon className="h-6 w-6 shrink-0" />
                      </div>
                      <span className="text-[10px] font-subheading font-bold uppercase tracking-wider bg-[#E6EEFE] text-[#0950F6] px-2.5 py-1 rounded-full border border-[#D6E4FE]">
                        {req.badge}
                      </span>
                    </div>
                    
                    <div className="space-y-1.5 relative z-10">
                      <h3 className="text-xl font-display uppercase tracking-wide text-[#0950F6] font-bold leading-tight">
                        {req.title}
                      </h3>
                      <p className="text-sm text-[#0950F6]/80 font-sans leading-relaxed">
                        {req.desc}
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
