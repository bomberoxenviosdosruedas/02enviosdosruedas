'use client';

import React from 'react';
import { Clock, MapPin, Route, ShieldCheck, Star, Zap } from 'lucide-react';
import ServicePricing, { PriceTier } from '@/components/ui/ServicePricing';
import { calculateExpressPrice, EXPRESS_PRICE_PER_KM, EXPRESS_TIERS } from '@/lib/pricing';
import {
  CONSULT_THRESHOLD_KM,
  EXPRESS_WINDOW,
  EXPRESS_WINDOW_SHORT,
  STANDARD_BULLET_DIMENSIONS_CM,
  STANDARD_WEIGHT_KG,
} from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * Copy de cada tramo. `badge` sólo se renderiza en la tarjeta destacada.
 *
 * NOTA: la etiqueta del badge es **descriptiva**, no una afirmación de
 * popularidad. Si más adelante hay datos reales de pedidos por zona, reemplazarla
 * por el dato verificado (ej. "X% de los envíos") — no publicar superlativos
 * sin respaldo. Ver AGENTS.md: no asumas nada.
 */
const TIER_METADATA: PriceTier[] = [
  {
    range: 'Zona 1 · Microcentro',
    distance: '0–3 km',
    price: '3700',
    features: [
      'Franja horaria de 3 hs a elección',
      'Mínimo 2 hs de anticipación',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Notificación digital de estado',
      'Custodia digital',
    ],
    tag: 'Zona 1 · Microcentro',
    note: 'Mandados rápidos dentro del barrio o a zonas aledañas.',
  },
  {
    range: 'Zona 2 · Interbarrial',
    distance: '3–5 km',
    price: '4600',
    features: [
      'Franja horaria de 3 hs a elección',
      'Mínimo 2 hs de anticipación',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Notificación digital de estado',
      'Custodia digital',
    ],
    tag: 'Zona 2 · Interbarrial',
    note: 'Cruces cortos entre zonas y barrios consolidados.',
  },
  {
    range: 'Zona 3 · Trayecto medio',
    distance: '5–7 km',
    price: '6100',
    features: [
      'Franja horaria de 3 hs a elección',
      'Mínimo 2 hs de anticipación',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Notificación digital de estado',
      'Custodia digital',
    ],
    tag: 'Tarifa intermedia',
    note: 'De una punta a la otra de la ciudad sin demoras.',
  },
  {
    range: 'Zona 4 · Perímetro urbano',
    distance: '7–10 km',
    price: '8200',
    features: [
      'Franja horaria de 3 hs a elección',
      'Mínimo 2 hs de anticipación',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Notificación digital de estado',
      'Custodia digital',
    ],
    tag: 'Zona 4 · Perímetro urbano',
    note: 'Recorridos extensos dentro del ejido urbano de MDQ.',
  },
];

const FEATURED_TIER_INDEX = 2;

const EXAMPLE_KM = 12;
const examplePrice = calculateExpressPrice(EXAMPLE_KM, []);
const lastTier = TIER_METADATA[TIER_METADATA.length - 1];

const PRICING_FACTS = [
  {
    icon: 'Route',
    title: 'Distancia real por calle',
    body: 'Medimos el recorrido en el mapa, punto a punto entre retiro y entrega.',
  },
  {
    icon: 'Clock',
    title: `Entrega en ${'Franja de 3 hs'} a elección`,
    body: 'Cadetería prioritaria con entrega asegurada dentro de la franja que coordinamos con vos.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Tabla pública, sin letra chica',
    body: 'Los tramos de la tabla y el coeficiente del excedente están a la vista. El precio sale de esos números, no de un criterio interno.',
  },
];

export default function ExpressPricing() {
  return (
    <ServicePricing
      serviceType="EXPRESS"
      title="Pagás por distancia, no por apuro"
      subtitle="Tarifa fija según los kilómetros exactos entre retiro y entrega. Sabés el precio del viaje antes de confirmar. Lluvia, espera en puerta, paradas extra o un bulto de más de 5 kg se suman aparte."
      rangeLabel="Por envío en MDQ"
      unit="/ envío"
      tiers={TIER_METADATA}
      ctaLabel={(idx) => idx === 2 ? 'Cotizar ahora' : `Cotizar zona ${idx + 1}`}
      featuredIndex={2}
      perKmCoefficient={EXPRESS_PRICE_PER_KM}
      maxAutoKm={10}
      consultThresholdKm={CONSULT_THRESHOLD_KM}
      excedenteTitle="Más de 10 km dentro de la ciudad"
      excedenteExampleKm={12}
      ctaLabel={(idx) => idx === 2 ? 'Cotizar ahora' : `Cotizar zona ${idx + 1}`}
      ctaHref="/cotizar"
      showFacts={true}
      facts={[
        {
          icon: 'Route',
          title: 'Distancia real por calle',
          body: 'Medimos el recorrido en el mapa, punto a punto entre retiro y entrega.',
        },
        {
          icon: 'Clock',
          title: `Entrega en ${'Franja de 3 hs'} a elección`,
          body: 'Cadetería prioritaria con entrega asegurada dentro de la franja que coordinamos con vos.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Tabla pública, sin letra chica',
          body: 'Los tramos de la tabla y el coeficiente del excedente están a la vista. El precio sale de esos números, no de un criterio interno.',
        },
      ]}
      backgroundClassName="py-20 lg:py-28 bg-white relative z-10 overflow-hidden text-brand-blue-900"
    />
  );
}