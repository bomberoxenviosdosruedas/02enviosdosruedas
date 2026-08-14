'use client';

import React from 'react';
import { motion, useReducedMotion, type Variants, type Transition } from 'motion/react';
import { Star, TrendingUp, Users, HeartHandshake, Quote } from 'lucide-react';

export default function SocialProofSection() {
  const reduceMotion = useReducedMotion();

  const testimonials = [
    {
      text: "Con DosRuedas pasamos de entregar en 48hs a same-day en toda la ciudad. La notificación digital de entrega redujo a cero las consultas de '¿dónde está mi pedido?'.",
      author: "Martín R.",
      role: "E-commerce Indumentaria, Güemes",
    },
    {
      text: "Para nuestros envíos Flex son fundamentales. Cumplen los SLAs a rajatabla y el dashboard de control nos permite gestionar cientos de paquetes sin estrés.",
      author: "Laura G.",
      role: "MercadoLíder Platinum",
    },
    {
      text: "El plan LowCost nos permitió ofrecer envíos económicos a nuestros clientes sin perder profesionalismo. La integración fue súper fácil.",
      author: "Diego F.",
      role: "Dietética Mayorista",
    }
  ];

  // HyperFrames standard spring config
  const springConfig: Transition = { type: 'spring', stiffness: 100, damping: 20 };
  const springConfigCard: Transition = { type: 'spring', stiffness: 300, damping: 25 };

  // Container variants with orchestrated stagger (capped at ~500ms total)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const metricCardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="social-proof" className="py-24 bg-brand-blue-50 relative z-10 border-y border-brand-blue-100">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="text-center max-w-3xl mx-auto mb-16" variants={itemVariants}>
          <motion.span
            className="px-4 py-1.5 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-yellow uppercase shadow-sm mb-4"
            whileHover={{ scale: 1.02, transition: springConfigCard }}
          >
            CONFIANZA COMPROBADA
          </motion.span>
          <motion.h2 className="text-brand-blue text-5xl sm:text-6xl font-display uppercase tracking-tight leading-[0.9]">
            La logística que elige Mar del Plata
          </motion.h2>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          <motion.div
            variants={metricCardVariants}
            whileHover={{ y: -6, transition: springConfigCard }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep"
          >
            <div className="double-bezel-inner bg-white p-8 rounded-xl border border-brand-blue-50/50 flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 12, transition: springConfigCard }}
                className="mb-4 p-3 bg-brand-yellow/20 rounded-xl border border-brand-yellow/30"
              >
                <Users className="h-8 w-8 text-brand-blue-700" />
              </motion.div>
              <motion.h3 className="text-5xl sm:text-6xl font-mono font-bold text-brand-blue-700 mb-2 tabular-nums">
                +100
              </motion.h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest text-sm font-bold">Flota Propia en Calle</p>
            </div>
          </motion.div>

          <motion.div
            variants={metricCardVariants}
            whileHover={{ y: -6, transition: springConfigCard }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep"
          >
            <div className="double-bezel-inner bg-white p-8 rounded-xl border border-brand-blue-50/50 flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, transition: springConfigCard }}
                className="mb-4 p-3 bg-brand-yellow/20 rounded-xl border border-brand-yellow/30"
              >
                <HeartHandshake className="h-8 w-8 text-brand-blue-700" />
              </motion.div>
              <motion.h3 className="text-5xl sm:text-6xl font-mono font-bold text-brand-blue-700 mb-2 tabular-nums">
                99.8%
              </motion.h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest text-sm font-bold">Efectividad de Entrega</p>
            </div>
          </motion.div>

          <motion.div
            variants={metricCardVariants}
            whileHover={{ y: -6, transition: springConfigCard }}
            className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep"
          >
            <div className="double-bezel-inner bg-white p-8 rounded-xl border border-brand-blue-50/50 flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -12, transition: springConfigCard }}
                className="mb-4 p-3 bg-brand-yellow/20 rounded-xl border border-brand-yellow/30"
              >
                <TrendingUp className="h-8 w-8 text-brand-blue-700" />
              </motion.div>
              <motion.h3 className="text-5xl sm:text-6xl font-mono font-bold text-brand-blue-700 mb-2 tabular-nums">
                +15
              </motion.h3>
              <p className="font-subheading text-brand-blue-500 uppercase tracking-widest text-sm font-bold">Años en Calles de MDQ</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 },
            },
          }}
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, transition: springConfigCard }}
              className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl group shadow-sm hover:shadow-antigravity-deep"
            >
              <div className="double-bezel-inner bg-white p-7 rounded-xl border border-brand-blue-50/50 shadow-sm relative flex flex-col justify-between h-full">
                <motion.div
                  className="absolute top-6 right-6 h-8 w-8 text-brand-yellow-500/30"
                  whileHover={{ rotate: 180, scale: 1.1, transition: springConfigCard }}
                >
                  <Quote className="h-full w-full" />
                </motion.div>
                <div>
                  <motion.div
                    className="flex text-brand-yellow-500 mb-4"
                    whileHover={{ x: 4, transition: springConfigCard }}
                  >
                    {[1,2,3,4,5].map(star => (
                      <motion.span
                        key={star}
                        className="w-4 h-4 fill-current"
                        whileHover={{ scale: 1.2, transition: springConfigCard }}
                      >
                        <Star className="w-full h-full" />
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.p className="text-brand-blue-600 font-sans italic mb-6 text-sm leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </motion.p>
                </div>
                <div className="border-t border-brand-blue-50 pt-4 mt-auto">
                  <motion.p className="font-bold text-brand-blue-700 font-sans text-sm uppercase tracking-wide">
                    {t.author}
                  </motion.p>
                  <p className="text-xs text-brand-blue-400 font-sans">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}