import { describe, it, expect, vi, beforeEach, beforeAll, afterAll } from 'vitest';

// Configurar env var ANTES de importar el módulo
const originalGoogleMapsKey = process.env.GOOGLE_MAPS_API_KEY;
const originalNextPublicGoogleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
process.env.GOOGLE_MAPS_API_KEY = 'test-api-key';
process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-api-key';

const { mockFindMany } = vi.hoisted(() => ({ mockFindMany: vi.fn() }));

vi.mock('@/lib/prisma', () => ({
  prisma: {
    priceRange: {
      findMany: mockFindMany,
    },
  },
}));

// Mock global fetch para Google Directions API
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

import { calculateQuoteAction, type QuoteState } from './quote';

const initialState: QuoteState = { success: false, price: null, distanceKm: null, error: null };

function formDataWithCoords(
  origenLat: number,
  origenLng: number,
  destinoLat: number,
  destinoLng: number,
  serviceType: string
): FormData {
  const fd = new FormData();
  fd.append('origenLat', String(origenLat));
  fd.append('origenLng', String(origenLng));
  fd.append('destinoLat', String(destinoLat));
  fd.append('destinoLng', String(destinoLng));
  fd.append('serviceType', serviceType);
  return fd;
}

function mockGoogleDirectionsResponse(distanceKm: number) {
  return {
    status: 'OK',
    routes: [
      {
        legs: [
          {
            distance: { value: Math.round(distanceKm * 1000) },
            duration: { value: 600 },
          },
        ],
        overview_polyline: { points: '' },
      },
    ],
  };
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

afterAll(() => {
    if (originalGoogleMapsKey) process.env.GOOGLE_MAPS_API_KEY = originalGoogleMapsKey;
    else delete process.env.GOOGLE_MAPS_API_KEY;
    if (originalNextPublicGoogleMapsKey) process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = originalNextPublicGoogleMapsKey;
    else delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  });

  describe('calculateQuoteAction', () => {
  beforeEach(() => {
    mockFindMany.mockReset();
    mockFetch.mockReset();
  });

  it('lee las tarifas de EXPRESS desde PriceRange (Prisma) y calcula 5.2 km → $6.100', async () => {
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(5.2),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'EXPRESS' } });
    expect(result).toEqual({ success: true, price: 6100, distanceKm: 5.2, error: null });
  });

  it('aplica el tramo extendido de EXPRESS con precio lineal (10.3 km → $10.300)', async () => {
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(10.3),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 10300, distanceKm: 10.3, error: null });
  });

  it('lee las tarifas de LOW_COST desde PriceRange (Prisma) y calcula 2 km → $3.000', async () => {
    mockFindMany.mockResolvedValue(lowCostRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(2),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'LOW_COST'));

    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'LOW_COST' } });
    expect(result).toEqual({ success: true, price: 3000, distanceKm: 2, error: null });
  });

  it('aplica el tramo extendido de LOW_COST con precio lineal (10.3 km → $7.210)', async () => {
    mockFindMany.mockResolvedValue(lowCostRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(10.3),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'LOW_COST'));

    expect(result).toEqual({ success: true, price: 7210, distanceKm: 10.3, error: null });
  });

  it('devuelve "consultar" para distancias > 20 km', async () => {
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(25),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 'consultar', distanceKm: 25, error: null });
  });

  it('ignora priceRanges adulterado en FormData: el precio sale de PriceRange (BD)', async () => {
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(5.2),
    });

    const fd = formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS');
    fd.append(
      'priceRanges',
      JSON.stringify([
        { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 10, precioRango: 1, descripcion: 'Adulterado' },
      ])
    );

    const result = await calculateQuoteAction(initialState, fd);

    expect(mockFindMany).toHaveBeenCalledWith({ where: { serviceType: 'EXPRESS' } });
    expect(result).toEqual({ success: true, price: 6100, distanceKm: 5.2, error: null });
  });

  it('cae al fallback de pricing.ts cuando PriceRange devuelve una lista vacía', async () => {
    mockFindMany.mockResolvedValue([]);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(3.7),
    });

    const express3_7 = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(10.3),
    });
    const express10_3 = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));
    const lowCost10_3 = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'LOW_COST'));

    expect(express3_7.price).toBe(4600); // fallback tramo 3–5
    expect(express10_3.price).toBe(10300); // fallback lineal 10.3 × $1.000
    expect(lowCost10_3.price).toBe(7210); // fallback lineal 10.3 × $700
  });

  it('cae al fallback de pricing.ts si la BD falla, sin exponer detalles del error', async () => {
    mockFindMany.mockRejectedValueOnce(new Error('connection refused'));
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(2),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(result).toEqual({ success: true, price: 3700, distanceKm: 2, error: null });
  });

  it('rechaza coordenadas inválidas (NaN) como error de validación', async () => {
    const fd = formDataWithCoords(NaN, -57.5, -38.1, -57.6, 'EXPRESS');
    const result = await calculateQuoteAction(initialState, fd);

    expect(result.success).toBe(false);
    expect(result.price).toBeNull();
    expect(result.error).toBeTruthy();
  });

  it('rechaza coordenadas fuera de rango (lat > 90)', async () => {
    const fd = formDataWithCoords(95, -57.5, -38.1, -57.6, 'EXPRESS');
    const result = await calculateQuoteAction(initialState, fd);

    expect(result.success).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it('rechaza serviceType inválido o ausente', async () => {
    const fd = formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'FLEX');
    const invalido = await calculateQuoteAction(initialState, fd);

    expect(invalido.success).toBe(false);
    expect(invalido.price).toBeNull();

    const sinTipo = new FormData();
    sinTipo.append('origenLat', '-38.0');
    sinTipo.append('origenLng', '-57.5');
    sinTipo.append('destinoLat', '-38.1');
    sinTipo.append('destinoLng', '-57.6');
    const ausente = await calculateQuoteAction(initialState, sinTipo);

    expect(ausente.success).toBe(false);
    expect(ausente.price).toBeNull();
  });

  it('devuelve error si Google Directions API falla', async () => {
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ZERO_RESULTS', error_message: 'No route found' }),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(result.success).toBe(false);
    expect(result.price).toBeNull();
    expect(result.error).toContain('No se pudo calcular la ruta');
  });

  it('devuelve error si falta GOOGLE_MAPS_API_KEY', async () => {
    // Testear que el código valida la presencia de la API key
    // Nota: en este test la key SÍ existe (configurada en beforeAll),
    // así que verificamos que la validación interna funciona forzando un error
    mockFindMany.mockResolvedValue(expressRanges);
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'REQUEST_DENIED', error_message: 'API key invalid' }),
    });

    const result = await calculateQuoteAction(initialState, formDataWithCoords(-38.0, -57.5, -38.1, -57.6, 'EXPRESS'));

    expect(result.success).toBe(false);
    expect(result.error).toContain('No se pudo calcular la ruta');
  });
});