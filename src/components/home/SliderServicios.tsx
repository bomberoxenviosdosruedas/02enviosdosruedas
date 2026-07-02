'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bike, Shield, Eye, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function SliderServicios() {
  const slides = [
    {
      title: 'Agilidad Urbana',
      subtitle: 'Tránsito burlado con agilidad',
      desc: 'Nuestras motocicletas evitan retrasos por tráfico urbano y acceden a cualquier sector de Mar del Plata rápidamente.',
      icon: Bike,
    },
    {
      title: 'Trazabilidad Inteligente',
      subtitle: 'Seguimiento constante',
      desc: 'Accedé a herramientas digitales para monitorear el estado de cada despacho y estar siempre al tanto.',
      icon: Smartphone,
    },
    {
      title: 'Custodia Total',
      subtitle: 'Máxima seguridad',
      desc: 'Garantizamos que cada paquete se manipule con cuidado absoluto y llegue en perfectas condiciones a destino.',
      icon: Shield,
    },
    {
      title: 'Transparencia Absoluta',
      subtitle: 'Soporte constante',
      desc: 'Comunicación clara, reportes y cotizaciones claras desde el primer momento sin costos ocultos.',
      icon: Eye,
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
      className="py-24 bg-white text-slate-900 relative z-10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,54,165,0.04),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,236,1,0.07),transparent_50%)]" />

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
            <span className="px-3 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-widest inline-block border border-brand-blue/10">
              Innovación en Distribución
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-900">
              SOLUCIONES A MEDIDA
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-sans max-w-2xl">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end gap-3">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-full border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-700 flex items-center justify-center transition-colors focus:outline-none bg-white shadow-sm cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="h-12 w-12 rounded-full border border-slate-200 hover:border-brand-blue hover:text-brand-blue text-slate-700 flex items-center justify-center transition-colors focus:outline-none bg-white shadow-sm cursor-pointer"
              title="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

        {/* Dynamic Interactive Slide Showcase */}
        <div className="bg-slate-50 border border-slate-100/80 rounded-3xl p-8 sm:p-12 min-h-[320px] flex items-center relative overflow-hidden shadow-sm">
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
                  className="h-28 w-28 rounded-3xl bg-brand-blue text-brand-yellow flex items-center justify-center shadow-xl relative group overflow-hidden border border-white/10 cursor-pointer"
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
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
                  {slides[current].subtitle}
                </span>
                <h3 className="text-3xl font-display uppercase tracking-wider text-slate-900 leading-none">
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
              className={`h-2.5 rounded-full transition-all duration-350 focus:outline-none ${
                idx === current ? 'w-10 bg-brand-blue' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              title={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
