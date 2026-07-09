/**
 * Funciones puras de cálculo de precios para los servicios de Envíos DosRuedas.
 * Al ser puras (sin dependencias de React ni I/O), son completamente testeables.
 */

export interface PriceRangeProp {
  id: number;
  serviceType: string;
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  descripcion: string;
}

/**
 * Calcula el precio del servicio Express para una distancia dada.
 *
 * Lógica de rangos (según BD):
 *   0–3 km  → $3.700
 *   3–5 km  → $4.600
 *   5–7 km  → $6.100
 *   7–10 km → $8.200
 *   +10 km  → $8.200 + Math.ceil(km_excedente) × $1.000  (km entero, sin prorrateo)
 *
 * @param distanceKm  Distancia en kilómetros (puede tener decimales).
 * @param priceRanges Rangos de precios obtenidos desde la base de datos.
 * @returns El precio en ARS o `'consultar'` si supera los 20 km.
 */
export function calculateExpressPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';

  const expressRanges = priceRanges.filter((r) => r.serviceType === 'EXPRESS');

  if (expressRanges.length > 0) {
    const matchingRange = expressRanges.find(
      (r) => distanceKm >= r.distanciaMinKm && distanceKm < r.distanciaMaxKm
    );

    if (matchingRange) {
      if (matchingRange.distanciaMaxKm === 9999) {
        // Rango extendido (+10 km): precio base del tramo 7–10 km
        // + $precioRango por cada km entero excedente (sin prorrateo → Math.ceil)
        const baseRange = expressRanges.find(
          (r) => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10
        );
        const basePrice = baseRange ? baseRange.precioRango : 8200;
        const extraKm = distanceKm - 10;
        return basePrice + Math.ceil(extraKm) * matchingRange.precioRango;
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía — misma lógica de rangos
    if (distanceKm <= 3)  return 3700;
    if (distanceKm <= 5)  return 4600;
    if (distanceKm <= 7)  return 6100;
    if (distanceKm <= 10) return 8200;
    return 8200 + Math.ceil(distanceKm - 10) * 1000;
  }

  return 'consultar';
}

/**
 * Calcula el precio del servicio LowCost para una distancia dada.
 *
 * Lógica de rangos (según BD):
 *   0–3 km  → $3.000
 *   3–5 km  → $4.000
 *   5–7 km  → $5.300
 *   7–10 km → $7.000
 *   +10 km  → $7.000 + Math.ceil(km_excedente) × $700  (km entero, sin prorrateo)
 *
 * @param distanceKm  Distancia en kilómetros (puede tener decimales).
 * @param priceRanges Rangos de precios obtenidos desde la base de datos.
 * @returns El precio en ARS o `'consultar'` si supera los 20 km.
 */
export function calculateLowCostPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';

  const lowCostRanges = priceRanges.filter((r) => r.serviceType === 'LOW_COST');

  if (lowCostRanges.length > 0) {
    const matchingRange = lowCostRanges.find(
      (r) => distanceKm >= r.distanciaMinKm && distanceKm < r.distanciaMaxKm
    );

    if (matchingRange) {
      if (matchingRange.distanciaMaxKm === 9999) {
        // Rango extendido (+10 km): precio base del tramo 7–10 km
        // + $precioRango por cada km entero excedente (sin prorrateo → Math.ceil)
        const baseRange = lowCostRanges.find(
          (r) => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10
        );
        const basePrice = baseRange ? baseRange.precioRango : 7000;
        const extraKm = distanceKm - 10;
        return basePrice + Math.ceil(extraKm) * matchingRange.precioRango;
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía — misma lógica de rangos
    if (distanceKm <= 3)  return 3000;
    if (distanceKm <= 5)  return 4000;
    if (distanceKm <= 7)  return 5300;
    if (distanceKm <= 10) return 7000;
    return 7000 + Math.ceil(distanceKm - 10) * 700;
  }

  return 'consultar';
}
