'use client';

import React from 'react';
import { Package, Bike, QrCode, Sparkles } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';

export default function FlexRequirements() {
  const requirements = [
    {
      title: 'Capacidad y peso admitido',
      desc: 'Hasta 60×60 cm y un máximo de 20 kg recomendado para moto. Bultos con dimensiones mayores quedan sujetos a consulta previa.',
      icon: Package,
      badge: 'HASTA 20 KG · 60×60 CM',
    },
    {
      title: 'Flota 100% en moto',
      desc: 'Nuestra flota opera exclusivamente en moto para asegurar agilidad urbana. Por el momento no realizamos traslados en autos o furgones.',
      icon: Bike,
      badge: 'FLOTA ÁGIL',
    },
    {
      title: 'Embalaje seguro y QR visible',
      desc: 'Paquetes correctamente embalados para su transporte en moto, con código QR visible y protegido del agua y las condiciones climáticas.',
      icon: QrCode,
      badge: 'QR PROTEGIDO',
    },
    {
      title: 'Asistencia para tu activación',
      desc: 'Te acompañamos paso a paso para configurar zonas y horarios en Mercado Libre, supeditado a que tu cuenta cumpla las condiciones de Flex.',
      icon: Sparkles,
      badge: 'SOPORTE FLEX',
    },
  ];

  return (
    <section
      id="flex-requirements"
      className="py-24 bg-brand-blue-50 relative z-10 overflow-hidden border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 inline-block px-4 py-1.5 bg-brand-blue-500 text-brand-yellow-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-sm">
            PUESTA EN MARCHA
          </span>
          <h2 className="text-brand-blue-500 text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight inline-block leading-[0.98]">
            ¿QUÉ NECESITÁS PARA ARRANCAR?
          </h2>
          <p className="text-brand-ink font-sans text-sm sm:text-base max-w-lg mx-auto">
            Requisitos operativos y logísticos para comenzar a despachar con Mercado Envíos Flex de forma segura y profesional.
          </p>
          <div className="h-1.5 w-16 bg-brand-yellow-500 mx-auto rounded-full" />
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirements.map((req) => {
            const Icon = req.icon;
            return (
              <div key={req.title} className="h-full">
                <DoubleBezelCard className="h-full">
                  <div className="h-full flex flex-col justify-between gap-5 text-left relative overflow-hidden">
                    <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-brand-blue-500/5 pointer-events-none select-none" />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-3 bg-brand-blue-500 text-brand-yellow-500 rounded-xl shrink-0 border border-brand-blue-500 shadow-md">
                          <Icon className="h-6 w-6 shrink-0" />
                        </div>
                        <span className="text-2xs font-subheading uppercase tracking-wider bg-brand-blue-50 text-brand-blue-500 font-bold px-2.5 py-1 rounded-full border border-brand-blue-100">
                          {req.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-lg font-display uppercase tracking-wide text-brand-blue-500 leading-tight">
                          {req.title}
                        </h3>
                        <p className="text-sm text-brand-ink font-sans leading-relaxed">
                          {req.desc}
                        </p>
                      </div>
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
