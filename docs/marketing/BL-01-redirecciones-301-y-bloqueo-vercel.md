# BL-01 — Redirecciones 301 y bloqueo del duplicado en Vercel

## 1. Objetivo y IDs que resuelve
Cerrar las dos fugas técnicas de SEO más urgentes: la URL vieja `/enviosflex` sigue indexada como 404 y compite con `/servicios/enviosflex`; el deployment de Vercel (`02enviosdosruedas.vercel.app`) es una copia indexable del sitio que compite con el dominio real. Resuelve: **D-3** (parte de rutas), **CAMP-04** (parte de redirecciones/Vercel).
Por qué importa: es el resultado mejor posicionado de DosRuedas para "envíos flex mar del plata" hoy — está roto. Cerrarlo es la victoria más rápida y de menor esfuerzo del backlog.

## 2. Alcance
**Entra:** redirección permanente de `/enviosflex` → `/servicios/enviosflex`; bloqueo o redirección del host de Vercel hacia el dominio real; verificación de que no queden otras rutas del README (`/servicios/express`, `/servicios/lowcost`, `/servicios/flex`, `/servicios/3pl`) sin su redirección si llegan a usarse como enlaces externos.
**Queda fuera:** el rename de `/servicios/plan-emprendedores` a `/servicios/deposito-fulfillment` (eso es BL-22, depende de contenido que todavía no existe). No tocar contenido de ninguna página, solo enrutamiento.

## 3. Archivos a modificar o crear
- `next.config.ts` — agregar bloque `redirects()` (no existe hoy, confirmado en la auditoría de F2-1).
- `middleware.ts` — si no existe, crearlo solo para el bloqueo por host de Vercel (`X-Robots-Tag: noindex` como refuerzo, o redirección 301 por header `host`). Si el proyecto no usa middleware en ningún otro lado, evaluar si conviene resolver el bloqueo de Vercel directamente en la configuración del proyecto en Vercel (Deployment Protection) en lugar de código — **decisión técnica a tomar en el paso 1 de PASOS (F4-2)**, no asumida acá.

## 4. Layout por breakpoint
No aplica — cambio de enrutamiento/configuración, sin interfaz nueva.

## 5. Tokens exactos
No aplica.

## 6. Estados
No aplica (no hay UI). Verificar sí el código de estado HTTP: 308 (redirect permanente de Next.js con `permanent: true` da 308, no 301 — aceptar 308 como equivalente correcto, es el comportamiento estándar de `next.config.ts`).

## 7. Contenido
No aplica — no hay copy nuevo en este ítem.

## 8. Accesibilidad
No aplica.

## 9. SEO
- `/enviosflex` → `/servicios/enviosflex` con `permanent: true` (301/308).
- Host de Vercel: idealmente 301 a `www.enviosdosruedas.com` conservando el path, o bloqueo total con `noindex` si la redirección por host no es viable en el plan de Vercel actual.
- Confirmar que `sitemap.ts` no lista `/enviosflex` en ningún lado.
- No afecta canonical tags existentes (verificar que las páginas de destino ya tengan su propio canonical correcto, no es parte de este ítem si ya está bien).

## 10. Datos y lógica
Configuración pura (`next.config.ts` / `middleware.ts`), sin componentes de servidor o cliente nuevos, sin Server Actions, sin validación de formularios, sin eventos de analítica.

## 11. Casos borde
- Confirmar que la redirección no genera un bucle (`/enviosflex` → `/servicios/enviosflex` → no debe volver a `/enviosflex`).
- Si alguien tiene guardado un enlace directo a `/enviosflex` con parámetros de query (ej. `?utm_source=...`), verificar que la redirección preserve los query params (comportamiento por defecto de Next.js, confirmar que no se lo esté deshabilitando).
- Si Vercel no permite bloquear por host sin plan pago, documentar la limitación y dejar al menos el header `noindex` como mitigación parcial.

## 12. Criterios de aceptación y pruebas
- `curl -I https://www.enviosdosruedas.com/enviosflex` devuelve 308 (o 301) con `Location` apuntando a `/servicios/enviosflex`.
- La URL de Vercel responde 301 al dominio real, o devuelve `X-Robots-Tag: noindex` en el header si el 301 por host no es viable.
- Prueba nueva (Playwright o test de configuración): request a `/enviosflex` resuelve al contenido de `/servicios/enviosflex` sin error 404.
- `pnpm build` sin errores nuevos relacionados a `next.config.ts`/`middleware.ts`.
