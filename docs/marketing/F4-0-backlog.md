# F4-0 — Backlog unificado

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F2-1-design-critique.md` (DC-01 a DC-34, D-1 a D-12), `F2-2-accesibilidad.md` (A11Y-01 a A11Y-15), `F2-3-ux-copy.md` (COPY-01 a COPY-10), `F2-4-brand-review.md` (MARCA-01 a MARCA-03 y tabla de afirmaciones), `F3-1-campaign-plan.md` (CAMP-01 a CAMP-20), `F3-2-contenidos.md` (CONT-01 a CONT-18). No se revisaron pull requests abiertos del repo real (esta sesión trabaja sobre un clon local sin acceso a GitHub en vivo) — si hay PRs en curso, hay que cruzarlos contra este backlog antes de empezar el Sprint 1, no después.

**Nota sobre SEO-xx / COMP-xx**: `F1-1-competitive-brief.md` y `F1-2-seo-audit.md` se publicaron como documentos, no con IDs estables `SEO-xx`/`COMP-xx` por hallazgo — es un gap real (ya señalado en fases anteriores). Su contenido no se perdió: F3-1 ya tradujo los hallazgos críticos de F1-2 a `CAMP-04` (fugas técnicas), y las páginas nuevas que pide F1-2 están en `CAMP-10/11/13/15/16`. Este backlog no inventa IDs `SEO-xx`/`COMP-xx` retroactivos.

---

## 1. Regla de orden aplicada

Bugs que afectan indexación o conversión → SEO técnico y accesibilidad crítica → copy → páginas nuevas → mejoras estéticas. Dentro de cada bloque, lo que bloquea a otros ítems va primero.

## 2. Backlog completo

| BL | Título | IDs de origen | Páginas / archivos | Tipo | Impacto | Esfuerzo | Riesgo | Depende de | Bloqueado por dueño |
|---|---|---|---|---|---|---|---|---|---|
| BL-01 | Redirecciones 301 (`/enviosflex`, rename de rutas) + bloqueo del duplicado en Vercel | DC (D-3), CAMP-04 | `next.config.ts`, `middleware.ts` | Bug / SEO técnico | Alto | Bajo | Bajo | — | No |
| BL-02 | Metadata global: `title.template` sin marca duplicada, quitar `keywords`, horarios reales en JSON-LD, `sameAs`/`logo`/`hasMap`/`image` | D-9, CAMP-04, MARCA-01 | `src/app/layout.tsx`, `page.tsx` de cada ruta | Bug / SEO técnico | Alto | Bajo | Bajo | — | **Sí** — horario real (F2-4 P5) |
| BL-03 | Constantes únicas de promesa (ventana Express, umbral "a consultar", recargo por lluvia) consumidas por home/páginas/cotizadores/schema/llms.txt | DC-03, DC-13, CAMP-06 | `src/lib/pricing.ts`, `src/lib/promises.ts` (nuevo), páginas de Express/LowCost | Bug / conversión | Alto | Bajo (una vez decidido) | Medio | — | **Sí** — promesa de tiempo real y umbral 15 vs 20 km (F2-4 P... / F2-1 A VERIFICAR) |
| BL-04 | Contadores con valor final en SSR + texto animado sin romper espacios | DC-07, DC-08, DC-09, A11Y-09, A11Y-10, CAMP-07 | `VisionSection.tsx`, `EmprendedoresHome.tsx`, `FaqHero.tsx`, `vertical-cut-reveal.tsx` | Bug / accesibilidad+SEO | Alto | Bajo | Bajo | — | No |
| BL-05 | Un CTA primario por vista (home, Express, Flex, LowCost, Depósito) + header en `outline` cuando ya hay CTA amarillo | DC-02, DC-14, DC-15, DC-18, DC-20, DC-23, CAMP-08 | `HeroAnimado.tsx`, `*Hero.tsx`, `OptimizedHeader.tsx` | UX | Alto | Bajo | Bajo | — | No |
| BL-06 | Menú móvil accesible: `aria-expanded`, `role="dialog"`, trampa de foco, cierre con Escape | A11Y-04 | `MobileNav.tsx` | Accesibilidad | Alto | Medio | Bajo | — | No |
| BL-07 | `aria-live` en resultado de cotizadores + biblioteca de estados (error, vacío, éxito) | A11Y-11, COPY-10 | `CotizadorExpressForm.tsx`, `CotizadorLowCostForm.tsx` | Accesibilidad / UX | Alto | Medio | Bajo | BL-03 (mismos umbrales) | No |
| BL-08 | Contraste: texto "muted" (`blue-400`→`blue-500`/`600` en texto chico), anillo de foco sobre fondos azules, listbox de autocompletar | A11Y-01, A11Y-02, A11Y-03 | `globals.css`, `InputField.tsx`, `card.tsx`, `StepperHorizontal.tsx`, `StepperVertical.tsx`, `AddressAutocomplete.tsx` | Accesibilidad | Alto | Medio | Bajo | — | No |
| BL-09 | Mapa Leaflet: `aria-label` + alternativa textual (origen/destino/distancia) | A11Y-05 | `LeafletRouteMap.tsx` | Accesibilidad | Medio | Bajo | Bajo | — | No |
| BL-10 | Kill-switch global de `prefers-reduced-motion` + reemplazo de `animate-bounce` | A11Y-07, A11Y-08, DC-34 | `globals.css`, hook `useReducedMotion` centralizado, `NewsletterSubscribe.tsx`, `LeafletRouteMap.tsx` | Accesibilidad | Medio | Medio | Bajo | — | No |
| BL-11 | Objetivos táctiles ≥ 44px en home móvil y cotizador Express móvil | DC-30 | Home, `cotizar/express` | Accesibilidad | Medio | Bajo | Bajo | — | No |
| BL-12 | Quitar jerga de cliente ("3PL", "SLA", "batch", "custodia digital") y reformular "SLA de entrega garantizada" / "SLA 100%" | COPY-01, COPY-02, COPY-03, COPY-04, DC-19 | `EmprendedoresHero.tsx`, `EmprendedoresFeatures.tsx`, `EmprendedoresPricing.tsx`, `LowCostPricing.tsx`, `ExpressPricing.tsx`, `FlexHero.tsx`, `src/app/servicios/enviosflex/page.tsx` (metadata) | Copy | Alto | Bajo | Bajo | — | No |
| BL-13 | Unificar CTAs al glosario de F2-3 (verbo único por acción, modo imperativo voseo) | COPY-05, COPY-06, COPY-07 | Header, footer, hero, cotizadores, nosotros, FAQ (lista completa en F2-3 §3) | Copy | Medio | Bajo | Bajo | — | No |
| BL-14 | Quitar o reformular afirmaciones absolutas sin respaldo ("0 paquetes extraviados", "cero suspensiones de Flex", "Partner 3PL Verificado", "socio logístico homologado/certificado", "+15 años", "atención < 2 min", "líder") | F2-4 tabla de afirmaciones, DC-32 | `VisionSection.tsx`, `SliderServicios.tsx`, `OptimizedFooter.tsx`, `EmprendedoresHome.tsx`, `SchemaMarkup.tsx`, `AboutHero.tsx`, `ContactForm.tsx` | Copy / legal | Alto | Bajo | Medio (riesgo legal si no se corrige) | — | **Sí** — F2-4 §9, preguntas 1, 3, 4, 8 |
| BL-15 | Botones de WhatsApp en amarillo de marca (sin `#25D366`) | DC-25, CAMP-20 | `ContactInfo.tsx`, `ConversionBanner.tsx`, `ContactHero.tsx`, `ContactForm.tsx`, `CarruselRedes.tsx`, `FaqCta.tsx` | Copy / diseño | Medio | Bajo | Bajo | — | No |
| BL-16 | Reseñas: "Calificación perfecta" → "N reseñas verificadas en Google" con enlace, sin número fijo en el bundle si es posible | DC-10, CAMP-17 | `SocialProofSection.tsx` | Copy / SEO | Medio | Bajo | Bajo | — | No |
| BL-17 | `aria-label` en enlaces de WhatsApp/teléfono sin texto descriptivo | A11Y-12 | Lista de 18+7 archivos en F2-2 §3 | Accesibilidad | Medio | Bajo | Bajo | — | No |
| BL-18 | `aria-selected` dinámico en listbox de autocompletar + `aria-label` en botón eliminar fila de `BatchGrid` | A11Y-06, A11Y-13 | `AddressAutocomplete.tsx`, `BatchGrid.tsx` | Accesibilidad | Bajo | Bajo | Bajo | — | No |
| BL-19 | Unificar el email de contacto público (uno solo, un solo dominio) | MARCA-02 | `README.md`, componentes de contacto | Datos / documentación | Bajo | Bajo | Bajo | — | **Sí** — F2-4 §9, pregunta 6 |
| BL-20 | Página nueva `/servicios/envios-contrareembolso` (Service + FAQ) | CONT-02, CAMP-10 | `src/app/servicios/envios-contrareembolso/page.tsx` | Página nueva | Alto | Medio | Bajo | BL-32 (precios), BL-14 (claims) | Parcial — medios de pago aceptados (F3-2 §1) |
| BL-21 | Página nueva `/guias/envios-flex-mar-del-plata` (Article + FAQ) | CONT-01, CAMP-11 | `src/app/guias/envios-flex-mar-del-plata/page.tsx` | Página nueva | Alto | Medio | Bajo | — | No |
| BL-22 | Rename `/servicios/plan-emprendedores` → `/servicios/deposito-fulfillment` con 301, contenido nuevo, foto y mapa de Friuli 1972 | CONT-03, CAMP-13, DC-22 | App Router, `next.config.ts` | Página nueva / rename | Alto | Medio | Medio (301 mal hecho pierde el poco tráfico que ya tiene) | BL-32 (precios) | Parcial — qué productos aceptan, DropOFF (F3-2 §1) |
| BL-23 | Página nueva `/servicios/empresas-cuenta-corriente` con formulario corto que guarda el lead | CAMP-15 | `src/app/servicios/empresas-cuenta-corriente/page.tsx`, Server Action | Página nueva | Medio | Medio | Bajo | BL-30 (mismo patrón de formulario) | No |
| BL-24 | Página nueva `/cobertura` con mapa único y tabla de barrios/km | CAMP-16 | `src/app/cobertura/page.tsx` | Página nueva | Medio | Medio | Bajo | — | No |
| BL-25 | Eventos GA4 (`quote_start/complete`, `whatsapp_click`, `form_submit`, `phone_click`, `cta_click`) + UTM persistente + helper único de WhatsApp prearmado | CAMP-01, CAMP-02, CAMP-03, CAMP-05 | Componente compartido de CTA/WhatsApp, `layout.tsx`, `ClientLayout.tsx` | Analítica | Alto | Medio | Bajo | — | No |
| BL-26 | Home: orden canónico de DESIGN.md §6 + bloque de segmentos ("Vendés en ML / Tenés tienda online / Sos empresa / Necesitás un envío hoy") | DC-04, DC-06, D-4, CAMP-14 | `page.tsx`, componentes de home | UX / contenido | Alto | Medio | Bajo | BL-04, BL-05 | No |
| BL-27 | Cotizadores: formulario dentro del hero (primer campo ≤ 600px en móvil), LowCost con una fila inicial, ejemplo etiquetado como ejemplo | DC-01, DC-01b, DC-12, CAMP-09 | `cotizar/express`, `cotizar/lowcost`, componentes `Cotizador*` | UX | Alto | Medio | Bajo | BL-07 | No |
| BL-28 | Trazabilidad de cotización: ID de cotización visible + persistencia (evaluar tabla `Order` existente) | DC-05 | `CotizadorExpressForm.tsx`, backend | Feature / analítica | Medio | Alto | Medio | BL-25 | No |
| BL-29 | FAQ: sumar preguntas con intención real (Batán, sábados, alimentos, lluvia, factura, peso) + buscador honesto | DC-28, DC-29 | `FaqHero.tsx`, `faqData.ts` | Contenido | Medio | Bajo | Bajo | — | **Sí** — Factura A/C, qué no se transporta (F2-4 P... / F3-2 §2) |
| BL-30 | Contacto: mapa embebido de Friuli 1972, H1 con keyword+dirección, formulario reducido o con persistencia real | DC-26, DC-27 | `ContactForm.tsx`, `ContactHero.tsx` | UX / SEO | Medio | Medio | Bajo | — | No |
| BL-31 | Página Flex: subir bloque de tarifas y recargo por lluvia al primer scroll | CAMP-12, DC-21 | `src/components/servicios/flex/*` | UX | Medio | Bajo | Bajo | BL-12 | No |
| BL-32 | Crear `docs/contexto/precios.md` con la tabla de `AGENTS.md` + tarifas Flex/Emprendedores validadas; cargar en `PricingRange` | DC-24, D-12, CAMP-19 | `docs/contexto/precios.md`, `prisma/seed.ts` | Datos | Alto | Alto (decisión) | Medio | — | **Sí** — precio real de Emprendedores/Flex/3PL (F2-4 §9, pregunta 7) |
| BL-33 | Casos de clientes (3, con foto y 2 líneas) en home y páginas de servicio | CAMP-18 | Nuevo componente | Contenido | Bajo | Medio | Bajo | — | No |
| BL-34 | Logo vectorial `/logo-master.svg` ≥ 120px, quitar wordmark en texto | DC-11 | `OptimizedHeader.tsx` | Estético | Bajo | Bajo | Bajo | — | No |
| BL-35 | `h-screen` → `min-h-[100dvh]` (17 archivos) | DC-31 | Ver grep en F2-1 | Estético / bug menor iOS | Bajo | Bajo | Bajo | — | No |
| BL-36 | Deuda visual acumulada de DESIGN.md §11: `border-l-4` (12 componentes), `cta-nested-icon` a 32px, `transition: width`→`scaleX`, colores off-brand (`#10B981`, `#FFCC00`), `Inter` fallback residual, migrar a primitivas de `ui/`, eliminar ~14 componentes huérfanos | DESIGN.md §11 (sin ID DC específico) | Múltiples, ver DESIGN.md §11 | Estético / deuda técnica | Bajo | Alto | Bajo | — | No |
| BL-37 | Decidir tipografía de cuerpo (IBM Plex Sans vs. Outfit) y alinear README/DESIGN.md/código | DC-33, D-11 | `layout.tsx`, `DESIGN.md`, `README.md` | Documentación / estético | Bajo | Bajo | Bajo | — | **Sí** — decisión sin impacto en conversión, pero requiere una respuesta |
| BL-38 | Crear `PROJECT.md` (o corregir las 4 referencias rotas) | MARCA-03, D-12 | `PROJECT.md`, `README.md`, `AGENTS.md` | Documentación | Bajo | Medio | Bajo | — | No |
| BL-39 | `SchemaMarkup.tsx`: corregir la descripción con "certificado" antes de conectar el componente (hoy no se usa en ninguna página) | MARCA (tabla), F2-2 (código no importado) | `src/components/seo/SchemaMarkup.tsx` | Copy / deuda técnica | Bajo | Bajo | Bajo | BL-14 | No |

