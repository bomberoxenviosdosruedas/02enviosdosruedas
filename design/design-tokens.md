# Design Tokens — Envíos DosRuedas v2.0

**Fuente única de verdad para todo el sistema de diseño**  
**Compatible:** Tailwind CSS v4, CSS Custom Properties, Figma Tokens, Style Dictionary  
**Basado en:** Paleta oficial 3 colores + Tipografía actual (Anton, IBM Plex Sans/Inter, Bebas Neue, Geist Mono)

---

## 🎨 1. Color Tokens (Primitivos)

### 1.1 Escalas de Marca (Brand Scales) — **NO MODIFICAR**

```json
{
  "color": {
    "brand": {
      "blue": {
        "50":  { "value": "#E6EEFE", "name": "blue-50",  "description": "Fondos ultra-claros, wrappers de card, alertas suaves" },
        "100": { "value": "#BACEFD", "name": "blue-100", "description": "Bordes suaves, divisores, estados inactivos" },
        "200": { "value": "#8EAFFB", "name": "blue-200", "description": "Enlaces secundarios, indicadores sutiles" },
        "300": { "value": "#628FF9", "name": "blue-300", "description": "Hover interactivo claro" },
        "400": { "value": "#3570F8", "name": "blue-400", "description": "Botones interactivos primarios, enlaces" },
        "500": { "value": "#0950F6", "name": "blue-500", "description": "Acento vibrante, detalles visuales" },
        "600": { "value": "#0742CA", "name": "blue-600", "description": "Hover/Active sobre fondos claros" },
        "700": { "value": "#0636A5", "name": "blue-700", "description": "PRIMARY — Headers, nav, secciones azul, texto principal" },
        "800": { "value": "#052D8C", "name": "blue-800", "description": "Hover sobre azul-700, texto sobre amarillo" },
        "900": { "value": "#04236B", "name": "blue-900", "description": "Máxima profundidad, texto sobre amarillo 500" },
        "950": { "value": "#021440", "name": "blue-950", "description": "Casi negro azulado, fondos hero oscuros" }
      },
      "yellow": {
        "50":  { "value": "#FFFDE6", "name": "yellow-50",  "description": "Fondos de alerta suave, consejos, estados especiales" },
        "100": { "value": "#FFFAB8", "name": "yellow-100", "description": "Bordes de atención inmediata, resaltado" },
        "200": { "value": "#FFF78A", "name": "yellow-200", "description": "Badges de estado, indicadores de ruteo" },
        "300": { "value": "#FFF45C", "name": "yellow-300", "description": "Hover CTA sobre fondo Azul 700" },
        "400": { "value": "#FFF12E", "name": "yellow-400", "description": "Hover CTA sobre fondo blanco/clear" },
        "500": { "value": "#FFEC01", "name": "yellow-500", "description": "CTA OFICIAL — Botones primarios, señales alta prioridad" },
        "600": { "value": "#E6D400", "name": "yellow-600", "description": "Active/Pressed CTA" }
      },
      "white": {
        "50": { "value": "#FFFFFF", "name": "white-50", "description": "BASE — Fondo páginas, interior cards, tablas, inputs" }
      }
    }
  }
}
```

### 1.2 Tokens Semánticos (Semantic Tokens) — **USAR EN CÓDIGO**

```json
{
  "color": {
    "semantic": {
      "primary": {
        "DEFAULT":    { "value": "{color.brand.blue.700}", "name": "primary" },
        "hover":      { "value": "{color.brand.blue.800}", "name": "primary-hover" },
        "active":     { "value": "{color.brand.blue.900}", "name": "primary-active" },
        "light":      { "value": "{color.brand.blue.50}",  "name": "primary-light" },
        "lighter":    { "value": "{color.brand.blue.100}", "name": "primary-lighter" },
        "border":     { "value": "{color.brand.blue.100}", "name": "primary-border" },
        "border-strong": { "value": "{color.brand.blue.200}", "name": "primary-border-strong" },
        "text":       { "value": "{color.brand.blue.700}", "name": "primary-text" },
        "text-on-primary": { "value": "{color.brand.white.50}", "name": "text-on-primary" }
      },
      "accent": {
        "DEFAULT":    { "value": "{color.brand.yellow.500}", "name": "accent" },
        "hover":      { "value": "{color.brand.yellow.400}", "name": "accent-hover" },
        "hover-dark": { "value": "{color.brand.yellow.300}", "name": "accent-hover-dark" },
        "active":     { "value": "{color.brand.yellow.600}", "name": "accent-active" },
        "light":      { "value": "{color.brand.yellow.50}",  "name": "accent-light" },
        "lighter":    { "value": "{color.brand.yellow.100}", "name": "accent-lighter" },
        "border":     { "value": "{color.brand.yellow.100}", "name": "accent-border" },
        "border-strong": { "value": "{color.brand.yellow.200}", "name": "accent-border-strong" },
        "text":       { "value": "{color.brand.blue.900}", "name": "accent-text" },
        "text-on-accent": { "value": "{color.brand.blue.900}", "name": "text-on-accent" }
      },
      "surface": {
        "DEFAULT":    { "value": "{color.brand.white.50}", "name": "surface" },
        "elevated":   { "value": "{color.brand.white.50}", "name": "surface-elevated" },
        "overlay":    { "value": "{color.brand.blue.50}",  "name": "surface-overlay" },
        "card-inner": { "value": "{color.brand.white.50}", "name": "surface-card-inner" },
        "card-outer": { "value": "{color.brand.blue.50}",  "name": "surface-card-outer" }
      },
      "text": {
        "primary":    { "value": "{color.brand.blue.700}", "name": "text-primary" },
        "secondary":  { "value": "{color.brand.blue.400}", "name": "text-secondary" },
        "tertiary":   { "value": "{color.brand.blue.300}", "name": "text-tertiary" },
        "inverse":    { "value": "{color.brand.white.50}", "name": "text-inverse" },
        "on-accent":  { "value": "{color.brand.blue.900}", "name": "text-on-accent" },
        "muted":      { "value": "{color.brand.blue.300}", "name": "text-muted" },
        "mono":       { "value": "{color.brand.blue.700}", "name": "text-mono" }
      },
      "border": {
        "DEFAULT":    { "value": "{color.brand.blue.100}", "name": "border-default" },
        "strong":     { "value": "{color.brand.blue.200}", "name": "border-strong" },
        "focus":      { "value": "{color.brand.blue.700}", "name": "border-focus" },
        "accent":     { "value": "{color.brand.yellow.500}", "name": "border-accent" },
        "error":      { "value": "#DC2626", "name": "border-error" },
        "success":    { "value": "#16A34A", "name": "border-success" }
      },
      "status": {
        "success":    { "value": "#16A34A", "name": "success", "light": "#DCFCE7", "text": "#166534" },
        "warning":    { "value": "#F59E0B", "name": "warning", "light": "#FEF3C7", "text": "#92400E" },
        "error":      { "value": "#DC2626", "name": "error",   "light": "#FEF2F2", "text": "#991B1B" },
        "info":       { "value": "{color.brand.blue.400}", "name": "info", "light": "{color.brand.blue.50}", "text": "{color.brand.blue.700}" }
      },
      "focus": {
        "ring":       { "value": "{color.brand.blue.500}", "name": "focus-ring" },
        "ring-offset": { "value": "{color.brand.white.50}", "name": "focus-ring-offset" }
      }
    }
  }
}
```

