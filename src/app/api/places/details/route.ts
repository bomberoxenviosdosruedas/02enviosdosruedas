import { NextRequest, NextResponse } from 'next/server';

const SAFE_PLACE_ID_REGEX = /^[a-zA-Z0-9_\-]{5,250}$/;

export async function GET(request: NextRequest) {
  // Verificación perimetral de origen para mitigar uso como proxy abierto por sitios externos
  const secFetchSite = request.headers.get('sec-fetch-site');
  if (secFetchSite === 'cross-site') {
    return NextResponse.json({ error: 'Acceso no autorizado desde origen cruzado.' }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('place_id')?.trim();

  if (!placeId) {
    return NextResponse.json({ error: 'Falta el parámetro "place_id"' }, { status: 400 });
  }

  if (!SAFE_PLACE_ID_REGEX.test(placeId)) {
    return NextResponse.json({ error: 'Identificador de lugar "place_id" con formato inválido.' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=geometry&key=${apiKey}`;

    const res = await fetch(url);
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
