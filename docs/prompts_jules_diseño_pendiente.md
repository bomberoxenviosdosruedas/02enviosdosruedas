# 🎯 Prompts para Jules — Implementación Completa del Sistema de Diseño Premium

> **Contexto:** El proyecto **Envíos DosRuedas** (Next.js 15, TypeScript, Tailwind CSS, Motion/React) ya tiene implementado el nuevo sistema de diseño en la **Home** y páginas principales de **Servicios / Cotizar / Nosotros / Contacto**.  
> **Falta aplicar** la misma estética *cinemática / premium / double-bezel / brand-colors* a:
> 1. Página **Admin Imágenes**
> 2. Todos los **componentes de detalle** de páginas de servicio (Hero, Features, Pricing, HowItWorks, Benefits, Requirements)
> 3. Componentes de **Cotizador** (Express & LowCost)
> 4. Componentes de **Contacto**
> 5. Componentes de **Nosotros** (Sobre Nosotros, FAQ, Redes)
> 6. Componentes de **Layout compartido** (OptimizedHeader, OptimizedFooter, CarruselRedes)

---

## 📋 Referencia Obligatoria — DESIGN SYSTEM ACTUAL

### Paleta de Colores (CSS Variables / Tailwind)
```css
/* Colores de Marca — NO USAR OTROS */
--color-brand-blue:     #0636A5;  /* Egyptian Blue — Primary */
--color-brand-blue-50:  #E8EEF8;
--color-brand-blue-100: #D1DBF1;
--color-brand-blue-200: #A3B7E3;
--color-brand-blue-300: #7493D5;
--color-brand-blue-400: #466FC7;
--color-brand-blue-500: #174BB9;
--color-brand-blue-600: #0D3A9B;
--color-brand-blue-700: #0636A5;
--color-brand-blue-800: #042878;
--color-brand-blue-900: #021A46;

--color-brand-yellow:   #FFEC01;  /* Sunbeam Yellow — Accent */
--color-brand-yellow-50: #FFFDE7;
--color-brand-yellow-100: #FFF9C4;
--color-brand-yellow-200: #FFF59D;
--color-brand-yellow-300: #FFF176;
--color-brand-yellow-400: #FFEE58;
--color-brand-yellow-500: #FFEB3B;
--color-brand-yellow-600: #FDD835;
--color-brand-yellow-700: #F9A825;

--color-brand-white:    #FFFFFF;  /* Canvas White */
--color-brand-ink:      #18181B;  /* Zinc-950 — Primary Text */
--color-brand-dark:     #09090B;  /* Zinc-950 — Dark Canvas */

--color-green-500:      #16A34A;  /* WhatsApp CTA */
--color-green-400:      #22C55E;
--color-green-700:      #15803D;
```

### Tipografía (next/font — variables CSS)
```css
--font-display:  'Anton',         sans-serif;  /* Títulos hero, uppercase, tracking-tight */
--font-subheading: 'Bebas_Neue',  sans-serif;  /* Etiquetas, badges, uppercase, tracking-widest */
--font-sans:     'Outfit',        sans-serif;  /* UI, body, descripciones */
--font-mono:     'JetBrains_Mono', monospace;  /* Números, contadores, IDs, código */
```

### Clases Utilitarias Clave (ya definidas en `globals.css`)
```css
/* Double Bezel — Tarjetas premium con borde interior + exterior */
.double-bezel-outer { @apply relative rounded-xl border border-brand-blue-100 bg-white/80 backdrop-blur-sm; }
.double-bezel-inner { @apply absolute inset-1 rounded-lg border border-white/50 bg-white p-6; }

/* Bezel simple para cards oscuras */
.bezel-inner { @apply absolute inset-1 rounded-lg border border-white/10 bg-brand-blue-800/50; }

/* CTA Nested Pill — Botones con icono deslizante */
.cta-nested-pill { @apply relative overflow-hidden rounded-full px-6 py-3.5 font-subheading text-sm uppercase tracking-wider transition-all duration-300; }
.cta-nested-icon { @apply absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300; }

/* Sombras del sistema */
.shadow-float { box-shadow: 0 4px 20px -4px rgba(6,54,165,0.15), 0 0 0 1px rgba(6,54,165,0.08); }
.shadow-elevated { box-shadow: 0 10px 40px -10px rgba(6,54,165,0.25), 0 0 0 1px rgba(6,54,165,0.1); }
.shadow-hover-lift { box-shadow: 0 20px 50px -12px rgba(6,54,165,0.3), 0 0 30px rgba(255,236,1,0.15); }
.shadow-antigravity-deep { box-shadow: 0 30px 60px -15px rgba(6,54,165,0.4), 0 0 50px rgba(255,236,1,0.2); }
.shadow-cta-glow { box-shadow: 0 0 30px rgba(255,236,1,0.4), 0 0 60px rgba(255,236,1,0.2); }
.shadow-soft-elevation { box-shadow: 0 8px 30px -8px rgba(6,54,165,0.12), 0 0 0 1px rgba(6,54,165,0.06); }

/* Animaciones Spring premium */
.ease-spring { transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); }
.ease-smooth { transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1); }
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
@keyframes float-slow { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.02); } }
.animate-pulse-subtle { animation: pulse-subtle 3s ease-in-out infinite; }
@keyframes pulse-subtle { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }

/* Kinetic Font Stretch — Solo para títulos Anton */
.kinetic-font-stretch { @apply cursor-pointer select-none transition-all duration-300; }
.kinetic-font-stretch:hover { transform: scaleX(1.02) scaleY(1.01); letter-spacing: -0.01em; }

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
```

### Patrones de Layout Reutilizables
```tsx
// Ambient Glow Orbs (fondo de páginas de servicio)
<div className="absolute top-[20%] left-[-15%] w-[40vw] h-[40vw] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
<div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] bg-brand-yellow/3 rounded-full blur-[110px] pointer-events-none animate-float-slow" style={{animationDelay: '-3s'}} />

// Grid Pattern Sutil
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,54,165,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,54,165,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

// Motion Variants Estándar
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 150, damping: 18 } }
};
```

---

## 🎯 PROMPTS POR CATEGORÍA

---

### 1️⃣ ADMIN IMÁGENES — `src/app/admin/imagenes/page.tsx` + `AdminImagenesClient.tsx`

#### Prompt para Jules
```markdown
## Tarea: Rediseñar Admin Imágenes con Sistema de Diseño Premium

**Archivos a modificar:**
- `src/app/admin/imagenes/page.tsx` (Server Component)
- `src/app/admin/imagenes/AdminImagenesClient.tsx` (Client Component)

**Estado actual:** Layout simple `bg-brand-white-50 pt-32`, sin ambient glow, sin double-bezel, tipografía genérica.

**Objetivo:** Aplicar estética premium consistente con el resto del sitio:
- Dark mode canvas (`bg-brand-dark text-white`) con ambient glow orbs azules/amarillos
- Header con doble bisel y badge institucional
- Tarjetas de imágenes en grid bento asimétrico con `double-bezel-outer` / `double-bezel-inner`
- Formularios con inputs `cta-nested-pill` style, focus ring brand-yellow
- Tabla de metadatos con tipografía mono para IDs, timestamps
- Botones de acción con `cta-nested-pill` (primary: brand-yellow, secondary: white/blue)
- Carrusel de redes sociales (`CarruselRedes`) al final como en páginas públicas
- Respeto estricto a `prefers-reduced-motion`

**Componentes a reutilizar:**
- `CarruselRedes` (ya existe en `src/components/layout/CarruselRedes.tsx`)
- Patrones de `motion.div` con `whileInView` y `viewport={{ once: true, margin: '-100px' }}`

**Entregables:**
1. `page.tsx` actualizado con layout premium + ambient orbs
2. `AdminImagenesClient.tsx` completamente rediseñado
3. CSS custom properties usadas (no valores hardcodeados)
4. TypeScript strict, sin `any`, accesibilidad completa (ARIA labels, focus visible)
```

