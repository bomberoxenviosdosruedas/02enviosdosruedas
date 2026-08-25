---
name: nextjs-prompt-optimizer
description: >-
  Use this skill when the user provides a Next.js repository or stack and requests
  to optimize their AI development workflow, generate structured prompts, or create
  sequential configuration and execution prompts. Analyzes the repository and produces
  two structured prompts: (1) an Architecture Rules prompt for editor/AI configuration
  with exclusions and constraints, and (2) a High-Level Engineering Task prompt with
  acceptance criteria and technical restrictions.
---

# Next.js Prompt Optimizer Skill

Esta skill analiza repositorios **Next.js** y genera **dos prompts estructurados y optimizados** para maximizar la productividad con IA:

1. **Prompt de Configuración** — Reglas de arquitectura, exclusiones y configuración del entorno del editor/agente.
2. **Prompt de Ejecución** — Tareas de ingeniería de software de alto nivel con criterios de aceptación y restricciones técnicas.

---

## 📋 Protocolo de Análisis del Repositorio

### Paso 1 — Relevamiento Obligatorio

Antes de generar los prompts, leer **siempre** estos archivos en el orden indicado:

| Prioridad | Archivo | Qué extraer |
|---|---|---|
| 1 | `AGENTS.md` / `GEMINI.md` | Reglas existentes, stack, restricciones, comandos |
| 2 | `package.json` | Dependencias exactas, scripts, versiones |
| 3 | `tsconfig.json` | Flags strict, paths aliases, target/lib |
| 4 | `tailwind.config.ts` | Tokens, plugins, content globs |
| 5 | `next.config.ts` / `next.config.mjs` | Turbopack, redirects, env, experimental flags |
| 6 | `prisma/schema.prisma` | Modelos, relaciones, datasource |
| 7 | `src/app/` (estructura) | Rutas, layouts, grupos de rutas |
| 8 | `.eslintrc.*` / `eslint.config.*` | Reglas lint activas |
| 9 | `src/lib/` | Utilidades core, funciones de negocio |
| 10 | `DESIGN.md` / `PROJECT.md` | Sistema de diseño, roadmap, contratos |

### Paso 2 — Identificar el Stack Exacto

Detectar y documentar:
- **Framework**: Next.js version + App Router / Pages Router
- **React**: Versión (19, 18, etc.)
- **TypeScript**: Versión + `strict: true/false`
- **CSS**: Tailwind v4/v3 + `@theme` / config file
- **ORM**: Prisma / Drizzle / sin ORM
- **Auth**: NextAuth / Clerk / sin auth
- **DB**: PostgreSQL / SQLite / sin DB
- **Animaciones**: Framer Motion / GSAP / ninguna
- **Package Manager**: pnpm / npm / yarn (crítico para comandos)
- **Deploy Target**: Vercel / Docker / Node.js server

---

## 🔧 Prompt 1: Configuración del Entorno y Reglas de Arquitectura

### Template Base

