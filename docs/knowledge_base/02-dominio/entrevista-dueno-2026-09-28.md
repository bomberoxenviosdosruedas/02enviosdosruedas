# Entrevista al Dueño — Relevamiento Comercial y Operativo (2026-09-28)

> **Proveniencia:** cuatro fuentes entregadas por el dueño (Matías Cejas, Director Operativo). Las tres primeras son primarias; la cuarta es una síntesis.
>
> | Fuente | Ruta | Naturaleza |
> |---|---|---|
> | Cuestionario por página | `docs/contexto/Entrevista Exhaustiva y Visión de Marca - Envíos DosRuedas.docx` | Auditoría de las 8 secciones del sitio + entrevista escrita. **Alta confianza.** Fecha declarada: septiembre 2026. |
> | **Cuestionario de 31 preguntas** | `docs/contexto/respuestas_dueno_enviosdosruedas.csv` | Respuestas escritas del dueño a un formulario de negocio. **Alta confianza, y la fuente más literal del archivo**: contiene sus frases más operativas y sus líneas rojas. **Firmado 25/5/2026**, unos 4 meses antes que las otras tres. Ver §11. |
> | Planilla de relevamiento | `docs/contexto/Relevamiento completo envío dosruedas.xlsx` | 6 pestañas. **Confianza mixta:** las celdas respondidas son del dueño; las no respondidas conservan el texto de la plantilla original. |
> | Informe estratégico | `docs/contexto/Informe de Estrategia, Auditoría y Visión de Marca - Envíos DosRuedas.docx` | Síntesis de las anteriores. **Autoridad derivada:** confirma, no crea. Los números que solo aparecen ahí van marcados **[SIN CONFIRMAR]** |
>
> Hay transcripciones en markdown de la primera y la tercera: `docs/contexto/entrevista-exhaustiva-y-vision-de-marca.md` y `docs/contexto/relevamiento-completo-envio-dosruedas.md`.
>
> **Fecha de la entrevista:** 2026-09-28. **Registrado en el repo:** 2026-09-29.
>
> ## Cómo usar este documento
>
> Es la **fuente de verdad del contexto que el dueño quiere explícitamente** — cosas que en general no están escritas en ningún lado y que el sitio a veces afirma al revés.
>
> 1. **§1 a §3** son definiciones canónicas. Donde contradicen a un documento más viejo, **gana este documento**.
> 2. **§4** lista lo que el dueño **niega explícitamente**. Es la sección más importante del archivo: cada línea de ahí es una promesa que el sitio no debe hacer.
> 3. **§11** son las respuestas del cuestionario de 31 preguntas: longitud de frase real, líneas rojas, competidores, cliente estrella. La fuente de voz más literal del dueño. **Su antigüedad es el riesgo:** es de mayo, y el precio del 24HS ya cambió después (§1.5).
> 4. **§12** documenta la contradicción de margen entre fuentes. No la resuelvas por tu cuenta.
> 5. **§9** es la auditoría: qué de §1-§4 está corregido en el código y qué sigue roto.
> 6. Un dato sin respaldo del dueño está marcado **[PLANTILLA]** (texto de la planilla que el dueño no respondió) o **[SIN CONFIRMAR]** (agregado por el informe estratégico). **Ninguno de los dos se publica.**
>
> Related topics: `decisiones.md` (registro de decisiones), `../01-diseno/tarifas-logica-negocio.md` (recargos y protocolos), `../01-diseno/anti-patrones.md` §5 (prohibiciones), `../01-diseno/iconografia-imagen.md` §3.4 (dirección de fotografía), `glosario.md` (vocabulario), `src/lib/promises.ts` (promesas en código).

---

## 1. Definiciones del dueño, servicio por servicio

Texto **verbatim** del cuestionario. Es la definición oficial; cualquier copy que la parafrasee mal se desvía del dueño.

### 1.1 Express

> "Entregas con elección de rango horario, se entrega en el día si es solicitado antes de 15hs. Se solicita una anticipación mínima de 2hs, y los rangos horarios deben tener un espacio de 3hs para realizar retiro y entrega (10 a 13hs por ejemplo)"

> **Beneficio, en palabras del dueño (CSV, pregunta 7):** *"Poder elegir un rango horario de entrega, ayuda a poder realizar diferentes gestiones que tengan un horario limite."* Es la mejor frase de valor de Express que existe en el archivo: concreta, sin superlativo, y explica el servicio en una línea.
>
> **FAQ que el dueño mismo escribió (pregunta 9):** *"Se puede entregar en un horario Puntual? No, unicamente se trabaja con rangos horarios de entrega de 3hs de espaciado, por ejemplo 10 a 13hs."* Esta es la respuesta literal que debería estar en la FAQ del sitio.

| Atributo | Valor |
|---|---|
| Definición | Envíos **con elección de rango horario** |
| Corte | 15:00 hs |
| Ventana | Rangos de **3 hs** de espacio (ej. 10 a 13 hs) |
| Anticipación mínima | 2 hs |
| Último rango posible | 17 a 19 hs (de ahí el límite de entrega de 19 hs) |
| Cliente ideal | Documentos, trámites, repuestos, medicamentos, envíos con límite de horario, alta prioridad |
| Tarifa | `$3.700` / `$4.600` / `$6.100` / `$8.200` / `+$1.000` por km excedente |
| Límite de bulto | *"Todo lo que pueda ser llevado en moto, puede tener adicionales por peso y tamaño"* (CSV). El umbral numérico está en disputa: ver §3 |

### 1.2 LowCost

> "Entregas sin elección de rango horario, se entrega en el día si es solicitado antes de 13hs. Se solicita una anticipación mínima de 2hs, y las entregas se realizan antes de 19hs"

> **Beneficio, en palabras del dueño (CSV, pregunta 12):** *"Envios mas economicos, especialmente en distancias largas. Ideal para emprendedores con envios esporadicos, puedan ofrecer envios economicos."*
>
> **FAQ que el dueño mismo escribió (pregunta 14):** *"Se puede elegir horario? No, las entregas lowcost no se puede elegir rango horario de entrega, se entrega en el transcurso del dia antes de 19hs."*

| Atributo | Valor |
|---|---|
| Definición | Envíos **sin elección de rango horario** |
| Corte | 13:00 hs |
| Entrega | Antes de las 19:00 hs |
| Anticipación mínima | 2 hs |
| Cliente ideal | Emprendedores con envíos **esporádicos**, tiendas online, e-commerce |
| Tarifa | `$3.000` / `$4.000` / `$5.300` / `$7.000` / `+$700` por km excedente |

> **Trampa de redacción:** LowCost es "programado", no "agrupado". Consolidar *rutas* entre envíos de clientes distintos sí es la mecánica real; **juntar los envíos de un mismo cliente y llamarlo LowCost es falso** y fue un error de copy de la home (ver §9).

### 1.3 Mercado Envíos Flex

> **Verbatim del dueño (CSV, pregunta 15 y 16):** *"Envios exclusivos para vendedores de MercadoLibre que tengan activados el servicio Flex."* · *"El valor del envios es el mismo que el LowCost, pero con la diferencia que se puede solicitar hasta 15, y seran entregados antes de 20hs, sin eleccion de rango horario de entrega."*
>
> **Verbatim de la FAQ que el dueño mismo escribió (pregunta 18):** *"Tienen minimo de envios? No, no tenemos minimo de envios, pero a mayor cantidad de envios diarios obtenes mejores beneficios en el valor del envio."*

| Atributo | Valor |
|---|---|
| Definición | **Exclusivo** para vendedores de Mercado Libre |
| Corte | 15:00 hs |
| Entrega | En el día, antes de las 20:00 hs |
| Cobertura | **Todo Mar del Plata, y explícitamente no las zonas aledañas.** Verbatim: *"Cubrimos todo mar del plata (no cubrimos zonas aledañas)"*. La mención histórica de "y Batán" estaba equivocada. Batán se gestiona por tarifa de periferia o por LowCost/Express |
| Tarifa | **Es la misma que LowCost**, con dos diferencias: se puede pedir hasta las 15 hs (no 13) y entrega antes de las 20 hs (no 19). Encima, **descuento por volumen** sin mínimo: *"a mayor cantidad de envios diarios obtenes mejores beneficios en el valor del envio"* |
| Dolor que resuelve | MercadoLibre exige entrega antes de las 21 hs. DosRuedas cumple con **100 % de cumplimiento**, y ahí está el cuidado de la reputación |
| Logística inversa | Devolución del paquete al local por rechazo del comprador: **$0** |

