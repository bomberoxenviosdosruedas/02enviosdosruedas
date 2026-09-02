'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function ConversionBanner() {
  return (
    <section className="rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-2xl my-12">
      <div className="bg-[#052C87] text-white p-8 sm:p-12 rounded-[20px] border border-white/10 relative overflow-hidden text-center space-y-6">
        {/* Background glow ambient effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFF12E]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0950F6]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Watermark Icon */}
        <MessageCircle
          className="absolute -bottom-10 -right-10 w-72 h-72 text-white/[0.03] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 -rotate-1 shadow-glow-yellow">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFF12E] animate-pulse shadow-[0_0_8px_#FFF12E]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFF12E] tabular-nums">
              Operaciones Activas Mar del Plata 2026
            </span>
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight">
            ¿Tenés envíos para hoy? Los entregamos a tiempo.
          </h2>

          {/* Bajada */}
          <p className="text-white/85 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Botón Primario: Cotizá tu Envío */}
            <Link
              href="/cotizar/express"
              className="group w-full sm:w-auto min-h-[52px] rounded-full bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading tracking-wider uppercase text-base font-bold py-3.5 px-8 shadow-glow-yellow flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99]"
            >
              <span>Cotizá tu Envío</span>
              <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Botón Secundario: Chateá con Nosotros */}
            <a
              href="https://wa.me/542236602699?text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto min-h-[52px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading tracking-wider uppercase text-base font-bold py-3.5 px-8 shadow-lg flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.99]"
            >
              <span>Chateá con Nosotros</span>
              <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
