'use client';

import { useState, useCallback } from 'react';

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface OSRMRouteResult {
  distanceKm: number;
  durationMin: number;
  /** Array de [lng, lat] como devuelve OSRM GeoJSON */
  routeCoords: [number, number][];
}

interface UseOSRMRouteState {
  result: OSRMRouteResult | null;
  error: string | null;
  isLoading: boolean;
}

/**
 * Hook que encapsula la llamada a la API pública de OSRM para calcular
 * una ruta de conducción entre dos coordenadas en Mar del Plata.
 *
 * Reutilizable por CotizadorExpressForm y CotizadorLowCostForm (y cualquier
 * otro componente que necesite ruteo por carretera).
 */
export function useOSRMRoute() {
  const [state, setState] = useState<UseOSRMRouteState>({
    result: null,
    error: null,
    isLoading: false,
  });

  const KNOWN_ERRORS = [
    'Error al obtener la ruta de OSRM',
    'No se encontró una ruta vial entre los puntos indicados.',
  ] as const;

  const fetchRoute = useCallback(
    async (origin: Coordinate, destination: Coordinate): Promise<OSRMRouteResult | null> => {
      setState({ result: null, error: null, isLoading: true });

      try {
        const url =
          `https://router.project-osrm.org/route/v1/driving/` +
          `${origin.lng},${origin.lat};${destination.lng},${destination.lat}` +
          `?overview=full&geometries=geojson`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error al obtener la ruta de OSRM');
        }

        const data: {
          routes?: {
            distance: number;
            duration: number;
            geometry: { coordinates: [number, number][] };
          }[];
        } = await res.json();

        if (!data.routes || data.routes.length === 0) {
          throw new Error('No se encontró una ruta vial entre los puntos indicados.');
        }

        const route = data.routes[0];
        const result: OSRMRouteResult = {
          distanceKm: Math.round((route.distance / 1000) * 10) / 10,
          durationMin: Math.round(route.duration / 60),
          routeCoords: route.geometry.coordinates ?? [],
        };

        setState({ result, error: null, isLoading: false });
        return result;
      } catch (err: unknown) {
        const rawMessage = err instanceof Error ? err.message : null;
        const errorMessage =
          KNOWN_ERRORS.includes(rawMessage as (typeof KNOWN_ERRORS)[number])
            ? (rawMessage as string)
            : 'No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.';

        console.error('[useOSRMRoute]', err);
        setState({ result: null, error: errorMessage, isLoading: false });
        return null;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const reset = useCallback(() => {
    setState({ result: null, error: null, isLoading: false });
  }, []);

  return {
    ...state,
    fetchRoute,
    reset,
  };
}
