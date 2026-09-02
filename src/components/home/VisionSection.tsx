'use client';

import React from 'react';
import { motion, useReducedMotion, useMotionValue, useTransform, animate, type Variants } from 'motion/react';
import { Clock, ShieldCheck, Users, Truck } from 'lucide-react';

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
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);

  return (
    <motion.span
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
      {rounded}
    </motion.span>
  );
}

export default function VisionSection() {
  const reduceMotion = useReducedMotion();

  // Spring transition configs
  const springConfig = { type: 'spring' as const, stiffness: 100, damping: 20 };
  const springConfigCard = { type: 'spring' as const, stiffness: 300, damping: 25 };

  // Container variants with orchestrated stagger
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section
      id="vision-section"
      className="py-24 bg-[#F8FAFC] relative z-10 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Information Block */}
          <motion.div className="lg:col-span-6 space-y-8" variants={itemVariants}>
            <motion.span
              className="px-4 py-1.5 bg-[#FFF12E]/20 text-[#0950F6] rounded-full text-xs font-subheading font-bold tracking-widest inline-block border border-[#FFF12E] uppercase cursor-default shadow-glow-yellow"
              whileHover={reduceMotion ? undefined : { scale: 1.03, transition: springConfigCard }}
            >
              Partner Logístico Especializado
            </motion.span>

            <motion.h2
              className="kinetic-font-stretch text-[#0950F6] text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.98] text-left inline-block"
            >
              CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA
            </motion.h2>

            <motion.p
              className="text-brand-ink/85 text-base sm:text-lg leading-relaxed font-sans max-w-prose font-medium"
            >
              Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con flota propia y tarifas transparentes.
            </motion.p>

            <motion.div className="space-y-5 pt-4" variants={itemVariants}>
              {/* Feature 1 */}
              <motion.div
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-blue-50/70 border border-transparent hover:border-brand-blue-100 transition-colors group cursor-default"
                whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigCard }}
              >
                <motion.div
                  className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-xl shrink-0 border border-brand-yellow-400 shadow-xs"
                  whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: 6, transition: springConfigCard }}
                >
                  <Clock className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none mb-2 font-bold">
                    Entregas a Tiempo
                  </h3>
                  <p className="text-sm text-brand-ink/75 font-sans leading-relaxed">
                    Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada en Mar del Plata.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="flex gap-4 items-start p-4 rounded-xl hover:bg-brand-blue-50/70 border border-transparent hover:border-brand-blue-100 transition-colors group cursor-default"
                whileHover={reduceMotion ? undefined : { x: 4, transition: springConfigCard }}
              >
                <motion.div
                  className="p-3 bg-brand-yellow-500 text-brand-blue-900 rounded-xl shrink-0 border border-brand-yellow-400 shadow-xs"
                  whileHover={reduceMotion ? undefined : { scale: 1.08, rotate: -6, transition: springConfigCard }}
                >
                  <ShieldCheck className="h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-subheading uppercase tracking-wider text-brand-blue-700 leading-none mb-2 font-bold">
                    Envíos Seguros
                  </h3>
                  <p className="text-sm text-brand-ink/75 font-sans leading-relaxed">
                    Protección total de tus paquetes. Despachos con custodia digital y confirmación de entrega en el acto.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Stats Deck Block (Asymmetrical Bento Grid) */}
          <motion.div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6" variants={itemVariants}>

            {/* Main Bento Card: Envíos Realizados */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="sm:col-span-2 p-3 sm:p-4 rounded-[28px] bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl hover:shadow-glow-yellow transition-shadow group cursor-default"
            >
              <div className="bg-[#0950F6] rounded-[20px] p-6 sm:p-8 text-white relative overflow-hidden h-full flex flex-col justify-between border border-white/20">
                <div className="flex justify-between items-start mb-12">
                  <motion.div
                    className="p-3 bg-[#FFF12E] text-[#0950F6] border border-[#FFF12E] rounded-xl shadow-glow-yellow"
                    whileHover={reduceMotion ? undefined : { scale: 1.05, x: 4, transition: springConfigCard }}
                  >
                    <Truck className="h-6 w-6" />
                  </motion.div>
                  <span className="text-[10px] font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg bg-[#052C87] text-[#FFF12E] font-bold border border-[#FFF12E]/30">
                    MAR DEL PLATA 2026
                  </span>
                </div>
                <div>
                  <h3 className="text-7xl lg:text-8xl font-mono tracking-tighter font-bold uppercase leading-none mb-3 tabular-nums text-white">
                    <CounterMetric value={50} prefix="+" suffix="K" />
                  </h3>
                  <p className="text-sm text-white/90 font-sans uppercase tracking-wider leading-relaxed font-medium">
                    Envíos y entregas realizadas con éxito en toda la región
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Paquetes Extraviados (Double Bezel Glass Container) */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="p-2 sm:p-2.5 rounded-[28px] bg-white/40 backdrop-blur-md border border-white/50 shadow-xl hover:shadow-glow-blue transition-shadow group cursor-default"
            >
              <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-blue-100 shadow-sm flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-blue-50 text-[#0950F6] group-hover:bg-[#0950F6] group-hover:text-[#FFF12E] border border-blue-100 transition-colors shadow-xs"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}
                  >
                    <ShieldCheck className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-[#0950F6] leading-none mb-2 tabular-nums">
                    0
                  </h3>
                  <p className="text-[11px] text-[#0950F6]/80 font-sans uppercase tracking-widest font-bold">
                    Paquetes extraviados
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3: Emprendedores Confían (Double Bezel Glass Container) */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="p-2 sm:p-2.5 rounded-[28px] bg-white/40 backdrop-blur-md border border-white/50 shadow-xl hover:shadow-glow-blue transition-shadow group cursor-default"
            >
              <div className="bg-white p-6 sm:p-8 rounded-[20px] border border-blue-100 shadow-sm flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-blue-50 text-[#0950F6] group-hover:bg-[#0950F6] group-hover:text-[#FFF12E] border border-blue-100 transition-colors shadow-xs"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}
                  >
                    <Users className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-[#0950F6] leading-none mb-2 tabular-nums">
                    <CounterMetric value={50} prefix="+" />
                  </h3>
                  <p className="text-[11px] text-[#0950F6]/80 font-sans uppercase tracking-widest font-bold">
                    Emprendedores confían
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}