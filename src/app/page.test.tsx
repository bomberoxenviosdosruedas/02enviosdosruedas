import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Home from './page';

// Mock next/dynamic components to render synchronously in Vitest
vi.mock('next/dynamic', () => ({
  default: (fn: () => Promise<unknown>) => {
    // Return a dummy placeholder or mock component
    const Component = (props: Record<string, unknown>) => {
      return <div data-testid="dynamic-component" {...props} />;
    };
    Component.displayName = 'DynamicComponent';
    return Component;
  },
}));

// Mock HeroProceduralBackground
vi.mock('@/components/ui/HeroProceduralBackground', () => ({
  default: () => <div data-testid="hero-procedural-bg" />,
}));

describe('Home Page', () => {
  it('renders the home page container and main above-the-fold sections', () => {
    render(<Home />);

    const container = document.getElementById('home-page-container');
    expect(container).toBeInTheDocument();

    // Check Hero section title text. El H1 se compone de varios spans
    // (texto + Knockout), así que se valida contra el textContent completo.
    // El slogan del dueño (2026-09-29) es "El motor de tu última milla"; ya no
    // promete un tiempo de entrega en el H1, ese dato vive en el chip de la barra.
    const heroTitle = document.getElementById('hero-animado')?.querySelector('h1');
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle).toHaveTextContent(/El motor de tu/i);
    expect(heroTitle).toHaveTextContent(/última milla/i);
    expect(heroTitle).toHaveTextContent(/solución a tus envíos/i);
    // El H1 no debe volver a colar la promesa retirada de "60-90 min".
    expect(heroTitle).not.toHaveTextContent(/60\s*[-–a]+\s*90/i);
    expect(screen.getAllByText(/E-Commerce/i).length).toBeGreaterThan(0);

    // Check Vision section heading
    expect(screen.getByText(/CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA/i)).toBeInTheDocument();

    // Check Services Overview section heading
    expect(screen.getAllByText(/NUESTROS SERVICIOS/i).length).toBeGreaterThan(0);
  });
});
