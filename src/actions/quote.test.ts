import { describe, it, expect, vi, beforeEach } from 'vitest';
import { calculateQuoteAction, type QuoteState } from './quote';

const { mockFindMany } = vi.hoisted(() => ({ mockFindMany: vi.fn() }));

vi.mock('@/src/lib/prisma', () => ({
  prisma: {
    priceRange: {
      findMany: mockFindMany,
    },
  },
}));

const initialState: QuoteState = { success: false, price: null, error: null };

function formDataWith(distanceKm: string | number, serviceType: string): FormData {
  const fd = new FormData();
  fd.append('distanceKm', String(distanceKm));
  fd.append('serviceType', serviceType);
  return fd;
}

// Tarifas oficiales 2026 (coinciden con `docs/contexto/precios.md`)
const expressRanges = [
  { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'Excedente' },
];

const lowCostRanges = [
  { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'Excedente' },
];

describe('calculateQuoteAction', () => {
  beforeEach(() => {
    mockFindMany.mockReset();
  });

  it('lee las tarifas de EXPRESS desde PriceRange (Prisma) y calcula 5.2 km → $6.100', async () => {
    mockFindMany.mockResolvedValue(expressRanges);

    const result = await calculateQuoteAction(initialState, formDataWith(5.2, 'EXPRESS'));

    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'EXPRESS' } });
    expect(result).toEqual({ success: true, price: 6100, error: null });
  });

  it('aplica el tramo extendido de EXPRESS con Math.ceil (10.3 km → $11.000)', async () => {
    mockFindMany.mockResolvedValue(expressRanges);

    const result = await calculateQuoteAction(initialState, formDataWith(10.3, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 11000, error: null });
  });

  it('lee las tarifas de LOW_COST desde PriceRange (Prisma) y calcula 2 km → $3.000', async () => {
    mockFindMany.mockResolvedValue(lowCostRanges);

    const result = await calculateQuoteAction(initialState, formDataWith(2, 'LOW_COST'));

    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'LOW_COST' } });
    expect(result).toEqual({ success: true, price: 3000, error: null });
  });

  it('aplica el tramo extendido de LOW_COST con Math.ceil (10.3 km → $7.700)', async () => {
    mockFindMany.mockResolvedValue(lowCostRanges);

    const result = await calculateQuoteAction(initialState, formDataWith(10.3, 'LOW_COST'));

    expect(result).toEqual({ success: true, price: 7700, error: null });
  });

  it('devuelve "consultar" para distancias > 20 km', async () => {
    mockFindMany.mockResolvedValue(expressRanges);

    const result = await calculateQuoteAction(initialState, formDataWith(25, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 'consultar', error: null });
  });

  it('ignora un priceRanges adulterado en el FormData: el precio sale de la BD mockeada', async () => {
    mockFindMany.mockResolvedValue(expressRanges);

    const fd = formDataWith(5.2, 'EXPRESS');
    fd.append(
      'priceRanges',
      JSON.stringify([
        { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 10, precioRango: 1, descripcion: 'Adulterado' },
      ])
    );

    const result = await calculateQuoteAction(initialState, fd);

    // El action solo lee distanceKm y serviceType del FormData; el precio sale de PriceRange (5–7 km → 6.100).
    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'EXPRESS' } });
    expect(result).toEqual({ success: true, price: 6100, error: null });
  });

  it('cae al fallback de pricing.ts cuando PriceRange devuelve una lista vacía', async () => {
    mockFindMany.mockResolvedValue([]);

    const express3_7 = await calculateQuoteAction(initialState, formDataWith(3.7, 'EXPRESS'));
    const express10_3 = await calculateQuoteAction(initialState, formDataWith(10.3, 'EXPRESS'));
    const lowCost10_3 = await calculateQuoteAction(initialState, formDataWith(10.3, 'LOW_COST'));

    expect(express3_7.price).toBe(4600); // fallback tramo 3–5
    expect(express10_3.price).toBe(11000); // fallback Math.ceil(10.3) × $1.000
    expect(lowCost10_3.price).toBe(7700); // fallback Math.ceil(10.3) × $700
  });

  it('cae al fallback de pricing.ts si la BD falla, sin exponer detalles del error', async () => {
    mockFindMany.mockRejectedValueOnce(new Error('connection refused'));

    const result = await calculateQuoteAction(initialState, formDataWith(2, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 3700, error: null });
  });

  it('rechaza una distancia no numérica (NaN) como error de validación', async () => {
    const result = await calculateQuoteAction(initialState, formDataWith('abc', 'EXPRESS'));

    expect(result.success).toBe(false);
    expect(result.price).toBeNull();
    expect(result.error).toBeTruthy();
  });

  it('rechaza distancias negativas con el mensaje de Zod', async () => {
    const result = await calculateQuoteAction(initialState, formDataWith(-1, 'EXPRESS'));

    expect(result.success).toBe(false);
    expect(result.error).toContain('positivo');
  });

  it('rechaza distancias que superan el tope de 200 km con el mensaje de Zod', async () => {
    const result = await calculateQuoteAction(initialState, formDataWith(250, 'EXPRESS'));

    expect(result.success).toBe(false);
    expect(result.error).toContain('200 km');
  });

  it('rechaza un serviceType inválido o ausente', async () => {
    const invalido = await calculateQuoteAction(initialState, formDataWith(5, 'FLEX'));

    expect(invalido.success).toBe(false);
    expect(invalido.price).toBeNull();

    const sinTipo = new FormData();
    sinTipo.append('distanceKm', '5');
    const ausente = await calculateQuoteAction(initialState, sinTipo);

    expect(ausente.success).toBe(false);
    expect(ausente.price).toBeNull();
  });
});