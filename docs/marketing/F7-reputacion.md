# F7 — Reputación (análisis temático, brecha de voz y protocolo de reseñas)

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `src/components/home/SocialProofSection.tsx` (corpus real de reseñas embebidas en el sitio), `F2-4-brand-review.md` §9, `F2-3-ux-copy.md` (jerga de cliente vs. jerga real), `F3-1-campaign-plan.md` §7 (programa de reseñas ya definido), `/home/claude/brief-competitivo-dosruedas.html` (competidores establecidos en F1-1), investigación web real adicional.

**Nota de alcance (importante, por la regla "no estimes lo que falta"):** esta fase pide idealmente el texto completo y actual de todas las reseñas de Google del negocio. Esta sesión no tiene un conector a Google Business Profile — lo único disponible es el **corpus parcial de 12 reseñas que el propio sitio ya transcribió y muestra en producción** (`SocialProofSection.tsx`). Todo el análisis de abajo se basa en ese corpus parcial, marcado como tal en cada sección. No se inventó ninguna reseña, cifra ni cita adicional.

---

## 1. Corpus real disponible

12 reseñas con nombre, categoría, fecha relativa y texto completo, todas de 5 estrellas, ya viven en el código de la home:

| Categoría (etiqueta del propio sitio) | Cantidad | Autores |
|---|---|---|
| Destacadas | 3 | Sol R, Alexis Bogarin, Emiliano Garri |
| Express & Flex | 4 | Karen Herrera, Lorenzo Elizagoyen, Ignacio, Sergio Rivas |
| Comercios & PyMEs | 3 | Agustin Torres, NahuAri, Ana Verónica Abruza |
| Cara Humana | 2 | Ezequiel Monson, Daniel Gonzalez |

**Dato hardcodeado en el propio componente (línea 380):** el sitio muestra el texto fijo **"15 Opiniones en Google Maps"** junto a **"5.0 / 5.0 en Google Maps · Calificación Perfecta"** (línea 304) — texto estático, no un valor calculado ni traído en vivo de Google. Esto resuelve parcialmente la duda "A VERIFICAR" de `F2-4-brand-review.md` §9 (15 según el sitio vs. 17 según el documento de F1-1 adjunto en su momento): **el número que el sitio muestra hoy es 15**, aunque no hay forma de confirmar desde acá si ese 15 sigue vigente en la ficha real de Google en este momento — solo que es el valor que quedó codificado.

## 2. Análisis temático del corpus disponible

Los 12 textos, leídos en conjunto, agrupan en 5 temas recurrentes — se cita la frecuencia real, sin inflar:

| Tema | Frecuencia (de 12) | Ejemplo textual |
|---|---|---|
| Rapidez / resolución inmediata | 6 | "resolvieron mi problema con la mejor predisposición" (Karen H.), "rápido, confiable y seguro" (Lorenzo E.) |
| Confianza / seguridad / responsabilidad | 6 | "responsables por sobre todas las cosas" (NahuAri), "total confianza" (Ezequiel M.) |
| Trato humano / calidez | 4 | "Muy buenos humanos" (Ezequiel M.), "comunicación clara y calidez humana" (Sol R.) |
| Puntualidad / cumplimiento | 4 | "Siempre... no te dejan tirado" (Emiliano G.), "calidad y puntualidad en cada entrega" (Sergio R.) |
| Servicio a comercios/empresas (B2B, no solo particulares) | 3 | "Lo usé varias veces para llevar pedidos a nuestros clientes" (Agustín T.), "eficiente... para nuestros envíos comerciales" (Ana V.) |

**Mención operativa que no es solo un elogio genérico, es información de negocio real:** la reseña de Agustín Torres dice textualmente *"además hacen depósitos en cajeros sin problemas"* — es la única mención espontánea de un cliente sobre el manejo del efectivo cobrado, que conecta directamente con la rendición de contrareembolso ya cubierta en `F3-2-contenidos.md`. Vale usarla (citada, con nombre y con enlace real a la reseña de Google si se confirma que sigue publicada) como prueba social específica para el contenido de contrareembolso, en vez de una afirmación genérica de marketing.

