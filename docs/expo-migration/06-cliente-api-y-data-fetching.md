# 06 - Cliente API y Data Fetching

Este documento define la arquitectura de red y peticiones HTTP para la aplicación móvil nativa (Expo), utilizando la habilidad `expo-data-fetching`. Establece los contratos de TypeScript, el diseño del cliente HTTP base y la estrategia de caché, reintentos y manejo de estados offline.

---

## 1. Contratos TypeScript (Endpoints Backend)

Los siguientes tipos definen las estructuras de entrada (Request) y salida (Response) para los endpoints expuestos por el backend Next.js.

### A. Cotizador (`/api/v1/quote`)
- **Método:** `POST`
- **Request Body:**
  ```ts
  export interface QuoteRequestDto {
    origenLat: number;
    origenLng: number;
    destinoLat: number;
    destinoLng: number;
    serviceType: 'EXPRESS' | 'LOW_COST';
  }
  ```
- **Response Body:**
  ```ts
  export interface QuoteResponseDto {
    success: boolean;
    price: number | 'consultar' | null;
    distanceKm: number | null;
    error: string | null;
  }
  ```

### B. Asistente Virtual / Bot de Gemini (`/api/assistant`)
- **Método:** `POST`
- **Request Body:**
  ```ts
  export interface AssistantRequestDto {
    message: string;
    quoteContext?: {
      distanceKm: number | null;
      price: number | 'consultar' | null;
      serviceType: string;
    };
  }
  ```
- **Response Body:**
  ```ts
  export interface AssistantResponseDto {
    success: boolean;
    reply: string;
    error?: string;
  }
  ```

### C. Direcciones y Rutas / Polyline (`/api/routes/directions`)
- **Método:** `GET`
- **Query Parameters:** `origin=lat,lng&destination=lat,lng`
- **Response Body:**
  ```ts
  export interface DirectionsResponseDto {
    status: 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST' | 'OVER_QUERY_LIMIT' | 'REQUEST_DENIED' | 'UNKNOWN_ERROR';
    routes: Array<{
      legs: Array<{
        distance: { value: number }; // en metros
        duration: { value: number }; // en segundos
      }>;
      overview_polyline: {
        points: string; // polyline codificada
      };
    }>;
    error?: string;
  }
  ```

---

## 2. Cliente HTTP Base (`src/services/api.ts`)

Respaldado por el `fetch` nativo de JavaScript/Expo, utilizando la variable de entorno `EXPO_PUBLIC_API_BASE_URL`.

```ts
// src/services/api.ts
import { QuoteRequestDto, QuoteResponseDto, AssistantRequestDto, AssistantResponseDto, DirectionsResponseDto } from './types';

const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!BASE_URL) {
  console.warn('EXPO_PUBLIC_API_BASE_URL no está definida. Las peticiones fallarán si no se configura.');
}

export class ApiError extends Error {
  constructor(message: string, public status: number, public code?: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new ApiError(
      errorBody.error || errorBody.message || `Error HTTP: ${response.status}`,
      response.status,
      errorBody.code
    );
  }
  return response.json();
}

export const apiClient = {
  async postQuote(data: QuoteRequestDto): Promise<QuoteResponseDto> {
    const response = await fetch(`${BASE_URL}/api/v1/quote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<QuoteResponseDto>(response);
  },

  async postAssistant(data: AssistantRequestDto): Promise<AssistantResponseDto> {
    const response = await fetch(`${BASE_URL}/api/assistant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return handleResponse<AssistantResponseDto>(response);
  },

  async getDirections(origin: string, destination: string): Promise<DirectionsResponseDto> {
    const response = await fetch(`${BASE_URL}/api/routes/directions?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return handleResponse<DirectionsResponseDto>(response);
  },
};
```

---

## 3. Estrategia de Caché, Reintentos y Estados Móviles

Para garantizar una experiencia fluida y robusta en dispositivos móviles (donde la conectividad puede ser inestable):

1. **Gestión de Estados (Las 4 fases por pantalla):**
   - **Loading:** Indicadores visuales de carga inicial (`ActivityIndicator` o skeletons).
   - **Content:** Visualización de datos correctos en pantalla.
   - **Empty:** Mensajes explicativos claros cuando una consulta no arroja resultados (ej. cotización fuera de rango o sin cobertura).
   - **Error / Offline:** Mensajes no bloqueantes que permiten reintentar manteniendo el borrador o la última información en caché.

2. **Reintentos y Backoff Exponencial:**
   - Las peticiones críticas (como el cotizador) implementarán un mecanismo de reintento automático (hasta 2 reintentos con backoff exponencial de 1s, 2s) ante fallos transitorios de red.

3. **Timeout de Peticiones:**
   - Uso de `AbortController` con un timeout estándar de **10 segundos** para evitar que las peticiones se queden colgadas ante pérdida de señal en la calle.

4. **Tolerancia a Desconexión (Offline-First con React Query):**
   - Integración con `@tanstack/react-query` configurada con persistencia local (`AsyncStorage` o `expo-secure-store`) para permitir el acceso offline a tarifas recientes, datos de perfil o historial de consultas guardadas.
   - Detección de conectividad mediante `@react-native-community/netinfo` para pausar mutaciones o notificar al usuario cuando el dispositivo no tiene internet.
