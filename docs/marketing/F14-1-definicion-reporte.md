# F14-1 — Definición del reporte semanal

**Envíos DosRuedas** · Mar del Plata, Argentina
Fuentes: `F3-1-campaign-plan.md` (métricas objetivo), `F12-1-consultas.sql` (consultas que algún día alimentarán este reporte), `F9-4-crm.xlsx` (embudo comercial), `F1-1-competitive-brief.md` (competidores directos).

**Nota sobre las skills nombradas en el enunciado:** el prompt de esta fase pide usar `small-business:report-builder`, `small-business:report-pack` y `small-business:marketing-monday`. Ninguna de las tres está disponible en esta sesión (se verificó la lista de skills habilitadas antes de escribir este documento). Siguiendo la regla de esta fase de no simular el resultado de un conector o skill que no responde, este documento se escribió directamente, sin esas herramientas — el contenido que piden (definición de reporte, entrega recurrente, formato de lectura semanal) está igual, solo que redactado a mano en vez de generado por esas skills.

**Modo CSV** (regla del bloque base): no hay ninguna exportación real de Search Console, Analytics, la ficha de Google, Instagram, Facebook ni un conteo de WhatsApp adjunta a esta sesión. Este documento define el reporte y dice exactamente qué adjuntar cada lunes — no inventa un primer reporte con números de ejemplo.

---

## 1. Los 10 indicadores del reporte semanal

| # | Indicador | Qué mide exactamente |
|---|---|---|
| 1 | Visitas al sitio | Sesiones totales de la semana (lunes a domingo) |
| 2 | Cotizaciones iniciadas | Veces que alguien abrió el cotizador Express o LowCost y completó al menos el campo de origen |
| 3 | Cotizaciones completadas | Veces que el cotizador mostró un precio final (no "a consultar") |
| 4 | Clics a WhatsApp | Veces que se tocó un botón o enlace que abre WhatsApp, en cualquier página |
| 5 | Consultas entrantes | Suma de conversaciones nuevas de WhatsApp + mensajes de contacto/formulario + llamadas registradas, contadas a mano |
| 6 | Oportunidades nuevas | Filas nuevas en la hoja "Oportunidades" de `F9-4-crm.xlsx` en la semana |
| 7 | Oportunidades ganadas | Filas de esa misma hoja que pasaron a etapa "ganado" en la semana |
| 8 | Reseñas nuevas y puntaje | Cantidad de reseñas nuevas en Google Maps + el puntaje promedio actualizado |
| 9 | Alcance en redes | Suma de alcance de Instagram + Facebook de la semana (según las métricas nativas de cada plataforma) |
| 10 | Posiciones de las 5 keywords principales | Posición promedio en Google de las 5 keywords que ya identificó `F1-2-seo-audit.md` como prioritarias |

**Por qué estos 10 y no otros:** cubren las tres preguntas que más le importan al negocio semana a semana — ¿entra gente? (1, 10), ¿esa gente cotiza y contacta? (2-5), ¿esos contactos se convierten en clientes? (6-7) — más dos indicadores de salud de marca que no cambian todas las semanas pero conviene mirar igual (8-9).

## 2. Definición exacta, fuente, exportación y umbral de alerta

