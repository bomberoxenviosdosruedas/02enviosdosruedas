'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Shield, Map, Zap, CheckCircle2 } from 'lucide-react';

export default function CotizadorExpressDetails() {
  const features = [
    {
      icon: Map,
      title: 'Visualización en Mapa',
      desc: 'Observá la ruta exacta que tomará tu envío en un mapa interactivo diseñado a medida.',
    },
    {
      icon: Zap,
      title: 'Cálculo Preciso',
      desc: 'Obtené estimaciones de distancia y tiempo basadas en datos de tráfico y ruteo actualizados.',
    },
    {
      icon: CheckCircle2,
      title: 'Confirmación Fácil',
      desc: 'Una vez cotizado, podés proceder a confirmar tu envío con pocos clics a través de WhatsApp.',
    },
  ];

  return (
    <div id="cotizador-express-details" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      {/* Column 1: Benefits */}
      <div className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
          <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue border-b border-brand-blue-50 pb-3">
            Beneficios del Cotizador
          </h3>
          <div className="space-y-5">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-ink font-sans text-sm uppercase tracking-wide">
                      {feat.title}
                    </h4>
                    <p className="text-brand-blue-400 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Column 2: Tarification details & Advice */}
      <div className="lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
          <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue border-b border-brand-blue-50 pb-3">
            Pautas del Envío Express
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-brand-blue-500 font-sans leading-relaxed">
            <p>
              <strong className="text-brand-ink">Peso máximo por moto:</strong> Hasta <span className="font-mono text-brand-ink font-bold">15 kg</span> por unidad.
            </p>
            <p>
              <strong className="text-brand-ink">Bulto:</strong> Hasta <span className="font-mono text-brand-ink font-bold">40x40</span> y <span className="font-mono text-brand-ink font-bold">5kg</span> sin cargo extra.
            </p>
            <p>
              <strong className="text-brand-ink">Garantía de entrega</strong>
            </p>

            <div className="bg-brand-yellow-50 border border-brand-yellow-100 rounded-2xl p-4 mt-6">
              <h4 className="font-bold text-brand-blue-700 font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1.5">
                <Shield className="h-4 w-4 shrink-0 text-brand-blue-700" />
                Garantía DosRuedas
              </h4>
              <p className="text-xs text-brand-blue-700/80">
                Coordinación rápida y directa de manera segura. Ante cualquier inconveniente, nos contactamos con vos de inmediato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
