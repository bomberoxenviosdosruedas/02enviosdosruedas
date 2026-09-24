'use client';

import React from 'react';
import DynamicRouteMap from '@/src/components/ui/DynamicRouteMap';
import type { Coordinate } from '@/src/hooks/useGoogleRoute';
import type { UseCotizadorExpressReturn } from './hooks/useCotizadorExpress';

interface CotizadorExpressMapProps {
  form: Pick<UseCotizadorExpressReturn, 
    'origenCoords' | 'destinoCoords' | 'routeCoords' | 'result'
  >;
}

export default function CotizadorExpressMap({ form }: CotizadorExpressMapProps) {
  const { origenCoords, destinoCoords, routeCoords, result } = form;

  return (
    <div className="lg:col-span-5 min-h-[360px] lg:min-h-full rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
      <div className="bg-brand-blue-900 p-6 rounded-[20px] border border-white/10 flex flex-col justify-between h-full relative overflow-hidden text-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Header Map */}
        <div className="relative z-10 flex justify-between items-center border-b border-white/15 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-500 animate-ping" />
            <span className="text-xs font-mono text-brand-yellow-500 uppercase tracking-widest font-semibold tabular-nums">
              Ruteador MDQ Activo
            </span>
          </div>
          <span className="text-[10px] font-mono text-white/70 tabular-nums">
            OpenStreetMap + OSRM
          </span>
        </div>

        {/* Leaflet Map Loader */}
        <div className="relative flex-grow min-h-[260px] rounded-xl overflow-hidden border border-white/15 shadow-inner z-10">
          <DynamicRouteMap
            origin={origenCoords}
            destination={destinoCoords}
            routeCoords={routeCoords}
            distanceKm={result?.distancia}
            serviceType="EXPRESS"
          />
        </div>

        {/* Footer map details */}
        <div className="relative z-10 text-[11px] font-mono text-white/90 space-y-1.5 border-t border-white/15 pt-3 mt-3 tabular-nums">
          <div className="flex justify-between">
            <span>Servicio:</span>
            <span className="text-brand-yellow-500 font-bold uppercase">Envío Express {'<'} 2H</span>
          </div>
          <div className="flex justify-between">
            <span>Cobertura:</span>
            <span className="text-white">Partido de General Pueyrredón</span>
          </div>
        </div>
      </div>
    </div>
  );
}