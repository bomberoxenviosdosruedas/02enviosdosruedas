'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function ConversionBanner() {
  return (
    <section className="bg-[#111827] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden my-12">
      {/* Background glow ambient effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6366F1]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#22C55E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#22C55E]">
            Operaciones Activas Mar del Plata 2026
          </span>
        </div>

        {/* Título */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight">
          ¿Tenés envíos para hoy? Los entregamos a tiempo.
        </h2>

        {/* Bajada */}
        <p className="text-[#94A3B8] font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Botón Primario: Cotizá tu Envío */}
          <Link
            href="/cotizar/express"
            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#6366F1] hover:bg-[#4f46e5] text-white font-subheading uppercase text-sm tracking-wider font-bold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg hover:shadow-[#6366F1]/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
          >
            <span>Cotizá tu Envío</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>

          {/* Botón Secundario: Chateá con Nosotros */}
          <a
            href="https://wa.me/542236602699?text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#22C55E] hover:bg-[#16a34a] text-white font-subheading uppercase text-sm tracking-wider font-bold inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Chateá con Nosotros</span>
          </a>
        </div>
      </div>
    </section>
  );
}