---

## 3. Sprints (una semana, 3–6 ítems, respetando la regla de orden y las dependencias)

| Sprint | Ítems | Por qué van juntos |
|---|---|---|
| **1** | BL-01, BL-02, BL-03, BL-04, BL-19 | Los bugs que más pesan en indexación y conversión, y que además desbloquean casi todo lo demás (rutas, metadata, promesas, contadores). Coincide con la semana 1 del calendario de F3-1. |
| **2** | BL-05, BL-06, BL-07, BL-08, BL-27 | SEO técnico + accesibilidad crítica del flujo de conversión: un CTA por vista, menú móvil operable, resultado del cotizador anunciado, contraste del texto que más se repite, formulario del cotizador arriba del pliegue. |
| **3** | BL-09, BL-10, BL-11, BL-17, BL-18 | Resto de accesibilidad (mapa, movimiento, táctil, nombres accesibles) — menor impacto individual que el Sprint 2 pero mismo tipo de trabajo, conviene agruparlo. |
| **4** | BL-12, BL-13, BL-14, BL-15, BL-16 | Todo el bloque de copy y afirmaciones — depende de que el dueño responda las preguntas de F2-4 §9 para BL-14; el resto no bloquea. |
| **5** | BL-32, BL-20, BL-21, BL-25 | `precios.md` primero (bloquea contrareembolso y depósito); en paralelo, la guía Flex no depende de precios y puede salir igual; analítica para medir las páginas nuevas desde el día uno. |
| **6** | BL-22, BL-26, BL-28, BL-30 | Depósito y fulfillment (depende de BL-32), home reordenada, trazabilidad de cotización (esfuerzo alto, needs su propio foco), contacto. |
| **7** | BL-23, BL-24, BL-29, BL-31, BL-33 | Páginas nuevas restantes (empresas, cobertura), FAQ real, tarifas Flex arriba, casos de clientes — todo contenido de esfuerzo medio, sin bloqueos entre sí. |
| **8** | BL-34, BL-35, BL-36, BL-37, BL-38, BL-39 | Mejoras estéticas y deuda técnica documental — van al final por regla fija, ninguna es urgente para conversión o indexación. |

