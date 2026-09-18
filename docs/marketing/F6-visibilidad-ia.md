# F6 — Visibilidad en IA (GEO / respuestas de asistentes)

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: repo clonado (`src/app/robots.ts`, `src/app/sitemap.ts`, `llms.txt`, `src/components/seo/SchemaMarkup.tsx`, páginas de `src/app/**`, `src/lib/pricing.ts`, `prisma/schema.prisma`), `docs/marketing/F2-4-brand-review.md`, búsqueda web real (dos consultas), y una herramienta externa de terceros (SearchFIT) a título informativo.

Nota de modo: esta fase no necesitó "modo sin conectores" en el sentido estricto — no requiere datos que solo el dueño tenga (listas de clientes, textos propios). Se resolvió enteramente con lectura del repo y dos búsquedas web reales, siguiendo la regla de no estimar: cuando faltó un dato verificable (p. ej. cantidad exacta de reseñas), no se inventó, se marcó como pendiente.

---

## 1. Tabla de rastreadores IA — qué le permite el sitio a cada uno

`src/app/robots.ts` (vigente, revisado línea por línea):

| User-agent | Regla actual | ¿Quién es? | Evaluación |
|---|---|---|---|
| `*` | `allow: /`, `disallow: /api/, /admin/, /revisar` | Cualquier rastreador no listado explícitamente | Correcto — bloquea solo rutas internas/privadas |
| `Googlebot`, `Googlebot-Smartphone`, `AdsBot-Google` | `allow: /` | Buscador e indexación de Google | Correcto |
| `GPTBot` | `allow: /` | OpenAI — entrena/alimenta ChatGPT | **Ya permitido** — no hace falta ningún cambio |
| `ClaudeBot` | `allow: /` | Anthropic — entrena/alimenta Claude | **Ya permitido** |
| `PerplexityBot` | `allow: /` | Perplexity — responde con citas en tiempo real | **Ya permitido** |
| `Google-Extended` | `allow: /` | Controla específicamente el uso por Gemini/AI Overviews (separado de Googlebot clásico) | **Ya permitido** |

**Hallazgo positivo, no un problema:** a diferencia de lo que suele encontrarse en auditorías GEO (sitios que bloquean sin saberlo a los rastreadores de IA junto con scrapers), este `robots.ts` ya está configurado correctamente para los cuatro rastreadores de IA más relevantes. No se abre ningún hallazgo GEO por este punto — se deja documentado como línea base para no volver a revisarlo de cero en el futuro.

Rastreadores que **no** están en la lista explícita pero caerían en la regla `*` (por lo tanto ya permitidos, sin bloqueo): `Bingbot`/`BingPreview` (alimenta Copilot), `Amazonbot`, `Applebot-Extended` (Apple Intelligence). No se identificó ninguna razón para tratarlos distinto — se deja así.

**Detalle pedido explícitamente por el prompt de esta fase — lista completa de los 9 rastreadores de asistentes a revisar uno por uno:**

| User-agent | ¿Qué hace? | Regla en `robots.ts` |
|---|---|---|
| `GPTBot` | Entrenamiento de modelos OpenAI | Permitido explícito |
| `OAI-SearchBot` | Búsqueda en tiempo real para ChatGPT (distinto de `GPTBot` — este es el que trae resultados a una pregunta puntual) | No está listado por nombre — cae en `*`, **permitido** |
| `ChatGPT-User` | Fetch en vivo cuando un usuario le pide a ChatGPT que abra o lea una URL puntual | No está listado por nombre — cae en `*`, **permitido** |
| `ClaudeBot` | Entrenamiento de modelos Anthropic | Permitido explícito |
| `Claude-User` | Fetch en vivo cuando Claude navega una URL a pedido de un usuario | No está listado por nombre — cae en `*`, **permitido** |
| `PerplexityBot` | Indexación para respuestas de Perplexity | Permitido explícito |
| `Google-Extended` | Uso del contenido por Gemini/AI Overviews | Permitido explícito |
| `Bingbot` | Indexación de Bing, base de Copilot | No está listado por nombre — cae en `*`, **permitido** |
| `Applebot` | Indexación de Apple (Siri/Spotlight); `Applebot-Extended` controla el uso por Apple Intelligence específicamente | No está listado por nombre — cae en `*`, **permitido** |

