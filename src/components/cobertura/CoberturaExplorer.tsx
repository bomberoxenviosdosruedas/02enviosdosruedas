'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, MapPin, Zap, Clock, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTANestedPill from '@/components/ui/CTANestedPill';
import {
  EXPRESS_PRICE_PER_KM,
  EXPRESS_TIERS,
  LOW_COST_PRICE_PER_KM,
  LOW_COST_TIERS,
} from '@/lib/pricing';

type ZoneId = 'Z1' | 'Z2' | 'Z3' | 'Z4' | 'Z5';

interface ResolvedNeighborhood {
  name: string;
  zone: ZoneId;
  rangeKm: string;
  expressPrice: number;
  lowCostPrice: number;
  note?: string;
}

/**
 * Datos crudos: nombre del barrio y zona. SIN PRECIOS.
 *
 * Los importes no se escriben nunca a mano acá: salen de `pricing.ts` (fuente
 * única — ver el comentario de `EXPRESS_TIERS`) o de `PriceRange` en BD.
 * Duplicarlos a mano los desincroniza en silencio y nadie se entera.
 *
 * `distanceKm` es obligatorio en Z5 (tramo por km) y no se usa en Z1-Z4, donde
 * el rango sale del propio tier. La unión discriminada lo exige en compilación.
 */
type NeighborhoodSeed =
  | { name: string; zone: Exclude<ZoneId, 'Z5'>; note?: string }
  | { name: string; zone: 'Z5'; distanceKm: number; note?: string };

const SEEDS: NeighborhoodSeed[] = [
  // Z1
  { name: 'Chauvín (Base Friuli 1972)', zone: 'Z1', note: 'Base operativa central' },
  { name: 'Centro', zone: 'Z1' },
  { name: 'Macrocentro', zone: 'Z1' },
  { name: 'Plaza Mitre', zone: 'Z1' },
  { name: 'San José', zone: 'Z1' },
  { name: 'Güemes / Paseo Aldrey', zone: 'Z1' },
  { name: 'Terminal Vieja / Paseo Jesús de Galíndez', zone: 'Z1' },
  { name: 'La Perla', zone: 'Z1' },
  { name: 'San Juan Comercial', zone: 'Z1' },
  { name: 'Don Bosco', zone: 'Z1' },

  // Z2
  { name: 'Playa Grande', zone: 'Z2' },
  { name: 'Los Troncos', zone: 'Z2' },
  { name: 'Stella Maris', zone: 'Z2' },
  { name: 'Puerto Mar del Plata', zone: 'Z2' },
  { name: 'Playa Varese / Cabo Corrientes', zone: 'Z2' },
  { name: 'Nueva Pompeya', zone: 'Z2' },
  { name: 'Villa Primera', zone: 'Z2' },
  { name: 'Parque Luro', zone: 'Z2' },
  { name: 'San Carlos', zone: 'Z2' },
  { name: 'Primera Junta', zone: 'Z2' },

  // Z3
  { name: 'Punta Mogotes', zone: 'Z3' },
  { name: 'Caisamar', zone: 'Z3' },
  { name: 'Constitución (Zona Comercial)', zone: 'Z3' },
  { name: 'Zacagnini', zone: 'Z3' },
  { name: 'Colinas de Peralta Ramos', zone: 'Z3' },
  { name: 'Las Avenidas', zone: 'Z3' },
  { name: 'Florencio Sánchez', zone: 'Z3' },
  { name: 'El Martillo', zone: 'Z3' },
  { name: 'Termas Huinco', zone: 'Z3' },
  { name: 'Aeroparque', zone: 'Z3' },

  // Z4
  { name: 'Faro Punta Mogotes', zone: 'Z4' },
  { name: 'Alfar', zone: 'Z4' },
  { name: 'Bosque Peralta Ramos', zone: 'Z4' },
  { name: 'Parque Camet', zone: 'Z4' },
  { name: 'Libertad', zone: 'Z4' },
  { name: 'Virgen de Luján', zone: 'Z4' },
  { name: 'Estrada', zone: 'Z4' },
  { name: 'Autódromo', zone: 'Z4' },

  // Z5: tramo por km, redondeado hacia arriba
  { name: 'Acantilados', zone: 'Z5', distanceKm: 11, note: 'Ejemplo 11 km (Math.ceil)' },
  { name: 'San Patricio', zone: 'Z5', distanceKm: 12, note: 'Ejemplo 12 km (Math.ceil)' },
  { name: 'Estación Camet', zone: 'Z5', distanceKm: 14, note: 'Ejemplo 14 km (Math.ceil)' },
  { name: 'Camet Norte', zone: 'Z5', distanceKm: 15, note: 'Ejemplo 15 km (Math.ceil)' },
];

