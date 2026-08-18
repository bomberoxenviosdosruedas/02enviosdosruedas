'use client';

import React from 'react';
import { Package, MapPin, FastForward, Navigation, ShieldCheck, Zap } from 'lucide-react';
import { CTANestedPill } from '@/components/ui';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';

export default function HeroAnimado() {
  return (
    <section
      id="hero-animado"
      className="relative w-full overflow-hidden bg-brand-blue-700 text-white"
      style={{ minHeight: '90dvh' }}
    >
      {/* Pure Vector & Dynamic Procedural Background (0 KB static images) */}
      <HeroProceduralBackground variant="express" />

      {/* Ghost Wordmark Monumental de Fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">
          ENVÍOS DOS RUEDAS
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
            {/* Badge */}
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 border border-brand-yellow-500 shadow-[0_0_20px_rgba(255,236,1,0.3)]">
                Tu Solución Confiable
              </span>
            </div>

            {/* Title with Signature Knockout Treatment - Rendered immediately for optimal LCP */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[1.0] sm:leading-[0.95] flex flex-col items-center lg:items-start gap-2 select-none">
              <span className="kinetic-font-stretch">
                Mensajería y Logística
              </span>
              <span className="relative inline-block bg-brand-blue-700 px-3 py-1 my-1.5 transform -rotate-1 rounded-sm shadow-sm">
                <span className="relative z-10 bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 inline-block">
                  E-Commerce
                </span>
              </span>
              <span className="kinetic-font-stretch">
                en Mar del Plata
              </span>
            </h1>

            {/* Body Text */}
            <p className="text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed text-brand-blue-50 font-light">
              Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
                size="large"
                id="hero-cta-solicitar"
                className="w-full sm:w-auto"
              >
                Cotizá Express
              </CTANestedPill>
              <CTANestedPill
                href="/servicios/envios-express"
                variant="elevated"
                size="large"
                id="hero-cta-servicios"
                className="w-full sm:w-auto"
              >
                Mirá los Servicios
              </CTANestedPill>
            </div>

            {/* Features list */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 opacity-70"
              style={{ filter: 'grayscale(1)' }}
            >
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <Package className="h-5 w-5 shrink-0" />
                +1M Envíos
              </span>
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <MapPin className="h-5 w-5 shrink-0" />
                Cobertura Total
              </span>
              <span className="flex items-center gap-3 font-subheading text-sm uppercase tracking-wide">
                <FastForward className="h-5 w-5 shrink-0" />
                Express 24h
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Vector Topology HUD Card (0 KB images) */}
          <div className="relative hidden lg:block">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-blue-700 border-2 border-white/20 p-8 flex flex-col justify-between">
              
              {/* Radar Grid Graphic */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#FFEC01" strokeWidth="1" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '60s' }} />
                  <circle cx="50%" cy="50%" r="20%" fill="none" stroke="#628FF9" strokeWidth="1.5" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#FFEC01" strokeWidth="1" strokeDasharray="4 6" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#FFEC01" strokeWidth="1" strokeDasharray="4 6" />
                </svg>
              </div>

              {/* Header Telemetry */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-yellow-500" />
                  </span>
                  <span className="font-subheading text-xs uppercase tracking-widest text-brand-yellow-500 font-bold">
                    GPS ACTIVO · MAR DEL PLATA
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  HUB FRIULI 1972
                </span>
              </div>

              {/* Node Network Map Simulation */}
              <div className="relative z-10 my-auto py-6 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-yellow-500 text-brand-blue-900">
                      <Zap className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <p className="font-subheading text-sm uppercase font-bold text-white leading-none">
                        Despacho Prioritario
                      </p>
                      <p className="font-sans text-xs text-brand-blue-100 mt-0.5">Centro · Güemes · Mogotes</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-yellow-500">EN CURSO</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-blue-500 text-white">
                      <Navigation className="h-5 w-5 shrink-0" />
                    </div>
                    <div>
                      <p className="font-subheading text-sm uppercase font-bold text-white leading-none">
                        Ruteo Inteligente
                      </p>
                      <p className="font-sans text-xs text-brand-blue-100 mt-0.5">Batán · Camet · Constitución</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-blue-200">OPTIMIZADO</span>
                </div>
              </div>

              {/* Badge overlay - "Menos de 60m" */}
              <div className="relative z-10">
                <div
                  style={{
                    background: 'var(--brand-yellow)',
                    color: 'var(--brand-blue)',
                    padding: 'var(--space-4) var(--space-6)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                    borderLeft: '8px solid var(--brand-blue)',
                  }}
                >
                  <p style={{ margin: 0, fontFamily: 'var(--font-headline)', fontSize: 'var(--text-3xl)', lineHeight: 1, textTransform: 'uppercase' }}>
                    Entregas en<br />
                    <span style={{ background: 'var(--brand-blue)', color: '#fff', padding: '0 4px' }}>
                      Menos de 60m
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-white-50 pointer-events-none" />
    </section>
  );
}