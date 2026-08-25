import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ContactoPage from './page';

describe('ContactoPage — Verbatim & Functionality Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('1. Renderiza el contenedor principal y el hero de la página', () => {
    const { container } = render(<ContactoPage />);
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(screen.getByText('Conexión Directa Mar del Plata')).toBeInTheDocument();
  });

  it('2. Verifica los textos literales y campos de la sección Formulario de Contacto', () => {
    render(<ContactoPage />);

    // Badges y Títulos
    expect(screen.getAllByText('Cotización Inmediata')[0]).toBeInTheDocument();
    expect(screen.getByText(/Atención.*2 MIN/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: '¿Listo para escalar la logística de tu e-commerce?',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.'
      )
    ).toBeInTheDocument();

    // Campos
    expect(screen.getByLabelText(/Tu Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Empresa \/ Negocio/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Volumen Estimado Mensual/i)).toBeInTheDocument();

    // Opciones del selector
    expect(screen.getByText('Seleccioná una opción')).toBeInTheDocument();
    expect(screen.getByText('1 a 50 envíos')).toBeInTheDocument();
    expect(screen.getByText('51 a 200 envíos')).toBeInTheDocument();
    expect(screen.getByText('Más de 200 envíos')).toBeInTheDocument();

    // CTA
    expect(
      screen.getByRole('button', { name: /Hablar por WhatsApp/i })
    ).toBeInTheDocument();
  });

  it('3. Verifica los textos literales de la sección Redes y Canales Digitales', () => {
    render(<ContactoPage />);

    expect(screen.getByText('Nuestra Comunidad Digital')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'SEGUÍ NUESTRO MOVIMIENTO' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Sumate a nuestros canales digitales y enterate al toque de todas las novedades operativas en Mar del Plata.'
      )
    ).toBeInTheDocument();

    // Tarjeta 1 - Facebook
    expect(screen.getByText('FACEBOOK OFICIAL')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Seguí nuestro día a día, novedades operativas y la comunidad comercial en Mar del Plata.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('SEGUIR COMUNIDAD')).toBeInTheDocument();

    // Tarjeta 2 - Instagram
    expect(screen.getByText('INSTAGRAM MDQ')).toBeInTheDocument();
    expect(screen.getByText('@enviosdosruedas')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Mirá el detrás de escena de nuestros riders y la flota recorriendo las calles de MDQ.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('VER CONTENIDO')).toBeInTheDocument();

    // Tarjeta 3 - WhatsApp Directo
    expect(screen.getByText('WHATSAPP DIRECTO')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Escribinos directamente para consultas, contrataciones o soporte express al toque.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('INICIAR CHAT')).toBeInTheDocument();
  });

  it('4. Muestra la información exacta de Base de Operaciones MDQ (Friuli 1972, teléfono, email, horarios)', () => {
    render(<ContactoPage />);

    expect(screen.getAllByText('Friuli 1972, Mar del Plata')[0]).toBeInTheDocument();
    expect(screen.getAllByText('+54 223 660-2699')[0]).toBeInTheDocument();
    expect(screen.getAllByText('matiascejas@enviosdosruedas.com')[0]).toBeInTheDocument();
    expect(screen.getByText('Lunes a Viernes: 09:00 - 18:00 hs')).toBeInTheDocument();
    expect(screen.getByText('Sábados: 10:00 - 15:00 hs')).toBeInTheDocument();
  });

  it('5. Verifica el Banner de Conversión / Cierre con sus textos e interacciones', () => {
    render(<ContactoPage />);

    expect(screen.getByText('Operaciones Activas Mar del Plata 2026')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: '¿Tenés envíos para hoy? Los entregamos a tiempo.',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Cotizá online en segundos o coordiná directo con nuestro equipo logístico por WhatsApp.'
      )
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Cotizá tu Envío/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Chateá con Nosotros/i })).toBeInTheDocument();
  });

  it('6. Muestra mensaje de error si se intenta enviar el formulario sin completar el nombre', () => {
    const { container } = render(<ContactoPage />);
    const form = container.querySelector('form[data-testid="contact-main-form"]');
    expect(form).toBeInTheDocument();

    fireEvent.submit(form!);

    expect(
      screen.getByText(/Por favor, ingresá tu nombre para iniciar el contacto./i)
    ).toBeInTheDocument();
  });

  it('7. Completa la simulación de envío del formulario y abre WhatsApp', () => {
    vi.useFakeTimers();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ContactoPage />);

    const form = screen.getByTestId('contact-main-form');
    const nameInput = screen.getAllByPlaceholderText('Tu Nombre')[0];
    const empresaInput = screen.getAllByPlaceholderText('Empresa / Negocio')[0];
    const submitBtn = screen.getByRole('button', { name: /Hablar por WhatsApp/i });

    fireEvent.change(nameInput, { target: { value: 'Marcos Soler' } });
    fireEvent.change(empresaInput, { target: { value: 'Calzados MDQ' } });

    fireEvent.submit(form);

    act(() => {
      vi.runAllTimers();
    });

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('https://wa.me/542236602699'),
      '_blank',
      'noopener,noreferrer'
    );
    expect(screen.getByText('¡SOLICITUD ENVIADA!')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
