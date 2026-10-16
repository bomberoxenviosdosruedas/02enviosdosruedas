# Handoff Spec: Home y layout raíz — Envíos DosRuedas

Repo `bomberoxenviosdosruedas/02enviosdosruedas`, rama `localmente`. Spec derivado del código (no hay Figma). Stack: Next.js App Router, Tailwind v4, `motion/react`, GSAP, lucide-react.

**Alcance.** Se leyeron todos los archivos de la home: `layout.tsx`, `page.tsx`, `globals.css`, los 8 componentes de la home, `ClientLayout`, `OptimizedHeader`, `MobileNav`, `CarruselRedes`, `OptimizedFooter`, los primitivos (`Badge`, `CTANestedPill`, `DoubleBezelCard`, `Knockout`, `HeroProceduralBackground`), `promises.ts`, `pricing.ts`, `analytics.ts` y `utils.ts` (`cn` = `clsx` + `tailwind-merge`). Solo falta el barrel `@/components/ui` (`index.ts`), que únicamente reexporta. Lo marcado **Verificar** sale de leer el código y conviene confirmarlo en el navegador.

**Correcciones al borrador anterior.** `brand-ink` = `brand-blue` = #0950F6 (no existe color de texto oscuro: es regla de marca). `tracking-mega` = 0.2em. `max-w-180` es válido (45rem). El eyebrow amarillo 12px sobre azul pasa AA (4.9:1).

## 1. Overview

La home es una pila de 6 bloques. El layout raíz (sección 4.0) aporta fuentes, SEO, JSON-LD, analítica, header, `<main>`, carrusel de redes y footer.

| # | Bloque | Fondo | Render | Título |
| --- | --- | --- | --- | --- |
| 1 | `HeroAnimado` | azul | servidor | h1 |
| 2 | `SegmentosHome` | blanco | cliente (innecesario) | h2 |
| 3 | Servicios: wrapper en `page.tsx` + `LogisticaNetworkCanvas` + `ServicesOverview` | azul | cliente | 2 × h2 (duplicado) |
| 4 | `EmprendedoresHome` | azul | cliente | h2 |
| 5 | `SocialProofSection` | azul-50 | cliente (innecesario) | h2 |
| 6 | `CtaSection` | azul | cliente | h2 |

Ritmo de fondos: azul, blanco, azul, azul, azul-50, azul. Servicios y Emprendedores quedan seguidos con el mismo azul, separados solo por un borde `white/10`: se leen como un único bloque. Decisión de diseño pendiente.

## 2. Layout y ritmo vertical

| Bloque | Contenedor | Padding horizontal | Padding vertical |
| --- | --- | --- | --- |
| Hero | `max-w-7xl` | `px-6`, `lg:px-8` | `py-14`, `sm:py-20`, `lg:py-24`; `min-h-[90dvh]` |
| Segmentos | `max-w-7xl` | `px-4`, `sm:px-6`, `lg:px-8` | `py-20` |
| Servicios (page.tsx) | `max-w-[1280px]` | `px-6`, `lg:px-8` | `py-20` |
| ServicesOverview | `max-w-7xl` | `px-4`, `sm:px-6`, `lg:px-8` | `py-14`, `sm:py-20`, `lg:py-24` |
| Emprendedores | `max-w-7xl` | `px-4`, `sm:px-6`, `lg:px-8` | `py-16`, `sm:py-24`, `lg:py-32` |
| Social proof | `max-w-[80rem]` | `px-6`, `lg:px-8` | `py-24` |
| CTA | `max-w-6xl` | `px-4`, `sm:px-6`, `lg:px-8` | `py-20`, `lg:py-28` |

Notas: `max-w-7xl`, `max-w-[1280px]` y `max-w-[80rem]` son lo mismo (80rem): unificar. El margen móvil alterna entre 16px y 24px según la sección, y el contenido salta de borde al hacer scroll. Servicios acumula `py-20` más el padding de `ServicesOverview` (hasta 176px antes del carrusel). El token `--spacing-section-y` (6rem) existe y no se usa.

## 3. Tokens de diseño (de `globals.css`)

| Token | Valor | Uso |
| --- | --- | --- |
| `brand-blue-500/600/700/900/950`, `brand-blue`, `brand-ink` | #0950F6 | Todos colapsan al mismo azul: lienzo, texto sobre blanco o amarillo, foco |
| `brand-blue-400`, `brand-blue-800` | #3570F8 | Hover de fondos azules, íconos. Falla AA en texto normal (4.4:1 sobre blanco) |
| `brand-blue-300` / `200` / `100` / `50` | #628FF9 / #8EAFFB / #BACEFD / #E6EEFE | Hover de borde / trazos / bordes y divisores / fondos suaves y texto sobre azul |
| `brand-yellow-500` | #FFEC01 | CTA, acento, step activo. Señal, nunca superficie (máx. 15%) |
| `brand-yellow-400` / `300` / `600` | #FFF12E / #FFF45C / #E6D400 | Hover CTA / detalle mono / pressed |
| `brand-yellow-200` / `100` / `50` | #FFF78A / #FFFAB8 / #FFFDE6 | Borde, badge y fondo seleccionado |
| `white` | #FFFFFF | Lienzo único |

Contrastes medidos: blanco sobre azul 6.0:1; azul sobre amarillo 4.9:1; `blue-50` sobre azul 5.2:1. Consecuencia de la paleta colapsada: `text-brand-blue-500` sobre `bg-brand-blue-500` es invisible y los efectos `brand-blue-500/5` sobre azul no se ven.

| Rol | Token | Fuente | Uso |
| --- | --- | --- | --- |
| Display | `font-display` | Anton | Títulos. La utilidad fuerza mayúsculas, interlineado 0.9, tracking -0.05em, `text-wrap: balance` |
| Subheading | `font-subheading` | Bebas Neue | Eyebrows, botones, chips (mayúsculas, +0.05em) |
| Sans | `font-sans` | Outfit | Cuerpo |
| Mono | `font-mono` | Geist Mono | Datos, tags, fichas (tabular-nums) |

Escala: `text-2xs` = 10px hasta `text-9xl` = 144px. Existen `text-display`, `text-h1`, `text-h2` (con `clamp`) y no se usan. Radios: 6, 8, 12, 16, 24, 32, 40px y full. Sombras siempre teñidas de azul o amarillo, nunca grises (`shadow-float`, `shadow-elevated`, `shadow-cta-glow`, `shadow-glow-yellow`, `shadow-accent-sm`). Easing: `--ease-out-ui` cubic-bezier(0.23, 1, 0.32, 1); duraciones 160, 200, 250ms.

**Escala real de títulos** (sin sistema común):

| Sección | Tamaño | Interlineado |
| --- | --- | --- |
| Hero h1 | 4xl, sm:5xl, lg:6xl, xl:7xl | 0.92 |
| Segmentos h2 | 3xl, sm:4xl, lg:5xl | 0.9 (utilidad) |
| Servicios h2 (page.tsx) | clamp(2rem, 4vw, 2.75rem) | 0.9 |
| ServicesOverview h2 | 4xl, sm:6xl | 1 |
| Emprendedores h2 | 5xl, sm:6xl, lg:7xl | 0.9 |
| Social proof h2 | 42px, sm:60px, lg:clamp(2.75rem, 5.2vw, 4.5rem) | 0.92 |
| CTA h2 | 4xl, sm:5xl, lg:6xl | 0.98 |

Recomendación: un solo `text-h2` o `text-display` para todos los h2.

## 4. Componentes

### 4.0 Layout raíz (`layout.tsx` y `ClientLayout`)

Toda ruta renderiza `<html lang=es>`, luego `<body>` (columna flex de `min-h-dvh`, fondo `brand-white`, texto `brand-ink`, selección amarilla con texto azul, `antialiased`), luego `MotionConfig reducedMotion=user`, `ClientLayout` y `SpeedInsights`. `ClientLayout` ordena la página así:

| Orden | Pieza | Spec |
| --- | --- | --- |
| 1 | `OptimizedHeader` | Header fijo con menú desplegable y drawer móvil. Ver 4.10 |
| 2 | `<main id=main-content>` | `grow`: ocupa el alto restante y empuja el footer. `pt-18` (72px) compensa al header. Es el landmark principal y el destino natural de un skip link |
| 3 | `CarruselRedes` | Ver 4.11. Carga dinámica con SSR activo; el placeholder (`brand-blue-500`, `py-16`, 250px de alto mínimo) solo se ve en navegación del lado del cliente mientras carga el chunk. Aparece en todas las rutas |
| 4 | `OptimizedFooter` | Ver 4.12 |

