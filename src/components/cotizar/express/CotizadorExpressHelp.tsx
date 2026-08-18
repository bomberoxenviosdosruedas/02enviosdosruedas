'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Mail, PhoneCall, ArrowRight } from 'lucide-react';

export default function CotizadorExpressHelp() {
  return (
    <div
      id="cotizador-express-help"
      className="relative overflow-hidden rounded-3xl p-6 sm:p-10 mt-12 bg-gradient-to-r from-brand-blue-800 via-brand-blue-700 to-brand-blue-900 text-white border border-white/10 shadow-elevated"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,236,1,0.18) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="space-y-3 max-w-2xl text-center lg:text-left">
          <span className="px-3.5 py-1 bg-white/10 text-brand-yellow-500 rounded-full text-xs font-subheading font-bold tracking-wider uppercase inline-flex items-center gap-1.5 border border-white/10">
            <HelpCircle className="h-4 w-4 shrink-0 text-brand-yellow-500" />
            ¿Dudas o Envíos Especiales?
          </span>
          <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white leading-tight">
            ¿Necesitás cadetería recurrente o bultos especiales?
          </h3>
          <p className="text-brand-blue-100/90 text-sm sm:text-base leading-relaxed font-sans font-light">
            Si realizás más de 5 envíos diarios o necesitás distribución continua para tu comercio en Mar del Plata, consultá por nuestros convenios y cuentas corrientes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3.5 w-full lg:w-auto justify-center shrink-0">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="/contacto"
            className="cta-nested-pill inline-flex items-center justify-between bg-white hover:bg-brand-blue-50 text-brand-blue-700 font-subheading font-bold tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-md transition-all min-h-[44px]"
          >
            <span>Formulario de Contacto</span>
            <span className="cta-nested-icon bg-brand-blue-50 text-brand-blue-700 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ml-3">
              <Mail className="h-4 w-4" />
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+542236602699"
            className="cta-nested-pill inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading font-bold tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-accent-sm hover:shadow-cta-glow transition-all min-h-[44px]"
          >
            <span>Llamanos: <span className="font-mono text-brand-blue-900">223-660-2699</span></span>
            <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ml-3">
              <PhoneCall className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
