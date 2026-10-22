import { NextRequest, NextResponse } from 'next/server';

const SAFE_PLACE_ID_REGEX = /^[a-zA-Z0-9_\-:.+=]{5,500}$/;

export async function GET(request: NextRequest) {
  // Verificación perimetral de origen para mitigar uso como proxy abierto por sitios externos
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return NextResponse.json({ error: 'Acceso no autorizado desde origen cruzado.' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const rawPlaceId = searchParams.get('place_id')?.trim();

  if (!rawPlaceId) {
    return NextResponse.json({ error: 'Falta el parámetro "place_id"' }, { status: 400 });
  }

  const placeId = rawPlaceId.replace(/^places\//, '');

  if (!SAFE_PLACE_ID_REGEX.test(placeId)) {
    return NextResponse.json({ error: 'Identificador de lugar "place_id" con formato inválido.' }, { status: 400 });
  }

  const apiKey = (process.env.GOOGLE_MAPS_API_KEY?.trim() || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim());
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    // 1. Intentar con Places API (New)
    const newDetailsUrl = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const newDetailsRes = await fetch(newDetailsUrl, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'id,location,displayName,formattedAddress',
        'X-Goog-Maps-Solution-ID': 'gmp_git_agentskills_v1',
      },
    });

    if (newDetailsRes.ok) {
      const data = await newDetailsRes.json();
      if (data.location?.latitude != null && data.location?.longitude != null) {
        return NextResponse.json(
          {
            status: 'OK',
            result: {
              geometry: {
                location: {
                  lat: data.location.latitude,
                  lng: data.location.longitude,
                },
              },
              formatted_address: data.formattedAddress || '',
              name: data.displayName?.text || '',
            },
          },
          {
            headers: {
              'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
            },
          }
        );
      }
    }

    // 2. Fallback a Legacy Place Details
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=geometry,name,formatted_address&key=${apiKey}`;

    const res = await fetch(legacyUrl);
    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      },
    });
  } catch (error: unknown) {
    console.error('[API Place Details]', error);
    const message = error instanceof Error ? error.message : 'Error interno al consultar detalles del lugar';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
