'use client';

import React, { useState, useEffect } from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, ShieldCheck, Sparkles, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    author: "Luciana M.",
    role: "E-Commerce Indumentaria · Güemes",
    text: "Excelente servicio en Mar del Plata. Despachamos todos los días desde nuestro local y llegan siempre en horario pactado.",
    rating: 5,
    date: "Hace 2 días",
  },
  {
    author: "Martín G.",
    role: "Tienda de Tecnología · Centro",
    text: "La mejor logística de MDQ. Desde que coordinamos por WhatsApp con Friuli 1972 no tuvimos nunca un paquete demorado.",
    rating: 5,
    date: "Hace 5 días",
  },
  {
    author: "Sofía R.",
    role: "Emprendimiento Gastronómico · Chauvín",
    text: "Flota propia impecable y repartidores con la mejor onda. Cuidan los paquetes y atienden al cliente de diez.",
    rating: 5,
    date: "Hace 1 semana",
  },
];

export default function AboutHero() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="about-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-brand-blue-700 to-brand-blue-600 text-brand-white-50 border-b border-brand-blue-500/20"
    >
      {/* Pure Vector & Dynamic Procedural Background (0 KB static images) */}
      <HeroProceduralBackground variant="default" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Badge in Bebas Neue */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-brand-blue-900/80 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md">
              <Award className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>LOGÍSTICA SOBERANA · MAR DEL PLATA</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-display uppercase tracking-tight leading-[0.92] text-brand-white-50">
              <span className="block">LÍDERES EN</span>
              <span className="block">LOGÍSTICA DE</span>
              <span className="block text-brand-yellow-500 italic drop-shadow-[0_2px_16px_rgba(255,236,1,0.35)]">
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

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-2xl sm:text-3xl text-brand-yellow-500 tabular-nums">
                  +15
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100 mt-0.5">
                  Años en MDQ
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-2xl sm:text-3xl text-brand-yellow-500 tabular-nums">
                  100%
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100 mt-0.5">
                  Flota Propia
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm text-center">
                <span className="block font-display text-2xl sm:text-3xl text-brand-yellow-500 tabular-nums">
                  5.0 ★
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-brand-blue-100 mt-0.5">
                  Google Reviews
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Reputation Card & Live Reviews Widget (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="double-bezel-outer bg-brand-blue-50/95 border border-brand-blue-100 p-2 rounded-2xl shadow-2xl">
              <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue-700 space-y-6 relative overflow-hidden">
                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-blue-700 via-brand-blue-500 to-brand-yellow-500" />

                {/* Rating header */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-brand-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-yellow-500 text-brand-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs font-subheading font-bold bg-brand-blue-700 text-brand-yellow-500 px-3 py-1 rounded-full tracking-wider flex items-center gap-1">
                    <span>GOOGLE REVIEWS</span>
                    <span className="tabular-nums font-mono">5.0 / 5</span>
                  </span>
                </div>

                {/* Reputation title */}
                <div>
                  <h4 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue-700 leading-none">
                    CONFIANZA LOCAL
                  </h4>
                  <p className="text-xs text-brand-blue-400 font-subheading uppercase tracking-wider mt-1 font-bold">
                    +15 AÑOS DE EXPERIENCIA EN CALLES DE MDQ
                  </p>
                </div>

                {/* Live Google Reviews Carousel */}
                <div className="p-4 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100 relative min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <p className="font-sans text-xs sm:text-sm text-brand-ink italic leading-relaxed">
                        &ldquo;{REVIEWS[currentReview].text}&rdquo;
                      </p>
                      <div className="flex justify-between items-center pt-1 text-[11px] font-sans">
                        <span className="font-bold text-brand-blue-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow-500" />
                          {REVIEWS[currentReview].author}
                        </span>
                        <span className="text-brand-blue-400">{REVIEWS[currentReview].role}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel pagination */}
                  <div className="flex justify-between items-center pt-3 border-t border-brand-blue-100/70 mt-2">
                    <div className="flex gap-1.5">
                      {REVIEWS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentReview(idx)}
                          aria-label={`Ver opinión ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === currentReview
                              ? 'w-6 bg-brand-blue-700'
                              : 'w-2 bg-brand-blue-200 hover:bg-brand-blue-400'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setCurrentReview((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
                        aria-label="Opinión anterior"
                        className="p-1 rounded-md hover:bg-white text-brand-blue-700 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentReview((prev) => (prev + 1) % REVIEWS.length)}
                        aria-label="Siguiente opinión"
                        className="p-1 rounded-md hover:bg-white text-brand-blue-700 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-brand-ink/80 leading-relaxed font-sans">
                  Nuestros clientes avalan la excelencia operativa. Controlamos cada despacho desde el centro de distribución en <strong className="text-brand-blue-700">Friuli 1972</strong> con seguimiento constante.
                </p>

                {/* Trust anchors footer */}
                <div className="pt-4 border-t border-brand-blue-50 flex justify-between items-center text-xs">
                  <span className="font-subheading text-brand-blue-700 font-bold flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase">
                    <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                    FLOTA 100% PROPIA
                  </span>
                  <span className="font-subheading text-brand-blue-500 flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase font-bold">
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
