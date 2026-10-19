# CLAUDE.md - Guía de Contexto Operativo

Guía operativa para Claude Code y asistentes CLI que interactúan con la base de código de **Envíos DosRuedas**.

---

## 1. Referencia Rápida de Comandos Canónicos

El único gestor de paquetes autorizado en este repositorio es **pnpm** (`pnpm@12.8.1`). Queda prohibido el uso de `npm`, `yarn` o `bun`.

### Ciclo de Desarrollo y Construcción
```bash
pnpm dev             # Inicia el servidor de desarrollo local (next dev)
pnpm build           # Genera Prisma Client y compila para producción (prisma generate && next build)
pnpm start           # Inicia el servidor optimizado de producción (next start)
pnpm clean           # Limpia la caché y directorios temporales de Next.js
pnpm postinstall     # Genera los tipos de Prisma Client en generated/prisma
```

### Verificación Estática y Calidad de Código
```bash
pnpm typecheck       # Verificación estricta de TypeScript sin emitir archivos (tsc --noEmit)
pnpm lint            # Análisis estático completo con ESLint flat config (eslint .)
pnpm exec eslint <archivo> # Ejecuta ESLint sobre un archivo puntual
```

### Pruebas Unitarias y de Regresión (Vitest)
```bash
pnpm test:ci         # Ejecuta toda la suite de pruebas una sola vez sin modo interactivo
pnpm test:ui         # Abre el panel visual de Vitest en el navegador
pnpm eval:llm        # Ejecuta la evaluación de LLM (live o con --offline contra Golden Dataset)
pnpm exec vitest related <archivo> --run # Ejecuta únicamente las pruebas del archivo modificado
```
> [!IMPORTANT]
> **Regla de oro de testing:** Nunca ejecutes `pnpm test` a secas en entornos no interactivos o automatizados, ya que inicia Vitest en modo observador (watch mode) indefinido. Usá siempre `pnpm test:ci` o agregá `--run`.

### Scripts Operativos Auxiliares
```bash
pnpm pdf             # Genera capturas y reportes PDF vía script de Python local
pnpm pdf:prod        # Genera reportes PDF apuntando a producción
pnpm export:texts    # Extrae textos y copys de las vistas del sitio
```

---

## 2. Delimitación de Contexto y Gestión de Tokens (Token Hygiene)

Para preservar la precisión del modelo y evitar la degradación de contexto, respetá los filtros configurados en `.claudeignore`, `.aiexclude` y `.antigravityignore`:

1. **Lectura Quirúrgica:** Localizá con exactitud el archivo correspondiente dentro de `src/`. No intentes leer árboles de directorios completos ni ejecutes búsquedas globales masivas.
2. **Archivos Fuera de Límites:**
   - **Artefactos generados:** `.next/`, `generated/`, `dist/`, `build/`, `out/`, `tsconfig.tsbuildinfo`, sourcemaps (`*.map`).
   - **Dependencias y bloqueos:** `node_modules/`, `pnpm-lock.yaml`, `package-lock.json`, `yarn.lock`.
   - **Cachés de testing y linters:** `.turbo/`, `.eslintcache`, `.vitest/`, `coverage/`, `test-results/`.
   - **Tooling de agentes:** `.agent/`, `.agents/`, `.claude/`, `.hermes/`, `.impeccable/`, `.opencode/`, `.stitch/`, `.scratch/`.
   - **Multimedia y binarios:** `*.webp`, `*.png`, `*.svg`, `*.pdf`, `*.woff2` (evita consumo masivo de tokens de visión).
   - **Documentación histórica y scrapings:** `docs/paginas/`, `docs/imagenes/`, `docs/sitio_completo.html`.
3. **Aislamiento de Secretos (Zero-Secrets Policy):** Queda terminantemente prohibido imprimir, inspeccionar o editar archivos `.env` reales (`.env`, `.env.local`, `.env.production`). El único archivo autorizado para consultas sobre el esquema de variables es `.env.example`.

---

## 3. Arquitectura del Código en `src/`

