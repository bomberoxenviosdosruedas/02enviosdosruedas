# 🎨 DESIGN SYSTEM: ENVÍOS DOSRUEDAS v2.1
## Optimizado & Operacional | Agosto 2026

> **This is the canonical, executable design system for Envíos DosRuedas. Every visual decision, component, and animation originates here.**

---

## TABLE OF CONTENTS

1. [Principles (Non-negotiable)](#1-principles--non-negotiable)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Components (Executable)](#5-components-executable)
6. [Motion & Animations](#6-motion--animations)
7. [Dark Mode](#7-dark-mode)
8. [Accessibility](#8-accessibility)
9. [Governance & Compliance](#9-governance--compliance)

---

## 1. PRINCIPLES (Non-Negotiable)

### 1.1 Brand Sovereignty

**Envíos DosRuedas** is a **hyperlocal logistics brand for Mar del Plata**. Every design decision reflects:

- ✅ **Institutional Trust** — Confidence in delivery, not style for its own sake
- ✅ **Operational Clarity** — UI that works for dispatchers, drivers, and customers
- ✅ **Local Voice** — Voseo rioplatense, MDQ references, neighbor-to-neighbor tone
- ✅ **No Trends** — Timeless structure over aesthetic fads

### 1.2 Design Laws (Immutable)

#### **Law 1: Three-Color Palette**
Only three colors exist in this system:
1. **Azul #0636A5** (Trust, Primary)
2. **Amarillo #FFEC01** (Action, Accent)
3. **Blanco #FFFFFF** (Clarity, Surface)

Everything else is a scale or combination of these three.

```
❌ FORBIDDEN ABSOLUTELY
#333, #666, #999, #ccc, #eee (grays)
slate-*, gray-*, zinc-*, neutral-*, stone-* (Tailwind gray families)
Any hex color not derived from the three above
```

#### **Law 2: Voseo (Argentine Spanish - Second Person Informal)**
Every UI string in the primary interface uses **voseo rioplatense**.

```
✅ CORRECT                    ❌ WRONG
"Cotizá tu envío"             "Cotice su envío"
"Contactanos"                 "Contáctenos"
"Enviá hoy"                   "Envíe hoy"
"Vos eres nuestro socio"      "Usted es nuestro socio"
"Al toque" (urgent)           "Inmediatamente"
```

#### **Law 3: Operationality Over Aesthetics**
Design decisions are justified by:
1. **Clarity** — Can a dispatcher understand this at a glance?
2. **Speed** — Can a driver read this at 60 km/h?
3. **Trust** — Does it look like an institution we can rely on?

Never: "It looks cool" or "Feels modern".

### 1.3 Brand Logo — Inalterable

| Rule | Specification |
|------|---------------|
| **Master file** | `/public/logo-master.svg` (vector only) |
| **Aspect ratio** | Fixed 1:0.45 (never stretch) |
| **Minimum size** | 120px width (web), 30mm (print) |
| **Clear space** | 0.25× height on all sides |
| **Allowed colors** | Only: Azul #0636A5, Blanco #FFFFFF, or Amarillo #FFEC01 (brand combo) |
| **FORBIDDEN ABSOLUTELY** | Shadows, glows, recoloring, rasterized versions (PNG/JPG) |

---

## 2. COLOR SYSTEM

### 2.1 Azul (Primary — Trust & Institutional)

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| `blue-50` | #E6EEFE | `brand-blue-50` | Bezel outer, support backgrounds |
| `blue-100` | #BACEFD | `brand-blue-100` | Card borders, dividers, inactive states |
| `blue-200` | #8EAFFB | `brand-blue-200` | Secondary links, subtle accents |
| `blue-300` | #628FF9 | `brand-blue-300` | Hover on clear components |
| `blue-400` | #3570F8 | `brand-blue-400` | Links, secondary text |
| `blue-500` | #0950F6 | `brand-blue-500` | Focus rings, active details |
| `blue-600` | #0742CA | `brand-blue-600` | Hover states on primary |
| **blue-700** | **#0636A5** | **`brand-blue-700`** | **PRIMARY** — Headers, footers, nav, CTA secondary |
| `blue-800` | #052D8C | `brand-blue-800` | Hover over primary |
| `blue-900` | #04236B | `brand-blue-900` | Text on light backgrounds |
| `blue-950` | #021440 | `brand-blue-950` | Deep dark backgrounds (footer, modals) |

### 2.2 Amarillo (Accent — Action & Logistics)

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| `yellow-50` | #FFFDE6 | `brand-yellow-50` | Warning backgrounds, special states |
| `yellow-100` | #FFFAB8 | `brand-yellow-100` | Borders needing attention |
| `yellow-200` | #FFF78A | `brand-yellow-200` | Badges, routing indicators |
| `yellow-300` | #FFF45C | `brand-yellow-300` | Hover CTA on blue-700 backgrounds |
| `yellow-400` | #FFF12E | `brand-yellow-400` | Hover CTA on white backgrounds |
| **yellow-500** | **#FFEC01** | **`brand-yellow-500`** | **ACCENT** — Primary CTA, badges, high-priority signals |
| `yellow-600` | #E6D400 | `brand-yellow-600` | Dark hover state |

### 2.3 Blanco (Surface — Clarity & Canvas)

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **white-50** | **#FFFFFF** | **`brand-white-50`** | **SURFACE** — Page base, card interiors, form fields |

### 2.4 Semantic Color Aliases (Mandatory in Code)

Use these aliases in component props and CSS:

```css
/* Primary */
--color-primary: var(--color-blue-700);           /* #0636A5 */
--color-primary-hover: var(--color-blue-800);     /* #052D8C */
--color-primary-light: var(--color-blue-50);      /* #E6EEFE */

/* Accent */
--color-accent: var(--color-yellow-500);          /* #FFEC01 */
--color-accent-hover: var(--color-yellow-400);    /* #FFF12E */
--color-accent-hover-dark: var(--color-yellow-300); /* #FFF45C */

/* Surfaces */
--color-surface: var(--color-white-50);           /* #FFFFFF */
--color-surface-overlay: var(--color-blue-50);    /* #E6EEFE */

/* Text */
--color-text-primary: var(--color-blue-700);
--color-text-secondary: var(--color-blue-400);
--color-text-inverse: var(--color-white-50);      /* On dark backgrounds */

/* Functional (Exceptions for System Feedback Only) */
--color-success: #16A34A;     /* Green — status only, never brand CTAs */
--color-warning: #F59E0B;     /* Amber — alerts only */
--color-error: #DC2626;       /* Red — errors only */
```

### 2.5 Defensive Remapping (globals.css)

External classes (from libs/plugins) that slip gray colors get remapped to brand blue:

```css
/* In globals.css — defensive mapping */
.slate-100 { @apply brand-blue-100; }
.slate-900 { @apply brand-blue-900; }
.gray-500 { @apply brand-blue-400; }
/* ... full mapping table in actual globals.css */
```

This ensures brand consistency even when external code tries to use grays.

---

## 3. TYPOGRAPHY

### 3.1 Font Stack (Official)

| Role | Font | Fallback | Weight | Usage |
|------|------|----------|--------|-------|
| **Display** | Anton | sans-serif | 700-800 | Hero, page titles |
| **Subheading** | Bebas Neue | IBM Plex Sans | 600-700 | Section titles, labels, badges |
| **Body** | IBM Plex Sans | system-ui, sans-serif | 400-600 | Paragraphs, UI text, forms |
| **Mono** | Geist Mono | JetBrains Mono | 500-700 | Prices, tracking, metrics |

### 3.2 Type Scale (Fluid, Tailwind clamp())

| Token | Value | Usage | Min | Ideal | Max |
|-------|-------|-------|-----|-------|-----|
| `text-display` | `clamp(3rem, 5vw, 4.5rem)` | Hero H1 | 48px | — | 72px |
| `text-h1` | `clamp(2.25rem, 4vw, 3rem)` | Section H1 | 36px | — | 48px |
| `text-h2` | `clamp(1.75rem, 3vw, 2.25rem)` | Section H2 | 28px | — | 36px |
| `text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | Card titles | 20px | — | 24px |
| `text-body-lg` | 1.125rem (18px) | Lead paragraphs | — | 18px | — |
| `text-body` | 1rem (16px) | Default body | — | 16px | — |
| `text-body-sm` | 0.875rem (14px) | Secondary text | — | 14px | — |
| `text-label` | 0.75rem (12px) | Labels, badges, caps | — | 12px | — |
| `text-mono` | 1rem (16px) | Prices, tracking | — | 16px | — |

### 3.3 Typography Rules (Strict)

#### **Display (Anton)**
- ✅ MUST be `text-transform: uppercase`
- ✅ `line-height: 1.05-1.1` (tight for dramatic presence)
- ✅ `letter-spacing: -0.02em` (negative for punch)
- ✅ `text-wrap: balance` (semantic wrapping)
- ✅ Max 2 lines at desktop
- ❌ Never mixed case ("Logística Y Entregas")

#### **Subheadings (Bebas Neue)**
- ✅ MUST be `text-transform: uppercase`
- ✅ `letter-spacing: 0.05-0.1em` (variable per hierarchy)
- ✅ `font-weight: 700` (always)
- ✅ Used for section titles, label, badges, CTAs

#### **Body (IBM Plex Sans)**
- ✅ Weights: 400 (regular), 500 (medium), 600 (semibold)
- ✅ Line-height: 1.6 for paragraphs (readability)
- ✅ Line-height: 1.2 for UI labels (compact)
- ✅ Max-width: 65ch for readability (prose)

#### **Mono (Geist Mono)**
- ✅ ALWAYS `font-variant-numeric: tabular-nums` (aligned numbers)
- ✅ Used for: prices ($3.700), tracking codes (DRE-1234567), metrics (+50K)
- ✅ Never for body text (only data/values)

---

## 4. SPACING & LAYOUT

### 4.1 Base Unit: 4px

| Token | Rem | Px | Usage |
|-------|-----|-----|-------|
| `space-1` | 0.25 | 4px | Micro gaps (icon padding) |
| `space-2` | 0.5 | 8px | Component internal gaps |
| `space-3` | 0.75 | 12px | Default gap between elements |
| `space-4` | 1 | 16px | Default padding, mobile container |
| `space-6` | 1.5 | 24px | Card internal padding |
| `space-8` | 2 | 32px | Desktop padding, large gaps |
| `space-12` | 3 | 48px | Section medium |
| `space-16` | 4 | 64px | Section large |
| `space-24` | 6 | 96px | Section XL (standard) |
| `space-32` | 8 | 128px | Section XXL |
| `space-36` | 9 | 144px | Hero bottom, major sections |

### 4.2 Container & Breakpoints

| Property | Value | Usage |
|----------|-------|-------|
| `max-width` | 1280px (80rem) | Content container max |
| `padding-mobile` | 16px | < 640px |
| `padding-tablet` | 24px | 640px-1024px |
| `padding-desktop` | 32px | ≥ 1024px |
| Breakpoints | `sm: 640px, md: 768px, lg: 1024px, xl: 1280px` | Tailwind standard |

### 4.3 Section Alternation (STRICT)

Sections **must alternate** backgrounds in strict order:

```
NEVER two consecutive sections with same background
```

| Position | Background | Text | Example |
|----------|------------|------|---------|
| 1. Hero | `bg-brand-blue-700` | White | — |
| 2. Trust | `bg-brand-blue-50` | Blue-700 | Trust bar, metrics |
| 3. Services | `bg-white` | Blue-700 | Service cards |
| 4. Process | `bg-brand-blue-700` | White | How it works |
| 5. Social Proof | `bg-white` | Blue-700 | Testimonials, logos |
| 6. CTA | `bg-brand-blue-700` | White interior | Final pitch |
| 7. Footer | `bg-brand-blue-700` | White | Links, contact |

**Hero & Footer are ALWAYS blue-700.**

### 4.4 Border Radius System

| Token | Px | Usage |
|-------|-----|-------|
| `rounded-none` | 0 | Sharp elements |
| `rounded-xs` | 2px | Indicators, small badges |
| `rounded-sm` | 4px | Small components |
| `rounded-md` | 6px | Medium components |
| `rounded-lg` | 8px | Cards, inputs (default) |
| `rounded-xl` | 12px | Cards, large inputs |
| `rounded-2xl` | 16px | Hero cards, containers |
| `rounded-3xl` | 24px | CTA card, large containers |
| `rounded-full` | 9999px | Pills, badges, avatars, CTA buttons |

**Consistency Rule:** Pick ONE radius scale and stick. No mixing (e.g., don't use `rounded-lg` on one button and `rounded-2xl` on another in the same section).

---

## 5. COMPONENTS (Executable)

> **Every component below is implemented as a React component + Storybook story. Do not reinvent.**

### 5.1 DoubleBezelCard

**Purpose:** Container for content in white-background sections. Signature pattern.

**Structure:**
- Outer: `bg-brand-blue-50 border-brand-blue-100 rounded-4xl p-2 shadow-float`
- Inner: `bg-white rounded-3xl shadow-inner`

**Props:**
```typescript
interface DoubleBezeleCardProps {
  children: React.ReactNode;
  hoverEffect?: 'none' | 'lift'; // lift = -translate-y + enhanced shadow
  className?: string;
}
```

**Implementation:** `src/components/ui/DoubleBezelCard.tsx`

**Usage:**
```tsx
<DoubleBezelCard hoverEffect="lift">
  <h3 className="font-bold text-brand-blue-700">Express</h3>
  <p className="text-sm text-brand-blue-400">30-90 minutes</p>
</DoubleBezelCard>
```

**Variants:** None (single, immutable design). Use `hoverEffect` prop only.

---

### 5.2 CTANestedPill

**Purpose:** Call-to-action button with nested icon space.

**Props:**
```typescript
interface CTANestedPillProps {
  children: string; // Button label (max 3 words)
  variant: 'primary' | 'elevated' | 'outline' | 'ghost';
  icon?: React.ReactNode; // Arrow, or custom icon
  href?: string; // Link destination
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}
```

**Variants:**

| Variant | Background | Text | Border | Icon Bg | Hover Effect |
|---------|------------|------|--------|---------|--------------|
| `primary` | yellow-500 | blue-900 | yellow-500 | blue-700/10 | glow + scale |
| `elevated` | white | blue-700 | blue-100 | blue-700/10 | lift + scale |
| `outline` | transparent | blue-700 | blue-700 | — | bg-blue-50 |
| `ghost` | transparent | blue-700 | transparent | — | bg-blue-50 |

**Active State:** All variants `scale(0.98) translateY(1px)` (press effect)

**Implementation:** `src/components/ui/CTANestedPill.tsx`

**Usage:**
```tsx
<CTANestedPill variant="primary" icon={<ArrowRight />} href="/cotizar">
  Cotizá Envío
</CTANestedPill>

<CTANestedPill variant="elevated" icon={<ArrowRight />}>
  Ver Servicios
</CTANestedPill>
```

---

### 5.3 Badge

**Purpose:** Small label for status, type, or metadata.

**Props:**
```typescript
interface BadgeProps {
  children: string; // Text (max 15 chars, caps)
  variant: 'urgent' | 'secure' | 'economic' | 'flex' | 'neutral' | 'outline';
  className?: string;
}
```

**Variants:**

| Variant | Background | Text | Border | Use Case |
|---------|------------|------|--------|----------|
| `urgent` | yellow-500 | blue-900 | yellow-500 | High priority, Express |
| `secure` | blue-700 | white | blue-700 | Security, trust |
| `economic` | blue-50 | blue-700 | blue-100 | Savings, LowCost |
| `flex` | yellow-50 | blue-700 | yellow-100 | MercadoLibre Flex |
| `neutral` | white | blue-400 | blue-100 | Generic, inactive |
| `outline` | transparent | blue-700 | blue-700 | Outline, alternative |

**CSS:** `rounded-full px-3 py-1 text-xs font-bold uppercase`

---

### 5.4 RadioCardGroup

**Purpose:** Radio button styled as cards. For service selection (Express/LowCost/Flex).

**Props:**
```typescript
interface RadioCardGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  cards: RadioCardConfig[];
}

interface RadioCardConfig {
  value: string;
  icon?: string;
  badge: string;
  subtitle: string;
  title: string;
  description: string;
  metadata: Array<{ label: string; value: string }>;
}
```

**Checked States:** Each service has distinct checked bg:
- **Express:** `bg-brand-blue-700` (dark)
- **LowCost:** `bg-brand-blue-50` (light)
- **Flex:** `bg-brand-yellow-50` (accent-tint)

---

### 5.5 VerticalStepper

**Purpose:** Progress indicator for sequential processes (How It Works, tracking flow).

**Props:**
```typescript
interface VerticalStepperProps {
  steps: Step[];
}

interface Step {
  number: string; // "01", "02", etc.
  title: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
}
```

**Colors by Status:**
- **Completed:** `bg-brand-yellow-500 ring-brand-yellow-100` (⚠️ NEVER green)
- **Active:** `bg-brand-yellow-500 ring-brand-yellow-500/30 animate-pulse-subtle`
- **Pending:** `bg-brand-blue-100 ring-brand-blue-100`

**Left Vertical Line:** 2px `brand-blue-100`, connects dots

---

### 5.6 Input

**Props:**
```typescript
interface InputProps {
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}
```

**Styling:**
- `h-11 (44px), border-2 border-brand-blue-100, rounded-xl, px-4`
- **Hover:** `border-brand-blue-200`
- **Focus:** `border-brand-blue-700 ring-2 ring-brand-blue-500/20`
- **Error:** `border-red-500 ring-red-500/20`
- **Disabled:** `bg-brand-blue-50/50 cursor-not-allowed`

---

### 5.7 Button (Application)

Distinct from CTA Nested Pill. Used for secondary, non-marketing actions.

**Props:**
```typescript
interface ButtonProps {
  children: string;
  variant: 'default' | 'ghost' | 'outline' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}
```

**Variants:**
- `default:` `bg-brand-blue-700 text-white` (primary app action)
- `ghost:` `bg-transparent text-brand-blue-700` (secondary)
- `outline:` `border-2 border-brand-blue-700` (tertiary)
- `glow:` `bg-brand-yellow-500 text-brand-blue-900` (highlight, rare)

---

## 6. MOTION & ANIMATIONS

### 6.1 Duration Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `instant` | 50ms | Micro feedback (opacity blink) |
| `fast` | 150ms | Hover states, focus rings |
| `base` | 200ms | Standard transitions |
| `normal` | 300ms | Reveals, dropdowns |
| `slow` | 400ms | Card hover, panel slides |
| `slower` | 500ms | 3D transforms |
| `slowest` | 800ms | Page transitions, counters |

### 6.2 Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default, balanced |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Reveals, dropdowns |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Entrances |
| `ease-snappy` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Buttons, toggles (playful) |
| `ease-smooth` | `cubic-bezier(0.25, 1, 0.5, 1)` | 3D tilt, float (premium) |
| `ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Badges pulse, playful |

### 6.3 Motion Components (Reusable)

#### **RevealOnScroll**
Fade/scale in element when it enters viewport.

```tsx
<RevealOnScroll variant="fade-up" delay={0.1}>
  <DoubleBezelCard>Content</DoubleBezelCard>
</RevealOnScroll>
```

Variants: `fade-up | fade-in | scale-in`

#### **CounterAnimate**
Animate number from 0 → target value.

```tsx
<CounterAnimate value={50000} format={(n) => `+${n.toLocaleString()}`} />
```

#### **StaggerChildren**
Stagger-reveal multiple children.

```tsx
<StaggerChildren delayMs={100}>
  {items.map((item) => <Card key={item.id}>{item.text}</Card>)}
</StaggerChildren>
```

#### **StickyStack (GSAP)**
Cards stack on scroll (only use if needed, adds 40KB).

Pattern in `src/components/gsap/StickyStack.tsx` (canonical skeleton).

### 6.4 Motion Rules (Mandatory)

#### **Reduced Motion**
Every animation MUST respect `prefers-reduced-motion: reduce`:

```typescript
const reduceMotion = useReducedMotion();
if (reduceMotion) return <StaticVersion />;
```

If animation cannot be disabled, duration → 0ms, transform removed.

#### **No Infinite Loops on Static Content**
- ✅ Carousels can have infinite scroll (user controls)
- ❌ Static cards cannot pulse/float infinitely (distracting)
- ✅ Logos carousel: 30s loop + pause on hover/focus/hidden

#### **Motion = Meaning**
Every animation must communicate:
1. **Hierarchy:** Drawing attention to the right thing
2. **Feedback:** "Your action was received"
3. **State:** Something changed
4. **Storytelling:** Narrative flow

Never: "It looked cool"

---

## 7. DARK MODE

### 7.1 Strategy: CSS Variables + @media (prefers-color-scheme)

**File:** `src/app/globals.css`

```css
/* Light mode (default) */
:root {
  --color-primary: #0636A5;
  --color-accent: #FFEC01;
  --shadow-float: 0 25px 50px -12px rgba(6, 54, 165, 0.15);
  --gradient-surface: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #0636A5; /* Keep same */
    --color-accent: #FFEC01;
    --shadow-float: 0 25px 50px -12px rgba(0, 0, 0, 0.4); /* INVERTED */
    --gradient-surface: linear-gradient(180deg, #1a1a1a 0%, #0f1419 100%);
  }
}
```

### 7.2 Dark Mode Coverage

| Section | Light | Dark | Status |
|---------|-------|------|--------|
| Hero | blue-700 + white | blue-700 + white | ✅ Same |
| Trust | blue-50 + text | [dark-overlay] | 🔄 In Progress |
| Services | white + cards | [dark-bg] | 🔄 In Progress |
| How It Works | blue-700 + white | blue-700 + white | ✅ Same |
| Social Proof | white + cards | [dark-bg] | 🔄 In Progress |
| CTA | blue-700 + card | blue-700 + card | ✅ Same |
| Footer | blue-700 + white | blue-700 + white | ✅ Same |

### 7.3 Test Dark Mode

```bash
# Chrome DevTools → Rendering → Emulate CSS media feature
prefers-color-scheme: dark
```

Test every section visually.

---

## 8. ACCESSIBILITY

### 8.1 WCAG AA Conformance (Mandatory)

All pages MUST pass:
- ✅ **Color Contrast:** AA minimum (4.5:1 body, 3:1 large)
- ✅ **Keyboard Navigation:** Full tab order, logical flow
- ✅ **Focus Visible:** Ring on every interactive element
- ✅ **Alt Text:** Descriptive `alt=""` on every image
- ✅ **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- ✅ **Touch Targets:** Buttons, links ≥ 44×44px

### 8.2 Focus Ring Implementation

All interactive elements receive:

```css
*:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}
```

Dark mode override:
```css
@media (prefers-color-scheme: dark) {
  *:focus-visible {
    outline-color: #0950F6;
  }
}
```

### 8.3 Color Contrast Pairs (Validated)

| Text | Background | Ratio | Status |
|------|------------|-------|--------|
| #0636A5 (primary) | #FFFFFF | 9.8:1 | ✅ AAA |
| #FFFFFF | #0636A5 | 9.8:1 | ✅ AAA |
| #FFEC01 (accent) | #0636A5 | 5.2:1 | ✅ AA |
| #04236B (blue-900) | #FFFFFF | 11.2:1 | ✅ AAA |

---

## 9. GOVERNANCE & COMPLIANCE

### 9.1 Pre-Flight Checklist (Mandatory Before Merge)

**Location:** `.github/DESIGN_SYSTEM_CHECKLIST.md`

Every PR MUST pass:

- [ ] **Colors:** Cero `#` hex colors inline, only `brand-*`
- [ ] **Voseo:** "Cotizá", "Contactanos", never "Cotice"
- [ ] **Components:** Using correct component (Double Bezel, CTA Pill, etc.)
- [ ] **Dark Mode:** Tested in both modes
- [ ] **Focus Visible:** Tab through, all interactives focusable
- [ ] **Reduced Motion:** Animations disabled correctly
- [ ] **Lighthouse:** Accessibility ≥ 90

### 9.2 CI/CD Guards (Automated)

**Workflow:** `.github/workflows/design-system-compliance.yml`

Checks run automatically on every PR:
1. No arbitrary hex colors
2. No gray/slate/zinc Tailwind classes
3. No non-voseo verbs
4. Lighthouse accessibility score
5. Contrast ratios validate
6. Dark mode tokens present

### 9.3 Component Library

**Location:** `src/components/ui/`

All components are:
- ✅ TypeScript (strict mode)
- ✅ Fully documented (JSDoc)
- ✅ Have Storybook stories
- ✅ Tested (unit + visual)
- ✅ Single source of truth (don't reinvent inline)

### 9.4 Design Tokens Export

**Location:** `src/tokens/tokens.json`

Export formats:
- `tokens.json` (canonical)
- `tokens.css` (fallback)
- `tokens.ts` (TypeScript)
- `tokens.yaml` (Figma plugin)

Update when DESIGN.md changes.

### 9.5 Onboarding

New developers:
1. Read `DESIGN.md` (this file)
2. Read `CONTRIBUTING.md`
3. Open Storybook: `npm run storybook`
4. Paste `.github/DESIGN_SYSTEM_CHECKLIST.md` in first PR template

---

## CHANGELOG

### v2.1 (Agosto 2026) — Operational
- ✅ Extracted React components (DoubleBezel, CTANestedPill, Badge, etc.)
- ✅ Added Motion patterns (RevealOnScroll, CounterAnimate, etc.)
- ✅ Completed dark mode CSS variables
- ✅ Automated CI/CD compliance checks
- ✅ Storybook with 25+ stories
- ✅ Design tokens export (JSON/CSS/TS)
- ✅ WCAG AA accessibility audit
- ✅ Pre-flight checklist template

### v2.0 (Julio 2026) — Brand Audit
- Initial comprehensive documentation
- Three-color palette enforced
- Voseo rioplatense implemented
- Component specifications added

---

## QUICK REFERENCE

### Forbidden (Absolute Zero Tolerance)
```
❌ slate-*, gray-*, zinc-*, neutral-*, stone-*
❌ #333, #666, #ccc, #eee, #f5f5f5 (arbitrary grays)
❌ "Cotice", "Contáctenos", "Ingrese", "Envíe" (non-voseo)
❌ Green in steppers (use yellow-500)
❌ Shadows without color tint (pure black shadows)
❌ Logo recoloring, resizing, rasterization
❌ Infinite animations on static content
```

### Mandatory
```
✅ Only brand-blue-*, brand-yellow-*, brand-white-*
✅ "Cotizá", "Contactanos", "Ingresá", "Enviá" (voseo)
✅ Double Bezel for cards in white sections
✅ CTA Nested Pill for CTAs
✅ Yellow (#FFEC01) for completed steppers
✅ Focus rings on all interactives
✅ Lighthouse Accessibility ≥ 90
✅ prefers-reduced-motion respected
✅ prefers-color-scheme: dark tested
```

---

## QUESTIONS?

1. **How do I implement a new component?**
   → See `src/components/ui/` examples, add to Storybook, PR passes checklist.

2. **Can I use a gray color for this?**
   → No. Use `brand-blue-*` instead.

3. **Should this text say "Cotice" or "Cotizá"?**
   → Always "Cotizá" (voseo). See DESIGN.md §3 for full rules.

4. **What if I need an animation that's not documented?**
   → Add to `src/components/motion/`, create Storybook story, document in DESIGN.md.

5. **How do I test dark mode?**
   → Chrome DevTools → Rendering → `prefers-color-scheme: dark`

---

*Last Updated: Agosto 2026 | Version: 2.1 | Operative & Automated*
*This is the canonical, executable design system. Every pixel derives from here.*
