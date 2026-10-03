'use client';

import ServicePricing, { type PricingFact, type PriceTier } from '@/components/ui/ServicePricing';
import {
  CONTRAREEMBOLSO_COMMISSION_PERCENT,
  RETRY_RULES,
  SAME_DAY_FIXED_PRICE,
} from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * El plan 3PL Same Day NO tiene DropOFF: el -20% es solo de E-commerce 24HS.
 * Por eso acá no aparece, y el `note` lo dice explícito para que nadie lo lea
 * como atributo del depósito.
 */
const SAME_DAY_TIERS: PriceTier[] = [
  {
    range: 'Plan 3PL Same Day',
    distance: 'Todo Mar del Plata',
    price: formatArs(SAME_DAY_FIXED_PRICE),
    features: [
      `Tarifa plana ${formatArs(SAME_DAY_FIXED_PRICE)} a todo Mar del Plata`,
      'Stock gratis en Friuli 1972',
      'Picking por código QR instantáneo',
      'Despacho Same Day 9:00-20:00 hs',
      `2da visita ${RETRY_RULES.DEPOSITO_3PL.description}`,
      `Contrareembolso: ${CONTRAREEMBOLSO_COMMISSION_PERCENT}% de comisión`,
      'Gestión 100% vía WhatsApp',
    ],
    tag: '3PL Same Day',
    note: 'Stock gratis en Friuli 1972 + picking QR + Same Day. NO incluye DropOFF.',
    featured: true,
  },
];

const SAME_DAY_FACTS: PricingFact[] = [
  {
    icon: 'Building2',
    title: 'Stock gratis en Friuli 1972',
    body: 'Almacenamiento de stock operativo sin costo en nuestro depósito central.',
  },
  {
    icon: 'Zap',
    title: 'Picking por código QR',
    body: 'Preparación ágil y precisa: escaneás, empaquetamos, despachamos.',
  },
  {
    icon: 'ShieldCheck',
    title: '2da visita 100% bonificada',
    body: 'Si el destinatario está ausente, la segunda visita no tiene cargo.',
  },
];

export default function DepositoPricing() {
  return (
    <ServicePricing
      serviceType="DEPOSITO"
      title="Plan E-Commerce Same Day (3PL)"
      subtitle="Almacenamos tu stock en Friuli 1972. Cuando vendés, nosotros empaquetamos, etiquetamos y despachamos en el día."
      rangeLabel="Todo Mar del Plata"
      unit="/ envío"
      tone="light"
      tiers={SAME_DAY_TIERS}
      ctaLabel={() => 'Solicitar plan 3PL'}
      featuredIndex={0}
      ctaHref="https://wa.me/542236602699"
      ctaVariant="primary"
      facts={SAME_DAY_FACTS}
      backgroundClassName="bg-brand-blue-700 text-white"
    />
  );
}