---

### 2️⃣ SERVICIOS EXPRESS — Componentes de Detalle

#### 2.1 `ExpressHero.tsx`
```markdown
## Tarea: Rediseñar ExpressHero — Hero Cinemático Estilo Home

**Archivo:** `src/components/servicios/express/ExpressHero.tsx`

**Referencia visual:** `HeroAnimado.tsx` (sección izquierda: copy + CTAs; derecha: tarjetas 3D flotantes con FloatCard)

**Especificaciones:**
- Fondo `bg-brand-blue-700 text-white min-h-[90dvh] flex items-center`
- Ambient mesh gradients (3 radiales: azul, amarillo, azul profundo)
- Grid 2 cols (lg: 60/40) — Copy a la izquierda, Visual a la derecha
- **Copy:**
  - Badge: `TU SOLUCIÓN CONFIABLE` (brand-yellow bg, brand-blue text, border brand-yellow, shadow glow)
  - Título `h1` Anton 3 líneas: "ENTREGAS INMEDIATAS" / "EN MAR DEL PLATA" / "MENOS DE 2 HORAS" — línea 2 highlight brand-yellow bg
  - Body: "La solución premium para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con certeza absoluta."
  - Dual CTA: Primary `Solicitar Express` (brand-yellow nested pill) → `/cotizar/express` | Secondary `Ver Detalles` (white nested pill) → `#caracteristicas`
  - Trust Pills: 3 items (Shield/Zap/MapPin) con iconos brand-yellow, texto uppercase Bebas Neue
- **Visual Derecho:** 3 tarjetas FloatCard (depth 10/40/70) estilo Control Tower:
  1. Mapa ruteo (imagen `/card_mapa.webp`) — badge "Optimizado"
  2. Detalle envío en curso (bg brand-blue-700) — ID tracking, Origen/Destino, "ENTREGA EXPRESS ACTIVA" pill brand-yellow
  3. Contador animado +52K ENVÍOS (Counter component reutilizado)
  4. Pill flotante "ENTREGA EXPRESS ACTIVA" con pulse dot
- Accesibilidad: `role="img"`, `aria-label`, `prefers-reduced-motion` desactiva transform 3D
- Reutilizar `FloatCard` y `Counter` de `HeroAnimado.tsx`
```

#### 2.2 `ExpressFeatures.tsx`
```markdown
## Tarea: ExpressFeatures — Grid Bento Asimétrico Premium

**Archivo:** `src/components/servicios/express/ExpressFeatures.tsx`

**Referencia:** `ServicesOverview.tsx` (bento grid 12-col, double-bezel, variant config)

**Especificaciones:**
- Section `py-24 lg:py-32 bg-white` con grid pattern sutil
- Header: badge "CARACTERÍSTICAS PREMIUM", h2 Anton "VELOCIDAD Y PRECISIÓN EN CADA ENVÍO", body descriptivo
- Grid 12-col asimétrico (auto-rows-[380px]) — 4 features + 1 CTA full-width
- **Features (cada una = motion.div con spring stagger):**
  1. **Ruteo Inteligente IA** (col-span-7) — icon Zap, badge "CORE", imagen `/express_routing.webp`, desc: "Algoritmo propietario optimiza rutas en tiempo real considerando tráfico, clima y ventanas de entrega."
  2. **Tracking Satelital** (col-span-5) — icon Satellite, badge "LIVE", imagen `/express_tracking.webp`, desc: "Visibilidad total del paquete cada 30s. Cliente recibe link en vivo por WhatsApp."
  3. **Entrega Contra Firma/Foto** (col-span-5) — icon ShieldCheck, badge "SEGURO", imagen `/express_proof.webp`, desc: "Prueba de entrega digital con geolocalización, timestamp y foto del destinatario."
  4. **SLA Garantizado <2h** (col-span-7) — icon Clock, badge "SLA", imagen `/express_sla.webp`, desc: "Compromiso contractual: si no llega en el rango, el envío no se cobra."
- **CTA Full-width (col-span-12):** "Cotizar Envío Express" → `/cotizar/express` (brand-yellow nested pill)
- Variant config per feature (border/iconBg/badge colors) igual que `ServicesOverview`
- Hover: `y: -6, x: 2, boxShadow: shadow-hover-lift`
- Imágenes con `mix-blend-luminosity`, `opacity-30`, `group-hover:scale-105 opacity-40`
```

#### 2.3 `ExpressPricing.tsx`
```markdown
## Tarea: ExpressPricing — Tabla de Tarifas 2026 + Cotizador Integrado

**Archivo:** `src/components/servicios/express/ExpressPricing.tsx`

**Referencia:** `LowCostPricing.tsx` (verificar si existe patrón) + `CotizadorExpressForm.tsx`

**Especificaciones:**
- Section `bg-brand-blue-700` con ambient orbs
- Header blanco: badge "TARIFAS 2026", h2 Anton "PRECIOS TRANSPARENTES POR ZONA Y URGENCIA"
- **Tabla Responsiva** (desktop: tabla completa / mobile: cards apiladas):
  - Columnas: Zona | Rango Peso | Express <2h | Express 2-4h | Express 4-8h | Próxima Mañana
  - 6 zonas MDQ: Centro, Norte, Sur, Puerto, Periferia, Gran MDQ
  - Datos desde `priceRanges` (Prisma) — recibir como prop `priceRanges: PriceRange[]`
  - Filas alternadas `bg-white/5 hover:bg-white/10`, header `bg-brand-yellow text-brand-blue`
  - Tipografía: Zona (Bebas Neue), Precios (JetBrains Mono, brand-yellow)
- **Cotizador Integrado** (debajo de tabla):
  - Card double-bezel brand-blue-800/50
  - Form inline: Origen (select zonas), Destino (select zonas), Peso (input number), Dimensiones (WxHxD)
  - Botón "Calcular Express" → brand-yellow nested pill
  - Resultado: Precio exacto, tiempo estimado, botón "Solicitar Ahora" → `/cotizar/express?precio=X&tiempo=Y`
- Tooltip en celdas con info extra (cobertura, restricciones)
```

#### 2.4 `ExpressUseCases.tsx`
```markdown
## Tarea: ExpressUseCases — Casos de Uso Reales (Slider Tipo SliderServicios)

**Archivo:** `src/components/servicios/express/ExpressUseCases.tsx`

**Referencia:** `SliderServicios.tsx` (slider horizontal con controles, double-bezel cards)

