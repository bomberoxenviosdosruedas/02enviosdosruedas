'use client';

import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import {
  DROPOFF_DISCOUNT_PERCENT,
  ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD,
  ECOMMERCE_24HS_PLANS,
  RETRY_RULES,
} from '@/lib/promises';

const FEATURED_PLAN_INDEX = 1;

/** Features comunes a los cuatro planes. El precio y el umbral salen de `promises.ts`. */
const PLAN_FEATURES: string[] = [
  'Tarifa plana todo MDQ',
  `Retiro gratis desde ${ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD} paquetes`,
  `2da visita ${RETRY_RULES.ECOMMERCE_24HS.description}`,
  'Contrareembolso gratis',
  `DropOFF -${DROPOFF_DISCOUNT_PERCENT}% en Friuli 1972`,
];

const PLAN_NOTES: Record<string, string> = {
  Inicial: 'Ideal para empezar con volúmenes bajos.',
  Pro: 'El equilibrio ideal para PyMEs en crecimiento.',
  Elite: 'Para volúmenes altos con mejor tarifa.',
  Partner: 'Tarifa plana para grandes volúmenes.',
};

const PLANS: PriceTier[] = ECOMMERCE_24HS_PLANS.map((plan) => ({
  range: plan.name,
  distance: `${plan.fromEnvos.toLocaleString('es-AR')}-${plan.toEnvios === null ? '+' : plan.toEnvios.toLocaleString('es-AR')} envíos/mes`,
  price: String(plan.price),
  period: '/ envío',
  features: PLAN_FEATURES,
  tag: plan.name,
  note: PLAN_NOTES[plan.name],
  featured: plan.featured,
}));

const ECOMMERCE_24HS_FACTS: PricingFact[] = [
  {
    icon: 'Zap',
    title: `DropOFF -${DROPOFF_DISCOUNT_PERCENT}% en Friuli 1972`,
    body: `Trayendo tus paquetes al depósito ahorrás ${DROPOFF_DISCOUNT_PERCENT}% y evitás costo de retiro.`,
  },
  {
    icon: 'ShieldCheck',
    title: '2da visita y contrareembolso gratis',
    body: 'En todos los planes 24HS la segunda visita y el contrareembolso son 100% gratis.',
  },
  {
    icon: 'Package',
    title: `Retiro gratis desde ${ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD} paquetes/día`,
    body: `Superando ${ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD} paquetes diarios el retiro es gratis; con menos volumen se cotiza el pase moto aparte.`,
  },
];

export default function Ecommerce24HSPricing() {
  return (
    <ServicePricing
      serviceType="ECOMMERCE_24HS"
      title="Planes E-Commerce 24HS (Next Day)"
      subtitle={`Distribución programada Next Day con costos fijos escalonados. DropOFF -${DROPOFF_DISCOUNT_PERCENT}% trayendo paquetes a Friuli 1972.`}
      rangeLabel="Escalas por volumen mensual"
      unit="/ envío"
      tone="light"
      tiers={PLANS}
      ctaLabel={(idx) => `Elegir plan ${PLANS[idx].range}`}
      featuredIndex={FEATURED_PLAN_INDEX}
      ctaHref="https://wa.me/542236602699"
      ctaVariant="primary"
      facts={ECOMMERCE_24HS_FACTS}
      backgroundClassName="bg-brand-blue-500 text-white"
    />
  );
}