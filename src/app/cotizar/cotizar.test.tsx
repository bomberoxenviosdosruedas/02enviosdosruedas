import React from 'react';
import { render, screen, fireEvent, waitFor, within, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, beforeAll, afterAll } from 'vitest';
import Page from './page';
import CotizadorUnificado from '@/components/cotizar/unified/CotizadorUnificado';
import {
  EXPRESS_PRICE_PER_KM,
  EXPRESS_TIERS,
  LOW_COST_TIERS,
} from '@/lib/pricing';

const formatArs = (value: number) => `$${value.toLocaleString('es-AR')}`;

/**
 * El cotizador unificado reemplaza a los dos cotizadores por servicio. Estos tests
 * cubren el flujo completo: una sola medición de ruta alimenta las dos tarifas.
 *
 * Se mockea:
 * - `fetch` global para Google Directions API (server-side en Server Action)
 * - `prisma` (BD)
 * - `useGoogleRoute` NO se usa en el Server Action, pero el cliente lo usa para el mapa
 * - AddressAutocomplete para simular selección de direcciones con coordenadas
 *
 * El Server Action ahora recibe coordenadas y recalcula la distancia en servidor.
 */

const RANGOS = [
  { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'Excedente' },
  { id: 6, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'Zona 1' },
  { id: 7, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'Zona 2' },
  { id: 8, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'Zona 3' },
  { id: 9, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'Zona 4' },
  { id: 10, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'Excedente' },
];

// Mock Prisma
vi.mock('@/lib/prisma', () => ({
  prisma: {
    priceRange: {
      findMany: vi.fn().mockImplementation(({ where }: { where: { serviceType: string } }) =>
        Promise.resolve(RANGOS.filter((r) => r.serviceType === where.serviceType))
      ),
    },
  },
}));

// Mock fetch global para Google Directions API (llamada server-side en Server Action)
const mockFetch = vi.fn();
vi.stubGlobal('fetch', mockFetch);

// Mock useGoogleRoute para el mapa del cliente
const mockFetchRoute = vi.fn();
vi.mock('@/hooks/useGoogleRoute', () => ({
  useGoogleRoute: () => ({ fetchRoute: mockFetchRoute }),
}));

// Mock AddressAutocomplete para simular selección con coordenadas
vi.mock('@/components/ui/AddressAutocomplete', () => ({
  default: React.forwardRef((props: any, ref) => (
    <input
      ref={ref}
      {...props}
      data-testid="mock-address-input"
      onChange={(e) => props.onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          // Simular selección de dirección con coordenadas
          const coords = props.id.includes('origen')
            ? { lat: -38.002, lng: -57.55 }
            : { lat: -38.01, lng: -57.56 };
          props.onSelectCoordinate?.(coords);
        }
      }}
    />
  )),
}));

// Configurar env var para tests
const originalGoogleMapsKey = process.env.GOOGLE_MAPS_API_KEY;
const originalNextPublicGoogleMapsKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
process.env.GOOGLE_MAPS_API_KEY = 'test-api-key';
process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = 'test-api-key';

function mockGoogleDirectionsResponse(distanceKm: number) {
  return {
    status: 'OK',
    routes: [
      {
        legs: [
          {
            distance: { value: Math.round(distanceKm * 1000) },
            duration: { value: Math.round(distanceKm * 2.5 * 60) }, // ~2.5 min/km
          },
        ],
        overview_polyline: { points: '' },
      },
    ],
  };
}

/** Rellena los cinco campos del formulario único. */
function completarFormulario() {
  fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
  fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
  fireEvent.change(screen.getByPlaceholderText(/Ej: Documentos/), { target: { value: 'Llaves' } });

  const direcciones = screen.getAllByTestId('mock-address-input');
  fireEvent.change(direcciones[0], { target: { value: 'Friuli 1972' } });
  fireEvent.change(direcciones[1], { target: { value: 'San Martin 2300' } });
  // Disparar Enter para simular selección y obtener coordenadas
  fireEvent.keyDown(direcciones[0], { key: 'Enter', code: 'Enter' });
  fireEvent.keyDown(direcciones[1], { key: 'Enter', code: 'Enter' });
}

function cotizar() {
  fireEvent.click(screen.getByRole('button', { name: /Ver las dos tarifas/ }));
}

