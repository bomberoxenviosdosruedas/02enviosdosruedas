# F2-4 — Revisión de marca y afirmaciones

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: código del repo (`src/`), `README.md`, `PRODUCT.md`, `F1-1-competitive-brief.md`, `F2-3-ux-copy.md`. `docs/contexto/precios.md` (fuente de verdad de tarifas) **no existe en el repo** — ya señalado en F2-1/F2-2/F2-3; toda comparación de precios en este documento se hace contra `AGENTS.md` y `src/lib/pricing.ts`, que son lo único verificable, y se marca como pendiente lo que solo `precios.md` podría resolver.

No se navegaron en vivo los perfiles de Instagram (`instagram.com/enviosdosruedas`) ni Facebook (`facebook.com/enviosdosruedas`) en esta pasada — se listan para que la verificación de voz entre sitio y redes se haga manualmente (§2).

---

## 1. Resumen

- **Los horarios de atención dicen tres cosas distintas en tres lugares**: el JSON-LD que lee Google (Mon–Sat 08:00–20:00) no coincide con lo que ve el cliente en el footer y en la página de contacto (Lun–Vie 09:00–18:00, Sáb 10:00–15:00). Un cliente puede guiarse por Google y encontrar el local cerrado.
- **Dos afirmaciones de "certificación/homologación" sin autoridad nombrada**: "Socio logístico homologado" (home), "Socio logístico certificado para Mercado Envíos Flex" (schema no usado), "Partner 3PL Verificado" (footer) — ninguna dice homologado/certificado/verificado *por quién*.
- **Al menos 4 afirmaciones absolutas** ("0 paquetes extraviados", "cero suspensiones de Flex", "SLA 100%", "puntualidad garantizada") que un solo caso en contra desmiente por completo — el tipo de afirmación que un competidor o un cliente enojado puede usar en contra.
- **La antigüedad de la empresa se contradice a sí misma dentro de la misma sección** "Nosotros": "más de 15 años" (`AboutHero.tsx:84`) contra "más de 7 años" en el mismo módulo (`AboutTimeline.tsx`) y en el resto del sitio — ya registrado como DC-32 en F2-1, se retoma acá porque además es una afirmación pública, no solo un problema visual.
- **`README.md` referencia `PROJECT.md` cuatro veces como lectura obligatoria y el archivo no existe** en el repo — enlace roto en la documentación interna, tal como sospechaba el enunciado.
- Lo que sí funciona: los testimonios están presentados como reseñas de Google reales, con estructura de datos propia (`GoogleReview`) y un enlace verificable a la ficha real de Google Maps — no hay señales de testimonios inventados.

---

## 2. Coherencia de voz

- **Sitio vs. README**: el tono del código (voseo, directo, sin tecnicismos hacia el cliente en la mayoría de las pantallas) coincide con el de `README.md` y `PRODUCT.md`. La excepción es la jerga interna ya documentada en F2-3 (COPY-01 a COPY-04), que aparece tanto en componentes visibles como en `README.md` (ej. "última milla e-commerce" en metadata de `nosotros/sobre-nosotros/page.tsx:15` — aceptable, es un término traducido y no jerga de sistema como "3PL"/"SLA"/"batch").
- **Sitio vs. copy propuesto en F2-3**: coherente por construcción, ya que F2-3 tomó como base la voz existente.
- **Sitio vs. redes (Instagram/Facebook)**: **no verificado en esta pasada** — no se navegaron los perfiles reales. Se listan los handles (`instagram.com/enviosdosruedas`, `facebook.com/enviosdosruedas`) para que alguien con acceso confirme que el tono, el nombre de los servicios (glosario de F2-3) y las afirmaciones permitidas (§3) coinciden con lo que se publica ahí. No se puede dar por bueno sin mirarlo.

---

## 3. Auditoría de afirmaciones

