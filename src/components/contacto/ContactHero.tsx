'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowUpRight, Clock, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-brand-dark">
      {/* Dynamic Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue-700/30 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-yellow-500/10 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse"
        style={{ animationDelay: '700ms' }}
      />

      {/* Background photography overlay */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Envíos DosRuedas Contacto y Logística Mar del Plata"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-dark/95 via-brand-blue-700/60 to-brand-dark backdrop-blur-[2px]" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle & Value Props (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-brand-yellow-500/40 bg-brand-dark/70 backdrop-blur-md rounded-full shadow-lg w-fit">
              <Mail className="w-4 h-4 text-brand-yellow-500" />
              <span className="font-subheading text-xs tracking-widest uppercase text-brand-white-50 font-bold">
                CANAL COMERCIAL DIRECTO · MAR DEL PLATA
              </span>
            </div>

            {/* Monumental Title */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-brand-white-50 uppercase tracking-tight mb-5 leading-[0.95] drop-shadow-sm">
              HABLAMOS DE <span className="text-brand-yellow-500 italic drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">TU LOGÍSTICA</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-brand-blue-50 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              ¿Buscás optimizar las entregas de tu e-commerce o negocio en Mar del Plata? Diseñamos acuerdos de tarifas por volumen, integración Flex y cadetería prioritaria con respuesta en menos de 2 horas.
            </p>

            {/* Quick Metrics / Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <div className="p-3.5 rounded-xl border border-brand-blue-500/30 bg-brand-dark/60 backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-yellow-500/10 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-brand-yellow-500" />
                </div>
                <div>
                  <span className="block font-display text-sm text-brand-white-50 uppercase">Menos de 2h</span>
                  <span className="block font-sans text-[11px] text-brand-blue-100">Respuesta comercial</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-brand-blue-500/30 bg-brand-dark/60 backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-yellow-500/10 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow-500" />
                </div>
                <div>
                  <span className="block font-display text-sm text-brand-white-50 uppercase">+15 Años</span>
                  <span className="block font-sans text-[11px] text-brand-blue-100">En calles de MDQ</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-brand-blue-500/30 bg-brand-dark/60 backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-yellow-500/10 border border-brand-yellow-500/30 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-brand-yellow-500" />
                </div>
                <div>
                  <span className="block font-display text-sm text-brand-white-50 uppercase">Planes a Medida</span>
                  <span className="block font-sans text-[11px] text-brand-blue-100">PyMEs y Tiendas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Card / Direct Contact Dock (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-5 flex flex-col justify-center w-full"
          >
            <div className="rounded-2xl border border-brand-white-50/15 bg-brand-dark/80 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col w-full hover:border-brand-yellow-500/40 transition-all duration-500">
              
              {/* Header inside card */}
              <div className="p-6 sm:p-7 border-b border-brand-white-50/10 bg-brand-white-50/[0.02]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-yellow-500/15 border border-brand-yellow-500/30">
                      <MessageSquare className="w-5 h-5 text-brand-yellow-500" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl text-brand-white-50 uppercase m-0 tracking-wide">
                        Atención Inmediata
                      </h2>
                      <p className="font-sans text-xs text-brand-blue-100">
                        Equipo operativo y comercial en línea
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/10 border border-brand-yellow-500/30 text-[11px] font-mono text-brand-yellow-500 uppercase font-semibold">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
                    Activo
                  </span>
                </div>
              </div>

              {/* Direct Link Items */}
              <div className="p-6 sm:p-7 space-y-3.5">
                {/* Phone */}
                <a
                  href="tel:+542236602699"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-brand-white-50/[0.04] hover:bg-brand-white-50/[0.08] border border-brand-white-50/10 hover:border-brand-yellow-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-700/80 border border-brand-blue-500/40 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow-500 transition-colors">
                      <Phone className="w-4 h-4 text-brand-white-50 group-hover:text-brand-blue-950 transition-colors" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] uppercase tracking-wider text-brand-blue-200">
                        Llamada Directa
                      </span>
                      <span className="block font-mono text-sm sm:text-base font-bold text-brand-white-50 group-hover:text-brand-yellow-500 transition-colors">
                        +54 223 660-2699
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-blue-200 group-hover:text-brand-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email */}
                <a
                  href="mailto:matiascejas@enviosdosruedas.com"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-brand-white-50/[0.04] hover:bg-brand-white-50/[0.08] border border-brand-white-50/10 hover:border-brand-yellow-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-700/80 border border-brand-blue-500/40 flex items-center justify-center shrink-0 group-hover:bg-brand-yellow-500 transition-colors">
                      <Mail className="w-4 h-4 text-brand-white-50 group-hover:text-brand-blue-950 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-sans text-[10px] uppercase tracking-wider text-brand-blue-200">
                        Email Comercial
                      </span>
                      <span className="block font-sans text-xs sm:text-sm font-medium text-brand-white-50 group-hover:text-brand-yellow-500 transition-colors truncate">
                        matiascejas@enviosdosruedas.com
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-blue-200 group-hover:text-brand-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-brand-white-50/[0.04] border border-brand-white-50/10">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-700/80 border border-brand-blue-500/40 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-brand-yellow-500" />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] uppercase tracking-wider text-brand-blue-200">
                      Hub de Distribución
                    </span>
                    <span className="block font-sans text-xs sm:text-sm font-bold text-brand-white-50">
                      Chauvín, Mar del Plata
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Action WhatsApp CTA Bar */}
              <div className="p-4 sm:p-5 bg-brand-yellow-500/10 border-t border-brand-yellow-500/20">
                <a
                  href="https://wa.me/542236602699?text=Hola%20Envíos%20DosRuedas!%20Quiero%20hacer%20una%20consulta%20comercial%20para%20mi%20negocio."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-base cursor-pointer justify-center"
                >
                  <span>Chatear por WhatsApp</span>
                  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900">
                    →
                  </span>
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
