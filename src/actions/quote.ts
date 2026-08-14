'use server';

import { z } from 'zod';
import { calculateExpressPrice, calculateLowCostPrice, type PriceRangeProp } from '@/src/lib/pricing';

const quoteSchema = z.object({
  distanceKm: z.number().min(0, "La distancia debe ser un número positivo"),
  serviceType: z.enum(['EXPRESS', 'LOW_COST']),
  priceRanges: z.array(
    z.object({
      id: z.number(),
      serviceType: z.string(),
      distanciaMinKm: z.number(),
      distanciaMaxKm: z.number(),
      precioRango: z.number(),
      descripcion: z.string(),
    })
  ).default([]),
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
      priceRanges: JSON.parse(formData.get('priceRanges') as string || '[]'),
    };

    const validatedData = quoteSchema.parse(rawData);

    let price: number | 'consultar';
    if (validatedData.serviceType === 'EXPRESS') {
      price = calculateExpressPrice(validatedData.distanceKm, validatedData.priceRanges);
    } else {
      price = calculateLowCostPrice(validatedData.distanceKm, validatedData.priceRanges);
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
