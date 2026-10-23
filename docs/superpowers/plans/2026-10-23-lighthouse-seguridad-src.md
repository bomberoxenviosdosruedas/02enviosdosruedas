# Lighthouse and Security Audit & Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Auditar y optimizar integralmente las categorías de Lighthouse (Performance, Accessibility, Best Practices, SEO) y robustecer la seguridad de la aplicación web en `src/` asegurando el cumplimiento normativo y la robustez contra vulnerabilidades web comunes.

**Architecture:** Mejora sistemática basada en pruebas sobre componentes de UI, rutas de API, configuración de Next.js y cabeceras de seguridad perimetral, incorporando pruebas con Vitest y validaciones automatizadas.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, Vitest, Zod, Node.js crypto.

**Spec:** Especificación técnica para Lighthouse y Seguridad Web (Light) en `src/`.

## Global Constraints

- El único gestor de paquetes autorizado es **pnpm@12.8.1** (prohibido npm, yarn, bun).
- **Zero-Secrets Policy:** Prohibido imprimir, inspeccionar o editar archivos `.env` reales.
- **Testing Rule:** Nunca ejecutar `pnpm test` a secas; usar siempre `pnpm test:ci` o agregar `--run`.
- **Idioma y Voseo:** Voseo rioplatense en textos dirigidos a humanos, sin guiones largos ni en-dash, y enlaces clickeables en formato markdown `file:///`.

## Review Focus

1. **Inyección de dependencias y scripts externos en CSP:** Riesgo de bloqueo de analytics o mapas de Google por directivas restrictivas de Content Security Policy.
2. **Validación robusta de entradas en API Routes de geolocalización y asistencia:** Desbordamiento de búfer o solicitudes maliciosas contra proxies externos.
3. **Manejo seguro de credenciales y cookies de sesión:** Prevención de ataques de fuerza bruta y manipulación de tokens de administración.
4. **Optimización de Core Web Vitals en componentes interactivos con Motion:** FCP e INP afectados por renderizado pesado o animaciones desoptimizadas.
5. **Estructura y metadatos SEO / JSON-LD:** Consistencia en microdatos estructurados para LocalBusiness y Organization.

---

### Task 1: Reforzamiento de Cabeceras de Seguridad y CSP en `next.config.ts`

**Files:**
- Modify: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/next.config.ts:112-177`
- Test: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/test/security-headers.test.ts`

**Interfaces:**
- Consumes: Configuración actual de `next.config.ts` para cabeceras HTTP.
- Produces: Cabeceras de seguridad actualizadas con directivas robustas de Content Security Policy (CSP), HSTS, X-Frame-Options y permisos de geolocalización restringidos.

- [ ] **Step 1: Escribir la prueba unitaria para verificar las cabeceras de seguridad**

```typescript
// src/test/security-headers.test.ts
import { describe, it, expect } from 'vitest';
import nextConfig from '../../next.config';

describe('next.config.ts Security Headers', () => {
  it('debe definir cabeceras de seguridad estrictas', async () => {
    expect(nextConfig.headers).toBeTypeOf('function');
    const headersFn = nextConfig.headers;
    if (!headersFn) throw new Error('headers function missing');
    const result = await headersFn();
    const globalHeaderRule = result.find((r) => r.source === '/(.*)');
    expect(globalHeaderRule).toBeDefined();

    const headersMap = new Map(globalHeaderRule?.headers.map((h) => [h.key, h.value]));
    expect(headersMap.get('X-Frame-Options')).toBe('SAMEORIGIN');
    expect(headersMap.get('X-Content-Type-Options')).toBe('nosniff');
    expect(headersMap.get('Content-Security-Policy')).toContain("default-src 'self'");
  });
});
```

- [ ] **Step 2: Ejecutar la prueba para verificar que falla o valida la configuración**

Run: `pnpm exec vitest related src/test/security-headers.test.ts --run`
Expected: PASS o FAIL dependiendo del estado inicial.

- [ ] **Step 3: Refinar CSP y cabeceras en `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/next.config.ts`**

Ajustar las directivas de `cspHeader` para asegurar compatibilidad total con Google Tag Manager, Ahrefs Analytics y Google Maps API sin comprometer la seguridad.

- [ ] **Step 4: Ejecutar la prueba unitaria para verificar éxito**

Run: `pnpm exec vitest related src/test/security-headers.test.ts --run`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add next.config.ts src/test/security-headers.test.ts
git commit -m "security: strengthen security headers and CSP in next.config.ts"
```

---

### Task 2: Validación y Protección Perimetral en API Routes (`src/app/api/`)

**Files:**
- Modify: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/api/places/autocomplete/route.ts`
- Modify: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/api/routes/directions/route.ts`
- Modify: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/api/assistant/route.ts`
- Test: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/test/api-security.test.ts`

**Interfaces:**
- Consumes: Endpoints de API en `src/app/api/`.
- Produces: Validación robusta de `sec-fetch-site`, longitud de parámetros y manejo de errores normalizado.

- [ ] **Step 1: Escribir la prueba unitaria para validar protección perimetral de API Routes**

```typescript
// src/test/api-security.test.ts
import { describe, it, expect } from 'vitest';
import { GET as autocompleteGET } from '../app/api/places/autocomplete/route';
import { NextRequest } from 'next/server';

