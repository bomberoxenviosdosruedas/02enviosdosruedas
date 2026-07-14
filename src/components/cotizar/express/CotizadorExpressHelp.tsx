'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Mail, PhoneCall } from 'lucide-react';

export default function CotizadorExpressHelp() {
  return (
    <div id="cotizador-express-help" className="bg-gradient-to-r from-brand-blue-700 to-brand-blue-600 text-white rounded-3xl p-6 sm:p-10 mt-12 relative overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(6,54,165,0.3)]">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,204,0,0.06),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 bg-white/10 text-brand-yellow rounded-full text-xs font-subheading tracking-wider uppercase inline-flex items-center gap-1.5">
            <HelpCircle className="h-4.5 w-4.5 shrink-0" />
            ¿Dudas o Envíos Especiales?
          </span>
          <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-[0.02em] text-white">
            ¿Necesitás un cadete recurrente?
          </h3>
          <p className="text-brand-blue-50 text-sm sm:text-base leading-relaxed font-sans">
            Si realizás más de 5 envíos diarios express, consultá por nuestros planes para empresas y emprendedores.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center shrink-0">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            href="/contacto"
            className="inline-flex items-center justify-between bg-white hover:bg-brand-blue-50 text-brand-blue font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-md transition-all"
          >
            <span>Formulario de Contacto</span>
            <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
              <Mail className="h-4 w-4" />
            </span>
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            href="tel:+542236602699"
            className="inline-flex items-center justify-between bg-brand-yellow hover:bg-[#FFF12E] text-brand-blue font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-accent-md transition-all"
          >
            <span>Llamanos: <span className="font-mono text-brand-blue">223-660-2699</span></span>
            <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
              <PhoneCall className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </div>
  );
}
