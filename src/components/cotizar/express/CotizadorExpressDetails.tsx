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
      <div className="lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-elevated transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6">
          <div className="flex items-center justify-between border-b border-brand-blue-50 pb-3">
            <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold">
              Beneficios del Servicio Express
            </h3>
            <span className="px-3 py-1 bg-brand-yellow-50 text-brand-blue-700 border border-brand-yellow-200 rounded-full text-xs font-subheading uppercase font-bold">
              Tarifas 2026
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

      {/* Column 2: Guidelines & Safety (5 cols) */}
      <div className="lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-elevated transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 space-y-6 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xl font-subheading uppercase tracking-wider text-brand-blue-700 font-bold border-b border-brand-blue-50 pb-3">
              Pautas Operativas Express
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-brand-ink/80 font-sans leading-relaxed mt-4">
              <div className="flex items-start gap-2.5">
                <Scale className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Capacidad Máxima:</strong> Hasta <span className="font-mono text-brand-ink font-bold">15 kg</span> por viaje en caja / mochila de moto.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <PackageCheck className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Dimensiones:</strong> Bultos de hasta <span className="font-mono text-brand-ink font-bold">40 × 40 cm</span> entran en tarifa estándar.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-brand-ink">Horario de Operación:</strong> Lunes a Sábados de 8:00 a 20:00 hs con monitoreo activo.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-yellow-50 border border-brand-yellow-200 rounded-xl p-4 mt-4">
            <h4 className="font-bold text-brand-blue-900 font-subheading text-sm tracking-wider uppercase flex items-center gap-1.5 mb-1">
              <Shield className="h-4 w-4 shrink-0 text-brand-blue-700" />
              Garantía DosRuedas MDQ
            </h4>
            <p className="text-xs text-brand-blue-900/80 font-sans leading-relaxed">
              15+ años operando en las calles de Mar del Plata. Tu paquete viaja asegurado y con seguimiento directo de punta a punta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
