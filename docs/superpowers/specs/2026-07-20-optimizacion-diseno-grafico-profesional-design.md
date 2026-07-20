# Plan Maestro de Optimización de Diseño Gráfico Profesional
## Envíos DosRuedas — 2026-07-20

> **Especificación aprobada** tras brainstorming estructurado. Basada en auditoría de marca (REPORTE_BRAND_AUDIT.md), DESIGN.md v2.0, AGENTS.md, contexto.md y paleta_3_colores.md.

---

## 1. Resumen Ejecutivo

**Objetivo**: Elevar la calidad visual del proyecto a nivel profesional empresarial, eliminando patrones genéricos de IA, manteniendo estricta la **Ley de Tres Colores** (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF), y corrigiendo todos los hallazgos críticos/medios de la auditoría de marca 2026-07-20.

**Enfoque**: Tres fases secuenciales con gates de verificación estrictos (build + lint + visual + a11y + performance).

---

## 2. Arquitectura General — Tres Fases

| Fase | Nombre | Objetivo Principal | Gate de Salida (DoD) |
|------|--------|-------------------|---------------------|
| **1** | **Críticos Auditoría** | Paleta 3 colores pura, logo vectorial <50KB ≥120px, sin verdes hardcodeados | `pnpm build` ✅, `pnpm lint` ✅, 0 `green-*`/`slate-*`/`gray-*`/`zinc-*`, logo SVG válido |
| **2** | **Tokens Completos** | Spacing, Radius, Shadows, Motion, Mono, Gradients alineados a DESIGN.md §4-8 | Tokens en `@theme` validados, componentes signature usando tokens semánticos |
| **3** | **Elevación Profesional** | Anti-IA genérica: Bento 7/5, Float/Tilt Hero, Kinetic Stretch, Copy voseo+MDQ, Lighthouse ≥90 | Lighthouse ≥90, a11y AA, responsive 320-1920px, visual regression approved |

---

## 3. Fase 1 — Críticos Auditoría (Bloqueadores Rojos)

### 3.1 Limpieza Radical `globals.css` (@theme)

**Eliminar completamente (violación Ley de 3 Colores §0.2):**
```css
/* ELIMINAR — líneas 45-82 aprox */
--color-gray-*, --color-slate-*, --color-zinc-*
```

**Completar escalas Azul (no mapear a blue-700):**
```css
/* AGREGAR — valores reales DESIGN.md §2 */
--color-brand-blue-800: #052D8C;
--color-brand-blue-900: #04236B;
--color-brand-blue-950: #021440;
```

**Eliminar tokens fantasmas (no existen en paleta oficial):**
```css
/* ELIMINAR */
--color-brand-ink: #00277c;
--color-brand-navy;        /* alias de blue-700 */
--color-brand-dark: #001035;
```

### 3.2 Corrección `green-*` Hardcodeado → Tokens Semánticos

| Archivo | Línea | Actual (❌) | Corrección (✅) |
|---------|-------|-------------|-----------------|
| `HowItWorks.tsx` | stepper completed | `bg-green-500`, `text-green-500`, `shadow-green` | `bg-brand-yellow-500`, ring `brand-yellow-100` |
| `CtaSection.tsx` | WhatsApp CTA | `bg-green-500 hover:bg-green-400 border-green-400` | `bg-brand-yellow-500 hover:bg-brand-yellow-400`, icono SVG blanco |

> **Regla DESIGN.md §3.3-3.4**: Stepper completed **siempre** `brand-yellow-500`. WhatsApp CTA background **siempre** `brand-yellow-500` (WhatsApp green = solo icono externo).

### 3.3 Logotipo Maestro SVG

