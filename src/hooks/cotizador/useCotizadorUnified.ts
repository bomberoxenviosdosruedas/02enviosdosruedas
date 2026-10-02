'use client';

import { useState, useCallback, useRef } from 'react';
import { useReducedMotion } from 'motion/react';
import { useGoogleRoute, type Coordinate } from '@/hooks/useGoogleRoute';
import { calculateQuoteAction, type QuoteState } from '@/actions/quote';
import { trackAnalytics } from '@/lib/analytics';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export type ServiceKey = 'express' | 'lowcost';

export interface OpcionCotizacion {
  key: ServiceKey;
  precio: number | 'consultar';
}

/**
 * Una sola medición de distancia alimenta las dos tarifas. Las dos llamadas al
 * Server Action viajan en paralelo: la distancia ya está calculada, no se vuelve
 * a pedir la ruta ni a medir dos veces.
 */
export interface ResultadoUnificado {
  distancia: number;
  express: OpcionCotizacion;
  lowcost: OpcionCotizacion;
}

const initialState: QuoteState = { success: false, price: null, distanceKm: null, error: null };

const SOURCE_LABEL: Record<ServiceKey, string> = {
  express: 'Express',
  lowcost: 'LowCost',
};

export function useCotizadorUnificado() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const hasTrackedStart = useRef(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Campos del formulario
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');

  // Coordenadas y trazado
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  // Estado de UI
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<ResultadoUnificado | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(null);

  const { fetchRoute } = useGoogleRoute();

  const handleInputFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackAnalytics.quoteStart('dual');
    }
  }, []);

  const handleCalculate = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      if (!origenCoords || !destinoCoords) {
        setError('Elegí el origen y el destino de la lista de sugerencias para calcular la ruta.');
        return;
      }

      setIsCalculating(true);
      setCalculated(false);
      setError(null);

      try {
        const route = await fetchRoute(origenCoords, destinoCoords, controller.signal);

        if (!route) {
          if (!controller.signal.aborted) {
            setError('No se pudo calcular la ruta. Revisá las direcciones o intentá de nuevo en un momento.');
          }
          setIsCalculating(false);
          return;
        }

        setRouteCoords(route.routeCoords);

        // Las tarifas nunca se calculan en el cliente: las dos pasan por el Server Action.
        // Enviamos coordenadas; el servidor recalcula la distancia y valida la ruta.
        const pedirTarifa = (serviceType: 'EXPRESS' | 'LOW_COST') => {
          const formData = new FormData();
          formData.append('origenLat', origenCoords.lat.toString());
          formData.append('origenLng', origenCoords.lng.toString());
          formData.append('destinoLat', destinoCoords.lat.toString());
          formData.append('destinoLng', destinoCoords.lng.toString());
          formData.append('serviceType', serviceType);
          return calculateQuoteAction(initialState, formData);
        };

        const [respExpress, respLowCost] = await Promise.all([
          pedirTarifa('EXPRESS'),
          pedirTarifa('LOW_COST'),
        ]);

        if (!respExpress.success || !respLowCost.success) {
          setError(respExpress.error || respLowCost.error || 'No pudimos calcular las tarifas.');
          setIsCalculating(false);
          return;
        }

        // Usar la distancia validada por el servidor (debe ser la misma en ambas respuestas)
        const serverDistanceKm = respExpress.distanceKm ?? respLowCost.distanceKm ?? route.distanceKm;

        const newQuoteId = `DR-${Math.floor(1000 + Math.random() * 9000)}`;
        setQuoteId(newQuoteId);

        setResultado({
          distancia: serverDistanceKm,
          express: { key: 'express', precio: respExpress.price! },
          lowcost: { key: 'lowcost', precio: respLowCost.price! },
        });
        setCalculated(true);
        setIsCalculating(false);

        if (typeof window !== 'undefined') {
          try {
            sessionStorage.setItem('last_quote_id', newQuoteId);
            sessionStorage.setItem(
              'last_quote_data',
              JSON.stringify({
                id: newQuoteId,
                servicio: 'DUAL',
                distancia: route.distanceKm,
                precioExpress: respExpress.price,
                precioLowCost: respLowCost.price,
                origen,
                destino,
                nombre,
                telefono,
                producto,
                timestamp: new Date().toISOString(),
              })
            );
          } catch {
            // sessionStorage no disponible (modo privado): el cotizador sigue funcionando.
          }
        }

        (['express', 'lowcost'] as const).forEach((service) => {
          const price = service === 'express' ? respExpress.price! : respLowCost.price!;
          trackAnalytics.quoteComplete({
            service,
            distanceKm: route.distanceKm,
            priceArs: price,
            result: price === 'consultar' ? 'consultar' : 'price',
          });
        });
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return;
        setError('Ocurrió un error inesperado al cotizar. Probá de nuevo.');
        setIsCalculating(false);
      }
    },
    [origenCoords, destinoCoords, fetchRoute, origen, destino, nombre, telefono, producto]
  );

  /** Enlace de WhatsApp con el servicio elegido y todos los datos del envío ya cargados. */
  const getWhatsAppLink = useCallback(
    (service: ServiceKey) => {
      if (!resultado) return '#';
      const precio = resultado[service].precio;
      const precioTexto =
        precio === 'consultar' ? 'A consultar (supera el radio estándar de 20 km)' : `$${precio.toLocaleString('es-AR')} ARS`;

      const timing =
        service === 'express'
          ? 'Entrega en una franja de 3 hs a elección, en el día (pedido con 2 hs de anticipación, corte 15:00 hs).'
          : 'Entrega programada sin elección de horario: pedido antes de las 13:00 hs, entrega en el día antes de las 19:00 hs.';

      const message = [
        `¡Hola Envíos DosRuedas! Elegí el servicio ${SOURCE_LABEL[service]} en el cotizador web:`,
        `🆔 Cotización: #${quoteId || 'WEB'}`,
        `👤 Nombre: ${nombre}`,
        `📞 Teléfono: ${telefono}`,
        `📦 Producto: ${producto}`,
        `📍 Retiro: ${origen}`,
        `🏁 Entrega: ${destino}`,
        `📏 Distancia: ${resultado.distancia} km`,
        `💵 Tarifa ${SOURCE_LABEL[service]} 2026: ${precioTexto}`,
        `🕐 ${timing}`,
        '',
        'Quiero confirmar la reserva.',
      ].join('\n');

      return buildWhatsAppUrl({ message, source: `cotizador_${service}_resultado` });
    },
    [resultado, quoteId, nombre, telefono, producto, origen, destino]
  );

  const resetForm = useCallback(() => {
    setOrigen('');
    setDestino('');
    setNombre('');
    setTelefono('');
    setProducto('');
    setOrigenCoords(null);
    setDestinoCoords(null);
    setRouteCoords([]);
    setIsCalculating(false);
    setCalculated(false);
    setError(null);
    setResultado(null);
    setQuoteId(null);
    hasTrackedStart.current = false;
  }, []);

  return {
    origen,
    setOrigen,
    destino,
    setDestino,
    nombre,
    setNombre,
    telefono,
    setTelefono,
    producto,
    setProducto,
    origenCoords,
    setOrigenCoords,
    destinoCoords,
    setDestinoCoords,
    routeCoords,
    isCalculating,
    calculated,
    error,
    resultado,
    quoteId,
    handleInputFocus,
    handleCalculate,
    getWhatsAppLink,
    resetForm,
    shouldReduceMotion,
  };
}

export type UseCotizadorUnificadoReturn = ReturnType<typeof useCotizadorUnificado>;
