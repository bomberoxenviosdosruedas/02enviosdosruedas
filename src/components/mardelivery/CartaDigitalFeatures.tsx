'use client';

import React from 'react';
import {
  QrCode,
  Zap,
  BarChart3,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export function CartaDigitalFeatures() {
  const features = [
    {
      title: 'Carta Digital & Menú QR Interactivo',
      badge: 'Catálogo Autogestionable',
      description:
        'Tus clientes escanean el código QR en mesa o abren el enlace desde Instagram para explorar tu carta completa con fotos, adicionales y precios siempre al día.',
      highlights: [
        'Pedidos directos para Take Away o Delivery',
        'Cupones de descuento y promociones por día',
        'Recepción automática en WhatsApp o comandera',
      ],
      icon: QrCode,
      tagColor: 'emerald' as const,
    },
    {
      title: 'Carga Rápida de Envíos desde WhatsApp',
      badge: 'Automatización Inteligente',
      description:
        '¿Tus clientes te escriben por chat? Copiá y pegá el mensaje con la dirección y el sistema autocompleta los datos del envío sin necesidad de tipeo manual.',
      highlights: [
        'Detección inteligente de dirección en Mar del Plata',
        'Asignación inmediata al cadete disponible',
        'Menos errores de tipeo y despacho más veloz',
      ],
      icon: Zap,
      tagColor: 'amber' as const,
    },
    {
      title: 'Estadísticas, Rendimiento y Control Excel',
      badge: 'Gestión Comercial',
      description:
        'Tené el control de tu negocio con reportes detallados. Monitoreá el volumen de entregas por turno, costos de cadetería y exportá resúmenes contables en un clic.',
      highlights: [
        'Métricas de despachos por barrio y horario',
        'Historial de pedidos y rendimiento de repartidores',
        'Exportación directa a formato Excel / CSV',
      ],
      icon: BarChart3,
      tagColor: 'emerald' as const,
    },
  ];

  return (
    <section id="carta-digital" className="py-16 sm:py-24 lg:py-28 bg-[#EEF6F2] relative font-sans border-b border-[#2ECC85]/20">
      {/* Detalle visual sutil de fondo */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#2ECC85]/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2ECC85]/15 border border-[#2ECC85]/35 text-[#1B8756] text-xs font-subheading font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2ECC85]" />
            TECNOLOGÍA MARÍTIMA & METROPOLITANA MDQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#031811]">
            Digitalizá tu carta y optimizá tus despachos
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#031811]/75 leading-relaxed">
            Herramientas diseñadas para que los locales de Mar del Plata vendan más y entreguen mejor, sin intermediarios que absorban tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            const isAmber = item.tagColor === 'amber';

            return (
              <div
                key={item.title}
                className="rounded-2xl p-6 sm:p-8 bg-white border border-[#031811]/10 shadow-[0_6px_24px_-4px_rgba(3,24,17,0.06)] hover:shadow-[0_14px_36px_-6px_rgba(3,24,17,0.12)] hover:border-[#2ECC85]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#031811] text-[#2ECC85] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span
                      className={`text-2xs font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isAmber
                          ? 'bg-[#F5B938]/15 text-[#8C6207] border-[#F5B938]/30'
                          : 'bg-[#2ECC85]/12 text-[#1B8756] border-[#2ECC85]/25'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-[#031811]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#031811]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-[#031811]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#2ECC85] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-[#031811]/5 flex items-center justify-between text-xs font-mono text-[#1B8756] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2ECC85]" />
                    Operación sin comisiones
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
