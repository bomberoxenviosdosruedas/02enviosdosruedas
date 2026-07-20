# 📋 REPORTE DE AUDITORÍA DE MARCA — 02ENVIOSDOSRUEDAS

**Fecha de auditoría:** 2025-07-20  
**Alcance:** `src/app/layout.tsx` + `src/app/page.tsx` + componentes principales home (`HeroAnimado`, `TrustBar`, `ServicesOverview`, `HowItWorks`, `SocialProof`, `CtaSection`, `OptimizedHeader`, `OptimizedFooter`)  
**Referencia normativa:** `DESIGN.md`, `docs/paleta_3_colores.md`, `design/brand-guide.md`, `design/design-tokens.md`, `docs/knowledge_base/contexto.md`

---

## 🎨 1. Auditoría de Identidad y Paleta Cromática

### 1.1 Chequeo de uso correcto de los 3 colores core

| Componente / Sección | Color Esperado (Token) | Color Detectado en Código | Estado | Observaciones |
|---------------------|------------------------|---------------------------|--------|---------------|
| **Layout global (`layout.tsx`)** | `bg-white` / `text-brand-ink` | `bg-white text-brand-ink` | ✅ **OK** | Usa tokens de marca correctamente |
| **Header (`OptimizedHeader`)** | `bg-brand-blue-700` (`#0636A5`) | `bg-brand-blue` + `bg-brand-blue/95` | ✅ **OK** | Correcto uso de `brand-blue` (alias de blue-700) |
| **Header — CTA "Cotizar Envío"** | `bg-white` / `text-brand-blue` / `border-brand-blue` | `bg-white hover:bg-brand-blue-50 text-brand-blue border-2 border-brand-blue` | ✅ **OK** | Variante "Elevated" según spec |
| **Hero (`HeroAnimado`)** | `bg-brand-blue-700` | `bg-brand-blue-700` | ✅ **OK** | Fondo hero obligatoriamente azul |
| **Hero — Badge "Tu Solución Confiable"** | `bg-brand-yellow-500` / `text-brand-blue-900` | `bg-brand-yellow text-brand-blue` | ⚠️ **PARCIAL** | Falta `text-brand-blue-900` (usa blue-700 por alias). Contraste en amarillo 500 requiere blue-900 |
| **Hero — Título "E-Commerce" (highlight amarillo)** | `bg-brand-yellow-500` / `text-brand-blue-900` | `bg-brand-yellow px-3 py-0.5 text-brand-blue` | ✅ **OK** | Correcto uso inline |
| **Hero — CTA Primario "Solicitar Servicio"** | `bg-brand-yellow-500` / `text-brand-blue-900` / `border-brand-yellow-500` | `bg-brand-yellow text-brand-blue border-2 border-brand-yellow` | ✅ **OK** | Nested pill correcto |
| **Hero — CTA Secundario "Ver Servicios"** | `bg-white` / `text-brand-blue` / `border-brand-blue-100` / `shadow-elevated` | `bg-white text-brand-blue border-2 border-brand-blue-100 shadow-elevated` | ✅ **OK** | Variante elevated correcta |
| **Trust Bar** | `bg-brand-blue-50` / `border-y brand-blue-100` | `bg-brand-blue-50 border-y border-brand-blue-100` | ✅ **OK** | Sección overlay correcta |
| **Trust Bar — Contadores** | `text-brand-blue-700` / `suffix brand-yellow` | `text-brand-blue` + `text-brand-yellow` | ✅ **OK** | Correcto |
| **Trust Bar — Badge ISO** | `bg-white` / `border-brand-blue-100` / `icon bg-brand-yellow` | `bg-white border border-brand-blue-100` + `bg-brand-yellow` | ✅ **OK** | Correcto |
| **Services — Section bg** | `bg-white` | `bg-white` | ✅ **OK** | Alternancia correcta (blanco tras azul-50) |
| **Services — Cards (Double Bezel)** | Outer: `bg-brand-blue-50` `border-brand-blue-100` / Inner: `bg-white` | `bg-brand-blue-700 border-2` ⚠️ **CRÍTICO** | ❌ **FALLO GRAVE** | Las tarjetas usan `bg-brand-blue-700` como fondo base en lugar del patrón Double Bezel (outer blue-50 + inner white). Rompe regla §12: "Double Bezel obligatorio para tarjetas de contenido en secciones blancas" |
| **Services — Badges por variante** | Según spec: Express=yellow/blue, LowCost=blue-100/blue-700, Flex=yellow-100/blue-700, Ecommerce=yellow/blue | `variantConfig` usa tokens correctos | ✅ **OK** | Colores de badge correctos por variante |
| **HowItWorks — Section bg** | `bg-brand-blue-700` | `bg-brand-blue-700` | ✅ **OK** | Alternancia correcta (azul tras blanco) |
| **HowItWorks — Stepper números** | `completed=green`, `active=yellow-500/blue-900`, `pending=blue-100/blue-700` | Hardcoded hex: `#16A34A`, `#FFEC01`, `#BACEFD` | ⚠️ **PARCIAL** | Usa hex inline en lugar de tokens semánticos (`status.success`, `brand-yellow-500`, `brand-blue-100`) |
| **SocialProof — Section bg** | `bg-white` | `bg-white` | ✅ **OK** | Alternancia correcta |
| **SocialProof — Logos Carousel** | `grayscale + opacity-60` / hover `grayscale-0` | Implementado correctamente | ✅ **OK** | Máscara gradient + pausa accesible OK |
| **SocialProof — Testimonios (Double Bezel)** | Outer: `bg-brand-blue-50` `border-brand-blue-100` / Inner: `bg-white` | `double-bezel-outer bg-brand-blue-50/80 border border-brand-blue-100` + `double-bezel-inner bg-white` | ✅ **OK** | Correcto |
| **CTA Section — Section bg** | `bg-brand-blue-700` | `bg-brand-blue-700` | ✅ **OK** | Alternancia correcta |
| **CTA Section — Card (Double Bezel)** | Outer white/5 border white/10 / Inner white border blue-50 | `double-bezel-outer bg-white/5 border border-white/10` + `double-bezel-inner bg-white border border-brand-blue-50` | ✅ **OK** | Correcto |
| **CTA Section — WhatsApp CTA** | `bg-green-500` (excepción funcional) | `bg-green-500 hover:bg-green-400` | ✅ **OK** | Excepción documentada para WhatsApp (verde institucional Meta) |
| **CTA Section — Ver Tarifas CTA** | `bg-white` / `text-brand-blue` / `border-brand-blue` | `bg-white hover:bg-brand-blue-50 border-2 border-brand-blue text-brand-blue` | ✅ **OK** | Variante elevated correcta |
| **Footer** | `bg-brand-blue-700` + accent bar yellow 6px | `bg-brand-blue-700` + `h-1.5 bg-brand-yellow` | ✅ **OK** | Footer obligatoriamente azul + barra acento |

