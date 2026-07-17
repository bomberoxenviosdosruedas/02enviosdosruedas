'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bike, Calculator, CheckCircle2, AlertTriangle } from 'lucide-react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import DynamicRouteMap from '../../ui/DynamicRouteMap';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { calculateLowCostPrice, type PriceRangeProp } from '@/src/lib/pricing';


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

  const { fetchRoute } = useGoogleRoute();

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!origenCoords || !destinoCoords) {
      setError('Por favor, selecciona direcciones válidas de la lista de sugerencias.');
      return;
    }

    setIsCalculating(true);
    setCalculated(false);
    setError(null);

    const route = await fetchRoute(origenCoords, destinoCoords);

    if (!route) {
      setError('No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.');
      setIsCalculating(false);
      return;
    }

    setRouteCoords(route.routeCoords);

    const price = calculateLowCostPrice(route.distanceKm, priceRanges);

    setResult({
      distancia: route.distanceKm,
      tiempo: route.durationMin,
      precio: price,
    });
    setCalculated(true);
    setIsCalculating(false);
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
      <div className="lg:col-span-7 flex flex-col justify-between double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner bg-white p-6 sm:p-8 rounded-xl border border-brand-blue-50/50 flex flex-col justify-between h-full">
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-brand-yellow/20 text-brand-blue rounded-full text-xs font-subheading tracking-wider uppercase">
                Programado y Económico
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-[0.02em] text-brand-blue mt-3">
                Calculá tu Envío Low Cost
              </h2>
              <p className="text-brand-blue-400 text-sm font-sans mt-1">
                Ingresá las direcciones de origen y destino en Mar del Plata para obtener una estimación de costo y tiempo inmediato.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Input Origen */}
              <div className="space-y-1.5">
                <label htmlFor="origen-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Dirección de Origen
                </label>
                <AddressAutocomplete
                  id="origen-input"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origen}
                  onChange={setOrigen}
                  onSelectCoordinate={setOrigenCoords}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              {/* Input Destino */}
              <div className="space-y-1.5">
                <label htmlFor="destino-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Dirección de Destino
                </label>
                <AddressAutocomplete
                  id="destino-input"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destino}
                  onChange={setDestino}
                  onSelectCoordinate={setDestinoCoords}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="nombre-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Nombre
                </label>
                <input
                  id="nombre-input"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="telefono-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Teléfono
                </label>
                <input
                  id="telefono-input"
                  type="tel"
                  placeholder="Tu teléfono de contacto"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="producto-input" className="text-xs font-bold text-brand-blue-600 uppercase tracking-wider block font-sans">
                  Tipo de producto a trasladar
                </label>
                <input
                  id="producto-input"
                  type="text"
                  placeholder="Ej: Documentos, Paquete pequeño..."
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                  className="w-full bg-brand-white-50 border border-brand-blue-100 focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:border-brand-blue-700 border-brand-blue-700/30 rounded-2xl pl-4 pr-10 py-3.5 text-sm outline-none transition-all text-brand-ink placeholder:text-brand-blue-300 font-sans"
                />
              </div>

              {error && (
                <div className="bg-brand-white-50 text-brand-blue-500 text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-sans">
                  <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                type="submit"
                disabled={isCalculating || !origen.trim() || !destino.trim() || !nombre.trim() || !telefono.trim() || !producto.trim()}
                className="w-full bg-brand-blue-700 hover:bg-brand-blue-600 text-white font-subheading tracking-wider uppercase text-base py-4 rounded-full shadow-md transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-6"
              >
                {isCalculating ? (
                  <>
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Calculando Ruta...</span>
                    </div>
                    <span className="cta-nested-icon bg-white/20 text-white h-7 w-7 rounded-full flex items-center justify-center shrink-0">
                      <Calculator className="h-4 w-4" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>Calcular Ruta y Precio</span>
                    <span className="cta-nested-icon bg-white/20 text-white h-7 w-7 rounded-full flex items-center justify-center shrink-0">
                      <Calculator className="h-4 w-4" />
                    </span>
                  </>
                )}
              </motion.button>
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
                  className="double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300 w-full glow-yellow"
                >
                  <div className="double-bezel-inner bg-white p-5 rounded-xl border border-brand-blue-50/50 space-y-4 text-brand-blue-700">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-brand-blue-50/50 p-3 rounded-2xl border border-brand-blue-50/50">
                        <span className="block text-[10px] font-sans font-bold text-brand-blue-400 uppercase tracking-wider">
                          DISTANCIA
                        </span>
                        <span className="text-xl font-mono text-brand-blue-700 font-bold">
                          {result.distancia} km
                        </span>
                      </div>
                      <div className="bg-brand-blue-50/50 p-3 rounded-2xl border border-brand-blue-50/50">
                        <span className="block text-[10px] font-sans font-bold text-brand-blue-400 uppercase tracking-wider">
                          ENTREGA ESTIMADA
                        </span>
                        <span className="text-xl font-mono text-brand-blue-700 font-bold">
                          Hoy (Mismo Día)
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-brand-blue-100/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                      <div>
                        <span className="block text-[10px] font-sans font-bold text-brand-blue-400 uppercase tracking-wider">
                          TARIFA ESTIMADA LOW COST
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          {result.precio === 'consultar' ? (
                            <span className="text-lg font-subheading text-brand-blue-700 uppercase tracking-wider">
                              A Consultar
                            </span>
                          ) : (
                            <>
                              <span className="font-mono font-bold tracking-tighter text-5xl text-brand-blue-700">
                                ${result.precio.toLocaleString('es-AR')}
                              </span>
                              <span className="text-[10px] text-brand-blue-400 font-mono">ARS</span>
                            </>
                          )}
                        </div>
                      </div>

                      {result.precio === 'consultar' ? (
                        <motion.a
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                          href="/contacto"
                          className="w-full sm:w-auto inline-flex items-center justify-between bg-brand-blue-700 hover:bg-brand-blue-600 text-white font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow transition-all"
                        >
                          <span>Pedir Cotización Especial</span>
                          <span className="cta-nested-icon bg-white/20 text-white h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                            <AlertTriangle className="h-4 w-4" />
                          </span>
                        </motion.a>
                      ) : (
                        <motion.a
                          whileHover={{ scale: 1.02, y: -2 }}
                          transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-700 font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-md transition-all"
                        >
                          <span>Pedir por WhatsApp</span>
                          <span className="cta-nested-icon bg-brand-blue-700/10 text-brand-blue-700 h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-3">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Real Interactive Map Panel */}
      <div className="lg:col-span-5 min-h-[350px] lg:min-h-full double-bezel-outer bg-brand-blue-50/80 shadow-brutalist border border-brand-blue-100 p-2 rounded-2xl transition-all duration-300">
        <div className="double-bezel-inner gradient-blue p-6 rounded-xl border border-brand-blue-50/50 flex flex-col justify-between h-full relative overflow-hidden text-white">
          {/* Map backgrounds grid overlay */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          {/* Header Map */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow-400 animate-ping" />
              <span className="text-xs font-mono text-brand-yellow-400 uppercase tracking-widest font-semibold">
                Ruteador MDQ Activo
              </span>
            </div>
            <span className="text-[10px] font-mono text-brand-blue-300">
              Real-time Routing
            </span>
          </div>

          {/* Leaflet Map Loader */}
          <div className="double-bezel-outer ring-1 ring-white/10 border-brand-blue-800/40 shadow-inner z-10 relative flex-grow min-h-[260px]">
            <DynamicRouteMap
              origin={origenCoords}
              destination={destinoCoords}
              routeCoords={routeCoords}
            />
          </div>

          {/* Footer map details */}
          <div className="relative z-10 text-[10px] font-mono text-brand-blue-300 space-y-1.5 border-t border-white/10 pt-4 mt-4">
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
    </div>
  );
}
