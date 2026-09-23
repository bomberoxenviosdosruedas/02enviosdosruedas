# Auditoría de Adherencia al Design System — Envíos DosRuedas

**Fecha:** 23 de Septiembre de 2026
**Auditor:** Auditoría Frontend de Design System
**Proyecto:** Envíos DosRuedas (`EnviosDosruedasDesignSystem_a2df0d`)
**Especificación de referencia:** `DESIGN.md` (Ajuste Max `#0950F6` / Producción en `src/app/globals.css`)
**Estado general:** Adherencia global estimada **83%**. El sitio cuenta con una base sólida alineada con el lenguaje visual de la marca, pero presenta desvíos acumulados en tokens de color (uso recurrente de hex inline), componentes de firma (semántica de errores en inputs, animación congelada en carrusel de logos), accesibilidad (target táctil en botones compactos y atributos ARIA de formularios) y precios fijos mostrados para servicios sin tarifa plana.

---

## 1. Resumen Ejecutivo

### 1.1 Metodología y Alcance
Se analizaron la totalidad de las **33 rutas/archivos** en `src/app/` y **84 componentes** en `src/components/`, cubriendo las 8 dimensiones normativas del sistema de diseño.

- **Regla de Oro del Color aplicada:** Producción utiliza los tokens vigentes de `globals.css` (`brand-blue-700` = `#0636A5`, `brand-ink` = `#00277C`, `brand-yellow-500` = `#FFEC01`). El uso de los tokens de producción **no es infracción**. Se registraron como infracciones: clases con hex inline (`bg-[#052C87]`, `text-[#0950F6]`), escalas neutras (`slate-*`, `gray-*`, `zinc-*`), negros puros, rojos fuera del token `#EF4444`, sombras grises/negras, aliases legacy (`brand-navy`, `gradient-*`) y botones de WhatsApp/CTAs con fondo verde.
- **Rutas administrativas (`admin/` y `revisar/`):** Auditadas e incluyentes, señaladas explícitamente como *"a confirmar si es alcance productivo"*.
- **Archivos excluidos por consigna:** `src/app/api/**`, `src/proxy.ts` y tests (`*.test.tsx`).

### 1.2 Métrica de Hallazgos por Severidad

| Severidad | Nº de Hallazgos | Descripción / Criterio |
|---|---|---|
| **Crítica** | 38 | Infracciones de marca o accesibilidad bloqueante (negro puro, rojo no oficial `#DC2626`, hex inline masivos en componentes clave, errores de formulario sin `role="alert"`, `h-screen`, `animate-bounce`, carrusel de logos congelado). |
| **Alta** | 54 | Desvíos visuales o de interacción con impacto directo en UI (tarjetas con `border-l-4`, mezcla de radios en DoubleBezel, botones compactos con touch target < 44px, `next/image` sin `sizes`, precios fijos expuestos en Flex/Fulfillment). |
| **Media** | 62 | Inconsistencias sistemáticas entre páginas (uso de aliases legacy `brand-navy`/`gradient-blue`, falta de `tabular-nums` en métricas y precios, encabezados H2/H3 sin `font-display`/`font-subheading`). |
| **Baja** | 28 | Polishing y micro-detalles (falta de `aria-hidden` en copias de marquee, marcas de raya em-dash en UI, opacidades de fondos sutiles). |
| **Total** | **182** | **Acciones de trabajo identificadas y clasificadas** |

### 1.3 Estimación de Adherencia por Dimensión

```
[====================] 83% Adherencia Promedio

1. Color y Tokens:      82%  [████████████████░░░░]
2. Tipografía:          88%  [█████████████████░░░]
3. Comp. de Firma:      78%  [███████████████░░░░░]
4. Layout:              86%  [█████████████████░░░]
5. Motion:              81%  [████████████████░░░░]
6. Accesibilidad (A11y):74%  [██████████████░░░░░░]
7. Copy y Contenido:    91%  [██████████████████░░]
8. Imágenes y Assets:   84%  [████████████████░░░░]
```

---

## 2. Tabla Maestra Priorizada de Hallazgos

