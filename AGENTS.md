# 🤖 AGENTS.md — Reglas Operativas: Envíos Dos Ruedas

> **Leer este archivo completo antes de tocar cualquier archivo del proyecto.**
> Funciona como el contrato entre el agente y el repositorio: define qué hacer, cuándo hacerlo y cómo recuperarse de errores.

---

## 📌 Contexto del Proyecto

| Campo | Valor |
|---|---|
| **Nombre** | Envíos Dos Ruedas |
| **Dominio** | Logística de última milla, mensajería y E-Commerce |
| **Ubicación** | Mar del Plata, Argentina |
| **Stack** | Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Prisma ORM · PostgreSQL |
| **Animaciones** | Framer Motion (`motion/react`) · GSAP |
| **Package Manager** | `pnpm` — **único gestor válido, no usar npm ni yarn** |
| **Año Operativo** | 2026 (tarifas, fechas y referencias temporales) |

---

## 🗂️ Mapa de Archivos Críticos

**Cuándo leer:** Antes de modificar lógica de negocio, tarifas, estilos o copys.

| Archivo | Propósito | Leer antes de… |
|---|---|---|
| `docs/contexto/precios.md` | **Fuente de verdad de tarifas** — filas exactas de la BD | Cambiar precios, cotizadores |
| `src/lib/pricing.ts` | Funciones puras de cálculo Express y LowCost | Tocar lógica de precios |
| `prisma/schema.prisma` | Modelo de datos · entidad `PricingRange` | Migraciones, nuevos modelos |
| `DESIGN.md` | Sistema de diseño completo (colores, tipografías, componentes) | Crear o editar componentes UI |
| `src/app/globals.css` | Variables CSS, tokens de color, utilidades glow/sombra | Añadir/modificar estilos globales |
| `tailwind.config.ts` | Tokens: `brand-blue`, `brand-yellow`, fuentes | Extender el design system |
| `PROJECT.md` | Milestones activos, contratos de interfaz, estado del proyecto | Planificar trabajo nuevo |
| `docs/contexto/errores-conocidos.md` | Gotchas de Turbopack, ESLint, Prisma, tests | Debuggear un error recurrente |

---

## 🛠️ Reglas de Código y Arquitectura

### TypeScript
- **Estricto obligatorio.** Prohibido usar `any`; usar `unknown` + type guard si el tipo es incierto.
- Interfaces sobre `type` para contratos de props públicas.

### Next.js App Router (React 19)
- **Server Components por defecto.** Si el componente no necesita estado del cliente, NO agregues `'use client'`.
- `'use client'` solo cuando el componente usa: `useState`, `useEffect`, `useRef`, `motion`, `leaflet`, u otras APIs de browser.
- Las rutas de API van en `src/app/api/`.

### Comandos del Proyecto

| Acción | Comando |
|---|---|
| Desarrollo (default) | `pnpm dev` |
| Desarrollo sin Turbopack (Windows hot-reload roto) | `pnpm dev --webpack` |
| Build (Windows) | `powershell -ExecutionPolicy Bypass -Command "pnpm build"` |
| Lint manual | `pnpm run lint` |
| Tests unitarios | `pnpm test` (Vitest) |
| Sincronizar BD | `pnpm prisma db push` |
| Generar cliente Prisma | `pnpm prisma generate` |

> ⚠️ **Gotcha Windows:** Si los cambios no se reflejan en el navegador, usar `pnpm dev --webpack` para forzar polling.

---

## 💰 Reglas de Tarifas (CRÍTICO — No Inventar Valores)

**Cuándo aplica:** Toda modificación a cotizadores, lógica de `pricing.ts`, o textos que mencionen precios.

**Regla:** Las tarifas provienen **exclusivamente** de `PricingRange` en la BD. Ver `docs/contexto/precios.md`.

### Tabla de Precios Vigente 2026

