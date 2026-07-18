# Propuesta Visual — Envíos DosRuedas

**Inspirada en:** FedEx LATAM, UPS, DHL, Correo Uruguayo, MercadoLibre Logistics  
**Restricción estricta:** **Cero cambios** a paleta (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF) ni tipografía (Anton, IBM Plex Sans/Inter, Geist Mono)  
**Objetivo:** Elevar la calidad visual al nivel de las grandes empresas logísticas globales **usando solo lo que ya tenemos**

---

## 🎯 Principios Rectores (Derivados de los Referentes)

| Referente | Principio Extraído | Aplicación en DosRuedas |
|-----------|-------------------|------------------------|
| **FedEx** | "Forward momentum" — la flecha oculta guía la mirada | Flechas direccionales en CTAs, grids asimétricos Z-pattern, progress trackers |
| **UPS** | "Shield of trust" — el escudo como símbolo de custodia | Badge "100% SEGURO" como ancla visual, cards con doble bisel (custodia física) |
| **DHL** | "Yellow = urgency/action" — amarillo solo para conversión | Amarillo **exclusivamente** en CTAs primarios, badges críticos, focus rings |
| **Correo Uruguayo** | "Institutional clarity" — segmentación Personas/Pymes/Empresas | Nav dropdowns segmentados, páginas de servicio por perfil, trust signals por vertical |
| **MercadoLibre Flex** | "Real-time ops UI" — tracking cards, live status | "Reparto en Curso" card, floating pills, counter animado, network canvas |

---

## 🏗️ 1. Arquitectura de Página (Page Architecture)