Al montar, `captureAndPersistUtms()` guarda los parámetros UTM de la URL (sin UI).

**Fuentes.** Cuatro familias de `next/font/google` como variables CSS: Outfit `--font-sans`, Anton `--font-display`, Bebas Neue `--font-subheading` y Geist Mono `--font-mono`. Todas con `display: swap` y `preload`; Anton y Bebas Neue solo en peso 400.

**Metadata.** Título por defecto «Mensajería en moto en Mar del Plata | Envíos DosRuedas» y plantilla `%s | Envíos DosRuedas`. Open Graph de 1200×630 (`/og-image.jpg`), locale `es_AR`, Twitter `summary_large_image`. La home define su propia canonical (`https://www.enviosdosruedas.com/`).

**JSON-LD.** `Organization` y `LocalBusiness` (Friuli 1972, Mar del Plata, CP 7600; lunes a viernes 09:00 a 18:00 y sábado 10:00 a 15:00, igual que `OPERATING_HOURS`; teléfono y email de contacto). Los valores están escritos a mano (hallazgo 29).

**Terceros en el `<head>`.** Preconnect a Google Tag Manager y Ahrefs, dns-prefetch a WhatsApp, hoja de estilos de Leaflet desde unpkg en todas las rutas, gtag con dos IDs (`AW-17510443994` y `G-LSLQ3RJ8WT`) en `lazyOnload`, y Ahrefs en `afterInteractive` solo en producción.

**Scroll.** `scroll-smooth` más `data-scroll-behavior=smooth`; reduced motion lo anula desde CSS. Con header fijo, las anclas necesitan `scroll-margin-top`.

**Cierre de la página.** La home termina con el CTA azul, seguido del carrusel de redes (azul, con `border-y white/10`) y del footer (azul, con una franja amarilla de 6px arriba). Sumados a Servicios y Emprendedores, casi toda la mitad inferior de la página es el mismo azul #0950F6; el único respiro es Social proof en `blue-50`.

### 4.1 HeroAnimado

Promesa de cobertura: el slogan del dueño como h1, CTA a cotizar y un mapa de Mar del Plata. Sección `min-h-[90dvh]`, `overflow-hidden`, fondo azul, con `HeroProceduralBackground` (variant express, tone blue) detrás. Grilla de 12 columnas desde `lg`: copy 7, mapa 5, `gap-12` (`lg:gap-14`). Móvil: una columna, texto centrado, mapa debajo. Desde `lg` el texto va alineado a la izquierda, nunca centrado.

| Elemento | Spec |
| --- | --- |
| Badge | `Badge` accent, size lg, rotado -1°, ícono Zap 16px: «Flota propia · Todo Mar del Plata» |
| H1 | 3 líneas: «El motor de tu» / «última milla» (`Knockout`, no-wrap) / «Somos la solución a tus envíos». Blanco, lh 0.92, tracking -0.03em, `text-balance`. Es el slogan del dueño: no reemplazar por el texto del prototipo |
| Bajada | Máx. 56ch, base y `sm:text-lg`, light, `white/85`, centrada en móvil |
| CTA primario | `CTANestedPill` a `/cotizar`, id `hero-cta-cotizar`, primary, large: «Cotizá tu envío». Ancho completo en móvil, auto desde `sm` |
| CTA secundario | Link «Ver servicios» a `/servicios`: Bebas, subrayado amarillo 2px con offset 4px, `min-h` 44px, flecha 16px |
| Mapa | Cuadrado de 460px máx., centrado. `/heroes/inicio-mapa.webp` 560×560, `priority`, sizes `(min-width:1024px) 460px, 92vw`, drop-shadow blanco al 12% |
| Anillos | 3 círculos, borde 2px amarillo/60, 30% del ancho, centrados en (50%, 44%). Pulso 3.2s, escala 0.6 a 3.2, opacidad 0.9 a 0, delays 0, 1.06s, 2.13s |
| Fichas | Chips `rounded-xl` con MapPin: «Base Friuli 1972 / Mar del Plata» (blanca, abajo-izquierda) y «Entrega en el día / en todo MDQ» (amarilla, arriba-derecha). Móvil: a 8px de la esquina. Desde `sm` sobresalen del mapa (left -4% y bottom 14%; right -2% y top 10%). Título Bebas xs, detalle mono 10px |
| Ticker | Franja inferior con `border-t white/18` y fondo `white/6`. 5 diferenciales: Envíos en el día, Flota propia, Cero tercerización, Todo Mar del Plata, Retiro en tu local. Bebas 16/17px, separador rombo amarillo de 7px. Lista duplicada que se desplaza 0 a -50% en 36s lineal infinito |

Estados del CTA primario (`CTANestedPill` primary, large): en reposo amarillo con borde amarillo y `shadow-accent-sm`; en hover pasa a `yellow-400` con `shadow-cta-glow`, y el chip de flecha se vuelve azul con flecha amarilla y se desplaza 4px; en active escala 0.98 y baja 1px; con foco muestra un anillo amarillo de 2px con offset azul (el hero sobrescribe el anillo azul predeterminado, que no se vería sobre azul). El link secundario: hover de texto amarillo y el mismo anillo de foco. Reduced motion: anillos y ticker se detienen (anillos en opacidad 0). Capas del fondo y primitivos: ver 4.8.

### 4.2 SegmentosHome

Selector de necesidad. Encabezado centrado (máx. 3xl): pill con Sparkles «Elegí tu solución a medida», h2 «¿Cómo podemos impulsar tu logística hoy?», bajada `sm:text-base` máx. xl. Grilla 1 columna, `md` 2, `lg` 4, `gap-6`. Cada tarjeta es un `DoubleBezelCard`.

| Tag (mono 10px) | Título | CTA | Destino | Ícono |
| --- | --- | --- | --- | --- |
| MERCADO LIBRE (destacada) | ¿Vendés en Mercado Libre? | Ver Solución Flex | `/servicios/enviosflex` | Zap |
| E-COMMERCE 24HS / SAME-DAY | ¿Tenés tienda online con stock en depósito? | Ver planes E-Commerce | `/servicios` | Store |
| COMERCIOS & EMPRESAS | ¿Tenés envíos diarios? | Ver Paquetería LowCost | `/servicios/envios-lowcost` | Building2 |
| PARTICULARES & URGENTES | ¿Necesitás un envío ya? | Cotizá tu Envío Express | `/cotizar` | PackageCheck |

Anatomía: ícono en caja de 48px `rounded-xl`, tag, h3 display xl, descripción xs a sm, separador y botón pill `min-h` 44px de ancho completo con flecha. Variante destacada: fondo `yellow-500/20`, borde 2px amarillo, `shadow-cta-glow`, ícono y CTA amarillos (hover `yellow-400`). Variante estándar: fondo `blue-50/80`, borde `blue-100`, `shadow-float`, CTA `blue-50` con borde `blue-200` (hover `blue-100`). Hover de tarjeta: sube 4px. Solo el CTA es link, no toda la tarjeta.

Contenido: los horarios vienen de `@/lib/promises` (`FLEX_CUTOFF_TIME`, `LOWCOST_CUTOFF_TIME`, `LOWCOST_DELIVERY_DEADLINE`, `EXPRESS_LEAD_TIME`). En E-Commerce «corte 13:00» y «19hs» están escritos a mano. Caso límite: el tag de la 2.ª tarjeta es largo, en mono 10px, junto a un ícono de 48px y en 4 columnas; definir si hace wrap o se trunca.

### 4.3 Servicios (wrapper de `page.tsx`) y `LogisticaNetworkCanvas`

Sección azul `py-20`, `aria-labelledby=services-section-title`. Capas: canvas (z-0), gradiente radial blanco 8% en (30%, 20%) sin eventos de puntero, contenido en z-10. Encabezado: eyebrow Bebas 12px con `tracking-mega` amarillo «Nuestros Servicios» y h2 «Conectamos Mar del Plata de punta a punta» (clamp 2rem a 2.75rem, blanco, máx. 45rem, `mb-12`). Debajo va `ServicesOverview`.

