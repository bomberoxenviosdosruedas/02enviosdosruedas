# F3-1 · Plan de campaña 90 días: clientes recurrentes para Envíos DosRuedas

**Fecha:** 18 de septiembre de 2026 · **Ventana:** semanas 1–13 (lunes 22/09 al domingo 21/12 de 2026, cubre Cyber Monday de noviembre y la previa de Navidad)
**Objetivo:** captar clientes que despachan todas las semanas. Prioridad 1: sellers de Mercado Libre Flex y emprendedores/tiendas online. Prioridad 2: cuentas corporativas con cuenta corriente. Particulares: solo como efecto colateral de SEO y ficha de Google, sin inversión propia.
**Insumos:** F1-1 brief competitivo (dos versiones: la publicada el 18/09 y el documento adjunto "Análisis Competitivo… 2026"), F1-2 auditoría SEO (ídem, dos versiones), F2-1 crítica de diseño, README/DESIGN/AGENTS/PRODUCT del repo.

> **Tres advertencias antes de leer.**
> 1. ~~F2-3 (glosario de CTAs) y F2-4 (afirmaciones respaldadas) no existen todavía.~~ **Actualización (F2-3/F2-4 completas):** ambas fases ya se ejecutaron (`F2-3-ux-copy.md`, `F2-4-brand-review.md`). §3.3 y §3.4 quedan **reconciliadas** contra esas fuentes definitivas — ver la nota al inicio de cada sección. El resto del plan no cambia.
> 2. **Los dos F1-1 y los dos F1-2 no coinciden en datos de reseñas.** La versión publicada el 18/09 no pudo leer Google Maps; el documento adjunto afirma que DosRuedas tiene 17 reseñas y MMDP 460 (4,9★). Este plan toma los números del adjunto como **A VERIFICAR** y define en la semana 1 cómo confirmarlos. F2-4 confirma el mismo riesgo desde el código: el conteo "15" está hardcodeado en `SocialProofSection.tsx` (MARCA, §6 de F2-4) y puede estar desactualizado.
> 3. **Ninguna métrica de línea base existe hoy** (no hay GA4 con eventos ni Search Console leída). Los objetivos de §1 son metas relativas al cierre de la semana 2, no absolutas.

---

## 1. Objetivos medibles por segmento

### 1.1 Cómo se construye la línea base en las semanas 1–2

Sin datos, cualquier número absoluto sería inventado. El plan arranca con dos semanas de medición pura:

| Qué | Cómo se mide | Quién | Cuándo |
|---|---|---|---|
| Cotizaciones iniciadas y completadas | Eventos GA4 `quote_start` y `quote_complete` (CAMP-01) | Desarrollo | Activos antes del lunes de la semana 1 |
| Conversaciones de WhatsApp entrantes | Conteo manual diario en WhatsApp Business por etiqueta de origen (`web-cotizador`, `web-contacto`, `ficha-google`, `instagram`, `referido`, `otro`) hasta que el evento `whatsapp_click` (CAMP-02) esté activo | Operación (quien atiende el WhatsApp) | Planilla diaria desde el día 1 |
| Cuentas nuevas recurrentes | Cliente que despacha ≥ 2 semanas seguidas o firma cuenta corriente; se registra en una planilla con fecha de alta, segmento y canal de origen | Dueño | Semanal |
| Reseñas de Google | Conteo en la ficha, lunes a la mañana | Dueño | Semanal |
| Posición y tráfico orgánico | Search Console (la verificación ya está en `layout.tsx`); exportar consultas y páginas de los últimos 28 días | Desarrollo | Semana 1 |

Al final de la semana 2 se fija la línea base (promedio diario de las dos semanas) y las metas de abajo se expresan como multiplicador sobre esa base.

### 1.2 Metas a 90 días (sobre la línea base de la semana 2)

| Segmento | Cotizaciones iniciadas | Cotizaciones completadas | Conversaciones WhatsApp con origen identificado | Cuentas nuevas recurrentes |
|---|---|---|---|---|
| (a) Sellers Flex | No aplica (Flex no se cotiza online; entra por WhatsApp) | — | ×3 con etiqueta `flex` | **8** cuentas que despachen ≥ 5 envíos/día durante 4 semanas seguidas |
| (b) Emprendedores / tiendas online | ×2 en `/cotizar/lowcost` | ≥ 60 % de las iniciadas | ×2 con etiqueta `lowcost` o `contrareembolso` | **15** cuentas con ≥ 2 semanas seguidas de despachos |
| (c) PyMEs / corporativas | — | — | ×2 con etiqueta `empresa` | **4** cuentas corrientes con factura mensual |
| (d) Particulares | ×1,5 en `/cotizar/express` | ≥ 50 % de las iniciadas | Sin meta | Sin meta |
| Transversal | Reseñas de Google: de 17 (A VERIFICAR) a **50** | Tasa cotización → WhatsApp: ≥ 35 % | Tráfico orgánico a páginas de servicio: ×1,5 | 100 % de reseñas respondidas |

Las cifras de cuentas (8 / 15 / 4) son el mínimo que justifica el esfuerzo del plan; el dueño ajusta después de la semana 2 según la capacidad operativa de la flota (**A VERIFICAR: cuántos envíos diarios extra puede absorber hoy la operación sin sumar riders**).

---

## 2. Audiencia: una ficha por segmento

### 2.1 Seller de Mercado Libre Flex (prioridad 1)

| Campo | Contenido |
|---|---|
| Quién es | Vendedor de ML con local o depósito en Mar del Plata (Centro, Güemes, Juan B. Justo, Parque Industrial) que despacha entre 5 y 40 paquetes por día y tiene Flex activo o quiere activarlo. |
| Problema | Su reputación depende de que cada paquete llegue en el día. Los cadetes informales fallan cuando llueve; ML le traslada los costos de reprogramación y clima (fuente: envios.mercadolibre.com.ar/envios-flex). |
| Disparador de compra | Una suspensión o advertencia de Flex, un pico de ventas (Cyber Monday, Día de la Madre, diciembre), o el cadete que deja de responder. |
| Objeciones | "Ya tengo un chico que me lo hace más barato"; "¿qué pasa si el comprador no está?"; "¿me cobrás la lluvia al doble?"; "DAR Logística también hace Flex" (F1-1). |
| Ángulo F1-1 | **Ángulo 1 · Flex sin sorpresas**: tarifa plana desde 10 envíos diarios, lluvia +30 %, devolución sin cargo, corte 15:00, entrega antes de las 20:00. |
| Dónde está | Grupos de Facebook y WhatsApp de vendedores de ML de Mar del Plata, comunidad de Mercado Libre, Instagram de marcas locales, la propia app de ML (sección "mensajerías habilitadas"). |
| Página destino | `/servicios/enviosflex` (hasta el rename) y la guía `/guias/envios-flex-mar-del-plata` (nueva). |

### 2.2 Emprendedor / tienda online (prioridad 1)