**Especificaciones:**
- Section `bg-white` con grid pattern
- Header: badge "CASOS REALES", h2 Anton "¿CUÁNDO ELEGIR EXPRESS?"
- **6 Slides** (auto-play 6s, pause on hover, controles ChevronLeft/Right brand-yellow pills):
  1. **Farmacia Turno Noche** — "Medicamento urgente a domicilio en 45 min" — icon Pill
  2. **Taller Repuestos Críticos** — "Pieza de freno para auto en pista" — icon Wrench
  3. **E-commerce Flash Sale** — "Entregas same-day para campaña 24h" — icon ShoppingBag
  4. **Documentos Notariales** — "Escritura firmada antes de cierre registral" — icon FileText
  5. **Muestra Laboratorio** — "Biológica con cadena de frío garantizada" — icon FlaskConical
  6. **Regalo Cumpleaños Olvidado** — "Llegó antes de la fiesta" — icon Gift
- Cada slide: Card double-bezel-outer/inner, icon brand-yellow bg, título Anton, desc font-sans, badge "EXPRESS" brand-yellow
- Indicadores de paginación (dots) brand-blue/brand-yellow
- Keyboard navigation (ArrowLeft/Right), ARIA live region para slide actual
```

#### 2.5 `ExpressBenefits.tsx` (si existe) / crear si no
> Verificar si existe. Si no, crear siguiendo patrón `LowCostBenefits.tsx` pero con features premium.

---

### 3️⃣ SERVICIOS LOWCOST — Componentes de Detalle

#### 3.1 `LowCostHero.tsx`
```markdown
## Tarea: LowCostHero — Hero Estilo ExpressHero pero Enfoque Economía/Volumen

**Archivo:** `src/components/servicios/lowcost/LowCostHero.tsx`

**Diferencias clave vs ExpressHero:**
- Badge: "ECONOMÍA INTELIGENTE"
- Título 3 líneas: "ENVÍOS LOWCOST" / "ENTREGA GARANTÍA DÍA" / "DESDE $3.000"
- Body: "Optimizá tus ruteos urbanos diarios. Envíos económicos con entrega garantizada en el día si se solicita antes de 13hs. Tarifas altamente competitivas para PyMEs."
- CTA Primary: "Cotizar LowCost" → `/cotizar/lowcost` | Secondary: "Ver Zonas" → `#zonas`
- Trust Pills: "VOLUMEN" (Package), "AHORRO" (PiggyBank), "COBERTURA" (MapPin)
- Visual Derecho: Tarjetas FloatCard enfocadas en volumen:
  1. Mapa calor densidad paquetes (`/lowcost_heatmap.webp`) — badge "Ruteo Masivo"
  2. Stack paquetes en moto (`/lowcost_stack.webp`) — ID: "MDQ-LOW-2026", Origen "CD Central", Destino "Zona Oeste", pill "ENTREGA DÍA ACTIVA"
  3. Contador +12K ENVÍOS MES
  4. Pill "RUTEO MASIVO OPTIMIZADO"
```

#### 3.2 `LowCostFeatures.tsx`
```markdown
## Tarea: LowCostFeatures — Bento Grid Enfoque Eficiencia

**Archivo:** `src/components/servicios/lowcost/LowCostFeatures.tsx`

**Features (4 + CTA):**
1. **Ruteo Masivo Diario** (col-7) — icon Route, badge "CORE", desc: "Agrupamos 200+ paquetes/día en rutas óptimas. Menos km, menos costo, misma velocidad."
2. **Entrega Garantía Día** (col-5) — icon CalendarCheck, badge "SLA", desc: "Solicitá antes de 13hs y llega hoy. Compromiso por escrito en cotización."
3. **Tarifa Única por Zona** (col-5) — icon Tag, badge "SIMPLE", desc: "Sin sorpresas. Una tarifa plana por zona independientemente del peso (hasta 15kg)."
4. **Dashboard Emisor** (col-7) — icon BarChart, badge "CONTROL", desc: "Panel web para crear, trackear y descargar comprobantes de todos tus envíos LowCost."
5. **CTA Full-width** → `/cotizar/lowcost`
- Variant config: lowcost usa border brand-blue-200, iconBg brand-blue-50, badge brand-blue-100
```

#### 3.3 `LowCostPricing.tsx`
```markdown
## Tarea: LowCostPricing — Tabla Tarifas Planas por Zona + Calculadora Volumen

**Archivo:** `src/components/servicios/lowcost/LowCostPricing.tsx`

**Especificaciones:**
- Section `bg-white` con grid pattern
- Tabla: Zona | Tarifa Única (hasta 15kg) | +kg Adicional | Tiempo Estimado | Cobertura
- 6 zonas MDQ, precios desde BD (priceRanges)
- Calculadora volumen: input "Envíos/mes" → muestra ahorro vs Express + descuento escala (50+ envíos: 5%, 100+: 10%, 200+: 15%)
- CTA "Simular Mi Ahorro" → abre modal con formulario simplificado
```

#### 3.4 `LowCostBenefits.tsx` / `LowCostHowItWorks.tsx`
> Seguir patrones equivalentes a Express pero con copy/imaginería LowCost.

---

### 4️⃣ SERVICIOS FLEX (MERCADOLIBRE) — Componentes de Detalle

#### 4.1 `FlexHero.tsx`
```markdown
## Tarea: FlexHero — Hero Certificación MercadoLibre

**Archivo:** `src/components/servicios/flex/FlexHero.tsx`

**Especificaciones:**
- Badge: "FLEX CERTIFICADO 🟡" (brand-yellow bg, brand-blue text)
- Título: "ENVÍOS FLEX" / "MERCADOLIBRE" / "MAR DEL PLATA"
- Body: "Socio logístico certificado para potenciar tus ventas con entregas rápidas y seguras en el mismo día. Medidor de reputación siempre en verde."
- CTA Primary: "Integrar Mi Cuenta" → `/cotizar/express?flex=true` (brand-yellow) | Secondary: "Ver Requisitos" → `#requisitos` (white)
- Trust Pills: "REPUTACIÓN VERDE" (TrendingUp), "ETIQUETADO AUTOMÁTICO" (Printer), "RUTEO DINÁMICO" (GitBranch)
- Visual Derecho: Cards Flex-específicas:
  1. Dashboard MeLi (`/flex_dashboard.webp`) — "Pedidos Flex Hoy: 47"
  2. Rider con paquete amarillo MeLi (`/flex_rider.webp`) — ID: "MELI-FLEX-2026", "Entrega en Curso", "Zona Güemes"
  3. Contador +300 VENDEDORES
  4. Pill "SOCIO OFICIAL FLEX"