#### 1.3.1 Escalas de Flex por volumen (🔴 publicadas, sin confirmar con el dueño)

> **Corrección 2026-09-29:** esta matriz **ya está implementada y publicada** en `src/components/servicios/flex/FlexPricing.tsx`. No es una propuesta del informe: el informe *auditó* el sitio y la reportó. El problema no es que exista, es que **nadie la confirmó con el dueño**.

| Nivel | Volumen | Tarifa | Segunda visita | Retiro |
|---|---|---|---|---|
| **1 · Crecimiento** | 1-4 envíos/día | Derivada de `LOW_COST_TIERS` + `LOW_COST_PRICE_PER_KM` (Z1 `$3.000`, Z2 `$4.000`, Z3 `$5.300`, Z4 `$7.000`, Z5 `$7.000` + `$700`/km) | Tarifa normal | Tarifa normal |
| **2 · Pro** | 5-10 envíos/día | Z1 `$3.000`, Z2 `$4.000`, Z3 `$5.300`; **Z4 y Z5 con tope fijo de `$6.500`** | Z1 gratis, resto al 50 % | **Bonificado sin cargo** |
| **3 · Elite** | +10 envíos/día | **Tarifa plana `$4.500` a toda la ciudad** | **Sin cargo, toda la ciudad** | **Bonificado sin cargo** |

Liquidación **quincenal** en los tres niveles. Los tres usan "Activar Nivel" como CTA, así que hay una vía de conversión.

**Qué respalda el dueño y qué no:**

| Parte de la matriz | Respaldo |
|---|---|
| Que Flex **vale lo mismo que LowCost** | ✅ **Verbatim del CSV.** *"El valor del envios es el mismo que el LowCost"* |
| Que **el volumen baja el precio, sin mínimo** | ✅ **Verbatim del CSV.** *"No se solicita minimos de envios, pero a mayor cantidad de envios diarios, mejor valor va a obtener"* |
| Que la liquidación es **quincenal** | ❌ No está en ninguna fuente del dueño |
| Los **niveles 1-2-3** con esos cortes de volumen | ❌ No están. La escalera es verosímil y coherente con su frase, pero él no la diseñó por escrito |
| Los números **`$6.500`** y **`$4.500`** | ❌ **Sin una sola línea que los respalde** |
| El **retiro bonificado** en niveles 2 y 3 | ❌ Sin respaldo |
| La **segunda visita gratis** en el nivel 3 | ❌ Sin respaldo |

**Dos problemas, uno resuelto y otro no:**

1. **Los niveles 2 y 3 tienen los precios escritos a mano en el componente**, no en `PriceRange` ni en `pricing.ts`. El nivel 1 sí se deriva de `LOW_COST_TIERS`, que es lo correcto. Esto viola la regla de "fuente única de tarifas" y ya es un anti-patrón listado en `anti-patrones.md` §7. **Es un problema técnico, no de negocio:** los números pueden ser ciertos o no, pero ningún nivel debería estar hardcodeado.
2. **El concepto de la escalera lo valida el dueño** (volumen a mejor precio, sin mínimo, base LowCost). **Los números concretos no.** Confirma el andamiaje, no las cifras.

**No tocar los valores sin su respuesta.** Ver §9.2, punto 2.

### 1.4 Depósito & Fulfillment 3PL (Friuli 1972)

> "Almacenamiento de mercadería, picking, empaque y despacho continuo para que te enfoques exclusivamente en escalar las ventas de tu comercio. Dejas un stock en nuestro deposito, y todas las ventas que realices hasta las 15hs serán entregadas en el día, permite coordinacion de rango horario, tarifa fija a toda la ciudad"

> **Verbatim del dueño (CSV, pregunta 19):** *"Almacenamos, y despachamos las ventas en el dia. Almacenamos unicamente productos pequeños/medianos, en un stock limitado. Tarifa plana a toda la ciudad"*

| Atributo | Valor | Fuente |
|---|---|---|
| Definición | Cliente deja stock en el depósito; DosRuedas hace picking, empaque y despacho | Ambas |
| Corte | 15:00 hs | `.docx` |
| Entrega | En el día, antes de las 20:00 hs | `.docx` |
| Tarifa | **$6.000 fijo a toda la ciudad** (`SAME_DAY_FIXED_PRICE`) | `.docx` (el CSV dice "plana" sin número) |
| Beneficio concreto | Velocidad: con el producto en el depósito se prepara y se sale lo antes posible | `.docx` |
| Restricción de stock | **Stock limitado**, solo productos pequeños y medianos. El cliente debe consultar | CSV, textual |
| Rubros que lo usan | *"Todo tipo de rubros que vendan productos que puedan ser transportados en moto"* | CSV pregunta 20 |
| Contrarelymbolso | **Sí, y sin cargo extra** | CSV pregunta 21 |

> **El CSV no da el número del `$6.000`**, dice solo "tarifa plana a toda la ciudad". El número viene del `.docx`, que es fuente del dueño. `SAME_DAY_FIXED_PRICE = 6000` en `promises.ts` está respaldado.

**Nomenclatura comercial correcta:** este servicio se llama **E-Commerce Same Day** en el sitio, no "3PL" a secas. "3PL" describe la operación; el nombre que compra el cliente es Same Day.

**Detalle operativo del picking:** el informe estratégico especifica **picking por código QR**, y el sitio **ya lo publica** en `/servicios`, `/servicios/deposito-fulfillment` y `EmprendedoresFeatures`. Coincide con lo que el dueño dijo del 3PL. Es un diferenciador real que ya está bien implementado.

### 1.5 E-Commerce 24HS (Next Day) — ✅ precio confirmado

Definido por el dueño en la planilla y con detalle en el cuestionario de 31 preguntas:

> **Planilla, notas:** "Falta agregar eCommerce 24hs (entregas en 24hs, se retira hoy se entrega mañana)"

> **Cuestionario (25/5/2026), verbatim:** *"E Commerce 24hs (Next day) Entregas al siguiente dia, **recoleccion gratuita si son mas de 10 envios, si no tiene un costo de $4000**."*

| Atributo | Valor | Fuente |
|---|---|---|
| Qué es | Retiro o recepción **hoy** en Friuli 1972, entrega al **día hábil siguiente** | Planilla §2.5 |
| Precio | **✅ `$3.800/envío`**, confirmado por Matías el 2026-09-29 | Confirmación verbal |
| **Recolección** | **Gratis desde 10 envíos.** Por debajo de 10, la recolección tiene costo | CSV pregunta 19 |
| DropOFF | Se puede combinar: `-20 %` sobre la tarifa final (§1.8) | CSV pregunta 19 |
| Horario de recepción en base | Lun-Vie 9-18 hs · Sáb 10-15 hs | Planilla §2.5 |

**Historia del precio, para que nadie lo toque sin aviso:**

| Momento | Número | Dónde |
|---|---|---|
| 25/5/2026 | `$4.000` sin recolección gratis | CSV — el dueño todavía no había decidido el corte de 10 envíos |
| COPY actual del sitio | `"Desde $3.800/envío"` | `app/servicios/page.tsx:183` |
| **2026-09-29** | **`$3.800` confirmado** por Matías | Confirmación verbal |

El CSV dice `$4.000`, el sitio dice `$3.800`. **El sitio tiene razón** y el CSV quedó desactualizado: el precio bajó cuando se agregó la cantidad mínima de 10 envíos para la recolección gratis. **El CSV es la fuente más antigua del archivo (mayo), no la más nueva.** No usarlo para el precio del 24HS.

