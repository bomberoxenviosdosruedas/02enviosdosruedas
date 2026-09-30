# figma adaptado a Envíos DosRuedas: Style Reference
> Pared de galería blanca, un collage de motos y paquetes en azul, y una sola señal amarilla que dice "acá se cotiza".

**Theme:** light (con bandas en tema invertido azul para header de campaña, franja de cotización y footer)

Las medidas de origen están normalizadas; los roles y recomendaciones son interpretaciones. Los ejemplos HTML son reconstrucciones con clases del repo, no componentes de producción. Este documento es una propuesta: el `@theme` de producción vive en `src/app/globals.css` y, ante cualquier contradicción, manda `DESIGN.md` de la raíz.

La propuesta Figma funciona como un lienzo blanco puro: una interfaz casi acromática donde el texto, las superficies blancas y un único acento hacen todo el trabajo. Adaptada a DosRuedas, el "negro" pasa a ser el azul institucional `#0950F6`, el acento índigo pasa a ser el amarillo señal `#FFEC01` y el collage multicolor pasa a ser un collage monocromo azul con una chispa amarilla. Se conserva la filosofía: la interfaz se corre del medio para que el contenido (acá: fotos reales de repartidores, motos y paquetes en Mar del Plata) sea la imagen. Titulares grandes alineados a la izquierda, controles en píldora, una sola sombra suave para la tarjeta flotante del hero y un ritmo que alterna bandas de aire amplio con grillas compactas: museo y taller al mismo tiempo.

## Mapeo de adaptación

| Token original | Hex original | Token adaptado | Hex DosRuedas | Por qué |
|---|---|---|---|---|
| `--color-ink-black` | `#000000` | `--color-ink` (brand-blue-700) | `#0950F6` | Regla 1: todo negro va al azul primario. Texto de cuerpo, títulos, trazos de ícono y bordes de alto contraste. 6.02:1 sobre blanco. |
| `--color-paper-white` | `#ffffff` | `--color-paper` (blanco) | `#FFFFFF` | Lienzo y tarjetas. Sin cambios. |
| `--color-soft-mist` | `#e2e2e2` | `--color-mist` (brand-blue-50) | `#E6EEFE` | Regla 3: el gris de panel secundario pasa al tinte azul más claro. Se distingue del canvas blanco, igual que en el original. |
| `--color-graphite` | `#595959` | `--color-ink-muted` (brand-blue-700) | `#0950F6` | Regla 2: el texto secundario no baja de opacidad sobre blanco. La jerarquía del metadato sale de tamaño (14 px vs 18 px), de familia (Geist Mono o Bebas) y de tracking. |
| `--color-electric-indigo` | `#4d49fc` | `--color-signal` (brand-yellow-500) | `#FFEC01` | Regla 4: el único color saturado de acción pasa a amarillo señal, con texto `#0950F6` encima (4.94:1). Conserva la regla "un solo CTA encendido por viewport". |
| (hover del acento) | `#4d49fc` | `--color-signal-hover` (brand-yellow-400) | `#FFF12E` | Hover de CTA: se aclara. |
| (pressed del acento) | `#4d49fc` | `--color-signal-pressed` (brand-yellow-600) | `#E6D400` | Pressed de CTA. |
| `--color-figma-cyan` | `#00b6ff` | `--color-collage-blue-bright` (brand-blue-400) | `#3570F8` | Regla 5, colapso decorativo. El cian del logo era un marcador de marca; pasa al azul medio, que funciona como "tesela brillante" del collage y como color de ícono. |
| `--color-figma-green` | `#24cb71` | `--color-collage-blue-soft` (brand-blue-300) | `#628FF9` | Regla 5, colapso decorativo. Verde prohibido. Pasa al azul 300: otra "tinta" del collage, un paso más claro que el cian adaptado. |
| `--color-figma-orange` | `#ff7237` | `--color-collage-spark` (brand-yellow-500) | `#FFEC01` | Regla 5, colapso de energía. El naranja era el color cálido y enérgico del logo; va a la escala amarilla. En el collage aparece una sola vez (sticker o tesela), dentro del 15 % de superficie. |
| `--color-lime-wash` | `#e4ff97` | `--color-wash-yellow` (brand-yellow-100) | `#FFFAB8` | Regla 5, colapso de energía. El lima era el pastel "juguetón" de tarjetas de comunidad; pasa al tinte amarillo claro. Es el único pastel cálido que sobrevive. |
| `--color-lilac` | `#c4baff` | `--color-wash-blue-100` (brand-blue-100) | `#BACEFD` | Regla 5, colapso decorativo. Violeta prohibido. El lila y el brand-blue-100 tienen una luminosidad casi igual, así que el collage conserva su valor tonal. |
| `--color-blush` | `#ffc9c1` | `--color-wash-blue-200` (brand-blue-200) | `#8EAFFB` | Regla 5, colapso decorativo. Rosa prohibido. Pasa a un tinte azul un paso más saturado que el lila adaptado, para que dos pasteles vecinos del collage no queden iguales. |
| `--color-aqua-mist` | `#c7f8fb` | `--color-wash-blue-50` (brand-blue-50) | `#E6EEFE` | Regla 5, colapso decorativo. El aqua era el pastel más frío y claro; va al azul más claro. |
| `--color-earworm-teal` | `#33dfdf` | `--color-ring-blue` (brand-blue-400) | `#3570F8` | Regla 5, colapso decorativo. Teal prohibido. El anillo decorativo usa ahora azul 700 hacia azul 400 (regla 6: el gradiente va hacia más claro). |
| `--color-mustard` | `#b98e01` | `--color-ring-spark` (brand-yellow-500) | `#FFEC01` | Regla 5, colapso de energía. La mostaza oscura no existe en la marca (nada más oscuro que el amarillo 600); pasa al amarillo señal como un solo segmento corto del anillo. |
| `--surface-soft-panel` | `#e2e2e2` | `--surface-muted` (brand-blue-50) | `#E6EEFE` | Mismo criterio que soft-mist. |
| `--shadow-xl` | `rgba(0,0,0,0.1)` | `--shadow-float` | `rgba(9,80,246,0.12)` | Regla 7: sombra teñida de azul, misma geometría (24 px 70 px). |
| (borde de input implícito) | `#000000` | `--color-border-input` (brand-blue-300) | `#628FF9` | Regla 3: borde de input y hover de borde. Nunca texto. |
| (hairline implícito) | `#000000` | `--color-border` (brand-blue-100) | `#BACEFD` | Divisores y bordes estructurales. |
| (hover de tarjeta) | n/a | `--color-border-hover` (brand-blue-200) | `#8EAFFB` | Hover de borde de tarjeta. |

