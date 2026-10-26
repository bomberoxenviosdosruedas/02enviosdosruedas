# Design System Especificaciones Visuales — Envíos DosRuedas (2026)

## 1. Muestra Cromática Canónica (Ley de Tres Colores & Techo #0950F6)
Queda estrictamente prohibido el uso de negro puro (`#000000`), grises neutros y cualquier tono de verde.
El color más oscuro permitido en toda la aplicación es el Azul Canónico `#0950F6`.

### Azul Institucional (6 pasos canónicos — Tope de oscuridad #0950F6)
- `--color-brand-blue-50`: `#E6EEFE` (Fondo suave, bezel exterior /80, skeleton)
- `--color-brand-blue-100`: `#BACEFD` (Borde estructural, divisores, líneas de track)
- `--color-brand-blue-200`: `#8EAFFB` (Hover de borde de tarjeta, trazos vectoriales)
- `--color-brand-blue-300`: `#628FF9` (Borde de input en reposo, hover de bisel)
- `--color-brand-blue-400`: `#3570F8` (Íconos, texto secundario muteado)
- `--color-brand-blue-500`: `#0950F6` (Primario canónico, H1/H2, foco, botones principales)

### Amarillo Vial (7 pasos canónicos — Cobertura visual ≤ 15%)
- `--color-brand-yellow-50`: `#FFFDE6` (Fondo de tarjeta Flex seleccionada)
- `--color-brand-yellow-100`: `#FFFAB8` (Badge Flex, halos)
- `--color-brand-yellow-200`: `#FFF78A` (Borde Flex seleccionado)
- `--color-brand-yellow-300`: `#FFF45C` (Detalles sobre azul)
- `--color-brand-yellow-400`: `#FFF12E` (Hover CTA primario y WhatsApp)
- `--color-brand-yellow-500`: `#FFEC01` (CTA primario, step completado, franja footer 6px)
- `--color-brand-yellow-600`: `#E6D400` (Estado presionado/active)

### Lienzo
- `--color-white`: `#FFFFFF` (Fondo único de tarjeta limpia e interfaz)

## 2. Jerarquía Tipográfica
- **Display (`font-display`):** `Anton` / `Anton SC` (`uppercase`, tracking `-0.05em`, leading `0.85`).
- **Subtítulos y UI (`font-subheading`):** `Bebas Neue` (`uppercase`, tracking `0.05em`, weight `700`).
- **Cuerpo (`font-sans`):** `Outfit` (respaldo `IBM Plex Sans, sans-serif`).
- **Monospace (`font-mono`):** `Geist Mono` (`tabular-nums` para precios ARS, km, horas de corte, teléfonos).

## 3. Firmas Geométricas y Componentes UI
- **`DoubleBezelCard`:**
  - Outer: `bg-brand-blue-50/80 border border-brand-blue-100 p-2 rounded-2xl shadow-float transition-all duration-200`.
  - Inner: `bg-white rounded-xl p-6 border border-brand-blue-50/50 shadow-inner`.
- **`CTANestedPill`:**
  - Botón en cápsula `rounded-full`, `font-subheading uppercase tracking-wider font-bold min-h-[44px] px-6 py-3`.
  - Contiene un chip circular interior de `2.5rem` que transiciona `translate-x-1` en hover del grupo.
  - Táctil: `active:scale-[0.97]`.
- **`Knockout Badge`:**
  - Cápsula rotada `-rotate-1`, `bg-brand-yellow-500 text-brand-blue-500 font-display rounded-full px-3 py-1 shadow-glow-yellow`.
- **Sombras Teñidas (Sin Grises):**
  - Azul: `shadow-[0_16px_40px_rgba(9,80,246,0.18)]`
  - Amarillo: `shadow-[0_0_28px_rgba(255,236,1,0.45)]`
