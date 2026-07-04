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
    <div id="cotizador-express-details" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
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
          ¿Cómo Calculamos el Precio?
        </h3>
        <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          <p>
            <strong className="text-slate-800">Basado en la Distancia:</strong> Utilizamos la distancia calculada entre origen y destino para determinar la tarifa base. Contamos con rangos de precios predefinidos para asegurar que el costo sea justo y cubra el esfuerzo del repartidor.
          </p>
          <p>
            <strong className="text-slate-800">Tiempo Estimado (Informativo):</strong> El tiempo de entrega estimado se calcula utilizando datos de tráfico y la distancia. Al ser un envío Express, la prioridad es máxima y la entrega se realiza generalmente en menos de 180 minutos (desde el retiro).
          </p>

          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 mt-6">
            <h4 className="font-bold text-amber-800 text-xs uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
              <Shield className="h-4 w-4 shrink-0" />
              Consejos para una cotización exitosa
            </h4>
            <ul className="list-disc pl-4 space-y-1 text-xs text-amber-900/80">
              <li>Ingresá la numeración exacta de las calles (Ej: Mitre 1820).</li>
              <li>Verificá en el mapa dinámico que la ruta trazada sea coherente.</li>
              <li>Asegurá de tener listos los datos de contacto y detalles del paquete para la confirmación rápida en WhatsApp.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