---

## 4. Bloqueos por preguntas sin responder del dueño

| Bloquea a | Pregunta pendiente | Fuente |
|---|---|---|
| BL-02, BL-03 | Horario real de atención y promesa de tiempo Express/umbral "a consultar" | F2-1 A VERIFICAR, F2-4 §9 pregunta 5 |
| BL-03 | Umbral real de "a consultar" (15 km vs. 20 km del código) | F2-1 DC-13 |
| BL-14 | Antigüedad real (7 vs. 15 años), "+50k envíos", homologación/certificación Flex, autoridad del badge "Partner 3PL Verificado" | F2-4 §9, preguntas 1, 2, 3, 4 |
| BL-19 | Email de contacto público real | F2-4 §9, pregunta 6 |
| BL-20, BL-21 (FAQ nueva) | Medios de pago en contrareembolso; Factura A o C | F3-2 §1, F2-4 §9 pregunta 7 (parcial) |
| BL-22 | Qué productos acepta el depósito; condición real del descuento DropOFF | F3-2 §1 |
| BL-29 | Qué no se transporta (para la FAQ y para "Lo que llevamos y lo que no") | F3-2 §2 |
| BL-32 | Precio real de Emprendedores ($2.800 en README, sin respaldo en `AGENTS.md`) y tarifas Flex/3PL | F2-4 §9 pregunta 7 |
| BL-37 | Tipografía de cuerpo definitiva | F2-1 D-11 |

