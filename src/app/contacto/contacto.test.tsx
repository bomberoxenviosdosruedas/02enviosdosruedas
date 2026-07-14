import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ContactoPage from './page';

describe('ContactoPage — Tier 1 & 2', () => {
  // ─── TIER 1: HAPPY PATHS (5 tests) ──────────────────────────────────────────

  it('T1.1: renderiza la sección principal de contacto', () => {
    const { container } = render(<ContactoPage />);
    expect(container.querySelector('main')).toBeInTheDocument();
  });

  it('T1.2: muestra la información institucional correcta (Friuli 1972, Mar del Plata)', () => {
    render(<ContactoPage />);
    expect(screen.getByText(/Friuli 1972/)).toBeInTheDocument();
    expect(screen.getAllByText(/Mar del Plata/)[0]).toBeInTheDocument();
  });

  it('T1.3: renderiza todos los campos obligatorios del formulario (*)', () => {
    render(<ContactoPage />);
    expect(screen.getByLabelText(/Nombre completo/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tu mensaje o consulta/)).toBeInTheDocument();
  });

  it('T1.4: permite ingresar datos en los campos de texto', () => {
    render(<ContactoPage />);
    const nameInput = screen.getByPlaceholderText('Ej: Juan Pérez') as HTMLInputElement;
    fireEvent.change(nameInput, { target: { value: 'Carlos Gómez' } });
    expect(nameInput.value).toBe('Carlos Gómez');
  });

  it('T1.5: completa la simulación de envío del formulario exitosamente', () => {
    vi.useFakeTimers();
    render(<ContactoPage />);
    
    const nameInput = screen.getByPlaceholderText('Ej: Juan Pérez');
    const emailInput = screen.getByPlaceholderText('Ej: juan.perez@email.com');
    const msgInput = screen.getByPlaceholderText('Escribí acá tu consulta. Decinos en qué podemos ayudarte...');
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/ });

    fireEvent.change(nameInput, { target: { value: 'Carlos Gómez' } });
    fireEvent.change(emailInput, { target: { value: 'carlos@email.com' } });
    fireEvent.change(msgInput, { target: { value: 'Hola, me gustaría cotizar un envío.' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Enviando...')).toBeInTheDocument();
    
    // Fast-forward simulated timer
    act(() => {
      vi.runAllTimers();
    });

    expect(screen.getByText('¡MENSAJE ENVIADO!')).toBeInTheDocument();
    vi.useRealTimers();
  });

  // ─── TIER 2: BOUNDARY & CORNER CASES (5 tests) ─────────────────────────────

  it('T2.1: muestra mensaje de error si se intenta enviar vacío', () => {
    const { container } = render(<ContactoPage />);
    const form = container.querySelector('form')!;
    
    // Submit empty form directly to bypass HTML5 validation in JSDOM click handler
    fireEvent.submit(form);

    expect(screen.getByText(/Por favor, completá todos los campos obligatorios/)).toBeInTheDocument();
  });

  it('T2.2: comprueba que se deshabiliten los inputs durante el estado de carga (submitting)', () => {
    render(<ContactoPage />);
    const nameInput = screen.getByPlaceholderText('Ej: Juan Pérez') as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText('Ej: juan.perez@email.com') as HTMLInputElement;
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/ });

    fireEvent.change(nameInput, { target: { value: 'Carlos Gómez' } });
    fireEvent.change(emailInput, { target: { value: 'carlos@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Escribí acá tu consulta. Decinos en qué podemos ayudarte...'), { target: { value: 'Consulta' } });
    
    fireEvent.click(submitButton);
    
    expect(nameInput.disabled).toBe(true);
    expect(emailInput.disabled).toBe(true);
  });

  it('T2.3: verifica la asimetría de columnas en pantallas grandes (5 para formulario y 7 para información)', () => {
    const { container } = render(<ContactoPage />);
    const colForm = container.querySelector('.lg\\:col-span-5');
    const colInfo = container.querySelector('.lg\\:col-span-7');
    expect(colForm).toBeInTheDocument();
    expect(colInfo).toBeInTheDocument();
  });

  it('T2.4: permite restablecer el estado al hacer clic en "Enviar otro mensaje" tras envío exitoso', () => {
    vi.useFakeTimers();
    render(<ContactoPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Ej: Juan Pérez'), { target: { value: 'Carlos Gómez' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: juan.perez@email.com'), { target: { value: 'carlos@email.com' } });
    fireEvent.change(screen.getByPlaceholderText('Escribí acá tu consulta. Decinos en qué podemos ayudarte...'), { target: { value: 'Consulta' } });
    fireEvent.click(screen.getByRole('button', { name: /Enviar Mensaje/ }));

    act(() => {
      vi.runAllTimers();
    });

    const resetButton = screen.getByRole('button', { name: /Enviar otro mensaje/ });
    fireEvent.click(resetButton);

    expect(screen.getByPlaceholderText('Ej: Juan Pérez')).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('T2.5: verifica que los campos del formulario utilicen la clase de fondo blanca plano (#FFFFFF)', () => {
    const { container } = render(<ContactoPage />);
    const inputs = container.querySelectorAll('input');
    inputs.forEach(input => {
      expect(input.className).toContain('bg-brand-white-50'); // or slate-50 depending on classes
    });
  });
});
