'use client';

import React from 'react';
import { Check, Briefcase } from 'lucide-react';
import NumberFlow from '@number-flow/react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

const plans = [
  {
    name: 'Plan Inicial DropOFF',
    price: '$2.400',
    period: 'por envío en MDQ',
    badge: 'DROP-OFF 20% OFF',
    description: 'Dejà tus paquetes directamente en nuestro depósito de Friuli 1972 y ahorrá en el envío.',
    bullets: [
      'Corte de recepción 13:00 hs',
      'Descuento del 20% aplicado',
      'Ruteo SAME-DAY garantizado',
      'Contrareembolso $0 comisión',
    ],
    highlight: false,
  },
  {
    name: 'Plan E-Commerce 3PL',
    price: '$3.000',
    period: 'por envío + stock gratis',
    badge: 'MÁS POPULAR 2026',
    description: 'Guardamos tu stock en Friuli 1972. Al vender, empaquetamos y entregamos en el día.',
    bullets: [
      'Almacenamiento de stock sin costo',
      'Picking por código QR instantáneo',
      'Reparto Same-Day en Mar del Plata',
      'Seguimiento GPS para tus clientes',
    ],
    highlight: true,
  },
  {
    name: 'Plan PyME Corporativo',
    price: 'A Medida',
    period: 'volumen > 10 envíos/día',
    badge: 'CUENTA CORRIENTE',
    description: 'Para empresas con envíos diarios recurrentes. Liquidación mensual y asesor dedicado.',
    bullets: [
      'Retiro programado en tu local',
      'Factura C mensual consolidada',
      'Atención prioritaria por WhatsApp',
      'Tarifa corporativa escalonada',
    ],
    highlight: false,
  },
];

export default function EmprendedoresPricing() {
  return (
    <section
      id="emprendedores-pricing"
      className="py-24 bg-[#0950F6] relative z-10 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs font-subheading uppercase tracking-widest inline-block font-bold shadow-glow-yellow">
            MODALIDADES E-COMMERCE Y 3PL 2026
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-[0.98]">
            PLANES PAQUETERÍA Y FULFILLMENT
          </h2>

          <p className="text-white/80 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Elegí la modalidad e-commerce que mejor impulse tu marca. Desde almacenamiento con picking QR en Friuli 1972 hasta opción DropOFF con 20% OFF.
          </p>
          <div className="h-1.5 w-16 bg-[#FFEC01] mx-auto rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {plans.map((plan) => {
            const isNumericPrice = plan.price.startsWith('$');
            const numericValue = isNumericPrice ? parseInt(plan.price.replace('$', '').replace('.', '')) : null;

            return (
              <div key={plan.name} className="lg:col-span-4">
                <DoubleBezelCard>
                  <div className="space-y-4 text-[#0950F6] flex flex-col justify-between h-full">
                    <div className="space-y-3">
                      <span className="text-xs font-subheading tracking-wider uppercase text-[#0950F6] font-bold">
                        {plan.badge}
                      </span>
                      <h3 className="text-2xl font-display uppercase tracking-wider leading-tight text-[#0950F6] font-bold min-h-14">
                        {plan.name}
                      </h3>

                      <div className="py-2">
                        {isNumericPrice && numericValue ? (
                          <div className="flex items-baseline">
                            <span className="text-4xl sm:text-5xl font-mono tabular-nums uppercase font-bold tracking-tight text-[#0950F6]">
                              $
                              <NumberFlow
                                value={numericValue}
                                format={{ minimumFractionDigits: 0 }}
                                className="inline-block font-mono tabular-nums"
                              />
                            </span>
                          </div>
                        ) : (
                          <span className="text-4xl sm:text-5xl font-mono tabular-nums uppercase font-bold tracking-tight text-[#0950F6]">
                            {plan.price}
                          </span>
                        )}
                        <span className="text-xs font-subheading tracking-wider uppercase block mt-1 text-[#0950F6]/80 font-medium">{plan.period}</span>
                      </div>

                      <p className="text-sm opacity-90 leading-relaxed font-sans min-h-12 text-[#0950F6]/80">
                        {plan.description}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-[#D6E4FE]">
                        {plan.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2 text-xs text-[#0950F6]">
                            <Check className="h-4 w-4 shrink-0 text-[#0950F6]" />
                            <span className="font-sans text-xs">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <CTANestedPill
                        href="https://wa.me/542236602699"
                        variant="primary"
                        className="w-full justify-center"
                      >
                        Elegir {plan.name.split(' ')[0]}
                      </CTANestedPill>
                    </div>
                  </div>
                </DoubleBezelCard>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Special custom callout */}
        <DoubleBezelCard>
          <div className="bg-[#0950F6] text-white rounded-[20px] p-8 relative overflow-hidden text-left border border-white/20 shadow-sm">
            <Briefcase className="absolute -bottom-8 -right-8 h-64 w-64 text-white/4 pointer-events-none select-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-8 space-y-4 text-left">
                <span className="-rotate-1 inline-block px-4 py-1 bg-[#FFEC01] text-[#0950F6] rounded-full text-xs font-subheading font-bold uppercase tracking-widest shadow-glow-yellow">
                  CONTRAREEMBOLSO SIN COSTO EXTRA
                </span>
                <h3 className="text-3xl font-display uppercase tracking-tight text-white">
                  ¿Cobrás tus ventas en puerta?
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-sans max-w-2xl">
                  Realizamos cobros contrareembolso en Mar del Plata sin ningún costo adicional sobre el valor del producto. Además, podés llevar tus envíos a Friuli 1972 con un <span className="font-mono tabular-nums">20%</span> de descuento en la tarifa final.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <CTANestedPill
                  href="https://wa.me/542236602699"
                  variant="primary"
                >
                  Agendar Asesoría 3PL
                </CTANestedPill>
              </div>

            </div>
          </div>
        </DoubleBezelCard>

      </div>
    </section>
  );
}