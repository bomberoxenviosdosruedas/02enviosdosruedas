# Design System: Envíos DosRuedas
**Project Title:** Envíos DosRuedas - Mensajería en Moto y Logística E-Commerce  
**Plataforma:** Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript 5.7  

---

## 1. Visual Theme & Atmosphere

El sistema visual de Envíos DosRuedas proyecta agilidad urbana, solidez técnica y confianza marplatense. Está inspirado en la señalética vial y el dinamismo de la logística de última milla.

- **Filosofía de Color (Ley de Tres Colores):** La interfaz está regida estrictamente por tres pilares cromáticos: Azul Institucional Vibrante, Amarillo Vial de Alta Visibilidad y Blanco Puro. Se prohíben de manera categórica el negro puro (`#000000`), las escalas de grises neutros/oscuros, los verdes genéricos y cualquier matiz de azul más oscuro que `#0950F6`.
- **Atmósfera Lumínica:** Clara, diáfana y de alto contraste ("Airy yet Precise"). Las superficies respiran con abundante luz blanca, mientras que los contenedores flotantes utilizan dobles biseles con tintes azules muy sutiles (`#E6EEFE`) y sombras coloreadas en lugar de sombras grises deslucidas.
- **Dinamismo Geométrico:** Transición armónica entre formas orgánicas redondeadas ("Pill-shaped" en botones y chips interactivos) y contenedores modulares estructurados con esquinas generosamente curvadas (12px y 16px).
- **Densidad de Información:** Balanceada. La jerarquía prioriza la legibilidad inmediata de métricas, cotizaciones y estados de entrega mediante tipografías monoespaciadas tabulares y titulares condensados de alto impacto.

---

## 2. Color Palette & Roles

Todos los tonos están calibrados para cumplir con WCAG 2.2 Nivel AA con un contraste mínimo de 4.5:1. El texto azul `#0950F6` sobre fondo amarillo `#FFEC01` alcanza una relación de contraste de 4.9:1.

### 2.1 Azul Corporativo Institucional (Lienzo Primario y Estructura)
- **Azul Canónico Primario (`#0950F6` / `brand-blue-500`, `brand-blue-700`):** Azul eléctrico y enérgico. Es el techo absoluto de oscuridad permitido en la aplicación. Se emplea en titulares display, texto de alta jerarquía, íconos principales, fondos oscuros de tarjetas hero y bordes activos de foco.
- **Azul Acento Eléctrico (`#3570F8` / `brand-blue-400`, `brand-blue-800`):** Utilizado para estados de hover en superficies azules, íconos secundarios y elementos decorativos complementarios.
- **Azul Borde Activo (`#628FF9` / `brand-blue-300`):** Trazos de borde en inputs al interactuar y bordes exteriores de tarjetas en estado hover.
- **Azul Trazo Suave (`#8EAFFB` / `brand-blue-200`):** Anillos de selección secundaria y delineados de apoyo en ilustraciones vectoriales.
- **Azul Divisor Estructural (`#BACEFD` / `brand-blue-100`):** Líneas divisorias, bordes sutiles de tarjetas y separadores de listas.
- **Azul Superficie Acolchada (`#E6EEFE` / `brand-blue-50`):** Fondo exterior del sistema de doble bisel (`DoubleBezelCard`), fondos de bloques secundarios y skeletons de carga.

### 2.2 Amarillo Vial (Acción y Alerta Positiva, Cobertura <= 15%)
- **Amarillo Vial Canónico (`#FFEC01` / `brand-yellow-500`):** Tono de máxima atención y señalización vial. Reservado exclusivamente para botones de llamada a la acción primarios (CTAs), badges de estado completado, líneas de acento de 6px y precios destacados sobre fondo azul. Su uso no debe superar el 15% del área visual.
- **Amarillo Hover Radiante (`#FFF12E` / `brand-yellow-400`):** Estado hover para botones CTA primarios y accesos a WhatsApp.
- **Amarillo Presionado (`#E6D400` / `brand-yellow-600`):** Estado pressed y activo en controles táctiles.
- **Amarillo Fondo Destacado (`#FFFDE6` / `brand-yellow-50`):** Fondos suaves para tarjetas seleccionadas en servicios como Mercado Envíos Flex.

