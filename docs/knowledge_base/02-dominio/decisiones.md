# Decisiones Tomadas — Envíos DosRuedas

> **Fuente:** `docs/marketing/decisiones.md` (memoria del proyecto).
> **Formato:** Cada entrada tiene fecha, qué se decidió, y por qué. Se agregan al final de cada sección, nunca se borran las viejas (si se revierte, se agrega entrada nueva que lo diga, no se edita la original).

---

## 1. Decisiones del Dueño

### 2026-09-18 — Aprobación del Plan Maestro e Informe Integral de Ejecución (`INFORME-EJECUCION-ROADMAP.md`) y adopción de los valores de Fase 0 para desbloqueo operativo:

1. **Trayectoria de marca:** Se fija "+7 años de trayectoria en Mar del Plata" para proteger a la marca contra riesgos de publicidad engañosa (Ley 24.240).
2. **Volumen histórico:** Se reemplaza la afirmación absoluta no auditada "+50k envíos" por "Miles de envíos entregados a tiempo".
3. **Mercado Envíos Flex:** Se descartan los términos "socio oficial/homologado/certificado" y se adopta "Servicio adaptado a los estándares de Mercado Envíos Flex".
4. **Badge 3PL:** Se sustituye el sello sin entidad certificadora por "Centro de Depósito y Logística Local · Friuli 1972".
5. **Horarios de atención unificados:** Lunes a Viernes 09:00 a 18:00 hs y Sábados 10:00 a 15:00 hs para Schema JSON-LD, Footer y Contacto.
6. **Email público oficial:** Se adopta `matiascejas@enviosdosruedas.com` (retirando correos de desarrollo `dev@...`).
7. **Tarifas Flex / Depósito / Emprendedores:** Se ratifica la tabla de `AGENTS.md` (2026) volcada a `docs/contexto/precios.md`.
8. **Promesa Express y Cobertura:** Cálculo automático en cotizador hasta 20 km (después deriva a WhatsApp).
    - **Revocado 2026-09-29:** la franja de entrega de 60 a 90 min se retiró por inexacta. Express coordina hoy una franja horaria acotada a elección, con 2 hs de anticipación mínima (corte 15:00 hs). Fuente de verdad: `EXPRESS_WINDOW` / `EXPRESS_WINDOW_SHORT` en `src/lib/promises.ts`.
9. **Capacidad por bulto:** un solo umbral — 5 kg o 40 x 40 cm sin recargo. Pasado ese umbral, el bulto se coordina aparte con recargo desde $1.950 según el servicio. **Sin techo de peso publicado** (`STANDARD_WEIGHT_KG` y `STANDARD_BULLET_DIMENSIONS_CM` en `src/lib/promises.ts`). Sustituye a la decisión anterior, que publicaba un techo de 15 kg: el dueño confirmó el 2026-09-30 que ese número no tiene respaldo — el CSV responde "todo lo que pueda ser llevado en moto", sin cifra — y que la capacidad es 5 kg. Constante `MAX_WEIGHT_KG` eliminada; `src/lib/copy-guard.test.ts` bloquea el número.
10. **Medios de pago en Contrareembolso:** Efectivo, Transferencia y QR en el momento de entrega. Facturación: Factura C.
11. **Tipografía de cuerpo:** `IBM Plex Sans` como tipografía primaria (secundaria `Outfit`).
12. **Componentes insignia:** Opción A (Integrar): reutilizar `DoubleBezelCard` y `CTANestedPill` en cotizadores y vistas principales.
    - *Motivo:* Desbloquear el inicio inmediato del Sprint 1 técnico, la respuesta a las 9 reseñas de Google y la prospección comercial B2B.

### 2026-09-28 — Entrevista exhaustiva al dueño (relevamiento con Matías Cejas)

> **Registro completo:** `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md`. Fuentes primarias: `docs/contexto/Entrevista Exhaustiva y Visión de Marca - Envíos DosRuedas.docx` y `docs/contexto/Relevamiento completo envío dosruedas.xlsx`.