```

#### 4.2 `FlexFeatures.tsx` — 6 Features Flex
```markdown
1. **Integración Nativa MeLi** — API oficial, sync automático de ventas
2. **Etiquetado Automático** — Generación masiva PDF/ZPL, impresión térmica
3. **Ruteo Dinámico Inteligente** — Re-optimización cada 15 min según tráfico
4. **Cumplimiento SLA 98%+** — Métricas en tiempo real, alertas proactivas
5. **Soporte Prioritario Vendedores** — Canal directo Slack/WhatsApp
6. **Conciliación Automática** — Reporte diario listo para facturación
```

#### 4.3 `FlexPricing.tsx` — Niveles + Descuentos Clima
```markdown
- Tabla: Plan Starter / Growth / Scale — Envíos/mes, Precio/envío, Soporte, SLA
- Sección "Descuentos por Clima": Lluvia -10%, Viento fuerte -15%, Alerta roja -20% (auto-aplicado)
- Calculadora: Input ventas/mes → Costo mensual estimado + Ahorro vs correos
```

#### 4.4 `FlexHowItWorks.tsx` — 4 Pasos Flex
```markdown
1. CONECTÁ — Vinculá tu cuenta MeLi (OAuth)
2. CONFIGURÁ — Definí zonas, horarios, impresora
3. VENDÉ — Pedidos Flex entran automáticamente
4. ENTREGAMOS — Rider retira y entrega, vos facturás
```

#### 4.5 `FlexRequirements.tsx` — Requisitos Activos
```markdown
- Card grid 3 cols: Documentación / Hardware / Operativo
- Cada card: double-bezel, checklist con CheckCircle2 brand-yellow
- CTA final "Empezar Ahora" → `/cotizar/express?flex=true`
```

---

### 5️⃣ EMPRENDEDORES / 3PL — Componentes de Detalle

#### 5.1 `EmprendedoresHero.tsx`
```markdown
## Tarea: EmprendedoresHero — Hero 3PL / Fulfillment

**Archivo:** `src/components/servicios/emprendedores/EmprendedoresHero.tsx`

**Especificaciones:**
- Badge: "SOCIO ESTRATÉGICO LOCAL"
- Título: "LOGÍSTICA E-COMMERCE" / "3PL INTEGRAL" / "MAR DEL PLATA"
- Body: "Gestión integral de última milla para PyMEs en crecimiento. Recolección gratis a domicilio, seguimiento satelital, almacenamiento en nuestro depósito 3PL propio."
- CTA Primary: "Conocer Planes" → `/servicios/plan-emprendedores#planes` | Secondary: "Agendar Visita" → `/contacto` (white pill)
- Trust Pills: "ALMACENAJE PROPIO" (Warehouse), "PICKING & PACKING" (Package), "DEVOLUCIONES FÁCILES" (RotateCcw)
- Visual: 3D warehouse view (`/emprendedores_warehouse.webp`), stats: +50 PyMEs, 99.9% uptime, 24h picking
```

#### 5.2 `EmprendedoresFeatures.tsx` — 4 Features 3PL
```markdown
1. **Almacenamiento Seguro** — 500m², cámaras, clima controlado, seguro todo riesgo
2. **Picking & Packing Profesional** — Kits, bundles, packaging branded, etiquetado MeLi/Flex
3. **Integración Multi-Canal** — Shopify, Tiendanube, WooCommerce, MeLi, API propia
4. **Logística Inversa** — Gestión devoluciones, reacondicionamiento, re-stock automático
```

#### 5.3 `EmprendedoresBenefits.tsx` — Beneficios Estratégicos
```markdown
Grid 3 cols (double-bezel light):
- Escalabilidad Sin Inversión Inicial
- Foco en Tu Core Business
- Visibilidad Total (Dashboard 3PL)
- Costos Variables vs Fijos
- Expansión Geográfica Inmediata
- Soporte Dedicado PyME
```

#### 5.4 `EmprendedoresPricing.tsx` — Planes Personalizados
```markdown
- 3 Tier: Starter / Growth / Enterprise
- Cada plan: Fee mensual + por envío + storage/m²
- Calculadora: Inputs (SKUs, pedidos/mes, m² estimados) → Output costo mensual estimado
- CTA "Solicitar Propuesta" → `/contacto?plan=emprendedores`
```

---

### 6️⃣ COTIZADORES — Express & LowCost

#### 6.1 `CotizadorExpressHero.tsx` / `CotizadorLowCostHero.tsx`
```markdown
## Tarea: Heroes Cotizador — Versión Compacta de Service Heroes

**Archivos:** 
- `src/components/cotizar/express/CotizadorExpressHero.tsx`
- `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx`

**Especificaciones (ambos):**
- Section `bg-brand-blue-700 py-16 lg:py-24` (más bajo que hero home)
- Container max-w-4xl centrado
- Badge servicio (EXPRESS / LOWCOST)
- Título Anton: "COTIZÁ TU ENVÍO EN SEGUNDOS"
- Body: "Ingresá origen, destino y dimensiones. Precio exacto y tiempo estimado al instante."
- **Formulario inline simplificado** (3 campos inline en desktop, stack mobile):
  - Origen (select zonas MDQ)
  - Destino (select zonas MDQ)
  - Peso (input number, step 0.5, max 30)
  - Botón "Calcular" → brand-yellow nested pill, full width mobile
- Resultado aparece abajo (slide-down motion): Precio grande (JetBrains Mono, brand-yellow), Tiempo, Botón "Solicitar" → `/cotizar/express?precio=X`
- Trust line: "Sin compromiso · Tarifas 2026 actualizadas · Pago contra entrega"
```

#### 6.2 `CotizadorExpressForm.tsx` / `CotizadorLowCostForm.tsx`
```markdown
## Tarea: Formularios Completos — Double-Bezel Cards, Validación Zod

**Especificaciones:**
- Card double-bezel-outer brand-blue-800/50 border brand-blue-700
- Fields (react-hook-form + zod):
  - Remitente: Nombre, Teléfono, Email, Dirección (autocomplete Google Places), Referencia
  - Destinatario: Nombre, Teléfono, Dirección, Referencia
  - Paquete: Tipo (Sobre/Caja/Paquete), Peso, Alto/Ancho/Largo, Valor Declarado, Contenido
  - Servicio: Rango horario (Express: <2h / 2-4h / 4-8h / Mañana), LowCost: Día / Próxima Mañana
  - Extras: Contraentrega (monto), Seguro Extra, Foto Entrega, Notificación WhatsApp
- Layout: Grid 2 cols (Remitente/Destinatario), Paquete full-width, Servicio/Extras 2 cols
- Inputs: `bg-white/5 border border-brand-blue-500/50 focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/30 rounded-lg px-4 py-3 text-white placeholder-brand-blue-300`
- Labels: Bebas Neue uppercase tracking-wider text-brand-blue-300
- Errores: Texto brand-yellow-300, border brand-yellow-500, shake animation
- Submit: brand-yellow nested pill, loading state con spinner brand-blue
- Success: Toast motion (slide from top-right) + redirect a `/revisar?id=XXX`
```

#### 6.3 `CotizadorExpressDetails.tsx` / `CotizadorLowCostDetails.tsx`
```markdown
## Tarea: Detalles y Condiciones — Accordion Double-Bezel

**Especificaciones:**
- Section `bg-white py-12` con grid pattern
- Accordion items (motion + AnimatePresence):
  1. **Zonas y Cobertura** — Mapa interactivo (Leaflet) con polígonos zonas MDQ, tooltips precio
  2. **Límites de Bulto** — Tabla: Peso máx 30kg, Dimensiones máx 100x60x60cm, Volumétrico 1:5000
  3. **Restricciones** — Lista prohibidos (líquidos inflamables, armas, perecibles sin cadena de frío)
  4. **Pago y Facturación** — Contraentrega, Transferencia, Cuenta Corriente (30/60 días), Factura A/B/C
  5. **Seguros y Responsabilidad** — Cobertura básica $50k, Adicional hasta $500k, Exclusiones
  6. **Cancelaciones y Cambios** — Gratis hasta 30 min antes retiro, Reprogramación 1 vez sin cargo