**Lo que el corpus NO permite decir, por chico y por ser 100% positivo:** no hay ninguna reseña de 1 a 3 estrellas en los 12 textos disponibles. Esto no significa necesariamente que no existan — solo que ninguna fue transcripta al código del sitio (una sección de "prueba social" muestra, casi por definición, las mejores reseñas, no una muestra representativa). El protocolo de reseñas negativas (§6) se construye igual, como marco general listo para usarse el día que aparezca una, no a partir de un caso real — no existe un caso real disponible en esta sesión.

## 3. Respuestas del dueño: lo que ya existe y el vacío a confirmar

De las 12 reseñas del corpus, **solo 3 tienen una respuesta del dueño transcripta** (`ownerResponse` en el código): Sol R., Karen Herrera y Lorenzo Elizagoyen. Las otras 9 no tienen ningún texto de respuesta en el componente.

Esto es ambiguo y no se puede resolver sin preguntar — hay dos explicaciones posibles, con implicancias opuestas:
1. Esas 9 reseñas **no fueron respondidas** en la ficha real de Google → contradice el compromiso ya fijado en `F3-1-campaign-plan.md` §7 ("el dueño responde el 100% de las reseñas en menos de 48 horas") y sería una brecha operativa a corregir ahora, antes de sumar volumen nuevo de reseñas.
2. Esas 9 reseñas **sí fueron respondidas en Google**, pero solo se transcribieron al código las 3 respuestas más representativas, por prolijidad visual del carrusel → no hay ningún problema operativo, solo una cobertura parcial en el sitio.

> **Pregunta para el dueño (bloqueante para saber si hay un problema operativo real):** ¿las 9 reseñas del corpus sin `ownerResponse` en el código fueron respondidas en la ficha real de Google? Si no, es el punto de partida más urgente de esta fase — más importante que sumar reseñas nuevas.

## 4. Brecha de voz — clientes vs. sitio, y dueño vs. sitio

**La brecha real y grande no está en cómo responde el dueño — está entre cómo hablan los clientes y cómo habla el sitio de servicios.** Ninguna de las 12 reseñas usa una sola vez palabras como "SLA", "partner", "3PL", "certificado" o "homologado". Lo que dicen, con sus propias palabras, es "buenos humanos", "total confianza", "no te dejan tirado", "genios", "responsables por sobre todas las cosas" — todo en el registro de trato humano y cumplimiento simple que ya identificó `F2-3-ux-copy.md` como la voz real del negocio, no la jerga de cliente corporativo que hoy usan `EmprendedoresHero.tsx`, `EmprendedoresFeatures.tsx` y `ExpressPricing.tsx` ("SLA de entrega garantizada", "custodia digital", "3PL"). Esto **no es una brecha nueva**: es evidencia adicional, esta vez desde las palabras reales de los clientes, que confirma que `COPY-01` a `COPY-04` (ya resumidos en `BL-12` del backlog) están bien identificados y priorizados — las reseñas son la prueba de que "buena gente que resuelve" vende más que "SLA garantizado" en este negocio específico.

**Dueño vs. sitio (n=3, la única muestra disponible):** las 3 respuestas reales del dueño (`ownerResponse` en el código) ya muestran un patrón consistente y compatible con la voz de marca definida en `F2-3-ux-copy.md`: agradecimiento directo por nombre de pila, sin fórmulas genéricas repetidas palabra por palabra, cierre con una frase de compromiso concreta más que una despedida vacía. Ejemplo: *"¡Muchas gracias por tus palabras, Karen! Nos alegra saber que pudimos resolver tu envío en el acto."* — corto, en voseo implícito por el tono informal, sin jerga corporativa. **No se encontró ninguna brecha de voz que corregir** entre el dueño y la marca en esas 3 respuestas — es una muestra chica, así que esta conclusión puntual es tentativa.

## 5. Reseñas de competidores (investigación web real)

`F1-1-competitive-brief.md` ya estableció el set de competidores relevante: **MMDP (Mensajería Mar del Plata)** como el comparable local directo, **DAR Logística** (cadena de CABA/GBA con sucursal en Mar del Plata, la amenaza más concreta para Flex/3PL), **Mar del Motos** (hoy delivery gastronómico, anuncia mensajería "próximamente") y **Uber Envíos** (sustituto para el particular urgente). Ese mismo documento ya advirtió que **no pudo leer Google Maps de forma automatizada**, así que las reseñas de terceros quedaron "no verificadas" — la misma limitación aplica acá, por la misma razón (sin conector a Google Maps/Places en esta sesión). Lo que se pudo hacer en esta fase es revisar qué prueba social muestra cada competidor en su propio sitio, que es información nueva respecto de F1-1:

