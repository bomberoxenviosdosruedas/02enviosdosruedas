import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Verificación perimetral de origen para mitigar uso como proxy abierto por sitios externos
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return NextResponse.json({ error: 'Acceso no autorizado desde origen cruzado.' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const input = searchParams.get('input')?.trim();

  if (!input) {
    return NextResponse.json({ error: 'Falta el parámetro "input"' }, { status: 400 });
  }

  if (input.length > 120) {
    return NextResponse.json({ error: 'El parámetro "input" supera la longitud permitida.' }, { status: 400 });
  }

  // La clave se lee del entorno seguro del servidor con respaldo de NEXT_PUBLIC si la primera no está configurada
  const apiKey = (process.env.GOOGLE_MAPS_API_KEY?.trim() || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim());
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    // 1. Intentar con Places API (New) - Recomendado y moderno con solución oficial
    const newPlacesUrl = 'https://places.googleapis.com/v1/places:autocomplete';
    // 1. Intentar primero con locationRestriction para circunscribir a Mar del Plata (radio de 30 km)
    let newPlacesRes = await fetch(newPlacesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-Maps-Solution-ID': 'gmp_git_agentskills_v1',
      },
      body: JSON.stringify({
        input,
        includedRegionCodes: ['ar'],
        locationRestriction: {
          circle: {
            center: { latitude: -38.0055, longitude: -57.5426 },
            radius: 30000.0,
          },
        },
      }),
    });

    let data = newPlacesRes.ok ? await newPlacesRes.json() : null;

    // Si la restricción estricta no trajo sugerencias, reintentar con locationBias
    if (!data?.suggestions || data.suggestions.length === 0) {
      const biasRes = await fetch(newPlacesUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-Maps-Solution-ID': 'gmp_git_agentskills_v1',
        },
        body: JSON.stringify({
          input,
          includedRegionCodes: ['ar'],
          locationBias: {
            circle: {
              center: { latitude: -38.0055, longitude: -57.5426 },
              radius: 30000.0,
            },
          },
        }),
      });
      if (biasRes.ok) {
        data = await biasRes.json();
      }
    }

    if (data?.suggestions && data.suggestions.length > 0) {
      const predictions = (data.suggestions || [])
        .map((s: { placePrediction?: { text?: { text?: string }; placeId?: string; place?: string; structuredFormat?: { mainText?: { text?: string }; secondaryText?: { text?: string } } } }) => ({
          description: s.placePrediction?.text?.text || '',
          place_id:
            s.placePrediction?.placeId ||
            (s.placePrediction?.place ? s.placePrediction.place.replace(/^places\//, '') : ''),
          structured_formatting: {
            main_text: s.placePrediction?.structuredFormat?.mainText?.text || '',
            secondary_text: s.placePrediction?.structuredFormat?.secondaryText?.text || '',
          },
        }))
        .filter((p: { description: string; place_id: string }) => p.description && p.place_id);

      return NextResponse.json(
        {
          status: 'OK',
          predictions,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        }
      );
    }

    // 2. Fallback a Legacy Places API si la nueva API no responde en este proyecto
    const legacyUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input
    )}&key=${apiKey}&components=country:ar&location=-38.0055,-57.5426&radius=25000&language=es`;

    const res = await fetch(legacyUrl);
    const legacyData = await res.json();

    return NextResponse.json(legacyData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error: unknown) {
    console.error('[API Autocomplete]', error);
    const message = error instanceof Error ? error.message : 'Error interno al autocompletar';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