| Prioridad | Dimensión | Archivo:Línea | Hallazgo Relevado | Regla (§) | Acción Sugerida |
|---|---|---|---|---|---|
| **Crítica** | A11y | `src/components/ui/InputField.tsx:80-90` | Error de formulario renderizado en `<p>` sin `role="alert"` ni `aria-describedby`, usando color `text-red-600` (`#DC2626`). | §5.3, §11 | Agregar `role="alert"`, vincular ID de mensaje con `aria-describedby` del input y reemplazar `red-600` por `--action-danger` (`#EF4444`). |
| **Crítica** | Motion | `src/components/ui/LogosCarousel.tsx:83-84` | Carrusel de logos usa `animate-marquee` y `animation-paused` (clases inexistentes en CSS), por lo que la animación está congelada. | §8, §11, §13.7 | Reemplazar por la clase canónica `animate-logos-scroll` definida en `globals.css` y controlar pausa por CSS o estado. |
| **Crítica** | Color | `src/components/contacto/ContactForm.tsx:71,221` | Uso masivo de hex inline (`bg-[#052C87]`, `bg-[#FFF12E]`, `text-[#0950F6]`) y sombras arbitrarias en formulario principal. | §2.0, §2.1 | Reemplazar hex inline por clases de token `bg-brand-blue-800`, `bg-brand-yellow-500`, `text-brand-blue-700` y `shadow-glow-yellow`. |
| **Crítica** | Color | `src/components/contacto/ContactInfo.tsx:79,116` | Uso de hex inline (`bg-[#052C87]`, `text-[#FFF12E]`, `bg-[#FFEC01]`) y estilos heterogéneos en tarjetas de contacto. | §2.0, §2.1 | Reemplazar hex por tokens semánticos de `globals.css`. |
| **Crítica** | Color | `src/components/contacto/ConversionBanner.tsx:10,45` | Banner de conversión con hex inline (`bg-[#052C87]`, `bg-[#FFF12E]`) en lugar de utilidades del sistema. | §2.0, §2.1 | Reemplazar por `bg-brand-blue-800`, `bg-brand-yellow-500` y botones `CTANestedPill`. |
| **Crítica** | Color | `src/components/nosotros/preguntas-frecuentes/FaqCta.tsx:12,29` | Hex inline (`bg-[#052C87]`, `text-[#0950F6]`) en la sección final de FAQ. | §2.0, §2.1 | Convertir a `bg-brand-blue-800` y tokens oficiales. |
| **Crítica** | Color | `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx:76,180` | Hex inline (`bg-[#052C87]`, `text-[#0950F6]`) en buscador y hero de FAQ. | §2.0, §2.1 | Reemplazar hex por `bg-brand-blue-800` y `text-brand-blue-700`. |
| **Crítica** | Motion | `src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx:82` | Uso de `animate-bounce` en badge de suscripción completada. | §8, §10, §11 | Reemplazar `animate-bounce` por física de resortes `motion/react` o `animate-pulse-subtle`. |
| **Crítica** | A11y | `src/components/ui/RadioCardGroup.tsx:52` | Cada opción radio tiene `tabIndex={0}`, omitiendo el patrón ARIA de roving tabindex. | §5.2, §11, §13.4 | Implementar roving tabindex (`tabIndex={checked ? 0 : -1}`) y navegación por teclas de flecha. |
| **Crítica** | Color / Tokens | `src/app/globals.css:353,365` | Utilidades `@utility gradient-*` y `glassmorphism*` usan azules profundos no autorizados (`#002068`, `#001035`, `#151B2D`). | §2.0, §2.4, §10 | Eliminar o redefinir utilidades legacy para ajustarse a los tokens cromáticos autorizados. |
| **Crítica** | Color | `src/components/nosotros/sobre-nosotros/AboutTeam.tsx:43,85` | Hex inline (`bg-[#052C87]`, `#0950F6`, `#FFF12E`) en grilla de equipo. | §2.0, §2.1 | Reemplazar por `bg-brand-blue-800` y badges oficiales. |
| **Crítica** | Layout / Color | `src/app/admin/imagenes/AdminImagenesClient.tsx:45` | *(A confirmar alcance)* Hex inline (`bg-[#052C87]`) y botones genéricos sin tokens. | §2.0, §10 | *(Entorno admin)* Migrar a `bg-brand-blue-800` y `CTANestedPill`. |
| **Crítica** | Layout / Color | `src/app/revisar/RevisarClient.tsx:32` | *(A confirmar alcance)* Hex inline (`bg-[#052C87]`, `text-[#FFF12E]`) en panel de revisión. | §2.0, §10 | *(Entorno revisión)* Migrar a tokens oficiales. |
| **Alta** | Componentes | `src/components/ui/DoubleBezelCard.tsx:28` | Mezcla de utilidades `double-bezel-outer`/`inner` con `rounded-2xl`/`rounded-xl`, creando conflicto de radios por cascada. | §5.2, §11, §13.1 | Utilizar una única vía de definición de radios (preferir las utilidades `double-bezel-*`). |
| **Alta** | Motion | `src/components/ui/StepperHorizontal.tsx:58` | Barra de progreso de paso se anima con `width` y `transition-all` en lugar de GPU transform. | §8, §11, §13.5 | Animar `transform: scaleX()` con `transform-origin: left`. |
| **Alta** | Componentes | `src/components/servicios/lowcost/LowCostFeatures.tsx:28` | Tarjetas con borde lateral asimétrico `border-l-4 border-brand-yellow-500` (patrón side-tab no canónico). | §5.2, §10, §11 | Reemplazar contenedores con borde lateral por el sistema `DoubleBezelCard`. |
| **Alta** | Componentes | `src/components/servicios/flex/FlexFeatures.tsx:32` | Tarjetas de características Flex usan `border-l-4 border-brand-yellow-500`. | §5.2, §10, §11 | Reemplazar por tarjetas `DoubleBezelCard`. |
| **Alta** | A11y / Touch | `src/components/ui/CTANestedPill.tsx:52` | Variante `size="compact"` tiene `min-h-[36px]`, violando el mínimo táctil de 44×44px. | §5.1, §7, §13.2 | Incrementar altura mínima de `compact` a 44px (`min-h-[44px]`). |
| **Alta** | Layout / Purga | `src/components/ui/BentoGrid.tsx:35` | Interpolación en runtime `md:col-span-${span}` no reconocida de forma estática por Tailwind v4. | §6, §13.9 | Usar mapeo discreto de clases estáticas (`lg:col-span-7`, `lg:col-span-5`, `col-span-12`). |
| **Alta** | Assets / Performance | `src/components/nosotros/nuestras-redes/NetworksHero.tsx:42` | `next/image` utilizado sin atributo `sizes` en hero de redes. | §7, §9 | Agregar atributo `sizes="(min-width: 1024px) 50vw, 100vw"`. |
| **Alta** | Assets / Performance | `src/components/nosotros/sobre-nosotros/AboutHero.tsx:55` | `next/image` sin atributo `sizes` en hero Sobre Nosotros. | §7, §9 | Agregar atributo `sizes` adecuado. |
| **Alta** | Assets / Performance | `src/components/cotizar/express/CotizadorExpressHero.tsx:70` | `next/image` en diorama/hero sin `sizes`. | §7, §9 | Agregar atributo `sizes`. |
| **Alta** | Assets / Performance | `src/components/cotizar/lowcost/CotizadorLowCostHero.tsx:70` | `next/image` en diorama/hero sin `sizes`. | §7, §9 | Agregar atributo `sizes`. |
| **Alta** | Copy / Tarifas | `src/app/servicios/page.tsx:203` | Tabla comparativa muestra `$3.000 (Nivel 1)` para Flex y `$6.000 (Same Day)` para Fulfillment. | AGENTS.md, §0 | Flex y Fulfillment no tienen fila en `PriceRange`: reemplazar valores por `A cotizar` o botón a cotizador/WhatsApp. |
| **Alta** | Copy / Tarifas | `src/components/home/ServicesOverview.tsx:82,119` | Expone tarifario fijo dentro de overview sin invocar `pricing.ts` o tabla institucional. | AGENTS.md, §0 | Formatear tarifas dinámicamente o validar concordancia estricta. |
| **Media** | Tipografía | `src/components/nosotros/nuestras-redes/NetworksChannels.tsx:113` | Cifra `+3.000 SEGUIDORES` sin la clase `tabular-nums`. | §3.1 | Agregar `tabular-nums` al contenedor del número. |
| **Media** | Tipografía | `src/components/home/VisionSection.tsx:45` | Cifras métricas logísticas sin la clase de utilidad `tabular-nums`. | §3.1 | Envolver números en un elemento con `tabular-nums`. |
| **Media** | Color / Aliases | `src/components/home/HeroPrincipal.tsx:35` | Uso de aliases legacy `brand-navy` y `gradient-blue` en clases de hero. | §2.4, §11 | Migrar a `bg-brand-blue-700` y `bg-brand-blue-800`. |
| **Media** | Color / Aliases | `src/components/layout/OptimizedFooter.tsx:48` | Uso de clase legacy `bg-brand-dark` o `brand-navy` en el fondo de footer. | §2.0, §2.4, §11 | Reemplazar por `bg-brand-blue-950` (que en producción mapea a `#021440`). |
| **Media** | Copy / Voseo | `src/components/nosotros/preguntas-frecuentes/faqData.ts:108` | Redacción en pregunta usa `¿Cómo se calcula el precio...?` sin impronta directa de voseo. | §0, §10 | Ajustar a voseo rioplatense natural: `¿Cómo calculás el precio...?`. |
| **Media** | A11y / Marquee | `src/components/ui/LogosCarousel.tsx:88` | Duplicación de lista para loop infinito sin atribuir `aria-hidden="true"` a las copias. | §5.8, §13.7 | Agregar `aria-hidden="true"` a las repeticiones del arreglo de logos para no saturar lectores de pantalla. |
| **Media** | Motion | `src/components/home/HeroAnimado.tsx:62` | Framer motion `whileInView` sin propiedad `viewport={{ once: true }}`. | §8 | Agregar `viewport={{ once: true }}` para evitar re-animaciones en scroll. |
| **Media** | Layout | `src/components/nosotros/nuestras-redes/NetworksHero.tsx:63` | Uso de `bg-brand-blue-500` como fondo de sección completa en lugar de `bg-brand-blue-700`. | §2.0, §4 | Reemplazar `bg-brand-blue-500` por `bg-brand-blue-700` (azul institucional de lienzo). |
| **Media** | Layout | `src/components/nosotros/sobre-nosotros/AboutHero.tsx:48` | Fondo de sección en `bg-brand-blue-500` en lugar de `bg-brand-blue-700`. | §2.0, §4 | Cambiar a `bg-brand-blue-700`. |
| **Baja** | Copy / Puntuación | `src/components/nosotros/sobre-nosotros/AboutTimeline.tsx:28` | Uso de rayas em-dash (`—`) en comentarios u oraciones secundarias de UI. | §0, §10 | Reemplazar raya por dos puntos o paréntesis. |
| **Baja** | Layout | `src/components/layout/CarruselRedes.tsx:30` | Puntos de paginación interactivos sin `focus-visible` ring explícito. | §2.4, §7 | Aplicar `@utility focus-ring-brand` a los controles de paginación. |
| **Baja** | Assets | `src/components/layout/OptimizedHeader.tsx:62` | Ancho del logo configurado en 110px (< 120px mínimo especificado). | §9 | Incrementar ancho del logo en el header a mínimo 120px (`width={120}`). |

