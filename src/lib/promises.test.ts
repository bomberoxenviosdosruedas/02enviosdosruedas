import { describe, it, expect } from 'vitest';
import { EXPRESS_WINDOW, CONSULT_THRESHOLD_KM, CONTACT_EMAIL, OPERATING_HOURS } from './promises';
import { calculateExpressPrice, calculateLowCostPrice } from './pricing';
import nextConfig from '../../next.config';

describe('BL-01 & BL-03 — Enrutamiento, Promesas y Fórmulas 2026', () => {
  it('BL-01: next.config.ts define redirecciones permanentes para URLs legacy', async () => {
    if (typeof nextConfig.redirects === 'function') {
      const redirects = await nextConfig.redirects();
      const legacyFlex = redirects.find((r: { source: string }) => r.source === '/enviosflex');
      expect(legacyFlex).toBeDefined();
      expect(legacyFlex?.destination).toBe('/servicios/enviosflex');
      expect(legacyFlex?.permanent).toBe(true);

      const legacyExpress = redirects.find((r: { source: string }) => r.source === '/servicios/express');
      expect(legacyExpress?.destination).toBe('/servicios/envios-express');

      const legacyLowCost = redirects.find((r: { source: string }) => r.source === '/servicios/lowcost');
      expect(legacyLowCost?.destination).toBe('/servicios/envios-lowcost');
    }
  });

  it('BL-03: Promesas unificadas exportan constantes oficiales', () => {
    expect(EXPRESS_WINDOW).toBe('60 a 90 min');
    expect(CONSULT_THRESHOLD_KM).toBe(20);
    expect(CONTACT_EMAIL).toBe('matiascejas@enviosdosruedas.com');
    expect(OPERATING_HOURS.weekdays).toBe('09:00 a 18:00 hs');
    expect(OPERATING_HOURS.saturdays).toBe('10:00 a 15:00 hs');
  });

  it('BL-03: Express calcula Math.ceil(km) * 1000 para +10 km hasta 20 km', () => {
    // 10.3 km -> 11 km * 1000 = $11.000
    expect(calculateExpressPrice(10.3, [])).toBe(11000);
    // 12 km -> 12 km * 1000 = $12.000
    expect(calculateExpressPrice(12, [])).toBe(12000);
    // 20 km -> 20 * 1000 = $20.000
    expect(calculateExpressPrice(20, [])).toBe(20000);
    // > 20 km -> 'consultar'
    expect(calculateExpressPrice(20.1, [])).toBe('consultar');
  });

  it('BL-03: LowCost calcula Math.ceil(km) * 700 para +10 km hasta 20 km', () => {
    // 12 km -> 12 * 700 = $8.400
    expect(calculateLowCostPrice(12, [])).toBe(8400);
    // 20 km -> 20 * 700 = $14.000
    expect(calculateLowCostPrice(20, [])).toBe(14000);
    // > 20 km -> 'consultar'
    expect(calculateLowCostPrice(20.1, [])).toBe('consultar');
  });
});
