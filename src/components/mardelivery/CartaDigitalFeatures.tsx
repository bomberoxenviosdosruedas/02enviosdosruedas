'use client';

import React from 'react';
import {
  QrCode,
  Zap,
  BarChart3,
  Smartphone,
  CheckCircle2,
  FileSpreadsheet,
  Percent,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

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
    },
  ];

  return (
    <section id="carta-digital" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-xs font-subheading uppercase tracking-widest text-brand-blue-500 font-bold px-3 py-1 bg-brand-blue-50 rounded-full border border-brand-blue-200">
            Tecnología para Gastronomía
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-blue-500">
            Digitalizá tu carta y optimizá tus despachos
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-blue-900/75">
            Herramientas diseñadas para que los locales de Mar del Plata vendan más y entreguen mejor, sin intermediarios que absorban tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <DoubleBezelCard
                key={item.title}
                variant="light"
                className="h-full flex flex-col justify-between"
                innerClassName="p-6 sm:p-8 flex flex-col justify-between h-full bg-white text-brand-blue-900"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-2xs font-subheading font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-blue-900/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-brand-blue-900/85">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
