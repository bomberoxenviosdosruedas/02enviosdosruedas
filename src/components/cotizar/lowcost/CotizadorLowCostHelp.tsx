'use client';

import React from 'react';
import Link from 'next/link';
import { HelpCircle, Mail, PhoneCall } from 'lucide-react';

export default function CotizadorLowCostHelp() {
  return (
    <div id="cotizador-lowcost-help" className="bg-brand-blue text-white rounded-3xl p-6 sm:p-10 mt-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(255,236,1,0.06),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.03),transparent_40%)] pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-3 max-w-2xl text-center md:text-left">
          <span className="px-3 py-1 bg-white/10 text-brand-yellow rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 font-sans">
            <HelpCircle className="h-4.5 w-4.5 shrink-0" />
            ¿Dudas o Envíos Especiales?
          </span>
          <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white">
            ¿Tenés una cuenta corporativa?
          </h3>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
            Accedé a facturación semanal, quincenal o mensual. Factura tipo C disponible y resúmenes de los envíos realizados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center shrink-0">
          <Link
            href="/contacto"
            className="bg-white hover:bg-slate-100 text-brand-blue font-subheading tracking-wider text-sm uppercase px-6 py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 font-medium"
          >
            <Mail className="h-4.5 w-4.5" />
            Formulario de Contacto
          </Link>
          <a
            href="tel:+542236602699"
            className="bg-brand-yellow hover:bg-brand-yellow/95 text-brand-blue font-subheading tracking-wider text-sm uppercase px-6 py-4 rounded-xl shadow-accent-md hover:shadow-accent-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
          >
            <PhoneCall className="h-4.5 w-4.5" />
            Llamanos: 223-660-2699
          </a>
        </div>
      </div>
    </div>
  );
}
