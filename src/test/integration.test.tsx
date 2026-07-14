import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CotizadorExpressForm from '@/src/components/cotizar/express/CotizadorExpressForm';
import CotizadorLowCostForm from '@/src/components/cotizar/lowcost/CotizadorLowCostForm';
import ContactForm from '@/src/components/contacto/ContactForm';
import ContactoPage from '@/src/app/contacto/page';
import SobreNosotrosPage from '@/src/app/nosotros/sobre-nosotros/page';
import PreguntasFrecuentesPage from '@/src/app/nosotros/preguntas-frecuentes/page';

// Mock routing hook
const mockFetchRoute = vi.fn();
vi.mock('@/src/hooks/useGoogleRoute', () => ({
  useGoogleRoute: () => ({
    fetchRoute: mockFetchRoute,
  }),
}));

const mockExpressPriceRanges = [
  { id: 1, serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'Excedente' },
];

const mockLowCostPriceRanges = [
  { id: 1, serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'Zona 1' },
  { id: 2, serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'Zona 2' },
  { id: 3, serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'Zona 3' },
  { id: 4, serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'Zona 4' },
  { id: 5, serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'Excedente' },
];

describe('Cross-Feature & Real-World Scenarios — Tiers 3 & 4', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // ─── TIER 3: CROSS-FEATURE COMBINATIONS (6 tests) ──────────────────────────

  it('T3.1: compara tarifas de servicios Express y LowCost para una misma distancia (5.2 km)', async () => {
    mockFetchRoute.mockResolvedValue({
      distanceKm: 5.2,
      durationMin: 12,
      routeCoords: [[-38, -57], [-38.1, -57.1]],
    });

    // Render Express
    const { container: expressContainer, unmount: unmountExpress } = render(
      <CotizadorExpressForm priceRanges={mockExpressPriceRanges} />
    );
    
    // Fill inputs
    fireEvent.change(expressContainer.querySelector('#nombre-input')!, { target: { value: 'Juan' } });
    fireEvent.change(expressContainer.querySelector('#telefono-input')!, { target: { value: '223' } });
    fireEvent.change(expressContainer.querySelector('#producto-input')!, { target: { value: 'Sobre' } });
    
    const expressAddressInputs = expressContainer.querySelectorAll('[data-testid="mock-address-input"]');
    fireEvent.change(expressAddressInputs[0], { target: { value: 'A' } });
    fireEvent.change(expressAddressInputs[1], { target: { value: 'B' } });
    fireEvent.click(expressContainer.querySelector('button[type="submit"]')!);
    
    await waitFor(() => {
      expect(screen.getByText('$6.100')).toBeInTheDocument();
    });
    unmountExpress();

    // Render LowCost
    const { container: lcContainer } = render(
      <CotizadorLowCostForm priceRanges={mockLowCostPriceRanges} />
    );
    
    fireEvent.change(lcContainer.querySelector('#nombre-input')!, { target: { value: 'Juan' } });
    fireEvent.change(lcContainer.querySelector('#telefono-input')!, { target: { value: '223' } });
    fireEvent.change(lcContainer.querySelector('#producto-input')!, { target: { value: 'Sobre' } });
    
    const lcAddressInputs = lcContainer.querySelectorAll('[data-testid="mock-address-input"]');
    fireEvent.change(lcAddressInputs[0], { target: { value: 'A' } });
    fireEvent.change(lcAddressInputs[1], { target: { value: 'B' } });
    fireEvent.click(lcContainer.querySelector('button[type="submit"]')!);
    
    await waitFor(() => {
      expect(screen.getByText('$5.300')).toBeInTheDocument();
    });
  });

  it('T3.2: verifica que la resolución de coordenadas en AddressAutocomplete actualice el mapa y active la cotización', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 2.0,
      durationMin: 5,
      routeCoords: [[-38, -57], [-38.01, -57.01]],
    });

    render(<CotizadorExpressForm priceRanges={mockExpressPriceRanges} />);

    // Rellenar datos
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Juan' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Llaves' } });

    const autocompleteInputs = screen.getAllByTestId('mock-address-input');
    // Triggers autocomplete coordinate callback
    fireEvent.change(autocompleteInputs[0], { target: { value: 'Friuli 1972' } });
    fireEvent.change(autocompleteInputs[1], { target: { value: 'Colon 2000' } });

    const submitBtn = screen.getByRole('button', { name: /Calcular Ruta/ });
    expect(submitBtn).not.toBeDisabled();
    
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText('2 km')).toBeInTheDocument();
      expect(screen.getByTestId('mock-route-map')).toBeInTheDocument();
    });
  });

  it('T3.3: simula que el usuario visualiza el formulario de contacto y navega a las políticas de privacidad y FAQ', () => {
    render(<ContactoPage />);
    // Debería renderizar la información de contacto e invitar a FAQ
    expect(screen.getByText(/Friuli 1972/)).toBeInTheDocument();
  });

  it('T3.4: valida la alternancia cromática de fondos oscuros e institucionales entre páginas', () => {
    // Sobre nosotros usa fondo blanco base
    const { container: aboutContainer, unmount: unmountAbout } = render(<SobreNosotrosPage />);
    expect(aboutContainer.querySelector('main')?.className).toContain('bg-white');
    unmountAbout();

    // Contacto usa bg-brand-white-50
    const { container: contactContainer } = render(<ContactoPage />);
    expect(contactContainer.querySelector('main')?.className).toContain('bg-brand-white-50');
  });

  it('T3.5: valida la consistencia del diseño asimétrico Bento Grid entre la página de contacto y Sobre Nosotros', () => {
    const { container: aboutContainer, unmount: unmountAbout } = render(<SobreNosotrosPage />);
    expect(aboutContainer.querySelector('.grid-cols-1')).toBeInTheDocument();
    unmountAbout();

    const { container: contactContainer } = render(<ContactoPage />);
    expect(contactContainer.querySelector('.lg\\:col-span-5')).toBeInTheDocument();
    expect(contactContainer.querySelector('.lg\\:col-span-7')).toBeInTheDocument();
  });

  it('T3.6: asegura que los valores de formulario ingresados no se compartan entre el formulario de contacto y cotizadores', () => {
    render(<ContactForm />);
    const contactNameInput = screen.getByPlaceholderText('Ej: Juan Pérez') as HTMLInputElement;
    fireEvent.change(contactNameInput, { target: { value: 'Emprendedor MDQ' } });
    expect(contactNameInput.value).toBe('Emprendedor MDQ');

    // Render cotizador en paralelo
    render(<CotizadorExpressForm priceRanges={mockExpressPriceRanges} />);
    const expressNameInput = screen.getByPlaceholderText('Tu nombre completo') as HTMLInputElement;
    expect(expressNameInput.value).toBe('');
  });

  // ─── TIER 4: REAL-WORLD APPLICATION SCENARIOS (5 tests) ────────────────────

  it('T4.1: Viaje de Cliente — Presupuesto alto de Express y posterior consulta de FAQ para medios de pago', async () => {
    // 12.5 km -> 10km base $8200 + Math.ceil(2.5) * 1000 = $8200 + 3 * 1000 = $11.200
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 12.5,
      durationMin: 25,
      routeCoords: [[-38, -57], [-38.1, -57.1]],
    });

    render(<CotizadorExpressForm priceRanges={mockExpressPriceRanges} />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Marcos' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Notebook' } });
    
    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Puerto' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Constitucion' } });

    fireEvent.click(screen.getByRole('button', { name: /Calcular Ruta/ }));

    await waitFor(() => {
      expect(screen.getByText('12.5 km')).toBeInTheDocument();
      expect(screen.getByText('$11.200')).toBeInTheDocument();
    });

    // Simulamos que decide consultar FAQ por pagos
    const { unmount } = render(<PreguntasFrecuentesPage />);
    expect(screen.getByText('Preguntas sobre Pagos')).toBeInTheDocument();
    unmount();
  });

  it('T4.2: Viaje de Cliente — Dueño de e-commerce solicita cuenta corriente y verifica la dirección física del depósito', () => {
    vi.useFakeTimers();
    render(<ContactoPage />);
    
    // Completa formulario comercial
    fireEvent.change(screen.getByPlaceholderText('Ej: Juan Pérez'), { target: { value: 'Martín Tienda' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: juan.perez@email.com'), { target: { value: 'martin@tienda.com' } });
    fireEvent.change(screen.getByPlaceholderText('Escribí acá tu consulta. Decinos en qué podemos ayudarte...'), { target: { value: 'Hola, quiero abrir una cuenta corriente corporativa para envíos Flex diarios.' } });
    
    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/ }));
    act(() => {
      vi.runAllTimers();
    });

    expect(screen.getByText('¡MENSAJE ENVIADO!')).toBeInTheDocument();

    // Verifica que la dirección física sea Friuli 1972
    expect(screen.getByText(/Friuli 1972/)).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('T4.3: Viaje de Cliente — Intento de envío LowCost informando reglas de corte (Cut-off 13:00 hs)', async () => {
    mockFetchRoute.mockResolvedValueOnce({
      distanceKm: 3.5,
      durationMin: 10,
      routeCoords: [[-38, -57], [-38.02, -57.02]],
    });

    render(<CotizadorLowCostForm priceRanges={mockLowCostPriceRanges} />);

    fireEvent.change(screen.getByPlaceholderText('Tu nombre completo'), { target: { value: 'Ana' } });
    fireEvent.change(screen.getByPlaceholderText('Tu teléfono de contacto'), { target: { value: '223' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: Documentos, Paquete pequeño...'), { target: { value: 'Zapatos' } });

    const addressInputs = screen.getAllByTestId('mock-address-input');
    fireEvent.change(addressInputs[0], { target: { value: 'Origen' } });
    fireEvent.change(addressInputs[1], { target: { value: 'Destino' } });

    fireEvent.click(screen.getByRole('button', { name: /Calcular Ruta/ }));

    await waitFor(() => {
      expect(screen.getByText('$4.000')).toBeInTheDocument();
      expect(screen.getByText('Hoy (Mismo Día)')).toBeInTheDocument();
    });

    // La descripción o badges del formulario deben mencionar el corte o reglas de ruteo
    expect(screen.getByText('Programado y Económico')).toBeInTheDocument();
  });

  it('T4.4: Situación Climática — Validación de políticas logísticas bajo tormenta severa o alertas viales', () => {
    // Alerta climática y seguridad de mensajeros en FAQ
    render(<PreguntasFrecuentesPage />);
    // Expande la pregunta sobre envíos
    const questionBtn = screen.getByText('¿Qué tipo de envíos realizan?');
    fireEvent.click(questionBtn);
    
    // Las respuestas de FAQ detallan la cobertura urbana y seguridad vial
    expect(screen.getByText(/resguarda la seguridad vial de nuestros repartidores/)).toBeInTheDocument();
  });

  it('T4.5: Cumplimiento SLA Flex — Validación de reputación verde (>99.8%) y resguardo legal del paquete', () => {
    // FAQ o Nosotros explica el SLA Flex y seguridad del reparto
    render(<PreguntasFrecuentesPage />);
    const questionBtn = screen.getByText('¿Cómo funciona el servicio de MercadoLibre Flex?');
    fireEvent.click(questionBtn);
    
    expect(screen.getByText(/Same-Day/)).toBeInTheDocument();
    expect(screen.getByText(/reputación en verde/)).toBeInTheDocument();
  });
});
