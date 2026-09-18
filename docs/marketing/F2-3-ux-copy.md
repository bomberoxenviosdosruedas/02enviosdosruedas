# F2-3 — UX Copy

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: código del repo (`src/components/`, `src/app/`), `F1-2-seo-audit.md` (keywords y briefs de página), `F2-1-design-critique.md` y `F2-2-accesibilidad.md` (hallazgos de claridad y de etiquetas/errores).
Restricción aplicada: ningún precio escrito en este documento. Donde corresponde, se usa `{precio}` con referencia a `src/lib/pricing.ts`.

`docs/knowledge_base/contexto.md` (diccionario de verbos y tono) sigue sin existir en el repo — ya señalado en F2-1 y F2-2 como gap estructural. Este documento **propone** el glosario que ese archivo debería contener, en lugar de asumir uno que no está escrito en ningún lado.

---

## 1. Resumen

- El voseo está bien aplicado: no se encontró ninguna forma de tuteo (`puedes`, `tienes`, `quieres`…) en `src/components/`. No es un hallazgo, es lo que funciona bien.
- El problema real de forma no es voseo vs. tuteo, sino **modo verbal inconsistente dentro del propio voseo**: CTAs al mismo destino alternan imperativo ("Cotizá tu envío") con infinitivo ("Hablar por WhatsApp", "Contactar Asesor"), y hay al menos 8 redacciones distintas para "iniciar una cotización".
- Jerga interna filtrada al copy público: **"3PL" aparece 89 veces** en componentes de cliente (incluyendo H1 literal "LOGÍSTICA 3PL EN MAR DEL PLATA"), más "SLA de entrega garantizada", "Custodia digital" y "Ruteo Batch Económico" — términos que el seller o emprendedor promedio no busca ni entiende.
- Los estados que más importan para no perder una cotización —error de cobertura, dirección no encontrada, resultado anunciado— no tienen copy definido en el código (se confirma cruzando con A11Y-11 de F2-2: tampoco tienen `aria-live`).
- F1-2 ya redactó title/meta/H1 para las páginas P1; acá se toman como base y se ajustan a la voz de marca donde hacía falta, no se reescriben desde cero.

---

## 2. Inventario de copy actual (por área)

| Área | Estado encontrado |
|---|---|
| Header / navegación | CTA "Cotizá tu envío" (`OptimizedHeader.tsx:271`); ítems de menú con nombres de servicio no siempre iguales a los de sus propias páginas (ver glosario, §4). |
| Hero (home) | `HeroAnimado.tsx` — CTA "Cotizá Express" como acción principal, aunque LowCost también es prioridad de negocio. |
| Tarjetas de servicio | `SliderServicios.tsx` — CTAs propias por tarjeta ("Cotizar Envío Urgente", "Solicitar Cadetería", "Consultar Cuenta Corriente Comercial"): tres formas verbales distintas en la misma grilla. |
| Cotizador Express | `CotizadorExpressForm.tsx`, `ExpressPricing.tsx` — bullets con "Custodia digital"; botones "Cotizá hasta 3 km" / "Cotizá 3 a 5 km" etc. (buena práctica, específicos); resultado sin anuncio a lector de pantalla (cruza A11Y-11). |
| Cotizador LowCost | `LowCostHero.tsx`, `LowCostPricing.tsx`, `BatchGrid.tsx` — "SLA de entrega garantizada" ×4 (afirmación que además hay que auditar en F2-4); "Cotización Especial", "Consultar (+15 km)" con umbral de texto que no coincide con el umbral real de `pricing.ts` (ya señalado en F2-1 como bug de precios, no se repite acá). |
| Formulario de contacto (home) | Existe, no se relevó estado de error en detalle — depende de A11Y-14 (a verificar). |
| Página de contacto | `ContactForm.tsx` con comentario interno `{/* SLA Badge */}` — confirmar si el badge visible también dice "SLA" al usuario. |
| Preguntas frecuentes | Estructura de acordeón accesible (confirmado en F2-2); contenido de preguntas no relevado pregunta por pregunta en esta pasada — F1-2 ya pide sumar 6 preguntas de intención real (Batán, sábados, alimentos, lluvia, factura, peso máximo). |
| Footer | `OptimizedFooter.tsx` — "Cotizá tu Envío", "Cotizá online en segundos o co[ntactanos]", "Cotizadores", "Cotizador Express < 2H", "Cotizador LowCost Batch" ("Batch" es jerga, ver COPY-01). |
| Mensajes de WhatsApp prearmados | No se encontró generación de mensaje prearmado con contexto (precio, servicio) más allá de `getWhatsAppLink()` en el cotizador Express — no hay evidencia de variantes por Flex/3PL/contacto general. Se proponen en §6. |