### Cómo se conserva la sensación "collage" sin multicolor

El collage de Figma no funciona por el tono (verde contra violeta contra naranja): funciona por **variedad de valor, de escala, de rotación y de recorte**. La adaptación reemplaza "multicolor" por "multivalor":

- **Seis valores de azul como seis tintas.** Las teselas del collage alternan `#0950F6` sólido, `#3570F8`, `#628FF9`, `#8EAFFB`, `#BACEFD`, `#E6EEFE` y blanco. Es una escala de 7 pasos de luminosidad: a la distancia se lee tan variada como el collage original, porque el ojo separa planos por contraste de valor antes que por tono.
- **Fotos en duotono azul.** Las imágenes reales (repartidor en la costanera, moto estacionada, paquete en mano, depósito) se tiñen con multiply sobre `#0950F6` o `#3570F8`. Cada foto trae su propia textura y su propia intensidad, y eso reemplaza la saturación del trabajo de la comunidad.
- **Una sola chispa amarilla.** Una tesela o un sticker `#FFEC01` (por ejemplo, un badge "CORTE 15:00 HS" en Bebas) y como mucho una tesela `#FFFAB8`. El amarillo hace lo que hacía el naranja: el punto caliente que el ojo busca primero. Nunca más de una tesela amarilla fuerte por collage.
- **Caos controlado de la composición.** Se conservan rotaciones de -6° a +6°, superposiciones, recortes desparejos y tarjetas de distinto tamaño. Los radios del collage varían dentro de la escala del repo (6, 8, 16, 24 px) para mantener la "falta de radio uniforme" del original.
- **Textura tipográfica como tesela.** Algunas teselas no son imagen: son una palabra en Anton (`EXPRESS`, `FLEX`, `24HS`) o una cifra en Geist Mono (`$0.000`, `[km]`), sobre azul o blanco. Suman ritmo sin sumar color.

## Qué se conserva y qué se descarta

**Se conserva**
- El lienzo blanco dominante y la idea de galería: la interfaz queda casi monocroma y el contenido pone la imagen.
- La disciplina de un solo acento de acción por viewport (antes índigo, ahora amarillo).
- La tarjeta flotante del hero sobre el collage, con una sola sombra suave y sin borde.
- El sistema de radios de cuatro niveles (fino, control, tarjeta, píldora), mapeado a 6 / 8 / 16 / full.
- Píldora para CTA y chips; 8 px para botones fantasma e inputs; 16 px para tarjetas.
- La escala de spacing base 4 completa (4 a 180 px).
- La grilla de 4 columnas con 24 px de gap y tarjetas sin sombra ni borde.
- El ritmo de página: un collage dramático, una vitrina de producto tranquila, una grilla.
- La tipografía mono con tracking positivo como "anotación" (ahora Geist Mono, también en precios y distancias).
- Titulares alineados a la izquierda, sin subtítulo por defecto.

**Se descarta**
- Toda la paleta multicolor (cian, verde, naranja, lila, blush, aqua, lima, teal, mostaza) como tono: se colapsa a tintes azules y escala amarilla.
- El índigo como color de acción.
- El negro y el gris grafito como color de texto.
- figmaSans y sus pesos ultralivianos (320 a 340) y pesados (520, 700) en display: reemplazados por Anton 400 y Bebas Neue 400.
- figmaMono: reemplazada por Geist Mono con `tabular-nums`.
- El radio de 2 px (sube a 6 px, el mínimo del repo) y la píldora de 50 px (pasa a `9999px`).
- La sombra negra `rgba(0,0,0,…)`.
- Contenido de comunidad y logo de cuatro colores: se reemplazan por fotos propias y el logo real de DosRuedas.

## Fricciones con DESIGN.md del repo

