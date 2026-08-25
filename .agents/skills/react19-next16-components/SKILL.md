---
name: react19-next16-components
description: >-
  Use this skill when developing React 19 and Next.js 16 App Router components, structuring Server vs Client boundaries, writing strict TypeScript interfaces without any, handling forms with Server Actions, or embedding client-only widgets like Leaflet maps.
---

# React 19 & Next.js 16 Component Architecture Skill

Esta skill contiene las directrices arquitectónicas para crear componentes robustos, performantes y accesibles en **Next.js 16 (App Router)** y **React 19** con **TypeScript 5 strict**.

---

## ⚡ 1. Frontera Server vs Client Components

### Regla Principal: Server Components por Defecto
- Todo componente es **Server Component** a menos que requiera interactividad de cliente.
- NO colocar `'use client'` a menos que el componente utilice:
  - Hooks de React (`useState`, `useEffect`, `useRef`, `useCallback`, `useMemo`)
  - Event listeners del navegador (`onClick`, `onKeyDown`, `onChange`, `window`, `document`)
  - Animaciones de Framer Motion (`motion/react`)
  - Mapas interactivos (Leaflet)
  - `IntersectionObserver`, `localStorage` o `sessionStorage`

### Extracción de Componentes Interactivos
Mantener las páginas y layouts como Server Components e importar islas de cliente pequeñas:
```tsx
// src/app/servicios/express/page.tsx (Server Component)
import { ExpressHero } from '@/components/servicios/express/ExpressHero';
import { CotizadorExpressForm } from '@/components/cotizar/express/CotizadorExpressForm'; // Client Component

export default function ExpressPage() {
  return (
    <main className="min-h-screen bg-brand-white-50">
      <ExpressHero />
      <CotizadorExpressForm />
    </main>
  );
}
```

---

## 🔒 2. TypeScript Estricto (Sin `any`)

- ❌ **Prohibido** el uso de `any`.
- ✅ Usar `unknown` acompañado de type guards o Zod schemas.
- ✅ Utilizar `interface` para contratos de props públicas y `type` para uniones o tipos utilitarios.

```tsx
interface ServiceCardProps {
  title: string;
  description: string;
  priceFrom: number;
  badge?: string;
  onSelect?: (serviceId: string) => void;
  isPopular?: boolean;
}
```

---

## 🗺️ 3. Integración Segura de Mapas Leaflet (SSR-Safe)

Leaflet requiere el objeto `window`. Cargar siempre mediante `dynamic` con `ssr: false`:

```tsx
'use client';

import dynamic from 'next/dynamic';

const LeafletRouteMap = dynamic(
  () => import('@/components/ui/LeafletRouteMap'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-80 bg-brand-blue-50/50 rounded-2xl flex items-center justify-center border border-brand-blue-100">
        <span className="font-subheading uppercase text-brand-blue-700 tracking-wider">
          Cargando Mapa de Mar del Plata...
        </span>
      </div>
    ),
  }
);
```

---

## ♿ 4. Accesibilidad (a11y) y Formularios

1. **Touch Targets**: Mínimo 44×44px en botones, inputs y enlaces interactivos.
2. **Focus Rings**: Usar `focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2`.
3. **Labels & ARIA**: Todos los inputs deben tener `<label>` asociado o `aria-label`. Estados de error con `aria-invalid="true"` y `aria-describedby="error-id"`.

---

## 🧪 5. Validación y DoD
- Ejecutar `pnpm run lint` para validar tipos y reglas ESLint.
- Ejecutar `pnpm build` para verificar el empaquetado Turbopack/Webpack en Next.js 16.
