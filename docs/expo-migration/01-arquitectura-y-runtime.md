# 01 — Arquitectura y Runtime: Next.js 16 → Expo (Hermes)

## Propósito

Documentar las diferencias estructurales entre el modelo Server Components/Node de **Next.js 16** con **Prisma 7** y el runtime móvil **Expo / React Native con motor Hermes** para el proyecto envíos-dosruedas. El objetivo es identificar incompatibilidades de ejecución y patrones de código que deben re-diseñarse al exponer la capa web como cliente nativo.

### Resumen de hallazgos

- Next.js 16 ejecuta *Server Components*, *Server Actions* (`src/actions/quote.ts`, `src/actions/feedback.ts`) y *Route Handlers* Node en el servidor; Expo React Native ejecuta únicamente componentes cliente en JavaScriptCore/Hermes, sin Node ni acceso a filesystem del servidor.
- Las variables de entorno usan `.env` en Next y deben trasladarse a `app.json` / `process.env.EXPO_PUBLIC_*` en Expo. Todo secreto del backend (Google Maps API, Gemini, DATABASE_URL) queda en el backend; el cliente móvil sólo expone `EXPO_PUBLIC_*`.
- APIs de navegador (`window`, `document`, Leaflet, Google Maps Embed) no existen en React Native. Mapas deben migrarse a `react-native-maps` con provider Google y a la capa HTTP propia (`/api/routes/directions`).
- Server Actions y Prisma 7 no pueden ejecutarse en el dispositivo; deben exponerse como API REST/HTTP (Next.js existente) consumida por Expo vía `fetch`.

---

## 1. Modelo de ejecución

### Next.js 16 (actual)

- **RSC / Node runtime**: páginas (`src/app/*/page.tsx`) pueden renderizar Server Components con acceso directo a Prisma (`src/lib/prisma.ts`), proceso Node, filesystem y `process.env`.
- **Server Actions**: `src/actions/quote.ts` y `src/actions/feedback.ts` ejecutan en Node con `'use server'`, validan con Zod y acceden a `prisma.priceRange.findMany`, a la caché de rutas y a Google Directions.
- **Route Handlers**: `src/app/api/assistant/route.ts`, `src/app/api/routes/directions/route.ts`, `src/app/api/places/*` validan cabeceras `Sec-Fetch-Site`, usan `fetch` Node y claves privadas de entorno.
- **Caché React**: `safeCache` usa `React.cache` para deduplicar dentro de la request; no existe en el cliente móvil.
- **Leaflet**: `src/components/ui/LeafletRouteMap.tsx`, `src/components/ui/DynamicRouteMap.tsx` dependen de DOM y `window`.

### Expo / Hermes (destino)

- **Single-thread UI + Hermes**: JS en Hermes/JSC, sin Node, sin `process` (solo polyfills) y sin acceso a servidor. Todo I/O de red se hace mediante `fetch` / `@expo/fetch`.
- **No Server Components**: el cliente solo conoce componentes cliente. La lógica que hoy está en Server Actions debe moverse a llamadas HTTP al backend existente.
- **Restricciones**:

  - No existe `window`/`document` → Leaflet y componentes que manipulan DOM no son portables.
  - No existe `React.cache` ni `next/cache`.
  - `localStorage`, `cookies` de servidor no funcionan como en web.
  - Los módulos de Node (`fs`, `path`, `pg`, etc.) son inviables en el dispositivo.

---

## 2. Variables de entorno y configuración

### Actual (Next)

```
.env / .env.local
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  GOOGLE_MAPS_API_KEY
  DATABASE_URL
  GEMINI_API_KEY
  NEXT_PUBLIC_* se expone al cliente
```

Se leen con `process.env` en servidor y cliente.

### Expo

- **app.json / app.config.{js,ts}** para metadatos del app y definición de esquemas.
- Variables públicas al bundle: `process.env.EXPO_PUBLIC_*`
- Variables secretas **no** deben empaquetarse en el binario; se consumen en backend Next.
- Recomendación para este repo:

  - Mantener todas las claves sensibles en Next.js existente.
  - Expo solo lleva `EXPO_PUBLIC_APP_BASE_URL` para apuntar al backend.
  - Nada de `DATABASE_URL`, `GEMINI_API_KEY`, `GOOGLE_MAPS_API_KEY` en cliente.