```
src/
├── actions/         # Server Actions ('use server') validadas con Zod
├── app/             # Rutas, layouts y metadata de Next.js App Router
│   ├── (rutas)/     # Vistas públicas: cotizar, servicios, cobertura, contacto, nosotros, guías
│   ├── admin/       # Panel administrativo interno
│   ├── api/         # Route Handlers: assistant (asistente IA), places y routes (Google Maps)
│   ├── globals.css  # Tokens @theme Tailwind v4 y variables CSS corporativas
│   └── layout.tsx   # Layout raíz con configuración de fuentes y proveedores globales
├── assets/          # Recursos estáticos y fuentes locales
├── components/      # Componentes organizados por dominio y capa visual
│   ├── ui/          # Primitivas reutilizables (DoubleBezelCard, CTANestedPill, InputField)
│   ├── layout/      # Cabecera (OptimizedHeader), footer y carrusel de redes
│   └── [dominio]/   # Componentes específicos de vista (home, cotizar, servicios, etc.)
├── hooks/           # Custom hooks reutilizables (cotizador unificado, analítica)
├── lib/             # Lógica pura de negocio y clientes externos:
│   ├── pricing.ts   # Algoritmos tarifarios y tramos por distancia vial
│   ├── promises.ts  # Constantes oficiales de promesas de entrega, cortes horarios y límites
│   ├── assistant-prompt.ts # Constructor tipado del System Prompt unificado con promises.ts
│   ├── llm-eval.ts  # Framework de evaluación LLM, métricas deterministas y Golden Dataset
│   ├── prisma.ts    # Instancia centralizada de Prisma Client para PostgreSQL
│   ├── gemini.ts    # Cliente oficial de Google GenAI
│   ├── genkit.ts    # Configuración de Genkit
│   ├── whatsapp.ts  # Constructor de enlaces estructurados a WhatsApp con trazabilidad
│   └── utils.ts     # Utilidades de clases CSS con clsx y tailwind-merge
└── test/            # Configuración de entorno y extensiones para Vitest
```

---

## 4. Patrones de Código Canónicos (Blueprints)

### Patrón: Server Action con Validación Zod
```typescript
'use server';

import { z } from 'zod';

const InputSchema = z.object({
  campo: z.string().min(1, 'El campo es obligatorio'),
});

export type ActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export async function miAccion(formData: FormData): Promise<ActionResponse<{ id: string }>> {
  const parsed = InputSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? 'Datos inválidos' };
  }
  // Operación en base de datos o lógica de negocio
  return { success: true, data: { id: 'ok' } };
}
```

### Patrón: Client Component con Motion
```typescript
'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function TarjetaAnimada({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.3 }}
      className="card-token p-6 rounded-2xl bg-white border border-brand-blue-100"
    >
      {children}
    </motion.div>
  );
}
```

---

## 5. Guía de Resolución de Problemas (Runbook & Troubleshooting)

| Síntoma o Error | Causa Probable | Solución Inmediata |
| --- | --- | --- |
| `Cannot find module '@generated/prisma'` | Prisma Client no generado tras cambio de rama o dependencias | Ejecutar `pnpm postinstall` o `pnpm prisma generate` |
| `React does not recognize the 'whileInView' prop...` | Una prop de Motion se pasó a un elemento HTML nativo o mock incompleto | Asegurar que el tag sea `motion.<tag>` o revisar `src/test/setup.ts` |
| `EPERM: operation not permitted, mkdir` en Windows | Bloqueo transitorio del sistema de archivos | Reintentar el comando (suele resolverse en el 2do intento) |
| Fallo en `copy-guard.test.ts` | Se incluyó una frase prohibida en un texto ("en 2 horas", "Factura A", "sin sorpresas") | Ajustar el copy según las salvaguardas de `src/lib/promises.ts` |

---

## 6. Reglas Mandatorias de Interacción

- Mantené siempre el **voseo rioplatense** en textos dirigidos a humanos (comentarios de código, documentación técnica y mensajes).
- No utilices guiones largos ni en-dash en la redacción en español (empleá dos puntos, paréntesis o guion corto `-`).
- Utilizá enlaces clickeables en formato markdown con esquema `file:///` y barras inclinadas `/` para archivos y símbolos de código.
