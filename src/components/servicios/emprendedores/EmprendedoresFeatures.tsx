'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Container, Landmark, BarChart3, Clock, Tag, Receipt } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';

export default function EmprendedoresFeatures() {
  const features = [
    {
      title: 'E-Commerce Same Day (Friuli 1972)',
      desc: 'Guardamos tu stock en nuestro depósito central de Friuli 1972. Al vender, tu producto sale inmediatamente empaquetado con picking por código QR.',
      icon: Container,
    },
    {
      title: 'Opción DropOFF (-20% OFF)',
      desc: 'Acercá tus paquetes directamente a nuestro depósito en Friuli 1972 y obtené un 20% de descuento automático en la tarifa final de envío.',
      icon: Tag,
    },
    {
      title: 'Contrareembolso Sin Cargo Extra',
      desc: 'Realizamos cobro contra entrega en destino sin ningún tipo de comisión ni recargo adicional por gestión de cobranza.',
      icon: Receipt,
    },
  ];

  const stats = [
    { value: 'SAME DAY', label: 'Picking por QR', icon: BarChart3 },
    { value: '-20% OFF', label: 'Opción DropOFF', icon: Tag },
    { value: '$0 COMISIÓN', label: 'Contrareembolso', icon: Clock },
  ];

  return (
    <section
      id="emprendedores-features"
      className="py-24 bg-white relative z-10 overflow-hidden border-t border-[#D6E4FE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Header column (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="-rotate-1 inline-block px-4 py-1.5 bg-[#0950F6] text-[#FFEC01] rounded-full text-xs font-subheading uppercase font-bold tracking-widest shadow-sm">
              SOLUCIONES PAQUETERÍA E-COMMERCE
            </span>

            <h2 className="text-[#0950F6] text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight leading-[0.98]">
              LOGÍSTICA 3PL <br />
              <span className="text-[#0950F6] bg-[#FFEC01] px-2 py-0.5 inline-block mt-1 font-bold -rotate-1 shadow-glow-yellow">Y PAQUETERÍA E-COMMERCE</span>
            </h2>

            <p className="text-[#0950F6]/80 text-base leading-relaxed font-sans">
              Especialistas en paquetería e-commerce y logística 3PL en Mar del Plata. Almacenamos tus productos pequeños o medianos en Friuli 1972, realizamos picking por QR y despachamos en el día o 24hs con la tarifa más competitiva.
            </p>

            <div className="pt-4 flex items-center gap-3.5 text-sm text-[#0950F6] font-bold uppercase tracking-wider font-subheading">
              <Landmark className="h-5 w-5 text-[#FFEC01] shrink-0 fill-current" />
              <span>PAQUETERÍA Y LOGÍSTICA B2B MAR DEL PLATA</span>
            </div>
          </div>

          {/* Features columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const spanClass = idx === 0
                ? 'lg:col-span-12'
                : idx === 1
                  ? 'lg:col-span-7'
                  : 'lg:col-span-5';

              return (
                <div key={feat.title} className={spanClass}>
                  <DoubleBezelCard>
                    <div className="flex flex-col md:flex-row gap-5 items-start relative overflow-hidden">
                      <Icon className="absolute -bottom-6 -right-6 h-32 w-32 text-[#0950F6]/[0.05] pointer-events-none select-none" />

                      <div className="p-3 bg-[#0950F6] text-[#FFEC01] rounded-xl shrink-0 border border-[#0950F6] shadow-md relative z-10">
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

        {/* Stats Section Panel */}
        <div className="mt-20 border-t border-[#D6E4FE] pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label}>
                  <DoubleBezelCard>
                    <div className="flex items-center gap-5 w-full">
                      <div className="p-3.5 bg-[#FFEC01] text-[#0950F6] rounded-xl shrink-0 border border-[#FFEC01] shadow-glow-yellow">
                        <Icon className="h-6 w-6 shrink-0" />
                      </div>
                      <div className="text-left">
                        <span className="block text-2xl font-mono tabular-nums font-bold uppercase tracking-tight text-[#0950F6] leading-none mb-1">
                          {stat.value}
                        </span>
                        <span className="block text-xs uppercase tracking-wider font-subheading text-[#0950F6] font-bold">
                          {stat.label}
                        </span>
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
