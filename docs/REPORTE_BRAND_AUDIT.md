# 🎯 REPORTE DE AUDITORÍA DE MARCA — Envíos DosRuedas

**Fecha:** 2026-07-20  
**Versión:** 1.0  
**Alcance:** `layout.tsx` (root), `page.tsx` (homepage), `globals.css` (design-tokens de Tailwind v4), componentes Hero/TTrustBar/Services/HowItWorks/SocialProof/CTA/Header/Footer  
**Referencia normativa:** `DESIGN.md`, `docs/design/brand-guide.md`, `docs/design/design-tokens.md`, `docs/paleta_3_colores.md`, `docs/knowledge_base/contexto.md`

---

## 🎨 1. Auditoría de Identidad y Paleta Cromática

### 1.1 Verificación de los 3 Colores Core (Azul #0636A5, Amarillo #FFEC01, Blanco #FFFFFF)

| Componente / Archivo | ✅ Cumple | ⚠️ Parcial | ❌ Incumple | Hallazgo |
|---|---|---|---|---|
| **globals.css** (`@theme`) | ✅ | | | Define escalas completas `brand-blue-*`, `brand-yellow-*`, `brand-white-*` según specs. Sin embargo **redefine escalas `gray-*`, `slate-*`, `zinc-*` mapeándolas a azul** —esto viola la regla "CERO TOLERANCIA: nunca usar slates/grises/zincs" aunque sea como alias. |
| **tailwind.config.ts** | ✅ | | | Paleta oficial correcta. No define grises/slates paralelos. |
| **layout.tsx** (`<body>`) | | ⚠️ | | Usa `bg-white` (alias correcto) pero `text-brand-ink` **NO EXISTE** en tokens —debería ser `text-brand-blue-700`. `selection:bg-brand-yellow selection:text-brand-blue` correcto. |
| **HeroAnimado.tsx** | ✅ | | | Fondo `bg-brand-blue-700`, textos `text-white`, `text-brand-blue-100`, badges/accent `bg-brand-yellow text-brand-blue`. CTAs `bg-brand-yellow` + `bg-white` correctos. |
| **TrustBar.tsx** | ✅ | | | Fondo `bg-brand-blue-50 border-brand-blue-100`. Iconos `bg-brand-blue-100 text-brand-blue`. Contadores `text-brand-blue` + sufijo `text-brand-yellow`. Badge ISO `bg-white border-brand-blue-100`, icono `bg-brand-yellow text-brand-blue`. |
| **ServicesOverview.tsx** | ✅ | | | Fondo `bg-white` con patrones `bg-brand-blue-800` y `bg-brand-yellow` (opacity). Cards usan `border-brand-blue-*`, `bg-brand-yellow`, `bg-brand-blue-50`, badges con colores correctos por variante. |
| **HowItWorks.tsx** | ❌ | | | **CRÍTICO:** Usa `bg-green-500`, `text-green-500`, `shadow-[0_0_20px_rgba(22,163,74,0.6)]` en stepper "completed" —**COLOR VERDE EXTERNO PROHIBIDO**. Debe usar tokens semánticos `success` (`#16A34A`) definidos en design-tokens, no Tailwind `green-*`. |
| **SocialProof.tsx** | ✅ | | | Fondo `bg-white`. Grid pattern `rgba(6,54,165,0.02)`. Cards double-bezel `bg-brand-blue-50/80 border-brand-blue-100` + inner `bg-white`. Stars `fill-brand-yellow text-brand-yellow`. Badge "Verificado" `bg-brand-yellow text-brand-blue`. |
| **CtaSection.tsx** | ❌ | | | **CRÍTICO:** Botón WhatsApp usa `bg-green-500 hover:bg-green-400 border-green-400 shadow-[0_0_30px_rgba(22,163,74,0.3)]` —**VERDE EXTERNO PROHIBIDO**. Debe usar `brand-yellow` para CTA primario o token semántico `success` solo para estados, no para botones de marca. |
| **OptimizedHeader.tsx** | ✅ | | | Fondo `bg-brand-blue` / `bg-brand-blue/95`. Links `text-white hover:text-brand-yellow`. CTA `bg-white text-brand-blue border-brand-blue shadow-[3px_3px_0px_brand-blue]`. Correcto. |
| **OptimizedFooter.tsx** | ✅ | | | Fondo `bg-brand-blue-700`. Barra acento `h-1.5 bg-brand-yellow`. Textos `text-white`, `text-brand-blue-50`, `text-brand-yellow`. Iconos `text-brand-yellow`. Botones scroll-top `bg-brand-yellow text-brand-blue border-brand-blue shadow-[3px_3px_0px_brand-blue]`. Correcto. |

