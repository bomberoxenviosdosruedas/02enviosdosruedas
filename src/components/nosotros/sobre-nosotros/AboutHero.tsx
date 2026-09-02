'use client';

import React, { useState, useEffect } from 'react';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Star, ShieldCheck, Sparkles, MapPin, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
  {
    author: "Sol R.",
    role: "Google Local Guide · Mar del Plata",
    text: "Matías de Envíos DosRuedas se convirtió en mi héroe logístico por segundo año consecutivo. Rapidez, comunicación clara y un embalaje impecable.",
    rating: 5,
    date: "Hace 26 semanas",
  },
  {
    author: "Karen H.",
    role: "Comercio Local · Mar del Plata",
    text: "Excelente servicio, rápidos, muy atentos, resolvieron mi problema con la mejor predisposición. Los recomiendo ampliamente.",
    rating: 5,
    date: "Hace 13 semanas",
  },
  {
    author: "Agustín T.",
    role: "Tienda Online · Centro",
    text: "Lo usé varias veces para llevar pedidos a nuestros clientes. Impecable el servicio y la confianza de su flota propia.",
    rating: 5,
    date: "Hace 48 semanas",
  },
];

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      className="relative min-h-[90dvh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-blue-500 text-white border-b border-white/10"
    >
      {/* Dynamic procedural background */}
      <HeroProceduralBackground variant="default" />

      {/* Halo glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-yellow-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[30vw] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8"
          >
            {/* Speed Badge with -rotate-1 */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow-500/40 bg-[#052C87]/90 text-brand-yellow-500 text-xs sm:text-sm font-subheading uppercase tracking-widest shadow-md backdrop-blur-md transform -rotate-1">
              <Award className="h-4 w-4 text-brand-yellow-500 shrink-0" />
              <span>LOGÍSTICA SOBERANA · MAR DEL PLATA 2026</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">LÍDERES EN</span>
              <span className="block">LOGÍSTICA DE</span>
              <span className="inline-block bg-brand-yellow-500 text-[#052C87] px-3 py-1 rounded-md transform -rotate-1 mt-1 font-display tracking-tight shadow-glow-yellow">
                ÚLTIMA MILLA
              </span>
            </h1>

            {/* Description matching official profile */}
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed pl-4 border-l-4 border-brand-yellow-500">
              Con más de 7 años de trayectoria en Mar del Plata, transformamos el despacho de tus productos en un motor de crecimiento para emprendedores, PyMEs y comercios locales con flota propia y compromiso humano.
            </p>

            {/* Conversion Primary CTA button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 justify-center lg:justify-start">
              <Link
                href="/cotizar/express"
                className="group relative inline-flex items-center justify-between min-h-[52px] px-8 py-3.5 rounded-full bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading text-lg uppercase tracking-wider font-bold shadow-glow-yellow transition-all duration-300 transform active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-yellow-500/50"
              >
                <span>COTIZÁ TU ENVÍO EN VIVO</span>
                <span className="w-8 h-8 rounded-full bg-[#052C87]/15 flex items-center justify-center ml-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#052C87]" />
                </span>
              </Link>
            </div>

            {/* Mission Callout Card (Double Bezel Dark Variant) */}
            <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl max-w-xl mx-auto lg:mx-0">
              <div className="rounded-[20px] bg-[#052C87] p-5 sm:p-6 border border-white/10 text-white space-y-2 relative overflow-hidden">
                <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-white/[0.04] pointer-events-none" />
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Sparkles className="h-4 w-4 text-brand-yellow-500 shrink-0" />
                  <h3 className="text-xs font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold">
                    PROPÓSITO OPERATIVO 2026
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-sans text-center lg:text-left">
                  Conectamos tiendas online, PyMEs y emprendedores de General Pueyrredón mediante una flota motorizada 100% propia, soporte en tiempo real y cumplimiento estricto de horarios desde nuestro Hub Central en Friuli 1972.
                </p>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-brand-yellow-500 tabular-nums">
                  +7
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Años en MDQ
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-brand-yellow-500 tabular-nums">
                  100%
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
                  Flota Propia
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-center">
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-brand-yellow-500 tabular-nums">
                  5.0 ★
                </span>
                <span className="block font-subheading text-[10px] sm:text-xs uppercase tracking-wider text-white/90 mt-0.5">
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
            <div className="rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl">
              <div className="rounded-[20px] bg-[#052C87] p-6 sm:p-8 border border-white/10 text-white space-y-6 relative overflow-hidden">
                {/* Watermark Icon */}
                <ShieldCheck className="absolute -right-6 -bottom-6 w-36 h-36 text-white/[0.04] pointer-events-none" />

                {/* Accent line top */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-yellow-500 via-white to-brand-yellow-400" />

                {/* Rating header */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-brand-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-brand-yellow-500 text-brand-yellow-500" />
                    ))}
                  </div>
                  <span className="text-xs font-subheading font-bold bg-white/15 text-brand-yellow-500 px-3 py-1 rounded-full tracking-wider flex items-center gap-1 border border-white/20">
                    <span>GOOGLE REVIEWS</span>
                    <span className="tabular-nums font-mono">5.0 / 5</span>
                  </span>
                </div>

                {/* Reputation title */}
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-glow-yellow" />
                    <h4 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-none">
                      CONFIANZA LOCAL
                    </h4>
                  </div>
                  <p className="text-xs text-brand-yellow-500 font-subheading uppercase tracking-wider mt-1.5 font-bold">
                    +7 AÑOS DE TRAYECTORIA EN CALLES DE MDQ
                  </p>
                </div>

                {/* Live Google Reviews Carousel */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentReview}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      <p className="font-sans text-xs sm:text-sm text-white/90 italic leading-relaxed">
                        &ldquo;{REVIEWS[currentReview].text}&rdquo;
                      </p>
                      <div className="flex justify-between items-center pt-1 text-[11px] font-sans">
                        <span className="font-bold text-brand-yellow-500 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-yellow-500" />
                          {REVIEWS[currentReview].author}
                        </span>
                        <span className="text-white/70">{REVIEWS[currentReview].role}</span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel pagination */}
                  <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-2">
                    <div className="flex gap-1.5">
                      {REVIEWS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentReview(idx)}
                          aria-label={`Ver opinión ${idx + 1}`}
                          className={`h-2 rounded-full transition-all duration-300 min-w-[20px] min-h-[20px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500`}
                        >
                          <span className={`h-1.5 rounded-full ${
                            idx === currentReview
                              ? 'w-6 bg-brand-yellow-500'
                              : 'w-2 bg-white/30 hover:bg-white/60'
                          }`} />
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setCurrentReview((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
                        aria-label="Opinión anterior"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentReview((prev) => (prev + 1) % REVIEWS.length)}
                        aria-label="Siguiente opinión"
                        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/10 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  Nuestros clientes avalan la excelencia operativa. Controlamos cada despacho desde el centro de distribución en <strong className="text-white">Friuli 1972</strong> con seguimiento constante.
                </p>

                {/* Trust anchors footer */}
                <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                  <span className="font-subheading text-white font-bold flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase">
                    <ShieldCheck className="h-4 w-4 text-brand-yellow-500" />
                    FLOTA 100% PROPIA
                  </span>
                  <span className="font-subheading text-white/90 flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase font-bold">
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
