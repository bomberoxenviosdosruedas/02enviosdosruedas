/**
 * Tests unitarios para src/lib/pricing.ts
 *
 * Setup requerido (aún no instalado):
 *   pnpm add -D vitest @vitest/ui
 *   # Agregar en package.json > scripts: "test": "vitest"
 */
import { describe, it, expect } from 'vitest';
import { calculateExpressPrice, calculateLowCostPrice, type PriceRangeProp } from './pricing';

// ─── Fixtures ─────────────────────────────────────────────────────────────────

const expressRanges: PriceRangeProp[] = [
  { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0,  distanciaMaxKm: 3,    precioRango: 3200,  descripcion: 'Zona 1' },
  { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3,  distanciaMaxKm: 7,    precioRango: 5000,  descripcion: 'Zona 2' },
  { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 7,  distanciaMaxKm: 10,   precioRango: 7500,  descripcion: 'Zona 3' },
  { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 500,   descripcion: 'Extendido' },
];

const lowCostRanges: PriceRangeProp[] = [
  { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0,  distanciaMaxKm: 3,    precioRango: 2500,  descripcion: 'Zona 1' },
  { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3,  distanciaMaxKm: 7,    precioRango: 4000,  descripcion: 'Zona 2' },
  { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 7,  distanciaMaxKm: 10,   precioRango: 6000,  descripcion: 'Zona 3' },
  { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 400,   descripcion: 'Extendido' },
];

// ─── calculateExpressPrice ─────────────────────────────────────────────────────

describe('calculateExpressPrice', () => {
  it('retorna el precio del rango 0–3 km', () => {
    expect(calculateExpressPrice(1.5, expressRanges)).toBe(3200);
  });

  it('retorna el precio del rango 3–7 km', () => {
    expect(calculateExpressPrice(5, expressRanges)).toBe(5000);
  });

  it('retorna el precio del rango 7–10 km (incluido extremo inferior)', () => {
    expect(calculateExpressPrice(7, expressRanges)).toBe(7500);
  });

  it('aplica recargo por km para distancias extendidas (> 10 km, <= 20 km)', () => {
    // basePrice = 7500, extraKm = 13 - 10 = 3, rate = 500 → 7500 + 3*500 = 9000
    expect(calculateExpressPrice(13, expressRanges)).toBe(9000);
  });

  it('retorna "consultar" para distancias > 20 km', () => {
    expect(calculateExpressPrice(25, expressRanges)).toBe('consultar');
  });

  it('usa fallback cuando priceRanges está vacío — tramo corto (≤ 3 km)', () => {
    // fallback: 3700 base sin recargo
    expect(calculateExpressPrice(2, [])).toBe(3700);
  });

  it('usa fallback cuando priceRanges está vacío — tramo largo (> 3 km)', () => {
    // fallback: 3700 + (5 - 3) * 450 = 3700 + 900 = 4600
    expect(calculateExpressPrice(5, [])).toBe(4600);
  });

  it('retorna "consultar" con fallback para distancias > 20 km', () => {
    expect(calculateExpressPrice(21, [])).toBe('consultar');
  });
});

// ─── calculateLowCostPrice ────────────────────────────────────────────────────

describe('calculateLowCostPrice', () => {
  it('retorna el precio del rango 0–3 km', () => {
    expect(calculateLowCostPrice(1.5, lowCostRanges)).toBe(2500);
  });

  it('retorna el precio del rango 3–7 km', () => {
    expect(calculateLowCostPrice(5, lowCostRanges)).toBe(4000);
  });

  it('retorna el precio del rango 7–10 km (incluido extremo inferior)', () => {
    expect(calculateLowCostPrice(7, lowCostRanges)).toBe(6000);
  });

  it('aplica recargo por km para distancias extendidas (> 10 km, <= 20 km)', () => {
    // basePrice = 6000, extraKm = 15 - 10 = 5, rate = 400 → 6000 + 5*400 = 8000
    expect(calculateLowCostPrice(15, lowCostRanges)).toBe(8000);
  });

  it('retorna "consultar" para distancias > 20 km', () => {
    expect(calculateLowCostPrice(25, lowCostRanges)).toBe('consultar');
  });

  it('usa fallback cuando priceRanges está vacío — tramo corto (≤ 3 km)', () => {
    // fallback: 3000 base sin recargo
    expect(calculateLowCostPrice(2, [])).toBe(3000);
  });

  it('usa fallback cuando priceRanges está vacío — tramo largo (> 3 km)', () => {
    // fallback: 3000 + (6 - 3) * 400 = 3000 + 1200 = 4200
    expect(calculateLowCostPrice(6, [])).toBe(4200);
  });

  it('retorna "consultar" con fallback para distancias > 20 km', () => {
    expect(calculateLowCostPrice(21, [])).toBe('consultar');
  });
});