**Pendiente de implementación, no de precio:** el precio ya está, pero el 24HS **no tiene función de cálculo**. No hay `ServiceType`, ni rango en `PriceRange`, ni función en `pricing.ts`. El botón "Seleccionar 24HS" no lleva a ningún cotizador. Es el único servicio con precio confirmado y sin calculadora.

**No es lo mismo que DropOFF.** El `-20 %` es una modalidad **general** (§1.8), no un beneficio del 24HS.

### 1.6 Contrareembolso

> "Cobramos tus productos al entregar, efectivo o transferencia, y te rendimos lo cobrando en el día, al día siguiente o de forma semanal, segun acordado. Este servicio no tiene costo extra"

| Atributo | Valor |
|---|---|
| Costo del servicio | **$0.** Sin cargo, sin límite y sin comisión por gestión de cobranza |
| Medios de pago | Efectivo, transferencia, QR |
| **Rendición** | En el día, al día siguiente o semanal, **según lo acordado** |
| Facturación | Factura C |

> La frase "en el día **o** al día siguiente" es lo que habilita el commercial correcto. La versión corta "el mismo día" es la que el sitio publica mal. Ver §4.1.

### 1.7 Plan Emprendedores / Cuentas Corrientes

> "Para emprendedores y comercios que quieren tener un equipo de entregas de confianza, aunque la cantidad de pedidos cambie cada día. Sin volumen fijo de envíos, trabajando de forma exclusiva con DosRuedas. Accedés a las tarifas LowCost de la tabla y coordinás franjas de entrega de 3 horas como en Express. Se puede solicitar hasta las 15hs, con un mínimo de 2 horas de anticipación. El envio puede ser abonado por quien recibe o por quien entrega. Se puede coordinar pagos semanales, quincenales o mensuales"

| Atributo | Valor |
|---|---|
| Definición | Equipo de entregas fijo para un comercio, **aunque la cantidad de pedidos cambie cada día** |
| Volumen mínimo | **Ninguno** |
| Exclusividad | **Requerida**: se trabaja de forma exclusiva con DosRuedas |
| Acceso tarifario | **Tarifas LowCost de la tabla** |
| Ventanas | Franjas de entrega de 3 hs, como Express |
| Corte | 15:00 hs, mínimo 2 hs de anticipación |
| Quién abona | **Quien recibe o quien entrega**, indistinto |
| Facturación | **Factura C consolidada** — pagos semanales, quincenales o mensuales |
| Portal | **Portal del comercio** con la información de todos los envíos a mano |
| Beneficio de gestión | Resumen de todos los envíos + facturación conjunta = mejor control y estadísticas |

**Dos diferencias clave frente a LowCost**, y son las que hay que explicitar en la tabla comparativa: el corte es 15:00 hs y no 13:00 hs, y tiene franjas a elección. Plan Emprendedores es LowCost con **prioridad de agenda**, no LowCost barato.

### 1.8 Modalidad DropOFF (vigente, general, publicada sin explicar)

> **Verbatim del dueño (CSV, 25/5/2026):** *"Opcion DropOFF: Trae a nuestro deposito los envios, y obtene un 20% de descuento en la tarifa final"*

| Atributo | Valor |
|---|---|
| Qué es | El comercio **deja el paquete ya listo** en el hub de Friuli 1972, en vez de esperar el retiro |
| Beneficio | **`-20 %`** sobre **la tarifa final** de cada envío (`DROPOFF_DISCOUNT_PERCENT`) |
| Corte | **13:00 hs**. Viene del informe estratégico; el dueño no lo mencionó |
| Alcance | **Cualquier servicio.** Aplica a Express, LowCost o Flex |

**Dos fuentes discrepaban sobre el alcance, y el dueño zanjó:**

| Fuente | Qué decía | Estado |
|---|---|---|
| Planilla §1.3 y cuestionario por página §4.2 | *"Aplica **únicamente** en la modalidad E-Commerce 24HS"* | **Incorrecto.** Conflaba el descuento con un servicio concreto |
| **CSV, pregunta 19** | *"Trae a nuestro deposito los envios, y obtene un 20% de descuento en **la tarifa final**"* | **Correcto.** El dueño lo define como una regla general sobre cualquier tarifa |

El error viene de que la planilla.sliderassocia el 20 % al 24HS porque en esa misma respuesta el dueño estaba describiendo las dos modalidades del 3PL de corrido. Su redacción real es general. **No publicar "solo válido en 24HS".**

**Lo que sí falta:** el `-20 %` se anuncia en `/servicios` y `/servicios/deposito-fulfillment`, pero no se explica **qué es DropOFF**, ni el corte de 13:00 hs, ni que funciona con cualquier servicio. El sitio vende un descuento sin definir su condición.

---

## 2. Tabla resumen de servicios

| Servicio | Corte | Entrega | Ventana a elección | Tarifa |
|---|---|---|---|---|
| **Express** | 15:00 hs | En el día, límite 19 hs | Sí, 3 hs | Por distancia (tabla maestra) |
| **LowCost** | 13:00 hs | Antes de 19 hs | No | Por distancia (tabla maestra) |
| **Flex** | 15:00 hs | Antes de 20 hs | No | Por nivel de volumen (§1.3.1) |
| **E-Commerce Same Day** | 15:00 hs | Antes de 20 hs | Sí | **$6.000 fijo** a toda la ciudad |
| **DropOFF** | 13:00 hs | según el servicio contratado | según el servicio | **`-20 %`** sobre la tarifa final |
| **E-Commerce 24HS** | Lun-Vie 9-18 hs (base) | Día hábil siguiente | — | **✅ `$3.800`** confirmado. Recolección gratis desde 10 envíos |
| **Plan Emprendedores** | 15:00 hs | En el día | Sí, 3 hs | **Tarifas LowCost** |
| **Contrareembolso** | — | transversal | — | **$0** |

---

## 3. Recargos y adicionales

Fuente: sección 3 de la planilla, respuestas escritas del cuestionario y §5 del informe estratégico. **Estado de publicación: solo el recargo de lluvia del 30 % está en el sitio** (página de Flex, donde es el valor correcto). La espera, el bulto extra, las paradas y la logística inversa **no se publican en ningún lado**: el sitio vende sin informar que existen.

| Concepto | Aplica | Monto | Condición / tolerancia | Nota |
|---|---|---|---|---|
| **Lluvia / mal tiempo** | Sí | **+50 %** Express y LowCost · **+30 %** Flex, Fulfillment, Emprendedores y Cuentas Corrientes | Lluvia activa o calzada mojada. Corre a partir del minuto 1 | El código solo tiene `RAIN_SURCHARGE_PERCENT = 30`: modela la mitad del caso. El 30 % es un **beneficio** para cuentas comerciales recurrentes, no un valor único |
| **Bulto extra** | Sí | **Sin monto fijo; varía según el servicio** | Se cobra **siempre** que lo transportado sea **mayor a 40 × 40 cm o +5 kg** | El "$1.950 desde" de la planilla es **[PLANTILLA]**, no del dueño. No publicar. **🔴 La dimensión está en disputa**: el CSV dice *"5kg y más de 40x30cm"*, el resto dice 40 × 40 |
| **Tiempo de espera** | Sí | **$2.100 cada 10 min** | Tolerancia de **10 min** sin cargo; corre **a partir del minuto 11** | El cadete espera en puerta o en una parada |
| **Paradas adicionales** | Sí | **+50 %** de la tarifa del envío por punto intermedio | Solo si la parada está **sobre la ruta** del viaje (hasta ~2 km entre paradas) | Si la parada **desvía** del trayecto planeado, se cotiza como **envío independiente**, no como recargo |
| **Horario nocturno / feriados / domingos** | **No** | **No se trabaja fuera del horario laboral. Sin excepción.** | — | Esto es una restricción, no un recargo. No hay tarifa nocturna que publicar |
| **Reintento de entrega** | Sí | **100 %** en Express y LowCost | El destinatario no está | En Flex y Cuentas Corrientes: **50 % o $0** según el nivel contratado, bonificado al 100 % en el nivel máximo |
| **Logística inversa (Flex)** | Sí | **$0** | El comprador rechaza el paquete en puerta | El paquete vuelve al local del vendedor sin cargo |
| **Gestión de cobranza / depósito bancario** | **No** | **Sin costo, sin límite** | — | No hay porcentaje por montos elevados cobrados en contrareembolso |
| **Periferia / larga distancia** | Sí | **`$1.200` por km de ruta** | Destinos **fuera de Mar del Plata urbana** | Tarifa aparte, no es el excedente dentro del radio (§3.1) |
| **Mercadería excluida** | — | **No se acepta** | Mercadería no declarada, sustancias prohibidas, bultos que comprometan la estabilidad vial de la moto | Debe estar en `/terminos-y-condiciones`. Ausente hoy |