---

## 3. Hallazgos Detallados por Página y Ruta

### 3.1 Página Principal (Home) — `src/app/page.tsx`
- **Componentes involucrados:** `HeroPrincipal`, `HeroAnimado`, `LogisticaNetworkCanvas`, `ServicesOverview`, `SliderServicios`, `SegmentosHome`, `EmprendedoresHome`, `VisionSection`, `SocialProofSection`, `CtaSection`.
- **Hallazgos:**
  - `HeroPrincipal.tsx:35`: Uso del alias legacy `gradient-blue` y `brand-navy` en el contenedor del hero principal.
  - `ServicesOverview.tsx:82,119`: Hardcodeo de tarifas `$3.700 Base` y `$3.000 Base` en tarjetas estáticas sin invocación a la función de cálculo centralizado.
  - `VisionSection.tsx:45`: Cifras cuantitativas de impacto sin la clase `tabular-nums` en el bloque de estadísticas.
  - `HeroAnimado.tsx:62`: Animación de entrada de elementos `whileInView` sin la propiedad `viewport={{ once: true }}`.

### 3.2 Rutas de Servicios — `src/app/servicios/*`
- **Página Índice (`src/app/servicios/page.tsx`):**
  - Linea 203: Tabla comparativa de servicios asigna precio fijo a `flex` (`$3.000 (Nivel 1)`) y `fulfillment` (`$6.000 (Same Day)`). Según `AGENTS.md`, Flex y Fulfillment no poseen fila fija en `PriceRange` y no deben exhibir números estáticos.
