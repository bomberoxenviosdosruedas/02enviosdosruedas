'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageSquare, FileText, Shield, Truck } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      id="cta-final"
      className="py-16 md:py-24 lg:py-32 bg-brand-blue-700 relative z-10 overflow-hidden"
    >
      {/* Subtle ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,236,1,0.06)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,236,1,0.04),transparent_35%)]" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,236,1,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,236,1,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
        }}
      >
        {/* Centered White Double Bezel Card */}
        <div className="double-bezel-outer bg-white/5 border border-white/10 hover:border-brand-yellow/30 transition-all duration-500">
          <div className="double-bezel-inner bg-white p-8 sm:p-12 lg:p-16 border border-brand-blue-50 shadow-elevated relative overflow-hidden">
            {/* Subtle grid pattern background inside card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-8 text-center">

              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-subheading tracking-widest bg-brand-yellow/20 text-brand-blue border border-brand-yellow uppercase font-bold shadow-md">
                  SOLUCIONES ESCALABLES 2026
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-brand-blue text-5xl sm:text-6xl lg:text-7xl font-display uppercase leading-tight max-w-3xl mx-auto"
              >
                ¿Listo para escalar la logística de tu e-commerce <span className="text-brand-yellow">en Mar del Plata</span>?
              </motion.h2>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-brand-blue-500 text-lg sm:text-xl max-w-2xl mx-auto font-sans leading-relaxed font-medium"
              >
                Olvidate de la gestión de paquetes y enfocaté en vender más. Dejá la distribución urbana en manos de expertos.
              </motion.p>

              {/* Dual CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
              >
                {/* Primary: WhatsApp - Green Nested Pill */}
                <motion.a
                  href="https://wa.me/542236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-link"
                  aria-label="Contactar por WhatsApp"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-subheading tracking-wider text-xl uppercase cta-nested-pill border-2 border-green-400 shadow-[0_0_30px_rgba(22,163,74,0.3)] flex items-center justify-between cursor-pointer font-bold transition-all duration-300"
                >
                  <span className="relative z-10">Contactanos por WhatsApp</span>
                  <span className="cta-nested-icon relative z-10 w-10 h-10 ml-4 flex items-center justify-center rounded-full shrink-0 bg-green-700/20 text-white transition-all duration-300 group-hover/wa:bg-green-700 group-hover/wa:translate-x-1">
                    <MessageSquare className="h-5 w-5 fill-current shrink-0" />
                  </span>
                </motion.a>

                {/* Secondary: Ver Tarifas - White/Blue Nested Pill */}
                <Link
                  href="/cotizar/lowcost"
                  id="cta-rates-link"
                  aria-label="Ver tarifas de envíos 2026"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 bg-white hover:bg-brand-blue-50 border-2 border-brand-blue text-brand-blue font-subheading tracking-wider text-xl uppercase cta-nested-pill shadow-[3px_3px_0px_rgba(6,54,165,0.15)] flex items-center justify-between cursor-pointer font-bold active:scale-[0.98] active:translate-y-[1px] transition-all"
                >
                  <span className="relative z-10">Ver tarifas 2026</span>
                  <span className="cta-nested-icon relative z-10 w-10 h-10 ml-4 flex items-center justify-center rounded-full shrink-0 bg-brand-blue/10 text-brand-blue transition-all duration-300 group-hover/btn:bg-brand-blue group-hover/btn:text-white group-hover/btn:translate-x-1">
                    <FileText className="h-5 w-5 shrink-0" />
                  </span>
                </Link>
              </motion.div>

              {/* Trust indicators row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-brand-blue-50 w-full max-w-md"
              >
                <div className="flex items-center gap-2 text-sm text-brand-blue-400 font-sans">
                  <Shield className="h-4 w-4 text-brand-yellow" />
                  <span>Pago contra entrega</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-blue-400 font-sans">
                  <Truck className="h-4 w-4 text-brand-yellow" />
                  <span>Retiro gratis a domicilio</span>
                </div>
              </motion.div>

              {/* Footer stat line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-xs font-mono tracking-widest text-brand-blue-400 font-bold uppercase pt-4 leading-none"
              >
                Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}