---

## 3. Hallazgos

**COPY-01** — Importante — Jerga interna en copy de cliente — Home, Emprendedores, Footer, mapa de ruta — `EmprendedoresHero.tsx:33,59,65,89,140`, `EmprendedoresFeatures.tsx:56,61`, `EmprendedoresPricing.tsx:108,262`, `ContactHero.tsx:337`, `OptimizedFooter.tsx:243`, `LeafletRouteMap.tsx:209`
Evidencia: "3PL" aparece 89 veces en `src/components`/`src/app`; incluye el H1 "LOGÍSTICA 3PL EN MAR DEL PLATA" y el botón "Agendar Asesoría 3PL". Un emprendedor que busca "guardar y despachar mis productos" no busca "3PL".
Antes → Después:
- "LOGÍSTICA 3PL EN MAR DEL PLATA" → "DEPÓSITO Y ENVÍOS PARA TU E-COMMERCE"
- "Agendar Asesoría 3PL" → "Hablar sobre mi depósito"
- "Fulfillment 3PL" (opción de select en `ContactHero.tsx`) → "Depósito y despacho de pedidos"
- "Cotizador LowCost Batch" (footer) → "Cotizador LowCost (varios envíos)"
Razón del cambio: "3PL" es vocabulario de la industria logística, no del cliente final; el nombre de página que F1-2 ya definió es "Depósito y fulfillment", que sí incluye la palabra que sí buscan ("depósito").

**COPY-02** — Importante — Jerga interna — Cotizador Express — `ExpressPricing.tsx:24,33,42,51`
Antes: "Custodia digital" → Después: "Seguimiento del envío por WhatsApp"
Razón: "custodia digital" no comunica nada concreto al cliente; lo que el sitio realmente ofrece (según el resto del copy) es aviso y seguimiento por WhatsApp — nombrarlo así es más claro y no promete algo distinto (evita además un problema de respaldo en F2-4).

**COPY-03** — Importante — Afirmación de SLA sin explicar / sin respaldo verificado — Cotizador LowCost — `LowCostPricing.tsx:23,31,39,47`
Antes: "SLA de entrega garantizada" → Después: "Entrega antes de las {hora de corte}, todos los lotes del día"
Razón: "SLA" es jerga B2B; además "garantizada" es una palabra que F2-4 debe auditar como afirmación absoluta. Se reemplaza por el dato concreto que sí está confirmado en el mismo bloque (corte de carga y entrega antes de las 19:00 hs), sin la palabra que compromete algo no verificado.

**COPY-04** — Menor — Jerga técnica de mapa — Cotizadores, vista de ruta — `LeafletRouteMap.tsx:209`
Antes: "Ruteo Batch Económico" → Después: "Ruta de entregas LowCost"

**COPY-05** — Importante — CTAs distintos para la misma acción (iniciar cotización) — Home, header, footer, nosotros — `OptimizedHeader.tsx:271`, `MobileNav.tsx:214`, `OptimizedFooter.tsx:87,96`, `HeroAnimado.tsx:130`, `CtaSection.tsx:71`, `AboutMissionVision.tsx:111,120`, `AboutAdvantages.tsx:116`, `SliderServicios.tsx:60`, `CotizadorLowCostForm.tsx:301`
Evidencia: al menos 8 redacciones distintas para la misma acción ("Cotizá tu envío", "Cotizá Express", "Cotización Inmediata", "Cotizar Envío", "Cotizá en línea o hablá hoy", "Cotizar tu Envío", "Cotizar Envío Urgente", "Cotización Especial").
Corrección: un solo verbo-CTA por acción, definido en el glosario (§4). "Cotizá" para llevar al cotizador; el nombre del servicio va en el contexto de la tarjeta, no en el botón, salvo que sea necesario para desambiguar Express de LowCost.

