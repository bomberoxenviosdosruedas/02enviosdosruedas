'use client';

import React from 'react';
import { Shield, Map, Clock, Calendar, Truck, CheckCircle2 } from 'lucide-react';

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
      <div className="lg:col-span-7 rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 space-y-6 text-white relative overflow-hidden">
          {/* Visual Watermark */}
          <Truck
            className="absolute -bottom-8 -right-8 w-56 h-56 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-3">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-[#FFF12E] font-bold">
              Beneficios del Servicio LowCost
            </h3>
            <span className="px-3 py-1 bg-white/10 text-[#FFF12E] border border-white/20 rounded-full text-xs font-mono font-bold uppercase tabular-nums">
              Hasta 40% Ahorro
            </span>
          </div>

          <div className="relative z-10 space-y-5">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-white/10 text-[#FFF12E] border border-white/20 rounded-xl shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-sans text-sm uppercase tracking-wide">
                      {feat.title}
                    </h4>
                    <p className="text-white/80 text-xs sm:text-sm font-sans mt-1 leading-relaxed">
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
      <div className="lg:col-span-5 rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 space-y-6 flex flex-col justify-between h-full text-white relative overflow-hidden">
          {/* Visual Watermark */}
          <Clock
            className="absolute -bottom-8 -right-8 w-56 h-56 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-[#FFF12E] font-bold border-b border-white/15 pb-3">
              Franjas de Entrega LowCost
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-white/85 font-sans leading-relaxed mt-4">
              <div className="flex items-start gap-2.5">
                <Calendar className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Horario de Corte:</strong> Pedidos ingresados antes de las <span className="font-mono text-[#FFF12E] font-bold tabular-nums">13:00 hs</span> se entregan en la tarde del mismo día.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Turno Tarde:</strong> Reparto masivo entre las <span className="font-mono text-white font-bold tabular-nums">14:00 y 20:00 hs</span> con trazabilidad garantizada.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Truck className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Pedidos Posteriores:</strong> Los pedidos recibidos después de las <span className="font-mono text-white font-bold tabular-nums">13:00 hs</span> se programan para el primer turno del día hábil siguiente.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white/10 border border-white/20 rounded-xl p-4 mt-4">
            <h4 className="font-bold text-[#FFF12E] font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1">
              <Shield className="h-4 w-4 shrink-0 text-[#FFF12E]" />
              Garantía de Reparto Diario
            </h4>
            <p className="text-xs text-white/80 font-sans leading-relaxed">
              Optimizamos los circuitos viales de la ciudad para garantizar que cada paquete llegue a destino con seguridad y al menor costo por km.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
