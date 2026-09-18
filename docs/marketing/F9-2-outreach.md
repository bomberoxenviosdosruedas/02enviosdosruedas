# F9-2 — Mensajes de primer contacto y seguimiento (borradores)

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F9-1-perfil-cliente-ideal.md` y `F9-1-prospectos.xlsx` (top 19), `F1-1-competitive-brief.md` (battlecards), `F3-2-contenidos.md` (respuestas a objeciones), `F7-reputacion.md` (testimonios por segmento), `F2-3-ux-copy.md` (voz de marca ya establecida).

**Todo lo de este documento es borrador — nada sale sin que el dueño lo revise y lo apruebe primero (regla 8 del bloque base).**

---

## 0. Perfil de voz del dueño — gap real, no se pudo completar como pide el enunciado

El enunciado pide 5 a 10 mensajes reales de WhatsApp o correo del dueño a clientes para deducir su perfil de voz (largo, saludo, emojis, cierre). **No se adjuntó ninguno** — siguiendo la regla "si falta un dato, pedilo; no lo estimes", no se inventó un perfil de voz a partir de nada. Lo que sí existe y se usó como la mejor aproximación disponible, dejando explícito que no reemplaza muestras reales:

- Las **3 respuestas reales del dueño a reseñas de Google** que ya identificó `F7-reputacion.md` §4 (únicas muestras 100% reales de la voz del dueño en todo este proyecto): cortas, agradecimiento por nombre de pila, sin fórmulas repetidas, un emoji ocasional, cierre con una frase de compromiso concreta en vez de una despedida genérica.
- La voz de marca ya definida en `F2-3-ux-copy.md` (voseo consistente, imperativo directo, sin jerga como "3PL"/"SLA").

Las plantillas de abajo se redactaron con esa base. **Antes de usarlas de verdad, hay que confirmarlas contra cómo escribe el dueño en la práctica** — es la pregunta más importante pendiente de esta fase, más que cualquier plantilla.

> **Pregunta para el dueño:** ¿podés pegar 5-10 mensajes reales que le hayas mandado a clientes (por WhatsApp o mail), para ajustar estas plantillas a como escribís de verdad?

## 1. Primer mensaje por prospecto — dónde están, no acá

El enunciado pide, para cada uno de los 20 mejores prospectos, un mensaje que arranque de su señal específica (no una presentación genérica). Esos 19 mensajes personalizados **se redactaron y viven en una hoja nueva de `F9-1-prospectos.xlsx`** ("Mensajes personalizados"), tal como indica la salida esperada de este mismo prompt — no en este documento, que es de plantillas genéricas sin datos de prospectos, para no mezclar contenido público (este `.md`, que sí va al repo) con nombres de negocios de prospección (que quedan fuera de él, regla 9).

## 2. Plantillas genéricas de primer contacto (OUT-01 a OUT-04)

Cuatro versiones según el canal y el tipo de señal detectada, para usar como base al redactar el mensaje específico de cada prospecto:

**OUT-01 — WhatsApp/Instagram, negocio con venta online activa (indumentaria, tecnología, envases):**
> "Hola! Somos Envíos DosRuedas, mensajería en moto acá en Mar del Plata. Vimos que [venden por Instagram / tienen tienda online] y se nos ocurrió que les podría servir tener un cadete de confianza para las entregas del día a día. ¿Les interesa que les cuente cómo trabajamos? Sin compromiso."

**OUT-02 — WhatsApp/mail, estudio contable/gestoría/jurídico (trámites y documentación):**
> "Hola! Te escribo de Envíos DosRuedas — hacemos mensajería en moto en Mar del Plata, muy usada para trámites y documentación entre oficinas, bancos y organismos. Si alguna vez necesitan mover papeles rápido y con seguimiento, estamos para ayudar. ¿Te cuento cómo funciona?"

**OUT-03 — WhatsApp, laboratorio (traslado de muestras/resultados):**
> "Hola! Somos Envíos DosRuedas, mensajería en moto en Mar del Plata. Trabajamos con negocios que necesitan traslados puntuales y seguidos dentro de la ciudad — pensamos que podría servirles para muestras o resultados entre puntos. ¿Charlamos un minuto?"

**OUT-04 — Mail, cuenta corporativa (cuenta corriente / volumen):**
> Asunto: Mensajería en moto para [nombre del negocio] — Mar del Plata
> "Hola, buenos días. Somos Envíos DosRuedas, mensajería con flota propia en Mar del Plata, con más de 7 años en la zona. Vimos [señal específica del prospecto] y creemos que podríamos ser un buen socio logístico para sus entregas locales. ¿Tendrían 15 minutos para una llamada esta semana?"

Las cuatro, máximo 4 líneas para WhatsApp/Instagram (más largo se pierde), versión de correo solo cuando el contacto disponible es un mail. Ninguna usa una afirmación no respaldada de `F2-4-brand-review.md` — ninguna promete SLA, certificación ni "partner verificado".

## 3. Secuencia de seguimiento

| Toque | Cuándo | Qué aporta | Ejemplo |
|---|---|---|---|
| 1 | Día 0 | Presentación desde la señal específica (§1/§2) | Ver OUT-01 a OUT-04 |
| 2 | Día 3 | Un dato concreto — no repetir el pitch | "Te cuento algo rápido: calculamos el precio exacto por distancia antes de que confirmes, nada de 'a consultar' salvo casos puntuales — así podés cotizar vos mismo cuando quieras: [enlace al cotizador]." |
| 3 | Día 7 | Un caso o testimonio real, si el dueño lo aprueba | Usar uno de los testimonios ya mapeados por segmento en `F7-reputacion.md` §8bis (nunca inventado) |
| 4 | Día 14 | Cierre amable, sin insistir más | "No quiero ser pesado — si en algún momento te sirve, quedamos a un mensaje de distancia. ¡Éxitos con el negocio!" |

**Condición de salida en cualquier momento:** cualquier respuesta (positiva, negativa o pedido de no contacto) corta la secuencia ahí — no se manda el siguiente toque automáticamente.

## 4. Guion para visita presencial o llamada

Tres preguntas de calificación, en este orden, para no sonar a interrogatorio:
1. "Contame un poco cómo hacen hoy los envíos — ¿tienen a alguien fijo o varía?"
2. "Más o menos, ¿cuántos envíos por semana estarían necesitando?"
3. "¿Hay algo que hoy les falle o les gustaría que funcione distinto?"

La tercera pregunta es la que conecta directo con las objeciones ya mapeadas en `F3-2-contenidos.md` — la respuesta dice qué battlecard usar a continuación, sin necesidad de recitar todas.

## 5. Buenas prácticas, límites, y lo que debe revisar un profesional

- Contactar solo cuentas y datos comerciales públicos (Instagram del negocio, sitio, mail público de contacto) — nunca un teléfono personal conseguido por otra vía.
- Identificarse siempre como Envíos DosRuedas desde el primer mensaje, nunca simular ser un cliente o un particular.
- Respetar el "no" — un pedido de no contacto corta la secuencia para siempre, sin excepción.
- No usar envíos masivos automatizados desde el WhatsApp personal del dueño (riesgo de bloqueo de la cuenta y contra los términos de WhatsApp Business).
- Volumen diario razonable: no se define un número exacto acá (sería inventar una política sin respaldo) — es una decisión del dueño según cuánto tiempo real tenga para responder.
- **Para que revise un profesional:** el uso de datos de contacto público de un negocio para una primera comunicación comercial (esto es distinto de usar datos personales de un individuo) generalmente se considera dentro del uso corriente de datos públicos, pero conviene que un profesional confirme esto contra la Ley 25.326 de Protección de Datos Personales antes de escalar el volumen de envíos, y que revise las políticas vigentes de WhatsApp Business para uso comercial saliente (pueden cambiar).

---

## 6. Supuestos y lo que no se pudo verificar

- El perfil de voz del dueño (§0) es una aproximación a partir de 3 respuestas a reseñas, no de las 5-10 muestras reales que pedía el enunciado — sigue pendiente.
- Los mensajes personalizados de los 19 prospectos prioritarios viven en `F9-1-prospectos.xlsx`, fuera de este documento y fuera del repo público.
- Ninguna plantilla fue probada con un prospecto real — son borradores de primera versión, a ajustar después de las primeras respuestas reales.
- El volumen diario razonable de contactos (§5) no se definió con un número — depende de una decisión operativa del dueño, no de datos disponibles acá.
