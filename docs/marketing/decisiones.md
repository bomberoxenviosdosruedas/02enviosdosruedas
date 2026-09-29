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
  8. _Promesa Express y Cobertura:_ cálculo automático en cotizador hasta 20 km (después deriva a WhatsApp).
     - _Revocado 2026-09-29:_ la franja de entrega de 60 a 90 min se retiró por inexacta. Express coordina hoy una franja horaria acotada a elección, con 2 hs de anticipación mínima (corte 15:00 hs). SSoT: `src/lib/promises.ts`.
  9. _Capacidad por bulto:_ 5 kg o 40 x 40 cm sin recargo; el techo absoluto de 15 kg se coordina como bulto extra (`STANDARD_WEIGHT_KG` y `MAX_WEIGHT_KG`).
  10. _Medios de pago en Contrareembolso:_ Efectivo, Transferencia y QR en el momento de entrega. Facturación: Factura C.
  11. _Tipografía de cuerpo:_ `IBM Plex Sans` como tipografía primaria (secundaria `Outfit`).
  12. _Componentes insignia:_ Opción A (Integrar): reutilizar `DoubleBezelCard` y `CTANestedPill` en cotizadores y vistas principales.
      _Motivo:_ Desbloquear el inicio inmediato del Sprint 1 técnico, la respuesta a las 9 reseñas de Google y la prospección comercial B2B.

- **2026-09-28** — **Entrevista exhaustiva al dueño (relevamiento con Matías Cejas).** Registro canónico: `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md`.
  1. _Rendición de contrareembolso:_ el dueño niega que exista garantía de rendición inmediata. Redacción correcta: "en el día, al día siguiente o semanal, según acordado". El sitio todavía publica "rendición inmediata" en 3 lugares.
  2. _Factura A → Factura C consolidada_ en todo el sitio. Reafirmado por el dueño con mayúsculas.
  3. _LowCost no agrupa envíos de un mismo cliente._ Es programado y barato; consolidar rutas entre envíos de clientes distintos sí es real.
  4. _Friuli 1972 no es punto de retiro:_ es base logística y depósito. No hay lockers ni receptor en centro o puerto.
  5. _Flex solo Mar del Plata urbana_ (sin Batán), tarifa según plan alineada a LowCost.
  6. _E-Commerce Same Day:_ nombre comercial del 3PL, tarifa fija de `$6.000` a toda la ciudad.
  7. _E-Commerce 24HS:_ definido conceptualmente pero **sin precio**. No publicar hasta que exista el número.
     - _Revocado 2026-09-29:_ el precio existe y está confirmado en **`$3.800`/envío**. Se publica.
  8. _Recargos:_ documentados y ausentes del sitio (lluvia 30-50 % según servicio; espera `$2.100` cada 10 min con tolerancia de 10 min; paradas `+50 %` si quedan en el recorrido; reintento como envío nuevo en Express y LowCost; cobranza sin costo). El bulto extra **no tiene monto fijo publicado**.
  9. _Sin trabajo fuera de horario laboral._ La sugerencia de "+50 % nocturno" de la planilla es texto de plantilla, no política real.
  10. _Fuera de Mar del Plata:_ `$1.200 × km` de km ruta, distinto del excedente dentro del radio de 20 km.
  11. _Logística inversa sin costo:_ el retorno por rechazo en puerta no se cobra. Falta explicitarlo en TyC.
  12. _Badge de atención:_ `< 2 MIN` → `< 5 MIN`. El dueño no garantiza menos de 2 minutos.
  13. _Dirección de fotografía:_ sensación rectora **confianza y seguridad**. Postal autorizada: ramblas y Lobos de Mar, Playa Grande/Varese, Güemes y San Juan. Prohibidas: la base de Friuli 1972 y los ingresos a Batán/Sierra de los Padres.
  14. _Frase de marca aprobada:_ "Una logística pensada para tu comercio: un equipo de confianza, entregas coordinadas y la información que necesitás para tener todo bajo control. Somos la solución a tus envíos". Rechazó las cuatro propuestas.
     - _Precisión 2026-09-29 (CSV):_ existe una **segunda frase**, respuesta a la pregunta literal de eslogan: *"Tu solucion logistica o Tu Partner logistico"*. **No se combina con la anterior.**
  15. _Sin historias de éxito:_ el dueño no tiene ningún caso de éxito y no aportó logos para el carrusel. No inventar testimonios. Único dato social verificable: 5.0 estrellas con +120 valoraciones.
  16. _Estrategia:_ el mayor margen es Express, pero el servicio a escalar es **Cuenta Corriente / Plan Emprendedores**. La conversión buscada es que el visitante cotice directo en el sitio.
  17. _Plan Emprendedores:_ sin volumen mínimo, exige exclusividad, tarifas LowCost con franjas de 3 hs y corte 15:00 hs. El envío puede ser abonado por quien recibe o quien entrega. Factura C consolidada con portal del comercio.
  18. _Ciclo de tarifas:_ el dueño revisa la tabla aproximadamente **cada 6 meses**.

  _Motivo:_ el relevamiento formaliza por primera vez las definiciones de servicio, los recargos y la visión de marca en palabras del dueño. Antes vivían solo en conversaciones informales, lo que produjo claims que el sitio contradecía sin que nadie lo detectara.

