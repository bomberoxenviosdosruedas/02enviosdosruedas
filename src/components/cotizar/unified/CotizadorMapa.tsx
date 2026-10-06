'use client';

import React from 'react';
import DynamicRouteMap from '@/components/ui/DynamicRouteMap';
import type { UseCotizadorUnificadoReturn } from '@/hooks/cotizador/useCotizadorUnified';

interface CotizadorMapaProps {
  form: Pick<UseCotizadorUnificadoReturn, 'origenCoords' | 'destinoCoords' | 'routeCoords' | 'resultado'>;
}

/**
 * La ruta es única: es la misma medición que alimenta las dos tarifas. El pie
 * aclara que el trazado no cambia según el servicio elegido, porque no cambia.
 */
export default function CotizadorMapa({ form }: CotizadorMapaProps) {
  const { origenCoords, destinoCoords, routeCoords, resultado } = form;

  return (
    <div className="lg:col-span-5 min-h-90 lg:min-h-full rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl">
      <div className="bg-brand-blue-900 p-6 rounded-[20px] border border-white/10 flex flex-col justify-between h-full relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

        <div className="relative z-10 flex justify-between items-center border-b border-white/15 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 motion-safe:animate-ping" />
            <span className="text-xs font-mono text-brand-yellow-500 uppercase tracking-widest font-semibold tabular-nums">
              Midiendo ruta
            </span>
          </div>
          <span className="text-2xs font-mono text-white/90 tabular-nums">
            OpenStreetMap + OSRM
          </span>
        </div>

        <div className="relative grow min-h-65 rounded-xl overflow-hidden border border-white/15 shadow-inner z-10">
          <DynamicRouteMap
            origin={origenCoords}
            destination={destinoCoords}
            routeCoords={routeCoords}
            distanceKm={resultado?.distancia}
            serviceType="EXPRESS"
          />
        </div>

        <div className="relative z-10 text-[11px] font-mono text-white/90 space-y-1.5 border-t border-white/15 pt-3 mt-3 tabular-nums">
          <div className="flex justify-between gap-3">
            <span>Distancia:</span>
            <span className="text-white">
              {resultado ? `${resultado.distancia} km` : 'Pendiente'}
            </span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Tarifa:</span>
            <span className="text-brand-yellow-500 font-bold uppercase">Express + LowCost</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Cobertura:</span>
            <span className="text-white">Todo Mar del Plata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