Canvas (cargado con `dynamic` y `ssr:false`; placeholder: div vacío absoluto):

- Se dibuja solo en pantallas de 640px o más y sin reduced motion; si no, no se dibuja nada.
- 9 nodos con posición en % del contenedor: Sede Central (Friuli, radio 6), El Martillo (5) y 7 barrios (radio 4: Centro, La Perla, Constitución, Güemes, Playa Grande, Puerto, Bosque Peralta Ramos).
- 12 conexiones (línea 1px, `white/12`) y 16 partículas (2.3 a 3.3px, blancas o amarillas) que recorren las conexiones.
- Interacción con mouse o touch sobre la sección: línea a menos de 180px pasa a amarillo (alpha 0.15 a 0.45); partícula a menos de 120px crece hasta +1.5px y brilla; nodo a menos de 150px se pone amarillo con halo 2.5× y muestra su etiqueta en mayúsculas. «Sede Central (Friuli)» siempre rotulada.
- Se pausa fuera de pantalla (IntersectionObserver al 5%). Es decorativo: debe ser `aria-hidden`.

### 4.4 ServicesOverview (carrusel 3D y ficha técnica)

Sección azul con `perspective` 2000px. Encabezado: pill «NUESTROS SERVICIOS», h2 «Soluciones logísticas / a tu medida» (4xl, `sm:6xl`, 2.ª línea amarilla), toggle «⚡ ROTACIÓN AUTOMÁTICA» o «ROTACIÓN PAUSADA», flechas anterior y siguiente (44px, hover amarillo).

Carrusel de 500px de alto (540px desde `sm`). Tarjetas absolutas de 290×440px (350×490 desde `sm`), `rounded-3xl`, borde 4px. Transformación según el offset respecto de la activa:

| Propiedad | 640px o más | Menos de 640px |
| --- | --- | --- |
| rotateY | offset × -28° | 0 |
| translateZ | centro +120px; resto -\|offset\| × 180px | 0 |
| translateX | offset × 260px | offset × 140px |
| scale | centro 1.05; resto máx(0.65, 1 - \|offset\| × 0.18) | igual |
| opacidad | 1 siempre | 1 siempre |

Resorte stiffness 140, damping 22. Hover en la central: scale 1.02. Con reduced motion: sin 3D, central opacidad 1 y resto 0.

| Servicio | Badge | Zona | Tarifa | Entrega | Peso | Tema |
| --- | --- | --- | --- | --- | --- | --- |
| Envíos Express | URGENTE | Todo Mar del Plata | $3.700 Base | `EXPRESS_WINDOW_SHORT` | Hasta `STANDARD_WEIGHT_KG` kg | Azul, borde amarillo, glow |
| Envíos LowCost | ECONÓMICO | Todo Gral. Pueyrredón | $3.000 Base | Programado en el día | Hasta `STANDARD_WEIGHT_KG` kg | Blanco a blue-50, sombra dura azul |
| Envíos Flex | MERCADOLIBRE FLEX | Mar del Plata urbana | Zonificado LowCost | En el día | Apto Moto / Auto | Amarillo |
| E-Commerce Same Day | E-COMMERCE | Depósito Friuli 1972 | `SAME_DAY_FIXED_PRICE` fijo | Same Day / 24 hs | Sin límite | Azul |

Anatomía de tarjeta: imagen de fondo `/cards/fondo_*.webp` con blend por tema más degradado azul inferior; chip de ícono amarillo y badge de 10px; zona con MapPin, título display 2xl o 3xl y descripción de 2 líneas; 3 stats (ENTREGA, TARIFA, PESO) en celdas de \~80px con `truncate`; en la central, «Mirá la Ficha Técnica» pulsando opacidad 1 a 0.6 cada 2s. El contenido completo (resumen, beneficios, CTA) vive en el array `services`.

Interacción: clic en la central abre la ficha; clic en una lateral la lleva al centro. Dots de 44px (activo 2.5rem de ancho amarillo con glow, inactivos 10px). Teclado: flechas izquierda y derecha. Auto-rotación cada 4.5s; se pausa con hover sobre la sección, con el toggle, con cualquier navegación manual y con la ficha abierta.

Ficha técnica (modal): overlay azul/80 con blur, panel de doble bisel de 2xl máx. Header con ícono de 32px, eyebrow «founded • city» y h3 3xl o 4xl; resumen; «Beneficios clave» (3 ítems con ShieldCheck, entrada escalonada de 80ms); 3 stats (Tiempos, Precio base, Capacidad); pie con «Volver atrás» y CTA amarillo: Express «Cotizá tu Express» a `/cotizar`; LowCost «Probá el LowCost» a `/cotizar`; Flex «Configurá Flex» a `/servicios/enviosflex`; Same Day «Consultá planes» a `/servicios/deposito-fulfillment`. Cierra con la X (36px), «Volver atrás» o Escape. Bloquea el scroll del body. Entrada: overlay 0.2s; panel scale 0.95 a 1 y y 20 a 0, resorte 120/20.

### 4.5 EmprendedoresHome

Sección azul con borde `border-y white/10`. Encabezado alineado a la izquierda (`mb-24`): pill «Socio Estratégico Local» (amarillo sobre `blue-50/5`); h2 «Potenciamos tu \[pill MDQ\] Marca en Mar del Plata» (pill degradado amarillo de 64 a 96px de ancho, inline); párrafo de \~50 palabras con revelado palabra por palabra (30ms de stagger, 0.3s easeOut, y 8 a 0) más copia `sr-only`; línea amarilla de 96×2px.

Bento de 12 columnas desde `lg` con filas fijas de 340px (`lg:auto-rows-85`), `gap-6` (`lg:gap-8`). Móvil: apilado con alto automático.

| Tarjeta | Columnas | Tag | Título | Contenido | CTA |
| --- | --- | --- | --- | --- | --- |
| 1. Glass sobre azul | 7 × 2 filas | EMPRENDEDORES | Cuenta Corriente Flexible | Bajada y 4 ítems con ShieldCheck (sin volumen mínimo; tarifas LowCost con franjas de 3 hs; exclusividad; contrareembolso sin cargo) | «Conocé más →» a `/servicios/empresas-cuenta-corriente`, pill amarillo |
| 2. Amarilla | 5 × 1 | MERCADOLIBRE | Envíos Flex Meli | Bajada de 2 líneas | «Configurar Flex →» a `/servicios/enviosflex`, pill azul |
| 3. Blanca | 5 × 1 | CORPORATIVO | Soluciones Corporativas | Bajada de 3 líneas | «Abrir Cuenta Corriente →» a `/contacto`, pill amarillo |

Todas con doble bisel, ícono en caja amarilla con sombra dura, glow y ícono marca de agua animados. Hover: sube 6px con resorte snappy; la 1 suma borde amarillo/40 y `shadow-glow-yellow`.

Marquee «Marcas locales que confían en nosotros»: 10 nombres como texto display 2xl (Toy Piola Juguetería, Ama & Pola, Dropix 3D, El Cóndor, Starcel, Urbancow, Wanca, Catalina Indumentaria, Envases 3G, La Peri), `gap-16`, máscara degradada al 10% y 90%, 30s lineal infinito, pausa con hover o foco. Segunda copia `aria-hidden`.

### 4.6 SocialProofSection

Sección `blue-50` con bordes `y`. Encabezado: chip mono «5.0 / 5.0 EN GOOGLE · +120 VALORACIONES» (azul, blanco, 12 a 13px); h2 «La palabra de quienes \[VENDEN Y ENVÍAN\] en MDQ» con pill amarilla inline; CTA outline «VER EN GOOGLE MAPS» con ExternalLink (a `https://www.google.com/maps?q=Friuli+1972,+Mar+del+Plata`, nueva pestaña, `noopener noreferrer`). Desde `lg` título y CTA se alinean al pie.

Grilla 1, `md` 2, `lg` 3, `gap-6`, 6 reseñas (Karen Herrera, Agustin Torres, Alexis Bogarin, Lorenzo Elizagoyen, Emiliano Garri, NahuAri). Variantes en patrón: azul, blanca, amarilla / blanca, azul, blanca. Tarjeta: padding 32px, alto mínimo 340px, columna con `justify-between`: fila superior (5 estrellas y fecha relativa en pill mono), título Bebas xl o 2xl en mayúsculas lh 1, cuerpo sm, pie con avatar de 40px (inicial) y nombre en negrita.