**Los dos umbrales de bulto no se contradicen:** 5 kg y 40 × 40 cm son el mismo umbral expresado en masa y en volumen. El techo de 15 kg es un dato distinto (capacidad absoluta de la moto) y **no** es el umbral sin recargo.

> **🔴 La única dimensión en disputa es la del bulto.** El CSV, contestando *"¿Cuál es el límite de tamaño y peso?"*, escribió *"mayor a 5kg y mas de **40x30cm**"*. El resto de las fuentes y todo el código usan **40 × 40 cm**. Diez centímetros en el umbral que dispara el recargo. **Mientras el dueño no lo diga, el sitio sigue con 40 × 40** (es el valor que el código ya usa y el que aparece en el copy publicado), pero queda anotado en §9.2 punto 10.

### 3.1 ✅ Resuelto el 2026-09-29: el km de periferia es `$1.200`, el excedente dentro del radio es `$1.000`

> **Confirmado por Matías el 2026-09-29: `$1.000`.** El código no cambia. Este párrafo existe para que nadie vuelva a abrir la discusión.

El informe estratégico §5 decía dos cosas que no podían ser ciertas a la vez. Ya se resolvieron:

| Fuente | Afirmación | Lectura correcta |
|---|---|---|
| Informe §5 (recargos) | "`$1.200 / km de ruta`" para periferia, y que esto *"invalida cualquier texto web heredado anterior (que mencionaba `$1.000`/km) como la regla canónica oficial 2026"* | Se refiere **solo a destinos fuera de la urbana de MDQ**. El dueño lo dijo dos veces, con las mismas palabras: en el cuestionario por página (*"los envíos fuera de Mar del Plata se cobran a `$1.200 × km`"*) y en la planilla (*"KM Ruta a `$1.200` por km"*). |
| Informe §4 (tarifario Express) | *"Zona 4 (7-10 km) $8.200. Periferia (+10 km): `$1.200` por km de ruta"* | El "+10 km" es una **abreviatura imprecisa del redactor**: metió el rótulo de periferia dentro de la fila de Express. Contradicho por Matías el 2026-09-29. |
| **Planilla, pestaña 02** | Express *"Z5 (+10km): `$1.000` x km"* · LowCost *"Z5 (+10km): `$700` x km"* | Coincide exactamente con el código. Es la fuente que zanja la discusión. |
| **Código en producción** | `EXPRESS_PRICE_PER_KM = 1000`, de 10 a 20 km | **Correcto. Se mantiene sin cambios.** |

**Por qué el informe se confundió:** dice invalidar un "`$1.000`/km" que estaba "en un texto web heredado". Ese texto **nunca existió en el sitio**: `pricing.ts` siempre tuvo el valor como constante de código, y lo único publicado era la tabla por zonas. El informe invalidó una cita de sí mismo.

**Regla operativa para el futuro:** son dos tarifas distintas que se cruzan en los papeles.

| | Tarifa | Cuándo aplica |
|---|---|---|
| **Excedente dentro del radio** | Express `$1.000`/km · LowCost `$700`/km | Pasados los 10 km, **hasta los 20 km**, dentro del cálculo automático |
| **Periferia** | `$1.200` × km de ruta | **Fuera de la urbana de MDQ**, con lista cerrada de barrios (§5.6). Se cotiza por separado |

---

## 4. Lo que el dueño NIEGA explícitamente

Cada línea es una promesa que el sitio **no debe** hacer. Si aparece, es un bug de contenido, no una decisión editorial.

### 4.1 "Rendición inmediata" (contrareembolso)

> Pregunta: *"¿Qué garantía de rendición inmediata le ofrecen al comerciante?"*
> Respuesta: **"Garantía de rendición inmediata no existe. El dinero cobrado es rendido lo más pronto posible; en caso de entregas por la tarde, el cadete rinde el dinero en la base y el cliente lo recibe al día siguiente o se le transfiere si es posible."**

El servicio **sí** es de $0 y **sí** rinde rápido. Lo que no existe es la **garantía** de que el dinero esté en la mano del comercio el mismo día. La redacción honesta es "rendición en el día, al día siguiente o semanal, según lo acordado".

### 4.2 Factura A

> Respuesta: **"NO REALIZAMOS FACTURA A!"** (cuestionario de servicios y de empresa, con mayúsculas en el original)

Todo es **Factura C**. Cuenta corriente = "facturación quincenal o mensual con Factura C consolidada".

### 4.3 Envíos agrupados de un mismo cliente en LowCost

El objetivo de LowCost **no** es cotizar envíos agrupados de un mismo cliente. LowCost es un envío programado barato. Consolidar rutas entre envíos de clientes distintos es la mecánica real y sí se puede describir así.

### 4.4 Punto de retiro

> Pregunta: *"¿Tienen pensado establecer algún punto receptor o lockers?"*
> Respuesta: **"Por el momento no, tampoco ofrecemos Friuli como punto de retiro"**

Friuli 1972 es **base logística y depósito**. **No** es punto de retiro, ni punto de entrega, ni punto de recepción para el público. Nunca ofrecerlo como opción.

### 4.5 Política de reintentos o seguro redactada

> Pregunta: *"¿Existe alguna política de reintentos de entrega o seguro de paquete que debamos redactar?"*
> Respuesta: **"No"**

No hay seguro de paquete. No se puede prometer cobertura, reposición ni indemnización por pérdida. El recargo por reintento de §3 sí aplica y está definido, pero **no** hay un producto de seguro.

> **Atención al conflicto con la planilla.** La pestaña 01.8 de la planilla conserva como **[PLANTILLA]** la línea *"Garantía e Indemnización: cobertura del 70 % del valor declarado del producto"*, y el informe estratégico la recoge. **El dueño la desmintió por escrito** (respuesta *"No"* a la pregunta de política de seguros). El texto de la planilla no lo respondió: es boilerplate. **Prohibido publicar 70 % de indemnización** bajo ningún supuesto. Ver `anti-patrones.md` §5.1.

### 4.6 Tiempos de entrega de 60 a 90 minutos

> "Los 60-90 min confunden como si se hiciera en ese tiempo el envío, **no debería tener ese tiempo**"

Retirado el 2026-09-29. El concepto correcto es **franja horaria de 3 hs a elección**, no duración.

### 4.7 Falta de respeto al repartidor

> Pregunta 31 del CSV: *"¿Qué cosas no hacemos, no decimos o no toleramos bajo ninguna circunstancia?"*
> Respuesta: *"No toleramos faltas de respeto hacia nuestros repartidores."*

No es una nota legal de `/terminos-y-condiciones`: es una **regla de relación**. El comercio que falta el respeto al cadete deja de ser cliente. La sección 12.1 desarrolla la tercera línea roja, que es la más valiosa.

### 4.8 Transportar productos ilegales

> Misma pregunta, primera línea: *"No realizamos transporte de productos ilegales."*

El sitio tiene el criterio genérico de mercadería no declarada, pero **no** la lista de prohibiciones. Va en `/terminos-y-condiciones` (§9.2 punto 8).

### 4.9 Prometer sin poder cumplir

> *"No tomamos envíos si no tenemos disponibilidad para cubrirlo, **preferimos decir que no podemos, a fallar**."*

