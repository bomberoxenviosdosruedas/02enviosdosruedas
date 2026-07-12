'use client';

import React from 'react';
import { Truck, Bike, Clock, TrendingUp, Sparkles, Star, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden gradient-blue text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative light blue neon glow circles */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-yellow/12 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-brand-blue/30 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-brand-yellow text-xs font-subheading tracking-wider uppercase">
            <Sparkles className="h-3.5 w-3.5 text-brand-yellow animate-pulse" />
            LÍDERES EN LOGÍSTICA EN GENERAL PUEYRREDÓN
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-none uppercase text-white">
            La última milla de tu negocio, resuelta en <span className="text-brand-yellow">dos ruedas</span>.
          </h1>

          <p className="text-brand-blue-50 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
            Impulsamos las entregas de tiendas online, PyMEs locales y particulares en <strong className="text-white">Mar del Plata</strong>. Con ruteos inteligentes articulados por geolocalización o flotas comprometidas, garantizamos tiempos récords y protección integral de tu mercadería.
          </p>

          {/* Bullet proofs */}
          <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-sm text-brand-blue-50 font-medium">Retiro a Domicilio</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-sm text-brand-blue-50 font-medium">Integración MercadoFlex</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-sm text-brand-blue-50 font-medium">Soporte 24/7 de Guardia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-yellow/20 text-brand-yellow flex items-center justify-center font-bold text-xs">✓</span>
              <span className="text-sm text-brand-blue-50 font-medium">Cuenta PyME Protegida</span>
            </div>
          </div>

          {/* Actions CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#cotizador" 
              className="px-8 py-3.5 bg-brand-yellow text-brand-blue font-subheading text-xl rounded-xl text-center shadow-accent-md hover:shadow-accent-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 tracking-wider"
            >
              <Bike className="h-5 w-5" />
              CALCULADORA DE COSTOS
            </a>
            
            <a 
              href="#consola" 
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-subheading text-xl rounded-xl text-center border border-white/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 tracking-wider"
            >
              <Truck className="h-5 w-5 text-brand-yellow" />
              PORTAL DE DESPACHOS
            </a>
          </div>

          {/* Social Proof */}
          <div className="pt-6 border-t border-white/10 flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-yellow text-brand-blue text-xs font-subheading flex items-center justify-center">E1</span>
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-blue-500 text-white text-xs font-subheading flex items-center justify-center">M1</span>
              <span className="inline-block h-8 w-8 rounded-full ring-2 ring-brand-blue bg-brand-blue-700 text-white text-xs font-subheading flex items-center justify-center">D4</span>
            </div>
            <p className="text-xs text-brand-blue-100 font-medium">
              Respaldado por más de <span className="text-white font-bold">140 comercios locales</span> en Mar del Plata.
            </p>
          </div>
        </div>

        {/* Right dashboard column */}
        <div id="stats-dashboard" className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div className="absolute inset-0 bg-brand-blue/30 rounded-3xl blur-2xl pointer-events-none" />
          
          <div className="relative glassmorphism rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
              <div>
                <h3 className="font-subheading text-lg text-white tracking-wider">FLOTA ENVÍOS DOSRUEDAS</h3>
                <p className="text-xs text-brand-blue-100">Mar del Plata - Zona Operativa activa</p>
              </div>
              <span className="bg-brand-blue-400/20 border border-brand-blue-400/30 text-brand-blue-200 text-[11px] font-subheading tracking-wider px-2 py-1 rounded-md flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-300 animate-pulse"></span>
                ONLINE
              </span>
            </div>

            {/* Grid of metrics */}
            <div className="grid grid-cols-2 gap-4">
              
              <div id="metric-entregados" className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/40 hover:bg-brand-blue/60 transition-all shadow-sm">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <TrendingUp className="h-4 w-4 text-brand-yellow" />
                  Entregas Hoy
                </div>
                <div className="text-2xl font-display text-white">342 BULTOS</div>
                <p className="text-[10px] text-brand-blue-200">✓ 100% de efectividad</p>
              </div>

              <div id="metric-tiempo" className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/40 hover:bg-brand-blue/60 transition-all shadow-sm">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Clock className="h-4 w-4 text-brand-yellow" />
                  Demora Express
                </div>
                <div className="text-2xl font-display text-white">54 MINS</div>
                <p className="text-[10px] text-brand-blue-100">Promedio general MDQ</p>
              </div>

              <div id="metric-motos" className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/40 hover:bg-brand-blue/60 transition-all shadow-sm">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Star className="h-4 w-4 text-brand-yellow animate-spin-slow" />
                  Reputación Flex
                </div>
                <div className="text-2xl font-display text-white">99.8% OK</div>
                <p className="text-[10px] text-brand-blue-200">Color Verde MercadoLíder</p>
              </div>

              <div id="metric-cobertura" className="bg-brand-blue/40 border border-white/10 p-4 rounded-2xl space-y-1 hover:border-brand-yellow/40 hover:bg-brand-blue/60 transition-all shadow-sm">
                <div className="flex items-center gap-2 text-brand-blue-100 text-xs font-medium">
                  <Users className="h-4 w-4 text-brand-yellow" />
                  Sede Depósito
                </div>
                <div className="text-2xl font-display text-white">FRIULI 1972</div>
                <p className="text-[10px] text-brand-blue-100">Pick & Pack habilitado</p>
              </div>

            </div>

            {/* Quick status feed */}
            <div className="bg-brand-blue/60 border border-white/10 rounded-2xl p-4 text-xs text-brand-blue-50">
              <span className="font-bold text-brand-yellow">Último reporte del clima costero:</span> Llovizna intermitente atlántica leve. Todo el personal opera con revestimiento estanco impermeable. Las entregas mantienen cronograma normal.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
