'use client';

import React from 'react';
import { Check, Zap, ShieldCheck, Package, Store } from 'lucide-react';
import ServicePricing, { PriceTier } from '@/components/ui/ServicePricing';
import { ECOMMERCE_24HS_TIERS, DROPOFF_DISCOUNT_PERCENT } from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const ECOMMERCE_24HS_PLANS = [
  {
    range: 'Inicial',
    distance: '1-199 envíos/mes',
    price: '3800',
    period: '/ envío',
    features: [
      'Tarifa plana todo MDQ',
      'Retiro gratis +10 paquetes',
      '2da visita gratis',
      'Contrareembolso gratis',
      'DropOFF -20% en Friuli 1972',
    ],
    tag: 'Inicial',
    note: 'Ideal para empezar con volúmenes bajos.',
    featured: false,
  },
  {
    range: 'Pro',
    distance: '200-1.199 envíos/mes',
    price: '3500',
    period: '/ envío',
    features: [
      'Tarifa plana todo MDQ',
      'Retiro gratis +10 paquetes',
      '2da visita gratis',
      'Contrareembolso gratis',
      'DropOFF -20% en Friuli 1972',
    ],
    tag: 'Pro',
    note: 'El equilibrio ideal para PyMEs en crecimiento.',
    featured: true,
  },
  {
    range: 'Elite',
    distance: '1.200-1.999 envíos/mes',
    price: '3200',
    period: '/ envío',
    features: [
      'Tarifa plana todo MDQ',
      'Retiro gratis +10 paquetes',
      '2da visita gratis',
      'Contrareembolso gratis',
      'DropOFF -20% en Friuli 1972',
    ],
    tag: 'Elite',
    note: 'Para volúmenes altos con mejor tarifa.',
    featured: false,
  },
  {
    range: 'Partner',
    distance: '+2.000 envíos/mes',
    price: '3000',
    period: '/ envío',
    features: [
      'Tarifa plana todo MDQ',
      'Retiro gratis +10 paquetes',
      '2da visita gratis',
      'Contrareembolso gratis',
      'DropOFF -20% en Friuli 1972',
    ],
    tag: 'Partner',
    note: 'Tarifa plana para grandes volúmenes.',
    featured: false,
  },
];

const ECOMMERCE_24HS_FACTS = [
  {
    icon: 'Zap',
    title: 'DropOFF -20% en Friuli 1972',
    body: 'Trayendo tus paquetes al depósito ahorrás 20% y evitás costo de retiro.',
  },
  {
    icon: 'ShieldCheck',
    title: '2da visita y Contrareembolso GRATIS',
    body: 'En todos los planes 24HS la segunda visita y el contrareembolso son 100% gratis.',
  },
  {
    icon: 'Package',
    title: 'Retiro gratis +10 paquetes/día',
    body: 'Superando 10 paquetes diarios el retiro es gratis. Menor volumen: $4.000 pase moto.',
  },
];

export default function Ecommerce24HSPricing() {
  return (
    <ServicePricing
      serviceType="ECOMMERCE_24HS"
      title="Planes E-Commerce 24HS (Next Day)"
      subtitle="Distribución programada Next Day con costos fijos escalonados. DropOFF -20% trayendo paquetes a Friuli 1972."
      rangeLabel="Escalas por volumen mensual"
      unit="/ envío"
      tiers={ECOMMERCE_24HS_PLANS.map(p => ({
        range: p.range,
        distance: p.distance,
        price: p.price,
        period: p.period,
        features: p.features,
        tag: p.tag,
        note: p.note,
        featured: p.featured,
      }))}
      ctaLabel={(idx) => `Elegir ${['Inicial', 'Pro', 'Elite', 'Partner'][idx]} plan`}
      featuredIndex={1}
      ctaHref="https://wa.me/542236602699"
      ctaVariant="primary"
      backgroundClassName="py-24 bg-brand-blue-500 relative overflow-hidden text-brand-blue-900"
      showFacts={true}
      facts={[
        {
          icon: 'Zap',
          title: 'DropOFF -20% en Friuli 1972',
          body: 'Trayendo tus paquetes al depósito ahorrás 20% y evitás costo de retiro.',
        },
        {
          icon: 'ShieldCheck',
          title: '2da visita y Contrareembolso GRATIS',
          body: 'En todos los planes 24HS la segunda visita y el contrareembolso son 100% gratis.',
        },
        {
          icon: 'Package',
          title: 'Retiro gratis +10 paquetes/día',
          body: 'Superando 10 paquetes diarios el retiro es gratis. Menor volumen: $4.000 pase moto.',
        },
      ]}
      ctaHref="https://wa.me/542236602699"
      ctaVariant="primary"
      backgroundClassName="py-24 bg-brand-blue-500 relative overflow-hidden text-brand-blue-900"
    />
  );
}