**Esto no es una denegación: es la promesa de marca.** Toda la competencia marplatense promete llegar siempre. DosRuedas tiene permiso explícito del dueño para decir que no, y esa es la forma honesta de competir. Ver §11.1.

---

## 5. Operaciones, protocolos y fricción

### 5.1 Rutina de la base (Friuli 1972)

> "Las motos empiezan a llegar desde 9hs al deposito a retirar envios si es necesario, o realizar rendiciones. Escanean las etiquetas que necesitan y salen a reparto"

Ese es **el corazón operativo** y la imagen que el dueño quiere para publicidad (§6.3).

### 5.2 Protocolo de ausencia en Flex

> "Se avisa al comercio, y si autoriza se realiza una nueva visita al día siguiente"

**Nunca** se devuelve el paquete al remitente sin avisar. Se avisa al comercio primero y la segunda visita se hace con su autorización.

### 5.3 Logística inversa (rechazo en puerta)

> "El retorno no tiene costo, se rinde generalmente al día siguiente"

El retorno por rechazo del comprador **no se cobra**. Falta explicitarlo en `/terminos-y-condiciones` (ver §9).

### 5.4 Tránsito y temporada

> "No hay diferencias"

No hay margen de tiempo estacional declarado. No publicar "en temporada demora más" ni "priorizamos temporada" como promesa operativa.

### 5.5 Fricción de distancia (zonas con desvío)

> "Generalmente las zonas alejadas, la periferia, barrios como Félix U. Camet, La Florida, Camet, 2 de abril, El Retazo, Estación Camet, y en el sur acantilados, San Patricio, San Jacinto y alrededores"

El cálculo por routing puede **subestimar** el tiempo real en estas zonas porque el camino es más largo que la distancia en línea. Es el mismo motivo por el que las tarifas miden **km de ruta** y no km en línea recta.

### 5.6 Fuera de Mar del Plata (tarifa de periferia)

> "Muy pocas consultas, salen algunos envíos pero muy pocos; los envíos fuera de Mar del Plata se cobran a **$1.200 × km (km de ruta)**"

**Barrios y localidades con lista cerrada** (informe estratégico §5): Félix U. Camet · La Florida · Camet · 2 de Abril · El Retazo · Estación Camet · Acantilados · San Patricio · San Jacinto · alrededores.

Nota: el radio de 20 km del cotizador cubre el caso **dentro** del partido; la tarifa de periferia es para lo que queda fuera y se liquida **por separado**, no como excedente. Resuelto en §3.1.

> **Flex tiene su propia regla de cobertura, más estricta:** *"Cubrimos todo mar del plata (no cubrimos zonas aledañas)"* (CSV pregunta 17). O sea: Flex **no** llega a la periferia. Un vendedor de Mercado Libre con destino en Camet no es cliente de Flex, y el cotizador debería decirlo.

### 5.7 Control de calidad en puerta

> "Los cadetes son capacitados previamente para que cumplan correctamente con la forma de trabajo establecida por DosRuedas; en caso de tener alguna queja de algun cliente, es charlado con el repartidor para que mejore su actitud"

No es un proceso anónimo. Hay capacitación previa y seguimiento nominal ante reclamo. Ese es el argumento real detrás de "flota propia, cero tercerización".

### 5.8 Equipos

> "Nuestro equipo está preparado y toma cada envío como si fuera suyo, y priorizando una entrega rapida y confiable. Contamos con un equipo fijo, incluso repartidores trabajando con nosotros desde el día 1 que abrimos DosRuedas"

**Hecho verificable y con peso:** hay repartidores que están desde el primer día. Es el argumento más fuerte de antigüedad operativa que tiene la empresa, y no está en el sitio.

### 5.9 Exclusiones de mercadería

El informe estratégico §5 define lo que **no** se transporta: mercadería no declarada, sustancias prohibidas, y bultos que comprometan la estabilidad vial de la moto (el mismo criterio que sostiene el límite de 5 kg / 40 × 40 cm). Debe estar en `/terminos-y-condiciones` y hoy no está.

**Lo que el dueño sí-o-no acepta (CSV pregunta 31):** *"No realizamos transporte de productos ilegales"* (§4.8). Y el límite de tamaño del 3PL es explícito: *"Almacenamos unicamente productos pequeños/medianos"* (§1.4).

### 5.10 Ficha de la operación

| Dato | Valor | ¿En el repo? |
|---|---|---|
| Hub central | Friuli 1972, **Barrio Chauvín**, Mar del Plata | Sí, salvo el barrio |
| Dominio comercial | `www.enviosdosruedas.com` | Sí |
| Dominio operativo | `www.logisticadosruedas.com` | **No** |
| Flota | 100 % propia de motocicletas, sin tercerización | Sí |
| Antigüedad | Más de 7 años (decisión 2026-09-18: "+7 años" por Ley 24.240) | Sí |
| Calificación | 5.0 / 5.0 en Google, +120 valoraciones | Sí |
| Respuesta en canales directos | Menos de 5 minutos | Sí (corregido desde "< 2 MIN") |

---

## 6. Visión de marca para imagen publicitaria

### 6.1 Sensación rectora

> **"Confianza y seguridad"**

Ese es el sentiment principal que debe transmitir cualquier foto o anuncio. Todo lo demás es secundario.

### 6.2 Qué captar, por contexto

| Contexto | Lo que quiere el dueño (verbatim) |
|---|---|
| Identidad de la flota | "La sonrisa al entregar y el cuidado de manejar el paquete como si fuera propio" |
| Corazón operativo | "Las motos saliendo en caravana a repartir" |
| Beneficio del comerciante | "El celular del comerciante recibiendo confirmaciones de entrega y felicitaciones de sus clientes" |
| Experiencia Flex | "La rapidez de entrega, que fideliza clientes y la tranquilidad de mantener en verde su reputación" |
| Confianza en contrareembolso | "La tranquilidad del cliente al recibir el producto, y la felicidad del dueño al recibir el dinero" |
| Comprador final | "Excelente, todo cliente espera recibir en tiempo y forma su compra. Muchas veces recibimos felicitaciones por cómo trabajan nuestros repartidores" |
| Compromiso del equipo | "Nuestro equipo está preparado y toma cada envío como si fuera suyo, y priorizando una entrega rápida y confiable. Contamos con un equipo fijo, incluso repartidores trabajando con nosotros desde el día 1 que abrimos DosRuedas" |
| Flota propia | "Es lo más importante, contar con un equipo propio, profesional, que conoce todos los puntos de la ciudad, ayuda mucho a que las entregas se realicen sin inconvenientes" |

### 6.3 Escenarios marplatenses: whitelist y blacklist

**✅ Sí usar como postal o contexto:**

| Escenario | Enfoque |
|---|---|
| Las ramblas y los Lobos de Mar, con motos en circulación | Escena de marca por excelencia |
| La costa de Playa Grande / Varese, en trayecto de entrega | Ruta real, no postal genérico |
| Centro comercial Güemes y zona comercial San Juan | Contexto de comercio: el cliente atendiendo mientras el reparto pasa |
| Otras sugerencias de locaciones marplatenses | Casilla abierta a propuestas |

**❌ No usar:**

| Escenario | Por qué |
|---|---|
| La actividad logística diaria en la base de Friuli 1972 | El dueño lo marcó **No** como postal. La base se puede nombrar en texto; no es una postal publicitaria |
| Ingresos a zonas de Batán y Sierra de los Padres | Marcado **No**. Además casi no hay consultas de esos destinos (§5.6) |

> **Tensión entre las dos fuentes, sin resolver:** el `.docx` §7 elige "las motos saliendo en caravana a repartir" como el momento a reflejar para mostrar volumen, y en §6 el casino central, el lobo marino, el faro, el puerto, la playa, el mar y la rambla. La planilla marca la base de Friuli como **No**. La lectura que reconcilia las dos: **la caravana de motos saliendo es la escena; la base como edificio no es postal.** Si hay que elegir postal de marca, es la rambla con los lobos de mar.

### 6.4 Frases de marca: hay tres, de tres fuentes distintas