afterAll(() => {
  if (originalGoogleMapsKey) process.env.GOOGLE_MAPS_API_KEY = originalGoogleMapsKey;
  else delete process.env.GOOGLE_MAPS_API_KEY;
  if (originalNextPublicGoogleMapsKey) process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = originalNextPublicGoogleMapsKey;
  else delete process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
});

describe('Cotizador unificado /cotizar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockReset();
    mockFetchRoute.mockReset();
    sessionStorage.clear();
  });

  // ─── PÁGINA ────────────────────────────────────────────────────────────────

  it('renderiza la página con su contenedor raíz y su JSON-LD con las dos ofertas', async () => {
    const { container } = render(await Page());
    expect(container.querySelector('#cotizar-page')).toBeInTheDocument();

    const jsonLd = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    );
    expect(jsonLd['@type']).toBe('WebApplication');
    expect(jsonLd.offers).toHaveLength(2);
    expect(jsonLd.offers.map((o: { name: string }) => o.name)).toEqual([
      'Envío Express en moto',
      'Envío LowCost en moto',
    ]);
  });

  it('publica la tabla de tarifas de los dos servicios lado a lado', async () => {
    render(await Page());
    const tabla = screen.getByRole('table');
    // Cada fila declara las dos columnas: no hay tabla de un solo servicio.
    // Los rótulos y los importes se derivan de `pricing.ts`, no se escriben a mano.
    expect(tabla).toHaveTextContent(`${EXPRESS_TIERS[0].minKm} a ${EXPRESS_TIERS[0].maxKm} km`);
    expect(tabla).toHaveTextContent(formatArs(EXPRESS_TIERS[0].price));
    expect(tabla).toHaveTextContent(formatArs(LOW_COST_TIERS[0].price));
    expect(tabla).toHaveTextContent(`${formatArs(EXPRESS_PRICE_PER_KM)} por km`);
    expect(screen.getAllByRole('columnheader').map((th) => th.textContent)).toEqual([
      'Zona',
      'Express',
      'LowCost',
    ]);
  });

  it('explica el flujo en tres pasos antes de pedir cualquier dato', () => {
    render(<CotizadorUnificado />);
    const pasos = screen.getByRole('navigation', { name: /Cómo funciona el cotizador/ });
    expect(pasos).toHaveTextContent('Cargá el envío');
    expect(pasos).toHaveTextContent('Compará las dos tarifas');
    expect(pasos).toHaveTextContent('Elegí y confirmá');
  });

  // ─── FLOR Happy: UNA medición, DOS tarifas ─────────────────────────────────

  it('no muestra ninguna tarifa hasta que el usuario calcula', () => {
    render(<CotizadorUnificado />);
    expect(screen.queryByText(/Lo que pagás/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Cuándo llega/)).not.toBeInTheDocument();
  });

  it('con una sola medición devuelve las dos tarifas de la misma distancia', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(5.2),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => {
      expect(screen.getByText('Lo que pagás')).toBeInTheDocument();
    });

    // La ruta se midió una sola vez (server-side), para las dos tarifas.
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(screen.getAllByText('5.2 km').length).toBeGreaterThan(0);
    expect(screen.getByText('$6.100')).toBeInTheDocument(); // Express, 5-7 km
    expect(screen.getByText('$5.300')).toBeInTheDocument(); // LowCost, 5-7 km
  });

  it('compara precio y horario de entrega sobre filas separadas', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(2.5),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => expect(screen.getByText('Lo que pagás')).toBeInTheDocument());

    // Fila 1: lo que pagás, los dos importes.
    expect(screen.getByText('$3.700')).toBeInTheDocument();
    expect(screen.getByText('$3.000')).toBeInTheDocument();
    expect(screen.getByText(/La diferencia entre uno y otro es de/)).toBeInTheDocument();

    // Fila 2: cuándo llega. Franja elegida contra entrega en el día.
    const cuando = screen.getByRole('region', { name: 'Cuándo llega' });
    expect(within(cuando).getByText('Elegís una franja de 3 hs')).toBeInTheDocument();
    expect(within(cuando).getByText('En el día, antes de las 19:00 hs')).toBeInTheDocument();
    expect(cuando).toHaveTextContent('2 hs de anticipación y hasta las 15:00 hs');
    expect(cuando).toHaveTextContent('Sin elección de horario. Pedido antes de las 13:00 hs');
  });

  it('no promete una duración de entrega ni cotiza lotes de un mismo cliente', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(2.5),
    });

    const { container } = render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => expect(screen.getByText('Lo que pagás')).toBeInTheDocument());

    // Promesas que el dueño desmintió el 2026-09-29.
    const texto = container.textContent!;
    expect(texto).not.toMatch(/menos de 2 h|60 ?(a|-) ?90|120 min|hasta 6 h/i);
    expect(texto).not.toMatch(/lote|agrupad/i);
    expect(screen.queryByRole('button', { name: /Tenés más envíos para cotizar/ })).not.toBeInTheDocument();
    expect(document.getElementById('batch-grid')).not.toBeInTheDocument();

    // En su lugar, el aviso de que hay recargos que el precio no incluye.
    expect(screen.getByRole('link', { name: /Ver cuáles y cuánto/ })).toHaveAttribute('href', '#recargos');
  });

  it('publica los recargos que el cotizador no suma solo', async () => {
    render(await Page());
    const recargos = screen.getByRole('region', { name: /Lo que puede sumar al precio/ });
    expect(recargos).toHaveTextContent('+50 %');
    expect(recargos).toHaveTextContent('$2.100 cada 10 min');
    expect(recargos).toHaveTextContent('+50 % por parada');
    expect(recargos).toHaveTextContent('100 % del envío');
    expect(recargos).toHaveTextContent('Bulto de más de 5 kg o 40 × 40 cm');
    // Periferia: $1.000 por km de ruta, confirmado por el dueño el 2026-09-30.
    // El $1.200 que aparece en el cuestionario y la planilla (sep-2026) no se aplica.
    expect(recargos).toHaveTextContent('$1.000 por km de ruta');
    // Bulto extra: respuesta del dueño en la planilla (pestaña 03, C6).
    expect(recargos).toHaveTextContent('Desde $1.950');
  });

  it('ofrece un botón por servicio y cada uno abre WhatsApp con ese servicio elegido', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(2.5),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => expect(screen.getByText('Lo que pagás')).toBeInTheDocument());

    const express = screen.getByRole('link', { name: /Elegir Express y confirmar por WhatsApp/ });
    const lowcost = screen.getByRole('link', { name: /Elegir LowCost y confirmar por WhatsApp/ });

    for (const [link, servicio, tarifa] of [
      [express, 'Express', '$3.700'],
      [lowcost, 'LowCost', '$3.000'],
    ] as const) {
      const href = decodeURIComponent(link.getAttribute('href')!);
      expect(href).toContain('https://wa.me/542236602699');
      expect(href).toContain(servicio);
      expect(href).toContain(tarifa);
      expect(href).toContain('Alberto');
    }
  });

  // ─── LÍMITES Y CASOS BORDE ────────────────────────────────────────────────

  it('aplica Math.ceil al excedente de 10 km en los dos servicios', async () => {
    // 10.3 km -> Math.ceil(10.3) = 11 km -> Express 11 × $1.000, LowCost 11 × $700
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(10.3),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => {
      expect(screen.getByText('$11.000')).toBeInTheDocument();
    });
    expect(screen.getByText('$7.700')).toBeInTheDocument();
  });

  it('deriva a cotización personalizada cuando el envío supera los 20 km', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => mockGoogleDirectionsResponse(24.5),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    const cta = await screen.findByRole('link', { name: /Pedir Cotización Personalizada/ });
    expect(cta).toHaveAttribute('href', '/contacto');
    // Sin barras ni botones de servicio: no hay tarifa que comparar.
    expect(screen.queryByText('Lo que pagás')).not.toBeInTheDocument();
    expect(screen.queryByText('Cuándo llega')).not.toBeInTheDocument();
  });

  it('avisa que hay que elegir dirección de la lista cuando faltan coordenadas', async () => {
    render(<CotizadorUnificado />);
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
    cotizar();

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/Elegí el origen y el destino/);
    });
    expect(mockFetchRoute).not.toHaveBeenCalled();
  });

  it('muestra un mensaje de error si la API de rutas no devuelve una ruta válida', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'ZERO_RESULTS', error_message: 'No route found' }),
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/No se pudo calcular la ruta/);
    });
    expect(screen.queryByText('Lo que pagás')).not.toBeInTheDocument();
  });

  it('mantiene el mapa mockeado en pantalla junto al formulario', () => {
    render(<CotizadorUnificado />);
    expect(screen.getByTestId('mock-route-map')).toBeInTheDocument();
  });
});