- **2026-09-29** — **Incorporación del "Informe de Estrategia, Auditoría y Visión de Marca" y criterio para datos no confirmados.** El informe es una síntesis de las dos fuentes primarias, con autoridad derivada. Criterio adoptado: lo que no contradice a las fuentes primarias se documenta; lo que **agrega** (números nuevos) se documenta como pendiente de confirmación, con el mismo tratamiento que los datos de plantilla. **Ninguna fuente de síntesis puede crear una tarifa.**
  1. _Escalas de Flex por volumen: ya publicadas, sin confirmar._ La matriz **ya está en `FlexPricing.tsx`**; el informe la auditó, no la creó. Dos defectos: los Niveles 2 y 3 tienen los precios **hardcodeados** (fuera de `PriceRange` y `pricing.ts`) y **ninguna fuente del dueño respalda** `$6.500` ni `$4.500`. Decisión: no tocar los valores; migrarlos a `PriceRange` sí es seguro.
  2. _🔴 E-Commerce 24HS publicado a `"Desde $3.800/envío"`._ Tarifa hardcodeada en `app/servicios/page.tsx:183`, sin cálculo, sin `PriceRange`, con CTA activo que no lleva a ningún cotizador. **El dueño pidió el servicio pero nunca dio el precio.** Marcado como tarifa inventada; esperar su número en vez de inventar otro.
     - _Resuelto 2026-09-29:_ Matías confirmó que **`$3.800` es correcto**. El claim deja de ser inventado. Lo que sigue pendiente es técnico: migrar el número a `PriceRange`/`pricing.ts`, agregar la función de cálculo y resolver el CTA.
  3. _DropOFF sin cambio de alcance:_ el `-20 %` es una modalidad **general** (cualquier servicio, paquete listo en el hub, corte 13:00 hs), no un beneficio del 24HS ni exclusivo de Fulfillment. Cierra la ambigüedad del relevamiento anterior.
  4. _Picking por código QR_ en el 3PL: **ya publicado** y coincide con lo que el dueño describió. Sale de pendientes.
  5. _Exclusiones de mercadería_ (no declarada, sustancias prohibidas, bultos que comprometan la estabilidad vial): a incorporar en TyC.
  6. _Logística inversa de Flex a $0_ (devolución por rechazo en puerta): documentada, pendiente de TyC.
  7. _🔴 Conflicto de precio de km, NO resuelto:_ el informe afirma `$1.200`/km para periferia **y** para el excedente de Express +10 km, mientras `EXPRESS_PRICE_PER_KM` vale `1000`. Se adopta la lectura A (el `$1.200` es solo fuera de la urbana de MDQ) y se deja el código **sin tocar**, dejando constancia del riesgo: si la lectura B es la correcta, el cotizador factura `$200` menos por km en el rango 10-20 km. **Requiere respuesta del dueño antes de tocar `pricing.ts`.**
     - _Resuelto 2026-09-29:_ son **dos tarifas distintas**, no un conflicto. `$1.200 × km` es periferia; `$1.000`/km (Express) y `$700`/km (LowCost) son excedentes dentro del radio. **`pricing.ts` no se toca.**
  8. _Dominio operativo `www.logisticadosruedas.com`_ y barrio **Chauvín** del hub: a registrar en la documentación de identidad.

  _Motivo:_ el relevamiento estratégico dejó al descubierto un problema de fondo que la auditoría de copy no veía: **hay tarifas publicadas en el sitio que ninguna fuente del dueño respalda**. No es un problema de redacción, es un problema de fuente de verdad, y por eso se registra acá y no solo en el doc canónico.

