# Background Image Prompts for ServicesOverview.tsx

## Technical Context

**Component:** `src/components/home/ServicesOverview.tsx`
**Usage:** Background images with `mix-blend-luminosity` on `bg-brand-blue-800` (`#0636A5`)
**Opacity:** 30% default → 40% on hover
**Scale:** 100% → 105% on hover (transition 700ms)
**Layout:** Asymmetric bento grid, 12-col, auto-rows 380px

| Service | Col Span | Approx Aspect | Image Path |
|---------|----------|---------------|------------|
| Express | lg:col-span-7 | ~2.3:1 (wide) | `/img/generales/envios_express.webp` |
| LowCost | lg:col-span-5 | ~1.7:1 | `/img/generales/envios_low_cost.webp` |
| Flex | lg:col-span-5 | ~1.7:1 | `/img/generales/servicio_flex.jpeg` |
| E-Commerce | lg:col-span-7 | ~2.3:1 (wide) | `/img/generales/Emprendedoresbanner.webp` |
| Cotizador | lg:col-span-12 | ~3.4:1 (ultra-wide) | `/img/generales/cotizador_banner.webp` |

**Key Requirement:** Images must work with `mix-blend-luminosity` — this blend mode preserves the luminosity of the background while adopting the hue/saturation of the image. **High contrast, distinct light/dark regions, and strong silhouettes work best.** Avoid mid-tone muddy images.

---

## Prompts by Service

### 1. EXPRESS — "Envíos Express" (Wide: ~2.3:1 / 1024×448)

```text
High-contrast silhouette for luminosity blend mode on dark blue. Motorcycle courier in motion, side profile, strong rim light from behind creating bright white outline on rider and bike against deep black background. Speed streaks/motion blur lines horizontal, glowing white. Clean negative space above and below. No gradients, no text, no logos. Sharp edges on bike frame, wheels, rider posture. Industrial precision aesthetic. Aspect 2.3:1 (1024x448). Style: night photography, high-speed sync flash, crisp subject separation.
```

**Alternative (more abstract/pattern):**

```text
High-contrast geometric pattern for luminosity blend on dark blue. Converging perspective lines (road/lanes) radiating from center horizon, bright white on black. Central vanishing point suggesting speed and precision. Clean vector-like lines, no gradients. Subtle motorcycle wheel spoke pattern overlay in lower third. Aspect 2.3:1 (1024x448). Style: technical illustration, blueprint aesthetic, institutional precision.
```

---

### 2. LOWCOST — "Envíos LowCost" (Standard: ~1.7:1 / 1024×600)

```text
High-contrast silhouette for luminosity blend mode on dark blue. Organized stack of cardboard parcels on motorcycle cargo rack, top-down 45° angle. Strong directional side lighting creating bright white highlights on box corners, tape seams, strap tension. Boxes perfectly aligned, geometric precision suggesting volume efficiency. Deep shadows between boxes for contrast. Clean negative space around stack. No gradients, no text. Aspect 1.7:1 (1024x600). Style: product photography, logistics optimization aesthetic.
```

**Alternative (pattern-based):**

```text
High-contrast repeating pattern for luminosity blend on dark blue. Isometric grid of identical parcel cubes, wireframe style, bright white lines on black. Every 3rd cube highlighted (brighter) suggesting "selected/optimized" route. Clean mathematical precision. Subtle perspective depth. Aspect 1.7:1 (1024x600). Style: technical CAD visualization, cost-efficiency engineering.
```

---

### 3. FLEX — "Envíos Flex (MercadoLibre)" (Standard: ~1.7:1 / 1024×600)

```text
High-contrast silhouette for luminosity blend mode on dark blue. Interlocking calendar page and clock gear mechanism, isometric view. Calendar page flipping (motion blur on edge), gear teeth meshing perfectly. Strong rim light on gear teeth and page edges — bright white on black. Clean industrial aesthetic suggesting API integration and automated scheduling. No text, no logos. Aspect 1.7:1 (1024x600). Style: technical product photography, precision mechanics.
```

**Alternative (map/route abstraction):**

```text
High-contrast abstract map for luminosity blend on dark blue. Clean route line (bright white, 2px) weaving through simplified city grid (thin white lines), connecting pickup point (small white square) to multiple delivery dots (small white circles) in optimized sequence. No labels, no colors. Precision routing visualization. Aspect 1.7:1 (1024x600). Style: algorithmic pathfinding visualization, clean data viz.
```

---

### 4. E-COMMERCE — "E-Commerce & 3PL" (Wide: ~2.3:1 / 1024×448)

```text
High-contrast silhouette for luminosity blend mode on dark blue. Three distinct layers representing 3PL stack: bottom — warehouse racking silhouette (vertical lines); middle — conveyor/diverter system (geometric shapes); top — last-mile van/motorcycle fleet (small silhouettes in formation). Strong backlight creating white outlines on each layer. Depth through layer separation. Clean, institutional scale. Aspect 2.3:1 (1024x448). Style: architectural photography, logistics infrastructure.
```

**Alternative (growth/upward motion):**

