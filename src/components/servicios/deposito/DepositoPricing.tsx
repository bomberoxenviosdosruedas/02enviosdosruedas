'use client';

import React from 'react';
import { Building2, Check, Zap, ShieldCheck, Package, Store } from 'lucide-react';
import ServicePricing, { PriceTier } from '@/components/ui/ServicePricing';
import { SAME_DAY_FIXED_PRICE, DROPOFF_DISCOUNT_PERCENT } from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const SAME_DAY_TIERS = [
  {
    range: 'Plan 3PL Same Day',
    distance: 'Todo Mar del Plata',
    price: formatArs(SAME_DAY_FIXED_PRICE),
    features: [
      'Tarifa plana $6.000 a todo Mar del Plata',
      'Stock gratis en Friuli 1972',
      'Picking por código QR instantáneo',
      'Despacho Same Day 9:00-20:00 hs',
      '2da visita 100% bonificada',
      'Contrareembolso $0 comisión',
      'Gestión 100% vía WhatsApp',
    ],
    tag: '3PL Same Day',
    note: 'Stock gratis en Friuli 1972 + picking QR + Same Day. NO DropOFF.',
    featured: true,
  },
];

const SAME_DAY_FACTS = [
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
      tiers={[
        {
          range: 'Plan 3PL Same Day',
          distance: 'Todo Mar del Plata',
          price: formatArs(SAME_DAY_FIXED_PRICE),
          features: [
            'Tarifa plana $6.000 a todo Mar del Plata',
            'Stock gratis en Friuli 1972',
            'Picking por código QR instantáneo',
            'Despacho Same Day 9:00-20:00 hs',
            '2da visita 100% bonificada',
            'Contrareembolso $0 comisión',
            'Gestión 100% vía WhatsApp',
          ],
          tag: '3PL Same Day',
          note: 'Stock gratis en Friuli 1972 + picking QR + Same Day. NO DropOFF.',
          featured: true,
        },
      ]}
      ctaLabel={(idx) => 'Solicitar plan 3PL'}
      featuredIndex={0}
      ctaHref="https://wa.me/542236602699"
      ctaVariant="primary"
      backgroundClassName="py-24 bg-brand-blue-700 relative overflow-hidden text-white"
      showFacts={true}
      facts={[
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
      ]}
    />
  );
}