- Cada accordion: double-bezel-outer light, header Bebas Neue, content font-sans
- Icono ChevronDown rotate 180deg on open (spring)
```

#### 6.4 `CotizadorExpressHelp.tsx` / `CotizadorLowCostHelp.tsx`
```markdown
## Tarea: Banner Ayuda — CTA WhatsApp + Teléfono + Horarios

**Especificaciones:**
- Card double-bezel-outer brand-blue border brand-yellow (highlight)
- Grid 3 cols: WhatsApp (MessageSquare, brand-yellow bg) | Teléfono (Phone, brand-blue bg) | Horarios (Clock, brand-blue-50 bg)
- Cada col: icon p-3 rounded-xl, título Bebas Neue, detalle font-sans
- WhatsApp: link `wa.me/542236602699?text=Hola%20necesito%20ayuda%20con%20mi%20cotizaci%C3%B3n`
- Tel: `tel:+542236602699`
- Horarios: "Lun-Vie 8-20hs | Sáb 9-14hs | Dom Cerrado"
- Bottom: "Respuesta promedio < 3 min" (font-mono brand-yellow)
```

---

### 7️⃣ CONTACTO — Componentes

#### 7.1 `ContactHero.tsx`
```markdown
## Tarea: ContactHero — Hero Formulario Estilo Service Heroes

**Archivo:** `src/components/contacto/ContactHero.tsx`

**Especificaciones:**
- Section `bg-brand-white-50` (o `bg-white`) con ambient orbs sutiles
- Container max-w-4xl
- Badge: "ATENCIÓN COMERCIAL INMEDIATA"
- Título Anton: "HABLEMOS DE TU LOGÍSTICA" / "EN MAR DEL PLATA"
- Body: "Completá el formulario y un asesor comercial te contacta en minutos. Diseñamos un esquema tarifario a tu medida sin compromiso."
- **Mini-form inline** (3 campos + submit):
  - Nombre (input), Email (input), WhatsApp (input tel)
  - Submit: "Quiero que me llamen" → brand-yellow nested pill
  - On submit: toast success + prefllena formulario principal abajo
- Trust: "Respuesta garantizada < 15 min horario comercial" (font-mono brand-yellow)
```

#### 7.2 `ContactForm.tsx`
```markdown
## Tarea: ContactForm — Formulario Completo Premium

**Archivo:** `src/components/contacto/ContactForm.tsx`

**Especificaciones:**
- Card double-bezel-outer (light) `bg-white border-brand-blue-100`
- Fields (RHF + Zod):
  - Tipo Consulta (select: Cotización / Soporte / Alianzas / Otro)
  - Nombre Completo
  - Email Corporativo
  - WhatsApp (con validación AR +54 9 XXX XXX XXXX)
  - Empresa / Marca
  - Volumen Estimado Mensual (select: <50 / 50-200 / 200-500 / 500+ / No sé)
  - Servicios de Interés (checkbox group: Express / LowCost / Flex / 3PL / Corporate)
  - Mensaje (textarea, min 20 chars)
  - Checkbox: "Acepto términos y política de privacidad" (link a /terminos-y-condiciones, /politica-de-privacidad)
- Submit: brand-yellow nested pill full-width, loading spinner
- Success: Modal double-bezel con check brand-yellow, "¡Recibimos tu consulta!", "Te contactamos en <15 min", botón "Cerrar" (white pill)
- reCAPTCHA v3 invisible (score > 0.5)
```

#### 7.3 `ContactInfo.tsx`
```markdown
## Tarea: ContactInfo — Info Comercial + Mapa + Horarios

**Archivo:** `src/components/contacto/ContactInfo.tsx`

**Especificaciones:**
- Card double-bezel-outer light, sticky top-24 en desktop
- **Ubicación:** Mapa Leaflet interactivo (centro Friuli 1972, zoom 15), marker brand-blue con pulse ring brand-yellow
- **Dirección:** Friuli 1972, Mar del Plata (B7600) — copy-to-clipboard button (brand-yellow pill sm)
- **Horarios:** Grid 2 cols: Lun-Vie 8-20 | Sáb 9-14 | Dom Cerrado
- **Canales:** WhatsApp (wa.me link), Teléfono (tel link), Email (mailto), Instagram (link)
- **Zonas Cobertura:** Chips scrollables horizontales (Centro, Norte, Sur, Puerto, Periferia, Gran MDQ) — click filtra formulario
- **Trust Badges:** ISO 9001, MeLi Flex Partner, +140 Emprendedores
```

---

### 8️⃣ NOSOTROS — Componentes

#### 8.1 `AboutHero.tsx` (`src/components/nosotros/sobre-nosotros/AboutHero.tsx`)
```markdown
## Tarea: AboutHero — Hero Institucional Cinemático

**Especificaciones:**
- Section `bg-brand-blue-700` con 3 ambient orbs (azul/amarillo/azul profundo)
- Grid 2 cols (60/40): Copy + Visual
- **Copy:**
  - Badge: "MÁS DE 7 AÑOS LIDERANDO"
  - Título Anton 3 líneas: "LOGÍSTICA URBANA" / "Y ÚLTIMA MILLA" / "EN MAR DEL PLATA"
  - Body: "Nacimos en las calles de Mar del Plata. Hoy somos el partner logístico de +140 emprendedores y retailers nacionales. Tecnología propia, flota dedicada, equipo local."
  - CTA: "Ver Nuestra Historia" → `#historia` (white pill) | "Conocer Al Equipo" → `#equipo` (yellow pill)
- **Visual:** FloatCard depth 10/40/70:
  1. Foto equipo (`/about_team.webp`) — "EQUIPO OPERATIVO 2026"
  2. Flota motos (`/about_fleet.webp`) — "FLOTA PROPIA 25+ UNIDADES"
  3. Contador +7 AÑOS | +52K ENVÍOS | 0 EXTRAVIADOS
  4. Pill "CERTIFICADOS ISO 9001:2015"
```

#### 8.2 `AboutAdvantages.tsx` — Ventaja Injusta (Bento Grid)
```markdown
## Tarea: AboutAdvantages — 4 Ventajas Competitivas

**Especificaciones:**
- Section `bg-white` grid pattern
- Header badge "VENTAJA INJUSTA", h2 Anton "POR QUÉ NOS ELIGEN"
- Bento 12-col asimétrico (4 cards + CTA):
  1. **Tecnología Propia** (col-7) — icon Cpu, badge "CORE", desc: "Ruteo, tracking, dashboard y API desarrollados in-house. Sin dependencia de terceros."
  2. **Flota Dedicada** (col-5) — icon Bike, badge "PROPIO", desc: "25+ motos propias, riders empleados (no monotributistas). Control total de calidad."
  3. **Soporte Humano Real** (col-5) — icon Headphones, badge "24/7", desc: "Canal directo WhatsApp/Slack con equipo ops. Sin bots, sin tickets eternos."
  4. **Cobertura Total MDQ** (col-7) — icon MapPin, badge "100%", desc: "Llegamos a cada barrio, country y zona portuaria. Sin zonas rojas."
  5. **CTA Full** → `/contacto` "Querés Ser Nuestro Próximo Caso de Éxito"
