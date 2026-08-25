---
name: bento-layout-patterns
description: >-
  Use this skill when designing or assembling complex responsive layouts, Asymmetric Bento Grids (12-column span-7/span-5/span-12), Double Bezel containers, Radio Card Groups, horizontal/vertical steppers, or hero sections.
---

# Bento Grids & Layout Patterns Skill

Esta skill define la composición espacial de layouts asimétricos, Bento Grids y agrupadores visuales en **Envíos DosRuedas**.

---

## 🍱 1. Asymmetric Bento Grid (12 Columnas)

El Bento Grid asimétrico organiza servicios y funcionalidades con pesos visuales diferenciados:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[380px]">
  {/* Hero Card: Mensajería Express (Span 7) */}
  <div className="col-span-1 md:col-span-2 lg:col-span-7 double-bezel-outer bg-brand-blue-50/80 p-2 rounded-2xl">
    <div className="double-bezel-inner bg-white h-full p-8 rounded-xl flex flex-col justify-between">
      {/* Contenido Hero */}
    </div>
  </div>

  {/* Secondary Card: Envíos LowCost (Span 5) */}
  <div className="col-span-1 lg:col-span-5 double-bezel-outer bg-brand-blue-50/80 p-2 rounded-2xl">
    <div className="double-bezel-inner bg-white h-full p-8 rounded-xl flex flex-col justify-between">
      {/* Contenido Secundario */}
    </div>
  </div>

  {/* Full Width Banner / CTA (Span 12) */}
  <div className="col-span-1 md:col-span-2 lg:col-span-12 double-bezel-outer bg-brand-blue-700 p-2 rounded-2xl text-white">
    <div className="double-bezel-inner bg-brand-blue-900 p-8 rounded-xl flex items-center justify-between">
      {/* Contenido CTA */}
    </div>
  </div>
</div>
```

---

## 🔘 2. Radio Card Group (Selector de Servicios)

Selector interactivo con retroalimentación visual accesible:

- **Express**: Borde `brand-blue-700`, fondo seleccionado `bg-brand-blue-700 text-white`.
- **LowCost**: Borde `brand-blue-200`, fondo seleccionado `bg-brand-blue-50 text-brand-blue-700`.
- **Flex E-Commerce**: Borde `brand-yellow-200`, fondo seleccionado `bg-brand-yellow-50 text-brand-blue-900`.

---

## 🪜 3. Steppers (Horizontal y Vertical)

### Horizontal (Cotizadores y Checkout)
- Línea conectora: 2px `border-brand-blue-100` (completada: `bg-brand-yellow-500`).
- Círculos de estado (40px):
  - **Completado**: `bg-brand-yellow-500 text-brand-blue-900 font-bold`.
  - **Activo**: `bg-brand-blue-700 text-white ring-4 ring-brand-blue-100`.
  - **Pendiente**: `bg-brand-blue-50 text-brand-blue-400 border border-brand-blue-100`.

### Vertical (Sección "¿Cómo Funciona?")
- Línea vertical izquierda: 2px `brand-blue-100`.
- Puntos indicadores (24px):
  - **Completado / Activo**: `bg-brand-yellow-500` con anillo `ring-4 ring-brand-yellow-100`.
  - ⚠️ **NUNCA usar `green-500` ni verde** en los steppers.
