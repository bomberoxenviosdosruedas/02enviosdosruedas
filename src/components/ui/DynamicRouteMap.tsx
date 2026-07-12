'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LeafletRouteMap = dynamic(() => import('./LeafletRouteMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] bg-brand-blue-700 flex items-center justify-center rounded-3xl border border-white/10 animate-pulse">
      <div className="text-center space-y-2">
        <svg className="animate-spin h-8 w-8 text-brand-yellow mx-auto" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <span className="text-xs font-mono text-brand-blue-300">Cargando mapa interactivo...</span>
      </div>
    </div>
  ),
});

interface Coordinate {
  lat: number;
  lng: number;
}

interface DynamicRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][];
}

export default function DynamicRouteMap(props: DynamicRouteMapProps) {
  return <LeafletRouteMap {...props} />;
}
