# Decisiones tomadas

**Envíos DosRuedas** · memoria del proyecto. Cada entrada tiene fecha, qué se decidió, y por qué — para que nadie repita la misma discusión más adelante. Se agregan entradas nuevas al final de cada sección, nunca se borran las viejas (si una decisión se revierte, se agrega una entrada nueva que lo diga, no se edita la original).

---

## 1. Decisiones del dueño

- **2026-09-18** — **Aprobación del Plan Maestro e Informe Integral de Ejecución (`INFORME-EJECUCION-ROADMAP.md`) y adopción de los valores de Fase 0 para desbloqueo operativo:**
  1. _Trayectoria de marca:_ Se fija "+7 años de trayectoria en Mar del Plata" para proteger a la marca contra riesgos de publicidad engañosa (Ley 24.240).
  2. _Volumen histórico:_ Se reemplaza la afirmación absoluta no auditada "+50k envíos" por "Miles de envíos entregados a tiempo".
  3. _Mercado Envíos Flex:_ Se descartan los términos "socio oficial/homologado/certificado" y se adopta "Servicio adaptado a los estándares de Mercado Envíos Flex".
  4. _Badge 3PL:_ Se sustituye el sello sin entidad certificadora por "Centro de Depósito y Logística Local · Friuli 1972".
  5. _Horarios de atención unificados:_ Lunes a Viernes 09:00 a 18:00 hs y Sábados 10:00 a 15:00 hs para Schema JSON-LD, Footer y Contacto.
  6. _Email público oficial:_ Se adopta `matiascejas@enviosdosruedas.com` (retirando correos de desarrollo `dev@...`).
  7. _Tarifas Flex / Depósito / Emprendedores:_ Se ratifica la tabla de `AGENTS.md` (2026) volcada a `docs/contexto/precios.md`.
  8. _Promesa Express y Cobertura:_ Franja de entrega de 60 a 90 min y cálculo automático en cotizador hasta 20 km (después deriva a WhatsApp).
  9. _Medios de pago en Contrareembolso:_ Efectivo, Transferencia y QR en el momento de entrega. Facturación: Factura C.
  10. _Tipografía de cuerpo:_ `IBM Plex Sans` como tipografía primaria (secundaria `Outfit`).
  11. _Componentes insignia:_ Opción A (Integrar): reutilizar `DoubleBezelCard` y `CTANestedPill` en cotizadores y vistas principales.
      _Motivo:_ Desbloquear el inicio inmediato del Sprint 1 técnico, la respuesta a las 9 reseñas de Google y la prospección comercial B2B.

## 2. Decisiones de método, tomadas durante la ejecución de las Fases 1 a 14 (2026-09-18)

- **No se inventaron IDs `SEO-xx`/`COMP-xx` retroactivos** para `F1-1-competitive-brief.md` y `F1-2-seo-audit.md`, que se publicaron sin ese sistema de IDs. Motivo: inventar IDs después de los hechos generaría una falsa sensación de trazabilidad — se prefirió documentar el gap y seguir usando las referencias que ya existían (`CAMP-04`, `CAMP-10/11/13/15/16`).
- **`LEGAL-01` y `LEGAL-02` (hallazgos de `F10-2-contratos.md`) no se agregaron como `BL-xx`.** Motivo: el propio enunciado de esa fase pide que cualquier cambio a `/terminos-y-condiciones` o `/politica-de-privacidad` espere la validación de un profesional antes de convertirse en un ítem de código — agregarlos al backlog de código habría sugerido que ya estaban listos para programarse.
- **`F12-2` (análisis y tablero del cotizador) queda formalmente en espera**, no se intentó. Motivo: depende de que exista la tabla `Quote` (`BL-28`, no implementada) y de que se acumulen datos reales — no hay nada que analizar todavía.
- **`F9-1` se entregó con 43 prospectos reales, no con los 60-100 que pedía el enunciado como objetivo.** Motivo: no hay un conector de Google Maps/Places disponible en esta sesión para buscar más; se prefirió entregar una lista más corta pero 100% real antes que rellenarla con negocios inventados o estimados.
- **`F10-1` no incluye una propuesta completada para un prospecto real.** Motivo: el enunciado pedía completar una propuesta a partir de una conversación real con un cliente, y no hay ninguna transcripción o nota de conversación disponible en esta sesión — inventar una habría sido fabricar una interacción con un cliente que no ocurrió.
- **La autocrítica de `DESIGN.md` §11 no se tomó como verificada al escribir `F13`.** Motivo: al re-chequear varios de sus puntos específicos contra el código real (colores, líneas de CSS, conteos de componentes), varios no coincidieron — se optó por volver a verificar todo desde cero en vez de asumir que la tabla existente era correcta. Ver `F13-design-system.md` §1 para el detalle punto por punto.
- **Los hallazgos `BL-40` a `BL-47` (Fases 6, 7 y 13) se numeraron al final del backlog, sin renumerar `BL-01` a `BL-39`.** Motivo: `F4-1-specs/` y `F4-2-prompts/` del Sprint 1 ya se habían emitido contra los números originales — renumerar habría roto esa referencia cruzada.

## 3. Cómo se agregan decisiones nuevas

Cuando el dueño responda una pregunta pendiente, o el equipo tome una decisión de método nueva: agregar una línea al final de la sección que corresponda (§1 si es del dueño, §2 si es de método/proceso), con el formato `**Fecha real** — qué se decidió. Motivo: por qué.` — nunca reemplazar una entrada anterior, y nunca dejar una decisión sin su motivo.
