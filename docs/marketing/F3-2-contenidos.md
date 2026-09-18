# F3-2 — Contenidos y secuencias

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F1-1-competitive-brief.md` (battlecards), `F1-2-seo-audit.md` (briefs de página), `F2-3-ux-copy.md` (glosario y CTAs), `F2-4-brand-review.md` (afirmaciones permitidas), `F3-1-campaign-plan.md` (calendario y "Piezas a producir", §6 y §11).
Restricción: ningún precio propio de DosRuedas escrito; se usa `{precio}` con referencia a `src/lib/pricing.ts` / `docs/contexto/precios.md`. Los precios de competidores citados en las respuestas a objeciones (§7) vienen de `F1-1-competitive-brief.md` y se marcan como tal, con su propia fecha de verificación — no son un precio propio de DosRuedas.

**Alcance de esta fase** (para no clonar una plantilla cambiando el nombre y para no gastar el documento en contenido que F2-3 ya resolvió): se escribe el texto completo de las tres páginas P1 *nuevas* de F1-2 (guía Flex, contrareembolso, depósito y fulfillment), porque no existen todavía. Para las páginas P1 que solo se *mejoran* (home, Express, Flex, LowCost), F2-3 §7 ya dejó title/meta/H1/primer párrafo definitivos; acá se agrega únicamente lo que falta y no estaba cubierto: preguntas frecuentes nuevas y los bloques de copy que dependen de contenido de esta fase (mensajes, objeciones).

---

## 1. Páginas nuevas — texto completo

### CONT-01 · `/guias/envios-flex-mar-del-plata` (ligado a PZ-09, CAMP del sprint "páginas nuevas")

**Title:** Guía para vender con Envíos Flex en Mar del Plata (54 car.)
**Meta description:** Qué exige Mercado Libre, qué zonas cubre Flex en Mar del Plata y cómo elegir mensajería habilitada. Guía práctica para sellers. (147 car. — ajustar a ≤155 en implementación)
**H1:** Guía para vender con Envíos Flex en Mar del Plata
**Schema:** `Article` + `FAQPage`

**Primer párrafo:**
Si vendés por Mercado Libre y estás por sumarte a Flex —o ya estás y buscás cambiar de mensajería—, esta guía junta lo que Mercado Libre exige, qué zonas de Mar del Plata cubre el servicio y cómo elegir una mensajería habilitada sin sorpresas.

**Sección: ¿Qué es Flex y qué exige Mercado Libre?**
Mercado Envíos Flex es la modalidad en la que vos, como vendedor, coordinás el retiro de tus productos con una mensajería habilitada en lugar de llevarlos a una sucursal. Mercado Libre pide que la mensajería cumpla un corte de retiro, una ventana de entrega y un proceso de devolución definido — lo que varía es quién te lo garantiza en Mar del Plata.

**Sección: Requisitos para vender con Flex**
- Reputación de vendedor según el nivel que pide Mercado Libre para habilitar Flex (confirmá tu nivel actual en tu cuenta de vendedor).
- La app de Mercado Libre para gestionar los envíos del día.
- Embalaje que resista el traslado en moto — bolsa o caja según el producto, sin envoltorios sueltos.
- Documentación en regla del lado de la mensajería: flota propia, riders identificados (P8, F2-4).

**Sección: Qué zonas de Mar del Plata cubre Flex con nosotros**
Cobertura en Mar del Plata y Batán (ver `/cobertura` cuando esté publicada — CAMP pendiente). {precio} varía según distancia; cotizá el tramo exacto en `/cotizar/express`.

**Sección: Cómo elegir mensajería para Flex (checklist)**
1. ¿Tiene depósito o base física en Mar del Plata, no solo un número de WhatsApp? (nosotros: Friuli 1972, P9)
2. ¿Te dice el horario de corte y de entrega por escrito, no "en el día" sin más? (P1: corte 15:00, entrega antes de las 20:00)
3. ¿Qué pasa si llueve? (P3: recargo del 30%, no una suspensión del servicio)
4. ¿Tiene flota propia o subcontrata? (P8: flota propia, sin tercerizar)
5. ¿Qué pasa si el comprador rechaza el paquete? (P4: devolución sin cargo)

**Sección: Lluvia y reprogramaciones**
Los días de lluvia el servicio sigue operando, con un recargo del 30% sobre el tramo (P3). No se suspende el retiro salvo alerta meteorológica extraordinaria — coordinamos el reintento por WhatsApp el mismo día.

**Sección: Cómo empezar con Envíos DosRuedas**
Escribinos con tu usuario de vendedor y el volumen aproximado de envíos diarios; te confirmamos cobertura y coordinamos el primer retiro.
**CTA:** Sumate a Flex (CTA-03, WhatsApp con texto `flex`)

**FAQ (6, con intención de búsqueda real):**
1. *¿Necesito un mínimo de envíos diarios para trabajar con ustedes en Flex?* — No hay mínimo de paquetes (P5); coordinamos según tu volumen real.
2. *¿Qué pasa si Mercado Libre me pide cambiar de mensajería habilitada?* — Te ayudamos con la documentación que Mercado Libre pide para el cambio; escribinos y lo vemos juntos.
3. *¿Cubren envíos a Batán?* — {a confirmar contra `/cobertura` cuando esté publicada}
4. *¿Qué pasa si el comprador no está cuando llega el pedido?* — Reprogramamos la entrega según la política de devolución sin cargo (P4).
5. *¿Cómo se calcula el recargo por lluvia?* — Es un 30% sobre el tramo del día (P3), no un monto fijo.
6. *¿Puedo empezar con pocos envíos y crecer después?* — Sí, no hay mínimo ni permanencia (P5; confirmar con el dueño si aplica algún compromiso de plazo antes de publicar).

**Enlaces internos:** `/servicios/enviosflex`, `/cobertura` (cuando exista), `/contacto`.

---

### CONT-02 · `/servicios/envios-contrareembolso` (ligado a PZ-05/PZ-07, semanas 3-4)

**Title:** Envíos contrareembolso en Mar del Plata (44 car.)
**Meta description:** Cobro en destino sin comisión extra. Cómo funciona el contrareembolso, cuándo se rinde y qué pasa si el cliente no está. (133 car.)
**H1:** Envíos contrareembolso en Mar del Plata
**Schema:** `Service` + `FAQPage`

**Primer párrafo:**
Si vendés y preferís cobrar cuando el pedido llega, nuestros riders cobran en destino y te rendimos el dinero el mismo día, según el medio de pago que elijas. Sin comisión extra por el servicio (P6 — confirmar contra `docs/contexto/precios.md` antes de publicar, hoy no existe).

**Sección: Cómo funciona**
1. Coordinás el retiro del pedido como cualquier envío LowCost o Express.
2. El rider cobra en destino, en el medio de pago que hayas definido con tu cliente.
3. Te rendimos el dinero en el acto (P7) — por transferencia o en efectivo, a coordinar.

**Sección: Cuándo se rinde el dinero**
El mismo día del cobro, sin esperar a fin de semana o a juntar varios envíos (P7 — respaldado por reseña real de cliente, ver F2-4 §6).

**Sección: Qué pasa si el cliente rechaza el pedido**
Se aplica la misma política de devolución sin cargo que en Flex y LowCost (P4) — no repetimos la cobranza intentada, coordinamos la devolución.

**Sección: Medios de pago que acepta el rider**
{A verificar con el dueño — no se encontró en el código ni en README una lista cerrada de medios aceptados en la puerta (efectivo confirmado por P7; tarjeta o QR: a confirmar antes de publicar}.

**CTA:** Empezá a cobrar en la puerta (CTA-04, WhatsApp con texto `contrareembolso`)

**FAQ (4):**
1. *¿Cobran comisión por el contrareembolso?* — {precio}, según `docs/contexto/precios.md` — P6 dice que no hay comisión extra, a confirmar antes de publicar con precio real.
2. *¿Cuándo me rinden el dinero?* — El mismo día (P7).
3. *¿Qué pasa si mi cliente no tiene el efectivo justo?* — {a confirmar con el dueño — no verificado}.
4. *¿Puedo combinarlo con Flex o LowCost?* — Sí, es una forma de cobro, no un servicio de envío aparte; se coordina junto con el retiro.

**Enlaces internos:** desde `/servicios/envios-lowcost`, `/servicios/deposito-fulfillment`, home.

---

### CONT-03 · `/servicios/deposito-fulfillment` (reemplaza `/servicios/plan-emprendedores`, ligado a PZ-13, semana 6 — requiere 301 desde el slug viejo, ver F4-0)

**Title:** Depósito y fulfillment para e-commerce en Mar del Plata (56 car.)
**Meta description:** Guardamos tu stock en Friuli 1972, hacemos picking y despachamos tus pedidos. Depósito real, no virtual. (100 car.)
**H1:** Depósito y fulfillment para e-commerce en Mar del Plata
**Schema:** `Service` + `BreadcrumbList`

**Primer párrafo:**
Guardamos tu stock en nuestro depósito de Friuli 1972 (P9), armamos tus pedidos con picking por QR y los despachamos el mismo día. Nada de tener que ir a buscar cada caja vos mismo.

**Sección: Cómo funciona (proceso)**
1. Recepción de tu stock en Friuli 1972, con control de cantidad.
2. Almacenamiento identificado por producto.
3. Picking por QR cuando entra un pedido nuevo.
4. Despacho el mismo día o al siguiente, según el horario de corte.

**Sección: Dirección y visitas**
Friuli 1972, Mar del Plata — podés conocer el depósito antes de sumarte. (Agregar mapa embebido en la implementación, ver F4-1.)

**Sección: Qué productos aceptamos**
{A verificar con el dueño — README no especifica límites de tamaño/peso para esta modalidad de forma verificada; no inventar un rango}.

**Sección: DropOFF (traés vos el stock)**
Opción para quien prefiere acercar el stock en lugar de coordinar un retiro — {condición y eventual descuento: a verificar contra `docs/contexto/precios.md`, hoy no existe; no repetir el porcentaje que aparece en README sin confirmar}.

**Sección: Integración con tu tienda online**
{No prometer integración automática con Mercado Libre o Tiendanube salvo que el dueño confirme que existe (ver DC de F2-1 sobre funcionalidades no construidas) — si no existe, decir: "Coordinamos tus pedidos por planilla o por WhatsApp; contanos qué plataforma usás."}

**CTA:** Consultá tu depósito (CTA-06, WhatsApp con texto `deposito`)

**FAQ (4):**
1. *¿Tienen depósito propio o es un espacio compartido?* — Depósito propio en Friuli 1972 (P9).
2. *¿Puedo visitar el depósito antes de decidir?* — Sí, coordinalo por WhatsApp.
3. *¿Cómo sé cuánto stock tengo guardado?* — {a verificar con el dueño: ¿hay reporte o planilla compartida?}
4. *¿Qué pasa si necesito retirar todo el stock?* — {a verificar con el dueño}.

**Enlaces internos:** desde home, `/servicios/enviosflex`, `/servicios/envios-lowcost`. Requiere redirección 301 desde `/servicios/plan-emprendedores` (backlog F4-0).

---

## 2. Ajustes pendientes en páginas "mejorar" (no se repite lo ya resuelto en F2-3 §7)

| Página | Qué falta agregar (no cubierto por F2-3) |
|---|---|
| `/` (home) | Nada de copy nuevo — F2-3 ya dio primer párrafo; el trabajo restante es de desarrollo (DC-08, DC-09, orden de secciones), no de contenido. |
| `/servicios/envios-express` | FAQ propia de 3–5 preguntas (pedida por F1-2, no redactada todavía): *¿Cuál es el horario máximo para pedir un Express hoy?* / *¿Qué no puedo mandar por Express?* (usar la respuesta de "Lo que llevamos y lo que no" de PZ-25, sin inventar una lista nueva) / *¿Puedo elegir franja horaria exacta?* — completar con el dueño antes de publicar. |
| `/servicios/enviosflex` | Nada de copy nuevo — F2-3 ya dio H1/primer párrafo sin "100% cumplimiento"; enlazar a CONT-01 (guía Flex) una vez publicada. |
| `/servicios/envios-lowcost` | Nada de copy nuevo — F2-3 ya dio primer párrafo. |
| `/nosotros/preguntas-frecuentes` | 6 preguntas nuevas pedidas por F1-2 (Batán, sábados, alimentos, lluvia, factura, peso máximo) — quedan **a redactar junto con el dueño**, porque varias dependen de respuestas que hoy son "a verificar" en F2-4 (Factura A/C, qué no se transporta) y no se puede improvisar contenido legal/operativo sin esa confirmación. |

---

## 3. Primer mes de publicaciones — Instagram y Facebook

Semanas 1–4 (22 sep–19 oct), según el calendario de `F3-1-campaign-plan.md` §6. Mismo texto para ambas redes salvo donde se aclara.

**CONT-04** (semana 1, apoya PZ-01) — **Formato:** foto simple | **CTA:** Hablá por WhatsApp (CTA-07)
Idea visual: foto real del depósito de Friuli 1972 o de un rider con la moto (de PZ-01, sin stock ni imágenes genéricas).
Texto: "Más de 7 años en las calles de Mar del Plata, con flota propia. Así arrancamos cada entrega: desde Friuli 1972. 🏍️"

**CONT-05** (semana 2, presenta el programa de reseñas antes de empezar a pedirlas) — **Formato:** foto o placa simple | **CTA:** Dejanos tu reseña (CTA-08)
Texto: "Si ya trabajaste con nosotros, tu opinión en Google ayuda a que más comercios de Mar del Plata nos encuentren. Dejanos tu reseña acá: [enlace]."

**CONT-06 = PZ-05** (semana 3) — **Formato:** Reel vertical 9:16, 20–30 s, subtítulos | **CTA:** Empezá a cobrar en la puerta (CTA-04)
Idea visual: rendición real del contrareembolso (con permiso del cliente), mostrando el momento del pago y la confirmación por WhatsApp.
Texto: "Vendés, tu cliente paga en la puerta, vos cobrás el mismo día. Así funciona el contrareembolso con Envíos DosRuedas."

**CONT-07** (semana 3–4, participación en grupos, no promocional — apoya PZ-06) — **Formato:** texto, sin imagen | **CTA:** ninguno (es aporte de valor, no venta)
Texto orientativo para responder consultas reales en grupos de sellers/emprendedores de Mar del Plata: "Si te sirve, nosotros cotizamos por km y no tenemos mínimo de envíos — cualquier duda te la resuelvo por acá o por WhatsApp." (adaptar a cada consulta puntual, no publicar como posteo propio).

**CONT-08 = PZ-07** (semana 4) — **Formato:** carrusel 4:5, 5 placas | **CTA:** Empezá a cobrar en la puerta (CTA-04)
Placa 1: "¿Cómo funciona el contrareembolso?" · Placa 2: "1. Coordinás el retiro" · Placa 3: "2. El rider cobra en destino" · Placa 4: "3. Te rendimos el mismo día" · Placa 5: "Sin comisión extra (a confirmar) — Empezá a cobrar en la puerta" + CTA.

---

## 4. Publicaciones para Google Business Profile — primer mes

**CONT-09** (semana 1) — Novedad operativa: "Retiramos y entregamos en Mar del Plata y Batán con flota propia. Cotizá tu envío por km en nuestro sitio." + foto de depósito. CTA de la ficha: "Cotizá".

**CONT-10** (semana 2) — Servicio destacado (Express): "¿Necesitás enviar algo hoy? Elegí tu franja horaria y cotizá por km, sin sorpresas." + foto de rider. CTA: "Cotizá".

**CONT-11** (semana 3) — Servicio destacado (Flex): "Vendés por Mercado Libre Flex en Mar del Plata? Somos mensajería habilitada, con depósito propio en Friuli 1972." + foto del depósito. CTA: "Llamar" o "WhatsApp".

**CONT-12** (semana 4) — Caso/novedad (contrareembolso, acompaña el lanzamiento de la página): "Ahora podés vender y cobrar en la puerta: nuestros riders cobran en destino y te rendimos el mismo día." + foto de entrega. CTA: "Más información" → `/servicios/envios-contrareembolso`.

---

## 5. Secuencia de seguimiento — formulario "volumen mensual" sin cerrar

4 mensajes por WhatsApp (o correo si no hay WhatsApp cargado), con condición de salida: **se corta la secuencia apenas la persona responde, cotiza o pide no recibir más mensajes.** Variante según el volumen que declaró en el formulario.

| # | Cuándo | Variante 1–50 envíos/mes | Variante 51–200 envíos/mes | Variante +200 envíos/mes |
|---|---|---|---|---|
| 1 | A las 2 horas | "Hola! Vimos que dejaste tu consulta sobre envíos para tu emprendimiento. ¿Te ayudo a cotizar el volumen que manejás?" | "Hola! Gracias por tu consulta sobre envíos recurrentes. ¿Cuántos despachás por semana en promedio? Así te armo una propuesta." | "Hola! Vimos tu consulta por un volumen alto de envíos. Te escribe [nombre] para coordinar una llamada breve y ver cuenta corriente." |
| 2 | A las 48 horas (si no respondió) | "Che, ¿seguís necesitando coordinar tus envíos? Sin mínimo de paquetes, cotizás por km cuando quieras." | "¿Pudiste ver la propuesta? Con tu volumen probablemente te convenga LowCost con cotizador de lote — cotizá varios envíos juntos en un solo lugar." | "¿Coordinamos esa llamada esta semana? Con tu volumen tiene sentido hablar de cuenta corriente y depósito en Friuli 1972." |
| 3 | A los 5 días | "Te dejamos el cotizador a mano por si te sirve para calcular antes de decidir: [enlace a `/cotizar/lowcost`]." | "Si preferís, mirá cómo funciona el depósito y fulfillment para no tener que ir a buscar cada pedido vos: [enlace a `/servicios/deposito-fulfillment`]." | "Te comparto cómo trabajamos con empresas de tu volumen (cuenta corriente, depósito): [enlace a `/servicios/empresas-cuenta-corriente`, cuando exista]." |
| 4 | A los 10 días (cierre) | "Última vez que te escribimos por esto — quedamos a un mensaje de distancia cuando lo necesites. ¡Éxitos con tu emprendimiento!" | "Cerramos el seguimiento por acá; si más adelante te sirve coordinar envíos recurrentes, escribinos cuando quieras." | "Quedamos disponibles para esa conversación cuando te sirva — no volvemos a escribir por este tema salvo que nos respondas." |

Condición de salida explícita en los 4 mensajes: dejar de enviar apenas hay respuesta (cualquiera), cotización iniciada, o pedido de no continuar.

---

## 6. Secuencia de bienvenida (cuenta nueva) y pedido de reseña tras la 5ª entrega

**Bienvenida (al confirmar la primera coordinación con un cliente recurrente):**
"¡Bienvenido a Envíos DosRuedas! Soy [nombre], tu contacto para coordinar tus envíos. Guardá este número — por acá coordinamos retiros, resolvemos dudas y te avisamos si algo cambia. Cualquier consulta, escribí."

**Pedido de reseña tras la 5ª entrega** (distinto del trigger de rendición/trámite que ya define F3-1 §7 — este es específico para cuentas recurrentes que llegan a su 5ª entrega):
"Hola [nombre], ya van 5 entregas juntos — gracias por la confianza. Si te sirvió el servicio, ¿nos dejás una reseña en Google? Nos ayuda a que más comercios de Mar del Plata nos encuentren: [enlace]."
Condición: no se envía si la cuenta ya dejó una reseña en los últimos 60 días (misma regla que F3-1 §7, para no duplicar pedidos a la misma persona por dos triggers distintos).

---

## 7. Respuestas modelo a objeciones (basadas en las battlecards de F1-1)

Adaptadas de `F1-1-competitive-brief.md` para uso directo en WhatsApp o en conversación. Los precios de competidores están fechados al 18/09/2026 según F1-1 y pueden cambiar — confirmar antes de citarlos en una pieza publicada, no solo en conversación 1 a 1. El precio propio de DosRuedas se deja en `{precio}`.

**CONT-13 · Objeción "[Competidor de mensajería local] me cobra menos por el envío al centro"**
"Ese precio suele ser de lunes a viernes en horario comercial y sin lluvia — fuera de esa ventana cambia. Nosotros cotizamos por km antes de salir, con franja horaria elegida, sábados incluidos, y en Flex la lluvia es un recargo del 30%, no una suspensión. Cotizá tu tramo en la web y comparás el número final: {precio}."

**CONT-14 · Objeción "otra mensajería me sale más barato juntando varios envíos"**
"Ese precio suele depender de juntar varios envíos y pagar por adelantado, con una ventana de espera más larga para tu cliente. Con nosotros no hay mínimo de paquetes, cobramos contrareembolso sin comisión (a confirmar antes de publicar, P6) y te rendimos el mismo día."

**CONT-15 · Objeción "otro mensajero de la zona no cobra comisión, como ustedes"**
"Puede ser cierto para el reparto de comida en su horario. Nosotros trabajamos en horario comercial y de trámites, tenemos depósito propio, hacemos Flex y cobramos tu venta en la puerta — con más de 7 años en la calle (P13)."

**CONT-16 · Objeción "por un grupo de WhatsApp lo resuelvo más barato"**
"Antes de decidir por precio solo, preguntá quién responde si el paquete se pierde, si te dan factura y qué pasa un día de lluvia. Nosotros tenemos riders identificados, flota propia y cuenta corriente con factura (confirmar tipo de factura con el dueño antes de citarlo, F2-4 P10)."

**CONT-17 · Objeción "otra empresa de logística me ofrece Flex y depósito también"**
"Preguntales el precio publicado, el horario de corte y la dirección real del depósito en Mar del Plata. Nosotros: corte 15:00, entrega antes de las 20:00, devolución sin cargo y depósito en Friuli 1972 que podés visitar — {precio} según volumen."

**CONT-18 · Objeción "con una app de viajes lo tengo en 40 minutos"**
"Para un sobre sin mucho valor, puede servir. Para plata, documentos firmados, trámites o algo que no puede perderse, esas apps suelen aclarar por escrito que no cubren pérdida ni robo y que no llevan dinero. Nosotros sí, con rendición en el acto (P7)."

---

## 8. Supuestos y lo que no se pudo verificar

- Varias secciones de las páginas nuevas (§1) quedan con marcadores explícitos "{a verificar con el dueño}" en vez de contenido inventado — sobre todo: medios de pago aceptados en contrareembolso, límites de tamaño/peso en depósito, condición del descuento por DropOFF, e integración con plataformas de e-commerce. Ninguna de estas páginas debería publicarse con esos huecos todavía abiertos.
- Los precios de competidores en §7 vienen de `F1-1-competitive-brief.md` (18/09/2026); no se re-verificaron en esta fase. Si pasa mucho tiempo entre esta redacción y la publicación de piezas que los citen, conviene reconfirmarlos.
- El FAQ nuevo de `/nosotros/preguntas-frecuentes` (§2) no se redactó porque depende de respuestas que F2-4 dejó como "a verificar con el dueño" (Factura A/C, qué no se transporta) — no correspondía completarlo con contenido no verificado.
- Las publicaciones de Instagram/Facebook y GBP de este documento son propuestas de texto; no se generaron las piezas gráficas (eso es F5-1, sujeto a que el conector de Canva esté disponible).
- El "primer mes" de GBP (§4) adelanta la cadencia semanal que F3-1 §6 programa recién desde la semana 5 (PZ-12) — se considera una mejora menor (publicar en la ficha de Google desde el día uno no depende de ningún fix de desarrollo) y no contradice el resto del calendario; se deja constancia del cambio para que quien lo implemente lo sepa.