```

#### 8.3 `AboutValues.tsx` — Valores (3 Cards Double-Bezel Light)
```markdown
1. **CONFIABILIDAD** — Shield — "Cumplimos lo que prometemos. Cada paquete llega."
2. **AGILIDAD** — Zap — "Optimizamos cada minuto. La velocidad es respeto al cliente."
3. **PROXIMIDAD** — Users — "Somos de acá. Conocemos cada calle, cada barrio, cada comercio."
```

#### 8.4 `AboutTimeline.tsx` — Timeline Interactiva (Vertical Stepper)
```markdown
## Tarea: AboutTimeline — Hitos Históricos Animados

**Referencia:** `HowItWorks.tsx` (vertical stepper con dots y líneas)

**Especificaciones:**
- Section `bg-brand-blue-700` con ambient orbs
- Timeline vertical línea brand-blue-500/50 (2px), dots conectados
- **7 Hitos** (motion stagger):
  1. 2017 — "Fundación en Garage MDQ" — icon Home
  2. 2018 — "Primer Contrato E-commerce" — icon ShoppingBag
  3. 2019 — "Lanzamiento Tracking Satelital" — icon Satellite
  4. 2020 — "Certificación ISO 9001" — icon Award
  5. 2021 — "Partner Oficial MeLi Flex" — icon BadgeCheck
  6. 2022 — "Depósito 3PL Propio 500m²" — icon Warehouse
  7. 2026 — "+140 PyMEs, 52k Envíos/Año" — icon TrendingUp
- Cada hito: Card double-bezel-outer dark (brand-blue-800/50), hover → brand-blue-700, border brand-yellow/30
- Icon brand-yellow bg, numero año font-mono brand-yellow, título Anton, desc font-sans
- Scroll spy: dot activo pulsa brand-yellow, línea hasta dot activo brand-yellow
```

#### 8.5 `AboutTeam.tsx` — Equipo (Grid Cards)
```markdown
## Tarea: AboutTeam — Stats + Grid Equipo Directivo

**Especificaciones:**
- Section `bg-white` grid pattern
- **Stats Row** (4 counters horizontal, TrustBar style): +7 AÑOS | 25 RIDERS | 500m² 3PL | ISO 9001
- **Grid 3 cols** (Directivos): Foto circular (brand-blue-100 bg), Nombre (Bebas Neue), Cargo (font-sans), Bio corta, LinkedIn icon (brand-blue hover brand-yellow)
- **Grid 2 cols** (Operativo): "Riders Dedicados" + "Soporte Comercial" — cards double-bezel con iconos y números
```

#### 8.6 `AboutMissionVision.tsx` — Misión/Visión/Innovación (3 Columns)
```markdown
## Tarea: AboutMissionVision — 3 Pilares Fundacionales

**Especificaciones:**
- Section `bg-brand-blue-700` ambient orbs
- Grid 3 cols iguales (desktop) / stack mobile
- **MISIÓN** (icon Target) — "Conectar cada comercio de Mar del Plata con su cliente final mediante logística confiable, tecnología accesible y trato humano."
- **VISIÓN** (icon Eye) — "Ser el sistema operativo logístico de la costa argentina. Que ningún emprendedor frene su crecimiento por falta de distribución."
- **INNOVACIÓN** (icon Lightbulb) — "Invertimos el 15% de facturación en I+D propio: ruteo IA, tracking predictivo, automatización fulfillment."
- Cada columna: Card double-bezel-outer dark, icon brand-yellow bg brand-blue text 2xl, título Anton, body font-sans brand-blue-100
- Divider vertical brand-blue-500/30 entre columnas desktop
```

---

#### 8.7 FAQ Components

##### `FaqHero.tsx`
```markdown
## Tarea: FaqHero — Hero Preguntas Frecuentes

**Especificaciones:**
- Section `bg-white` ambient orbs sutiles
- Container max-w-3xl centrado
- Badge: "TODO LO QUE NECESITÁS SABER"
- Título Anton: "PREGUNTAS" / "FRECUENTES"
- Body: "Respuestas rápidas a las dudas más comuns sobre nuestros servicios, tarifas, cobertura y operativa en Mar del Plata."
- Search input (brand-blue border, brand-yellow focus ring, placeholder "Buscá tu pregunta...") — filtra accordions en tiempo real
- CTA: "¿No encontraste tu respuesta?" → WhatsApp link
```

##### `FaqAccordion.tsx`
```markdown
## Tarea: FaqAccordion — Accordion Premium Double-Bezel

**Especificaciones:**
- Lista 18-20 preguntas (recibir como prop `faqs: FaqItem[]`)
- Cada item: motion.div double-bezel-outer light, border brand-blue-100, hover border brand-blue-300
- Header: flex justify-between, question (Bebas Neue text-brand-blue), ChevronDown (brand-yellow, rotate spring)
- Content: font-sans text-brand-blue-500 leading-relaxed, padding pt-4
- AnimatePresence: height auto con motion (layoutId para FLIP)
- Categoría badges (Express / LowCost / Flex / 3PL / General) — brand-blue-50 bg brand-blue text
- Search filter: items no match → opacity 0, height 0, pointer-events none
- Keyboard: Enter/Space abre/cierra, ArrowUp/Down navega, Escape cierra todo
```

##### `FaqCta.tsx`
```markdown
## Tarea: FaqCta — CTA Final FAQ

**Especificaciones:**
- Card double-bezel-outer brand-blue border brand-yellow (highlight)
- Centered: Icon MessageSquare brand-yellow, Título Anton "¿MÁS DUDAS?", Body "Escribinos por WhatsApp y te respondemos al instante."
- Botón: "Hablar por WhatsApp" → brand-yellow nested pill large (text-xl)
- Bottom: "Disponible Lun-Vie 8-20hs | Sáb 9-14hs" (font-mono brand-blue-300)
```

---

#### 8.8 Redes Components

##### `NetworksHero.tsx`
```markdown
## Tarea: NetworksHero — Hero Comunidad

**Especificaciones:**
- Section `bg-white` ambient orbs
- Badge: "COMUNIDAD LOGÍSTICA MDQ"
- Título Anton: "NUESTRAS REDES" / "Y COMUNIDAD"
- Body: "Seguí nuestras novedades operativas de calle, beneficios exclusivos para emprendedores y la mayor comunidad logística de Mar del Plata."
- **Social Cards Grid 4 cols** (Instagram, Facebook, LinkedIn, WhatsApp Channel):
  - Cada card: double-bezel-outer light, icon brand-color bg (IG gradient approximated with brand-blue/yellow), handle @enviosdosruedas, followers count (font-mono brand-yellow), botón "Seguir" (white pill sm)
  - Hover: border brand-yellow, shadow brand-yellow/20
