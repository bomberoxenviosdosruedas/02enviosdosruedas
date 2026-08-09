# Contenido Principal — Página Inicio (src/app/page.tsx)

---

## 📋 Metadatos de la Página

```tsx
// src/app/page.tsx - export const metadata
{
  title: 'Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas',
  description: 'Mensajería urbana, envíos en el día, MercadoLibre Flex y logística 3PL para e-commerce en Mar del Plata. +50K envíos realizados. Cotizá en < 2 min.',
  metadataBase: 'https://www.enviosdosruedas.com/',
  alternates: { canonical: 'https://www.enviosdosruedas.com/' },
  openGraph: {
    title: 'Envíos DosRuedas — Mensajería y Logística E-commerce Mar del Plata',
    description: 'Tu partner logístico en Mar del Plata. Envíos Express, LowCost, Flex y 3PL para e-commerce. +50K entregas. Cotizá ya.',
    url: 'https://www.enviosdosruedas.com/',
    siteName: 'Envíos DosRuedas',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og-image.webp', width: 1200, height: 630, alt: 'Envíos DosRuedas - Logística E-commerce Mar del Plata' }],
  },
  twitter: { card: 'summary_large_image', title: 'Envíos DosRuedas', description: 'Mensajería y logística e-commerce Mar del Plata', images: ['/og-image.webp'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  schema.org: WebSite + SearchAction (cotizar) + Organization + PostalAddress + GeoCoordinates + OpeningHoursSpecification
}
```

---

## 🧩 Componentes de la Página (Orden de Renderizado)

| #   | Componente            | Ruta de Importación                   | ID Section            | Descripción                                                                                             |
| --- | --------------------- | ------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------- |
| 1   | **HeroAnimado**       | `@/components/home/HeroAnimado`       | `#hero-animado`       | Hero principal con red logística interactiva, counter animado, badges flotantes                         |
| 2   | **VisionSection**     | `@/components/home/VisionSection`     | `#vision-section`     | Stats bento grid (+50K envíos, 0 perdidos, +50 emprendedores) + features                                |
| 3   | **ServicesOverview**  | `@/components/home/ServicesOverview`  | `#services-overview`  | Carrusel 3D de 4 servicios (Express, LowCost, Flex, 3PL) con modal detalle                              |
| 4   | **SliderServicios**   | `@/components/home/SliderServicios`   | `#slider-servicios`   | Slider de 6 industrias verticales (E-commerce, Repuestos, Indumentaria, Trámites, Insumos, Encomiendas) |
| 5   | **EmprendedoresHome** | `@/components/home/EmprendedoresHome` | `#emprendedores-home` | Bento grid 3 cards (PyMEs, MercadoLibre Flex, Corporativos) + marquee partners                          |
| 6   | **CtaSection**        | `@/components/home/CtaSection`        | `#cta-section`        | Formulario WhatsApp directo + double-bezel card                                                         |

---

## 📝 Textos Clave por Componente

### 1. HeroAnimado.tsx

**Badge:** `Tu Solución Confiable`

**Título (H1 - 3 líneas):**

```
Mensajería y Logística
E-Commerce           ← highlight amarillo
en Mar del Plata
```

**Body:**

> Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca.

**CTAs:**

- `Solicitar Servicio` → `/cotizar/express`
- `Ver Servicios` → `/servicios/envios-express`

**Features (3 pills):**

- `100% SEGURO` (Shield)
- `RÁPIDO` (Zap)
- `COBERTURA TOTAL` (MapPin)

**Counter:** `+5000 ENVÍOS` (animado GSAP)

**Graphics Column — Card 1 (Mapa):**

- Imagen: `/card_mapa.webp`
- Label: `Ruteo de Envíos` / `Optimizado`
- Badges flotantes: `SEGURIDAD GARANTIZADA`, `100% MARPLATENSE`, `ENVÍOS EN EL DÍA`

---

