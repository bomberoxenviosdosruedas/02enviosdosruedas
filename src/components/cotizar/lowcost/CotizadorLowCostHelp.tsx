'use client';

import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, Mail, PhoneCall } from 'lucide-react';

export default function CotizadorLowCostHelp() {
  return (
    <div id="cotizador-lowcost-help" className="double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300 mt-12">
      <div className="double-bezel-inner bg-white p-6 sm:p-10 rounded-xl border border-brand-blue-50/50 text-brand-blue-700 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,var(--color-brand-yellow-500),transparent_40%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,var(--color-brand-blue-700),transparent_40%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="px-3 py-1 bg-brand-blue-50 text-brand-blue-700 rounded-full text-xs font-subheading tracking-wider uppercase inline-flex items-center gap-1.5">
              <HelpCircle className="h-4.5 w-4.5 shrink-0" />
              ¿Dudas o Envíos Especiales?
            </span>
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-[0.02em] text-brand-blue-700">
              ¿Tenés una cuenta corporativa?
            </h3>
            <p className="text-brand-blue-600 text-sm sm:text-base leading-relaxed font-sans">
              Accedé a facturación semanal, quincenal o mensual. Factura tipo C disponible y resúmenes de los envíos realizados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center shrink-0">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="/contacto"
              className="inline-flex items-center justify-between bg-brand-blue-700 hover:bg-brand-blue-600 text-white font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-md transition-all"
            >
              <span>Formulario de Contacto</span>
              <span className="cta-nested-icon bg-white/20 text-white h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                <Mail className="h-4 w-4" />
              </span>
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              href="tel:+542236602699"
              className="inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-700 font-subheading tracking-wider text-sm uppercase px-6 py-3.5 rounded-full shadow-accent-md transition-all"
            >
              <span>Llamanos: <span className="font-mono text-brand-blue-700">223-660-2699</span></span>
              <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-700 h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                <PhoneCall className="h-4 w-4" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