```text
High-contrast upward composition for luminosity blend on dark blue. Stacked shipping containers ascending diagonally (like growth chart), each container clean white outline on black. Subtle arrow formed by negative space between containers pointing up-right. Top container has subtle radiant glow. Represents scaling, enterprise growth. Aspect 2.3:1 (1024x448). Style: minimalist corporate photography, asymptotic growth.
```

---

### 5. COTIZADOR — "Cotizador Express" (Ultra-wide: ~3.4:1 / 1024×300)

```text
High-contrast control panel for luminosity blend on dark blue. Clean dashboard silhouette: three large circular gauges (speedometer-style) side by side, bright white needles on black faces, tick marks at precise intervals. Center gauge needle at "60 min", left at "Origen", right at "Destino". Thin horizontal data bars below. No numbers, no labels — pure form. Institutional precision, decision-support aesthetic. Aspect 3.4:1 (1024x300). Style: avionics panel, mission control.
```

**Alternative (form/input abstraction):**

```text
High-contrast form flow for luminosity blend on dark blue. Three connected rectangular fields left-to-right, bright white borders on black, subtle arrow connectors between them. First field: pin icon (origin). Second: box icon (dimensions). Third: currency symbol (price). Final output: large price display outline. Clean, linear, instant-calculation metaphor. Aspect 3.4:1 (1024x300). Style: UI wireframe photography, instant quote.
```

---

## Generation Commands (OpenRouter + gpt-image-2)

```bash
# EXPRESS (wide)
uv run ... --prompt "High-contrast silhouette for luminosity blend mode on dark blue. Motorcycle courier in motion, side profile, strong rim light from behind creating bright white outline on rider and bike against deep black background. Speed streaks/motion blur lines horizontal, glowing white. Clean negative space above and below. No gradients, no text, no logos. Sharp edges on bike frame, wheels, rider posture. Industrial precision aesthetic. Aspect 2.3:1 (1024x448). Style: night photography, high-speed sync flash, crisp subject separation." --size 1024x448 --model openai/gpt-image-2 --provider openrouter

# LOWCOST (standard)
uv run ... --prompt "High-contrast silhouette for luminosity blend mode on dark blue. Organized stack of cardboard parcels on motorcycle cargo rack, top-down 45° angle. Strong directional side lighting creating bright white highlights on box corners, tape seams, strap tension. Boxes perfectly aligned, geometric precision suggesting volume efficiency. Deep shadows between boxes for contrast. Clean negative space around stack. No gradients, no text. Aspect 1.7:1 (1024x600). Style: product photography, logistics optimization aesthetic." --size 1024x600 --model openai/gpt-image-2 --provider openrouter

# FLEX (standard)
uv run ... --prompt "High-contrast silhouette for luminosity blend mode on dark blue. Interlocking calendar page and clock gear mechanism, isometric view. Calendar page flipping (motion blur on edge), gear teeth meshing perfectly. Strong rim light on gear teeth and page edges — bright white on black. Clean industrial aesthetic suggesting API integration and automated scheduling. No text, no logos. Aspect 1.7:1 (1024x600). Style: technical product photography, precision mechanics." --size 1024x600 --model openai/gpt-image-2 --provider openrouter

# E-COMMERCE (wide)
uv run ... --prompt "High-contrast silhouette for luminosity blend mode on dark blue. Three distinct layers representing 3PL stack: bottom — warehouse racking silhouette (vertical lines); middle — conveyor/diverter system (geometric shapes); top — last-mile van/motorcycle fleet (small silhouettes in formation). Strong backlight creating white outlines on each layer. Depth through layer separation. Clean, institutional scale. Aspect 2.3:1 (1024x448). Style: architectural photography, logistics infrastructure." --size 1024x448 --model openai/gpt-image-2 --provider openrouter

# COTIZADOR (ultra-wide)
uv run ... --prompt "High-contrast control panel for luminosity blend mode on dark blue. Clean dashboard silhouette: three large circular gauges (speedometer-style) side by side, bright white needles on black faces, tick marks at precise intervals. Center gauge needle at '60 min', left at 'Origen', right at 'Destino'. Thin horizontal data bars below. No numbers, no labels — pure form. Institutional precision, decision-support aesthetic. Aspect 3.4:1 (1024x300). Style: avionics panel, mission control." --size 1024x300 --model openai/gpt-image-2 --provider openrouter
```

---

## Testing Checklist

After generating, verify in browser dev tools:

- [ ] Image loads and applies `mix-blend-luminosity` correctly
- [ ] At 30% opacity on `#0636A5` bg, key shapes are visible but not overwhelming
- [ ] At 40% opacity on hover, detail emerges without washing out
- [ ] Scale transition (105%) feels smooth, no pixelation
- [ ] Works at mobile (single col, full width) and desktop (bento spans)
- [ ] No weird color artifacts from blend mode (luminosity should preserve blue hue)

---

## Notes for Future Iterations

- Consider generating **@2x** (2048px wide) for crisp retina on large spans
- The `sizes` prop in component: `(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw` — plan accordingly
- If blend mode causes issues, fallback: `mix-blend-overlay` or `bg-opacity-20` without blend
- Keep original images in `/public/img/generales/` as fallbacks