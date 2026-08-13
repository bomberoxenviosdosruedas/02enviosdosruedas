# Envíos DosRuedas — Design System

Sistema de diseño extraído del sitio real de **Envíos DosRuedas**, empresa de mensajería,
última milla y logística e-commerce en **Mar del Plata, Argentina**. Todos los valores de acá
—hex, radios, sombras, curvas de easing, tarifas de ejemplo— están tomados literalmente del
código fuente. Nada fue inventado.

## Fuentes

- **Codebase local adjunto:** `07enviosdosruedas/` — proyecto Next.js 15 + Tailwind v4 + Prisma.
  - `src/app/globals.css` — tokens de marca, utilidades `.badge-pill` / `.cta-nested-pill`, keyframes
  - `src/app/layout.tsx` — carga de fuentes (Anton, Bebas Neue, Outfit) y metadata
  - `src/app/page.tsx` — composición de la home
  - `src/components/{Hero,Features,Services,IndustrySlider,Coverage,Calculator,CTA,Footer}.tsx`
  - `src/components/layout/Navbar.tsx` — header fijo con dropdowns
  - `src/components/ui/*` — primitivos shadcn heredados (ver "Deuda heredada")
  - `public/` — logos, fondos de tarjetas, íconos de redes
- **Repositorio GitHub asociado:** `dosruedasmdq/02enviosdosruedas` (ver `github.md`)
- **Sitio en producción:** https://www.enviosdosruedas.com/ — no fue accesible por fetch durante
  esta sesión; toda la reconstrucción salió del código, que es la fuente más fiel de todos modos.
- **Logo aportado por el usuario:** `uploads/brand_files-1786525676153-sqlf.webp`
  (idéntico a `public/logo-envios-simplified.webp`, que es el que usa el sistema).

## Contexto de producto

Un solo producto: **el sitio público de Envíos DosRuedas**. Funciona a la vez como carta de
servicios (Express, LowCost, Flex, 3PL), captador de leads (WhatsApp, cotizador, formulario) y
prueba social (comunidad en redes, cifras de operación). Hay además un cotizador con backend real
(`/cotizar/express`, `/cotizar/lowcost`, Prisma + tarifas) y un panel `/admin/tarifas`, pero el
sistema de diseño cubre la capa pública.

Audiencias, en el orden en que el sitio les habla: **PyMEs y e-commerce**, **emprendedores**,
**corporativo** y **particulares**.

---

## FUNDAMENTOS DE CONTENIDO

**Idioma y persona.** Español rioplatense con **voseo**, sin excepción: *cotizá*, *enterate*,
*sumate*, *dejá*, *variabilizá*, *contactate*, *mirá*, *seguinos*. La empresa habla como **nosotros**
y trata al lector de **vos**. Nunca "usted", nunca español neutro.

**Tono.** Cercano y local, pero técnicamente competente. Mezcla deliberadamente el barrio con el
vocabulario logístico: *"Somos la solución a tus envíos"* convive con *"última milla"*, *"3PL"*,
*"ruteo masivo"* y *"cadetería urbana"*. Nunca es informal a costa de la precisión: cuando hay un
número, aparece (\$3.700 base, 3 km, corte 15 hs, hasta 10 kg).

**Titulares.** Anton, mayúscula, sin punto final, en dos o tres líneas, con la última en amarillo:
*"Soluciones logísticas / **A TU MEDIDA**"*, *"Sumate a nuestra comunidad / **EN REDES SOCIALES**"*,
*"Conectamos Mar del Plata de punta a punta"*. Casi siempre incluyen "Mar del Plata" o "marplatense":
el anclaje local es parte del mensaje, no un dato.

**Etiquetas.** Cada sección abre con una píldora corta en mayúscula: *NUESTROS SERVICIOS*,
*SOCIO ESTRATÉGICO LOCAL*, *PARTNER LOGÍSTICO ESPECIALIZADO*, *CONECTÁ CON NOSOTROS*,
*TU SOLUCIÓN CONFIABLE*.

**Botones.** Verbo en imperativo voseado, dos o tres palabras: *Solicitar Servicio*, *Ver Servicios*,
*Cotizá tu Express*, *Probá el LowCost*, *Configurá Flex*, *Consultá planes*, *Hablar con un asesor*,
*Enviar mensaje*.