/** Posición de cada zona dentro de los arrays de tiers. */
const ZONE_TIER_INDEX: Record<ZoneId, number> = { Z1: 0, Z2: 1, Z3: 2, Z4: 3, Z5: 4 };

const LAST_TIER = EXPRESS_TIERS[EXPRESS_TIERS.length - 1];

function resolveNeighborhood(seed: NeighborhoodSeed): ResolvedNeighborhood {
  if (seed.zone === 'Z5') {
    // Z5 no tiene tier propio: se cobra por km con redondeo hacia arriba.
    return {
      name: seed.name,
      zone: seed.zone,
      rangeKm: `+${LAST_TIER.maxKm} km`,
      expressPrice: Math.ceil(seed.distanceKm) * EXPRESS_PRICE_PER_KM,
      lowCostPrice: Math.ceil(seed.distanceKm) * LOW_COST_PRICE_PER_KM,
      note: seed.note,
    };
  }

  const expressTier = EXPRESS_TIERS[ZONE_TIER_INDEX[seed.zone]];
  const lowCostTier = LOW_COST_TIERS[ZONE_TIER_INDEX[seed.zone]];
  return {
    name: seed.name,
    zone: seed.zone,
    rangeKm: `${expressTier.minKm} a ${expressTier.maxKm} km`,
    expressPrice: expressTier.price,
    lowCostPrice: lowCostTier.price,
    note: seed.note,
  };
}

const NEIGHBORHOODS: ResolvedNeighborhood[] = SEEDS.map(resolveNeighborhood);

/** Filtros de zona con el rango derivado de los tiers (no escrito a mano). */
const ZONE_FILTERS: Array<{ id: 'ALL' | ZoneId; label: string }> = [
  { id: 'ALL', label: 'Todos' },
  ...(['Z1', 'Z2', 'Z3', 'Z4', 'Z5'] as const).map((zone) => {
    const tier = EXPRESS_TIERS[ZONE_TIER_INDEX[zone]];
    return {
      id: zone,
      label: tier ? `${zone} (${tier.minKm}-${tier.maxKm} km)` : `${zone} (+${LAST_TIER.maxKm} km)`,
    };
  }),
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
              <Search className="w-5 h-5 text-brand-blue-700 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="neighborhood-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscá tu barrio (ej. Güemes, Mogotes, Puerto)..."
                className="w-full h-11 pl-11 pr-4 rounded-xl border-2 border-brand-blue-100 focus:border-brand-blue-700 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/20 text-sm font-sans text-brand-blue-900 placeholder:text-brand-blue-700 transition-colors"
              />
            </div>

            {/* Zone Badges Filter */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {ZONE_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setSelectedZone(filter.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-subheading uppercase tracking-wider transition-colors cursor-pointer min-h-[36px]',
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
            <span className="hidden sm:inline text-brand-ink">
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
                    <MapPin className="w-3 h-3 text-brand-blue-700" />
                    {item.zone} · {item.rangeKm}
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-blue-900 bg-brand-yellow-500/20 px-2 py-0.5 rounded border border-brand-yellow-400">
                    Tarifas 2026
                  </span>
                </div>
                <h3 className="font-subheading text-lg uppercase text-brand-blue-900 tracking-wide mt-2">
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
                    <Zap className="w-3 h-3 text-brand-blue-700" /> Express:
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
                className="inline-flex items-center justify-between text-xs font-subheading uppercase text-brand-blue-700 group-hover:text-brand-blue-900 pt-1"
              >
                <span>Cotizar envío a {item.name.split('(')[0]}</span>
                <ChevronRight className="w-4 h-4 text-brand-blue-700 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filtered.length === 0 && (
        <div className="text-center py-12 bg-brand-blue-50/50 rounded-2xl border border-brand-blue-100 p-6">
          <MapPin className="w-10 h-10 text-brand-blue-700 mx-auto mb-2" />
          <h3 className="font-subheading text-lg uppercase text-brand-blue-900">
            No encontramos el barrio con ese nombre exacto
          </h3>
          <p className="text-sm font-sans text-brand-ink max-w-md mx-auto mt-1">
            Cubrimos todo Mar del Plata. Más allá de 10 km de ruta te cotizamos el envío por
            kilómetro. Escribinos por WhatsApp y te confirmamos la tarifa exacta.
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