### 2.3 Blanco y Superficies
- **Blanco Puro (`#FFFFFF` / `white`):** Lienzo base de la página, tarjetas interiores limpias y contraste sobre fondos azules.

### 2.4 Alertas y Errores
- **Rojo Operativo (`#EF4444` / `error-500`):** Validación de campos inválidos, avisos críticos y cancelaciones.

---

## 3. Typography Rules

El sistema tipográfico combina potencia expresiva y precisión funcional mediante cuatro familias especializadas:

| Función | Fuente | Peso | Transformación | Tracking / Leading | Uso Canónico |
| --- | --- | --- | --- | --- | --- |
| **Display / Impacto** | `Anton` (`font-display`) | 400 | UPPERCASE | Tracking: `-0.05em`<br>Leading: `0.85 - 0.9` | Titulares de héroes (H1), números gigantes y frases de impacto |
| **Subtítulos y Eyebrows** | `Bebas Neue` (`font-subheading`) | 400 | UPPERCASE | Tracking: `0.05em`<br>Leading: `1.0` | Eyebrows de sección, etiquetas superiores y texto de botones |
| **Cuerpo y Lectura** | `Outfit` (`font-sans`) | 400, 500, 600 | Normal | Tracking: Normal<br>Leading: `1.5 - 1.625` | Párrafos, descripciones de servicio, inputs y textos legales |
| **Métricas y Cotización** | `Geist Mono` (`font-mono`) | 500, 600 | Normal | Tabular Nums (`tabular-nums`) | Precios en ARS, distancias en km, horarios de corte y coordenadas |

---

## 4. Component Stylings

### 4.1 Botones y Acciones (CTANestedPill)
- **Morfología:** Completamente redondeados en forma de píldora (`rounded-full`, radio 9999px), con altura mínima ergonómica de 44px a 56px.
- **Tipografía interna:** `font-subheading` (`Bebas Neue`), mayúsculas obligatorias, `font-bold` y tracking extendido (`0.05em`).
- **Microchip de Ícono Integrado:** Cada botón primario incluye un círculo embebido (`w-8 h-8` o `w-10 h-10`) con fondo translúcido (`rgba(9, 80, 246, 0.1)` en botón amarillo) que traslada suavemente la flecha o ícono 4px a la derecha al hacer hover (`transition: transform 0.25s`).
- **Variantes Principales:**
  - *Primary:* Fondo amarillo `#FFEC01`, texto azul `#0950F6`, borde `brand-yellow-500`, sombra `shadow-cta-glow`.
  - *Blue:* Fondo azul `#0950F6`, texto blanco `#FFFFFF`, borde `brand-blue-500` para contraste sobre fondos claros o amarillos.
  - *Outline / Ghost:* Borde azul `#BACEFD`, fondo transparente o blanco, texto azul `#0950F6`.

### 4.2 Contenedores de Doble Bisel (DoubleBezelCard)
Es la firma geométrica de la identidad de Envíos DosRuedas:
- **Bisel Exterior (Outer Bezel):** Fondo suave `brand-blue-50/80` (`#E6EEFE` con 80% opacidad), borde fino de 1px en `brand-blue-100` (`#BACEFD`), radio exterior `rounded-2xl` (16px), relleno perimetral de 8px (`p-2`) y sombra flotante `shadow-float`.
- **Cuerpo Interior (Inner Container):** Fondo blanco puro `#FFFFFF` (o azul `#0950F6` en variantes inversas), radio `rounded-xl` (12px), relleno generoso de 24px (`p-6`) y sombra interior tenue.
- **Interacción Hover:** El bisel exterior transiciona su borde a `brand-blue-300` (`#628FF9`) y eleva su sombra a `shadow-antigravity-deep`.

### 4.3 Campos de Entrada y Formularios (InputField)
- **Estructura:** Altura accesible (44px a 48px), radio curvado suave `rounded-xl` (12px), fondo blanco puro o `brand-blue-50/40`.
- **Trazos y Bordes:** Borde en reposo de 1px en `brand-blue-100` (`#BACEFD`), hover en `brand-blue-300` (`#628FF9`).
- **Foco Accesible:** Anillo visible inmediato de 2px en `brand-blue-500` (`ring-2 ring-brand-blue-500`) con desplazamiento visual limpio (`ring-offset-2`).
- **Tipografía de entrada:** `font-sans` (`Outfit`) para texto común y `font-mono` para autocompletado de direcciones y números.

