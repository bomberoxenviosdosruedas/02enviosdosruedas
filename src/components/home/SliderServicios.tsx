'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  const slides = [
    {
      title: 'E-Commerce',
      subtitle: 'Entregas Same Day y Next Day',
      desc: 'Envios a domicilio de las ventas online, entregas same day y next day.',
      icon: ShoppingBag,
    },
    {
      title: 'Repuesto de Automotores',
      subtitle: 'Partes críticas al instante',
      desc: 'Envío rápido de partes críticas a talleres.',
      icon: Wrench,
    },
    {
      title: 'Indumentaria y Calzado',
      subtitle: 'Moda y Logística Inversa',
      desc: 'Logística inversa y entregas rápidas de moda local.',
      icon: Shirt,
    },
    {
      title: 'Tramites',
      subtitle: 'Cadetería Administrativa',
      desc: 'Todo tipo de tramites, cobranzas, despacho de encomiendas.',
      icon: FileText,
    },
    {
      title: 'Insumos varios',
      subtitle: 'Entregas en tiempo y forma',
      desc: 'Entrega de todo tipo de insumos en tiempo y forma (Medicos, Tecnologicos, y mas)',
      icon: ClipboardCheck,
    },
    {
      title: 'Encomiendas',
      subtitle: 'Retiro y Despacho',
      desc: 'Retiro y despacho de encomiendas',
      icon: Package,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const ActiveIcon = slides[current].icon;

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
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 45 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
        }}
      >
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-4 py-1.5 bg-brand-blue/5 text-brand-blue rounded-full text-xs font-subheading tracking-widest inline-block border border-brand-blue/20 uppercase">
              Innovación en Distribución
            </span>
            <h2 className="text-brand-ink text-display uppercase">
              Soluciones Especiales para Industrias
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-2xl">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución en Mar del Plata.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-xl border border-brand-blue/20 hover:bg-brand-yellow hover:text-brand-blue hover:border-brand-yellow text-white flex items-center justify-center transition-all bg-brand-blue cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-xl border border-brand-blue/20 hover:bg-brand-yellow hover:text-brand-blue hover:border-brand-yellow text-white flex items-center justify-center transition-all bg-brand-blue cursor-pointer"
              title="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Dynamic Interactive Slide Showcase */}
        <div className="bg-slate-50 border border-brand-blue/10 rounded-3xl p-8 sm:p-12 min-h-[320px] flex items-center relative overflow-hidden shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full"
            >
              <div className="md:col-span-4 flex justify-center">
                <motion.div
                  className="h-28 w-28 rounded-3xl bg-brand-blue text-brand-yellow flex items-center justify-center shadow-[4px_4px_0px_#FFEC00] relative group overflow-hidden border border-brand-yellow cursor-pointer"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut"
                    },
                    scale: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                >
                  <div className="absolute inset-0 bg-brand-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <ActiveIcon className="h-14 w-14 shrink-0" />
                </motion.div>
              </div>

              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <span className="text-xs font-subheading tracking-widest text-brand-blue uppercase">
                  {slides[current].subtitle}
                </span>
                <h3 className="text-3xl font-display text-brand-ink uppercase leading-none">
                  {slides[current].title}
                </h3>
                <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
                  {slides[current].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2.5 rounded-full transition-all duration-350 focus:outline-none ${idx === current ? 'w-10 bg-brand-blue border border-brand-blue' : 'w-2.5 bg-slate-200 hover:bg-slate-350 border border-slate-300'
                }`}
              title={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
