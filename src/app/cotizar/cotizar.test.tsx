import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
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
 * Se mockea `useGoogleRoute` (API externa) y `prisma` (BD), pero NO el Server
 * Action ni `pricing.ts`: el reparto de tarifas tiene que seguir viniendo de la
 * tabla real, no de un stub.
 */

const mockFetchRoute = vi.fn();
vi.mock('@/hooks/useGoogleRoute', () => ({
  useGoogleRoute: () => ({ fetchRoute: mockFetchRoute }),
}));

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

vi.mock('@/lib/prisma', () => ({
  prisma: {
    priceRange: {
      findMany: vi.fn().mockImplementation(({ where }: { where: { serviceType: string } }) =>
        Promise.resolve(RANGOS.filter((r) => r.serviceType === where.serviceType))
      ),
    },
  },
}));

/** Rellena los cinco campos del formulario único. */
function completarFormulario() {
  fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
  fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
  fireEvent.change(screen.getByPlaceholderText(/Ej: Documentos/), { target: { value: 'Llaves' } });

  const direcciones = screen.getAllByTestId('mock-address-input');
  fireEvent.change(direcciones[0], { target: { value: 'Friuli 1972' } });
  fireEvent.change(direcciones[1], { target: { value: 'San Martin 2300' } });
}

function cotizar() {
  fireEvent.click(screen.getByRole('button', { name: /Ver las dos tarifas/ }));
}

describe('Cotizador unificado /cotizar', () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
    expect(screen.queryByText(/Lo que esperás/)).not.toBeInTheDocument();
  });

  it('con una sola medición devuelve las dos tarifas de la misma distancia', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 5.2,
      durationMin: 12,
      routeCoords: [[-38.002, -57.55], [-38.01, -57.56]],
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => {
      expect(screen.getByText('Lo que pagás')).toBeInTheDocument();
    });

    // La ruta se midió una sola vez, para las dos tarifas.
    expect(mockFetchRoute).toHaveBeenCalledTimes(1);
    expect(screen.getAllByText('5.2 km').length).toBeGreaterThan(0);
    expect(screen.getByText('$6.100')).toBeInTheDocument(); // Express, 5-7 km
    expect(screen.getByText('$5.300')).toBeInTheDocument(); // LowCost, 5-7 km
  });

  it('compara precio y tiempo sobre filas separadas, con las dos escalas', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 2.5,
      durationMin: 7,
      routeCoords: [[-38.002, -57.55], [-38.005, -57.555]],
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    await waitFor(() => expect(screen.getByText('Lo que pagás')).toBeInTheDocument());

    // Fila 1: lo que pagás, los dos importes.
    expect(screen.getByText('$3.700')).toBeInTheDocument();
    expect(screen.getByText('$3.000')).toBeInTheDocument();
    expect(screen.getByText(/La diferencia entre uno y otro es de/)).toBeInTheDocument();

    // Fila 2: lo que esperás. Misma escala, tiempos distintos.
    expect(screen.getByText('Lo que esperás')).toBeInTheDocument();
    expect(screen.getByText('menos de 2 h')).toBeInTheDocument();
    expect(screen.getByText('hasta 6 h')).toBeInTheDocument();

    // La firma del bloque: el precio casi no se mueve, el tiempo sí. Si esto
    // desaparece, la comparación queda en dos gráficas que el lector descifra solo.
    expect(screen.getByText(/El precio casi no se mueve/)).toBeInTheDocument();
    expect(screen.getByText(/Esa es toda la decisión/)).toBeInTheDocument();
  });

  it('ofrece un botón por servicio y cada uno abre WhatsApp con ese servicio elegido', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 2.5,
      durationMin: 7,
      routeCoords: [[-38.002, -57.55], [-38.005, -57.555]],
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

  it('no ofrece el ruteo por lotes hasta que hay un envío cotizado', async () => {
    render(<CotizadorUnificado />);
    expect(screen.queryByRole('button', { name: /Tenés más envíos para cotizar/ })).not.toBeInTheDocument();

    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 2.5,
      durationMin: 7,
      routeCoords: [[-38.002, -57.55], [-38.005, -57.555]],
    });
    completarFormulario();
    cotizar();

    const pedirLotes = await screen.findByRole('button', { name: /Tenés más envíos para cotizar/ });
    fireEvent.click(pedirLotes);

    // Recién ahí aparece la planilla de lotes.
    await waitFor(() => {
      expect(screen.getByRole('region', { name: /Cotización por lotes LowCost/ })).toBeInTheDocument();
    });
    expect(document.getElementById('batch-grid')).toBeInTheDocument();
  });

  // ─── LÍMITES Y CASOS BORDE ────────────────────────────────────────────────

  it('aplica Math.ceil al excedente de 10 km en los dos servicios', async () => {
    // 10.3 km -> Math.ceil(10.3) = 11 km -> Express 11 × $1.000, LowCost 11 × $700
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 10.3,
      durationMin: 22,
      routeCoords: [[-38.002, -57.55], [-38.05, -57.60]],
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
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 24.5,
      durationMin: 40,
      routeCoords: [[-38.002, -57.55], [-38.2, -57.7]],
    });

    render(<CotizadorUnificado />);
    completarFormulario();
    cotizar();

    const cta = await screen.findByRole('link', { name: /Pedir Cotización Personalizada/ });
    expect(cta).toHaveAttribute('href', '/contacto');
    // Sin barras ni botones de servicio: no hay tarifa que comparar.
    expect(screen.queryByText('Lo que pagás')).not.toBeInTheDocument();
    expect(screen.queryByText('Lo que esperás')).not.toBeInTheDocument();
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
    mockFetchRoute.mockResolvedValueOnce(null);

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
