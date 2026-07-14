'use client';

import React from 'react';
import { Shield, Map, Zap, CheckCircle2 } from 'lucide-react';

export default function CotizadorLowCostDetails() {
  const features = [
    {
      icon: Map,
      title: 'Visualización en Mapa',
      desc: 'Observá la ruta exacta que tomará tu envío en un mapa interactivo diseñado a medida.',
    },
    {
      icon: Zap,
      title: 'Cálculo Preciso',
      desc: 'Obtené estimaciones de distancia y tiempo basadas en datos de tráfico y ruteo diario actualizados.',
    },
    {
      icon: CheckCircle2,
      title: 'Confirmación Fácil',
      desc: 'Una vez cotizado, podés proceder a confirmar tu envío con pocos clics a través de WhatsApp.',
    },
  ];

  return (
    <div id="cotizador-lowcost-details" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      {/* Column 1: Benefits */}
      <div className="lg:col-span-7 double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-[0_0_20px_rgba(6,54,165,0.15)] border border-[#BACEFD] p-2 rounded-2xl transition-all duration-300">
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
      <div className="lg:col-span-5 double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-[0_0_20px_rgba(6,54,165,0.15)] border border-[#BACEFD] p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
          <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue border-b border-brand-blue-50 pb-3">
            Envios LowCost
          </h3>
          <div className="space-y-4 text-xs sm:text-sm text-brand-blue-500 font-sans leading-relaxed">
            <p>Entregas en el dia si es solicitado antes de <span className="font-mono text-brand-ink font-bold">13hs</span>, o al dia siguiente para los solicitados luego de <span className="font-mono text-brand-ink font-bold">13hs</span>.</p>

            <div className="bg-[#FFFDE6] border border-brand-yellow-100 rounded-2xl p-4 mt-6">
              <h4 className="font-bold text-[#0636A5] font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1.5">
                <Shield className="h-4 w-4 shrink-0 text-[#0636A5]" />
                Garantía de Entrega
              </h4>
              <p className="text-xs text-[#0636A5]/80">
                Tus paquetes viajan seguros. Optimizamos y agrupamos los recorridos diarios para ofrecerte la tarifa más económica del mercado local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
