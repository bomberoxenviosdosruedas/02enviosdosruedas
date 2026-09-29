import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Page from './page';

/**
 * `/cotizar/lowcost` ya no es un cotizador: es la ficha de servicio LowCost. El
 * formulario simple vive en `/cotizar`, que devuelve las dos tarifas de una vez.
 * Lo que sí sobrevive acá —y por eso la página existe— es la planilla de lotes.
 */
describe('Ficha de servicio LowCost (/cotizar/lowcost)', () => {
  it('renderiza la página con su contenedor raíz', async () => {
    const { container } = render(await Page());
    expect(container.querySelector('#cotizar-lowcost-page')).toBeInTheDocument();
  });

  it('publica la tabla de tarifas 2026 del servicio LowCost', async () => {
    render(await Page());
    const tabla = screen.getByRole('table');
    expect(tabla).toHaveTextContent('0 – 3 km');
    expect(tabla).toHaveTextContent('$3.000');
    expect(tabla).toHaveTextContent('$4.000');
    expect(tabla).toHaveTextContent('$5.300');
    expect(tabla).toHaveTextContent('$7.000');
    expect(tabla).toHaveTextContent('$700 por km');
  });

  it('declara un Service JSON-LD con la oferta LowCost', async () => {
    const { container } = render(await Page());
    const jsonLd = JSON.parse(
      container.querySelector('script[type="application/ld+json"]')!.textContent!
    );
    expect(jsonLd['@type']).toBe('Service');
    expect(jsonLd.name).toBe('Envío LowCost en Moto');
    expect(jsonLd.url).toContain('/cotizar/lowcost');
    expect(jsonLd.offers.price).toBe('3000');
  });

  it('manda todo CTA al cotizador unificado, sin ofrecer un segundo formulario', async () => {
    render(await Page());
    const ctas = screen.getAllByRole('link').filter((a) => a.getAttribute('href') === '/cotizar');
    expect(ctas.length).toBeGreaterThan(0);
  });

  it('mantiene la planilla de lotes, que es exclusiva de este servicio', async () => {
    render(await Page());
    expect(document.getElementById('batch-grid')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Planilla de Despachos Masivos/ })).toBeInTheDocument();
  });

  it('cuenta sólo las filas con dirección cargada en el botón de WhatsApp', async () => {
    render(await Page());
    // Dos filas iniciales, ninguna completa: el contador sigue mostrando el total.
    const enviar = screen.getByRole('link', { name: /Cotizar Lote \(2 Envíos\) por WhatsApp/ });
    const hrefInicial = decodeURIComponent(enviar.getAttribute('href')!);

    const direcciones = screen.getAllByPlaceholderText('Dirección en MDQ *');
    fireEvent.change(direcciones[0], { target: { value: 'Colon 1200' } });
    fireEvent.change(direcciones[1], { target: { value: 'San Martin 2300' } });

    const enviarConDestinos = screen.getByRole('link', { name: /Cotizar Lote \(2 Envíos\) por WhatsApp/ });
    const hrefFinal = decodeURIComponent(enviarConDestinos.getAttribute('href')!);

    expect(hrefFinal).toContain('Colon 1200');
    expect(hrefFinal).toContain('San Martin 2300');
    expect(hrefFinal).not.toBe(hrefInicial);
    expect(hrefFinal).toContain('https://wa.me/542236602699');
  });
});
