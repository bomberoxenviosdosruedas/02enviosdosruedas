# F5-2 — Reporte de resultados (plantilla, primer ciclo aún sin datos)

**Envíos DosRuedas** · Mar del Plata, Argentina

## Por qué este documento no tiene un mes en el nombre todavía

La fuente de datos que pide esta fase — exportaciones de Google Search Console, GA4, estadísticas de Google Business Profile, Instagram y Facebook, y el conteo de conversaciones y cuentas nuevas por WhatsApp — **no existe todavía**: GA4 con eventos recién se implementa en el Sprint 1 del backlog (`BL-25`), la campaña de 90 días de `F3-1-campaign-plan.md` todavía no arrancó, y no hay un reporte anterior. Siguiendo la regla del propio enunciado ("si falta alguna fuente, decilo y trabajá con lo que haya; no estimes cifras"), este documento se entrega como **plantilla lista para completar**, no como reporte con datos.

Se renombra a `F5-2-reporte-AAAA-MM.md` (con el mes real) la primera vez que se complete con datos reales — probablemente al cierre de la semana 4-5, una vez que `BL-25` (eventos GA4) lleve al menos 2-3 semanas activo, o al cierre de los 90 días si se prefiere un primer corte más completo. Mientras tanto, este archivo sirve como el esqueleto que evita empezar de cero.

---

## 1. Resultado contra objetivo por segmento y por canal

*A completar con:* metas de `F3-1-campaign-plan.md` §1.2 vs. resultado real por segmento (a: sellers Flex, b: emprendedores, c: empresas, d: particulares) y por canal (§4).

| Segmento/Canal | Meta (F3-1 §1.2) | Resultado real | Fuente |
|---|---|---|---|
| *(sin datos aún)* | | | |

## 2. Embudo

*A completar con:* visitas → cotizaciones iniciadas → cotizaciones completadas → clics a WhatsApp → cuentas nuevas, y dónde se pierde más gente. Requiere que `BL-25` (eventos `quote_start`/`quote_complete`/`whatsapp_click`) esté en producción con al menos 2 semanas de datos para ser representativo — un embudo de 2-3 días no alcanza para sacar conclusiones.

## 3. SEO

*A completar con:* posiciones, impresiones y clics de las keywords de `F1-2-seo-audit.md` (Search Console); páginas nuevas indexadas (§1 de F3-2: contrareembolso, guía Flex, depósito); movimiento en el pack local; cantidad de reseñas de Google (contra la línea base "A VERIFICAR" de F2-4 §6 — 15 según el sitio, 17 según el documento adjunto de F1-1, sin confirmar cuál era la real al arrancar).

## 4. Atribución de cambios

*A completar con:* cruce de fechas de publicación de los ítems del backlog (`F4-0-backlog.md`, una vez que se vayan mergeando pull requests) contra las variaciones de las métricas de arriba. Separar correlación razonable (ej. "la página de contrareembolso se publicó la semana 4 y las impresiones de esa keyword subieron la semana 5") de lo que no se puede afirmar con una sola muestra.

## 5. Aciertos, fallas y aprendizajes

*A completar* una vez que haya al menos un ciclo de datos reales — no hay base para esta sección todavía.

## 6. Recomendaciones priorizadas para el mes siguiente

*A completar* a partir de las secciones anteriores.

---

## Entradas para el próximo ciclo

Vacío por ahora — se completa junto con la primera versión real de este reporte, con nuevos hallazgos con ID listos para sumarse a `F4-0-backlog.md`, y qué partes de `F1-1`/`F1-2` conviene volver a correr porque el mercado o los resultados de búsqueda cambiaron.

---

## Checklist para activar el primer reporte real

- [ ] `BL-25` (eventos GA4, UTM, helper de WhatsApp) mergeado y con al menos 2 semanas de datos.
- [ ] Search Console verificado y con al menos 28 días de datos exportables (mismo criterio que `F3-1-campaign-plan.md` semana 1).
- [ ] Ficha de Google Business Profile con categorías, horario y fotos actualizadas (`F3-1` semana 1).
- [ ] Conteo real de reseñas confirmado (F2-4 §9, no queda "A VERIFICAR").
- [ ] Planilla de WhatsApp por origen con al menos 2-4 semanas de registro (`F3-1-campaign-plan.md` §8.3).
- [ ] Al menos un ítem del backlog publicado, para poder cruzar fechas en la sección 4.

Cuando estos seis puntos estén listos, correr `marketing:performance-report` con los datos reales adjuntos y reemplazar este archivo por `F5-2-reporte-AAAA-MM.md` con el mes que corresponda.