---

## 5. Lo que NO es código

- **Ficha de Google Business Profile**: completar categorías, horario real (una vez decidido), 20 fotos reales, y las publicaciones semanales de F3-2 §4.
- **Redes sociales**: publicar el calendario de Instagram/Facebook de F3-2 §3; participar (sin promocionar) en los 3 grupos de Facebook de sellers/emprendedores de Mar del Plata que pide F3-1 semana 3.
- **Programa de reseñas**: pedidos por WhatsApp según F3-1 §7 y F3-2 §6, respuestas del dueño a las reseñas existentes y nuevas.
- **Prospección B2B**: armar la lista de 30 empresas y el contacto inicial (F3-1 semana 9).
- **Piezas gráficas**: producción en Canva de las piezas de F3-2 (sujeto a F5-1, que depende de que el conector de Canva esté disponible).
- **Decisiones del dueño**: todas las preguntas de §4 de este documento, más las de F2-4 §9 que no bloquean código directamente (proceso de actualización del conteo de reseñas, revisión legal de política de privacidad/términos).
- **Presupuesto de Google Ads**: definir si se activa desde la semana 9 (F3-1 §4).

---

## 6. Supuestos y lo que no se pudo verificar

- No se revisaron pull requests abiertos del repositorio real en GitHub — esta auditoría trabajó sobre un clon local. Antes de arrancar el Sprint 1, alguien con acceso al repo real debería cruzar este backlog contra cualquier PR en curso para no duplicar trabajo.
- Los IDs `SEO-xx`/`COMP-xx` no existen como tales (ver nota al inicio); no se inventaron retroactivamente.
- Las estimaciones de esfuerzo (S/M/L, acá expresadas como Bajo/Medio/Alto para mantener consistencia con la escala de F2-1) son a criterio, sin datos de tiempo real de desarrollo — igual que en F2-1.
- El orden de sprints asume que el equipo de desarrollo puede dedicarle una semana completa a cada uno; si el ritmo es menor, respetar el orden entre bloques (bugs → SEO/A11Y → copy → páginas → estético) importa más que respetar los números de sprint tal cual están.
