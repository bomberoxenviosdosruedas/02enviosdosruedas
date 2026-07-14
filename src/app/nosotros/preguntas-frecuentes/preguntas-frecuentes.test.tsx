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
    const categoryButton = buttons.find(btn => btn.textContent?.includes('Preguntas sobre Envíos'));
    expect(categoryButton).toBeInTheDocument();
    expect(categoryButton?.className).toContain('font-subheading');
  });

  it('T1.3: muestra las preguntas de la categoría por defecto (Envíos)', () => {
    render(<PreguntasFrecuentesPage />);
    expect(screen.getByText('¿Qué tipo de envíos realizan?')).toBeInTheDocument();
    expect(screen.getByText('¿Cuáles son las zonas de cobertura?')).toBeInTheDocument();
  });

  it('T1.4: expande una pregunta al hacer clic y muestra su respuesta correspondiente', async () => {
    render(<PreguntasFrecuentesPage />);
    const questionButton = screen.getByText('¿Qué tipo de envíos realizan?');
    fireEvent.click(questionButton);

    const answerText = await screen.findByText(/Realizamos todo tipo de mensajería y distribución local/);
    expect(answerText).toBeInTheDocument();
  });

  it('T1.5: cambia de categoría al hacer clic en el botón "Preguntas sobre Pagos"', () => {
    render(<PreguntasFrecuentesPage />);
    const pagosTabButton = screen.getByText('Preguntas sobre Pagos');
    fireEvent.click(pagosTabButton);

    expect(screen.getByText('¿Cómo se manejan los cobros de los servicios?')).toBeInTheDocument();
    expect(screen.queryByText('¿Qué tipo de envíos realizan?')).not.toBeInTheDocument();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: colapsa una pregunta si se vuelve a hacer clic en ella', async () => {
    render(<PreguntasFrecuentesPage />);
    const questionButton = screen.getByText('¿Qué tipo de envíos realizan?');
    
    // Expand
    fireEvent.click(questionButton);
    expect(await screen.findByText(/Realizamos todo tipo de mensajería y distribución local/)).toBeInTheDocument();

    // Collapse
    fireEvent.click(questionButton);
    expect(screen.queryByText(/Realizamos todo tipo de mensajería y distribución local/)).not.toBeInTheDocument();
  });

  it('T2.2: colapsa la respuesta abierta al cambiar entre categorías de preguntas', async () => {
    render(<PreguntasFrecuentesPage />);
    
    // Open envios question
    const questionButton = screen.getByText('¿Qué tipo de envíos realizan?');
    fireEvent.click(questionButton);
    expect(await screen.findByText(/Realizamos todo tipo de mensajería/)).toBeInTheDocument();

    // Switch category
    const pagosTabButton = screen.getByText('Preguntas sobre Pagos');
    fireEvent.click(pagosTabButton);

    // Envios answer should be destroyed
    expect(screen.queryByText(/Realizamos todo tipo de mensajería/)).not.toBeInTheDocument();
  });

  it('T2.3: renderiza las clases de bordes finos del divisor en color Azul 100 (#BACEFD)', () => {
    const { container } = render(<PreguntasFrecuentesPage />);
    const divider = container.querySelector('.divide-brand-blue-100\\/80');
    expect(divider).toBeInTheDocument();
  });

  it('T2.4: verifica que no existan más de una pregunta expandida simultáneamente bajo el control del acordeón', async () => {
    render(<PreguntasFrecuentesPage />);
    const question1 = screen.getByText('¿Qué tipo de envíos realizan?');
    const question2 = screen.getByText('¿Cuáles son las zonas de cobertura?');

    fireEvent.click(question1);
    expect(await screen.findByText(/Realizamos todo tipo de mensajería/)).toBeInTheDocument();

    fireEvent.click(question2);
    expect(await screen.findByText(/Ofrecemos cobertura total dentro del ejido urbano/)).toBeInTheDocument();
    
    // Question 1 answer should be closed
    expect(screen.queryByText(/Realizamos todo tipo de mensajería/)).not.toBeInTheDocument();
  });

  it('T2.5: verifica que las micro-indicaciones y chevrones de acordeón tengan las clases adecuadas', () => {
    const { container } = render(<PreguntasFrecuentesPage />);
    const chevrones = container.querySelectorAll('.rotate-180');
    // Initially no item is expanded, so no chevrones should have the rotate-180 class
    expect(chevrones.length).toBe(0);
  });
});
