'use client';

import { useState, useCallback } from 'react';

export interface Coordinate {
  lat: number;
  lng: number;
}

export interface RouteResult {
  distanceKm: number;
  durationMin: number;
  routeCoords: [number, number][]; // [lng, lat]
}

interface UseGoogleRouteState {
  result: RouteResult | null;
  error: string | null;
  isLoading: boolean;
}

/**
 * Hook para calcular rutas reales por carretera utilizando la API de Google Directions.
 * Requiere NEXT_PUBLIC_GOOGLE_MAPS_API_KEY configurada.
 */
export function useGoogleRoute() {
  const [state, setState] = useState<UseGoogleRouteState>({
    result: null,
    error: null,
    isLoading: false,
  });

  const fetchRoute = useCallback(
    async (origin: Coordinate, destination: Coordinate): Promise<RouteResult | null> => {
      setState({ result: null, error: null, isLoading: true });

      try {
        const url = `/api/routes/directions?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;

        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Error al obtener la ruta de Google Maps');
        }

        const data = await res.json();

        if (data.status !== 'OK' || !data.routes || data.routes.length === 0) {
          throw new Error(data.error_message || 'No se encontró una ruta vial entre los puntos indicados.');
        }

        const route = data.routes[0];
        const leg = route.legs[0];

        // Google devuelve la distancia en metros y la duración en segundos
        const distanceKm = Math.round((leg.distance.value / 1000) * 10) / 10;
        const durationMin = Math.round(leg.duration.value / 60);

        // Decodificación simple del polyline retornado por Google
        const routeCoords = decodePolyline(route.overview_polyline.points);

        const result: RouteResult = {
          distanceKm,
          durationMin,
          routeCoords,
        };

        setState({ result, error: null, isLoading: false });
        return result;
      } catch (err: unknown) {
        console.error('[useGoogleRoute]', err);
        const errorMessage = err instanceof Error ? err.message : 'No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.';
        setState({ result: null, error: errorMessage, isLoading: false });
        return null;
      }
    },
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

/**
 * Decodifica una cadena de polyline de Google Maps a una lista de coordenadas [lng, lat]
 */
function decodePolyline(encoded: string): [number, number][] {
  const points: [number, number][] = [];
  let index = 0, len = encoded.length;
  let lat = 0, lng = 0;

  while (index < len) {
    let b, shift = 0, result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = ((result & 1) ? ~(result >> 1) : (result >> 1));
    lng += dlng;

    // Guardar como [lng, lat] para que sea compatible con Leaflet
    points.push([lng * 1e-5, lat * 1e-5]);
  }

  return points;
}