---

### 1.2 Verificación del Respeto Absoluto al Logotipo

| Regla (DESIGN.md §0.1) | Estado | Evidencia |
|---|---|---|
| **Archivo maestro:** `/public/logo-master.svg` (vector, sin fondo, safe-area 20%) | ✅ | Existe en `public/logo-master.svg` (4MB — **revisar peso**, SVG maestro no debe pesar 4MB). |
| **Colores permitidos:** Solo Azul #0636A5, Blanco #FFFFFF, Amarillo #FFEC01 (marca compuesta) | ✅ | Header/Footer usan `LogoEnviosDosRuedas.webp` (raster) + wordmark textual "Envíos **Dosruedas**" en `text-white` + `text-brand-yellow`. |
| **PROHIBIDO:** Recolorear, estirar (aspect-ratio 1:0.45 fijo), sombras/glows/efectos, fondos ruidosos sin safe-area, versión rasterizada (png/jpg) salvo fallback técnico | ⚠️ | **Header/Footer usan `/LogoEnviosDosRuedas.webp` (raster WebP) como logo principal** —viola "NUNCA usar versión rasterizada salvo fallback técnico documentado". Debe usarse `logo-master.svg` o `logo-horizontal.svg` (SVG). |
| **Tamaño mínimo:** 120px ancho (web) | ✅ | `w-10 h-10` (40px) en header —**INCUMPLIMIENTO** de mínimo 120px. En footer `w-11 h-11` (44px). |
| **Clear space:** 0.25× altura logotipo | ⚠️ | No hay contenedor explícito de clear-space en Header/Footer. El wordmark textual pegado al icono reduce safe-area. |
| **Variantes aprobadas:** 1. Primaria (Azul s/ blanco) 2. Reverso (Blanco s/ Azul) 3. Monocromo negro (solo fax/legal) | ⚠️ | Se usa variante "blanco + amarillo" en wordmark textual sobre fondo azul —**no está en variantes aprobadas**. El logo maestro SVG debería usarse en su variante reverso (blanco sobre azul). |

**Hallazgo Crítico de Logo:** El archivo `logo-master.svg` pesa **4MB** —un SVG vectorial limpio no debe superar ~50KB. Indica metadatos incrustados, paths no optimizados o raster embebido. **Requiere auditoría y regeneración del master.**

---

## 📝 2. Auditoría de Tono y Voz (Voseo Rioplatense)

### 2.1 Detección de Copys que Fallan en Cercanía Regional

