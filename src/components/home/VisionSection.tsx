'use client';

import React from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform, animate, type Variants } from 'motion/react';
import { Clock, ShieldCheck, Users, Truck } from 'lucide-react';

// Fix ESLint: set-state-in-effect -> useSyncExternalStore para hidratación sin cascada
function useIsClient() {
  return React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

function CounterMetric({
  value,
  prefix = '',
  suffix = '',
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const reduceMotion = useReducedMotion();
  const isClient = useIsClient();
  const count = useMotionValue(reduceMotion ? value : 0);
  const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);
  const finalString = `${prefix}${value}${suffix}`;

  return (
    <>
      <span className="sr-only">{finalString}</span>
      <motion.span
        aria-hidden="true"
        onViewportEnter={() => {
          if (reduceMotion) {
            count.set(value);
          } else {
            animate(count, value, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
          }
        }}
        viewport={{ once: true, margin: '-50px' }}
        className="tabular-nums font-mono"
      >
        {isClient ? rounded : finalString}
      </motion.span>
    </>
  );
}

export default function VisionSection() {
  const reduceMotion = useReducedMotion();

  const springConfig = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const springConfigCard = { type: 'spring' as const, stiffness: 300, damping: 25 };

  const containerVariants: Variants = {
    hidden: { opacity: 0.95, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0.01 } : springConfig,
    },
  };

  return (
    <section id="vision-section" className="py-24 bg-white relative z-10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <motion.div className="lg:col-span-6 space-y-8" variants={itemVariants}>
            <motion.span
              className="px-4 py-1.5 bg-brand-yellow-400/20 text-brand-blue-700 rounded-full text-xs font-subheading font-bold tracking-widest inline-block border border-brand-yellow-400 uppercase cursor-default shadow-[0_0_25px_rgba(255,241,46,0.45)]"
              whileHover={reduceMotion ? undefined : { scale: 1.03, transition: springConfigCard }}
            >
              Partner Logistico Especializado
            </motion.span>

            <motion.h2 className="kinetic-font-stretch text-brand-blue-700 text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.98] text-left inline-block">
              CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA
            </motion.h2>

            <motion.p className="text-brand-blue-700/85 text-base sm:text-lg leading-relaxed font-sans max-w-prose font-medium">
              Nos especializamos en la distribucion de ultima milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo record con flota propia y tarifas transparentes.
            </motion.p>

            <motion.div className="space-y-5 pt-4" variants={itemVariants}>
              <motion.div
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-blue-50/70 border border-transparent hover:border-brand-blue-100 transition-colors group cursor-default"
                whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigCard }}
              >
                <motion.div
                  className="p-3 bg-brand-yellow-500 text-brand-blue-700 rounded-xl shrink-0 border border-brand-yellow-400 shadow-sm"
                  whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 6, transition: springConfigCard }}
                >
                  <Clock className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none mb-2 font-bold">Entregas a Tiempo</h3>
                  <p className="text-sm text-brand-blue-700/75 font-sans leading-relaxed">Puntualidad garantizada en cada envio. Optimizamos cada ruta mediante geolocalizacion avanzada en Mar del Plata.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-blue-50/70 border border-transparent hover:border-brand-blue-100 transition-colors group cursor-default"
                whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigCard }}
              >
                <motion.div
                  className="p-3 bg-brand-yellow-500 text-brand-blue-700 rounded-xl shrink-0 border border-brand-yellow-400 shadow-sm"
                  whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -6, transition: springConfigCard }}
                >
                  <ShieldCheck className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none mb-2 font-bold">Envios Seguros</h3>
                  <p className="text-sm text-brand-blue-700/75 font-sans leading-relaxed">Proteccion total de tus paquetes. Despachos con custodia digital y confirmacion de entrega en el acto.</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats Deck - Double-Bezel oficial */}
          <motion.div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>
            {/* Main Bento Card */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="sm:col-span-2 rounded-[32px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-[0_25px_50px_-12px_rgba(9,80,246,0.15)] hover:shadow-[0_0_28px_rgba(255,236,1,0.45)] transition-shadow group cursor-default"
            >
              <div className="bg-brand-blue-700 rounded-[20px] p-6 sm:p-8 text-white relative overflow-hidden h-full flex flex-col justify-between border border-white/20">
                <div className="flex justify-between items-start mb-12">
                  <motion.div className="p-3 bg-brand-yellow-400 text-brand-blue-700 border border-brand-yellow-400 rounded-xl shadow-[0_0_25px_rgba(255,241,46,0.45)]" whileHover={reduceMotion ? undefined : { scale: 1.05, x: 4, transition: springConfigCard }}>
                    <Truck className="h-6 w-6" />
                  </motion.div>
                  <span className="text-2xs font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-blue-700 text-brand-yellow-400 font-bold border border-brand-yellow-400/30">
                    MAR DEL PLATA 2026
                  </span>
                </div>
                <div>
                  <h3 className="text-7xl lg:text-8xl font-mono tracking-tighter font-bold uppercase leading-none mb-3 tabular-nums text-white">
                    <CounterMetric value={50} prefix="+" suffix="K" />
                  </h3>
                  <p className="text-sm text-white/90 font-sans uppercase tracking-wider leading-relaxed font-medium">Envios y entregas realizadas con exito en toda la region</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="rounded-[32px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] transition-shadow group cursor-default"
            >
              <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-brand-blue-100 shadow-[inset_0_2px_8px_rgba(9,80,246,0.06)] flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-400 border border-brand-blue-100 transition-colors shadow-sm" whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}>
                    <ShieldCheck className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-brand-blue-700 leading-none mb-2 tabular-nums">0</h3>
                  <p className="text-2xs text-brand-blue-700/80 font-sans uppercase tracking-widest font-bold">Paquetes extraviados</p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="rounded-[32px] bg-brand-blue-50/80 border border-brand-blue-100 p-2 shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] transition-shadow group cursor-default"
            >
              <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-brand-blue-100 shadow-[inset_0_2px_8px_rgba(9,80,246,0.06)] flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-400 border border-brand-blue-100 transition-colors shadow-sm" whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}>
                    <Users className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-brand-blue-700 leading-none mb-2 tabular-nums">
                    <CounterMetric value={50} prefix="+" />
                  </h3>
                  <p className="text-2xs text-brand-blue-700/80 font-sans uppercase tracking-widest font-bold">Emprendedores confian</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
