# 03 — Server Actions e Integraciones (Server Actions & APIs)

## 1. Arquitectura de Server Actions (`src/actions/`)

Las Server Actions de Next.js actúan como el punto de entrada para todas las peticiones desde el cliente que requieren procesamiento seguro en el servidor.

### 1.1. Action: `calculateQuoteAction` (`src/actions/quote.ts`)
- **Propósito**: Recibe las coordenadas o nombres de origen y destino, calcula la distancia exacta vía Google Directions API y ejecuta la cotización para los servicios Express y LowCost.
- **Resiliencia & Caching (`safeCache`)**:
  Para evitar excepciones `RSC Context Missing` durante la ejecución de pruebas unitarias en entornos JSDOM/Vitest, la llamada a `React.cache()` está encapsulada dentro de un wrapper defensivo `safeCache()`.
- **Manejo de Errores Sanitizado**:
  Si la clave de API de Google Maps no es válida, la API no devuelve rutas o la base de datos se encuentra inaccesible, la acción no arroja un error técnico crudo al cliente, sino que devuelve una estructura de respuesta estandarizada (`{ success: false, error: string }`) o ejecuta el fallback de precios local.

```typescript
// Firma de la Server Action
export async function calculateQuoteAction(
  origin: string,
  destination: string,
  originCoords?: { lat: number; lng: number },
  destCoords?: { lat: number; lng: number }
): Promise<QuoteActionResult>
```

---

## 2. Handlers API y Proxy de Seguridad (`src/app/api/` y `src/proxy.ts`)

### 2.1. Google Places Proxy
Para evitar exponer la API Key de Google Maps en el navegador web del usuario:
- `POST /api/places/autocomplete`: Autocompletado de direcciones en Mar del Plata.
- `POST /api/places/details`: Obtención de coordenadas geográficas de la dirección seleccionada.
- `POST /api/routes/directions`: Obtención de la distancia en metros y la geometría de la ruta.

### 2.2. Assistant API Handler (`src/app/api/assistant/route.ts`)
Endpoint para consultas automatizadas e interacciones asistidas. Si ocurre una excepción interna, el handler atrapa el error y responde con un código HTTP `500` redactado con un mensaje genérico para evitar cualquier fuga de información o credenciales sensibles.

---

## 3. Integración con WhatsApp (`src/lib/whatsapp.ts`)

Una vez que el usuario obtiene su cotización en `/cotizar`, el sistema genera un enlace profundo hacia la API oficial de WhatsApp (`https://wa.me/549223...`) con un mensaje pre-formateado que incluye:
- Servicio seleccionado (Express o LowCost).
- Origen y destino confirmados.
- Distancia calculada en kilómetros.
- Precio total cotizado.
