'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Truck, Bike, Clock, TrendingUp, Sparkles, Star, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative overflow-hidden gradient-blue text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5"
    >
      {/* Dynamic ambient highlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-yellow/15 rounded-full blur-[90px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-blue/40 rounded-full blur-[75px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-brand-yellow text-xs font-subheading tracking-widest uppercase"
          >
            <Sparkles className="h-4 w-4 text-brand-yellow animate-pulse" />
            LÍDERES EN LOGÍSTICA DE ÚLTIMA MILLA EN MAR DEL PLATA
          </motion.div>

          {/* Heading using requested text-display utility */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-display uppercase text-white"
          >
            La última milla de tu negocio, resuelta en <span className="text-brand-yellow underline decoration-brand-yellow/30 decoration-wavy">dos ruedas</span>.
          </motion.h1>

          {/* Short description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-brand-blue-50 text-base sm:text-lg max-w-xl font-normal leading-relaxed font-sans"
          >
            Impulsamos el crecimiento de tiendas online, PyMEs locales y emprendedores en todo el Partido de General Pueyrredón. Con tecnología inteligente, geolocalización activa y una flota profesional comprometida.
          </motion.p>

          {/* Feature Bullets */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 h-6 w-6 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs border border-brand-yellow/30">✓</span>
              <span className="text-sm text-brand-white-50 font-sans font-medium">Retiros directos a domicilio</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 h-6 w-6 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs border border-brand-yellow/30">✓</span>
              <span className="text-sm text-brand-white-50 font-sans font-medium">Integración MercadoEnvíos Flex</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 h-6 w-6 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs border border-brand-yellow/30">✓</span>
              <span className="text-sm text-brand-white-50 font-sans font-medium">Soporte y Gestión de Envíos</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="flex-shrink-0 h-6 w-6 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs border border-brand-yellow/30">✓</span>
              <span className="text-sm text-brand-white-50 font-sans font-medium">Garantía y Cobertura de Siniestros</span>
            </div>
          </motion.div>

          {/* Primary Call To Action Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link 
              href="/cotizar/express" 
              className="px-8 py-4 bg-brand-yellow hover:bg-brand-yellow/90 text-brand-blue font-subheading tracking-wider text-xl rounded-xl text-center shadow-accent-md hover:shadow-accent-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 uppercase group"
            >
              <Bike className="h-5 w-5" />
              <span>Cotizar Envío Express</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link 
              href="/servicios/plan-emprendedores" 
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-subheading tracking-wider text-xl rounded-xl text-center border border-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 uppercase"
            >
              <Truck className="h-5 w-5 text-brand-yellow" />
              <span>Planes para Tiendas</span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-brand-blue-100"
          >
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-yellow text-brand-blue font-subheading text-xs flex items-center justify-center font-bold">140+</div>
              <div className="h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-blue-500 text-white font-subheading text-xs flex items-center justify-center font-bold">MDQ</div>
              <div className="h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-blue-700 text-white font-subheading text-xs flex items-center justify-center font-bold">3PL</div>
            </div>
            <p className="font-sans">
              Más de <span className="text-white font-bold">140 e-commerce, locales y PyMEs</span> de Mar del Plata confían sus remesas diarias con nosotros.
            </p>
          </motion.div>

        </div>

        {/* Right Column: Immersive interactive metrics board */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 relative mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-brand-blue/30 rounded-3xl blur-2xl pointer-events-none" />
          
          <div className="relative glassmorphism rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Board Header */}
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div>
                <h3 className="font-subheading text-lg text-white tracking-wider uppercase">Estado de la Red</h3>
                <p className="text-xs text-brand-blue-100 font-sans">Sede Operativa Friuli 1972</p>
              </div>
              <span className="bg-brand-blue-400/20 border border-brand-blue-400/30 text-brand-blue-200 text-xs font-subheading tracking-wider px-3 py-1 rounded-lg flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-brand-blue-300 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            {/* Core statistics / features */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/30 hover:bg-brand-blue/50 transition-all">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <TrendingUp className="h-4 w-4 text-brand-yellow" />
                  <span className="uppercase font-subheading tracking-wider">Entregados Hoy</span>
                </div>
                <div className="text-2xl font-display text-white">342 Envios</div>
                <p className="text-[10px] text-brand-blue-200 font-mono">100% EFECTIVIDAD SLA</p>
              </div>

              <div className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/30 hover:bg-brand-blue/50 transition-all">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  <span className="uppercase font-subheading tracking-wider">Demora Promedio</span>
                </div>
                <div className="text-2xl font-display text-white">54 Minutos</div>
                <p className="text-[10px] text-brand-blue-100 font-sans">Envíos Express locales</p>
              </div>

              <div className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/30 hover:bg-brand-blue/50 transition-all">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Star className="h-4 w-4 text-brand-yellow" />
                  <span className="uppercase font-subheading tracking-wider">Calificación Flex</span>
                </div>
                <div className="text-2xl font-display text-white">99.8% Verde</div>
                <p className="text-[10px] text-brand-blue-200 font-mono">EXCELENCIA MERCADOLÍDER</p>
              </div>

              <div className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/30 hover:bg-brand-blue/50 transition-all">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Users className="h-4 w-4 text-brand-yellow" />
                  <span className="uppercase font-subheading tracking-wider">Cobertura</span>
                </div>
                <div className="text-2xl font-display text-white">Todo MDQ</div>
                <p className="text-[10px] text-brand-blue-100 font-sans">Batan, Sierra y Costa</p>
              </div>

            </div>

            {/* Quick real-time advisory alert bar */}
            <div className="bg-brand-blue/60 border border-white/10 rounded-2xl p-4 text-xs text-brand-white-50 font-sans flex gap-2.5 items-start">
              <ShieldCheck className="h-5 w-5 text-brand-yellow shrink-0" />
              <span>
                <strong className="text-brand-yellow uppercase">Atención por Clima Costero:</strong> Toda la flota cuenta con empaque impermeable termocentrífugo estanco. Las entregas se mantienen en curso según cronogramas habituales.
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
