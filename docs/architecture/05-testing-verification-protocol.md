# 05 — Protocolo de Verificación y Testing (Verification & QA Protocol)

## 1. Niveles de Verificación Incremental (N0 a N3)

Para garantizar la estabilidad del proyecto sin incurrir en ejecuciones de pruebas redundantes, el proyecto utiliza una escala de verificación por niveles según el alcance de las modificaciones realizadas:

| Nivel | Tipos de Archivos Modificados | Comandos de Verificación Requeridos |
|---|---|---|
| **N0** | Documentación Markdown (`docs/`), comentarios de código, assets gráficos. | Ninguno. |
| **N1** | Modificaciones cosméticas de `className`, textos en JSX, cambio de íconos. | `pnpm exec eslint <archivos_modificados>` |
| **N2** | Props de componentes, tipos TypeScript, hooks, estado local, `src/components/**`, `src/hooks/**`. | `pnpm typecheck`<br>`pnpm exec eslint <archivos_modificados>`<br>`pnpm exec vitest related <archivos_modificados> --run` |
| **N3** | Motor de precios (`pricing.ts`, `promises.ts`), Server Actions (`src/actions/**`), APIs (`src/app/api/**`), Prisma schema (`prisma/**`), `layout.tsx`, `globals.css`, `next.config.ts`, `package.json`, cambios masivos (>10 archivos). | `pnpm typecheck`<br>`pnpm exec vitest --run`<br>`pnpm run lint`<br>`pnpm build` |

---

## 2. Suite de Pruebas con Vitest + JSDOM

El proyecto cuenta con una suite completa de pruebas unitarias e integración ejecutadas sobre Vitest con el entorno JSDOM:

- **Ejecución total en CI / CLI**: `pnpm exec vitest --run`
- **Verificación de Tipos TypeScript**: `pnpm typecheck` (`tsc --noEmit`)

### 2.1. Cobertura de Pruebas Clave
1. `src/lib/pricing.test.ts`: Pruebas del motor de precios por rangos de distancia, cálculo de excedente `Math.ceil`, adicionales y perimetrales.
2. `src/lib/promises.test.ts`: Validación de recargos de peso (5 kg umbral único) y precios de servicios fijos.
3. `src/lib/copy-guard.test.ts`: Pruebas de guardrail que bloquean la publicación de textos desautorizados (e.g. duraciones en minutos, Factura A, etc.).
4. `src/actions/quote.test.ts`: Pruebas de resiliencia de la Server Action de cotización ante fallos de BD o API Keys de Google.
5. `src/app/cotizar/cotizar.test.tsx`: Pruebas de integración del formulario cotizador unificado y la interacción con los servicios.
6. `src/app/contacto/contacto.test.tsx`: Validación de entradas de formulario y renderizado de base de operaciones.

---

## 3. Consideraciones de Entorno en Windows

- Para ejecutar builds en entornos PowerShell de Windows se utiliza:
  `powershell -ExecutionPolicy Bypass -Command "pnpm build"`
- En caso de problemas de hot-reload durante el desarrollo local, utilizar `pnpm dev --webpack`.
