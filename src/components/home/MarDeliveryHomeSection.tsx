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
      isAmber: false,
    },
    {
      title: 'Carga Rápida de Envíos',
      description:
        'Armá borradores de entrega copiando chats de WhatsApp: con el asistente Rueditas IA transformás mensajes en envíos listos para despacho en segundos.',
      icon: Zap,
      badge: 'Rueditas IA',
      metric: 'Borradores con Rueditas IA',
      isAmber: true,
    },
    {
      title: 'Modalidad de Repartidores Flexible',
      description:
        'Operá con repartidores por turno (repartidores propios de tu local o provistos por la flota de MarDelivery), sumá a tu equipo a la app o combiná ambas opciones.',
      icon: Users,
      badge: 'Flota a Medida',
      metric: 'Propios o Flota MarDelivery',
      isAmber: false,
    },
    {
      title: 'Estadísticas y Control',
      description:
        'Información total de clientes con monitoreo de despachos por barrio y franja horaria, más exportación de resúmenes en Excel para tu gestión comercial.',
      icon: BarChart3,
      badge: 'Métricas Reales',
      metric: 'Información total de clientes',
      isAmber: false,
    },
  ];

  return (
    <section
      id="mardelivery-home"
      aria-labelledby="mardelivery-home-title"
      className="py-16 sm:py-24 lg:py-28 bg-[#031811] relative overflow-hidden text-white border-b border-[#2ECC85]/15 font-sans"
    >
      {/* Background Decorative Asymmetric Elements */}
      <div
        className="absolute top-0 right-0 w-130 h-130 bg-[#2ECC85]/12 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-100 h-100 bg-[#F5B938]/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#2ECC85_1px,transparent_1px),linear-gradient(to_bottom,#2ECC85_1px,transparent_1px)] bg-size-[36px_36px] pointer-events-none" />

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
              <span className="px-3.5 py-1 bg-[#2ECC85]/10 text-[#2ECC85] border border-[#2ECC85]/30 rounded-full text-xs font-subheading font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-[0_0_12px_rgba(46,204,133,0.15)]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#2ECC85]" />
                DELIVERY & CARTA DIGITAL MDQ
              </span>
            </motion.div>

            <motion.h2
              id="mardelivery-home-title"
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-[0.95]"
            >
              Potenciá tu local comercial y gastronómico con{' '}
              <span className="text-[#031811] bg-[#2ECC85] px-3 py-0.5 rounded-xl inline-block shadow-[0_0_24px_rgba(46,204,133,0.35)]">
                MarDelivery
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-[#FAFCFB]/80 font-normal leading-relaxed"
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
                  className="rounded-2xl p-2 bg-white/5 border border-white/10 shadow-[0_4px_16px_-2px_rgba(3,24,17,0.3)] hover:border-[#2ECC85]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="rounded-xl p-6 bg-[#031811]/90 border border-[#2ECC85]/10 text-white flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#2ECC85] text-[#031811] flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>
                        <span
                          className={`text-2xs font-subheading uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${
                            card.isAmber
                              ? 'text-[#F5B938] bg-[#F5B938]/15 border-[#F5B938]/30'
                              : 'text-[#2ECC85] bg-[#2ECC85]/10 border-[#2ECC85]/20'
                          }`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-xl uppercase tracking-tight text-white">
                        {card.title}
                      </h3>

                      <p className="font-sans text-sm text-[#FAFCFB]/75 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#2ECC85]">
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
            className="p-6 sm:p-8 rounded-2xl bg-[#111B17] border border-[#2ECC85]/30 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="text-xs font-subheading uppercase tracking-widest text-[#2ECC85] font-bold block">
                Solución Especializada Para Comercios y Gastronomía en MDQ
              </span>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                ¿Tenés un restaurante, rotisería, verdulería, kiosco o comercio de barrio en MDQ?
              </h3>
              <p className="font-sans text-sm text-[#FAFCFB]/80 font-light">
                Digitalizá tus pedidos hoy mismo y controlá tus costos de despacho. Accedé a 30 días gratis del Plan Medio registrándote antes del 30/11/2026.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <Link
                href="/mardelivery"
                onClick={() =>
                  trackAnalytics.ctaClick('home_mardelivery_conocer_cta', 'Conocer Soluciones MarDelivery')
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2ECC85] hover:bg-[#27b374] text-[#031811] font-subheading font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_0_20px_rgba(46,204,133,0.35)] transition-all"
              >
                <span>Conocer Soluciones MarDelivery</span>
              </Link>

              <a
                href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=Hola%20MarDelivery!%20Quiero%20aprovechar%20la%20promoci%C3%B3n%20de%2030%20d%C3%ADas%20gratis%20del%20Plan%20Medio%20antes%20del%2030%2F11%2F2026%20para%20mi%20comercio%20en%20Mar%20del%20Plata`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackAnalytics.whatsappClick('home_mardelivery_demo_cta', 'Promoción 30 Días Gratis Plan Medio')
                }
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#031811] hover:bg-white/10 text-white border border-[#2ECC85]/30 hover:border-[#2ECC85] font-subheading uppercase tracking-wider text-sm px-6 py-3.5 rounded-full transition-all duration-150 min-h-12"
              >
                <span>Pedir 30 Días Gratis (Plan Medio)</span>
                <ArrowUpRight className="w-4 h-4 text-[#2ECC85]" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