| Archivo / Componente | Línea | Copy Actual | ❌ Problema | ✅ Propuesta Refactorizada (Voseo Rioplatense) |
|---|---|---|---|---|
| **HeroAnimado.tsx:124** | Badge | "Tu Solución Confiable" | Neutro, genérico, no usa voseo | **"Tu Solución Al Toque"** / **"Confía Tranqui"** |
| **HeroAnimado.tsx:131-138** | H1 | "Mensajería y Logística **E-Commerce** en **Mar del Plata**" | "E-Commerce" en inglés, tono corporativo frío | **"Enviá Hoy. Llega Al Toque."** (Display) / **"Logística E-Commerce En Mar Del Plata"** (si se requiere descriptor) |
| **HeroAnimado.tsx:142-144** | Lead | "Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca." | "Partner estratégico", "potenciar tu marca" —jerga corporativa, no rioplatense | **"Somos tu socio logístico en Mar del Plata: envíos en el día, rastreo en vivo, retiro en 15 min. Vendé más, preocupate menos."** |
| **HeroAnimado.tsx:154** | CTA Primary | "Solicitar Servicio" | Imperativo formal ("Solicitar") | **"Cotizá Express"** / **"Enviá Ahora"** |
| **HeroAnimado.tsx:164** | CTA Secondary | "Ver Servicios" | Neutro | **"Ver Cómo Te Ayudamos"** / **"Elegí Tu Envío"** |
| **HeroAnimado.tsx:179-192** | Trust Pills | "100% SEGURO", "RÁPIDO", "COBERTURA TOTAL" | Correctos (uppercase, tracking-wide, voseo implícito) | ✅ Mantenidos |
| **TrustBar.tsx:8-12** | Counters labels | "Envíos realizados", "Paquetes extraviados", "Emprendedores confían", "Tiempo promedio entrega" | "Paquetes extraviados" con valor 0 —negativo en trust bar | **"0 Paquetes Perdidos"** (positivo) / **"Entregas A Tiempo"** |
| **TrustBar.tsx:104-105** | ISO Badge | "ISO 9001:2015 Certificada / Gestión de calidad en logística última milla" | Formal, pasivo | **"Calidad Certificada ISO 9001 / Tu Logística Auditada"** |
| **ServicesOverview.tsx:122-130** | Section Header | "NUESTROS SERVICIOS / Soluciones logísticas a tu medida / Cuatro modalidades pensada para cada tipo de negocio..." | "A tu medida", "pensada para" —genérico | **"TU LOGÍSTICA, TU RITMO / Cuatro formas de enviar desde Mar del Plata. Elegí la que va con tu negocio."** |
| **ServicesOverview.tsx:23-27** | Service: Express | "URGENTE / Mensajería en moto, entregas inmediatas en Mar del Plata." | Correcto | ✅ |
| **ServicesOverview.tsx:33-37** | Service: LowCost | "ECONÓMICO / Envíos económicos con posibilidad de entregas en el día." | "Posibilidad de" —débil | **"ECONÓMICO / Envíos LowCost: mismo día, menor costo. Ruteamos inteligente."** |
| **ServicesOverview.tsx:43-47** | Service: Flex | "INTEGRACIÓN FLEX / Entregas en el día de tus ventas en MercadoLibre." | Correcto | ✅ |
| **ServicesOverview.tsx:53-57** | Service: E-Commerce | "PYMES & CORPORATIVO / Recomendado para E-Commerce, escalá tu tienda online." | "Escalá" ✅ voseo, "Recomendado para" —pasivo | **"PYMES & 3PL / Almacén + Pick/Pack + Envío. Tu operación, tercerizada."** |
| **ServicesOverview.tsx:193-194** | CTA Cards | "Ver más" | Genérico | **"Cotizá Express"** / **"Calculá LowCost"** / **"Conectá Flex"** / **"Hablá 3PL"** |
| **HowItWorks.tsx:10-11** | Step 1 | "COTIZÁ / Ingresá origen, destino y dimensiones. Obtené precio exacto y tiempo estimado al instante." | ✅ Voseo correcto | ✅ |
| **HowItWorks.tsx:16-17** | Step 2 | "RETIRAMOS / Pasamos por tu domicilio o punto de encuentro en Mar del Plata sin cargo adicional." | "Pasamos" (nosotros) —debería ser "Retirá" o "Coordiná retiro" | **"RETIRAMOS EN TU PUERTA / Agendá el retiro sin cargo. Pasamos por tu casa o donde estés."** |
| **HowItWorks.tsx:23-24** | Step 3 | "ENTREGAMOS / Tu paquete viaja con seguimiento satelital en tiempo real. Entrega contra firma o foto." | ✅ | ✅ |
| **HowItWorks.tsx:31-32** | Step 4 | "CONFIRMÁ / Recibís confirmación instantánea con comprobante digital. Facturación automática mensual." | ✅ Voseo correcto | ✅ |
| **SocialProof.tsx:100-101** | H2 | "+140 EMPRENDEDORES CONFÍAN" | "Confían" (ustedes) —debe ser voseo | **"+140 EMPRENDEDORES CONFIAN"** |
| **SocialProof.tsx:103-105** | Lead | "Marcas locales y retailers nacionales eligen Envíos DosRuedas para su logística de última milla en Mar del Plata." | "Eligen" (ustedes), "retailers nacionales" —corporativo | **"+140 Emprendedores Ya Confían / Marcas de acá y de todo el país eligen DosRuedas para su última milla en Mar del Plata."** |
| **SocialProof.tsx:19-44** | Testimonios | Textos usan "perdía horas", "programo todo", "mis devoluciones bajaron" —correcto voseo en primera persona | ✅ Auténticos | ✅ |
| **SocialProof.tsx:205-206** | Badge | "Verificado" | Correcto | ✅ |
| **CtaSection.tsx:58** | H2 | "¿Listo para escalar la logística de tu e-commerce **en Mar del Plata**?" | "¿Listo para...?" (formal), "escalar" (jerga tech) | **"¿Empezamos Hoy? Tu Logística En Mar Del Plata, Resuelta."** |
| **CtaSection.tsx:68** | Lead | "Olvidate de la gestión de paquetes y enfocaté en vender más. Dejá la distribución urbana en manos de expertos." | ✅ "Olvidate", "enfocaté" —voseo correcto | ✅ |
| **CtaSection.tsx:89** | CTA WhatsApp | "Contactanos por WhatsApp" | ✅ "Contactanos" voseo | ✅ |
| **CtaSection.tsx:102** | CTA Secondary | "Ver tarifas 2026" | Correcto | ✅ |
| **CtaSection.tsx:116-123** | Trust row | "Pago contra entrega", "Retiro gratis a domicilio" | ✅ | ✅ |
| **CtaSection.tsx:133** | Footer stat | "Atención comercial inmediata para PyMEs y Emprendedores. Operación centralizada en Friuli 1972." | "PyMEs" mayúsculas inconsistent, "Operación centralizada" —pasivo | **"Atención Al Toque Para Emprendedores Y PyMEs. Hub En Friuli 1972."** |
| **OptimizedHeader.tsx:47-68** | Nav labels | "Inicio", "Servicios", "Nosotros", "Contacto" | Correctos (labels navegación) | ✅ |
| **OptimizedHeader.tsx:52-55** | Dropdown Express | "Envíos Express / Rápido, en 2 horas" | ✅ | ✅ |
| **OptimizedHeader.tsx:53-54** | Dropdown LowCost | "Envíos LowCost / Económico e inteligente" | "Inteligente" —buzzword | **"Envíos LowCost / Económico Y Ruteado"** |
| **OptimizedHeader.tsx:54-55** | Dropdown Flex | "Envíos Flex (MeLi) / Socio MercadoLibre Flex" | "Socio" —correcto | ✅ |
| **OptimizedHeader.tsx:55-56** | Dropdown 3PL | "E-Commerce & 3PL / Logística para PyMEs" | "&" en label nav —evitar | **"E-Commerce Y 3PL / Logística Para Tu PyME"** |
| **OptimizedHeader.tsx:62-65** | Nosotros dropdown | "Sobre Nosotros / Quiénes somos", "Preguntas Frecuentes / Todas tus dudas resueltas", "Nuestras Redes / Comunidad en movimiento" | "Todas tus dudas resueltas" —formal | **"Preguntas Frecuentes / Lo Que Necesités Saber"**, **"Nuestras Redes / La Comunidad DosRuedas"** |
| **OptimizedHeader.tsx:209** | CTA Header | "Cotizar Envío" | ✅ | ✅ |
| **OptimizedFooter.tsx:54-56** | Brand tagline | "Logística urbana inteligente de última milla en Mar del Plata..." | "Inteligente", "última milla" —técnico | **"Tu Logística En Mar Del Plata: Express En El Día, Flex Para MeLi, 3PL Para Crecer."** |
| **OptimizedFooter.tsx:165** | Ubicación | "Friuli 1972, Mar del Plata" | ✅ Referencia local obligatoria | ✅ |
| **OptimizedFooter.tsx:197** | Horarios | "Lunes a Sábado: 08:00 a 20:00 hs" | ✅ | ✅ |

