'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Handshake, Sparkles, Building2, Phone, AtSign, MapPin, ArrowUpRight } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-dvh pt-32 pb-12 lg:py-0 flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Dynamic Animated Ambient Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue-700/30 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-brand-yellow-500/10 rounded-full blur-[150px] pointer-events-none z-0 animate-pulse" style={{ animationDelay: '700ms' }} />

      {/* Background overlay and image */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none">
        <Image
          src="/delivery-background.jpg"
          alt="Envíos DosRuedas Contacto"
          fill={true}
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-brand-dark/95 via-brand-blue-700/60 to-brand-dark backdrop-blur-[2px]"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Main Content (7 cols) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-brand-yellow-500/40 bg-brand-dark/60 backdrop-blur-md rounded-full shadow-lg w-fit hover:border-brand-yellow-500 transition-colors duration-300">
                <Mail className="w-4 h-4 text-brand-yellow-500" />
                <span className="font-subheading text-xs tracking-widest uppercase text-white font-bold">
                  ASISTENCIA COMERCIAL
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase italic tracking-normal mb-5 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 leading-tight">
              <span>CONTACTO</span>
              <div className="inline-flex w-12 h-8 sm:w-16 sm:h-11 bg-brand-yellow-500/20 rounded-full border border-brand-yellow-500/50 items-center justify-center cursor-pointer shadow-inner hover:rotate-12 hover:scale-110 transition-transform duration-300">
                <Handshake className="w-4 h-4 sm:w-6 sm:h-6 text-brand-yellow-500" />
              </div>
              <span className="text-brand-yellow-500 drop-shadow-[0_2px_12px_rgba(255,236,1,0.3)]">COMERCIAL</span>
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-brand-blue-50 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              ¿Buscás escalar la logística de tu negocio? Nuestro equipo comercial está listo para diseñar un plan a medida que optimice tus entregas y reduzca costos operativos.
            </p>

            {/* Custom Info Box */}
            <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl border border-brand-blue-500/30 bg-brand-dark/60 backdrop-blur-md max-w-2xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow-500/40 shadow-xl">
              <div className="shrink-0 w-10 h-10 rounded-full bg-brand-yellow-500/10 flex items-center justify-center border border-brand-yellow-500/30">
                <Sparkles className="w-5 h-5 text-brand-yellow-500" />
              </div>
              <div>
                <h3 className="font-display text-base sm:text-lg text-white uppercase mb-1 font-semibold flex items-center gap-2">
                  Propuesta Personalizada
                </h3>
                <p className="font-sans text-xs sm:text-sm text-brand-blue-100 leading-relaxed">
                  Evaluamos tu volumen de envíos, zonas de cobertura y necesidades específicas para ofrecerte tarifas preferenciales y soluciones de integración.
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Contact Card (5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center w-full">
            <div className="rounded-2xl border border-white/15 bg-brand-dark/70 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col w-full group/card hover:border-brand-yellow-500/30 transition-all duration-500">
              
              <div className="p-6 sm:p-7 md:p-8 grow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-yellow-500/10 border border-brand-yellow-500/20">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow-500" />
                    </div>
                    <h2 className="font-display text-xl sm:text-2xl text-white uppercase m-0 font-bold tracking-wide">
                      Datos Oficiales
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+542236602699"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10 hover:translate-x-1 duration-300"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-yellow-500 group-hover/item:border-brand-yellow-500 transition-all duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/item:text-brand-dark transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block font-sans text-[10px] sm:text-[11px] text-brand-blue-100 uppercase tracking-wider mb-0.5">
                        Teléfono Directo
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="font-sans text-base sm:text-lg text-white group-hover/item:text-brand-yellow-500 font-bold transition-colors">
                          +54 223 660-2699
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40 opacity-0 group-hover/item:opacity-100 group-hover/item:text-brand-yellow-500 transition-all" />
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:matiascejas@enviosdosruedas.com"
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10 hover:translate-x-1 duration-300"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-yellow-500 group-hover/item:border-brand-yellow-500 transition-all duration-300">
                      <AtSign className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/item:text-brand-dark transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block font-sans text-[10px] sm:text-[11px] text-brand-blue-100 uppercase tracking-wider mb-0.5">
                        Correo Electrónico
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="font-sans text-sm sm:text-base text-white group-hover/item:text-brand-yellow-500 transition-colors break-all font-medium">
                          matiascejas@enviosdosruedas.com
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-white/40 shrink-0 opacity-0 group-hover/item:opacity-100 group-hover/item:text-brand-yellow-500 transition-all" />
                      </div>
                    </div>
                  </a>

                  {/* Address */}
                  <div
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/10 hover:translate-x-1 duration-300"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-yellow-500 group-hover/item:border-brand-yellow-500 transition-all duration-300">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/item:text-brand-dark transition-colors" />
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] sm:text-[11px] text-brand-blue-100 uppercase tracking-wider mb-0.5">
                        Oficina Central
                      </span>
                      <span className="block font-sans text-sm sm:text-base text-white font-medium">Friuli 1972</span>
                      <span className="block font-sans text-xs sm:text-sm text-brand-blue-100">Mar del Plata, Buenos Aires</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Bar with Glow Pulse */}
              <div className="bg-brand-yellow-500/10 border-t border-brand-yellow-500/20 px-4 sm:px-6 py-3.5 flex items-center justify-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-brand-yellow-500"></span>
                </span>
                <span className="font-subheading text-sm tracking-wider text-white uppercase font-bold text-center">
                  Atención Comercial Disponible
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
