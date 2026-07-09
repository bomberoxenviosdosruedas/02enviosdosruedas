'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bike, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import DynamicRouteMap from '../../ui/DynamicRouteMap';

interface PriceRangeProp {
  id: number;
  serviceType: string;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

interface Coordinate {
  lat: number;
  lng: number;
}

export default function CotizadorLowCostForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    distancia: number;
    tiempo: number;
    precio: number | 'consultar';
  } | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origenCoords || !destinoCoords) {
      setError('Por favor, selecciona direcciones válidas de la lista de sugerencias.');
      return;
    }

    setIsCalculating(true);
    setCalculated(false);
    setError(null);

    try {
      // Call OSRM API for driving routing
      const url = `https://router.project-osrm.org/route/v1/driving/${origenCoords.lng},${origenCoords.lat};${destinoCoords.lng},${destinoCoords.lat}?overview=full&geometries=geojson`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error('Error al obtener la ruta de OSRM');
      }
      const data = await res.json();

      if (!data.routes || data.routes.length === 0) {
        throw new Error('No se encontró una ruta vial entre los puntos indicados.');
      }

      const route = data.routes[0];
      const distance = Math.round((route.distance / 1000) * 10) / 10; // in km, 1 decimal
      const time = Math.round(route.duration / 60); // in minutes

      // Save coordinates for the polyline route path
      setRouteCoords(route.geometry.coordinates || []);

      let price: number | 'consultar' = 'consultar';

      if (distance <= 20) {
        const lowCostRanges = priceRanges.filter(r => r.serviceType === 'LOW_COST');
        if (lowCostRanges.length > 0) {
          const matchingRange = lowCostRanges.find(
            r => distance >= r.distanciaMinKm && distance < r.distanciaMaxKm
          );

          if (matchingRange) {
            if (matchingRange.distanciaMaxKm === 9999) {
              const baseRange = lowCostRanges.find(r => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10);
              const basePrice = baseRange ? baseRange.precioRango : 7000;
              const extraKm = distance - 10;
              price = basePrice + Math.round(extraKm * matchingRange.precioRango);
            } else {
              price = matchingRange.precioRango;
            }
          }
        } else {
          // Fallback if DB is empty
          price = 3000;
          if (distance > 3) {
            price += Math.round((distance - 3) * 400);
          }
        }
      }

      setResult({
        distancia: distance,
        tiempo: time,
        precio: price,
      });
      setCalculated(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'No se pudo calcular la ruta. Inténtalo más tarde.');
    } finally {
      setIsCalculating(false);
    }
  };

  const getWhatsAppLink = () => {
    if (!result) return '#';
    const priceText = result.precio === 'consultar' ? 'A convenir (Excede rango estándar)' : `$${result.precio.toLocaleString('es-AR')}`;
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Low Cost calculado en la web:
👤 *Nombre:* ${nombre}\n📞 *Teléfono:* ${telefono}\n📦 *Producto:* ${producto}\n📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
⏱️ *Tiempo Estimado:* ${result.tiempo} min
💵 *Tarifa Low Cost:* ${priceText}`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="cotizador-lowcost-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Form Input & Results Panel */}
      <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <span className="px-3 py-1 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider font-sans">
              Programado y Económico
            </span>
            <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-brand-blue mt-3">
              Calculá tu Envío Low Cost
            </h2>
            <p className="text-slate-500 text-sm font-sans mt-1">
              Ingresá las direcciones de origen y destino en Mar del Plata para obtener una estimación de costo y tiempo inmediato.
            </p>
          </div>

          <form onSubmit={handleCalculate} className="space-y-4">
            {/* Input Origen */}
            <div className="space-y-1.5">
              <label htmlFor="origen-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Dirección de Origen
              </label>
              <AddressAutocomplete
                id="origen-input"
                placeholder="Ej: Av. Colón 1234, Mar del Plata"
                value={origen}
                onChange={setOrigen}
                onSelectCoordinate={setOrigenCoords}
                required
                className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
              />
            </div>

            {/* Input Destino */}
            <div className="space-y-1.5">
              <label htmlFor="destino-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Dirección de Destino
              </label>
              <AddressAutocomplete
                id="destino-input"
                placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                value={destino}
                onChange={setDestino}
                onSelectCoordinate={setDestinoCoords}
                required
                className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="nombre-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Nombre
              </label>
              <input
                id="nombre-input"
                type="text"
                placeholder="Tu nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="telefono-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Teléfono
              </label>
              <input
                id="telefono-input"
                type="tel"
                placeholder="Tu teléfono de contacto"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="producto-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider block font-sans">
                Tipo de producto a trasladar
              </label>
              <input
                id="producto-input"
                type="text"
                placeholder="Ej: Documentos, Paquete pequeño..."
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-100 focus:border-brand-blue/40 focus:bg-white rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-slate-800 placeholder:text-slate-400 font-sans"
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-sans">
                <AlertTriangle className="h-4 w-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isCalculating || !origen.trim() || !destino.trim() || !nombre.trim() || !telefono.trim() || !producto.trim()}
              className="w-full bg-brand-blue text-white hover:bg-brand-blue/95 font-subheading tracking-wider uppercase text-base py-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {isCalculating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Calculando Ruta...</span>
                </>
              ) : (
                <>
                  <Calculator className="h-5 w-5" />
                  <span>Calcular Ruta y Precio</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Dynamic Results Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {calculated && result && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-5 space-y-4"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Distancia
                    </span>
                    <span className="text-xl font-display text-slate-800">
                      {result.distancia} km
                    </span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Entrega Estimada
                    </span>
                    <span className="text-xl font-display text-slate-800">
                      Hoy (Mismo Día)
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                      Tarifa Estimada Low Cost
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      {result.precio === 'consultar' ? (
                        <span className="text-lg font-bold text-amber-600 uppercase font-sans">
                          A Consultar
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl font-display text-brand-blue">
                            ${result.precio.toLocaleString('es-AR')}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">ARS</span>
                        </>
                      )}
                    </div>
                  </div>

                  {result.precio === 'consultar' ? (
                    <a
                      href="/contacto"
                      className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-subheading text-xs tracking-wider uppercase px-5 py-3.5 rounded-xl shadow transition-all flex items-center justify-center gap-2"
                    >
                      <AlertTriangle className="h-4.5 w-4.5" />
                      Pedir Cotización Especial
                    </a>
                  ) : (
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-subheading text-xs tracking-wider uppercase px-5 py-3.5 rounded-xl shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-2 font-medium"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5" />
                      Pedir por WhatsApp
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Real Interactive Map Panel */}
      <div className="lg:col-span-6 min-h-[350px] lg:min-h-full bg-slate-900 border border-slate-800 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between text-white">
        {/* Map backgrounds grid overlay */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Header Map */}
        <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              Ruteador MDQ Activo
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            Real-time Routing
          </span>
        </div>

        {/* Leaflet Map Loader */}
        <div className="relative flex-grow min-h-[260px] rounded-2xl overflow-hidden border border-white/5 shadow-inner">
          <DynamicRouteMap
            origin={origenCoords}
            destination={destinoCoords}
            routeCoords={routeCoords}
          />
        </div>

        {/* Footer map details */}
        <div className="relative z-10 text-[10px] font-mono text-slate-400 space-y-1.5 border-t border-white/10 pt-4 mt-4">
          <div className="flex justify-between">
            <span>Servicio:</span>
            <span className="text-brand-yellow font-bold uppercase">Envío Low Cost</span>
          </div>
          <div className="flex justify-between">
            <span>Rango Operativo:</span>
            <span className="text-white">Mar del Plata Ruteo Diario</span>
          </div>
        </div>
      </div>
    </div>
  );
}
