'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  Zap,
  Building2,
  PackageCheck,
  Store,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import {
  EXPRESS_LEAD_TIME,
  FLEX_CUTOFF_TIME,
  LOWCOST_CUTOFF_TIME,
  LOWCOST_DELIVERY_DEADLINE,
} from '@/lib/promises';

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
      description: `E-Commerce 24hs: despacho garantizado en 24hs. E-Commerce Same-Day: entrega antes de las ${LOWCOST_DELIVERY_DEADLINE} con corte ${LOWCOST_CUTOFF_TIME}. Stock en Friuli 1972, picking QR, empaque incluido.`,
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

  // Variantes de animación para motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as const, // --ease-out
      },
    },
  };

  const iconHoverVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 3 },
  };

  return (
    <section
      id="segmentos-home"
      aria-labelledby="segmentos-home-title"
      className="py-20 bg-white relative z-10 border-b border-brand-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-blue-500 text-xs font-subheading uppercase tracking-widest font-bold shadow-accent-sm"
          >
            <Zap className="w-3.5 h-3.5 text-brand-blue-500" aria-hidden="true" />
            <span>Elegí tu solución a medida</span>
          </motion.div>
          <motion.h2
            id="segmentos-home-title"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] uppercase tracking-tight text-brand-blue-500"
          >
            ¿CÓMO PODEMOS IMPULSAR TU LOGÍSTICA HOY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-blue-500 max-w-xl mx-auto leading-relaxed"
          >
            Seleccioná tu tipo de negocio o necesidad y descubrí el servicio ideal diseñado para las calles de Mar del Plata.
          </motion.p>
        </div>

        {/* Grid 4 Segmentos con animación stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Segmentos de servicio"
        >
          {segmentos.map((seg, index) => {
            const Icon = seg.icon;
            const isHighlight = seg.highlight;

            return (
              <motion.article
                key={seg.id}
                variants={itemVariants}
                role="listitem"
                className="h-full"
              >
                <DoubleBezelCard
                  outerClassName={
                    isHighlight
                      ? 'border-2 border-brand-yellow-500 shadow-cta-glow hover:border-brand-yellow-400'
                      : 'bg-brand-blue-50/80 border border-brand-blue-100 shadow-float hover:border-brand-blue-300'
                  }
                  innerClassName="h-full flex flex-col justify-between space-y-6"
                  hoverEffect={true}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          isHighlight
                            ? 'bg-brand-yellow-500/20 text-brand-blue-500'
                            : 'bg-brand-blue-50 text-brand-blue-500'
                        }`}
                        whileHover={iconHoverVariants}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-2xs font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-brand-blue-100 text-brand-blue-500 border border-brand-blue-200">
                        {seg.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500 leading-snug">
                      {seg.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-brand-blue-500 leading-relaxed font-normal line-clamp-3">
                      {seg.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-100">
                    <CTANestedPill
                      variant="primary"
                      size="default"
                      href={seg.href}
                      id={`cta-${seg.id}`}
                    >
                      {seg.ctaText}
                    </CTANestedPill>
                  </div>
                </DoubleBezelCard>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}