### 2. VisionSection.tsx

**Badge:** `Partner Logístico Especializado`

**Título (H2):**

> CONECTAMOS MAR DEL PLATA DE PUNTA A PUNTA

**Body:**

> Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen al destino en tiempo récord con tecnología de punta y tarifas transparentes.

**Features (2 cards):**

1. **Entregas a Tiempo** (Clock) — Puntualidad garantizada, geolocalización avanzada
2. **Envíos Seguros** (ShieldCheck) — Protección total, custodia digital, firmas seguras

**Stats Bento Grid (3 cards):**
| Card | Valor | Label | Estilo |
|------|-------|-------|--------|
| 1 | `+50K` | Envíos y entregas realizadas con éxito en toda la región | Azul osc. + amarillo |
| 2 | `0` | Paquetes extraviados | Double-bezel light |
| 3 | `+50` | Emprendedores confían | Double-bezel light |

---

### 3. ServicesOverview.tsx

**Header:**

- Badge: `NUESTROS SERVICIOS`
- Título: `SOLUCIONES LOGÍSTICAS A TU MEDIDA` (A TU MEDIDA en amarillo subrayado azul)

**Carrusel 4 Servicios:**

| Servicio    | ID        | Título           | Badge              | Ciudad                | Stats (Tiempo / Precio / Peso)                  | Imagen                            |
| ----------- | --------- | ---------------- | ------------------ | --------------------- | ----------------------------------------------- | --------------------------------- |
| **Express** | `express` | Envíos Express   | URGENTE            | Cobertura MDQ         | 30-90 min / $3.700 Base / Hasta 10 kg           | `/cards/fondo_express.webp`       |
| **LowCost** | `lowcost` | Envíos LowCost   | ECONÓMICO          | Todo Gral. Pueyrredón | Same/Next Day / $3.000 Base / Hasta 15 kg       | `/cards/fondo_lowcost.webp`       |
| **Flex**    | `flex`    | Envíos Flex      | MERCADOLIBRE FLEX  | Mar del Plata y Batán | En el día / Zonificado LowCost / Apto Moto/Auto | `/cards/fondo_flex.webp`          |
| **3PL**     | `3pl`     | E-Commerce & 3PL | LOGÍSTICA INTEGRAL | Depósito Friuli 1972  | 24 hs / Stock / Planes a Medida / Sin límite    | `/cards/fondo_emprendedores.webp` |

**Modal Detalle (click en card central):**

- Summary, 3 features, stats row, CTA directo a cotizar

---

### 4. SliderServicios.tsx

**Header:**

- Badge: `Innovación en Distribución`
- Título: `Soluciones Especiales para Industrias`
- Sub: `Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución en Mar del Plata.`

**6 Slides (auto-rotate 6s):**

| #   | Título                 | Subtítulo                    | Descripción                                                                                          | Icono          |
| --- | ---------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| 1   | E-Commerce             | Entregas same day y next day | Envíos a domicilio de tus ventas online. Entregas misma jornada o a partir del día siguiente.        | ShoppingBag    |
| 2   | Repuestos automotores  | Partes críticas al instante  | Envío rápido de repuestos y partes críticas a talleres y concesionarios de toda la ciudad.           | Wrench         |
| 3   | Indumentaria y calzado | Moda y logística inversa     | Logística inversa y entregas rápidas de moda local. Gestionamos cambios y devoluciones sin fricción. | Shirt          |
| 4   | Trámites               | Gestión administrativa       | Todo tipo de trámites, cobranzas, despacho de encomiendas.                                           | FileText       |
| 5   | Insumos varios         | Entregas en tiempo y forma   | Entrega de todo tipo de insumos: médicos, tecnológicos, gastronómicos y más.                         | ClipboardCheck |
| 6   | Encomiendas            | Retiro y despacho            | Retiro a domicilio y despacho de encomiendas con confirmación de entrega.                            | Package        |

---