1. **El titular "susurrado" versus Anton.** La firma de Figma es un display en peso 320: autoridad por contención. Anton solo existe en 400 y es pesada y condensada. Resolución: la contención pasa del peso a la **composición**. El titular va solo, alineado a la izquierda, sin subtítulo, con mucho aire alrededor, en un tamaño moderado para Anton (64 px en sección, no 96 px) y en `#0950F6`, no en amarillo. La tarjeta flotante sigue siendo blanca y silenciosa: la fuerza de Anton se equilibra con el vacío.
2. **Colapso cromático total.** La propuesta tiene nueve colores decorativos y el repo admite tres. Resolución: mapeo uno a uno documentado arriba, "multivalor" en lugar de multicolor, y regla dura de una sola tesela amarilla fuerte por collage para no pasar el 15 % de superficie amarilla.
3. **El acento pasa de oscuro a claro.** El índigo con texto blanco se leía como "botón encendido" por saturación. El amarillo con texto azul se lee por luminosidad y por ser el único cálido de la página. Funciona mejor sobre bandas azules que sobre blanco; sobre blanco el CTA amarillo no lleva borde y se apoya en la ausencia total de otro color cálido en el viewport (por eso la regla de una sola tesela amarilla en el collage es dura: si hubiera dos, el CTA compite). Nunca texto amarillo sobre blanco.
4. **Texto secundario sin gris.** Figma usa grafito para el nombre del creador y metadatos. En DosRuedas no hay gris: el metadato va en `#0950F6` al 100 %, más chico (14 px) y en Geist Mono o Bebas con tracking abierto.
5. **Touch targets.** El botón fantasma y la píldora del header miden unos 40 px de alto en el original (padding 8 px 18 px). Se suben a `min-height: 44px`.
6. **Contenedor.** 1200 px pasa a 1280 px (`max-w-7xl`); la banda de sección de 80 a 120 px se fija en 96 px, con 80 y 120 como mínimo y máximo documentados.
7. **Motion.** El original no define motion. Se agrega: el collage puede tener un parallax leve y una entrada escalonada, siempre detrás de `useReducedMotion()`; con reducción activa, el collage aparece estático y completo.

## Tokens: Colores

| Nombre | Valor | Token | Rol |
|---|---|---|---|
| Ink (azul institucional) | `#0950F6` | `--color-ink` | Texto de cuerpo, títulos, trazos de ícono, bordes de alto contraste, fondo de header de campaña y footer. |
| Paper | `#FFFFFF` | `--color-paper` | Lienzo de página y tarjetas. Superficie dominante. |
| Mist | `#E6EEFE` | `--color-mist` | Panel secundario, lavado de tarjeta, skeleton. Un paso sobre el blanco. |
| Ink muted | `#0950F6` | `--color-ink-muted` | Metadatos. Mismo color que ink: la jerarquía sale de tamaño y familia. |
| Signal | `#FFEC01` | `--color-signal` | CTA primario, indicador activo de nav, precio destacado sobre azul. Un solo CTA por viewport. |
| Signal hover | `#FFF12E` | `--color-signal-hover` | Hover del CTA. |
| Signal pressed | `#E6D400` | `--color-signal-pressed` | Pressed del CTA. |
| Collage blue bright | `#3570F8` | `--color-collage-blue-bright` | Tesela de collage, ícono, hover de fondo azul, texto grande ≥24 px. |
| Collage blue soft | `#628FF9` | `--color-collage-blue-soft` | Tesela de collage, trazo secundario. |
| Collage spark | `#FFEC01` | `--color-collage-spark` | La única tesela amarilla fuerte del collage. |
| Wash yellow | `#FFFAB8` | `--color-wash-yellow` | Tesela pastel cálida, fondo de badge. |
| Wash blue 100 | `#BACEFD` | `--color-wash-blue-100` | Tesela pastel, fondo de chip de categoría. |
| Wash blue 200 | `#8EAFFB` | `--color-wash-blue-200` | Tesela pastel, hover de borde de tarjeta. |
| Wash blue 50 | `#E6EEFE` | `--color-wash-blue-50` | Tesela pastel más clara. |
| Ring blue | `#3570F8` | `--color-ring-blue` | Barrido del anillo decorativo. |
| Ring spark | `#FFEC01` | `--color-ring-spark` | Segmento corto amarillo del anillo. |
| Border | `#BACEFD` | `--color-border` | Hairlines y divisores. |
| Border input | `#628FF9` | `--color-border-input` | Borde de input, hover de borde. |
| Border hover | `#8EAFFB` | `--color-border-hover` | Hover de borde de tarjeta. |
| Error | `#EF4444` / `#DC2626` | `--color-error` / `--color-error-text` | Solo formularios: borde e ícono / texto. |

## Tokens: Tipografía

### Anton: display y títulos H1/H2 · `--font-display`
- **Reemplaza a:** figmaSans en pesos 320 a 400 para display.
- **Peso:** 400 único.
- **Tamaños:** 44 (mobile), 64, 96.
- **Line height:** 0.88 a 0.9.
- **Letter spacing:** -0.03em en 96 px, -0.02em en 64 px y 44 px.
- **Rol:** titular del hero y de sección, siempre UPPERCASE, en `#0950F6` sobre blanco o blanco sobre `#0950F6`. La contención de Figma se traduce en aire, no en peso.

### Bebas Neue: H3, labels, nav, botones, eyebrows · `--font-subheading`
- **Reemplaza a:** figmaSans 450 a 700 en labels, botones y títulos de 24 px.
- **Peso:** 400 único.
- **Tamaños:** 14, 16, 18, 28.
- **Line height:** 1.0 a 1.1.
- **Letter spacing:** 0.05em a 0.1em.
- **Rol:** UPPERCASE siempre. Nav, texto de botones, títulos de tarjeta, eyebrows sobre titulares.

### Outfit: cuerpo y UI · `--font-sans`
- **Reemplaza a:** figmaSans 320 a 480 en cuerpo.
- **Pesos:** 400, 500, 600.
- **Tamaños:** 16, 18 (14 solo para metadato no esencial).
- **Line height:** 1.5 a 1.6.
- **Letter spacing:** 0 (el tracking negativo de figmaSans no se replica en Outfit).
- **Rol:** párrafos, descripciones de servicio, inputs, sentence case.

