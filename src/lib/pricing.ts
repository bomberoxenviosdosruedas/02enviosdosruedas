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
 * @param distanceKm  Distancia en kilómetros (con 1 decimal).
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
        // Rango "extendido": precio base del tramo 7-10 km + recargo por km adicional
        const baseRange = expressRanges.find(
          (r) => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10
        );
        const basePrice = baseRange ? baseRange.precioRango : 8200; // fallback si falta el tramo base
        const extraKm = distanceKm - 10;
        return basePrice + Math.round(extraKm * matchingRange.precioRango);
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía
    let price = 3700;
    if (distanceKm > 3) {
      price += Math.round((distanceKm - 3) * 450);
    }
    return price;
  }

  return 'consultar';
}

/**
 * Calcula el precio del servicio LowCost para una distancia dada.
 *
 * @param distanceKm  Distancia en kilómetros (con 1 decimal).
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
        // Rango "extendido": precio base del tramo 7-10 km + recargo por km adicional
        const baseRange = lowCostRanges.find(
          (r) => r.distanciaMinKm === 7 && r.distanciaMaxKm === 10
        );
        const basePrice = baseRange ? baseRange.precioRango : 7000; // fallback si falta el tramo base
        const extraKm = distanceKm - 10;
        return basePrice + Math.round(extraKm * matchingRange.precioRango);
      }
      return matchingRange.precioRango;
    }
  } else {
    // Fallback cuando la tabla de precios de la BD está vacía
    let price = 3000;
    if (distanceKm > 3) {
      price += Math.round((distanceKm - 3) * 400);
    }
    return price;
  }

  return 'consultar';
}