describe('API Perimetral Security', () => {
  it('debe rechazar solicitudes cross-site en autocomplete', async () => {
    const req = new NextRequest('http://localhost:3000/api/places/autocomplete?input=Mar+del+Plata', {
      headers: {
        'sec-fetch-site': 'cross-site',
      },
    });
    const res = await autocompleteGET(req);
    expect(res.status).toBe(403);
    const data = await res.json();
    expect(data.error).toBeDefined();
  });
});
```

- [ ] **Step 2: Ejecutar la prueba para verificar fallo inicial**

Run: `pnpm exec vitest related src/test/api-security.test.ts --run`
Expected: PASS (si ya valida) o FAIL.

- [ ] **Step 3: Asegurar validación perimetral estricta en todas las rutas de API**

Verificar en `autocomplete`, `directions` y `assistant` el bloqueo estricto cuando `sec-fetch-site === 'cross-site'`.

- [ ] **Step 4: Ejecutar pruebas unitarias de API**

Run: `pnpm exec vitest related src/test/api-security.test.ts --run`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/api/places/autocomplete/route.ts src/app/api/routes/directions/route.ts src/app/api/assistant/route.ts src/test/api-security.test.ts
git commit -m "security: strengthen API routes perimeter checks and validation"
```

---

### Task 3: Optimización de Accesibilidad y Core Web Vitals en `src/app/layout.tsx` y Componentes

**Files:**
- Modify: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/layout.tsx`
- Test: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/test/layout.test.tsx`

**Interfaces:**
- Consumes: Configuración raíz de Next.js (`RootLayout`).
- Produces: Etiquetas de accesibilidad mejoradas, preconnect optimizado y soporte robusto para `reducedMotion`.

- [ ] **Step 1: Escribir la prueba de renderizado y metadatos del Layout raíz**

```typescript
// src/test/layout.test.tsx
import { describe, it, expect } from 'vitest';
import RootLayout, { metadata, viewport } from '../app/layout';

describe('RootLayout and Metadata', () => {
  it('debe tener metadatos SEO configurados correctamente', () => {
    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
    expect(viewport.themeColor).toBe('#0950F6');
  });
});
```

- [ ] **Step 2: Ejecutar la prueba para verificar estado**

Run: `pnpm exec vitest related src/test/layout.test.tsx --run`
Expected: PASS

- [ ] **Step 3: Optimizar `src/app/layout.tsx` con atributos de accesibilidad y precarga óptima**

Asegurar atributos `lang="es"`, `suppressHydrationWarning`, y directivas óptimas de precarga para fuentes y scripts externos.

- [ ] **Step 4: Ejecutar pruebas y verificación de tipo**

Run: `pnpm typecheck && pnpm test:ci`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/test/layout.test.tsx
git commit -m "perf: optimize layout accessibility, preconnects, and core web vitals readiness"
```

---

### Task 4: Suite de Pruebas de Regresión y Validación General

**Files:**
- Create: `file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/test/lighthouse-security-audit.test.ts`

**Interfaces:**
- Consumes: Módulos de autenticación, prompts y utilidades de precios.
- Produces: Suite completa de pruebas de regresión para asegurar que la seguridad y rendimiento cumplen con los estándares Lighthouse y Light security.

- [ ] **Step 1: Crear la prueba de integración de seguridad y autenticación**

```typescript
// src/test/lighthouse-security-audit.test.ts
import { describe, it, expect } from 'vitest';
import { isValidBasicAuth, isValidAdminSessionCookie } from '../lib/auth';

describe('Auditoría de Seguridad y Autenticación', () => {
  it('debe rechazar credenciales básicas inválidas', () => {
    expect(isValidBasicAuth('Basic invalid')).toBe(false);
    expect(isValidBasicAuth(null)).toBe(false);
  });

  it('debe rechazar cookies de sesión administrativas inválidas', () => {
    expect(isValidAdminSessionCookie('token-falso')).toBe(false);
    expect(isValidAdminSessionCookie(null)).toBe(false);
  });
});
```

- [ ] **Step 2: Ejecutar la suite de pruebas completa en modo CI**

Run: `pnpm test:ci`
Expected: PASS en todas las pruebas de la suite.

- [ ] **Step 3: Ejecutar verificación estricta de TypeScript**

Run: `pnpm typecheck`
Expected: PASS sin errores.

- [ ] **Step 4: Commit final de la tarea**

```bash
git add src/test/lighthouse-security-audit.test.ts
git commit -m "test: add comprehensive lighthouse and security regression test suite"
```
