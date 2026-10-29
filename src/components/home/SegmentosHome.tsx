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
      priority: 'primary' as const,
    },
    {
      id: 'ecommerce',
      tag: 'E-COMMERCE 24HS / SAME-DAY',
      title: '¿Tenés tienda online con stock en depósito?',
      description: `E-Commerce 24hs: despacho garantizado en 24hs. E-Commerce Same-Day: entrega antes de las ${LOWCOST_DELIVERY_DEADLINE} con corte ${LOWCOST_CUTOFF_TIME}. Stock en Friuli 1972, picking QR, empaque incluido.`,
      ctaText: 'Ver planes E-Commerce',
      href: '/servicios',
      icon: Store,
      priority: 'secondary' as const,
    },
    {
      id: 'empresas',
      tag: 'COMERCIOS & EMPRESAS',
      title: '¿Tenés envíos diarios?',
      description: `Reparto económico programado para el día: pedís antes de las ${LOWCOST_CUTOFF_TIME} y se entrega antes de las ${LOWCOST_DELIVERY_DEADLINE}, sin franja horaria fija. Tarifa fija por distancia y remito digital.`,
      ctaText: 'Ver Paquetería LowCost',
      href: '/servicios/envios-lowcost',
      icon: Building2,
      priority: 'secondary' as const,
    },
    {
      id: 'urgente',
      tag: 'PARTICULARES & URGENTES',
      title: '¿Necesitás un envío ya?',
      description: `Cadetería prioritaria punto a punto en moto. Entregas prioritarias en el día con elección de franja horaria de 3 horas, pedido con ${EXPRESS_LEAD_TIME} mínima.`,
      ctaText: 'Cotizá tu Envío Express',
      href: '/cotizar',
      icon: PackageCheck,
      priority: 'secondary' as const,
    },
  ];

  // Spring physics tokens (from globals.css --ease-out, --duration-feedback)
  const springTransition = { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const };
  const fastSpring = { duration: 0.2, ease: [0.23, 1, 0.32, 1] as const };

  // Perpetual micro-loop para tarjeta primary (subtle pulse glow)
  const primaryCardLoop = {
    boxShadow: [
      '0 0 28px rgba(255, 236, 1, 0.35), 0 8px 24px rgba(9, 80, 246, 0.15)',
      '0 0 36px rgba(255, 236, 1, 0.45), 0 12px 32px rgba(9, 80, 246, 0.2)',
      '0 0 28px rgba(255, 236, 1, 0.35), 0 8px 24px rgba(9, 80, 246, 0.15)',
    ],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: springTransition },
  };

  const iconHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08 },
    tap: { scale: 0.95 },
  };

  return (
    <section
      id="segmentos-home"
      aria-labelledby="segmentos-home-title"
      className="py-20 lg:py-28 bg-white relative z-10 border-b border-brand-blue-100/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* ASYMMETRIC HEADER - Left aligned, no center */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springTransition}
          className="max-w-2xl space-y-4 lg:max-w-xl"
        >
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
            transition={{ ...springTransition, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[0.92] uppercase tracking-tight text-brand-blue-500"
          >
            ¿CÓMO PODEMOS IMPULSAR TU LOGÍSTICA HOY?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.15 }}
            className="font-sans text-sm sm:text-base text-brand-blue-500/80 leading-relaxed max-w-xl"
          >
            Seleccioná tu tipo de negocio o necesidad y descubrí el servicio ideal diseñado para las calles de Mar del Plata.
          </motion.p>
        </motion.div>

        {/* ASYMMETRIC GRID - 2 column zig-zag, no 4 equal columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          role="list"
          aria-label="Segmentos de servicio"
        >
          {segmentos.map((seg, index) => {
            const Icon = seg.icon;
            const isPrimary = seg.priority === 'primary';

            return (
              <motion.article
                key={seg.id}
                variants={itemVariants}
                role="listitem"
                className="h-full relative"
                style={isPrimary ? { willChange: 'box-shadow' } : undefined}
              >
                <DoubleBezelCard
                  outerClassName={`
                    h-full transition-all duration-300
                    ${isPrimary
                      ? 'border-2 border-brand-yellow-500 shadow-cta-glow hover:border-brand-yellow-400'
                      : 'border border-brand-blue-100 shadow-float hover:border-brand-blue-300 hover:shadow-antigravity-deep'
                    }
                  `}
                  innerClassName="h-full flex flex-col justify-between space-y-6 p-6 lg:p-8"
                  hoverEffect={true}
                >
                  <div className="space-y-5">
                    {/* Header: Icon + Tag Pill */}
                    <div className="flex items-start justify-between gap-3">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          isPrimary
                            ? 'bg-brand-yellow-500/15 text-brand-blue-500 ring-1 ring-brand-yellow-500/30'
                            : 'bg-brand-blue-50 text-brand-blue-500 ring-1 ring-brand-blue-100'
                        }`}
                        whileHover={iconHoverVariants}
                        whileTap={iconHoverVariants}
                        transition={fastSpring}
                        aria-hidden="true"
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <span className={`text-2xs font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full shrink-0 ${
                        isPrimary
                          ? 'bg-brand-yellow-500/20 text-brand-blue-500 border border-brand-yellow-500/30'
                          : 'bg-brand-blue-100 text-brand-blue-500 border border-brand-blue-200'
                      }`}>
                        {seg.tag}
                      </span>
                    </div>

                    {/* Title - track-tight, weight-driven hierarchy */}
                    <h3 className="font-display text-xl lg:text-2xl uppercase tracking-tight text-brand-blue-500 leading-snug">
                      {seg.title}
                    </h3>

                    {/* Description - NO line-clamp, relaxed leading, 65ch max */}
                    <p className="font-sans text-sm lg:text-base text-brand-blue-500/70 leading-relaxed font-normal max-w-[65ch]">
                      {seg.description}
                    </p>
                  </div>

                  {/* CTA - CTANestedPill con ID semántico */}
                  <div className="pt-4 border-t border-brand-blue-100">
                    <CTANestedPill
                      variant="primary"
                      size="default"
                      href={seg.href}
                      id={`segmento-${seg.id}-cta`}
                    >
                      {seg.ctaText}
                    </CTANestedPill>
                  </div>
                </DoubleBezelCard>

                {/* Perpetual micro-loop solo en tarjeta primary */}
                {isPrimary && (
                  <motion.div
                    animate={primaryCardLoop}
                    className="pointer-events-none absolute inset-0 rounded-2xl -z-10"
                    aria-hidden="true"
                  />
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}