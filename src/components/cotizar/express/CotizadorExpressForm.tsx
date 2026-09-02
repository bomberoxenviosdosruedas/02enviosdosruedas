'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, User, Phone, Package, MapPin } from 'lucide-react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import DynamicRouteMap from '../../ui/DynamicRouteMap';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { type PriceRangeProp } from '@/src/lib/pricing';
import { calculateQuoteAction, type QuoteState } from '@/src/actions/quote';

export default function CotizadorExpressForm({ priceRanges = [] }: { priceRanges?: PriceRangeProp[] }) {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  const [isCalculating, setIsCalculating] = useState(false);
  const [, startTransition] = useTransition();
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    distancia: number;
    precio: number | 'consultar';
  } | null>(null);

  const { fetchRoute } = useGoogleRoute();
  const initialState: QuoteState = { success: false, price: null, error: null };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      if (!origenCoords || !destinoCoords) {
        setError('Por favor, elegí direcciones válidas de la lista desplegable de sugerencias.');
        return;
      }

      setIsCalculating(true);
      setCalculated(false);
      setError(null);

      const route = await fetchRoute(origenCoords, destinoCoords);

      if (!route) {
        setError('No se pudo calcular la ruta. Por favor, intentá de nuevo en unos momentos.');
        setIsCalculating(false);
        return;
      }

      setRouteCoords(route.routeCoords);

      const formData = new FormData();
      formData.append('distanceKm', route.distanceKm.toString());
      formData.append('serviceType', 'EXPRESS');
      formData.append('priceRanges', JSON.stringify(priceRanges));

      const actionResult = await calculateQuoteAction(initialState, formData);

      if (!actionResult.success) {
        setError(actionResult.error || 'Error al calcular el valor del envío');
        setIsCalculating(false);
        return;
      }

      setResult({
        distancia: route.distanceKm,
        precio: actionResult.price!,
      });
      setCalculated(true);
      setIsCalculating(false);
    });
  };

  const getWhatsAppLink = () => {
    if (!result) return '#';
    const priceText = result.precio === 'consultar' ? 'A convenir (Excede radio estándar)' : `$${result.precio.toLocaleString('es-AR')}`;
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Express cotizado en la web:
👤 *Nombre:* ${nombre}
📞 *Teléfono:* ${telefono}
📦 *Producto:* ${producto}
📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
💵 *Tarifa Express 2026:* ${priceText}`;
    return `https://wa.me/542236602699?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="cotizador-express-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* Form Input & Results Panel (7 cols) */}
      <div className="lg:col-span-7 flex flex-col justify-between rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 sm:p-8 rounded-[20px] border border-white/10 flex flex-col justify-between h-full text-white relative overflow-hidden">
          {/* Visual Watermark in bottom right */}
          <Calculator
            className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          <div className="space-y-6 relative z-10">
            <div>
              <span className="px-3.5 py-1 bg-white/10 text-[#FFF12E] rounded-full text-xs font-subheading font-bold tracking-wider uppercase border border-white/20 -rotate-1 shadow-glow-yellow inline-block">
                Cotización Al Instante · Mar del Plata
              </span>
              <h2 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-white mt-3">
                Calculá tu Envío Express
              </h2>
              <p className="text-white/80 text-sm font-sans mt-1 leading-relaxed">
                Ingresá las direcciones de origen y destino en Mar del Plata para obtener tarifa exacta y ruta OSRM en tiempo real.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-4">
              {/* Origen */}
              <div className="space-y-1.5">
                <label htmlFor="origen-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#FFF12E]" />
                  Dirección de Origen (Retiro)
                </label>
                <AddressAutocomplete
                  id="origen-input"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origen}
                  onChange={setOrigen}
                  onSelectCoordinate={setOrigenCoords}
                  required
                  className="w-full h-11 bg-white/5 border-2 border-[#0950F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
                />
              </div>

              {/* Destino */}
              <div className="space-y-1.5">
                <label htmlFor="destino-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#FFF12E]" />
                  Dirección de Destino (Entrega)
                </label>
                <AddressAutocomplete
                  id="destino-input"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destino}
                  onChange={setDestino}
                  onSelectCoordinate={setDestinoCoords}
                  required
                  className="w-full h-11 bg-white/5 border-2 border-[#0950F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
                />
              </div>

              {/* Nombre y Teléfono en Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="nombre-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#FFF12E]" />
                    Nombre
                  </label>
                  <input
                    id="nombre-input"
                    type="text"
                    aria-label="Nombre"
                    placeholder="Tu nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full h-11 bg-white/5 border-2 border-[#0950F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="telefono-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#FFF12E]" />
                    Teléfono
                  </label>
                  <input
                    id="telefono-input"
                    type="tel"
                    aria-label="Teléfono"
                    placeholder="Tu teléfono de contacto"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    className="w-full h-11 bg-white/5 border-2 border-[#0950F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-mono tabular-nums"
                  />
                </div>
              </div>

              {/* Producto */}
              <div className="space-y-1.5">
                <label htmlFor="producto-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-white/90 flex items-center gap-1.5">
                  <Package className="h-3.5 w-3.5 text-[#FFF12E]" />
                  Tipo de producto a trasladar
                </label>
                <input
                  id="producto-input"
                  type="text"
                  aria-label="Tipo de producto a trasladar"
                  placeholder="Ej: Documentos, Paquete pequeño..."
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                  className="w-full h-11 bg-white/5 border-2 border-[#0950F6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFF12E] rounded-xl px-4 text-sm transition-all text-white placeholder:text-white/40 font-sans"
                />
              </div>

              {error && (
                <div className="bg-red-500/20 text-red-200 border border-red-500/40 text-xs px-4 py-3 rounded-xl flex items-center gap-2 font-sans font-medium">
                  <AlertTriangle className="h-4 w-4 text-red-400 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isCalculating || !origen.trim() || !destino.trim() || !nombre.trim() || !telefono.trim() || !producto.trim()}
                className="group w-full min-h-[52px] rounded-full bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6] font-subheading font-bold tracking-wider uppercase text-base py-3.5 px-6 shadow-glow-yellow transition-all flex items-center justify-between cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border-none"
              >
                {isCalculating ? (
                  <>
                    <div className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-[#0950F6]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Calculando Ruta OSRM...</span>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0">
                      <Calculator className="h-4 w-4" />
                    </span>
                  </>
                ) : (
                  <>
                    <span>Calcular Ruta y Tarifa Express</span>
                    <span className="w-8 h-8 rounded-full bg-[#0950F6]/10 text-[#0950F6] flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Dynamic Results Display */}
          <div className="mt-6 relative z-10">
            <AnimatePresence mode="wait">
              {calculated && result && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="rounded-[20px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-xl w-full"
                >
                  <div className="bg-[#052C87] p-5 rounded-xl border border-white/10 space-y-4 text-white">
                    <div className="bg-white/5 p-3.5 rounded-xl border border-white/15 flex items-center justify-between">
                      <span className="text-xs font-subheading font-bold text-[#FFF12E] uppercase tracking-wider">
                        DISTANCIA REAL
                      </span>
                      <span className="text-xl font-mono text-white font-bold tabular-nums">
                        {result.distancia} km
                      </span>
                    </div>

                    <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <span className="block text-[10px] font-subheading font-bold text-[#FFF12E] uppercase tracking-wider">
                          TARIFA EXACTA EXPRESS 2026
                        </span>
                        <div className="flex items-baseline gap-1.5 mt-0.5">
                          {result.precio === 'consultar' ? (
                            <span className="text-lg font-subheading text-white uppercase tracking-wider">
                              A Consultar (+15 km)
                            </span>
                          ) : (
                            <>
                              <span className="font-mono font-bold tracking-tight text-4xl sm:text-5xl text-white tabular-nums">
                                ${result.precio.toLocaleString('es-AR')}
                              </span>
                              <span className="text-xs text-[#FFF12E] font-mono font-bold tabular-nums">ARS</span>
                            </>
                          )}
                        </div>
                      </div>

                      {result.precio === 'consultar' ? (
                        <a
                          href="/contacto"
                          className="w-full sm:w-auto min-h-[52px] inline-flex items-center justify-between bg-white/10 hover:bg-white/20 text-white font-subheading text-sm tracking-wider uppercase px-5 py-3 rounded-full border border-white/20 shadow transition-all"
                        >
                          <span>Pedir Cotización Especial</span>
                          <ArrowRight className="h-4 w-4 ml-3" />
                        </a>
                      ) : (
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group w-full sm:w-auto min-h-[52px] inline-flex items-center justify-between bg-[#25D366] hover:bg-[#20bd5a] text-white font-subheading font-bold text-sm tracking-wider uppercase px-5 py-3 rounded-full shadow-lg transition-all"
                        >
                          <span>Pedir por WhatsApp</span>
                          <span className="w-7 h-7 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 ml-3 group-hover:translate-x-1 transition-transform">
                            <CheckCircle2 className="h-4 w-4" />
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Real Interactive Map Panel (5 cols) */}
      <div className="lg:col-span-5 min-h-[360px] lg:min-h-full rounded-[28px] sm:rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-2.5 shadow-xl transition-all duration-300">
        <div className="bg-[#052C87] p-6 rounded-[20px] border border-white/10 flex flex-col justify-between h-full relative overflow-hidden text-white">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Header Map */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/15 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFF12E] animate-ping" />
              <span className="text-xs font-mono text-[#FFF12E] uppercase tracking-widest font-semibold tabular-nums">
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
              <span className="text-[#FFF12E] font-bold uppercase">Envío Express &lt; 2H</span>
            </div>
            <div className="flex justify-between">
              <span>Cobertura:</span>
              <span className="text-white">Partido de General Pueyrredón</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
