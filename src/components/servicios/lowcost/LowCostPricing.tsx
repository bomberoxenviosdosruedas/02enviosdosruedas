'use client';

import React from 'react';
import { Clock, TrendingDown, ShieldCheck, MapPin, Check, ArrowRight } from 'lucide-react';
import ServicePricing, { PriceTier } from '@/components/ui/ServicePricing';
import { LOW_COST_TIERS, LOW_COST_PRICE_PER_KM } from '@/lib/pricing';
import { CONSULT_THRESHOLD_KM, STANDARD_WEIGHT_KG, STANDARD_BULLET_DIMENSIONS_CM } from '@/lib/promises';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

const LOW_COST_TIERS_DATA: PriceTier[] = [
  {
    range: 'Zona 1',
    distance: '0–3 km',
    price: '3000',
    features: [
      'Corte de carga 13:00 hs',
      'Entrega antes de 19:00 hs',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Eficiencia en ruteo masivo',
      'Entrega puntual garantizada en el día',
    ],
    tag: 'La mejor tarifa para ruteo diario de cercanía.',
    note: 'La mejor tarifa para ruteo diario de cercanía.',
    featured: false,
  },
  {
    range: 'Zona 2',
    distance: '3–5 km',
    price: '4000',
    features: [
      'Corte de carga 13:00 hs',
      'Entrega antes de 19:00 hs',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Eficiencia en ruteo masivo',
      'Entrega puntual garantizada en el día',
    ],
    tag: 'Recomendado PyME',
    note: 'Cobertura intermedia económica para PyMEs.',
    featured: true,
  },
  {
    range: 'Zona 3',
    distance: '5–7 km',
    price: '5300',
    features: [
      'Corte de carga 13:00 hs',
      'Entrega antes de 19:00 hs',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Eficiencia en ruteo masivo',
      'Entrega puntual garantizada en el día',
    ],
    tag: 'Zona 3',
    note: 'Llegamos a distancias medias al mejor costo.',
    featured: false,
  },
  {
    range: 'Zona 4',
    distance: '7–10 km',
    price: '7000',
    features: [
      'Corte de carga 13:00 hs',
      'Entrega antes de 19:00 hs',
      'Hasta 5 kg / 40×40×30 cm por bulto',
      'Eficiencia en ruteo masivo',
      'Entrega puntual garantizada en el día',
    ],
    tag: 'Zona 4',
    note: 'Máximo ahorro en distancias urbanas largas.',
    featured: false,
  },
];

const LOW_COST_PRICING_FACTS = [
  {
    icon: 'Route',
    title: 'Ruteo masivo optimizado',
    body: 'Agrupamos envíos por zona para maximizar la eficiencia y bajar el costo por despacho.',
  },
  {
    icon: 'Clock',
    title: 'Corte 13:00 · Entrega < 19:00',
    body: 'Pedidos antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs del mismo día.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Tarifa fija por distancia',
    body: 'El precio sale de los kilómetros exactos entre retiro y entrega. Sin letra chica.',
  },
];

export default function LowCostPricing() {
  return (
    <ServicePricing
      serviceType="LOW_COST"
      title="Tarifas 2026 Envíos LowCost"
      subtitle="Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos cargados antes de las 13:00 hs."
      rangeLabel="Por envío en MDQ"
      unit="/ despacho final"
      tiers={LOW_COST_TIERS_DATA}
      ctaLabel={(idx) => `Ver ${LOW_COST_TIERS_DATA[idx].range}`}
      featuredIndex={1}
      perKmCoefficient={LOW_COST_TIERS[LOW_COST_TIERS.length - 1].price} // This should be 700, let's fix
      maxAutoKm={10}
      consultThresholdKm={20}
      excedenteTitle="Zona 5 (Más de 10 km)"
      excedenteExampleKm={12}
      ctaLabel={(idx) => `Ver ${LOW_COST_TIERS_DATA[idx].range}`}
      ctaHref="/cotizar"
      backgroundClassName="py-24 bg-brand-blue-500 relative overflow-hidden text-white border-t border-b border-white/10"
      showFacts={true}
      facts={[
        {
          icon: 'Route',
          title: 'Ruteo masivo optimizado',
          body: 'Agrupamos envíos por zona para maximizar la eficiencia y bajar el costo por despacho.',
        },
        {
          icon: 'Clock',
          title: 'Corte 13:00 · Entrega < 19:00',
          body: 'Pedidos antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs del mismo día.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Tarifa fija por distancia',
          body: 'El precio sale de los kilómetros exactos entre retiro y entrega. Sin letra chica.',
        },
      ]}
      cardClassName="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-[28px] shadow-float hover:shadow-antigravity-deep transition-all duration-300 flex flex-col"
    />
  );
}