# Ramp adaptado a Envíos DosRuedas: Style Reference
> Mesa editorial de logística: páginas blancas con tinta azul y un solo marcador amarillo. Una superficie casi monocroma donde la única marca amarilla aparece donde se mueve un envío: cotizar, confirmar, estado activo.

**Theme:** light (con bandas invertidas en azul #0950F6)

Propuesta Ramp adaptada a Envíos DosRuedas. No es el `@theme` de producción (`src/app/globals.css`) ni reemplaza a `DESIGN.md` del repo: si algo de acá choca con `DESIGN.md`, gana `DESIGN.md`. Las medidas de la fuente están normalizadas; los roles y recomendaciones son interpretación. Los ejemplos HTML son reconstrucciones, no componentes de producción.

Ramp es la propuesta más cercana a la marca: un sistema monocromo con un único acento amarillo resaltador. La adaptación es casi directa. La tinta casi negra pasa a azul #0950F6 (el tono más oscuro permitido), el chartreuse pasa al amarillo señal #FFEC01, el lienzo cálido pasa a blanco y el lavado cálido a #E6EEFE. Se conserva lo que define a Ramp: jerarquía por tamaño y tracking en un solo peso, tarjetas planas apoyadas en hairlines de 1px, botones rectangulares de 6px, ritmo 8/12/16/24px, densidad cómoda, layout alineado a la izquierda y motion utilitario. La tipografía única (lausanne 400) se reemplaza por el sistema de cuatro familias del repo, todas usadas en peso 400 (Outfit admite 500 en labels), con lo que la filosofía de "un solo peso" sobrevive intacta.

## Mapeo de adaptación

| Token original | Hex original | Token adaptado | Hex DosRuedas | Por qué |
|---|---|---|---|---|
| Highlighter Yellow | `#e4f222` | `highlighter-yellow` (brand-yellow-500) | `#FFEC01` | Es el acento único de ambos sistemas. Mismo rol: CTA, estado activo, señal de acción. Texto #0950F6 encima (4.94:1). |
| Highlighter Yellow (hover) | `#e4f222` | `highlighter-yellow-hover` (brand-yellow-400) | `#FFF12E` | Ramp no define hover; el repo aclara el amarillo al pasar el mouse. |
| Highlighter Yellow (pressed) | `#e4f222` | `highlighter-yellow-pressed` (brand-yellow-600) | `#E6D400` | Estado pressed del CTA. |
| Highlighter Yellow (tinte) | `#e4f222` | `highlighter-yellow-tint` (brand-yellow-100) | `#FFFAB8` | Badge activo y halo de estado sin gastar amarillo pleno. Texto #0950F6 (5.62:1). |
| Ink | `#0c0a08` | `ink` (brand-blue-700) | `#0950F6` | Regla 1: todo casi negro va al azul, el techo de oscuridad. 6.02:1 sobre blanco. |
| Obsidian | `#1a1919` | `obsidian` (brand-blue-700) | `#0950F6` | Superficie invertida. Se fusiona con Ink: no existe un fondo más oscuro que #0950F6. |
| Obsidian (variación tonal) | `#1a1919` | `obsidian-raised` (brand-blue-400) | `#3570F8` | Ramp separaba Ink y Obsidian por tono. Acá la variación se logra aclarando, no oscureciendo. |
| Paper | `#ffffff` | `paper` | `#FFFFFF` | Sin cambio: lienzo, tarjetas, texto sobre azul. |
| Bone (lienzo) | `#f4f2f0` | `surface-canvas` | `#FFFFFF` | El lienzo de la marca es blanco. El carácter "papel" lo sostienen el hairline y el aire, no el tono cálido. |
| Bone (lavado) | `#f4f2f0` | `bone` / `surface-wash` (brand-blue-50) | `#E6EEFE` | Tarjeta lavado, hover de link y botón cuadrado. De cálido a azul frío. 5.17:1 con texto azul. |
| Ash | `#6d6c6b` | `ash` (brand-blue-700) | `#0950F6` | Regla 2: el gris de texto secundario va al azul al 100 %. La jerarquía sale de tamaño, familia y tracking. Sobre azul: blanco al 85 %. |
| Hairline | `#e5e7eb` | `hairline` (brand-blue-100) | `#BACEFD` | Borde estructural de 1px, la primitiva de elevación de Ramp. |
| Hairline (hover) | `#e5e7eb` | `hairline-hover` (brand-blue-200) | `#8EAFFB` | Hover de borde de tarjeta, que Ramp resolvía con color de fondo. |
| Smoke | `#d3d3d3` | `smoke` (brand-blue-50) | `#E6EEFE` | Skeleton y fondos muted. Su uso como borde sutil se absorbe en Hairline. |
| Borde de input | `rgba(33,33,33,0.1)` | `input-border` (brand-blue-300) | `#628FF9` | Regla 3: gris medio de borde de input al azul 300. Más visible que el original, lo que mejora la affordance del cotizador. |
| Semáforo del browser chrome (rojo, amarillo, verde) | `n/a` | tintes azules | `#BACEFD` | Regla 5: colores decorativos colapsados a un tinte azul. Los tres puntos quedan iguales. |
| Imagen neón rosa ("Stay Posted") | `n/a` | foto con tinte azul multiply | `#0950F6` | Regla 5: el único color fuera de sistema de Ramp se reemplaza por foto real de reparto con multiply azul. |

## Qué se conserva y qué se descarta

**Se conserva**
- Un solo acento amarillo, reservado para acción: CTA, estado activo, precio destacado sobre azul. Ramp ya cumple la regla de ≤15 % de superficie por diseño.
- Jerarquía sin negritas: Anton y Bebas Neue tienen un solo peso (400), igual que lausanne. Outfit se usa en 400 y solo sube a 500 en labels de input.
- Tarjetas planas: fondo blanco, borde de 1px, radio 16px, sin sombra. El borde hace la elevación.
- Radios chicos y rectangulares: 6px en botones y tags, 12px en tarjeta lavado, 16px en tarjeta de contenido. Nada de pills en UI.
- Ritmo de espaciado base 4 (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 128, 156) y densidad cómoda.
- Layout editorial alineado a la izquierda dentro de un contenedor centrado; hero tipográfico con input compuesto; banda invertida de ancho completo que corta el ritmo.
- Barra de anuncio de 40px sobre el header, header sticky con brillo interno blanco y blur.
- Motion utilitario: transiciones de color de 300 a 400 ms con ease-out, sin teatro de transform.
- Marco de producto (browser chrome) como imagen principal del hero.

**Se descarta o cambia**
- Lienzo cálido (Bone): pasa a blanco. El lavado pasa a #E6EEFE.
- Gris secundario (Ash) y opacidad del 60 %: el texto secundario va en azul al 100 %.
- Dos negros distintos (Ink y Obsidian): se fusionan en #0950F6; la variación tonal se logra aclarando a #3570F8.
- `font-feature-settings: "ss01"`: no aplica a las fuentes del repo. Se reemplaza por `tabular-nums` en todo número (Geist Mono).
- Tracking 0 en display: Anton pide tracking negativo (-0.02em a -0.04em) y line-height 0.85 a 0.9.
- Contenedor de 1200px: pasa a 1280px (`max-w-7xl`).
- Radio de input de 10px: pasa a 8px (escala del repo).
- Grilla de logos de clientes: se reemplaza por una grilla de los 6 servicios. El sitio no publica clientes con nombre sin permiso.
- Métricas del Live Counter: se reemplazan por placeholders `[métrica]` hasta que existan datos reales y aprobados.
- Imagen neón rosa y avatares de testimonio con cara de stock: se reemplazan por fotos reales de reparto con tinte azul o dioramas 3D.

## Fricciones con DESIGN.md del repo

1. **Dos negros que no pueden existir.** Ramp distingue Ink (texto) de Obsidian (paneles) y prohíbe usar Ink como fondo grande. En DosRuedas ambos son #0950F6 y la regla pierde sentido: el azul es a la vez tinta y fondo institucional. Resolución: la banda invertida es #0950F6 plano; si hace falta una capa elevada dentro del azul se usa #3570F8 (más claro), paneles de vidrio `rgba(255,255,255,0.06)` o una tarjeta blanca. Nunca un azul más oscuro.
2. **Texto secundario gris.** Ramp baja el texto secundario al 60 % de la tinta. El repo prohíbe bajar opacidad del azul sobre blanco (el texto quedaría por debajo de 4.5:1) y prohíbe #3570F8 en texto normal (4.35:1). Resolución: todo texto sobre blanco va en #0950F6 al 100 %; la diferencia entre título, cuerpo y caption sale del cambio de familia (Anton, Outfit, Bebas, Geist Mono), tamaño y tracking. Sobre azul, el secundario es blanco al 85 % (4.76:1).
3. **Live Counter Ticker con cifras.** El componente más reconocible de Ramp muestra contadores en vivo ("Expenses reviewed"). DosRuedas no puede publicar métricas inventadas. Resolución: la banda se conserva con valores `[métrica]` en Geist Mono como placeholder explícito, conectables a datos reales cuando existan y el dueño los apruebe. Alternativa válida mientras tanto: datos operativos verificados (corte Express 15:00 hs, LowCost con corte 13:00 y entrega antes de 19:00, sin recargo hasta 5 kg o 40 × 40 cm).
4. **Prueba social con nombres.** La grilla de logos y los testimonios de Ramp dependen de clientes nombrados. El repo prohíbe publicar clientes con volumen o competidores. Resolución: la grilla de 7 columnas pasa a 6 celdas de servicio más la tarjeta de cita azul; los testimonios usan `[Nombre del cliente, con permiso]`.
5. **Header blanco vs header azul.** Ramp describe el nav como blanco en el componente, pero su tabla de superficies lo lista como invertido. El repo pide header #0950F6. Resolución: header azul con texto blanco; la barra de anuncio queda blanca encima, con hairline, para conservar el corte de dos franjas. El CTA del header es outline blanco mientras el hero está visible, para respetar un solo CTA amarillo por pantalla.
6. **Tipografía única vs cuatro familias.** Ramp usa una sola familia. El repo exige Anton, Bebas Neue, Outfit y Geist Mono. Resolución: se conserva el principio de un solo peso y se asigna cada familia a un rol fijo, así la página sigue sintiéndose sobria y editorial.

## Tokens: Colores

| Nombre | Valor | Token | Rol |
|------|-------|-------|------|
| Amarillo señal | `#FFEC01` | `--color-highlighter-yellow` | Relleno del CTA primario, estado activo, precio destacado sobre azul. El único acento cromático: hace que cada acción se lea como "encendida" |
| Amarillo hover | `#FFF12E` | `--color-highlighter-yellow-hover` | Hover del CTA (se aclara) |
| Amarillo pressed | `#E6D400` | `--color-highlighter-yellow-pressed` | Pressed del CTA |
| Amarillo tinte | `#FFFAB8` | `--color-highlighter-yellow-tint` | Badge activo, halo de estado |
| Tinta | `#0950F6` | `--color-ink` | Texto de cuerpo, títulos, borde de botón outline |
| Obsidiana | `#0950F6` | `--color-obsidian` | Header, footer, banda del contador, tarjeta de cita |
| Obsidiana elevada | `#3570F8` | `--color-obsidian-raised` | Capa elevada dentro del azul, hover de fondos azules. Nunca texto normal |
| Papel | `#FFFFFF` | `--color-paper` | Lienzo, tarjetas, modales, texto sobre azul |
| Lavado | `#E6EEFE` | `--color-bone` | Tarjeta lavado, hover de link y ghost, botón cuadrado |
| Texto secundario | `#0950F6` | `--color-ash` | Captions y labels sobre blanco, al 100 % |
| Hairline | `#BACEFD` | `--color-hairline` | Bordes de tarjeta, divisores, celdas de grilla |
| Hairline hover | `#8EAFFB` | `--color-hairline-hover` | Hover de borde de tarjeta |
| Borde de input | `#628FF9` | `--color-input-border` | Borde del input del cotizador y formularios |
| Humo | `#E6EEFE` | `--color-smoke` | Skeleton, fondos muted |
| Error | `#EF4444` / `#DC2626` | `--color-error-border` / `--color-error-text` | Solo formularios |

Pares de contraste verificados: #0950F6 sobre #FFFFFF 6.02:1 · #FFFFFF sobre #0950F6 6.02:1 · #0950F6 sobre #FFEC01 4.94:1 · #0950F6 sobre #E6EEFE 5.17:1 · #0950F6 sobre #FFFAB8 5.62:1 · blanco al 85 % sobre #0950F6 4.76:1. #3570F8 sobre #FFFFFF da 4.35:1 y solo sirve para texto ≥24px o íconos. Nunca texto amarillo sobre blanco (1.22:1).

## Tokens: Tipografía

### Anton: display, H1 y H2 · `--font-display`
- **Pesos:** 400 único
- **Tamaños:** 36px, 48px, 56px, 80px
- **Line height:** 0.85 a 0.9
- **Letter spacing:** -0.02em (36 y 48px), -0.03em (56px), -0.04em (80px)
- **Caja:** UPPERCASE
- **Rol:** toma el lugar de lausanne en tamaños grandes. Anton es condensada, por eso cada paso sube respecto del original (64px pasa a 80px) para mantener el peso visual del titular editorial.

### Bebas Neue: subtítulos, H3, labels, nav, botones, eyebrows · `--font-subheading`
- **Pesos:** 400 único
- **Tamaños:** 12px, 16px, 24px, 28px
- **Line height:** 1 a 1.8 (más abierto en captions)
- **Letter spacing:** 0.05em a 0.1em
- **Caja:** UPPERCASE
- **Rol:** hereda el contraste de Ramp entre display apretado y micro-labels aireados.

### Outfit: cuerpo y UI · `--font-sans`
- **Pesos:** 400 (por defecto), 500 (labels de input, nombre en testimonio). 600 como techo, sin usar en esta propuesta.
- **Tamaños:** 14px, 16px, 18px
- **Line height:** 1.43 a 1.55
- **Caja:** sentence case
- **Rol:** todo texto que se lee de corrido. Mínimo 16px en párrafos.

### Geist Mono: precios, distancias, contadores, códigos · `--font-mono`
- **Pesos:** 400
- **Tamaños:** 10px, 14px, 16px, 24px
- **Rasgo obligatorio:** `tabular-nums`
- **Rol:** reemplaza al `"ss01"` de lausanne como detalle tipográfico distintivo. Todo número de la página va en mono.

### Escala tipográfica

| Rol | Familia | Peso | Tamaño | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro | Geist Mono / Bebas | 400 | 10px | 1.5 | 0.05em | `--text-micro` |
| caption | Bebas Neue | 400 | 12px | 1.6 | 0.1em | `--text-caption` |
| small | Outfit | 400 | 14px | 1.5 | 0 | `--text-small` |
| body | Outfit | 400 | 16px | 1.5 | 0 | `--text-body` |
| lead | Outfit | 400 | 18px | 1.55 | 0 | `--text-lead` |
| subheading | Bebas Neue | 400 | 24px | 1.05 | 0.05em | `--text-subheading` |
| heading-sm (H3) | Bebas Neue | 400 | 28px | 1 | 0.05em | `--text-heading-sm` |
| heading (H2 chico) | Anton | 400 | 36px | 0.9 | -0.02em | `--text-heading` |
| heading-lg (H2) | Anton | 400 | 48px | 0.9 | -0.02em | `--text-heading-lg` |
| display-sm (H1 mobile) | Anton | 400 | 56px | 0.85 | -0.03em | `--text-display-sm` |
| display (H1 desktop) | Anton | 400 | 80px | 0.85 | -0.04em | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 156 | 156px | `--spacing-156` |

`--spacing-96` se agrega para el padding vertical estándar de sección del repo.

### Radios

| Elemento | Original | Adaptado | Clase |
|---------|-------|-------|-------|
| tags | 6px | 6px | `rounded-md` |
| botones | 6px | 6px | `rounded-md` |
| inputs | 10px | 8px | `rounded-lg` |
| tarjeta lavado y botón cuadrado | 12px | 12px | `rounded-xl` |
| tarjetas de contenido | 16px | 16px | `rounded-2xl` |

### Sombras

| Nombre | Valor | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset` | `--shadow-subtle` |
| float (opcional) | `0px 24px 48px -24px rgba(9, 80, 246, 0.18)` | `--shadow-float` |

### Layout

- **Ancho máximo de página:** 1280px (`max-w-7xl`)
- **Padding vertical de sección:** 96px estándar, rango 64px (`--section-gap-min`) a 128px (`--section-gap-max`)
- **Padding de tarjeta:** 20px (`--card-padding-min`) a 24px (`--card-padding-max`)
- **Gap entre elementos:** 8px
- **Touch target mínimo:** 44px
- **Gutter mobile:** 16px

## Componentes

### Botón primario (Highlighter)
**Rol:** CTA principal: "Cotizá tu envío", "Pedí tu Express", "Hablá con nosotros". Uno solo por pantalla.

Radio 6px, relleno #FFEC01, texto #0950F6 en Bebas Neue 16px con tracking 0.06em, sin borde, 0px de padding vertical y 20px horizontal, alto mínimo 44px. Hover #FFF12E, pressed #E6D400. Es el único botón cromático del sistema. Contraste 4.94:1.

```html
<button class="inline-flex h-11 items-center rounded-md bg-brand-yellow-500 px-5 font-subheading text-base uppercase tracking-[0.06em] text-brand-blue-900 transition-colors duration-300 ease-out hover:bg-brand-yellow-400 active:bg-brand-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 motion-reduce:transition-none">
  Cotizá tu envío
</button>
```

### Botón outline
**Rol:** CTA secundario: "Mirá los servicios", "Conocé Flex".

Radio 6px, fondo transparente, borde 1px #0950F6, texto #0950F6 en Bebas Neue, 12px de padding horizontal, alto mínimo 44px. Hover: fondo #E6EEFE. Sobre azul: borde `rgba(255,255,255,0.12)` pasa a blanco, texto blanco.

```html
<a href="/servicios" class="inline-flex h-11 items-center rounded-md border border-brand-blue-700 px-3 font-subheading text-base uppercase tracking-[0.06em] text-brand-blue-700 transition-colors duration-300 hover:bg-brand-blue-50 focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">
  Mirá los servicios
</a>
```

### Botón ghost / link
**Rol:** acción terciaria: ítems de nav, "Leé las condiciones", links inline.

Fondo transparente, sin borde, texto #0950F6, radio 6px. Hover: fondo #E6EEFE. Sobre azul: texto blanco, hover `rgba(255,255,255,0.06)`.

### Botón cuadrado de ícono
**Rol:** acción compacta: "+ Agregar parada", toggles del cotizador.

16px de padding en todos los lados, fondo #E6EEFE, radio 12px, ícono #0950F6. Mínimo 44 × 44px.

### Tarjeta de contenido
**Rol:** superficie principal para servicios, testimonios y bloques de detalle.

Radio 16px, fondo blanco, borde 1px #BACEFD, sin sombra, 20 a 24px de padding. Hover: borde #8EAFFB. El borde reemplaza a la sombra como primitiva de elevación.

```html
<article class="rounded-2xl border border-brand-blue-100 bg-white p-5 transition-colors duration-300 hover:border-brand-blue-200 motion-reduce:transition-none">
  <p class="font-subheading text-xs uppercase tracking-[0.1em] text-brand-blue-700">Servicio</p>
  <h3 class="mt-2 font-subheading text-[28px] uppercase leading-none tracking-[0.05em] text-brand-blue-700">LowCost</h3>
  <p class="mt-3 font-sans text-base leading-normal text-brand-blue-700">Reparto programado en el día, sin franja. Pedí antes de las 13:00 y se entrega antes de las 19:00.</p>
  <p class="mt-4 font-mono text-2xl tabular-nums text-brand-blue-700">$0.000</p>
</article>
```

### Tarjeta lavado
**Rol:** callout de dato o condición del servicio.

Radio 12px, fondo #E6EEFE, sin borde, wrapper de 1px de padding que deja un gap hairline antes del contenido. Para notas como "Sin recargo hasta 5 kg o 40 × 40 cm".

### Input del cotizador (input compuesto)
**Rol:** captura del hero: dirección de destino o código de seguimiento.

Radio 8px, fondo blanco, borde 1px #628FF9, texto #0950F6 en Outfit 16px, 24px de padding izquierdo y 16px derecho, alto 44px. Se apoya al ras del botón primario para formar un CTA compuesto. Error: borde #EF4444 y mensaje #DC2626.

```html
<form class="flex max-w-xl flex-col gap-2 sm:flex-row sm:gap-0">
  <label for="destino" class="sr-only">Dirección de destino</label>
  <input id="destino" type="text" placeholder="Dirección de destino en Mar del Plata"
    class="h-11 flex-1 rounded-lg border border-brand-blue-300 bg-white pl-6 pr-4 font-sans text-base text-brand-blue-700 placeholder:text-brand-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2 sm:rounded-r-none" />
  <button class="h-11 rounded-md bg-brand-yellow-500 px-5 font-subheading text-base uppercase tracking-[0.06em] text-brand-blue-900 hover:bg-brand-yellow-400 sm:rounded-l-none">Cotizá</button>
</form>
```

### Tarjeta de testimonio
**Rol:** cita de cliente con atribución.

Radio 16px, fondo blanco, borde 1px #BACEFD, 20px de padding. Badge cuadrado (inicial o foto real con permiso), nombre en Outfit 16px 500 y rubro en Outfit 14px, cita en Outfit 16px #0950F6. Filas con scroll horizontal. Nombre como placeholder `[Nombre del cliente, con permiso]` hasta tener autorización; nunca clientes con volumen ni competidores.

### Live Counter Ticker (banda de contador)
**Rol:** franja de datos de ancho completo.

Banda #0950F6 de ancho completo, etiquetas en Bebas Neue 12px uppercase con tracking 0.1em en blanco al 85 %, valores en Geist Mono 14px `tabular-nums` en blanco. Separadores `rgba(255,255,255,0.12)`. **Los valores son placeholders `[métrica]`**: no se muestran cifras inventadas. Se conectan a datos reales solo cuando existan y el dueño los apruebe. Mientras tanto, la banda puede mostrar condiciones operativas verificadas en lugar de números.

El scroll horizontal y el pulso de opacidad se desactivan con `prefers-reduced-motion`: la banda queda estática y los ítems que no entran se envuelven.

```html
<section aria-label="Datos del servicio" class="w-full bg-brand-blue-700">
  <ul class="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-2 px-4 py-4 motion-safe:animate-[ticker_40s_linear_infinite]">
    <li class="flex items-baseline gap-3 border-r border-white/12 pr-8">
      <span class="font-subheading text-xs uppercase tracking-[0.1em] text-white/85">Envíos del mes</span>
      <span class="font-mono text-sm tabular-nums text-white">[métrica]</span>
    </li>
    <li class="flex items-baseline gap-3 border-r border-white/12 pr-8">
      <span class="font-subheading text-xs uppercase tracking-[0.1em] text-white/85">Corte Express</span>
      <span class="font-mono text-sm tabular-nums text-white">15:00 hs</span>
    </li>
    <li class="flex items-baseline gap-3">
      <span class="font-subheading text-xs uppercase tracking-[0.1em] text-white/85">Corte LowCost</span>
      <span class="font-mono text-sm tabular-nums text-white">13:00 hs</span>
    </li>
  </ul>
</section>
```

### Header sticky
**Rol:** navegación principal.

Alto total 104px: barra de anuncio de 40px más fila de nav de 64px. Fondo #0950F6, texto blanco en Bebas Neue 16px, hairline inferior `rgba(255,255,255,0.12)`, brillo interno `--shadow-subtle` y `backdrop-blur` de 12px al hacer scroll. Elementos: logo, Servicios, Tarifas, Empresas, Preguntas frecuentes, Contacto, "Seguí tu envío" (ghost) y "Cotizá tu envío". Para no tener dos CTA amarillos en pantalla, el botón del header es outline blanco mientras el input compuesto del hero está visible, y pasa a relleno #FFEC01 cuando el hero sale de pantalla.

### Barra de anuncio
**Rol:** franja superior informativa.

40px de alto, fondo blanco, hairline inferior #BACEFD, Outfit 14px centrado, link inline "Mirá cómo funciona". Cerrable con ícono (botón de 44 × 44px). Ejemplo: "Express: elegí tu franja de 3 hs. Pedilo con 2 hs de anticipación, hasta las 15:00 hs."

### Marco de producto del hero
**Rol:** visual principal del hero y de secciones de servicio.

Marco de browser chrome con radio 16px, borde 1px #BACEFD y tres puntos #BACEFD. Adentro, paneles blancos planos que muestran el cotizador o el seguimiento de un envío: origen, destino, distancia en Geist Mono (`[km]`), precio `$0.000`, estado con badge #FFFAB8. Incluye un botón amarillo interno solo si el CTA del hero no está visible al mismo tiempo. Sombra `--shadow-float` opcional si el marco se superpone a una banda azul.

### Celda de grilla de servicios (ex grilla de logos)
**Rol:** bloque de prueba de alcance que reemplaza la grilla de logos de clientes.

Fondo transparente, bordes 1px #BACEFD formando celdas, nombre del servicio en Bebas Neue 24px y una línea en Outfit 14px. Siete columnas en desktop: Express, LowCost, Mercado Envíos Flex, E-commerce 24HS, Depósito y Fulfillment, Contrareembolso y, en la última, una tarjeta de cita azul #0950F6 con texto blanco que rompe el ritmo (la vieja "7 mo"). La tarjeta de cita lleva una frase del dueño, por ejemplo "Preferimos decir que no podemos, a fallar.", nunca una cifra inventada. En mobile, 2 columnas.

## Do's and Don'ts

### Do
- Usá Anton y Bebas Neue en peso 400 únicamente; la jerarquía sale de tamaño, tracking y familia.
- Usá #FFEC01 solo en el CTA primario, estado activo y precio destacado sobre azul; nunca como lavado de fondo ni acento decorativo.
- Resolvé la elevación con bordes de 1px #BACEFD sobre tarjetas blancas; evitá box-shadow salvo el brillo interno del header.
- Titulá en Anton 80px / 56px / 48px con line-height 0.85 a 0.9 y tracking negativo.
- Aplicá tracking positivo de 0.1em en labels Bebas de 12px y en las etiquetas del contador.
- Usá 6px en botones y tags, 8px en inputs, 12px en tarjeta lavado y 16px en tarjeta de contenido.
- Poné todo número (precio, km, hora, código) en Geist Mono con `tabular-nums`.
- Leé precios de `src/lib/pricing.ts` y `src/lib/promises.ts`; en maquetas usá `$0.000` o `[precio]`.

### Don't
- No agregues otros acentos cromáticos: el sistema depende de una sola señal amarilla sobre azul y blanco.
- No uses negrita en Anton ni en Bebas, ni pesos por encima de 500 en Outfit dentro de esta propuesta.
- No pongas sombra en tarjetas, modales ni paneles: usá el hairline.
- No uses ningún azul más oscuro que #0950F6, ni para dar variación tonal: aclarás a #3570F8.
- No bajes la opacidad del texto azul sobre blanco para hacer texto secundario.
- No centres cuerpo ni titulares: el layout va alineado a la izquierda dentro de un contenedor centrado.
- No agregues gradientes decorativos ni ilustración de stock.
- No uses radios fuera de 6 / 8 / 12 / 16px ni pills en elementos de UI.
- No muestres cifras, clientes o tiempos de entrega que el dueño no confirmó.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|-------|------|-------|---------|
| 1 | Lienzo | `#FFFFFF` | Fondo de página. El carácter de papel sale del aire y los hairlines |
| 2 | Tarjeta | `#FFFFFF` | Tarjeta y contenido; se separa del lienzo por el borde #BACEFD |
| 3 | Lavado | `#E6EEFE` | Superficie secundaria, hover de link, callouts |
| 4 | Invertida | `#0950F6` | Header, footer, banda del contador, tarjeta de cita |
| 4b | Invertida elevada | `#3570F8` | Capa elevada dentro del azul, hover de fondos azules |
| 5 | Acción | `#FFEC01` | CTA, estado activo, precio destacado |

**Jerarquía dentro del tema invertido azul.** No hay un fondo más oscuro que #0950F6, así que la profundidad se construye hacia arriba: (1) banda #0950F6 como base; (2) paneles de vidrio `rgba(255,255,255,0.06)` con borde `rgba(255,255,255,0.12)` para agrupar; (3) #3570F8 para la capa elevada o el hover, con texto blanco al 100 % y solo en tamaños ≥24px si el texto no es blanco pleno; (4) tarjeta blanca con texto azul como máximo contraste; (5) amarillo solo para la acción.

## Elevación

La elevación se expresa con hairlines de 1px #BACEFD y con cambios de superficie (blanco, lavado #E6EEFE, invertida #0950F6), no con sombras. La única sombra por defecto es el brillo interno blanco del header, una pista de vidrio esmerilado. `--shadow-float`, teñida de azul, queda como opción para el marco de producto del hero. Esta planitud sostiene el tono editorial y evita ruido visual en superficies densas.

## Imágenes

Ramp casi no usa fotografía: su peso visual está en capturas de producto y tipografía. La adaptación lo conserva y suma dos fuentes permitidas:
- **Capturas de producto:** el cotizador, el seguimiento y la vista de un pedido en marcos de browser chrome, con precios como `$0.000`.
- **Fotos reales** de repartidores y motos de DosRuedas en Mar del Plata (costanera, calles del centro, puerta de un comercio local) con tinte azul #0950F6 en modo multiply. Reemplaza la imagen neón como "momento de marca" a ancho completo.
- **Dioramas 3D isométricos** en clay mate (moto, caja, depósito) en blanco y tintes azules, como alternativa cuando no hay foto.

Iconografía rellena, monocroma (#0950F6 sobre blanco, blanco sobre azul), chica y sin ilustración de personajes. Nada de stock genérico, nada de caras de stock en testimonios. Densidad dominada por texto.

## Layout

Lienzo blanco de ancho completo con columnas centradas de hasta 1280px y gutter de 16px en mobile. El hero es una declaración tipográfica alineada a la izquierda (Anton 80px en desktop, 56px en mobile, bajada en Outfit 18px, input compuesto de cotización) sobre un marco de producto que sangra hacia el borde derecho. El ritmo alterna bandas editoriales blancas (96px de padding vertical, rango 64 a 128px) con una banda azul de ancho completo (el contador). Contenido siempre alineado a la izquierda; bloques de servicio en pares de 2 columnas, texto a la izquierda y visual a la derecha. Grillas: 7 columnas de servicios más cita, 4 columnas de testimonios con scroll horizontal y franjas de datos apiladas. Header sticky azul con barra de anuncio blanca de 40px arriba. La sensación general es de publicación: mucho aire, columnas tipográficas ajustadas e interrupciones de ancho completo en lugar de grillas de tarjetas modulares. Sin scroll horizontal de página en mobile.

## Agent Prompt Guide

Referencia rápida de color:
- texto: #0950F6
- fondo: #FFFFFF
- tarjeta: #FFFFFF con borde #BACEFD
- lavado: #E6EEFE
- borde de input: #628FF9
- texto secundario: #0950F6 al 100 % (sobre azul, blanco al 85 %)
- acción primaria: #FFEC01 con texto #0950F6

Prompts de ejemplo:
1. Hero: titular en Anton 80px peso 400, UPPERCASE, #0950F6, line-height 0.85, tracking -0.04em, sobre lienzo #FFFFFF: "Tu envío en moto, en Mar del Plata". Bajada en Outfit 18px #0950F6: "Express con franja de 3 hs a elección, LowCost en el día y Flex para tu tienda online." CTA compuesto: input blanco (radio 8px, borde 1px #628FF9, 24px de padding izquierdo, placeholder "Dirección de destino") al ras de un botón primario #FFEC01 con texto #0950F6 en Bebas Neue, radio 6px, 20px de padding horizontal, 44px de alto: "Cotizá".
2. Tarjeta de servicio: fondo #FFFFFF, borde 1px #BACEFD, radio 16px, 20px de padding. Eyebrow Bebas 12px "Servicio", H3 Bebas 28px "Express", cuerpo Outfit 16px #0950F6 "Elegí una franja de 3 hs. Pedilo con 2 hs de anticipación, hasta las 15:00 hs.", precio en Geist Mono 24px tabular-nums "$0.000". Sin sombra.
3. Header sticky: fondo #0950F6, hairline inferior rgba(255,255,255,0.12), 104px de alto total (barra de anuncio blanca de 40px más fila de 64px). Logo a la izquierda, links en Bebas 16px blanco al centro, "Seguí tu envío" ghost y "Cotizá tu envío" a la derecha.
4. Banda de contador: #0950F6 de ancho completo, etiquetas Bebas 12px uppercase blanco al 85 %, valores Geist Mono 14px blanco con `[métrica]` como placeholder. Estática con `prefers-reduced-motion`.
5. Botón outline: fondo transparente, borde 1px #0950F6, texto #0950F6 en Bebas Neue, radio 6px, 12px de padding horizontal, 44px de alto: "Mirá los servicios".

## Decisiones de diseño distintivas

1. **Tipografía de un solo peso:** Anton y Bebas en 400, igual que el lausanne original. Los titulares de 80px con line-height 0.85 se leen como títulos de tapa de diario, no como headers de SaaS.
2. **Regla del acento único:** #FFEC01 aparece solo donde se mueve un envío. El resto de la página es un estudio en azul y blanco. Así cada amarillo se lee como "acá se actúa".
3. **Hairlines en lugar de sombras:** las tarjetas usan 1px #BACEFD en vez de box-shadow. La única sombra es el brillo interno del header.
4. **Tracking negativo en display, positivo en caption:** Anton apretado (-0.04em) contra labels Bebas abiertos (0.1em). El contraste entre titular denso y micro-label aireado define la voz.
5. **Números en mono:** Geist Mono con `tabular-nums` ocupa el lugar del `"ss01"` de lausanne como detalle tipográfico de carácter. Precios, km y horarios se alinean en columna.

## Filosofía de motion

Motion utilitario y moderado: 300 a 400 ms con ease-out. Las transiciones apuntan a `color`, `background-color`, `border-color`, `fill` y `stroke`, no a transform ni opacidad teatral. La animación señala cambios de estado (hover de relleno, subrayado de link, cambio de valor), nunca ornamento. Los backdrop blur (25px en overlays, 12px en el header, 8px en chips) dan la pista de vidrio esmerilado.

**prefers-reduced-motion es obligatorio:** con `motion-reduce:` o `useReducedMotion()` las duraciones pasan a 0, el ticker deja de desplazarse y queda estático, y el pulso de opacidad de los valores se elimina. Todo gate de GSAP respeta la misma preferencia.

## Referencia original

- **Ramp** (ramp.com): sirve para DosRuedas porque ya es un sistema monocromo con un solo acento amarillo reservado para la acción, que es exactamente la regla de marca; la adaptación cambia tinta y tipografía sin tocar la estructura.

## Quick Start

### CSS Custom Properties

```css
/* Propuesta Ramp adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
:root {
  /* Colores */
  --color-highlighter-yellow: #FFEC01;
  --color-highlighter-yellow-hover: #FFF12E;
  --color-highlighter-yellow-pressed: #E6D400;
  --color-highlighter-yellow-tint: #FFFAB8;
  --color-ink: #0950F6;
  --color-obsidian: #0950F6;
  --color-obsidian-raised: #3570F8;
  --color-paper: #FFFFFF;
  --color-bone: #E6EEFE;
  --color-ash: #0950F6;
  --color-ash-on-blue: rgba(255, 255, 255, 0.85);
  --color-hairline: #BACEFD;
  --color-hairline-hover: #8EAFFB;
  --color-input-border: #628FF9;
  --color-smoke: #E6EEFE;

  /* Tipografía: familias */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Tipografía: escala */
  --text-micro: 10px;
  --text-caption: 12px;
  --leading-caption: 1.6;
  --tracking-caption: 0.1em;
  --text-small: 14px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-lead: 18px;
  --text-subheading: 24px;
  --text-heading-sm: 28px;
  --text-heading: 36px;
  --text-heading-lg: 48px;
  --text-display-sm: 56px;
  --text-display: 80px;
  --leading-display: 0.85;
  --tracking-display: -0.04em;

  /* Espaciado y layout */
  --spacing-unit: 4px;
  --page-max-width: 1280px;
  --section-gap: 96px;
  --section-gap-min: 64px;
  --section-gap-max: 128px;
  --card-padding-min: 20px;
  --card-padding-max: 24px;
  --element-gap: 8px;

  /* Radios */
  --radius-tags: 6px;
  --radius-buttons: 6px;
  --radius-inputs: 8px;
  --radius-wash: 12px;
  --radius-cards: 16px;

  /* Sombras */
  --shadow-subtle: rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset;
  --shadow-float: 0px 24px 48px -24px rgba(9, 80, 246, 0.18);

  /* Superficies */
  --surface-canvas: #FFFFFF;
  --surface-card: #FFFFFF;
  --surface-wash: #E6EEFE;
  --surface-inverted: #0950F6;
  --surface-inverted-raised: #3570F8;
  --surface-action: #FFEC01;
}
```

La versión completa está en `variables.css`.

### Tailwind v4

```css
/* Propuesta Ramp adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
@theme {
  --color-highlighter-yellow: #FFEC01;
  --color-ink: #0950F6;
  --color-obsidian: #0950F6;
  --color-obsidian-raised: #3570F8;
  --color-paper: #FFFFFF;
  --color-bone: #E6EEFE;
  --color-hairline: #BACEFD;
  --color-input-border: #628FF9;

  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  --text-display: 80px;
  --text-display--line-height: 0.85;
  --text-display--letter-spacing: -0.04em;

  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;

  --shadow-subtle: rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset;
}
```

La versión completa está en `theme.css`. En el repo, preferí las clases existentes (`bg-brand-blue-700`, `text-brand-blue-900`, `bg-brand-yellow-500`, `border-brand-blue-100`, `bg-brand-blue-50`, `font-display`, `font-subheading`, `font-mono tabular-nums`, `rounded-xl`) antes que estos alias.

## Checklist de marca

- [ ] Ningún hex fuera de la paleta: #0950F6, escala brand-blue (#3570F8, #628FF9, #8EAFFB, #BACEFD, #E6EEFE), escala amarilla y #FFFFFF. Errores solo en formularios.
- [ ] Ningún fondo ni texto más oscuro que #0950F6; la variación tonal en azul se hace aclarando a #3570F8.
- [ ] Un solo CTA amarillo por pantalla y amarillo ≤15 % de la superficie; texto #0950F6 sobre amarillo.
- [ ] Texto sobre blanco en #0950F6 al 100 %; sobre azul, blanco al 85 % como mínimo.
- [ ] Anton y Bebas Neue solo en peso 400 y UPPERCASE; Outfit ≥16px en párrafos; todo número en Geist Mono `tabular-nums`.
- [ ] Tarjetas sin sombra, con borde 1px #BACEFD; radios solo 6, 8, 12 o 16px.
- [ ] Touch targets ≥44px y foco visible `ring-2` `brand-blue-500` con offset 2px.
- [ ] `prefers-reduced-motion` desactiva el ticker, el pulso de valores y toda transición.
- [ ] Banda de contador sin cifras inventadas (`[métrica]`) y precios como `$0.000` o leídos de `pricing.ts` / `promises.ts`.
- [ ] Copy en voseo, sin duraciones de entrega, sin "agrupado", sin Factura A ni C, sin rendición inmediata, sin clientes con nombre ni competidores.