### Geist Mono: anotaciones, precios, distancias, códigos · `--font-mono`
- **Reemplaza a:** figmaMono.
- **Peso:** 400.
- **Tamaños:** 12, 16, 24 (precio destacado).
- **Line height:** 1.0 a 1.3.
- **Letter spacing:** +0.03em a +0.05em (se conserva el tracking positivo del original).
- **Rol:** con `tabular-nums` siempre. Precios (`$0.000`), km, franjas horarias (`15:00 HS`), códigos de seguimiento, anotaciones técnicas en el collage.

### Escala tipográfica (px)

| Rol | Familia | Peso | Tamaño | Line height | Letter spacing | Token |
|---|---|---|---|---|---|---|
| caption | Geist Mono | 400 | 12px | 1.3 | 0.05em (0.6px) | `--text-caption` |
| body-sm | Outfit | 400 | 16px | 1.5 | 0 | `--text-body-sm` |
| body | Outfit | 400 | 18px | 1.55 | 0 | `--text-body` |
| label | Bebas Neue | 400 | 16px | 1.0 | 0.08em (1.28px) | `--text-label` |
| heading | Bebas Neue | 400 | 28px | 1.1 | 0.05em (1.4px) | `--text-heading` |
| heading-lg | Anton | 400 | 64px | 0.9 | -0.02em (-1.28px) | `--text-heading-lg` |
| display | Anton | 400 | 96px | 0.88 | -0.03em (-2.88px) | `--text-display` |
| display (mobile) | Anton | 400 | 56px | 0.9 | -0.02em (-1.12px) | `--text-display-mobile` |
| heading-lg (mobile) | Anton | 400 | 44px | 0.9 | -0.02em (-0.88px) | `--text-heading-lg-mobile` |

Anton es condensada: a igual tamaño ocupa cerca de 60 % del ancho de figmaSans, así que el display sube de 72 a 96 px y el heading-lg de 56 a 64 px para ocupar un ancho de línea similar. El heading de 24 px pasa a Bebas 28 px porque Bebas es más baja en x-height.

## Tokens: Espaciado y formas

**Unidad base:** 4px

**Densidad:** cómoda

### Escala de espaciado

| Nombre | Valor | Token |
|---|---|---|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` (banda de sección del repo) |
| 120 | 120px | `--spacing-120` |
| 180 | 180px | `--spacing-180` |

### Radios

| Elemento | Original | Adaptado | Clase del repo |
|---|---|---|---|
| íconos, badges, divisores (fino) | 2px | 6px | `rounded-sm` |
| tags, inputs, botón fantasma (control) | 8px | 8px | `rounded-md` |
| tarjetas | 16px | 16px | `rounded-xl` |
| botones primarios y chips (píldora) | 50px | 9999px | `rounded-full` |

### Sombras

| Nombre | Valor | Token |
|---|---|---|
| float | `rgba(9, 80, 246, 0.12) 0px 24px 70px 0px` | `--shadow-float` |

### Layout

- **Ancho máximo de página:** 1280px (`max-w-7xl`)
- **Banda de sección:** 96px (mínimo 80px, máximo 120px)
- **Padding de tarjeta:** 16px a 24px (`--card-padding-min` / `--card-padding-max`)
- **Gap entre elementos:** 12px a 16px (`--element-gap-min` / `--element-gap-max`)
- **Touch target mínimo:** 44px
- **Foco visible:** ring 2px `#0950F6`, offset 2px

## Componentes

### Tarjeta flotante del hero
**Rol:** contenido principal del hero.

Superficie blanca, `rounded-xl` (16 px), padding 24 px (32 px en desktop). La sombra firma: `shadow-float` (`rgba(9,80,246,0.12) 0 24px 70px`) la levanta sobre el collage azul. Eyebrow en Bebas 16 px, titular en Anton 64 px `#0950F6`, bajada en Outfit 18 px `#0950F6`, un CTA amarillo. Sin borde: la sombra hace la elevación.

```html
<div class="relative z-10 max-w-xl rounded-xl bg-white p-6 shadow-float md:p-8">
  <p class="font-subheading text-base tracking-[0.08em] text-brand-blue-700">Mensajería en moto · Mar del Plata</p>
  <h1 class="mt-3 font-display text-[44px] leading-[0.9] tracking-[-0.02em] text-brand-blue-700 md:text-[64px]">Tu envío, en moto, por toda la ciudad</h1>
  <p class="mt-4 font-sans text-lg leading-relaxed text-brand-blue-700">Express con franja de 3 hs a elección, LowCost en el día y Flex para tus ventas de Mercado Libre.</p>
  <a href="/cotizar" class="mt-6 inline-flex min-h-11 items-center rounded-full bg-brand-yellow-500 px-6 font-subheading text-lg tracking-[0.08em] text-brand-blue-900 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">Cotizá tu envío</a>
</div>
```

### Botón CTA primario
**Rol:** acción principal.

Relleno `#FFEC01`, texto `#0950F6` (4.94:1), Bebas Neue 400 a 18 px con tracking 0.08em. Píldora `rounded-full`. Padding 10 px 24 px, `min-height: 44px`. Hover `#FFF12E`, pressed `#E6D400`. Es el único elemento "encendido" de la página: uno por viewport.

### Botón fantasma
**Rol:** acción secundaria o ítem de nav.

Fondo transparente, borde 1 px `#0950F6`, texto `#0950F6`, Bebas 16 px. `rounded-md` (8 px), padding 10 px 18 px, `min-height: 44px`. Hover: fondo `#E6EEFE`. Queda al lado del CTA amarillo como camino más tranquilo ("Mirá los servicios").

```html
<a href="/servicios" class="inline-flex min-h-11 items-center rounded-md border border-brand-blue-700 px-[18px] font-subheading text-base tracking-[0.08em] text-brand-blue-700 hover:bg-brand-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">Mirá los servicios</a>
```