### 1.3 Mapeo Tailwind v4 (`globals.css` @theme)

```css
@theme {
  /* --- BRAND BLUE --- */
  --color-blue-50:  #E6EEFE;
  --color-blue-100: #BACEFD;
  --color-blue-200: #8EAFFB;
  --color-blue-300: #628FF9;
  --color-blue-400: #3570F8;
  --color-blue-500: #0950F6;
  --color-blue-600: #0742CA;
  --color-blue-700: #0636A5;  /* PRIMARY */
  --color-blue-800: #052D8C;
  --color-blue-900: #04236B;
  --color-blue-950: #021440;

  /* --- BRAND YELLOW --- */
  --color-yellow-50:  #FFFDE6;
  --color-yellow-100: #FFFAB8;
  --color-yellow-200: #FFF78A;
  --color-yellow-300: #FFF45C;
  --color-yellow-400: #FFF12E;
  --color-yellow-500: #FFEC01;  /* ACCENT / CTA */
  --color-yellow-600: #E6D400;

  /* --- BRAND WHITE --- */
  --color-white-50: #FFFFFF;

  /* --- SEMANTIC ALIASES (para uso en componentes) --- */
  --color-primary:        var(--color-blue-700);
  --color-primary-hover:  var(--color-blue-800);
  --color-primary-light:  var(--color-blue-50);
  --color-primary-border: var(--color-blue-100);

  --color-accent:         var(--color-yellow-500);
  --color-accent-hover:   var(--color-yellow-400);
  --color-accent-hover-dark: var(--color-yellow-300);
  --color-accent-light:   var(--color-yellow-50);
  --color-accent-border:  var(--color-yellow-100);

  --color-surface:        var(--color-white-50);
  --color-surface-overlay: var(--color-blue-50);

  --color-text-primary:   var(--color-blue-700);
  --color-text-secondary: var(--color-blue-400);
  --color-text-inverse:   var(--color-white-50);
  --color-text-on-accent: var(--color-blue-900);

  --color-border-default: var(--color-blue-100);
  --color-border-focus:   var(--color-blue-700);
  --color-border-accent:  var(--color-yellow-500);

  --color-focus-ring:     var(--color-blue-500);

  /* Status colors (semantic) */
  --color-success:        #16A34A;
  --color-success-light:  #DCFCE7;
  --color-success-text:   #166534;
  --color-warning:        #F59E0B;
  --color-warning-light:  #FEF3C7;
  --color-warning-text:   #92400E;
  --color-error:          #DC2626;
  --color-error-light:    #FEF2F2;
  --color-error-text:     #991B1B;
}
```

---

## 🔤 2. Typography Tokens

### 2.1 Font Families

```json
{
  "fontFamily": {
    "sans":      ["IBM Plex Sans", "Inter", "system-ui", "sans-serif"],
    "display":   ["Anton", "Bebas Neue", "sans-serif"],
    "subheading": ["Bebas Neue", "IBM Plex Sans", "sans-serif"],
    "mono":      ["Geist Mono", "JetBrains Mono", "Fira Code", "ui-monospace", "monospace"]
  }
}
```

### 2.2 Font Weights

```json
{
  "fontWeight": {
    "light":    300,
    "normal":   400,
    "medium":   500,
    "semibold": 600,
    "bold":     700,
    "extrabold": 800,
    "black":    900
  }
}
```

