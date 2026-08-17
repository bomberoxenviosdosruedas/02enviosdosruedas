import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get('input');

  if (!input) {
    return NextResponse.json({ error: 'Falta el parámetro "input"' }, { status: 400 });
  }

  // La clave se lee del entorno del servidor de forma segura sin prefijo NEXT_PUBLIC_
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Configuración del servidor incompleta (API Key vacía)' }, { status: 500 });
  }

  try {
    // Coordenadas céntricas de Mar del Plata (-38.0055, -57.5426) con límites estrictos a 15km a la redonda
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input
    )}&key=${apiKey}&components=country:ar&location=-38.0055,-57.5426&radius=15000&strictbounds=true&language=es`;

    const res = await fetch(url);
    const data = await res.json();

    return NextResponse.json(data, {
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