| Competidor | Prueba social en su propio sitio | Comparación con Envíos DosRuedas |
|---|---|---|
| MMDP — Mensajería Mar del Plata (`mensajeriamardelplata.com`) | **Ninguna** — sin testimonios, sin calificaciones, sin citas de clientes en la página revisada. Coincide con lo que ya describió F1-1: precios por zona más altos, recargos del 50% por lluvia/fuera de horario, $1.000 cada 10 min de espera, sin cotizador online | DosRuedas ya está adelante en prueba social visible: 12 reseñas reales, con nombre, categorizadas y con respuestas del dueño |
| DAR Logística, Mar del Motos, Uber Envíos | No se revisaron sus sitios en esta pasada (fuera del alcance de esta fase, que es sobre reputación de DosRuedas, no una repetición del brief competitivo) | — |

**Hallazgo adicional, fuera del set de F1-1 (a título informativo, no reemplaza la comparación anterior):** en una búsqueda web general apareció un quinto operador con presencia en Mar del Plata, **Motomensajería YA** (`motomensajeriaya.com.ar/mar-del-plata`), que no figura en `F1-1-competitive-brief.md` — podría ser un operador multi-ciudad que no se detectó en el relevamiento original, o uno nuevo en la plaza. Muestra 2 testimonios curados con nombre y cargo (ej. "Lucas Elias, Encargado de Compras": *"Nuestra empresa necesita entregas flex, cobros y respuestas inmediatas... Motomensajería YA lo cumple con creces"*). Vale que quien actualice F1-1 lo evalúe como posible competidor no detectado — no se agrega acá como competidor confirmado por no ser el alcance de esta fase.

**Conclusión honesta:** no hay evidencia de una "brecha" de reputación que cerrar frente a MMDP, el único competidor con datos comparables en esta fase — en prueba social visible en el propio sitio, Envíos DosRuedas ya está mejor posicionado. El tema recurrente en el testimonio de Motomensajería YA ("cobros y respuestas inmediatas") coincide con el mismo terreno donde DosRuedas ya tiene una mención real (el comentario de Agustín Torres sobre depósitos en cajeros) — es un indicio más, no una prueba estadística, de que "manejo de efectivo/cobros confiable" es un criterio de decisión valorado en este mercado.

No se pudo acceder a un listado externo de reseñas de Google de ningún competidor (no hay conector de Google Maps/Places en esta sesión) — la comparación se limita a lo que cada uno muestra en su propio sitio, igual que ya advirtió F1-1 sobre esta misma limitación.

## 6. Respuestas modelo (borradores — ninguna se publica sola, regla 8)

Plantillas listas para adaptar caso por caso, nunca para copiar y pegar literal (cada reseña real merece una respuesta específica, como ya lo demuestran las 3 respuestas reales del corpus). Se entregan como **borrador**, a revisar y aprobar antes de publicar cualquiera en Google, siguiendo la regla de esta fase de que nada sale sin aprobación del dueño.

**5 estrellas, elogio general:**
> "¡Gracias, [nombre]! Nos alegra mucho que [detalle específico mencionado en la reseña] haya sido tu experiencia. Seguimos a disposición para lo que necesites."

**5 estrellas, mención de un servicio específico (Flex, contrareembolso, urgencia):**
> "¡Gracias por confiar en nosotros para [servicio mencionado], [nombre]! Trabajamos para que cada [entrega/rendición/trámite] llegue así de bien. Cualquier cosa, ya sabés dónde encontrarnos."

**4 estrellas o reseña mixta (algo positivo + una crítica menor):**
> "Gracias por tu reseña, [nombre]. Nos alegra que [parte positiva] te haya funcionado bien — y tomamos nota de [punto de mejora mencionado] para seguir ajustándolo. Si querés contarnos más detalles, escribinos a [WhatsApp/canal] y lo vemos directamente."

**1-2 estrellas o reseña negativa (marco general — ver protocolo completo en §7 antes de responder una real):**
> "Hola [nombre], lamentamos que tu experiencia no haya sido la que buscamos. Nos gustaría entender qué pasó y resolverlo — te escribimos por [WhatsApp/el medio de contacto que corresponda] para verlo directamente."

