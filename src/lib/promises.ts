/**
 * Constantes únicas de promesas de servicio y umbrales operativos (BL-03).
 * Fuente de verdad unificada para cotizadores, páginas informativas, JSON-LD y llms.txt.
 *
 * Nota: Si se modifican estas promesas, recordar actualizar sincronizadamente también public/llms.txt.
 */

// Ventana de entrega Express (aprobado en Fase 0)
export const EXPRESS_WINDOW = '60 a 90 min';
export const EXPRESS_WINDOW_SHORT = '60-90 min';

// Ventanas operativas LowCost
export const LOWCOST_CUTOFF_TIME = '13:00 hs';
export const LOWCOST_DELIVERY_DEADLINE = '19:00 hs';

// Mercado Envíos Flex
export const FLEX_CUTOFF_TIME = '15:00 hs';
export const FLEX_DELIVERY_DEADLINE = '20:00 hs';
export const RAIN_SURCHARGE_PERCENT = 30; // +30% recargo por lluvia

// Umbrales de distancia y límites físicos
export const CONSULT_THRESHOLD_KM = 20; // Hasta 20 km cálculo automático; > 20 km "A consultar"
export const MAX_WEIGHT_KG = 15; // Bultos hasta 15 kg

// Horarios de atención oficiales en base central Friuli 1972 (Decisión 5 aprobada)
export const OPERATING_HOURS = {
  weekdays: '09:00 a 18:00 hs',
  saturdays: '10:00 a 15:00 hs',
  sundays: 'Cerrado',
} as const;

// Canales de contacto oficiales unificados (BL-19)
export const CONTACT_EMAIL = 'matiascejas@enviosdosruedas.com';
export const DEV_EMAIL = 'dev@enviosdosruedas.com.ar';
export const SUPPORT_PHONE = '+54 223 660-2699';
