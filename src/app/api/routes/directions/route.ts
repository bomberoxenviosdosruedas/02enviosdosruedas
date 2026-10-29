import { NextRequest, NextResponse } from 'next/server';
import { getRouteCache, setRouteCache } from '@/lib/route-cache';

export async function GET(request: NextRequest) {
  // Verificación perimetral de origen para mitigar uso como proxy abierto por sitios externos
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return NextResponse.json({ error: 'Acceso no autorizado desde origen cruzado.' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin')?.trim();
  const destination = searchParams.get('destination')?.trim();

  if (!origin || !destination) {
    return NextResponse.json({ error: 'Faltan parámetros "origin" o "destination"' }, { status: 400 });
  }

  if (origin.length > 200 || destination.length > 200) {
    return NextResponse.json({ error: 'Parámetros de ruta superan la longitud máxima permitida' }, { status: 400 });
  }

  // Parsear coordenadas para deduplicación y caché
  const originParts = origin.split(',').map((p) => Number(p.trim()));
  const destParts = destination.split(',').map((p) => Number(p.trim()));
  const isCoordPair =
    originParts.length === 2 &&
    destParts.length === 2 &&
    !Number.isNaN(originParts[0]) &&
    !Number.isNaN(originParts[1]) &&
    !Number.isNaN(destParts[0]) &&
    !Number.isNaN(destParts[1]);

  if (isCoordPair) {
    const cached = getRouteCache(originParts[0], originParts[1], destParts[0], destParts[1]);
    if (cached && cached.polyline) {
      return NextResponse.json(
        {
          status: 'OK',
          routes: [
            {
              legs: [
                {
                  distance: { value: Math.round(cached.distanceKm * 1000) },
                  duration: { value: (cached.durationMin ?? 0) * 60 },
                },
              ],
              overview_polyline: { points: cached.polyline },
            },
          ],
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            'X-Cache-Lookup': 'HIT',
          },
        }
      );
    }
  }

  const apiKey = (process.env.GOOGLE_MAPS_API_KEY?.trim() || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim());
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status === 'OK' && data.routes && data.routes.length > 0) {
      const leg = data.routes[0].legs[0];
      const distanceKm = Math.round((leg.distance.value / 1000) * 10) / 10;
      const durationMin = Math.round((leg.duration?.value ?? 0) / 60);
      const polyline = data.routes[0].overview_polyline?.points;

      if (isCoordPair) {
        setRouteCache(originParts[0], originParts[1], destParts[0], destParts[1], {
          distanceKm,
          durationMin,
          polyline,
        });
      }
    }

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error: unknown) {
    console.error('[API Directions]', error);
    const message = error instanceof Error ? error.message : 'Error interno al consultar ruta';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
