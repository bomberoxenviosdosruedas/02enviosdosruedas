import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Page from './page';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';

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
        { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'Zona 1' },
        { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'Zona 2' },
        { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'Zona 3' },
        { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'Zona 4' },
        { id: 5, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'Excedente' },
      ]),
    },
  },
}));

const mockPriceRanges = [
  { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'Excedente' },
];

describe('Express Page & CotizadorExpressForm — Tier 1 & 2', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la página asíncrona de Express de forma correcta', async () => {
    const pageJSX = await Page();
    const { container } = render(pageJSX);
    expect(container.querySelector('#cotizar-express-page')).toBeInTheDocument();
  });

  it('T1.2: renderiza el formulario de cotización Express con todos sus inputs', () => {
    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Teléfono')).toBeInTheDocument();
    expect(screen.getByLabelText('Tipo de producto a trasladar')).toBeInTheDocument();
  });

  it('T1.3: permite ingresar datos personales y de producto', () => {
    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    const nameInput = screen.getByPlaceholderText('Tu nombre completo') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Alberto Rossi' } });
    expect(nameInput.value).toBe('Alberto Rossi');
  });

  it('T1.4: simula la resolución de direcciones mediante el autocomplete', () => {
    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    const inputs = screen.getAllByTestId('mock-address-input');
    
    // Simular entrada en dirección de origen
    fireEvent.change(inputs[0], { target: { value: 'Colon 1200' } });
    expect(inputs[0]).toHaveValue('Colon 1200');
  });

  it('T1.5: realiza el cálculo de tarifa Express para 5.2 km devolviendo precio correcto ($6.100)', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 5.2,
      durationMin: 12,
      routeCoords: [[-38.002, -57.55], [-38.01, -57.56]],
    });

    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    
    // Rellenar todos los campos obligatorios
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Llaves' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Colon 1200' } });
    fireEvent.change(addressInputs[1], { target: { value: 'San Martin 2300' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('5.2 km')).toBeInTheDocument();
      expect(screen.getByText('12 min')).toBeInTheDocument();
      expect(screen.getByText('$6.100')).toBeInTheDocument();
    });
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: mantiene deshabilitado el botón de cálculo si faltan campos obligatorios', () => {
    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    expect(submitBtn).toBeDisabled();
  });

  it('T2.2: calcula correctamente el excedente para distancias mayores a 10 km usando Math.ceil (ej: 10.3 km -> $9.200)', async () => {
    // 10.3 km -> 10 km es $8.200 + Math.ceil(0.3) * 1.000 = $9.200
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 10.3,
      durationMin: 22,
      routeCoords: [[-38.002, -57.55], [-38.05, -57.60]],
    });

    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Caja' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Constitucion 5000' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('10.3 km')).toBeInTheDocument();
      expect(screen.getByText('$9.200')).toBeInTheDocument();
    });
  });

  it('T2.3: muestra un mensaje de advertencia si la API de rutas no devuelve una ruta válida', async () => {
    mockFetchRoute.mockResolvedValueOnce(null);

    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Caja' } });
    
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

    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Alberto' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223456789' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Sobre' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Centro' } });

    fireEvent.click(screen.getByRole('button', { name: /Calcular Ruta/ }));

    await waitFor(() => {
      const waButton = screen.getByRole('link', { name: /Pedir por WhatsApp/ });
      expect(waButton).toHaveAttribute('href');
      expect(waButton.getAttribute('href')).toContain('https://wa.me/542236602699');
      expect(waButton.getAttribute('href')).toContain('Alberto');
    });
  });

  it('T2.5: verifica que el mapa interactivo mockeado esté presente en la pantalla', () => {
    render(<CotizadorExpressForm priceRanges={mockPriceRanges} />);
    expect(screen.getByTestId('mock-route-map')).toBeInTheDocument();
  });
});
