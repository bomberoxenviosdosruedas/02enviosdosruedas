'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import CTANestedPill from '@/src/components/ui/CTANestedPill';

interface ZoneNeighborhood {
  name: string;
  zone: 'Z1' | 'Z2' | 'Z3' | 'Z4' | 'Z5';
  rangeKm: string;
  expressPrice: number;
  lowCostPrice: number;
  note?: string;
}

const NEIGHBORHOODS: ZoneNeighborhood[] = [
  // Z1: 0 - 3 km
  { name: 'Chauvín (Base Friuli 1972)', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000, note: 'Base operativa central' },
  { name: 'Centro', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'Macrocentro', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'Plaza Mitre', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'San José', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'Güemes / Paseo Aldrey', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'Terminal Vieja / Paseo Jesús de Galíndez', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'La Perla', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'San Juan Comercial', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },
  { name: 'Don Bosco', zone: 'Z1', rangeKm: '0 a 3 km', expressPrice: 3700, lowCostPrice: 3000 },

  // Z2: 3 - 5 km
  { name: 'Playa Grande', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Los Troncos', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Stella Maris', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Puerto Mar del Plata', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Playa Varese / Cabo Corrientes', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Nueva Pompeya', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Villa Primera', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Parque Luro', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'San Carlos', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },
  { name: 'Primera Junta', zone: 'Z2', rangeKm: '3 a 5 km', expressPrice: 4600, lowCostPrice: 4000 },

  // Z3: 5 - 7 km
  { name: 'Punta Mogotes', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Caisamar', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Constitución (Zona Comercial)', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Zacagnini', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Colinas de Peralta Ramos', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Las Avenidas', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Florencio Sánchez', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'El Martillo', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Termas Huinco', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },
  { name: 'Aeroparque', zone: 'Z3', rangeKm: '5 a 7 km', expressPrice: 6100, lowCostPrice: 5300 },

  // Z4: 7 - 10 km
  { name: 'Faro Punta Mogotes', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Alfar', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Bosque Peralta Ramos', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Parque Camet', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Libertad', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Virgen de Luján', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Estrada', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },
  { name: 'Autódromo', zone: 'Z4', rangeKm: '7 a 10 km', expressPrice: 8200, lowCostPrice: 7000 },

  // Z5: +10 km (hasta 20 km)
  { name: 'Acantilados', zone: 'Z5', rangeKm: '+10 km', expressPrice: 11000, lowCostPrice: 7700, note: 'Ejemplo 11 km (Math.ceil)' },
  { name: 'San Patricio', zone: 'Z5', rangeKm: '+10 km', expressPrice: 12000, lowCostPrice: 8400, note: 'Ejemplo 12 km (Math.ceil)' },
  { name: 'Batán', zone: 'Z5', rangeKm: '+10 km', expressPrice: 15000, lowCostPrice: 10500, note: 'Ejemplo 15 km (Math.ceil)' },
  { name: 'Sierra de los Padres', zone: 'Z5', rangeKm: '+10 km', expressPrice: 20000, lowCostPrice: 14000, note: 'Límite operativo 20 km' },
  { name: 'Estación Camet', zone: 'Z5', rangeKm: '+10 km', expressPrice: 14000, lowCostPrice: 9800, note: 'Ejemplo 14 km (Math.ceil)' },
];

export default function CoberturaExplorer() {
  const [search, setSearch] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('ALL');

  const filtered = useMemo(() => {
    return NEIGHBORHOODS.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase().trim());
      const matchesZone = selectedZone === 'ALL' || item.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [search, selectedZone]);

  return (
    <div className="space-y-8">
      {/* Search and Zone Filter Toolbar */}
      <div className="bg-brand-blue-50/80 border border-brand-blue-100 p-3 rounded-2xl">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-brand-blue-50/50 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <label htmlFor="neighborhood-search" className="sr-only">
                Buscá tu barrio o zona en Mar del Plata
              </label>
              <Search className="w-5 h-5 text-brand-blue-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="neighborhood-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscá tu barrio (ej. Güemes, Mogotes, Batán)..."
                className="w-full h-11 pl-11 pr-4 rounded-xl border-2 border-brand-blue-100 focus:border-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 text-sm font-sans text-brand-blue-900 placeholder:text-brand-blue-400 transition-colors"
              />
            </div>

            {/* Zone Badges Filter */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {[
                { id: 'ALL', label: 'Todos' },
                { id: 'Z1', label: 'Z1 (0-3 km)' },
                { id: 'Z2', label: 'Z2 (3-5 km)' },
                { id: 'Z3', label: 'Z3 (5-7 km)' },
                { id: 'Z4', label: 'Z4 (7-10 km)' },
                { id: 'Z5', label: 'Z5 (+10 km)' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedZone(filter.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-subheading uppercase tracking-wider font-bold transition-colors cursor-pointer min-h-[36px]',
                    selectedZone === filter.id
                      ? 'bg-brand-blue-700 text-brand-yellow-500 shadow-sm'
                      : 'bg-brand-blue-50 text-brand-blue-700 hover:bg-brand-blue-100'
                  )}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-brand-blue-600 pt-1 border-t border-brand-blue-50">
            <span>
              Mostrando <strong className="text-brand-blue-900">{filtered.length}</strong> de {NEIGHBORHOODS.length} barrios y zonas
            </span>
            <span className="hidden sm:inline text-brand-ink/70">
              Cálculo desde base central Friuli 1972
            </span>
          </div>
        </div>
      </div>

      {/* Neighborhood Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl transition-all duration-200 hover:shadow-md hover:border-brand-blue-300 group"
          >
            <div className="bg-white p-4 rounded-xl border border-brand-blue-50/50 flex flex-col justify-between h-full space-y-3">
              <div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100">
                    <MapPin className="w-3 h-3 text-brand-yellow-500" />
                    {item.zone} · {item.rangeKm}
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-blue-900 bg-brand-yellow-500/20 px-2 py-0.5 rounded border border-brand-yellow-400">
                    Tarifas 2026
                  </span>
                </div>
                <h3 className="font-subheading text-lg uppercase font-bold text-brand-blue-900 tracking-wide mt-2">
                  {item.name}
                </h3>
                {item.note && (
                  <p className="text-xs text-brand-blue-600 font-sans mt-0.5 italic">
                    {item.note}
                  </p>
                )}
              </div>

              {/* Price comparison cards */}
              <div className="pt-2 border-t border-brand-blue-50 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-brand-blue-50/50">
                  <span className="text-brand-blue-700 font-sans font-medium flex items-center gap-1">
                    <Zap className="w-3 h-3 text-brand-yellow-500" /> Express:
                  </span>
                  <span className="font-bold text-brand-blue-900 tabular-nums">
                    ${item.expressPrice.toLocaleString('es-AR')}
                  </span>
                </div>
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-brand-blue-50/30">
                  <span className="text-brand-blue-700 font-sans font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-brand-blue-500" /> LowCost:
                  </span>
                  <span className="font-bold text-brand-blue-900 tabular-nums">
                    ${item.lowCostPrice.toLocaleString('es-AR')}
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <Link
                href={`/cotizar/express?destino=${encodeURIComponent(item.name)}`}
                className="inline-flex items-center justify-between text-xs font-subheading uppercase font-bold text-brand-blue-700 group-hover:text-brand-blue-900 pt-1"
              >
                <span>Cotizar envío a {item.name.split('(')[0]}</span>
                <ChevronRight className="w-4 h-4 text-brand-yellow-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filtered.length === 0 && (
        <div className="text-center py-12 bg-brand-blue-50/50 rounded-2xl border border-brand-blue-100 p-6">
          <MapPin className="w-10 h-10 text-brand-blue-400 mx-auto mb-2" />
          <h3 className="font-subheading text-lg uppercase font-bold text-brand-blue-900">
            No encontramos el barrio con ese nombre exacto
          </h3>
          <p className="text-sm font-sans text-brand-ink/80 max-w-md mx-auto mt-1">
            Cubrimos todo el Partido de General Pueyrredón hasta 20 km. Escribinos por WhatsApp y te confirmamos la tarifa exacta en segundos.
          </p>
          <div className="mt-4">
            <CTANestedPill
              href="https://wa.me/542236602699?text=Hola%20Envíos%20DosRuedas!%20Quería%20consultar%20por%20la%20cobertura%20en%20mi%20zona"
              variant="primary"
              size="compact"
            >
              Consultar por WhatsApp
            </CTANestedPill>
          </div>
        </div>
      )}
    </div>
  );
}