---

### 2.2 Resumen de Incumplimientos de Voz (Conteo)

| Categoría | Cantidad | Severidad |
|---|---|---|
| **Verb forms (no voseo):** "Solicitar", "Ver", "Contactanos" (parcial), "Eligen", "Escalá" (sí voseo) | 12+ | 🔴 Crítico |
| **Pronombres formales:** "tu" vs "su" —mayoría usa "tu" correctamente | 3 | 🟡 Medio |
| **Expresiones locales faltantes:** "Al toque", "Por acá", "Quedate tranquilo" | 0 usadas: 8 oportunidades perdidas | 🟡 Medio |
| **Referencias MDQ obligatorias:** Güemes, Playa Grande, Punta Mogotes, Chauvín, Friuli 1972 | Solo Friuli 1972 en Footer/CTA | 🔴 Crítico |
| **Diccionario prohibido (contexto.md §3.4):** "Estimado cliente", "Por favor ingrese", "Su envío", "En breves momentos", "Zona de cobertura", "Centro de distribución", "Motociclista/Repartidor", "Tarifa/Precio lista" | **0 ocurrencias detectadas** ✅ | — |

---

## 🛠️ 3. Validación de Design Tokens (Tailwind v4)

### 3.1 Estado Actual de Tokens en `globals.css` (`@theme`)

