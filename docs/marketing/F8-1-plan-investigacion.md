# F8-1 — Plan de investigación con clientes reales

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F1-1-competitive-brief.md`, `F2-1-design-critique.md`, `F3-1-campaign-plan.md`, `F7-reputacion.md`.

Esta fase es enteramente autosuficiente — no necesitó datos externos ni "modo sin conectores": el objetivo es planificar la investigación, no todavía tener sus resultados (eso es F8.2, y depende de que el dueño consiga entrevistados reales).

---

## 1. Supuestos que las fases 1 a 3 dieron por ciertos sin evidencia de clientes, ordenados por riesgo

| # | Supuesto | De dónde sale | Por qué es riesgoso si está mal |
|---|---|---|---|
| 1 | El "trato humano / confianza" que domina las reseñas (`F7-reputacion.md` §2, 6 y 4 de 12 menciones) es lo que **decide** que alguien elija DosRuedas, no solo lo que la gente comenta después de una buena experiencia | `F7-reputacion.md` | Si en realidad la decisión inicial es por precio o disponibilidad y el trato humano solo fideliza después, todo el ángulo de mensajes de `F2-3`/`F3-1`/`F7` estaría apuntando al momento equivocado del embudo |
| 2 | El precio calculable y transparente (cotizador con tarifa exacta) es un diferencial que mueve la decisión de compra, no solo una conveniencia que se valora una vez que ya se es cliente | `F1-1-competitive-brief.md` ("el diferencial no es ser el más barato sino ser el más previsible") | Es la base de la propuesta de valor central de la campaña (`F3-1`); si el cliente nuevo no lo nota o no lo compara contra la competencia antes de elegir, ese mensaje pierde peso frente a otros (ej. recomendación boca a boca) |
| 3 | Que el primer campo del cotizador esté bajo el pliegue en móvil (`DC-01`, 1.473-1.566 px) realmente le cuesta conversiones al negocio | `F2-1-design-critique.md` | Es una heurística de diseño, no una medición con usuarios reales de Mar del Plata — si los usuarios igual bajan y cotizan sin problema, `BL-27` (esfuerzo medio) estaría resolviendo un problema menor mientras otros más grandes esperan |
| 4 | Los ángulos y objeciones por segmento definidos en las fichas de audiencia de `F3-1` §2 (seller Flex, emprendedor, PyME, particular) son los reales, no una inferencia razonable sin contacto directo con clientes de cada segmento | `F3-1-campaign-plan.md` §2 | Si un ángulo está mal calibrado para un segmento, toda una serie de mensajes, piezas y hasta una página nueva (`BL-23`, empresas) se construirían sobre una hipótesis sin confirmar |
| 5 | Por qué los clientes dejan de enviar con DosRuedas (motivo de baja/churn) | No hay ninguna fuente — es un vacío total, ni siquiera hipotetizado en fases anteriores | Sin esto, no se puede saber si el negocio está perdiendo clientes por precio, por un mal servicio puntual, por estacionalidad del rubro del cliente, o por mudarse a un competidor — y `F15-1` (reactivación, fase posterior) necesita esta respuesta para no adivinar el motivo por cliente |
| 6 | WhatsApp es el canal preferido por igual en los cuatro segmentos, incluidas las cuentas corporativas/PyME con cuenta corriente | `F3-1-campaign-plan.md` (WhatsApp como canal principal declarado en el contexto fijo) | Una empresa con cuenta corriente puede preferir email o una llamada para coordinar facturación y volumen — si es así, la campaña B2B de las fases 9-10 estaría apoyada en el canal equivocado para ese segmento específico |
| 7 | "Flota propia, sin tercerizar" es un mensaje que el cliente valora activamente al decidir, no una distinción que solo le importa al negocio | Contexto fijo del negocio, repetido en varias fases | Si al cliente no le importa quién es el repartidor mientras el paquete llegue bien, ese mensaje ocupa espacio de copy que podría usarse en algo que sí mueva la decisión |

## 2. Preguntas de investigación derivadas

1. ¿Qué hizo que el cliente eligiera DosRuedas la primera vez — precio, recomendación, urgencia, no encontró otra opción? (supuestos 1, 2)
2. ¿Cómo calcula hoy el costo de un envío antes de elegir proveedor — compara tarifas, pregunta por WhatsApp, no compara y va al que ya conoce? (supuesto 2)
3. ¿En qué momento del proceso de cotización en el celular se frena, duda o abandona, si es que pasa? (supuesto 3, en la prueba de usabilidad, no en la entrevista)
4. ¿Qué le importó de la experiencia con DosRuedas — el precio, que llegó a tiempo, cómo lo trataron, algo puntual que resolvieron? (supuesto 1)
5. ¿Qué le preocupa o le molesta hoy de cómo hace envíos, sea con DosRuedas o con quien sea? (supuesto 4, por segmento)
6. Para quien dejó de enviar: ¿qué cambió — dejó de vender, cambió de proveedor, tuvo un problema puntual, el precio subió? (supuesto 5)
7. ¿Por qué medio prefiere resolver una consulta de envío — WhatsApp, llamada, mail, en persona? ¿Cambia según si es una consulta rápida o una negociación de cuenta corriente? (supuesto 6)
8. ¿Le importa quién hace el envío (flota propia vs. tercerizado) o solo que llegue bien y a tiempo? (supuesto 7)

## 3. Método

### 3.a Entrevistas de 20 minutos (10 personas)

| Segmento | Cantidad | Objetivo específico |
|---|---|---|
| Sellers de MercadoLibre Flex | 3 | Supuestos 2, 4, 6 |
| Emprendedores / tiendas online | 3 | Supuestos 1, 2, 7 |
| Cuentas corporativas | 2 | Supuestos 4, 6, 7 |
| Clientes que dejaron de enviar | 2 | Supuesto 5 (el más urgente y el menos cubierto hoy) |

### 3.b Prueba de usabilidad de `/cotizar/express` y `/cotizar/lowcost` en celular (5 personas)

**Tareas:**
1. "Imaginate que necesitás mandar un paquete chico desde tu casa hasta [punto de referencia real de Mar del Plata] hoy mismo. Buscá cuánto costaría."
2. "Ahora imaginate que tenés 3 pedidos para despachar hoy a distintas direcciones. Encontrá cómo cargarlos."
3. "Una vez que tengas el precio, hacé lo que harías normalmente para confirmar el envío."

**Qué observar:** en qué momento el participante empieza a interactuar con el formulario real (contrastar contra el dato medido por `F2-1`: 1.473-1.566 px), si nota o ignora la tarjeta de ejemplo con precio (`DC-12`), si entiende el resultado como precio real o se confunde, qué hace al llegar al botón de WhatsApp, y cualquier comentario en voz alta sobre la promesa de tiempo de entrega (para contrastar con la inconsistencia ya detectada en `DC-03`).

**Métrica de éxito:** de los 5 participantes, cuántos completan la tarea 1 sin ayuda y sin dudar en el primer campo; cuántos entienden que el precio de la tarjeta de ejemplo no es el suyo sin que se les aclare.

### 3.c Encuesta de 5 preguntas por WhatsApp a la base de clientes

1. Del 1 al 5, ¿qué tan probable es que recomiendes Envíos DosRuedas a otro negocio o persona?
2. ¿Qué es lo que más valorás de trabajar con nosotros? (respuesta abierta corta)
3. ¿Hay algo que te gustaría que mejoremos? (respuesta abierta corta)
4. ¿Con qué frecuencia enviás con nosotros — todos los días, algunas veces por semana, algunas veces por mes, rara vez?
5. Antes de elegirnos, ¿comparaste con otra opción de envíos? (sí/no, y cuál si quiere contarlo)

Diseñada para responderse en menos de un minuto desde WhatsApp, sin abrir un link externo — coherente con "modo sin conectores" (no depende de una herramienta de encuestas conectada).

## 4. Selección, invitación, consentimiento y agradecimiento

**Criterios de selección:** para las entrevistas, priorizar clientes activos en los últimos 60 días (no ex-clientes, salvo la categoría específica de "dejaron de enviar") y con al menos 3 envíos previos, para que tengan experiencia real y no solo una primera impresión. Para "dejaron de enviar": clientes sin actividad hace más de 60 días que antes enviaban con cierta regularidad (evitar clientes de un solo envío puntual, que no "dejaron" nada). Para la prueba de usabilidad: mezclar 2-3 clientes actuales y 2-3 personas que nunca usaron el sitio, para no medir solo memoria muscular de quien ya lo conoce.

**Mensaje de invitación (WhatsApp, borrador — a enviar por el dueño, regla "nada se envía solo"):**
> "Hola [nombre]! Somos de Envíos DosRuedas. Estamos charlando con algunos clientes para mejorar el servicio y nos encantaría escuchar tu opinión — son 20 minutitos, por videollamada o en el depósito, cuando te quede cómodo. ¿Te copa? Como agradecimiento, [definir con el dueño: crédito en tu próximo envío / no ofrecer nada, a criterio del dueño]."

**Consentimiento para grabar y tomar notas (a leer al inicio de cada sesión):**
> "Antes de arrancar: ¿te parece bien si tomo notas de lo que charlemos para mejorar el servicio? No vamos a compartir tu nombre en ningún lado, solo usamos lo que nos cuentes de forma general. Si en algún momento preferís que no anote algo puntual, decime nomás."

**Agradecimiento:** definir con el dueño si hay algún gesto concreto (ej. crédito en el próximo envío, no necesariamente dinero) — no se decide acá porque es una decisión comercial del dueño, no de investigación. Si no hay presupuesto para nada, un agradecimiento genuino por WhatsApp después de la sesión alcanza; no es necesario ofrecer algo a cambio para que la entrevista sea válida.

## 5. Guion de entrevista por segmento

Reglas comunes a los cuatro guiones: preguntas abiertas, nunca "¿te gusta nuestro servicio?" (induce la respuesta), dejar que la persona hable antes de repreguntar, y guardar las preguntas sobre DosRuedas puntualmente para la segunda mitad de la charla (arrancar por cómo resuelve el problema en general, no por la marca).

**Seller de MercadoLibre Flex:**
1. Contame cómo es tu día a día despachando pedidos de MercadoLibre.
2. ¿Cómo decidís con quién hacer los envíos Flex?
3. ¿Qué pasa si un pedido no llega a tiempo — qué consecuencia tiene para vos con MercadoLibre?
4. ¿Cómo calculás si te conviene un proveedor de envíos u otro?
5. Cuando pensás en Envíos DosRuedas puntualmente, ¿qué es lo primero que se te viene a la cabeza?
6. ¿Hubo alguna vez que dudaste en seguir con nosotros? ¿Por qué?

**Emprendedor / tienda online:**
1. Contame cómo vendés hoy — Instagram, Tiendanube, local, una mezcla.
2. ¿Cómo resolvés los envíos ahora? ¿Siempre fue así o probaste otras formas?
3. ¿Qué es lo que más te complica de la logística de tu negocio?
4. ¿Cómo elegiste a Envíos DosRuedas la primera vez?
5. ¿Alguna vez comparaste precio o servicio con otra opción?
6. Si tuvieras que explicarle a otro emprendedor por qué usás DosRuedas, ¿qué le dirías?

**Cuenta corporativa:**
1. Contame cómo funciona hoy la logística de última milla en tu empresa.
2. ¿Quién toma la decisión de con qué proveedor de envíos trabajar, y qué pesa más en esa decisión?
3. ¿Cómo preferís coordinar el día a día — WhatsApp, mail, llamada, un contacto fijo?
4. ¿Qué te generaría dudas para aumentar el volumen que envían con nosotros?
5. ¿Cómo es el proceso de facturación y pago hoy? ¿Funciona bien o hay fricciones?

**Cliente que dejó de enviar:**
1. Contame un poco cómo era cuando enviabas con nosotros — con qué frecuencia, para qué.
2. ¿Qué cambió de tu lado (el negocio, el volumen, algo puntual)?
3. ¿Hubo algo puntual con algún envío que te haya hecho dudar?
4. Hoy, ¿cómo estás resolviendo los envíos?
5. Si volvieras a necesitar un servicio como el nuestro, ¿qué tendría que pasar para que nos tengas en cuenta de nuevo?

## 6. Plantilla de notas por sesión

```
SESIÓN — [código del participante, ej. P1, no nombre]
Segmento: [Flex / emprendedor / corporativo / ex-cliente / usabilidad]
Fecha:
Duración real:

