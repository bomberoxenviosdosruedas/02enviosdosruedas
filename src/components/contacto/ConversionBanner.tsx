'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

export default function ConversionBanner() {
  return (
    <section className="my-12">
      <DoubleBezelCard>
        <div className="bg-[#0950F6] text-white p-8 sm:p-12 rounded-[20px] border border-white/20 relative overflow-hidden text-center space-y-6">
          <MessageCircle
            className="absolute -bottom-10 -right-10 w-72 h-72 text-white/3 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 -rotate-1 shadow-glow-yellow">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFEC01] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFEC01] tabular-nums">
                Operaciones Activas Mar del Plata 2026
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white leading-tight">
              ¿Tenés envíos para hoy? Los entregamos a tiempo.
            </h2>

            <p className="text-white/85 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <CTANestedPill
                href="/cotizar/express"
                variant="primary"
              >
                Cotizá tu Envío
              </CTANestedPill>

              <CTANestedPill
                href="https://wa.me/542236602699?text=Hola!%20Quiero%20coordinar%20mis%20env%C3%ADos%20de%20hoy."
                variant="outline"
              >
                Chateá con Nosotros
              </CTANestedPill>
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </section>
  );
}