Reglas para las cuatro, heredadas de `F3-1-campaign-plan.md` §7 y de `F2-4-brand-review.md`: nunca discutir en público, nunca prometer una compensación no autorizada por el dueño, nunca usar la misma frase textual dos veces seguidas (Google penaliza respuestas idénticas), y ninguna afirmación no respaldada ("SLA garantizado", etc.) dentro de la respuesta.

### 6bis. Borrador de respuesta para cada una de las 9 reseñas sin `ownerResponse` en el código

El enunciado de esta fase pide una respuesta redactada para cada reseña sin responder. Se redactan las 9 abajo, cada una a partir del texto real de esa reseña puntual (no una plantilla genérica) — **borradores para aprobar, no para publicar directo**, y solo aplican si la pregunta bloqueante de §3 se confirma como caso 1 (no fueron respondidas todavía en Google real):

| Autor | Reseña (resumen) | Borrador de respuesta |
|---|---|---|
| Alexis Bogarin | "El mejor servicio premium... 100% recomendable por puntualidad y trato." | "¡Gracias, Alexis! Nos pone muy contentos que destaques la puntualidad y el trato — es lo que más cuidamos en cada entrega." |
| Emiliano Garri | "¡La mejor mensajería de Mar del Plata! Cumplen siempre... no te dejan tirado." | "¡Gracias por tu confianza, Emiliano! Cumplir lo prometido es la base de todo lo que hacemos — seguimos a disposición." |
| Ezequiel Monson | "Muy buenos humanos 😊. Servicio cálido, responsable y de total confianza..." | "¡Gracias, Ezequiel! Nos encanta que se note el lado humano del equipo — para eso estamos, para lo que necesites." |
| Agustin Torres | "Lo usé varias veces para llevar pedidos... hacen depósitos en cajeros sin problemas." | "¡Gracias, Agustín! Nos alegra acompañarte con los pedidos a tus clientes y con la rendición de los depósitos — contá con nosotros." |
| NahuAri | "10 de 10... responsables por sobre todas las cosas, súper recomendable para tu negocio." | "¡Gracias por la recomendación! La responsabilidad es lo que más cuidamos en cada envío para tu negocio." |
| Ignacio | "Recomendado lo de estos muchachos. Buena atención y rapidez en la entrega en toda la ciudad." | "¡Gracias, Ignacio! Que se note la rapidez en toda la ciudad es justo el objetivo — nos vemos en el próximo envío." |
| Daniel Gonzalez | "Excelente servicio muy responsables en todo momento." | "¡Gracias, Daniel! La responsabilidad en todo momento es el compromiso — un gusto tenerte como cliente." |
| Sergio Rivas | "Excelente servicio calidad y puntualidad en cada entrega." | "¡Gracias, Sergio! Calidad y puntualidad en cada entrega es la meta de todos los días." |
| Ana Verónica Abruza | "Confiable y eficiente. Respuesta inmediata para nuestros envíos comerciales." | "¡Gracias, Ana! Que la respuesta sea inmediata para tus envíos comerciales es justo lo que buscamos — a disposición siempre." |

Antes de publicar cualquiera de estas: confirmar con el dueño si ya existe una respuesta real en Google (§3) — si existe, esta tabla queda descartada para esa reseña puntual; si no existe, revisar/ajustar cada una a mano antes de publicar, nunca copiar y pegar las 9 en la misma sesión (Google puede marcarlo como actividad no natural).

## 7. Protocolo de reseñas negativas (marco general, sin caso real disponible)

Expande el único punto que ya existía en `F3-1-campaign-plan.md` §7 ("Responder en 24 horas, sin discutir, ofreciendo resolver por WhatsApp") en pasos concretos:

