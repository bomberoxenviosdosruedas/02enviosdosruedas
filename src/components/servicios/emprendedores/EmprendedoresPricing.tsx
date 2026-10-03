'use client';

import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import {
  CONTRAREEMBOLSO_COMMISSION_PERCENT,
  DROPOFF_DISCOUNT_PERCENT,
  ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD,
  ECOMMERCE_24HS_PLANS,
  EMPRENDEDORES_PLANS,
  LOWCOST_CUTOFF_TIME,
  RETRY_RULES,
} from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/** Features del Plan Inicial DropOFF: el -20% ya viene aplicado en la tarifa plana. */
const DROPOFF_FEATURES: string[] = [
  `Corte de recepción ${LOWCOST_CUTOFF_TIME}`,
  `Descuento del ${DROPOFF_DISCOUNT_PERCENT}% aplicado`,
  'Ruteo same-day garantizado',
  `Contrareembolso: ${CONTRAREEMBOLSO_COMMISSION_PERCENT}% de comisión`,
];

/** Features del Plan E-Commerce 3PL: depósito + despacho, sin DropOFF. */
const TRESPL_FEATURES: string[] = [
  'Almacenamiento de stock sin costo',
  'Picking por código QR instantáneo',
  'Reparto same-day en Mar del Plata',
  'Seguimiento GPS para tus clientes',
];

/** Features del Plan PyME Corporativo. "A medida" no es un precio, por eso `price` es null. */
const PYME_FEATURES: string[] = [
  'Retiro programado en tu local',
  'Liquidaciones semanales, quincenales o mensuales',
  'Atención prioritaria por WhatsApp',
  'Tarifa corporativa escalonada',
];

const FEATURES_POR_PLAN: Record<string, string[]> = {
  'Plan Inicial DropOFF': DROPOFF_FEATURES,
  'Plan E-Commerce 3PL': TRESPL_FEATURES,
  'Plan PyME Corporativo': PYME_FEATURES,
};

const PLANS: PriceTier[] = EMPRENDEDORES_PLANS.map((plan) => ({
  range: plan.name,
  distance: plan.distance,
  price: plan.price === null ? 'A cotizar' : formatArs(plan.price),
  period: plan.period,
  features: FEATURES_POR_PLAN[plan.name],
  tag: plan.tag,
  note: plan.note,
  featured: plan.featured,
}));

const EMPRENDEDORES_FACTS: PricingFact[] = [
  {
    icon: 'Building2',
    title: 'Depósito propio en Friuli 1972',
    body: 'Guardamos tu stock en nuestro depósito central con picking QR y despacho Same Day.',
  },
  {
    icon: 'Zap',
    title: `DropOFF -${DROPOFF_DISCOUNT_PERCENT}% (solo E-com 24HS)`,
    body: 'Traés tus paquetes listos a Friuli 1972 y el descuento se aplica automático.',
  },
  {
    icon: 'ShieldCheck',
    title: `Contrareembolso: ${CONTRAREEMBOLSO_COMMISSION_PERCENT}% de comisión`,
    body: `Cobro en destino sin comisión ni recargo. Rendición en el día, al día siguiente o semanal, según lo acordado, más arqueo. Segunda visita ${RETRY_RULES.CUENTA_CORRIENTE.description}.`,
  },
];

/**
 * Escala 24HS. Comparte datos con `Ecommerce24HSPricing`; acá se replica porque
 * la página de Emprendedores publica los dos tarifarios juntos.
 */
const PLANS_24HS: PriceTier[] = ECOMMERCE_24HS_PLANS.map((plan) => ({
  range: plan.name,
  distance: `${plan.fromEnvos.toLocaleString('es-AR')}-${plan.toEnvios === null ? '+' : plan.toEnvios.toLocaleString('es-AR')} envíos/mes`,
  price: formatArs(plan.price),
  period: '/ envío',
  features: [
    'Tarifa plana todo MDQ',
    `Retiro gratis desde ${ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD} paquetes`,
    `2da visita ${RETRY_RULES.ECOMMERCE_24HS.description}`,
    `Contrareembolso: ${CONTRAREEMBOLSO_COMMISSION_PERCENT}% de comisión`,
    `DropOFF -${DROPOFF_DISCOUNT_PERCENT}% en Friuli 1972`,
  ],
  tag: plan.name,
  note: undefined,
  featured: plan.featured,
}));

const FACTS_24HS: PricingFact[] = [
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

export default function EmprendedoresPricing() {
  return (
    <div className="space-y-24">
      <ServicePricing
        serviceType="EMPRENDEDORES"
        title="Planes Paquetería y Fulfillment"
        subtitle="Elegí la modalidad e-commerce que mejor impulse tu marca."
        rangeLabel="Soluciones 3PL y E-commerce"
        unit="/ envío"
        tone="light"
        tiers={PLANS}
        ctaLabel={(idx) => `Consultar ${PLANS[idx].range}`}
        featuredIndex={1}
        ctaHref="https://wa.me/542236602699"
        ctaVariant="primary"
        facts={EMPRENDEDORES_FACTS}
        backgroundClassName="bg-brand-blue-700 text-white"
      />

      <ServicePricing
        serviceType="ECOMMERCE_24HS"
        title="Planes E-Commerce 24HS (Next Day)"
        subtitle={`Distribución programada Next Day con costos fijos escalonados. DropOFF -${DROPOFF_DISCOUNT_PERCENT}% trayendo paquetes a Friuli 1972.`}
        rangeLabel="Escalas por volumen mensual"
        unit="/ envío"
        tone="light"
        tiers={PLANS_24HS}
        ctaLabel={(idx) => `Elegir plan ${PLANS_24HS[idx].range}`}
        featuredIndex={1}
        ctaHref="https://wa.me/542236602699"
        ctaVariant="primary"
        facts={FACTS_24HS}
        backgroundClassName="bg-brand-blue-500 text-brand-blue-900"
      />
    </div>
  );
}