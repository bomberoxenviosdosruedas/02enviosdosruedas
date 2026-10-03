'use client';

import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import { calculateLowCostPrice, LOW_COST_PRICE_PER_KM, LOW_COST_TIERS } from '@/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

const MAX_AUTO_KM = 10;
const EXAMPLE_KM = 12;
const FEATURED_TIER_INDEX = 1;

/**
 * LowCost no es un envío "agrupado" ni "por lote" (el dueño lo negó): es un
 * reparto programado en el día, sin franja horaria. El copy habla de ruteo y de
 * cortes, nunca de lotes.
 */
const TIER_FEATURES: string[] = [
  `Corte de carga ${LOWCOST_CUTOFF_TIME}`,
  `Entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}`,
  `Hasta ${STANDARD_WEIGHT_KG} kg / ${STANDARD_BULLET_DIMENSIONS_CM} por bulto`,
  'Ruteo por zona optimizado',
  'Entrega puntual garantizada en el día',
];

/** Etiquetas y copy por tramo. Los precios salen de `LOW_COST_TIERS`. */
const TIER_METADATA: readonly Omit<PriceTier, 'price' | 'distance' | 'features'>[] = [
  {
    range: 'Zona 1',
    tag: 'Zona 1',
    note: 'La mejor tarifa para despacho diario de cercanía.',
  },
  {
    range: 'Zona 2',
    tag: 'Recomendado PyME',
    note: 'Cobertura intermedia económica para PyMEs.',
  },
  {
    range: 'Zona 3',
    tag: 'Zona 3',
    note: 'Llegamos a distancias medias al mejor costo.',
  },
  {
    range: 'Zona 4',
    tag: 'Zona 4',
    note: 'Máximo ahorro en distancias urbanas largas.',
  },
];

const TIERS: PriceTier[] = LOW_COST_TIERS.map((tier, index) => ({
  ...TIER_METADATA[index],
  distance: `${tier.minKm}–${tier.maxKm} km`,
  price: String(tier.price),
  features: TIER_FEATURES,
}));

const LOW_COST_PRICING_FACTS: PricingFact[] = [
  {
    icon: 'Route',
    title: 'Ruteo por zona optimizado',
    body: 'Planificamos el recorrido por zonas para maximizar la eficiencia y bajar el costo por despacho.',
  },
  {
    icon: 'Clock',
    title: `Corte ${LOWCOST_CUTOFF_TIME} · entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}`,
    body: `Pedidos cargados antes de las ${LOWCOST_CUTOFF_TIME} se entregan el mismo día, antes de las ${LOWCOST_DELIVERY_DEADLINE}.`,
  },
  {
    icon: 'ShieldCheck',
    title: 'Tarifa fija por distancia',
    body: 'El precio sale de los kilómetros exactos entre retiro y entrega. Sin letra chica.',
  },
];

export default function LowCostPricing() {
  const examplePrice = calculateLowCostPrice(EXAMPLE_KM, []);

  return (
    <ServicePricing
      serviceType="LOW_COST"
      title="Tarifas 2026 Envíos LowCost"
      subtitle="Ruteo por zona optimizado. Garantizamos entregas antes de las 19:00 hs para pedidos cargados antes de las 13:00 hs."
      rangeLabel="Por envío en MDQ"
      unit="/ envío"
      tone="dark"
      tiers={TIERS}
      ctaLabel={(idx) => `Ver ${TIERS[idx].range}`}
      ctaHref="/cotizar"
      featuredIndex={FEATURED_TIER_INDEX}
      perKmCoefficient={LOW_COST_PRICE_PER_KM}
      maxAutoKm={MAX_AUTO_KM}
      consultThresholdKm={CONSULT_THRESHOLD_KM}
      excedenteTitle={`Zona 5 (más de ${MAX_AUTO_KM} km)`}
      excedenteExampleKm={EXAMPLE_KM}
      excedenteExamplePrice={typeof examplePrice === 'number' ? examplePrice : undefined}
      facts={LOW_COST_PRICING_FACTS}
      backgroundClassName="bg-brand-blue-500 border-t border-b border-white/10 text-white"
    />
  );
}