1. **Detección:** revisar la ficha de Google al menos una vez por día hábil (no hay alerta automática disponible sin conector — tarea manual hasta que se conecte una).
2. **Primera respuesta pública, dentro de las 24 horas:** usar la plantilla de §6 (1-2 estrellas), sin negar el problema ni discutir detalles en el espacio público.
3. **Contacto privado inmediato:** escribir por WhatsApp al número asociado a la reseña si es identificable, o invitar a la persona a escribir, para resolver el reclamo puntual fuera del espacio público.
4. **Resolución y registro:** documentar qué pasó y cómo se resolvió en la planilla de clientes ya prevista en `F3-1-campaign-plan.md` §8.4 (no crear una planilla nueva).
5. **Solo si la reseña resultó de un malentendido y la persona está de acuerdo:** pedirle amablemente que la actualice o elimine — nunca a cambio de nada, y nunca insistiendo más de una vez.
6. **Si la reseña incluye datos personales de un tercero (otro cliente, un repartidor) o una acusación grave:** además de responder, reportarla a Google para revisión — sin esperar a que escale.
7. **Revisión mensual:** contar cuántas reseñas negativas hubo, de qué trataron, y si se repite un mismo motivo — si sí, es un hallazgo operativo para el backlog general del negocio, no solo de reputación.

**Modelos de respuesta para los tres casos que pide explícitamente esta fase** (marcos generales — ninguno responde a un caso real, porque no hay ninguna reseña negativa en el corpus disponible):

- **Demora:** *"Hola [nombre], entendemos la molestia por la demora — no es lo que buscamos para ninguna entrega. Nos gustaría saber qué pasó puntualmente: te escribimos por WhatsApp para revisar el pedido y ver cómo lo resolvemos."*
- **Paquete dañado:** *"Hola [nombre], lamentamos mucho lo que pasó con el paquete — no es el cuidado que prometemos. Te contactamos por WhatsApp para ver el caso en detalle y definir cómo seguimos."*
- **Mala comunicación:** *"Hola [nombre], gracias por decírnoslo — la comunicación clara es algo que nos tomamos en serio y en este caso no funcionó como debía. Te escribimos para entender qué faltó y ajustarlo."*

Las tres comparten la misma estructura que ya define el paso 2-3 de arriba (reconocer sin negar, sin discutir detalles en público, pasar a privado) — cambia solo qué se reconoce puntualmente, para que la respuesta se sienta específica y no una plantilla.

## 8. Programa de crecimiento legítimo de reseñas

`F3-1-campaign-plan.md` §7 ya define el programa completo (meta 17→50 en 90 días, guion PZ-03, momentos de pedido, QR de mostrador, cadencia máxima por cliente, prohibición explícita de pagar o condicionar reseñas). **No se duplica acá** — esta fase solo agrega lo que el análisis temático de §2 aporta de nuevo:

- El guion PZ-03 ya existente pide la reseña al rendir el contrareembolso o al confirmar una entrega urgente — el análisis temático confirma que son exactamente los dos momentos que más aparecen mencionados espontáneamente en las reseñas reales (rapidez/resolución inmediata y manejo de efectivo), así que el momento elegido en F3-1 está bien calibrado contra evidencia real, no es una suposición.
- Vale sumar un tercer momento, no contemplado en F3-1: **después de una entrega a un comercio/PyME recurrente**, ya que el tema "servicio a comercios/empresas" tiene su propio peso real en el corpus (3/12) y hoy el guion de F3-1 no distingue ese caso del particular.
- Sobre el QR: `F3-1-campaign-plan.md` §7 ya prevé un QR de mostrador en Friuli 1972. El enunciado de esta fase pide también un QR "para los riders" (que cada repartidor pueda ofrecer al entregar, no solo en el depósito) — es una extensión simple del mismo QR ya definido, sin rediseñar el programa; queda como nota para cuando se impriman las piezas físicas de F3-1.

## 8bis. Testimonios: cuáles destacar por segmento y en qué página

El corpus ya viene categorizado por el propio sitio (`destacadas`, `express`, `empresas`, `humanos`), lo que facilita mapear cuál usar fuera de la home:

