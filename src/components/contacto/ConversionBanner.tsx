'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function ConversionBanner() {
  return (
    <section className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 p-2 rounded-2xl shadow-xl my-12">
      <div className="double-bezel-inner bg-brand-blue-700 text-white p-8 sm:p-12 rounded-xl border border-white/10 relative overflow-hidden text-center space-y-6">
        {/* Background glow ambient effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-pulse shadow-[0_0_8px_#FFEC01]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-yellow-500">
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
              className="w-full sm:w-auto cta-nested-pill bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 border-none shadow-accent font-subheading tracking-wider uppercase text-sm py-3.5 px-8 cursor-pointer justify-center transition-all duration-300 active:scale-[0.99]"
            >
              <span>Cotizá tu Envío</span>
              <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 shrink-0">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Botón Secundario: Chateá con Nosotros */}
            <a
              href="https://wa.me/542236602699?text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto cta-nested-pill bg-white hover:bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 shadow-elevated font-subheading tracking-wider uppercase text-sm py-3.5 px-8 cursor-pointer justify-center transition-all duration-300 active:scale-[0.99]"
            >
              <span>Chateá con Nosotros</span>
              <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-700 shrink-0">
                <MessageCircle className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
