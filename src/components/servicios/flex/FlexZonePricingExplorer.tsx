'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calculator, Clock, ShieldCheck, Truck, ScanBarcode, RotateCcw, MessageCircle } from 'lucide-react';
import { calculateLowCostPrice, LOW_COST_TIERS, LOW_COST_PRICE_PER_KM } from '@/lib/pricing';
import { FLEX_DELIVERY_DEADLINE, FLEX_CUTOFF_TIME } from '@/lib/promises';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const formatArs = (val: number) => `$${val.toLocaleString('es-AR')}`;

interface ZoneData {
  id: number;
  name: string;
  minKm: number;
  maxKm: number;
  basePrice: number;
  defaultKm: number;
  description: string;
}

const ZONES: ZoneData[] = [
  {
    id: 1,
    name: 'Zona 1',
    minKm: 0,
    maxKm: 3,
    basePrice: 3000,
    defaultKm: 2,
    description: 'Envíos de cercanía urbana (hasta 3 km de distancia entre retiro y entrega).',
  },
  {
    id: 2,
    name: 'Zona 2',
    minKm: 3,
    maxKm: 5,
    basePrice: 4000,
    defaultKm: 4,
    description: 'Radio intermedio en Mar del Plata urbana (de 3 a 5 km de recorrido vial).',
  },
  {
    id: 3,
    name: 'Zona 3',
    minKm: 5,
    maxKm: 7,
    basePrice: 5300,
    defaultKm: 6,
    description: 'Distancias medias conectando distintos barrios de la ciudad (de 5 a 7 km).',
  },
  {
    id: 4,
    name: 'Zona 4',
    minKm: 7,
    maxKm: 10,
    basePrice: 7000,
    defaultKm: 8.5,
    description: 'Recorridos extensos dentro del ejido urbano (de 7 a 10 km de distancia).',
  },
  {
    id: 5,
    name: 'Zona 5',
    minKm: 10,
    maxKm: 20,
    basePrice: 7000,
    defaultKm: 12,
    description: `Más de 10 km dentro del ejido urbano: cálculo lineal a ${formatArs(LOW_COST_PRICE_PER_KM)} por km.`,
  },
];

