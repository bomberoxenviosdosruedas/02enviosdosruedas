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
    <div id="cotizador-lowcost-details" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
      {/* Column 1: Benefits */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue border-b border-slate-100 pb-3">
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
                  <h4 className="font-bold text-slate-800 font-sans text-sm uppercase tracking-wide">
                    {feat.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Column 2: Tarification details & Advice */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <h3 className="text-xl font-display uppercase tracking-tight text-brand-blue border-b border-slate-100 pb-3">
          Envíos LowCost
        </h3>
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          <p>
            <strong className="text-slate-800">Entregas en el día:</strong> Si tu envío es solicitado antes de las 13:00 hs, la entrega queda garantizada en la tarde del mismo día.
          </p>
          <p>
            <strong className="text-slate-800">Siguiente día hábil:</strong> Los envíos solicitados luego de las 13:00 hs se entregarán al día siguiente.
          </p>
 
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mt-6">
            <h4 className="font-bold text-amber-800 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
              <Shield className="h-4 w-4 shrink-0" />
              Garantía de Entrega
            </h4>
            <p className="text-xs text-amber-900/80">
              Tus paquetes viajan seguros. Optimizamos y agrupamos los recorridos diarios para ofrecerte la tarifa más económica del mercado local.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
