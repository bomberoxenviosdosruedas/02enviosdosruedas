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

  it('retorna el precio del rango 3–7 km (incluido extremo superior)', () => {
    expect(calculateExpressPrice(7, expressRanges)).toBe(5000);
  });

  it('aplica recargo por km para distancias extendidas (> 10 km, <= 20 km)', () => {
    // 13 km * 500 = 6500
    expect(calculateExpressPrice(13, expressRanges)).toBe(6500);
  });

  it('retorna "consultar" para distancias > 20 km', () => {
    expect(calculateExpressPrice(25, expressRanges)).toBe('consultar');
  });

  it('usa fallback cuando priceRanges está vacío — tramo corto (≤ 3 km)', () => {
    // fallback: 3700 base sin recargo
    expect(calculateExpressPrice(2, [])).toBe(3700);
  });

  it('usa fallback cuando priceRanges está vacío — tramo largo (> 3 km)', () => {
    expect(calculateExpressPrice(5, [])).toBe(4600);
  });

  it('usa fallback cuando priceRanges está vacío — tramo extendido (> 10 km)', () => {
    // 12 km * 1000 = 12000
    expect(calculateExpressPrice(12, [])).toBe(12000);
    // 10.3 km -> Math.ceil(10.3) = 11 km * 1000 = 11000
    expect(calculateExpressPrice(10.3, [])).toBe(11000);
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

  it('retorna el precio del rango 3–7 km (incluido extremo superior)', () => {
    expect(calculateLowCostPrice(7, lowCostRanges)).toBe(4000);
  });

  it('aplica recargo por km para distancias extendidas (> 10 km, <= 20 km)', () => {
    // 15 km * 400 = 6000
    expect(calculateLowCostPrice(15, lowCostRanges)).toBe(6000);
  });

  it('retorna "consultar" para distancias > 20 km', () => {
    expect(calculateLowCostPrice(25, lowCostRanges)).toBe('consultar');
  });

  it('usa fallback cuando priceRanges está vacío — tramo corto (≤ 3 km)', () => {
    // fallback: 3000 base sin recargo
    expect(calculateLowCostPrice(2, [])).toBe(3000);
  });

  it('usa fallback cuando priceRanges está vacío — tramo largo (> 3 km)', () => {
    expect(calculateLowCostPrice(6, [])).toBe(5300);
  });

  it('usa fallback cuando priceRanges está vacío — tramo extendido (> 10 km)', () => {
    // 12 km * 700 = 8400
    expect(calculateLowCostPrice(12, [])).toBe(8400);
    // 10.3 km -> Math.ceil(10.3) = 11 km * 700 = 7700
    expect(calculateLowCostPrice(10.3, [])).toBe(7700);
  });

  it('retorna "consultar" con fallback para distancias > 20 km', () => {
    expect(calculateLowCostPrice(21, [])).toBe('consultar');
  });
});

// ─── Boundary Mismatches Verification ─────────────────────────────────────────

describe('pricing boundary consistency (DB vs Fallback)', () => {
  const dbExpressRanges: PriceRangeProp[] = [
    { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: '0-3' },
    { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: '3-5' },
    { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: '5-7' },
    { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: '7-10' },
  ];

  const dbLowCostRanges: PriceRangeProp[] = [
    { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: '0-3' },
    { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: '3-5' },
    { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: '5-7' },
    { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: '7-10' },
  ];

  it('Express 3.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateExpressPrice(3.0, dbExpressRanges);
    const fallbackPrice = calculateExpressPrice(3.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });

  it('Express 5.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateExpressPrice(5.0, dbExpressRanges);
    const fallbackPrice = calculateExpressPrice(5.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });

  it('Express 7.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateExpressPrice(7.0, dbExpressRanges);
    const fallbackPrice = calculateExpressPrice(7.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });

  it('LowCost 3.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateLowCostPrice(3.0, dbLowCostRanges);
    const fallbackPrice = calculateLowCostPrice(3.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });

  it('LowCost 5.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateLowCostPrice(5.0, dbLowCostRanges);
    const fallbackPrice = calculateLowCostPrice(5.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });

  it('LowCost 7.0 km: DB matching should equal fallback', () => {
    const dbPrice = calculateLowCostPrice(7.0, dbLowCostRanges);
    const fallbackPrice = calculateLowCostPrice(7.0, []);
    expect(dbPrice).toBe(fallbackPrice);
  });
});