13. **Rendición de contrareembolso:** El dueño **niega explícitamente** que exista garantía de rendición inmediata. La redacción correcta es "en el día, al día siguiente o semanal, según acordado". El sitio publica "rendición inmediata" en 3 lugares. *Pendiente de corrección.*
14. **Factura A → Factura C consolidada** en todo el sitio, incluida la cuenta corriente. El dueño lo reafirmó con mayúsculas: "NO REALIZAMOS FACTURA A!".
15. **LowCost no agrupa envíos de un mismo cliente.** Es un envío programado barato; consolidar rutas entre envíos de clientes distintos sí es la mecánica real. La página del cotizador LowCost mantiene "ruteo consolidado" porque es técnicamente preciso.
16. **Friuli 1972 no es punto de retiro.** Es base logística y depósito. No hay lockers ni receptor en centro o puerto.
17. **Flex es solo Mar del Plata urbana** (sin Batán). Tarifa según plan, alineada a LowCost.
    - **Precisión 2026-09-29 (CSV):** *"Cubrimos todo mar del plata (no cubrimos zonas aledañas)"*. No es solo "sin Batán": es **toda la zona urbana de MDQ y nada afuera**. Un destino en Camet o San Patricio **no** es cliente de Flex. La mención de "y Batán" era el caso particular de una regla más amplia.
18. **E-Commerce Same Day:** nombre comercial del 3PL, con tarifa fija de `$6.000` a toda la ciudad. El "3PL" describe la operación; lo que compra el cliente es Same Day.
19. **E-Commerce 24HS:** el dueño lo define conceptualmente pero **no da precio**. No se publica el servicio hasta que exista el número.
    - **Revocado 2026-09-29:** el precio **sí existe y está confirmado** en `$3.800`/envío, más **recolección gratis desde 10 envíos**. Ver entrada del 2026-09-29, punto 40.