> Regla práctica: si la var se necesita para decisión de negocio, precios, acceso a DB o Maps server, NO viaja a Expo. Solo URLs base y feature flags públicas.

---

## 3. APIs específicas de navegador y mapeos

| Web (Next) | En React Native / Expo | Comentario |
|---|---|---|
| `window`, `document` | inexistentes | reemplazar por APIs RN |
| Leaflet `L.map` | `react-native-maps` + Google Maps Provider | polylines vía `MapView.Polyline` con datos del backend |
| `next/link` | `expo-router` `Link` | navegación basada en archivos |
| `next/image` | `@expo/image` / `expo-image` | carga de imágenes con caché nativo |
| `window.fetch` con credenciales de cookies | `fetch` con Authorization header / token JWT | autenticación a API |
| `localStorage` | `expo-secure-store` / `AsyncStorage` | datos locales |
| `navigator.geolocation` | `expo-location` | pedir permisos nativos |
| `iframe`, `shadow DOM` | no soportados | componentes DOM no portables |
| `@radix-ui/react-*` | no compatibles | UI debe usar `@expo/ui` o RN primitives |
| Tailwind CSS v4 `@theme` | no existe | ver doc 02 compatibilidad |

### Mapas

Los componentes actuales:

- `src/components/ui/LeafletRouteMap.tsx`
- `src/components/ui/DynamicRouteMap.tsx`

Dependen de Leaflet y de APIs de navegador. Para Expo:

- Reutilizar el Route Handler ya existente `src/app/api/routes/directions/route.ts` para obtener `polyline`, `distanceKm` y `durationMin`.
- En Expo, consumir ese endpoint con `fetch` y graficar con `react-native-maps`.
- `react-native-maps` con provider Google requiere configuración de API Key nativa (iOS/Android), no se ejecuta en web.

---

## 4. Server Actions y Prisma

- **Prisma 7** con `pg.Pool` y `@prisma/adapter-pg` no puede ejecutarse en el cliente.
- **Server Actions** (`src/actions/quote.ts`, `src/actions/feedback.ts`) deben convertirse en endpoints HTTP consumibles:

  - `POST /api/quote` que valida Zod y devuelve `price`, `distanceKm`.
  - `POST /api/feedback` protegido con `assertAdminAuth` (mover a middleware JWT).
- El cliente Expo invocará estos endpoints usando `appBaseUrl`.
- La caché de rutas `src/lib/route-cache.ts` sigue en backend.

---

## 5. Dependencias del runtime

- **Node-only**: `pg`, `@prisma/client`, `@prisma/adapter-pg`, `dotenv`, `genkit`, `@google/genai`.
- **Web-only**: `leaflet`, `@radix-ui/react-*`, `motion` (animaciones web), `next` internals.
- **Compatibles con limitaciones**: `zod`, `clsx`, `tailwind-merge`.

---

## 6. Recomendación de arquitectura

1. **Backend permanece Next.js 16** como API REST + render web. Exponer endpoints limpios:

   - `/api/v1/quote`
   - `/api/v1/feedback`
   - `/api/v1/assistant`
   - `/api/routes/directions`
   - `/api/places/autocomplete`
2. **Expo cliente** es un *view layer* fino, solo llamadas HTTP y UI nativa.
3. **Estrategia de migración**: día 1 DOM shell con `expo-dom` para mantener web UI, luego strangular pantallas críticas (cotizador, feedback) a nativo con `@expo/ui`.
4. **Entorno**: `EXPO_PUBLIC_API_BASE_URL=https://enviosdosruedas.com/api/v1` en `app.json` / env de EAS.

---

## Referencias en el código

- `src/actions/quote.ts` — Server Action con `safeCache`, Google Directions y Prisma.
- `src/actions/feedback.ts` — Server Action con `assertAdminAuth` y `revalidatePath`.
- `src/lib/prisma.ts` — pool Postgres, no portable.
- `src/lib/pricing.ts` — pura, portable a cliente tras recibir distancia del backend.
- `src/app/api/routes/directions/route.ts` — ya es un proxy seguro de Directions, apto para ser consumido por Expo.
- `package.json` — `next ^16.4.3`, `prisma ^7.10.1`, `leaflet ^1.9.4`, `react ^19.3.1`.

Documentado el 2026-10-31.
