# Original User Request

## Initial Request — 2026-07-14T04:50:04-03:00

Optimize the layout, typography, animations, and compliance with the design system (Bento Grid, Double-Bezel, non-flat dark blue gradients, premium Framer Motion transitions) for the specified remaining routes and their imported section sub-components.

Working directory: E:/proyectos/02enviosdosruedashector
Integrity mode: development

## Pages to Optimize
- `src/app/nosotros/sobre-nosotros/page.tsx`
- `src/app/nosotros/preguntas-frecuentes/page.tsx`
- `src/app/nosotros/nuestras-redes/page.tsx`
- `src/app/cotizar/lowcost/page.tsx`
- `src/app/cotizar/express/page.tsx`
- `src/app/contacto/page.tsx`

## Requirements

### R1. Typography Alignment
Ensure all text layout elements utilize exclusively the official typography classes of the design system:
- `font-display` (Anton) for main headings (`h1`, `h2`, hero titles).
- `font-subheading` (Bebas Neue) for buttons, badges, secondary headers, numbers, and state indicators.
- `font-sans` (Inter) for paragraphs, body copy, inputs, lists, and descriptive sections.

### R2. Bento Grid & Double-Bezel Layouts
Identify lists of characteristics, features, services, or grid layouts on the selected pages and refactor them:
- Replace simple column layouts with asymmetric Bento Grids (e.g. `lg:col-span-8` + `lg:col-span-4`, varying heights).
- Structure individual cards utilizing the Double-Bezel hierarchy: `double-bezel-outer` for the outer container and `double-bezel-inner` for the interior wrapper.

### R3. Interactive Motion & Hover States
Incorporate high-fidelity micro-interactions and GPU-accelerated Framer Motion features:
- Staggered entrance animations on grids (`initial`, `whileInView`, `viewport={{ once: true }}`) with custom transition curves (`ease: [0.16, 1, 0.3, 1]`).
- Hover states with interactive translations (`whileHover={{ y: -5, x: 2 }}`), premium shadows, and glow enhancements.
- Refactor default buttons/links to use the Nested CTA Pill style with sliding hover mask and animated internal icon containers.

### R4. Multi-dimensional Dark Backgrounds
Replace any flat dark backgrounds (like `bg-brand-blue` or `bg-brand-ink`) with premium blue gradients or variations like `bg-brand-blue-600` / `bg-brand-blue-500` to bring depth, tridimensionality, and glow accents.

### R5. Sub-component Discovery and Optimization
- For every target page, trace and locate all locally imported section components (e.g., in `src/components/cotizar/`, `src/components/nosotros/`, etc.).
- Apply all visual, typography, layout, and animation guidelines to these sub-components in addition to the main page file.

## Acceptance Criteria

### Verification Rules
- [ ] No compilation errors or layout shifts occur on any of the 6 remaining routes.
- [ ] Every modified route and its associated sub-components strictly use the correct design system fonts (Anton, Bebas Neue, Inter).
- [ ] All lists or feature elements on the optimized pages and their section sub-components are structured as Bento Grids with Double-Bezel card configurations.
- [ ] All grid cards and buttons feature Framer Motion hover states with GPU-accelerated translations and custom easing.
- [ ] Dark background sections use multi-dimensional gradients or non-flat brand-blue variations.
- [ ] The build validation command (`powershell -ExecutionPolicy Bypass -Command "pnpm build"`) completes successfully.

## Follow-up — 2026-07-14T05:20:59-03:00

Optimize layouts, typography, animations, and design system compliance (Bento Grid, Double-Bezel hierarchy, gradients, Framer Motion) across the remaining 6 pages and their sub-components:

Working directory: E:/proyectos/02enviosdosruedashector
Integrity mode: development

## 🛠️ Global Directives

### R1. Typography Alignment
Ensure all text elements strictly map to the three official fonts:
*   **Main Headings (H1, H2, Hero Titles):** Use `font-display` (Anton, Uppercase). Adjust lines to `leading-none` or `leading-[1.1]` with `tracking-wider`.
*   **Buttons, Badges, Secondary Headers, Numbers, Indicators:** Use `font-subheading` (Bebas Neue, uppercase or tracking-wide).
*   **Body Copy, Inputs, Paragraphs:** Use `font-sans` (Inter).
*   **Metrics / Monospace data:** Use `font-mono` (Geist Mono) for prices, ETAs, and coordinates.