### 1.1 Estructura Canónica por Tipo de Página

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (Sticky, z-50)                                          │
│  ├─ Logo + Wordmark (Anton)                                     │
│  ├─ Nav: Servicios | Nosotros | Contacto                        │
│  └─ CTA Primario: "Cotizar Envío" (Yellow Pill)                │
├─────────────────────────────────────────────────────────────────┤
│  HERO / SECCIÓN 1 (Alternancia: Azul 700 ↔ Blanco)              │
│  ├─ Lado Izq: Copy monumental (Anton) + Body (IBM Plex Sans)   │
│  ├─ Lado Der: Visual interactivo (Canvas/3D/Imagen + Overlay)  │
│  └─ CTA Group: Primario (Yellow) + Secundario (Outline White)  │
├─────────────────────────────────────────────────────────────────┤
│  TRUST BAR (Full width, Azul 50 bg)                             │
│  ├─ Métrica 1: +52K envíos        │  Métrica 2: 0 extraviados  │
│  ├─ Métrica 3: 2hs Express        │  Métrica 4: 140 zonas      │
│  └─ Badge: "Socio Oficial MercadoLibre Flex" (Yellow 100)      │
├─────────────────────────────────────────────────────────────────┤
│  SECCIÓN 2: SERVICIOS (Blanco bg) — BENTO GRID ASIMÉTRICO       │
│  ├─ Card 1 (Express) — COL-SPAN-7  │  Card 2 (LowCost) - 5     │
│  ├─ Card 3 (Flex) — COL-SPAN-5     │  Card 4 (3PL) — COL-SPAN-7│
│  └─ Cada card: Double Bezel + Imagen blend + CTA Nested Pill   │
├─────────────────────────────────────────────────────────────────┤
│  SECCIÓN 3: CÓMO FUNCIONA (Azul 700 bg) — STEPPER VERTICAL     │
│  ├─ Paso 1: Cotizar (Anton #1)      │  Paso 2: Despachar (#2)  │
│  ├─ Paso 3: Rastrear (#3)           │  Paso 4: Entregar (#4)   │
│  └─ Conexión visual: Línea azul + dots amarillos               │
├─────────────────────────────────────────────────────────────────┤
│  SECCIÓN 4: PROOF SOCIAL / LOGOS (Blanco bg)                   │
│  ├─ Carousel de logos partners (grayscale → color hover)       │
│  └─ Testimonial cards (Double Bezel, 3-col desktop)            │
├─────────────────────────────────────────────────────────────────┤
│  SECCIÓN 5: CTA FINAL (Azul 700 bg)                             │
│  ├─ Headline Anton: "¿Listo para escalar tus envíos?"          │
│  ├─ Form inline: Email + Select servicio → Yellow CTA          │
│  └─ WhatsApp direct link (Green accent, solo aquí)             │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER (Azul 950 bg)                                           │
│  ├─ 4 columnas: Empresa | Servicios | Legal | Contacto         │
│  ├─ Newsletter signup (Yellow CTA)                             │
│  └─ Social icons (White/Blue hover)                            │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Regla de Alternancia Cromática (Inquebrantable)

| Sección # | Fondo | Texto Principal | Acentos | Cards Interiores |
|-----------|-------|-----------------|---------|------------------|
| 1 (Hero) | `bg-brand-blue` (700) | `text-white` | `text-brand-yellow` | `bg-white` (inner) + `bg-blue-50` (outer) |
| 2 (Servicios) | `bg-white` | `text-brand-blue` | `text-brand-yellow` | `bg-blue-700` (card bg) + `bg-white` (inner) |
| 3 (Cómo funciona) | `bg-brand-blue` (700) | `text-white` | `text-brand-yellow` | `bg-white` + `bg-blue-50` |
| 4 (Social Proof) | `bg-white` | `text-brand-blue` | `text-brand-yellow` | `bg-white` + `bg-blue-50` |
| 5 (CTA Final) | `bg-brand-blue` (700) | `text-white` | `text-brand-yellow` | `bg-white` + `bg-blue-50` |

> **NUNCA** dos secciones consecutivas con mismo fondo. **NUNCA** gradientes de página completa (`gradient-surface`, `gradient-dark` prohibidos como fondo base).

---

## 🎨 2. Hero Patterns (Patrones de Hero)

### 2.1 Hero Tipo "Control Tower" (Páginas de Servicio)

```
┌────────────────────────────────────────────────────────────────┐
│  BG: bg-brand-blue + radial-gradient(ellipse at 30% 30%,       │
│       rgba(255,255,255,0.03) 0%, transparent 60%)              │
│       + LogisticaNetworkCanvas (partículas/rutas sutiles)      │
│                                                                 │
│  GRID: lg:grid-cols-[60%_40%] gap-12 items-center              │
│                                                                 │
│  LEFT (Copy):                                                   │
│  ├─ Badge: "SERVICIO EXPRESS" (Yellow 500 bg, Blue 700 text)  │
│  ├─ H1 Anton: "Entregas en 2 horas / Mar del Plata"           │
│  │   └─ "2 HORAS" en Yellow highlight (inline)                 │
│  ├─ Body: "Tu paquete sale ahora. Lo rastreas en vivo."        │
│  ├─ CTA Group:                                                  │
│  │   ├─ Primary: "Solicitar Express" (Yellow Pill + Arrow)     │
│  │   └─ Secondary: "Ver cobertura" (Outline White)             │
│  └─ Trust Pills: [100% SEGURO] [RASTREO GPS] [COBERTURA TOTAL] │
│                                                                 │
│  RIGHT (Visual - "Digital Twin" del servicio):                 │
│  ├─ Double Bezel Card (Outer: Blue 50, Inner: White)           │
│  │   ├─ Header: Icon (Zap) + Badge "URGENTE"                   │
│  │   ├─ Image: Foto real hub/logística (object-cover, 40% op)  │
│  │   │   └─ Overlay: "Ruteo optimizado" (Blue 700 pill)        │
│  │   ├─ Live Card: "Reparto en Curso" (Blue 700 bg, Yellow)   │
│  │   │   ├─ ID: MDQ-EXP-2026  │  Moto: #847                     │
│  │   │   ├─ Origen: CD Centro  →  Destino: Güemes              │
│  │   │   └─ ETA: 14:32  │  ● LIVE                              │
│  │   ├─ Counter: "+12,847 ENVÍOS" (Anton, Yellow +)            │
│  │   └─ Floating Pill: "ENTREGA FLEX ACTIVA" (Yellow, pulse)   │
│  └─ 3D Tilt on hover (rotateX/Y ±10deg via mouse)              │
└────────────────────────────────────────────────────────────────┘
```

### 2.2 Hero Tipo "Cotizador Integrado" (/cotizar/*)

```
┌────────────────────────────────────────────────────────────────┐
│  BG: White (clean, sin ruido)                                  │
│                                                                 │
│  GRID: lg:grid-cols-[55%_45%] gap-8                            │
│                                                                 │
│  LEFT:                                                         │
│  ├─ Stepper Horizontal: [1 Cotizar] → [2 Detalles] → [3 Confirmar] │
│  │   (Anton numbers, Blue 700 circles, Blue 100 connectors)    │
│  ├─ Form Card (Double Bezel):                                   │
│  │   ├─ Origen/Destino (Autocomplete + Map pin icon)           │
│  │   ├─ Dimensiones/Peso (Inputs mono, tabular-nums)           │
│  │   ├─ Tipo servicio: Radio cards (Express/LowCost/Flex)      │
│  │   │   ├─ Express: bg-blue-700 text-white (selected)         │
│  │   │   ├─ LowCost: bg-blue-50 text-blue-700                  │
│  │   │   └─ Flex: bg-yellow-50 text-blue-700 border-yellow-200│
│  │   └─ CTA: "Calcular Precio" (Yellow Pill, full width)      │
│  └─ Micro-trust: "Precio final. Sin sorpresas. IVA incluido." │
│                                                                 │
│  RIGHT: (Sticky top-24)                                        │
│  ├─ Price Card (Double Bezel, Blue 700 bg, White inner)        │
│  │   ├─ "PRECIO ESTIMADO" (Label, Yellow)                      │
│  │   ├─ $1,850 (Anton, 4xl, White, tabular-nums)               │
│  │   ├─ Desglose: Base + Combustible + Seguro + IVA            │
│  │   ├─ Badge: "MENOR A 2HS" (Yellow 500)                      │
│  │   └─ "Ver detalle" (Link, Yellow underline hover)           │
│  ├─ Beneficios: [Seguro incluido] [Tracking GPS] [Soporte 24/7]│
│  └─ WhatsApp CTA (Green outline): "Hablar con asesor"         │
└────────────────────────────────────────────────────────────────┘
```

### 2.3 Hero Tipo "Institucional" (/nosotros/*, /contacto)

```
┌────────────────────────────────────────────────────────────────┐
│  BG: White                                                     │
│                                                                 │
│  CENTERED MAX-W-3XL:                                           │
│  ├─ Badge: "SOBRE NOSOTROS" (Blue 100 bg, Blue 700 text)      │
│  ├─ H1 Anton: "Conectamos Mar del Plata de punta a punta"     │
│  ├─ Lead: "20 años.No somos una app. Somos la red de motos..."       │
│  ├─ 3 Columnas Métricas (Anton numbers):                       │
│  │   +52K    │   0     │   140    │   2h                       │
│  │   Envíos   │ Extraviados  │ Zonas   │ Express Promedio      │
│  ├─ Divider: Blue 100 hr                                        │
│  └─ CTA: "Conocer al equipo" (Outline Blue)                    │
└────────────────────────────────────────────────────────────────┘
```

---

## 📦 3. Card System (Sistema de Tarjetas)

### 3.1 Card "Service Bento" (Página Servicios / Home)

```
┌─────────────────────────────────────────────────────────────┐
│  DOUBLE BEZEL OUTER                                         │
│  bg: (Sección Azul → Blue 50) | (Sección Blanca → Blue 50)  │
│  border: Blue 100 | radius: 1rem | padding: 0.5rem         │
│  shadow: float-shadow                                       │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ DOUBLE BEZEL INNER                                     │  │
│  │ bg: white | radius: 0.75rem | overflow: hidden        │  │
│  │ ┌───────────────────────────────────────────────────┐ │  │
│  │ │ IMAGE BLOCK (aspect-video, object-cover)          │ │  │
│  │ │ bg: Blue 700 | opacity-30 | mix-blend-luminosity  │ │  │
│  │ │ hover: scale-105 opacity-40 (transition 700ms)    │ │  │
│  │ └───────────────────────────────────────────────────┘ │  │
│  │ ┌───────────────────────────────────────────────────┐ │  │
│  │ │ CONTENT (p-8, flex-col, justify-between, h-full)  │ │  │
│  │ │ ├─ HEADER:                                        │ │  │
│  │ │ │  Icon Box: p-3 bg-yellow-500 rounded-xl         │ │  │
│  │ │ │  Badge: "URGENTE" (Blue 900 bg, Yellow text)    │ │  │
│  │ │ ├─ TITLE: "Envíos Express" (Anton, text-2xl/3xl)  │ │  │
│  │ │ │  hover: text-yellow-500                         │ │  │
│  │ │ ├─ DESC: "Mensajería en moto..." (Blue 100 text)  │ │  │
│  │ │ └─ CTA: "Ver más →" (Nested Pill: Yellow bg,       │ │  │
│  │ │     Blue text, Icon pill: Blue bg, Yellow icon)   │ │  │
│  │ │     hover: shadow-cta-glow, icon translate-x-1    │ │  │
│  │ └───────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
│  HOVER CARD:                                                │
│  transform: translateY(-6px) rotateX(4deg) rotateY(-2deg)  │
│  shadow: antigravity-deep                                   │
│  border-color: Blue 300                                     │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Card "Tracking / Live Status" (Dashboard, Hero Right)

```
┌─────────────────────────────────────────────────────────────┐
│  DOUBLE BEZEL (Outer: Blue 600 border, Inner: Blue 700)    │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ HEADER:                                               │  │
│  │ ├─ Icon Box: p-2 bg-yellow-500 rounded-xl (Bike icon) │  │
│  │ ├─ "REPARTO EN CURSO" (Anton, text-xs, White)         │  │
│  │ └─ ID: "MDQ-FLEX-2026" (Mono, text-[9px], Yellow)     │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ BODY: (Mono font throughout)                          │  │
│  │ ├─ Origen: "CD Centro" (Blue 300 label / White value) │  │
│  │ ├─ Destino: "Zona Güemes" (Blue 300 / Yellow value)   │  │
│  │ ├─ Moto: "#847" | Repartidor: "J. Pérez"             │  │
│  │ └─ ETA: "14:32" (Yellow, large)  ● LIVE (pulse)      │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Card "Trust / Proof" (Logos, Testimoniales, Certificaciones)

```
┌─────────────────────────────────────────────────────────────┐
│  MINIMAL CARD (bg-white, border Blue 100, shadow-minimal)  │
│  hover: border Blue 300 + shadow-soft-elevation             │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ p-6                                                    │  │
│  │ ├─ LOGO: grayscale → color on hover (h-10, object-contain)│
│  │ ├─ QUOTE: "Desde que usamos Flex..." (Body, Blue 700)  │  │
│  │ ├─ AUTHOR: Foto (w-10 rounded-full) + Nombre + Cargo  │  │
│  │ └─ BADGE: "MERCADOLIBRE FLEX PARTNER" (Yellow 100)    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧭 4. Navigation & Header (Inspirado FedEx/UPS)

### 4.1 Desktop Header (Sticky, Scrolled State)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BEFORE SCROLL: bg-brand-blue py-4                                   │
│  AFTER SCROLL:  bg-brand-blue/95 backdrop-blur-md                    │
│              border-b border-white/10 shadow-lg py-3                │
│                                                                       │
│  MAX-W-7XL MX-AUTO PX-4 LG:PX-8                                      │
│  FLEX ITEMS-CENTER JUSTIFY-BETWEEN                                   │
│                                                                       │
│  LEFT:                                                               │
│  ├─ Logo: Image (w-10 h-10) + Wordmark                              │
│  │   "Envíos" (White) + "Dosruedas" (Yellow) — Anton text-2xl       │
│  │   "tu solución confiable" — 9px, tracking-widest, Blue 100       │
│  │   hover: scale-105 (logo)                                         │
│                                                                       │
│  CENTER (lg:flex hidden):                                            │
│  ├─ Nav Items: Inicio | Servicios ▼ | Nosotros ▼ | Contacto        │
│  │   px-4 py-2, font-subheading, uppercase, tracking-wider         │
│  │   text-white → hover:text-brand-yellow + bg-white/5              │
│  │   Active: text-brand-yellow bg-white/10                          │
│  │   Dropdown: motion.div (AnimatePresence)                         │
│  │     bg-brand-blue, rounded-2xl, shadow-xl, border-white/10       │
│  │     Items: Icon + Label (White→Yellow) + Description (Blue 100) │
│                                                                       │
│  RIGHT:                                                              │
│  ├─ Phone: +54 223 660-2699 (Font-mono, Yellow icon)               │
│  └─ CTA: "Cotizar Envío" — YELLOW PILL                              │
│      bg-brand-yellow text-brand-blue                                │
│      border-2 border-brand-blue                                     │
│      shadow-[3px_3px_0px_var(--color-brand-blue)]                  │
│      hover:bg-brand-yellow/95 hover:scale-[1.02]                    │
│      active:scale-[0.98] active:translate-y-[1px]                   │
│      font-subheading, tracking-wider, uppercase                     │
└──────────────────────────────────────────────────────────────────────┘
```

### 4.2 Mobile Menu (Slide Down)

```
┌──────────────────────────────────────────────────────────────────────┐
│  BG: brand-blue | border-t border-white/10 | mt-3                    │
│  PX-4 PY-4 SPACE-Y-3                                                 │
│                                                                       │
│  ├─ Nav Items (full width, py-2, font-subheading, uppercase)        │
│  │   Icon (Yellow) + Label (White → Yellow hover)                   │
│  ├─ Dropdowns: ChevronDown rotate-180 (Yellow when open)            │
│  │   Sub-items: pl-6, grid gap-2, ChevronRight (Yellow/75)          │
│  └─ CTA FULL WIDTH: "Cotizar Envío" (Yellow Pill, text-xl, py-3)   │
└──────────────────────────────────────────────────────────────────────┘
```

---

## 📋 5. Formularios & Cotizadores (Inspirado UPS/ML)

### 5.1 Input Anatomy

```
┌──────────────────────────────────────────────────────────────────┐
│  LABEL (text-label, uppercase, tracking-widest, Blue 700)       │
│  └─ "ORIGEN"                                                     │
├──────────────────────────────────────────────────────────────────┤
│  INPUT WRAPPER (relative)                                        │
│  ├─ ICON (absolute left-4 top-1/2 -translate-y-1/2, Blue 400)   │
│  ├─ INPUT:                                                       │
│  │   h-11 px-4 pl-12 (con icon) / px-4 (sin icon)              │
│  │   bg-white border-2 border-blue-100                          │
│  │   text-brand-blue-700 placeholder:text-brand-blue-300        │
│  │   font-sans text-base rounded-xl                             │
│  │   transition-all duration-200                                │
│  │   focus: border-brand-blue-700 ring-2 ring-brand-blue-500/20  │
│  │   focus: outline-none                                         │
│  │   error: border-red-500 ring-red-500/20                      │
│  │   success: border-green-500 ring-green-500/20                │
│  └─ HELP TEXT (text-[10px], Blue 400, mt-1.5)                   │
│      "Ej: Av. Colón 1234, Mar del Plata"                        │
└──────────────────────────────────────────────────────────────────┘
```

### 5.2 Radio Card Selector (Tipo Servicio)

```
┌──────────────────────────────────────────────────────────────────┐
│  GRID grid-cols-1 sm:grid-cols-3 gap-4                           │
│                                                                   │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────┐│
│  │   EXPRESS           │ │   LOWCOST           │ │    FLEX      ││
│  │  (Selected)         │ │                     │ │             ││
│  ├─────────────────────┤ ├─────────────────────┤ ├─────────────┤│
│  │ ⚡ Zap Icon         │ │ 📦 Package Icon     │ │ 🚚 Truck    ││
│  │                     │ │                     │ │             ││
│  │ Entregas en 2hs     │ │ Económico, mismo día│ │ Integración ││
│  │ Cobertura total MDP │ │ Sin tracking GPS    │ │ MercadoLibre││
│  │                     │ │                     │ │             ││
│  │ $1,850              │ │ $950                │ │ $1,200      ││
│  │ (Mono, 2xl, Yellow) │ │ (Mono, 2xl, Blue)   │ │ (Mono,Yel)  ││
│  └─────────────────────┘ └─────────────────────┘ └─────────────┘│
│                                                                   │
│  STATES:                                                          │
│  • Default: bg-white border-blue-100                             │
│  • Hover: border-blue-300 shadow-md                              │
│  • Selected: bg-blue-700 border-blue-700 text-white             │
│    (LowCost: bg-blue-50 border-blue-200 text-blue-700)          │
│    (Flex: bg-yellow-50 border-yellow-200 text-blue-700)         │
│  • Focus: ring-2 ring-blue-500/20                                │
└──────────────────────────────────────────────────────────────────┘
```

### 5.3 Stepper Horizontal (Cotizador Multi-paso)

```
┌──────────────────────────────────────────────────────────────────┐
│  FLEX ITEMS-CENTER JUSTIFY-BETWEEN mb-8                          │
│                                                                   │
│  STEP 1          CONNECTOR           STEP 2          CONNECTOR  │
│  ┌─────────┐     ┌───────────────┐  ┌─────────┐   ┌─────────┐  │
│  │   1     │─────│               │──│    2    │───│    3    │  │
│  │ (Anton) │     │  Blue 100     │  │ (Anton) │   │ (Anton) │  │
│  │ Blue 700│     │  h-0.5        │  │ Blue 100│   │ Blue 100│  │
│  │ Circle  │     │  (Blue 700    │  │ Circle  │   │ Circle  │  │
│  │  w-10   │     │   cuando     │  │  w-10   │   │  w-10   │  │
│  │         │     │  completado)  │  │         │   │         │  │
│  └─────────┘     └───────────────┘  └─────────┘   └─────────┘  │
│     │                                     │           │         │
│  LABEL                                  LABEL       LABEL       │
│  "Cotizar" (Blue 700)                   "Detalles"    "Confirmar"│
│  text-label, tracking-widest                                             │
│                                                                   │
│  ACTIVE: Circle = Blue 700, Label = Blue 700                       │
│  COMPLETED: Circle = Yellow 500, Check icon, Label = Blue 400     │
│  PENDING: Circle = Blue 100, Label = Blue 300                      │
└──────────────────────────────────────────────────────────────────┘
```

---

## 📊 6. Data Display & Tables (Inspirado Correo Uruguayo / FedEx)

### 6.1 Pricing Table (LowCost, 3PL)

```
┌────────────────────────────────────────────────────────────────────┐
│  TABLE (w-full, border-collapse, font-sans)                        │
│  THEAD: bg-blue-50, border-b-2 border-blue-100                     │
│  TH: px-4 py-3 text-left text-label text-blue-700 uppercase        │
│  TBODY: divide-y divide-blue-100                                   │
│  TD: px-4 py-4 text-blue-700                                       │
│  TR: hover:bg-blue-50/50 transition-colors                         │
│                                                                     │
│  ┌──────────────┬───────────┬───────────┬───────────┬────────────┐│
│  │ ZONA         │ EXPRESS   │ LOWCOST   │ FLEX      │ COBERTURA  ││
│  ├──────────────┼───────────┼───────────┼───────────┼────────────┤│
│  │ Centro       │ $1,850    │ $950      │ $1,200    │ ✓ 2hs      ││
│  │ macro        │ (Mono)    │ (Mono)    │ (Mono)    │            ││
│  ├──────────────┼───────────┼───────────┼───────────┼────────────┤│
│  │ Norte        │ $2,100    │ $1,100    │ $1,350    │ ✓ 2hs      ││
│  ├──────────────┼───────────┼───────────┼───────────┼────────────┤│
│  │ Sur          │ $2,100    │ $1,100    │ —         │ ✓ 4hs      ││
│  ├──────────────┼───────────┼───────────┼───────────┼────────────┤│
│  │ Periferia    │ $2,400    │ $1,300    │ —         │ ✓ Same-day ││
│  └──────────────┴───────────┴───────────┴───────────┴────────────┘│
│                                                                     │
│  MONO FONT para todos los números (tabular-nums)                   │
│  Yellow highlight en la columna recomendada                        │
└────────────────────────────────────────────────────────────────────┘
```

### 6.2 Tracking Timeline (Vertical)

```
┌────────────────────────────────────────────────────────────────────┐
│  RELATIVE (connector line absolute left-6)                         │
│                                                                     │
│  ITEM 1 (COMPLETED)                                                │
│  ├─ DOT: w-3 h-3 bg-green-500 border-2 border-white (z-10)        │
│  ├─ LINE: absolute left-7 top-0 bottom-0 w-0.5 bg-blue-100         │
│  └─ CONTENT: ml-6                                                   │
│      ├─ TIME: "10:24" (Mono, text-sm, Blue 400)                   │
│      ├─ TITLE: "Recibido en CD Centro" (Font-medium, Blue 700)    │
│      └─ META: "Escaneado por operador #42" (text-sm, Blue 400)    │
│                                                                     │
│  ITEM 2 (ACTIVE)                                                   │
│  ├─ DOT: w-3 h-3 bg-yellow-500 border-2 border-white              │
│  │   animate-pulse (ring-yellow-500/50)                            │
│  ├─ LINE: bg-yellow-500 (active portion)                           │
│  └─ CONTENT:                                                        │
│      ├─ TIME: "14:32" (Mono, Yellow, text-lg)                      │
│      ├─ TITLE: "En ruta → Zona Güemes" (Bold, Blue 700)           │
│      └─ META: "Moto #847 • J. Pérez • ETA 14:45" (Blue 400)       │
│                                                                     │
│  ITEM 3 (PENDING)                                                  │
│  ├─ DOT: w-3 h-3 bg-blue-100 border-2 border-white                │
│  ├─ LINE: bg-blue-100                                              │
│  └─ CONTENT: text-blue-300                                         │
│      "Entrega estimada 14:45-15:00"                                │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🖼️ 7. Imagen & Photography Direction

### 7.1 Principios (Anti-Stock, Pro-Operational)

| NO usar | SÍ usar |
|---------|---------|
| Motos volando / speedlines / motion blur fake | Hubs reales: cintas transportadoras, estanterías, scanners |
| Modelos sonriendo con cajas | Operarios reales: escaneando, cargando, ruteando en tablet |
| Gradientes de colores neón | Paleta fría: Azul 700/600/500 dominantes, Blanco, toques Yellow 500 solo en chalecos/conos/etiquetas reales |
| Fotos genéricas de "logística" | **Tu propia infraestructura**: CD Centro, motos branded, mapa MDP, dashboard interno |

### 7.2 Tratamiento Técnico (CSS)

```css
/* Hero/Service Card Images */
.service-card-image {
  /* Base */
  background-color: #0636A5; /* Blue 700 fallback */
  opacity: 0.3;
  mix-blend-mode: luminosity; /* Preserva luminance, usa nuestra paleta */
  
  /* Hover */
  transition: transform 700ms cubic-bezier(0.25,0.8,0.25,1), opacity 500ms ease;
}
.service-card:hover .service-card-image {
  transform: scale(1.05);
  opacity: 0.4;
}

/* Trust/Logos */
.partner-logo {
  filter: grayscale(100%) contrast(1.2);
  transition: filter 300ms ease;
}
.partner-logo:hover {
  filter: grayscale(0%) contrast(1);
}

/* Background Textures (Hero) */
.hero-bg-texture {
  background-image: url('/hero-background.jpeg'); /* Mapa textura */
  opacity: 0.03;
  mix-blend-mode: overlay;
}
```

### 7.3 Shot List Requerido (Para Producción)

| Categoría | Shots Específicos | Uso |
|-----------|-------------------|-----|
| **Hub/CD** | Cinta transportadora con paquetes, escáner láser leyendo códigos, operario con pistola RFID, estanterías organizadas por zona | Hero Express, Card Express, Background textures |
| **Flota** | Motos branded alineadas en patio, casco + chaleco amarillo (real), caja trasera abierta mostrando organización | Hero Flex, Card LowCost, Footer |
| **Tech** | Tablet con app de ruteo (mapa MDP con rutas de colores), dashboard "Control Tower" con métricas en vivo, QR en paquete | Hero Cotizador, Tracking Card, Hero Flex |
| **Entrega** | Mano entregando paquete a recepción, firma digital en tablet, foto de prueba de entrega (POD) | Hero Express, Trust cards, FAQ |
| **Mapa MDP** | Vista aérea zona centro, heatmap de cobertura, ruta optimizada con waypoints | Hero background, Network Canvas, Cobertura page |

---

## 🎯 8. Trust Signals & Conversion Elements

### 8.1 Trust Bar (Debajo del Hero, Full Width)

```
┌────────────────────────────────────────────────────────────────────────┐
│  BG: Blue 50 | PY-12 | BORDER-Y Blue 100                               │
│                                                                         │
│  GRID: grid-cols-2 md:grid-cols-4 GAP-8 TEXT-CENTER                    │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  +52,847    │  │     0       │  │   2 HS      │  │   140       │   │
│  │  (Anton,    │  │  (Anton,    │  │  (Anton,    │  │  (Anton,    │   │
│  │  4xl,       │  │  4xl,       │  │  4xl,       │  │  4xl,       │   │
│  │  Blue 700)  │  │  Green 600) │  │  Blue 700)  │  │  Blue 700)  │   │
│  ├─────────────┤  ├─────────────┤  ├─────────────┤  ├─────────────┤   │
│  │ ENVÍOS      │  │ EXTRAVIADOS │  │ EXPRESS     │  │ ZONAS       │   │
│  │ ESTE MES    │  │ (100% SEGURO)│  │ PROMEDIO    │  │ COBERTURA   │   │
│  │ (Label,     │  │ (Label,     │  │ (Label,     │  │ (Label,     │   │
│  │  Blue 400)  │  │  Blue 400)  │  │  Blue 400)  │  │  Blue 400)  │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│                                                                         │
│  DIVIDER: Blue 100                                                     │
│                                                                         │
│  BADGE CENTER: "SOCIO OFICIAL MERCADOLIBRE FLEX"                       │
│  BG: Yellow 100 | TEXT: Blue 700 | PX-6 PY-2 ROUNDED-FULL             │
│  FONT-SUBHEADING, TRACKING-WIDEST, UPPERCASE                          │
└────────────────────────────────────────────────────────────────────────┘
```

### 8.2 Conversion CTAs (Jerarquía Estricta)

| Nivel | Componente | Estilo | Uso |
|-------|------------|--------|-----|
| **1 - Primario Absoluto** | `CTA Nested Pill` | `bg-yellow-500 text-blue-900 border-yellow-500 hover:bg-yellow-400 hover:shadow-cta-glow` | "Solicitar Express", "Cotizar Envío", "Integrar Flex" |
| **2 - Primario Contexto** | `Elevated Button` | `bg-white text-blue-700 border-blue-100 shadow-elevated hover:shadow-hover-lift hover:-translate-y-1` | Sobre fondos Blue 700: "Ver Servicios", "Ver Cobertura" |
| **3 - Secundario** | `Outline Button` | `border-2 border-blue-700 text-blue-700 hover:bg-blue-50` | "Ver Tarifas", "Cómo Funciona", "Leer Más" |
| **4 - Ghost/Utility** | `Ghost Button` | `text-blue-700 hover:bg-blue-50` | "Ayuda", "Términos", links inline |
| **5 - WhatsApp** | `Green Accent` | `border-2 border-green-600 text-green-600 hover:bg-green-50` | **Solo** en: Hero Cotizador, Header Mobile, Footer, Contacto |

### 8.3 Badge System (Semantic, No Decorative)

```
┌─────────────────────────────────────────────────────────────────┐
│  URGENTE         │ bg-yellow-500 text-blue-700 border-yellow-500│
│  ECONÓMICO       │ bg-blue-100 text-blue-700 border-blue-200    │
│  100% SEGURO     │ bg-blue-700 text-white border-blue-700       │
│  COBERTURA TOTAL │ bg-blue-700 text-white border-blue-700       │
│  FLEX ACTIVO     │ bg-yellow-100 text-blue-700 border-yellow-200│
│  INTEGRACIÓN API │ bg-white text-blue-700 border-blue-200       │
│  NUEVO           │ bg-yellow-500 text-blue-700 (animate-pulse)  │
│  BETA            │ bg-blue-100 text-blue-700 border-blue-200    │
│                                                                 │
│  TODOS: font-subheading, uppercase, tracking-widest, text-xs,  │
│  px-2.5 py-0.5, rounded-full, border, font-bold                │
└─────────────────────────────────────────────────────────────────┘
```

---

## ♿ 9. Accessibility & Motion (Inspirado FedEx a11y)

### 9.1 Focus Visible (Obligatorio)

```css
/* Global focus ring — NUNCA remover outline sin replacement */
*:focus-visible {
  outline: none;
  ring: 2px;
  ring-color: var(--color-brand-blue-500);
  ring-offset: 2px;
  ring-offset-color: var(--color-brand-white-50);
}

/* Sobre fondos oscuros (Blue 700) */
.bg-brand-blue *:focus-visible {
  ring-offset-color: var(--color-brand-blue-700);
}

/* Sobre Yellow CTA */
.bg-brand-yellow-500 *:focus-visible {
  ring-color: var(--color-brand-blue-700);
  ring-offset-color: var(--color-brand-yellow-500);
}
```

### 9.2 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Excepciones: contadores, loading spinners funcionales */
  .animate-counter-up,
  .animate-spin {
    animation-duration: 0.8s !important;
  }
}
```

### 9.3 Skip Link

```tsx
// Primer elemento en <body>
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only fixed top-4 left-4 z-[1000] 
             bg-brand-blue text-white px-4 py-2 rounded-xl 
             font-subheading tracking-wider uppercase
             shadow-lg"
>
  Saltar al contenido principal
</a>
<main id="main-content" tabIndex={-1}>...</main>
```

### 9.4 Color Contrast (WCAG AA Verificado)

| Combinación | Ratio | Estado |
|-------------|-------|--------|
| White sobre Blue 700 | **8.5:1** | ✅ AAA |
| Blue 700 sobre White | **8.5:1** | ✅ AAA |
| Blue 900 sobre Yellow 500 | **6.8:1** | ✅ AA Large / ✅ AAA Normal |
| Blue 400 sobre White | **4.6:1** | ✅ AA Large / ❌ AA Normal (solo labels large) |
| Yellow 500 sobre White | **1.9:1** | ❌ **NUNCA usar Yellow 500 text sobre White** |

> **Regla**: Texto sobre Amarillo 500 **siempre** Blue 900. Texto sobre Blue 700 **siempre** White.

---

## 🧩 10. Component Library — Implementation Priority

### 10.1 Fase 1 (Core — Ya implementado, verificar tokens)
- [x] `Button` (variants: default, glow, elevated, haptic, outline, ghost, link)
- [x] `Card` (variants: default, bezel, glass, elevated, minimal)
- [x] `Input` (states: default, focus, error, success, disabled)
- [x] `Badge` (variants: urgent, secure, economic, flex, neutral, outline)
- [x] `Accordion` (border-blue-100, animate)
- [x] `OptimizedHeader` (sticky, dropdown, mobile menu, CTA)
- [x] `HeroAnimado` (parallax, canvas, 3D cards, counter)

### 10.2 Fase 2 (Nuevos — Prioridad Alta)
| Componente | Descripción | Tokens Clave |
|------------|-------------|--------------|
| `Stepper` | Horizontal (cotizador) + Vertical (cómo funciona) | Anton numbers, Blue/Yellow dots, connectors |
| `PricingTable` | Responsive, mono font, highlight column | tabular-nums, Yellow highlight row |
| `TrackingTimeline` | Vertical, live dot pulse, connector line | Green/Yellow/Blue dots, mono times |
| `RadioCardGroup` | Selector tipo servicio (Express/LowCost/Flex) | Selected states per variant |
| `TrustBar` | Métricas + Partner badge | Anton numbers, Yellow partner badge |
| `CTANestedPill` | Botón primario con icon pill interno | Yellow bg, Blue text, icon pill |
| `DoubleBezelCard` | Wrapper outer/inner formalizado | Blue 50 outer, White inner, radius calc |
| `FloatTiltCard` | Hover 3D tilt + antigravity shadow | motion/react, rotateX/Y |

### 10.3 Fase 3 (Dashboard / Portal Cliente)
- `DataTable` (sort, filter, pagination, mono font)
- `StatCard` (metric + trend + sparkline)
- `ShippingMap` (Leaflet + custom markers, route lines)
- `NotificationToast` (slide-in, status colors)
- `Avatar` (initials, photo, status ring)
- `DropdownMenu` (Radix-based, motion)
- `Tooltip` (floating-ui, glass-card-blue)

---

## 📱 11. Responsive Behavior (Mobile-First)

### 11.1 Breakpoint Behavior

| Componente | <640px (xs) | 640-768px (sm) | 768-1024px (md) | >1024px (lg) | >1280px (xl) |
|------------|-------------|----------------|-----------------|--------------|--------------|
| **Hero Grid** | 1 col, stack vertical | 1 col | 1 col | 2 col (60/40) | 2 col (60/40) |
| **Service Bento** | 1 col, h-auto | 1 col | 2 col (1fr 1fr) | 12-col asymmetric | 12-col asymmetric |
| **Nav** | Hamburger + Bottom CTA | Hamburger | Full horizontal | Full horizontal | Full horizontal |
| **CTA Group** | Stack vertical, full width | Stack vertical | Row, auto width | Row, auto width | Row, auto width |
| **Pricing Table** | Horizontal scroll | Horizontal scroll | 4 col | 4 col | 4 col |
| **Tracking Timeline** | Compact (dots smaller) | Compact | Standard | Standard | Standard |
| **Footer** | 1 col stack | 2 col | 4 col | 4 col | 4 col |
| **Trust Bar** | 2x2 grid | 2x2 grid | 4 col | 4 col | 4 col |

### 11.2 Container Padding

```css
/* Mobile First */
.container-page { padding-inline: 1rem; }  /* px-4 */

/* sm: 640px */
@media (min-width: 640px) { .container-page { padding-inline: 1.5rem; } } /* px-6 */

/* lg: 1024px */
@media (min-width: 1024px) { .container-page { padding-inline: 2rem; } } /* px-8 */

/* xl: 1280px */
@media (min-width: 1280px) { .container-page { max-width: 80rem; } } /* max-w-7xl */
```

---

## 🚀 12. Implementation Roadmap

### Semana 1: Token Audit & Fix
- [ ] Revisar `globals.css` vs `design-tokens.md` — eliminar discrepancias
- [ ] Migrar todos los `slate-*`, `gray-*`, `zinc-*` hardcodeados a tokens semánticos
- [ ] Verificar `Button`, `Card`, `Input`, `Badge` usan solo `cva` con tokens semánticos
- [ ] Añadir `@utility` classes faltantes (`cta-nested-pill`, `double-bezel-*`, `float-tilt-card`)

### Semana 2: Hero & Service Pages
- [ ] Refactor `HeroAnimado` → Control Tower pattern (RIGHT: tracking card + counter + float pill)
- [ ] Crear `ServiceBentoCard` component reutilizable
- [ ] Actualizar `/servicios/*` con Bento grid asimétrico + double bezel
- [ ] Implementar `TrustBar` component

### Semana 3: Cotizador & Formularios
- [ ] `Stepper` horizontal component
- [ ] `RadioCardGroup` para selector de servicio
- [ ] `PriceCard` sticky (right side cotizador)
- [ ] Validación inputs con tokens semánticos (focus ring, error/success states)

### Semana 4: Tracking & Dashboard
- [ ] `TrackingTimeline` vertical component
- [ ] `LiveStatusCard` (Reparto en Curso) reusable
- [ ] `DataTable` base para tarifas/admin
- [ ] `ShippingMap` integration (Leaflet + custom markers)

### Semana 5: Polish & A11y
- [ ] Focus visible audit completo
- [ ] Reduced motion testing
- [ ] Color contrast audit (todas las combinaciones)
- [ ] Skip links en todas las páginas
- [ ] ARIA labels en componentes interactivos complejos
- [ ] Performance: LCP < 2.5s, CLS < 0.1, TBT < 200ms

---

## 📋 13. Checklist de Calidad Visual (Pre-Launch)

### Por Página
- [ ] **Alternancia cromática** correcta (Azul 700 ↔ Blanco ↔ Azul 50 ↔ Blanco)
- [ ] **Zero slates/grays** externos — solo brand-blue/yellow/white
- [ ] **Tipografía**: Anton (Display/H1-H2), Bebas/IBM Plex Sans (Labels/H3), Geist Mono (Data)
- [ ] **Double Bezel** en todas las cards informativas
- [ ] **CTA Primario** = Yellow Pill (Nested) — único uso de Yellow 500 bg
- [ ] **Imágenes**: mix-blend-luminosity + Blue 700 bg + hover scale
- [ ] **Badges** semánticos (no decorativos) — uppercase, tracking-widest
- [ ] **Focus rings** visibles en TODOS los interactivos
- [ ] **Reduced motion** respeta `prefers-reduced-motion`
- [ ] **Container** max-w-7xl + padding responsive
- [ ] **Footer** Azul 950, 4 columnas, newsletter Yellow CTA

### Global
- [ ] `globals.css` @theme = única fuente de tokens
- [ ] `cva` variants = única API de componentes
- [ ] Zero `className` hardcodeados con valores no-token
- [ ] Storybook/Chromatic para regression visual
- [ ] Lighthouse CI en PR: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 90

---

## 📚 14. Referencias Visuales (Moodboard Interno)

| Referencia | Qué Tomar | Qué EVITAR |
|------------|-----------|------------|
| **FedEx.com** | Hero widget funcional, trust bar, alternancia secciones, stepper tracking | Color purple/naranja (nuestra paleta es distinta) |
| **UPS.com** | Shield/trust badges, pricing tables claras, segmentación B2B/B2C | Marrón/ dorado, densidad extrema |
| **DHL.com** | Amarillo como SOLO color de acción, photography industrial, global nav | Rojo, gradientes suaves, ilustraciones 3D genéricas |
| **Correo Uruguayo** | Segmentación Personas/Pymes/Empresas, fat footer institucional, alertas phishing prominentes | Azul claro genérico, density baja |
| **MercadoLibre Flex (seller center)** | Tracking cards en vivo, stepper de estado, integración API docs, webhooks | Amarillo ML (#FFE600) — usamos nuestro Yellow 500 |
| **Stripe.com** (referencia UI) | Double bezel cards, nested pill CTAs, mono font para data, motion sutil | Púrpura brand, ilustraciones abstractas |

---

## ✅ Conclusión

Esta propuesta **no inventa nada nuevo**. Sistema tiza los principios visuales de las 5 mayores referencias logísticas mundiales y los **traduce 1:1 a nuestros tokens existentes** (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF, Anton, IBM Plex Sans, Geist Mono).

Cada componente, patrón de hero, card, formulario y trust signal está diseñado para **construirse hoy** con el `globals.css` y `tailwind.config.ts` actuales, usando únicamente `cva` variants y `@utility` classes ya definidas o documentadas aquí.

**El resultado**: Un sitio que se siente tan sólido, rápido y confiable como FedEx/UPS/DHL, pero con la identidad inconfundible de **Envíos DosRuedas** — la infraestructura logística soberana de Mar del Plata.

---

**Documento vivo** — Actualizar con cada release.  
**Próxima revisión**: Sprint 3 (post-cotizador refactor).