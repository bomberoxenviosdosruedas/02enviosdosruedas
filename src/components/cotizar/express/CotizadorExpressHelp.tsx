'use client';

import React from 'react';
import { HelpCircle, Mail, PhoneCall } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

export default function CotizadorExpressHelp() {
  return (
    <div id="cotizador-express-help" className="mt-12">
      <DoubleBezelCard>
        <div className="bg-[#0950F6] p-6 sm:p-10 rounded-[20px] text-white border border-white/20 shadow-xl relative overflow-hidden">
          {/* Background ambient lighting */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,236,1,0.18) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* Visual Watermark */}
          <HelpCircle
            className="absolute -bottom-10 -right-10 w-72 h-72 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="px-3.5 py-1 bg-white/10 text-[#FFEC01] rounded-full text-xs font-subheading font-bold tracking-wider uppercase inline-flex items-center gap-1.5 border border-white/20 -rotate-1 shadow-glow-yellow">
                <HelpCircle className="h-4 w-4 shrink-0 text-[#FFEC01]" />
                ¿Dudas o Envíos Especiales?
              </span>
              <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-tight">
                ¿Necesitás cadetería recurrente o bultos especiales?
              </h3>
              <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans font-light">
                Si realizás más de 5 envíos diarios o necesitás distribución continua para tu comercio en Mar del Plata, consultá por nuestros convenios y cuentas corrientes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto justify-center shrink-0">
              <CTANestedPill
                href="/contacto"
                text="Formulario de Contacto"
                variant="secondary"
              />
              <CTANestedPill
                href="tel:+542236602699"
                text="Llamanos: 223 660-2699"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </DoubleBezelCard>
    </div>
  );
}
