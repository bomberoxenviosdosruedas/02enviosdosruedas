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
} from 'lucide-react';
import { DoubleBezelCard } from '@/src/components/ui/DoubleBezelCard';

export default function SegmentosHome() {
  const segmentos = [
    {
      id: 'flex',
      tag: 'MERCADO LIBRE',
      title: '¿Vendés en Mercado Libre?',
      description: 'Entregá en el mismo día con Mercado Envíos Flex. Horario de corte 15:00 hs y múltiples retiros para cuidar tu reputación.',
      ctaText: 'Ver Solución Flex',
      href: '/servicios/enviosflex',
      icon: Zap,
      highlight: true,
    },
    {
      id: 'ecommerce',
      tag: 'E-COMMERCE & TIENDAS',
      title: '¿Tenés tienda online?',
      description: 'Almacená tu stock en nuestro centro de Friuli 1972. Hacemos picking, empaque, entregas en el día y cobro contra reembolso.',
      ctaText: 'Ver Depósito & Fulfillment',
      href: '/servicios/deposito-fulfillment',
      icon: ShoppingBag,
      highlight: false,
    },
    {
      id: 'empresas',
      tag: 'COMERCIOS & EMPRESAS',
      title: '¿Tenés envíos diarios?',
      description: 'Reducí costos con nuestra paquetería LowCost agrupada. Tarifas fijas por distancia, ruteo inteligente y remito digital.',
      ctaText: 'Ver Paquetería LowCost',
      href: '/servicios/envios-lowcost',
      icon: Building2,
      highlight: false,
    },
    {
      id: 'urgente',
      tag: 'PARTICULARES & URGENTES',
      title: '¿Necesitás un envío ya?',
      description: 'Cadetería prioritaria punto a punto en moto. Tu paquete en destino en 60 a 90 minutos con cálculo de distancia en vivo.',
      ctaText: 'Cotizá tu Envío Express',
      href: '/cotizar/express',
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
          <p className="font-sans text-sm sm:text-base text-brand-blue-600/90 max-w-xl mx-auto leading-relaxed">
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

                  <p className="font-sans text-xs sm:text-sm text-brand-blue-600/90 leading-relaxed font-normal">
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