### Botón píldora del header
**Rol:** CTA de marketing del header ("Cotizá tu envío" cuando el hero no lo muestra en el viewport, o "Ingresá" para clientes).

Relleno `#0950F6`, texto blanco, `rounded-full`, padding 10 px 20 px, `min-height: 44px`. Hover: `#3570F8` (se aclara, nunca se oscurece). Es el inverso del botón fantasma: sólido azul donde el fantasma es contorno. Si el CTA amarillo ya está en el viewport, este botón se queda en azul para no duplicar la señal.

### Barra de navegación superior
**Rol:** navegación global.

Fondo blanco, 64 px de alto, flex horizontal: logo DosRuedas a la izquierda, nav al centro (Servicios, Tarifas, Empresas, Nosotros, Contacto; carets en los que despliegan), acciones a la derecha. Bebas 16 px con tracking 0.08em, `#0950F6`. Sin borde ni sombra: apoyada sobre el lienzo blanco. Ítem activo: subrayado de 3 px `#FFEC01` (franja ≤6 px).

### Logo DosRuedas
**Rol:** identificador de marca.

Reemplaza al logo de cuatro colores. Se usa el archivo real del logo DosRuedas, arriba a la izquierda, unos 28 a 32 px de alto. No se recolorea en multicolor ni se arma con teselas: el logo es el único elemento que no participa del collage.

### Capa de collage del hero
**Rol:** composición decorativa de fondo.

Disposición 2D dispersa de teselas detrás de la tarjeta flotante: fotos reales en duotono azul (repartidor, moto, paquete, depósito, mapa de Mar del Plata), teselas planas de `#0950F6`, `#3570F8`, `#628FF9`, `#BACEFD`, `#E6EEFE`, una tesela `#FFFAB8` y un solo sticker `#FFEC01`. Rotaciones de -6° a +6°, superposición, radios variados dentro de la escala (6, 8, 16, 24 px). Algunas teselas son tipografía: `EXPRESS`, `FLEX`, `24HS` en Anton, o `$0.000` en Geist Mono. Ocupa alrededor de 60 % del ancho del viewport. Funciona como prueba de operación real, no como decoración genérica.

Motion: entrada escalonada (opacity y translate de 12 px, 400 ms, 60 ms entre teselas) y parallax muy leve con el scroll. Con `prefers-reduced-motion: reduce`, el collage se muestra completo y estático desde el primer frame (`useReducedMotion()` en Framer Motion y gate en GSAP).

```html
<div aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
  <div class="absolute left-[4%] top-[10%] h-56 w-44 -rotate-3 overflow-hidden rounded-xl bg-brand-blue-700">
    <img src="/images/collage/repartidor-costanera.webp" alt="" class="h-full w-full object-cover mix-blend-multiply" />
  </div>
  <div class="absolute left-[22%] top-[58%] flex h-28 w-40 rotate-2 items-center justify-center rounded-md bg-brand-blue-400">
    <span class="font-display text-5xl leading-[0.85] text-white">FLEX</span>
  </div>
  <div class="absolute right-[18%] top-[8%] h-24 w-24 rotate-6 rounded-sm bg-brand-blue-100"></div>
  <div class="absolute right-[6%] top-[46%] rotate-[-4deg] rounded-full bg-brand-yellow-500 px-4 py-2">
    <span class="font-subheading text-base tracking-[0.08em] text-brand-blue-900">Corte 15:00 hs</span>
  </div>
  <div class="absolute right-[26%] bottom-[8%] h-32 w-48 -rotate-2 rounded-2xl bg-brand-yellow-100"></div>
</div>
```

### Grilla de servicios (ex grilla de comunidad)
**Rol:** galería de los servicios con foto propia.

4 columnas en desktop (2 en tablet, 1 en mobile), gap 24 px. Cada tarjeta: fondo blanco, sin borde ni sombra en la grilla, `rounded-xl`. Miniatura arriba (foto en duotono o tesela de color plano del collage); título en Bebas 28 px `#0950F6`; metadato en Geist Mono 14 px `#0950F6` con un ícono circular de 24 px (en lugar del avatar del creador). Ejemplos de metadato: Express "Franja de 3 hs · corte 15:00 hs"; LowCost "Programado · entrega antes de 19:00"; Flex "Mercado Envíos Flex · Mar del Plata"; E-commerce 24HS "Desde [precio]". Hover: borde `#8EAFFB` de 1 px. Nunca nombres de clientes.

```html
<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <li>
    <a href="/servicios/express" class="group block rounded-xl border border-transparent bg-white hover:border-brand-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-500 focus-visible:ring-offset-2">
      <div class="aspect-[4/3] overflow-hidden rounded-xl bg-brand-blue-700">
        <img src="/images/servicios/express.webp" alt="Repartidor de DosRuedas con la moto en una calle de Mar del Plata" class="h-full w-full object-cover mix-blend-multiply" />
      </div>
      <h3 class="mt-4 font-subheading text-[28px] leading-[1.1] tracking-[0.05em] text-brand-blue-700">Express</h3>
      <p class="mt-1 font-mono text-sm tabular-nums tracking-[0.03em] text-brand-blue-700">Franja de 3 hs · corte 15:00 hs</p>
    </a>
  </li>
</ul>
```

### Panel de producto (cotizador)
**Rol:** vitrina del producto.

Sección blanca a ancho completo con una captura grande del cotizador del sitio (mapa, origen, destino, resultado). Sin marco de tarjeta alrededor: la captura es la tarjeta. Los números de la captura van en Geist Mono `tabular-nums` y con placeholders (`$0.000`, `[km]`), nunca precios reales en un mockup. Bajada en Outfit 18 px `#0950F6`, ancho máximo unos 600 px.