| Página / pieza | Testimonio recomendado | Por qué |
|---|---|---|
| `/servicios/envios-express` | Lorenzo Elizagoyen o Sergio Rivas (categoría "Express & Flex") | Ambos hablan puntualmente de rapidez y puntualidad, la promesa central de la página |
| `/servicios/enviosflex` | Karen Herrera o Ignacio | "Resolvieron mi problema" y "rapidez... en toda la ciudad" — coincide con la urgencia del same-day de Flex |
| `/servicios/envios-lowcost` | Agustín Torres o NahuAri (categoría "Comercios & PyMEs") | Ninguna de las 12 reseñas nombra "LowCost" puntualmente — se usa la de comercios recurrentes porque LowCost apunta a volumen programado de PyMEs, el público más cercano |
| `/servicios/plan-emprendedores` (depósito/3PL) | Agustín Torres | Es la única reseña que menciona manejo de efectivo/depósitos, directamente relacionado con la operación de depósito |
| Contenido de contrareembolso (`BL-20`, `CONT-02`) | Agustín Torres (cita completa, ver §2) | Ya identificado en §2 como la prueba social más específica disponible para ese contenido |
| Pieza "Testimonio de Google" (plantilla 2 de `F5-1-piezas.md`) | Rotar entre Sol R., Karen Herrera y Lorenzo Elizagoyen | Son las únicas 3 que muestran el intercambio completo (reseña + respuesta del dueño), más persuasivo que una cita sola |

## 8ter. Aportes para otras fases (pedidos explícitamente por el enunciado)

- **Para `F2-3-ux-copy.md` (frases de clientes):** "no te dejan tirado", "buenos humanos", "unos genios" son frases reales de clientes, más auténticas que cualquier copy redactado — vale sumarlas como referencia de tono en la próxima revisión de ese documento, citando la fuente (reseña real, no inventada).
- **Para `F3-1-campaign-plan.md` (pruebas para la campaña):** confirma que los dos momentos de pedido de reseña ya elegidos (rendición de contrareembolso, entrega urgente) están calibrados contra evidencia real (§8), y suma el tercer momento (comercio/PyME recurrente) y la extensión del QR a los riders.
- **Para F11-1 (calendario de contenido mensual, próxima fase):** la cita de Agustín Torres es contenido listo para una pieza de contrareembolso; el tema "trato humano" (Ezequiel Monson, Daniel Gonzalez) es un ángulo natural para una publicación "detrás de escena" con foto real del equipo, si el dueño aporta el material (`F3-2-contenidos.md` ya define ese pilar de contenido).

## 9. Hallazgos de esta fase

| ID | Hallazgo | Impacto | Acción |
|---|---|---|---|
| REP-01 | El texto "5.0/5.0 · Calificación Perfecta" y "15 Opiniones en Google Maps" está hardcodeado en `SocialProofSection.tsx`, no calculado desde una fuente viva — se vuelve falso automáticamente el día que exista una sola reseña por debajo de 5 estrellas o cambie el conteo real, y requeriría un deploy de código (no solo editar Google) para corregirlo | Medio | Confirma y refuerza `DC-10` (ya en backlog) — no es un ID nuevo |
| REP-02 | 9 de las 12 reseñas del corpus embebido no tienen respuesta del dueño transcripta en el código — ambiguo si no fueron respondidas en Google o si solo no se transcribieron | Alto si es lo primero (contradice el compromiso de 100% de respuesta de F3-1 §7) | Pregunta bloqueante al dueño (§3), no se abre como ID de backlog hasta confirmar cuál de los dos casos es real |
| REP-03 | Falta un tercer momento de pedido de reseña para comercios/PyMEs recurrentes en el guion PZ-03 de F3-1 | Bajo | Ajuste de contenido — se suma como nota a `F3-1-campaign-plan.md` §7 en el próximo repaso de esa fase, no requiere cambio de código |

Ningún hallazgo de esta fase requiere tocar el sitio de forma nueva — REP-01 ya está cubierto por `DC-10`. No hace falta agregar nada al backlog unificado por esta fase específicamente (se confirma en la actualización de F4-0, ver documento siguiente).

---

## 10. Supuestos y lo que no se pudo verificar

- El corpus de reseñas usado es el que el propio sitio ya transcribió (12), no el listado completo y actual de la ficha de Google — puede haber reseñas más nuevas, más viejas, o negativas que no están acá.
- No se pudo confirmar si las 9 reseñas sin `ownerResponse` en el código fueron o no respondidas realmente en Google (§3) — pregunta directa al dueño, no se asumió ninguna de las dos opciones.
- El protocolo de reseñas negativas (§7) es un marco general de buenas prácticas, no una respuesta a un caso real — no existe ningún caso real disponible en esta sesión.
- La comparación con competidores (§5) se limita a lo que cada uno muestra en su propio sitio web; no se pudo acceder a sus fichas de Google Maps ni a agregadores externos de reseñas.