El dueño respondió tres veces a la pregunta de eslogan o propuesta de valor, y **nunca dio la misma respuesta**. No es contradicción: cada respuesta la escribió para un contexto distinto.

| Fuente | Fecha | Qué respondió | Para qué sirve |
|---|---|---|---|
| `.docx` §8 | sep 2026 | *"Una logística pensada para tu comercio: un equipo de confianza, entregas coordinadas y la información que necesitás para tener todo bajo control. **Somos la solución a tus envíos**"* | H1 vigente de la home + subheadline aprobado para reutilizar |
| **CSV, pregunta 2** | 25/5/2026 | *"Tu solucion logistica o Tu Partner logistico"* | Eslogan corto. **Es la única respuesta que el dueño dio a la pregunta literal "¿Cuál es nuestro eslogan?"** |
| `.docx` §4 | sep 2026 | *"Damos la cara"* | candidato descartado ("Ninguno jaja") |

El sitio usa "Somos la solución a tus envíos", que es la segunda oración de la primera fila. *"Tu solución logística o tu partner logístico"* es la respuesta directa a la pregunta de eslogan y está sin usar.

> **No combines las dos.** "Somos la solución a tus envíos" y "tu partner logístico" dicen cosas distintas: la primera vende un resultado, la segunda vende una relación. Juntarlas produce la frase larga y sin foco que el propio dueño evita en su forma de hablar (§11.2).

De las cuatro frases de impacto propuestas en el `.docx` §8, el dueño no eligió ninguna (*"Ninguno jaja"*) y propuso la suya, que es la de la primera fila.

### 6.5 Caso de éxito: hay cliente nombrado, pero no hay anécdota

Fuentes que se contradicen en apariencia, y la contradicción se resuelve:

| Fuente | Pregunta | Respuesta |
|---|---|---|
| Cuestionario por página (sep 2026) | *"¿Podrías compartir alguna anécdota o caso de éxito de un emprendedor local?"* | **"NO JAJA"** |
| Cuestionario de 31 preguntas (may 2026) | *"Descríbeme tu cliente estrella o más rentable"* | **"MailAmericas, ecommerce internacional, 2500 a 4000 envios semanales"** |

**No es contradicción:** en septiembre le pidieron una **anécdota personal** (una historia, un relato) y dijo que no porque no la tenía contada así. En mayo le pidieron un **dato de cliente**, y lo tiene: es factual, no narrativo.

**Lo que sí se puede afirmar sobre MailAmericas:** e-commerce internacional, **2.500 a 4.000 envíos semanales**, y es su cliente de mayor volumen. Dolor que resolvieron: *"Mejoramos la tasa y velocidad de entrega de los paquetes"*. Satisfacción declarada: **10/10**.

**Lo que NO se puede publicar sin pedirle permiso:**
- El nombre **MailAmericas** es una empresa real. Usarla como testimonio en el sitio requiere autorización explícita, aunque sea un e-commerce internacional que no compite en Mar del Plata.
- El volumen (2.500-4.000/semana) es el dato que más pesa en la pieza. Decirlo en público **delata la capacidad operativa** y ayuda a la competencia. Es información que el dueño dio a un formulario interno, no a una vía pública.

**Antes de publicar esto, preguntarle.** Es la pieza de prueba social más fuerte que tiene la empresa y está sin usar por una razón razonable: nadie preguntó.

**El único dato social verificable hoy en el sitio:** 5.0 estrellas con más de 120 valoraciones en Google.

---

## 7. Estrategia y prioridades comerciales

| Tema | Respuesta del dueño | Implicación |
|---|---|---|
| **Acción de conversión prioritaria** | *"Que cotice directo en el sitio"* | El cotizador es el objetivo #1 de la home. WhatsApp es el fallback, no el objetivo |
| **Conversión real** | *"La mayoría que escribe al whatsapp realiza el envío"* | El enlace de WhatsApp no pierde ventas; el cotizador no es un filtro |
| **Mayor margen** | **Express** | Defendible con datos de conversión, no con descuento. ⚠️ El CSV dice LowCost para "más rentable": ver §12 |
| **Servicio a escalar** | **"Cuenta corriente, que es el plan ideal para emprendedores"** | La prioridad comercial es el Plan Emprendedores, no Express. Es el objetivo que el dueño repite en las dos fuentes |
| **Fricción del cotizador** | *"Aparte les parece incómodo"* (tener Express y LowCost separados) | La separación de cotizadores es una fricción conocida. No la resuelvas con un cotizador único sin su autorización |
| **Comprensión del filtro** | *"Sí"* — el usuario entiende la diferencia Express/LowCost | No sobre-explicar la diferencia con bloques pesados |
| **Caducidad de tarifas** | *"Aprox cada 6 meses (pero puede ser menos)"* | Ciclo de revisión de `PriceRange`: 6 meses |
| **Objetivo a 6 meses** | *"Aumentar la cantidad de envios, aumentar flora [flota] y duplicar clientes e commerce (3PL)"* | Volumen y 3PL por encima del margen unitario (§11.5) |

---

## 8. Marcas que confían

Relevadas del sitio, **no** confirmadas por el dueño (la respuesta del carousel vino vacía):

> Toy Piola Juguetería, Ama & Pola, Dropix 3D, El Cóndor, Starcel, Urbancow, Wanca, Catalina Indumentaria, Envases 3G, La Peri

Tratarlas como **logos publicados, no como avales**. Antes de amplificar cualquiera de ellos en publicidad, confirmar autorización de uso de marca.

> **El único cliente que el dueño nombró** está en §6.5: **MailAmericas**, 2.500-4.000 envíos semanales. No está en este carrusel y no se agrega sin su autorización.

---

## 9. Auditoría: qué está corregido y qué no

Estado al 2026-09-29, después del barrido de promises del mismo día.

### 9.1 Corregido ✅

| # | Tema | Dónde |
|---|---|---|
| 1 | "60-90 min" retirado en todo el sitio | `promises.ts` (`EXPRESS_WINDOW`), 11 archivos |
| 2 | Peso 15 kg → 5 kg estándar / 15 kg techo | `STANDARD_WEIGHT_KG` / `MAX_WEIGHT_KG` |
| 3 | Factura A → Factura C | Todo el sitio, incluida `empresas-cuenta-corriente` |
| 4 | LowCost "agrupado" → programado | `SegmentosHome`, `ServicesOverview` |
| 5 | Flex "Mar del Plata y Batán" → solo Mar del Plata | `ExpressFeatures`, `faqData` |
| 6 | Badge "< 2 MIN" → "< 5 MIN" | `CtaSection` |
| 7 | E-Commerce Same Day con tarifa fija $6.000 | `SAME_DAY_FIXED_PRICE`, `ServicesOverview` |
| 8 | Umbral de 5 kg / 40 × 40 cm como estándar, 15 kg como techo | `STANDARD_WEIGHT_KG`, `MAX_WEIGHT_KG` |
| 9 | Pickup point eliminado: el sitio nunca ofreció retiro en Friuli | Cobertura, cotizadores |

### 9.2 Pendiente ❌