### 1.2 Verificación del respeto absoluto al logotipo

| Regla (DESIGN.md §0.1 / brand-guide §3.1) | Implementación | Estado |
|--------------------------------------------|----------------|--------|
| **Archivo maestro**: `/public/logo-master.svg` (vector, sin fondo) | Se usa `/public/LogoEnviosDosRuedas.webp` (raster WebP) | ❌ **NO CUMPLE** — Debe usarse SVG vectorial maestro. WebP es fallback técnico, no asset principal |
| **Colores permitidos**: Solo Azul #0636A5, Blanco #FFFFFF, Amarillo #FFEC01 (marca compuesta) | Logo renderizado sobre azul (header/footer) y blanco (hero/cta) — correcto | ✅ **OK** |
| **PROHIBIDO**: Recolorear, estirar (aspect-ratio fijo 1:0.45), añadir sombras/glows/efectos | Header: `w-10 h-10` + `group-hover:scale-105` (escala hover) | ⚠️ **ADVERTENCIA** — El `scale-105` en hover altera aspect-ratio momentáneamente. Footprint: `relative w-11 h-11 group-hover:scale-105` |
| **Tamaño mínimo**: 120px ancho (web) | Header: 40px (`w-10`), Footer: 44px (`w-11`) | ❌ **INCUMPLIMIENTO** — Muy por debajo del mínimo 120px |
| **Clear space**: 0.25× altura del logotipo | No hay evidencia de espaciado de respeto explícito en contenedores | ⚠️ **PENDIENTE VERIFICAR** |
| **Variantes aprobadas**: Primaria, Reverso, Monocromo negro | Solo se usa versión "simplificada" con wordmark inline | ❌ **NO CUMPLE** — No se usa lockup oficial horizontal ni vertical |

