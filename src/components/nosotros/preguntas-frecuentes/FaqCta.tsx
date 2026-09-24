'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

export default function FaqCta() {
  return (
    <section
      id="faq-cta"
      className="py-24 bg-[#0950F6] text-white relative overflow-hidden border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <DoubleBezelCard>
          <div className="bg-[#0950F6] p-8 sm:p-12 rounded-[20px] border border-white/20 text-white text-center relative overflow-hidden">
            {/* Abstract background logo */}
            <div className="absolute right-0 bottom-0 translate-y-8 translate-x-8 text-white/5 pointer-events-none -z-10">
              <HelpCircle className="h-64 w-64 text-white opacity-10" />
            </div>

            <div className="max-w-2xl mx-auto space-y-6 relative z-10 flex flex-col items-center">

              <span className="px-4 py-1.5 bg-[#FFEC01] text-[#0950F6] font-bold rounded-full text-xs font-subheading uppercase tracking-widest inline-block shadow-glow-yellow transform -rotate-1">
                SOPORTE HUMANO EN MDP
              </span>

              <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight leading-[1.1] text-white">
                ¿NO ENCONTRASTE LO QUE BUSCABAS?
              </h3>

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans">
                No te preocupes. Nuestro equipo de soporte está listo para ayudarte de inmediato con cualquier consulta específica que tengas sobre nuestros servicios de mensajería y delivery.
              </p>

              {/* CTA Buttons (WhatsApp en amarillo #FFEC01 + azul #0950F6) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
                <CTANestedPill
                  href="https://wa.me/542236602699?text=Hola,%20tengo%20una%20consulta%20que%20no%20encontr%C3%A9%20en%20las%20FAQ"
                  variant="primary"
                >
                  Hablá por WhatsApp
                </CTANestedPill>

                <CTANestedPill
                  href="/contacto"
                  variant="outline"
                >
                  Contacto Directo
                </CTANestedPill>
              </div>

            </div>
          </div>
        </DoubleBezelCard>
      </div>
    </section>
  );
}