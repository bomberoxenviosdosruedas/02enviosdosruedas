import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { NextRequest } from 'next/server';

// ─── Mock del cliente Gemini ────────────────────────────────────────────────────
const mockGenerateContent = vi.fn();
vi.mock('@/src/app/servicios/envios-express/lib/gemini', () => ({
  getGeminiClient: () => ({
    models: {
      generateContent: mockGenerateContent,
    },
  }),
}));

// Importar la ruta DESPUÉS del mock
const { POST } = await import('./route');

// ─── Helpers ────────────────────────────────────────────────────────────────────

function makeRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/assistant', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

// ─── Tests ─────────────────────────────────────────────────────────────────────

describe('POST /api/assistant', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('retorna 400 cuando falta el campo "message" / "prompt"', async () => {
    const req = makeRequest({ history: [] });
    const res = await POST(req);

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty('error');
  });

  it('retorna { text: string } cuando Gemini responde exitosamente', async () => {
    mockGenerateContent.mockResolvedValueOnce({ text: 'Hola, te puedo ayudar con tu envío.' });

    const req = makeRequest({ prompt: '¿Cómo funciona el servicio Express?', history: [] });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toHaveProperty('text');
    expect(typeof json.text).toBe('string');
    expect(json.text).toBe('Hola, te puedo ayudar con tu envío.');
  });

  it('retorna texto por defecto cuando Gemini responde con text undefined', async () => {
    mockGenerateContent.mockResolvedValueOnce({ text: undefined });

    const req = makeRequest({ prompt: 'consulta', history: [] });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.text).toContain('Disculpas');
  });

  it('retorna 500 con mensaje GENÉRICO — nunca expone error.message interno', async () => {
    mockGenerateContent.mockRejectedValueOnce(new Error('API key invalid — secret_token_xyz'));

    const req = makeRequest({ prompt: 'hola', history: [] });
    const res = await POST(req);

    expect(res.status).toBe(500);
    const json = await res.json();
    expect(json).toHaveProperty('error');
    // El mensaje de error interno NO debe aparecer en la respuesta al cliente
    expect(json.error).not.toContain('API key invalid');
    expect(json.error).not.toContain('secret_token_xyz');
    // Debe ser el mensaje genérico aprobado
    expect(json.error).toContain('no está disponible en este momento');
  });

  it('acepta history y quoteContext opcionales sin fallar', async () => {
    mockGenerateContent.mockResolvedValueOnce({ text: 'Respuesta con contexto' });

    const req = makeRequest({
      prompt: '¿cuánto cuesta el envío?',
      history: [{ sender: 'user', text: 'Hola' }, { sender: 'bot', text: '¡Hola!' }],
      quoteContext: { distancia: 5.2, precio: 5000 },
    });
    const res = await POST(req);

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.text).toBe('Respuesta con contexto');
  });
});