> **Hallazgo crítico de identidad**: El logo se.renderiza como imagen raster (WebP) a 40-44px, muy por debajo del mínimo de 120px, y se aplica transform `scale` en hover. Debe migrarse a SVG maestro (`/public/logo-master.svg`) y respetarse tamaños mínimos y clear space.

---

## 📝 2. Auditoría de Tono y Voz (Voseo Rioplatense)

### 2.1 Detección de copys que fallan en la cercanía regional

| Componente | Texto Actual | Veredicto | Propuesta Refactorizada (Voseo Rioplatenese) |
|------------|--------------|-----------|----------------------------------------------|
| **layout.tsx — metadata.description** | "La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería inteligente." | ❌ **Formal/Genérico** | "Tu solución logística de confianza en Mar del Plata. Envíos Express, Flex de MercadoLibre, ruteo inteligente y cadetería que llega." |
| **page.tsx — metadata.description** | "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local." | ❌ **Formal** | "Especialistas en logística e-commerce y última milla en Mar del Plata. Enviá en el día, activá Flex y escalá con 3PL para tu negocio local." |
| **HeroAnimado — Badge** | "Tu Solución Confiable" | ⚠️ **Pasivo/Formal** | "Tu Partner Confiable" / "Logística que Cumple" |
| **HeroAnimado — H1** | "Mensajería y Logística **E-Commerce** en Mar del Plata" | ✅ **OK** (técnico) | — |
| **HeroAnimado — Lead paragraph** | "Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca." | ❌ **Corporativo/Genérico** — "partner estratégico", "potenciar tu marca" | "Somos tu socio en mensajería, envíos en el día y delivery de última milla. Soluciones rápidas, seguras y al mejor precio para que vendás más." |
| **HeroAnimado — CTA Primario** | "Solicitar Servicio" | ❌ **Formal** — "Solicitar" no es voseo | **"Cotizá tu Envío"** / **"Enviá Hoy"** |
| **HeroAnimado — CTA Secundario** | "Ver Servicios" | ❌ **Pasivo** | **"Elegí tu Servicio"** / **"Conocé Nuestras Soluciones"** |
| **HeroAnimado — Trust Pills** | "100% SEGURO", "RÁPIDO", "COBERTURA TOTAL" | ✅ **OK** (uppercase + tracking-wide, señalética) | — |
| **OptimizedHeader — Nav "Nosotros"** | "Sobre Nosotros", "Preguntas Frecuentes", "Nuestras Redes" | ⚠️ **Neutro** | "Conocenos", "Preguntas Frecuentes", "Seguinos" |
| **OptimizedHeader — CTA Header** | "Cotizar Envío" | ✅ **OK** (imperativo voseo) | — |
| **TrustBar — Labels contadores** | "Envíos realizados", "Paquetes extraviados", "Emprendedores confían", "Tiempo promedio entrega" | ✅ **OK** (métricas monumentales) | — |
| **ServicesOverview — Section eyebrow** | "NUESTROS SERVICIOS" | ✅ **OK** (uppercase label) | — |
| **ServicesOverview — H2** | "Soluciones logísticas a tu medida" | ⚠️ **Genérico** | "Soluciones a tu medida para Mar del Plata" |
| **ServicesOverview — Lead** | "Cuatro modalidades pensadas para cada tipo de negocio y cada velocidad de entrega en Mar del Plata." | ✅ **OK** (referencia MDQ) | — |
| **ServicesOverview — Cards titles** | "Envíos Express", "Envíos LowCost", "Envíos Flex (MercadoLibre)", "E-Commerce & 3PL" | ✅ **OK** (nomenclatura oficial) | — |
| **ServicesOverview — Descriptions** | "Mensajería en moto, entregas inmediatas en Mar del Plata." / "Envíos económicos con posibilidad de entregas en el día." / "Entregas en el día de tus ventas en MercadoLibre." / "Recomendado para E-Commerce, escalá tu tienda online." | ⚠️ **Mixto** — "escalá" ✅ voseo, resto neutro | "Mensajería en moto, entregas inmediatas en Mar del Plata." ✅ / "Envíos económicos, llegamos en el día." / "Entregás tus ventas de MercadoLibre en el día." / "Recomendado para e-commerce, escalá tu tienda online." |
| **ServicesOverview — CTA Cards** | "Ver más" | ❌ **Pasivo/Genérico** | **"Conocé Express"** / **"Cotizá LowCost"** / **"Activá Flex"** / **"Escalá con 3PL"** |
| **HowItWorks — Eyebrow** | "PROCESO SIMPLE" | ✅ **OK** | — |
| **HowItWorks — H2** | "EN 4 PASOS TU ENVÍO LLEGA" | ✅ **OK** (imperativo + cuantitativo) | — |
| **HowItWorks — Lead** | "Diseñamos el flujo más directo para que vos te ocupes de vender y nosotros de que llegue. Sin fricción, sin sorpresas." | ✅ **EXCELENTE** — voseo "vos", "llegue", cercanía | — |
| **HowItWorks — Step 1** | "COTIZÁ / Ingresá origen, destino y dimensiones. Obtené precio exacto y tiempo estimado al instante." | ✅ **OK** — "COTIZÁ", "Ingresá", "Obtené" | — |
| **HowItWorks — Step 2** | "RETIRAMOS / Pasamos por tu domicilio o punto de encuentro en Mar del Plata sin cargo adicional." | ❌ **"RETIRAMOS" (nosotros) vs voseo esperado "RETIRÁ"** — El stepper describe acciones del usuario, no de la empresa | **"RETIRÁ / Te pasamos a buscar por tu domicilio o punto de encuentro en Mar del Plata sin cargo."** |
| **HowItWorks — Step 3** | "ENTREGAMOS / Tu paquete viaja con seguimiento satelital en tiempo real. Entrega contra firma o foto." | ❌ **Mismo problema** — "ENTREGAMOS" (empresa) | **"RASTREÁ / Tu paquete viaja con seguimiento satelital en tiempo real. Entrega contra firma o foto."** |
| **HowItWorks — Step 4** | "CONFIRMÁ / Recibís confirmación instantánea con comprobante digital. Facturación automática mensual." | ✅ **OK** — "CONFIRMÁ", "Recibís" | — |
| **SocialProof — Eyebrow** | "CONFIAN Y CRECEN" | ❌ **Error gramatical** — Debe ser "CONFIAN" (sin tilde) o mejor "CONFÍAN" | **"CONFÍAN Y CRECEN"** |
| **SocialProof — H2** | "+140 EMPRENDEDORES CONFÍAN" | ✅ **OK** (cuantitativo) | — |
| **SocialProof — Lead** | "Marcas locales y retailers nacionales eligen Envíos DosRuedas para su logística de última milla en Mar del Plata." | ❌ **Formal** — "eligen", "logística de última milla" | **"Marcas locales y retailers nacionales eligen Envíos DosRuedas para su logística de última milla en Mar del Plata."** (aceptable como proof point, pero preferible: "Más de 140 emprendedores de Mar del Plata ya confían en nosotros.") |
| **SocialProof — Testimonios** | Textos en tercera persona, tono formal | ❌ **No voseo** — "La integración fue seamless", "Antes perdía horas", "Para mi e-commerce" | Reescribir en primera persona con voseo: "La integración con MercadoLibre Flex fue al toque. Pasamos de despachar 50 pedidos/día a 300+ sin sumar personal. El tracking satelital le da tranquilidad a mis clientes." |
| **CtaSection — Badge** | "SOLUCIONES ESCALABLES 2026" | ✅ **OK** (señalética) | — |
| **CtaSection — H2** | "¿Listo para escalar la logística de tu e-commerce **en Mar del Plata**?" | ✅ **OK** — interrogación directa + referencia MDQ | — |
| **CtaSection — Lead** | "Olvidate de la gestión de paquetes y enfocaté en vender más. Dejá la distribución urbana en manos de expertos." | ✅ **EXCELENTE** — "Olvidate", "enfocaté", "Dejá" (voseo perfecto) | — |
| **CtaSection — CTA WhatsApp** | "Contactanos por WhatsApp" | ✅ **OK** — "Contactanos" | — |
| **CtaSection — CTA Secundario** | "Ver tarifas 2026" | ⚠️ **Pasivo** | **"Cotizá LowCost 2026"** / **"Ver precios hoy"** |
| **CtaSection — Trust row** | "Pago contra entrega", "Retiro gratis a domicilio" | ✅ **OK** (beneficios claros) | — |
| **CtaSection — Footer stat** | "Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972." | ✅ **EXCELENTE** — referencia MDQ obligatoria "Friuli 1972" | — |
| **OptimizedFooter — Brand tagline** | "tu solución confiable" | ⚠️ **Pasivo** | **"tu socio logístico"** / **"logística que cumple"** |
| **OptimizedFooter — Description** | "Logística urbana inteligente de última milla en Mar del Plata. Conectamos tu negocio con entregas express en el día, soluciones Flex para MercadoLibre y distribución 3PL eficiente." | ❌ **Corporativo** — "Conectamos", "distribución 3PL eficiente" | **"Logística urbana inteligente de última milla en Mar del Plata. Conectamos tu negocio con entregas express en el día, soluciones Flex para MercadoLibre y distribución 3PL que escala."** |
| **OptimizedFooter — Column "Soluciones"** | Links con "Envíos Express", "Envíos LowCost", "Envíos Flex (MeLi)", "E-Commerce & 3PL" | ✅ **OK** (nomenclatura oficial) | — |
| **OptimizedFooter — Contact info** | "Friuli 1972, Mar del Plata", "+54 223 660-2699", "matiascejas@enviosdosruedas.com", "Lunes a Sábado: 08:00 a 20:00 hs" | ✅ **EXCELENTE** — Datos reales MDQ, horarios, teléfono local | — |