| # | Tema | Gravedad | Dónde |
|---|---|---|---|
| 1 | **"Rendición inmediata"** sigue publicada. El dueño lo niega explícitamente (§4.1). 3 lugares: metadata JSON-LD, feature "Rendición inmediata", FAQ | 🔴 Alta. Es la única afirmación del sitio que el dueño **(deniega por nombre)**, no matiza | `src/app/servicios/envios-contrareembolso/page.tsx:44,100-101`, `faqData.ts` |
| 2 | **Flex Niveles 2 y 3 publican `$6.500` y `$4.500` hardcodeados en el componente**, sin confirmar con el dueño y fuera de `PriceRange` (§1.3.1). El Nivel 1 sí se deriva bien de `LOW_COST_TIERS` | 🔴 Alta. Bloque tarifario sin fuente, contra la regla de fuente única | `src/components/servicios/flex/FlexPricing.tsx:44-67` |
| 3 | **"Rendición inmediata"** sigue publicada. El dueño lo niega por nombre (§4.1). 3 lugares: metadata JSON-LD, feature "Rendición inmediata", FAQ | 🔴 Alta. La única afirmación del sitio que el dueño niega explícitamente | `src/app/servicios/envios-contrareembolso/page.tsx:44,100-101`, `faqData.ts` |
| 4 | **El 24HS tiene precio confirmado (`$3.800`) pero no tiene calculadora** (§1.5). La tarifa vive escrita a mano en el JSX, fuera de `PriceRange` y de `pricing.ts`, y el botón "Seleccionar 24HS" no lleva a ningún cotizador. También falta publicar la regla de **recolección gratis desde 10 envíos** | 🔴 Alta. Es el único servicio con precio confirmado y sin función de cálculo | `src/app/servicios/page.tsx:183` |
| 5 | **Recargos no publicados** en ningún lado (§3). El sitio vende sin informar que la espera, el bulto extra o las paradas tienen costo. La lluvia sí se publica, pero solo el 30 % de Flex | 🟠 Media | FAQ o TyC |
| 6 | **DropOFF parcialmente implementado**: el `-20 %` se anuncia en `/servicios` y `/servicios/deposito-fulfillment`, pero **no se explica**. Falta el corte de 13:00 hs y la aclaración de que aplica a cualquier servicio, no solo al 24HS (§1.8) | 🟠 Media | `/servicios/deposito-fulfillment` |
| 7 | **Recargo de lluvia** modelado como 30 % único cuando el real es 50 % para Express y LowCost, 30 % para el resto. El 30 % sí está publicado en la página de Flex, que es correcto para ese canal | 🟠 Media | `promises.ts` |
| 8 | **Exclusiones de mercadería** ausentes de TyC: no declarada, sustancias prohibidas, bultos que comprometan la estabilidad vial | 🟠 Media | TyC |
| 9 | **Nombres inconsistentes del 24HS**: "Next Day 24hs" en dos páginas, "E-Commerce 24HS" en la comparativa y en `llms-full.txt` | 🟠 Media | `/servicios/page.tsx:187`, `deposito-fulfillment/page.tsx:72` |
| 10 | **Dimensión del bulto sin resolver**: el sitio y las tres fuentes dicen **40 × 40 cm**; el CSV dice *"mayor a 5kg y más de **40x30cm**"* (§3). Diferencia de 10 cm en un umbral que define el recargo | 🟠 Media | `promises.ts`, FAQ |
| 11 | **"Preferimos decir que no podemos, a fallar"** no aparece en el sitio (§11.1). Es la política real del dueño y el argumento de fiabilidad más fuerte disponible, hoy sin usar | 🟠 Media | `/nosotros`, FAQ |
| 12 | **MailAmericas sin publicar** (§6.5): cliente de 2.500-4.000 envíos semanales, el mayor volumen de la empresa. Usarlo requiere autorización explícita del dueño | 🟡 Baja | `/nosotros` |
| 13 | **Logística inversa sin costo** no está en TyC, aunque `/servicios` ya publica "Rechazos devueltos 100 % sin cargo" | 🟡 Baja | TyC |
| 14 | **Fidelización de equipo**: repartidores desde el día 1, 7+ años. Hecho verificable sin usar | 🟡 Baja | `/nosotros` |
| 15 | **Dominio operativo** `www.logisticadosruedas.com` sin registrar en el repo ni en la documentación | 🟡 Baja | `docs/knowledge_base/00-proyecto/identidad-negocio.md` |

> **Picking por QR sale de la lista de pendientes:** ya está publicado en `/servicios`, `/servicios/deposito-fulfillment` y `EmprendedoresFeatures`, y coincide con lo que el dueño dijo del 3PL.

> **El conflicto del `$1.200`/km salió de la lista** (§3.1). Confirmado por Matías el 2026-09-29: **`$1.000` es el valor correcto** y `pricing.ts` no se toca. El `$1.200` corresponde solo a periferia.

### 9.3 Descartado deliberadamente

| Tema | Por qué no se toca |
|---|---|
| `$1.950` de bulto extra | Dato de plantilla, no del dueño (§3). Publicarlo sería inventar una tarifa |
| Historia de éxito de un emprendedor local | El dueño no tiene ninguna y dijo que no (§6.5). El cliente estrella del CSV es un dato, no un relato |
| Nombrar a los competidores | El dueño dio su opinión interna (CDI, MMDP, Retorno) en un formulario de trabajo (§11.3). No se publica: uno está difamado y los otros dos son rivales reales |
| Ranking de rentabilidad entre servicios | "Express" y "LowCost" se contradicen entre fuentes (§12). No se publica un favorito |
| "La IA nos recomienda primero que a todos" | Es una observación de posicionamiento del dueño, no un claim (§11.4). Sin traducirlo a titular |
| Slot de bulto 15 kg en "Capacidad Máxima" | La frase era cierta, mal rotulada. 15 kg es el techo absoluto |
| "Ruteo consolidado" en `cotizar/lowcost/page.tsx` | Técnicamente preciso: consolidar rutas entre envíos de clientes distintos es real (§1.2). El claim problemático era "agrupar envíos de un mismo cliente" |
| Logotipos de clientes del carrusel | El dueño no respondió la sección de marcas. Son nombres publicados, no avales (§8). No amplificar sin autorización de uso de marca |
| Fases 1-3 del informe estratégico | La Fase 1 se ejecutó en el barrido del 2026-09-29. La Fase 2 (motor de precios) es justamente lo que está bloqueado esperando el punto 2 de §9.2 |

---

## 10. Voz del dueño: glosario operativo

Palabras que el dueño usa con un significado específico. Usarlas mal es un error de copy, no de estilo.

| Término | Significado en la casa | Lo que **no** significa |
|---|---|---|
| "Rango horario" | Franja de 3 hs a elección del cliente | "Entrega en 3 horas" |
| "Envío" | Un bulto, un cliente, un destino | Un lote de envíos |
| "Agrupado" | Consolidación de rutas entre envíos distintos | Envíos del mismo cliente juntos |
| "Rendición" | Entrega del dinero cobrado por contrareembolso al comercio | Transferencia bancaria inmediata |
| "Stock" | Mercadería del cliente depositada en Friuli 1972 | Inventario de DosRuedas |
| "Bulto extra" | Lo que excede 40 × 40 cm o 5 kg, con extra según servicio | Sobrepeso |
| "Reintento" | Segunda visita por destinatario ausente | Servicio de garantía |
| "Exclusivo" | Que el comercio no trabaja con otra transportista | Exclusividad de zona |
| "Termómetro verde" | El indicador de reputación de Mercado Libre. El 100 % de cumplimiento de las 21 hs es lo que lo mantiene | Un sello o una certificación propia |
| "Periferia" | Destinos fuera de la urbana de MDQ, con lista cerrada de barrios (§5.6) | Los barrios del ejido que cubre el radio de 20 km |
| "Línea roja" | Algo que la empresa no hace bajo ninguna circunstancia, aunque cueste plata | Una política(subjectiva) |
| "Una persona normal, trabajador" | Cómo habla la marca si fuera una persona (CSV 30) | "Amigable" o "cercano" |
| "Preferimos decir que no podemos, a fallar" | Criterio de capacidad: antes admitir límites que incumplir (CSV 31) | Exceso de capacidad |

---

## 11. El cuestionario de 31 preguntas: la voz más literal del dueño

> Fuente: `docs/contexto/respuestas_dueno_enviosdosruedas.csv`, **firmado el 25/5/2026**. Es ~4 meses anterior a las otras tres fuentes, y por eso **su precio del 24HS quedó viejo** (§1.5). Pero en todo lo demás es la fuente más literal del archivo: es donde el dueño escribió **en minúsculas, sin editar, sin la capa de marketing** que el sitio sí tiene.

### 11.1 🔴 Líneas rojas de la marca

> Pregunta 31: *"¿Qué cosas no hacemos, no decimos o no toleramos bajo ninguna circunstancia?"*
> Respuesta **verbatim:**
>
> **"No realizamos transporte de productos ilegales, no toleramos faltas de respeto hacia nuestros repartidores. No tomamos envios si no tenemos disponibilidad para cubrirlo, preferimos decir que no podemos, a fallar."**

