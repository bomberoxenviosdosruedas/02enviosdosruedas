'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-brand-blue-700/5 flex items-center justify-center rounded-3xl border border-brand-blue-50 animate-pulse">
      <div className="text-center space-y-2">
        <svg className="animate-spin h-8 w-8 text-brand-blue mx-auto" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="text-xs font-sans text-brand-blue-300">Cargando mapa interactivo...</span>
      </div>
    </div>
  ),
});

export default function DistanceMap() {
  return (
    <div id="interactive-distance-map" className="bg-white border border-brand-blue-50 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
      <div>
        <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider font-sans">
          Herramienta de Cobertura
        </span>
        <h3 className="text-xl sm:text-2xl font-display uppercase tracking-tight text-brand-blue mt-3">
          Mapa de Medición de Distancia
        </h3>
        <p className="text-brand-blue-400 text-sm font-sans mt-1">
          Hacé clic sobre el mapa para marcar origen y destino y calcular la distancia lineal de tu despacho dentro de Mar del Plata.
        </p>
      </div>

      <LeafletMap />
    </div>
  );
}
