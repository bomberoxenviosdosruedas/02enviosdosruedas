import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('place_id');

  if (!placeId) {
    return NextResponse.json({ error: 'Falta el parámetro "place_id"' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('[API Place Details]', error);
    const message = error instanceof Error ? error.message : 'Error interno al consultar detalles del lugar';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