| Afirmación | Dónde aparece | Estado | Nota |
|---|---|---|---|
| "+50k Envíos" | `HeroAnimado.tsx:155` (hero de home) | **A verificar con el dueño** | Cifra redonda sin fuente en el código. Si hay un conteo real (sistema de pedidos, Prisma), citar el período ("+50k envíos desde 2019", por ejemplo) en vez de un número flotante sin contexto. |
| "0 paquetes extraviados" | `VisionSection.tsx:191-196` (bento card, valor hardcodeado `0`) | **A eliminar o reformular** | Afirmación absoluta y para siempre: un solo caso documentado en una reseña negativa la desmiente por completo. Reformular a algo verificable y acotado en el tiempo ("cadena de custodia con foto de entrega en el 100% de los envíos Express", si es cierto) o quitarla. |
| "Cero suspensiones de Flex" | `SliderServicios.tsx:45` | **A eliminar o reformular** | Mismo problema que la anterior — depende de que ningún vendedor que trabajó con ellos haya tenido una suspensión, algo que DosRuedas no puede controlar ni demostrar con certeza hacia adelante. |
| "Puntualidad garantizada" | `SocialProofSection.tsx:159`, dentro de una cita textual del cliente "Sergio Rivas" | **Respaldada como cita, no como promesa propia** | Es un testimonio real (ver §5), no una afirmación de la empresa — está bien mostrarla como cita, pero no debe repetirse como titular propio en otra sección sin el nombre del cliente al lado. |
| "Socio logístico homologado" / "entrega garantizada dentro del SLA establecido" | `EmprendedoresHome.tsx:239` | **A verificar con el dueño** | "Homologado" implica una homologación de un tercero (¿Mercado Libre? ¿un municipio?) que no está nombrado. Si no hay una homologación formal, cambiar a "socio logístico de confianza" o similar. |
| "Socio logístico certificado para Mercado Envíos Flex" | `SchemaMarkup.tsx:96` | **A eliminar o reformular (además: código muerto)** | El componente no está importado en ninguna página (`SchemaMarkup.tsx` no aparece referenciado fuera de sí mismo) — no se está mostrando hoy, pero si se activa el JSON-LD sin corregir esta línea, la afirmación pasa a leerla Google. Corregir antes de conectar el componente. |
| "SLA 100%" / "SLA 100% entregas en el día" | `FlexHero.tsx:139`, y en la **metadata** (`title`/`description`) de `src/app/servicios/enviosflex/page.tsx:15,29` | **A eliminar o reformular — prioridad alta** | Es jerga (ya COPY-02/COPY-03 en F2-3) y además una promesa de cumplimiento del 100%, sin excepción, publicada en el `<meta description>` que Google muestra en el buscador. Reformular con el dato real de corte/entrega (ya lo tiene la misma página: "corte 15 hs, entrega antes de las 20:00 hs"). |
| "Partner 3PL Verificado" (badge) | `OptimizedFooter.tsx:209` | **A verificar con el dueño** | Badge visual con ícono de escudo; no dice verificado por quién. Si no hay una verificación de terceros real, es una credencial que parece oficial sin serlo — riesgo de publicidad engañosa (ver §6, legal). |
| "5.0 con 15 opiniones en Google Maps" / "5.0 / 5.0 en Google Maps · Calificación Perfecta" | `SocialProofSection.tsx:304,380`, enlace real a `https://share.google/ofw5wAQt3Fc1dArom` | **Respaldada, con riesgo de desactualización** | El enlace a Google Maps es real y verificable. El número "15" está hardcodeado en el componente: si la ficha real ya tiene más reseñas (el material de investigación alternativo consultado por el equipo de marketing menciona 17), el sitio muestra un dato viejo. Recomendación: mostrar el conteo sin un número fijo en código ("Mirá todas nuestras opiniones en Google") o documentar un proceso de actualización manual periódica. |
| "Más de 7 años" | `AboutTimeline.tsx:42,64`, `OptimizedFooter.tsx:149`, `ExpressFeatures.tsx:26` | **Respaldada (mayoritaria)** | Es la cifra que repite la mayoría del sitio y coincide con el contexto fijo del proyecto. |
| "Más de 15 años" | `AboutHero.tsx:84` | **A eliminar — contradice al resto del sitio** | Contradice directamente "más de 7 años" en la misma página (`nosotros/sobre-nosotros`). Cruza con **DC-32** de F2-1. Hasta que el dueño confirme la cifra real, usar "más de 7 años" en todos lados por ser la mayoritaria. |
| "Atención comercial < 2 MIN" | `ContactForm.tsx:77-79` | **A verificar con el dueño** | Promesa de tiempo de respuesta comercial; confirmar que es un compromiso real y no aspiracional antes de dejarla en un badge permanente. |
| "Liderando la logística urbana..." | `nosotros/sobre-nosotros/page.tsx:15` (meta description) | **A reformular (menor)** | "Liderar" es una afirmación de posición de mercado que un competidor puede disputar. Cambiar a una descripción de lo que hacen, no de qué lugar ocupan (ej. "con más de 7 años de trayectoria en logística urbana..."). |
| Badge ISO (documentado como página futura) | `README.md` (roadmap, no implementado en código) | **No implementar hasta tener la certificación real** | No está en producción hoy. Se deja constancia para que no se agregue al backlog de contenido sin la certificación en mano. |
| "99.9% SLA entrega", "cobertura seguro 500k", "monitoreo 24/7", "retiro en 15 min", "rastreo GPS vivo" | `README.md` (roadmap de páginas futuras, no implementado) | **No implementar sin respaldo — todas requieren dato real antes de publicarse** | Mismo caso que el badge ISO: son promesas de página futura documentadas en el README. Cualquier prompt de F4-2 que toque estas páginas debe frenar y preguntar antes de escribir estos números, no inventarlos ni "redondear" desde una cifra aproximada. |