| Variante | Fondo | Estrellas | Fecha | Avatar |
| --- | --- | --- | --- | --- |
| Azul | `blue-500`, sombra elevated | Amarillas | Amarillo | Amarillo |
| Blanca | Blanco, borde 2px amarillo | Azules | `blue-50` | Azul |
| Amarilla | `yellow-500`, glow amarillo | Azules | Blanca | Azul |

Estados: la tarjeta no es interactiva; el CTA tiene hover que invierte a fondo azul con texto blanco.

### 4.7 CtaSection

Sección azul `z-10`. Tarjeta de doble capa: carcasa glass (`white/10`, blur, borde `white/25`, radio 30px) con panel blanco de 20px de radio y grilla azul de 24px al 3%. Desde `lg`, dos columnas 50/50 (texto y formulario); en móvil se apila y el texto va centrado. Entrada con stagger de 0.1s (y 24 a 0).

Texto: badge «Cotización Inmediata», h2 «¿Listo para escalar la logística de tu e-commerce?», párrafo «Olvidate de la gestión de paquetes en Mar del Plata. Completá tus datos y te respondemos por WhatsApp al instante.» y, solo en `lg`, «Atención comercial < 5 MIN».

| Campo | Tipo | Detalle |
| --- | --- | --- |
| Tu Nombre | text, requerido, `autocomplete=name` | Placeholder «Ingresá tu nombre», ícono User |
| Empresa / Negocio | text, requerido, `autocomplete=organization` | Placeholder «Nombre de tu emprendimiento», ícono Store |
| Volumen Estimado Mensual | select, requerido | «Seleccioná una opción» (deshabilitada), «1 a 50 envíos», «51 a 200 envíos», «Más de 200 envíos»; ícono PackageSearch |

Inputs: alto 44px, borde 2px `blue-100/20`, `rounded-xl`, padding izquierdo 44px para el ícono. Foco: borde azul y anillo de 2px `blue-500/20`. Submit: «Hablar por WhatsApp», pill amarillo `min-h` 52px, Bebas xl, `shadow-glow-yellow`, ícono MessageSquare; hover scale 1.02, tap 0.98, hover de color a `yellow-400`.

Flujo: submit abre en pestaña nueva `api.whatsapp.com/send/?phone=542236602699&text=…` con el mensaje «Hola, soy {nombre} de {empresa}. Me interesa cotizar envíos para {volumen} paquetes mensuales.» No hay request al servidor ni estados de carga, éxito o error; la validación es la nativa del navegador.

### 4.8 Primitivos compartidos

**Badge.** Pill `inline-flex` con gap de 6px, Bebas en mayúsculas con tracking wider y borde de 1px. Ícono opcional a la izquierda. Radio `full` (predeterminado), `lg` o `md`. Es un `span` sin estados interactivos; solo `transition-colors`. No define truncado ni ancho máximo: un texto largo hace wrap dentro del pill.

| Tamaño | Padding | Texto |
| --- | --- | --- |
| `sm` | `px-2 py-0.5` | 10px |
| `md` (predeterminado) | `px-3 py-1` | 12px |
| `lg` | `px-4 py-1.5` | 14px |

| Variante | Fondo | Texto | Borde | Nota |
| --- | --- | --- | --- | --- |
| `urgent` | `yellow-500` | azul | `yellow-400` | `shadow-accent-sm` |
| `accent` | `yellow-500` | azul | `yellow-500` | `shadow-accent-sm`; casi igual a `urgent`; la usa el hero |
| `flex` | `yellow-100` | azul | `yellow-200` |  |
| `secure`, `economic` | `blue-50` | azul | `blue-200` | Idénticas entre sí |
| `neutral` (predeterminada) | blanco | azul | `blue-100` | `shadow-sm` |
| `outline` | transparente | azul | `blue-500` |  |
| `primary` | `blue-500` | blanco | `blue-500` |  |

**CTANestedPill.** Pill con etiqueta y un chip circular de 32px con `ArrowRight` de 16px (ícono reemplazable, a izquierda o derecha). La etiqueta se trunca con elipsis si no entra. Es un `Link` si recibe `href` y no está deshabilitado; en otro caso es un `button` (`type=button` por defecto). Deshabilitado: opacidad 50% y sin puntero. Al clic dispara analítica: los links a WhatsApp llaman a `whatsappClick`; el resto a `ctaClick` con el `id` o el texto. Foco: anillo de 2px azul con offset de 2px. Active: escala 0.98.

| Tamaño | Padding | Texto | Alto mínimo |
| --- | --- | --- | --- |
| `compact` | `px-4 py-1.5` | 12px | 36px |
| `default` | `px-5 py-2` | 14px | 44px |
| `large` (alias `lg`) | `px-8 py-3` | 16px | 52px |

| Variante | Reposo | Hover | Uso |
| --- | --- | --- | --- |
| `primary` | `yellow-500`, texto azul, `shadow-accent-sm` | `yellow-400`, `shadow-cta-glow`; el chip pasa a azul con flecha amarilla | CTA principal |
| `blue` | `blue-500`, texto blanco, glow azul de 24px | El fondo no cambia; chip amarillo que pasa a `yellow-400` | Sobre fondos amarillos |
| `elevated` | Blanco, borde `blue-100`, `shadow-elevated` | `shadow-hover-lift`, borde `blue-300` | Sobre azul |
| `outline` | Transparente, borde de 2px azul | Fondo `blue-50` | Secundario sobre blanco |
| `ghost` | Transparente | Fondo `blue-50` | Terciario |

En todas las variantes el chip se desplaza 4px a la derecha en hover.

**DoubleBezelCard.** Contenedor de dos capas. Exterior: radio 2xl, padding de 8px, `shadow-float`, fondo `blue-50/80`, borde `blue-100`; en hover pasa a `shadow-antigravity-deep` y borde `blue-300` (variante dark: borde `yellow-400/80`). Interior: radio xl, padding de 24px, `shadow-sm`, `overflow-hidden`; variante light en blanco con texto azul, variante dark en azul con texto blanco y borde `white/10`. Props: `variant` (light o dark), `hoverEffect` (activo por defecto), `outerClassName`, `innerClassName` y `className` (este va al exterior). El hover es solo de puntero fino y no hay equivalente de foco: la tarjeta no es interactiva.

**Knockout.** Cápsula `inline-block` rotada -1°, `rounded-full`, `px-3 py-1`, margen vertical de 4px, Anton en mayúsculas, interlineado 1.1 y tracking -0.02em. Dos tonos: `yellow` (amarillo con texto azul y glow amarillo de 28px al 45%) sobre azul, y `blue` (azul con texto blanco y glow azul de 24px) sobre amarillo. Componente de servidor, sin motion. En el hero va con `whitespace-nowrap`.

**HeroProceduralBackground.** Componente de servidor absoluto (`inset-0`), sin eventos de puntero. Capas con `tone=blue`:

1. Gradiente a 135°: #0950F6 al 0%, #0950F6 al 55%, #3570F8 al 100% (hex escritos a mano, no tokens).
2. Tres glows con blur de 80 a 100px: arriba a la izquierda, azul al 35% (500px); a la derecha a un 25% de altura, amarillo al 22% (600px, solo en las variantes express y lowcost); abajo al centro, azul al 40% (550px).
3. Grilla SVG de 48px con trazo blanco punteado de 0.75px y puntos amarillos de radio 1.5, opacidad 0.07.
4. Arte por variante en SVG de viewBox 1440×600 y opacidad 0.2. Express: dos arterias punteadas y dos puntos, la principal con `motion-safe:animate-pulse`. Lowcost: anillos concéntricos. Flex: corredores y cuadros. 3pl: polígono de 4 nodos. Community: red de líneas. Contact: radar con `motion-safe:animate-ping` a 4s.

Con `tone=yellow`: base plana #FFEC01, halo blanco superior al 55%, grilla azul al 5% y arte al 14%. La home usa `variant=express` y `tone=blue`. Reduced motion se resuelve con `motion-safe:` de CSS, sin esperar a la hidratación.

