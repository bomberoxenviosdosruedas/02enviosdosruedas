'use client';

import React from 'react';
import { ShieldCheck, Clock, Compass, Users } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function ExpressFeatures() {
  const features = [
    {
      title: 'Rangos de Entrega de 3 Horas',
      desc: 'Elegí franjas horarias precisas de 3 horas de espaciado (ej: 10 a 13 hs) para trámites y gestiones urgentes.',
      icon: Clock,
    },
    {
      title: 'Corte 15:00 hs (2h anticipación)',
      desc: 'Pedí con 2 horas de anticipación y antes de las 15:00 hs para entrega asegurada en el mismo día.',
      icon: ShieldCheck,
    },
    {
      title: 'Bultos en Moto (Hasta 5 kg)',
      desc: 'Traslado seguro de paquetes de hasta 5 kg y 40x30 cm con control y avisos en tiempo real por WhatsApp.',
      icon: Compass,
    },
    {
      title: 'Cadetería propia de confianza',
      desc: 'Nuestros riders están identificados, con más de 7 años de trayectoria en las calles de Mar del Plata.',
      icon: Users,
    },
  ];

  return (
    <section
      id="express-features"
      className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden border-t border-[#D6E4FE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Header Segment (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFEC01] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-sm">
              SOLUCIONES PREMIUM MDQ
            </span>

            <h2 className="text-[#0950F6] text-4xl sm:text-5xl font-display uppercase tracking-tight leading-[0.98]">
              ENTREGAS RÁPIDAS <br />
              <span className="text-[#0950F6] bg-[#FFEC01] px-2 py-0.5 inline-block mt-1 -rotate-1 shadow-glow-yellow">Y EFICIENTES</span>
            </h2>

            <p className="text-[#0950F6]/80 text-base leading-relaxed font-sans font-normal">
              Nuestro servicio Express ofrece cobertura total en el Partido de General Pueyrredón. Llegamos a todos los barrios con franjas horarias prioritarias: Centro, Chauvín, Los Troncos, Güemes, Puerto, Playa Grande, Punta Mogotes, Batán.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Compass className="h-5 w-5 text-[#FFEC01] shrink-0 fill-current" />
              <span>LOGÍSTICA URBANA INTEGRAL 2026</span>
            </div>
          </div>

          {/* Asymmetric Bento Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const spanClass = idx % 2 === 0 ? 'sm:col-span-7' : 'sm:col-span-5';

              return (
                <div key={feat.title} className={spanClass}>
                  <DoubleBezelCard>
                    <div className="flex flex-col justify-between h-full space-y-4 relative overflow-hidden">
                      <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none" />

                      <div className="h-12 w-12 rounded-xl bg-[#0950F6] text-[#FFEC01] flex items-center justify-center shrink-0 border border-[#0950F6] shadow-sm relative z-10">
                        <Icon className="h-6 w-6 shrink-0" />
                      </div>
                      <div className="space-y-1.5 relative z-10">
                        <h4 className="text-xl font-display uppercase tracking-wider text-[#0950F6] leading-tight">
                          {feat.title}
                        </h4>
                        <p className="text-sm text-[#0950F6]/80 font-sans leading-relaxed">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </DoubleBezelCard>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
