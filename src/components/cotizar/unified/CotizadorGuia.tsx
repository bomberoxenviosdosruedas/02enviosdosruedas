'use client';

import React from 'react';
import { MapPin, GitCompareArrows, MessageCircle } from 'lucide-react';

const PASOS = [
  {
    n: '01',
    icon: MapPin,
    titulo: 'Cargá el envío',
    detalle: 'Retiro, entrega y tus datos de contacto.',
  },
  {
    n: '02',
    icon: GitCompareArrows,
    titulo: 'Compará las dos tarifas',
    detalle: 'Precio y tiempo de cada servicio, lado a lado.',
  },
  {
    n: '03',
    icon: MessageCircle,
    titulo: 'Elegí y confirmá',
    detalle: 'Te pasamos el pedido armado por WhatsApp.',
  },
];

/**
 * Riel de orientación de la guía. Es una secuencia real —el orden importa porque
 * cada paso habilita el siguiente—, por eso lleva numeración. Se muestra siempre
 * arriba, incluso con resultados en pantalla, para no perder el hilo.
 */
export default function CotizadorGuia() {
  return (
    <nav aria-label="Cómo funciona el cotizador" className="w-full">
      <ol className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        {PASOS.map((paso) => (
          <li
            key={paso.n}
            className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3.5"
          >
            <span className="font-mono text-xs text-brand-yellow-500 tabular-nums shrink-0 pt-0.5">
              {paso.n}
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 font-subheading text-xs uppercase font-bold tracking-wider text-white">
                <paso.icon className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" aria-hidden="true" />
                {paso.titulo}
              </span>
              <span className="block font-sans text-xs text-white/70 mt-1 leading-snug">
                {paso.detalle}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