### 2.2 Resumen de incumplimientos de tono (Voseo)

| Categoría | Cantidad | Severidad |
|-----------|----------|-----------|
| **Verbos en infinitivo/formal en lugar de imperativo voseo** | 12+ ocurrencias | 🔴 **CRÍTICO** — Rompe regla inmutable §0.3 / §2.3 |
| **Pronombres "su/suyo" o construcciones formales** | 3-4 ocurrencias | 🟠 **ALTO** |
| **Expresiones genéricas/no locales** | 6+ ocurrencias | 🟠 **ALTO** — Falta referencias MDQ obligatorias |
| **Errores gramaticales (tildes en imperativos)** | 1 ("CONFIAN") | 🟡 **MEDIO** |
| **Copy excelente (cumple 100%)** | 4 secciones (HowItWorks lead, steps 1/4, CtaSection lead/footer, Footer contact) | ✅ |

---

## 🛠️ 3. Validación de Design Tokens (Tailwind v4)

### 3.1 Estado actual de tokens en `globals.css` (@theme) y `tailwind.config.ts`

| Token / Config | Definición en `globals.css` @theme | Definición en `tailwind.config.ts` | Estado | Discrepancia / Acción Requerida |
|----------------|-----------------------------------|-----------------------------------|--------|--------------------------------|
| **Blue Scale (50-950)** | ✅ Definidos como `--color-blue-*` mapeados a brand-blue | ✅ Definidos en `theme.extend.colors['brand-blue']` | ✅ **OK** | Doble definición (CSS + JS config). Mantener solo `@theme` (Tailwind v4 nativo) |
| **Yellow Scale (50-600)** | ✅ `--color-yellow-*` mapeados a brand-yellow | ✅ `theme.extend.colors['brand-yellow']` | ✅ **OK** | Idem — consolidar en `@theme` |
| **White Scale** | ✅ `--color-white-50: #FFFFFF` | ✅ `brand-white: { 50: '#FFFFFF' }` | ✅ **OK** | Idem |
| **Semantic Aliases (primary, accent, surface, text-*, border-*, focus-ring)** | ✅ Definidos completos en `@theme` (líneas 144-169) | ❌ **NO definidos** en tailwind.config | ⚠️ **INCONSISTENCIA** — Tokens semánticos solo existen en CSS, no accesibles vía `text-primary` etc. en tailwind.config |
| **Font Families** | ✅ `--font-sans`, `--font-display`, `--font-subheading`, `--font-mono` | ✅ Definidos en `theme.extend.fontFamily` | ✅ **OK** | Doble definición — mover todo a `@theme` |
| **Spacing Scale** | ❌ **NO definidos** en `@theme` | ❌ **NO definidos** en tailwind.config (usa defaults) | ❌ **FALTANTE** — Design tokens §4 requieren escala 4px base + tokens semánticos (`--section-*`, `--container-*`, `--card-*`, `--btn-h`, `--input-h`) |
| **Border Radius** | ❌ **NO definidos** en `@theme` | ❌ **NO definidos** | ❌ **FALTANTE** — Tokens §5 requieren `radius-*` + `bezel-outer/inner` |
| **Shadows** | ✅ Parcial: `--shadow-xs` a `--shadow-xl`, `--shadow-elevated`, `--shadow-hover-lift`, `--shadow-float`, `--shadow-cta-glow`, `--shadow-antigravity-deep` | ✅ Definidos en `theme.extend.boxShadow` con nombres distintos (`glow-blue`, `float-shadow`, `bezel-inner`, `elevated`, `hover-lift`, `cta-glow`) | ⚠️ **INCONSISTENCIA DE NOMBRES** — CSS usa `--shadow-*`, tailwind.config usa nombres custom. Unificar nomenclatura |
| **Motion/Duration/Easing** | ❌ **NO definidos** en `@theme` | ✅ Parcial en `theme.extend.animation` + `keyframes` | ❌ **FALTANTES EN CSS** — Tokens §6 requieren `--duration-*`, `--ease-*` en `@theme` |
| **Gradients** | ❌ **NO definidos** en `@theme` | ❌ **NO definidos** | ❌ **FALTANTES** — Tokens §8 requieren `--gradient-*` |
| **Z-Index** | ❌ **NO definidos** | ❌ **NO definidos** | ❌ **FALTANTES** — Tokens §11 |
| **Breakpoints** | ❌ **NO definidos** | ❌ **NO definidos** (usa defaults) | ⚠️ **OK POR DEFAULT** — Pero tokens §10 definen nombres custom (`--bp-*`) |
| **Component Utilities (@utility)** | ✅ Parcial: `kinetic-font-stretch`, `text-display`, `text-h1`... `text-h4`, `text-body`, `text-label`, `text-mono`, `text-mono-lg`, `gradient-*`, `glassmorphism-*`, `card-minimal`, `hover-float`, `float-tilt-card`, `cta-nested-pill`, `double-bezel-*`, `shimmer-bg`, `animate-*`, `bezel-*`, `accent-line-*` | ❌ **NO en tailwind.config** | ✅ **BIEN** — Están en `@theme` / `@utility` (Tailwind v4 nativo) |

