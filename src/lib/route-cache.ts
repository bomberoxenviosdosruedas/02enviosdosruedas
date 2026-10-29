/**
 * Cache compartido en memoria con TTL para cálculo y deduplicación de rutas.
 * Indexado por coordenadas de origen y destino redondeadas a 4 decimales (~11 metros).
 * Evita llamadas redundantes a Google Maps Platform (Routes / Directions API)
 * cuando múltiples Server Actions (Express y LowCost) o peticiones del cliente
 * consultan el mismo trazado en la misma sesión o franja horaria.
 */

export interface CachedRoute {
  distanceKm: number;
  durationMin?: number;
  routeCoords?: [number, number][];
  polyline?: string;
  timestamp: number;
}

const ROUTE_CACHE = new Map<string, CachedRoute>();
const MAX_CACHE_SIZE = 1000;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 horas

function formatCoord(coord: number): string {
  return Number(coord.toFixed(4)).toString();
}

export function buildRouteKey(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number
): string {
  return `${formatCoord(originLat)},${formatCoord(originLng)}->${formatCoord(destLat)},${formatCoord(destLng)}`;
}

export function getRouteCache(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number
): CachedRoute | null {
  const key = buildRouteKey(originLat, originLng, destLat, destLng);
  const entry = ROUTE_CACHE.get(key);
  if (!entry) return null;

  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    ROUTE_CACHE.delete(key);
    return null;
  }

  return entry;
}

export function setRouteCache(
  originLat: number,
  originLng: number,
  destLat: number,
  destLng: number,
  data: {
    distanceKm: number;
    durationMin?: number;
    routeCoords?: [number, number][];
    polyline?: string;
  }
): void {
  // Poda preventiva si se supera el tamaño máximo
  if (ROUTE_CACHE.size >= MAX_CACHE_SIZE) {
    const oldestKey = ROUTE_CACHE.keys().next().value;
    if (oldestKey) ROUTE_CACHE.delete(oldestKey);
  }

  const key = buildRouteKey(originLat, originLng, destLat, destLng);
  ROUTE_CACHE.set(key, {
    ...data,
    timestamp: Date.now(),
  });
}

export function clearRouteCache(): void {
  ROUTE_CACHE.clear();
}