```
# [NOMBRE_PROYECTO] — Reglas de Arquitectura y Configuración de IA

## Stack Confirmado
- Framework: Next.js [VERSION] · App Router · React [VERSION]
- TypeScript [VERSION] · strict: true
- CSS: Tailwind CSS [VERSION] · [@theme inline / config file]
- ORM: [PRISMA/DRIZZLE/NINGUNO]
- Package Manager: [PNPM/NPM] — único válido
- Runtime: Node.js [VERSION]

## 📁 Archivos Críticos (Fuentes de Verdad)
| Archivo | Propósito |
|---|---|
| [ARCHIVO_1] | [PROPÓSITO] |
| [ARCHIVO_2] | [PROPÓSITO] |

## 🚫 Exclusiones Absolutas (NUNCA modificar sin instrucción explícita)
- `[ARCHIVOS_CONFIGURACION_CRÍTICA]`
- `[ARCHIVOS_SCHEMA_DB]`
- `[ARCHIVOS_ENV]`

## 🚫 Prohibiciones de Código
- ❌ `any` en TypeScript → usar `unknown` + type guard
- ❌ `npm` / `yarn` → solo `pnpm`
- ❌ [RESTRICCIÓN_ESPECÍFICA_1]
- ❌ [RESTRICCIÓN_ESPECÍFICA_2]

## ✅ Patrones Obligatorios
- Server Components por defecto; `'use client'` solo para hooks/motion/browser APIs
- [PATRÓN_ESPECÍFICO_1]
- [PATRÓN_ESPECÍFICO_2]

## 🎨 Sistema de Diseño
- Paleta: [TOKEN_COLOR_PRIMARY] · [TOKEN_COLOR_ACCENT] · [TOKEN_COLOR_BASE]
- Tipografía: [FONT_DISPLAY] / [FONT_BODY] / [FONT_MONO]
- Componentes clave: [COMPONENTE_1], [COMPONENTE_2]
- ❌ Prohibido: colores hex inline, clases externas a los tokens

## 💾 Base de Datos / ORM
- Schema en: `[RUTA_SCHEMA]`
- Comando sync: `[COMANDO_DB_PUSH]`
- Modelos productivos: [MODELO_1], [MODELO_2]

## 🔄 Comandos del Proyecto
| Acción | Comando |
|---|---|
| Dev | `[DEV_COMMAND]` |
| Build | `[BUILD_COMMAND]` |
| Lint | `[LINT_COMMAND]` |
| Test | `[TEST_COMMAND]` |

## ⚙️ Configuración de Ignorados para IA
Excluir del análisis y generación de código:
- `node_modules/`, `.next/`, `dist/`, `out/`
- `*.lock`, `pnpm-lock.yaml`
- `.env*`, `*.pem`, `*secret*`
- `prisma/migrations/` (solo lectura)
- `[OTROS_IGNORADOS_ESPECÍFICOS]`

## 🗺️ Estructura de Código Relevante
src/
├── app/              # [DESCRIPCIÓN]
├── components/       # [DESCRIPCIÓN]
├── lib/              # [DESCRIPCIÓN]
├── hooks/            # [DESCRIPCIÓN]
└── types/            # [DESCRIPCIÓN]

## ✅ Definition of Done (Checklist Pre-Commit)
- [ ] `[BUILD_COMMAND]` sin errores TypeScript
- [ ] `[LINT_COMMAND]` = 0 warnings
- [ ] [CRITERIO_ESPECÍFICO_1]
- [ ] [CRITERIO_ESPECÍFICO_2]
- [ ] Responsive: 320px / 768px / 1024px / 1280px / 1920px
- [ ] A11y: focus-visible rings, heading structure, alt text
```

### Instrucciones de Relleno

Al generar el Prompt 1, reemplazar los placeholders con los valores reales del repositorio analizado.
Ser **específico y exhaustivo** — este prompt debe funcionar como contexto autosuficiente para cualquier agente IA.

---

## ⚙️ Prompt 2: Tarea de Ingeniería de Alto Nivel

### Template Base

```
# TASK: [NOMBRE_TAREA_EN_MAYÚSCULAS]

## Contexto
[DESCRIPCIÓN_CONCISA_DEL_PROBLEMA_O_FEATURE]

Repositorio: [NOMBRE_REPO] (Next.js [VERSION] · App Router · TypeScript strict · Tailwind v[VERSION])
Fecha operativa: [AÑO_VIGENTE]

## Objetivo
[OBJETIVO_CLARO_Y_MEASURABLE_1_PÁRRAFO]

## 📋 Criterios de Aceptación (AC)

### AC-1: [NOMBRE_CRITERIO]
- **Dado** [CONTEXTO_INICIAL]
- **Cuando** [ACCIÓN_DEL_USUARIO_O_SISTEMA]
- **Entonces** [RESULTADO_ESPERADO_VERIFICABLE]

### AC-2: [NOMBRE_CRITERIO]
- **Dado** [CONTEXTO]
- **Cuando** [ACCIÓN]
- **Entonces** [RESULTADO]

### AC-3: [NOMBRE_CRITERIO]
...

## 🏗️ Especificación Técnica

### Archivos a Crear
| Archivo | Descripción | Tipo (Server/Client) |
|---|---|---|
| `src/[RUTA]` | [DESCRIPCIÓN] | [Server/Client] |

### Archivos a Modificar
| Archivo | Cambio | Riesgo |
|---|---|---|
| `src/[RUTA]` | [CAMBIO] | [Bajo/Medio/Alto] |

### Interfaces TypeScript (Contratos)
```typescript
interface [NOMBRE_INTERFACE] {
  [PROP]: [TIPO];
}