| Campo | Contenido |
|---|---|
| Quién es | Marca de indumentaria, accesorios, cosmética, juguetería o impresión 3D que vende por Instagram, Tiendanube o WhatsApp, con 5 a 30 envíos por semana dentro de la ciudad. Los logos del carrusel de la home (Toy Piola, Ama & Pola, Dropix 3D, Catalina Indumentaria, Envases 3G) son este perfil. |
| Problema | Reparte el dueño o un familiar; pierde medio día; cobra contra entrega y necesita que la plata vuelva; MMDP le cobra el retiro y la rendición como dos envíos y le pide pago adelantado (F1-1). |
| Disparador de compra | Un fin de semana con más pedidos de los que puede repartir; un cliente que se quejó por demora; empezar a vender en Tiendanube y no tener opción de envío local. |
| Objeciones | "¿Tengo que juntar 10 envíos?"; "¿cómo me devolvés el efectivo?"; "¿me sirve si mando 3 por semana?"; "¿llegan a Batán?". |
| Ángulo F1-1 | **Ángulo 2 · Cobramos por vos, te rendimos hoy** (contrareembolso sin comisión, sin mínimo) y **Ángulo 3 · Tu depósito está en Friuli 1972** (para las que ya tienen stock). |
| Dónde está | Instagram (hashtags #emprendedoresmardelplata, #hechoenmardelplata), ferias locales, grupos de Facebook de emprendedores MDQ, Tiendanube (ayuda y comunidad), Cámara de Comercio / programa municipal de emprendedores. |
| Página destino | `/servicios/envios-lowcost`; `/servicios/envios-contrareembolso` (nueva); `/servicios/deposito-fulfillment` (rename de plan-emprendedores). |

### 2.3 PyME / empresa con cuenta corriente (prioridad 2)

| Campo | Contenido |
|---|---|
| Quién es | Distribuidora, casa de repuestos (Champagnat, Colón), laboratorio o droguería, estudio contable o jurídico del Centro, empresa de servicios con 10 a 60 envíos y trámites por semana. |
| Problema | Paga viajes sueltos en efectivo de caja chica a distintos cadetes, sin factura ni control; tiene un empleado repartiendo que cuando falta deja la operación sin reparto (argumento de Mar del Motos, F1-1). |
| Disparador de compra | Cierre contable que muestra el gasto en cadetes; el empleado que renuncia; auditoría que pide facturas. |
| Objeciones | "Ya tengo mensajería"; "¿me facturan A?"; "¿quién responde si se pierde un documento?"; "¿trabajan los sábados?". |
| Ángulo F1-1 | **Ángulo 5 · Reparto con factura, sin contratar a nadie** (cuenta corriente, facturación mensual, asesor dedicado, horario comercial). |
| Dónde está | LinkedIn (poco), Cámara de Comercio, colegios profesionales, referidos de clientes actuales, búsqueda directa en Google Maps. |
| Página destino | `/servicios/empresas-cuenta-corriente` (nueva). Hasta que exista: `/contacto` con texto de WhatsApp prearmado `empresa`. |

### 2.4 Particular con urgencia o trámite (sin inversión propia)

| Campo | Contenido |
|---|---|
| Quién es | Vecino que necesita mandar documentos firmados, llaves, un regalo, un trámite en escribanía o un depósito en cajero. |
| Problema | Uber es rápido pero no lleva dinero ni cubre pérdidas (F1-1); el cadete informal no da garantías. |
| Disparador | Urgencia del día. |
| Ángulo F1-1 | **Ángulo 4 · Lo que la app no te lleva**. |
| Cómo se atiende | Ficha de Google + `/servicios/envios-express` + cotizador. No lleva piezas propias en este plan; sí se beneficia del programa de reseñas y del SEO local. |

---

## 3. Mensajes

### 3.1 Mensaje central de campaña

> **"Envíos que llegan hoy, cobrados y rendidos en el día. Flota propia en Friuli 1972, Mar del Plata."**

Nombre de trabajo de la campaña: **"Hoy llega, hoy cobrás."**

### 3.2 Promesa por segmento y pruebas permitidas

| Segmento | Promesa (voseo) | Pruebas permitidas (ver §3.4) | Qué NO decir (hasta que F2-4 lo respalde) |
|---|---|---|---|
| (a) Flex | "Cuidá tu reputación: corte 15:00, entrega antes de las 20:00, un precio a toda la ciudad y la vuelta gratis si no lo reciben." | P1, P2, P3, P4, P5, P8 | "100 % de cumplimiento", "SLA garantizado", "líderes en Flex". |
| (b) Emprendedores | "Enviá hoy, cobrá en la puerta y recibí la plata el mismo día. Sin comisión y sin mínimo de envíos." | P4, P6, P7, P8, P9, P12 | "El más barato de Mar del Plata", "+50 emprendedores confían", "0 paquetes extraviados". |
| (c) Empresas | "Todos tus envíos y trámites en una sola factura a fin de mes. Sin sueldos, sin ART, sin moto parada." | P8, P9, P10, P11, P12 | "Seguro de mercadería", "99,9 % SLA", "24/7". |
| (d) Particulares | "Documentos, plata y trámites con alguien que responde. Cotizá por km y elegí tu franja." | P8, P10, P12, P13 | "En 30 minutos" (hasta resolver DC-03). |

### 3.3 Glosario de CTAs (reconciliado con F2-3-ux-copy.md §4)

Se mantienen los IDs `CTA-01`…`CTA-09` porque ya se citan en §8.1 y §11 de este documento; se ajustan tres etiquetas al glosario definitivo de F2-3 (cambios marcados) y se corrige un rótulo con jerga ("3PL"). Un CTA primario por pieza; el secundario siempre como enlace de texto.

| ID | CTA | Uso | Destino | Cambio vs. versión provisional |
|---|---|---|---|---|
| CTA-01 | **Cotizá tu envío** | Home, Express, particulares | `/cotizar/express` | Sin cambios — coincide con F2-3. |
| CTA-02 | **Cotizá tu LowCost** | LowCost, emprendedores | `/cotizar/lowcost` | Antes "Cotizá tu lote"; F2-3 fija "Cotizá tu LowCost" como forma única (glosario §4). |
| CTA-03 | **Sumate a Flex** | Flex, guía Flex | WhatsApp con texto `flex` | Sin cambios — coincide con F2-3. |
| CTA-04 | **Empezá a cobrar en la puerta** | Contrareembolso | WhatsApp con texto `contrareembolso` | Sin cambios — F2-3 no define un CTA propio para contrareembolso; este queda como extensión del glosario, en el mismo tono imperativo voseo. |
| CTA-05 | **Hablemos de tu cuenta corriente** | Empresas | WhatsApp con texto `empresa` (o formulario de CAMP-06) | Antes "Abrí tu cuenta corriente" — se reemplaza porque sugería alta de cuenta autogestionada, algo que hoy no existe: la acción real es una conversación (F2-3 §4). |
| CTA-06 | **Guardá tu stock en Friuli 1972** | Depósito y fulfillment | WhatsApp con texto `deposito` | Se corrige el rótulo de "Uso" (antes "Depósito / 3PL"): "3PL" es jerga interna marcada en COPY-01 (F2-3) y en MARCA (F2-4, claim sin respaldo cuando se usa como "certificado"/"homologado"). El nombre de servicio único es "Depósito y fulfillment" (F2-3 §4). El texto del botón no cambia. |
| CTA-07 | **Hablá por WhatsApp** | Secundario universal | WhatsApp con texto según página | Antes "Escribinos por WhatsApp" — F2-3 (COPY-06) unifica en imperativo voseo "Hablá por WhatsApp" en todo el sitio; se alinea acá para no introducir una décima variante. |
| CTA-08 | **Dejanos tu reseña** | Programa de reseñas | Enlace corto de reseña de Google | Sin cambios. |
| CTA-09 | **Recomendá y sumá envíos** | Referidos | WhatsApp con texto `referido` | Sin cambios. |

Prohibidos por DESIGN.md §10: "Saber más", "Conocer más", "Click aquí", cualquier CTA en inglés o en Title Case. Se suma, por F2-3: no repetir el nombre del servicio dentro del propio botón salvo en header/hero (regla de aplicación del glosario, F2-3 §4).

### 3.4 Afirmaciones respaldadas (reconciliado con F2-4-brand-review.md §3)

La lista provisional resultó casi idéntica a la auditoría final de F2-4; se marcan los dos cambios reales y se amplía "no respaldadas" con lo que F2-4 encontró y esta versión todavía no tenía.

| ID | Afirmación | Fuente | Estado en F2-4 |
|---|---|---|---|
| P1 | Corte de Flex a las 15:00 y entrega antes de las 20:00 | `/servicios/enviosflex` | Respaldada — usar en piezas de Flex. |
| P2 | Tarifa plana Flex a toda la ciudad a partir de 10 envíos diarios; niveles por volumen | `/servicios/enviosflex` (monto: solo citar la página, no repetirlo en piezas hasta que esté en `docs/contexto/precios.md`, DC-24) | Respaldada, mismo límite. |
| P3 | Recargo por lluvia del 30 % en Flex | `/servicios/enviosflex` | Respaldada. |
| P4 | Devolución sin cargo si el comprador rechaza | `/servicios/enviosflex`, `/servicios/plan-emprendedores` | Respaldada. |
| P5 | Sin mínimo de paquetes; múltiples retiros diarios | `/servicios/enviosflex` | Respaldada. |
| P6 | Contrareembolso sin comisión extra | `/servicios/plan-emprendedores` | Respaldada en el sitio; F2-4 la marca igual "a verificar" contra `precios.md` (que no existe) antes de usarla en la página nueva de contrareembolso de F3-2. |
| P7 | Rendición del dinero en el acto | Home ("Rendición de dinero en el acto") y reseña de Agustín Torres ("hacen depósitos en cajeros") | Respaldada. |
| P8 | Flota propia de motos, sin tercerizar | Home, contexto fijo | Respaldada. |
| P9 | Depósito y base en Friuli 1972 | Home, footer, JSON-LD, contexto fijo | Respaldada. |
| P10 | Cuenta corriente con facturación mensual, Factura C | `/servicios/plan-emprendedores` (**Factura A: A VERIFICAR**) | Sin cambios — sigue A VERIFICAR. |
| P11 | Horario lunes a viernes 9–18, sábados 10–15 | Footer, `/contacto` | Respaldada como dato **visible**, pero F2-4 encontró que el JSON-LD que lee Google dice lunes a **sábado** 08:00–20:00 (MARCA-01, crítico) — no coincide con este horario. No usar este dato en piezas de Google Ads/GBP hasta corregir el schema, para no amplificar la contradicción. |
| P12 | Cotizador online por distancia con tarifa 2026 | `/cotizar/express`, `/cotizar/lowcost`, `AGENTS.md` | Respaldada. |
| P13 | Más de 7 años en Mar del Plata | Contexto fijo, footer (conflicto con "15 años" en `AboutHero.tsx`: DC-32) | Respaldada como cifra mayoritaria — F2-4 confirma que "+15 años" es la que sobra y debe eliminarse, no al revés. |
| P14 | 5,0 en Google con N reseñas | Ficha de Google (**N: A VERIFICAR**, 15 según el sitio, 17 según el adjunto) | Sigue A VERIFICAR — F2-4 agrega que el "15" está hardcodeado en `SocialProofSection.tsx`, con riesgo de quedar desactualizado aunque hoy sea correcto. |

**No respaldadas — no usar en piezas (lista ampliada con F2-4):** "+50.000 envíos" (A verificar con el dueño, no eliminar directamente), "0 paquetes extraviados", "+50 emprendedores", "100 % cumplimiento / SLA 100 %", "30 a 90 minutos" (hasta DC-03), "menos de 2 horas", "seguro de mercadería", "99,9 %", "24/7", "integración con Tiendanube/Shopify" (no existe; DC D-8), **"cero suspensiones de Flex"**, **"socio logístico homologado" / "certificado"** (sin autoridad nombrada), **"Partner 3PL Verificado"** (badge sin autoridad nombrada), **"atención comercial < 2 min"** (A verificar), **"más de 15 años"** (contradice P13), **"líder"/"liderando"** (afirmación de posición de mercado sin respaldo).

---

## 4. Canales

| Canal | Decisión | Por qué | Esfuerzo | Segmentos |
|---|---|---|---|---|
| **Google Business Profile** | **Sí, prioridad máxima** | Es el único canal donde DosRuedas ya compite en el pack local (adjunto F1-2: top 3 para "mensajería en moto"); el volumen de reseñas es la brecha más grande frente a MMDP; gratis. | Bajo, constante | a, b, c, d |
| **SEO local (páginas nuevas de F1-2)** | **Sí** | Las búsquedas de contrareembolso, fulfillment y guía Flex están vacías de competidores locales; cada página nueva es una pieza de campaña que dura más de 90 días. | Medio (depende de desarrollo) | a, b, c |
| **WhatsApp Business** | **Sí, columna vertebral** | Es donde termina toda conversión del sitio; cuenta verificada; permite etiquetas de origen, respuestas rápidas y catálogo. Se usa para captar, para el programa de reseñas y para referidos. | Bajo | todos |
| **Instagram** | **Sí, con foco en (b) y (a)** | Los emprendedores locales viven ahí; los clientes actuales del carrusel tienen cuentas activas para colaboraciones y etiquetas. Formato: reels cortos de operación real, carruseles de "cómo funciona el contrareembolso", historias con encuestas. | Medio | a, b |
| **Facebook (página + grupos)** | **Sí, solo grupos** | La página propia tiene poco alcance orgánico; los grupos de vendedores de ML y de emprendedores de Mar del Plata son donde se pide "¿alguien conoce una mensajería para Flex?". Participar respondiendo, no publicando promos (las reglas de la mayoría de los grupos lo prohíben). | Bajo | a, b |
| **Grupos y comunidades de sellers** | **Sí** | Ídem Facebook; sumar el grupo de WhatsApp de la comunidad de vendedores de ML de la ciudad si existe (**A VERIFICAR**) y foros de Tiendanube. | Bajo | a, b |
| **Alianzas con comercios y agencias de e-commerce** | **Sí, desde la semana 5** | Las agencias que arman Tiendanube/Instagram para marcas locales necesitan una respuesta a "¿y los envíos?"; un acuerdo de derivación con 3 agencias trae emprendedores ya educados. Comercios: los 9 clientes del carrusel como casos y referidores. | Medio | b, c |
| **Referidos** | **Sí** | El negocio ya vive de recomendación (las reseñas lo muestran). Formalizar: un envío bonificado por cada cliente referido que despache 2 semanas (**monto del beneficio: decisión del dueño**). | Bajo | b, c |
| **Google Ads local (búsqueda)** | **Condicional, semana 9 en adelante** | Solo si (1) CAMP-01/02 miden conversiones, (2) el cotizador está arreglado (DC-01) y (3) hay presupuesto. Campaña de búsqueda con 3 grupos ("envíos flex mar del plata", "mensajería/cadetería mar del plata", "envíos contrareembolso mar del plata"), geolocalizada a General Pueyrredón, con extensiones de llamada y ubicación. Sin datos de CPC local; arrancar con un tope diario bajo y evaluar a los 14 días. | Medio | a, b |
| Meta Ads | **No en estos 90 días** | Sin píxel ni eventos configurados, sin creatividades probadas orgánicamente y con presupuesto incierto, sería gastar a ciegas. Revisar en el día 90 con lo que haya funcionado en orgánico. | — | — |
| LinkedIn | **No** | El decisor de una PyME marplatense se encuentra por referidos y Google, no por LinkedIn; el esfuerzo de contenido no se justifica. | — | — |
| TikTok | **No** | El público objetivo son comercios, no consumidores; y no hay capacidad de producción de video continuo. | — | — |
| Email marketing | **No como captación; sí como retención** | No hay lista. Se arma con las cuentas nuevas y se usa a partir del día 60 para un resumen mensual de envíos y novedades operativas (lluvia, temporada). | Bajo | b, c |
| Prensa local (0223, La Capital, Ahora MDP) | **Solo una nota, semana 10** | Una nota sobre "cómo se preparan los vendedores de Mar del Plata para Cyber Monday y Navidad" con DosRuedas como fuente: enlace y autoridad local. Sin pauta. | Bajo | a, b |

---

## 5. Dependencias con el sitio

Cada acción de campaña nombra su página de destino y los hallazgos (F1-2 y F2-1) que tienen que estar resueltos antes. Este cuadro define el orden del desarrollo.

| Acción de campaña | Página de destino | Debe estar resuelto antes | Bloqueante |
|---|---|---|---|
| Medir línea base (semana 1) | Todas | CAMP-01, CAMP-02, CAMP-03 (eventos y UTM) | Sí: sin esto no hay plan |
| Ficha de Google completa + programa de reseñas | Ficha de Google; enlace a `/` | JSON-LD con horarios reales (F2-1 DC-lista técnica "Horarios del JSON-LD"; F1-2 P1 layout) para que la ficha y el sitio coincidan | No, pero conviene el mismo día |
| Cualquier tráfico a Flex (grupos, Instagram, Ads) | `/servicios/enviosflex` | 301 de `/enviosflex` (F1-2 crítico); bloqueo de la copia en Vercel (F1-2 crítico); H1 sin "100 %" (DC-19); un solo CTA (DC-20); bloque de tarifas subido (DC-21) | Sí para Ads; no para orgánico |
| Guía Flex en grupos y prensa | `/guias/envios-flex-mar-del-plata` | Página creada (F1-2 bloque B P1) | Sí |
| Tráfico a contrareembolso (Instagram, referidos) | `/servicios/envios-contrareembolso` | Página creada (F1-2 bloque B P1); hasta entonces usar `/servicios/envios-lowcost` con DC-09 corregido | Parcial |
| Tráfico a LowCost / cotizador de lote | `/servicios/envios-lowcost` → `/cotizar/lowcost` | DC-01b (formulario arriba, una fila inicial); DC-15 (un CTA); enlace desde la home a LowCost (F1-2 on-page) | Sí |
| Tráfico a Express / particulares (orgánico) | `/servicios/envios-express` → `/cotizar/express` | DC-03 (una sola promesa de tiempo), DC-13 (fórmula +10 km igual en página y cotizador), DC-01 (formulario arriba) | Sí para cualquier pieza que mencione tiempos |
| Alianzas con agencias y prospección de empresas | `/servicios/empresas-cuenta-corriente` | Página creada (F1-2 bloque B P2); hasta entonces WhatsApp con texto `empresa` (CAMP-05) | Parcial |
| Depósito / 3PL a marcas con stock | `/servicios/deposito-fulfillment` | Rename con 301 (F1-2 bloque B P1); tarifas 3PL cargadas en `PricingRange` y `precios.md` (DC-24) | Sí para mencionar precio; no para el resto |
| Google Ads | Flex, LowCost, contrareembolso | Todo lo anterior + CAMP-01/02 con conversiones importadas a Ads | Sí |
| Home como destino de marca (reseñas, referidos) | `/` | DC-02 (CTA único), DC-08 (contadores), DC-09 (párrafo), DC-04 (segmentación) | No bloqueante, sí recomendado antes de la semana 5 |

**Orden de desarrollo resultante:** semana 1: CAMP-01/02/03 + fugas técnicas (301, Vercel, horarios del schema, titles) → semana 2: DC-03/DC-13 (promesas y fórmula), DC-09, DC-08, CTAs únicos en las 4 páginas de servicio → semanas 3–4: cotizadores con formulario arriba (DC-01/01b), contrareembolso y guía Flex → semanas 5–6: rename 3PL con 301, home reordenada → semanas 7–8: empresas-cuenta-corriente, cobertura.

---

## 6. Calendario semana por semana

Responsables sugeridos: **Dueño** (Matías: decisiones, reseñas, prospección), **Operación** (quien atiende WhatsApp y coordina riders), **Desarrollo** (repo), **Contenido** (persona o proveedor que produce piezas; puede ser el dueño con plantillas).

| Semana | Fechas | Acciones | Responsable | Pieza a producir |
|---|---|---|---|---|
| 1 | 22–28 sep | Activar GA4 con eventos y UTM (CAMP-01/02/03). Search Console: exportar 28 días. Planilla de WhatsApp por origen. Confirmar número real de reseñas propias y de MMDP. 301 de `/enviosflex`, bloqueo Vercel, horarios en JSON-LD, titles. Ficha de Google: categorías, horarios, servicios, 20 fotos reales. | Desarrollo, Operación, Dueño | Fotos del depósito, riders y motos (PZ-01). Plantilla de etiquetas y respuestas rápidas de WhatsApp (PZ-02). |
| 2 | 29 sep–5 oct | Cierre de línea base. Decidir con el dueño: promesa de tiempo Express (DC-03), umbral de "consultar", tarifas Flex/3PL en `precios.md`, "7 vs 15 años", Factura A. Corregir DC-09, DC-08, DC-13; un CTA por página de servicio. Responder el 100 % de las reseñas existentes. Arranca el pedido de reseñas en rendiciones (§7). | Dueño, Desarrollo, Operación | Guion de pedido de reseña por WhatsApp (PZ-03). Tarjeta QR de mostrador para Friuli 1972 (PZ-04). |
| 3 | 6–12 oct | Cotizadores con formulario arriba (DC-01/01b). Página `/servicios/envios-contrareembolso` en desarrollo. Primer reel: "Así rendimos la plata del contrareembolso el mismo día" (grabado en una rendición real, con permiso del cliente). Empezar a participar en 3 grupos de Facebook de vendedores/emprendedores MDQ (responder, no promocionar). | Desarrollo, Contenido, Dueño | Reel 1 (PZ-05). Lista de grupos y reglas de cada uno (PZ-06). |
| 4 | 13–19 oct | Publicar contrareembolso. Carrusel de Instagram "Cómo funciona el contrareembolso en 4 pasos". Historias con encuesta "¿Cómo cobrás tus ventas?". Altas en Páginas Amarillas, Cylex, Argentino.com.ar, logistica.dir.ar con NAP idéntico. | Desarrollo, Contenido, Operación | Carrusel 1 (PZ-07). Fichas de directorios (PZ-08). |
| 5 | 20–26 oct | Publicar guía Flex. Post en grupos de sellers: "Guía para vender con Flex en Mar del Plata antes de Cyber Monday" (valor, no promo). Primera publicación semanal en la ficha de Google (se repite todas las semanas hasta la 13). Contactar 3 agencias de e-commerce locales con propuesta de derivación. | Contenido, Dueño | Guía Flex (PZ-09). Post para grupos (PZ-10). One-pager para agencias (PZ-11). Publicación de ficha semanal (PZ-12, ×9). |
| 6 | 27 oct–2 nov | Rename `/servicios/deposito-fulfillment` con 301. Reel 2: "Tu stock en Friuli 1972: de la venta al reparto" (recorrido real del depósito). Mensaje directo a los 9 clientes del carrusel pidiendo caso breve (2 líneas + foto) y reseña. Lanzar referidos con clientes actuales. | Desarrollo, Contenido, Dueño | Reel 2 (PZ-13). Mensaje de referidos (PZ-14). Plantilla de caso de cliente (PZ-15). |
| 7 | 3–9 nov | **Semana previa a Cyber Monday (9–11 nov, A VERIFICAR fecha oficial CACE 2026).** Historias diarias: "Preparate para el Cyber: corte 15:00, retiros múltiples, sin mínimo". Post en grupos con la guía Flex. Home reordenada con bloque por segmento (DC-04). Publicar 3 casos de clientes en el sitio y en Instagram. | Contenido, Dueño, Desarrollo | Serie de 5 historias (PZ-16). 3 casos (PZ-17). |
| 8 | 10–16 nov | Cyber Monday: operación al máximo; solo contenido reactivo (historias de la calle). Miércoles: pedido de reseñas masivo a todos los que despacharon en la semana. Recopilar datos reales: paquetes/día, puntualidad, para usar como prueba en la semana 10 (si el dueño los confirma). | Operación, Dueño | Historias reactivas (PZ-18). |
| 9 | 17–23 nov | Publicar `/servicios/empresas-cuenta-corriente` y `/cobertura`. Prospección B2B: lista de 30 empresas (repuestos, droguerías, estudios) con mensaje de WhatsApp `empresa` y visita si responde. Evaluar Google Ads: si CAMP-01/02 miden y el cotizador está arreglado, armar la campaña de búsqueda con tope diario bajo. | Desarrollo, Dueño | Lista de prospección y mensaje (PZ-19). Anuncios de búsqueda (PZ-20, si aplica). |
| 10 | 24–30 nov | Nota de prensa local: "Cómo se preparan los vendedores de Mar del Plata para Navidad" (con datos del Cyber si el dueño los aprueba). Reel 3: "Un día de Flex en Mar del Plata" (rider, ruta, entrega, confirmación). Primer resumen mensual por mail a cuentas nuevas. | Dueño, Contenido | Pitch de prensa (PZ-21). Reel 3 (PZ-22). Mail mensual (PZ-23). |
| 11 | 1–7 dic | Campaña "Navidad sin colapso" para emprendedores: historias + post en grupos "Te retiramos hasta el 23/12" (**fechas operativas de diciembre: decisión del dueño**). Ads: revisar 14 días de datos, pausar o ajustar. Reunión con agencias: primeras derivaciones. | Contenido, Dueño | Pieza Navidad (PZ-24). |
| 12 | 8–14 dic | Pico de diciembre: operación. Pedido de reseñas a todos los nuevos. Carrusel "Lo que llevamos y lo que no" (documentos, plata, trámites; sin alimentos ni cargas peligrosas) para particulares y empresas. | Operación, Contenido | Carrusel 2 (PZ-25). |
| 13 | 15–21 dic | Cierre: tablero de 90 días (§8.4), cuentas nuevas por segmento y canal, costo por cuenta si hubo Ads, reseñas logradas. Decidir qué canales siguen en el trimestre siguiente y si Meta Ads entra. | Dueño, Desarrollo | Informe de cierre (PZ-26). |

---

## 7. Programa de reseñas de Google

**Meta:** de 17 (A VERIFICAR) a 50 reseñas en 90 días, es decir 11 por mes, sin comprar ni condicionar ninguna. Google prohíbe pagar, ofrecer descuentos a cambio de reseñas y filtrar quién puede opinar; el programa cumple eso.

| Elemento | Detalle |
|---|---|
| Momento del pedido | Solo en los dos momentos que las reseñas actuales celebran: (1) al rendir el dinero del contrareembolso, (2) al confirmar la entrega de un trámite o envío urgente. Nunca antes de la entrega ni en un día con un problema. |
| Canal | Mensaje de WhatsApp desde la cuenta comercial, con el enlace corto de reseña (generado en la ficha: "Pedir opiniones"). |
| Guion (PZ-03) | "Hola [nombre], ya te rendimos los $[monto] de hoy. Si el servicio te sirvió, ¿nos dejás una reseña en Google? Son 30 segundos y nos ayuda a que más comercios de Mar del Plata nos encuentren: [enlace]. Gracias." |
| Frecuencia | Un pedido por cliente cada 60 días como máximo; se anota en la planilla de clientes quién ya la dejó. |
| QR de mostrador (PZ-04) | En Friuli 1972 (recepción del depósito y DropOFF) y ofrecido a los comercios aliados que quieran ponerlo en su caja. |
| Respuesta | El dueño responde el 100 % de las reseñas en menos de 48 horas, nombrando el servicio y el barrio cuando corresponda ("Gracias por confiar en el LowCost para tus envíos a Güemes"). Sin plantillas idénticas. |
| Reseñas negativas | Responder en 24 horas, sin discutir, ofreciendo resolver por WhatsApp; el objetivo es que quien lee vea cómo se responde. |
| Sitio | Reemplazar "Calificación perfecta" por "N reseñas verificadas en Google" con enlace (DC-10); nunca marcar AggregateRating en el JSON-LD (F1-2). |
| Medición | Conteo semanal en la planilla; meta intermedia: 28 al día 30, 39 al día 60, 50 al día 90. |

---

## 8. Medición

### 8.1 Eventos a registrar en el sitio (GA4, vía gtag ya presente en `layout.tsx`)

| Evento | Cuándo dispara | Parámetros | ID de requerimiento |
|---|---|---|---|
| `quote_start` | Primer foco en un campo del cotizador | `service` (`express`/`lowcost`), `page_path` | CAMP-01 |
| `quote_complete` | El cotizador muestra un precio | `service`, `distance_km`, `price_ars`, `result` (`price`/`consultar`), `stops` (LowCost) | CAMP-01 |
| `whatsapp_click` | Clic en cualquier enlace `wa.me` | `origin` (`header`, `hero`, `quote_result`, `contact_card`, `faq`, `footer`, `flex`, `contrareembolso`, `empresa`, `deposito`, `referido`), `page_path`, `quote_id` si viene de un resultado | CAMP-02 |
| `form_submit` | Envío del formulario de contacto (y del futuro formulario de cuenta corriente) | `form_name`, `volume_bucket` | CAMP-02 |
| `phone_click` | Clic en `tel:` | `page_path` | CAMP-02 |
| `cta_click` | Clic en CTA primario que no sea WhatsApp ni cotizador (ej. "Sumate a Flex" hacia sección) | `cta_id` (del glosario §3.3) | CAMP-02 |

Todos los eventos se marcan como conversión en GA4 salvo `quote_start` y `cta_click`.

### 8.2 Parámetros UTM

Formato: `utm_source` / `utm_medium` / `utm_campaign` / `utm_content`. Campaña fija: `hoy-llega-hoy-cobras-q4-2026`.

| Canal | source | medium | content (ejemplos) |
|---|---|---|---|
| Ficha de Google (sitio web y publicaciones) | `google` | `gbp` | `perfil`, `post-semana-05` |
| Instagram (bio, historias, reels) | `instagram` | `social` | `bio`, `reel-contrareembolso`, `story-cyber` |
| Facebook grupos | `facebook` | `community` | `grupo-sellers-mdq`, `grupo-emprendedores` |
| WhatsApp (mensajes salientes, referidos) | `whatsapp` | `message` | `referido`, `resena`, `mail-mensual` |
| Agencias y comercios aliados | `partner` | `referral` | `agencia-<nombre>`, `comercio-<nombre>` |
| Prensa | `0223` / `lacapital` | `pr` | `nota-navidad` |
| Google Ads | `google` | `cpc` | grupo de anuncios |
| QR de mostrador | `qr` | `offline` | `friuli-1972`, `comercio-<nombre>` |

El texto prearmado de WhatsApp lleva al final una palabra clave de origen entre corchetes (`[flex]`, `[empresa]`, `[referido: nombre]`) para que Operación etiquete sin preguntar (CAMP-05).

### 8.3 Etiquetas de WhatsApp Business

`web-cotizador`, `web-contacto`, `flex`, `lowcost`, `contrareembolso`, `empresa`, `deposito`, `ficha-google`, `instagram`, `grupo-fb`, `referido`, `agencia`, `reseña-pedida`, `reseña-dejada`, `cuenta-nueva`. Se revisan los lunes.

### 8.4 Tablero mínimo (planilla compartida, actualización semanal los lunes)

| Fila | Fuente |
|---|---|
| Sesiones orgánicas por página de servicio | GA4 / Search Console |
| `quote_start` y `quote_complete` por servicio; tasa de completado | GA4 |
| `whatsapp_click` por `origin`; tasa cotización → WhatsApp | GA4 |
| Conversaciones nuevas por etiqueta de origen | WhatsApp Business (planilla) |
| Cuentas nuevas por segmento y canal; cuentas activas ≥ 2 semanas | Planilla del dueño |
| Reseñas acumuladas y respondidas | Ficha de Google |
| Impresiones y posición media para las 10 keywords de F1-2 | Search Console |
| Gasto y conversiones de Ads (si aplica); costo por conversación | Google Ads |

---

## 9. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| Desarrollo no llega a tiempo con los cotizadores y las páginas nuevas | El calendario mueve tráfico primero a canales que no dependen del sitio (ficha, reseñas, grupos) y recién en la semana 5 a páginas nuevas; toda pieza tiene un destino de respaldo (WhatsApp con texto prearmado). |
| La operación no absorbe el volumen de Cyber Monday y diciembre | Definir con el dueño en la semana 2 el tope diario de envíos y un mensaje de "cupo completo" para no romper la promesa de corte 15:00 justo cuando más se mira. |
| Las promesas del sitio siguen contradiciéndose cuando arranca el tráfico | Ninguna pieza menciona tiempos de Express hasta que DC-03 esté resuelto; se comunica franja y corte, que sí están publicados. |
| Reseñas que no llegan | Si al día 30 hay menos de 25, sumar el QR en los remitos y pedirla también al confirmar entregas Flex (al comercio, no al comprador final). |
| MMDP o DAR reaccionan con precio | No competir en precio: el plan vende previsibilidad (tarifa plana, lluvia 30 %, rendición en el día). |

---

## 10. Requerimientos para desarrollo

| ID | Requerimiento | Tipo | Página / archivo | Hallazgos relacionados | Necesario para | Semana |
|---|---|---|---|---|---|---|
| CAMP-01 | Eventos `quote_start` y `quote_complete` con parámetros de §8.1 | Analítica | `CotizadorExpressForm.tsx`, `CotizadorLowCostForm.tsx` | — | Línea base, Ads | 1 |
| CAMP-02 | Eventos `whatsapp_click` (con `origin` y `quote_id`), `form_submit`, `phone_click`, `cta_click`; helper único `track()` | Analítica | Componente compartido de CTA/WhatsApp; `layout.tsx` | — | Línea base, tablero | 1 |
| CAMP-03 | Persistencia de UTM en sesión y envío como parámetros en todos los eventos; enlaces de la ficha/Instagram con UTM | Analítica | `ClientLayout.tsx` | — | Atribución por canal | 1 |
| CAMP-04 | 301 `/enviosflex` → `/servicios/enviosflex`; bloqueo o redirección de `02enviosdosruedas.vercel.app`; horarios reales en JSON-LD; titles ≤ 60 sin marca duplicada; quitar `keywords` | Técnico SEO | `next.config.ts`, `middleware.ts`, `layout.tsx`, `page.tsx` de cada ruta | F1-2 críticos e importantes | Tráfico a Flex | 1 |
| CAMP-05 | Texto prearmado de WhatsApp por página con palabra clave de origen entre corchetes; un solo helper para armar el `wa.me` | Sitio | Componente WhatsApp compartido | DC-05, §8.3 | Etiquetado en WhatsApp | 1 |
| CAMP-06 | Constantes únicas de promesa (`EXPRESS_WINDOW`, `MAX_WEIGHT_KG`, `RAIN_SURCHARGE_FLEX`, `CONSULT_THRESHOLD_KM`) consumidas por home, páginas, cotizadores, schema y llms.txt; copy de +10 km igual a la fórmula de `pricing.ts` | Sitio | `src/lib/pricing.ts`, `src/lib/promises.ts` (nuevo), páginas | DC-03, DC-13 | Cualquier pieza con tiempos o precios | 2 |
| CAMP-07 | Párrafo de EmprendedoresHome y H1 de FAQ con espacios; contadores con valor final en SSR; "0 extraviados" y "+50 emprendedores" retirados hasta verificación | Sitio | `EmprendedoresHome.tsx`, `FaqHero.tsx`, `vertical-cut-reveal.tsx`, `VisionSection.tsx` | DC-08, DC-09 | Home como destino | 2 |
| CAMP-08 | Un CTA primario por vista: hero de home, Express, Flex, 3PL, LowCost; header en variante `outline` cuando la página ya tiene CTA amarillo arriba del pliegue; H1 de Flex sin "100 %" | Sitio | `HeroAnimado.tsx`, `*Hero.tsx`, `OptimizedHeader.tsx` | DC-02, DC-14, DC-15, DC-18, DC-19, DC-20, DC-23 | Toda pieza que mande tráfico | 2 |
| CAMP-09 | Cotizadores con el formulario dentro del hero (primer campo ≤ 600 px en móvil); LowCost con una fila inicial; ejemplo etiquetado como ejemplo; `quote_id` visible y en el texto de WhatsApp | Sitio | `cotizar/express/page.tsx`, `cotizar/lowcost/page.tsx`, componentes `Cotizador*` | DC-01, DC-01b, DC-12, DC-05 | Meta de cotizaciones, Ads | 3 |
| CAMP-10 | Página `/servicios/envios-contrareembolso` con Service + FAQ, enlazada desde LowCost, 3PL y home | Página nueva | `src/app/servicios/envios-contrareembolso/page.tsx` | F1-2 bloque B P1; ángulo 2 | Instagram semanas 3–4, referidos | 3–4 |
| CAMP-11 | Guía `/guias/envios-flex-mar-del-plata` con Article + FAQ, enlazada desde Flex | Página nueva | `src/app/guias/envios-flex-mar-del-plata/page.tsx` | F1-2 bloque B P1; ángulo 1 | Grupos, prensa, Cyber | 4–5 |
| CAMP-12 | Bloque de tarifas Flex y recargo por lluvia subidos al primer scroll; sección "Lo que Flex no te cobra con nosotros" | Sitio | `servicios/enviosflex` | DC-21 | Flex | 4 |
| CAMP-13 | Rename `/servicios/plan-emprendedores` → `/servicios/deposito-fulfillment` con 301; H1 con "depósito y fulfillment"; foto real y mapa de Friuli 1972 | Sitio | App Router + `next.config.ts` | F1-2 bloque B P1; DC-22 | Reel 2, marcas con stock | 6 |
| CAMP-14 | Home con orden canónico de DESIGN.md §6 y bloque de segmentos ("Vendés en ML / Tenés tienda online / Sos empresa / Necesitás un envío hoy") con enlaces a cada destino | Sitio | `page.tsx`, componentes home | DC-04, DC-06, D-4 | Semana de Cyber | 7 |
| CAMP-15 | Página `/servicios/empresas-cuenta-corriente` con formulario corto (nombre, empresa, volumen, rubro) que guarde el lead y avise por mail, más `form_submit` | Página nueva | `src/app/servicios/empresas-cuenta-corriente/page.tsx`, Server Action | F1-2 bloque B P2; DC-26; ángulo 5 | Prospección B2B | 9 |
| CAMP-16 | Página `/cobertura` con mapa único y tabla de barrios → rango de km → cotizador | Página nueva | `src/app/cobertura/page.tsx` | F1-2 bloque B P2 | FAQ "¿llegan a Batán?", Ads | 9 |
| CAMP-17 | Sección "Reseñas verificadas en Google" con conteo real y enlace; sin "Calificación perfecta" | Sitio | `SocialProofSection.tsx` | DC-10 | Programa de reseñas | 2 |
| CAMP-18 | Sección de casos de clientes (3, con foto y 2 líneas) en home y páginas de servicio | Sitio | Nuevo componente | — | Semana 7 | 7 |
| CAMP-19 | Crear `docs/contexto/precios.md` con la tabla de AGENTS.md + tarifas Flex y 3PL validadas; cargar en `PricingRange` | Datos | `docs/contexto/precios.md`, `prisma/seed.ts` | DC-24, D-12 | Cualquier pieza con precio Flex/3PL | 2 |
| CAMP-20 | Botones de WhatsApp en amarillo de marca (sin `#25D366`) | Sitio | `contacto/*`, `FaqCta`, `CarruselRedes` | DC-25 | Coherencia de marca en piezas | 2 |

---

## 11. Piezas a producir

| ID | Pieza | Formato | Canal | Segmento | Ángulo | CTA | Fecha de entrega | Responsable |
|---|---|---|---|---|---|---|---|---|
| PZ-01 | Banco de fotos reales: depósito Friuli 1972, riders identificados, motos, rendición, entrega | 30 fotos horizontales + 30 verticales, JPG | Ficha de Google, sitio, Instagram | Todos | — | — | Sem. 1 | Dueño / Contenido |
| PZ-02 | Etiquetas y respuestas rápidas de WhatsApp Business (12 respuestas: precio Express, LowCost, Flex, contrareembolso, cobertura, horarios, lluvia, reseña, referido, empresa, depósito, fuera de horario) | Texto | WhatsApp | Todos | — | Según respuesta | Sem. 1 | Operación |
| PZ-03 | Guion de pedido de reseña (2 variantes: rendición / trámite) | Texto | WhatsApp | b, c, d | — | CTA-08 | Sem. 2 | Dueño |
| PZ-04 | Tarjeta QR de mostrador "¿Te sirvió? Dejanos tu reseña" | A6 impreso, azul #0636A5 / amarillo #FFEC01 / blanco, Anton + Bebas | Friuli 1972, comercios aliados | b, c, d | — | CTA-08 | Sem. 2 | Contenido |
| PZ-05 | Reel 1 "Así rendimos la plata el mismo día" (rendición real, 20–30 s, subtítulos) | Video vertical 9:16 | Instagram, Facebook | b | 2 | CTA-04 | Sem. 3 | Contenido |
| PZ-06 | Lista de grupos de Facebook/WhatsApp de sellers y emprendedores MDQ con reglas de cada uno | Planilla | Grupos | a, b | — | — | Sem. 3 | Dueño |
| PZ-07 | Carrusel 1 "Cómo funciona el contrareembolso en 4 pasos" | 5 placas 4:5 | Instagram | b | 2 | CTA-04 | Sem. 4 | Contenido |
| PZ-08 | Fichas de directorios con NAP idéntico y descripción de 300 caracteres | Texto + logo SVG | Páginas Amarillas, Cylex, Argentino, logistica.dir.ar, ML Servicios | Todos | — | CTA-01 | Sem. 4 | Operación |
| PZ-09 | Guía "Vender con Envíos Flex en Mar del Plata" (1.200+ palabras, 6 FAQ, checklist descargable) | Página web + PDF de 1 hoja | Sitio, grupos, prensa | a | 1 | CTA-03 | Sem. 5 | Contenido + Desarrollo |
| PZ-10 | Post para grupos de sellers (valor, sin promo; 120 palabras + enlace a la guía) | Texto | Facebook/WhatsApp grupos | a | 1 | CTA-03 | Sem. 5 | Dueño |
| PZ-11 | One-pager para agencias de e-commerce: qué ofrecemos a sus clientes, cómo derivar, contacto | PDF 1 hoja, sistema de diseño | Alianzas | b, c | 2, 3 | CTA-07 | Sem. 5 | Contenido |
| PZ-12 | Publicación semanal en la ficha de Google (×9): novedad operativa, corte por lluvia, servicio destacado, caso | Texto 150 palabras + foto | Ficha de Google | Todos | Rotativo | CTA-01 | Sem. 5–13 | Dueño |
| PZ-13 | Reel 2 "Tu stock en Friuli 1972: de la venta al reparto" (recorrido del depósito, picking, salida) | Video vertical 30–45 s | Instagram | b | 3 | CTA-06 | Sem. 6 | Contenido |
| PZ-14 | Mensaje de referidos a clientes actuales | Texto | WhatsApp | b, c | — | CTA-09 | Sem. 6 | Dueño |
| PZ-15 | Plantilla de caso de cliente (foto, nombre del comercio, barrio, servicio, 2 líneas en sus palabras) | Formato web + placa 4:5 | Sitio, Instagram | b | 2, 3 | CTA-02 | Sem. 6 | Contenido |
| PZ-16 | Serie de 5 historias "Preparate para el Cyber" (corte 15:00, retiros múltiples, sin mínimo, lluvia 30 %, devolución gratis) | 5 historias 9:16 con sticker de enlace | Instagram | a | 1 | CTA-03 | Sem. 7 | Contenido |
| PZ-17 | 3 casos de clientes reales (usando PZ-15) | Web + 3 placas | Sitio, Instagram | b | 2, 3 | CTA-02 | Sem. 7 | Dueño + Contenido |
| PZ-18 | Historias reactivas de operación durante el Cyber | 9:16 | Instagram | a, b | 1 | — | Sem. 8 | Operación |
| PZ-19 | Lista de 30 empresas para prospección y mensaje `empresa` | Planilla + texto | WhatsApp, visita | c | 5 | CTA-05 | Sem. 9 | Dueño |
| PZ-20 | Anuncios de búsqueda: 3 grupos × 3 títulos × 2 descripciones, extensiones de llamada y ubicación (solo si se aprueba Ads) | Texto | Google Ads | a, b | 1, 2 | CTA-02 / CTA-03 | Sem. 9 | Contenido |
| PZ-21 | Pitch de prensa local (150 palabras) + datos aprobados por el dueño | Texto | 0223, La Capital, Ahora MDP | a, b | 1 | — | Sem. 10 | Dueño |
| PZ-22 | Reel 3 "Un día de Flex en Mar del Plata" | Video vertical 45 s | Instagram | a | 1 | CTA-03 | Sem. 10 | Contenido |
| PZ-23 | Mail mensual a cuentas nuevas (resumen de envíos, novedades de diciembre) | Email | Email | b, c | — | CTA-07 | Sem. 10 | Operación |
| PZ-24 | Pieza "Navidad sin colapso": historias + post en grupos con fechas operativas de diciembre | 9:16 + texto | Instagram, grupos | b | 2 | CTA-02 | Sem. 11 | Contenido |
| PZ-25 | Carrusel 2 "Lo que llevamos y lo que no" | 5 placas 4:5 | Instagram | c, d | 4 | CTA-01 | Sem. 12 | Contenido |
| PZ-26 | Informe de cierre de 90 días (tablero §8.4 + decisiones para el trimestre siguiente) | Markdown | Interno | — | — | — | Sem. 13 | Dueño + Desarrollo |

Reglas para todas las piezas: paleta de tres colores con tokens `brand-*`, tipografías Anton / Bebas Neue / IBM Plex Sans (o Outfit según se resuelva D-11) / Geist Mono, voseo, sin emojis en UI, sin métricas fuera de §3.4, sin precios fuera de `docs/contexto/precios.md`, referencias reales de Mar del Plata (Güemes, Puerto, Batán, Centro, Camet, Friuli 1972).

---

## 12. Supuestos y lo que no se pudo verificar

- ~~F2-3 y F2-4 no existen~~ **Reconciliado**: §3.3 y §3.4 ya están alineadas con `F2-3-ux-copy.md` y `F2-4-brand-review.md` (completas). Novedad que agrega F2-4 y no estaba acá: el horario público (P11) contradice el JSON-LD (MARCA-01) — no usar el horario en piezas pagas hasta corregirlo.
- **Reseñas**: 15 según el sitio (hardcodeado en `SocialProofSection.tsx`, según F2-4), 17 según el adjunto; MMDP 460 según el adjunto, no verificado el 18/09. Confirmar en la ficha en la semana 1.
- **Capacidad operativa**: no se sabe cuántos envíos diarios extra puede absorber la flota; las metas de cuentas nuevas (8/15/4) se ajustan en la semana 2.
- **Fecha del Cyber Monday 2026** (CACE): tomada como 9–11 de noviembre por costumbre; confirmar.
- **Fechas operativas de diciembre** (último retiro antes de Navidad, horarios de fin de año): decisión del dueño.
- **Factura A**: el sitio menciona Factura C; si la empresa emite A, sumarlo a P10.
- **Existencia de un grupo de WhatsApp de vendedores de ML de Mar del Plata**: no verificado.
- **Presupuesto de Google Ads**: no informado; el plan lo deja condicional desde la semana 9.
- **Precios Flex y 3PL**: publicados en el sitio pero sin fila en `PricingRange` ni en `precios.md`; no se citan montos en piezas hasta CAMP-19.
- **Promesa de tiempo Express**: cuatro versiones en circulación (DC-03); ninguna pieza usa tiempos hasta que se resuelva.
- **"7 años" vs "15 años"**: se usa 7 (contexto fijo) y se marca conflicto con PRODUCT.md/DESIGN.md.
- **Beneficio del programa de referidos**: monto o envío bonificado a definir por el dueño.
- **Línea base**: inexistente; todo objetivo es relativo a la medición de las semanas 1–2.

## Fuentes

- F1-1 Brief competitivo (18/09/2026): https://claude.ai/artifact/9tZ8zhW1B16SStPkDfUGXJ y documento adjunto "Análisis Competitivo de Envíos DosRuedas (Mar del Plata, 2026)"
- F1-2 Auditoría SEO (18/09/2026): https://claude.ai/artifact/M9NTJpRzMsWttoTEuSTi5v y documento adjunto "Auditoría SEO Integral: Envíos DosRuedas"
- F2-1 Crítica de diseño: `docs/marketing/F2-1-design-critique.md`
- Sitio: https://www.enviosdosruedas.com/ (home, `/servicios/envios-express`, `/servicios/envios-lowcost`, `/servicios/enviosflex`, `/servicios/plan-emprendedores`, `/contacto`)
- Repo: https://github.com/bomberoxenviosdosruedas/02enviosdosruedas (`README.md`, `DESIGN.md`, `AGENTS.md`, `PRODUCT.md`, `src/app/layout.tsx`, `src/lib/pricing.ts`)
- Mercado Libre, Envíos Flex (costos de clima y reprogramación a cargo del vendedor): https://envios.mercadolibre.com.ar/envios-flex
- Google, políticas de reseñas y datos estructurados de reseñas: https://support.google.com/business/answer/2622994 · https://developers.google.com/search/docs/appearance/structured-data/review-snippet