---

## 4. Coherencia de precios

| Dato | Dónde | Valor | Coincide con `AGENTS.md`/`pricing.ts` |
|---|---|---|---|
| Express, tarifa base (0–3 km) | `ServicesOverview.tsx:82,88` (home) | $3.700 | **Sí** — coincide con el tramo 0-3km de `AGENTS.md` |
| LowCost, tarifa base (0–3 km) | `ServicesOverview.tsx:119,125` (home) | $3.000 | **Sí** — coincide con el tramo 0-3km de `AGENTS.md` |
| Express, tramo 7–10 km | `README.md:309` | $8.200 | **Sí** — coincide con `AGENTS.md` |
| Emprendedores, "desde" | `README.md:33` | $2.800/envío | **No hay tramo de "Emprendedores" en `AGENTS.md` ni en `pricing.ts`** — solo existen las tablas EXPRESS y LOW_COST. Esta cifra no se puede verificar contra ninguna fuente de verdad del repo. |
| Ejemplo de ahorro LowCost vs. Express | `README.md:342` | "12 envíos · 47 km total · Ahorro $15.600 vs Express" | **A verificar** — no se recalculó el ejemplo contra la fórmula real de `pricing.ts` en esta pasada; si se usa como ejemplo público, debe recalcularse antes de publicar. |

**No se decide acá cuál cifra es la correcta** (regla del BLOQUE BASE): la señal es que "$2.800 por envío" en Emprendedores no tiene respaldo en ninguna fuente verificable del repo, y debe confirmarse con el dueño o cargarse en `docs/contexto/precios.md` (que hoy no existe) antes de usarse en cualquier pieza nueva.

---

## 5. Coherencia de datos del negocio