### 3.2 Requerimientos de limpieza y consolidación

| Acción Requerida | Prioridad | Detalle |
|------------------|-----------|---------|
| **Eliminar `tailwind.config.ts` colores/fonts/sombras duplicados** | 🔴 **CRÍTICA** | Tailwind v4 usa `@theme` en CSS como única fuente de verdad. El archivo JS config solo debe contener `content` paths y plugins. |
| **Definir tokens semánticos faltantes en `@theme`** | 🔴 **CRÍTICA** | `spacing` (base + semánticos), `borderRadius` (incl. bezel), `duration`, `easing`, `gradients`, `zIndex`, `breakpoints` (nombrados) |
| **Unificar nomenclatura de sombras** | 🟠 **ALTA** | Usar nombres de design-tokens (`--shadow-*`) tanto en CSS como en utilidades. Eliminar `glow-blue`, `float-shadow` legacy. |
| **Verificar que `brand-blue-700` = `primary` en todo el código** | 🟠 **ALTA** | Actualmente hay mezcla: `bg-brand-blue`, `bg-brand-blue-700`, `bg-blue-700`. Estandarizar a `bg-primary` / `bg-brand-blue-700` vía token semántico. |
| **Agregar `@utility` para Double Bezel Card** | 🟡 **MEDIA** | Ya existe `.double-bezel-outer` / `.double-bezel-inner` como clases CSS, pero deberían ser `@utility` en `@theme` para uso tailwind nativo. |
| **Agregar `@utility` para CTA Nested Pill variantes** | 🟡 **MEDIA** | Existe `.cta-nested-pill` + `.cta-nested-icon` pero faltan variantes `--primary`, `--elevated`, `--outline`, `--ghost` como utilities. |
| **Migrar `font-mono` (Geist Mono) a `@theme`** | 🟡 **MEDIA** | Definido en design-tokens pero no en `globals.css` @theme. |
| **Eliminar referencias a `slate`, `gray`, `zinc` en código** | 🔴 **CRÍTICA** | Auditoría de código revela uso residual: `text-brand-blue-500` (OK), pero hay `bg-white/5`, `border-white/10`, `text-brand-blue-400` que son tokens válidos, PERO revisar que NO existan `text-slate-*`, `bg-gray-*`, etc. en componentes. |

