'use client';

import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  EXPRESS_CUTOFF_TIME,
  EXPRESS_LEAD_TIME,
  EXPRESS_WINDOW_SHORT,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

const MAX_AUTO_KM = 10;
const EXAMPLE_KM = 12;
const FEATURED_TIER_INDEX = 2;

/** Las features comunes a los cuatro tramos. Sin importes: los números salen de `promises.ts`. */
const TIER_FEATURES: string[] = [
  `${EXPRESS_WINDOW_SHORT} a elección`,
  `Mínimo ${EXPRESS_LEAD_TIME}`,
  `Hasta ${STANDARD_WEIGHT_KG} kg / ${STANDARD_BULLET_DIMENSIONS_CM} por bulto`,
  `Corte de carga ${EXPRESS_CUTOFF_TIME}`,
  'Notificación digital de estado',
  'Custodia digital',
];

/**
 * Copy y etiqueta de cada tramo. `tag` es **descriptivo**, no una afirmación de
 * popularidad: si más adelante hay datos reales de pedidos por zona, reemplazarlo
 * por el dato verificado (ej. "X% de los envíos") — no publicar superlativos
 * sin respaldo. Ver AGENTS.md: no asumas nada.
 *
 * Los precios salen de `EXPRESS_TIERS`: `ServicePricing` los formatea.
 */
const TIER_METADATA: readonly Omit<PriceTier, 'price' | 'distance' | 'features'>[] = [
  {
    range: 'Zona 1 · Microcentro',
    tag: 'Zona 1 · Microcentro',
    note: 'Mandados rápidos dentro del barrio o a zonas aledañas.',
  },
  {
    range: 'Zona 2 · Interbarrial',
    tag: 'Zona 2 · Interbarrial',
    note: 'Cruces cortos entre zonas y barrios consolidados.',
  },
  {
    range: 'Zona 3 · Trayecto medio',
    tag: 'Tarifa intermedia',
    note: 'De una punta a la otra de la ciudad sin demoras.',
  },
  {
    range: 'Zona 4 · Perímetro urbano',
    tag: 'Zona 4 · Perímetro urbano',
    note: 'Recorridos extensos dentro del ejido urbano de MDQ.',
  },
];

const TIERS: PriceTier[] = EXPRESS_TIERS.map((tier, index) => ({
  ...TIER_METADATA[index],
  distance: `${tier.minKm}–${tier.maxKm} km`,
  price: String(tier.price),
  features: TIER_FEATURES,
}));

const PRICING_FACTS: PricingFact[] = [
  {
    icon: 'Route',
    title: 'Distancia real por calle',
    body: 'Medimos el recorrido en el mapa, punto a punto entre retiro y entrega.',
  },
  {
    icon: 'Clock',
    title: `Entrega en ${EXPRESS_WINDOW_SHORT} a elección`,
    body: 'Cadetería prioritaria con entrega asegurada dentro de la franja que coordinamos con vos.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Tabla pública, sin letra chica',
    body: 'Los tramos de la tabla y el coeficiente del excedente están a la vista. El precio sale de esos números, no de un criterio interno.',
  },
];

export default function ExpressPricing() {
  const examplePrice = calculateExpressPrice(EXAMPLE_KM, []);

  return (
    <ServicePricing
      serviceType="EXPRESS"
      title="Pagás por distancia, no por apuro"
      subtitle="Tarifa fija según los kilómetros exactos entre retiro y entrega. Sabés el precio del viaje antes de confirmar. Lluvia, espera en puerta, paradas extra o un bulto que supera el límite se suman aparte."
      rangeLabel="Por envío en MDQ"
      unit="/ envío"
      tiers={TIERS}
      ctaLabel={(idx) => (idx === FEATURED_TIER_INDEX ? 'Cotizar ahora' : `Cotizar zona ${idx + 1}`)}
      ctaHref="/cotizar"
      featuredIndex={FEATURED_TIER_INDEX}
      perKmCoefficient={EXPRESS_PRICE_PER_KM}
      maxAutoKm={MAX_AUTO_KM}
      consultThresholdKm={CONSULT_THRESHOLD_KM}
      excedenteTitle={`Más de ${MAX_AUTO_KM} km dentro de la ciudad`}
      excedenteExampleKm={EXAMPLE_KM}
      excedenteExamplePrice={typeof examplePrice === 'number' ? examplePrice : undefined}
      facts={PRICING_FACTS}
      backgroundClassName="py-20 lg:py-28 bg-white relative z-10 overflow-hidden text-brand-blue-900"
    />
  );
}