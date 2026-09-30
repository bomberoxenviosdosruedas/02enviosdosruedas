# Prompts: ajustar los colores de los textos de los heros de figma/secciones

Cinco prompts en lenguaje natural para que una IA (Claude Code u otro agente con acceso al repo) analice cada hero aislado de `docs/propuestas/html_adaptados/figma/secciones/` y le aplique a **cada texto** el mismo tratamiento de color que tiene su componente real en `src/components/`.

Cómo usarlos: pegá primero el **Contexto común** y después **un solo** prompt de hero por tarea. Cada prompt se puede usar suelto: repite lo imprescindible.

Los colores de cada prompt salen del código actual (2026-09-30):

- `src/components/ui/Knockout.tsx`: cápsula amarilla, texto azul, rotada -1°, `rounded-full`, brillo amarillo.
- `src/components/ui/Badge.tsx`: variante `accent` amarilla con texto azul; variante `outline`.
- `src/components/ui/CTANestedPill.tsx`: variante `primary` amarilla con texto azul y chip de ícono.
- Los cinco heros listados en cada prompt.

---

## Contexto común (pegar antes de cualquier prompt)

> Estás trabajando en el repo de Envíos DosRuedas (`C:\Users\prest\proyectos\02enviosdosruedassetiembre`). Antes de tocar nada, leé `AGENTS.md` y la sección 2 (colores) y la 3 (tipografía) de `DESIGN.md`.
>
> En `docs/propuestas/html_adaptados/figma/secciones/` hay cinco heros aislados, cada uno en un HTML con su CSS y su JS adentro. Ya tienen el fondo azul de marca `#0950F6` y los textos del sitio real. Lo que falta es que **el color de cada texto** sea igual al de su componente React en producción. Hoy los cinco usan un esquema simplificado:
> - badge en contorno blanco,
> - titular todo blanco,
> - bajada blanca al 90 %,
> - botón primario amarillo,
> - botón secundario como caja con borde blanco.
>
> **Tu tarea es solo de color y de tratamiento de texto.** No cambies el copy, el orden de los elementos, el collage de la derecha, las imágenes, el layout, el JS ni las animaciones. No toques ningún archivo fuera del HTML que te indique el prompt.
>
> **Paleta permitida (nada más):**
> - `#0950F6` azul, techo de oscuridad
> - `#3570F8`, `#628FF9`, `#8EAFFB`, `#BACEFD`, `#E6EEFE`
> - `#FFEC01` amarillo, con hover `#FFF12E` y pressed `#E6D400`
> - `#FFFFFF`
> - `rgba` de esos mismos colores
>
> Nada de negro, grises, verde ni hex arbitrarios. Anton y Bebas Neue siempre en peso 400.
>
> **Contrastes de referencia:**
> - Blanco sobre `#0950F6`: 6.02:1.
> - Blanco al 85 % sobre `#0950F6`: 4.76:1. Es el mínimo para texto normal; no bajes de 85 %.
> - `#0950F6` sobre `#FFEC01`: 4.94:1.
> - Texto amarillo `#FFEC01` sobre `#0950F6`: 4.94:1. Válido.
> - Nunca uses texto amarillo sobre blanco.
>
> **Cómo trabajar:**
> 1. Leé el componente React indicado y anotá, elemento por elemento, qué clases de color usa. Si una clase es un token (`brand-blue-900`, `brand-yellow-500`), resolvé su valor en `src/app/globals.css`: `brand-blue-900`, `brand-blue-700` y `brand-blue-500` valen todos `#0950F6`.
> 2. Leé el HTML del hero y armá una tabla **elemento | color actual en el HTML | color en el componente | cambio**.
> 3. Aplicá los cambios en el HTML. Preferí agregar reglas CSS al final del `<style>` con selectores bajo `#hero`, en vez de reescribir reglas existentes, y cambiá el markup solo donde haga falta (por ejemplo, envolver la palabra del knockout en un `<span>`).
> 4. Si al cambiar un color algo del collage queda ilegible o se funde con el fondo, avisalo en la respuesta; no lo "arregles" rediseñando.
>
> **Verificación antes de terminar:**
> - Todo hex del archivo está en la paleta.
> - No hay em-dash (—) ni en-dash (–).
> - Sigue habiendo un solo `<h1>`.
> - Si tenés navegador (chrome-devtools), abrí el archivo con `file:///`, mirá desktop y mobile y chequeá la consola.
>
> Respondé con la tabla de cambios, qué verificaste y cualquier diferencia que no pudiste replicar.

