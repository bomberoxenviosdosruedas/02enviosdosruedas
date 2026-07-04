'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowDown, Calculator, Shield, TrendingDown } from 'lucide-react';

export default function LowCostHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring' as const, 
        stiffness: 100, 
        damping: 15,
      } 
    },
  };

  const handleScrollToPricing = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('lowcost-pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="lowcost-hero" 
      className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-blue border-b border-blue-200/60 text-white"
    >
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,236,1,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.04),transparent_50%)]" />

      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        <Image
          src="https://i.postimg.cc/QMVDQpNM/abstracto-background.jpg"
          alt="Fondo abstracto azul y amarillo"
          fill
          priority
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue flex items-center gap-1.5 shadow-accent-md">
                <TrendingDown className="h-4 w-4 animate-bounce" />
                Tarifa Optimizada 2026
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-none"
            >
              Envíos LowCost: <br />
              <span className="text-brand-yellow">Máxima Rentabilidad</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-lg max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed text-blue-50"
            >
              Nuestro servicio Lowcost, las entregas son realizadas en el transcurso del día sin elección de rango horario. La mejor tarifa de Mar del Plata para tus envíos diarios sin sacrificar un gramo de seguridad ni control (Cobertura en todo Mar del Plata).
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cotizar/lowcost"
                id="lowcost-hero-cta-cotizar"
                className="w-full sm:w-auto bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl shadow-accent-md hover:shadow-accent-lg transition-all duration-200 hover:scale-[1.03] flex items-center justify-center gap-2.5 font-semibold"
              >
                <Calculator className="h-5 w-5" />
                Cotizar Envío LowCost
              </Link>
              
              <button
                onClick={handleScrollToPricing}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-base uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ArrowDown className="h-4.5 w-4.5 text-brand-yellow animate-bounce" />
                Ver Tarifas Optimizadas
              </button>
            </motion.div>

            {/* Performance Stat Row */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 pt-8 border-t border-white/15 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Ahorro Promedio</p>
                  <p className="text-sm font-subheading uppercase font-semibold">Hasta 40% Menos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/5 rounded-xl text-brand-yellow">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-200 leading-none mb-1">Garantía de</p>
                  <p className="text-sm font-subheading uppercase font-semibold">Entrega en el Día</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Graphical Side Column */}
          <div className="lg:col-span-5 relative hidden lg:block h-[450px]">
            {/* Box Package Graphic Card */}
            <motion.div 
              className="absolute top-12 right-0 w-[80%] z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-white p-5 text-slate-800">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] bg-brand-blue/10 text-brand-blue font-bold uppercase px-2.5 py-1 rounded-full">
                    RUTEO DIARIO MASIVO
                  </span>
                  <span className="text-xs font-mono font-bold text-brand-blue">
                    TARIFA FIJA
                  </span>
                </div>
                <h3 className="text-lg font-display uppercase tracking-tight text-slate-900 leading-snug">
                  Maximizá tu margen de ganancia
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-2 leading-relaxed">
                  Ideal para e-commerce locales que envían todos los días y necesitan un costo de flete ultra competitivo para no perder ventas.
                </p>
              </div>
            </motion.div>

            {/* Smart Routing Graphic Card */}
            <motion.div 
              className="absolute bottom-8 left-0 w-[75%] z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-slate-900/95 backdrop-blur-md p-5 text-white">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-2 w-2 rounded-full bg-brand-yellow animate-ping" />
                    <span className="text-[10px] font-bold tracking-widest text-brand-yellow uppercase">Corte de Recepción</span>
                  </div>
                  <p className="text-sm font-subheading uppercase font-semibold leading-none">
                    13:00 hs IMPRORROGABLE
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    Ingresá tus pedidos antes de la hora límite y garantizá la entrega de todos tus paquetes antes de las 19:00 hs de hoy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