| Dato | Fuente A | Fuente B | ¿Coincide? |
|---|---|---|---|
| Horario de atención | JSON-LD `layout.tsx:160-166`: Lunes a **Sábado**, 08:00–20:00 (un solo bloque) | Footer (`OptimizedFooter.tsx:327-332`) y `ContactInfo.tsx:221,227`: Lunes a Viernes 09:00–18:00, **Sábados 10:00–15:00 aparte** | **No coincide** — ni los días agrupados ni el horario. Google puede mostrar "abierto" un sábado a las 19:00 cuando el local ya cerró. Prioridad alta: es un dato que factura confianza (cliente que llega y no hay nadie) y afecta directamente al negocio, no solo a la métrica de SEO. |
| Email de contacto | `README.md`: `dev@enviosdosruedas.com.ar` | Código de contacto: `matiascejas@enviosdosruedas.com` | **No coincide el dominio** (`.com.ar` vs `.com`) ni la casilla. A confirmar cuál es el email público real de cara al cliente — el del README parece un contacto de desarrollo/interno, no uno para el visitante del sitio. |
| Teléfono / WhatsApp | Consistente en todo el código: `+54 223 660-2699` | — | **Coincide** en header, footer, contacto y `tel:`/`wa.me` — sin hallazgo. |
| Dirección | Friuli 1972, Mar del Plata — consistente en JSON-LD, footer y `README.md` | — | **Coincide** — sin hallazgo. |
| Redes sociales | `facebook.com/enviosdosruedas`, `instagram.com/enviosdosruedas` | — | Handles consistentes en el código; contenido de las redes no verificado (§2). |

**MARCA-01** — Crítico — Horario de atención inconsistente entre datos estructurados y contenido visible — `src/app/layout.tsx:160-166` vs. `src/components/layout/OptimizedFooter.tsx:327-332` y `src/components/contacto/ContactInfo.tsx:221-227`
Corrección: unificar a un solo horario real (a confirmar con el dueño) y que el JSON-LD lo refleje exactamente, incluyendo el bloque separado de sábado si corresponde (`OpeningHoursSpecification` admite múltiples bloques, no hace falta forzarlo a uno solo).

**MARCA-02** — Importante — Email de contacto con dominio distinto entre README y código — `README.md` vs. componentes de contacto
Corrección: confirmar el email público real y usar uno solo en toda la documentación y el sitio; si `dev@enviosdosruedas.com.ar` es un contacto interno de desarrollo, aclararlo en el README para que no se confunda con el canal de atención al cliente.

---

## 6. Testimonios

- Confirmado: `SocialProofSection.tsx` define una interfaz propia `GoogleReview` y un arreglo `REVIEWS_DATA` con autor, categoría, rating, antigüedad ("Hace 39 semanas") y cita — no hay señales de testimonios inventados o genéricos tipo "Juan P., cliente satisfecho".
- Confirmado: hay un enlace real de verificación a Google Maps (`https://share.google/ofw5wAQt3Fc1dArom`) con el texto "Ver Ficha y Opiniones en Google Maps" — cumple el requisito de enlazar a la ficha real.
- Riesgo (ya señalado en §3): el conteo "15 Opiniones" y el rating "5.0 / 5.0" están hardcodeados en el componente. No se verificó en vivo la ficha de Google en esta pasada (no se navegó fuera del repo); si cambió desde que se escribió este copy, el sitio muestra un dato desactualizado. Recomendación operativa: revisar y actualizar esta cifra cada vez que se publique una nueva reseña, o quitar el número fijo y dejar solo el enlace.

---

## 7. Legal en Argentina (a confirmar con un profesional — esto no es dictamen legal)

- **Política de Privacidad** y **Términos y Condiciones**: existen como páginas propias (`src/app/politica-de-privacidad`, `src/app/terminos-y-condiciones`) — no se relevó su contenido línea por línea en esta pasada; un profesional debería confirmar que cubren el tratamiento de datos del formulario de contacto y de los mensajes de WhatsApp (Ley 25.326 de Protección de Datos Personales).
- **Botón de arrepentimiento**: no se encontró evidencia de un flujo de compra/contratación online con pago dentro del sitio (el "cierre" de la conversión es una cotización que deriva a WhatsApp, no una compra concretada en el sitio) — un profesional debe confirmar si el modelo actual igual encuadra en la normativa de "botón de arrepentimiento" para venta a distancia (Resolución 424/2020 y modificatorias) o si al no completarse la contratación online no aplica.
- **Defensa del consumidor**: las afirmaciones absolutas de §3 ("0 paquetes extraviados", "cero suspensiones", "SLA 100%") son las que un profesional debería revisar primero por riesgo de publicidad engañosa (Ley 24.240, art. 8) si no tienen respaldo verificable.
- **Contrareembolso**: la página nueva propuesta en F2-3 (`/servicios/envios-contrareembolso`) menciona manejo de dinero de terceros — un profesional debería confirmar si esto requiere alguna previsión adicional (custodia de fondos, plazos de rendición) antes de publicarse.