**COPY-06** — Menor — Modo verbal inconsistente en CTAs de WhatsApp — Header, hero, footer, FAQ — `LowCostPricing.tsx:252` ("Consultar por WhatsApp"), `LowCostHero.tsx:87` / `ExpressHero.tsx:80` / `CtaSection.tsx:172` ("Hablar por WhatsApp", infinitivo), `FaqCta.tsx:58` ("Hablá por WhatsApp", imperativo voseo)
Corrección: unificar en imperativo voseo — "Hablá por WhatsApp" — en todos los casos; el infinitivo no es un error de voseo pero rompe la consistencia de tono con el resto del sitio.

**COPY-07** — Menor — Mayúsculas sostenidas en el string fuente (no solo CSS) — Emprendedores — `EmprendedoresHero.tsx:33,59`
Evidencia: "LOGÍSTICA 3PL MDQ" y "LOGÍSTICA 3PL EN MAR DEL PLATA" están en mayúsculas en el dato/string, no solo con `text-transform: uppercase` vía Tailwind. Esto es además un problema de accesibilidad potencial (algunos lectores de pantalla deletrean bloques largos en mayúsculas) y de mantenimiento (no se puede bajar el énfasis visual sin tocar el copy).
Corrección: escribir el string en formato oración normal y aplicar `uppercase` por clase CSS cuando el diseño lo pida — así el HTML fuente queda legible y el estilo se controla aparte.

**COPY-08** — Importante — Nombre de servicio no coincide entre navegación y contenido de la página — Header vs. páginas de servicio — cruza con **D-2/D-4 de F2-1** (rutas `/servicios/enviosflex` vs. `/servicios/flex` documentadas)
No se repite la evidencia técnica (ya está en F2-1); se agrega la consecuencia de copy: si el ítem de menú dice "Flex" y el H1 real dice otra cosa, el glosario único de §4 es el que debe fijar el nombre ganador para que header, H1, breadcrumb y footer digan lo mismo.

**COPY-09** — Crítico (cruza con hallazgo de precios de F2-1) — Promesa de tiempo/peso de Express inconsistente entre home, página y schema
No se repite la evidencia (ya documentada como divergencia en F2-1); se deja constancia de que F1-2 identificó la misma inconsistencia de forma independiente ("Express dice 30–90 min y 10 kg en la home, rango de 3 hs y 5 kg en su página, menos de 2 horas en el schema y en llms.txt") — tres fuentes coinciden en el mismo hallazgo, lo que sube su prioridad en el backlog unificado (F4-0).

**COPY-10** — A verificar — Falta de mensajes de error y de resultado en el copy fuente
No se encontró en el código copy definido para: error de validación por campo, dirección fuera de cobertura, dirección no encontrada, falla del cálculo de ruta, estado de carga, éxito de formulario, estado vacío de la planilla LowCost, página 404. Se completan como propuesta nueva en §5 (no había "antes" que mostrar).

---

## 4. Glosario único y tabla de CTAs

### Nombres de servicio (un solo nombre, en todo el sitio)

| Servicio | Nombre único a usar | No usar |
|---|---|---|
| Envío urgente en moto | **Express** | "Envíos Express", "Cotizador Express < 2H" fuera de contexto de tiempo específico |
| Envío económico / mismo día u otro día | **LowCost** | "Cotizador LowCost Batch", "Ruteo Batch" |
| Mensajería para vendedores de Mercado Libre | **Flex** (siempre con la aclaración "Mercado Libre Flex" la primera vez en cada página) | "Envíos Flex" a secas en H1 (repite "envíos" del nombre de marca) |
| Depósito, guardado y despacho de stock | **Depósito y fulfillment** | "3PL", "Logística 3PL", "Fulfillment 3PL" |
| Cuenta con facturación mensual para empresas | **Cuenta corriente empresas** | "B2B", "Cuenta Corriente Comercial" |
| Pago al recibir el paquete | **Contrareembolso** | "Cobro en destino" (sirve como sinónimo en FAQ, no como nombre de página) |

