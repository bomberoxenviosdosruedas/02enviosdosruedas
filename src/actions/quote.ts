'use server';

import { z } from 'zod';
import { prisma } from '@/src/lib/prisma';
import { calculateExpressPrice, calculateLowCostPrice, type PriceRangeProp } from '@/src/lib/pricing';

// Tope razonable para la distancia aceptada por el cotizador (km).
const MAX_DISTANCE_KM = 200;

const quoteSchema = z.object({
  // Zod 4 rechaza NaN e Infinity por defecto; .finite() explicita el requisito.
  distanceKm: z
    .number()
    .finite('La distancia debe ser un número finito')
    .min(0, 'La distancia debe ser un número positivo')
    .max(MAX_DISTANCE_KM, `La distancia supera el límite permitido (${MAX_DISTANCE_KM} km)`),
  serviceType: z.enum(['EXPRESS', 'LOW_COST']),
});

export type QuoteState = {
  success: boolean;
  price: number | 'consultar' | null;
  error: string | null;
};

export async function calculateQuoteAction(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  try {
    const rawData = {
      distanceKm: Number(formData.get('distanceKm')),
      serviceType: formData.get('serviceType'),
    };

    const validatedData = quoteSchema.parse(rawData);

    // TODO: distanceKm también llega del cliente (FormData). Recalcular la distancia en
    // el servidor a partir de origen/destino es la mejora pendiente (DESIGN.md §12.3).
    // Las tarifas se leen acá en el servidor: nunca aceptar priceRanges del cliente.
    let priceRanges: PriceRangeProp[] = [];
    try {
      priceRanges = await prisma.priceRange.findMany({
        where: { serviceType: validatedData.serviceType },
      });
    } catch (error) {
      // No filtrar detalles de la BD al cliente: se cae al fallback de pricing.ts.
      console.error('No se pudieron leer las tarifas de PriceRange; se usa el fallback de pricing.ts', error);
    }

    let price: number | 'consultar';
    if (validatedData.serviceType === 'EXPRESS') {
      price = calculateExpressPrice(validatedData.distanceKm, priceRanges);
    } else {
      price = calculateLowCostPrice(validatedData.distanceKm, priceRanges);
    }

    return {
      success: true,
      price,
      error: null,
    };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        price: null,
        error: error.issues?.[0]?.message || 'Error de validación',
      };
    }
    return {
      success: false,
      price: null,
      error: 'Error interno al calcular la cotización',
    };
  }
}