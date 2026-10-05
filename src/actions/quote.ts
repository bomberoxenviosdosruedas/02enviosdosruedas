'use server';

import { cache } from 'react';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { calculateExpressPrice, calculateLowCostPrice, type PriceRangeProp } from '@/lib/pricing';

// Tope razonable para la distancia aceptada por el cotizador (km).
const MAX_DISTANCE_KM = 200;

// Esquema de entrada: coordenadas de origen/destino + tipo de servicio
const quoteSchema = z.object({
  origenLat: z.number().finite().min(-90).max(90),
  origenLng: z.number().finite().min(-180).max(180),
  destinoLat: z.number().finite().min(-90).max(90),
  destinoLng: z.number().finite().min(-180).max(180),
  serviceType: z.enum(['EXPRESS', 'LOW_COST']),
});

export type QuoteState = {
  success: boolean;
  price: number | 'consultar' | null;
  distanceKm: number | null;
  error: string | null;
};

/**
 * Calcula la distancia vial real entre dos coordenadas usando Google Directions API.
 * Lado servidor: valida que la distancia coincida con la ruta real.
 * 
 * Cacheado con React.cache() para deduplicar dentro de la misma request
 * (cuando se llama para EXPRESS y LOW_COST en paralelo).
 */
const fetchRouteDistanceCached = cache(async function fetchRouteDistance(
  origenLat: number,
  origenLng: number,
  destinoLat: number,
  destinoLng: number
): Promise<number | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    console.error('[calculateQuoteAction] GOOGLE_MAPS_API_KEY no configurada');
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origenLat},${origenLng}&destination=${destinoLat},${destinoLng}&key=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'OK' || !data.routes || data.routes.length === 0) {
      console.error('[calculateQuoteAction] Google Directions error:', data.error_message || data.status);
      return null;
    }

    const leg = data.routes[0].legs[0];
    // Google devuelve metros → km con 1 decimal
    const distanceKm = Math.round((leg.distance.value / 1000) * 10) / 10;
    return distanceKm;
  } catch (error) {
    console.error('[calculateQuoteAction] Error fetch route:', error);
    return null;
  }
});

/**
 * Obtiene los rangos de precios desde la BD con deduplicación por request.
 */
const getPriceRangesCached = cache(async function getPriceRanges(
  serviceType: 'EXPRESS' | 'LOW_COST'
): Promise<PriceRangeProp[]> {
  try {
    return await prisma.priceRange.findMany({
      where: { serviceType },
    });
  } catch (error) {
    console.error('No se pudieron leer las tarifas de PriceRange; se usa el fallback de pricing.ts', error);
    return [];
  }
});

export async function calculateQuoteAction(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  try {
    const rawData = {
      origenLat: Number(formData.get('origenLat')),
      origenLng: Number(formData.get('origenLng')),
      destinoLat: Number(formData.get('destinoLat')),
      destinoLng: Number(formData.get('destinoLng')),
      serviceType: formData.get('serviceType'),
    };

    const validatedData = quoteSchema.parse(rawData);

    // 1. Calcular distancia real en servidor (no confiar en cliente)
    // Usa React.cache() para deduplicar cuando se llama para EXPRESS y LOW_COST en paralelo
    const distanceKm = await fetchRouteDistanceCached(
      validatedData.origenLat,
      validatedData.origenLng,
      validatedData.destinoLat,
      validatedData.destinoLng
    );

    if (distanceKm === null) {
      return {
        success: false,
        price: null,
        distanceKm: null,
        error: 'No se pudo calcular la ruta. Verificá las direcciones e intentá de nuevo.',
      };
    }

    if (distanceKm > MAX_DISTANCE_KM) {
      return {
        success: false,
        price: null,
        distanceKm,
        error: `La distancia (${distanceKm} km) supera el límite permitido (${MAX_DISTANCE_KM} km).`,
      };
    }

    // 2. Leer tarifas de PriceRange (BD) → fallback pricing.ts
    // Usa React.cache() para deduplicar dentro del mismo request
    const priceRanges = await getPriceRangesCached(validatedData.serviceType);

    // 3. Calcular precio en servidor con la distancia validada
    let price: number | 'consultar';
    if (validatedData.serviceType === 'EXPRESS') {
      price = calculateExpressPrice(distanceKm, priceRanges);
    } else {
      price = calculateLowCostPrice(distanceKm, priceRanges);
    }

    return {
      success: true,
      price,
      distanceKm,
      error: null,
    };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        price: null,
        distanceKm: null,
        error: error.issues?.[0]?.message || 'Error de validación: coordenadas inválidas',
      };
    }
    return {
      success: false,
      price: null,
      distanceKm: null,
      error: 'Error interno al calcular la cotización',
    };
  }
}