### 4.9 Contenido que viene de `promises.ts`

`promises.ts` se declara fuente única de promesas y umbrales para cotizadores, páginas, JSON-LD y `llms.txt`. Estas son las constantes que consume la home:

| Constante | Valor | Dónde aparece |
| --- | --- | --- |
| `EXPRESS_WINDOW_SHORT` | «Franja de 3 hs» | Stat ENTREGA de Express (carrusel) |
| `EXPRESS_LEAD_TIME` | «2 hs de anticipación» | Segmentos (urgentes) y ficha de Express |
| `LOWCOST_CUTOFF_TIME`, `LOWCOST_DELIVERY_DEADLINE` | «13:00 hs», «19:00 hs» | Segmentos (empresas) y ficha de LowCost |
| `FLEX_CUTOFF_TIME` | «15:00 hs» | Segmentos (Flex) y badge «Corte extendido» del carrusel |
| `STANDARD_WEIGHT_KG` | 5 | Stat PESO de Express y LowCost |
| `DROPOFF_DISCOUNT_PERCENT` | 20 | Ficha de E-Commerce Same Day y 24 hs |
| `SAME_DAY_FIXED_PRICE` | 6000 | Stat TARIFA y ficha de Same Day («$6.000 fijo») |

Sin uso en la home aunque existen: `EXPRESS_CUTOFF_TIME` («15:00 hs»), `FLEX_DELIVERY_DEADLINE` («20:00 hs»), `OPERATING_HOURS`, `SUPPORT_PHONE` y `CONTACT_EMAIL`.

**Tarifas (`pricing.ts`).** Es la fuente única de tarifas para la UI y pide no copiarlas a mano. Express: 0 a 3 km $3.700, 3 a 5 km $4.600, 5 a 7 km $6.100, 7 a 10 km $8.200, y desde 10 km distancia × $1.000. LowCost: $3.000, $4.000, $5.300, $7.000 y distancia × $700. Más de 20 km se muestra «consultar». La home solo muestra las bases de 0 a 3 km.

### 4.10 Header (`OptimizedHeader`) y drawer (`MobileNav`)

Header fijo (`fixed top-0`, ancho completo, z-50). Entra con opacidad y desplazamiento de -8px a 0 en 0.45s con ease cubic-bezier(0.25, 0.8, 0.25, 1); con reduced motion no anima. Contenedor `max-w-7xl` con `px-4`, `sm:px-6`, `lg:px-8`.

| Estado | Fondo | Padding | Borde y sombra |
| --- | --- | --- | --- |
| Arriba (scroll de 20px o menos) | `blue-700` | `py-4` | Borde inferior transparente |
| Con scroll (más de 20px) | `blue-700/95` con blur | `py-2.5` | Borde `white/10` y `shadow-elevated` |

La transición entre ambos estados dura 300ms.

| Elemento | Spec |
| --- | --- |
| Logo | Link a `/` (`id=nav-logo-opt`). Imagen `/logo-envios-simplified.webp` de 40×40 con `priority` y `sizes=40px`; en hover gira 8° y escala 1.04, en tap 0.97. Wordmark Anton 2xl (`sm:3xl`): «Envíos» blanco y «DosRuedas» amarillo, apilados en móvil y en línea desde `sm`; en hover estira con `kinetic-font-stretch` (scaleX 1.08) |
| Nav de escritorio (desde `lg`) | Inicio, Servicios (desplegable), Nosotros (desplegable) y Contacto. Bebas base en mayúsculas, `px-4 py-2.5`; hover con texto amarillo y fondo `white/10` |
| Desplegable Servicios (7) | Todos los Servicios `/servicios`, Envíos Express, Envíos LowCost, Envíos Flex (MeLi), Cuenta Corriente Flexible, E-commerce 24HS (`/servicios#ecommerce-24hs`), E-commerce Same Day |
| Desplegable Nosotros (4) | Portal Nosotros, Sobre Nosotros, Preguntas Frecuentes, Nuestras Redes |
| Panel del desplegable | 256px de ancho, `blue-700`, radio 2xl, borde `white/15`, `shadow-2xl`, a 8px del botón. Entra con resorte 420/28 (opacidad, y 4 a 0, escala 0.97 a 1, stagger de 30ms) y sale en 0.14s. Cada ítem lleva un ícono de 28px en caja `white/10` (en hover, caja amarilla con ícono azul) y la etiqueta en Bebas base y negrita |
| Teléfono y CTA (desde `lg`) | Link `tel:+542236602699` «223 660-2699» (mono base, negrita, ícono amarillo) y `CTANestedPill` default «Cotizá tu envío» a `/cotizar`. En `/`, `/servicios` y `/cotizar` es `outline` con borde y texto blancos (hover `white/10`), para no competir con el CTA primario de la página; en el resto es `primary` con un halo amarillo pulsante (2.4s, pausa de 1.5s, infinito, apagado con reduced motion) |
| Móvil (menos de 1024px) | Botón de teléfono de 44px (`aria-label=Llamar`) y botón de menú de 44px (`aria-expanded`, `aria-controls=mobile-navigation-dialog`); el ícono gira 90° al alternar entre menú y cierre (0.18s) |
| Comportamiento | Con el drawer abierto se bloquea el scroll (body fijo y restitución de la posición). Drawer y desplegables se cierran al cambiar de ruta. Los desplegables abren por hover y por clic |

| Drawer móvil | Spec |
| --- | --- |
| Panel | Desliza desde la derecha; ancho completo hasta 320px, alto `100dvh`, fondo `blue-700`, borde izquierdo `white/10`, `shadow-2xl`, z-100; resorte 380/32. Overlay `blue-700/70` con blur, z-99; un clic lo cierra. Con reduced motion no desliza y sale con fade |
| Cabecera | 64px: wordmark (link a `/`) y botón de cierre de 44px |
| Lista | Entrada escalonada (70ms, delay de 0.15s, x 24 a 0). Ítems de 48px en Bebas xl: Inicio, Servicios, Nosotros (acordeones con chevron que gira 180°) y Contacto. Subítems de 42px en Bebas base con ícono, con 50ms de delay por ítem. Solo una sección abierta a la vez (el estado `activeDropdown` se comparte con el escritorio) |
| Pie | Link de teléfono `+54 223 660-2699` (mono, 44px) y `CTANestedPill` primary large «Cotizá tu envío» de ancho completo que cierra el drawer |
| Teclado y foco | Escape cierra; Tab queda atrapado dentro; el foco inicial va a los 80ms al primer enlace o botón; al cerrar vuelve al botón de menú |

### 4.11 Carrusel de redes (`CarruselRedes`)

Sección azul (`brand-blue`) con `border-y white/10` y `py-20` (`md:py-32`), que aparece en todas las rutas entre el contenido y el footer. Pese al nombre, es una grilla estática de 3 tarjetas. Encabezado centrado (máx. 3xl): pill amarilla «Nuestra Comunidad Digital», h2 «SEGUÍ NUESTRO MOVIMIENTO» (4xl, `sm:5xl`, `lg:6xl`; «MOVIMIENTO» en amarillo), bajada y línea amarilla de 80×2px. Grilla de 1 columna y, desde `md`, 3 columnas con `gap-6` (`lg:gap-8`).

| Red | Badge (10px) | Handle | CTA | Destino | Estética |
| --- | --- | --- | --- | --- | --- |
| Facebook | FACEBOOK OFICIAL | Envíos DosRuedas | SEGUIR COMUNIDAD | `facebook.com/share/1RnSzyweir/` | Azul #1877F2 al 10%; botón #0B5ED7 (hover #0A4FC0) con texto blanco |
| Instagram | INSTAGRAM MDQ | @enviosdosruedas | VER CONTENIDO | `instagram.com/enviosdosruedas/` | Degradado #833AB4, #FD1D1D, #F77737 al 10%; botón con el degradado y texto blanco |
| WhatsApp | WHATSAPP DIRECTO | +54 223 660-2699 | INICIAR CHAT | `api.whatsapp.com/send/?phone=542236602699` | Amarillo de marca al 10%; botón amarillo con texto azul |

Los tres links abren en pestaña nueva con `rel=noopener noreferrer`.