### Un solo verbo por acción

| Acción | Verbo/CTA único | Destino |
|---|---|---|
| Ir al cotizador (genérico, header/footer/hero) | **Cotizá tu envío** | `/cotizar/express` (default) o el cotizador del servicio en contexto |
| Ir al cotizador Express específicamente | **Cotizá tu Express** | `/cotizar/express` |
| Ir al cotizador LowCost específicamente | **Cotizá tu LowCost** | `/cotizar/lowcost` |
| Hablar por WhatsApp (genérico) | **Hablá por WhatsApp** | `wa.me` con mensaje prearmado según contexto (§6) |
| Pedir información de Flex | **Sumate a Flex** | `/servicios/enviosflex#contacto` o WhatsApp con mensaje Flex |
| Pedir información de depósito/fulfillment | **Consultá tu depósito** | `/servicios/deposito-fulfillment#contacto` o WhatsApp |
| Pedir información de cuenta corriente empresas | **Hablemos de tu cuenta corriente** | WhatsApp con mensaje corporativo o formulario de contacto |
| Llamar por teléfono | **Llamá al {teléfono}** | `tel:+542236602699` |

Regla de aplicación: el nombre del servicio va en el título o la tarjeta que rodea al botón, no repetido dentro del propio texto del botón, salvo en el header (donde no hay contexto visual previo) y en las tarjetas de la home (donde conviven varios servicios en la misma vista).

---

## 5. Biblioteca de estados y mensajes

Todo el copy de esta sección es nuevo (no había "antes" en el código para estos casos — ver COPY-10). Ningún precio: se usa `{precio}`.

**Error de validación por campo (genérico)**
"Revisá este dato antes de seguir."
Específico teléfono: "Escribí un WhatsApp válido, con código de área (ej: 223 ...)."
Específico dirección: "Necesitamos una dirección de Mar del Plata o Batán para calcular tu envío."

**Dirección fuera de cobertura**
"Todavía no llegamos hasta ahí. Escribinos por WhatsApp y vemos si podemos coordinar igual." + CTA "Hablá por WhatsApp" con mensaje prearmado de zona no cubierta (§6).

**Dirección no encontrada**
"No encontramos esa dirección. Probá con calle y altura, o el nombre del barrio (ej: Constitución, Los Troncos, Camet)."

**Falla del cálculo de ruta**
"No pudimos calcular la ruta en este momento. Tu conexión está bien, es un problema nuestro — probá de nuevo en un minuto o escribinos por WhatsApp y te cotizamos a mano."

**Cargando (cotizador)**
"Calculando tu envío..." (con el mapa/skeleton ya presente en el componente, según DESIGN.md)

**Resultado del cotizador (anunciado, cruza A11Y-11)**
"Tu envío sale {precio}." — dentro de `role="status" aria-live="polite"`, para que además de mostrarse se anuncie.
Umbral "a consultar": "Para esta distancia cotizamos a medida. Hablá por WhatsApp y te respondemos con el precio." (reemplaza el texto actual "A Consultar (+15 km)" que no coincide con el umbral real de `pricing.ts`, ya señalado en F2-1).

**Éxito de formulario de contacto**
"Listo, lo recibimos. Te contestamos por WhatsApp o por mail en el transcurso del día."

**Estado vacío de la planilla LowCost (BatchGrid)**
"Todavía no cargaste ningún envío. Sumá el primero con el botón de abajo." + CTA "Agregar envío"

**Página 404**
"Esta página no existe o cambió de lugar." + CTA "Volver al inicio" + CTA "Cotizá tu envío" (no dejar un callejón sin salida — siempre ofrecer la conversión principal).

---

## 6. Mensajes prearmados de WhatsApp por contexto

