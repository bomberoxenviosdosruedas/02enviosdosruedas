'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import { useGoogleRoute, type Coordinate } from '@/src/hooks/useGoogleRoute';
import { calculateQuoteAction, type QuoteState } from '@/src/actions/quote';
import { trackAnalytics } from '@/src/lib/analytics';
import { buildWhatsAppUrl } from '@/src/lib/whatsapp';

interface QuoteResult {
  distancia: number;
  precio: number | 'consultar';
}

const initialState: QuoteState = { success: false, price: null, error: null };

export function useCotizadorExpress() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const hasTrackedStart = useRef(false);

  // Form state
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [producto, setProducto] = useState('');

  // Coordinates state
  const [origenCoords, setOrigenCoords] = useState<Coordinate | null>(null);
  const [destinoCoords, setDestinoCoords] = useState<Coordinate | null>(null);
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  // UI state
  const [isCalculating, setIsCalculating] = useState(false);
  const [calculated, setCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(null);

  // Route fetching
  const { fetchRoute } = useGoogleRoute();

  // Cleanup effect for route fetching
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleInputFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackAnalytics.quoteStart('express');
    }
  }, []);

  const handleCalculate = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    // Cancel any previous in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    if (!origenCoords || !destinoCoords) {
      setError('Por favor, elegí direcciones válidas de la lista desplegable de sugerencias.');
      return;
    }

    setIsCalculating(true);
    setCalculated(false);
    setError(null);

    try {
      const route = await fetchRoute(origenCoords, destinoCoords, abortControllerRef.current.signal);

      if (!route) {
        if (!abortControllerRef.current.signal.aborted) {
          setError('No se pudo calcular la ruta. Por favor, intentá de nuevo en unos momentos.');
        }
        setIsCalculating(false);
        return;
      }

      setRouteCoords(route.routeCoords);

      const formData = new FormData();
      formData.append('distanceKm', route.distanceKm.toString());
      formData.append('serviceType', 'EXPRESS');

      const actionResult = await calculateQuoteAction(initialState, formData);

      if (!actionResult.success) {
        setError(actionResult.error || 'Error al calcular el valor del envío');
        setIsCalculating(false);
        return;
      }

      const newQuoteId = `DR-${Math.floor(1000 + Math.random() * 9000)}`;
      setQuoteId(newQuoteId);

      setResult({
        distancia: route.distanceKm,
        precio: actionResult.price!,
      });
      setCalculated(true);
      setIsCalculating(false);

      if (typeof window !== 'undefined') {
        try {
          sessionStorage.setItem('last_quote_id', newQuoteId);
          sessionStorage.setItem('last_quote_data', JSON.stringify({
            id: newQuoteId,
            service: 'EXPRESS',
            distancia: route.distanceKm,
            precio: actionResult.price,
            origen,
            destino,
            nombre,
            telefono,
            producto,
            timestamp: new Date().toISOString(),
          }));
        } catch {
          // Session storage fallback
        }
      }

      trackAnalytics.quoteComplete({
        service: 'express',
        distanceKm: route.distanceKm,
        priceArs: actionResult.price!,
        result: actionResult.price === 'consultar' ? 'consultar' : 'price',
      });
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        // Request was cancelled, ignore
        return;
      }
      setError('Error inesperado al calcular la cotización');
      setIsCalculating(false);
    }
  }, [origenCoords, destinoCoords, fetchRoute, origen, destino, nombre, telefono, producto]);

  const getWhatsAppLink = useCallback(() => {
    if (!result) return '#';
    const priceText = result.precio === 'consultar' 
      ? 'A convenir (Excede radio estándar)' 
      : `$${result.precio.toLocaleString('es-AR')}`;
    const text = `¡Hola Envíos DosRuedas! Quiero coordinar un Envío Express cotizado en la web:
🆔 *Cotización N°:* #${quoteId || 'WEB'}
👤 *Nombre:* ${nombre}
📞 *Teléfono:* ${telefono}
📦 *Producto:* ${producto}
📍 *Origen:* ${origen}
🏁 *Destino:* ${destino}
📏 *Distancia:* ${result.distancia} km
💵 *Tarifa Express 2026:* ${priceText}`;
    return buildWhatsAppUrl({ message: text, source: 'cotizador_express_resultado' });
  }, [result, quoteId, nombre, telefono, producto, origen, destino]);

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
    setResult(null);
    setQuoteId(null);
    hasTrackedStart.current = false;
  }, []);

  return {
    // Form fields
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
    // Coordinates
    origenCoords,
    setOrigenCoords,
    destinoCoords,
    setDestinoCoords,
    routeCoords,
    // UI state
    isCalculating,
    calculated,
    error,
    result,
    quoteId,
    // Actions
    handleInputFocus,
    handleCalculate,
    getWhatsAppLink,
    resetForm,
    // Config
    shouldReduceMotion,
  };
}

export type UseCotizadorExpressReturn = ReturnType<typeof useCotizadorExpress>;