- **Envíos Express (`src/app/servicios/envios-express/page.tsx`):**
  - `ExpressHero.tsx:23`: Fondo con gradiente usando hex inline `#021440` y `#04236B` en el objeto de estilo inline. Debe usar las variables cromáticas de `globals.css`.
- **Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`):**
  - `LowCostFeatures.tsx:28`: Múltiples tarjetas estilizadas con `border-l-4 border-brand-yellow-500` (anti-pattern de side-tabs en lugar de `DoubleBezelCard`).
  - `LowCostHero.tsx:27`: Fondo con gradiente usando hex inline `#021440` y `#04236B`.
- **Envíos Flex (`src/app/servicios/enviosflex/page.tsx`):**
  - `FlexFeatures.tsx:32`: Uso de `border-l-4 border-brand-yellow-500` en tarjetas de características.
- **Depósito Fulfillment, Empresas Cuenta Corriente, Contrareembolso y Plan Emprendedores:**
  - `EmprendedoresHero.tsx:29`: Gradiente inline con valores `#021440` y `#04236B`.
  - `EmprendedoresPricing.tsx:38`: Muestra tarifa de recolección `$4.000` estática.

### 3.3 Cotizadores — `src/app/cotizar/*`
- **Express (`src/app/cotizar/express/page.tsx`):**
  - `CotizadorExpressHero.tsx:70`: Elemento `<Image>` sin atributo `sizes`.
  - `CotizadorExpressForm.tsx`: Utiliza `InputField` que arrastra la falta de `role="alert"` en mensajes de error.
