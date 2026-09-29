'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShoppingBag,
  Zap,
  Building2,
  PackageCheck,
  ArrowRight,
  Sparkles,
  Store,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import {
  DROPOFF_DISCOUNT_PERCENT,
  EXPRESS_LEAD_TIME,
  FLEX_CUTOFF_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
  SAME_DAY_FIXED_PRICE,
} from '@/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

export default function SegmentosHome() {
  const segmentos = [
    {
      id: 'flex',
      tag: 'MERCADO LIBRE',
      title: '¿Vendés en Mercado Libre?',
      description: `Entregá en el mismo día con Mercado Envíos Flex en Mar del Plata urbana. Horario de corte ${FLEX_CUTOFF_TIME} y múltiples retiros para cuidar tu reputación.`,
      ctaText: 'Ver Solución Flex',
      href: '/servicios/enviosflex',
      icon: Zap,
      highlight: true,
    },
    {
      id: 'ecommerce',
      tag: 'E-COMMERCE 24HS / SAME-DAY',
      title: '¿Tenés tienda online con stock en depósito?',
      description: `E-Commerce 24hs: despacho garantizado en 24hs. E-Commerce Same-Day: entrega antes de 19hs con corte 13:00. Stock en Friuli 1972, picking QR, empaque incluido.`,
      ctaText: 'Ver planes E-Commerce',
      href: '/servicios',
      icon: Store,
      highlight: false,
    },
    {
      id: 'empresas',
      tag: 'COMERCIOS & EMPRESAS',
      title: '¿Tenés envíos diarios?',
      description: `Reparto económico programado para el día: pedís antes de las ${LOWCOST_CUTOFF_TIME} y se entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}, sin franja horaria fija. Tarifa fija por distancia y remito digital.`,
      ctaText: 'Ver Paquetería LowCost',
      href: '/servicios/envios-lowcost',
      icon: Building2,
      highlight: false,
    },
    {
      id: 'urgente',
      tag: 'PARTICULARES & URGENTES',
      title: '¿Necesitás un envío ya?',
      description: `Cadetería prioritaria punto a punto en moto. Entregas prioritarias en el día con elección de franja horaria de 3 horas, pedido con ${EXPRESS_LEAD_TIME} mínima.`,
      ctaText: 'Cotizá tu Envío Express',
      href: '/cotizar',
      icon: PackageCheck,
      highlight: false,
    },
  ];

  return (
    <section 
      id="segmentos-home" 
      aria-labelledby="segmentos-home-title"
      className="py-20 bg-brand-white-50 relative z-10 border-b border-brand-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-blue-900 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue-700" />
            <span>Elegí tu solución a medida</span>
          </div>
          <h2 id="segmentos-home-title" className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-brand-blue-700">
            ¿CÓMO PODEMOS IMPULSAR TU LOGÍSTICA HOY?
          </h2>
          <p className="font-sans text-sm sm:text-base text-brand-blue-700 max-w-xl mx-auto leading-relaxed">
            Seleccioná tu tipo de negocio o necesidad y descubrí el servicio ideal diseñado para las calles de Mar del Plata.
          </p>
        </div>

        {/* Grid 4 Segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segmentos.map((seg) => {
            const Icon = seg.icon;
            return (
              <DoubleBezelCard
                key={seg.id}
                outerClassName={
                  seg.highlight
                    ? 'bg-brand-yellow-500/20 border-2 border-brand-yellow-500 shadow-cta-glow hover:-translate-y-1'
                    : 'bg-brand-blue-50/80 border border-brand-blue-100 shadow-float hover:-translate-y-1'
                }
                innerClassName="h-full flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      seg.highlight
                        ? 'bg-brand-yellow-500 text-brand-blue-900'
                        : 'bg-brand-blue-50 text-brand-blue-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-600 border border-brand-blue-100">
                      {seg.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-700 leading-snug">
                    {seg.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-brand-blue-700 leading-relaxed font-normal">
                    {seg.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-blue-100">
                  <Link
                    href={seg.href}
                    className={`w-full min-h-[44px] px-4 py-2.5 rounded-full font-subheading text-xs uppercase tracking-wider font-bold flex items-center justify-between transition-all duration-200 cursor-pointer ${
                      seg.highlight
                        ? 'bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 shadow-accent-sm'
                        : 'bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-700 border border-brand-blue-200/60'
                    }`}
                  >
                    <span>{seg.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2 shrink-0" />
                  </Link>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
