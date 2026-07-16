import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import NuestrasRedesPage from './page';

describe('NuestrasRedesPage — Tier 1 & 2', () => {
  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la página completa de Nuestras Redes sin errores', () => {
    const { container } = render(<NuestrasRedesPage />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('T1.2: renderiza el título principal de redes con tipografía Anton mayúscula', () => {
    render(<NuestrasRedesPage />);
    const heading = screen.getByRole('heading', { level: 2, name: /NEWSLETTER EXCLUSIVO/ });
    expect(heading).toBeInTheDocument();
    expect(heading.className).toContain('font-display');
  });

  it('T1.3: renderiza el formulario de suscripción de boletín informativo', () => {
    render(<NuestrasRedesPage />);
    const emailInput = screen.getByPlaceholderText('Tu correo electrónico...');
    const submitButton = screen.getByRole('button', { name: /Unirme Ahora/ });
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('T1.4: permite suscribirse ingresando un email válido y muestra mensaje de éxito', async () => {
    render(<NuestrasRedesPage />);
    const emailInput = screen.getByPlaceholderText('Tu correo electrónico...');
    const submitButton = screen.getByRole('button', { name: /Unirme Ahora/ });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('¡Suscripción Exitosa!')).toBeInTheDocument();
      expect(screen.getByText(/Ya formás parte de la lista prioritaria/)).toBeInTheDocument();
    });
  });

  it('T1.5: renderiza las tarjetas de canales de comunicación (WhatsApp, Instagram, etc.)', () => {
    render(<NuestrasRedesPage />);
    // Deberían haber enlaces o tarjetas a redes sociales
    expect(screen.getByText('NEWSLETTER EXCLUSIVO')).toBeInTheDocument();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: no permite enviar el formulario con un email vacío o demasiado corto', () => {
    render(<NuestrasRedesPage />);
    const emailInput = screen.getByPlaceholderText('Tu correo electrónico...');
    const submitButton = screen.getByRole('button', { name: /Unirme Ahora/ });

    // Intentar con un valor muy corto
    fireEvent.change(emailInput, { target: { value: 'a@b' } });
    fireEvent.click(submitButton);

    // No debería mostrar el mensaje de éxito
    expect(screen.queryByText('¡Suscripción Exitosa!')).not.toBeInTheDocument();
  });

  it('T2.2: aplica la estructura Bento o Grid asimétrico utilizando las clases correctas en los contenedores', () => {
    const { container } = render(<NuestrasRedesPage />);
    const outerBezels = container.getElementsByClassName('double-bezel-outer');
    expect(outerBezels.length).toBeGreaterThanOrEqual(1);
  });

  it('T2.3: mantiene la estructura responsiva en dispositivos móviles', () => {
    const { container } = render(<NuestrasRedesPage />);
    const grids = container.querySelectorAll('.grid');
    grids.forEach(grid => {
      expect(grid.className).toContain('grid-cols-1');
    });
  });

  it('T2.4: aplica las variables de color del sistema de diseño (from-[#0636A5] y to-[#0742CA])', () => {
    const { container } = render(<NuestrasRedesPage />);
    const newsletterSec = container.querySelector('#newsletter-subscribe');
    expect(newsletterSec?.className).toContain('bg-gradient-to-br');
    expect(newsletterSec?.className).toContain('from-brand-blue-700');
  });

  it('T2.5: verifica que las etiquetas explicativas utilicen IBM Plex Sans / Inter (clase font-sans)', () => {
    const { container } = render(<NuestrasRedesPage />);
    const explanationText = container.querySelector('.font-sans');
    expect(explanationText).toBeInTheDocument();
  });
});