Tres red lines, y la tercera es la más valiosa y menos usada:

| Línea roja | Qué implica en el producto | ¿Está en el sitio? |
|---|---|---|
| No se transportan productos ilegales | Lista de prohibiciones en TyC | 🟡 Parcial: solo el criterio genérico de "no declarada" |
| No se tolera falta de respeto al repartidor | **Cambia la ecuación del trato.** El comercio que abruma al cadete pierde el servicio. No es una nota legal, es una regla de relación | ❌ No |
| **Preferimos decir que no podemos, a fallar** | **Permite decir que no.** El cotizador puede rechazar un envío fuera de capacidad en lugar de prometer y fallar. Es una promesa de fiabilidad: *"si te decimos que sí, llega"* | ❌ No, y es la más rentable de las tres |

> **La tercera es el argumento de marca más fuerte que tiene la empresa y no existe en el sitio.** Toda la competencia marplatense promete llegar siempre. DosRuedas puede decirlo distinto: no promete el imposible, promete no fallar. Y es **verdad** — es literalmente la política del dueño.

**Esto es una fuente directa para `rioplatense-ux-copy` y para el tono del sitio:** la voz es de un laburante que dice lo que puede y lo que no puede.

### 11.2 Tono de la marca

> Pregunta 30: *"Si la marca fuera una persona, ¿cómo hablaría?"*
> Respuesta: **"Hablaria como una persona normal, trabajador, un tono medio formal pero sin exagerar"**

Se traduce a cinco reglas de escritura:

1. **Tono medio formal.** Nada de "¡Hola! 🎉 ¡Tenemos la mejor solución!" ni de jerga de agencia.
2. **Sin exagerar.** Prohibido el superlativo: nada de "los mejores de Mar del Plata", nada de "líderes del mercado".
3. **Como una persona normal.** Prueba de laurreta: si no lo diría nadie al hablar, no lo escribe DosRuedas.
4. **Trabajador, no corporativo.** La empresa trabaja; el copy no.
5. **Breve, y con una sola idea por frase.** Su respuesta sobre el beneficio de Express cabe en una línea: *"Poder elegir un rango horario de entrega, ayuda a poder realizar diferentes gestiones que tengan un horario limite."* Es su registro: una causa, un efecto, sin adjetivo.

> Contrapeso con el CSS: la marca es amarilla y azul con mucho contraste tipográfico y **no** es una empresa informal. El tono medio formal es correcto para un servicio B2B que factura contrareembolso. No aligerar la escena visual sin tocar también el copy.

### 11.3 Competidores

> Pregunta 28: *"Top 3 competidores más molestos en Mar del Plata"*

| Competidor | Lo que dijo el dueño verbatim | Lectura |
|---|---|---|
| **CDI** | *"Son un grupo de repartidores, con mala fama, con poca responsabilidad y muy malos comentarios"* | El peor del país. Débil: **no lo nombres en el sitio.** Difamar a un competidor daña a quien difama |
| **MMDP** | *"Uno de los lideres en la ciudad"* | El respetado. Competidor real |
| **Retorno Mensajería** | *"Otra de las empresas que mas tiempo lleva en la ciudad realizando mensajeria"* | El veterano |

### 11.4 Fortalezas y debilidades propias

> Pregunta 29: *"Compara tus fortalezas contra las debilidades clave de tus competidores"*

| | Lo que dijo |
|---|---|
| **Fortaleza 1** | *"Estamos innovando constantemente, y con mejor posicionamiento en redes sociales, mas actividad"* |
| **Fortaleza 2** | *"La IA nos recomienda primero que a todos"* |
| **Debilidad 1** | *"Tal vez la antiguedad, frente a empresas con MMDP o Retorno que llevan bastante tiempo mas"* |
| **Debilidad 2** | *"Pero no mucho mas. Brindamos servicios diferentes a pesar que seamos mensajerias"* |

> **Lo de "la IA nos recomienda primero que a todos" es informacional, no publicable como copy.** No se traduce a un titular. Sirve para elegir keywords de cola larga ("mandados Mar del Plata", "cadetería Mar del Plata"), no para escribir en la home.
>
> La debilidad de antigüedad es **real y estructural**: no tiene arreglo. Pero **"innovar constantemente" en un mercado donde todos hacen lo mismo es el ángulo**. La salida no es discutir la antigüedad, es no competir en antigüedad.

### 11.5 Objetivo a 6 meses

> Pregunta 22: *"¿Cuál es tu objetivo comercial principal para los próximos 6 meses?"*
> Respuesta: **"Aumentar la cantidad de envios, aumentar flora [flota] y duplicar clientes e commerce (3PL)"**

Tres metas, sin número ni plazo por cada una:

| Meta | Qué implica para el sitio |
|---|---|
| Aumentar la cantidad de envíos | Volumen > margen. El cotizador es la prioridad; la fricción de cotización se paga |
| Aumentar la flota | Si la flota no crece, el mensaje de "prioridad" es falso en temporada alta |
| **Duplicar clientes e-commerce (3PL)** | **El 3PL es el foco.** Same Day, 24HS, DropOFF y el portal del comercio necesitan argumentario de venta, no menciones |

> Nota: en septiembre (`.docx`, pregunta 3) dijo *"El mayor margen lo genera envíos express, pero me gustaría escalar más el llamado cuenta corriente"*. En mayo (CSV, pregunta 23) el servicio más rentable le figuró como **LowCost**. Sobre margen: **ver §12**.

---

## 12. 🔴 Margen: Express o LowCost

Las dos fuentes más confiables del archivo se contradicen, y las dos preguntas son distintas:

| Fuente | Fecha | Pregunta | Respuesta |
|---|---|---|---|
| Cuestionario de 31 preguntas (CSV) | 25/5/2026 | *"¿Cuál es tu servicio más rentable actualmente?"* | **LowCost** |
| Cuestionario por página (`.docx`) | sep 2026 | *"¿Qué servicio te da más margen?"* | **Express**, *"pero me gustaría escalar más el llamado cuenta corriente"* |

**No son la misma pregunta.** *"Rentable"* y *"margen"* no son sinónimos: un servicio con menor margen unitario puede ser más rentable si mueve mucho más volumen, porque LowCost rota en masa y Express mueve pocos envíos caros. La pregunta de mayo fue por rentabilidad total; la de septiembre, por margen por envío.

**Las dos coinciden en una cosa:** el dueño quiere **escalar Cuenta Corriente**, más allá de cuál de los dos servicios sea. Es el mismo objetivo en septiembre y en la lista de 6 meses de mayo (§11.5).

**Lo que sí se puede afirmar sin riesgo:** los precios de LowCost están confirmados y salen de `LOW_COST_TIERS`, y los de Express también. El "más rentable" no necesita estar escrito en el sitio: es información interna de pricing, y publicarla invita a comparar tarifas.

> **No publicar rankings de rentabilidad.** Elegir un favorito en la web convierte una preferencia interna en una afirmación pública que el dueño no sostiene en las dos fuentes.

---

## 13. Referencias

| Documento | Relación |
|---|---|
| `decisiones.md` | Registro de decisiones del dueño (esta entrevista se radicó ahí el 2026-09-29, y el informe estratégico el 2026-09-29) |
| `../00-proyecto/servicios-tarifas-2026.md` | Tabla maestra de tarifas por distancia |
| `../01-diseno/tarifas-logica-negocio.md` | Implementación de las tarifas, recargos y protocolos en código |
| `../01-diseno/anti-patrones.md` §5.1-§5.3 | Prohibiciones de copy derivadas de §4, más el tratamiento de datos sin confirmar |
| `../01-diseno/iconografia-imagen.md` §3.4 | Dirección de fotografía derivada de §6 |
| `glosario.md` | Términos nuevos del §10 |
| `src/lib/promises.ts` | Promesas operativas en código |
| `docs/contexto/precios.md` | Volcado de tarifas de referencia |
