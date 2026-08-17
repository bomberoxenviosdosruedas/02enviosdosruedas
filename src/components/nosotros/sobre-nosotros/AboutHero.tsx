'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, Star, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export default function AboutHero() {
  return (
    <section 
      id="about-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark text-brand-white-50 border-b border-brand-blue-500/20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue-700/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-yellow-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Background illustration overlay */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Envíos DosRuedas Historia y Logística Mar del Plata"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-blue-700/60 to-brand-dark backdrop-blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Badge in Bebas Neue */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-brand-dark/70 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md">
              <Award className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>LOGÍSTICA SOBERANA · MAR DEL PLATA</span>
            </div>

            {/* Monumental Headline with Anton SC */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-[0.95] text-brand-white-50 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2">
              <span>PASIÓN POR LA</span>
              <span className="text-brand-yellow-500 italic drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
                ÚLTIMA MILLA
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-brand-blue-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-2 border-brand-yellow-500">
              Nacimos en las calles de Mar del Plata con una convicción clara: construir un servicio de mensajería y distribución veloz, humano y sin excusas para cada negocio local.
            </p>

            {/* Mission Callout Card (Double Bezel Dark Variant) */}
            <div className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl max-w-xl mx-auto lg:mx-0 shadow-lg">
              <div className="double-bezel-inner bg-white p-5 sm:p-6 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-2">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                  <h3 className="text-xs font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
                    PROPÓSITO OPERATIVO 2026
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-ink/90 leading-relaxed font-sans text-center lg:text-left">
                  Conectamos tiendas online, PyMEs y emprendedores de General Pueyrredón mediante una flota motorizada 100% propia, soporte en tiempo real y cumplimiento estricto de horarios.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Reputation Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl shadow-2xl">
              <div className="double-bezel-inner bg-white p-7 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-6 relative overflow-hidden">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-brand-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-yellow-500 text-brand-blue-700" />
                    ))}
                  </div>
                  <span className="text-xs font-subheading font-bold bg-brand-blue-700 text-brand-yellow-500 px-3 py-1 rounded-full tracking-wider">
                    5.0 / 5.0 REPUTACIÓN
                  </span>
                </div>

                <div>
                  <h4 className="text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-none">
                    CONFIANZA LOCAL
                  </h4>
                  <p className="text-xs text-brand-blue-400 font-subheading uppercase tracking-wider mt-1 font-bold">
                    +15 AÑOS DE EXPERIENCIA EN CALLES DE MDQ
                  </p>
                </div>

                <p className="text-sm text-brand-ink leading-relaxed font-sans">
                  Nuestros clientes avalan la excelencia operativa. Controlamos cada despacho desde el centro de distribución en <strong>Friuli 1972</strong> con seguimiento constante.
                </p>

                <div className="pt-4 border-t border-brand-blue-50 flex justify-between items-center text-xs">
                  <span className="font-subheading text-brand-blue-700 font-bold flex items-center gap-1.5 text-sm tracking-wider uppercase">
                    <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                    FLOTA 100% PROPIA
                  </span>
                  <span className="font-subheading text-brand-blue-500 flex items-center gap-1.5 text-sm tracking-wider uppercase">
                    <MapPin className="h-4 w-4 text-brand-yellow-500" />
                    MAR DEL PLATA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