**Microcopy.** Cada servicio se resume en una frase y se prueba con tres bullets concretos. Los
beneficios se escriben como promesas verificables ("Retiro gratis a domicilio a partir de 5 envíos
diarios"), no como adjetivos.

**Emoji.** El sitio web **no usa emoji en la interfaz**: cero en botones, títulos, nav o cuerpo.
Aparecen sólo en dos lugares acotados: un ⚡ en la etiqueta "⚡ ROTACIÓN AUTOMÁTICA" del carrusel, y
en el contenido replicado de redes sociales (📦 🚀 🏍 🤝), que es copy de Instagram/Facebook, no de la
web. Regla: **no agregues emoji a la UI**; si estás escribiendo un post, seguí el estilo de redes.

**Vibra.** Un negocio de barrio que se profesionalizó. Amarillo de casco y chaleco reflectante sobre
azul de flota, cifras grandes, sombras duras tipo sticker, y una insistencia constante en que somos
de acá.

---

## FUNDAMENTOS VISUALES

**Color.** Dos colores de marca y cuatro fondos. El azul institucional es **\#0636A5** (`blue-700`),
el amarillo **\#FFEC01**. Sobre amarillo, el texto siempre es \#0636A5 — nunca blanco ni negro. Las
secciones alternan cuatro superficies: **blanco** (Features, Cotizador), **\#00277C ink** (Servicios,
Cobertura), **\#0636A5** (Hero, Footer) y **\#001035 dark** (Comunidad). El azul 50 (\#E6EEFE) es el
relleno de campos y tarjetas claras; el 500 (\#0950F6) es el azul de acento y subrayados. Los únicos
colores ajenos a la marca están en las tarjetas de redes (Facebook \#1877F2, WhatsApp \#25D366,
gradiente de Instagram) y son intocables porque son de esas marcas.

**Tipografía.** Cuatro familias, cada una con un trabajo exclusivo. **Anton 400** para todos los
titulares — mayúscula, `letter-spacing:-.02em`, line-height .9–1.05. **Bebas Neue 400** para
etiquetas, badges, botones y títulos de fila, siempre con tracking de .05–.1em. **Outfit 400–800**
para todo el texto corrido y la interfaz; las bajadas van en 500. Y la **mono del sistema** para
cifras y píldoras técnicas: +50K, +5000, 100% MARPLATENSE. Regla dura: **las cifras nunca van en
Anton** — van en mono, con `letter-spacing:-.03em`.

**Espaciado.** Escala Tailwind (múltiplos de 4). Secciones a `padding:96px 0` (py-24) y `144px`
(py-36) en las editoriales. Contenedor `max-width:1280px` con 32px de padding lateral. Gaps de 24px
entre tarjetas y 48px entre columnas.

**Fondos.** No hay fondos planos y aburridos, pero tampoco decoración gratuita. Las secciones oscuras
llevan **resplandores radiales** (círculos de 384–600px con `filter:blur(64–150px)` en azul al 5–10%
y amarillo al 5%) que dan profundidad sin ruido. El hero suma dos radiales al 3% y una fotografía al
**5% de opacidad en `mix-blend-mode:overlay`** — la imagen está ahí como textura, no como imagen. Las
imágenes de las tarjetas de servicio también van atenuadas: .25 overlay sobre azul, .15 en grises
sobre blanco, .2 multiply sobre amarillo. **Ninguna foto se muestra a plena opacidad en todo el sitio.**

**Esquinas.** Marca completamente redondeada: 8 / 12 / 16 / 20 / 24 / 32 px y píldora (9999px).
Los botones van en 8px, los chips de ícono en 12px, las tarjetas en 24px, las de servicio en 32px, y
todo lo que sea etiqueta, CTA principal o input de newsletter es píldora. **Nada tiene esquina viva**
salvo las secciones a sangre.

**Tarjetas.** Hay tres familias y no se mezclan. (1) *Bento claro*: contenedor `blue-50` con borde
`blue-100` y radio 32px, con un panel blanco adentro en radio 20px y sombra interior — el doble marco
es obligatorio. (2) *Bento oscuro*: contenedor translúcido al 5% con borde azul, panel interior
`rgba(6,54,165,.6)`, mismo doble marco. (3) *Tarjeta de servicio*: borde de 4px del color del tema,
gradiente diagonal, imagen atenuada y tres stats al pie.

**Sombras.** Dos sistemas conviviendo. Las **duras y desplazadas** son la firma: `4px 4px 0 #0742CA`
en reposo, que pasa a `6px 6px 0 #FFEC01` al hover; `2px 2px 0` en los chips de ícono; `12px 12px 0`
al 30% en las tarjetas de redes. Las **suaves** (`--shadow-minimal`, `--shadow-soft-elevation`,
`--shadow-antigravity-deep`) se reservan para superficies claras y flotantes. No hay sombras negras
genéricas: todas están teñidas de azul o amarillo.

**Bordes.** Hairline `1px` en `blue-100` sobre claro y `rgba(255,255,255,.1)` sobre oscuro. Borde de
marca `2px solid #0636A5` en tarjetas destacadas y modales. Borde de 4px sólo en las tarjetas de
servicio. El foco de los campos pasa a amarillo con un halo de 3px al 25%.

**Transparencia y blur.** Blur en tres lugares y nada más: el header (`blur(4px)` → `blur(12px)` al
scrollear), los resplandores radiales, y el `backdrop-filter:blur(4px)` de los stats dentro de las
tarjetas de servicio. Todo lo demás es alfa plano.

**Movimiento.** Dos curvas: `--spring-ease` `cubic-bezier(.34,1.56,.64,1)` con rebote para entradas y
chips, y `--smooth-ease` `cubic-bezier(.25,.8,.25,1)` para todo lo demás. Duraciones: .2s hover, .3s
tarjetas, .5s el acordeón de redes, .7s el carrusel 3D, 35s la cinta. Animaciones nombradas:
`float-slow` (±5px, 4s, con delays escalonados de 0/0.6/1.2/1.8s), `icon-bob`, `border-pulse` (halo
amarillo del badge del hero) y `marquee-scroll`. **Todo respeta `prefers-reduced-motion`** — el sitio
lo implementa tanto en CSS como en JS, y el sistema mantiene esa regla.

**Hover.** Cuatro patrones. (1) *Levantar*: tarjetas `translateY(-6px)` cambiando la sombra dura de
azul a amarillo. (2) *Correr*: filas y enlaces `translateX(4px)`, a veces con el título pasando a
amarillo. (3) *Escalar*: CTAs a 1.02, logos a 1.05, chips de ícono a 1.05 **con `rotate(12deg)`**.
(4) *Ensanchar*: las tarjetas de redes pasan de `flex:1` a `flex:1.4` y rotan ±1°. En el nav, una
barra amarilla de 4px crece con `scaleX` desde la izquierda.

**Press.** Este sistema **sí** define estado presionado: `.cta-nested-pill:active` baja a
`scale(.95)`. Usalo en cualquier control táctil.

**Elementos fijos.** El header es `position:fixed` (z-50) y las páginas compensan con ~128px de
padding superior. El carrusel 3D vive en un contenedor con `perspective:2000px`; el visual del hero,
en uno de `1000px` que además responde al mouse con un tilt de ±8°.

**Vibra de las imágenes.** Fotografía real de la operación: motos, cascos, cajas, calles de Mar del
Plata. Cálida, contrastada, sin filtros de color — pero **siempre subordinada**: atenuada, fundida en
blend mode o recortada dentro de una tarjeta. La marca no usa la foto como protagonista; la usa como
textura debajo del texto.

---

## ICONOGRAFÍA

**Lucide React** es el único set de íconos del sitio (`import { Zap, ShieldCheck } from 'lucide-react'`),
con trazo de 2px y tamaños de 12 a 24px en la interfaz. Como los componentes de acá son HTML plano y
no un bundle de React, el sistema usa **el mismo set desde el UMD oficial de Lucide** — no es una
sustitución, es la misma librería:

```html
<script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js"></script>
```

El componente `Icon` envuelve eso; los nombres van en PascalCase (`<Icon name="ShieldCheck" />`).

- **Íconos usados en el sitio:** Zap, Box, Truck, Warehouse, ShieldCheck, MapPin, Clock, Users,
  ArrowRight, ArrowUpRight, ArrowUp, ChevronLeft, ChevronRight, ChevronDown, Phone, Mail, Menu, X,
  Home, Bike, TrendingDown, ShoppingBag, Info, HelpCircle, Share2, Landmark, Building2, Award,
  ExternalLink.
- **SVGs propios:** `assets/iconos/{instagram,facebook,whatsapp}.svg`, copiados del repo. Se usan
  cuando hace falta el glifo oficial de la red; para el resto va Lucide.
- **Color:** un solo tono por ícono. Amarillo sobre azul, \#0636A5 sobre amarillo, blanco sobre foto.
  Nunca multicolor.
- **Marca de agua:** el ícono del servicio se repite en 144px al **5% de opacidad** en la esquina
  inferior derecha de las tarjetas. Es un recurso recurrente, no un accidente.
- **Emoji:** no en la UI (ver Fundamentos de contenido).

**Logo.** Copiados a `assets/`: `logo-envios-simplified.webp` (el que usa el header y el footer),
`LogoEnviosDosRuedas.webp`, `logo-master.svg`, `logo_envios.svg` y `favicon.svg`. Va a 40px en el
header y 44px en el footer, con `scale(1.05)` al hover. **El logo casi nunca va solo**: lo acompaña
el wordmark en Anton partido en dos colores — "ENVÍOS" en blanco y "DOSRUEDAS" en amarillo.

---

## Índice

```
styles.css              el único archivo que enlazan los consumidores (sólo @import)
tokens/                 colors · typography · fonts · spacing · shape · motion
assets/                 logos, fondos de tarjetas, íconos de redes, imágenes de la operación
guidelines/             16 cards de fundamentos (Colors, Type, Spacing, Brand)
components/             primitivos React, agrupados por función
ui_kits/home/           recreación navegable de la home
github.md               repositorio asociado y mapa de pantallas
SKILL.md                envoltorio para Agent Skills
thumbnail.html          tile del proyecto
readme.md               este archivo
```

### Componentes

Se importan desde `window.XTRAMusicDesignSystem_*` (corré `check_design_system` para el namespace exacto).

**`components/core/`** — `Icon`, `Button`, `CtaPill`, `BadgePill`, `SectionHeading`, `IconTile`, `Marquee`

**`components/cards/`** — `ServiceCard`, `StatCard`, `BentoCard`, `SocialCard`, `FloatingPill`, `FeatureRow`

**`components/layout/`** — `Navbar`, `Hero`, `Footer`

**`components/forms/`** — `Field`, `SubscribeForm`

**`components/feedback/`** — `Modal`, `Accordion`, `Toast`

Cada carpeta tiene su `.card.html` de muestra; cada componente, su `.d.ts` con el contrato de props y
su `.prompt.md` con el uso.

### UI kits

- `ui_kits/home/` — **Home**: hero con contador, features con bento de cifras, carrusel 3D de
  servicios con modal de detalle, cinta de clientes, sección de cobertura, cotizador y bloque de
  comunidad. Ver su README para el mapeo pantalla → archivos del repo.

### Agregados intencionales

- **`Icon`** — envoltorio de Lucide; en el repo se importa directo de `lucide-react`, que no existe
  en HTML plano.
- **`SectionHeading`** — el patrón badge + titular + bajada se repite en las siete secciones de la
  home sin nombre propio; extraído para que no se desalinee.
- **`IconTile`** y **`FloatingPill`** — el mismo chip amarillo y la misma píldora flotante están
  repetidos con clases distintas en Hero, Features, Services, Coverage y Footer; unificados.
- **`Accordion`** y **`Modal`** — existen en el repo como `ui/accordion.tsx` y `ui/dialog.tsx`, acá
  re-estilados según el uso real de las páginas.

### Deuda heredada (detectada, no replicada)

`src/components/ui/` conserva primitivos shadcn de una versión anterior del sitio con la **paleta
vieja**: \#0C3BA7, \#071F5C, \#092C7E y `rounded-xs`. El `Navbar` todavía usa \#071F5C como fondo.
Este sistema se basa en la paleta vigente de `globals.css` (\#0636A5 / \#00277C / \#001035) y mantiene
sólo el navy \#071F5C del header, porque es lo que efectivamente se ve. **Conviene unificarlo en el
repo.**

### Faltantes conocidos

- **Sólo se construyó la Home** (fue lo pedido). Servicios, Cotizador, Contacto, Nosotros y
  Preguntas Frecuentes existen en el repo y no están recreados todavía.
- **El canvas de red logística del hero** (nodos de barrios de Mar del Plata con partículas) no está
  portado: es ~150 líneas de lógica de canvas. Se reemplazó por los degradados radiales.
- **La lógica de precios es de mentira.** El cotizador del kit hace base + \$450/km; la real está en
  `src/lib/pricing.ts` y Prisma.
- **Las fuentes se cargan de Google Fonts** por `@import`. No hay binarios en el repo (usa
  `next/font`), así que no se vendorizó ninguno. Anton, Bebas Neue y Outfit son las familias reales.
