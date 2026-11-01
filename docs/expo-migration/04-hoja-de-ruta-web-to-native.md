# 04 - Hoja de Ruta: Migración Web a Nativo (Expo)

Este documento detalla el plan de migración de la aplicación web Next.js 16 a una aplicación nativa con Expo Router, basándose en los diagnósticos previos.

## 1. Matriz de Migración de Vistas (src/app/ → Expo Router app/)

| Ruta Web (Next.js)               | Ruta Nativa (Expo Router) | Componente Principal      | Estrategia de Migración                     | Notas Adicionales                                     |
|----------------------------------|---------------------------|---------------------------|---------------------------------------------|-------------------------------------------------------|
| `/`                              | `app/index.tsx`           | `HomePage` (o similar)    | `expo-dom` (temporal), luego nativo puro    | Reutilizar lógica de `page.tsx` y componentes compartidos. |
| `/cotizar`                       | `app/cotizar/index.tsx`   | `CotizadorUnificado`      | NATIVIZAR INMEDIATAMENTE                | Requiere integración `react-native-maps` y `fetch` a API. |
| `/servicios/[slug]`              | `app/servicios/[slug].tsx`| Componentes de Servicio | `expo-dom` (temporal), nativizar por demanda | Evaluar individualmente la complejidad de cada servicio. |
| `/contacto`                      | `app/contacto/index.tsx`  | `ContactForm`             | `expo-dom` (temporal), luego nativo puro    | Reemplazar lógica de envío de formularios.             |
| `/nosotros`                      | `app/nosotros/index.tsx`  | `AboutUsPage`             | `expo-dom` (temporal), luego nativo puro    | Migrar contenido estático y componentes de texto.      |
| `/nosotros/preguntas-frecuentes` | `app/nosotros/faq.tsx`    | `FaqHero` / `FaqCategories` | `expo-dom` (temporal)                   | Contenido estático mayormente.                         |
| `/nosotros/sobre-nosotros`       | `app/nosotros/about.tsx`  | `AboutHero` / `AboutValues` | `expo-dom` (temporal)                   | Contenido estático mayormente.                         |
| `/admin`                         | `app/admin/index.tsx`     | `AdminDashboard`          | `expo-dom` (temporal)                   | Requiere manejo de autenticación específico.           |
| `/admin/imagenes`              | `app/admin/images/index.tsx`| `AdminImagenesClient`     | `expo-dom` (temporal)                   | Integración con API de imágenes.                       |

**Clave de Estrategia:**
- **`expo-dom` (temporal):** Componente web renderizado dentro de Expo (usando la habilidad `expo-dom`). Permite mantener la funcionalidad mientras se nativiza.
- **NATIVIZAR INMEDIATAMENTE:** Componentes críticos que requieren interfaz nativa o alta interactividad.
- **NATIVIZAR POR DEMANDA:** Componentes que pueden ser `expo-dom` inicialmente y nativizarse más tarde según la prioridad.

## 2. Plan de Refactorización del Cotizador de Envíos

1.  **Reemplazo de `LeafletRouteMap.tsx`:**
    - Instalar `react-native-maps`.
    - Crear un nuevo componente `NativeRouteMap.tsx` que envuelva `react-native-maps`.
    - Consumir las coordenadas (origen/destino) y obtener el `polyline` y la distancia del nuevo endpoint `/api/v1/quote`.
    - Renderizar el mapa y la ruta usando el `polyline` decodificado.

2.  **Reemplazo de `calculateQuoteAction` (Server Action) por API Fetch:**
    - Exponer un nuevo endpoint `/api/v1/quote` en el backend Next.js.
    - Este endpoint consumirá los servicios externos (Google Directions, Prisma PriceRange) y devolverá el precio, distancia y polyline en formato JSON.
    - En el cliente Expo, reemplazar la llamada a la Server Action por una petición `fetch` a `/api/v1/quote`.
    - Manejar las respuestas (éxito, error, 'consultar') en el componente del cotizador.

## 3. Plan de Integración del Bot de Gemini

1.  **Exposición del Route Handler `/api/assistant`:**
    - Asegurar que el Route Handler existente (`src/app/api/assistant/route.ts`) esté correctamente configurado para ser consumido externamente (validación de cabeceras, etc.).

2.  **Conexión del Widget Móvil:**
    - Implementar la lógica de petición `fetch` en el componente del widget del asistente móvil (actualmente en `BotWidget`).
    - Enviar el contexto de la cotización activa (si existe) y el mensaje del usuario al endpoint `/api/assistant`.
    - Recibir y mostrar la respuesta del modelo Gemini en la interfaz del chat.

## 4. Cronograma por Fases (Sprints de Migración Estimados)

**Fase 1: Setup e Infraestructura de API Backend (Sprint 1-2)**
- Desacoplar y exponer los endpoints de API (`/api/v1/quote`, `/api/v1/feedback`, `/api/assistant`).
- Configurar `EXPO_PUBLIC_API_BASE_URL` en la app Expo.
- Implementar la lógica de llamadas `fetch` básica en el cliente.
- Configurar NativeWind v4 para Expo.

**Fase 2: Shell de App Móvil y Navegación con Expo Router (Sprint 3-4)**
- Crear la estructura básica de la app Expo (`app/`).
- Implementar la navegación principal usando `expo-router` (Tabs, Stack según necesidad).
- Renderizar las vistas como `expo-dom` temporalmente.
- Configurar `expo-font` para las tipografías.

**Fase 3: Reemplazo de Componentes Críticos (Cotizador + Bot) (Sprint 5-7)**
- Natizar el Cotizador: integrar `react-native-maps` y `fetch` a la API de cotización.
- Integrar el Bot de Gemini con la API `assistant`.
- Migrar componentes UI clave (ej. `BentoGrid` a `FlatList`).

**Fase 4: Estilos (NativeWind v4) y Pulido de UI (Sprint 8-10)
- Mapear y aplicar estilos con NativeWind v4 a todas las vistas nativizadas.
- Implementar animaciones nativas (`react-native-reanimated`) donde sea necesario.
- Revisar y pulir la experiencia de usuario (UX) específica de móvil.
- Realizar pruebas exhaustivas y corrección de errores.