- **2026-09-29** — **Incorporación del cuestionario de 31 preguntas del dueño y cierre de los dos bloqueos de precio.** El CSV (`docs/contexto/respuestas_dueno_enviosdosruedas.csv`, firmado 25/5/2026) es la fuente **más literal de voz** y la **más antigua**. Regla adoptada: para **precios** manda `.docx` / planilla; para **voz, tono, líneas rojas y nombres propios** manda el CSV. El CSV dio `$4.000` para el 24HS y el precio vigente es `$3.800`: **el CSV no invalida un precio por ser viejo, ni una fuente nueva confirma un precio por ser reciente.**
  1. _**E-Commerce 24HS: `$3.800` confirmado** por Matías, más **recolección gratis desde 10 envíos** (por debajo de 10, la recolección tiene costo y **no se publica un número** porque no está definido). El valor por km de Express **es `$1.000`**: `pricing.ts` no se toca.
  2. _**DropOFF `-20 %` confirmado por escrito** como modalidad **general** (cualquier servicio, paquete listo en el hub). El **corte de 13:00 hs** sigue sin respaldo del dueño: no se publica hasta que lo confirme.
  3. _**Flex: concepto validado, cifras no._** *"El valor del envios es el mismo que el LowCost"* y *"No se solicita minimos de envios, pero a mayor cantidad de envios diarios, mejor valor va a obtener"*. No confirma los niveles ni el `$6.500` / `$4.500`.
  4. _**40 × 30 cm vs 40 × 40 cm** (umbral de bulto): el CSV dice 40 × 30, todo lo demás dice 40 × 40. **El sitio sigue con 40 × 40** y el conflicto queda anotado como pregunta abierta.
  5. _**MailAmericas** (e-commerce internacional, 2.500-4.000 envíos semanales, satisfacción 10/10): **documentado y sin publicar.** Requiere autorización explícita, y el volumen expone la capacidad operativa. **No inventar testimonios ni logos mientras tanto.**
  6. _**Tres líneas rojas** incorporadas; la más valiosa y menos usada es *"preferimos decir que no podemos, a fallar"*: autoriza a decir que no y es el argumento de fiabilidad más fuerte del archivo. **Pendiente de publicación.**
  7. _**Voz de marca:** cinco reglas de escritura derivadas de *"Hablaria como una persona normal, trabajador, un tono medio formal pero sin exagerar"*. Se incorpora a `anti-patrones.md` §5.4. Contrapeso: la escena visual es de alto contraste y la marca **no** es informal; no aligerar el diseño sin tocar el copy.
  8. _**Competidores (CDI, MMDP, Retorno Mensajería): no se nombran** en el sitio ni en publicidad. El primero está difamado por el propio dueño; los otros dos son rivales reales.
  9. _**Tres FAQs escritas por el propio dueño** (Express, LowCost, Flex): pasan a ser la fuente primaria de la sección de FAQ, por encima de cualquier redacción actual que las parafrasee.
  10. _**No declarar un servicio "el más rentable"._** El CSV responde **LowCost** a "¿cuál es más rentable?"; el `.docx` responde **Express** a "¿qué servicio da más margen?". No es la misma pregunta. Lo que ambas confirman: **escalar Cuenta Corriente**.
  11. _**Eslogan:** hay dos respuestas distintas (*"Tu solucion logistica o Tu Partner logistico"* y *"Somos la solución a tus envíos"*) y **no se combinan**.

  _Motivo:_ el CSV es la única fuente donde el dueño escribió sin la capa de marketing. Aporta tres cosas que ninguna otra fuente tenía: **la voz de la marca, las líneas rojas y un cliente real**. Y además cerró por escrito las dos preguntas de precio que bloqueaban la decisión del 24HS. Su antigüedad obliga a ordenar el archivo: la fuente más literal no es la más nueva.

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