---

## Prompt 1: `hero-inicio.html` ↔ `src/components/home/HeroAnimado.tsx`

> Ajustá los colores de los textos de `docs/propuestas/html_adaptados/figma/secciones/hero-inicio.html` para que coincidan con `src/components/home/HeroAnimado.tsx`. Leé el componente completo antes de empezar.
>
> Lo que tenés que encontrar en el componente y replicar en el HTML:
> - **Badge "Flota propia · Todo Mar del Plata":**
>   - Hoy va en contorno blanco. En el componente usa `Badge` en variante `accent`: fondo amarillo `#FFEC01`, texto `#0950F6` y borde amarillo, en Bebas mayúscula.
>   - Revisá si el componente le agrega rotación (`-rotate-1`) y el ícono de rayo, y replicalo.
> - **Titular:** tres líneas en blanco.
>   - La frase **"última milla"** va en *knockout* (`src/components/ui/Knockout.tsx`, tono `yellow`): cápsula `#FFEC01` con texto `#0950F6`, `rounded-full`, rotada -1°, padding horizontal de unos 12 px, brillo `0 0 28px rgba(255,236,1,0.45)` y `white-space: nowrap`.
>   - La tercera línea, **"Somos la solución a tus envíos"**, en el componente es un `span` en bloque dentro del mismo `h1`, en blanco. En el HTML hoy es más chica y va al 90 %. Verificá en el componente si tiene otro tamaño y, si no lo tiene, dejala del mismo color blanco que el resto del titular.
> - **Bajada:** blanco al **85 %** (`text-white/85`), peso liviano de Outfit (`font-light`). Hoy va al 90 %.
> - **CTA primario "Cotizá tu envío":** `CTANestedPill` variante `primary`, píldora `#FFEC01` con texto `#0950F6` y un chip redondo con flecha a la derecha. Ya es amarillo; revisá que el texto sea `#0950F6` y agregá el chip de flecha con un ícono Phosphor (`ph-arrow-right`).
> - **CTA secundario "Ver servicios":** hoy es un botón con borde blanco. En el componente es un **link de texto blanco** en Bebas mayúscula, subrayado amarillo `#FFEC01` de 2 px con `text-underline-offset: 4px`, con altura táctil mínima de 44 px y un ícono de flecha. Sacale el borde y el fondo.
> - Si el componente tiene otros textos visibles en el bloque de copy que el HTML no muestra, listalos en la respuesta pero **no los agregues**.
>
> Seguí el Contexto común para la paleta, los contrastes y la verificación.

---

## Prompt 2: `hero-envios-express.html` ↔ `src/components/servicios/express/ExpressHero.tsx`

