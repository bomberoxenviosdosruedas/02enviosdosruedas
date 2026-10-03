import { describe, it, expect } from 'vitest';
import {
  EXPRESS_WINDOW,
  CONSULT_THRESHOLD_KM,
  CONTACT_EMAIL,
  OPERATING_HOURS,
  STANDARD_WEIGHT_KG,
  STANDARD_BULLET_DIMENSIONS_CM,
  SAME_DAY_FIXED_PRICE,
} from './promises';
import { calculateExpressPrice, calculateLowCostPrice } from './pricing';
// Excepción documentada al alias `@/*` (que solo resuelve dentro de `src/`):
// este test valida los `redirects` y `headers` declarados en la config de Next,
// que vive en la raíz del repo y no dentro de `src/`.
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
    // La promesa de "60 a 90 min" se retiró por inexacta (decisión del dueño 2026-09-29).
    // Express coordina una franja horaria a elección con 2 hs de anticipación mínima.
    expect(EXPRESS_WINDOW).toBe('franja horaria de 3 hs');
    expect(CONSULT_THRESHOLD_KM).toBe(20);
    expect(CONTACT_EMAIL).toBe('matiascejas@enviosdosruedas.com');
    expect(OPERATING_HOURS.weekdays).toBe('09:00 a 18:00 hs');
    expect(OPERATING_HOURS.saturdays).toBe('10:00 a 15:00 hs');
  });

  it('BL-03: el bulto sin recargo es 5 kg o 40 × 40 × 30 cm, sin techo numérico', async () => {
    // Un solo umbral, dos formas de expresarlo. Sobrepasado, el bulto se coordina
    // aparte con un recargo desde BULK_EXTRA_FROM_ARS.
    expect(STANDARD_WEIGHT_KG).toBe(5);
    expect(STANDARD_BULLET_DIMENSIONS_CM).toBe('40 × 40 × 30 cm');

    // No se publica techo de peso. El de 15 kg que se publicaba hasta el
    // 2026-09-30 no lo respaldaba ninguna fuente del dueño: el CSV responde
    // "todo lo que pueda ser llevado en moto", sin cifra (ver promises.ts).
    // Que el módulo no exporte ninguna capacidad máxima es lo que impide que el
    // copy vuelva a prometer un techo; copy-guard.test.ts bloquea además que
    // reaparezca el número escrito a mano en un componente.
    const promises = await import('./promises');
    expect(Object.keys(promises)).not.toContain('MAX_WEIGHT_KG');
  });

  it('BL-03: la tarifa fija Same Day vive en promises.ts, no hardcodeada en el copy', () => {
    expect(SAME_DAY_FIXED_PRICE).toBe(6000);
  });

  it('BL-03: Express calcula lineal (km × 1000) para +10 km hasta 20 km', () => {
    // 10.3 km * 1000 = $10.300 (LINEAL, no Math.ceil)
    expect(calculateExpressPrice(10.3, [])).toBe(10300);
    // 12 km * 1000 = $12.000
    expect(calculateExpressPrice(12, [])).toBe(12000);
    // 20 km * 1000 = $20.000
    expect(calculateExpressPrice(20, [])).toBe(20000);
    // > 20 km -> 'consultar'
    expect(calculateExpressPrice(20.1, [])).toBe('consultar');
  });

  it('BL-03: LowCost calcula lineal (km × 700) para +10 km hasta 20 km', () => {
    // 12 km * 700 = $8.400
    expect(calculateLowCostPrice(12, [])).toBe(8400);
    // 20 km * 700 = $14.000
    expect(calculateLowCostPrice(20, [])).toBe(14000);
    // > 20 km -> 'consultar'
    expect(calculateLowCostPrice(20.1, [])).toBe('consultar');
  });
});