Anatomía de la tarjeta: bisel doble. Exterior `rounded-2xl` con `p-2`, borde (más fuerte en hover), fondo `brand-blue/80` con blur, `shadow-xl`, y sube 6px en hover. Interior `rounded-xl` con `p-6` (`sm:p-7`), 390px de alto (430px desde `md`) y `overflow-hidden`. Dentro: marca de agua del ícono de 224px abajo a la derecha (en hover escala 1.25 y gira -12°); fila superior con badge y caja de ícono de 44px; título Anton 3xl/4xl; handle mono xs; descripción xs/sm; y abajo un separador con el CTA pill de ancho completo y un chip de `ArrowUpRight` de 28px que se desplaza 4px en hover. Hover: glow interno en degradado.

Entrada (GSAP ScrollTrigger): cada tarjeta pasa de y 50, opacidad 0 y escala 0.96 a su posición final, con stagger de 0.15s y 0.8s de duración (`power3.out`), una sola vez cuando el contenedor llega al 85% del viewport. Con reduced motion se muestran sin animar.

### 4.12 Footer (`OptimizedFooter`)

`<footer id=optimized-footer>` en `blue-700` con borde superior `white/10` y `overflow-hidden`. Franja amarilla de 6px arriba con sombra. Capas de fondo: halo radial amarillo al 8% arriba, halo radial azul al 50% abajo a la izquierda (azul sobre azul, no se ve) y grilla blanca de 32px al 5%. Contenedor `max-w-7xl` con `px-4`, `sm:px-6`, `lg:px-8`, `pt-16 pb-12`. Todo el footer es `select-none`.

| Bloque | Spec |
| --- | --- |
| Banner CTA | Tarjeta `rounded-2xl`, `blue/90`, borde `white/15`, blur, `shadow-2xl`, `mb-14`; columna en móvil y fila desde `md`. Izquierda: chip «Operaciones Activas Mar del Plata 2026» con un punto amarillo que pulsa (`animate-ping`, apagado con reduced motion), h3 «¿Tenés envíos para hoy? Los entregamos a tiempo.» (2xl/3xl, segunda frase amarilla) y bajada. Derecha: pill amarillo «Cotizá tu Envío» a `/cotizar` (alto mínimo de 48px) y botón «Chateá con Nosotros» (`white/10`, borde `white/20`) a WhatsApp con el mensaje precargado «Hola Envíos DosRuedas! Quiero hacer una consulta de envíos». Entrada: y 40 a 0 con resorte 260/22 |
| Grilla | 1 columna, `sm` 2 y desde `lg` 12 columnas con 4 por bloque, `gap-10` (`lg:gap-12`). Entrada escalonada de 120ms (y 28 a 0, resorte 280/24) |
| Columna 1: marca | Logo de 32px en caja de 44px, wordmark Anton 2xl/3xl y lema mono 10px «Tu solución confiable · Mar del Plata». Párrafo «Con más de 7 años de trayectoria…». «Canales Oficiales»: botones de 40px de Instagram y Facebook (ambos a `/nosotros/nuestras-redes`), WhatsApp amarillo (externo) y un chip «Centro de Depósito y Logística Local · Friuli 1972». Los íconos suben 4px y escalan 1.12 en hover (resorte 480/18) |
| Columna 2: servicios | h4 «Servicios y Cotizadores» con dos grupos: «Cotizador online» (Cotizá Express o LowCost) y «Servicios y planes» (Express, LowCost, Flex, Cuenta Corriente, E-commerce 24HS, E-commerce Same Day y «Ver todos los servicios» en amarillo y negrita). Hover: texto amarillo y 4px a la derecha |
| Columna 3: contacto | h4 «Base de Operaciones MDQ» con 4 tarjetas: Centro de Distribución (Friuli 1972), Línea Directa y WhatsApp (`tel:+542236602699`), Atención Comercial (email) y Horarios de Despacho (lunes a viernes 09:00 - 18:00 hs; sábados 10:00 - 15:00 hs). Texto de 12 a 13px |
| Separador | Línea `white/10` con un botón circular amarillo de 36px a la derecha (`aria-label=Volver arriba`) que sube con scroll suave; flota en loop de 2s (y 0, -5, 0), apagado con reduced motion |
| Pie legal | Fila de 12px: «© 2026 Envíos DosRuedas · Mar del Plata, Argentina.», Servicios, Cobertura, Guía MercadoLibre Flex, Nosotros, Sobre Nosotros, Preguntas Frecuentes y Nuestras Redes; a la derecha, Términos y Condiciones y Política de Privacidad. Columna en móvil y fila desde `md` |

## 5. Estados y casos límite

| Caso | Comportamiento actual / a definir |
| --- | --- |
| Carga | No hay datos remotos. Único async: canvas (placeholder vacío, sin salto de layout) e imágenes (`priority` solo en el hero; el resto lazy) |
| Imagen rota | Ningún bloque define fallback (mapa del hero, fondos de tarjetas). Definir color de respaldo |
| Sin JS o antes de hidratar | Hero, Segmentos y Social quedan legibles. Emprendedores y CTA nacen con `initial=hidden` (opacidad 0): invisibles hasta hidratar |
| Texto largo o traducción | Alturas fijas con `overflow-hidden`: bento de Emprendedores (340px) y tarjetas del carrusel (440 a 490px) recortan. Stats del carrusel se truncan |
| Fuentes | `display: swap` en las 4: hay cambio visible de ancho, crítico en Anton y Bebas en mayúsculas |
| Contenido variable | Reseñas fijas (6), partners fijos (10), horarios y precios parcialmente fijos en el código |
| Móvil táctil | No hay hover: la pausa de auto-rotación por hover no aplica; el canvas no se dibuja |

## 6. Responsive

Breakpoints usados: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. El carrusel decide por JS (menos de 640px) y escucha `resize`; el canvas decide una sola vez al montar.

| Bloque | Menos de 640px | 640 a 1023px | 1024px o más |
| --- | --- | --- | --- |
| Hero | 1 columna, centrado, CTAs apilados, fichas en esquinas | Fichas sobresalen, CTAs en fila | 7/5 columnas, texto a la izquierda |
| Segmentos | 1 columna | 2 columnas | 4 columnas |
| Canvas | No se dibuja | Se dibuja | Se dibuja |
| Carrusel | Sin 3D, 290px, paso de 140px | 3D, 350px, paso de 260px | Igual |
| Emprendedores | Apilado, alto auto | Apilado | Bento 12 columnas, filas de 340px |
| Social proof | 1 columna | 2 columnas | 3 columnas |
| CTA | Form debajo del texto, sin chip «< 5 MIN» | Igual | 2 columnas |

## 7. Animación y motion

Resortes: suave 100/20 (entradas), snappy 300/25 (hover y tap), carrusel 140/22, modal 120/20. Entradas con `whileInView` una sola vez y margen -50px (Emprendedores: stagger 0.12s; CTA: 0.1s; encabezado de Servicios: y 30 a 0).

| Elemento | Trigger | Animación | Duración | Easing |
| --- | --- | --- | --- | --- |
| Anillos del hero | Loop | Escala 0.6 a 3.2, fade | 3.2s | cubic-bezier(0.25, 1, 0.5, 1) |
| Ticker del hero | Loop | translateX 0 a -50% | 36s | lineal |
| Marquee de partners | Loop | translateX 0 a -50% | 30s | lineal |
| Glows y marcas de agua | Loop | Escala y rotación leves, opacidad | 3 a 5s | easeInOut |
| Pista «Ficha Técnica» | Loop | Opacidad 1 a 0.6 | 2s | easeInOut |
| Tarjetas del carrusel | Cambio de activa | Transform 3D | Resorte 140/22 | — |
| Auto-rotación | Timer | Avanza una tarjeta | cada 4.5s | — |
| Ficha técnica | Abrir y cerrar | Fade y scale 0.95 | 0.2s y resorte 120/20 | easeOut |
| Revelado de párrafo | Entrada en vista | Palabra por palabra | 0.3s, 30ms de stagger | easeOut |
| Hover de tarjetas | Hover | y -6px o -4px | Resorte snappy | — |
| Canvas | rAF | Partículas y resaltado por cercanía | continuo | lineal |