> Ajustá los colores de los textos de `docs/propuestas/html_adaptados/figma/secciones/hero-envios-express.html` para que coincidan con `src/components/servicios/express/ExpressHero.tsx`. Leé el componente completo antes de empezar.
>
> Lo que tenés que encontrar en el componente y replicar en el HTML:
> - **Badge "Mensajería en moto · Flota propia":** `Badge` variante `accent`, fondo `#FFEC01`, texto `#0950F6`, ícono de rayo. Revisá si lleva rotación -1° y copiala. Hoy va en contorno blanco.
> - **Titular:** "Envíos Express," en blanco. **"puerta a puerta"** va en *knockout* amarillo: cápsula `#FFEC01`, texto `#0950F6`, `rounded-full`, rotada -1°, brillo `0 0 28px rgba(255,236,1,0.45)` y sin corte de línea.
> - **Bajada:** blanco al **85 %** y Outfit liviano. Hoy va al 90 %.
> - **CTA primario "Cotizá tu envío Express":** píldora `#FFEC01`, texto `#0950F6`, chip de flecha a la derecha, como `CTANestedPill` `primary`.
> - **CTA secundario "O escribinos por WhatsApp":** link de texto blanco en Bebas mayúscula, subrayado amarillo de 2 px con offset de 4 px y el ícono de WhatsApp. **Sin borde ni fondo de botón.** Si el componente pinta el glifo de WhatsApp de otro color, respetá la regla de marca: nada de verde; el glifo va blanco o azul.
> - **Elementos del componente que el HTML no tiene:** el riel "A → Retiro · Entrega → B" y los chips "Franja de 3 hs / $3.700 / 5 kg". Anotá en la respuesta cómo se colorean (valor mono en `#FFEC01`, rótulo en blanco, caja `rgba(255,255,255,0.10)` con borde `rgba(255,255,255,0.20)`), pero **no los agregues** salvo que el HTML ya tenga un elemento equivalente.
>
> Seguí el Contexto común para la paleta, los contrastes y la verificación.

---

## Prompt 3: `hero-sobre-nosotros.html` ↔ `src/components/nosotros/sobre-nosotros/AboutHero.tsx`

> Ajustá los colores de los textos de `docs/propuestas/html_adaptados/figma/secciones/hero-sobre-nosotros.html` para que coincidan con `src/components/nosotros/sobre-nosotros/AboutHero.tsx`. Leé el componente completo antes de empezar.
>
> Lo que tenés que encontrar en el componente y replicar en el HTML:
> - **Badge "Identidad · Mar del Plata":** este es distinto a los demás. Usa `Badge` variante **`outline`**, sobrescrita con borde amarillo al 60 % (`rgba(255,236,1,0.6)`), **texto amarillo `#FFEC01`**, fondo transparente, rotado -1° y con ícono de escudo. Hoy el HTML lo tiene con texto y borde blancos. El texto amarillo sobre `#0950F6` da 4.94:1, así que es válido.
> - **Titular:** tres líneas en blanco: "Más que cadetería," / "somos logística" / "de confianza". La del medio, **"somos logística"**, va en *knockout* amarillo: cápsula `#FFEC01`, texto `#0950F6`, `rounded-full`, rotada -1° y brillo amarillo. Revisá si el componente le pone `whitespace-nowrap`.
> - **Bajada:** blanco al **85 %** y Outfit liviano. El texto del HTML difiere a propósito del componente en una frase ("coordinación directa por WhatsApp" en lugar de "soporte en tiempo real"). **No lo cambies**; solo el color.
> - **CTA primario "Trabajemos juntos":** píldora `#FFEC01`, texto `#0950F6`, chip de flecha a la derecha.
> - **CTA secundario "Escribinos":** link blanco en Bebas mayúscula, subrayado amarillo de 2 px con offset de 4 px y el ícono de WhatsApp. Sin borde de botón.
> - **Elementos del componente que el HTML no tiene:** la palabra fantasma gigante "Dos Ruedas" (blanco al 6 %), los chips "+7 / 100% / 20 km" y la ficha de la base. Mencionalos en la respuesta con sus colores, pero **no los agregues**.
>
> Seguí el Contexto común para la paleta, los contrastes y la verificación.

---

## Prompt 4: `hero-contacto.html` ↔ `src/components/contacto/ContactHero.tsx`