### 2.3 Type Scale (Fluid/Clamp)

| Token | Clase Tailwind | Tamaño (clamp) | Line Height | Letter Spacing | Weight | Font Family | Uso |
|-------|----------------|----------------|-------------|----------------|--------|-------------|-----|
| `display` | `text-display` | `clamp(3rem, 5vw, 4.5rem)` | 1.05 | 0.02em | 800 | display | Hero H1 monumental |
| `h1` | `text-h1` | `clamp(2.25rem, 4vw, 3rem)` | 1.1 | -0.015em | 700 | display | Sección principal |
| `h2` | `text-h2` | `clamp(1.75rem, 3vw, 2.25rem)` | 1.2 | -0.01em | 700 | display | Sub-sección |
| `h3` | `text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 1.4 | 0.02em | 600 | subheading | Card titles, H3 |
| `h4` | `text-h4` | `clamp(1.125rem, 1.5vw, 1.25rem)` | 1.4 | 0.02em | 600 | subheading | Micro-headings |
| `body-lg` | `text-body-lg` | `1.125rem` (18px) | 1.6 | 0 | 400 | sans | Lead paragraphs |
| `body` | `text-body` / `text-base` | `1rem` (16px) | 1.5 | 0 | 400 | sans | Body text estándar |
| `body-sm` | `text-body-sm` / `text-sm` | `0.875rem` (14px) | 1.5 | 0 | 400 | sans | Meta, captions |
| `label` | `text-label` | `0.75rem` (12px) | 1.5 | 0.05em | 700 | subheading | Form labels, badges |
| `mono-lg` | `text-mono-lg` | `1.5rem` (24px) | 1.2 | 0 | 700 | mono | Prices hero, tracking IDs large |
| `mono` | `text-mono` | `1rem` (16px) | 1.5 | 0 | 500 | mono | Prices, ETAs, codes |
| `mono-sm` | `text-mono-sm` | `0.875rem` (14px) | 1.5 | 0 | 500 | mono | Metadata, timestamps |
| `kinetic` | `kinetic-font-stretch` | (inherit) | (inherit) | 0→0.02em | (inherit) | display | Hover stretch effect |

### 2.4 Tailwind v4 `@utility` Classes

```css
@utility text-display {
  font-family: var(--font-display);
  font-size: clamp(3rem, 5vw, 4.5rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-wrap: balance;
  font-weight: 800;
}

@utility text-h1 {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 4vw, 3rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  text-wrap: balance;
  font-weight: 700;
}

@utility text-h2 {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  text-wrap: balance;
  font-weight: 700;
}

@utility text-h3 {
  font-family: var(--font-subheading);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  line-height: 1.4;
  letter-spacing: 0.02em;
  text-wrap: pretty;
  font-weight: 600;
}

@utility text-h4 {
  font-family: var(--font-subheading);
  font-size: clamp(1.125rem, 1.5vw, 1.25rem);
  line-height: 1.4;
  letter-spacing: 0.02em;
  font-weight: 600;
}

@utility text-body {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

@utility text-body-lg {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  line-height: 1.6;
  font-weight: 400;
}

@utility text-label {
  font-family: var(--font-subheading);
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 0.05em;
  font-weight: 700;
  text-transform: uppercase;
}

@utility text-mono {
  font-family: var(--font-mono);
  font-size: 1rem;
  line-height: 1.5;
  font-variant-numeric: tabular-nums;
  font-weight: 500;
}

@utility text-mono-lg {
  font-family: var(--font-mono);
  font-size: 1.5rem;
  line-height: 1.2;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

@utility kinetic-font-stretch {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1),
              letter-spacing 0.4s cubic-bezier(0.25, 1, 0.5, 1),
              color 0.3s ease,
              background-color 0.3s ease;
  transform-origin: left;
  will-change: transform, letter-spacing;
}

@utility kinetic-font-stretch:hover {
  transform: scaleX(1.1);
  letter-spacing: 0.02em;
}
```

---

## 📐 3. Spacing & Layout Tokens

### 3.1 Base Spacing Scale (4px base)

```json
{
  "spacing": {
    "0":     "0",
    "1":     "0.25rem",  /* 4px  */
    "2":     "0.5rem",   /* 8px  */
    "3":     "0.75rem",  /* 12px */
    "4":     "1rem",     /* 16px */
    "5":     "1.25rem",  /* 20px */
    "6":     "1.5rem",   /* 24px */
    "7":     "1.75rem",  /* 28px */
    "8":     "2rem",     /* 32px */
    "9":     "2.25rem",  /* 36px */
    "10":    "2.5rem",   /* 40px */
    "11":    "2.75rem",  /* 44px */
    "12":    "3rem",     /* 48px */
    "14":    "3.5rem",   /* 56px */
    "16":    "4rem",     /* 64px */
    "20":    "5rem",     /* 80px */
    "24":    "6rem",     /* 96px */
    "28":    "7rem",     /* 112px */
    "32":    "8rem",     /* 128px */
    "36":    "9rem",     /* 144px */
    "40":    "10rem",    /* 160px */
    "44":    "11rem",    /* 176px */
    "48":    "12rem",    /* 192px */
    "52":    "13rem",    /* 208px */
    "56":    "14rem",    /* 224px */
    "60":    "15rem",    /* 240px */
    "64":    "16rem",    /* 256px */
    "72":    "18rem",    /* 288px */
    "80":    "20rem",    /* 320px */
    "96":    "24rem"     /* 384px */
  }
}
```

### 3.2 Semantic Spacing

```json
{
  "spacing": {
    "section": {
      "sm":   "4rem",    /* 64px  - py-16 */
      "md":   "6rem",    /* 96px  - py-24 */
      "lg":   "8rem",    /* 128px - py-32 */
      "xl":   "9rem"     /* 144px - py-36 */
    },
    "container": {
      "max": "80rem",    /* 1280px - max-w-7xl */
      "pad-mobile": "1rem",   /* px-4 */
      "pad-tablet": "1.5rem", /* px-6 */
      "pad-desktop": "2rem"   /* px-8 */
    },
    "card": {
      "inner": "1.5rem",  /* p-6 */
      "outer": "0.5rem"   /* p-2 (bezel gap) */
    },
    "component": {
      "btn-h": "2.5rem",  /* h-10 = 40px min touch */
      "btn-h-lg": "2.75rem", /* h-11 = 44px */
      "input-h": "2.75rem",  /* h-11 = 44px */
      "gap-xs": "0.5rem",    /* gap-2 */
      "gap-sm": "0.75rem",   /* gap-3 */
      "gap-md": "1rem",      /* gap-4 */
      "gap-lg": "1.5rem",    /* gap-6 */
      "gap-xl": "2rem"       /* gap-8 */
    }
  }
}
```

### 3.3 Breakpoints

```json
{
  "breakpoints": {
    "xs":   "320px",   /* Mobile portrait */
    "sm":   "640px",   /* Mobile landscape */
    "md":   "768px",   /* Tablet portrait */
    "lg":   "1024px",  /* Tablet landscape / small desktop */
    "xl":   "1280px",  /* Desktop */
    "2xl":  "1536px",  /* Large desktop */
    "3xl":  "1920px"   /* Ultra wide */
  }
}
```

### 3.4 Container Queries (Named)

```css
@utility container-page {
  max-width: 80rem; /* 1280px */
  margin-inline: auto;
  padding-inline: 1rem; /* mobile */
}

@media (min-width: 640px) {
  @utility container-page { padding-inline: 1.5rem; }
}

@media (min-width: 1024px) {
  @utility container-page { padding-inline: 2rem; }
}
```

---

## 🔲 4. Border Radius Tokens

```json
{
  "borderRadius": {
    "none":  "0",
    "xs":    "0.125rem",  /* 2px  - tooltips, badges diminutos */
    "sm":    "0.25rem",   /* 4px  - inputs, botones estándar (DEFAULT) */
    "md":    "0.375rem",  /* 6px  - dropdowns, modales medianos */
    "lg":    "0.5rem",    /* 8px  - cards estándar */
    "xl":    "0.75rem",   /* 12px - cards prominentes, bezel outer */
    "2xl":   "1rem",      /* 16px - contenedores grandes, hero cards */
    "3xl":   "1.5rem",    /* 24px - modal full, banners */
    "full":  "9999px",    /* pill - badges, CTA nested pill */
    "bezel-outer": "1rem",     /* 16px - double bezel outer */
    "bezel-inner": "0.75rem"   /* 12px - double bezel inner (outer - 4px) */
  }
}
```

**Regla Double-Bezel:** `bezel-inner = bezel-outer - 0.25rem` (4px gap)

---

## 🌫️ 5. Shadow & Elevation Tokens

### 5.1 Structural Shadows (Blue-based)

```json
{
  "boxShadow": {
    "xs":       "0 1px 2px rgba(6, 54, 165, 0.04)",
    "sm":       "0 2px 4px rgba(6, 54, 165, 0.06), 0 1px 2px rgba(6, 54, 165, 0.03)",
    "md":       "0 4px 8px rgba(6, 54, 165, 0.08), 0 2px 4px rgba(6, 54, 165, 0.04)",
    "lg":       "0 8px 16px rgba(6, 54, 165, 0.1), 0 4px 8px rgba(6, 54, 165, 0.06)",
    "xl":       "0 16px 32px rgba(6, 54, 165, 0.12), 0 8px 16px rgba(6, 54, 165, 0.08)",
    "2xl":      "0 25px 50px -12px rgba(6, 54, 165, 0.15)",
    "inner":    "inset 0 2px 4px rgba(6, 54, 165, 0.06)",
    "bezel":    "inset 0 1px 0 rgba(255, 255, 255, 0.1)",
    "elevated": "0 20px 40px -8px rgba(6, 54, 165, 0.2), 0 8px 16px -4px rgba(6, 54, 165, 0.12)",
    "hover-lift": "0 32px 64px -12px rgba(6, 54, 165, 0.25)",
    "float":    "0 25px 50px -12px rgba(6, 54, 165, 0.15)"
  }
}
```

### 5.2 Accent Shadows (Yellow-based)

```json
{
  "boxShadow": {
    "accent-sm":  "0 2px 4px rgba(255, 236, 1, 0.15)",
    "accent-md":  "0 4px 8px rgba(255, 236, 1, 0.2), 0 2px 4px rgba(255, 236, 1, 0.1)",
    "accent-lg":  "0 8px 16px rgba(255, 236, 1, 0.3), 0 4px 8px rgba(255, 236, 1, 0.2)",
    "cta-glow":   "0 0 40px rgba(255, 236, 1, 0.4), 0 0 80px rgba(255, 236, 1, 0.15)",
    "cta-glow-sm": "0 0 20px rgba(255, 236, 1, 0.3)"
  }
}
```

### 5.3 Premium/Minimalist Shadows

```json
{
  "boxShadow": {
    "minimal": "0 4px 20px -2px rgba(6, 54, 165, 0.04), 0 2px 6px -1px rgba(6, 54, 165, 0.02)",
    "soft-elevation": "0 12px 24px -10px rgba(6, 54, 165, 0.12)",
    "antigravity-deep": "0 30px 60px -15px rgba(6, 54, 165, 0.3), 0 0 50px -10px rgba(255, 236, 1, 0.15)"
  }
}
```

### 5.4 Focus Rings (A11y)

```json
{
  "boxShadow": {
    "focus":        "0 0 0 2px var(--color-focus-ring), 0 0 0 4px var(--color-focus-ring-offset)",
    "focus-inset":  "inset 0 0 0 2px var(--color-focus-ring)"
  }
}
```

---

## 🎞️ 6. Motion & Animation Tokens

### 6.1 Durations

```json
{
  "transitionDuration": {
    "instant": "50ms",   /* color-only changes */
    "fast":    "150ms",  /* hover states, focus rings */
    "base":    "200ms",  /* default micro-interactions */
    "normal":  "300ms",  /* card hover, dropdown, modal */
    "slow":    "400ms",  /* page transitions, complex */
    "slower":  "500ms",  /* hero entrance, carousels */
    "slowest": "800ms"   /* counter animations */
  }
}
```

### 6.2 Easing Curves

```json
{
  "transitionTimingFunction": {
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",      /* Standard */
    "ease-out":    "cubic-bezier(0, 0, 0.2, 1)",         /* Entrance */
    "ease-in":     "cubic-bezier(0.4, 0, 1, 1)",         /* Exit */
    "snappy":      "cubic-bezier(0.2, 0.8, 0.2, 1)",     /* Spring-like */
    "bounce":      "cubic-bezier(0.34, 1.56, 0.64, 1)",  /* Playful */
    "sharp":       "cubic-bezier(0.4, 0, 0.6, 1)",       /* Quick feedback */
    "smooth":      "cubic-bezier(0.25, 1, 0.5, 1)"       /* Card hover, float */
  }
}
```

### 6.3 Keyframes (Predefined)

```json
{
  "keyframes": {
    "float-slow": {
      "0%, 100%": { "transform": "translateY(0)" },
      "50%":      { "transform": "translateY(-5px)" }
    },
    "pulse-subtle": {
      "0%, 100%": { "opacity": "1", "transform": "scale(1)" },
      "50%":      { "opacity": "0.8", "transform": "scale(1.03)" }
    },
    "border-pulse": {
      "0%, 100%": { "border-color": "rgba(255, 236, 1, 0.3)" },
      "50%":      { "border-color": "rgba(255, 236, 1, 0.8)" }
    },
    "shimmer": {
      "0%":   { "background-position": "-200% 0" },
      "100%": { "background-position": "200% 0" }
    },
    "counter-up": {
      "0%":   { "transform": "translateY(100%)", "opacity": "0" },
      "100%": { "transform": "translateY(0)", "opacity": "1" }
    },
    "accordion-down": {
      "0%": { "height": "0" },
      "100%": { "height": "var(--radix-accordion-content-height)" }
    },
    "accordion-up": {
      "0%": { "height": "var(--radix-accordion-content-height)" },
      "100%": { "height": "0" }
    },
    "fade-in": {
      "0%": { "opacity": "0" },
      "100%": { "opacity": "1" }
    },
    "slide-up": {
      "0%": { "opacity": "0", "transform": "translateY(10px)" },
      "100%": { "opacity": "1", "transform": "translateY(0)" }
    },
    "slide-down": {
      "0%": { "opacity": "0", "transform": "translateY(-10px)" },
      "100%": { "opacity": "1", "transform": "translateY(0)" }
    }
  }
}
```

### 6.4 Animation Utilities

```css
@utility animate-float-slow {
  animation: float-slow 4s ease-in-out infinite;
}

@utility animate-pulse-subtle {
  animation: pulse-subtle 3s ease-in-out infinite;
}

@utility animate-border-pulse {
  animation: border-pulse 2s ease-in-out infinite;
}

@utility animate-shimmer {
  animation: shimmer 2.5s ease-in-out infinite;
}

@utility animate-counter-up {
  animation: counter-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@utility animate-accordion-down {
  animation: accordion-down 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@utility animate-accordion-up {
  animation: accordion-up 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

---

## 🌈 7. Gradient Tokens

```json
{
  "gradients": {
    "blue": "linear-gradient(135deg, #0636A5 0%, #002068 100%)",
    "blue-light": "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #BFDBFE 100%)",
    "yellow": "linear-gradient(135deg, #FFEC01 0%, #E6B800 100%)",
    "mixed": "linear-gradient(135deg, #0636A5 0%, #002068 50%, #FFEC01 100%)",
    "surface": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
    "dark": "linear-gradient(180deg, #151B2D 0%, #002068 50%, #001035 100%)",
    "hero-mesh": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(6, 54, 165, 0.15) 0%, transparent 70%)",
    "shimmer-bg": "linear-gradient(90deg, var(--color-blue-50) 25%, var(--color-blue-100) 50%, var(--color-blue-50) 75%)"
  }
}
```

### 7.1 Utility Classes

```css
@utility gradient-blue { background: var(--gradient-blue); }
@utility gradient-blue-light { background: var(--gradient-blue-light); }
@utility gradient-yellow { background: var(--gradient-yellow); }
@utility gradient-mixed { background: var(--gradient-mixed); }
@utility gradient-surface { background: var(--gradient-surface); }
@utility gradient-dark { background: var(--gradient-dark); }
@utility gradient-hero-mesh { background: var(--gradient-hero-mesh); }
@utility shimmer-bg {
  background: var(--gradient-shimmer-bg);
  background-size: 200% 100%;
  animation: shimmer 2.5s ease-in-out infinite;
}
```

---

## 🔍 8. Glassmorphism & Effects

```json
{
  "effects": {
    "glassmorphism": {
      "backdrop-filter": "blur(12px)",
      "background": "rgba(6, 54, 165, 0.45)",
      "border": "1px solid rgba(255, 255, 255, 0.12)"
    },
    "glassmorphism-premium": {
      "backdrop-filter": "blur(20px)",
      "background": "linear-gradient(135deg, rgba(6, 54, 165, 0.4) 0%, rgba(0, 32, 104, 0.25) 100%)",
      "border": "1px solid rgba(255, 255, 255, 0.18)",
      "box-shadow": "var(--shadow-antigravity-deep)"
    },
    "glass-card": {
      "backdrop-filter": "blur(12px)",
      "background": "rgba(255, 255, 255, 0.08)",
      "border": "1px solid rgba(255, 255, 255, 0.15)"
    },
    "glass-card-blue": {
      "backdrop-filter": "blur(16px)",
      "background": "rgba(6, 54, 165, 0.08)",
      "border": "1px solid rgba(6, 54, 165, 0.2)"
    }
  }
}
```

### 8.1 Utilities

```css
@utility glassmorphism { /* ... */ }
@utility glassmorphism-premium { /* ... */ }
@utility glass-card { /* ... */ }
@utility glass-card-blue { /* ... */ }
```

---

## 🧱 9. Component Token Overrides (cva Variants)

### 9.1 Button Variants

```typescript
// buttonVariants (cva) - Tokens semánticos únicamente
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // PRIMARY - Blue solid
        default: "bg-brand-blue text-white hover:bg-brand-blue-600 transition-colors duration-200",
        // ACCENT - Yellow CTA (OFICIAL)
        glow: "bg-brand-yellow-500 text-brand-blue-700 hover:bg-brand-yellow-400 transition-all duration-300 ease-out hover:shadow-cta-glow active:scale-95 font-bold border border-brand-yellow-500",
        // ELEVATED - White on blue section
        elevated: "bg-white text-brand-blue-700 border border-brand-blue-100 shadow-elevated hover:shadow-hover-lift hover:-translate-y-1 transition-all duration-300 ease-out active:translate-y-0 active:scale-95",
        // HAPTIC - Pressed feel
        haptic: "bg-brand-blue-700 text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95 active:shadow-none shadow-md",
        // OUTLINE - Secondary
        outline: "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue-50 transition-all",
        // GHOST - Minimal
        ghost: "hover:bg-brand-blue-50 text-brand-blue transition-colors",
        // LINK - Inline
        link: "text-brand-blue-400 underline-offset-4 hover:underline hover:text-brand-blue-600"
      },
      size: {
        sm: "h-9 rounded-md px-3 text-xs",
        default: "h-10 px-4 py-2 text-sm rounded-xl",
        lg: "h-11 rounded-xl px-8 text-base",
        xl: "h-12 rounded-xl px-10 text-lg",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
)
```

### 9.2 Card Variants

```typescript
const cardVariants = cva("rounded-lg border bg-card text-card-foreground shadow-sm", {
  variants: {
    variant: {
      default: "",
      // DOUBLE BEZEL (Oficial per DESIGN.md)
      bezel: "double-bezel-outer p-2 shadow-float-shadow bg-brand-blue-50 border-brand-blue-100",
      // GLASS
      glass: "glass-card",
      // ELEVATED with hover lift
      elevated: "shadow-elevated hover:shadow-hover-lift transition-shadow duration-300",
      // MINIMAL - clean card
      minimal: "bg-white border-brand-blue-100 shadow-minimal hover:border-brand-blue-300 hover:shadow-soft-elevation transition-all duration-300"
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    }
  }
})
```

### 9.3 Input Variants

```typescript
const inputVariants = cva(
  "w-full bg-white border-2 transition-all duration-200 text-brand-blue-700 placeholder:text-brand-blue-300 font-sans",
  {
    variants: {
      state: {
        default: "border-brand-blue-100 hover:border-brand-blue-200",
        focus: "border-brand-blue-700 ring-2 ring-brand-blue-500/20 outline-none",
        error: "border-red-500 ring-2 ring-red-500/20 outline-none",
        success: "border-green-500 ring-2 ring-green-500/20 outline-none",
        disabled: "border-brand-blue-100 bg-brand-blue-50/50 cursor-not-allowed"
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        default: "h-11 px-4 text-base rounded-xl",
        lg: "h-12 px-5 text-lg rounded-xl"
      }
    },
    defaultVariants: { state: "default", size: "default" }
  }
)
```

### 9.4 Badge Variants

```typescript
const badgeVariants = cva(
  "inline-flex items-center font-subheading uppercase tracking-widest text-xs rounded-full px-2.5 py-0.5 border",
  {
    variants: {
      variant: {
        // URGENT/EXPRESS - Yellow bg, Blue text
        urgent: "bg-brand-yellow-500 text-brand-blue-700 border-brand-yellow-500 font-bold",
        // SECURE/TRUST - Blue bg, White text
        secure: "bg-brand-blue-700 text-white border-brand-blue-700",
        // ECONOMIC - Blue 100 bg, Blue 700 text
        economic: "bg-brand-blue-100 text-brand-blue-700 border-brand-blue-200",
        // FLEX/INTEGRATION - Yellow 100 bg, Blue 700 text
        flex: "bg-brand-yellow-100 text-brand-blue-700 border-brand-yellow-200",
        // NEUTRAL - White bg, Blue text
        neutral: "bg-white text-brand-blue-700 border-brand-blue-200",
        // OUTLINE - Transparent, Blue border
        outline: "bg-transparent text-brand-blue-700 border-brand-blue-300 hover:bg-brand-blue-50"
      },
      size: {
        sm: "px-2 py-0.5 text-[10px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm"
      }
    },
    defaultVariants: { variant: "neutral", size: "default" }
  }
)
```

---

## 🌙 10. Dark Mode Tokens

> **NOTA:** Envíos DosRuedas es **light-first**. Dark mode solo para dashboard/portal cliente opcional.

```json
{
  "darkMode": {
    "color": {
      "background": { "DEFAULT": "#021440", "secondary": "#04236B" },
      "surface": { "DEFAULT": "#052D8C", "elevated": "#0636A5" },
      "text": { "primary": "#FFFFFF", "secondary": "#BACEFD", "muted": "#8EAFFB" },
      "border": { "DEFAULT": "#0742CA", "strong": "#0950F6" },
      "primary": { "DEFAULT": "#3570F8", "hover": "#628FF9" },
      "accent": { "DEFAULT": "#FFEC01", "hover": "#FFF12E", "text": "#0636A5" },
      "focus-ring": "#628FF9"
    }
  }
}
```

---

## 📦 11. Z-Index Scale

```json
{
  "zIndex": {
    "hide": -1,
    "base": 0,
    "dropdown": 100,
    "sticky": 200,
    "fixed": 300,
    "modal-backdrop": 400,
    "modal": 500,
    "popover": 600,
    "tooltip": 700,
    "toast": 800,
    "header": 900,
    "max": 9999
  }
}
```

---

## ♿ 11. Accessibility Tokens

```json
{
  "a11y": {
    "focusRing": {
      "width": "2px",
      "offset": "2px",
      "color": "{color.focus-ring}"
    },
    "minTouchTarget": "44px",
    "minTouchTargetComfy": "48px",
    "contrast": {
      "aa": "4.5:1",
      "aaLarge": "3:1",
      "aaa": "7:1",
      "aaaLarge": "4.5:1"
    },
    "skipLink": {
      "offset": "-100%",
      "focusOffset": "0"
    },
    "motionReduce": {
      "duration": "0.01ms",
      "animation": "none"
    }
  }
}
```

---

## 📐 12. Grid & Layout Tokens

```json
{
  "grid": {
    "columns": 12,
    "gutter": "1.5rem", /* 24px */
    "container": {
      "maxWidth": "80rem", /* 1280px */
      "padding": {
        "mobile": "1rem",
        "tablet": "1.5rem",
        "desktop": "2rem"
      }
    },
    "breakpoints": {
      "mobile": "1",
      "tablet": "2",
      "desktop": "4",
      "wide": "4"
    }
  },
  "sectionAlternation": {
    "pattern": ["brand-blue", "white", "brand-blue-50", "white"],
    "description": "Alternancia estricta: Azul 700 → Blanco → Azul 50 → Blanco"
  }
}
```

---

## 🎯 13. Iconography Tokens

```json
{
  "icon": {
    "size": {
      "xs": "0.75rem",   /* 12px */
      "sm": "1rem",      /* 16px */
      "md": "1.25rem",   /* 20px */
      "lg": "1.5rem",    /* 24px */
      "xl": "2rem",      /* 32px */
      "2xl": "3rem"      /* 48px */
    },
    "strokeWidth": "2px",
    "strokeLinecap": "round",
    "strokeLinejoin": "round",
    "color": {
      "default": "{color.text.primary}",
      "on-primary": "{color.text.inverse}",
      "on-accent": "{color.text.on-accent}",
      "accent": "{color.accent.DEFAULT}",
      "muted": "{color.text.muted}"
    }
  }
}
```

---

## 📋 14. Component Anatomy Tokens (Reference)

### 14.1 Double-Bezel Card

```
┌─────────────────────────────────────┐
│  OUTER (bezel-outer)                │
│  bg: blue-50  │  border: blue-100   │
│  radius: 1rem  │  padding: 0.5rem   │
│  ┌───────────────────────────────┐  │
│  │ INNER (bezel-inner)            │  │
│  │ bg: white  │  radius: 0.75rem  │  │
│  │ shadow: inset                  │  │
│  │ ┌─────────────────────────┐    │  │
│  │ │ CONTENT                 │    │  │
│  │ └─────────────────────────┘    │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 14.2 CTA Nested Pill

```
┌────────────────────────────────────────┐
│  BUTTON (rounded-full)                 │
│  bg: yellow-500  text: blue-900        │
│  ┌──────────────────────────────────┐  │
│  │ "Ver más"                        │  │
│  └──────────────────────────────────┘  │
│  ┌──────┐                              │
│  │  →   │  ICON PILL (rounded-full)   │
│  │      │  bg: white/20  text: yellow │
│  └──────┘                              │
└────────────────────────────────────────┘
```

### 14.3 Input with Icon

```
┌────────────────────────────────────────┐
│  LABEL (text-label, uppercase)         │
├────────────────────────────────────────┤
│  ┌──────────────────────────────────┐  │
│  │ 🔍  Placeholder text             │  │  border: 2px blue-100
│  └──────────────────────────────────┘  │  focus: border blue-700 + ring
└────────────────────────────────────────┘
```

---

## 🔧 15. Implementation Checklist (Tailwind v4)

### 15.1 `globals.css` — Required @theme entries

```css
@theme {
  /* Colors - ALL brand colors as --color-* */
  --color-blue-50: #E6EEFE;
  --color-blue-100: #BACEFD;
  --color-blue-200: #8EAFFB;
  --color-blue-300: #628FF9;
  --color-blue-400: #3570F8;
  --color-blue-500: #0950F6;
  --color-blue-600: #0742CA;
  --color-blue-700: #0636A5;
  --color-blue-800: #052D8C;
  --color-blue-900: #04236B;
  --color-blue-950: #021440;

  --color-yellow-50: #FFFDE6;
  --color-yellow-100: #FFFAB8;
  --color-yellow-200: #FFF78A;
  --color-yellow-300: #FFF45C;
  --color-yellow-400: #FFF12E;
  --color-yellow-500: #FFEC01;
  --color-yellow-600: #E6D400;

  --color-white-50: #FFFFFF;

  /* Semantic aliases */
  --color-primary: var(--color-blue-700);
  --color-accent: var(--color-yellow-500);
  --color-surface: var(--color-white-50);
  --color-text-primary: var(--color-blue-700);

  /* Fonts */
  --font-sans: "IBM Plex Sans", "Inter", system-ui, sans-serif;
  --font-display: "Anton", "Bebas Neue", sans-serif;
  --font-subheading: "Bebas Neue", "IBM Plex Sans", sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", "Fira Code", ui-monospace, monospace;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-minimal: 0 4px 20px -2px rgba(6, 54, 165, 0.04), 0 2px 6px -1px rgba(6, 54, 165, 0.02);
  --shadow-elevated: 0 20px 40px -8px rgba(6, 54, 165, 0.2), 0 8px 16px -4px rgba(6, 54, 165, 0.12);
  --shadow-hover-lift: 0 32px 64px -12px rgba(6, 54, 165, 0.25);
  --shadow-cta-glow: 0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15);
  --shadow-antigravity-deep: 0 30px 60px -15px rgba(6, 54, 165, 0.3), 0 0 50px -10px rgba(255, 236, 1, 0.15);

  /* Transitions */
  --animate-float-slow: float-slow 4s ease-in-out infinite;
  --animate-pulse-subtle: pulse-subtle 3s ease-in-out infinite;

  /* Keyframes */
  @keyframes float-slow { ... }
  @keyframes pulse-subtle { ... }
}
```

### 15.2 Required Utilities (`@utility`)

- [ ] `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-h4`
- [ ] `text-body`, `text-body-lg`, `text-label`, `text-mono`, `text-mono-lg`
- [ ] `kinetic-font-stretch`
- [ ] `gradient-blue`, `gradient-yellow`, `gradient-mixed`, `gradient-surface`, `gradient-dark`
- [ ] `glassmorphism`, `glassmorphism-premium`, `glass-card`, `glass-card-blue`
- [ ] `card-minimal`, `hover-float`, `float-tilt-card`
- [ ] `cta-nested-pill`, `cta-nested-icon`
- [ ] `double-bezel-outer`, `double-bezel-inner`
- [ ] `shimmer-bg`, `animate-shimmer`
- [ ] `animate-counter-up`, `animate-float-slow`
- [ ] `bezel-outer`, `bezel-inner`
- [ ] `accent-line-top`, `accent-line-left`

### 15.3 Component Library Coverage

| Componente | Implementado | Tokens Usados | Pendiente |
|------------|--------------|---------------|-----------|
| Button | ✅ | variant/size cva | — |
| Card | ✅ | bezel/glass/elevated | — |
| Input | ✅ | state/size cva | — |
| Badge | ✅ | variant/size cva | — |
| Accordion | ✅ | border-blue-100 | — |
| Dropdown/Nav | ✅ | motion/react | — |
| Modal/Sheet | ⚠️ | — | glassmorphism-premium |
| Toast | ⚠️ | — | accent shadows |
| Tooltip | ❌ | — | glass-card-blue |
| Table | ⚠️ | mono font | border-blue-100 |
| Pagination | ❌ | — | — |
| Tabs | ❌ | — | accent-line-top |
| Stepper | ⚠️ | Anton numbers | — |
| Avatar | ❌ | — | — |
| Progress | ❌ | — | gradient-yellow |

---

## 📝 16. Changelog

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | 2025-07-17 | Extracto de DESIGN.md original |
| 2.0 | 2025-07-18 | **Completa restructuración**: Semantic tokens, fluid typography, double-bezel formalizado, CTA nested pill, motion tokens, glassmorphism, dark mode, a11y tokens, component anatomy, implementation checklist |

---

**Fin del Documento** — *Estos tokens son la única fuente de verdad. Cualquier valor hardcodeado en componentes que no coincida es un bug.*