type [NOMBRE_TYPE] = [UNIÓN_O_UTILIDAD];
```

### Lógica de Negocio
[DESCRIPCIÓN_DETALLADA_DE_LA_LÓGICA_CON_EJEMPLOS_DE_ENTRADA_SALIDA]

Ejemplo:
- Input: `[EJEMPLO_ENTRADA]`
- Output esperado: `[EJEMPLO_SALIDA]`

## 🚫 Restricciones Técnicas

### Prohibiciones Absolutas
- ❌ NO modificar `[ARCHIVO_CRÍTICO_1]` — fuente de verdad
- ❌ NO inventar valores para `[DOMINIO_CRÍTICO]` — consultar `[FUENTE_VERDAD]`
- ❌ NO usar `any` en TypeScript
- ❌ NO agregar `'use client'` sin justificación explícita
- ❌ [RESTRICCIÓN_ESPECÍFICA_DEL_DOMINIO]

### Restricciones de Rendimiento
- Bundle size: no agregar dependencias grandes sin justificación
- LCP target: < 2500ms en mobile 3G
- [RESTRICCIÓN_PERFORMANCE_ESPECÍFICA]

### Restricciones de Accesibilidad
- WCAG 2.1 AA mínimo
- Touch targets ≥ 44×44px
- [RESTRICCIÓN_A11Y_ESPECÍFICA]

## 🔄 Protocolo de Ejecución (Plan → Ejecuta → Verifica → Itera)

1. **PLAN**: Leer archivos críticos → Diseñar enfoque → Listar archivos afectados
2. **EJECUTA**: Cambios mínimos y atómicos siguiendo contratos de interfaces
3. **VERIFICA**: `[BUILD_COMMAND]` + `[LINT_COMMAND]` + tests relevantes
4. **ITERA**: Si falla → corregir → volver a VERIFICA

### Verificación Final
[LINT_COMMAND]
[BUILD_COMMAND]
[TEST_COMMAND_SI_APLICA]

## 📎 Referencias Obligatorias
- Precios/datos críticos: `[RUTA_FUENTE_VERDAD]`
- Sistema de diseño: `[DESIGN_MD_O_EQUIVALENTE]`
- Arquitectura: `[PROJECT_MD_O_EQUIVALENTE]`
- Errores conocidos: `[ERRORES_CONOCIDOS_MD_O_EQUIVALENTE]`
```

### Instrucciones de Relleno

Al generar el Prompt 2:
1. **Los AC deben ser verificables** — cada uno con Given/When/Then concreto y testeable.
2. **Las restricciones deben ser específicas** — no genéricas. Referenciar archivos reales del repo.
3. **Los tipos TypeScript deben ser los contratos reales** extraídos del análisis del repo.
4. **Los comandos deben ser exactos** según el package manager detectado.
5. **Las fuentes de verdad deben ser rutas relativas** dentro del repositorio.

---

## 🔀 Flujo de Generación Completo

1. Usuario proporciona repo o describe el stack
2. Relevamiento: leer archivos críticos en el orden del Paso 1
3. Detectar stack exacto (Paso 2)
4. Generar **Prompt 1** (Configuración) con todos los valores reales
5. Generar **Prompt 2** (Tarea) con AC Given/When/Then y restricciones específicas
6. Presentar ambos prompts en bloques de código copiables
7. Incluir tabla de placeholders pendientes que el usuario debe completar según su tarea

### Reglas de Presentación

- **Siempre** presentar Prompt 1 primero (contexto), luego Prompt 2 (tarea).
- Cada prompt dentro de un bloque de código copiable (` ```markdown ... ``` `).
- Incluir una **tabla de personalización** al final indicando qué placeholders quedan para completar.
- Los prompts deben ser **autosuficientes** — funcionar sin acceso al repositorio original.

---

## 📎 Referencias Adicionales

- [Referencia de Stack Next.js 16](./references/nextjs16-stack.md)
- [Patrones de Prompts de Ingeniería](./references/engineering-prompt-patterns.md)
