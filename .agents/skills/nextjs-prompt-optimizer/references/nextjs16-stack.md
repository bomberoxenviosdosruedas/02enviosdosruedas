# Next.js 16 Stack Reference

Referencia rápida de valores típicos para el Prompt 1 según el stack detectado.

## Next.js 16 + App Router

```
Framework: Next.js 16 · App Router · React 19
TypeScript 5 · strict: true · noUncheckedIndexedAccess: true
```

### Patrones de rutas App Router

```
src/app/
├── layout.tsx          # Root Layout (Server Component)
├── page.tsx            # Home page
├── api/                # Route Handlers (Edge Runtime o Node.js)
│   └── [recurso]/
│       └── route.ts
├── [segmento]/
│   ├── layout.tsx      # Nested layout
│   └── page.tsx        # Page Server Component
└── (grupos)/           # Route Groups (sin segmento en URL)
    └── [pagina]/page.tsx
```

### Metadata API (Next.js 16)

```typescript
// Estático
export const metadata: Metadata = {
  title: 'Página',
  description: 'Descripción',
};

// Dinámico
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `${params.id}` };
}
```

### Server Actions (Formularios)

```typescript
// src/app/[ruta]/actions.ts
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

const schema = z.object({ campo: z.string().min(1) });

export async function miAction(formData: FormData) {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { error: parsed.error.flatten() };
  // lógica...
  revalidatePath('/ruta');
  return { success: true };
}
```

## Tailwind CSS v4 — @theme

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --color-brand-blue-700: #0636A5;
  --color-brand-blue-500: #0950F6;
  --color-brand-blue-50:  #E6EEFE;
  --color-brand-yellow-500: #FFEC01;
  --color-brand-white-50:   #FFFFFF;
  --color-brand-ink:        #00277C;

  --font-display:    "Anton", sans-serif;
  --font-subheading: "Bebas Neue", sans-serif;
  --font-sans:       "Outfit", "IBM Plex Sans", sans-serif;
  --font-mono:       "Geist Mono", monospace;
}
```

## Prisma ORM — Comandos Críticos

| Comando | Acción |
|---|---|
| `pnpm prisma db push` | Sync schema → DB (dev) |
| `pnpm prisma generate` | Regenerar cliente Prisma |
| `pnpm prisma studio` | GUI BD |
| `pnpm prisma migrate dev` | Migración con historial |

## Comandos pnpm Estándar

```bash
pnpm dev                    # Dev con Turbopack
pnpm dev --webpack          # Dev sin Turbopack (Win hot-reload fix)
pnpm build                  # Build producción
pnpm run lint               # ESLint
pnpm test                   # Vitest unitarios
pnpm test:e2e               # Playwright E2E
```

## Ignorados Estándar para IA

```
node_modules/
.next/
.turbo/
dist/
out/
*.lock
pnpm-lock.yaml
.env
.env.local
.env*.local
prisma/migrations/
*.pem
coverage/
.nyc_output/
storybook-static/
```
