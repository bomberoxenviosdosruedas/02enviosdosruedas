'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring } from 'motion/react';
import {
  ShoppingBag,
  Wrench,
  Shirt,
  FileText,
  ClipboardCheck,
  Package,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function SliderServicios() {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: 'E-Commerce',
      subtitle: 'Entregas same day y next day',
      desc: 'Envíos a domicilio de tus ventas online. Entregas misma jornada o a partir del día siguiente.',
      icon: ShoppingBag,
    },
    {
      title: 'Repuestos automotores',
      subtitle: 'Partes críticas al instante',
      desc: 'Envío rápido de repuestos y partes críticas a talleres y concesionarios de toda la ciudad.',
      icon: Wrench,
    },
    {
      title: 'Indumentaria y calzado',
      subtitle: 'Moda y logística inversa',
      desc: 'Logística inversa y entregas rápidas de moda local. Gestionamos cambios y devoluciones sin fricción.',
      icon: Shirt,
    },
    {
      title: 'Trámites',
      subtitle: 'Cadería administrativa',
      desc: 'Todo tipo de trámites, cobranzas, despacho de encomiendas.',
      icon: FileText,
    },
    {
      title: 'Insumos varios',
      subtitle: 'Entregas en tiempo y forma',
      desc: 'Entrega de todo tipo de insumos: médicos, tecnológicos, gastronómicos y más.',
      icon: ClipboardCheck,
    },
    {
      title: 'Encomiendas',
      subtitle: 'Retiro y despacho',
      desc: 'Retiro a domicilio y despacho de encomiendas con confirmación de entrega.',
      icon: Package,
    },
  ];

  // Spring configurations
  const springConfig = { stiffness: 100, damping: 20 };
  const springConfigSnappy = { stiffness: 300, damping: 25 };
  const springConfigSlide = { stiffness: 120, damping: 22 };

  // Spring-based current index for smooth transitions
  const currentMotion = useMotionValue(0);
  const currentSpring = useSpring(currentMotion, springConfigSlide);

  // Sync currentMotion with current state
  useEffect(() => {
    currentMotion.set(current);
  }, [current]);

  // Auto-rotation with deterministic timing
  useEffect(() => {
    if (reduceMotion) return;

    autoRotateIntervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
        autoRotateIntervalRef.current = null;
      }
    };
  }, [slides.length, reduceMotion]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Indicator animation using spring
  const indicatorSpring = useSpring(currentMotion, { stiffness: 300, damping: 25 });

  return (
    <section
      id="slider-servicios"
      className="py-24 bg-white text-brand-ink relative z-10 overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.02),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,236,1,0.03),transparent_50%)]" />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-4 py-1.5 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-yellow uppercase">
              Innovación en Distribución
            </span>
            <h2 className="text-brand-blue text-display uppercase">
              Soluciones Especiales para Industrias
            </h2>
            <p className="text-brand-blue-500 text-lg leading-relaxed font-sans max-w-2xl">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución en Mar del Plata.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.05, x: -2, transition: springConfigSnappy }}
              whileTap={{ scale: 0.95 }}
              aria-label="Slide anterior"
              className="h-12 w-12 rounded-xl border-2 border-brand-yellow bg-brand-yellow hover:bg-brand-blue hover:text-brand-yellow hover:border-brand-blue text-brand-blue flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05, x: 2, transition: springConfigSnappy }}
              whileTap={{ scale: 0.95 }}
              aria-label="Siguiente slide"
              className="h-12 w-12 rounded-xl border-2 border-brand-yellow bg-brand-yellow hover:bg-brand-blue hover:text-brand-yellow hover:border-brand-blue text-brand-blue flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Dynamic Interactive Slide Showcase (Double-Bezel) */}
        <div className="p-2 bg-brand-blue-50 border border-brand-blue-100 rounded-[2rem] w-full min-h-[320px] flex items-center relative overflow-hidden shadow-minimal">
          <div className="bg-white rounded-[calc(2rem-0.5rem)] p-8 sm:p-12 w-full h-full border border-brand-blue-50 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full"
              >
                <div className="md:col-span-4 flex justify-center">
                  <motion.div
                    className="h-28 w-28 rounded-3xl bg-brand-blue text-brand-yellow flex items-center justify-center shadow-[4px_4px_0px_#FFEC00] relative group overflow-hidden border border-brand-yellow cursor-pointer"
                    whileHover={{ scale: 1.05, rotate: 2, transition: springConfigSnappy }}
                    animate={reduceMotion
                      ? {}
                      : {
                          y: [0, -8, 0],
                          rotate: [0, 1, -1, 0],
                        }}
                    transition={reduceMotion
                      ? {}
                      : {
                          y: { duration: 3, ease: 'easeInOut', repeat: Infinity },
                          rotate: { duration: 4, ease: 'easeInOut', repeat: Infinity },
                        }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-brand-yellow opacity-0"
                      animate={{ opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    {React.createElement(slides[current].icon, { className: "h-14 w-14 shrink-0" })}
                  </motion.div>
                </div>

                <div className="md:col-span-8 space-y-4 text-center md:text-left">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-xs font-subheading tracking-widest text-brand-blue uppercase"
                  >
                    {slides[current].subtitle}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
                    className="text-3xl font-display text-brand-blue uppercase leading-none"
                  >
                    {slides[current].title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
                    className="text-brand-blue-500 font-sans text-sm sm:text-base leading-relaxed max-w-xl"
                  >
                    {slides[current].desc}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators with spring animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Navegación de slides"
        >
          {slides.map((slide, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrent(idx)}
              role="tab"
              aria-selected={idx === current}
              aria-label={`Ir a: ${slide.title}`}
              className={`h-2.5 rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 border ${
                idx === current
                  ? 'bg-brand-yellow border-brand-yellow/50'
                  : 'bg-brand-blue-100 hover:bg-brand-blue-300 border-brand-blue-200'
              }`}
              whileHover={idx !== current ? { scale: 1.3, transition: springConfigSnappy } : undefined}
              whileTap={{ scale: 0.9 }}
              animate={{ width: idx === current ? '2.5rem' : '0.625rem' }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}