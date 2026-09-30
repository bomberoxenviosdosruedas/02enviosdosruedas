# Brex adaptado a Envíos DosRuedas: Style Reference
> Hormigón blanco y una sola señal amarilla: un instrumento de precisión para despachar envíos, donde el amarillo vial habla solo cuando hay que actuar.

**Theme:** light (lienzo blanco con marcos institucionales en azul #0950F6 arriba y abajo; no hay tema oscuro, existe el "tema invertido azul" para header, barra de aviso y footer)

Las medidas de la fuente original están normalizadas; roles y recomendaciones son interpretación. Los ejemplos HTML son reconstrucciones para DosRuedas, no componentes de producción. Este documento es una propuesta: el `DESIGN.md` de la raíz del repo manda ante cualquier contradicción.

Brex, adaptado, es un banco de trabajo blanco para logística de última milla, iluminado por una única señal amarilla. La interfaz vive sobre un lienzo blanco puro con tipografía comprimida (Anton en titulares, Bebas Neue en labels y navegación, Outfit en cuerpo) y la única voz cromática de acción es #FFEC01: marca el CTA primario, el estado activo y el precio destacado sobre azul, nunca decoración. Los marcos institucionales (barra de aviso arriba y footer abajo) son #0950F6 a sangre, y crean el mismo "sujetalibros" claro/oscuro del original: las secciones blancas se sienten más altas. Componentes planos con radio de 12px, sin sombras de elevación, hairlines azules claros y respiración generosa entre secciones. Tiene que sentirse como una herramienta de despacho confiable para comercios y e-commerce de Mar del Plata, no como un folleto.

## Mapeo de adaptación

| Token original | Hex original | Token adaptado | Hex DosRuedas | Por qué |
|---|---|---|---|---|
| Ember (`--color-ember`) | `#ff5900` | `--color-signal` (brand-yellow-500) | `#FFEC01` | Acento único de acción. Se usa como relleno con texto #0950F6 encima (4.94:1), nunca como texto sobre blanco (1.22:1). |
| Ember hover (implícito) | `#ff5900` | `--color-signal-hover` (brand-yellow-400) | `#FFF12E` | Hover del CTA amarillo: se aclara, no se oscurece. |
| Ember pressed (implícito) | `#ff5900` | `--color-signal-pressed` (brand-yellow-600) | `#E6D400` | Estado presionado del CTA amarillo. |
| Abyss (`--color-abyss`) | `#000710` | `--color-frame` (brand-blue-700) | `#0950F6` | Footer. El near-black pasa al azul institucional: es el color más oscuro permitido. |
| Carbon (`--color-carbon`) | `#15191e` | `--color-frame` (brand-blue-700) | `#0950F6` | Barra de aviso y chrome oscuro. No hay "un escalón más suave" legible con texto chico: #3570F8 con blanco da 4.35:1 y falla. Se distingue del footer con hairline rgba(255,255,255,0.12). |
| Ink (`--color-ink`) | `#000000` | `--color-ink` (brand-blue-700) | `#0950F6` | Titulares, cuerpo y bordes fuertes. 6.02:1 sobre blanco. |
| Paper (`--color-paper`) | `#ffffff` | `--color-paper` | `#FFFFFF` | Lienzo y tarjetas, sin cambios. |
| Fog (`--color-fog`) | `#f3f3f7` | `--color-fog` (brand-blue-50) | `#E6EEFE` | Superficie secundaria, banda alternada, fondo de input deshabilitado. #0950F6 encima da 5.17:1. |
| Mist (`--color-mist`) | `#b9bbc6` | `--color-mist` (brand-blue-100) | `#BACEFD` | Hairlines, divisores, borde de tarjeta, estado deshabilitado. Nunca texto. |
| Steel (`--color-steel`) | `#8b8d98` | `--color-steel` (brand-blue-400) | `#3570F8` | Trazos de íconos. El uso "placeholder y nav secundaria" pasa a #0950F6 porque #3570F8 no alcanza para texto normal. |
| Steel como borde de input (implícito) | `#8b8d98` | `--color-input-border` (brand-blue-300) | `#628FF9` | Borde de input en reposo; más presente que la hairline estructural. |
| Pewter (`--color-pewter`) | `#6f737b` | `--color-ink` (brand-blue-700) | `#0950F6` | Texto terciario. No se baja opacidad sobre blanco: la jerarquía sale de tamaño (12-14px) y familia (Geist Mono o Bebas). |
| Graphite (`--color-graphite`) | `#60646c` | `--color-ink` (brand-blue-700) | `#0950F6` | Texto secundario de párrafo. Mismo criterio que Pewter. |
| Link gris del footer (implícito) | `#b9bbc6` | `--color-on-frame-muted` | `rgba(255,255,255,0.85)` | Links del footer sobre azul: blanco al 85 % da 4.76:1. |
| Dark chrome (surface, valor truncado en la fuente) | `#15191` | `--surface-frame` | `#0950F6` | El original tiene un hex inválido de 5 dígitos; se corrige y se colapsa al azul institucional. |

Colapsos documentados: Brex tiene un solo acento, así que no hay multicolor que colapsar. Los cinco grises (Mist, Steel, Pewter, Graphite y el gris de links del footer) se reparten en tres destinos: estructura (#BACEFD, #628FF9), íconos (#3570F8) y texto (#0950F6 o blanco al 85 % sobre azul). Los dos near-black (Abyss, Carbon) colapsan en un único #0950F6.

## Qué se conserva y qué se descarta

**Se conserva**
- La filosofía de "una sola chispa": un único color de acción, usado para una sola cosa por región (el CTA primario).
- El sujetalibros claro/oscuro: barra de aviso arriba y footer abajo como marcos a sangre, cuerpo blanco en el medio.
- Radio uniforme de 12px en botones, inputs y tarjetas (`rounded-lg` del repo), y 6px en tags (`rounded-sm`). Nunca 8px ni 10px como compromiso.
- Sistema plano sin sombras de elevación; separación por contraste Paper/Fog y hairlines. Única excepción: UI flotante (diálogo de cookies, modales) con `shadow-float`.
- Escala de spacing base 8 (8, 16, 24, 32, 48, 72, 80, 160) y la densidad "cómoda".
- Hero asimétrico (texto a la izquierda ~45 %, visual a la derecha) con un campo + botón pegados.
- Tarjetas de categoría con imagen anclada abajo, carrusel de recursos, footer multicolumna.
- La compresión tipográfica como firma: ahora la da Anton condensada en lugar del tracking negativo de Inter.

**Se descarta**
- Inter y Flecha. Reemplazadas por Anton (display), Bebas Neue (labels, nav, H3), Outfit (cuerpo) y Geist Mono (números).
- Los pesos 500/600 en titulares: Anton y Bebas van solo en 400.
- Los `font-feature-settings` de Inter (`ss03`, `cv01`, `cv10`, etc.): no aplican a Outfit. Se mantiene solo `tnum` en Geist Mono.
- Los grises: todo texto sobre blanco es #0950F6 al 100 %.
- La banda "Trusted by 35,000+ companies" con logos de clientes: no se publican clientes ni métricas inventadas. Se convierte en banda de servicios.
- Ember como texto de link o ícono sobre blanco: el amarillo no se lee sobre blanco.
- Max-width 1200px: pasa a 1280px (max-w-7xl) del repo.

## Fricciones con DESIGN.md del repo

1. **Un solo CTA amarillo por pantalla vs. CTA ember en nav y en hero.** Brex repite el botón ember en la navegación y en el hero, visibles a la vez. Resolución: el CTA del hero ("Cotizá tu envío") es el único amarillo; el CTA de la nav pasa a relleno azul (`bg-brand-blue-700 text-white`). En páginas sin CTA en el hero, la nav recupera el amarillo.
2. **El acento como texto, link e indicador de tab sobre blanco.** Ember funciona como link y subrayado de tab sobre blanco; el amarillo da 1.22:1 y no cumple ni para texto ni para indicador (3:1). Resolución: sobre blanco, el tab activo usa subrayado de 3px #0950F6 o una pill amarilla rellena con texto azul; los links inline son #0950F6 subrayados. El amarillo como texto solo aparece sobre #0950F6 (barra de aviso, footer), donde da 4.94:1.
3. **Dos superficies oscuras distintas (Abyss y Carbon) vs. techo de oscuridad #0950F6.** No existe un azul más oscuro para diferenciar footer de barra de aviso, y el escalón más claro (#3570F8) falla con texto chico. Resolución: ambos marcos son #0950F6; la jerarquía sale de la altura, de la hairline rgba(255,255,255,0.12) y de una franja amarilla de 4px en el borde superior del footer.
4. **Placeholder gris vs. prohibición de bajar opacidad del texto sobre blanco.** Resolución: placeholder en #0950F6 al 100 % con Outfit 400, diferenciado del valor ingresado (Outfit 500) y por un ícono #3570F8 a la izquierda; el label siempre visible arriba en Bebas.
5. **Display escaso (Flecha solo en el hero) vs. Anton obligatoria en H1/H2.** Anton aparece en más lugares que Flecha. Resolución: Anton solo en H1/H2, Bebas en H3 y labels, Outfit en todo lo demás. Así se conserva que "la cara display hace el trabajo emocional y el resto es neutro".
6. **Controles de carrusel de 32-40px y barra de aviso con 1px de padding vs. touch targets de 44px.** Resolución: controles de 44px y barra de aviso con alto mínimo de 44px.

## Tokens: Colors

| Nombre | Valor | Token | Rol |
|------|-------|-------|------|
| Signal | `#FFEC01` | `--color-signal` | Acento único: CTA primario, estado activo, precio destacado sobre azul, badge urgente, franja de hasta 6px. Siempre con texto #0950F6 encima. Máximo 15 % de la superficie. |
| Signal Hover | `#FFF12E` | `--color-signal-hover` | Hover del CTA amarillo. |
| Signal Pressed | `#E6D400` | `--color-signal-pressed` | Estado presionado del CTA amarillo. |
| Frame | `#0950F6` | `--color-frame` | Barra de aviso, header invertido y footer: los marcos institucionales a sangre. |
| Ink | `#0950F6` | `--color-ink` | Titulares, cuerpo, captions, bordes fuertes. El color de texto dominante sobre blanco. |
| Paper | `#FFFFFF` | `--color-paper` | Lienzo, tarjetas, texto sobre rellenos azules. |
| Fog | `#E6EEFE` | `--color-fog` | Superficie secundaria, banda alternada, lavado de tarjeta, skeleton. |
| Mist | `#BACEFD` | `--color-mist` | Hairlines, divisores, borde de tarjeta, deshabilitado. Nunca texto. |
| Input Border | `#628FF9` | `--color-input-border` | Borde de input en reposo y hover de borde. Nunca texto. |
| Card Hover Border | `#8EAFFB` | `--color-card-hover-border` | Borde de tarjeta en hover. Nunca texto. |
| Steel | `#3570F8` | `--color-steel` | Trazo de íconos, hover de fondos azules, texto grande de 24px o más. Nunca texto normal. |
| Error | `#EF4444` | `--color-error` | Borde e ícono de error de formulario, únicamente. |
| Error Text | `#DC2626` | `--color-error-text` | Texto de error de formulario, únicamente. |

## Tokens: Typography

### Anton: cara display para H1 y H2 · `--font-display`
- **Carga:** `next/font/google` como `--font-anton`
- **Pesos:** 400 único
- **Tamaños:** 44, 48, 60, 88 (display mobile mínimo 56)
- **Line height:** 0.85 a 0.9
- **Letter spacing:** -0.02em a 44px, -0.025em a 48px, -0.03em a 60px, -0.04em a 88px
- **Caja:** UPPERCASE siempre
- **Rol:** hace el trabajo emocional que en Brex hacía Flecha. Solo H1 y H2; nunca cuerpo ni subtítulos.

### Bebas Neue: labels, navegación, botones, eyebrows y H3 · `--font-subheading`
- **Carga:** `next/font/google` como `--font-bebas`
- **Pesos:** 400 único
- **Tamaños:** 10 (metadato), 12, 14, 16, 28
- **Line height:** 1 a 1.1
- **Letter spacing:** 0.05em a 28px, 0.06em a 16px, 0.08em a 14px, 0.1em a 10-12px
- **Caja:** UPPERCASE siempre
- **Rol:** ocupa el lugar de Inter 500 en el chrome de UI (nav, botones, tabs) y de Inter 600 en H3.

### Outfit: cuerpo e interfaz · `--font-sans`
- **Carga:** `next/font/google` como `--font-outfit` (variable)
- **Pesos:** 400, 500, 600
- **Tamaños:** 12, 14, 16, 18, 20
- **Line height:** 1.5 a 1.625 en párrafos; 1.25 en inputs y UI compacta
- **Letter spacing:** 0 (Outfit no necesita el tracking negativo de Inter)
- **Caja:** sentence case
- **Rol:** párrafos (16px mínimo), inputs, helpers, captions. 500 para valores ingresados y énfasis de UI; 600 para énfasis puntual.

### Geist Mono: números · `--font-mono`
- **Pesos:** 400, 500
- **Tamaños:** 12, 14, 16, 24
- **Feature:** `font-variant-numeric: tabular-nums`
- **Rol:** precios, distancias en km, contadores, códigos de seguimiento, horarios de corte.

### Type Scale

| Rol | Familia | Peso | Tamaño | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| meta | Bebas Neue | 400 | 10px | 1 | 0.1em | `--text-meta` |
| caption | Outfit | 400 | 12px | 1.5 | 0 | `--text-caption` |
| eyebrow | Bebas Neue | 400 | 14px | 1 | 0.08em | `--text-eyebrow` |
| body-sm | Outfit | 400 | 14px | 1.5 | 0 | `--text-body-sm` |
| label | Bebas Neue | 400 | 16px | 1 | 0.06em | `--text-label` |
| body | Outfit | 400 | 16px | 1.5 | 0 | `--text-body` |
| subheading | Outfit | 500 | 20px | 1.4 | 0 | `--text-subheading` |
| heading-sm (H3) | Bebas Neue | 400 | 28px | 1.1 | 0.05em | `--text-heading-sm` |
| heading (H2) | Anton | 400 | 44px | 0.9 | -0.02em | `--text-heading` |
| heading-lg (H2 destacado) | Anton | 400 | 60px | 0.88 | -0.03em | `--text-heading-lg` |
| display (H1) | Anton | 400 | 56px (mobile) a 88px (desktop) | 0.85 | -0.04em | `--text-display-min` / `--text-display-max` |
| price | Geist Mono | 500 | 24px | 1 | 0 | `--text-price` |

Anton es condensada: a igual tamaño ocupa cerca de 60 % del ancho de Inter. Por eso la escala display sube (72 a 88px) mientras la de cuerpo se queda igual.

## Tokens: Spacing & Shapes

**Unidad base:** 8px

**Densidad:** cómoda

### Spacing Scale

| Nombre | Valor | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` (agregado: padding vertical de sección del repo) |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Elemento | Valor | Clase del repo |
|---------|-------|-------|
| tags, chips | 6px | `rounded-sm` |
| cards | 12px | `rounded-lg` |
| inputs | 12px | `rounded-lg` |
| buttons | 12px | `rounded-lg` |
| controles de carrusel | full | `rounded-full` |

Ojo: en el `@theme` del repo `rounded-xl` es 16px. El carácter de Brex es 12px, que es `rounded-lg`.

### Layout

- **Ancho máximo de página:** 1280px (`max-w-7xl`)
- **Separación entre secciones:** 48px (mínimo, dentro de un bloque) a 96px (padding vertical de sección)
- **Padding de tarjeta:** 24px a 32px
- **Separación entre elementos:** 8px a 16px

## Components

### Barra de aviso superior
**Rol:** barra fina de marco sobre la navegación para avisos operativos.

Fondo `bg-brand-blue-700` a sangre, alto mínimo 44px, borde inferior rgba(255,255,255,0.12). Texto centrado en Outfit 14px 500 blanco, con un link en `text-brand-yellow-500` subrayado (4.94:1 sobre azul). Horarios en Geist Mono. Sin botón de cierre en uso estándar.

```html
<div class="bg-brand-blue-700 border-b border-white/12 min-h-11 flex items-center justify-center px-4">
  <p class="font-sans text-sm font-medium text-white">
    Express: pedilo con 2 hs de anticipación, antes de las <span class="font-mono tabular-nums">15:00</span> hs, y elegí tu franja de 3 hs.
    <a href="/servicios/envios-express" class="text-brand-yellow-500 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-white rounded-sm">Mirá cómo funciona</a>
  </p>
</div>
```

### Barra de navegación principal
**Rol:** navegación horizontal con logo, menú y acciones a la derecha.

Fondo blanco. Izquierda: logo DosRuedas. Centro: ítems en Bebas Neue 16px 0.06em `text-brand-blue-700` con caret. Derecha: "Seguí tu envío" como link de texto y "Cotizá tu envío" como botón. Si el hero ya tiene el CTA amarillo, el de la nav va en `bg-brand-blue-700 text-white` (ver Fricciones, punto 1).

```html
<nav class="bg-white border-b border-brand-blue-100">
  <div class="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
    <a href="/" class="font-display uppercase text-2xl text-brand-blue-700">DosRuedas</a>
    <ul class="hidden md:flex gap-8 font-subheading uppercase tracking-[0.06em] text-base text-brand-blue-700">
      <li><a href="/servicios" class="min-h-11 inline-flex items-center">Servicios</a></li>
      <li><a href="/cotizar" class="min-h-11 inline-flex items-center">Cotizar</a></li>
      <li><a href="/contacto" class="min-h-11 inline-flex items-center">Contacto</a></li>
    </ul>
    <a href="/cotizar" class="rounded-lg bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-subheading uppercase tracking-[0.06em] px-4 min-h-11 inline-flex items-center focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">Cotizá tu envío</a>
  </div>
</nav>
```

### Botón CTA Signal (relleno)
**Rol:** la única variante de acción primaria: "Cotizá tu envío", envío de formularios, momentos de alta intención.

Fondo `bg-brand-yellow-500`, texto `text-brand-blue-900`, `rounded-lg` (12px), padding 12px × 20px, alto mínimo 44px, Bebas Neue 16-18px 0.06em, sin borde. Hover `bg-brand-yellow-400`, pressed `bg-brand-yellow-600`. Sobre fondos azules se aplica el mismo relleno. Un solo botón así por pantalla.

```html
<button class="rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-900 font-subheading uppercase tracking-[0.06em] text-lg px-5 min-h-11 focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 motion-safe:transition-colors">
  Cotizá tu envío
</button>
```

### Botón fantasma con ícono
**Rol:** acción secundaria: "Mirá los servicios", "Hablá por WhatsApp".

Sin fondo ni borde, texto `text-brand-blue-700` en Bebas Neue 16px. El ícono que en Brex era ember pasa a un círculo `bg-brand-yellow-500` de 24px con el ícono en `text-brand-blue-700` (el amarillo como relleno, no como trazo sobre blanco).

```html
<a href="/servicios" class="inline-flex items-center gap-2 min-h-11 font-subheading uppercase tracking-[0.06em] text-brand-blue-700 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 rounded-sm">
  <span class="inline-flex size-6 items-center justify-center rounded-full bg-brand-yellow-500 text-brand-blue-700" aria-hidden="true">&rarr;</span>
  Mirá los servicios
</a>
```

### Campo de captura (dirección de retiro)
**Rol:** campo del hero con botón pegado; reemplaza la captura de email de Brex.

Fondo blanco, borde 1px `border-brand-blue-300`, `rounded-lg`, padding 12-16px, alto 48px. Label visible en Bebas Neue 14px arriba. Placeholder en `text-brand-blue-700` Outfit 400 (sin bajar opacidad); el valor ingresado en Outfit 500. Ícono de pin en `text-brand-blue-400`. El botón Signal va al lado con 8px de separación. Error: borde `#EF4444`, mensaje `#DC2626`.

```html
<label for="retiro" class="block mb-2 font-subheading uppercase tracking-[0.08em] text-sm text-brand-blue-700">Dirección de retiro</label>
<form action="/cotizar" class="flex flex-col sm:flex-row gap-2 max-w-xl">
  <input id="retiro" name="retiro" placeholder="Dirección de retiro en Mar del Plata"
    class="flex-1 h-12 rounded-lg border border-brand-blue-300 hover:border-brand-blue-200 bg-white px-4 font-sans text-base font-medium text-brand-blue-700 placeholder:font-normal placeholder:text-brand-blue-700 focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2" />
  <button class="h-12 rounded-lg bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading uppercase tracking-[0.06em] text-lg px-5">Cotizá tu envío</button>
</form>
```

### Tarjeta de servicio (Feature Category Card)
**Rol:** tiles de los servicios (Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment, Contrareembolso). Reemplaza "The card is just the start".

Fondo blanco, `rounded-lg`, padding 24-32px, sin borde visible en reposo (hairline `border-brand-blue-100` solo si está sobre `bg-brand-blue-50`); hover de borde `border-brand-blue-200`. Título en Bebas Neue 28px `text-brand-blue-700`, cuerpo en Outfit 16px `text-brand-blue-700`. La tarjeta activa lleva una franja superior `bg-brand-yellow-500` de 4px (no texto amarillo). Visual anclado abajo: diorama clay o foto con tinte azul.

```html
<article class="rounded-lg bg-white p-8 border border-transparent hover:border-brand-blue-200 motion-safe:transition-colors">
  <p class="font-subheading uppercase tracking-[0.08em] text-sm text-brand-blue-700">Programado en el día</p>
  <h3 class="mt-2 font-subheading uppercase tracking-[0.05em] text-[28px] leading-[1.1] text-brand-blue-700">LowCost</h3>
  <p class="mt-3 font-sans text-base leading-relaxed text-brand-blue-700">Pedilo antes de las <span class="font-mono tabular-nums">13:00</span> hs y se entrega antes de las <span class="font-mono tabular-nums">19:00</span> hs, sin franja horaria.</p>
  <p class="mt-4 font-mono tabular-nums text-2xl text-brand-blue-700">[precio]</p>
</article>
```

### Banda de servicios (reemplaza Customer Logo Grid)
**Rol:** banda de confianza. Brex muestra "Trusted by 35,000+ top companies" con logos; DosRuedas no publica clientes ni métricas inventadas.

Sección `bg-brand-blue-50`, 96px de padding vertical, título Anton 44px centrado en `text-brand-blue-700` ("Seis formas de mover tu envío"). Grilla 6 × 1 (3 × 2 en tablet, 2 × 3 en mobile) de nombres de servicio en Bebas Neue 20px monocromo `text-brand-blue-700`, cada uno con un ícono lineal `text-brand-blue-400`. La uniformidad monocroma del original se conserva; lo que cambia es el contenido.

### Tarjeta de artículo o recurso
**Rol:** tarjetas del blog o guías en carrusel ("Cómo preparar un paquete para Flex").

Fondo blanco, `rounded-lg`, sin borde. Arriba, imagen a sangre 16:9 dentro del radio. Abajo: título Outfit 20px 500 `text-brand-blue-700`, bajada Outfit 16px 400 `text-brand-blue-700`, 2-3 líneas máximo (`line-clamp-3`).

### Footer institucional
**Rol:** footer del sitio con columnas de links y marca.

Fondo `bg-brand-blue-700` a sangre, franja superior `bg-brand-yellow-500` de 4px. Logo en blanco arriba a la izquierda. Grupos de links en Outfit 14-16px 400 `text-white/85` (4.76:1), encabezados de columna en Bebas Neue 16px `text-white`. Divisores rgba(255,255,255,0.12). Padding vertical 64-96px. Datos de contacto y horarios en Geist Mono.

```html
<footer class="bg-brand-blue-700 border-t-4 border-brand-yellow-500">
  <div class="mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-4">
    <p class="font-display uppercase text-3xl text-white">DosRuedas</p>
    <div>
      <h2 class="font-subheading uppercase tracking-[0.06em] text-base text-white">Servicios</h2>
      <ul class="mt-4 space-y-2 font-sans text-base text-white/85">
        <li><a href="/servicios/envios-express" class="hover:text-white underline-offset-4 hover:underline">Express</a></li>
        <li><a href="/servicios/envios-lowcost" class="hover:text-white underline-offset-4 hover:underline">LowCost</a></li>
        <li><a href="/servicios/mercado-envios-flex" class="hover:text-white underline-offset-4 hover:underline">Mercado Envíos Flex</a></li>
      </ul>
    </div>
  </div>
</footer>
```

### Diálogo de consentimiento de cookies
**Rol:** modal abajo al centro para consentimiento.

Fondo blanco, `rounded-lg`, `shadow-float` (única sombra del sistema), ancho máximo ~480px. Título en Bebas Neue 20px `text-brand-blue-700`, cuerpo Outfit 16px `text-brand-blue-700`. Tres acciones: "Aceptar todas" en relleno `bg-brand-blue-700 text-white` (el amarillo queda reservado para el CTA de la página), "Rechazar todas" con borde `border-brand-blue-300`, "Más opciones" como link subrayado. 24px de margen inferior. Entrada con fade + 8px de desplazamiento, desactivada con `prefers-reduced-motion`.

### Controles de navegación del carrusel
**Rol:** flechas de scroll horizontal.

Botones circulares blancos de 44px (`rounded-full`), borde `border-brand-blue-100`, flecha `text-brand-blue-700`, hover `bg-brand-blue-50`. Línea de progreso de 2px `bg-brand-blue-100` con tramo activo `bg-brand-blue-700`. El scroll suave se desactiva con `prefers-reduced-motion`.

### Tabs de categoría (agregado)
**Rol:** selector de servicios; en Brex el indicador era ember.

Tab en Bebas Neue 16px `text-brand-blue-700`. Activo: subrayado de 3px `bg-brand-blue-700` sobre blanco, o pill `bg-brand-yellow-500 text-brand-blue-900` si no hay otro amarillo en la pantalla. Nunca subrayado amarillo sobre blanco.

## Do's and Don'ts

### Do
- Usá Signal (#FFEC01) para un solo propósito por región: la acción primaria. Nunca para rellenos decorativos, fondos o varios elementos que compitan.
- Dejá que Anton haga la compresión: UPPERCASE, line-height 0.85-0.9, tracking -0.02em a -0.04em según tamaño.
- Usá 12px de radio (`rounded-lg`) en toda superficie interactiva (botones, inputs, tarjetas) y 6px (`rounded-sm`) solo en tags y chips.
- Mantené 48-96px entre secciones y 24-32px de padding de tarjeta. El sistema respira; no apiñes contenido.
- Por defecto, lienzo blanco con `bg-brand-blue-50` para contraste entre secciones. Reservá `bg-brand-blue-700` para los marcos (barra de aviso, footer) y bandas institucionales.
- Todo texto sobre blanco en #0950F6 al 100 %. La jerarquía sale de tamaño, familia (Anton, Bebas, Outfit, Geist Mono) y tracking.
- Poné todo precio, km, horario de corte y código en Geist Mono `tabular-nums`, y los precios como `[precio]` hasta que salgan de la fuente única.
- Usá `prefers-reduced-motion` en todo lo que se mueva.

### Don't
- No agregues un segundo acento. La señal única es la marca: sumar verde, violeta o naranja rompe el contrato visual.
- No uses sombras para elevar tarjetas. El sistema se apoya en contraste blanco/`brand-blue-50` y hairlines `brand-blue-100`.
- No uses Anton en cuerpo ni en H3. Es display: H1 y H2 únicamente.
- No centres párrafos. Los titulares pueden ir centrados; el cuerpo en Outfit 16px va alineado a la izquierda con ancho máximo ~640px.
- No uses amarillo como texto, link o subrayado sobre blanco. Los links inline son #0950F6 subrayados.
- No mezcles radios en un grupo de componentes: nunca 8px ni 10px como compromiso.
- No uses un azul más oscuro que #0950F6 para diferenciar la barra de aviso del footer, ni degradés hacia oscuro.
- No escribas tiempos de entrega en minutos u horas, "agrupado" para LowCost, ni clientes con nombre.

## Surfaces

| Nivel | Nombre | Valor | Propósito |
|-------|------|-------|---------|
| 0 | Lienzo Paper | `#FFFFFF` | Fondo por defecto; la superficie dominante en todas las secciones de contenido. |
| 1 | Banda Fog | `#E6EEFE` | Banda alternada para la banda de servicios y cortes de contenido; separación sin bordes. |
| 2 | Tarjeta | `#FFFFFF` | Tarjetas de servicio, de artículo, tiles. Siempre blancas, 12px de radio, sin sombra. |
| 3 | Marco superior | `#0950F6` | Barra de aviso y header invertido. Hairline inferior rgba(255,255,255,0.12). |
| 4 | Marco footer | `#0950F6` | Footer y bandas institucionales a sangre. Franja superior amarilla de 4px. |

**Tema invertido azul (cómo se resuelve la jerarquía sin un fondo más oscuro):** sobre #0950F6 no hay escalón más profundo. Las capas se construyen hacia arriba: paneles glass rgba(255,255,255,0.06) con borde rgba(255,255,255,0.12) para agrupar; #3570F8 para una capa elevada que no lleve texto chico (chips de ícono, hover de fondo); y tarjetas blancas con texto azul cuando el contenido necesita máxima legibilidad. Texto: blanco al 100 % en títulos, blanco al 85 % o #E6EEFE en secundarios.

## Elevation

El sistema evita las sombras como elevación. Tarjetas y superficies se definen por el contraste blanco sobre `brand-blue-50` y hairlines de 1px `brand-blue-100`. La única excepción es la UI flotante (diálogo de cookies, modales, menú desplegable), que usa `shadow-float` (0 25px 50px -12px rgba(9,80,246,0.15)) para indicar que se despega del lienzo. Ninguna sombra usa negro.

## Imagery

Donde Brex usa fotos de producto (tarjetas, teléfonos) sobre superficies claras, DosRuedas usa dos lenguajes y ninguno más:
- **Fotos reales** de repartidores y motos en calles de Mar del Plata (costanera, barrios, portales de comercio), tratadas con tinte azul #0950F6 en modo multiply sobre las sombras, dejando las luces limpias. Encuadres de producto: la moto, la caja, la entrega en la puerta. Nada de stock genérico ni personas posando.
- **Dioramas 3D isométricos** clay mate (moto, paquete, depósito, pin de mapa) en blancos y azules de la escala, con un solo detalle amarillo.

En la banda de servicios, los íconos son lineales en `text-brand-blue-400`, monocromos y de peso uniforme. Las tarjetas de artículo usan recortes 16:9 dentro del radio de 12px. El chrome es liviano en íconos.

## Layout

La página es una pila vertical a sangre de bandas centradas de 1280px máximo. El hero usa el split asimétrico de Brex: bloque de texto a la izquierda (~45 %: H1 en Anton, bajada en Outfit 20px, campo de dirección de retiro con botón Signal, botón fantasma "Mirá los servicios") y un visual a la derecha (diorama clay de moto con paquete, o foto con tinte azul). Debajo, la banda de servicios en `bg-brand-blue-50`. Las secciones de producto alternan titulares centrados sobre tiras de tarjetas horizontales y selectores de servicio con tabs. Recursos en grilla de 4 columnas con carrusel. Cierra el footer azul a sangre. Ritmo vertical: 96px de padding por sección, 48px entre bloques internos, 24-32px de padding de tarjeta, 8-16px entre elementos. En mobile, gutter lateral de 16px y H1 de 56px.

## Motion (agregado)

Brex es casi estático, y la adaptación lo conserva: transiciones de color de 150-200ms en hover, fade de 200ms + 8px de desplazamiento en diálogos, scroll suave en carruseles. Nada de parallax ni entradas coreografiadas. Todo movimiento va detrás de `motion-safe:` o `useReducedMotion()`; con `prefers-reduced-motion: reduce` los cambios son instantáneos.

## Agent Prompt Guide

**Referencia rápida de color**
- fondo: #FFFFFF (`bg-white`)
- superficie alternada: #E6EEFE (`bg-brand-blue-50`)
- texto principal y secundario: #0950F6 (`text-brand-blue-700`), jerarquía por tamaño y familia
- borde estructural: #BACEFD (`border-brand-blue-100`); borde de input: #628FF9 (`border-brand-blue-300`)
- acción primaria: #FFEC01 (`bg-brand-yellow-500`) con texto #0950F6 (`text-brand-blue-900`)
- marcos: #0950F6 (`bg-brand-blue-700`) con texto blanco o blanco al 85 %

**Prompts de ejemplo por componente**

1. *Creá un hero:* fondo blanco, `max-w-7xl` centrado, split 45/55. H1 en Anton 88px (56px en mobile) UPPERCASE `text-brand-blue-700`, tracking -0.04em, line-height 0.85: "Tu envío, en moto, por Mar del Plata". Bajada en Outfit 20px `text-brand-blue-700`: "Cotizá tu envío y elegí el servicio que se ajusta a tu día". Campo de dirección de retiro (blanco, borde `border-brand-blue-300`, `rounded-lg`) con botón `bg-brand-yellow-500 text-brand-blue-900` en Bebas Neue: "Cotizá tu envío". A la derecha, diorama clay isométrico de moto con paquete.

2. *Creá una tarjeta de servicio:* fondo blanco, `rounded-lg`, padding 32px, sin borde. Eyebrow Bebas 14px "Franja a elección", título Bebas 28px "Express", cuerpo Outfit 16px `text-brand-blue-700`: "Pedilo con 2 hs de anticipación, antes de las 15:00 hs, y elegí tu franja de 3 hs." Precio en Geist Mono `tabular-nums` como `[precio]`. Visual anclado abajo.

3. *Creá la banda de servicios:* sección `bg-brand-blue-50` a sangre, 96px de padding vertical. Título centrado en Anton 44px `text-brand-blue-700`: "Seis formas de mover tu envío". Grilla de 6 columnas con Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment, Contrareembolso en Bebas Neue 20px monocromo, cada uno con ícono lineal `text-brand-blue-400`.

4. *Creá el footer:* `bg-brand-blue-700` a sangre con franja superior `border-t-4 border-brand-yellow-500`, 64px de padding vertical, `max-w-7xl`. Logo DosRuedas en blanco arriba a la izquierda. Cuatro columnas: encabezados en Bebas Neue 16px `text-white`, links en Outfit 16px `text-white/85`.

5. *Creá la barra de aviso:* `bg-brand-blue-700` a sangre, alto mínimo 44px, hairline inferior `border-white/12`, texto centrado Outfit 14px 500 blanco: "LowCost: pedilo antes de las 13:00 hs y se entrega antes de las 19:00 hs." con link `text-brand-yellow-500` subrayado "Mirá los servicios".

## Referencia original

- **Brex** (brex.com): sirve para DosRuedas porque traduce "operación seria y confiable" con un lienzo blanco, un único color de acción y marcos oscuros, justo lo que necesita un comercio que confía su envío a una mensajería: claridad antes que decoración.

## Quick Start

### CSS Custom Properties

```css
/* Propuesta Brex adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
:root {
  /* Colors */
  --color-signal: #FFEC01;
  --color-signal-hover: #FFF12E;
  --color-signal-pressed: #E6D400;
  --color-frame: #0950F6;
  --color-ink: #0950F6;
  --color-paper: #FFFFFF;
  --color-fog: #E6EEFE;
  --color-mist: #BACEFD;
  --color-input-border: #628FF9;
  --color-card-hover-border: #8EAFFB;
  --color-steel: #3570F8;
  --color-on-frame: #FFFFFF;
  --color-on-frame-muted: rgba(255, 255, 255, 0.85);
  --color-frame-hairline: rgba(255, 255, 255, 0.12);
  --color-frame-glass: rgba(255, 255, 255, 0.06);
  --color-error: #EF4444;
  --color-error-text: #DC2626;

  /* Typography: Font Families */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Typography: Scale */
  --text-meta: 10px;
  --leading-meta: 1;
  --tracking-meta: 0.1em;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0em;
  --text-eyebrow: 14px;
  --leading-eyebrow: 1;
  --tracking-eyebrow: 0.08em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0em;
  --text-label: 16px;
  --leading-label: 1;
  --tracking-label: 0.06em;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0em;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0em;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.05em;
  --text-heading: 44px;
  --leading-heading: 0.9;
  --tracking-heading: -0.02em;
  --text-heading-lg: 60px;
  --leading-heading-lg: 0.88;
  --tracking-heading-lg: -0.03em;
  --text-display-min: 56px;
  --text-display-max: 88px;
  --leading-display: 0.85;
  --tracking-display: -0.04em;
  --text-price: 24px;
  --leading-price: 1;

  /* Typography: Weights */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-display: 400;

  /* Spacing */
  --spacing-unit: 8px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap-min: 48px;
  --section-gap-max: 96px;
  --card-padding-min: 24px;
  --card-padding-max: 32px;
  --element-gap-min: 8px;
  --element-gap-max: 16px;
  --touch-target: 44px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-lg: 12px;
  --radius-full: 9999px;

  /* Named Radii */
  --radius-tags: 6px;
  --radius-cards: 12px;
  --radius-inputs: 12px;
  --radius-buttons: 12px;

  /* Elevation */
  --shadow-float: 0 25px 50px -12px rgba(9, 80, 246, 0.15);

  /* Focus */
  --focus-ring-width: 2px;
  --focus-ring-offset: 2px;
  --focus-ring-color: #0950F6;

  /* Surfaces */
  --surface-paper-canvas: #FFFFFF;
  --surface-fog-section: #E6EEFE;
  --surface-card-surface: #FFFFFF;
  --surface-frame-top: #0950F6;
  --surface-frame-footer: #0950F6;
}
```

### Tailwind v4

```css
/* Propuesta Brex adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
@theme {
  /* Colors */
  --color-signal: #FFEC01;
  --color-signal-hover: #FFF12E;
  --color-signal-pressed: #E6D400;
  --color-frame: #0950F6;
  --color-ink: #0950F6;
  --color-paper: #FFFFFF;
  --color-fog: #E6EEFE;
  --color-mist: #BACEFD;
  --color-input-border: #628FF9;
  --color-card-hover-border: #8EAFFB;
  --color-steel: #3570F8;
  --color-error: #EF4444;
  --color-error-text: #DC2626;

  /* Typography */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Typography: Scale */
  --text-meta: 10px;
  --leading-meta: 1;
  --tracking-meta: 0.1em;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --tracking-caption: 0em;
  --text-eyebrow: 14px;
  --leading-eyebrow: 1;
  --tracking-eyebrow: 0.08em;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0em;
  --text-label: 16px;
  --leading-label: 1;
  --tracking-label: 0.06em;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0em;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0em;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: 0.05em;
  --text-heading: 44px;
  --leading-heading: 0.9;
  --tracking-heading: -0.02em;
  --text-heading-lg: 60px;
  --leading-heading-lg: 0.88;
  --tracking-heading-lg: -0.03em;
  --text-display-min: 56px;
  --text-display-max: 88px;
  --leading-display: 0.85;
  --tracking-display: -0.04em;
  --text-price: 24px;
  --leading-price: 1;

  /* Spacing */
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-160: 160px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-lg: 12px;

  /* Elevation */
  --shadow-float: 0 25px 50px -12px rgba(9, 80, 246, 0.15);
}
```

## Checklist de marca

- [ ] Ningún hex fuera de la paleta: azules de la escala, amarillos de la escala, #FFFFFF y los dos rojos de error.
- [ ] Un solo CTA `bg-brand-yellow-500` por pantalla, con texto `text-brand-blue-900`; nada de texto amarillo sobre blanco.
- [ ] Todo texto sobre blanco en #0950F6 al 100 %; sobre azul, blanco o blanco al 85 % como mínimo.
- [ ] Anton y Bebas Neue solo en peso 400 y UPPERCASE; Anton solo en H1 y H2.
- [ ] Párrafos en Outfit de 16px o más, line-height 1.5-1.625, alineados a la izquierda.
- [ ] Precios, km, horarios y códigos en Geist Mono `tabular-nums`, con `[precio]` como placeholder.
- [ ] Radios: 12px (`rounded-lg`) en botones, inputs y tarjetas; 6px (`rounded-sm`) en tags.
- [ ] Sin sombras en tarjetas; `shadow-float` solo en UI flotante; ninguna sombra negra.
- [ ] Touch targets de 44px o más y foco visible `ring-2` `ring-brand-blue-500` con offset 2px.
- [ ] Copy en voseo, sin tiempos de entrega en minutos u horas, sin "agrupado", sin clientes ni métricas inventadas, y `prefers-reduced-motion` en todo lo que se mueve.