### 4.4 Selectores de Servicio (RadioCardGroup)
- **Tarjetas Interactivas:** Tarjetas con doble bisel o borde definido. En estado seleccionado activan un fondo suave `brand-yellow-50` (`#FFFDE6`) con borde resaltado `brand-yellow-500` y check circular visible.
- **Soporte de Teclado:** Navegación fluida por flechas direccionales y tecla Tab.

### 4.5 Sombras y Profundidad Teñida
Queda prohibido el uso de sombras negras estándar (`rgba(0,0,0,...)`). Todas las sombras están teñidas con azul `#0950F6` o amarillo `#FFEC01`:
- `shadow-sm`: `0 2px 4px rgba(9, 80, 246, 0.06)`
- `shadow-md`: `0 4px 8px rgba(9, 80, 246, 0.08)`
- `shadow-float`: `0 25px 50px -12px rgba(9, 80, 246, 0.15)`
- `shadow-antigravity-deep`: `0 24px 64px rgba(9, 80, 246, 0.22)`
- `shadow-cta-glow`: `0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)`

---

## 5. Layout Principles

- **Espaciado y Ritmo Vertical:** Secciones con espaciado amplio de `6rem` (96px en escritorio) y `3rem` (48px en móvil) para garantizar sensación de amplitud y limpieza.
- **Ancho Máximo de Contenedor:** Contenedor central limitado a `80rem` (1280px, `max-w-7xl` o `--spacing-container-max`) con padding horizontal fluido de `1rem` a `2rem`.
- **Estructura en Cuadrícula (BentoGrid):** Disposición asimétrica de 12 columnas modulares con tarjetas combinadas (spans de 4, 6 y 8 columnas), adaptables a 1 columna en pantallas móviles.
- **Fondos Procedurales y Canvas:** Uso de partículas interactivas ligeras (`HeroProceduralBackground`) y líneas de conexión logística sin sobrecargar el hilo de renderizado.

---

## 6. Design System Notes for Stitch Generation

El siguiente bloque está optimizado para ser copiado directamente en los prompts de generación de pantallas mediante Stitch:

```markdown
**DESIGN SYSTEM (REQUIRED):**
- **Brand Palette (Law of Three Colors):**
  - Canonical Blue: #0950F6 (Darkest color allowed; header, footer, display titles, primary borders)
  - Soft Blue Accents: #E6EEFE (Bezel outer backgrounds), #BACEFD (Dividers), #628FF9 (Active focus)
  - Traffic Yellow: #FFEC01 (Primary CTA buttons, badges, key accents; strictly <= 15% coverage)
  - Pure White: #FFFFFF (Page canvas, inner card surfaces)
  - Error: #EF4444 (Validation errors)
  - STRICTLY FORBIDDEN: #000000, gray scales, green buttons, and navy tones darker than #0950F6.
- **Typography:**
  - Display Headers: Anton (uppercase, tight leading 0.85, tracking -0.05em, punchy impact)
  - Eyebrows & Subtitles: Bebas Neue (uppercase, tracking 0.05em)
  - Body & UI: Outfit (sans-serif, clean, highly readable)
  - Numbers, Metrics, Prices: Geist Mono (tabular numerals, clear decimals)
- **Signature Components:**
  - DoubleBezelCard: Two-tier cards with outer bezel (bg-brand-blue-50/80, border-brand-blue-100, rounded-2xl, p-2) and inner white surface (rounded-xl, p-6, shadow-sm).
  - CTANestedPill: Fully rounded pill button (bg-brand-yellow-500, text-brand-blue-500, font-subheading, uppercase, font-bold) with an embedded circular icon chip that slides 4px right on hover.
  - Form Inputs: Rounded-xl, border-brand-blue-100, with a sharp 2px focus ring in #0950F6.
- **Elevation:**
  - Tinted shadows using rgba(9, 80, 246, 0.15) and yellow glow rgba(255, 236, 1, 0.45). Never gray or black drop shadows.
```