| # | Indicador | Definición exacta | Fuente | Cómo se exporta | Umbral de alerta |
|---|---|---|---|---|---|
| 1 | Visitas | Sesiones (no usuarios únicos) de `enviosdosruedas.com`, lunes 00:00 a domingo 23:59 | Google Analytics (o Search Console si GA4 no está implementado — ver nota de BL-25 más abajo) | Panel de Analytics → Informes → Adquisición de tráfico, filtrar por fecha, exportar CSV | Baja de más del 25% contra el promedio de las últimas 4 semanas |
| 2 | Cotizaciones iniciadas | Requiere el evento `quote_start` de GA4 (`BL-25`, no implementado hoy) | Google Analytics 4, evento `quote_start` | Exploraciones → Informe libre → filtrar evento → exportar CSV | — (no medible hasta que exista `BL-25`) |
| 3 | Cotizaciones completadas | Requiere el evento `quote_complete` de GA4 (`BL-25`, no implementado hoy) | Google Analytics 4, evento `quote_complete` | Igual que el anterior | — (no medible hasta que exista `BL-25`) |
| 4 | Clics a WhatsApp | Requiere el evento `whatsapp_click` de GA4 (`BL-25`, no implementado hoy) | Google Analytics 4, evento `whatsapp_click` | Igual que el anterior | — (no medible hasta que exista `BL-25`) |
| 5 | Consultas entrantes | Conteo manual: cuántas conversaciones nuevas (no de clientes ya conocidos) llegaron por WhatsApp, más mensajes del formulario de contacto, más llamadas si se anotan | WhatsApp Business (lista de chats), bandeja de `F9-3-respuesta-leads.md`, agenda/cuaderno de llamadas | Contar a mano cada lunes, anotar en el reporte | Menos de la mitad del promedio de las últimas 4 semanas |
| 6 | Oportunidades nuevas | Filas nuevas en la hoja "Oportunidades" de `F9-4-crm.xlsx` con fecha de esta semana | `F9-4-crm.xlsx`, hoja "Oportunidades" | Filtrar por columna de fecha, contar filas | Cero oportunidades nuevas dos semanas seguidas |
| 7 | Oportunidades ganadas | Filas de la misma hoja que cambiaron a "ganado" esta semana | `F9-4-crm.xlsx`, hoja "Oportunidades" | Igual que el anterior, filtrando por etapa | — (indicador de seguimiento, no de alerta automática: una semana sin cierres no es necesariamente un problema) |
| 8 | Reseñas nuevas y puntaje | Reseñas nuevas en la ficha de Google esta semana + puntaje promedio actualizado a hoy | Google Business Profile | Panel de la ficha → Reseñas, filtrar por fecha | Cualquier reseña de 1-3 estrellas dispara alerta inmediata (no esperar al lunes — ver `F7-reputacion.md` §7) |
| 9 | Alcance en redes | Alcance nativo reportado por Instagram + Facebook para las publicaciones de la semana | Meta Business Suite (Instagram + Facebook) | Meta Business Suite → Estadísticas → exportar o anotar el total semanal | Baja de más del 40% contra el promedio de las últimas 4 semanas |
| 10 | Posiciones de las 5 keywords | Posición promedio en Google de: "envíos moto Mar del Plata", "mensajería Mar del Plata", "envíos Flex MercadoLibre Mar del Plata", "envío express Mar del Plata", y una quinta a confirmar con el dueño según lo que más tráfico traiga en la práctica | Google Search Console | Rendimiento → filtrar por las 5 consultas → exportar CSV | Caída de más de 5 posiciones en cualquiera de las 5 |

**Nota importante:** los indicadores 2, 3 y 4 (el corazón de "¿la gente cotiza y contacta?") dependen de que se implemente `BL-25` (eventos de GA4), que hoy sigue sin programarse según `F4-0-backlog.md`. Hasta que eso exista, el reporte semanal va a tener esos tres casilleros vacíos con la nota "pendiente de BL-25" — no se estima ni se inventa un número aproximado.

## 3. Qué tiene que adjuntar el dueño cada lunes

