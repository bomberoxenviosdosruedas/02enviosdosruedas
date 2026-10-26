'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  QrCode,
  Zap,
  Users,
  BarChart3,
  CheckCircle2,
  UtensilsCrossed,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { SUPPORT_PHONE } from '@/lib/promises';
import { trackAnalytics } from '@/lib/analytics';

const WHATSAPP_NUMBER = SUPPORT_PHONE.replace(/\D/g, '');

export default function MarDeliveryHomeSection() {
  const reduceMotion = useReducedMotion();

  const springTransition = { type: 'spring' as const, stiffness: 360, damping: 28 };

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springTransition,
    },
  };

  const cards = [
    {
      title: 'Carta Digital & Pedidos QR',
      description:
        'Menú o catálogo interactivo con promociones y cupones para recibir pedidos directos para retiro en local o envío a domicilio.',
      icon: QrCode,
      badge: 'Menú Interactivo',
      metric: 'Sin comisiones abusivas',
    },
    {
      title: 'Carga Rápida de Envíos',
      description:
        'Convertí mensajes de WhatsApp u otros canales en envíos listos para despacho copiando y pegando la información del cliente.',
      icon: Zap,
      badge: 'Automatización',
      metric: 'Copiar y despachar',
    },
    {
      title: 'Modalidad de Repartidores Flexible',
      description:
        'Operá con repartidores por turno, sumá a tu equipo de cadetes propios a la app o combiná ambas opciones según la demanda.',
      icon: Users,
      badge: 'Flota a Medida',
      metric: 'Turnos o a demanda',
    },
    {
      title: 'Estadísticas y Control',
      description:
        'Monitoreá el desempeño de tus entregas por período y exportá resúmenes en Excel para la gestión administrativa de tu comercio.',
      icon: BarChart3,
      badge: 'Métricas Reales',
      metric: 'Exportación en Excel',
    },
  ];

  return (
    <section
      id="mardelivery-home"
      aria-labelledby="mardelivery-home-title"
      className="py-16 sm:py-24 lg:py-28 bg-brand-blue-500 relative overflow-hidden text-white border-b border-white/10"
    >
      {/* Background Decorative Asymmetric Elements */}
      <div
        className="absolute top-0 right-0 w-120 h-120 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 bg-brand-blue-400/20 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={sectionVariants}
          className="space-y-12"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="px-3.5 py-1 bg-white/10 text-brand-yellow-500 border border-brand-yellow-500/30 rounded-full text-xs font-bold tracking-widest uppercase font-subheading flex items-center gap-1.5">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                DELIVERY & CARTA DIGITAL MDQ
              </span>
            </motion.div>

            <motion.h2
              id="mardelivery-home-title"
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95]"
            >
              Potenciá tu local comercial y gastronómico con{' '}
              <span className="text-brand-blue-500 bg-brand-yellow-500 px-2.5 py-0.5 rounded-lg inline-block shadow-md">
                MarDelivery
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-brand-blue-50 font-normal leading-relaxed"
            >
              Organizá tus pedidos, automatizá tu carta online y elegí la modalidad de
              cadetería que mejor se adapte al flujo de trabajo de tu comercio en Mar del Plata.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl p-2 bg-white/5 border border-white/10 shadow-float hover:border-brand-yellow-400/60 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="rounded-xl p-6 bg-brand-blue-900/60 border border-white/5 text-white flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-brand-yellow-500 text-brand-blue-500 flex items-center justify-center font-bold shadow-md">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span className="text-2xs font-subheading uppercase tracking-wider font-bold text-brand-yellow-500 bg-brand-yellow-500/10 px-2.5 py-1 rounded-full border border-brand-yellow-500/20">
                          {card.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-xl uppercase tracking-tight text-white">
                        {card.title}
                      </h3>

                      <p className="font-sans text-sm text-brand-blue-50 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-brand-yellow-500">
                      <span className="flex items-center gap-1.5 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        {card.metric}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Banner CTA */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="text-xs font-subheading uppercase tracking-widest text-brand-yellow-500 font-bold block">
                Solución Especializada Para Comercios Gastronómicos
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                ¿Tenés un restaurante, cervecería o rotisería en MDQ?
              </h3>
              <p className="font-sans text-sm text-brand-blue-50 font-light">
                Digitalizá tus pedidos hoy mismo y controlá tus costos de despacho con cadetes de confianza.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <CTANestedPill
                href="/mardelivery"
                variant="primary"
                size="large"
                className="w-full sm:w-auto text-sm justify-between"
                onClick={() =>
                  trackAnalytics.ctaClick('home_mardelivery_conocer_cta', 'Conocer Soluciones MarDelivery')
                }
              >
                <span>Conocer Soluciones MarDelivery</span>
              </CTANestedPill>

              <a
                href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20solicitar%20una%20demostraci%C3%B3n%20para%20mi%20local%20gastron%C3%B3mico%20en%20Mar%20del%20Plata`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackAnalytics.whatsappClick('home_mardelivery_demo_cta', 'Solicitar Demostración para mi Local')
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-subheading uppercase tracking-wider text-sm px-6 py-3.5 rounded-full transition-[background-color,border-color] duration-150 ease-out min-h-12"
              >
                <span>Solicitar Demostración para mi Local</span>
                <ArrowUpRight className="w-4 h-4 text-brand-yellow-500" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
