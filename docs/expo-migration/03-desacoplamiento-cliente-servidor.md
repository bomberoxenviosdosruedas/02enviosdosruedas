# 03 — Desacoplamiento Cliente-Servidor y Backend API

## Propósito

Diseñar la arquitectura de comunicación entre el nuevo cliente móvil nativo (Expo) y el backend existente (Next.js 16), aislando el motor de base de datos (**Prisma 7**) y la lógica de negocio (`src/actions/quote.ts`, `src/actions/feedback.ts`) detrás de una API HTTP segura.

---

## 1. Estrategia de Desacoplamiento

El cliente móvil **nunca** debe tener acceso directo a la base de datos PostgreSQL ni a Prisma 7. Toda interacción se rige por el siguiente principio:

> **El backend Next.js existente actúa como el servidor de API (BFF / Backend for Frontend).**

### Cambios Requeridos
1. **Server Actions vs Endpoints HTTP:** Expo no soporta Server Actions nativamente como Next.js. Las acciones deben exponerse mediante endpoints REST estándar (`/api/v1/...`).
2. **Autenticación:** Las cookies de sesión web se reemplazan por tokens Bearer (JWT) o headers de autorización si se requiere autenticación de administrador (ej. para `/revisar` y `saveFeedback`).
3. **Validación Zod Compartida:** Los esquemas de validación existentes (`quoteSchema`) se mantienen en el backend y se duplican o comparten como tipos en el cliente para validación previa.

---

## 2. Endpoints de la API REST para Expo

### 1. Cotizador (`/api/v1/quote`)
- **Método:** `POST`
- **Descripción:** Reemplaza la Server Action `calculateQuoteAction`.
- **Payload (JSON):**
  ```json
  {
    "origenLat": -34.6037,
    "origenLng": -58.3816,
    "destinoLat": -34.6158,
    "destinoLng": -58.4333,
    "serviceType": "EXPRESS"
  }
  ```
- **Respuesta:**
  ```json
  {
    "success": true,
    "price": 4600,
    "distanceKm": 4.2,
    "error": null
  }
  ```

### 2. Asistente Virtual (`/api/assistant`)
- **Método:** `POST`
- **Descripción:** Ya existe como Route Handler. Se mantiene y se adapta para recibir peticiones desde la app móvil validando la cabecera `Sec-Fetch-Site` o un token de API de cliente.

### 3. Feedback / Moderación (`/api/v1/feedback`)
- **Método:** `GET` / `POST`
- **Descripción:** Reemplaza a `saveFeedback` y `getFeedbackList`. Requiere header de autenticación de admin (`Authorization: Bearer <token>`).

### 4. Direcciones y Rutas (`/api/routes/directions`)
- **Método:** `GET`
- **Descripción:** Endpoint ya existente que devuelve distancia, duración y polyline. Totalmente reutilizable por `react-native-maps`.

---

## 3. Plan de Migración de la Capa de Datos

1. **Fase 1 (Día 1):** Mantener el monolito Next.js desplegado en producción (ej. Vercel o EAS Hosting). Crear la ruta `/api/v1/*` que reenvíe o invoque directamente la misma lógica de negocio (`src/lib/pricing.ts`, `src/lib/promises.ts`).
2. **Fase 2 (Cliente):** Configurar en Expo el cliente HTTP (`fetch` con baseURL `https://enviosdosruedassetiembre.com/api/v1`).
3. **Fase 3 (Seguridad):** Implementar rate limiting en los Route Handlers para evitar abusos en el cálculo de tarifas y consultas a Google Maps.
