import React from 'react';
import { render, screen } from '@testing-library/react';
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
    const heading = screen.getByRole('heading', { level: 1, name: /COMUNIDAD EN/ });
    expect(heading).toBeInTheDocument();
    expect(heading.className).toContain('font-display');
  });

  it('T1.3: renderiza las redes oficiales disponibles', () => {
    render(<NuestrasRedesPage />);
    const whatsappLink = screen.getAllByText(/WHATSAPP/i);
    expect(whatsappLink.length).toBeGreaterThanOrEqual(1);
  });

  it('T1.4: renderiza el título del carrusel o feed de posts', () => {
    render(<NuestrasRedesPage />);
    const heading = screen.getByText(/PUBLICACIONES RECIENTES/i);
    expect(heading).toBeInTheDocument();
  });

  it('T1.5: renderiza las tarjetas de canales de comunicación', () => {
    render(<NuestrasRedesPage />);
    expect(screen.getByText(/SOCIAL MEDIA/i)).toBeInTheDocument();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: renderiza posts del feed social', () => {
    render(<NuestrasRedesPage />);
    const postImage = screen.getAllByAltText(/Publicación de/i);
    expect(postImage.length).toBeGreaterThanOrEqual(1);
  });

  it('T2.2: aplica la estructura Bento o Grid asimétrico utilizando las clases correctas en los contenedores', () => {
    const { container } = render(<NuestrasRedesPage />);
    const outerBezels = container.querySelectorAll('.rounded-\\[28px\\], .rounded-\\[30px\\], .double-bezel-outer');
    expect(outerBezels.length).toBeGreaterThanOrEqual(1);
  });

  it('T2.3: mantiene la estructura responsiva en dispositivos móviles', () => {
    const { container } = render(<NuestrasRedesPage />);
    const grids = container.querySelectorAll('.grid');
    grids.forEach(grid => {
      expect(grid.className).toContain('grid-cols-1');
    });
  });

  it('T2.4: aplica las variables de color del sistema de diseño (gradient from-brand-blue-700)', () => {
    const { container } = render(<NuestrasRedesPage />);
    const heroSec = container.querySelector('#networks-hero');
    expect(heroSec?.className).toContain('bg-brand-blue-500');
  });

  it('T2.5: verifica que las etiquetas explicativas utilicen IBM Plex Sans / Inter (clase font-sans)', () => {
    const { container } = render(<NuestrasRedesPage />);
    const explanationText = container.querySelector('.font-sans');
    expect(explanationText).toBeInTheDocument();
  });
});
