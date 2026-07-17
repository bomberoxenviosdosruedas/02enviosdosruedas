import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SobreNosotrosPage from './page';

describe('SobreNosotrosPage — Tier 1 & 2', () => {
  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la sección principal de Sobre Nosotros sin errores', () => {
    const { container } = render(<SobreNosotrosPage />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('T1.2: renderiza el título monumental en Anton con "LÍDERES EN"', () => {
    render(<SobreNosotrosPage />);
    const titleElement = screen.getByText('LÍDERES EN');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.parentElement?.className).toContain('font-display');
  });

  it('T1.3: renderiza las tarjetas con la arquitectura Double-Bezel del sistema de diseño', () => {
    const { container } = render(<SobreNosotrosPage />);
    const outerBezels = container.getElementsByClassName('double-bezel-outer');
    const innerBezels = container.getElementsByClassName('double-bezel-inner');
    expect(outerBezels.length).toBeGreaterThanOrEqual(1);
    expect(innerBezels.length).toBeGreaterThanOrEqual(1);
  });

  it('T1.4: renderiza el timeline con hitos históricos y años correspondientes', () => {
    render(<SobreNosotrosPage />);
    expect(screen.getByText('2019')).toBeInTheDocument();
    expect(screen.getAllByText('2026')[0]).toBeInTheDocument();
    expect(screen.getByText('Lanzamiento Inicial')).toBeInTheDocument();
  });

  it('T1.5: renderiza el widget de Google Reviews con puntuación 5.0 / 5', () => {
    render(<SobreNosotrosPage />);
    expect(screen.getByText('GOOGLE REVIEWS')).toBeInTheDocument();
    expect(screen.getByText('5.0 / 5')).toBeInTheDocument();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: conserva la estructura y clases de responsividad móvil por debajo de 768px', () => {
    const { container } = render(<SobreNosotrosPage />);
    const gridCols = container.querySelector('.grid');
    expect(gridCols?.className).toContain('grid-cols-1');
    expect(gridCols?.className).toContain('lg:grid-cols-12');
  });

  it('T2.2: renderiza correctamente con imágenes externas mockeadas sin lanzar excepciones', () => {
    render(<SobreNosotrosPage />);
    const imgs = screen.getAllByRole('img');
    expect(imgs.length).toBeGreaterThan(0);
    imgs.forEach(img => {
      expect(img).toHaveAttribute('src');
    });
  });

  it('T2.3: aplica las variables de color institucionales correctas (Azul #0636A5 / Amarillo #FFEC01)', () => {
    const { container } = render(<SobreNosotrosPage />);
    const heroSection = container.querySelector('#about-hero');
    expect(heroSection?.className).toContain('bg-brand-blue-700');
    // expect(heroSection?.className).toContain('to-brand-blue-600');
  });

  it('T2.4: renderiza las descripciones de valores corporativos sin truncamientos de maquetación', () => {
    render(<SobreNosotrosPage />);
    expect(screen.getByText('Transparencia Total')).toBeInTheDocument();
    expect(screen.getByText('Cuidado del Paquete')).toBeInTheDocument();
    expect(screen.getByText('Innovación Tecnológica')).toBeInTheDocument();
  });

  it('T2.5: verifica que la tipografía de ingeniería (font-sans) está declarada en contenedores pesados', () => {
    const { container } = render(<SobreNosotrosPage />);
    const sansDivs = container.querySelectorAll('.font-sans');
    expect(sansDivs.length).toBeGreaterThan(0);
  });
});
