'use client';

import React from 'react';
import { Check, Briefcase, Building2, Zap, TrendingDown, Package, Store } from 'lucide-react';
import ServicePricing, { PriceTier } from '@/components/ui/ServicePricing';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const EMPRENDEDORES_PLANS: PriceTier[] = [
  {
    range: 'Plan Inicial DropOFF',
    distance: 'Por envío en MDQ',
    price: '2400',
    period: '/ envío',
    features: [
      'Corte de recepción 13:00 hs',
      'Descuento del 20% aplicado',
      'Ruteo same-day garantizado',
      'Contrareembolso $0 comisión',
    ],
    tag: 'DropOFF 20% off',
    note: 'Traés tus paquetes listos a Friuli 1972 y ahorrás 20% en cada envío.',
    featured: false,
  },
  {
    range: 'Plan E-Commerce 3PL',
    distance: 'Stock gratis',
    price: '3000',
    period: '/ envío + stock gratis',
    features: [
      'Almacenamiento de stock sin costo',
      'Picking por código QR instantáneo',
      'Reparto same-day en Mar del Plata',
      'Seguimiento GPS para tus clientes',
    ],
    tag: 'Más popular 2026',
    note: 'Stock gratis en Friuli 1972 + picking QR + Same Day.',
    featured: true,
  },
  {
    range: 'Plan PyME Corporativo',
    distance: 'Volumen > 10 envíos/día',
    price: 'A medida',
    period: '',
    features: [
      'Retiro programado en tu local',
      'Pagos agrupados semanales, quincenales o mensuales',
      'Atención prioritaria por WhatsApp',
      'Tarifa corporativa escalonada',
    ],
    tag: 'Cuenta corriente',
    note: 'Para empresas con envíos diarios recurrentes.',
    featured: false,
  },
];

const EMPRENDEDORES_FACTS = [
  {
    icon: 'Building2',
    title: 'Depósito propio en Friuli 1972',
    body: 'Guardamos tu stock en nuestro depósito central con picking QR y despacho Same Day.',
  },
  {
    icon: 'Zap',
    title: 'DropOFF -20% (Solo E-com 24HS)',
    body: 'Traés tus paquetes listos a Friuli 1972 y obtenés 20% de descuento automático.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Contrareembolso $0 comisión',
    body: 'Cobro en destino sin comisión ni recargo. Rendición día / 24hs / semanal + arqueo.',
  },
];

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

export default function EmprendedoresPricing() {
  return (
    <div className="space-y-16">
      <ServicePricing
        serviceType="DEPOSITO"
        title="Planes Paquetería y Fulfillment"
        subtitle="Elegí la modalidad e-commerce que mejor impulse tu marca."
        rangeLabel="Soluciones 3PL y E-commerce"
        unit="/ envío"
        tiers={EMPRENDEDORES_PLANS}
        ctaLabel={(idx) => `Elegir ${['DropOFF', '3PL', 'PyME'][idx]} plan`}
        featuredIndex={1}
        ctaHref="https://wa.me/542236602699"
        ctaVariant="primary"
        backgroundClassName="py-24 bg-brand-blue-700 relative overflow-hidden text-white"
        showFacts={true}
        facts={[
          {
            icon: 'Building2',
            title: 'Depósito propio en Friuli 1972',
            body: 'Guardamos tu stock en nuestro depósito central con picking QR y despacho Same Day.',
          },
          {
            icon: 'Zap',
            title: 'DropOFF -20% (Solo E-com 24HS)',
            body: 'Traés tus paquetes listos a Friuli 1972 y obtenés 20% de descuento automático.',
          },
          {
            icon: 'ShieldCheck',
            title: 'Contrareembolso $0 comisión',
            body: 'Cobro en destino sin comisión ni recargo. Rendición día / 24hs / semanal + arqueo.',
          },
        ]}
      />
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
      <ServicePricing
        serviceType="CUENTA_CORRIENTE"
        title="Cuenta Corriente Flexible"
        subtitle="El comercio paga el valor económico LowCost pero accede a condiciones Express (rango horario, corte 15:00, 2hs anticipación)."
        rangeLabel="Sin volumen mínimo"
        unit="/ envío"
        tiers={[
          {
            range: 'Cuenta Corriente Flexible',
            distance: 'Sin volumen mínimo',
            price: 'Tarifa LowCost',
            period: '/ envío',
            features: [
              'Condiciones Express (franja 3hs)',
              'Corte 15:00',
              '2hs anticipación',
              'Factura C / A corporativa',
              'Cierre diario/semanal/quincenal/mensual',
              'Pago remitente o destinatario',
              '2da visita 50%',
            ],
            tag: 'LowCost + Express',
            note: 'Tarifa LowCost con condiciones Express. Sin mínimo fijo.',
            featured: true,
          },
        ]}
        ctaLabel={(idx) => 'Solicitar asesoría por WhatsApp'}
        featuredIndex={0}
        ctaHref="https://wa.me/542236602699"
        ctaVariant="primary"
        backgroundClassName="py-24 bg-brand-blue-700 relative overflow-hidden text-white"
        showFacts={true}
        facts={[
          {
            icon: 'Building2',
            title: 'Facturación flexible',
            body: 'Cierre diario, semanal, quincenal o mensual a elección. Factura C estándar, A solo corporativas.',
          },
          {
            icon: 'Zap',
            title: 'Retiro programado',
            body: 'Coordinamos el retiro en tu local según tu operativa diaria.',
          },
          {
            icon: 'ShieldCheck',
            title: 'Atención ejecutiva WhatsApp',
            body: 'Asesor dedicado para resolver consultas operativas al instante.',
          },
        ]}
      />
    </div>
  );
}