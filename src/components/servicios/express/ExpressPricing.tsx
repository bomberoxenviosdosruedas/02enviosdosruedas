'use client';

import React from 'react';
import { Check, Calculator } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const zones = [
  {
    name: 'Radio Urbano Corto',
    scope: 'Hasta 3 km',
    price: '$4.600',
    description: 'Envíos rápidos dentro del área céntrica de Mar del Plata (Centro, Chauvín, Güemes, Plaza Mitre).',
    bullets: [
      'Asignación inmediata en moto',
      'Rango de entrega en 3 horas',
      'Confirmación por WhatsApp',
    ],
    highlight: false,
    ctaText: 'Cotizar Corto',
  },
  {
    name: 'Radio Urbano Medio',
    scope: 'Hasta 6 km',
    price: '$6.100',
    description: 'Mayor alcance hacia barrios como Constitución, Puerto, La Perla o Terminal Ferroautomotora.',
    bullets: [
      'Prioridad de despacho urgente',
      'Ruta optimizada por cadete',
      'Seguimiento en tiempo real',
    ],
    highlight: true,
    ctaText: 'Cotizar Medio',
  },
  {
    name: 'Radio Urbano Extendido',
    scope: 'Hasta 10 km',
    price: '$8.200',
    description: 'Conectá puntos distantes de la ciudad como Punta Mogotes, Monolito, B° Libertad o Bosque Peralta Ramos.',
    bullets: [
      'Cobertura total de la ciudad',
      'Atención garantizada Same-Day',
      'Hasta 5 kg y 40x30 cm',
    ],
    highlight: false,
    ctaText: 'Cotizar Extendido',
  },
  {
    name: 'Radio Periférico',
    scope: 'Más de 10 km',
    price: 'A Medida',
    description: 'Para traslados hacia Batán, Sierra de los Padres o zona sur de Mar del Plata.',
    bullets: [
      '$1.000 / km adicional',
      'Atención personalizada',
      'Tarifa transparente garantizada',
    ],
    highlight: false,
    ctaText: 'Consultar Tarifa',
  },
];

export default function ExpressPricing() {
  return (
    <section
      id="express-pricing"
      className="py-24 bg-[#0950F6] relative z-10 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs font-subheading font-bold uppercase tracking-widest inline-block shadow-glow-yellow">
            TARIFARIO VIGENTE 2026
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.98]">
            TARIFAS POR DISTANCIA
          </h2>

          <p className="text-white/80 font-sans text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Precios oficiales calculados por rango kilométrico para envíos inmediatos en Mar del Plata.
          </p>
        </div>

        {/* Pricing Cards Grid Bento layout with Double Bezel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zones.map((zone) => {
            const isNumericPrice = zone.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(zone.price.replace('$', '').replace('.', '')) : null;

            return (
              <div key={zone.scope}>
                <DoubleBezelCard>
                  <div className="space-y-3 text-[#0950F6] flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      {zone.highlight && (
                        <span className="-rotate-1 inline-block self-start mb-2 bg-[#FFEC01] text-[#0950F6] font-bold font-subheading text-xs tracking-wider px-3 py-1 rounded-full shadow-glow-yellow">
                          MÁS ELEGIDO
                        </span>
                      )}

                      <div>
                        <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                          {zone.name}
                        </span>
                        <h3 className="text-2xl font-display uppercase tracking-wider leading-tight text-[#0950F6] font-bold">
                          {zone.scope}
                        </h3>
                      </div>

                      <div className="py-2">
                        {isNumericPrice && numericValue ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl sm:text-5xl font-mono tabular-nums font-bold tracking-tight text-[#0950F6]">
                              $
                              <NumberFlow
                                value={numericValue}
                                format={{ minimumFractionDigits: 0 }}
                                className="inline-block font-mono tabular-nums"
                              />
                            </span>
                          </div>
                        ) : (
                          <span className="text-4xl sm:text-5xl font-mono tabular-nums font-bold tracking-tight text-[#0950F6]">
                            {zone.price}
                          </span>
                        )}
                        <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-[#0950F6]/80 font-medium">/ despacho final</span>
                      </div>

                      <p className="text-sm leading-relaxed font-sans text-[#0950F6]/80">
                        {zone.description}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-[#D6E4FE]">
                        {zone.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-xs text-[#0950F6]">
                            <Check className="h-4 w-4 shrink-0 text-[#0950F6]" />
                            <span className="font-sans text-xs">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <CTANestedPill
                        href="/cotizar/express"
                        variant={zone.highlight ? 'primary' : 'outline'}
                        className="w-full justify-center"
                      >
                        {zone.ctaText}
                      </CTANestedPill>
                    </div>
                  </div>
                </DoubleBezelCard>
              </div>
            );
          })}
        </div>

        {/* Dynamic Quote Callout (+10 km rule) */}
        <DoubleBezelCard>
          <div className="bg-[#0950F6] text-white rounded-[20px] p-8 relative overflow-hidden text-left border border-white/20 shadow-sm">
            <Calculator className="absolute -bottom-8 -right-8 h-64 w-64 text-white/4 pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-3 text-left">
                <span className="-rotate-1 inline-block px-3.5 py-1 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  TRAYECTOS DE MÁS DE 10 KM
                </span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                  +10 km: <span className="font-mono tabular-nums">$1.000</span> por km total (redondeado al entero superior)
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-sans max-w-2xl">
                  Para envíos de más de 10 km (Batán, Sierra de los Padres, Camet o periferia de General Pueyrredón hasta 20 km), se multiplican los kilómetros totales redondeados hacia arriba por <span className="font-mono tabular-nums">$1.000</span> (ej. 12 km = <span className="font-mono tabular-nums">$12.000</span>). Trayectos mayores a 20 km se cotizan a medida vía WhatsApp.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTANestedPill
                  href="/cotizar/express"
                  variant="primary"
                >
                  Calcular con Mapa
                </CTANestedPill>
              </div>

            </div>
          </div>
        </DoubleBezelCard>

      </div>
    </section>
  );
}