**Acciones:**
1. **Usar el archivo SVG optimizado provisto por el usuario** (ya adjuntado, más liviano que el actual `logo-master.svg` de 4MB) como nuevo `/public/logo-master.svg`. Verificar con SVGO que pase <50KB, aspect-ratio 1:0.45, safe-area 20%, sin raster embebido.
2. Verificar: aspect-ratio **1:0.45**, safe-area **20% perimetral**, variante reverso (blanco sobre azul #0636A5)
3. Reemplazar `LogoEnviosDosRuedas.webp` (raster) en:
   - `OptimizedHeader.tsx` (actual `w-10 h-10` = 40px → **≥120px ancho renderizado**)
   - `OptimizedFooter.tsx` (actual `w-11 h-11` = 44px → **≥120px ancho renderizado**)
4. Agregar wrapper clear-space: `padding: 0.25 × logo-height`

**Variantes aprobadas únicamente:**
1. Primaria: Azul #0636A5 sobre blanco
2. Reverso: Blanco sobre Azul #0636A5
3. Monocromo negro: solo fax/documentos legales

### 3.4 Gate de Verificación Fase 1

```bash
# Build Windows
powershell -ExecutionPolicy Bypass -Command "pnpm build"

# Lint
pnpm run lint

# Validación paleta pura (0 resultados esperados)
rg "green-|slate-|gray-|zinc-" src/

# Validación logo
ls -la public/logo-master.svg  # < 50KB
```

---

## 4. Fase 2 — Tokens Completos (Spacing/Radius/Shadows/Motion/Mono/Gradients)

### 4.1 Tokens a Implementar en `globals.css @theme`

#### Espaciado (DESIGN.md §4)
```css
/* Base 4px */
--space-1: 0.25rem;   /* 4px  */
--space-2: 0.5rem;    /* 8px  */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-7: 1.75rem;   /* 28px */
--space-8: 2rem;      /* 32px */
--space-9: 2.25rem;   /* 36px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-14: 3.5rem;   /* 56px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-28: 7rem;     /* 112px */
--space-32: 8rem;     /* 128px */
--space-36: 9rem;     /* 144px */

/* Semánticos */
--section-sm: var(--space-16);   /* 64px  */
--section-md: var(--space-24);   /* 96px  */
--section-lg: var(--space-32);   /* 128px */
--section-xl: var(--space-36);   /* 144px */
--container-max: 80rem;          /* 1280px */
--container-pad-mobile: 1rem;    /* 16px  */
--container-pad-tablet: 1.5rem;  /* 24px  */
--container-pad-desktop: 2rem;   /* 32px  */
--card-inner: 1.5rem;            /* 24px  */
--card-outer: 0.5rem;            /* 8px   */
--btn-h: 2.5rem;                 /* 40px  */
--btn-h-lg: 2.75rem;             /* 44px  */
--input-h: 2.75rem;              /* 44px  */
```

#### Border Radius (DESIGN.md §5) — **Corregir valores actuales (+4px error)**
```css
--radius-none: 0;
--radius-xs: 0.125rem;   /* 2px  */
--radius-sm: 0.25rem;    /* 4px  */   /* era 8px */
--radius-md: 0.375rem;   /* 6px  */   /* era 12px */
--radius-lg: 0.5rem;     /* 8px  */   /* era 16px */
--radius-xl: 0.75rem;    /* 12px */   /* era 20px */
--radius-2xl: 1rem;      /* 16px */   /* era 24px */
--radius-3xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
--radius-bezel-outer: 1rem;      /* 16px */
--radius-bezel-inner: 0.75rem;   /* 12px */
```

#### Shadows (DESIGN.md §6) — **Alinear nombres a especificación**
```css
/* Elevation base */
--shadow-xs: 0 1px 2px rgba(6,54,165,0.04);
--shadow-sm: 0 2px 4px rgba(6,54,165,0.06), 0 1px 2px rgba(6,54,165,0.03);
--shadow-md: 0 4px 8px rgba(6,54,165,0.08), 0 2px 4px rgba(6,54,165,0.04);
--shadow-lg: 0 8px 16px rgba(6,54,165,0.1), 0 4px 8px rgba(6,54,165,0.06);
--shadow-xl: 0 16px 32px rgba(6,54,165,0.12), 0 8px 16px rgba(6,54,165,0.08);
--shadow-2xl: 0 25px 50px -12px rgba(6,54,165,0.15);

/* Signature shadows (nombres DESIGN.md) */
--shadow-elevated: 0 20px 40px -8px rgba(6,54,165,0.2), 0 8px 16px -4px rgba(6,54,165,0.12);
--shadow-hover-lift: 0 32px 64px -12px rgba(6,54,165,0.25);
--shadow-float: 0 25px 50px -12px rgba(6,54,165,0.15);        /* Double Bezel outer reposo */
--shadow-bezel: inset 0 1px 0 rgba(255,255,255,0.1);          /* Inner highlight */
--shadow-cta-glow: 0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15);
--shadow-cta-glow-sm: 0 0 20px rgba(255,236,1,0.3);
--shadow-antigravity-deep: 0 30px 60px -15px rgba(6,54,165,0.3), 0 0 50px -10px rgba(255,236,1,0.15);

/* Accent shadows (amarillo) */
--shadow-accent-sm: 0 2px 4px rgba(255,236,1,0.15);
--shadow-accent-md: 0 4px 8px rgba(255,236,1,0.2), 0 2px 4px rgba(255,236,1,0.1);
--shadow-accent-lg: 0 8px 16px rgba(255,236,1,0.3), 0 4px 8px rgba(255,236,1,0.2);
```

#### Motion (DESIGN.md §7)
```css
/* Duraciones */
--duration-instant: 50ms;
--duration-fast: 150ms;
--duration-base: 200ms;
--duration-normal: 300ms;
--duration-slow: 400ms;
--duration-slower: 500ms;
--duration-slowest: 800ms;

/* Easings */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-snappy: cubic-bezier(0.2, 0.8, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
--ease-smooth: cubic-bezier(0.25, 1, 0.5, 1);   /* 3D transforms */
```

#### Font Mono (DESIGN.md §4)
```css
--font-mono: "Geist Mono", "JetBrains Mono", "Fira Code", ui-monospace;
```

#### Gradients (DESIGN.md §8) — **Corregir gradient-blue-light**
```css
--gradient-blue: linear-gradient(135deg, #0636A5 0%, #002068 100%);
--gradient-blue-light: linear-gradient(135deg, var(--color-brand-blue-50) 0%, var(--color-brand-blue-100) 50%, var(--color-brand-blue-200) 100%);
--gradient-yellow: linear-gradient(135deg, #FFEC01 0%, #E6B800 100%);
--gradient-mixed: linear-gradient(135deg, #0636A5 0%, #002068 50%, #FFEC01 100%);
--gradient-surface: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
--gradient-dark: linear-gradient(180deg, #151B2D 0%, #002068 50%, #001035 100%);
--gradient-hero-mesh: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6,54,165,0.15) 0%, transparent 70%);
--gradient-shimmer-bg: linear-gradient(90deg, var(--color-brand-blue-50) 25%, var(--color-brand-blue-100) 50%, var(--color-brand-blue-50) 75%);
```

### 4.2 Componentes Signature — Verificación Tokens

| Componente | Tokens Requeridos | Estado Esperado |
|------------|-------------------|-----------------|
| `DoubleBezelCard.tsx` | `shadow-float` (outer), `shadow-antigravity-deep` (hover), `rounded-2xl`/`rounded-xl` | ✅ Tokens semánticos |
| `CTANestedPill.tsx` | Variantes primary/elevated/outline/ghost con `rounded-full`, `shadow-cta-glow*` | ✅ Tokens semánticos |
| `StepperVertical.tsx` | Completed: `brand-yellow-500` + `brand-yellow-100` ring | ✅ Sin verde |
| `LogosCarousel.tsx` | `mask-image` gradient, 30s linear, pausa hover/focus/visibilitychange | ✅ Accesible |
| `BentoGrid.tsx` | Spans 7/5/12, `gap-6 lg:gap-8`, `auto-rows-[380px]` | ✅ Asimétrico |

---

## 5. Fase 3 — Elevación Visual Profesional (Anti-IA Genérica)

### 5.1 Patrones de Diseño Específicos DosRuedas

| Patrón Genérico (Evitar) | Implementación DosRuedas (Obligatoria) |
|--------------------------|----------------------------------------|
| Hero centrado simétrico | **Float/Tilt 3D Cards** — `perspective: 1000px`, lerp 0.1, `translateZ` layers 10/40/70/80px, `shadow-antigravity-deep` hover |
| Grid 3-col simétrico | **Bento Asimétrico 12-col** — Express/E-Commerce `lg:col-span-7`, LowCost/Flex `lg:col-span-5`, CTA `col-span-12` |
| Cards planas | **Double Bezel obligatorio** (secciones blancas) — outer `bg-blue-50/80 border-blue-100 rounded-2xl p-2 shadow-float` + inner `bg-white rounded-xl shadow-inner` |
| Botones rectangulares | **CTA Nested Pill** — `rounded-full`, `font-subheading`, `uppercase`, `tracking-[.05em]`, `font-weight: 700`, icono `w-8 h-8 rounded-full` `translateX(4px)` hover |
| Stepper verde completado | **Stepper Vertical Amarillo** — dots 24px, línea 2px `blue-100`, completed `yellow-500` + `yellow-100` ring, active `pulse-subtle` |
| Logos estáticos | **Logos Carousel Infinite** — `mask-image: linear-gradient(transparent, black 10%, black 90%, transparent)`, grayscale→color hover, pausa accesible |
| Tipografía plana | **Kinetic Font Stretch** — `transform: scaleX(1.1)` + `letter-spacing: 0.02em` hover CTA/headlines interactivas |
| Whitespace arbitrario | **Espaciado Semántico** — `section-xl` (144px) Hero, `section-lg` (128px) estándar, `container-pad-desktop` 32px |
| Motion genérica | **Precise Kinetic Flow** — `ease-smooth` 3D, `ease-snappy` botones, `prefers-reduced-motion` first |

### 5.2 Copywriting Voseo Rioplatense + Referencias MDQ (Obligatorio)

**Verbos UI — Reemplazar TODOS los strings:**
| Acción | Verbo Correcto | Ejemplo |
|--------|----------------|---------|
| Cotizar | **Cotizá** | `Cotizá Express`, `Cotizá LowCost` |
| Enviar | **Enviá** | `Enviá ahora`, `Enviá masivo` |
| Rastrear | **Rastreá** | `Rastreá tu paquete` |
| Contactar | **Contactanos / Escribinos** | `Contactanos por WhatsApp` |
| Ingresar | **Ingresá** | `Ingresá tu dirección` |
| Elegir | **Elegí** | `Elegí tu envío` |
| Agendar | **Agendá** | `Agendá retiro` |
| Confirmar | **Confirmá** | `Confirmá dirección` |

**Expresiones locales obligatorias:**
- `Al toque`, `Quedate tranquilo`, `Te avisamos`, `Por acá`, `Ya vuelve`

**Referencias geográficas MDQ obligatorias (usar en copy, mapas, simuladores):**
- `Güemes`, `Friuli 1972`, `Playa Grande`, `Punta Mogotes`, `Chauvín`, `Puerto`, `Batán`, `Camet`

**Año de referencia: 2026** en todas las tarifas, vigencias, fechas operativas.

### 5.3 Accesibilidad & Performance DoD (Fase 3)

| Criterio | Especificación |
|----------|----------------|
| **Lighthouse** | ≥ 90 en Performance, Accessibility, Best Practices, SEO — **páginas obligatorias: homepage (`page.tsx`), `/cotizar/express`, `/cotizar/lowcost`, `/servicios/express`, `/contacto`** |
| **Focus Visible** | `ring-2 ring-brand-blue-500 ring-offset-2 ring-offset-white` (sección azul: `ring-offset-brand-blue-700`) |
| **Skip Link** | Primer elemento enfocable → `#main-content` |
| **Touch Targets** | ≥ 44×44px (botones, links, inputs) |
| **Heading Structure** | h1 → h2 → h3 semántica, un solo h1 por página |
| **Alt Text** | Todas las imágenes informativas |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` → duraciones 0.01ms, sin transforms |
| **Color Contrast** | AA mínimo (4.5:1 texto normal, 3:1 texto grande) en todos los pares |

---

## 6. Checklist de Cumplimiento Integral (Pre-Entrega)

Antes de marcar **cualquier fase** como completada, verificar **TODOS**:

- [ ] **Fase 1**: `pnpm build` ✅, `pnpm lint` ✅, 0 `green-*`/`slate-*`/`gray-*`/`zinc-*`, logo SVG <50KB ≥120px
- [ ] **Fase 2**: Tokens `@theme` completos (spacing/radius/shadows/motion/mono/gradients), componentes signature usan tokens semánticos
- [ ] **Fase 3**: Lighthouse ≥90, a11y AA, responsive 320-1920px, copy voseo+MDQ 100%, patrones anti-genérica implementados
- [ ] **Transversal**: Double Bezel secciones blancas, CTA Nested Pill botones primarios, Stepper amarillo, Bento asimétrico, Logos Carousel masked
- [ ] **Marca**: Logotipo inalterable (SVG maestro, safe-area, aspect-ratio, variantes aprobadas), 3 colores exclusivamente
- [ ] **Voz**: Voseo rioplatense en TODO string user-facing, referencias MDQ, año 2026

---

## 7. Referencias Normativas

- `DESIGN.md` v2.0 (sistema de diseño completo — fuente de verdad técnica)
- `AGENTS.md` v2.0 (protocolo obligatorio agentes — reglas inquebrantables)
- `docs/knowledge_base/contexto.md` v2.0 (manifiesto marca, voz, contexto MDQ)
- `docs/REPORTE_BRAND_AUDIT.md` v1.0 (hallazgos críticos/medios 2026-07-20)
- `docs/paleta_3_colores.md` (escalas oficiales 3 colores)
- `docs/contexto/precios.md` (fuente de verdad tarifas 2026)

---

## 8. Próximo Paso

**Invocar `writing-plans` skill** para generar plan de implementación detallado con:
- Tasks atómicas por fase con criterios DoD específicos
- Archivos afectados por task
- Orden de ejecución con dependencias
- Comandos de verificación por task
- Estimación de esfuerzo

---

*Especificación escrita y commitada. Aprobada para transición a implementation planning.*