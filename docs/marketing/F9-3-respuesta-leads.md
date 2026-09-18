# F9-3 — Protocolo de respuesta a consultas entrantes

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F2-3-ux-copy.md` §6 (mensajes prearmados de WhatsApp), `F3-2-contenidos.md` (secuencia de seguimiento por volumen y respuestas a objeciones), `F3-1-campaign-plan.md` §8.4 (planilla semanal ya prevista).

**Nota de alcance:** el enunciado pide una descripción de cómo se atienden hoy las consultas (quién responde, en qué horario, en cuánto tiempo) y 10-20 ejemplos reales de consultas recibidas — ninguno de los dos se adjuntó. Siguiendo la regla "si falta un dato, pedilo; no lo estimes", este documento no inventa esos datos: construye el protocolo con lo que sí está disponible (los mensajes prearmados ya definidos, el horario real del footer, las secuencias ya diseñadas) y marca explícitamente dónde falta la información operativa real.

> **Pregunta para el dueño (bloqueante para completar §3 con precisión):** ¿quién responde hoy las consultas (el dueño, alguien del equipo), en qué horario efectivo, y cuánto tarda hoy en promedio? Sin esto, los tiempos objetivo de abajo son una propuesta razonable, no una medición de la situación actual.

---

## 1. Mapa de entradas

| Entrada | Dónde | Qué información trae | Prearmado ya existente |
|---|---|---|---|
| Formulario de la home | `ContactForm.tsx` / formularios de servicio | Nombre, empresa, volumen (según el campo del formulario) | No — llega como formulario, no como mensaje de WhatsApp |
| Cotizador Express | `/cotizar/express` | Origen, destino, distancia, precio calculado | Sí — "Cotizé un envío Express por {precio}..." (`F2-3` §6) |
| Cotizador LowCost | `/cotizar/lowcost` | Igual, para lote de envíos | Mismo patrón, contexto LowCost |
| Botón de WhatsApp (general) | Header, footer, páginas de servicio | Ninguna — mensaje en blanco o genérico | "Hola! Te escribo desde la web..." (`F2-3` §6, contacto general) |
| Teléfono | `+54 223 660-2699` | Ninguna previa — es una llamada | No aplica (no es un mensaje prearmado) |
| Instagram / Facebook | Perfiles públicos | Variable — comentario o DM | No definido — fuera del alcance de `F2-3` |
| Ficha de Google | Botón de mensaje / reseña | Variable | No definido |

## 2. Criterios de calificación (caliente / tibio / frío)

| Nivel | Señales |
|---|---|
| **Caliente** | Ya cotizó y pregunta cómo confirmar; menciona un volumen concreto (ej. "hago 15 envíos por día"); pide alta como cuenta corriente o Flex; consulta desde el formulario de empresas (`BL-23`) |
| **Tibio** | Pregunta por precio sin haber cotizado; pregunta por cobertura de una zona puntual; consulta general sobre cómo funciona el servicio |
| **Frío** | Consulta sobre un envío único y esporádico sin mencionar recurrencia; pregunta que ya responde el FAQ (`nosotros/preguntas-frecuentes`) sin agregar contexto nuevo |

## 3. Tiempo de respuesta objetivo por tipo y horario

**Horario de despacho real** (confirmado en el footer, `OptimizedFooter.tsx`, ya usado como fuente en `F2-4`/`F6`/`F7`): lunes a viernes 09:00-18:00, sábados 10:00-15:00.

| Tipo de consulta | Dentro del horario | Fuera de horario |
|---|---|---|
| Caliente | Objetivo: menos de 15 minutos | Primera respuesta automática (§5) + respuesta real a primera hora del próximo horario de despacho |
| Tibio | Objetivo: menos de 1 hora | Respuesta real al reabrir |
| Frío | Objetivo: mismo día hábil | Respuesta real al reabrir, no urgente |

Estos números son una **propuesta**, no una medición de la situación actual — depende de la respuesta del dueño a la pregunta del encabezado para confirmar si son realistas con el equipo actual o si hace falta ajustar.

## 4. Respuestas modelo por tipo de consulta

Con las preguntas mínimas para cotizar sin ida y vuelta, evitando pedir de a un dato por vez:

**Consulta general de precio (sin haber cotizado):**
> "¡Hola! Para darte el precio exacto necesito: origen, destino (o barrio) y el tamaño aproximado del paquete. Si querés, también podés cotizarlo vos mismo acá: [enlace al cotizador] y listo, sin esperar."

**Consulta de cobertura de una zona puntual:**
> "¡Hola! Cubrimos todo el ejido urbano de Mar del Plata. Contame la zona puntual y te confirmo al toque."

**Consulta desde Flex (nueva cuenta):**
> "¡Hola! Para sumarte a Envíos DosRuedas como mensajería de tu cuenta de Flex contame más o menos cuántos envíos hacés por día y te explico cómo seguimos."

**Consulta de volumen/cuenta corriente (empresa):**
> "¡Hola! Para armarte una propuesta de cuenta corriente necesito saber: cuántos envíos por semana estimás, y si son siempre a la misma zona o variable. Con eso te armo algo concreto."

## 5. Respuestas rápidas, mensaje de ausencia y etiquetas para WhatsApp Business

**Mensaje de ausencia (fuera de horario):**
> "¡Gracias por escribir a Envíos DosRuedas! Nuestro horario de despacho es lunes a viernes de 9 a 18 y sábados de 10 a 15. Leemos tu mensaje apenas abrimos — si es una consulta de precio, también podés cotizar solo acá: [enlace cotizador]."

**Etiquetas sugeridas para WhatsApp Business:** `Caliente`, `Tibio`, `Frío`, `Cotizó-sin-confirmar`, `Cuenta-corriente`, `Flex-nuevo`, `Reclamo` (para separar de una consulta nueva desde el primer contacto).

## 6. Requerimientos para el sitio (van al backlog)

| ID | Requerimiento | Por qué |
|---|---|---|
| LEAD-01 | El mensaje de WhatsApp que arma el cotizador debe incluir un identificador de la cotización (origen, destino, servicio y precio ya están; falta un ID corto) | Para que quien responda no tenga que volver a preguntar los datos — depende de `BL-25`/`DC-05`, ya en el backlog |
| LEAD-02 | El formulario de contacto/empresas debe guardar la consulta en una base, no solo enviar un mail (hoy no hay evidencia de persistencia — confirmar en `F12-1`) | Sin esto, una consulta que no se responde a tiempo se pierde sin registro |
| LEAD-03 | Aviso al dueño (push, mail o WhatsApp) cuando entra un contacto que menciona un volumen mayor a 200 envíos/mes | Para que un lead grande no espere la misma cola que uno chico |

**No se agregan como ítems nuevos del backlog unificado todavía** — LEAD-02 depende directamente de lo que confirme `F12-1` (¿el sistema guarda algo hoy?), así que se decide junto con esa fase para no duplicar trabajo; ver `F12-1-consultas.sql`/`F12-1-diccionario.md`.

## 7. Planilla diaria de seguimiento (compatible con el CRM de F9-4)

Columnas mínimas: fecha y hora de entrada, canal, nombre del contacto, nivel (caliente/tibio/frío), consulta resumida, tiempo hasta primera respuesta, estado (respondido / cotizó / cerró / sin respuesta), y próximo paso — mismas columnas que va a usar la hoja "Oportunidades" del CRM liviano de `F9-4-crm.xlsx`, para no duplicar estructura entre ambos documentos.

---

## 8. Supuestos y lo que no se pudo verificar

- No se pudo confirmar quién responde hoy las consultas, en qué horario efectivo ni en cuánto tiempo — los objetivos de §3 son una propuesta razonable a partir del horario de despacho ya conocido, no una medición.
- No se adjuntaron ejemplos reales de consultas recibidas — las respuestas modelo de §4 se construyeron a partir de los mensajes prearmados ya existentes en `F2-3-ux-copy.md`, no de casos reales.
- LEAD-02 depende de la respuesta de `F12-1` sobre si el sistema guarda las cotizaciones hoy — no se puede confirmar su alcance real hasta esa fase.
