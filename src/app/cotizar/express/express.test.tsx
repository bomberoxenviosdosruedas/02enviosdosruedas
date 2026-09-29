import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from './page';

/**
 * `/cotizar/express` ya no es un cotizador: es la ficha de servicio Express. El
 * formulario único vive en `/cotizar`, que devuelve las dos tarifas de una vez.
 * Estos tests cubren lo que la página sigue promisando: tarifas indexables,
 * Service JSON-LD y un único camino hacia el cotizador.
 */
describe('Ficha de servicio Express (/cotizar/express)', () => {
  it('renderiza la página con su contenedor raíz', async () => {
    const { container } = render(await Page());
    expect(container.querySelector('#cotizar-express-page')).toBeInTheDocument();
  });

  it('publica la tabla de tarifas 2026 del servicio Express', async () => {
    render(await Page());
    const tabla = screen.getByRole('table');
    expect(tabla).toHaveTextContent('0 – 3 km');
    expect(tabla).toHaveTextContent('$3.700');
    expect(tabla).toHaveTextContent('$4.600');
    expect(tabla).toHaveTextContent('$6.100');
    expect(tabla).toHaveTextContent('$8.200');
    expect(tabla).toHaveTextContent('$1.000 por km');
  });

  it('declara un Service JSON-LD con la oferta Express y su propio canonical implícito', async () => {
    const { container } = render(await Page());
    const jsonLd = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    );
    expect(jsonLd['@type']).toBe('Service');
    expect(jsonLd.name).toBe('Envío Express en Moto');
    expect(jsonLd.url).toContain('/cotizar/express');
    expect(jsonLd.offers.price).toBe('3700');
  });

  it('manda todo CTA al cotizador unificado, sin ofrecer un segundo formulario', async () => {
    render(await Page());
    const ctas = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '/cotizar');
    expect(ctas.length).toBeGreaterThan(0);
    // Un solo destino posible: no hay CTA a otra ruta de cotización.
    expect(
      screen.queryByRole('link', { name: /Calcular Ruta y Tarifa Express/ })
    ).not.toBeInTheDocument();
  });

  it('conserva las pautas operativas del servicio', async () => {
    render(await Page());
    // El tope que va en copy es el estándar sin recargo (5 kg), no el techo absoluto.
    expect(document.getElementById('cotizador-express-details')).toHaveTextContent('5 kg');
    expect(document.getElementById('cotizador-express-details')).toHaveTextContent('08:00 a 20:00 hs');
  });
});