| Categoría | Tokens Definidos | ✅ Correctos | ⚠️ Problemas | ❌ Faltantes/Incorrectos |
|---|---|---|---|---|
| **Color Primitivos (Brand Scales)** | `brand-blue-50` a `700`, `brand-yellow-50` a `500`, `brand-white-50` | ✅ Hex exactos según `paleta_3_colores.md` | — | Falta `brand-blue-800` `#052D8C`, `900` `#04236B`, `950` `#021440` (definidos en DESIGN.md pero no en globals.css) |
| **Remapped Blue Scales** | `--color-blue-50` a `--color-blue-950` | ✅ Mapeo correcto a brand-blue | — | `blue-800`/`900`/`950` todos mapeados a `brand-blue-700` —**PIERDEN GRADACIÓN**. Design tokens requieren escalas completas. |
| **Remapped Gray/Slate/Zinc** | `--color-gray-*`, `--color-slate-*`, `--color-zinc-*` | ❌ **VIOLACIÓN CRÍTICA**: DESIGN.md §0.2 prohíbe `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*` —"NUNCA USAR". Mapearlos a azul no los elimina; siguen disponibles como clases Tailwind (`bg-gray-100`, `text-slate-500`, etc.) permitiendo uso accidental. | **ELIMINAR ESTOS ALIAS COMPLETAMENTE** |
| **Semantic Aliases (Obligatorios en Código)** | `--color-primary`, `--color-accent`, `--color-surface`, `--color-text-primary`, `--color-border-default`, `--color-focus-ring` | ✅ Definidos en `@theme` | Nombres inconsistentes: `--color-brand-navy` (alias de blue-700), `--color-brand-ink` `#00277c` (NO EXISTE en paleta), `--color-brand-dark` `#001035` (NO EXISTE) | **Eliminar tokens fantasmas** (`brand-ink`, `brand-navy`, `brand-dark`) no documentados. |
| **Typography** | `--font-sans`, `--font-display`, `--font-subheading` | ✅ Via `next/font` variables | Falta `--font-mono` (`Geist Mono`) —definido en design-tokens pero no en globals.css | Agregar `--font-mono` variable. |
| **Spacing** | No hay tokens `--space-*` en `@theme` | ❌ **FALTAN TODOS** | DESIGN.md §4 define escala 4px base (space-1 a space-36) + semánticos (`--section-*`, `--container-*`, `--card-*`, `--btn-h`, `--input-h`) | **Implementar tokens de spacing en @theme** |
| **Border Radius** | `--radius-sm` 8px, `--radius-md` 12px, `--radius-lg` 16px, `--radius-xl` 20px | ⚠️ Valores **NO COINCIDEN** con DESIGN.md §5 (radius-sm=4px, md=6px, lg=8px, xl=12px, 2xl=16px, 3xl=24px, bezel-outer=16px, bezel-inner=12px) | Valores inflados (+4px c/u). Rompen double-bezel (gap debe ser 4px = 0.25rem). | **Corregir a valores DESIGN.md** |
| **Shadows** | `--shadow-xs` a `--shadow-xl`, `--shadow-accent-*`, `--shadow-minimal`, `--shadow-soft-elevation`, `--shadow-antigravity-deep` | ✅ Colores basados en azul (#0636A5) y amarillo (#FFEC01) correctos | Nombres no siguen convención semántica DESIGN.md (ej. `--shadow-elevated`, `--shadow-hover-lift`, `--shadow-float`, `--shadow-bezel`, `--shadow-cta-glow*`) | **Alinear nombres a DESIGN.md §6** |
| **Gradients** | `@utility gradient-blue`, `gradient-blue-light`, `gradient-yellow`, `gradient-mixed`, `gradient-surface`, `gradient-dark`, `gradient-hero-mesh`, `gradient-shimmer-bg` | ✅ Definidos como utilities | `gradient-blue-light` usa `#EFF6FF`, `#DBEAFE`, `#BFDBFE` —**SLATE/AZUL GENÉRICOS NO DE PALETA**. Debe usar `brand-blue-50/100/200`. | **Corregir hex a tokens de marca** |
| **Motion** | `--animate-float-slow`, `--animate-pulse-subtle`, `@keyframes` | ✅ | Faltan durations/easings semánticos (`--duration-*`, `--ease-*`) definidos en DESIGN.md §7 | **Agregar tokens de motion semánticos** |

---

### 3.2 Requerimientos de Limpieza Críticos

| # | Acción Requerida | Prioridad | Archivo/s |
|---|---|---|---|
| **1** | **Eliminar TODOS los aliases `gray-*`, `slate-*`, `zinc-*`** de `@theme` en `globals.css`. Estos colores NO EXISTEN en el design system. Su presencia viola la "Ley de Tres Colores" y permite uso accidental. | 🔴 **CRÍTICA** | `globals.css` líneas 45-82 |
| **2** | **Completar escalas Blue 800/900/950** con valores reales (`#052D8C`, `#04236B`, `#021440`) en lugar de mapear todo a blue-700. | 🔴 **CRÍTICA** | `globals.css` líneas 41-43 |
| **3** | **Eliminar tokens fantasmas**: `--color-brand-ink` (`#00277c`), `--color-brand-navy` (alias), `--color-brand-dark` (`#001035`). No existen en paleta oficial. | 🔴 **CRÍTICA** | `globals.css` líneas 27-29 |
| **4** | **Corregir border-radius tokens** a valores DESIGN.md: `sm=4px`, `md=6px`, `lg=8px`, `xl=12px`, `2xl=16px`, `3xl=24px`, `bezel-outer=16px`, `bezel-inner=12px`. | 🟡 **ALTA** | `globals.css` líneas 99-102 |
| **5** | **Agregar tokens de spacing semánticos** (`--space-1` a `--space-36`, `--section-*`, `--container-*`, `--card-*`, `--btn-h`, `--input-h`) en `@theme`. | 🟡 **ALTA** | `globals.css` (nueva sección) |
| **6** | **Agregar `--font-mono`** variable para `Geist Mono` (data/métricas/tracking). | 🟡 **ALTA** | `globals.css` + `layout.tsx` |
| **7** | **Corregir `gradient-blue-light`** a usar tokens de marca: `linear-gradient(135deg, var(--color-brand-blue-50) 0%, var(--color-brand-blue-100) 50%, var(--color-brand-blue-200) 100%)`. | 🟡 **ALTA** | `globals.css` línea 130-132 |
| **8** | **Alinear nombres de sombras** a DESIGN.md §6: `elevated`, `hover-lift`, `float`, `bezel`, `cta-glow`, `cta-glow-sm`, `antigravity-deep`. | 🟢 **MEDIA** | `globals.css` líneas 88-107 |
| **9** | **Agregar motion tokens semánticos**: `--duration-instant` (50ms), `--duration-fast` (150ms), `--duration-base` (200ms), `--duration-normal` (300ms), `--duration-slow` (400ms), `--duration-slower` (500ms), `--duration-slowest` (800ms) + easings. | 🟢 **MEDIA** | `globals.css` (nueva sección) |
| **10** | **Auditar y regenerar `logo-master.svg`** (4MB → <50KB). Verificar aspect-ratio 1:0.45, safe-area 20%, sin fondos/efectos. | 🔴 **CRÍTICA** | `public/logo-master.svg` |
| **11** | **Reemplazar `LogoEnviosDosRuedas.webp`** (raster) por `logo-master.svg` o `logo-horizontal.svg` en Header/Footer. Documentar fallback técnico si se mantiene WebP. | 🔴 **CRÍTICA** | `OptimizedHeader.tsx:94`, `OptimizedFooter.tsx:37` |
| **12** | **Corregir tamaño mínimo logo** a ≥120px ancho (actualmente 40-44px). | 🔴 **CRÍTICA** | `OptimizedHeader.tsx`, `OptimizedFooter.tsx` |
| **13** | **Eliminar `green-*` hardcodeado** en `HowItWorks.tsx` (stepper completed) y `CtaSection.tsx` (WhatsApp CTA). Usar tokens semánticos `success` (`#16A34A`) solo para estados, nunca para botones de marca. | 🔴 **CRÍTICA** | `HowItWorks.tsx:40,105`, `CtaSection.tsx:87-88` |
| **14** | **Refactorizar TODOS los copys** detectados en §2.1 a voseo rioplatense + referencias MDQ obligatorias. | 🔴 **CRÍTICA** | `HeroAnimado.tsx`, `TrustBar.tsx`, `ServicesOverview.tsx`, `HowItWorks.tsx`, `SocialProof.tsx`, `CtaSection.tsx`, `OptimizedHeader.tsx`, `OptimizedFooter.tsx` |

---

## 📋 Checklist de Cumplimiento Post-Auditoría

| Área | Estado | Acción Inmediata |
|---|---|---|
| **Paleta 3 colores** | ❌ Incumple (aliases grises/slates, tokens fantasmas, verdes hardcodeados) | Ejecutar #1, #2, #3, #13 |
| **Logotipo inalterable** | ❌ Incumple (raster WebP, tamaño <120px, safe-area ausente, variante no aprobada) | Ejecutar #10, #11, #12 |
| **Voseo rioplatense** | ❌ Incumple (12+ instancias formales/internacionales, 0 refs MDQ en Hero/Services) | Ejecutar #14 |
| **Design Tokens Tailwind v4** | ⚠️ Parcial (colores base OK, spacing/radius/shadows/motion/gradients incompletos o incorrectos) | Ejecutar #4-#9 |
| **Componentes Signature** | ✅ Double-bezel, CTA nested pill, Bento grid, Vertical stepper, Logos carousel implementados | Verificar consistencia tokens |
| **Accesibilidad (A11y)** | ⚠️ Parcial (skip link ✅, focus-visible parcial, heading structure ✅, reduced motion ✅) | Auditar focus rings en todos los interactivos |

---

## 🎯 Próximos Pasos Recomendados (Orden de Ejecución)

1.  **Bloqueador Crítico 1:** Regenerar `logo-master.svg` limpio (<50KB) + crear variante horizontal SVG. Reemplazar WebP en Header/Footer. Ajustar tamaño ≥120px.
2.  **Bloqueador Crítico 2:** Limpiar `globals.css` —eliminar aliases grises/slates/zinc, completar escalas blue 800/900/950, eliminar tokens fantasmas.
3.  **Bloqueador Crítico 3:** Eliminar `green-*` hardcodeado en `HowItWorks` y `CtaSection`. Usar token semántico `success` solo para estados.
4.  **Alta Prioridad:** Implementar tokens spacing, radius, shadows, motion, font-mono en `@theme` alineados a DESIGN.md.
5.  **Alta Prioridad:** Refactorizar copywriting completo a voseo rioplatense + referencias MDQ (Güemes, Playa Grande, Punta Mogotes, Chauvín, Friuli 1972).
6.  **Media Prioridad:** Corregir gradientes, alinear nombres sombras, agragar motion tokens semánticos.
7.  **Verificación:** Ejecutar build + lint + auditoría visual de todas las páginas contra checklist DESIGN.md §15.1.

---

*Fin del Reporte — Generado por Auditoría de Marca Automatizada v1.0*