- CTA: "Unirte al Canal WhatsApp" → wa.me link con texto prefill
```

##### `NetworksChannels.tsx` / `RecentPosts.tsx` / `NetworksBenefits.tsx` / `NewsletterSubscribe.tsx`
> Seguir mismo patrón: double-bezel cards, brand colors, motion stagger, iconos lucide, tipografía consistente.

---

### 9️⃣ LAYOUT COMPARTIDO — Header, Footer, Carrusel

#### 9.1 `OptimizedHeader.tsx`
```markdown
## Tarea: OptimizedHeader — Header Premium Sticky

**Archivo:** `src/components/layout/OptimizedHeader.tsx`

**Especificaciones:**
- `fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-brand-blue-100`
- **Desktop:** Logo (SVG brand-blue), Nav links (Bebas Neue uppercase, hover text-brand-yellow), CTA "Cotizar" (brand-yellow nested pill), Hamburger hidden
- **Mobile:** Logo, Hamburger (Motion animate), CTA "Cotizar" (brand-yellow pill sm)
- **Drawer Mobile:** Slide from right (motion, spring), bg-white, links stack vertical, CTA full-width brand-yellow, Close button
- **Scroll behavior:** `bg-white/95 shadow-elevated` al hacer scroll > 20px
- **Focus visible:** outline brand-yellow offset-2
- **Accessibility:** ARIA labels, focus trapping en drawer, Escape cierra
```

#### 9.2 `OptimizedFooter.tsx`
```markdown
## Tarea: OptimizedFooter — Footer Institucional Premium

**Archivo:** `src/components/layout/OptimizedFooter.tsx`

**Especificaciones:**
- `bg-brand-blue-900 text-brand-blue-100` (dark canvas)
- Grid 4 cols: Marca / Servicios / Empresa / Legal & Contacto
- **Marca:** Logo SVG blanco, tagline font-sans "Logística última milla en Mar del Plata", Social icons (brand-yellow hover)
- **Servicios:** Links a 4 servicios (Bebas Neue uppercase, hover brand-yellow)
- **Empresa:** Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes, Blog (próximamente)
- **Legal/Contacto:** Términos, Privacidad, Dirección Friuli 1972, Tel, Email, WhatsApp
- **Bottom Bar:** Border-t brand-blue-800, Copyright © 2026 Envíos DosRuedas. Hecho en Mar del Plata. | ISO 9001:2015 | MeLi Flex Partner
- Links: `text-brand-blue-400 hover:text-brand-yellow transition-colors`
```

#### 9.3 `CarruselRedes.tsx`
```markdown
## Tarea: CarruselRedes — Infinite Logo Carousel Premium

**Archivo:** `src/components/layout/CarruselRedes.tsx`

**Especificaciones:**
- Section `bg-brand-blue-50 border-y border-brand-blue-100 py-12` (light) o `bg-brand-blue-900/50 border-y border-brand-blue-800` (dark)
- **Track:** Logos duplicados para loop infinito (min 14 logos: MeLi, Tiendanube, Shopify, Correo Argentino, Andreani, Urbano, OCA, Shippi, + partners locales)
- **Logos:** `filter grayscale contrast-125 opacity-60 hover:grayscale-0 hover:contrast-100 hover:opacity-100 transition-all duration-300`
- **Animación:** CSS `@keyframes logos-scroll 30s linear infinite`, `transform: translateX(-50%)`
- **Pause:** on hover, focus, `document.hidden` (visibilitychange)
- **Reduced motion:** `animation: none`, mostrar todos los logos en grid responsive
- **Mask fade edges:** `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)`
- **Accessibility:** `aria-label="Empresas y partners que confían en nosotros"`, `role="region"`
```

---

## 🔧 REGLAS DE IMPLEMENTACIÓN OBLIGATORIAS PARA JULES

### ✅ DO (Hacer)
- Usar **exclusivamente** la paleta de 3 colores + verde WhatsApp
- Tipografías: `font-display` (Anton), `font-subheading` (Bebas Neue), `font-sans` (Outfit), `font-mono` (JetBrains Mono)
- Clases utilitarias del sistema: `double-bezel-outer`, `double-bezel-inner`, `bezel-inner`, `cta-nested-pill`, `cta-nested-icon`, `kinetic-font-stretch`
- Sombras: `shadow-float`, `shadow-elevated`, `shadow-hover-lift`, `shadow-antigravity-deep`, `shadow-cta-glow`, `shadow-soft-elevation`
- Motion: `whileInView` + `viewport={{ once: true, margin: '-100px' }}`, spring `stiffness: 150, damping: 18`, stagger `0.1`
- `prefers-reduced-motion`: desactivar transform 3D, animaciones CSS, auto-play carousels
- Imágenes: `next/image` con `sizes`, `priority` en above-fold, `mix-blend-luminosity` en fondos de cards
- TypeScript strict: `interface Props`, sin `any`, `React.FC<Props>` o `function Component({ prop }: Props)`
- Accesibilidad: `aria-label`, `role`, `tabIndex`, focus-visible, color contrast AA mínimo

### ❌ DON'T (No Hacer)
- **NO** usar colores fuera de la paleta (ni grises genéricos, ni azules Tailwind default)
- **NO** usar `Inter` para títulos (solo `font-sans` para body)
- **NO** usar `rounded-lg` / `rounded-xl` genéricos → usar `rounded-xl` / `rounded-2xl` consistentes con double-bezel
- **NO** usar `shadow-md` / `shadow-lg` Tailwind → usar sombras del sistema
- **NO** usar `transition-all` genérico → especificar `transition-colors`, `transition-transform`, `transition-shadow`
- **NO** inventar nuevos patrones de card → reutilizar `double-bezel-outer/inner` o `bezel-inner`
- **NO** hardcodear valores hex en `className` → usar variables CSS / Tailwind config
- **NO** spinners circulares genéricos → usar skeletal loaders que imiten la UI final
- **NO** emojis en títulos/botones profesionales
- **NO** copy trillado IA: "Seamless", "Elevate", "Next-Gen", "Unleash", "Revolutionary"

---

## 📦 ESTRUCTURA DE ENTREGA ESPERADA

Para cada componente/página, Jules debe entregar:

```
src/
├── components/
│   ├── servicios/
│   │   ├── express/
│   │   │   ├── ExpressHero.tsx          ✨ NUEVO / REESCRITO
│   │   │   ├── ExpressFeatures.tsx      ✨
│   │   │   ├── ExpressPricing.tsx       ✨
│   │   │   ├── ExpressUseCases.tsx      ✨
│   │   │   └── ExpressBenefits.tsx      ✨ (crear si no existe)
│   │   ├── lowcost/
│   │   │   ├── LowCostHero.tsx          ✨
│   │   │   ├── LowCostFeatures.tsx      ✨
│   │   │   ├── LowCostPricing.tsx       ✨
│   │   │   ├── LowCostBenefits.tsx      ✨
│   │   │   └── LowCostHowItWorks.tsx    ✨
│   │   ├── flex/
│   │   │   ├── FlexHero.tsx             ✨
│   │   │   ├── FlexFeatures.tsx         ✨
│   │   │   ├── FlexBenefits.tsx         ✨
│   │   │   ├── FlexPricing.tsx          ✨
│   │   │   ├── FlexHowItWorks.tsx       ✨
│   │   │   └── FlexRequirements.tsx     ✨
│   │   └── emprendedores/
│   │       ├── EmprendedoresHero.tsx    ✨
│   │       ├── EmprendedoresFeatures.tsx✨
│   │       ├── EmprendedoresBenefits.tsx✨
│   │       └── EmprendedoresPricing.tsx ✨
│   ├── cotizar/
│   │   ├── express/
│   │   │   ├── CotizadorExpressHero.tsx ✨
│   │   │   ├── CotizadorExpressForm.tsx ✨
│   │   │   ├── CotizadorExpressDetails.tsx ✨
│   │   │   └── CotizadorExpressHelp.tsx ✨
│   │   └── lowcost/
│   │       ├── CotizadorLowCostHero.tsx ✨
│   │       ├── CotizadorLowCostForm.tsx ✨
│   │       ├── CotizadorLowCostDetails.tsx ✨
│   │       └── CotizadorLowCostHelp.tsx ✨
│   ├── contacto/
│   │   ├── ContactHero.tsx              ✨
│   │   ├── ContactForm.tsx              ✨
│   │   └── ContactInfo.tsx              ✨
│   ├── nosotros/
│   │   ├── sobre-nosotros/
│   │   │   ├── AboutHero.tsx            ✨
│   │   │   ├── AboutAdvantages.tsx      ✨
│   │   │   ├── AboutValues.tsx          ✨
│   │   │   ├── AboutTimeline.tsx        ✨
│   │   │   ├── AboutTeam.tsx            ✨
│   │   │   └── AboutMissionVision.tsx   ✨
│   │   ├── preguntas-frecuentes/
│   │   │   ├── FaqHero.tsx              ✨
│   │   │   ├── FaqAccordion.tsx         ✨
│   │   │   └── FaqCta.tsx               ✨
│   │   └── nuestras-redes/
│   │       ├── NetworksHero.tsx         ✨
│   │       ├── NetworksChannels.tsx     ✨
│   │       ├── RecentPosts.tsx          ✨
│   │       ├── NetworksBenefits.tsx     ✨
│   │       └── NewsletterSubscribe.tsx  ✨
│   └── layout/
│       ├── OptimizedHeader.tsx          ✨ (actualizar)
│       ├── OptimizedFooter.tsx          ✨ (actualizar)
│       └── CarruselRedes.tsx            ✨ (actualizar)
└── app/
    └── admin/imagenes/
        ├── page.tsx                     ✨ (actualizar)
        └── AdminImagenesClient.tsx      ✨ (reescribir)