Los tres explícitos (`GPTBot`, `ClaudeBot`, `PerplexityBot`) más `Google-Extended` son los que de verdad importaba confirmar uno por uno porque son los que más auditorías encuentran bloqueados sin querer — los otros cinco dependen de la regla `*`, que ya es permisiva. **No se abre ningún hallazgo nuevo** — se deja esta tabla como el detalle completo que pedía el enunciado.

## 2. Comparación: render con JS vs. sin JS (lo que ve un rastreador que no ejecuta JavaScript)

La mayoría de los rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot) **no ejecutan JavaScript** — solo leen el HTML servido en la primera respuesta. Se revisó el tipo de componente (Server vs. Client) de las 10 páginas P1 de la auditoría SEO original:

| Página | Tipo | ¿Contenido visible sin JS? |
|---|---|---|
| `/` (home) | Server Component | Sí |
| `/servicios/envios-express` | Server Component | Sí |
| `/servicios/envios-lowcost` | Server Component | Sí |
| `/servicios/enviosflex` | Server Component | Sí |
| `/servicios/plan-emprendedores` | Server Component | Sí |
| `/cotizar/express` | Server Component (el `page.tsx` es servidor; el cotizador interactivo interno es cliente, pero el copy y el JSON-LD ya están en el HTML inicial) | Sí, para el copy — el resultado del cálculo de precio no, porque depende de interacción |
| `/cotizar/lowcost` | Igual que arriba | Igual que arriba |
| `/contacto` | Server Component | Sí |
| `/nosotros/preguntas-frecuentes` | Server Component, con el `FAQPage` JSON-LD embebido directamente en el `page.tsx` | Sí — este es el mejor caso del sitio para GEO |
| `/nosotros/sobre-nosotros` | Server Component | Sí |

**No se abre ningún hallazgo GEO por este punto.** El sitio ya usa App Router con Server Components de forma consistente en las páginas de contenido — no hay pantallas en blanco ni "Cargando…" para un rastreador sin JS. Esto confirma, con evidencia de código (no supuesto), que la arquitectura Next.js 16 actual ya es apta para GEO en cuanto a renderizado.

## 3. `llms.txt` — hallazgo central de esta fase