Todos abren `wa.me` con el número `+54 223 660-2699` y texto prellenado editable por el usuario.

| Contexto | Mensaje prearmado |
|---|---|
| Desde cotizador, con precio calculado | "Hola! Cotizé un envío {tipo de servicio} por {precio} desde la web y quiero coordinarlo." |
| Desde cotizador, distancia "a consultar" | "Hola! Quiero cotizar un envío que la web no pudo calcular solo (más de 15 km). Te paso origen y destino." |
| Desde cotizador, dirección fuera de cobertura | "Hola! Probé cotizar un envío pero la dirección no está en la cobertura automática. ¿Lo pueden hacer igual?" |
| Desde página Flex | "Hola! Vendo por Mercado Libre Flex y quiero sumar a Envíos DosRuedas como mensajería habilitada." |
| Desde página Depósito y fulfillment | "Hola! Tengo una tienda online y quiero consultar por el depósito y despacho de pedidos en Friuli 1972." |
| Desde página Cuenta corriente empresas | "Hola! Somos una empresa y queremos consultar por una cuenta corriente con Envíos DosRuedas." |
| Desde contacto general | "Hola! Te escribo desde la web de Envíos DosRuedas, quiero hacerles una consulta." |

---

## 7. Title, meta description, H1 y primer párrafo por página (P1 de F1-2)

F1-2 ya redactó title/meta/H1 con la keyword asignada; acá se confirman en voz de marca (voseo, sin jerga) y se agrega el primer párrafo, que F1-2 no incluía.

### `/` (home)
- **Title** (confirmado de F1-2): Mensajería en moto y logística en Mar del Plata
- **Meta** (confirmado de F1-2): Envíos en el día, Flex y depósito para tu negocio en Mar del Plata. Flota propia, cotizá por km y seguí tu envío por WhatsApp.
- **H1**: según README/DC de F2-1, el H1 documentado es "Enviá hoy. Llega al toque." — queda pendiente de la decisión de F2-1/F4-0 sobre cuál H1 gana (canon vs. producción); este documento no la reabre.
- **Primer párrafo (nuevo)**: "Somos una mensajería en moto de Mar del Plata, con flota propia y más de 7 años en la calle. Envíos Express en el día, LowCost para tiendas online y mensajería habilitada para Mercado Libre Flex — cotizá online o hablanos por WhatsApp."

### `/servicios/envios-express`
- **Title** (confirmado): Envíos express en moto en Mar del Plata
- **Meta** (confirmado): Mensajería urgente con franja horaria y precio por km. Documentos, repuestos y trámites en el día. Cotizá online.
- **H1 propuesto**: "Envíos express en moto en Mar del Plata"
- **Primer párrafo (nuevo)**: "Retiramos y entregamos el mismo día, con una sola franja horaria de referencia (la misma que ves acá, en el cotizador y en WhatsApp — sin letra chica distinta según dónde mires). Elegí el horario, cotizá por kilómetro y seguí tu envío por WhatsApp."

### `/servicios/enviosflex`
- **Title** (confirmado): Envíos Flex Mercado Libre en Mar del Plata
- **Meta** (confirmado): Mensajería habilitada para Mercado Envíos Flex en Mar del Plata: corte 15 hs, entrega en el día y devolución sin cargo. Sumate.
- **H1 propuesto**: "Mensajería habilitada para Mercado Libre Flex en Mar del Plata" (sin la afirmación "100% cumplimiento" que F2-1 marcó como sin respaldo — DC-19; se retoma en F2-4)
- **Primer párrafo (nuevo)**: "Somos mensajería habilitada para Mercado Envíos Flex en Mar del Plata. Retiramos tus pedidos, cumplimos el corte y evitamos que tu cuenta de vendedor sume demoras. Sumate con la documentación que ya tenés lista."