RESPUESTAS CLAVE (una línea por pregunta, cita textual breve cuando sea posible)
1.
2.
...

CITAS TEXTUALES DESTACADAS (con comillas, tal cual las dijo)
-

PARA LA PRUEBA DE USABILIDAD, ADEMÁS:
- Momento en que tocó el primer campo real (contar "scrolls" o segundos)
- ¿Notó que la tarjeta de ejemplo no era su precio? (sí/no/confundido)
- ¿Completó la tarea sin ayuda? (sí/no, en qué paso se trabó)

IMPRESIÓN GENERAL DEL ENTREVISTADOR (una o dos frases, no interpretación todavía — eso es F8.2)

SUPUESTOS DE LA TABLA §1 QUE ESTA SESIÓN TOCA (marcar cuáles y con qué evidencia)
```

Reemplazar el nombre real por el código de participante (P1, P2...) antes de guardar cualquier nota en el repositorio — regla 9 del bloque base sobre datos personales.

## 7. Cronograma de dos semanas

| Día | Actividad |
|---|---|
| 1-2 | Definir la lista de invitados por segmento (con el dueño, usando la planilla de clientes) y enviar las invitaciones |
| 3-5 | Primeras confirmaciones y agendamiento; empezar a coordinar la prueba de usabilidad en paralelo (puede reclutarse gente que no sea cliente) |
| 6-9 | Entrevistas (objetivo: al menos 1-2 por día) |
| 8-10 | Prueba de usabilidad (puede superponerse con el final de las entrevistas) |
| 10-11 | Envío de la encuesta de WhatsApp a la base de clientes |
| 12-13 | Cierre de sesiones pendientes, recopilación de todas las notas en el formato de §6 |
| 14 | Corte: lo que no se haya conseguido para este día pasa a una segunda tanda, no bloquea el arranque de F8.2 con lo que sí se consiguió |

---

## 8. Supuestos y lo que no se pudo verificar

- Este plan no incluye ninguna sesión real todavía — es la planificación, no la ejecución. La ejecución depende de que el dueño consiga acceso a los 10 entrevistados, los 5 participantes de usabilidad y el envío de la encuesta, ninguno de los cuales está disponible en esta sesión.
- El gesto de agradecimiento (§4) queda como decisión pendiente del dueño — no se propuso un monto ni beneficio concreto porque sería inventar una política comercial sin respaldo.
- La cantidad de supuestos priorizados (7) no pretende ser exhaustiva — son los que se identificaron releyendo `F1-1`, `F2-1`, `F3-1` y `F7` con la pregunta "¿esto se dio por cierto sin hablar con un cliente real?"; puede haber otros que surjan durante las propias entrevistas.
