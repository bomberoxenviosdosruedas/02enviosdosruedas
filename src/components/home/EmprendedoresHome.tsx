'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { Building2, ShoppingBag, Landmark, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function EmprendedoresHome() {
  const reduceMotion = useReducedMotion();

  const descriptionText = "Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.";
  const words = descriptionText.split(" ");

  const partners = [
    'TOY PIOLA JUGUETERÍA', 'AMA & POLA', 'DROPIX 3D', 'EL CÓNDOR',
    'STARCEL', 'URBANCOW', 'WANCA', 'CATALINA INDUMENTARIA', 'ENVASES 3G', 'LA PERI'
  ];

  // Spring transition configs
  const springTransition = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const snappySpring = { type: 'spring' as const, stiffness: 300, damping: 25 };

  // Orchestrated section entrance variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springTransition,
    },
  };

  const wordContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariant: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="emprendedores-home"
      className="py-32 md:py-48 bg-[#052C87] relative overflow-hidden text-white border-y border-white/10"
    >
      {/* Background Decorative Asymmetric Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-yellow-500/5 rounded-full blur-[150px] pointer-events-none"
        animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={sectionVariants}
      >

        {/* Section Header - Editorial Split with Inline Typography Badge */}
        <motion.div className="max-w-6xl mb-24 space-y-6 text-left" variants={itemVariants}>
          <span className="px-4 py-1.5 bg-brand-blue-50/5 text-brand-yellow-500 border border-brand-yellow-500/20 rounded-full text-xs font-bold tracking-widest inline-block uppercase shadow-sm font-subheading">
            Socio Estratégico Local
          </span>

          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left max-w-5xl">
            Potenciamos tu{' '}
            <span
              className="inline-flex items-center justify-center w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 rounded-full align-middle bg-gradient-to-r from-brand-yellow-500 to-brand-yellow-400 mx-2 border border-brand-yellow-500 shadow-md text-brand-blue-900 font-display text-base sm:text-xl font-bold uppercase transition-transform duration-500 hover:scale-105"
              role="img"
              aria-label="Envíos DosRuedas"
            >
              MDQ
            </span>{' '}
            Marca en Mar del Plata
          </h2>

          <motion.div className="pt-2" variants={wordContainerVariants}>
            <p className="text-brand-blue-200 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-medium tracking-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="inline-block mr-1.5"
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

          <div className="h-[2px] w-24 bg-brand-yellow-500 rounded-full pt-1" />
        </motion.div>

        {/* Solutions Cards Grid: Asymmetric Bento Layout with Double-Bezel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto lg:auto-rows-[340px] grid-flow-row-dense">
          
          {/* Card 1: PyMEs (E-Commerce) - lg:col-span-7 lg:row-span-2 (Dark Navy Card with Double-Layered Glass Shell) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 lg:row-span-2 p-3 sm:p-4 rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#FFF12E]/40 hover:shadow-glow-yellow transition-all duration-300 group overflow-hidden flex flex-col cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
          >
            <div className="rounded-[20px] bg-[#052C87] p-6 sm:p-8 border border-white/10 flex flex-col justify-between h-full relative overflow-hidden text-left flex-1">
              {/* Subtle Radial Glow */}
              <motion.div
                className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-yellow-500/10 blur-3xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
              />

              {/* Watermark Background Icon */}
              <motion.div
                className="absolute right-4 bottom-4 text-white opacity-[0.03] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              >
                <Landmark className="w-44 h-44" />
              </motion.div>

              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: snappySpring }}
                  >
                    <Landmark className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-ink text-brand-yellow-500 px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-yellow-500/30">
                    EMPRENDEDORES
                  </span>
                </div>

                <div className="space-y-2">
                  <motion.h3
                    className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white group-hover:text-brand-yellow-500 transition-colors"
                    whileHover={reduceMotion ? undefined : { x: 4, transition: snappySpring }}
                  >
                    Logística E-Commerce
                  </motion.h3>
                  <p className="text-brand-blue-200 text-sm leading-relaxed font-sans">
                    Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {['Soporte comercial dedicado vía WhatsApp', 'Entregas contrareembolso integradas sin cargo extra', 'Rastreo digital transparente para tus clientes'].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs sm:text-sm text-white font-sans"
                    >
                      <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 relative z-10 flex justify-end">
                <Link
                  href="/servicios/plan-emprendedores"
                  className="inline-flex items-center justify-between rounded-full min-h-[52px] px-8 py-3.5 bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading text-base font-bold uppercase tracking-wider shadow-glow-yellow transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                >
                  <span>Conocer más</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0950F6]/15 text-[#0950F6] ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MercadoLibre Flex - lg:col-span-5 lg:row-span-1 (Yellow Card) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:row-span-1 double-bezel-outer p-2 rounded-2xl bg-brand-yellow-500/10 border border-brand-yellow-500/20 hover:border-brand-blue-700/30 hover:bg-brand-yellow-500/15 hover:shadow-[0_20px_40px_-15px_rgba(255,236,1,0.15)] group overflow-hidden flex flex-col cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
          >
            <div className="double-bezel-inner bg-gradient-to-br from-brand-yellow-500 to-brand-yellow-400 p-6 sm:p-8 rounded-xl border border-brand-yellow-500/20 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-blue-900 flex-1">
              {/* Subtle Radial Glow */}
              <motion.div
                className="absolute bottom-0 right-0 w-36 h-36 rounded-full bg-white/20 blur-2xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
              />

              {/* Watermark Background Icon */}
              <motion.div
                className="absolute right-4 bottom-4 text-brand-blue-900 opacity-[0.04] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, -2, 2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              >
                <ShoppingBag className="w-32 h-32" />
              </motion.div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-blue-700 text-white rounded-xl shadow-[2px_2px_0px_rgba(0,39,124,0.4)]"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: snappySpring }}
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-blue-900 text-white px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue-700/30">
                    MERCADOLIBRE
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-950">
                    Envíos Flex Meli
                  </h3>
                  <p className="text-brand-blue-950 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                    Socio logístico homologado para tus envíos rápidos en el día. Recolección gratis en tu local y entrega garantizada dentro del SLA establecido.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-blue-900/10 relative z-10 flex justify-end">
                <Link
                  href="/servicios/enviosflex"
                  className="cta-nested-pill bg-brand-blue-700 text-white px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full flex items-center gap-2 shadow-md hover:bg-brand-blue-800"
                >
                  <span>Configurar Flex</span>
                  <span className="cta-nested-icon bg-white/10 w-6 h-6 rounded-full flex items-center justify-center">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Corporativos (White Card) - lg:col-span-5 lg:row-span-1 */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 lg:row-span-1 double-bezel-outer p-2 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100 hover:border-brand-blue-300 hover:shadow-antigravity-deep group overflow-hidden flex flex-col cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -6, transition: snappySpring }}
          >
            <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full relative overflow-hidden text-left text-brand-ink flex-1">
              {/* Subtle Radial Glow */}
              <motion.div
                className="absolute bottom-0 right-0 w-36 h-36 rounded-full bg-brand-blue-500/5 blur-2xl pointer-events-none"
                animate={reduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
              />

              {/* Watermark Background Icon */}
              <motion.div
                className="absolute right-4 bottom-4 text-brand-blue-700 opacity-[0.02] pointer-events-none select-none"
                animate={reduceMotion ? {} : { rotate: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
              >
                <Building2 className="w-32 h-32" />
              </motion.div>

              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start">
                  <motion.div
                    className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-xl shadow-[2px_2px_0px_var(--color-brand-blue-700)]"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: snappySpring }}
                  >
                    <Building2 className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-bold tracking-widest bg-brand-blue-50 text-brand-blue-700 px-3 py-1.5 rounded-lg uppercase font-subheading border border-brand-blue-100">
                    CORPORATIVO
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue-700 group-hover:text-brand-blue-900 transition-colors">
                    Soluciones Corporativas
                  </h3>
                  <p className="text-brand-ink/75 text-xs sm:text-sm leading-relaxed font-sans">
                    Soporte a gran escala con facturación mensual, ruteos especiales para grandes volúmenes y entregas express coordinadas en Mar del Plata.
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-blue-100 relative z-10 flex justify-end">
                <Link
                  href="/contacto"
                  className="cta-nested-pill bg-brand-yellow-500 text-brand-blue-900 px-6 py-2.5 text-xs font-bold tracking-wider font-subheading rounded-full flex items-center gap-2 shadow-sm hover:bg-brand-yellow-400"
                >
                  <span>Abrir Cuenta Corriente</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 w-6 h-6 rounded-full flex items-center justify-center">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Marquee of Local Partners - GPU Hardware Accelerated Infinite Scroll */}
        <motion.div
          variants={itemVariants}
          className="mt-24 pt-12 border-t border-brand-blue-500/10"
        >
          <p className="text-center font-subheading text-xs tracking-widest text-brand-blue-200 mb-6 uppercase">
            Marcas locales que confían en nosotros
          </p>
          <div
            className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          >
            <div className="flex gap-16 w-max animate-logos-scroll hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {/* Set 1 */}
              <div className="flex gap-16 items-center">
                {partners.map((partner, index) => (
                  <span
                    key={index}
                    className="font-display text-2xl tracking-wider text-brand-blue-200 uppercase cursor-default hover:text-brand-yellow-500 hover:scale-105 transition-all duration-300"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              {/* Set 2 (for infinite continuous loop) */}
              <div className="flex gap-16 items-center" aria-hidden="true">
                {partners.map((partner, index) => (
                  <span
                    key={`dup-${index}`}
                    className="font-display text-2xl tracking-wider text-brand-blue-200 uppercase cursor-default hover:text-brand-yellow-500 hover:scale-105 transition-all duration-300"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}