> Ajustá los colores de los textos de `docs/propuestas/html_adaptados/figma/secciones/hero-contacto.html` para que coincidan con `src/components/contacto/ContactHero.tsx`. Leé el componente completo antes de empezar.
>
> Lo que tenés que encontrar en el componente y replicar en el HTML:
> - **Badge "Conexión directa":** `Badge` variante `accent`, fondo `#FFEC01`, texto `#0950F6` y el ícono de globo de chat. Revisá si lleva rotación -1°. Hoy va en contorno blanco.
> - **Titular:** "Escribinos," en blanco. **"te respondemos"** va en *knockout* amarillo: cápsula `#FFEC01`, texto `#0950F6`, `rounded-full`, rotada -1° y brillo `0 0 28px rgba(255,236,1,0.45)`.
> - **Bajada:** blanco al **85 %** y Outfit liviano. El texto del HTML difiere a propósito del componente ("te cotizamos por WhatsApp" y "Operamos desde la base"). **No lo cambies.**
> - **CTA primario "Escribinos por WhatsApp":** píldora `#FFEC01`, texto `#0950F6`, ícono de WhatsApp **en azul `#0950F6`**; nada de verde. Chip de flecha a la derecha si el componente lo muestra.
> - **CTA secundario "Completá el formulario":** link blanco en Bebas mayúscula, subrayado amarillo de 2 px con offset de 4 px y un ícono de chevron hacia abajo (`ph-caret-down`). Sin borde de botón.
> - **Elemento del componente que el HTML no tiene:** el "conmutador" de dos canales.
>   - Filas con fondo `rgba(255,255,255,0.08)` y borde `rgba(255,255,255,0.15)`.
>   - Título en Bebas blanco y dato mono en blanco al 85 %.
>   - Ícono de WhatsApp sobre cuadrado amarillo y pin azul sobre cuadrado blanco.
>   - Chip "Lun a sáb" amarillo con texto azul.
>
>   Describilo en la respuesta, pero **no lo agregues**. El componente pinta el glifo de WhatsApp en verde `#25D366`: esa excepción no se replica en la propuesta.
>
> Seguí el Contexto común para la paleta, los contrastes y la verificación.

---

## Prompt 5: `hero-cotizar.html` ↔ `src/components/cotizar/unified/CotizadorHero.tsx`

> Ajustá los colores de los textos de `docs/propuestas/html_adaptados/figma/secciones/hero-cotizar.html` para que coincidan con `src/components/cotizar/unified/CotizadorHero.tsx`. Leé el componente completo antes de empezar.
>
> Lo que tenés que encontrar en el componente y replicar en el HTML:
> - **Badge "Dos servicios · Una sola carga":** `Badge` variante `accent`, fondo `#FFEC01`, texto `#0950F6` y un ícono de flechas comparando. Revisá si lleva rotación. Hoy va en contorno blanco.
> - **Titular:** este hero **no usa el componente `Knockout`**, sino un `span` propio. Lee "COTIZÁ TU **ENVÍO** / Y COMPARÁ".
>   - Todo va en blanco salvo **"ENVÍO"**, que va en una caja: fondo `#FFEC01`, texto `#0950F6` (`brand-blue-900` resuelve a `#0950F6`), esquinas **`rounded-lg`** (verificá el valor en `globals.css`; en este repo `rounded-lg` son 12 px, no una píldora), rotada -1° y brillo amarillo (`shadow-glow-yellow`, que vale `0 0 25px rgba(255,241,46,0.45)`). Tiene un pequeño margen lateral.
>   - En el HTML actual el titular está partido en dos `span` ("Cotizá tu envío" / "y compará"): envolvé solo la palabra "envío" en la caja.
> - **Bajada:** acá es blanco al **90 %** (`text-white/90`), no al 85 %. Outfit liviano.
> - **CTA "Cargar mi envío":** único CTA, píldora `#FFEC01`, texto `#0950F6` y chip con ícono. Revisá qué ícono usa el componente y usá el equivalente de Phosphor.
> - **Fondo:** el componente usa `bg-brand-blue-700`, que en este repo vale `#0950F6`. Confirmalo en `globals.css` y no cambies el fondo si ya es `#0950F6`.
> - **Elemento del componente que el HTML no tiene:** el panel de 3 pasos.
>   - Número mono en `#FFEC01`, título en Bebas blanco y bajada en blanco al 85 %.
>   - Ícono en blanco al 60 %, solo decorativo.
>
>   Describilo en la respuesta, pero **no lo agregues**. Ojo: "blanco al 60 %" no alcanza contraste para texto; en la propuesta solo se permitiría en íconos.
>
> Seguí el Contexto común para la paleta, los contrastes y la verificación.
