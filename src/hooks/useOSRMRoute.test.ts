import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useOSRMRoute } from './useOSRMRoute';

// ─── Helpers ───────────────────────────────────────────────────────────────────

const ORIGIN = { lat: -38.0, lng: -57.55 }; // Friuli, MDQ
const DEST   = { lat: -38.01, lng: -57.56 }; // Destino cercano

const mockSuccessResponse = {
  routes: [
    {
      distance: 3200,  // 3.2 km
      duration: 480,   // 8 minutos
      geometry: {
        coordinates: [
          [-57.55, -38.0],
          [-57.555, -38.005],
          [-57.56, -38.01],
        ],
      },
    },
  ],
};

// ─── Tests ─────────────────────────────────────────────────────────────────────

describe('useOSRMRoute', () => {
  beforeEach(() => {
    vi.spyOn(globalThis, 'fetch');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('estado inicial: sin resultado, sin error, sin carga', () => {
    const { result } = renderHook(() => useOSRMRoute());
    expect(result.current.result).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });

  it('devuelve distancia, duración y coordenadas cuando OSRM responde OK', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify(mockSuccessResponse), { status: 200 })
    );

    const { result } = renderHook(() => useOSRMRoute());

    let routeResult;
    await act(async () => {
      routeResult = await result.current.fetchRoute(ORIGIN, DEST);
    });

    expect(routeResult).not.toBeNull();
    expect(routeResult?.distanceKm).toBe(3.2);
    expect(routeResult?.durationMin).toBe(8);
    expect(routeResult?.routeCoords).toHaveLength(3);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('devuelve error genérico cuando OSRM responde con status no-OK (ej: 500)', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response('Internal Server Error', { status: 500 })
    );

    const { result } = renderHook(() => useOSRMRoute());

    let routeResult;
    await act(async () => {
      routeResult = await result.current.fetchRoute(ORIGIN, DEST);
    });

    expect(routeResult).toBeNull();
    expect(result.current.result).toBeNull();
    expect(result.current.error).toBe('Error al obtener la ruta de OSRM');
    expect(result.current.isLoading).toBe(false);
  });

  it('devuelve error descriptivo cuando OSRM responde con routes: []', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ routes: [] }), { status: 200 })
    );

    const { result } = renderHook(() => useOSRMRoute());

    let routeResult;
    await act(async () => {
      routeResult = await result.current.fetchRoute(ORIGIN, DEST);
    });

    expect(routeResult).toBeNull();
    expect(result.current.error).toBe('No se encontró una ruta vial entre los puntos indicados.');
  });

  it('devuelve mensaje genérico para errores de red inesperados', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new TypeError('Failed to fetch'));

    const { result } = renderHook(() => useOSRMRoute());

    let routeResult;
    await act(async () => {
      routeResult = await result.current.fetchRoute(ORIGIN, DEST);
    });

    expect(routeResult).toBeNull();
    expect(result.current.error).toBe(
      'No se pudo calcular la ruta. Por favor, intentá de nuevo más tarde.'
    );
  });

  it('isLoading transiciona de false → true → false durante la llamada', async () => {
    let resolveFetch!: (value: Response) => void;
    vi.mocked(fetch).mockReturnValueOnce(
      new Promise<Response>((resolve) => { resolveFetch = resolve; })
    );

    const { result } = renderHook(() => useOSRMRoute());

    act(() => { result.current.fetchRoute(ORIGIN, DEST); });
    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      resolveFetch(new Response(JSON.stringify(mockSuccessResponse), { status: 200 }));
    });
    expect(result.current.isLoading).toBe(false);
  });

  it('reset() limpia el resultado y el error', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify(mockSuccessResponse), { status: 200 })
    );

    const { result } = renderHook(() => useOSRMRoute());

    await act(async () => {
      await result.current.fetchRoute(ORIGIN, DEST);
    });

    expect(result.current.result).not.toBeNull();

    act(() => result.current.reset());

    expect(result.current.result).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.isLoading).toBe(false);
  });
});