### Titular de sección
**Rol:** título de sección mayor.

Anton 400 a 64 px (44 px en mobile), `#0950F6`, tracking -0.02em, line-height 0.9, UPPERCASE. Alineado a la izquierda. Sin subtítulo por defecto: el titular carga la sección solo. Donde Figma usaba peso ultraliviano para la contención, acá la contención sale de dejarlo solo con 96 px de aire arriba.

```html
<h2 class="font-display text-[44px] leading-[0.9] tracking-[-0.02em] text-brand-blue-700 md:text-[64px]">Seis formas de enviar en Mar del Plata</h2>
```

### Anillo decorativo
**Rol:** acento de marca con gradiente cónico.

Anillo circular fino (2 px de trazo) con `conic-gradient` desde `#0950F6` hacia `#3570F8` y `#628FF9`, con un segmento corto de 18° en `#FFEC01`, desvaneciéndose a transparente. Solo decorativo, nunca interactivo. Si rota, la rotación se desactiva con `prefers-reduced-motion`.

```css
.ring-decor {
  background: conic-gradient(from 0deg, #0950F6 0deg, #3570F8 120deg, #628FF9 220deg, transparent 300deg, #FFEC01 324deg, #FFEC01 342deg, transparent 342deg);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #FFFFFF calc(100% - 2px));
          mask: radial-gradient(farthest-side, transparent calc(100% - 2px), #FFFFFF calc(100% - 2px));
}
@media (prefers-reduced-motion: no-preference) {
  .ring-decor { animation: ring-spin 24s linear infinite; }
}
@keyframes ring-spin { to { transform: rotate(360deg); } }
```

## Qué hacer y qué no

### Hacer
- Usar `#FFEC01` en exactamente un CTA por viewport: repetirlo diluye la señal.
- Poner los titulares de hero en Anton 64 a 96 px, solos, alineados a la izquierda y con aire: la contención sale de la composición.
- Aplicar `rounded-full` a todos los botones primarios y chips; `rounded-md` (8 px) queda para botones fantasma e inputs.
- Usar `rounded-xl` (16 px) para tarjetas y `rounded-sm` (6 px) para badges, divisores y contenedores de ícono.
- Usar `#0950F6` sobre blanco para todo texto, incluido el metadato; bajar jerarquía con tamaño y familia, no con opacidad.
- Usar Geist Mono con tracking positivo (+0.03em a +0.05em) y `tabular-nums` para precios, km, horarios de corte y anotaciones.
- Dejar que el collage y las fotos lleven toda la variedad visual; la interfaz queda en azul, blanco y una señal amarilla.
- Envolver toda animación del collage y del anillo en `prefers-reduced-motion`.

### No hacer
- No rellenar botones secundarios con color: el fantasma en contorno azul es la alternativa correcta al CTA amarillo.
- No usar Anton ni Bebas en pesos distintos de 400, ni negritas sintéticas.
- No agregar sombras a las tarjetas de la grilla: la `shadow-float` es solo para la tarjeta flotante del hero.
- No usar `rounded-full` en tarjetas ni inputs: la píldora es exclusiva de acciones y chips.
- No reintroducir verde, violeta, rosa, naranja, teal ni cian en ninguna parte, ni siquiera en el collage.
- No poner texto amarillo sobre blanco (1.22:1) ni texto `#3570F8` a menos de 24 px.
- No poner cuerpo de texto por debajo de 16 px (Geist Mono 12 px es solo anotación).
- No escribir tiempos de entrega en minutos u horas ni precios reales en mockups: `[precio]` o `$0.000`.

## Superficies

| Nivel | Nombre | Valor | Propósito |
|---|---|---|---|
| 1 | Canvas | `#FFFFFF` | Fondo de página, superficie dominante tipo galería. |
| 2 | Card | `#FFFFFF` | Tarjetas sobre el canvas (tarjeta flotante, grilla de servicios): iguales al canvas, separadas por sombra o por aire. |
| 3 | Muted | `#E6EEFE` | Panel secundario, bloques de menor prominencia, skeleton. |
| Invertido | Banda azul | `#0950F6` | Header de campaña, franja de cotización, footer. |

### Tema invertido azul

La propuesta es clara, pero las bandas institucionales (footer, franja "Cotizá tu envío", header de campaña) usan el tema invertido. No existe fondo más oscuro que `#0950F6`, así que la jerarquía de superficies se resuelve hacia arriba:
- **Base:** `#0950F6`, texto `#FFFFFF` (6.02:1) o blanco al 85 % para secundarios (4.76:1).
- **Panel sutil:** `rgba(255,255,255,0.06)` con borde `rgba(255,255,255,0.12)`.
- **Capa elevada:** `#3570F8` (solo con texto blanco grande ≥24 px o Bebas ≥18 px; texto chico va en tarjeta blanca).
- **Tarjeta máxima:** blanco `#FFFFFF` con texto `#0950F6`, la capa más "cercana".
- **Precio destacado:** Geist Mono en `#FFEC01` sobre `#0950F6`, o `#FFF45C` para detalle mono secundario.

## Elevación

- **Tarjeta flotante del hero:** `rgba(9, 80, 246, 0.12) 0px 24px 70px 0px` (`shadow-float`).
- Todo lo demás es plano: la jerarquía sale del aire, la escala y el cambio de superficie.

## Imágenes

