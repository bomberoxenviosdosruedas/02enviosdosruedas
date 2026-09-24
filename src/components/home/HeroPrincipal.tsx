﻿'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Sparkles,
  Shield,
  Truck,
} from 'lucide-react';

export default function HeroPrincipal() {
  return (
    <section id="hero-principal" className="relative w-full overflow-hidden bg-brand-blue-700 text-white" style={{ minHeight: '90dvh' }}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 bg-brand-blue-700" />
        <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-175 h-175 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-1/4 -right-32 w-150 h-150 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,236,1,0.18) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)', filter: 'blur(90px)' }} />
        <div className="absolute -bottom-40 left-1/3 w-137.5 h-137.5 rounded-full" style={{ background: 'radial-gradient(circle, rgba(255,236,1,0.12) 0%, transparent 65%)', filter: 'blur(100px)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-procedural-grid-correct" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#BACEFD" strokeWidth="0.75" strokeDasharray="2,6" />
              <circle cx="0" cy="0" r="1.5" fill="#FFEC01" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-procedural-grid-correct)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path d="M -100 450 Q 400 200 900 380 T 1600 150" fill="none" stroke="#FFEC01" strokeWidth="2.5" strokeDasharray="12 16" />
          <path d="M -100 300 Q 500 480 1000 250 T 1600 350" fill="none" stroke="#628FF9" strokeWidth="1.5" strokeDasharray="8 12" />
          <circle cx="450" cy="240" r="4" fill="#FFEC01" />
          <circle cx="950" cy="360" r="5" fill="#FFEC01" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-brand-yellow-500" />
      </div>

      {/* Ghost wordmark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-display uppercase text-[15vw] leading-none text-white/[0.035] tracking-tighter whitespace-nowrap">ENVÃOS DOS RUEDAS</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column - 7 cols */}
          <div className="lg:col-span-7 space-y-7 lg:space-y-9 text-center lg:text-left">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-700 shadow-[0_0_28px_rgba(255,236,1,0.45)] border border-brand-yellow-500 -rotate-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
                Tu SoluciÃ³n Confiable en Mar del Plata
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tighter leading-[0.9] flex flex-col items-center lg:items-start gap-2 select-none text-balance">
              <span>MensajerÃ­a y LogÃ­stica</span>
              <span className="relative inline-block bg-brand-yellow-500 text-brand-blue-700 px-3.5 py-1 my-1 -rotate-1 rounded-xl shadow-[0_0_28px_rgba(255,236,1,0.45)]">
                <span className="font-display font-black">E-Commerce</span>
              </span>
              <span className="text-white">en Mar del Plata</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg lg:text-xl max-w-[65ch] mx-auto lg:mx-0 font-sans leading-relaxed text-white/90 font-light">
              Somos tu partner estratÃ©gico en mensajerÃ­a urbana, envÃ­os en el dÃ­a y delivery de Ãºltima milla. CotizÃ¡ tu envÃ­o en 30 segundos. Flota propia de motos, cero tercerizaciÃ³n y respuesta inmediata.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-1">
              <a className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3 text-base min-h-[44px] bg-brand-yellow-500 text-brand-blue-700 border border-brand-yellow-500 shadow-[0_0_28px_rgba(255,236,1,0.45)] hover:bg-brand-yellow-400 hover:scale-[1.02] active:scale-[.98] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-blue-700" href="/cotizar/express">
                <span>CotizÃ¡ Express</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-blue-700/10 group-hover:bg-brand-blue-700 group-hover:text-brand-yellow-500 group-hover:translate-x-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a className="group inline-flex items-center justify-between gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3 text-base min-h-[44px] bg-white text-brand-blue-700 border border-brand-blue-100 shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] hover:border-brand-blue-300 hover:scale-[1.02] active:scale-[.98]" href="/servicios/envios-express">
                <span>MirÃ¡ los Servicios</span>
                <span className="w-8 h-8 rounded-full flex items-center justify-center bg-brand-blue-700/10 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-white group-hover:translate-x-1 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Chips */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2.5 font-subheading text-[13px] uppercase tracking-wider px-3 py-2 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <span className="text-white/90">Miles de EnvÃ­os</span>
              </div>
              <div className="flex items-center gap-2.5 font-subheading text-[13px] uppercase tracking-wider px-3 py-2 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/90">Cobertura Total MDQ</span>
              </div>
              <div className="flex items-center gap-2.5 font-subheading text-[13px] uppercase tracking-wider px-3 py-2 rounded-3xl bg-white/6 border border-white/12 backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow-500/15 border border-brand-yellow-500/30 flex items-center justify-center text-brand-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" />
                    <path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" />
                  </svg>
                </div>
                <span className="text-white/90">Entregas en el DÃ­a</span>
              </div>
            </div>
          </div>

          {/* Right Column - 5 cols */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            <div className="absolute w-80 h-80 bg-brand-yellow-500/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-[90px] pointer-events-none -z-10" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-115 animate-float-slow"
            >
              {/* Top chip */}
              <div className="self-end ml-auto mr-8 -mb-3 relative z-30 flex justify-end">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand-blue-700 border border-brand-blue-100 shadow-[0_16px_40px_rgba(9,80,246,0.12)] font-subheading text-[11px] uppercase tracking-widest font-bold">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow-500" />
                  </span>
                  Ruteo Activo Â· MDQ
                </div>
              </div>

              {/* Double Bezel Card */}
              <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-xl shadow-[0_16px_40px_rgba(9,80,246,0.12)] hover:shadow-[0_24px_64px_rgba(9,80,246,0.18)] hover:border-brand-blue-300 transition-all">
                <div className="bg-white rounded-lg p-4 sm:p-5 shadow-[inset_0_2px_8px_rgba(9,80,246,0.06)] overflow-hidden flex flex-col items-center">
                  <div className="w-full flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-2xs font-bold text-brand-blue-700 bg-brand-blue-50 px-2 py-0.5 rounded-md border border-brand-blue-100">Friuli 1972</span>
                    <span className="font-mono text-2xs text-brand-blue-400">Zona GÃ¼emes Â· MDQ</span>
                  </div>

                  {/* Hero Card Media */}
                  <div className="relative w-full aspect-square max-w-85 flex items-center justify-center my-1">
                    <Image
                      src="/card_mapa.webp"
                      alt="EnvÃ­os DosRuedas - LogÃ­stica y MensajerÃ­a"
                      width={340}
                      height={340}
                      className="object-contain w-full h-full"
                      style={{ filter: 'drop-shadow(0 16px 32px rgba(9,80,246,0.15))' }}
                      priority
                    />
                  </div>

                  {/* Data cards */}
                  <div className="w-full grid grid-cols-2 gap-2.5 mt-3">
                    <div className="bg-brand-blue-50 border border-brand-blue-100 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand-yellow-500 text-brand-blue-700 shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-subheading text-[11px] font-bold uppercase text-brand-blue-700 leading-tight">EnvÃ­os Same-Day</p>
                        <p className="font-mono text-[10px] text-brand-blue-400">Entrega en el DÃ­a</p>
                      </div>
                    </div>
                    <div className="bg-brand-blue-50 border border-brand-blue-100 p-2.5 rounded-xl flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-brand-blue-700 text-white shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-subheading text-[11px] font-bold uppercase text-brand-blue-700 leading-tight">Flota Propia</p>
                        <p className="font-mono text-[10px] text-brand-blue-400">Cero TercerizaciÃ³n</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom chip */}
              <div className="self-start ml-8 -mt-3 relative z-30 flex justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-700 border border-white/40 shadow-[0_0_28px_rgba(255,236,1,0.45)] font-subheading text-[11px] uppercase tracking-widest font-bold">
                  <span className="w-2 h-2 rounded-full bg-brand-blue-700 animate-pulse" />
                  ENTREGA EN EL DIA· MDQ
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
