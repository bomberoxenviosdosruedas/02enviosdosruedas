import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origin');
  const destination = searchParams.get('destination');

  if (!origin || !destination) {
    return NextResponse.json({ error: 'Faltan parámetros "origin" o "destination"' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(
      origin
    )}&destination=${encodeURIComponent(destination)}&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error('[API Directions]', error);
    const message = error instanceof Error ? error.message : 'Error interno al consultar ruta';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