La estrategia de Figma es "que el trabajo sea la imagen". En DosRuedas, el trabajo es la operación real: **fotos propias de repartidores, motos y paquetes en Mar del Plata** (costanera, calles del centro, puerta de un comercio, depósito), tratadas en duotono con multiply sobre `#0950F6` o `#3570F8`. Como alternativa, **dioramas 3D isométricos en clay mate** (una moto, un paquete, una manzana de la ciudad) en tintes azules con un solo detalle amarillo. El collage del hero usa rotación leve, bordes superpuestos y recortes desparejos. Más abajo, capturas del cotizador del sitio con su propia interfaz. Nada de stock genérico, ni personas sonriendo a cámara con cajas, ni logos de clientes: la ciudad y la moto son la imagen.

## Layout

Contenido centrado a 1280 px máximo sobre un lienzo blanco fluido. El hero ocupa el ancho completo con el collage disperso detrás y la tarjeta flotante encima, superpuesta a unos 60 % del ancho. Debajo, las secciones alternan bandas de aire generoso (96 px verticales) con titulares Anton alineados a la izquierda y la vitrina del cotizador. La grilla de servicios es de 4 columnas con 24 px de gap. La navegación es una barra plana de 64 px, sin borde ni sombra. Sin sidebar ni mega menú visible en el primer pliegue. Ritmo: un collage dramático, una vitrina tranquila, una grilla, y una banda azul invertida con el CTA amarillo antes del footer. Escaso, con pausa de museo, nunca denso.

## Guía de prompts para agentes

Referencia rápida de color:
- fondo: `#FFFFFF`
- texto: `#0950F6`
- borde: `#BACEFD` (estructural), `#0950F6` (botón fantasma)
- texto secundario: `#0950F6` más chico, en Geist Mono o Bebas
- acento: `#FFEC01`
- acción primaria: `#FFEC01` con texto `#0950F6`

Prompts de ejemplo:

1. Creá una sección hero con una tarjeta flotante centrada: fondo `bg-white`, `rounded-xl`, padding 24 px, `shadow-float`. Eyebrow "Mensajería en moto · Mar del Plata" en `font-subheading`. Titular "Tu envío, en moto, por toda la ciudad" en `font-display` 64 px, `text-brand-blue-700`, tracking -0.02em. Bajada en Outfit 18 px `text-brand-blue-700`. Detrás, un collage de fotos propias en duotono azul y teselas `bg-brand-blue-400`, `bg-brand-blue-100` y un solo sticker `bg-brand-yellow-500`, con rotaciones leves y superposición. Animación de entrada solo si no hay `prefers-reduced-motion`.

2. Creá un botón de acción primaria: `bg-brand-yellow-500`, `text-brand-blue-900`, `font-subheading` 18 px tracking 0.08em, `rounded-full`, padding 10 px 24 px, `min-h-11`, hover `bg-brand-yellow-400`, foco `ring-2 ring-brand-blue-500 ring-offset-2`. Texto: "Cotizá tu envío". Es el único relleno amarillo del viewport.

3. Creá un botón fantasma: `border border-brand-blue-700`, `text-brand-blue-700`, `rounded-md`, `font-subheading` 16 px, `min-h-11`, hover `bg-brand-blue-50`. Texto: "Mirá los servicios".

4. Creá una grilla de servicios: 4 columnas, gap 24 px, fondo blanco, sin sombra. Cada tarjeta: `rounded-xl`, miniatura en duotono azul arriba, título en `font-subheading` 28 px `text-brand-blue-700`, metadato en `font-mono tabular-nums` 14 px (por ejemplo "Franja de 3 hs · corte 15:00 hs" para Express). Hover `border-brand-blue-200`. Sin nombres de clientes ni precios reales.

5. Creá un titular de sección: `font-display` 64 px (44 px en mobile), `text-brand-blue-700`, tracking -0.02em, line-height 0.9, alineado a la izquierda, sin subtítulo. Texto: "Seis formas de enviar en Mar del Plata".

## Sistema de radios

Cuatro niveles estrictos, mapeados a la escala del repo: 6 px (`rounded-sm`) para UI fina (badges, contenedores de ícono, divisores), 8 px (`rounded-md`) para botones fantasma e inputs, 16 px (`rounded-xl`) para tarjetas, y píldora (`rounded-full`) para botones primarios y chips. No se mezclan niveles: una tarjeta con 8 px o un botón con 16 px rompen la gramática. La única excepción controlada es el collage del hero, donde las teselas pueden variar entre 6, 8, 16 y 24 px para conservar la "falta de radio uniforme" del original.

## Disciplina de color

La interfaz es 0 % multicolor. Azul, blanco y un amarillo son toda la paleta de UI. Cada color decorativo del original ya está colapsado: los marcadores del logo y los pasteles del collage pasaron a tintes azules (`#3570F8`, `#628FF9`, `#8EAFFB`, `#BACEFD`, `#E6EEFE`), y los cálidos de energía (naranja, lima, mostaza) pasaron a la escala amarilla (`#FFEC01`, `#FFFAB8`). Un agente no debe reintroducir ningún tono fuera de esa escala, ni en componentes ni en el collage. La disciplina es: la página es una galería blanca; la variedad está en el valor, la foto y la composición, no en el tono. Presupuesto amarillo: ≤15 % de la superficie visible, un CTA amarillo por pantalla, una tesela amarilla fuerte por collage.

## Referencia original

- **Figma (figma.com):** sirve para DosRuedas porque muestra cómo un sitio casi monocromo puede sentirse vivo usando un collage de trabajo real detrás de una tarjeta silenciosa; DosRuedas cambia "trabajo de la comunidad" por "operación real en Mar del Plata" y conserva la disciplina de un solo acento.

## Quick Start

### CSS Custom Properties

