import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Page from './page';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';

// Mock useGoogleRoute hook
const mockFetchRoute = vi.fn();
vi.mock('@/src/hooks/useGoogleRoute', () => ({
  useGoogleRoute: () => ({
    fetchRoute: mockFetchRoute,
  }),
}));

// Mock prisma client
vi.mock('@/src/lib/prisma', () => ({
  prisma: {
    priceRange: {
      findMany: vi.fn().mockResolvedValue([
        { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'Zona 1' },
        { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'Zona 2' },
        { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'Zona 3' },
        { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'Zona 4' },
        { id: 5, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'Excedente' },
      ]),
    },
  },
}));

const mockPriceRanges = [
  { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'Excedente' },
];

describe('LowCost Page & CotizadorLowCostForm — Tier 1 & 2', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la página asíncrona de LowCost correctamente', async () => {
    const pageJSX = await Page();
    const { container } = render(pageJSX);
    expect(container.querySelector('#cotizar-lowcost-page')).toBeInTheDocument();
  });

  it('T1.2: renderiza el formulario de cotización LowCost con sus respectivos campos', () => {
    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
    expect(screen.getByLabelText('Tipo de producto a trasladar')).toBeInTheDocument();
  });

  it('T1.3: permite la entrada de datos en los campos del formulario', () => {
    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    const telInput = screen.getByPlaceholderText('Tu teléfono de contacto') as HTMLInputElement;
    fireEvent.change(telInput, { target: { value: '223111222' } });
    expect(telInput.value).toBe('223111222');
  });

  it('T1.4: simula la entrada y resolución de coordenadas de direcciones en el autocomplete', () => {
    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    const inputs = screen.getAllByTestId('mock-address-input');
    
    fireEvent.change(inputs[0], { target: { value: 'Base Friuli 1972' } });
    expect(inputs[0]).toHaveValue('Base Friuli 1972');
  });

  it('T1.5: realiza el cálculo de tarifa LowCost para 5.2 km devolviendo precio correcto ($5.300)', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 5.2,
      durationMin: 12,
      routeCoords: [[-38.002, -57.55], [-38.01, -57.56]],
    });

    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Matias' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '2236602699' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Mercaderia' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Rambla' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('5.2 km')).toBeInTheDocument();
      expect(screen.getByText('Hoy (Mismo Día)')).toBeInTheDocument();
      expect(screen.getByText('$5.300')).toBeInTheDocument();
    });
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: mantiene deshabilitado el botón de cálculo si faltan campos obligatorios', () => {
    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    expect(submitBtn).toBeDisabled();
  });

  it('T2.2: calcula correctamente el excedente para distancias mayores a 10 km usando Math.ceil (ej: 10.3 km -> $7.700)', async () => {
    // 10.3 km -> 10 km es $7.000 + Math.ceil(0.3) * 700 = $7.700
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 10.3,
      durationMin: 22,
      routeCoords: [[-38.002, -57.55], [-38.05, -57.60]],
    });

    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Matias' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '2236602699' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Mercaderia' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Constitucion 5000' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('10.3 km')).toBeInTheDocument();
      expect(screen.getByText('$7.700')).toBeInTheDocument();
    });
  });

  it('T2.3: muestra un mensaje de advertencia si la API de rutas no devuelve una ruta válida', async () => {
    mockFetchRoute.mockResolvedValueOnce(null);

    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Matias' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '2236602699' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Mercaderia' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Constitucion 5000' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/No se pudo calcular la ruta/)).toBeInTheDocument();
    });
  });

  it('T2.4: genera un enlace de WhatsApp codificado adecuadamente con los datos ingresados', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 2.5,
      durationMin: 7,
      routeCoords: [[-38.002, -57.55], [-38.005, -57.555]],
    });

    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Matias' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '2236602699' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Sobre' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Centro' } });

    fireEvent.click(screen.getByRole('button', { name: /Calcular Ruta/ }));

    await waitFor(() => {
      const waButton = screen.getByRole('link', { name: /Pedir por WhatsApp/ });
      expect(waButton).toHaveAttribute('href');
      expect(waButton.getAttribute('href')).toContain('https://wa.me/542236602699');
      expect(waButton.getAttribute('href')).toContain('Matias');
    });
  });

  it('T2.5: verifica que el mapa interactivo mockeado esté presente en la pantalla', () => {
    render(<CotizadorLowCostForm priceRanges={mockPriceRanges} />);
    expect(screen.getByTestId('mock-route-map')).toBeInTheDocument();
  });
});