### 5. EmprendedoresHome.tsx

**Header:**

- Badge: `Socio Estratégico Local`
- Título: `Potenciamos tu [IMAGEN DELIVERY] Marca en Mar del Plata`
- Body (scrub-reveal): `Si vendés online, necesitás un socio logístico que responda al toque. Creamos planes a tu medida con tarifas dinámicas transparentes y recolección programada a domicilio en Mar del Plata.`

**Bento Grid 3 Cards:**

| Card | Span                          | Título                  | Sub-título    | Color     | CTA                                        |
| ---- | ----------------------------- | ----------------------- | ------------- | --------- | ------------------------------------------ |
| 1    | `lg:col-span-7 lg:row-span-2` | Logística E-Commerce    | EMPRENDEDORES | Azul navy | `Conocer más` → `/servicios/emprendedores` |
| 2    | `lg:col-span-5`               | Envíos Flex Meli        | MERCADOLIBRE  | Amarillo  | `Configurar Flex` → `/servicios/flex`      |
| 3    | `lg:col-span-5`               | Soluciones Corporativas | CORPORATIVO   | Blanco    | `Abrir Cuenta Corriente` → `/contacto`     |

**Features Card 1:**

- Soporte comercial dedicado vía WhatsApp
- Entregas contrareembolso integradas sin cargo extra
- Rastreo digital transparente para tus clientes

**Marquee Partners (10 marcas):**

> TOY PIOLA JUGUETERÍA · AMA & POLA · DROPIX 3D · EL CÓNDOR · STARCEL · URBANCOW · WANCA · CATALINA INDUMENTARIA · ENVASES 3G · LA PERI

---

### 6. CtaSection.tsx

**Header:**

- Badge: `Cotización Inmediata`
- Título: `¿Listo para escalar la logística de tu e-commerce?`
- Sub: `Olvidate de la gestión de paquetes en Mar del Plata. Completá los datos y hablemos por WhatsApp al instante.`
- Nota: `Atención comercial < 2 MIN`

**Formulario → WhatsApp (5492236602699):**

| Campo                    | Tipo              | Placeholder / Opciones                                  |
| ------------------------ | ----------------- | ------------------------------------------------------- |
| Tu Nombre                | text (required)   | `Ingresá tu nombre`                                     |
| Empresa / Negocio        | text (required)   | `Nombre de tu emprendimiento`                           |
| Volumen Estimado Mensual | select (required) | `1 a 50 envíos`, `51 a 200 envíos`, `Más de 200 envíos` |

**CTA Submit:** `Hablar por WhatsApp` (MessageSquare icon)

---

## 🎨 Tokens de Color Referenciados (Tailwind)

```css
/* Brand Colors (definidos en tailwind.config.ts) */
--color-brand-blue: #0369a1; /* brand-blue-600 */
--color-brand-blue-700: #02598a;
--color-brand-blue-800: #014570;
--color-brand-blue-900: #013558;
--color-brand-yellow: #ffec01; /* Sunbeam Yellow */
--color-brand-yellow-400: #ffe600;
--color-brand-yellow-500: #ffec01;
--color-brand-white-50: #f8fafc; /* Slate 50 */
--color-brand-ink: #0f172a; /* Slate 900 */
--color-brand-dark: #0369a1; /* alias brand-blue */
```

**Clases semánticas usadas:**

- `bg-brand-blue`, `bg-brand-blue-700`, `bg-brand-blue-800`, `bg-brand-blue-900`
- `bg-brand-yellow`, `bg-brand-yellow-500`, `bg-brand-yellow-400`
- `bg-brand-white-50`, `bg-brand-ink`, `bg-brand-blue-50`
- `text-brand-blue`, `text-brand-blue-100`, `text-brand-blue-500`, `text-brand-blue-700`
- `text-brand-yellow`, `text-brand-yellow-500`
- `text-brand-ink`, `text-brand-blue-300`, `text-brand-blue-400`
- `border-brand-blue`, `border-brand-yellow`, `border-brand-blue-500`, `border-brand-yellow-500`
- `shadow-[4px_4px_0px_var(--color-brand-blue)]`, `shadow-[2px_2px_0px_var(--color-brand-yellow)]`

