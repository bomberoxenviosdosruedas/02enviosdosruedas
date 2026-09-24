'use client';

import React, { useState, useTransition } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Calculator, CheckCircle2, AlertTriangle, ArrowRight, User, Phone, Package, MapPin } from 'lucide-react';
import AddressAutocomplete from '../../ui/AddressAutocomplete';
import DynamicRouteMap from '../../ui/DynamicRouteMap';
import DoubleBezelCard from '@/src/components/ui/DoubleBezelCard';
import CTANestedPill from '@/src/components/ui/CTANestedPill';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { type PriceRangeProp } from '@/src/lib/pricing';
import { calculateQuoteAction, type QuoteState } from '@/src/actions/quote';
import { trackAnalytics } from '@/src/lib/analytics';
import { buildWhatsAppUrl } from '@/src/lib/whatsapp';

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
  const [, startTransition] = useTransition();
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{
    distancia: number;
    precio: number | 'consultar';
  } | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(null);

  const { fetchRoute } = useGoogleRoute();
  const shouldReduceMotion = useReducedMotion();
  const initialState: QuoteState = { success: false, price: null, error: null };
  const hasTrackedStart = React.useRef(false);

  const handleInputFocus = () => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackAnalytics.quoteStart('lowcost');
    }
  };

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
        setError('No pudimos calcular la ruta exacta entre esos puntos. Por favor, verificá las direcciones.');
        setIsCalculating(false);
        return;
      }

      const distanceKm = route.distanceKm;
      setRouteCoords(route.coordinates);

      const formData = new FormData();
      formData.append('origen', origen);
      formData.append('destino', destino);
      formData.append('nombre', nombre);
      formData.append('telefono', telefono);
      formData.append('producto', producto);
      formData.append('tipoServicio', 'LOW_COST');
      formData.append('distanceKm', distanceKm.toString());

      const response = await calculateQuoteAction(initialState, formData);

      if (response.error || response.price === null) {
        setError(response.error || 'Ocurrió un error al calcular la cotización.');
      } else {
        setResult({
          distancia: distanceKm,
          precio: response.price,
        });
        setQuoteId(response.quoteId || null);
        setCalculated(true);
        trackAnalytics.quoteCalculate('lowcost', distanceKm, typeof response.price === 'number' ? response.price : 0);
      }

      setIsCalculating(false);
    });
  };

  const getWhatsAppLink = () => {
    if (!result) return '#';
    const message = `¡Hola Envíos DosRuedas! Vengo del cotizador web de Servicio LowCost. Mi ID de Cotización es #${quoteId || 'SD'}. Retiro en: ${origen}, Entrega en: ${destino}. Distancia: ${result.distancia} km. Precio estimado: ${result.precio === 'consultar' ? 'A consultar (> 20 km)' : `$${result.precio.toLocaleString('es-AR')} ARS`}. Nombre: ${nombre}, Tel: ${telefono}, Producto: ${producto}. ¡Quiero confirmar la reserva!`;
    return buildWhatsAppUrl(message);
  };

  return (
    <section id="cotizador-lowcost-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Container (7 cols) */}
      <article aria-label="Formulario de Cotización LowCost" className="lg:col-span-7 space-y-6">
        <DoubleBezelCard>
          <div className="space-y-6">
            <header className="border-b border-[#D6E4FE] pb-4">
              <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#0950F6]">
                INGRESÁ LOS DATOS DEL ENVÍO
              </h2>
              <p className="text-sm font-sans text-[#0950F6]/80 mt-1">
                Completá los puntos de retiro y entrega en Mar del Plata para calcular la tarifa plana o escalonada Same-Day.
              </p>
            </header>

            <AnimatePresence>
              {error && (
                <motion.div
                  role="alert"
                  aria-live="assertive"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-red-700 text-xs font-sans"
                >
                  <AlertTriangle className="h-4 w-4 shrink-0 text-red-600" />
                  <span>{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleCalculate} onFocus={handleInputFocus} className="space-y-6 relative z-10">
              {/* Origen */}
              <div className="space-y-1.5">
                <label htmlFor="lowcost-origen-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#0950F6]" />
                  Dirección de Origen (Retiro)
                </label>
                <AddressAutocomplete
                  id="lowcost-origen-input"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origen}
                  onChange={setOrigen}
                  onSelectCoordinate={setOrigenCoords}
                  required
                  className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
                />
              </div>

              {/* Destino */}
              <div className="space-y-1.5">
                <label htmlFor="lowcost-destino-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#0950F6]" />
                  Dirección de Destino (Entrega)
                </label>
                <AddressAutocomplete
                  id="lowcost-destino-input"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destino}
                  onChange={setDestino}
                  onSelectCoordinate={setDestinoCoords}
                  required
                  className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
                />
              </div>

              {/* Nombre y Teléfono en Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="lowcost-nombre-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#0950F6]" />
                    Nombre
                  </label>
                  <input
                    id="lowcost-nombre-input"
                    type="text"
                    aria-label="Nombre"
                    placeholder="Tu nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                    className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="lowcost-telefono-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-[#0950F6]" />
                    Teléfono
                  </label>
                  <input
                    id="lowcost-telefono-input"
                    type="tel"
                    aria-label="Teléfono"
                    placeholder="Tu teléfono de contacto"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-mono tabular-nums shadow-sm"
                  />
                </div>
              </div>

              {/* Producto */}
              <div className="space-y-1.5">
                <label htmlFor="lowcost-producto-input" className="text-xs font-subheading uppercase tracking-wider font-bold text-[#0950F6] flex items-center gap-1.5">
                  <Package className="h-3.5 w-3.5 text-[#0950F6]" />
                  Tipo de producto a trasladar
                </label>
                <input
                  id="lowcost-producto-input"
                  type="text"
                  aria-label="Tipo de producto a trasladar"
                  placeholder="Ej: Indumentaria, Calzado, Repuesto..."
                  value={producto}
                  onChange={(e) => setProducto(e.target.value)}
                  required
                  className="w-full h-11 bg-[#FFFFFF] border-[1.5px] border-[#D6E4FE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0950F6] focus-visible:border-[#0950F6] rounded-xl px-4 text-sm transition-all text-[#0950F6] placeholder:text-gray-400 font-sans shadow-sm"
                />
              </div>

              <div className="pt-2">
                <CTANestedPill
                  text={isCalculating ? 'Calculando Tarifa LowCost...' : 'Calcular Ruta y Tarifa LowCost'}
                  onClick={() => {}}
                  variant="primary"
                  className="w-full"
                />
              </div>
            </form>
          </div>
        </DoubleBezelCard>

        {/* Dynamic Results Display */}
        <AnimatePresence>
          {calculated && result && (
            <motion.div
              role="region"
              aria-live="polite"
              aria-atomic="true"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={shouldReduceMotion ? { duration: 0.15 } : { type: 'spring', stiffness: 100, damping: 20 }}
              className="mt-6 w-full"
            >
              <DoubleBezelCard>
                <div className="bg-[#0950F6] p-5 sm:p-6 rounded-[20px] border border-white/20 space-y-4 text-white">
                  {quoteId && (
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                      <span className="font-mono text-[11px] text-white/80">ID de Seguimiento:</span>
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-[#FFEC01]/20 text-[#FFEC01] font-bold border border-[#FFEC01]/40 tabular-nums">
                        #{quoteId}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <span className="block text-[10px] font-subheading font-bold text-[#FFEC01] uppercase tracking-wider">
                        DISTANCIA REAL
                      </span>
                      <span className="text-xl font-mono text-white font-bold tabular-nums">
                        {result.distancia} km
                      </span>
                    </div>
                    <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                      <span className="block text-[10px] font-subheading font-bold text-[#FFEC01] uppercase tracking-wider">
                        FRANJA ESTIMADA
                      </span>
                      <span className="text-sm font-subheading font-bold text-white uppercase">
                        Hoy (Mismo Día)
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-white/15 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                      <span className="block text-[10px] font-subheading font-bold text-[#FFEC01] uppercase tracking-wider">
                        TARIFA EXACTA LOWCOST 2026
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        {result.precio === 'consultar' ? (
                          <span className="text-lg font-subheading text-white uppercase tracking-wider">
                            A Consultar (&gt; 20 km)
                          </span>
                        ) : (
                          <>
                            <span className="font-mono font-bold tracking-tight text-4xl sm:text-5xl text-white tabular-nums">
                              ${result.precio.toLocaleString('es-AR')}
                            </span>
                            <span className="text-xs text-[#FFEC01] font-mono font-bold tabular-nums">ARS</span>
                          </>
                        )}
                      </div>
                    </div>

                    {result.precio === 'consultar' ? (
                      <CTANestedPill
                        href="/contacto"
                        text="Pedir Cotización Especial"
                        variant="secondary"
                      />
                    ) : (
                      <CTANestedPill
                        href={getWhatsAppLink()}
                        text="Pedí por WhatsApp"
                        variant="primary"
                        onClick={() => trackAnalytics.whatsappClick('cotizador_lowcost_resultado')}
                      />
                    )}
                  </div>
                </div>
              </DoubleBezelCard>
            </motion.div>
          )}
        </AnimatePresence>
      </article>

      {/* Real Interactive Map Panel (5 cols) */}
      <aside aria-label="Mapa interactivo y cobertura LowCost" className="lg:col-span-5 min-h-[360px] lg:min-h-full">
        <DoubleBezelCard>
          <div className="bg-[#0950F6] p-6 rounded-[20px] border border-white/20 flex flex-col justify-between h-full relative overflow-hidden text-white">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {/* Header Map */}
            <div className="relative z-10 flex justify-between items-center border-b border-white/15 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFEC01] animate-ping" />
                <span className="text-xs font-mono text-[#FFEC01] uppercase tracking-widest font-semibold tabular-nums">
                  Ruteador Batch Activo
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
                serviceType="LOW_COST"
              />
            </div>

            {/* Footer map details */}
            <div className="relative z-10 text-[11px] font-mono text-white/90 space-y-1.5 border-t border-white/15 pt-3 mt-3 tabular-nums">
              <div className="flex justify-between">
                <span>Servicio:</span>
                <span className="text-[#FFEC01] font-bold uppercase">Envío LowCost Batch</span>
              </div>
              <div className="flex justify-between">
                <span>Modalidad:</span>
                <span className="text-white">Ruteo Agrupado Diario MDQ</span>
              </div>
            </div>
          </div>
        </DoubleBezelCard>
      </aside>
    </section>
  );
}