### 3.3 Hallazgos de código duro (hardcoded values) en componentes

| Archivo | Línea | Valor Hardcoded | Token Correcto | Acción |
|---------|-------|-----------------|----------------|--------|
| `HowItWorks.tsx` | 38-57 | `bg-green-500`, `#16A34A`, `#DCFCE7`, `#FFEC01`, `#BACEFD` | `status.success.DEFAULT`, `status.success.light`, `accent.DEFAULT`, `brand-blue-100` | Reemplazar por tokens semánticos |
| `HowItWorks.tsx` | 97-100 | `backgroundColor: '#16A34A'`, `'#FFEC01'`, `'#BACEFD'` | Motion variants deben usar CSS variables o classNames con tokens | Refactorizar animación a classNames |
| `SocialProof.tsx` | 147-148 | `filter: 'grayscale(100%) contrast(1.2) opacity(0.6)'` inline style | Debe ser utility class o CSS variable | Mover a globals.css como utility |
| `ServicesOverview.tsx` | 156 | `bg-brand-blue-700` como base de card | Debe ser Double Bezel (outer blue-50 + inner white) | **Refactor mayor** — cambiar arquitectura de card |
| `HeroAnimado.tsx` | 119 | `text-brand-blue` (en badge sobre amarillo) | Debe ser `text-brand-blue-900` (`text-on-accent`) | Fix contraste AA |
| `OptimizedHeader.tsx` | 93 | `/LogoEnviosDosRuedas.webp` | `/logo-master.svg` | Migrar a SVG maestro |
| `OptimizedFooter.tsx` | 36 | `/LogoEnviosDosRuedas.webp` | `/logo-master.svg` | Migrar a SVG maestro |