---

## 8. Documentación interna

**MARCA-03** — Importante — Enlace roto en documentación interna — `README.md:224,537`, `AGENTS.md:37,472`
Evidencia: las cuatro referencias apuntan a `PROJECT.md` en la raíz del repo como lectura obligatoria antes de planificar trabajo ("Arquitectura técnica, Roadmap con DoD, Milestones, Contracts de interfaz") — el archivo no existe en el repo clonado.
Corrección: crear `PROJECT.md` con ese contenido, o si el roadmap vive en otro lado, actualizar las cuatro referencias para que apunten al archivo real. Mientras no se resuelva, cualquier agente de código que siga la "lectura previa" de `AGENTS.md` se queda sin ese archivo — vale la pena resolverlo temprano en el backlog de F4-0, ya que bloquea el protocolo de trabajo, no solo el contenido.

---

## 9. Preguntas concretas para el dueño

Estas son las que destraban el resto del trabajo (F3-2 en adelante no puede publicar contenido nuevo de Emprendedores, Flex ni la home sin estas respuestas):

1. ¿Cuál es la antigüedad real de la empresa: "+7 años" o "+15 años"? (define AboutHero.tsx, y toda mención de trayectoria en el sitio y en marketing)
2. ¿"+50k envíos" es una cifra real? Si lo es, ¿desde cuándo se cuenta y con qué fuente (sistema de pedidos, facturación)?
3. ¿Existe algún tipo de homologación o certificación formal como socio de Mercado Envíos Flex, o "homologado"/"certificado" es una forma de decir "cumplimos los requisitos para operar con ellos"? Define si se puede seguir usando esa palabra.
4. ¿Qué autoridad respalda el badge "Partner 3PL Verificado" del footer? Si no hay una verificación de terceros real, ¿se puede reformular o hay que quitarlo?
5. ¿Cuál es el horario real de atención? (para corregir el JSON-LD, el footer y la página de contacto a una sola versión)
6. ¿Cuál es el email de contacto público correcto: el del README (`dev@enviosdosruedas.com.ar`) o el que usa el código (`matiascejas@enviosdosruedas.com`)? ¿Corresponde mostrar alguno en el sitio, o son ambos internos?
7. ¿El precio "desde $2.800/envío" de Emprendedores en el README sigue vigente? ¿Existe `docs/contexto/precios.md` en algún lado fuera del repo que debamos incorporar?
8. ¿Es realista sostener "0 paquetes extraviados" y "cero suspensiones de Flex" como afirmaciones permanentes, o preferís reformularlas a algo verificable y acotado?
9. ¿Hay proceso para mantener actualizado el conteo de reseñas de Google en el sitio (hoy dice "15" fijo en el código)?
10. ¿La política de privacidad y los términos y condiciones ya fueron revisados por un profesional, o siguen pendientes de esa revisión?

---

## 10. Supuestos y lo que no se pudo verificar

- No se navegaron en vivo Instagram ni Facebook — la coherencia de voz con redes queda como verificación manual pendiente (§2).
- `docs/knowledge_base/contexto.md` y `docs/contexto/precios.md` no existen en el repo; toda comparación de precios y de voz se hizo contra las fuentes que sí existen (`AGENTS.md`, `README.md`, `PRODUCT.md`, código).
- El conteo de reseñas de Google ("15") y el rating ("5.0") no se verificaron contra la ficha real de Google Maps en esta pasada — se señala el riesgo de desactualización, no se afirma que el número actual sea incorrecto.
- Este documento no reemplaza una revisión legal profesional; §7 son preguntas a hacerle a un abogado, no una conclusión legal.
- El ejemplo de ahorro "$15.600 vs Express" (`README.md:342`) no se recalculó contra `pricing.ts` en esta pasada — se marca a verificar, no se afirma que esté mal.
