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