---

## 📌 RESUMEN EJECUTIVO DE ACCIONES PRIORITARIAS

### 🔴 CRÍTICO (Bloqueador de marca)
1. **Migrar logo a SVG maestro** (`/public/logo-master.svg`) en Header y Footer, respetar 120px mínimo y clear space.
2. **Refactor ServicesOverview cards** a patrón Double Bezel obligatorio (outer `bg-brand-blue-50 border-brand-blue-100` + inner `bg-white`).
3. **Eliminar `tailwind.config.ts` duplicaciones** — consolidar TODO en `globals.css @theme`.
4. **Definir tokens faltantes en `@theme`**: spacing, borderRadius, duration, easing, gradients, zIndex, breakpoints.
5. **Corregir todos los copys a voseo rioplatense** (12+ verbos imperativos, referencias MDQ obligatorias).
6. **Reemplazar hex hardcoded en HowItWorks** por tokens semánticos de status.

### 🟠 ALTO (Próximo sprint)
7. Unificar nomenclatura sombras (CSS `@theme` = source of truth).
8. Agregar `@utility` para Double Bezel y CTA Nested Pill variantes.
9. Fix contraste badge Hero: `text-brand-blue` → `text-brand-blue-900` (`text-on-accent`).
10. Reescribir testimonios SocialProof en voseo primera persona.

### 🟡 MEDIO (Deuda técnica)
11. Migrar `font-mono` (Geist Mono) a `@theme`.
12. Verificar clear-space logo en todos los contenedores.
13. Estandarizar `bg-brand-blue` vs `bg-brand-blue-700` vs `bg-blue-700` a token semántico `bg-primary`.
14. Auditar componentes restantes (páginas servicios, cotizador, nosotros) con misma lista de chequeo.

---

**Firma de auditoría:**  
Director de Marca & Ingeniero Frontend — *UI/UX Pro Max*  
**Fecha:** 2025-07-20  
**Próxima revisión:** Post-implementación correcciones críticas (objetivo: 2025-07-27)