| Archivo | De dónde sale | Pasos |
|---|---|---|
| Exportación de Analytics/Search Console | Google Analytics o Search Console | 1) Entrar con la cuenta de Google del sitio. 2) Elegir el rango "últimos 7 días" o la semana calendario pasada. 3) Exportar como CSV o Excel desde el botón de exportar del informe. |
| Captura o exportación de la ficha de Google | Google Business Profile (perfil de empresa en Google) | 1) Entrar al perfil de la empresa en Google. 2) Ir a "Reseñas". 3) Sacar una captura de pantalla de las reseñas nuevas de la semana, o anotar a mano cuántas hubo y el puntaje. |
| Estadísticas de Meta | Meta Business Suite | 1) Entrar a Meta Business Suite. 2) Ir a "Estadísticas" (Insights). 3) Anotar el alcance total de la semana de Instagram y de Facebook por separado, o exportarlo si la opción está disponible. |
| Conteo de WhatsApp | A mano, desde el celular o la cuenta de WhatsApp Business | Contar cuántas conversaciones nuevas (de gente que no había escrito antes) hubo en la semana — no hace falta ninguna herramienta, es mirar la lista de chats y contar. |
| Hoja de CRM actualizada | `F9-4-crm.xlsx` | Si el dueño o alguien del equipo actualizó la hoja "Oportunidades" durante la semana (rutina que ya define `F9-4-crm-guia.md`), no hace falta ningún paso extra — el archivo ya tiene lo necesario. |

## 4. Formato de salida del reporte (una página, todos los lunes igual)

Cada reporte semanal (`F14-reporte-AAAA-SS.md`, donde AAAA es el año y SS el número de semana) sigue esta misma estructura, sin cambiarla de semana a semana:

1. **Tabla de los 10 indicadores**, con el número de esta semana, el de la semana anterior, y una flecha de si subió, bajó o se mantuvo.
2. **Qué cambió:** 2-4 líneas señalando los movimientos más grandes de la tabla, sin interpretar todavía.
3. **Por qué creemos que cambió:** una hipótesis por cada movimiento señalado en el punto anterior — nunca una afirmación categórica, porque casi nunca hay forma de confirmarla con los datos disponibles (ej. "probablemente por el feriado del lunes" es una hipótesis razonable, no un hecho verificado).
4. **Qué hacen los competidores:** una revisión web breve (no una auditoría completa) de los 4 competidores directos que ya identificó `F1-1-competitive-brief.md` (MMDP, DAR Logística, Mar del Motos, Uber Envíos) — ¿cambiaron algo visible en su sitio, sus redes o sus precios publicados esta semana? Si no hay nada nuevo, el reporte dice explícitamente "sin cambios visibles esta semana", no se omite la sección.
5. **Las tres acciones de la semana:** las tres cosas más importantes para hacer en los próximos 7 días, en base a lo que muestra el reporte — priorizadas, no una lista larga.

## 5. Cómo se repite igual cada semana, y la tarea programada

Este documento (`F14-1-definicion-reporte.md`) es la plantilla fija: cualquier reporte semanal futuro debe seguir exactamente esta lista de 10 indicadores, estas fuentes, y esta estructura de 5 partes — no se redefine cada vez. Si en algún momento cambia qué se mide o cómo (por ejemplo, cuando `BL-25` se implemente y los indicadores 2-4 pasen a tener datos reales), se actualiza este mismo documento, no se empieza un formato nuevo.

**Se ofrece dejar esto como tarea programada semanal** (todos los lunes a la mañana), que recuerde juntar los 5 archivos de §3 y arme el reporte de la semana siguiendo esta plantilla — a confirmar con el dueño si la quiere activa, y con qué hora exacta.

---

## 6. Supuestos y lo que no se pudo verificar

- No hay ninguna exportación real adjunta a esta sesión — todo lo de arriba es la definición del reporte, no un primer reporte con números.
- Los umbrales de alerta (25%, 40%, 5 posiciones, etc.) son puntos de partida razonables para un negocio de este tamaño, no un cálculo estadístico sobre datos históricos reales — conviene ajustarlos después de ver 2-3 meses de reportes reales.
- La quinta keyword del indicador 10 queda "a confirmar con el dueño" porque `F1-2-seo-audit.md` identificó varias candidatas sin un orden de prioridad final entre la 4ª y la 5ª.
- No se creó ningún archivo `F14-reporte-AAAA-SS.md` todavía — no hay datos reales de ninguna semana para llenarlo.