| Servicio | Rango | Precio Base |
|---|---|---|
| **EXPRESS** | 0–3 km | $3.700 ARS |
| **EXPRESS** | 3–5 km | $4.600 ARS |
| **EXPRESS** | 5–7 km | $6.100 ARS |
| **EXPRESS** | 7–10 km | $8.200 ARS |
| **EXPRESS** | +10 km | $8.200 + `Math.ceil(km − 10) × $1.000` |
| **LOW_COST** | 0–3 km | $3.000 ARS |
| **LOW_COST** | 3–5 km | $4.000 ARS |
| **LOW_COST** | 5–7 km | $5.300 ARS |
| **LOW_COST** | 7–10 km | $7.000 ARS |
| **LOW_COST** | +10 km | $7.000 + `Math.ceil(km − 10) × $700` |

> ⚠️ **Math.ceil es obligatorio para excedente +10 km.** Un viaje de 10.3 km cobra 1 km adicional entero, no 0.3.

**Error de recuperación:** Si el cotizador devuelve un precio diferente a esta tabla, verificar primero `src/lib/pricing.ts` y luego la entidad `PricingRange` en la BD.

---

## 🎨 Sistema de Diseño UI (Tailwind CSS v4)

**Cuándo aplica:** Al crear, modificar o revisar cualquier componente visual.

### Paleta de Colores — Usar siempre tokens, no hex ad-hoc

| Token | Hex | Uso |
|---|---|---|
| `#00277c` (Egyptian Blue) | `#00277c` | Header, Footer, fondos principales, textos oscuros |
| `bg-brand-blue` | `#0636A5` | Azul secundario y de acento |
| `bg-brand-yellow` / `text-brand-yellow` | `#FFEC01` | Amarillo acento — CTAs, badges |
| `slate-50` | — | Fondos claros |
| `slate-900` / `slate-950` | — | Fondos oscuros |

> ❌ **Prohibido:** colores hexadecimales inline en clases Tailwind (excepto Canvas/SVG nativos).

### Tipografía

| Token | Fuente | Usar para |
|---|---|---|
| `font-display` | Anton | Títulos H1, H2 de impacto |
| `font-subheading` | Bebas Neue | Subtítulos, números destacados, badges |
| `font-sans` | Inter / IBM Plex Sans | Cuerpo, textos descriptivos |

### Componentes — Contratos de Interfaz

**Double Bezel (tarjetas/bloques principales):**
```html
<!-- Outer -->
<div class="double-bezel-outer bg-[#E6EEFE]/80 hover:shadow-... border border-[#BACEFD] p-2 rounded-2xl">
  <!-- Inner -->
  <div class="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-sm">
    ...
  </div>
</div>
```

**Botones CTA:**
```html
<button class="cta-nested-pill">
  <span class="cta-nested-icon">...</span>
  Texto del botón
</button>
```

**Efectos disponibles:** `glow-blue`, `glow-yellow`, `glow-blue-lg`, `glow-yellow-lg`
**Sombras de acento:** `shadow-accent-sm`, `shadow-accent-md`, `shadow-accent-lg`
**Bordes:** preferir `rounded-2xl` o `rounded-3xl` en tarjetas

### Fondos Oscuros
Secciones oscuras deben usar gradientes, NO fills planos:
```css
bg-gradient-to-br from-[#0636A5] to-[#0742CA]
```

---

## 🗺️ Estructura del Código

```
src/
├── app/                           # Rutas Next.js App Router
│   ├── api/                       # Endpoints de API (ej: api/assistant)
│   ├── cotizar/
│   │   ├── express/page.tsx       # Página cotizador Express
│   │   └── lowcost/page.tsx       # Página cotizador LowCost
│   ├── servicios/                 # Páginas informativas de servicios
│   ├── nosotros/                  # sobre-nosotros, preguntas-frecuentes, nuestras-redes
│   └── contacto/                  # Página de contacto
├── components/
│   ├── cotizar/
│   │   ├── express/               # CotizadorExpressHero, CotizadorExpressForm
│   │   └── lowcost/               # CotizadorLowCostHero, CotizadorLowCostForm
│   ├── ui/                        # Componentes compartidos (AddressAutocomplete, etc.)
│   └── layout/                    # Header, Footer
├── hooks/
│   └── useOSRMRoute.ts            # Cálculo de rutas reales vía OSRM
└── lib/
    ├── pricing.ts                 # Funciones puras de tarifas
    └── prisma.ts                  # Cliente Prisma singleton
```