```

---

## 🧪 CHECKLIST DE VALIDACIÓN POST-IMPLEMENTACIÓN

Jules debe verificar (y reportar) que cada componente cumple:

- [ ] **Build exitoso**: `pnpm build` sin errores TypeScript/ESLint
- [ ] **TypeScript strict**: `pnpm tsc --noEmit` pasa
- [ ] **Paleta correcta**: `grep -r "#[0-9A-Fa-f]\{6\}" src/components --include="*.tsx" | grep -v "brand-"` → **0 resultados**
- [ ] **Tipografías correctas**: `grep -r "font-sans\|font-display\|font-subheading\|font-mono" src/components --include="*.tsx"` → todos usan variables
- [ ] **Double bezel**: `grep -r "double-bezel-outer" src/components --include="*.tsx"` → presente en todas las cards
- [ ] **CTA nested pill**: `grep -r "cta-nested-pill" src/components --include="*.tsx"` → presente en todos los CTAs
- [ ] **Motion variants**: `grep -r "whileInView\|viewport" src/components --include="*.tsx"` → presente en secciones
- [ ] **Reduced motion**: `grep -r "prefers-reduced-motion" src/components --include="*.tsx"` → manejado en heroes/carousels
- [ ] **Accesibilidad**: `grep -r "aria-label\|role=" src/components --include="*.tsx"` → suficiente cobertura
- [ ] **Responsive**: Test visual en 375px, 768px, 1024px, 1440px — sin overflow horizontal
- [ ] **Performance**: Lighthouse > 90 en Performance, Accessibility, Best Practices, SEO
- [ ] **Consistencia visual**: Comparar captura Home vs cada página — misma "sensación premium"

---

## 🚀 COMANDO PARA EJECUTAR EN JULES

```bash
# En la raíz del proyecto
pnpm install
pnpm dev          # Verificar que compila y corre
pnpm build        # Build producción
pnpm lint         # ESLint
pnpm tsc --noEmit # TypeScript check
```

---

## 📚 ARCHIVOS DE REFERENCIA CLAVE (Leer antes de empezar)

1. `src/app/page.tsx` — Home completa (patrón maestro)
2. `src/components/home/HeroAnimado.tsx` — Hero cinemático referencia
3. `src/components/home/ServicesOverview.tsx` — Bento grid + variant config
4. `src/components/home/SocialProof.tsx` — Carrusel + Testimonios double-bezel
5. `src/components/home/HowItWorks.tsx` — Vertical stepper animado
6. `src/components/home/CtaSection.tsx` — CTA final double-bezel card
7. `src/components/home/VisionSection.tsx` — Bento stats asimétrico
8. `src/components/home/SliderServicios.tsx` — Slider horizontal controlado
9. `src/components/ui/button.tsx` — Button base (ver si usa cta-nested-pill)
10. `src/app/globals.css` — Variables CSS, utilidades, keyframes
11. `docs/DESIGN.MD` — Manual de estilo (versión humana)
12. `docs/stitch-design-md-prompt.md` — Prompt Stitch para DESIGN.md (contexto dual-theme)
13. `docs/stitch-home-prompt.md` — Prompt Stitch para Home (contenido/estructura)

---

## 💡 NOTAS ADICIONALES PARA JULES

1. **Imágenes**: Usar placeholders `/img/placeholder.webp` si faltan assets reales. Los nombres de archivo sugeridos en los prompts (ej. `/express_routing.webp`) son referenciales.

2. **Datos dinámicos**: Los componentes de pricing reciben `priceRanges: PriceRange[]` desde Prisma (ver `page.tsx` de cotizadores). Typedef en `@/generated/prisma/client`.

3. **Formularios**: Usar `react-hook-form` + `zod` (ya en dependencias). Ver `CotizadorExpressForm.tsx` actual como referencia.

4. **Mapas**: `LeafletMap.tsx` / `DynamicRouteMap.tsx` existentes para zona coverage en Details.

5. **Iconos**: `lucide-react` — ya importado en todos los componentes de referencia.

6. **Motion**: `motion/react` (v11+) — usar `whileInView`, `viewport`, `animate`, `transition` con spring.

7. **Orden de implementación sugerido**:
   - Primero: `OptimizedHeader`, `OptimizedFooter`, `CarruselRedes` (afectan todas las páginas)
   - Segundo: Heroes de servicios (Express, LowCost, Flex, Emprendedores)
   - Tercero: Features, Pricing, UseCases, Benefits, HowItWorks, Requirements
   - Cuarto: Cotizador components (Hero, Form, Details, Help)
   - Quinto: Contacto, Nosotros (Sobre Nosotros, FAQ, Redes)
   - Último: Admin Imágenes

8. **Testing visual**: Abrir `http://localhost:3000` y navegar TODAS las rutas. Comparar con Home.

---

**¡Éxitos! El objetivo es que TODA la web se sienta como una pieza cohesiva, premium y cinematográfica — como la Home ya lo es.** 🏍️✨