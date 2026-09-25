import React from 'react';
import { EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/src/lib/pricing';
import { CONSULT_THRESHOLD_KM } from '@/src/lib/promises';

const CENTER = 200;
// Radios visuales (no a escala): cada tramo ocupa una banda legible.
const TIER_RADII = [52, 86, 120, 154];
const OUTER_RADIUS = 192;

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Diagrama de anillos de distancia del tarifario Express.
 * Los montos salen de `EXPRESS_TIERS`: si cambia la tarifa, el diagrama se actualiza solo.
 */
export default function ExpressDistanceRings() {
  const bands = EXPRESS_TIERS.map((tier, idx) => ({
    tier,
    inner: idx === 0 ? 0 : TIER_RADII[idx - 1],
    outer: TIER_RADII[idx],
  }));
  const lastRadius = TIER_RADII[TIER_RADII.length - 1];
  const lastTier = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];

  return (
    <figure className="w-full max-w-md mx-auto">
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-labelledby="express-rings-title express-rings-desc"
        className="w-full h-auto"
      >
        <title id="express-rings-title">Tarifas Express por distancia desde el punto de retiro</title>
        <desc id="express-rings-desc">
          {bands
            .map(({ tier }) => `De ${tier.minKm} a ${tier.maxKm} km: ${formatArs(tier.price)}.`)
            .join(' ')}{' '}
          De {lastTier.maxKm} a {CONSULT_THRESHOLD_KM} km: {formatArs(EXPRESS_PRICE_PER_KM)} por kilómetro.
        </desc>

        {/* Banda exterior: tramo por km */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RADIUS}
          className="fill-white stroke-brand-yellow-500"
          fillOpacity={0.04}
          strokeWidth={2}
          strokeDasharray="6 8"
        />

        {/* Tramos fijos, de afuera hacia adentro para que el más chico quede arriba */}
        {[...bands].reverse().map(({ tier, outer }, idx) => (
          <circle
            key={tier.maxKm}
            cx={CENTER}
            cy={CENTER}
            r={outer}
            className="fill-white stroke-white"
            fillOpacity={idx % 2 === 0 ? 0.08 : 0.14}
            strokeOpacity={0.45}
            strokeWidth={1.5}
          />
        ))}

        {/* Precios en la mitad superior de cada banda */}
        {bands.map(({ tier, inner, outer }) => {
          const y = CENTER - (inner + outer) / 2;
          return (
            <text
              key={`price-${tier.maxKm}`}
              x={CENTER}
              y={inner === 0 ? CENTER - 26 : y + 5}
              textAnchor="middle"
              className="fill-white font-mono"
              fontSize={15}
            >
              {formatArs(tier.price)}
            </text>
          );
        })}

        {/* Kilómetros en la mitad inferior de cada banda */}
        {bands.map(({ tier, inner, outer }) => {
          if (inner === 0) return null;
          const y = CENTER + (inner + outer) / 2;
          return (
            <text
              key={`km-${tier.maxKm}`}
              x={CENTER}
              y={y + 4}
              textAnchor="middle"
              className="fill-white font-subheading uppercase"
              fontSize={12}
              letterSpacing={1.5}
            >
              {tier.minKm}–{tier.maxKm} km
            </text>
          );
        })}

        <text
          x={CENTER}
          y={CENTER - (lastRadius + OUTER_RADIUS) / 2 + 5}
          textAnchor="middle"
          className="fill-brand-yellow-500 font-mono"
          fontSize={14}
        >
          {formatArs(EXPRESS_PRICE_PER_KM)} / km
        </text>
        <text
          x={CENTER}
          y={CENTER + (lastRadius + OUTER_RADIUS) / 2 + 4}
          textAnchor="middle"
          className="fill-brand-yellow-500 font-subheading uppercase"
          fontSize={12}
          letterSpacing={1.5}
        >
          {lastTier.maxKm}–{CONSULT_THRESHOLD_KM} km
        </text>

        {/* Punto de retiro */}
        <circle cx={CENTER} cy={CENTER} r={16} className="fill-brand-yellow-500" />
        <circle cx={CENTER} cy={CENTER} r={5} className="fill-brand-blue-700" />
        <text
          x={CENTER}
          y={CENTER + 34}
          textAnchor="middle"
          className="fill-white font-subheading uppercase"
          fontSize={12}
          letterSpacing={1.5}
        >
          Retiro · 0–3 km
        </text>
      </svg>
      <figcaption className="mt-3 text-center text-sm font-sans text-white/90">
        Distancia real por calle entre retiro y entrega. Más de {CONSULT_THRESHOLD_KM} km: cotizamos por WhatsApp.
      </figcaption>
    </figure>
  );
}