Reduced motion: `MotionConfig user`, `useReducedMotion` en todos los componentes de motion y una lista CSS en `globals.css` (floaty, shuttle, roundtrip, pulse-ring, grow-x, marquee-left). Los tokens `--ease-*` y `--duration-*` solo los usan utilidades CSS; los componentes de motion usan resortes propios.

## 8. Accesibilidad (especificación objetivo)

- **Orden de foco:** header (`ClientLayout`), Hero (cotizar, ver servicios), Segmentos (4 CTAs), Servicios (toggle, anterior, siguiente, 4 tarjetas, 4 dots, ficha), Emprendedores (3 CTAs), Social (Maps), CTA (3 campos, submit), footer.
- **Landmarks:** un único h1 (hero). `page.tsx` es un `div`: `ClientLayout` aporta `<main>` (confirmado). Skip link: ausente en ClientLayout; tampoco está en OptimizedHeader: agregarlo.
- **Carrusel:** contenedor `role=region` con `aria-roledescription=carousel` y etiqueta; tarjetas no centrales con `tabindex=-1` (o `inert`); toggle con `aria-pressed`; no anunciar cambios automáticos en vivo.
- **Ficha técnica:** `role=dialog`, `aria-modal` (ya están), más foco inicial dentro, trampa de foco, retorno al disparador, fondo inerte y cierre al clicar el overlay.
- **Canvas y glows:** `aria-hidden`. Los dos marquees necesitan control de pausa (WCAG 2.2.2).
- **Formulario:** labels asociados y `autocomplete` (ya están); agregar errores en línea con `aria-describedby`, mensaje de éxito y foco visible consistente.
- **Reseñas:** lista semántica (`ul/li`) y una sola etiqueta de calificación por tarjeta.
- **Contraste:** placeholders (azul al 40% sobre blanco ≈ 2:1) y bordes de input (≈ 1.1:1) no cumplen. Texto de 10px (tags, fichas, stats) es el mínimo del sistema: revisar legibilidad.
- **Targets táctiles:** 44px mínimo. Incumplen: toggle de rotación (\~32px), botón X de la ficha (36px).

## 9. Hallazgos priorizados

**P1: rompen funcionalidad o accesibilidad**

1. `ServicesOverview`: el cálculo de offset `(index - activeIndex + total/2) % total - total/2` devuelve negativos en JavaScript. Con la 4.ª tarjeta activa, la 1.ª queda en offset -3 (lejos a la izquierda) en vez de +1. Normalizar con `((d % n) + n) % n` y restar `n` si supera `n/2`.
2. `ServicesOverview`: las flechas izquierda y derecha se escuchan en `window` y secuestran el teclado en toda la página (por ejemplo al operar el select del CTA). Limitar al foco dentro del carrusel.
3. Ficha técnica sin trampa de foco, sin foco inicial ni retorno, fondo no inerte y sin cierre por overlay. Escape se registra dos veces (dos effects).
4. `onMouseLeave` reactiva la auto-rotación aunque el usuario la haya pausado con el toggle.
5. Con reduced motion, las tarjetas laterales (opacidad 0) siguen enfocables con Tab.
6. `EmprendedoresHome`: el pill MDQ tiene `aria-label` «Envíos DosRuedas» y el lector dice «Potenciamos tu Envíos DosRuedas Marca en Mar del Plata».
7. `CtaSection`: select con `appearance-none` sin chevron (no parece desplegable); placeholders y bordes de input con contraste insuficiente.
8. El marquee de partners usa `animate-logos-scroll`, que no está en la lista de reduced motion: queda en loop con duración 0.01ms. Ningún marquee tiene pausa por teclado o táctil.

**P2: calidad y consistencia**

9. Servicios duplicado: `page.tsx` envuelve `ServicesOverview` con otra sección, otro eyebrow «Nuestros Servicios» y otro h2 (dos h2, sección dentro de sección, doble padding). Dejar uno.
10. **Verificar:** el canvas probablemente queda tapado. `ServicesOverview` es `relative` con `bg-brand-blue` opaco y está después del canvas (z-0) en el DOM, así que lo cubre salvo detrás del encabezado. Además los nodos se calculan sobre la altura total de la sección.
11. Canvas: `progress += speed * 0.016` por frame hace que una conexión tarde ≈ 5 minutos en recorrerse a 60 fps (el doble de rápido a 120 Hz); usar delta de tiempo. El timeline de GSAP no mueve nada (`timelineProgress` sin uso): quitar GSAP o usarlo. Sin `devicePixelRatio` (borroso en retina); `ctx.font` con `var(--font-sans)` no se resuelve en canvas; el chequeo de menos de 640px es solo al montar.
12. Efectos invisibles por la paleta colapsada: glows `brand-blue-500/5` sobre azul, `border-brand-blue-500/10` sobre el marquee, `decoration-brand-blue-500` en el h2 de `ServicesOverview` y las sombras duras `var(--color-brand-blue-500)` sobre tarjetas azules.
13. `SocialProofSection`: `borderColor` sin `border-t` (el separador del autor nunca se dibuja); `card-token` y `button-pill` no existen en el `globals.css` recibido (verificar que estén en otro archivo); «5.0 / 5.0 · +120 valoraciones» y «Hace N semanas» escritos a mano; el link a Maps es una búsqueda por dirección con `aria-label` «Ver todas las opiniones»; estrellas con doble `aria-label`; `ExternalLink` recibe un `<path>` y props de SVG crudo; el título compuesto no tiene espacios entre texto y pill.
14. `CtaSection`: `window.open` sin `noopener`; el mensaje queda «para Más de 200 paquetes mensuales»; sin estados de éxito o error; los campos se desplazan 3px al hover; «< 5 MIN» solo en desktop contradice «al instante»; ids inconsistentes (`cta-name`, `volume-select`).
15. Precios y horarios escritos a mano: «$3.700 Base», «$3.000 Base», «antes de las 20:00 hs» (Flex), «corte 13:00» y «19hs». Moverlos a `@/lib/promises` como el resto.
16. Los stats de las tarjetas usan `truncate` en celdas de \~80px y recortan «Programado en el día», «Zonificado LowCost» y «Same Day / 24 hs» sin tooltip.
17. `globals.css`: `--font-sans: var(--font-sans, "Outfit")` se referencia a sí mismo. **Verificar** con `getComputedStyle(document.body).fontFamily` que resuelva a Outfit.

**P3: limpieza**

18. `use client` innecesario en `SegmentosHome` y `SocialProofSection`; imports sin uso en `SegmentosHome` (`ShoppingBag`, `ars`, `DROPOFF_DISCOUNT_PERCENT`, `SAME_DAY_FIXED_PRICE`).
19. El hero usa `<a href="/servicios">` en vez de `next/link`.
20. Flechas «→» como texto sin `aria-hidden`; `h3` dentro de `<button>` en las tarjetas del carrusel; `isCenter` se deduce de `opacity === 1`.
21. Emprendedores corre ≈ 7 animaciones infinitas a la vez sin pausar fuera de pantalla: costo en móviles.
22. Foco inconsistente: el hero define anillo amarillo; Segmentos, Emprendedores y Social no.
23. Flex aparece 3 veces (Segmentos, carrusel y Emprendedores) con CTAs distintos: decisión de producto.
24. Marcas locales como texto: confirmar que tienen autorización de uso de nombre.

**Segunda lectura: layout, primitivos y `promises.ts`**