### R2. Double-Bezel Card Pattern
For any card component:
*   **Outer container (`double-bezel-outer`):** Class `bg-brand-blue-50/50` (or `bg-slate-100` on light sections) + `border border-brand-blue-100` + `p-2` + `rounded-2xl`.
*   **Inner core (`double-bezel-inner`):** Class `bg-white` (or `glassmorphism` on dark backgrounds) + `rounded-[calc(var(--radius-xl)-0.5rem)]` + `p-6` + `shadow-sm`.

### R3. GPU-Accelerated Animations
*   Staggered grid entrance animations via Framer Motion:
    ```typescript
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.05 }
      }
    };
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 15, ease: [0.16, 1, 0.3, 1] }
      }
    };
    ```
*   Hover transformations: `whileHover={{ y: -5, x: 2, scale: 1.01 }}`.
*   Nested CTAs with trailing icon inside a white or dark pill circle.

---

## 🗺️ Page-Specific Optimizations

### 1. Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)
*   **Sub-components:** AboutHero, AboutAdvantages, AboutValues, AboutTimeline, AboutTeam, AboutMissionVision.
*   **Layout & Bento Grid Plan:**
    *   Refactor AboutAdvantages and AboutValues into asymmetric grids:
        *   Card 1: `lg:col-span-8` (Major feature with highlighted double-bezel and a subtle background glow).
        *   Card 2: `lg:col-span-4` (Supporting stat or secondary badge).
        *   Card 3 & 4: Balanced columns or reverse asymmetry.
    *   Apply `font-display` (Anton) for headings and timeline decade highlights, and `font-subheading` (Bebas Neue) for values lists and team position tags.

### 2. Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)
*   **Sub-components:** FaqHero, FaqAccordion, FaqCta.
*   **Layout & Bento Grid Plan:**
    *   **FaqAccordion:** Accordion details with fine bottom borders in `brand-blue-100` (`#BACEFD`) and a rotation micro-indicator `+` / `-` colored in `brand-yellow-500` (`#FFEC01`).
    *   **FaqCta:** Structured as an asymmetric bento grid. The primary direct-help card spans `lg:col-span-8` with a double-bezel outer wrap, and the secondary self-service channel card spans `lg:col-span-4`.

### 3. Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`)
*   **Sub-components:** NetworksHero, NetworksChannels, RecentPosts, NetworksBenefits, NewsletterSubscribe.
*   **Layout & Bento Grid Plan:**
    *   **NetworksChannels:** Refactor card listings to mimic press releases/official notices. Use `double-bezel-outer` and `double-bezel-inner` with borders in `brand-blue-100`.
    *   **NetworksBenefits:** Build an asymmetric grid (e.g. `col-span-8` highlight benefit + `col-span-4` smaller benefit modules) using staggered entry transitions.

### 4. Cotizar LowCost (`src/app/cotizar/lowcost/page.tsx`)
*   **Sub-components:** CotizadorLowCostHero, CotizadorLowCostForm, CotizadorLowCostDetails, CotizadorLowCostHelp.
*   **Layout & Bento Grid Plan:**
    *   Replace the flat `bg-brand-dark` background on the main page wrapper with `gradient-dark` to add deep gradients, tridimensionality, and glow effects.
    *   **Form / Price Panel:** Design the right-hand panel as a floating double-bezel summary container detailing final pricing with large numbers using `font-subheading` (Bebas Neue) or `font-mono` in `brand-blue-700`, clearly separating base, taxes, and final costs.

### 5. Cotizar Express (`src/app/cotizar/express/page.tsx`)
*   **Sub-components:** CotizadorExpressHero, CotizadorExpressForm, CotizadorExpressDetails, CotizadorExpressHelp.
*   **Layout & Bento Grid Plan:**
    *   Apply dark multi-dimensional gradients to replace flat backgrounds.
    *   In the **Form**, indicate steps using giant display numbers in `font-display` (Anton) or `font-subheading` (Bebas Neue).
    *   Double-bezel structures for help banners and input sections.

### 6. Contacto (`src/app/contacto/page.tsx`)
*   **Sub-components:** ContactHero, ContactForm, ContactInfo.
*   **Layout & Bento Grid Plan:**
    *   Refactor the layout splits to match `DESIGN.md`: Column 1 spans `lg:col-span-5` (institutional info & contact details wrapped in a deep `gradient-blue` or `brand-blue-700` block), and Column 2 spans `lg:col-span-7` (contact form card wrapped as a white double-bezel container).

