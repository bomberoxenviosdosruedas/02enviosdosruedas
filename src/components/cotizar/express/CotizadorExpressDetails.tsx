'use client';

import React from 'react';
import { Shield, Map, Zap, CheckCircle2, PackageCheck, Scale, Clock } from 'lucide-react';

export default function CotizadorExpressDetails() {
  const features = [
    {
      icon: Map,
      title: 'Ruteo Urbano Preciso',
      desc: 'Medición métrica exacta entre puntos de Mar del Plata con tecnología de ruteo OSRM.',
    },
    {
      icon: Zap,
      title: 'Prioridad Inmediata (< 120 min)',
      desc: 'Asignación directa a cadete en moto apenas confirmás la solicitud. Sin esperas ni desvíos.',
    },
    {
      icon: CheckCircle2,
      title: 'Confirmación Directa por WhatsApp',
      desc: 'Coordiná en 1 clic con todos los datos precargados, sin registros tediosos ni esperas de validación.',
    },
  ];

  return (
    <div id="cotizador-express-details" className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
      {/* Column 1: Benefits (7 cols) */}
      <div className="lg:col-span-7 rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 space-y-6 text-white relative overflow-hidden">
          {/* Visual Watermark */}
          <Zap
            className="absolute -bottom-8 -right-8 w-56 h-56 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-3">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-[#FFF12E] font-bold">
              Beneficios del Servicio Express
            </h3>
            <span className="px-3 py-1 bg-white/10 text-white border border-white/20 rounded-full text-xs font-mono font-bold uppercase tabular-nums">
              Tarifas 2026
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

      {/* Column 2: Guidelines & Safety (5 cols) */}
      <div className="lg:col-span-5 rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 space-y-6 flex flex-col justify-between h-full text-white relative overflow-hidden">
          {/* Visual Watermark */}
          <Shield
            className="absolute -bottom-8 -right-8 w-56 h-56 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-[#FFF12E] font-bold border-b border-white/15 pb-3">
              Pautas Operativas Express
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-white/85 font-sans leading-relaxed mt-4">
              <div className="flex items-start gap-2.5">
                <Scale className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Capacidad Máxima:</strong> Hasta <span className="font-mono text-[#FFF12E] font-bold tabular-nums">15 kg</span> por viaje en caja / mochila de moto.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <PackageCheck className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Dimensiones:</strong> Bultos de hasta <span className="font-mono text-[#FFF12E] font-bold tabular-nums">40 × 40 cm</span> entran en tarifa estándar.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#FFF12E] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Horario de Operación:</strong> Lunes a Sábados de <span className="font-mono text-white font-bold tabular-nums">08:00 a 20:00 hs</span> con monitoreo activo.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white/10 border border-white/20 rounded-xl p-4 mt-4">
            <h4 className="font-bold text-[#FFF12E] font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1">
              <Shield className="h-4 w-4 shrink-0 text-[#FFF12E]" />
              Garantía DosRuedas MDQ
            </h4>
            <p className="text-xs text-white/80 font-sans leading-relaxed">
              Más de 7 años operando en las calles de Mar del Plata. Tu paquete viaja asegurado y con seguimiento directo de punta a punta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
