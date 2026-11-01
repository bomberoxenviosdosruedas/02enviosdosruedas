'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { User, Store, Briefcase, ShieldCheck, Zap } from 'lucide-react';
import DoubleBezelCard from '@/components/ui/DoubleBezelCard';
import CTANestedPill from '@/components/ui/CTANestedPill';

const SEGMENTS = [
  {
    number: '01',
    icon: User,
    tag: 'Particulares · Trámites',
    title: 'Trámites y Encomiendas Personales',
    desc: 'Olvidate de hacer filas o perder la mañana. Trasladamos llaves, documentación legal, medicamentos, compras del día y paquetes urgentes puerta a puerta en todo Mar del Plata.',
    benefit: 'Franja de 3 hs o entrega inmediata',
    cta: 'Cotizar Mandado',
    href: '/cotizar',
    variant: 'light' as const,
  },
  {
    number: '02',
    icon: Store,
    tag: 'Comercios · E-Commerce',
    title: 'Envíos en el Día y Mercado Envíos Flex',
    desc: 'Multiplicá tus ventas online entregando el mismo día con cadetes propios de confianza. Cobro contra reembolso integrado y rendición formal en 24 hs.',
    benefit: 'Retiro bonificado en tu local',
    cta: 'Ver Plan Emprendedores',
    href: '/servicios/plan-emprendedores',
    variant: 'light' as const,
  },
  {
    number: '03',
    icon: Briefcase,
    tag: 'Empresas · Cuenta Corriente',
    title: 'Cadetería Corporativa & Ruteo B2B',
    desc: 'Solución logística integral para distribuidoras, repuesteras y estudios profesionales. Facturación unificada A/B quincenal o mensual con remitos conformados.',
    benefit: 'Atención prioritaria y soporte dedicado',
    cta: 'Solicitar Apertura B2B',
    href: '/servicios/empresas-cuenta-corriente',
    variant: 'light' as const,
  },
];

export default function SegmentosHome() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="segmentos-home"
      aria-labelledby="segmentos-home-heading"
      className="py-16 sm:py-24 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
    >
      {/* Section Header with quiet unboxed kicker and balanced title */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.22em] text-brand-blue-400">
          <Zap className="w-3.5 h-3.5 text-brand-yellow-500 fill-brand-yellow-500 shrink-0" aria-hidden="true" />
          <span>Soluciones a Medida</span>
          <span className="text-brand-yellow-500" aria-hidden="true">/</span>
          <span>Mar del Plata Urbana y Gral. Pueyrredón</span>
        </div>

        <h2
          id="segmentos-home-heading"
          className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-brand-blue-500 mb-3 text-balance leading-hero"
        >
          ¿Qué tipo de envío necesitás <span className="text-brand-yellow-500">coordinar</span>?
        </h2>

        <p className="font-sans text-base sm:text-lg text-brand-blue-500/80 leading-relaxed text-balance font-light">
          Diseñamos esquemas operativos específicos según el volumen, la urgencia y los requerimientos de tu negocio o necesidad personal.
        </p>
      </div>

      {/* Signature Double-Bezel Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full max-w-full">
        {SEGMENTS.map((s, index) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={s.number}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full w-full max-w-full flex"
            >
              <DoubleBezelCard
                variant={s.variant}
                hoverEffect={true}
                className="w-full flex flex-col justify-between group relative overflow-hidden"
                innerClassName="flex-1 flex flex-col justify-between p-5 sm:p-7 lg:p-8"
              >
                {/* Background Watermark Index Number */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-4 font-display text-5xl text-brand-blue-500/10 font-bold select-none pointer-events-none group-hover:text-brand-blue-500/20 transition-colors"
                >
                  {s.number}
                </span>

                <div>
                  {/* Icon Header Box */}
                  <div className="w-13 h-13 rounded-xl bg-brand-blue-50 text-brand-blue-500 group-hover:bg-brand-blue-500 group-hover:text-brand-yellow-500 flex items-center justify-center mb-6 border border-brand-blue-100/70 transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6 stroke-2" aria-hidden="true" />
                  </div>

                  {/* Unboxed Category Tag */}
                  <span className="font-mono text-xs font-bold text-brand-blue-400 uppercase tracking-wider block mb-2">
                    {s.tag}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-3 leading-snug group-hover:text-brand-blue-400 transition-colors">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-brand-blue-500/80 leading-relaxed mb-6 font-light">
                    {s.desc}
                  </p>

                  {/* Key Benefit Pill */}
                  <div className="flex items-center gap-2 text-xs font-sans font-medium text-brand-blue-500 py-2.5 px-3 rounded-lg bg-brand-blue-50/60 border border-brand-blue-100/60 mb-6">
                    <ShieldCheck className="w-4 h-4 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                    <span>{s.benefit}</span>
                  </div>
                </div>

                {/* Canonical CTA Nested Pill */}
                <div className="pt-4 border-t border-brand-blue-50 mt-auto">
                  <CTANestedPill
                    href={s.href}
                    variant={index === 0 ? 'primary' : 'elevated'}
                    size="default"
                    className="w-full justify-between"
                    id={`segment_cta_${s.number}`}
                  >
                    {s.cta}
                  </CTANestedPill>
                </div>
              </DoubleBezelCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