export default function FlexZonePricingExplorer() {
  const [selectedZoneId, setSelectedZoneId] = useState<number>(1);
  const [distanceKm, setDistanceKm] = useState<number>(2);

  const selectedZone = ZONES.find((z) => z.id === selectedZoneId) ?? ZONES[0];

  // Cálculo de precio según la distancia ingresada
  const rawPrice = calculateLowCostPrice(distanceKm, []);
  const currentPrice = typeof rawPrice === 'number' ? rawPrice : 7000;
  const retryPrice = Math.round(currentPrice * 0.5);

  const handleSelectZone = (zone: ZoneData) => {
    setSelectedZoneId(zone.id);
    setDistanceKm(zone.defaultKm);
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const km = parseFloat(e.target.value);
    setDistanceKm(km);

    // Ajustar zona activa según el km ingresado
    if (km <= 3) setSelectedZoneId(1);
    else if (km <= 5) setSelectedZoneId(2);
    else if (km <= 7) setSelectedZoneId(3);
    else if (km <= 10) setSelectedZoneId(4);
    else setSelectedZoneId(5);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola! Quiero consultar por Mercado Envíos Flex para Nivel 1 en ${selectedZone.name} (aprox. ${distanceKm} km).`
  );
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=542236602699&text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 sm:p-3 rounded-[32px] shadow-float text-white">
        <div className="bg-brand-blue-500 rounded-[26px] p-6 sm:p-10 border border-white/10 shadow-sm relative overflow-hidden">
          {/* Watermark Icon */}
          <Calculator className="absolute -bottom-8 -right-8 h-48 w-48 text-white/5 pointer-events-none select-none" />

          {/* Header */}
          <div className="max-w-3xl space-y-3 text-left relative z-10 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow-500 text-brand-blue-500 rounded-full text-xs font-subheading uppercase tracking-widest shadow-glow-yellow">
              <Calculator className="h-3.5 w-3.5" />
              <span>Simulador Interactivo · Nivel 1</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display uppercase tracking-tight text-white leading-tight">
              Tarifas por distancia para Nivel 1 (1 a 4 envíos/día)
            </h3>

            <p className="text-sm sm:text-base text-brand-blue-50 font-sans leading-relaxed">
              En Nivel 1 la tarifa se calcula según los kilómetros reales entre tu local y el comprador. Seleccioná una zona o deslizá los kilómetros para ver la tarifa exacta con las condiciones y garantías de Mercado Envíos Flex:
            </p>
          </div>

          {/* Interactive Zone Tabs */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
            {ZONES.map((zone) => {
              const isSelected = zone.id === selectedZoneId;
              const displayLabel = zone.id === 5 ? `+10 km` : `${zone.minKm}–${zone.maxKm} km`;
              const priceLabel = zone.id === 5 ? `${formatArs(zone.defaultKm * LOW_COST_PRICE_PER_KM)}*` : formatArs(zone.basePrice);

              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => handleSelectZone(zone)}
                  className={`p-3.5 rounded-2xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 ${
                    isSelected
                      ? 'bg-brand-yellow-500 text-brand-blue-500 border-brand-yellow-500 shadow-glow-yellow font-bold scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-subheading text-xs uppercase tracking-wider">
                      {zone.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-brand-blue-500 text-white' : 'bg-white/20 text-brand-blue-50'
                      }`}
                    >
                      {displayLabel}
                    </span>
                  </div>
                  <div className="font-mono text-lg sm:text-xl font-bold tabular-nums">
                    {priceLabel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Slider and Interactive Result Card */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/15 p-6 sm:p-8 rounded-[24px]">
            {/* Left Col: Distance Slider & Formula */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="flex-distance-slider" className="font-subheading text-xs uppercase tracking-wider text-brand-blue-100 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-yellow-500" />
                    <span>Ajustar distancia de entrega:</span>
                  </label>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-brand-yellow-500 tabular-nums">
                    {distanceKm} km
                  </span>
                </div>

                <input
                  id="flex-distance-slider"
                  type="range"
                  min="1"
                  max="18"
                  step="0.5"
                  value={distanceKm}
                  onChange={handleDistanceChange}
                  className="w-full h-2.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                />

                <div className="flex justify-between text-2xs font-mono text-brand-blue-100 px-1 pt-1">
                  <span>1 km (Z1)</span>
                  <span>5 km (Z2)</span>
                  <span>10 km (Z4)</span>
                  <span>18 km (Z5)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-brand-blue-50 space-y-1.5">
                <p className="font-subheading uppercase tracking-wider text-brand-yellow-500 font-bold text-xs">
                  {selectedZone.name} · {selectedZone.description}
                </p>
                {distanceKm > 10 ? (
                  <p className="text-2xs sm:text-xs text-brand-blue-100">
                    Cálculo lineal Zona 5: {distanceKm} km × {formatArs(LOW_COST_PRICE_PER_KM)}/km = <strong className="text-white">{formatArs(currentPrice)}</strong>.
                  </p>
                ) : (
                  <p className="text-2xs sm:text-xs text-brand-blue-100">
                    Tarifa plana correspondiente al tramo de {selectedZone.minKm} a {selectedZone.maxKm} km.
                  </p>
                )}
              </div>
            </div>

            {/* Right Col: Price Result & Flex Conditions */}
            <div className="lg:col-span-6 bg-brand-blue-500 border border-white/20 p-6 rounded-[20px] shadow-sm space-y-5 text-left">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/15 pb-4">
                <div>
                  <span className="font-mono text-2xs uppercase tracking-wider text-brand-blue-100 block">
                    Tarifa estimada Flex
                  </span>
                  <span className="font-mono text-4xl sm:text-5xl font-bold text-brand-yellow-500 tabular-nums">
                    {formatArs(currentPrice)}
                  </span>
                  <span className="font-mono text-xs text-brand-blue-100 ml-2">
                    / envío
                  </span>
                </div>

                <div className="text-right">
                  <span className="font-mono text-2xs uppercase tracking-wider text-brand-blue-100 block">
                    2da visita (50%)
                  </span>
                  <span className="font-mono text-lg font-bold text-white tabular-nums">
                    {formatArs(retryPrice)}
                  </span>
                </div>
              </div>

              {/* Flex Specific Conditions */}
              <div className="space-y-2">
                <span className="font-subheading text-2xs uppercase tracking-wider text-brand-yellow-500 font-bold block">
                  Condiciones y garantías del servicio Flex:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-blue-50 font-sans">
                  <li className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Corte L-V 15:00 hs · Sáb 12:00 hs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Entrega garantizada hasta las {FLEX_DELIVERY_DEADLINE}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Truck className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Recolección bonificada desde 1 paquete</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ScanBarcode className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Escaneo en local con app de Mercado Libre</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <RotateCcw className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Devolución sin cargo si no se concreta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-3.5 w-3.5 text-brand-yellow-500 shrink-0" />
                    <span>Soporte directo humano por WhatsApp</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <CTANestedPill
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="default"
                  className="w-full text-center"
                >
                  Consultar por {selectedZone.name} en WhatsApp
                </CTANestedPill>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