---

## 🖼️ Assets de Imagen Referenciados

| Ruta                                          | Usado en                 | Descripción                             |
| --------------------------------------------- | ------------------------ | --------------------------------------- |
| `/hero-background.jpeg`                       | HeroAnimado              | Textura mapa calles (overlay opacity-3) |
| `/card_mapa.webp`                             | HeroAnimado Card 1       | Mapa cobertura Mar del Plata            |
| `/delivery-background.jpg`                    | HeroAnimado background   | Fondo reparto urbano                    |
| `/cards/fondo_express.webp`                   | ServicesOverview Express | Card carrusel Express                   |
| `/cards/fondo_lowcost.webp`                   | ServicesOverview LowCost | Card carrusel LowCost                   |
| `/cards/fondo_flex.webp`                      | ServicesOverview Flex    | Card carrusel Flex                      |
| `/cards/fondo_emprendedores.webp`             | ServicesOverview 3PL     | Card carrusel 3PL                       |
| `/og-image.webp`                              | Metadata                 | Open Graph 1200×630                     |
| `https://picsum.photos/seed/delivery/400/200` | EmprendedoresHome H2     | Placeholder inline image                |

---

## 🔧 Prompts de Generación Existentes (Referencia)

| Archivo                                           | Contenido                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------------- |
| `prompts-express-hero-inline.md`                  | 3 variantes para imagen inline 48px en ExpressHero h1                  |
| `prompts-3d-typography-envios-express.md`         | 3 variantes 3D "ENVIOS EXPRESS" + Blender script                       |
| `docs/prompts/3d-typography-4-services-heroes.md` | 12 prompts (4 servicios × 3 variantes) para hero cards + Blender batch |

---

## 📐 Patrones de Layout Comunes

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid 12-col:** `lg:grid-cols-12` con `lg:col-span-7` + `lg:col-span-5` (Hero)
- **Grid 12-col bento:** `lg:col-span-7 lg:row-span-2` + `lg:col-span-5` (Emprendedores)
- **Double-bezel cards:** `.double-bezel-outer` + `.double-bezel-inner` (border offset 2px)
- **Spring config estándar:** `stiffness: 100, damping: 20` (HyperFrames)
- **Snappy spring:** `stiffness: 300, damping: 25`
- **Orthographic 3D:** `perspective: 1000` / `2000` + `transformStyle: preserve-3d`

---

## 📌 Notas para Futuras Generaciones

1. **HeroAnimado** → Card 1 (`/card_mapa.webp`) es candidata para **3D Typography "EXPRESS / ENTREGA INMEDIATA"** (ver `docs/prompts/3d-typography-4-services-heroes.md`)
2. **ExpressHero.tsx** (página servicio) → Inline image 48px en H1 → usar prompts `prompts-express-hero-inline.md`
3. **ServicesOverview** → 4 cards carrusel → cada una tiene `imageUrl` para background → candidatas para 3D typography por servicio
4. **EmprendedoresHome** → H2 inline image (placeholder picsum) → reemplazar por 3D "3PL / FULFILLMENT"
5. **Paleta Cobalt Canary obligatoria:** `#0C3BA7` (Royal Blue), `#FFFFFF` (Clean White), `#FFEC01` (Sunbeam Yellow), `#000000` (Void Black solo ref)
6. **Dimensiones target hero cards:** 1600×1120px (2x retina para card ~400×280px), aspect 10:7
7. **Fondo transparente (alpha)** obligatorio para compositing sobre cards con bordes amarillos/azules

---

_Generado automáticamente desde `src/app/page.tsx` y componentes importados — 2026-08-09_
