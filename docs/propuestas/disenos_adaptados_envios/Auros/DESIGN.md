# Auros adaptado a Envíos DosRuedas: Style Reference
> Terminal de ruta en azul profundo, con orbes de datos que dibujan la red de envíos de Mar del Plata

**Theme:** tema invertido azul (el oscuro teal original se resuelve sobre #0950F6; no existe fondo más oscuro)

Las medidas de la fuente están normalizadas; roles y recomendaciones son interpretación. Los ejemplos HTML son reconstrucciones, no componentes de producción. Este archivo es una propuesta: el `@theme` de producción vive en `src/app/globals.css` y manda `DESIGN.md` de la raíz del repo.

Auros adaptado funciona como una terminal de logística: un lienzo azul #0950F6 continuo, orbes de partículas blancas y celestes que sugieren la red de recorridos de la ciudad, y un único destello amarillo que marca la acción. La interfaz sigue siendo escasa y cinematográfica: un solo display (Anton 400, mayúsculas, tracking negativo) que da escala sin gritar. El color está racionado: el blanco lleva casi todo el contenido, los tintes azules se reservan para atmósfera, capas y trazos, y el amarillo #FFEC01 aparece en el CTA primario y en las cifras destacadas. Las tarjetas flotan como paneles de vidrio blanco translúcido (16px de radio, sin sombra) sobre el azul, así que la jerarquía se lee como capas de luz sobre el mismo azul y no como sombra sobre papel. Los componentes se sienten de instrumento: etiquetas Bebas Neue con tracking amplio, flechas geométricas finas y números grandes en Geist Mono.

## Mapeo de adaptación

| Token original | Hex original | Token adaptado | Hex DosRuedas | Por qué |
|---|---|---|---|---|
| Liquid Abyss (canvas) | `#012624` | `--color-canvas` (brand-blue-700) | `#0950F6` | Regla 1 y 8: el oscuro teal pasa a lienzo azul institucional. Es el techo de oscuridad |
| Liquid Deep (hundido, footer) | `#011d1c` | `--color-surface-recessed` (brand-blue-700 + hairline) | `#0950F6` | No existe azul más oscuro. La profundidad se marca con borde superior `rgba(255,255,255,0.12)` y sombra inset blanca, no con un tono más oscuro |
| Liquid Kelp (tarjeta elevada) | `#003734` | `--color-surface-raised` (vidrio blanco 6 %) | `rgba(255,255,255,0.06)` sobre `#0950F6` | Regla 8: capa elevada como vidrio translúcido. Conserva la idea de "superficie un paso arriba" sin inventar un color |
| Liquid Kelp (capa elevada sólida) | `#003734` | `--color-surface-elevated` (brand-blue-400) | `#3570F8` | Capa elevada sólida para botón de flecha en hover y bloques de display. Solo texto ≥24px encima (4.35:1) |
| Liquid Mist (texto énfasis) | `#edfffe` | `--color-text-mist` (brand-blue-50) | `#E6EEFE` | Off-white frío a tinte azul 50. 5.17:1 sobre azul, 4.69:1 sobre vidrio |
| Platinum | `#ffffff` | `--color-text-primary` / `--color-white` | `#FFFFFF` | Se mantiene: títulos, nav, íconos y cuerpo en paneles de vidrio |
| Silver Mist (texto secundario) | `#bbc7c6` | `--color-text-secondary` | `rgba(255,255,255,0.85)` sobre `#0950F6` | Regla 2: sobre azul, blanco 85 % (4.76:1). En vidrio se sube a blanco 100 % o `#E6EEFE` |
| Ash (citas) | `#f2f2f2` | `--color-text-quote` | `#FFFFFF` | Gris neutro de cita a blanco pleno; la cita se distingue por familia y tamaño |
| Slate Deep (superficie inactiva / borde) | `#707777` | `--color-border-structural` (brand-blue-100) | `#BACEFD` | Regla 3: gris de borde a azul 100 en tarjetas blancas. Sobre azul se usa `rgba(255,255,255,0.12)` |
| Lavender Phosphor (cifras) | `#fde9ff` | `--color-accent-stat` (brand-yellow-500) | `#FFEC01` | Regla 4 y 5: el rosa de "punto luminoso" es señal, pasa al amarillo. Solo cifras ≥24px sobre azul (4.94:1) |
| Bioluminescent Gradient | `#00827c` | `--gradient-depth` (brand-blue-700 a 300) | `#0950F6` a `#3570F8` a `#628FF9` | Regla 5 y 6: gradiente decorativo teal colapsado a tintes azules, siempre hacia más claro |
| Aurora Gradient (CTA) | `#cbfffc` | `--color-cta` (brand-yellow-500) | `#FFEC01` | Regla 5: el gradiente de acción cian/rosa colapsa a amarillo sólido. El "amanecer" sobrevive como bloom amarillo al 14 % con blur detrás del botón |
| Aurora Gradient (paradas intermedias) | `#fad1ff` | `--color-cta-hover` / `--color-cta-pressed` | `#FFF12E` / `#E6D400` | Las paradas rosa/blanco se reemplazan por los estados hover y pressed del amarillo |
| Texto del CTA | `#222222` | `--color-text-on-cta` (brand-blue-900) | `#0950F6` | Near-black a azul: 4.94:1 sobre amarillo |
| Fondo botón flecha | `rgba(3,81,75,0.5)` | `--color-arrow-button` | `rgba(255,255,255,0.12)` (hover `#3570F8`) | Semitransparente teal a vidrio blanco; hover se aclara, nunca se oscurece |
| Borde genérico | `rgba(255,255,255,0.1)` | `--color-border-hairline` | `rgba(255,255,255,0.12)` | Hairline sobre azul según regla 1 |

## Qué se conserva y qué se descarta

- **Se conserva:** lienzo único y continuo (ahora azul), densidad espaciosa, ritmo cinematográfico de secciones, hero centrado a pantalla completa (eyebrow, titular, bajada, CTA), sección "Explorá" asimétrica de dos columnas, footer como pozo con 120px de padding vertical.
- **Se conserva:** vocabulario de forma de dos radios (16px tarjetas, 6px controles) y la ausencia de sombras proyectadas como método de elevación.
- **Se conserva:** etiquetas en mayúsculas con tracking amplio como "rotulado de instrumento", ahora en Bebas Neue.
- **Se conserva:** contador de estadísticas como gesto de énfasis luminoso, ahora cifra amarilla en Geist Mono sobre azul.
- **Se conserva:** botón de flecha diagonal a la derecha del título de cada tarjeta, texto cinético sobredimensionado y el orbe de partículas como visual de marca.
- **Se descarta:** toda la escala teal (abyss, deep, kelp), el rosa lavanda, el gris plata con matiz verde y los dos gradientes cian/rosa.
- **Se descarta:** Matter 500 y Arial. Los titulares pasan a Anton 400, las etiquetas a Bebas Neue 400, el cuerpo a Outfit y las cifras a Geist Mono.
- **Se descarta:** el ancho máximo de 1440px (pasa a 1280px) y el gap de 68px entre secciones (pasa a 96px).
- **Se descarta:** el botón de flecha de 32x32 y los links de nav sin padding: no cumplen el touch target de 44px.
- **Se descarta:** el pill de 9999px de la guía de prompts original, que contradecía el radio de 6px del propio sistema.

## Fricciones con DESIGN.md del repo

1. **Tema oscuro sin fondo más oscuro.** Auros construye jerarquía bajando hacia un teal casi negro. En DosRuedas #0950F6 es el techo de oscuridad, así que la escala se invierte: el lienzo es el nivel más "profundo" posible y todo lo que sube se aclara (vidrio blanco 6 %, `#3570F8`, tarjeta blanca). El footer "hundido" se distingue por un hairline superior y más padding, no por un tono distinto.
2. **Texto sobre capas claras de azul.** Blanco sobre `#3570F8` da 4.35:1 y falla en texto normal. Por eso la capa sólida `#3570F8` solo lleva títulos Anton ≥24px o íconos; el cuerpo vive en vidrio al 6 % (blanco 5.46:1, `#E6EEFE` 4.69:1) y dentro del vidrio no se usa blanco al 85 % (4.37:1, falla).
3. **Cifras amarillas.** El rosa original era "puntuación luminosa". Pasarlo al amarillo lo convierte en señal, y el amarillo es escaso (≤15 % de superficie, un solo CTA primario por pantalla). Se limita a cifras ≥24px en Geist Mono; sobre vidrio da 4.49:1, así que nunca en texto chico.
4. **Pesos de display.** Matter 500 "solo medio" no tiene equivalente: Anton y Bebas son 400 único. La "confianza mecánica" sale de mayúsculas, line-height 0.85 a 0.9 y tracking negativo.
5. **Foco visible sobre azul.** Un ring #0950F6 es invisible sobre el lienzo #0950F6. Se resuelve con `ring-2 ring-brand-blue-500 ring-offset-2 ring-offset-white`: la banda blanca del offset hace visible el anillo en cualquier superficie.
6. **Motion.** La esfera de partículas rota de forma continua. Con `prefers-reduced-motion: reduce` queda como imagen estática (primer frame) y el texto cinético pierde el desplazamiento.
7. **Imagery "sin personas".** Auros prohíbe fotografía. DosRuedas necesita prueba real de servicio: se suma foto de repartidores y motos en Mar del Plata con tinte azul multiply, y el orbe queda como visual secundario de "red de envíos".

## Tokens: Colores

| Nombre | Valor | Token | Rol |
|------|-------|-------|------|
| Lienzo | `#0950F6` | `--color-canvas` | Lienzo principal: fondo de página, header, hero y footer. Es el campo dominante y el más oscuro permitido |
| Superficie hundida | `#0950F6` + borde `rgba(255,255,255,0.12)` | `--color-surface-recessed` | Footer y paneles de CTA de máximo aire. Mismo azul, separado por hairline superior e inset blanco |
| Superficie de vidrio | `rgba(255,255,255,0.06)` | `--color-surface-raised` | Tarjetas de contenido y paneles de la sección Explorá. Capa translúcida un paso arriba del lienzo |
| Superficie elevada | `#3570F8` | `--color-surface-elevated` | Hover de fondos azules, botón de flecha en hover, bloques de display. Solo texto ≥24px encima |
| Tarjeta blanca | `#FFFFFF` | `--color-surface-card` | Módulos densos en información (cotizador, tabla de tarifas). Texto `#0950F6` |
| Blanco | `#FFFFFF` | `--color-text-primary` | Títulos, nav, íconos y cuerpo dentro de paneles de vidrio |
| Bruma | `#E6EEFE` | `--color-text-mist` | Etiquetas de sección y cuerpo enfatizado sobre azul |
| Blanco 85 % | `rgba(255,255,255,0.85)` | `--color-text-secondary` | Cuerpo secundario sobre el lienzo sólido. Nunca sobre vidrio |
| Hairline | `rgba(255,255,255,0.12)` | `--color-border-hairline` | Bordes y divisores sobre azul |
| Borde estructural | `#BACEFD` | `--color-border-structural` | Bordes y divisores en tarjetas blancas |
| Borde de input | `#628FF9` | `--color-border-input` | Borde de campos de formulario |
| Amarillo señal | `#FFEC01` | `--color-cta` | CTA primario (uno por pantalla) y cifras destacadas ≥24px |
| Amarillo hover | `#FFF12E` | `--color-cta-hover` | Hover del CTA |
| Amarillo pressed | `#E6D400` | `--color-cta-pressed` | Estado presionado del CTA |
| Amarillo detalle | `#FFF45C` | `--color-accent-detail` | Detalle mono chico sobre azul (5.26:1) |
| Tinte de badge | `#FFFAB8` | `--color-badge` | Fondo de badge con texto `#0950F6` (5.62:1) |
| Gradiente de profundidad | `linear-gradient(90deg, #0950F6 0%, #3570F8 60%, #628FF9 100%)` | `--gradient-depth` | Atmósfera de hero y transiciones de sección. Siempre de azul hacia más claro |
| Bloom amarillo | `radial-gradient(circle, rgba(255,236,1,0.14) 0%, rgba(255,236,1,0) 70%)` | `--gradient-bloom` | Halo detrás del CTA primario, con blur. Reemplaza el "amanecer" del gradiente aurora |

Error de formulario únicamente: `#EF4444` (borde e ícono) y `#DC2626` (texto), siempre dentro de una tarjeta blanca.

## Tokens: Tipografía

### Anton: display y titulares (H1, H2, texto cinético) · `--font-display`
- **Reemplaza a:** Matter 500 en titulares
- **Pesos:** 400 único
- **Tamaños:** 40, 64, 104, 120 a 296px
- **Line height:** 0.85 a 0.9
- **Letter spacing:** -0.02em a 40px, -0.03em a 64px, -0.04em a 104px, -0.05em en texto cinético
- **Rol:** Siempre en mayúsculas. La escala se logra con tamaño y tracking, nunca con peso.

### Bebas Neue: etiquetas, nav, botones, eyebrows y H3 · `--font-subheading`
- **Reemplaza a:** Matter 400/500 en mayúsculas con tracking y a Arial 14px en botones y nav
- **Pesos:** 400 único
- **Tamaños:** 10 (solo metadato), 14, 16, 20, 24px
- **Letter spacing:** 0.1em a 10 y 14px, 0.08em a 16 y 20px, 0.05em a 24px
- **Rol:** El "rotulado de instrumento" de Auros. Tracking amplio como firma.

### Outfit: cuerpo y UI · `--font-sans`
- **Reemplaza a:** Matter 400 en cuerpo y Arial en labels de formulario
- **Pesos:** 400 (cuerpo), 500 (labels), 600 (énfasis puntual)
- **Tamaños:** 14 (labels y UI), 16, 18, 20px
- **Line height:** 1.5 a 1.625
- **Rol:** Sentence case, párrafos ≥16px.

### Geist Mono: cifras, precios, distancias, contadores · `--font-mono`
- **Reemplaza a:** Matter 500 en estadísticas
- **Pesos:** 400, 500
- **Tamaños:** 12, 14, 24, 40, 64px
- **Rol:** Siempre `tabular-nums`. Contador grande en amarillo sobre azul.

### Escala tipográfica (px)

Anton es condensada y todo en mayúsculas: rinde más alto que Matter al mismo tamaño y ocupa menos ancho. La escala sube un escalón en display y baja el line-height para conservar el bloque compacto del original.

| Rol | Familia | Peso | Tamaño | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | Bebas Neue / Geist Mono | 400 | 10px | 1.4 | 0.1em | `--text-caption` |
| label | Bebas Neue | 400 | 14px | 1.2 | 0.1em | `--text-label` |
| body | Outfit | 400 | 16px | 1.5 | 0 | `--text-body` |
| body-lg | Outfit | 400 | 18px | 1.625 | 0 | `--text-body-lg` |
| eyebrow-lg | Bebas Neue | 400 | 20px | 1.2 | 0.08em | `--text-eyebrow-lg` |
| subheading (H3) | Bebas Neue | 400 | 24px | 1.1 | 0.05em | `--text-subheading` |
| heading (H2 tarjeta) | Anton | 400 | 40px | 0.9 | -0.02em | `--text-heading` |
| stat | Geist Mono | 500 | 64px | 1 | -0.02em | `--text-stat` |
| heading-lg (H2 sección) | Anton | 400 | 64px | 0.9 | -0.03em | `--text-heading-lg` |
| display (H1) | Anton | 400 | 104px | 0.85 | -0.04em | `--text-display` |
| kinetic | Anton | 400 | 120px a 296px | 0.85 | -0.05em | `--text-kinetic-min` / `--text-kinetic-max` |

## Tokens: Espaciado y formas

**Unidad base:** 4px

**Densidad:** espaciosa

### Escala de espaciado

| Nombre | Valor | Token |
|------|-------|-------|
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
| 120 | 120px | `--spacing-120` |
| 140 | 140px | `--spacing-140` |
| 160 | 160px | `--spacing-160` |
| 164 | 164px | `--spacing-164` |

### Radios

| Elemento | Original | Adaptado | Clase del repo |
|---------|-------|-------|-------|
| Tarjetas | 16px | 16px | `rounded-xl` |
| Botones | 6px | 6px | `rounded-sm` |
| Chico (flecha, badge) | 6px | 6px | `rounded-sm` |
| Intermedio | 12px | 12px | `rounded-lg` |

### Layout

- **Ancho máximo de página:** 1280px (`max-w-7xl`)
- **Separación entre secciones:** 96px vertical
- **Padding de tarjeta:** 36px (mínimo) a 48px (máximo)
- **Gap entre elementos:** 20px
- **Touch target mínimo:** 44px

## Componentes

### Botón CTA amarillo
**Rol:** CTA primario (uno por pantalla)

Fondo `#FFEC01` sólido, radio 6px, alto mínimo 48px, 22px de padding horizontal. Texto Bebas Neue 16px, tracking 0.08em, `#0950F6`. Detrás, un bloom amarillo al 14 % con blur de 32px reemplaza el gradiente "amanecer" original. Hover `#FFF12E`, pressed `#E6D400`. Copy: "Cotizá tu envío".

```html
<a href="/cotizar" class="relative inline-flex min-h-12 items-center rounded-sm bg-brand-yellow-500 px-[22px] font-subheading text-base tracking-[0.08em] text-brand-blue-900 transition-colors hover:bg-brand-yellow-400 active:bg-brand-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none">
  Cotizá tu envío
</a>
```

### Link de navegación fantasma
**Rol:** Ítem de nav

Fondo transparente, sin borde, Bebas Neue 16px con tracking 0.08em. Blanco en estado activo, blanco 85 % en inactivo. Área de toque de 44px de alto con padding horizontal de 8px; gap de 16px entre ítems.

### Tarjeta de vidrio
**Rol:** Contenedor de contenido

Fondo `rgba(255,255,255,0.06)`, borde `rgba(255,255,255,0.12)`, radio 16px, padding 36px. Sin sombra. Título Anton 40px blanco, cuerpo Outfit 16px blanco o `#E6EEFE` (nunca blanco 85 % dentro del vidrio).

### Pozo hundido
**Rol:** Panel de CTA final y footer

Mismo `#0950F6` del lienzo con borde superior hairline y sombra inset `rgba(255,255,255,0.06)`. Radio 16px cuando es panel, 120px de padding vertical. Es el lugar del "Cotizá tu envío" de cierre.

### Tarjeta de servicio en fila
**Rol:** Listado de servicios

Fondo transparente, radio 16px, 48px vertical por 36px horizontal, borde hairline inferior. Título Anton, descripción Outfit, y botón de flecha a la derecha. Se usa para Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment y Contrareembolso.

```html
<article class="group flex items-start justify-between gap-5 rounded-xl border-b border-white/12 px-9 py-12">
  <div class="max-w-[600px]">
    <h3 class="font-display text-[40px] leading-[0.9] tracking-[-0.02em] text-white">Express</h3>
    <p class="mt-4 font-sans text-base leading-normal text-white/85">Elegís una franja de 3 hs para la entrega. Pedilo con 2 hs de anticipación, hasta las 15:00 hs.</p>
  </div>
  <a href="/servicios/express" aria-label="Mirá el servicio Express" class="grid size-11 shrink-0 place-items-center rounded-sm bg-white/12 text-white transition-colors hover:bg-brand-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white motion-reduce:transition-none">
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 12 12 4M5 4h7v7"/></svg>
  </a>
</article>
```

### Botón de flecha
**Rol:** Disparador de link en línea

44x44 (sube desde 32x32 por touch target), radio 6px, fondo vidrio `rgba(255,255,255,0.12)`, flecha diagonal blanca de trazo fino. Hover: fondo `#3570F8` (se aclara). Siempre a la derecha del título de la tarjeta, con `aria-label` en voseo ("Mirá LowCost").

### Etiqueta de sección
**Rol:** Eyebrow / kicker

Bebas Neue 14px o 20px, tracking 0.08 a 0.1em, `#E6EEFE` o blanco 85 %. Va arriba de cada titular de sección ("ENVÍOS DOSRUEDAS", "EXPLORÁ", "SERVICIOS").

### Titular del hero
**Rol:** Título de página

Anton 64 a 104px, line-height 0.85, tracking -0.04em, blanco, mayúsculas. Tamaño fluido con `clamp(3rem, 8vw, 6.5rem)` para H1 y `clamp(2.5rem, 6vw, 4rem)` para H2. Ejemplo: "TU ENVÍO EN MOTO POR MAR DEL PLATA".

### Texto cinético sobredimensionado
**Rol:** Marcador de sección

Anton 120 a 296px, line-height 0.85, tracking -0.05em, blanco al 12 % como textura o blanco pleno como marcador ("MDQ", "RUTA"). Se desplaza con scroll; con `prefers-reduced-motion` queda fijo.

### Contador de estadísticas
**Rol:** Métrica

Cifra en Geist Mono 64px `tabular-nums`, `#FFEC01` sobre el lienzo azul, con label abajo en Bebas Neue 14px `#E6EEFE`. Las cifras son placeholders explícitos hasta tener dato confirmado por el dueño.

```html
<dl class="grid gap-12 sm:grid-cols-3">
  <div class="flex flex-col-reverse">
    <dt class="mt-3 font-subheading text-sm tracking-[0.1em] text-brand-blue-50">Envíos por mes</dt>
    <dd class="font-mono text-[64px] leading-none tracking-[-0.02em] tabular-nums text-brand-yellow-500">[métrica]</dd>
  </div>
</dl>
```

### Barra de navegación
**Rol:** Header del sitio

Ancho completo, fondo `#0950F6`, alto 80px. Logo DosRuedas a la izquierda, links al centro, CTA amarillo a la derecha (es el único CTA amarillo de la vista cuando el hero no tiene otro; si el hero lo tiene, el del header pasa a botón fantasma blanco con borde hairline). Gaps de 16 a 24px.

### Ilustración de red
**Rol:** Gráfico decorativo

Patrón plano de círculos y conectores finos en blanco y `#8EAFFB` sobre el azul, en la columna derecha de Explorá. Lee como mapa de nodos de entrega de la ciudad. Sin rellenos complejos.

### Orbe de partículas
**Rol:** Animación del hero

Esfera de partículas en blanco, `#BACEFD` y `#8EAFFB`, con muy pocas partículas `#FFEC01` como puntos de entrega. Rota lento detrás del texto del hero. Con `prefers-reduced-motion: reduce` se muestra como imagen fija.

## Do's and Don'ts

### Do
- Usá el apilado azul (lienzo `#0950F6`, vidrio blanco 6 %, `#3570F8`, tarjeta blanca) para diferenciar superficies, siempre aclarando hacia arriba.
- Reservá el amarillo `#FFEC01` para un solo CTA primario por pantalla y para cifras destacadas ≥24px.
- Poné todos los titulares en Anton 400 mayúsculas; la jerarquía sale de tamaño y tracking.
- Aplicá tracking 0.05 a 0.1em a toda etiqueta, kicker y eyebrow en Bebas Neue.
- Mostrá números, precios y distancias en Geist Mono `tabular-nums`, con placeholder `$0.000` o `[métrica]` si no hay dato confirmado.
- Mantené dos radios: 16px en tarjetas y 6px en controles.
- Usá line-height 0.85 a 0.9 en display y 1.5 a 1.625 en cuerpo.
- Respetá `prefers-reduced-motion` en el orbe, el texto cinético y los hovers.

### Don't
- No uses sombras negras ni `rgba(0,0,0,...)`; la profundidad sale del apilado de superficies. Si hace falta sombra, teñida `rgba(9,80,246,α)`.
- No uses un azul más oscuro que `#0950F6` para "hundir" una superficie.
- No pongas texto normal blanco sobre `#3570F8` (4.35:1) ni blanco 85 % dentro de un panel de vidrio (4.37:1).
- No pongas texto amarillo sobre blanco (1.22:1) ni cifras amarillas chicas sobre vidrio.
- No apliques el bloom amarillo a fondos grandes, bordes ni texto.
- No uses pesos 500 a 700 en Anton ni en Bebas Neue.
- No uses teal, rosa, verde, violeta ni gris: la paleta es azul, amarillo y blanco.
- No afirmes duraciones de entrega ("en 3 hs", "menos de 2 h"): Express es una franja de 3 hs a elección.

## Superficies

El tema oscuro de Auros se resuelve como **tema invertido azul**: `#0950F6` es el nivel más profundo y no existe nada debajo. La jerarquía se construye hacia arriba con blanco translúcido, azul más claro y, en el tope, tarjetas blancas.

| Nivel | Nombre | Valor | Propósito |
|-------|------|-------|---------|
| 0 | Lienzo | `#0950F6` | Fondo dominante. Todo el contenido flota sobre él |
| 0 bis | Pozo hundido | `#0950F6` + hairline `rgba(255,255,255,0.12)` + inset `rgba(255,255,255,0.06)` | Footer y panel de CTA final. Mismo tono, separado por línea y aire |
| 1 | Vidrio | `rgba(255,255,255,0.06)` | Tarjetas de contenido. Texto blanco 100 % o `#E6EEFE` |
| 2 | Elevada | `#3570F8` | Hover de fondos, botón de flecha activo, bloques de display con texto ≥24px |
| 3 | Tarjeta blanca | `#FFFFFF` | Cotizador, tarifas y formularios. Texto `#0950F6`, bordes `#BACEFD` |
| Inactivo | Vidrio tenue | `rgba(255,255,255,0.06)` con texto blanco | Estados deshabilitados: se marcan con ícono y `aria-disabled`, no solo con opacidad |

## Elevación

El diseño sigue evitando sombras proyectadas. La profundidad se comunica por el apilado de superficies: lienzo azul, vidrio blanco, azul claro y tarjeta blanca. Cada nivel es un paso más luminoso, así los objetos se leen como capas de luz sobre el mismo azul. Las únicas sombras permitidas son teñidas: `--shadow-float` (`0 25px 50px -12px rgba(9,80,246,0.15)`) para una tarjeta blanca apoyada sobre fondo blanco, y el inset blanco del pozo hundido. El bloom amarillo del CTA no es sombra: es un halo con blur de 32px y opacidad 14 %.

## Imagery

La imagen es mínima y atmosférica, pero con prueba real. El hero lleva el orbe de partículas (blanco, `#BACEFD`, `#8EAFFB` y pocos puntos amarillos) como red de envíos abstracta. Donde el contenido habla de servicio, se usan fotos reales de repartidores y motos en calles de Mar del Plata, con tinte azul `#0950F6` en modo multiply para que se integren al lienzo. Como alternativa, dioramas 3D isométricos en clay mate (moto, paquete, depósito) en blanco y tintes azules. Las decoraciones de sección son diagramas de nodos planos en blanco. Nada de stock genérico ni fotos de personas en oficinas.

## Layout

Lienzo azul a sangre con contenido a 1280px máximo (`max-w-7xl`). El hero es una pila centrada (eyebrow, titular, bajada, CTA) de altura de viewport, con el orbe de partículas de fondo. Las secciones son bandas a ancho completo separadas por 96px verticales, alternando lienzo y pozo hundido. La sección Explorá usa dos columnas asimétricas: a la izquierda las tarjetas de servicio en fila, a la derecha la ilustración de red. El texto se centra en columnas angostas (máx. 600px). El footer es el pozo hundido con 120px de padding vertical. La nav es una barra delgada con gaps de 16 a 24px. En mobile todo pasa a una columna con 16px de gutter y sin scroll horizontal.

## Agent Prompt Guide

**Referencia rápida de color**
- Texto (primario): `#FFFFFF`
- Texto (cuerpo secundario sobre lienzo): `rgba(255,255,255,0.85)`
- Texto (énfasis / bruma): `#E6EEFE`
- Fondo (lienzo): `#0950F6`
- Borde: `rgba(255,255,255,0.12)` sobre azul, `#BACEFD` en tarjeta blanca
- Acento (cifras): `#FFEC01`
- Acción primaria: `#FFEC01` con texto `#0950F6`

**Prompts de ejemplo**

1. **Creá el CTA primario:** fondo `bg-brand-yellow-500`, texto `text-brand-blue-900` en `font-subheading` 16px tracking 0.08em, radio `rounded-sm` (6px), alto mínimo 48px, bloom amarillo al 14 % detrás. Copy: "Cotizá tu envío". Uno solo por pantalla.

2. **Creá una tarjeta de servicio:** fondo `bg-white/6`, borde `border-white/12`, `rounded-xl`, padding 36px. Título "LowCost" en `font-display` 40px blanco, line-height 0.9. Cuerpo en `font-sans` 16px blanco: "Reparto programado en el día. Pedilo hasta las 13:00 y se entrega antes de las 19:00." Botón de flecha 44x44, `rounded-sm`, `bg-white/12`, hover `bg-brand-blue-400`, arriba a la derecha.

3. **Creá un bloque de estadísticas:** tres columnas. Cifra `[métrica]` en `font-mono tabular-nums` 64px `text-brand-yellow-500`, line-height 1, tracking -0.02em. Label abajo en `font-subheading` 14px, tracking 0.1em, `text-brand-blue-50`. No inventes números.

4. **Creá el panel de cierre:** pozo hundido sobre `bg-brand-blue-700` con `border-t border-white/12`, 120px de padding vertical, titular Anton "ENVIÁ HOY DESDE MAR DEL PLATA" y el CTA amarillo "Cotizá tu envío".

## Motion

- Orbe de partículas: rotación lenta (una vuelta cada 60s o más). Con `useReducedMotion()` o gate GSAP, se renderiza estático.
- Texto cinético: parallax suave con scroll. Con reduced motion, fijo.
- Hover de tarjetas y botones: solo transición de color de 150 a 200ms; `motion-reduce:transition-none`.

## Referencia original

- **Auros (auros.global)**: sirve para DosRuedas porque demuestra cómo un lienzo único y saturado, con tipografía grande y un solo acento, transmite precisión operativa; eso es lo que una mensajería en moto quiere que se lea: control del recorrido, sin decoración de más.

## Quick Start

### CSS Custom Properties

```css
/* Propuesta Auros adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
:root {
  /* Colores */
  --color-canvas: #0950F6;
  --color-surface-recessed: #0950F6;
  --color-surface-raised: rgba(255, 255, 255, 0.06);
  --color-surface-elevated: #3570F8;
  --color-surface-card: #FFFFFF;
  --color-text-primary: #FFFFFF;
  --color-text-mist: #E6EEFE;
  --color-text-secondary: rgba(255, 255, 255, 0.85);
  --color-text-quote: #FFFFFF;
  --color-text-on-cta: #0950F6;
  --color-border-hairline: rgba(255, 255, 255, 0.12);
  --color-border-structural: #BACEFD;
  --color-border-input: #628FF9;
  --color-cta: #FFEC01;
  --color-cta-hover: #FFF12E;
  --color-cta-pressed: #E6D400;
  --color-accent-stat: #FFEC01;
  --color-accent-detail: #FFF45C;
  --color-badge: #FFFAB8;
  --color-arrow-button: rgba(255, 255, 255, 0.12);
  --gradient-depth: linear-gradient(90deg, #0950F6 0%, #3570F8 60%, #628FF9 100%);
  --gradient-bloom: radial-gradient(circle, rgba(255, 236, 1, 0.14) 0%, rgba(255, 236, 1, 0) 70%);

  /* Tipografía: familias */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Tipografía: escala (ver variables.css completo) */
  --text-body: 16px;
  --leading-body: 1.5;
  --text-display: 104px;
  --leading-display: 0.85;
  --tracking-display: -0.04em;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;
  --card-padding-min: 36px;
  --card-padding-max: 48px;

  /* Radios */
  --radius-cards: 16px;
  --radius-buttons: 6px;
}
```

### Tailwind v4

```css
/* Propuesta Auros adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
@theme {
  --color-canvas: #0950F6;
  --color-surface-elevated: #3570F8;
  --color-text-mist: #E6EEFE;
  --color-border-structural: #BACEFD;
  --color-cta: #FFEC01;
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;
  --radius-sm: 6px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}
```

En el repo, preferí las clases existentes (`bg-brand-blue-700`, `bg-brand-yellow-500`, `text-brand-blue-900`, `text-brand-blue-50`, `border-brand-blue-100`, `font-display`, `font-subheading`, `font-mono tabular-nums`, `rounded-xl`, `rounded-sm`) antes que estos tokens de propuesta. El archivo completo está en `theme.css` y `variables.css`.

## Checklist de marca

- [ ] Ningún fondo es más oscuro que `#0950F6`; la jerarquía de superficies se aclara hacia arriba.
- [ ] Hay un solo CTA amarillo por pantalla y el amarillo no supera el 15 % de la superficie.
- [ ] No hay texto normal blanco sobre `#3570F8`, ni blanco 85 % dentro de vidrio, ni amarillo sobre blanco.
- [ ] Anton y Bebas Neue solo en peso 400; Outfit en cuerpo ≥16px; Geist Mono `tabular-nums` en toda cifra.
- [ ] Ningún precio ni métrica inventada: se usan `$0.000` o `[métrica]` hasta tener dato confirmado.
- [ ] El copy usa voseo y no afirma duraciones de entrega, LowCost agrupado, facturas, rendición inmediata ni 15 kg sin recargo.
- [ ] Todo control mide al menos 44px y tiene foco `ring-2 ring-brand-blue-500 ring-offset-2 ring-offset-white`.
- [ ] El orbe, el texto cinético y los hovers respetan `prefers-reduced-motion`.
- [ ] No hay teal, rosa, verde, violeta ni gris; las sombras son teñidas de azul o amarillo.
- [ ] Las fotos son reales de Mar del Plata con tinte azul multiply, o dioramas clay isométricos.