```css
/* Propuesta figma adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
:root {
  /* Colores */
  --color-ink: #0950F6;
  --color-paper: #FFFFFF;
  --color-mist: #E6EEFE;
  --color-ink-muted: #0950F6;
  --color-signal: #FFEC01;
  --color-signal-hover: #FFF12E;
  --color-signal-pressed: #E6D400;
  --color-collage-blue-bright: #3570F8;
  --color-collage-blue-soft: #628FF9;
  --color-collage-spark: #FFEC01;
  --color-wash-yellow: #FFFAB8;
  --color-wash-blue-100: #BACEFD;
  --color-wash-blue-200: #8EAFFB;
  --color-wash-blue-50: #E6EEFE;
  --color-ring-blue: #3570F8;
  --color-ring-spark: #FFEC01;
  --color-border: #BACEFD;
  --color-border-input: #628FF9;
  --color-border-hover: #8EAFFB;
  --color-error: #EF4444;
  --color-error-text: #DC2626;

  /* Tipografía: familias */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Tipografía: escala */
  --text-caption: 12px;
  --leading-caption: 1.3;
  --tracking-caption: 0.05em;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0em;
  --text-body: 18px;
  --leading-body: 1.55;
  --tracking-body: 0em;
  --text-label: 16px;
  --leading-label: 1;
  --tracking-label: 0.08em;
  --text-heading: 28px;
  --leading-heading: 1.1;
  --tracking-heading: 0.05em;
  --text-heading-lg: 64px;
  --leading-heading-lg: 0.9;
  --tracking-heading-lg: -0.02em;
  --text-heading-lg-mobile: 44px;
  --text-display: 96px;
  --leading-display: 0.88;
  --tracking-display: -0.03em;
  --text-display-mobile: 56px;

  /* Tipografía: pesos */
  --font-weight-display: 400;
  --font-weight-subheading: 400;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  /* Espaciado */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-120: 120px;
  --spacing-180: 180px;

  /* Layout */
  --page-max-width: 1280px;
  --section-gap: 96px;
  --section-gap-min: 80px;
  --section-gap-max: 120px;
  --card-padding-min: 16px;
  --card-padding-max: 24px;
  --element-gap-min: 12px;
  --element-gap-max: 16px;
  --touch-target-min: 44px;

  /* Radios */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Radios con nombre */
  --radius-tags: 8px;
  --radius-cards: 16px;
  --radius-icons: 6px;
  --radius-small: 8px;
  --radius-buttons: 9999px;

  /* Sombras */
  --shadow-float: rgba(9, 80, 246, 0.12) 0px 24px 70px 0px;

  /* Superficies */
  --surface-canvas: #FFFFFF;
  --surface-card: #FFFFFF;
  --surface-muted: #E6EEFE;
  --surface-inverted: #0950F6;
}
```

### Tailwind v4

```css
/* Propuesta figma adaptada a Envíos DosRuedas. No es el @theme de producción (src/app/globals.css). */
@theme {
  /* Colores */
  --color-ink: #0950F6;
  --color-paper: #FFFFFF;
  --color-mist: #E6EEFE;
  --color-signal: #FFEC01;
  --color-signal-hover: #FFF12E;
  --color-signal-pressed: #E6D400;
  --color-collage-blue-bright: #3570F8;
  --color-collage-blue-soft: #628FF9;
  --color-wash-yellow: #FFFAB8;
  --color-wash-blue-100: #BACEFD;
  --color-wash-blue-200: #8EAFFB;
  --color-wash-blue-50: #E6EEFE;
  --color-border: #BACEFD;
  --color-border-input: #628FF9;

  /* Tipografía */
  --font-display: var(--font-anton), 'Anton', Impact, sans-serif;
  --font-subheading: var(--font-bebas), 'Bebas Neue', sans-serif;
  --font-sans: var(--font-outfit), 'Outfit', sans-serif;
  --font-mono: var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace;

  /* Escala */
  --text-caption: 12px;
  --text-body-sm: 16px;
  --text-body: 18px;
  --text-label: 16px;
  --text-heading: 28px;
  --text-heading-lg: 64px;
  --text-display: 96px;

  /* Espaciado */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-120: 120px;

  /* Radios */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-float: rgba(9, 80, 246, 0.12) 0px 24px 70px 0px;
}
```

La versión completa de ambos bloques está en `variables.css` y `theme.css` de esta carpeta.

## Checklist de marca

- [ ] Ningún hex fuera de la paleta: azul `#0950F6` y sus tintes, escala amarilla, blanco, y rojo solo en errores de formulario.
- [ ] Ningún verde, violeta, rosa, naranja, teal ni cian, tampoco en el collage.
- [ ] Un solo CTA amarillo por viewport y una sola tesela amarilla fuerte por collage; amarillo ≤15 % de la superficie.
- [ ] Todo texto sobre blanco en `#0950F6` al 100 %; ningún texto amarillo sobre blanco; `#3570F8` solo en texto ≥24 px.
- [ ] Anton y Bebas solo en peso 400 y UPPERCASE; cuerpo en Outfit ≥16 px; precios y km en Geist Mono `tabular-nums`.
- [ ] Radios solo de la escala (6, 8, 16, 24 en collage, full); píldora solo en botones primarios y chips.
- [ ] Sombras teñidas `rgba(9,80,246,α)`; `shadow-float` solo en la tarjeta flotante del hero.
- [ ] Touch targets ≥44 px y foco `ring-2` `brand-blue-500` con offset 2 px en todo lo interactivo.
- [ ] Collage y anillo detenidos o estáticos con `prefers-reduced-motion`.
- [ ] Copy con voseo, sin tiempos en minutos u horas, sin nombres de clientes, sin precios reales (`[precio]` o `$0.000`).