20. **Recargos documentados** y hoy ausentes del sitio: lluvia 30 % a 50 % según servicio (50 % Express y LowCost); tiempo de espera `$2.100` cada 10 min con tolerancia de 10 min; paradas adicionales `+50 %` del envío si quedan dentro del recorrido, o como envío completo si no; reintento como envío nuevo en Express y LowCost; sin recargo por gestión de cobranza. **El bulto extra no tiene monto fijo publicado.**
21. **No se trabaja fuera del horario laboral.** Sin excepción, sin tarifa nocturna. La planilla sugería "+50 % nocturno": es texto de plantilla, no una política real.
22. **Fuera de Mar del Plata:** `$1.000 × km` de km ruta (`PERIPHERY_PRICE_PER_KM`, cifra corregida el 2026-09-30, ver #70). Tarifa aparte, distinta del excedente dentro del radio de 20 km.
23. **Logística inversa sin costo:** el retorno por rechazo en puerta no se cobra y se rinde generalmente al día siguiente. Falta explicitarlo en TyC.
24. **Badge de atención:** `< 2 MIN` → `< 5 MIN`. El dueño no garantiza menos de 2 minutos.
25. **Dirección de fotografía:** sensación rectora **confianza y seguridad**. Postal autorizada: ramblas y Lobos de Mar, costa de Playa Grande/Varese, Güemes y San Juan. **Prohibidas** como postal: la base de Friuli 1972 y los ingresos a Batán y Sierra de los Padres.
26. **Frase de marca aprobada:** "Una logística pensada para tu comercio: un equipo de confianza, entregas coordinadas y la información que necesitás para tener todo bajo control. Somos la solución a tus envíos". Rechazó las cuatro frases propuestas.
    - **Segunda frase, de otra fuente (CSV, pregunta 2):** *"Tu solucion logistica o Tu Partner logistico"*. Es la única respuesta del dueño a la pregunta **literal** de eslogan. Está sin usar en el sitio. **No combinarla con la anterior:** la primera vende un resultado, la segunda una relación.
27. **Sin historias de éxito:** el dueño no tiene ningún caso de éxito que contar y no aportó logos para el carrusel. No inventar testimonios. Único dato social verificable: 5.0 estrellas con más de 120 valoraciones.
28. **Estrategia:** el mayor margen es Express, pero el servicio a escalar es **Cuenta Corriente / Plan Emprendedores**. La conversión buscada es que el visitante **cotice directo en el sitio**; igual, la mayoría de los que escriben por WhatsApp concreta el envío.
29. **Plan Emprendedores:** sin volumen mínimo, exige exclusividad, accede a tarifas LowCost con franjas de 3 hs y corte 15:00 hs. El envío puede ser abonado por quien recibe **o** quien entrega. Factura C consolidada semanal, quincenal o mensual, con portal del comercio.
30. **Vida útil de la tabla de tarifas:** el dueño revisa aproximadamente **cada 6 meses** (o menos). Es el ciclo de mantenimiento de `PriceRange`.

### 2026-09-29 — Incorporación del "Informe de Estrategia, Auditoría y Visión de Marca" y tratamiento de sus datos no confirmados

> **Fuente nueva:** `docs/contexto/Informe de Estrategia, Auditoría y Visión de Marca - Envíos DosRuedas.docx`. Es una **síntesis** de las dos fuentes primarias, con autoridad derivada.
> **Criterio adoptado:** lo que el informe aporta y que las fuentes primarias no contradicen, se documenta. Lo que **agrega** (números nuevos) se documenta marcado como pendiente de confirmación, con la misma autoridad que los datos de plantilla. Ninguna fuente de síntesis puede crear una tarifa.

31. **Escalas de Flex por volumen: ya publicadas, sin confirmar.** La matriz (Nivel 1 Crecimiento / 2 Pro con tope `$6.500` en Z4-Z5 / 3 Elite a `$4.500` planos, liquidación quincenal) **ya está en `FlexPricing.tsx`**, no es una propuesta pendiente: el informe estratégico la auditó, no la creó. Dos defectos heredados: (a) los Niveles 2 y 3 tienen los precios **hardcodeados en el componente**, fuera de `PriceRange` y `pricing.ts`, violando la fuente única; (b) **ninguna fuente del dueño respalda `$6.500` ni `$4.500`**. Decisión: **no tocar los valores** hasta que Matías responda. Moverlos a `PriceRange` sí es deseable, y es seguro, porque conserva los mismos números.
32. **DropOFF sin cambio de alcance:** se confirma que el `-20 %` es una modalidad **general** (cualquier servicio, paquete listo en el hub, corte 13:00 hs), **no** un beneficio del E-Commerce 24HS ni exclusivo de Fulfillment. Esto cierra la ambigüedad que había quedado abierta el 2026-09-29.
33. **E-Commerce 24HS: precio publicado que el dueño nunca dio.** El sitio publica `"Desde $3.800/envío"` (`app/servicios/page.tsx:183`), hardcodeado, sin función de cálculo, sin `PriceRange` y con CTA activo ("Seleccionar 24HS") que no lleva a ningún cotizador. El dueño pidió el servicio pero **no dio ningún precio** en ninguna de sus tres fuentes. Decisión: marcarlo 🔴 como tarifa inventada y **esperar su número antes de tocar nada**. No se "corrige" inventando otro valor.
    - **Resuelto 2026-09-29:** Matías confirmó que **`$3.800` es el precio correcto**. El sitio no publica una tarifa inventada. Lo que queda pendiente es **técnico**, no de negocio: migrar el número a `PriceRange`/`pricing.ts`, agregar la función de cálculo, y resolver el CTA que no lleva a ningún cotizador. Ver punto 40.
34. **Picking por código QR** en el 3PL: **ya publicado** en `/servicios`, `/servicios/deposito-fulfillment` y `EmprendedoresFeatures`, y coincide con lo que el dueño describió. Sale de la lista de pendientes.
35. **Exclusiones de mercadería** (no declarada, sustancias prohibidas, bultos que comprometan la estabilidad vial): a incorporar en `/terminos-y-condiciones`.
36. **Logística inversa de Flex a $0** (devolución por rechazo del comprador en puerta): documentada, pendiente de TyC.
37. **🔴 Conflicto de precio de km, NO se resuelve sin el dueño:** el informe afirma `$1.200`/km para periferia **y** para el excedente de Express +10 km, mientras que `EXPRESS_PRICE_PER_KM` vale `1000`. Se adopta la lectura A (el `$1.200` es solo para fuera de la urbana de MDQ) y se **deja el código sin tocar**, dejando constancia del riesgo: si la lectura B es la correcta, el cotizador factura `$200` menos por km en el rango 10-20 km. Registrado en `entrevista-dueno-2026-09-28.md` §3.1 y §9.2 punto 2. **Requiere respuesta del dueño antes de tocar `pricing.ts`.**
    - **Resuelto 2026-09-29:** Matías confirmó que **`$1.000` es el valor correcto** y que `$1.200` es exclusivamente la tarifa de periferia. **`pricing.ts` no se toca.** El riesgo que este punto dejaba abierto ya no existe. Ver punto 41.
38. **Dominio operativo `www.logisticadosruedas.com`** y barrio **Chauvín** del hub de Friuli 1972: a registrar en la documentación de identidad.

### 2026-09-29 — Incorporación del cuestionario de 31 preguntas (CSV, firmado 25/5/2026) y cierre de los dos bloqueos de precio

> **Fuente nueva:** `docs/contexto/respuestas_dueno_enviosdosruedas.csv`. 31 preguntas contestadas por el dueño en un formulario de negocio, **firmado el 25/5/2026**.
>
> **Orden de autoridad.** Esta fuente es la **más literal de voz** (es donde el dueño escribió en minúsculas, sin la capa de marketing) pero la **más antigua: ~4 meses**. Consecuencia práctica: **para voz, líneas rojas, nombres propios y el cliente estrella, el CSV manda; para precios, manda `.docx` y planilla.** El CSV dio `$4.000` para el 24HS y el precio real hoy es `$3.800`: no usar el CSV para ese número.
>
> **Regla general que se adopta:** *ninguna fuente nueva crea una tarifa por ser más reciente, ni la más antigua deja de valer por vieja.* Cuando dos fuentes se contradicen, se documentan las dos y se escala.

39. **Regla de antigüedad de fuentes.** Se adopta que el orden de preferencia para **precios y tarifas** es `.docx` / planilla > informe estratégico > CSV. Para **voz, tono, líneas rojas, nombres propios y competidores**, el CSV es la fuente más literal. Un dato del CSV que contradiga un precio vigente **no invalida** el precio: se anota como histórico.
40. **E-Commerce 24HS: `$3.800`/envío confirmado, y recolección gratis desde 10 envíos.** Matías respondió las dos preguntas bloqueantes del 2026-09-29:
    - **El `$3.800` que el sitio publica es correcto.** No hay tarifa inventada. El sitio queda autorizado a mostrarlo.
    - **El valor por km de Express es `$1.000`**, tal como está en `pricing.ts`.
    - **Regla adicional del CSV:** *"recoleccion gratuita si son mas de 10 envios"*. Por debajo de 10 envíos, la recolección **tiene costo**, y ese monto no está definido en ninguna fuente. **No publicar un número de recolección.** Sí se puede publicar la regla del descuento desde 10 envíos.

    *Lo que sigue pendiente es técnico, no de negocio:* el `$3.800` vive hardcodeado en `app/servicios/page.tsx:183`, sin `ServiceType`, sin rango en `PriceRange`, sin función en `pricing.ts`, y el CTA "Seleccionar 24HS" no lleva a ningún cotizador. Es el único servicio con precio confirmado y sin calculadora.
41. **Conflicto del `$1.200`/km cerrado.** Son **dos tarifas distintas**, no un conflicto: el excedente dentro del radio es `$1.000`/km (Express) y `$700`/km (LowCost), y la periferia se cobra aparte. `EXPRESS_PRICE_PER_KM = 1000` queda como está. El informe estratégico se había inventado un "texto web heredado" que nunca existió en el sitio. Registrado en `entrevista-dueno-2026-09-28.md` §3.1. ⚠️ **La parte de este punto que daba `$1.200` a la periferia estaba equivocada y quedó desmentida por #70**; la parte del excedente sigue vigente.
42. **DropOFF: `-20 %` es modalidad general, confirmado por escrito.** *"obtene un 20% de descuento en la tarifa final"*, **cualquier servicio**, paquete listo en el hub. Esto **desvía** el encuadre de `.docx` ("aplica únicamente a la modalidad E-Commerce 24HS") y de la planilla: no es un beneficio del 24HS ni exclusivo de Fulfillment. El **corte de 13:00 hs** sigue sin respaldo del dueño: viene del informe estratégico. Decisión: publicar el `-20 %` y el alcance general; **no publicar la hora de corte** hasta que Matías la confirme.
43. **Flex: el dueño validó el concepto, no los números.** Verbatim: *"El valor del envios es el mismo que el LowCost"* y *"No se solicita minimos de envios, pero a mayor cantidad de envios diarios, mejor valor va a obtener"*. Confirma base LowCost, descuento por volumen y ausencia de mínimo. **No confirma** los niveles 1-2-3, la liquidación quincenal, el retiro bonificado, la segunda visita gratis, ni el `$6.500` / `$4.500`. Sigue en la regla del punto 31: no tocar los valores sin su respuesta.
44. **DropOFF y límites de bulto: se registra el conflicto de dimensiones, sin resolverlo.** El CSV dice *"mayor a 5kg y mas de **40x30cm**"*. Todas las demás fuentes y todo el código usan **40 × 40 cm**. Diez centímetros en el umbral que dispara el recargo. **Decisión: el sitio sigue con 40 × 40** (es el valor que el código ya usa y el que está publicado), y el 40 × 30 queda anotado como pendiente de confirmación. No es un cambio de código: es una pregunta abierta para Matías.
45. **Cliente estrella: MailAmericas. No se publica sin autorización.** El CSV lo nombra: e-commerce internacional, **2.500-4.000 envíos semanales**, satisfacción 10/10. Es el mayor volumen de la empresa y el mejor argumento de prueba social disponible. **Decisión: queda documentado y sin publicar**, por dos razones: (a) el dueño no dio autorización explícita; (b) revelar el volumen operativo expone la capacidad máxima de la flota. El punto 27 sigue vigente en su formato (no hay testimonios ni casos de éxito publicados), pero el material real **existe** y espera permiso.
46. **Corrección al punto 27:** el dueño dijo *"NO JAJA"* cuando se le pidió una anécdota de cliente (`.docx`, sep 2026), y en el CSV no dio ninguna historia, **pero sí nombró un cliente concreto**. La ausencia de relato no es ausencia de cliente. La distinción importa para cuando se pida prueba social: no hay historia contada, hay un dato de clientes.
47. **Líneas rojas de la marca, incorporadas.** Pregunta 31 del CSV, verbatim: *"No realizamos transporte de productos ilegales, no toleramos faltas de respeto hacia nuestros repartidores. No tomamos envios si no tenemos disponibilidad para cubrirlo, preferimos decir que no podemos, a fallar."* Tres reglas. La tercera es **la más valiosa y la menos usada**: autoriza a la empresa a **decir que no**, y es el argumento de fiabilidad más fuerte disponible, en un mercado donde todos prometen llegar siempre. Incorporada a `00-negocio/voz-y-lineas-rojas.md` §12 y `entrevista-dueno-2026-09-28.md` §4.9 y §11.1. **Pendiente de publicación en el sitio.**
48. **Voz de marca: cinco reglas de escritura derivadas de la pregunta 30.** *"Hablaria como una persona normal, trabajador, un tono medio formal pero sin exagerar"*. Se traduce en: tono medio formal, sin exagerar, como una persona normal (prueba de laurreta), trabajador y no corporativo, y breve con una sola idea por frase. Incorporadas a `00-negocio/voz-y-lineas-rojas.md` §12. Contrapeso explícito: la escena visual es de alto contraste y la marca **no** es informal; el tono medio formal es correcto para un B2B que factura contrareembolso. **No aligerar el diseño sin tocar también el copy.**
49. **Competidores: información interna, no material de publicación.** El dueño nombró tres: **CDI** (*"un grupo de repartidores, con mala fama, con poca responsabilidad"*), **MMDP** (*"uno de los lideres en la ciudad"*) y **Retorno Mensajería** (la más antigua de la ciudad). Decisión: **no se nombra ninguno en el sitio ni en publicidad.** El primero está difamado por el propio dueño y eso no se replica; los otros dos son rivales reales. Registrado en `00-negocio/voz-y-lineas-rojas.md` §12.
50. **Objetivo a 6 meses declarado por escrito** (pregunta 22 del CSV): **aumentar la cantidad de envíos, aumentar la flota y duplicar clientes e-commerce (3PL)**. Su lectura operativa: el cotizador es la prioridad (bajar la fricción se paga en volumen), y si la flota no crece el mensaje de "prioridad" es falso en temporada alta. **Confirma** el punto 28: el objetivo es escalar Cuenta Corriente / 3PL, no el margen unitario.
51. **FAQ escritas por el propio dueño, todavía sin publicar.** El CSV pide la FAQ más común de cada servicio y él las respondió:
    - **Express:** *"Se puede entregar en un horario Puntual? No, unicamente se trabaja con rangos horarios de entrega de 3hs de espaciado, por ejemplo 10 a 13hs."*
    - **LowCost:** *"Se puede elegir horario? No, las entregas lowcost no se puede elegir rango horario de entrega, se entrega en el transcurso del dia antes de 19hs."*
    - **Flex:** *"Tienen minimo de envios? No, no tenemos minimo de envios, pero a mayor cantidad de envios diarios obtenes mejores beneficios en el valor del envio."*

    Son **las respuestas textuales del dueño a las preguntas frecuentes reales**. Deben ser la fuente primaria de la sección de FAQ del sitio, en lugar de cualquier redacción actual que las parafrasee.
52. **Beneficio principal de Express, textual:** *"Poder elegir un rango horario de entrega, ayuda a poder realizar diferentes gestiones que tengan un horario limite."* Es la mejor frase de valor de Express del archivo: concreta, sin superlativo, y explica el servicio en una línea. **Candidata directa a hero o subheadline**, pendiente de aprobación.
53. **Stock del 3PL: límite explícito.** *"Almacenamos unicamente productos pequeños/medianos, en un stock limitado."* El sitio publica el servicio sin esta restricción. **Publicar el límite**, no omitirlo: es la línea entre "guardamos tu mercadería" y "somos un depósito".
54. **Indemnización: la planilla contradice al dueño y queda registrada como [PLANTILLA].** La pestaña 01.8 conserva *"Garantía e Indemnización: cobertura del 70 % del valor declarado"*. El dueño respondió **"No"** a la pregunta de política de seguros. El texto de la planilla es boilerplate que él no respondió. **Prohibido publicar 70 % de indemnización bajo ningún supuesto.** El sitio hoy no tiene ese claim, así que no hay nada que corregir: queda la prohibición.
55. **3PL: contrareembolso sin cargo, confirmado por el CSV** (pregunta 21): *"Si realizamos entregas contrareembolso y no cobramos ningun extra por este servicio."* Coincide con el `.docx`. `$0` comisión confirmado por dos fuentes.
56. **Same Day `$6.000` confirmado por el `.docx`, no por el CSV.** El CSV dice *"Tarifa plana a toda la ciudad"* sin número. `SAME_DAY_FIXED_PRICE = 6000` en `promises.ts` queda respaldado.
57. **Eslogan: hay dos respuestas distintas y ninguna se descarta.** Ver punto 26 y su precisión. Se registra la existencia de dos frases incompatibles para que nadie las combine por accidente.
58. **Declarar un servicio "el más rentable": prohibido.** Las dos fuentes fiables se contradicen y **no preguntan lo mismo**: el CSV (mayo) responde **LowCost** a *"¿Cuál es tu servicio más rentable?"*; el `.docx` (sep) responde **Express** a *"¿Qué servicio te da más margen?"*. Rentable ≠ margen: un servicio barato que rota mucho puede ser más rentable en total. **Lo que las dos coinciden: el dueño quiere escalar Cuenta Corriente.** El sitio **no publica** un favorito. Documentado en `entrevista-dueno-2026-09-28.md` §12.
59. **2026-09-29 — Corrección: el bulto extra "desde $1.950" es del dueño, no plantilla.** Revierte lo dicho en la entrevista §3/§9.3 y en `00-negocio/voz-y-lineas-rojas.md` §12. Motivo: re-extraída la planilla, `03!C6` es celda de respuesta (relleno `FFDCE6F1`) con *"Desde $1950"*. Queda en `BULK_EXTRA_FROM_ARS` y publicado en `/cotizar`.
60. **2026-09-29 — Corrección de #32 y #42: DropOFF aplica solo al E-commerce 24HS.** Motivo: la planilla (sep-2026) responde *"Solo en E-commerce 24HS"* (`01!E13`) y manda sobre el CSV de mayo según el orden de autoridad de la propia KB. #32 y #42 habían invertido ese orden.
61. **2026-09-29 — Corrección de #54: el 70 % de indemnización es respuesta del dueño, en conflicto con su "No" del `.docx`.** Motivo: `01!E21` es celda de respuesta (*"el 70% del valor del producto"*). No es plantilla. Pasa a `01-fuentes-dueno/conflictos-abiertos.md` #1; mientras tanto sigue sin publicarse.
62. **2026-09-29 — Corrección de #14 y #10: el dueño nunca escribió "Factura C".** Motivo: en el `.docx` solo dice *"NO REALIZAMOS FACTURA A!"*; "Factura C" aparece en el texto viejo del sitio que le mostraron y en el informe estratégico. Liquidaciones: *"A coordinar con cada cliente"* (`01!E17`). Se publica "No emitimos Factura A" y el tipo de factura queda como conflicto abierto #2.
63. **2026-09-29 — Corrección de #41: la periferia no tiene lista cerrada de barrios.** Motivo: *"No hay zonas establecidas con limites"* (`01!E18`). La lista Félix U. Camet… San Jacinto es la de fricción del mapa (`.docx` §2), reinterpretada por el informe. La tarifa `$1.200` por km de ruta que este punto daba por firme quedó **desmentida por #70**.
64. **2026-09-29 — Productos prohibidos y 2ª visita en zonas cercanas son respuestas del dueño.** Motivo: `01!E22` (*"Liquidos, tortas, productos mal embalados, cosas ilegales, animales"*) y `03!D10` (*"Zonas cercanas a veces realizamos 2da visita sin costo"*) son celdas de respuesta; `00-negocio/voz-y-lineas-rojas.md` §12 las marcaba [PLANTILLA].
65. **2026-09-29 — Carrusel de clientes aprobado tal como está.** Motivo: *"Los que estan por ahora esta bien"* (`01!E6`). La entrevista §8 decía que la respuesta había venido vacía.
66. **2026-09-29 — Cotizador único, pedido del dueño.** Revierte la indicación de la entrevista §7 ("no lo resuelvas con un cotizador único sin su autorización"). Motivo: el dueño lo dio como principal objeción de clientes nuevos (`01!E7`). `/cotizar` es único; `/cotizar/express` y `/cotizar/lowcost` redirigen ahí.
67. **2026-09-29 — Seis servicios en la vista pública.** Express, LowCost, Flex, Cuenta Corriente Flexible, E-commerce 24HS y E-commerce Same Day. Motivo: pedido del dueño de dividir el 3PL (`01!E11`) y decisión del mismo día de fusionar Plan Emprendedores en Cuenta Corriente. `/servicios/plan-emprendedores` y `/servicios/envios-contrareembolso` redirigen (308).
68. **2026-09-29 — Nueva propuesta de valor del dueño sin usar: "El motor de tu última milla".** Motivo: respuesta de `01!E5` (*"la cambiaría por El motor de tu última milla / Somos la solución a tus envíos"*). Registrada; su uso en la home queda para una tarea de copy.
69. **2026-09-30 — La capacidad por bulto publica un solo umbral y ningún techo.** Motivo: el dueño confirmó que **5 kg** es el valor correcto. La constante `MAX_WEIGHT_KG = 15` no lo respaldaba ninguna fuente suya: el 15 kg venía solo del `.docx`, siempre como pregunta sin respuesta registrada o como aserción del propio `.docx` — la misma clase de número viejo que él ya corrigió ahí (*"60-90 min: ESTO ES FALSO"*). Lo que sí respondió, textual, fue *"todo lo que pueda ser llevado en moto"* (CSV, pregunta 4), **sin cifra**. Y publicar un techo rompía el recargo: con el máximo en 5 kg, *"más de 5 kg suma $1.950"* se volvía imposible. **Constante eliminada**; el copy dice *"hasta 5 kg o 40 × 40 cm sin recargo; pasado ese umbral, se coordina aparte"*. `src/lib/copy-guard.test.ts` bloquea el número. Desmentida la lectura de #44 solo en la parte del techo, no en la del 40 × 30 cm, que sigue abierto.
70. **2026-09-30 — La periferia se cobra a `$1.000` por km de ruta, no `$1.200`.** Motivo: el dueño confirmó `$1.000`. **Desmentidas las decisiones #22, #41 y #63**, que habían tomado `$1.200` del cuestionario (`.docx` §6) y de la planilla (`01!E10`, `01!E19`) —los dos dicen `$1.200` literal— y bajado el código, que era el error. Se corrigió la KB, el test de `/cotizar` y `public/llms-full.txt` para dejar de publicar `$1.200`. **La contradicción con esas dos fuentes queda viva y es deliberada:** la respuesta del dueño es posterior y manda. ⚠️ No "armonices" el código con el `.docx` la próxima vez.

---

## 2. Decisiones de Método (Tomadas Durante Ejecución Fases 1-14, 2026-09-18)

- **No se inventaron IDs `SEO-xx`/`COMP-xx` retroactivos** para `F1-1-competitive-brief.md` y `F1-2-seo-audit.md`, que se publicaron sin ese sistema de IDs. *Motivo:* inventar IDs después de los hechos generaría una falsa sensación de trazabilidad — se prefirió documentar el gap y seguir usando las referencias que ya existían (`CAMP-04`, `CAMP-10/11/13/15/16`).

- **`LEGAL-01` y `LEGAL-02` (hallazgos de `F10-2-contratos.md`) no se agregaron como `BL-xx`.** *Motivo:* el propio enunciado de esa fase pide que cualquier cambio a `/terminos-y-condiciones` o `/politica-de-privacidad` espere la validación de un profesional antes de convertirse en un ítem de código — agregarlos al backlog de código habría sugerido que ya estaban listos para programarse.

- **`F12-2` (análisis y tablero del cotizador) queda formalmente en espera**, no se intentó. *Motivo:* depende de que exista la tabla `Quote` (`BL-28`, no implementada) y de que se acumulen datos reales — no hay nada que analizar todavía.

- **`F9-1` se entregó con 43 prospectos reales, no con los 60-100 que pedía el enunciado como objetivo.** *Motivo:* no hay un conector de Google Maps/Places disponible en esta sesión para buscar más; se prefirió entregar una lista más corta pero 100% real antes que rellenarla con negocios inventados o estimados.

- **`F10-1` no incluye una propuesta completada para un prospecto real.** *Motivo:* el enunciado pedía completar una propuesta a partir de una conversación real con un cliente, y no hay ninguna transcripción o nota de conversación disponible en esta sesión — inventar una habría sido fabricar una interacción con un cliente que no ocurrió.

- **La autocrítica de `DESIGN.md` §11 no se tomó como verificada al escribir `F13`.** *Motivo:* al re-chequear varios de sus puntos específicos contra el código real (colores, líneas de CSS, conteos de componentes), varios no coincidieron — se optó por volver a verificar todo desde cero en vez de asumir que la tabla existente era correcta. Ver `F13-design-system.md` §1 para el detalle punto por punto.

- **Los hallazgos `BL-40` a `BL-47` (Fases 6, 7 y 13) se numeraron al final del backlog, sin renumerar `BL-01` a `BL-39`.** *Motivo:* `F4-1-specs/` y `F4-2-prompts/` del Sprint 1 ya se habían emitido contra los números originales — renumerar habría roto esa referencia cruzada.

- **2026-09-29 — La KB se reestructuró y las fuentes del dueño se re-extrajeron por código.** Motivo: las transcripciones `.md` de `docs/contexto/` agregaban y omitían datos, y ocho afirmaciones de la KB contradecían celdas de respuesta del dueño. Las extracciones fieles viven en `01-fuentes-dueno/` y marcan qué celda es respuesta. Las correcciones de negocio van como #59-#68, sin editar las entradas viejas.

---

## 3. Cómo Se Agregan Decisiones Nuevas

Cuando el dueño responda una pregunta pendiente, o el equipo tome una decisión de método nueva: **agregar una línea al final de la sección que corresponda** (§1 si es del dueño, §2 si es de método/proceso), con el formato:

```
**Fecha real** — Qué se decidió. Motivo: por qué.
```

**Nunca** reemplazar una entrada anterior, y **nunca** dejar una decisión sin su motivo.
