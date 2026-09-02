'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Mail, PhoneCall } from 'lucide-react';

export default function CotizadorLowCostHelp() {
  return (
    <div
      id="cotizador-lowcost-help"
      className="relative overflow-hidden rounded-[28px] sm:rounded-[30px] p-6 sm:p-10 mt-12 bg-[#052C87] text-white border border-white/20 shadow-2xl"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,241,46,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(9,80,246,0.3) 0%, transparent 70%)',
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
          <span className="px-3.5 py-1 bg-white/10 text-[#FFF12E] rounded-full text-xs font-subheading font-bold tracking-wider uppercase inline-flex items-center gap-1.5 border border-white/20 -rotate-1 shadow-glow-yellow">
            <HelpCircle className="h-4 w-4 shrink-0 text-[#FFF12E]" />
            Cuentas Corrientes y PyMEs
          </span>
          <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-tight">
            ¿Tenés envíos recurrentes o tienda E-Commerce?
          </h3>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans font-light">
            Accedé a facturación quincenal o mensual consolidada, retiro programado en tu depósito o local y tarifas diferenciales por volumen en Mar del Plata.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto justify-center shrink-0">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contacto"
            className="group min-h-[52px] inline-flex items-center justify-between bg-white hover:bg-white/90 text-[#0950F6] font-subheading font-bold tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-lg transition-all"
          >
            <span>Formulario de Contacto</span>
            <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
              <Mail className="h-4 w-4" />
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+542236602699"
            className="group min-h-[52px] inline-flex items-center justify-between bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-lg transition-all"
          >
            <span>Llamanos: <span className="font-mono text-white tabular-nums">223 660-2699</span></span>
            <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
              <PhoneCall className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
