import React from 'react';
import { Calculator } from 'lucide-react';
import { CTANestedPill, DoubleBezelCard } from '@/components/ui';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM } from '@/src/lib/promises';
import ExpressDistanceRings from './ExpressDistanceRings';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const TIER_NOTES = [
  'Mandados dentro del barrio o a barrios vecinos.',
  'Cruces cortos entre zonas de la ciudad.',
  'Trayectos medios, de una punta del centro a la otra.',
  'Recorridos largos dentro del ejido urbano.',
];

const EXAMPLE_KM = 12;
const examplePrice = calculateExpressPrice(EXAMPLE_KM, []);
const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];

export default function ExpressPricing() {
  return (
    <section id="express-pricing" className="py-24 bg-brand-blue-700 relative z-10 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="-rotate-1 px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-accent-sm">
            Tarifario vigente 2026
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.98]">
            Pagás por distancia, no por apuro
          </h2>
          <p className="text-white/90 font-sans text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            Tarifa fija según los kilómetros entre retiro y entrega. Sabés cuánto sale antes de pedir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-5">
            <ExpressDistanceRings />
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EXPRESS_TIERS.map((tier, idx) => (
              <li key={tier.maxKm}>
                <DoubleBezelCard className="h-full" innerClassName="h-full space-y-2">
                  <p className="font-subheading text-sm uppercase tracking-wider text-brand-blue-900">
                    De {tier.minKm} a {tier.maxKm} km
                  </p>
                  <p className="font-mono text-4xl sm:text-5xl tabular-nums tracking-tight text-brand-blue-900">
                    {formatArs(tier.price)}
                  </p>
                  <p className="text-sm font-sans text-brand-blue-900 leading-relaxed">{TIER_NOTES[idx]}</p>
                </DoubleBezelCard>
              </li>
            ))}
          </ul>
        </div>

        <DoubleBezelCard variant="dark" hoverEffect={false}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <Calculator
              className="absolute -bottom-10 -right-10 h-56 w-56 text-white/5 pointer-events-none select-none"
              aria-hidden="true"
            />
            <div className="lg:col-span-8 space-y-3 text-left relative z-10">
              <span className="-rotate-1 inline-block px-3.5 py-1 bg-brand-yellow-500 text-brand-blue-900 rounded-full text-xs font-subheading uppercase tracking-widest">
                Más de {lastTier.maxKm} km
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
                <span className="font-mono tabular-nums text-brand-yellow-500">{formatArs(EXPRESS_PRICE_PER_KM)}</span>{' '}
                por km total, redondeado hacia arriba
              </h3>
              <p className="text-base text-white/90 leading-relaxed font-sans max-w-2xl">
                Para Batán, Camet, Sierra de los Padres o la periferia de General Pueyrredón, hasta{' '}
                {CONSULT_THRESHOLD_KM} km. Ejemplo: {EXAMPLE_KM} km ={' '}
                <span className="font-mono tabular-nums">
                  {typeof examplePrice === 'number' ? formatArs(examplePrice) : 'a consultar'}
                </span>
                . Más de {CONSULT_THRESHOLD_KM} km, lo cotizamos por WhatsApp.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end relative z-10">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">
                Cotizá tu envío exacto
              </CTANestedPill>
            </div>
          </div>
        </DoubleBezelCard>
      </div>
    </section>
  );
}
