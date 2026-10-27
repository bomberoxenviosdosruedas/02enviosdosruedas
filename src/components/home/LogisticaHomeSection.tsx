'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import {
  Search,
  Store,
  Bike,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { CTANestedPill } from '@/components/ui/CTANestedPill';
import { trackAnalytics } from '@/lib/analytics';

export default function LogisticaHomeSection() {
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

  const features = [
    {
      title: 'Seguimiento Unificado',
      description:
        'Ingresá el código EDR de la etiqueta (ej. EDR00003071MDQ) para conocer el estado exacto del paquete en tiempo real: falta retirar, retirado, en camino, entregado o no entregado.',
      icon: Search,
      badge: 'Trazabilidad en Vivo',
      highlight: 'Código EDR',
    },
    {
      title: 'Panel para Comercios',
      description:
        'Acceso al entorno donde las tiendas y negocios organizan sus despachos diarios, cargan envíos y monitorean las entregas de sus clientes en tiempo real.',
      icon: Store,
      badge: 'Gestión Comercial',
      highlight: 'Despachos Masivos',
    },
    {
      title: 'Panel para Repartidores',
      description:
        'Plataforma para que la flota de cadetes visualice sus hojas de ruta, registre firmas digitales y confirme las entregas en calle con total seguridad.',
      icon: Bike,
      badge: 'Flota en Calle',
      highlight: 'Hojas de Ruta MDQ',
    },
    {
      title: 'Ecosistema E-commerce',
      description:
        'Integración fluida con Tienda Nube y Shop DosRuedas (shopdosruedas.com) para conectar tu tienda online y coordinar los envíos en un solo circuito automatizado.',
      icon: ShoppingBag,
      badge: 'Tiendas Online',
      highlight: 'Tienda Nube & Shop DosRuedas',
    },
  ];

  return (
    <section
      id="logistica-dosruedas-home"
      aria-labelledby="logistica-home-title"
      className="py-16 sm:py-24 lg:py-28 bg-white relative overflow-hidden border-b border-brand-blue-50/80"
    >
      {/* Background Subtle Gradient Blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none"
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
              <span className="px-3.5 py-1 bg-brand-blue-500/10 text-brand-blue-500 border border-brand-blue-500/20 rounded-full text-xs font-bold tracking-widest uppercase font-subheading">
                SISTEMA LOGÍSTICO DIGITAL
              </span>
            </motion.div>

            <motion.h2
              id="logistica-home-title"
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-blue-500 leading-[0.95]"
            >
              Seguí tu paquete en tiempo real e ingresá a tu{' '}
              <span className="text-brand-yellow-500 bg-brand-blue-500 px-2 py-0.5 rounded-lg inline-block shadow-sm">
                panel operativo
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-brand-blue-900/80 font-normal leading-relaxed"
            >
              Conectamos la última milla de Mar del Plata con trazabilidad total. Consultá el
              estado de tu envío con el código <strong className="font-bold text-brand-blue-500">EDR</strong> o
              gestioná las operaciones de tu tienda online desde nuestros portales dedicados.
            </motion.p>
          </div>

          {/* Feature Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat) => {
              const Icon = feat.icon;
              return (
                <DoubleBezelCard
                  key={feat.title}
                  variant="light"
                  className="h-full flex flex-col justify-between"
                  innerClassName="p-6 flex flex-col justify-between h-full bg-white hover:bg-brand-blue-50/30 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-2xs font-subheading uppercase tracking-wider font-bold text-brand-blue-500/70 bg-brand-blue-50 px-2.5 py-1 rounded-full border border-brand-blue-100">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                      {feat.title}
                    </h3>

                    <p className="font-sans text-sm text-brand-blue-900/75 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-brand-blue-50/80 flex items-center justify-between text-xs font-mono font-medium text-brand-blue-500">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow-500" />
                      {feat.highlight}
                    </span>
                  </div>
                </DoubleBezelCard>
              );
            })}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 rounded-2xl bg-linear-to-r from-brand-blue-500 to-brand-blue-600 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-brand-yellow-500 text-xs font-subheading uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Portales Logísticos Oficiales · Logística DosRuedas</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                ¿Querés rastrear un envío o acceder a tu cuenta?
              </h3>
              <p className="font-sans text-sm text-brand-blue-50 font-light">
                Consultá con tu código EDR o ingresá al panel comercial para despachar sin demoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto shrink-0">
              <CTANestedPill
                href="/logistica-dosruedas#rastreo"
                variant="primary"
                size="large"
                className="w-full sm:w-auto text-sm justify-between"
                onClick={() =>
                  trackAnalytics.ctaClick('home_logistica_rastrear_cta', 'Rastrear Envío (Código EDR)')
                }
              >
                <span>Rastrear Envío (Código EDR)</span>
              </CTANestedPill>

              <CTANestedPill
                href="/logistica-dosruedas#portales"
                variant="outline"
                size="large"
                className="w-full sm:w-auto text-sm justify-between border-white/30 text-white hover:bg-white/10"
                onClick={() =>
                  trackAnalytics.ctaClick('home_logistica_panel_cta', 'Ingresar al Panel Comercial')
                }
              >
                <span>Ingresar al Panel Comercial</span>
              </CTANestedPill>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