25. **P2.** `CTANestedPill` en modo link no reenvía al `<a>` el `id` ni ningún otro prop (`aria-*`, `data-*`): solo los usa para analítica. El `id=hero-cta-cotizar` del hero no existe en el DOM. Reenviar los props restantes al `Link`.
26. **P2.** Foco, tamaños y analítica de los CTA. El anillo de foco predeterminado de `CTANestedPill` es azul y no se ve sobre azul (solo el hero lo sobrescribe); `compact` mide 36px, bajo los 44px. La utilidad `cta-nested-pill` de `globals.css` fija `min-height: 56px` y `scale(0.97)` en active, y choca con `min-h-*` y `active:scale-98` del componente: **Verificar** qué alto renderiza cada tamaño. Los CTA de Segmentos, Servicios, Emprendedores y Social usan `<Link>` o `<a>` sueltos, así que no pasan por `ctaClick`: **Verificar** si hay otro tracking.
27. **P2.** Fondo del hero. Los glows `rgba(9,80,246,…)` (arriba a la izquierda y abajo) sobre la base #0950F6 no cambian nada; solo el amarillo se ve. El gradiente termina en #3570F8 abajo a la derecha, donde el texto blanco da 4.4:1 (el ticker, de 16 a 17px, cae ahí). El arte express usa `preserveAspectRatio=none` y deforma círculos y trazos al estirarse al alto del hero. Tres blurs de 80 a 100px sobre capas de 500 a 600px cuestan pintado en móviles. El fondo no tiene `aria-hidden`.
28. **P2.** Copy de peso. Las tarjetas dicen «Hasta 5 kg» (`STANDARD_WEIGHT_KG`), pero `promises.ts` explica que 5 kg es lo que entra sin recargo y que no hay techo numérico publicado (decisión del dueño, 2026-09-30): más de 5 kg o 40 × 40 × 30 cm se coordina con recargo desde $1.800. Reformular el stat (por ejemplo «Sin recargo hasta 5 kg») y revisar la etiqueta «Capacidad» de la ficha.
29. **P2.** Valores sin fuente única, además del hallazgo 15. «Same-Day: entrega antes de 19hs con corte 13:00» no tiene constante y repite los números de LowCost: confirmar con el dueño que el corte de Same Day es el mismo. «$3.700 Base» y «$3.000 Base» tampoco tienen constante (probable lugar: `pricing.ts`, sin leer). La ficha Flex escribe «20:00 hs» aunque existe `FLEX_DELIVERY_DEADLINE`. El JSON-LD y el WhatsApp del CTA repiten teléfono, email y horarios a mano aunque existen `SUPPORT_PHONE`, `CONTACT_EMAIL` y `OPERATING_HOURS`; hoy coinciden.
30. **P3.** `Badge` y `DoubleBezelCard` llevan `use client` sin necesitarlo. `Badge` tiene variantes idénticas (`secure` y `economic`; `urgent` y `accent` casi) y no aplica `font-bold` aunque su comentario lo pide. En `DoubleBezelCard` el comentario habla de radio de 16px y el componente suma `rounded-2xl` (24px según tokens) sobre la utilidad `double-bezel-outer` (16px): **Verificar** cuál gana.
31. **P3.** `Knockout` dentro del h1 deja el nombre accesible sin pausa («…última milla Somos la solución…»): sumar un punto o un guion. Su interlineado de 1.1 y su margen vertical alteran el ritmo del h1 (0.92).
32. **P3.** Resuelto con `ClientLayout`: existe `<main id=main-content>`, así que el punto de landmarks de la sección 8 queda cubierto. No hay skip link en `ClientLayout`: tampoco está en `OptimizedHeader`. `main` lleva `pt-18` por un header que no se leyó: sumar `scroll-margin-top` a las anclas.
33. **P3.** El placeholder de `CarruselRedes` mide 250px y solo se ve en navegación del lado del cliente mientras carga el chunk (con SSR activo el HTML inicial ya trae la sección): riesgo bajo de salto de layout. **Verificar**.
34. **P3.** Layout raíz: la hoja de Leaflet carga desde unpkg en todas las rutas (conviene cargarla solo donde haya mapa); cuatro fuentes con `preload`; dos IDs de Google bajo una sola etiqueta; la descripción y el Open Graph de `page.tsx` repiten los del layout.

**Tercera lectura: header, carrusel, footer, analítica y tarifas**

35. **P1.** `MobileNav`: el effect depende de `onClose`, que `OptimizedHeader` pasa como función nueva en cada render. Al desplegar un submenú cambia `activeDropdown`, el header se re-renderiza, el effect se limpia (devuelve el foco al botón del menú) y 80ms después manda el foco al primer elemento del drawer. El foco salta cada vez que se abre una sección. Estabilizar `onClose` con `useCallback`.
36. **P2.** Flecha invisible en el CTA del header: en `/`, `/servicios` y `/cotizar` usa `variant=outline` sobre azul, el chip de esa variante lleva texto `blue-500` (azul sobre azul) y el header no pasa `iconClassName`.
37. **P2.** Desplegables de escritorio: abren por hover y por clic (un clic justo después del hover los cierra); el `mt-2` deja 8px entre botón y panel que pueden disparar `mouseleave` (**Verificar**); no cierran con Escape ni al perder el foco; usan `aria-haspopup=menu` sin `role=menu` ni `menuitem` ni navegación con flechas; ningún ítem marca la página actual con `aria-current` aunque el header ya usa `usePathname`.
38. **P2.** Instagram en el carrusel: texto blanco sobre el degradado da 2.8:1 sobre el naranja #F77737 y 3.9:1 sobre el rojo #FD1D1D, bajo AA para texto de 12 a 14px. Facebook e Instagram usan colores fuera de la paleta de tres colores, y el hover #0A4FC0 es más oscuro que #0950F6, que la marca fija como tope: decisión de diseño a confirmar.
39. **P2.** `select-none` en la sección del carrusel y en todo el footer impide seleccionar y copiar teléfono, email y dirección.
40. **P2.** Analítica incompleta. `phoneClick` no se usa en ningún `tel:` (header, drawer, footer). Los links a WhatsApp sueltos (footer, carrusel) y el envío del formulario del CTA no llaman a `whatsappClick` ni a `formSubmit`: la conversión del formulario de la home no se mide. Los CTA del header y del drawer salen como `cta_click` con id `cta_pill` y el mismo texto, indistinguibles. `trackEvent` descarta los eventos si `window.gtag` no existe y `gtag` se define en un script `lazyOnload`: los clics tempranos se pierden.
41. **P2.** Corrige el hallazgo 29: `pricing.ts` ya tiene `EXPRESS_TIERS` y `LOW_COST_TIERS` y pide no copiar sus valores, pero las tarjetas y fichas escriben «$3.700» y «$3.000» a mano. Usar `EXPRESS_TIERS[0].price` y `LOW_COST_TIERS[0].price`.
42. **P2.** Datos repetidos a mano. El teléfono aparece en header, drawer, footer, carrusel, CTA y JSON-LD; el email y los horarios en footer y JSON-LD. Hay años fijos en «© 2026» y «Operaciones Activas Mar del Plata 2026», y «más de 7 años» en el footer y en la tarjeta Express. Unificar en `promises.ts` y calcular el año. El Facebook también difiere: el JSON-LD usa `facebook.com/enviosdosruedas/` y el carrusel un enlace `share/…` (verificar cuál es el oficial). En el footer, los íconos de Instagram y Facebook llevan a `/nosotros/nuestras-redes`, no a los perfiles.
43. **P3.** Header y skip link. Corrige el hallazgo 32: tampoco hay skip link en `OptimizedHeader`. El alto del header no coincide con certeza con el `pt-18` (72px) del `<main>`: 76px arriba y 64px con scroll si el CTA mide 44px, o 88px arriba si prevalece el `min-height: 56px` de `cta-nested-pill` (hallazgo 26): **Verificar** que el hero no quede bajo el header. El logo tiene `alt` «Logo Envíos Dos Ruedas» junto al texto «Envíos DosRuedas» (nombre repetido), y el teléfono del header no lleva `+54`.
44. **P3.** `CarruselRedes` carga GSAP y ScrollTrigger en todas las rutas para una entrada escalonada que `motion` ya resuelve (GSAP también está en el canvas de Servicios). Rutas del footer a verificar: `/cobertura` y `/guias/envios-flex-mar-del-plata`. Las etiquetas de 10px «Cotizador online» y «Servicios y planes» usan `blue-50/70` sobre azul (≈ 3.2:1). El botón «Volver arriba» mide 36px y flota en loop infinito.

## 10. Pendientes

- Ya no quedan componentes de la home sin leer. Solo falta el barrel `@/components/ui` (`index.ts`), que únicamente reexporta.
- Confirmar en el navegador los puntos marcados **Verificar** (10, 13, 17, 26, 27, 30, 37 y 43).
- Assets a revisar: `/heroes/inicio-mapa.webp`, `/cards/fondo_*.webp`, `/logo-envios-simplified.webp`, `/og-image.jpg`.
- Orden sugerido de implementación: P1 (1 a 8 y 35), luego 25, 28, 36 y 40 (CTA, copy de peso, flecha del header y analítica), luego unificar títulos y paddings (secciones 2 y 3) y el resto de P2.