### `/servicios/envios-lowcost`
- **Title** (confirmado): Envíos económicos para tiendas online en Mar del Plata
- **Meta** (confirmado): Paquetería en el día para emprendedores: retiro en tu local, precio por km y seguimiento. Sin mínimo de envíos.
- **H1 propuesto**: "Envíos económicos para tiendas online en Mar del Plata"
- **Primer párrafo (nuevo)**: "Retiramos tus pedidos en tu local o depósito y los entregamos el mismo día o al siguiente, sin mínimo de envíos. Pensado para emprendedores y tiendas online que despachan todos los días, no solo en fechas puntuales."

### `/guias/envios-flex-mar-del-plata` (página nueva)
- **Title**: Guía para vender con Envíos Flex en Mar del Plata
- **Meta**: Qué exige Mercado Libre, qué zonas cubre Flex en Mar del Plata y cómo elegir mensajería habilitada. Guía práctica para sellers.
- **H1** (de F1-2): "Guía para vender con Envíos Flex en Mar del Plata"
- **Primer párrafo (nuevo)**: "Si vendés por Mercado Libre y estás por sumarte a Flex (o ya estás y buscás cambiar de mensajería), esta guía junta lo que Mercado Libre exige, qué zonas de Mar del Plata cubre el servicio y cómo elegir una mensajería habilitada sin sorpresas."
- Contenido completo de esta página (secciones, FAQ, CTA) se desarrolla en **F3-2**, ya que es contenido nuevo, no un ajuste de copy existente.

### `/servicios/envios-contrareembolso` (página nueva)
- **Title**: Envíos contrareembolso en Mar del Plata
- **Meta**: Cobro en destino sin comisión extra. Cómo funciona el contrareembolso, cuándo se rinde y qué pasa si el cliente no está.
- **H1** (de F1-2): "Envíos contrareembolso en Mar del Plata"
- **Primer párrafo (nuevo)**: "Si vendés y preferís cobrar cuando el pedido llega, nuestros riders cobran en destino y te rendimos el dinero según el medio de pago que elijas. Sin comisión extra por el servicio." (el dato "sin comisión" debe confirmarse contra `docs/contexto/precios.md` en F2-4 antes de publicar)
- Contenido completo en **F3-2**.

### `/servicios/deposito-fulfillment` (fusión, reemplaza `/servicios/plan-emprendedores`)
- **Title**: Depósito y fulfillment para e-commerce en Mar del Plata
- **Meta**: Guardamos tu stock en Friuli 1972, hacemos picking y despachamos tus pedidos. Depósito real, no virtual.
- **H1** (de F1-2): "Depósito y fulfillment para e-commerce en Mar del Plata"
- **Primer párrafo (nuevo)**: "Guardamos tu stock en nuestro depósito de Friuli 1972, armamos tus pedidos con picking por QR y los despachamos el mismo día. Nada de tener que ir a buscar cada caja vos mismo."
- Contenido completo en **F3-2**. Requiere la redirección 301 desde `/servicios/plan-emprendedores` (ya señalada en F1-2 y a incluir en el backlog de F4-0).

---

## 8. Supuestos y lo que no se pudo verificar

- `docs/knowledge_base/contexto.md` no existe en el repo; el glosario y la voz de esta fase son una propuesta a partir del copy ya publicado y consistente (voseo, tono directo), no la transcripción de un diccionario existente. Si el dueño ya tiene una lista de verbos/nombres definida en otro lado, debe reemplazar a la de este documento.
- No se relevó el contenido completo de `/nosotros/preguntas-frecuentes` pregunta por pregunta — se retoma con el pedido de F1-2 de sumar 6 preguntas nuevas, sin reescribir las existentes sin verlas.
- El H1 de home queda "a decidir" porque depende de la resolución de la divergencia D-1/D-2 de F2-1 (README vs. producción), no de esta fase.
- El dato "contrareembolso sin comisión extra" en la página nueva (§7) es una propuesta de copy basada en lo que dice F1-2 sobre la página oficial de precios; se marca explícitamente como pendiente de confirmar en F2-4, no se da por hecho.
- Los mensajes de WhatsApp de §6 son propuestas de texto; no se verificó si el número o la integración técnica ya arman el mensaje dinámicamente (`getWhatsAppLink()` en el cotizador Express existe; para el resto no se confirmó implementación, queda para F4-1/F4-2).
