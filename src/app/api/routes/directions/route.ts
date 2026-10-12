import { NextRequest, NextResponse } from 'next/server';

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

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

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
