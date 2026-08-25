'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
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
  const [count, setCount] = useState(reduceMotion ? value : 0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (reduceMotion || !isInView) {
      if (isInView) setCount(value);
      return;
    }

    const duration = 1200; // ms
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * value);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(value);
      }
    };

    const frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, reduceMotion]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: '-50px' }}
      className="tabular-nums font-mono"
    >
      {prefix}
      {count}
      {suffix}
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
      className="py-24 bg-white relative z-10 overflow-hidden"
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
              className="px-4 py-1.5 bg-brand-yellow-500/15 text-brand-blue-700 rounded-full text-xs font-subheading font-bold tracking-widest inline-block border border-brand-yellow-500 uppercase cursor-default shadow-xs"
              whileHover={reduceMotion ? undefined : { scale: 1.03, transition: springConfigCard }}
            >
              Partner Logístico Especializado
            </motion.span>

            <motion.h2
              className="kinetic-font-stretch text-brand-blue-700 text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.9] text-left inline-block"
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
              className="sm:col-span-2 p-8 bg-brand-blue-700 border-2 border-brand-blue-600 rounded-2xl shadow-elevated hover:shadow-antigravity-deep transition-shadow group cursor-default"
            >
              <div className="text-white relative overflow-hidden h-full flex flex-col justify-between">
                <div className="flex justify-between items-start mb-12">
                  <motion.div
                    className="p-3 bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-400 rounded-xl shadow-xs"
                    whileHover={reduceMotion ? undefined : { scale: 1.05, x: 4, transition: springConfigCard }}
                  >
                    <Truck className="h-6 w-6" />
                  </motion.div>
                  <span className="text-[10px] font-subheading tracking-widest uppercase px-3 py-1.5 rounded-lg bg-brand-blue-950 text-brand-yellow-500 font-bold border border-brand-yellow-500/30">
                    MAR DEL PLATA 2026
                  </span>
                </div>
                <div>
                  <h3 className="text-7xl lg:text-8xl font-mono tracking-tighter font-bold uppercase leading-none mb-3 tabular-nums text-white">
                    <CounterMetric value={50} prefix="+" suffix="K" />
                  </h3>
                  <p className="text-sm text-brand-blue-100 font-sans uppercase tracking-wider leading-relaxed font-medium">
                    Envíos y entregas realizadas con éxito en toda la región
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Paquetes Extraviados (Double Bezel - Light Style) */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover:shadow-antigravity-deep group transition-shadow cursor-default"
            >
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 border border-brand-blue-100 transition-colors shadow-xs"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}
                  >
                    <ShieldCheck className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-brand-blue-700 leading-none mb-2 tabular-nums">
                    0
                  </h3>
                  <p className="text-[11px] text-brand-blue-700/80 font-sans uppercase tracking-widest font-bold">
                    Paquetes extraviados
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 3: Emprendedores Confían (Double Bezel - Light Style) */}
            <motion.div
              whileHover={reduceMotion ? undefined : { y: -6, transition: springConfigCard }}
              className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl hover:shadow-antigravity-deep group transition-shadow cursor-default"
            >
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-6">
                  <motion.div
                    className="p-3 rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 border border-brand-blue-100 transition-colors shadow-xs"
                    whileHover={reduceMotion ? undefined : { scale: 1.08, transition: springConfigCard }}
                  >
                    <Users className="h-5 w-5" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-6xl font-mono font-bold tracking-tighter text-brand-blue-700 leading-none mb-2 tabular-nums">
                    <CounterMetric value={50} prefix="+" />
                  </h3>
                  <p className="text-[11px] text-brand-blue-700/80 font-sans uppercase tracking-widest font-bold">
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