El archivo `llms.txt` existe en la raíz del repo (convención de [llmstxt.org](https://llmstxt.org)) y **está bien escrito, pero apunta al público equivocado.**

**Lo que contiene hoy:** una guía para un asistente de IA que va a *programar sobre el repositorio* — enlaza `README.md`, `AGENTS.md`, `docs/MEJORES_PRACTICAS.md`, `DESIGN.md`, `src/app/globals.css`, `src/lib/pricing.ts`, `prisma/schema.prisma`, `next.config.ts`, `package.json`, `tsconfig.json`, etc., casi todos como rutas de archivo relativas al repo (`README.md`, no una URL pública).

**Lo que falta:** una guía para un asistente de IA (ChatGPT, Claude, Perplexity, Gemini) que un *cliente potencial* le pregunta algo como "¿quién hace envíos en moto en Mar del Plata para MercadoLibre Flex?" o "¿cuánto sale un envío express en Mar del Plata?". Ese asistente no puede usar el `llms.txt` actual para nada — las rutas que lista (`README.md`, `AGENTS.md`) no son URLs navegables desde fuera del repo, y ninguna apunta a las páginas reales del sitio (`/`, `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/cotizar/express`, `/nosotros/preguntas-frecuentes`) donde está toda la información que un cliente necesitaría.

> **GEO-01 (alto impacto).** `llms.txt` documenta el código para un agente programador, no el negocio para un agente que responde a clientes. Un asistente de IA que siga el archivo tal como está no puede llegar a la tarifa, la cobertura, los servicios ni el FAQ del sitio.

Propuesta de sección a **agregar** (no reemplazar — el contenido actual sigue siendo útil para agentes de código) al `llms.txt`, con URLs públicas reales:

```markdown
## Para consultas de clientes (servicios, tarifas, cobertura, FAQ)

- [Inicio](https://www.enviosdosruedas.com/): Mensajería y logística e-commerce en Mar del Plata — Express, LowCost, Flex y 3PL.
- [Envíos Express](https://www.enviosdosruedas.com/servicios/envios-express): Entregas prioritarias en Mar del Plata.
- [Envíos LowCost](https://www.enviosdosruedas.com/servicios/envios-lowcost): Envíos económicos programados para PyMEs.
- [Envíos Flex (Mercado Libre)](https://www.enviosdosruedas.com/servicios/enviosflex): Socio logístico para Mercado Envíos Flex, entrega en el día.
- [Plan Emprendedores / 3PL](https://www.enviosdosruedas.com/servicios/plan-emprendedores): Almacenamiento, picking, packing y distribución.
- [Cotizador Express](https://www.enviosdosruedas.com/cotizar/express): Cálculo de tarifa Express por distancia.
- [Cotizador LowCost](https://www.enviosdosruedas.com/cotizar/lowcost): Cálculo de tarifa LowCost por distancia.
- [Preguntas frecuentes](https://www.enviosdosruedas.com/nosotros/preguntas-frecuentes): Respuestas sobre cobertura, tiempos, pesos máximos y contrareembolso.
- [Contacto](https://www.enviosdosruedas.com/contacto): Teléfono, WhatsApp y dirección de la base central.
```

Este bloque se deja **redactado y listo para aplicar** — no se aplicó todavía porque es un cambio de contenido del sitio y, por la regla de esta fase, todo cambio de sitio vuelve al backlog unificado (ver §6) en lugar de tocarse directo. La versión final debe confirmarse contra los emails/teléfono ya vigentes en el sitio antes de mergear.

## 4. Datos estructurados (JSON-LD) — auditoría real

Se encontró **doble implementación**, una viva y una muerta:

- **`src/components/seo/SchemaMarkup.tsx`**: un componente reutilizable, bien escrito, que soporta `localBusiness`, `organization`, `service`, `faq` y `breadcrumb`. **No se importa en ningún archivo del repo (0 resultados en un grep de `SchemaMarkup` fuera de su propio archivo).** Es código muerto.
- **Cada página** (`layout.tsx`, `page.tsx` de home, de los 4 servicios, `contacto`, `sobre-nosotros`, `preguntas-frecuentes`, `cotizar/express`, `cotizar/lowcost`) tiene su **propio bloque JSON-LD escrito a mano**, duplicando la misma estructura de `LocalBusiness` una y otra vez con pequeñas variaciones.

> **GEO-02 (medio impacto).** El componente centralizado de structured data (`SchemaMarkup.tsx`) existe pero no se usa — cada página reimplementa el mismo JSON-LD a mano. Esto ya causó al menos una inconsistencia real y vigente: el horario en el JSON-LD de `layout.tsx` dice `Monday-Saturday 08:00-20:00`, mientras el footer visible dice "Lunes a Viernes 09:00-18:00" y "Sábados 10:00-15:00" (`OptimizedFooter.tsx`). Es el mismo problema ya registrado como `MARCA-01` en `F2-4-brand-review.md` y ya incluido en `BL-02` del backlog — se confirma acá que el dato incorrecto también viaja en el structured data que leen los asistentes de IA, no solo en el texto visible, así que un asistente que cite el horario del negocio citaría el horario equivocado. No es un hallazgo nuevo para el backlog, es una confirmación de impacto que refuerza la prioridad de `BL-02`.

Cobertura de tipos de schema por página (columna "en producción" = lo que realmente se renderiza, no lo que ofrece el componente muerto):

| Tipo de schema | ¿Existe en producción? | Dónde |
|---|---|---|
| `Organization` | Sí | `layout.tsx` (global) |
| `LocalBusiness` | Sí, duplicado con variaciones menores | `layout.tsx`, `contacto`, `sobre-nosotros`, y dentro del `Service` de cada página de servicio |
| `Service` | Sí | `envios-express`, `envios-lowcost`, `enviosflex`, `plan-emprendedores` |
| `WebSite` (con `SearchAction`) | Sí | home |
| `WebApplication` | Sí | `cotizar/express`, `cotizar/lowcost` |
| `FAQPage` | Sí, pero en **una sola página** | `nosotros/preguntas-frecuentes` (excelente implementación — usa `FAQ_DATA` real, sin inventar preguntas) |
| `BreadcrumbList` | **No, en ninguna página** — solo existe en el componente muerto | — |
| `AboutPage`, `ContactPage` | Sí | `sobre-nosotros`, `contacto` |

> **GEO-03 (bajo-medio impacto).** No hay `BreadcrumbList` en ninguna página real, pese a que el componente ya soporta ese tipo. Para un sitio con jerarquía clara (`/servicios/envios-express`, `/nosotros/preguntas-frecuentes`), agregar breadcrumbs estructurados ayuda a que los buscadores y asistentes de IA entiendan la arquitectura del sitio y puedan enlazar a la sección correcta en vez de solo a la home.

**No se propone** eliminar `SchemaMarkup.tsx` ni forzar su uso en esta fase — es una decisión de arquitectura de código (¿migrar todas las páginas al componente centralizado, o aceptar la duplicación actual?) que excede el alcance de GEO y debería resolverse como un ítem de backlog aparte, no como parte de "visibilidad en IA".

**`areaServed` — conflicto real entre lo que pide esta fase y lo que dice el propio sitio.** El enunciado de esta fase pide que el `areaServed` propuesto incluya "Mar del Plata, Batán y el Partido de General Pueyrredón". Se revisó el `areaServed` actual en producción (`{'@type': 'City', name: 'Mar del Plata'}`, igual en todas las páginas) y, más importante, **el propio contenido del sitio ya responde esto de forma explícita y distinta**: `faqData.ts` dice textualmente *"Cubrimos de forma integral todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas)"*. Batán es una localidad del Partido de General Pueyrredón, pero fuera del ejido urbano de Mar del Plata — es decir, **según el propio FAQ del sitio, Batán específicamente NO estaría cubierto**, lo que contradice ampliar el `areaServed` como pide el prompt de esta fase.

> **GEO-05 (impacto medio — es un conflicto de datos, no un bug de código).** No se propone el `areaServed` ampliado a Batán/Partido de General Pueyrredón que pide el enunciado de esta fase, porque contradice directamente al FAQ ya publicado ("no cubrimos zonas aledañas"). Antes de tocar el `areaServed` en cualquier página, hay que resolver la contradicción con el dueño: ¿la cobertura real hoy es solo el ejido urbano (y entonces el `areaServed` actual ya está bien, y ampliarlo sería una promesa falsa), o la cobertura sí llega a Batán/el Partido y es el FAQ el que está desactualizado? Marcar un `areaServed` más amplio del que el negocio realmente cumple es el mismo tipo de riesgo que ya señaló `F2-4-brand-review.md` para las afirmaciones sin respaldo — un asistente de IA que lo lea le diría a un cliente de Batán que sí hay cobertura, y si no la hay, es una mala experiencia y un reclamo, no solo un dato de SEO.

## 5. Banco de párrafos citables

Los asistentes de IA con acceso a búsqueda (Perplexity, ChatGPT con browsing, Google AI Overviews) tienden a citar frases breves, autocontenidas y factuales — no párrafos largos de marketing. Se identificaron los mejores candidatos ya existentes en el sitio y se proponen algunos nuevos, **usando solo afirmaciones respaldadas según `F2-4-brand-review.md` §3** (nunca "SLA de entrega garantizada", "0 paquetes extraviados" ni "Partner 3PL Verificado").

**Ya existentes y listos para citar tal cual** (de `faqData.ts`, `nosotros/preguntas-frecuentes`):
- *"Cubrimos de forma integral todo el ejido urbano de Mar del Plata (no cubrimos zonas aledañas)."*
- *"Operamos con una flota propia y exclusiva de motocicletas. La capacidad máxima estándar es de hasta 5 kg o dimensiones de aproximadamente 40x40x30 cm por bulto."*
- *"Realizamos la cobranza en efectivo al momento de entregar el producto. El dinero recaudado se rinde en el transcurso del mismo día o a primera hora del día hábil siguiente."*

Estas tres ya son exactamente el formato que un asistente de IA puede citar sin reformular — pregunta clara, respuesta autocontenida, sin ambigüedad. Es el mejor contenido GEO que ya tiene el sitio.

**Propuestos como nuevos** (para agregar al primer párrafo de las páginas de servicio, hoy más orientadas a persuasión que a definición directa — a validar contra el copy real de `F2-3-ux-copy.md` antes de aplicar):
- Envíos Express: *"Envíos DosRuedas ofrece envíos express en moto en Mar del Plata, con tarifa calculada por distancia desde $3.700."* — cifra tomada directamente de `src/lib/pricing.ts` (rango 0–3 km), no estimada.
- Envíos Flex: *"Envíos DosRuedas es un socio logístico para vendedores de Mercado Envíos Flex en Mar del Plata, con retiro y entrega en el mismo día."*
- Depósito / 3PL (responde "quién guarda stock y despacha pedidos en Mar del Plata"): *"Envíos DosRuedas ofrece almacenamiento, preparación de pedidos (picking y packing) y despacho para e-commerce desde su depósito en Friuli 1972, Mar del Plata."* — usa solo los verbos ya presentes en el `hasOfferCatalog` del JSON-LD actual ("Almacenamiento, picking, packing y fulfillment"), sin agregar ninguna capacidad no confirmada.

No se generó un párrafo citable para la cantidad de reseñas de Google ni para el año de fundación con un número específico de años ("7+ años") sin una fecha exacta verificada — F2-4 ya marcó ambos como "A VERIFICAR"; citar una cifra no confirmada sería peor que no citar nada, porque un asistente de IA la repetiría como un hecho.

**Consistencia de entidad (NAP — nombre, dirección, teléfono).** Revisado contra `F2-4-brand-review.md` (que ya audita esto en detalle): el nombre, teléfono (+54 223 660-2699) y dirección (Friuli 1972, Mar del Plata) son consistentes en todo el sitio — no se encontró una variante distinta en ningún JSON-LD, footer o página de contacto. La única inconsistencia de "identidad" real es la ya conocida del horario (`MARCA-01`/`BL-02`, reforzada acá como `GEO-02`) y el email (`MARCA-02`/`BL-19`) — no se abren hallazgos nuevos, es la misma raíz. No se pudo verificar la consistencia contra Instagram, Facebook ni la ficha de Google en vivo (sin conector ni credenciales en esta sesión) — queda en la lista de fuentes externas de abajo.

## 6. Prueba real en buscadores/asistentes con acceso a la web

Se corrieron dos búsquedas web reales (no simuladas) para verificar visibilidad actual:

**Búsqueda 1** — `"envíos moto mensajería Mar del Plata Mercado Libre Flex"`: el sitio aparece **dos veces** entre los primeros resultados: la home (`enviosdosruedas.com/`) y la página de Flex (`enviosdosruedas.com/enviosflex`), compitiendo directamente con resultados propios de MercadoLibre y con al menos un competidor local (`motomensajeria.net.ar`). Esto es una señal real y positiva: para una consulta comercial directa, el sitio ya es recuperable por un motor de búsqueda con IA (Perplexity, ChatGPT con browsing, Google AI Overviews funcionan sobre resultados de búsqueda similares a estos).

**Búsqueda 2** — `"enviosdosruedas.com"`: además de los perfiles de Instagram/Facebook y el sitio real, aparecieron dos hallazgos no buscados que vale la pena registrar:

- **Un deployment de Vercel indexado en paralelo al dominio real**: `02enviosdosruedas.vercel.app` aparece en los resultados de búsqueda con el mismo título que la home. Se revisó `next.config.ts` y no hay ninguna cabecera `X-Robots-Tag` condicionada a `VERCEL_ENV` que bloquee la indexación de los dominios de preview/staging de Vercel, y `robots.ts` no distingue por dominio (permite todo a todos los rastreadores en cualquier host donde se sirva). **Mitigante real:** cada página fija su `canonical` como string literal a `https://www.enviosdosruedas.com/...` (no usa `metadataBase` relativo), así que un rastreador que sí lea la etiqueta canonical debería preferir el dominio real igual. No se puede confirmar sin acceso a Search Console si Google ya indexó el `.vercel.app` como contenido duplicado.
  > **GEO-04 (bajo impacto, fácil de resolver).** Agregar `X-Robots-Tag: noindex` condicionado a `process.env.VERCEL_ENV !== 'production'` en `next.config.ts`, para que solo el dominio real sea indexable por cualquier rastreador (buscador o IA).
- **Dos forks públicos del repositorio en GitHub** (`profemprestes/basenuevaenviosdosruedas`, `profemprestes/0pruebasenviosdosruedas`) — visibles en una búsqueda pública del nombre del sitio. No es necesariamente un problema (forks de práctica/pruebas de terceros sobre un repo público son normales), pero vale que el dueño sepa que existen copias públicas del código con nombres casi idénticos al proyecto, indexadas por buscadores. Se deja como nota informativa, no como hallazgo — no hay evidencia de mal uso.

**Herramienta de terceros (a título informativo, con reserva importante):** apareció en los resultados un reporte de `searchfit.ai` que dice evaluar la "visibilidad en IA" del dominio. Se intentó consultar el reporte directamente: **la página mostró un puntaje distinto en cada intento (45/100 y 56/100 en dos lecturas separadas de la misma URL, a minutos de diferencia), y el propio contenido de la página indica que el reporte "todavía se está generando" ("Preparing your report… this can take a minute").** Esto significa que el número no es estable ni verificable — no es una fuente confiable para citar como hecho, y no se incluye como hallazgo con ID. Se menciona únicamente para que el dueño sepa que la herramienta existe, por si quiere generar un reporte completo por su cuenta directamente en `searchfit.ai`; **no se recomienda tomar ninguna decisión basada en el número que mostró acá.**

## 7. `sitemap.ts` — revisión rápida

Cubre las 13 URLs esperadas (comerciales, institucionales, legales) con prioridades coherentes. No se encontró ningún hallazgo — es consistente con la estructura P1 de la auditoría SEO original. Única observación menor: `lastModified` usa `new Date()` (la fecha del build) para las 13 URLs por igual, en vez de una fecha real por página — no es un error, pero le resta precisión a la señal de "actualizado recientemente" que buscadores e IA usan para priorizar contenido fresco. No se abre hallazgo por esto — es una mejora de "nice to have", no un problema de visibilidad.

## 7bis. Fuentes externas a conseguir, ordenadas por impacto

El prompt de esta fase pide cruzar la presencia en ficha de Google, directorios locales/de logística, medios de Mar del Plata y marketplaces contra los competidores de `F1-1-competitive-brief.md` (MMDP, DAR Logística, Mar del Motos, Uber Envíos). Esta sesión no tiene conector a Google Business Profile, a directorios ni a redes sociales, así que no se puede completar — se deja como lista priorizada para que el dueño (o quien tenga acceso) la complete:

1. **Ficha de Google Business Profile** (más impacto): categorías cargadas, horario real, todas las publicaciones — es la fuente que más citan Google AI Overviews y Perplexity para negocios locales.
2. **Perfil de Instagram y Facebook** (`@enviosdosruedas`): confirmar que el nombre, teléfono y horario coinciden con el sitio — no se pudo revisar el contenido de esos perfiles desde esta sesión, solo se confirmó que existen (búsqueda web, §6).
3. **Directorios de logística/mensajería** (si existen listados locales de Mar del Plata tipo cámara de comercio, guías de PyMEs): no identificados desde esta sesión — el propio `F1-1-competitive-brief.md` señala que no pudo leer Google Maps de forma automatizada, así que esta pieza también le faltaba a la fase 1.
4. **Menciones en medios locales de Mar del Plata**: no se buscaron en esta pasada — impacto probablemente bajo-medio, pero cada mención citable suma para GEO.
5. **Perfil en MercadoLibre/marketplaces** como proveedor logístico Flex, si existe uno público: no confirmado.

## 8. Hallazgos de esta fase (resumen)

| ID | Hallazgo | Impacto | Acción |
|---|---|---|---|
| GEO-01 | `llms.txt` documenta el repo de código, no el negocio — un asistente de IA no puede llegar a tarifas/cobertura/FAQ desde ahí | Alto | Sección nueva redactada en §3, lista para sumar al backlog (`BL-40`) |
| GEO-02 | JSON-LD duplicado a mano por página en vez de usar `SchemaMarkup.tsx`; confirma que el horario incorrecto (`MARCA-01`/`BL-02`) también está en structured data | Medio (refuerza prioridad de `BL-02` ya existente) | No es un ID nuevo de backlog — se referencia `BL-02` |
| GEO-03 | Sin `BreadcrumbList` en ninguna página, pese a que el componente ya lo soporta | Bajo-medio | Nuevo ítem de backlog (`BL-41`) |
| GEO-04 | Deployment de Vercel (`.vercel.app`) indexable en paralelo al dominio real, sin `X-Robots-Tag` condicionado a `VERCEL_ENV` | Bajo | Nuevo ítem de backlog (`BL-42`) |
| GEO-05 | El `areaServed` ampliado a Batán/Partido de General Pueyrredón que pide esta fase contradice el FAQ publicado ("no cubrimos zonas aledañas") | Medio (conflicto de datos, no de código) | Pregunta bloqueante al dueño — no se abre ítem de backlog hasta resolver la contradicción |

Los rastreadores de IA (§1) y el renderizado sin JS (§2) **ya están bien** — se documentan como línea base, no como hallazgos.

---

## 9. Supuestos y lo que no se pudo verificar

- No se probó el comportamiento real de GPTBot/ClaudeBot/PerplexityBot contra el sitio en vivo (no hay herramientas en esta sesión para simular esos user-agents específicos) — la evaluación de §1-2 es por lectura de código (reglas de `robots.ts` + tipo de componente), no por una petición HTTP real con esos user-agents.
- No se pudo confirmar si el dominio `.vercel.app` está efectivamente indexado en Google (no hay acceso a Search Console en esta sesión) — solo se confirmó que aparece en un resultado de búsqueda web puntual.
- El puntaje de `searchfit.ai` se descarta explícitamente como fuente (ver §6) por ser inestable entre lecturas.
- La cantidad de reseñas de Google y la antigüedad exacta de la empresa siguen "A VERIFICAR" (heredado de `F2-4-brand-review.md` §9) — no se usaron en ningún párrafo citable propuesto por esa razón.