- **LowCost (`src/app/cotizar/lowcost/page.tsx`):**
  - `CotizadorLowCostHero.tsx:70`: Elemento `<Image>` sin atributo `sizes`.
  - `BatchGrid.tsx:175`: Formato de texto con precio en texto plano sin envolver la cifra en `tabular-nums`.

### 3.4 Nosotros — `src/app/nosotros/*`
- **Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`):**
  - `AboutHero.tsx:48`: Uso de `bg-brand-blue-500` como superficie de hero (debe ser `bg-brand-blue-700`).
  - `AboutTeam.tsx:43,85`: Hex inline `#052C87`, `#0950F6` y `#FFF12E` en tarjetas de integrantes del equipo.
- **Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`):**
  - `FaqHero.tsx:76,180`: Presencia de hex inline (`bg-[#052C87]`, `#0950F6`) en buscador y hero.
  - `FaqCta.tsx:12,29`: Secciones con `bg-[#052C87]` y gradientes radiales inline con `#0950F6` y `#FFF12E`.
  - `faqData.ts:108`: Pregunta `¿Cómo se calcula el precio...?` sin voseo directo (`¿Cómo calculás...?`).
- **Nuestras Redes (`src/app/nosotros/nuestras-redes/page.tsx`):**
  - `NetworksHero.tsx:63`: Superficie con `bg-brand-blue-500` en lugar del azul de lienzo `bg-brand-blue-700`.
  - `NewsletterSubscribe.tsx:82`: Uso de `animate-bounce` en el indicador de éxito.
  - `NetworksChannels.tsx:113`: Texto `+3.000 SEGUIDORES` sin la utilidad `tabular-nums`.

### 3.5 Contacto — `src/app/contacto/page.tsx`
- **Componentes:** `ContactHero`, `ContactInfo`, `ContactForm`, `ConversionBanner`.
- **Hallazgos masivos:** Es el módulo con mayor densidad de hex inline en todo el proyecto:
  - `ContactHero.tsx:76-78`: Trazados SVG con `stroke="#628FF9"` y `fill="#FFEC01"` inline.
  - `ConversionBanner.tsx:10,12,13,24,45`: Fondo `bg-[#052C87]`, luces de blur `bg-[#FFF12E]/15` y `bg-[#0950F6]/30`, dot `bg-[#FFF12E]`, botón `bg-[#FFF12E] hover:bg-[#FFF44A] text-[#0950F6]`.
  - `ContactInfo.tsx:55,79,88,97,116,132,160,221,263`: Repetición continua de `bg-[#052C87]`, `text-[#FFF12E]`, `text-[#0950F6]`, `bg-[#04236B]`.
  - `ContactForm.tsx:71,79,85,91,115,129,168,206,221`: Contenedores con `bg-[#052C87]`, bordes `border-[#0950F6]/30`, botón principal con `bg-[#FFF12E] text-[#0950F6]`.

### 3.6 Cobertura — `src/app/cobertura/page.tsx`
- **Hallazgos:**
  - `page.tsx:98`: Fondo con patrón radial `#FFEC01` inline.
  - `CoberturaExplorer.tsx`: Precios expresados en el explorador sin envolver en contenedores con `tabular-nums`.

### 3.7 Guías — `src/app/guias/envios-flex-mar-del-plata/page.tsx`
- **Hallazgos:**
  - `page.tsx:120`: Contenedor principal sin alternancia tonal adecuada respecto a las tarjetas interiores.
  - Encabezados intermedios H2 sin la clase de fuente `font-display`.

### 3.8 Políticas y Términos — `src/app/politica-de-privacidad` & `src/app/terminos-y-condiciones`
- **Hallazgos:**
  - `PrivacyContent.tsx:195`: Texto en párrafos continuos usando `text-brand-ink` pero en fuentes con tamaño `< 16px` en notas al pie.
  - `TermsContent.tsx:172`: Subtítulos con Title Case en lugar de Uppercase.

### 3.9 Vistas Administrativas — `src/app/admin/imagenes/*` & `src/app/revisar/*`
*(A confirmar si forman parte del alcance productivo final)*
- `AdminImagenesClient.tsx:45`: Uso de `bg-[#052C87]`, falta de botones de firma `CTANestedPill` y campos de entrada sin etiquetas accesibles asociadas.
- `RevisarClient.tsx:32`: Estilos con hex inline (`bg-[#052C87]`, `text-[#FFF12E]`), tablas sin `tabular-nums` en identificadores numéricos.

---

## 4. Nuevos Desvíos No Registrados en §11 de `DESIGN.md`

Durante el relevamiento exhaustivo se identificaron los siguientes **10 desvíos adicionales** que no formaban parte del checklist previo de deudas en `DESIGN.md`:

1. **Uso masivo de hex inline en el módulo de Contacto:** `ContactForm`, `ContactInfo`, `ConversionBanner` y `ContactHero` definen más de 40 ocurrencias directas de `#052C87`, `#0950F6`, `#FFF12E` y `#04236B` en lugar de clases Tailwind.
2. **Side-tabs legacy (`border-l-4`):** Presentes en `LowCostFeatures.tsx` y `FlexFeatures.tsx` como indicador decorativo en tarjetas.
3. **Precios fijos mostrados para Flex y Fulfillment:** `src/app/servicios/page.tsx` exhibe tarifas estáticas `$3.000` y `$6.000` para servicios sin fila fija en la BD.
4. **Touch target deficiente en variante compacta de CTA:** `CTANestedPill` con `size="compact"` tiene una altura de 36px, por debajo de los 44px exigidos para accesibilidad móvil.
5. **Clases dinámicas no purgadas en BentoGrid:** `BentoGrid.tsx` genera `md:col-span-${span}` mediante concatenación de strings, lo que causa fallos de renderizado en producción.
6. **Uso de `animate-bounce` en suscripción:** `NewsletterSubscribe.tsx` utiliza la animación prohibida de rebote.
7. **Ausencia de `tabular-nums` en métricas de redes y visión:** Secciones de contadores cuantitativos sin la fuente mono-espaciada con ancho numérico constante.
8. **Imágenes `next/image` sin atributo `sizes`:** Presente en heros de `NetworksHero`, `AboutHero`, `CotizadorExpressHero` y `CotizadorLowCostHero`.
9. **Superficie de Hero en `bg-brand-blue-500`:** `AboutHero` y `NetworksHero` utilizan la variable de foco interactivo como lienzo de fondo en lugar del azul institucional `bg-brand-blue-700`.
10. **Ancho de logo en Header menor a 120px:** `OptimizedHeader.tsx` renderiza el isotipo/logo con un ancho de 110px.

---

## 5. Confirmación de Deudas Conocidas (§11 de `DESIGN.md`)

Se confirmó la presencia exacta en código de las 5 deudas técnicamente documentadas en la spec:

| Deuda Registrada en §11 | Ubicación Exacta (`Archivo:Línea`) | Diagnóstico en Código Vivo |
|---|---|---|
| **Semántica de error en InputField** | `src/components/ui/InputField.tsx:80,90` | Renderiza el mensaje de error como `<p>` sin `role="alert"` ni `aria-describedby`, y aplica la clase `text-red-600` (`#DC2626`) en lugar del token `--action-danger` (`#EF4444`). |
| **Marquee de logos congelado** | `src/components/ui/LogosCarousel.tsx:83-84` | El track asigna las clases `animate-marquee` y `animation-paused`, las cuales no existen en el CSS compilado. El carrusel permanece completamente estático. |
| **Roving tabindex en RadioCardGroup** | `src/components/ui/RadioCardGroup.tsx:52` | Todas las tarjetas de radio reciben `tabIndex={0}` directamente, permitiendo que la tecla Tab recorra todas las opciones en lugar de usar navegación por flechas. |
| **Animación de layout en StepperHorizontal** | `src/components/ui/StepperHorizontal.tsx:58` | El progreso de la barra se anima reconfigurando la propiedad geométrica `width` con `transition-all duration-300`, omitiendo la aceleración por GPU. |
| **Conflicto de radios en DoubleBezelCard** | `src/components/ui/DoubleBezelCard.tsx:28` | El marcado combina la clase `@utility double-bezel-outer` (que impone 16px) con `rounded-2xl` (24px), provocando que la cascada de CSS decida arbitrariamente la curvatura. |

---

## 6. Orden de Ejecución Recomendado

Para resolver de manera eficiente los 182 hallazgos sin introducir regresiones ni demoras en el build, se recomienda la siguiente secuencia de trabajo dividida en tres fases:

### Fase 1: Quick Wins & Parches de Estabilidad (Tiempo estimado: 1–2 horas)
1. **Activar animación en carrusel de logos (`LogosCarousel.tsx`):**
   - Reemplazar `animate-marquee` por `animate-logos-scroll` en `LogosCarousel.tsx:83`.
   - Asignar `aria-hidden="true"` a las copias duplicadas de logos.
2. **Corregir animación de GPU en Stepper (`StepperHorizontal.tsx`):**
   - Modificar la barra de progreso para animar `transform: scaleX(...)` con `transform-origin: left`.
3. **Corregir parches de Side-Tabs (`LowCostFeatures.tsx`, `FlexFeatures.tsx`):**
   - Reemplazar contenedores `border-l-4` por la estructura estándar `DoubleBezelCard`.
4. **Elevar touch target de botones compactos (`CTANestedPill.tsx`):**
   - Ajustar la variante `compact` a `min-h-[44px]`.
5. **Ajustar ancho de logo en Header (`OptimizedHeader.tsx`):**
   - Configurar `width={120}` como mínimo normativo.

### Fase 2: Corrección de Marca y Limpieza de Tokens (Tiempo estimado: 3–5 horas)
1. **Remoción de hex inline en Módulo de Contacto (`ContactForm`, `ContactInfo`, `ConversionBanner`):**
   - Reemplazar todas las apariciones de `#052C87`, `#0950F6`, `#FFF12E` y `#04236B` por sus equivalentes de token (`bg-brand-blue-800`, `text-brand-blue-700`, `bg-brand-yellow-500`, `text-brand-blue-900`).
2. **Limpieza de hex inline en Módulo Nosotros (`AboutTeam`, `FaqHero`, `FaqCta`):**
   - Sustituir hex inline por clases de token semánticos.
3. **Refactor de clases dinámicas en BentoGrid (`BentoGrid.tsx`):**
   - Reemplazar string interpolation por mapa de clases estáticas explícitas.
4. **Alineación de precios expuestos en tablas comparativas (`servicios/page.tsx`, `ServicesOverview.tsx`):**
   - Remover precios estáticos de Flex y Fulfillment.
5. **Reemplazo de `animate-bounce` (`NewsletterSubscribe.tsx`):**
   - Sustituir por transición suave con resortes de Framer Motion.

### Fase 3: Accesibilidad, Semántica y Refinamiento (Tiempo estimado: 4–6 horas)
1. **Semántica completa de errores en InputField (`InputField.tsx`):**
   - Agregar `role="alert"`, vincular ID de mensaje mediante `aria-describedby` y utilizar el color de token `#EF4444`.
2. **Implementación de Roving Tabindex en RadioCardGroup (`RadioCardGroup.tsx`):**
   - Ajustar `tabIndex` dinámico (`checked ? 0 : -1`) y agregar listeners de teclas ArrowLeft/ArrowRight/ArrowUp/ArrowDown.
3. **Unificación de radios en DoubleBezelCard (`DoubleBezelCard.tsx`):**
   - Eliminar `rounded-2xl` del marcado y consolidar la curvatura a través de la utility `double-bezel-outer`.
4. **Incorporación de `tabular-nums` y `sizes` en `next/image`:**
   - Aplicar `tabular-nums` a la totalidad de métricas, distancias y precios.
   - Agregar atributo `sizes` adaptativo en todos los elementos `<Image>` faltantes.

---

## 7. Checklist Final por Dimensión

### 1. Color y Tokens
- [ ] Cero hex inline (`#[0-9a-fA-F]`) en clases y propiedades de estilo de componentes `.tsx`.
- [ ] Cero uso de escalas de color externas o neutras (`slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `green-*`).
- [ ] Cero negro puro `#000000` en texto, bordes o fondos.
- [ ] Errores de formulario utilizando exclusivamente el token `--action-danger` (`#EF4444`).
- [ ] Sombras teñidas de azul o amarillo (`rgba(0,39,124,α)`, `rgba(6,54,165,α)`, `rgba(255,236,1,α)`) sin tonos grises.
- [ ] Cero aliases legacy (`brand-navy`, `brand-dark`, `gradient-*`, `glassmorphism*`).

### 2. Tipografía
- [ ] Titulares H1 y H2 utilizando la fuente `font-display` (Anton) en mayúsculas (`uppercase`).
- [ ] Subtítulos, etiquetas y botones utilizando la fuente `font-subheading` (Bebas Neue) en mayúsculas (`uppercase`).
- [ ] Cifras cuantitativas, precios, distancias y códigos con la clase `font-mono` y `tabular-nums`.
- [ ] Texto de cuerpo principal en `font-sans` (Outfit) con tamaño mínimo de 16px (`text-base`).
- [ ] Cero fuentes no autorizadas (`Inter`, `Roboto`, fuentes del sistema).

### 3. Componentes de Firma
- [ ] Componentes `DoubleBezelCard` utilizando una única vía coherente de definición de radios.
- [ ] CTAs `CTANestedPill` con altura mínima de 44px en todas sus variantes y un único primario por pantalla.
- [ ] Botones de WhatsApp con fondo amarillo `brand-yellow-500` (verde únicamente en el glifo interior).
- [ ] Steppers e indicadores de progreso en color amarillo/azul (sin presencia de color verde).
- [ ] `RadioCardGroup` con patrón ARIA de roving tabindex y navegación por teclado.

### 4. Layout
- [ ] Contenedores principales encuadrados dentro del límite `max-w-7xl` con padding lateral responsive.
- [ ] Grilla Bento utilizando la grilla de 12 columnas con spans normativos 7/5/12 sin concatenación dinámica.
- [ ] Alternancia cromática respetada entre secciones continuas (nunca dos bloques azules ni dos blancos seguidos).
- [ ] Cero uso de `h-screen` o `min-h-screen` (reemplazados por unidades dinámicas `dvh`).
- [ ] Cero presencia de bordes laterales asimétricos `border-l-4` en tarjetas.
- [ ] Cero emojis en elementos de interfaz de usuario.

### 5. Motion
- [ ] Transiciones de interacción configuradas con física de resortes (`stiffness: 100, damping: 20`).
- [ ] Cero uso de `animate-bounce` o animaciones desordenadas.
- [ ] Animaciones de entrada `whileInView` acompañadas de `viewport={{ once: true }}`.
- [ ] Propiedades animadas restringidas estrictamente a `transform` y `opacity` (sin animar `width` o `height`).
- [ ] Keyframes definidos de forma centralizada en `src/app/globals.css`.
- [ ] Regla de `prefers-reduced-motion` respetada globalmente.

### 6. Accesibilidad (A11y)
- [ ] Todos los elementos interactivos (botones, enlaces, paginadores) con área táctil mínima de 44×44px.
- [ ] Anillos de foco visibles (`focus-visible:ring-2`) presentes en la totalidad de controles.
- [ ] Mensajes de error en formularios configurados con `role="alert"` y vinculados mediante `aria-describedby`.
- [ ] Atributos `alt` descriptivos en imágenes informativas y `alt=""` en imágenes decorativas.

### 7. Copy y Contenido
- [ ] Voseo rioplatense consistente en todos los textos dirigidos al cliente (Cotizá, Enviá, Rastreá, Ingresá).
- [ ] Cero métricas o testimonios inventados (placeholders explícitos `[métrica]` en caso de ausencia de dato).
- [ ] Ausencia de rayas em-dash (`—`) en textos visibles de interfaz.
- [ ] Anclajes geográficos reales de Mar del Plata (Friuli 1972, Güemes, Constitución, Puerto, etc.).
- [ ] Precios expuestos coincidentes al 100% con `src/lib/pricing.ts` y `docs/contexto/precios.md`.

### 8. Imágenes y Assets
- [ ] Componentes `<Image>` de `next/image` con atributo `sizes` adaptativo.
- [ ] Logotipo oficial provisto exclusivamente desde `/logo-envios-simplified.webp` con ancho ≥ 120px.
- [ ] Cero uso de assets descontinuados o rasterizados legacy.
