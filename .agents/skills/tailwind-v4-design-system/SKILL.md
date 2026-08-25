---
name: tailwind-v4-design-system
description: >-
  Use this skill when creating or editing UI components, styling layouts, applying design tokens, working with Tailwind CSS v4 @theme, or maintaining the strict 3-color palette (brand-blue, brand-yellow, brand-white, brand-ink) and typography hierarchy (Anton, Bebas Neue, Outfit, Geist Mono).
---

# Tailwind CSS v4 & Design System Skill

Esta skill contiene las directrices, tokens y contratos obligatorios para maquetar y estilizar componentes en **Envíos DosRuedas** usando **Tailwind CSS v4** (`@theme`) y el sistema de diseño oficial.

---

## 🎨 1. Regla Fundamental: Paleta Estricta de 3 Colores

El sistema cromático oficial se compone **únicamente** de Azul, Amarillo y Blanco (con sus gradaciones oficiales de marca). **Queda terminantemente prohibido** usar colores neutros externos (`slate-*`, `gray-*`, `zinc-*`, `neutral-*`), hex inline ad-hoc, o verdes en CTAs (`green-*`).

### Tokens de Color Oficiales (`@theme`)

| Token Tailwind | Variable CSS / Hex | Uso Primario |
|---|---|---|
| `bg-brand-blue-700` / `text-brand-blue-700` | `#0636A5` | **Azul Primario**: Headers, footers, secciones oscuras, títulos |
| `bg-brand-blue-500` / `text-brand-blue-500` | `#0950F6` | **Azul Activo/Interactivo**: Hover states, focus rings, acentos |
| `bg-brand-blue-50` | `#E6EEFE` | **Fondo Muted**: Outer bezel, fondos secundarios, badges suaves |
| `bg-brand-blue-100` / `border-brand-blue-100` | `#BACEFD` | **Bordes Sutiles**: Líneas separadoras, bordes de cards |
| `bg-brand-yellow-500` / `text-brand-yellow-500` | `#FFEC01` | **Acento / CTA Oficial**: Botones primarios, badges de alta prioridad |
| `bg-brand-yellow-400` | `#FFF12E` | **Hover Acento**: Hover de botones amarillos |
| `bg-brand-white-50` / `bg-white` | `#FFFFFF` | **Superficie Base**: Fondo de tarjetas internas, formularios |
| `text-brand-ink` | `#00277C` | **Texto Cuerpo**: Color principal de lectura para texto corrido |

> ❌ **Prohibiciones Absolutas:**
> - NO usar `text-slate-*`, `bg-slate-*`, `text-gray-*`, `bg-gray-*`, `text-zinc-*`.
> - NO usar `bg-green-500` ni `bg-green-400` para botones de WhatsApp ni en steppers. Los CTAs de WhatsApp usan `bg-brand-yellow-500` con icono SVG blanco o azul.

---

## 🔤 2. Jerarquía Tipográfica Oficial

| Token de Fuente | Familia | Transformación | Uso |
|---|---|---|---|
| `font-display` | **Anton** | `uppercase`, `tracking-tight` | Títulos H1, H2 de alto impacto, números de sección |
| `font-subheading` | **Bebas Neue** | `uppercase`, `tracking-wider` | Subtítulos H3, labels, badges, botones |
| `font-sans` | **Outfit / IBM Plex Sans** | Normal | Párrafos, descripciones, inputs |
| `font-mono` | **Geist Mono** | `tabular-nums` | Precios, distancias en km, tracking numbers |

### Utilidades Tipográficas
- `text-display`: `font-family: var(--font-display); clamp(3rem, 5vw, 4.5rem); leading: 1.05;`
- `text-h1`: `clamp(2.25rem, 4vw, 3rem); leading: 1.1;`
- `text-h2`: `clamp(1.75rem, 3vw, 2.25rem); leading: 1.2;`
- `text-h3`: `font-family: var(--font-subheading); clamp(1.25rem, 2vw, 1.5rem); leading: 1.4;`

---

## 🧱 3. Contratos de Componentes UI

### A. Double Bezel (Tarjeta Contenedora Oficial)
```tsx
<div className="double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-sm hover:border-brand-blue-300 transition-all duration-300">
  <div className="double-bezel-inner bg-white p-6 rounded-xl border border-brand-blue-50/50 shadow-inner overflow-hidden">
    {/* Contenido real de la tarjeta */}
  </div>
</div>
```

### B. CTA Nested Pill (Botón Pastilla Anidada)
```tsx
<button className="cta-nested-pill inline-flex items-center justify-between bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading uppercase tracking-wider px-6 py-3 rounded-full shadow-accent transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">
  <span>Cotizá tu Envío</span>
  <span className="cta-nested-icon bg-brand-blue-900/10 text-brand-blue-900 rounded-full w-7 h-7 inline-flex items-center justify-center ml-3 transition-transform group-hover:translate-x-1">
    →
  </span>
</button>
```

### C. Input Field con Focus Ring Accesible
```tsx
<div className="flex flex-col gap-1.5">
  <label className="font-subheading uppercase tracking-wider text-xs font-bold text-brand-blue-700">
    Dirección de Origen
  </label>
  <div className="relative">
    <input
      type="text"
      className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-brand-blue-100 bg-white text-brand-ink placeholder:text-brand-blue-300 focus:border-brand-blue-700 focus:ring-2 focus:ring-brand-blue-500/20 outline-none transition-all"
      placeholder="Ej: Friuli 1972, Chauvín"
    />
  </div>
</div>
```

---

## 📐 4. Breakpoints y Spacing

- **Mobile (< 768px)**: 1 columna, padding lateral `px-4`, botones full-width (`w-full`).
- **Tablet (768px - 1024px)**: 2 columnas en grids, padding `px-6`.
- **Desktop (≥ 1024px)**: Grids de 12 columnas (Bento Grid: spans 7/5/12), container max `max-w-7xl mx-auto px-8`.

---

## ✅ 5. Checklist de Verificación
- [ ] Colores exclusivamente en tokens `brand-*` (0 hex ad-hoc, 0 clases `slate-*` / `gray-*`).
- [ ] Títulos y números en `font-display` en mayúsculas (`uppercase`).
- [ ] Tarjetas principales con patrón Double Bezel.
- [ ] Touch targets ≥ 44×44px en elementos clickeables.
- [ ] Build limpio: `pnpm build` sin errores.
