import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PreguntasFrecuentesPage from './page';

describe('PreguntasFrecuentesPage — Tier 1 & 2', () => {
  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la página completa de FAQ sin errores', () => {
    const { container } = render(<PreguntasFrecuentesPage />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('T1.2: renderiza los botones de selección de categoría con las fuentes correctas', () => {
    render(<PreguntasFrecuentesPage />);
    const buttons = screen.getAllByRole('button');
    const categoryButton = buttons.find(btn => btn.textContent?.includes('Servicios y Envíos'));
    expect(categoryButton).toBeInTheDocument();
    const heading = categoryButton?.querySelector('h3');
    expect(heading?.className).toContain('font-subheading');
  });

  it('T1.3: muestra las preguntas de la categoría por defecto (Envíos)', () => {
    render(<PreguntasFrecuentesPage />);
    expect(screen.getByText('¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?')).toBeInTheDocument();
    expect(screen.getByText('¿Cuáles son las zonas de cobertura?')).toBeInTheDocument();
  });

  it('T1.4: expande una pregunta al hacer clic y muestra su respuesta correspondiente', async () => {
    render(<PreguntasFrecuentesPage />);
    const questionButton = screen.getByText('¿Cuáles son las zonas de cobertura?');
    fireEvent.click(questionButton);

    const answerText = await screen.findByText(/Cubrimos de forma integral todo el ejido urbano/);
    expect(answerText).toBeInTheDocument();
  });

  it('T1.5: cambia de categoría al hacer clic en el botón "Precios, Pagos y Facturación"', () => {
    render(<PreguntasFrecuentesPage />);
    const pagosTabButton = screen.getByText('Precios, Pagos y Facturación');
    fireEvent.click(pagosTabButton);

    expect(screen.getByText('¿Cómo calculan el costo del envío?')).toBeInTheDocument();
    expect(screen.queryByText('¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?')).not.toBeInTheDocument();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: colapsa una pregunta si se vuelve a hacer clic en ella', async () => {
    render(<PreguntasFrecuentesPage />);
    const questionButton = screen.getByText('¿Qué tipo de servicios y soluciones logísticas realizan en Mar del Plata?');
    
    // First question is open by default
    expect(screen.getByText(/Ofrecemos mensajería urbana/)).toBeInTheDocument();

    // Collapse
    fireEvent.click(questionButton);
    expect(screen.queryByText(/Ofrecemos mensajería urbana/)).not.toBeInTheDocument();
  });

  it('T2.2: colapsa la respuesta abierta al cambiar entre categorías de preguntas', async () => {
    render(<PreguntasFrecuentesPage />);
    
    // Switch category
    const pagosTabButton = screen.getByText('Precios, Pagos y Facturación');
    fireEvent.click(pagosTabButton);

    // Envios answer should be destroyed
    expect(screen.queryByText(/Ofrecemos mensajería urbana/)).not.toBeInTheDocument();
  });

  it('T2.3: renderiza las clases de bordes finos del divisor en color Azul 100 (#BACEFD)', () => {
    const { container } = render(<PreguntasFrecuentesPage />);
    const divider = container.querySelector('.border-brand-blue-100');
    expect(divider).toBeInTheDocument();
  });

  it('T2.4: verifica que no existan más de una pregunta expandida simultáneamente bajo el control del acordeón', async () => {
    render(<PreguntasFrecuentesPage />);
    const question2 = screen.getByText('¿Cuáles son las zonas de cobertura?');

    // Default: question 1 is open
    expect(screen.getByText(/Ofrecemos mensajería urbana/)).toBeInTheDocument();

    // Click question 2
    fireEvent.click(question2);
    expect(await screen.findByText(/Cubrimos de forma integral todo el ejido urbano/)).toBeInTheDocument();
    
    // Question 1 answer should be closed
    expect(screen.queryByText(/Ofrecemos mensajería urbana/)).not.toBeInTheDocument();
  });

  it('T2.5: verifica que las micro-indicaciones y chevrones de acordeón tengan las clases adecuadas', () => {
    const { container } = render(<PreguntasFrecuentesPage />);
    const chevrones = container.querySelectorAll('.rotate-180');
    expect(chevrones.length).toBeGreaterThanOrEqual(1);
  });
});