---

## 🗣️ Tono de Voz y Contenido

**Cuándo aplica:** Al redactar copys, labels, mensajes, tooltips, placeholders o textos del chatbot.

1. **Voseo Rioplatense obligatorio:** "Vos elegís", "Ingresá tus datos", "Contactanos", "Calculá tu envío"
2. **Geolocalización:** El servicio opera exclusivamente en Mar del Plata. Ejemplos/simulaciones deben referenciar: "Zona Güemes", "Centro de Distribución", "Constitución", "Puerto"
3. **Año de referencia:** 2026 en toda mención a tarifas, vigencia o fechas operativas
4. **Marcadores pendientes:** Buscar y reemplazar `TODO MDQ` en el código por contenido local definitivo

---

## 🤖 Flujo Multi-Agente (`.agents/`)

El proyecto cuenta con un sistema de agentes especializados en `.agents/`. Roles disponibles:

| Rol | Directorio | Responsabilidad |
|---|---|---|
| Orchestrator | `.agents/orchestrator/` | Coordina el flujo general |
| Explorer | `.agents/explorer_*/` | Análisis y relevamiento de páginas |
| Worker | `.agents/worker_*/` | Implementación de cambios |
| Reviewer | `.agents/reviewer_*/` | Revisión de calidad y diseño |
| Auditor | `.agents/auditor_*/` | Verificación contra DESIGN.md |
| Challenger | `.agents/challenger_*/` | Tests adversariales de UI |
| Sentinel | `.agents/sentinel/` | Guardia de contratos de interfaz |

**Skills del proyecto** en `.agents/skills/` — consultar antes de ejecutar tareas de diseño, stitch, o generación de imágenes.

---

## 📸 Prompts de Imágenes (Nano Banana MCP)

**Cuándo usar:** Al generar imágenes para el sitio mediante la skill `nanobanana`.

**Estructura 1 — Imagen Nueva:**
```
[Sujeto y descripción detallada] + [Estilo artístico/visual] + [Composición/Ángulo] + [Iluminación y atmósfera] + [Paleta: #00277c, #FFEC01, #0636A5]
```

**Estructura 2 — Con Referencia (logos, personajes, estilo):**
```
[Acción/Transformación] + [Referencia específica] + [Cambios o integración] + [Contexto del entorno Mar del Plata] + [Consistencia brand: Egyptian Blue + Amarillo]
```

**Directrices completas:** ver `docs/directrices_imagenes.md`

---

## ✅ Checklist de "Terminado"

Antes de marcar cualquier tarea como completa, verificar:

- [ ] Componentes usan tokens de Tailwind (`bg-brand-blue`), no hex inline
- [ ] Double-bezel aplicado en tarjetas principales
- [ ] Tipografía respeta la jerarquía `font-display` / `font-subheading` / `font-sans`
- [ ] Textos en voseo rioplatense y con referencias a Mar del Plata
- [ ] El proyecto compila: `powershell -ExecutionPolicy Bypass -Command "pnpm build"`
- [ ] Se corrió `pnpm run lint` manualmente
- [ ] Precios cotizados coinciden exactamente con la tabla de tarifas 2026
- [ ] Si hubo cambios en `schema.prisma`: ejecutar `pnpm prisma generate`
- [ ] No se introdujeron valores `any` en TypeScript

---

## ⚠️ Errores Conocidos y Recuperación

| Error | Causa | Workaround |
|---|---|---|
| Hot-reload no funciona en Windows | Bug de Turbopack | `pnpm dev --webpack` |
| Build falla por ESLint | Config estricta | Correr `pnpm run lint` antes; el build ignora ESLint por config |
| Modelos `User`/`Post` en Prisma | Starter models no eliminados | Ignorarlos; los modelos productivos son `ServiceType` y `PriceRange` |
| Precio incorrecto en cotizador | Lógica de excedente sin `Math.ceil` | Verificar `src/lib/pricing.ts` línea de km adicional |
| Componente sin `'use client'` falla | Hook de React en Server Component | Agregar `'use client'` al inicio del archivo |
