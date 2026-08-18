'use client';

import React from 'react';
import { Shield, Map, Zap, CheckCircle2, Clock, Calendar, Truck } from 'lucide-react';

export default function CotizadorLowCostDetails() {
  const features = [
    {
      icon: Map,
      title: 'Ruteo Batch Inteligente',
      desc: 'Agrupamos entregas por cercanía en Mar del Plata para reducir costos operativos y transferirte el ahorro.',
    },
    {
      icon: Clock,
      title: 'Entrega Same-Day Garantizada',
      desc: 'Solicitando antes de las 13:00 hs, tu paquete se entrega en el día dentro de las franjas habituales.',
    },
    {
      icon: CheckCircle2,
      title: 'Tarifa Fija Predecible',
      desc: 'Valores oficiales 2026 claros y sin sorpresas para que puedas presupuestar los costos de tu tienda.',
    },
  ];

  return (
    <div id="cotizador-lowcost-details" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      {/* Column 1: Benefits (7 cols) */}
      <div className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-elevated transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
          <div className="flex items-center justify-between border-b border-brand-blue-50 pb-3">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
              Beneficios del Servicio LowCost
            </h3>
            <span className="px-3 py-1 bg-brand-yellow-50 text-brand-blue-700 border border-brand-yellow-200 rounded-full text-xs font-subheading uppercase font-bold">
              Hasta 40% Ahorro
            </span>
          </div>

          <div className="space-y-5">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-xl shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-ink font-sans text-sm uppercase tracking-wide">
                      {feat.title}
                    </h4>
                    <p className="text-brand-ink/70 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Column 2: Delivery Windows & Operational Advice (5 cols) */}
      <div className="lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-elevated transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold border-b border-brand-blue-50 pb-3">
              Franjas de Entrega LowCost
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-brand-ink/80 font-sans leading-relaxed mt-4">
              <div className="flex items-start gap-2.5">
                <Calendar className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Horario de Corte:</strong> Pedidos ingresados antes de las <span className="font-mono text-brand-ink font-bold">13:00 hs</span> se entregan en la tarde del mismo día.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Turno Tarde:</strong> Reparto masivo entre las <span className="font-mono text-brand-ink font-bold">14:00 y 20:00 hs</span> con trazabilidad garantizada.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Pedidos Posteriores:</strong> Los pedidos recibidos después de las 13:00 hs se programan para el primer turno del día hábil siguiente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-yellow-50 border border-brand-yellow-200 rounded-xl p-4 mt-4">
            <h4 className="font-bold text-brand-blue-900 font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1">
              <Shield className="h-4 w-4 shrink-0 text-brand-blue-700" />
              Garantía de Reparto Diario
            </h4>
            <p className="text-xs text-brand-blue-900/80 font-sans leading-relaxed">
              Optimizamos los circuitos viales de la ciudad para garantizar que cada paquete llegue a destino con seguridad y al menor costo por km.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
