# superhuman adaptado a Envíos DosRuedas: Style Reference
> tablero editorial a plena luz: foto real de la calle, tarjetas de vidrio flotando y azul institucional como tinta

**Theme:** light (con bandas invertidas en azul #0950F6; no existe un fondo más oscuro)

Las medidas de la propuesta original están normalizadas; roles y recomendaciones son interpretados. Los ejemplos HTML son reconstrucciones, no componentes del repo. Esta propuesta no es el `@theme` de producción (`src/app/globals.css`); si algo choca con `DESIGN.md` del repo, gana `DESIGN.md`.

Superhuman vive en el cruce entre fotografía editorial y UI de software. En la versión DosRuedas el lienzo es blanco (#FFFFFF) con bandas de lavado azul (#E6EEFE) donde las tarjetas blancas necesitan despegarse, y los momentos de marca que en el original eran burdeos pasan a azul #0950F6. Los titulares no gritan: Anton 400 en tamaños contenidos, con tracking apenas cerrado y mucho aire alrededor, deja que la foto de hero (repartidor en moto, calle de Mar del Plata, tinte azul) haga el trabajo emocional, mientras tarjetas de UI translúcidas flotan como vidrio sobre la imagen. La paleta se mantiene callada casi todo el tiempo: blanco, texto azul, hairlines #BACEFD y espaciado generoso; el color de señal (#FFEC01) se reserva para un único CTA por pantalla. El sistema evita sombras pesadas y gradientes sobre superficies de UI; la profundidad sale de la fotografía en capas y del blur del header, no de pilas de elevación.

## Mapeo de adaptación

| Token original | Hex original | Token adaptado | Hex DosRuedas | Por qué |
|---|---|---|---|---|
| Midnight Wine (CTA primario) | `#421d24` | `--color-action` / brand-yellow-500 | `#FFEC01` | Era el único relleno cromático de botón. En DosRuedas el único CTA cromático es el amarillo de señal, con texto #0950F6 (4.94:1). |
| Midnight Wine (banner y footer) | `#421d24` | `--color-ground` / brand-blue-700 | `#0950F6` | Near-black de marca: regla 1, los oscuros van a azul. Texto blanco encima (6.02:1). |
| Royal Violet (links) | `#714cb6` | `--color-link` / brand-blue-700 | `#0950F6` | Violeta prohibido. El link se distingue por subrayado y peso 500 de Outfit, no por un segundo color. Nunca amarillo sobre blanco (1.22:1). |
| Royal Violet (anillo inset `shadow-subtle`) | `#714cb6` | `--shadow-subtle` | `rgba(9,80,246,0.4)` | Sombra teñida en azul, regla 7. |
| Lilac Mist (botón secundario, pestaña activa, badge) | `#d4c7ff` | `--color-wash` / brand-blue-50 | `#E6EEFE` | Tinte decorativo/de estado secundario: colapsa a tinte azul (regla 5). Texto #0950F6 encima (5.17:1). |
| Deep Lagoon (banda oscura) | `#0c4243` | `--color-band` / brand-blue-700 | `#0950F6` | Teal oscuro prohibido. La "Dark Feature Band" pasa a banda azul institucional, única superficie invertida. |
| Warm Parchment (lienzo) | `#f2f0eb` | `--color-canvas` / white | `#FFFFFF` | El repo define el blanco como lienzo. La crema se descarta. |
| Warm Parchment (fondo de secciones con tarjetas) | `#f2f0eb` | `--color-canvas-wash` / brand-blue-50 | `#E6EEFE` | Donde la propuesta necesita que la tarjeta blanca se despegue del fondo, se usa lavado azul en vez de crema. |
| Soft Mist (hairlines) | `#e3e3e2` | `--color-hairline` / brand-blue-100 | `#BACEFD` | Gris claro de borde, regla 3. |
| Ink Charcoal (texto, títulos, íconos) | `#292827` | `--color-ink` / brand-blue-700 | `#0950F6` | Near-black, regla 1. Cuerpo 6.02:1 sobre blanco. |
| Stone Gray (texto secundario) | `#666666` | `--color-ink-secondary` / brand-blue-700 | `#0950F6` | Regla 2: sobre blanco no se baja opacidad. La jerarquía sale de tamaño (14 vs 16 px) y familia. |
| Paper White | `#ffffff` | `--color-card` / white | `#FFFFFF` | Se conserva. |
| Gradient Banner: glow violeta | `#714cb6` | `--color-glow-1` / brand-blue-400 | `#3570F8` | Gradiente solo desde #0950F6 hacia más claro (regla 6). |
| Gradient Banner: glow azul y cian | (sin hex en la fuente) | `--color-glow-2` / brand-blue-300 | `#628FF9` | Colapso decorativo a tinte azul. |
| Gradient Banner: glow rosa | (sin hex en la fuente) | `--color-bloom` / brand-yellow-500 al 14 % | `#FFEC01` | Único bloom cálido permitido: amarillo al 10-18 % con blur. |
| Rectángulos geométricos lavanda/azul/rosa de la banda | (sin hex en la fuente) | blanco 6 %/12 %, brand-blue-400, brand-blue-300 | `#3570F8`, `#628FF9` | Decorativos: a tintes azules y vidrio blanco. |
| Script manuscrito sobre la banda | (tipografía) | anotación Geist Mono en brand-yellow-300 | `#FFF45C` | No hay fuente manuscrita en el sistema; el detalle mono amarillo sobre azul cumple el rol de "nota al margen". |

## Qué se conserva y qué se descarta

- **Se conserva** la filosofía de profundidad sin sombras: tarjetas de 16 px sin drop shadow que flotan sobre fotografía; la profundidad la da la imagen en capas y el `backdrop-filter: blur(12px)` del header.
- **Se conserva** el ritmo editorial: hero fotográfico, contenido claro, banda invertida a dos tercios del scroll, banda atmosférica, footer de color pleno.
- **Se conserva** la regla "un solo relleno cromático de CTA": antes burdeos, ahora amarillo #FFEC01, uno por pantalla.
- **Se conserva** la escala de spacing base 4 px (4 a 96) y la densidad cómoda; padding de tarjeta 16 px y gap de elemento 8 px.
- **Se conservan** los radios: 8 px pestañas y botones chicos, 16 px tarjetas, botones y tarjetas flotantes, pill full para el banner.
- **Se conserva** la franja de pestañas de 4 celdas iguales, ahora agrupando los servicios de DosRuedas.
- **Se descarta** la crema como lienzo, el burdeos, el violeta, el lila y el teal: todo colapsa a la escala azul, con el amarillo como única señal.
- **Se descarta** la tira de logos de clientes: el repo no publica clientes. La celda se reutiliza como "franja de servicios" con los 6 servicios en monocromo azul.
- **Se descarta** el script manuscrito (no hay familia manuscrita) y el peso 460 como voz: Anton y Bebas son peso 400 único.
- **Se descarta** el texto secundario gris con opacidad reducida sobre blanco.

## Fricciones con DESIGN.md del repo

1. **Voz tipográfica "light" (peso 460) en display.** Anton no tiene cortes livianos y es una display pesada y condensada. Se resuelve con contención: tamaños moderados para una display (72 px máximo en desktop, 48 px en mobile, lejos de los 96-128 px habituales en Anton), tracking en el extremo suave del rango permitido (-0.02em a -0.035em, no -0.05em), line-height 0.9, titulares cortos de una o dos líneas, color siempre #0950F6 (nunca amarillo) y mucho aire alrededor. El "susurro" lo aporta el lead en Outfit 400 a 20 px que acompaña a cada titular. Superhuman usaba sentence case; el repo exige UPPERCASE en Anton, así que la calma sale del tamaño, no de la caja.
2. **Lienzo crema vs. blanco.** El original prohíbe blanco sobre blanco y usa crema para que las tarjetas despeguen. El repo fija #FFFFFF como lienzo. Solución: página blanca y secciones de tarjetas sobre lavado #E6EEFE, que da la misma separación canvas/card sin introducir un color fuera de paleta.
3. **Banda oscura y footer sin "oscuro".** Teal y burdeos eran las únicas superficies profundas. Como nada puede ser más oscuro que #0950F6, banda, banner y footer usan el mismo azul; la jerarquía entre ellos sale de contenido (arte geométrico en la banda, columnas en el footer) y de capas de vidrio blanco (6 %, 12 %), no de tono.
4. **Link violeta como único texto cromático.** Sin violeta, el link es del mismo azul que el cuerpo. Se diferencia con Outfit 500 y subrayado (siempre visible en párrafos, al hover en tarjetas y navegación), y el hover lo aclara a #3570F8 solo si el texto es ≥24 px; en tamaño normal el hover cambia el grosor del subrayado, no el color.
5. **Texto blanco al 70 % en footer.** Queda debajo del mínimo; sube a blanco 85 % (4.76:1).
6. **Tira de logos de clientes.** Choca con la regla de no publicar clientes. Se reemplaza por servicios.

## Tokens: Colores

| Nombre | Valor | Token | Rol |
|------|-------|-------|------|
| Tinta Azul | `#0950F6` | `--color-ink` | Texto de cuerpo, títulos, trazos de íconos, links. Es la tinta del sistema (6.02:1 sobre blanco). |
| Suelo Azul | `#0950F6` | `--color-ground` | Banner de anuncio, footer, banda invertida. Texto blanco encima. |
| Señal Amarilla | `#FFEC01` | `--color-action` | Único relleno cromático de CTA, estado activo, precio destacado sobre azul. ≤15 % de superficie. |
| Señal Hover | `#FFF12E` | `--color-action-hover` | Hover del CTA amarillo (se aclara). |
| Señal Pressed | `#E6D400` | `--color-action-pressed` | Estado presionado del CTA amarillo. |
| Azul Hover | `#3570F8` | `--color-ground-hover` | Hover de fondos azules (se aclara), íconos, texto grande ≥24 px. Nunca texto normal. |
| Borde Input | `#628FF9` | `--color-border-strong` | Borde de input, trazos secundarios, glow del banner atmosférico. Nunca texto. |
| Borde Hover | `#8EAFFB` | `--color-border-hover` | Hover de borde de tarjeta. |
| Hairline | `#BACEFD` | `--color-hairline` | Bordes estructurales, contorno de tarjeta, divisores, borde del header al scrollear. |
| Lavado | `#E6EEFE` | `--color-wash` | Fondo de secciones con tarjetas, botón secundario, pestaña activa, badges suaves. |
| Tinte Señal | `#FFFAB8` | `--color-action-tint` | Halo de badge urgente sobre blanco (texto #0950F6, 5.62:1). |
| Detalle Mono | `#FFF45C` | `--color-annotation` | Anotaciones mono sobre azul en la banda invertida. |
| Papel | `#FFFFFF` | `--color-card` | Lienzo, tarjetas, texto sobre azul. |

## Tokens: Tipografía

### Anton: display única para H1 y H2 · `--font-display`
- **Peso:** 400 único. UPPERCASE siempre.
- **Tamaños:** 32, 40, 48, 56, 72 px.
- **Line height:** 0.88 a 0.9.
- **Tracking:** -0.02em a 32-40 px, -0.03em a 48-56 px, -0.035em a 72 px.
- **Rol:** reemplaza el corte 460 de Super Sans VF. La "voz liviana" se traduce en contención: tamaños moderados, aire y color azul.

### Bebas Neue: subtítulos, H3, labels, nav, botones, eyebrows · `--font-subheading`
- **Peso:** 400 único. UPPERCASE, tracking 0.05em a 0.1em.
- **Tamaños:** 12, 14, 16, 20, 28 px.
- **Rol:** reemplaza los pesos 600-700 de labels chicos y el 540 de subheadings.

### Outfit: cuerpo y UI · `--font-sans`
- **Pesos:** 400 (cuerpo), 500 (links, énfasis), 600 (labels de formulario).
- **Tamaños:** 14 (UI, nunca párrafos), 16, 18, 20 px.
- **Line height:** 1.5 a 1.625. Sentence case. Tracking 0.
- **Rol:** reemplaza el Super Sans VF 460/540 del cuerpo.

### Geist Mono: precios, distancias, contadores, códigos · `--font-mono`
- **Peso:** 400. Siempre `tabular-nums`.
- **Tamaños:** 10 (metadato), 12, 14, 16, 28 px.
- **Rol:** reemplaza los "tabular numerals" de las tarjetas de datos del original.

### Escala tipográfica (reescalada para Anton)

| Rol | Familia | Peso | Tamaño | Line height | Tracking | Token |
|------|--------|--------|------|-------------|----------------|-------|
| meta | Geist Mono | 400 | 10px | 1.4 | 0.04em | `--text-meta` |
| caption | Outfit | 400 | 12px | 1.5 | 0 | `--text-caption` |
| eyebrow | Bebas Neue | 400 | 14px | 1.2 | 0.1em | `--text-eyebrow` |
| body-sm | Outfit | 400 | 14px | 1.5 | 0 | `--text-body-sm` |
| body | Outfit | 400 | 16px | 1.5 | 0 | `--text-body` |
| lead | Outfit | 400 | 20px | 1.5 | 0 | `--text-lead` |
| label | Bebas Neue | 400 | 20px | 1.1 | 0.06em | `--text-label` |
| subheading (H3) | Bebas Neue | 400 | 28px | 1.1 | 0.05em | `--text-subheading` |
| heading-sm (H2 chico) | Anton | 400 | 32px | 0.9 | -0.02em | `--text-heading-sm` |
| heading-lg (H2) | Anton | 400 | 56px | 0.9 | -0.03em | `--text-heading-lg` |
| display (H1) | Anton | 400 | 72px (48px en mobile) | 0.88 | -0.035em | `--text-display` |
| price | Geist Mono | 400 | 28px | 1 | 0 | `--text-price` |

Equivalencias con el original: caption 12 → 12; body-sm 14 → 14; body 16/1.2 → 16/1.5; label-bold 19 → Bebas 20; subheading 26 → Bebas 28; heading-sm 28 → Anton 32; heading-lg 49 → Anton 56; display 64 → Anton 72. Anton es condensada: sube un escalón para mantener el ancho de línea, pero sin salir de la zona "tranquila".

## Tokens: Espaciado y formas

**Unidad base:** 4px

**Densidad:** cómoda

### Escala de espaciado

| Nombre | Valor | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |

### Radios

| Elemento | Original | DosRuedas | Clase del repo |
|---------|-------|-------|-------|
| pestañas | 8px | 8px | `rounded-md` |
| tarjetas | 16px | 16px | `rounded-xl` |
| pills | 999px | full (9999px) | `rounded-full` |
| botones | 16px | 16px | `rounded-xl` |
| botones chicos | 8px | 8px | `rounded-md` |
| tarjetas flotantes | 16px | 16px | `rounded-xl` |
| celdas de la franja de servicios | 0 | 0 dentro de un contenedor de 16px | `rounded-xl` en el contenedor |

La escala de radios adopta los nombres del repo (sm 6, md 8, lg 12, xl 16, 2xl 24, 3xl 32, 4xl 40, full). Los nombres del original (lg 8, xl 12, 2xl 16) quedan descartados para no chocar con `globals.css`.

### Sombras

| Nombre | Valor | Token |
|------|-------|-------|
| subtle | `inset 0 0 0 1px rgba(9, 80, 246, 0.4)` | `--shadow-subtle` |
| float | `0 25px 50px -12px rgba(9, 80, 246, 0.15)` | `--shadow-float` |
| accent | `0 12px 40px -6px rgba(255, 236, 1, 0.3)` | `--shadow-accent` |

`subtle` es el anillo del botón secundario. `float` existe solo por compatibilidad con el repo: la regla de la propuesta sigue siendo "sin drop shadow sobre fotografía". `accent` es opcional en el CTA amarillo del hero.

### Layout

- **Ancho máximo de página:** 1280px (`max-w-7xl`)
- **Gap de sección:** 64px mínimo, 96px por defecto
- **Padding de tarjeta:** 16px
- **Gap de elemento:** 8px
- **Touch target mínimo:** 44px
- **Foco:** `ring-2` #0950F6 con offset 2px

## Componentes

### Botón de acción primaria
**Rol:** CTA con relleno: cotizar, pedir un envío, conversión principal.

Fondo #FFEC01, texto #0950F6 (4.94:1) en Bebas Neue 20 px tracking 0.06em. Sin borde. Radio 16 px. Padding horizontal 20 px, alto 48 px. Flecha a 8 px a la derecha del label. Hover #FFF12E, pressed #E6D400. Es el ÚNICO relleno cromático de botón del sistema: uno por pantalla.

```html
<a href="/cotizar" class="inline-flex h-12 min-h-11 items-center gap-2 rounded-xl bg-brand-yellow-500 px-5 font-subheading text-xl tracking-wide text-brand-blue-900 transition-colors hover:bg-brand-yellow-400 active:bg-brand-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 motion-reduce:transition-none">
  Cotizá tu envío
  <svg aria-hidden="true" class="size-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
</a>
```

### Botón de texto (ghost)
**Rol:** links inline y acciones terciarias en párrafos y navegación.

Fondo transparente, texto #0950F6 en Outfit 500 16 px, sin borde, sin radio. Subrayado al hover (0.2s ease). Área táctil mínima de 44 px aunque el padding visual sea 0.

### Botón secundario claro
**Rol:** acción secundaria: "Ver servicios", "Ingresar".

Fondo #E6EEFE, texto #0950F6 (5.17:1), borde 1 px #0950F6. Radio 8 px. Padding 6 px 16 px, alto mínimo 44 px. Bebas Neue 16 px tracking 0.06em. Hover: borde #3570F8 y fondo blanco. Reemplaza al botón lila del original.

```html
<a href="/servicios" class="inline-flex min-h-11 items-center rounded-md border border-brand-blue-700 bg-brand-blue-50 px-4 py-1.5 font-subheading text-base tracking-wide text-brand-blue-900 transition-colors hover:border-brand-blue-800 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 motion-reduce:transition-none">
  Ver servicios
</a>
```

### Banner de anuncio pill
**Rol:** franja promocional arriba de todo.

Fondo #0950F6, texto #FFFFFF en Outfit 14 px, radio full recortado contra los bordes de la página. Padding 12 px 16 px. Ícono chico a la izquierda, copy inline y un link con borde blanco 1 px. Ejemplo de copy: "Express: pedilo con 2 hs de anticipación y elegí tu franja de 3 hs. Corte 15:00 hs."

### Tarjeta de producto flotante
**Rol:** mockup de UI translúcido sobre la foto del hero.

Fondo blanco al 85 %, radio 16 px, padding 16 px, borde 1 px `rgba(255,255,255,0.2)`, `backdrop-filter: blur(12px)`. Sin drop shadow: la profundidad sale de la composición sobre la foto. Aloja una fila de ícono de servicio, texto de cuerpo #0950F6 y una acción sutil. Es el movimiento compositivo firma del sistema. Contenido de ejemplo: tarjeta de cotización con "Express", "Franja de 3 hs a elección" y el precio como placeholder `$0.000` en Geist Mono.

```html
<div class="w-72 rounded-xl border border-white/20 bg-white/85 p-4 backdrop-blur-md">
  <p class="font-subheading text-sm tracking-widest text-brand-blue-900">Express</p>
  <p class="mt-1 text-base leading-relaxed text-brand-blue-900">Franja de 3 hs a elección, dentro de Mar del Plata.</p>
  <p class="mt-3 font-mono text-3xl tabular-nums text-brand-blue-900">$0.000</p>
</div>
```

### Franja de servicios (reemplaza la tarjeta de logos)
**Rol:** banda de prueba de alcance, sin nombrar clientes.

Fila de 6 celdas dentro de un contenedor blanco con borde 1 px #BACEFD y radio 16 px; las celdas no tienen radio propio y se separan con divisores #BACEFD. Padding vertical 24 px. Cada celda: ícono de línea monocromo #0950F6 a 20 px y el nombre del servicio en Bebas Neue 16 px (Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment, Contrareembolso). En mobile, grilla de 2 × 3.

### Franja de pestañas de servicios
**Rol:** navegación entre grupos de servicios.

Cuatro pestañas de igual ancho en un contenedor blanco de radio 8 px, sin radio por pestaña. Padding 16 px por pestaña, alto mínimo 44 px. Pestañas: "Envíos en el día" (Express y LowCost), "Mercado Envíos Flex", "E-commerce 24HS", "Depósito y cobro" (Depósito y Fulfillment, Contrareembolso). Activa: fondo #E6EEFE, ícono #0950F6 y franja inferior de 3 px #FFEC01 (estado activo). Inactivas: blanco con ícono monocromo #0950F6. Etiquetas en Bebas Neue 16 px. `role="tablist"` con flechas de teclado.

### Tarjeta de servicio
**Rol:** tarjeta vertical en las secciones de detalle.

Fondo #FFFFFF sobre lavado #E6EEFE, radio 16 px, padding 16 px, borde 1 px #BACEFD (hover #8EAFFB). Ícono de línea #0950F6 arriba a la izquierda, nombre del servicio en Bebas Neue 28 px, cuerpo en Outfit 16 px, link "Conocé más" en Outfit 500 #0950F6 con subrayado al hover. Sin sombra.

```html
<article class="rounded-xl border border-brand-blue-100 bg-white p-4 transition-colors hover:border-brand-blue-200 motion-reduce:transition-none">
  <svg aria-hidden="true" class="size-5 text-brand-blue-700" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="7"/><path d="M10 6v4l3 2"/></svg>
  <h3 class="mt-3 font-subheading text-3xl tracking-wide text-brand-blue-900">LowCost</h3>
  <p class="mt-2 text-base leading-relaxed text-brand-blue-900">Reparto programado en el día, sin franja. Pedilo antes de las 13:00 y se entrega antes de las 19:00.</p>
  <a href="/servicios/lowcost" class="mt-3 inline-flex min-h-11 items-center font-medium text-brand-blue-900 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">Conocé más</a>
</article>
```

### Header de navegación
**Rol:** navegación sticky superior.

Fondo transparente con `backdrop-filter: blur(12px)` y borde inferior 1 px #BACEFD que aparece al scrollear. Logo a la izquierda, links al centro en Bebas Neue 16 px tracking 0.08em #0950F6, a la derecha "Contacto" y "Ingresar" como ghost y "Cotizá" como botón secundario claro (el amarillo queda para el CTA del hero). Alto 64 px. Sobre el hero fotográfico, el texto del header pasa a blanco hasta que se scrollea.

### Banda invertida (Dark Feature Band)
**Rol:** sección de mitad de página con arte geométrico.

Fondo #0950F6 a sangre. Mitad izquierda: rectángulos translúcidos en capas (blanco 6 %, blanco 12 %, #3570F8, #628FF9 al 60 %) sobre una foto de repartidor con tinte azul multiply, más anotaciones en Geist Mono 12 px #FFF45C ("corte 15:00", "franja 3 hs", "hasta 5 kg o 40 × 40 cm"). Mitad derecha: titular Anton 56 px blanco, cuerpo Outfit 16 px blanco 85 % (4.76:1) y botón con borde blanco 1 px, texto blanco, radio 8 px, padding 8 px 20 px, hover fondo #3570F8. Es la única superficie invertida de contenido.

```html
<section class="bg-brand-blue-700 py-24 text-white">
  <div class="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2">
    <div class="relative aspect-[4/3] overflow-hidden rounded-xl" aria-hidden="true">
      <div class="absolute inset-6 rounded-xl bg-white/6"></div>
      <div class="absolute inset-12 rounded-xl border border-white/12 bg-brand-blue-400/60"></div>
      <p class="absolute bottom-8 left-8 font-mono text-xs tabular-nums text-brand-yellow-300">corte 15:00 hs</p>
    </div>
    <div class="flex flex-col justify-center">
      <h2 class="font-display text-5xl uppercase leading-[0.9] tracking-[-0.03em] md:text-[56px]">Tu envío, en la franja que elegís</h2>
      <p class="mt-6 max-w-prose text-base leading-relaxed text-white/85">Con Express elegís una franja de 3 hs dentro de Mar del Plata. Pedilo con 2 hs de anticipación.</p>
      <a href="/servicios/express" class="mt-8 inline-flex min-h-11 w-fit items-center rounded-md border border-white px-5 py-2 font-subheading text-base tracking-wide transition-colors hover:bg-brand-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-700 motion-reduce:transition-none">Conocé Express</a>
    </div>
  </div>
</section>
```

### Banda atmosférica (Gradient Banner)
**Rol:** sección de mitad de página con clima de color.

Fondo base #0950F6 con gradientes radiales solo hacia más claro: #3570F8 al 55 % en 68 %/50 %, #628FF9 al 45 % en 93 %/50 %, #628FF9 al 35 % en 50 %/75 % y un bloom #FFEC01 al 14 % en 50 %/98 % con blur. Titular Anton 48 px blanco, alineado a la izquierda. Botón blanco con texto #0950F6 alineado a la derecha ("Cotizá tu envío" solo si no hay otro CTA amarillo visible en ese viewport; si no, "Hablá con nosotros"). El overlay de texto de código del original se reemplaza por una línea en Geist Mono blanco 85 % con coordenadas o un ejemplo de tracking (`MDP · 5 kg · 40 × 40 cm`). Los gradientes son clima decorativo, no superficies interactivas.

```css
.band-atmos {
  background-color: var(--color-ground);
  background-image:
    radial-gradient(40% 60% at 68% 50%, rgba(53, 112, 248, 0.55), transparent 70%),
    radial-gradient(35% 55% at 93% 50%, rgba(98, 143, 249, 0.45), transparent 70%),
    radial-gradient(45% 40% at 50% 75%, rgba(98, 143, 249, 0.35), transparent 70%),
    radial-gradient(30% 25% at 50% 98%, rgba(255, 236, 1, 0.14), transparent 70%);
}
```

### Footer
**Rol:** footer del sitio con columnas de links.

Fondo #0950F6, títulos de columna en Bebas Neue 16 px blanco, links en Outfit 14 px blanco 85 % con 12 px de separación vertical y área táctil de 44 px en mobile. Sin radio. Padding 64 px arriba y abajo. Columnas: Servicios, Empresa, Ayuda, Legal. Hover: blanco 100 % con subrayado.

### Link con subrayado
**Rol:** todos los "Conocé más" de tarjetas y pestañas.

Color #0950F6, Outfit 500, mismo tamaño que el cuerpo (16 px). En tarjetas y navegación, subrayado al hover con transición 0.2s ease; dentro de párrafos, subrayado siempre visible (sin segundo color, el subrayado es la señal). Sin transición con `prefers-reduced-motion`.

### Encabezado de sección
**Rol:** titulares display de secciones principales ("Tus envíos en Mar del Plata", "Cómo trabajamos").

Anton 400, 56 px en desktop y 40 px en mobile, line-height 0.9, tracking -0.03em, #0950F6, UPPERCASE. Titulares de una o dos líneas como máximo, alineados a la izquierda, con un lead Outfit 20 px debajo. La calma sale del tamaño contenido y del aire; nunca amarillo, nunca itálica.

## Do's and Don'ts

### Hacé
- Usá Anton 400 para todo titular ≥32 px, a tamaños contenidos (72 px máximo) y con aire: es la traducción del "peso 460" del original.
- Poné el cuerpo en #0950F6 sobre #FFFFFF; usá #E6EEFE solo como fondo de las secciones donde viven tarjetas blancas.
- Usá #FFEC01 como único relleno de acción primaria, uno por pantalla, con texto #0950F6.
- Diferenciá links con Outfit 500 y subrayado, no con otro color.
- Hacé flotar tarjetas de UI a 16 px de radio sobre fotografía, sin drop shadow; que la foto dé la profundidad.
- Aplicá `backdrop-filter: blur(12px)` al header y mostrá el borde 1 px #BACEFD al scrollear.
- Mantené tracking negativo suave en display (-0.035em a 72 px, -0.03em a 56 px) y 0 en cuerpo.
- Poné todo precio, distancia o contador en Geist Mono con `tabular-nums`.

### No hagas
- No uses Anton o Bebas en otro peso que 400, ni Outfit por encima de 600.
- No pongas tarjeta blanca sobre página blanca sin borde #BACEFD o sin lavado #E6EEFE detrás.
- No agregues sombras negras ni pilas de elevación; si hace falta sombra, teñida en azul.
- No introduzcas violeta, burdeos, teal, verde, naranja ni rojo decorativo.
- No centres cuerpo de más de dos líneas.
- No bajes la opacidad del texto azul sobre blanco para hacer "texto secundario".
- No uses #0950F6 a sangre para tarjetas o componentes chicos: es para bandas completas, banner y footer.
- No escribas duraciones de entrega ("en 3 hs", "menos de 2 h"), ni "hasta 15 kg sin recargo", ni nombres de clientes.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|-------|------|-------|---------|
| 0 | Lienzo Papel | `#FFFFFF` | Fondo base de página, superficie dominante |
| 1 | Lavado Azul | `#E6EEFE` | Fondo de secciones con tarjetas, botón secundario, pestaña activa |
| 2 | Tarjeta Papel | `#FFFFFF` + borde `#BACEFD` | Tarjetas de servicio, pestañas, tarjetas flotantes (al 85 %) |
| 3 | Banda Azul | `#0950F6` | Banda invertida con arte geométrico, banda atmosférica |
| 4 | Suelo Azul | `#0950F6` | Footer y banner de anuncio |

### Tema invertido azul (jerarquía sin "más oscuro")
Dentro de las superficies 3 y 4 no existe un fondo más profundo que #0950F6. La jerarquía se arma así: vidrio blanco al 6 % para paneles, al 12 % para bordes y paneles elevados, #3570F8 para la capa elevada o el hover, y tarjetas blancas (#FFFFFF, texto #0950F6) cuando algo tiene que saltar al frente. El texto es blanco 100 % en títulos y 85 % como mínimo en cuerpo; #E6EEFE sirve para texto secundario sobre azul.

## Elevación

El sistema no tiene pila de elevación. La profundidad sale de:
1. Fotografía en capas (hero y banda invertida).
2. Vidrio: blanco 85 % con `backdrop-filter: blur(12px)` en tarjetas flotantes y header.
3. Contraste de superficie (tarjeta blanca sobre #E6EEFE).
4. `--shadow-subtle` (anillo inset azul al 40 %) solo en el botón secundario y en inputs.

`--shadow-float` y `--shadow-accent` quedan disponibles por compatibilidad con el repo, siempre teñidas.

## Imágenes

La fotografía es el activo principal: fotos reales de repartidores y motos de DosRuedas en calles reconocibles de Mar del Plata (costanera, barrios, fachadas), con tratamiento de tinte azul en multiply sobre la foto para integrarla a la paleta. Encuadre de perfil o tres cuartos, editorial y no corporativo, con cielo abierto o calle con profundidad para dejar lugar a las tarjetas flotantes. Como alternativa, dioramas 3D isométricos en clay mate (moto, caja, depósito) en blanco y tintes azules con una sola pieza amarilla. La banda invertida arma un collage: foto con tinte azul, rectángulos de vidrio y anotaciones mono en #FFF45C. Nada de stock genérico, ni ilustración plana, ni fotos con otras marcas visibles. Íconos: línea monocroma de 16 a 20 px, trazo 1.5 px, en #0950F6 o blanco.

## Layout

Hero a sangre con foto, titular Anton centrado (48 px mobile, 72 px desktop), un lead Outfit 20 px y un solo CTA amarillo; tarjetas flotantes translúcidas compuestas sobre la foto en los márgenes izquierdo y derecho (en mobile, una sola tarjeta debajo del CTA). Debajo del hero: la franja de servicios (6 celdas en una fila, contenida en 1280 px), luego la franja de pestañas con tarjetas blancas sobre lavado #E6EEFE. La banda invertida azul corta el ritmo a unos dos tercios de la página: a sangre, dos columnas (arte a la izquierda, texto a la derecha). Sigue la banda atmosférica. Espaciado de sección de 64 a 96 px (96 px por defecto). Contenido centrado en 1280 px, con hero y bandas a ancho completo. Navegación: un único header sticky con blur, sin sidebar ni mega menú. Footer azul a sangre con columnas. Ritmo: hero fotográfico, contenido claro, banda invertida, banda atmosférica, footer azul.

## Movimiento

- Subrayado de links: 0.2s ease.
- Borde del header: fade de opacidad 0.2s al pasar 8 px de scroll.
- Tarjetas flotantes del hero: entrada con opacidad y 8 px de desplazamiento, 0.4s, escalonada 80 ms. Sin parallax.
- Todo lo que se mueve respeta `prefers-reduced-motion`: `useReducedMotion()` de motion y gate en GSAP; con reduce, las tarjetas aparecen sin desplazamiento y las transiciones de color quedan en 0.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Agent Prompt Guide

**Referencia rápida de color**
- lienzo: #FFFFFF
- fondo de secciones con tarjetas: #E6EEFE
- texto (cuerpo y secundario): #0950F6
- borde: #BACEFD
- superficie de tarjeta: #FFFFFF
- link: #0950F6 con subrayado
- acción primaria: #FFEC01 con texto #0950F6
- superficie de acento secundario: #E6EEFE
- banda invertida, banner y footer: #0950F6

**Prompts de ejemplo**

1. *Botón de acción primaria*: fondo #FFEC01 (`bg-brand-yellow-500`), texto #0950F6 (`text-brand-blue-900`) en Bebas Neue 20 px tracking 0.06em, radio 16 px (`rounded-xl`), alto 48 px, padding horizontal 20 px, flecha a 8 px. Label "Cotizá tu envío". Hover #FFF12E, pressed #E6D400, foco `ring-2` azul con offset 2 px. Uno solo por pantalla.

2. *Tarjeta de servicio*: superficie blanca sobre lavado #E6EEFE, radio 16 px, padding 16 px, borde 1 px #BACEFD (hover #8EAFFB). Ícono de línea #0950F6 de 20 px arriba a la izquierda. Nombre del servicio en Bebas Neue 28 px. Cuerpo Outfit 16 px #0950F6, dos líneas como máximo, por ejemplo "Reparto programado en el día, sin franja. Corte 13:00, entrega antes de las 19:00." Link "Conocé más" Outfit 500, subrayado al hover en 0.2s. Sin sombra.

3. *Header de navegación*: sticky, alto 64 px, fondo transparente con `backdrop-filter: blur(12px)`. Logo a la izquierda. Links al centro en Bebas Neue 16 px tracking 0.08em #0950F6 con 32 px de gap (Servicios, Tarifas, Empresas, Contacto). A la derecha "Ingresar" como ghost y "Cotizá" como botón secundario (fondo #E6EEFE, texto #0950F6, borde 1 px #0950F6, radio 8 px, padding 6 px 16 px, alto mínimo 44 px). Borde inferior 1 px #BACEFD que aparece al scrollear.

4. *Banda invertida*: fondo #0950F6 a sangre. Dos columnas: a la izquierda, foto de repartidor en moto con tinte azul multiply y rectángulos de vidrio en capas (blanco 6 %, blanco 12 %, #3570F8 y #628FF9 al 60 %) con anotaciones en Geist Mono 12 px #FFF45C ("corte 15:00", "franja 3 hs"). A la derecha: titular Anton 56 px blanco UPPERCASE ("Tu envío, en la franja que elegís"), cuerpo Outfit 16 px blanco al 85 %, y botón con borde blanco 1 px, texto blanco, radio 8 px, padding 8 px 20 px, hover fondo #3570F8.

5. *Footer*: fondo #0950F6 a sangre, padding 64 px arriba y abajo, contenido centrado en 1280 px. Cuatro columnas (Servicios, Empresa, Ayuda, Legal) con títulos en Bebas Neue 16 px blanco y links Outfit 14 px blanco al 85 % con 12 px de separación. Sin divisores entre columnas. Los servicios listados: Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment, Contrareembolso.

**Límites de copy para el agente**
- Voseo siempre ("Cotizá", "Enviá", "Mirá"), tono medio formal, sin superlativos.
- Express es "franja de 3 hs a elección", pedido con 2 hs de anticipación, corte 15:00 hs. Nunca "en 3 hs" ni minutos.
- LowCost: reparto programado en el día, corte 13:00, entrega antes de las 19:00. Nunca "agrupado".
- Sin recargo hasta 5 kg o 40 × 40 cm; nunca "hasta 15 kg sin recargo".
- Precios y métricas siempre como `[precio]`, `[métrica]` o `$0.000`: la tarifa real sale de `src/lib/pricing.ts` y `src/lib/promises.ts`.
- Sin nombres de clientes, competidores, Factura A ni Factura C, ni rendición inmediata.

## Referencia original

- **Superhuman** (superhuman.com): sirve para DosRuedas porque demuestra cómo una marca de servicio puede sentirse editorial y confiable con una sola acción cromática, fotografía real y tarjetas de UI flotando sobre la imagen, que es exactamente cómo queremos mostrar la cotización sobre una foto de reparto en Mar del Plata.

## Quick Start

### CSS Custom Properties

```css
/* Propuesta superhuman adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
:root {
  /* Colores */
  --color-ink: #0950F6;
  --color-ink-secondary: #0950F6;
  --color-ground: #0950F6;
  --color-ground-hover: #3570F8;
  --color-band: #0950F6;
  --color-link: #0950F6;
  --color-action: #FFEC01;
  --color-action-hover: #FFF12E;
  --color-action-pressed: #E6D400;
  --color-action-tint: #FFFAB8;
  --color-annotation: #FFF45C;
  --color-border-strong: #628FF9;
  --color-border-hover: #8EAFFB;
  --color-hairline: #BACEFD;
  --color-wash: #E6EEFE;
  --color-canvas: #FFFFFF;
  --color-canvas-wash: #E6EEFE;
  --color-card: #FFFFFF;

  /* Tipografía: familias */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Tipografía: escala (ver variables.css para el set completo) */
  --text-body: 16px;
  --leading-body: 1.5;
  --text-heading-lg: 56px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -0.03em;
  --text-display: 72px;
  --leading-display: 0.88;
  --tracking-display: -0.035em;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap-min: 64px;
  --section-gap-max: 96px;
  --card-padding: 16px;
  --element-gap: 8px;

  /* Sombras */
  --shadow-subtle: inset 0 0 0 1px rgba(9, 80, 246, 0.4);
}
```

### Tailwind v4

```css
/* Propuesta superhuman adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
@theme {
  --color-ink: #0950F6;
  --color-action: #FFEC01;
  --color-wash: #E6EEFE;
  --color-hairline: #BACEFD;
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;
  --radius-md: 8px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  --shadow-subtle: inset 0 0 0 1px rgba(9, 80, 246, 0.4);
}
```

El set completo está en `theme.css` y `variables.css` de esta carpeta. En el repo, preferí las clases existentes (`bg-brand-blue-700`, `text-brand-blue-900`, `bg-brand-yellow-500`, `border-brand-blue-100`, `bg-brand-blue-50`, `font-display`, `font-subheading`, `font-mono tabular-nums`, `rounded-xl`, `shadow-float`) antes que estos tokens.

## Checklist de marca

- [ ] Ningún hex fuera de la paleta: sin burdeos, violeta, lila, teal, crema ni grises del original.
- [ ] Un solo CTA amarillo #FFEC01 por pantalla, con texto #0950F6, y amarillo ≤15 % de la superficie.
- [ ] Anton y Bebas Neue en peso 400 y UPPERCASE; display máximo 72 px, tracking entre -0.02em y -0.035em.
- [ ] Todo texto de cuerpo #0950F6 al 100 % sobre blanco; sobre azul, blanco ≥85 %.
- [ ] Links distinguibles sin color: Outfit 500 y subrayado.
- [ ] Tarjetas flotantes sin drop shadow; cualquier sombra teñida en azul o amarillo, nunca negra.
- [ ] Gradientes de la banda atmosférica solo desde #0950F6 hacia #3570F8/#628FF9, más bloom amarillo ≤18 %.
- [ ] Precios y distancias en Geist Mono `tabular-nums`, como placeholder (`$0.000`) hasta conectarse a `pricing.ts`/`promises.ts`.
- [ ] Touch targets ≥44 px, foco `ring-2` azul con offset 2 px, `prefers-reduced-motion` respetado.
- [ ] Copy en voseo, sin duraciones de entrega, sin "agrupado", sin clientes ni competidores.
