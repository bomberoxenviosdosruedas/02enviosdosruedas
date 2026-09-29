# Servicios — Envíos DosRuedas

> Fuentes del dueño: `01-fuentes-dueno/docx-2026-09.md` (D), `01-fuentes-dueno/xlsx-2026-09.md` (X, con celda), CSV de mayo (C). Orden de autoridad y criterio [PLANTILLA] en `../README.md`.
> Verificado contra código el 2026-09-29.

## 0. Los 6 servicios que muestra el sitio hoy

El dueño pidió dividir el viejo "Depósito & Fulfillment 3PL": *"no lo llamaría así, lo dividiría en E Commerce 24HS y E commerce same day (same day tiene que dejar stock en nuestro depósito)"* (X `01!E11`). Plan Emprendedores quedó absorbido por Cuenta Corriente Flexible (decisión 2026-09-29: es la misma propuesta).

| Servicio | Definición del dueño (corta) | Corte | Entrega | Precio → dónde vive | URL hoy |
|---|---|---|---|---|---|
| **Express** | *"Entregas con eleccion de rango horario"* (D §3) | 15:00 hs, 2 hs de anticipación (`EXPRESS_CUTOFF_TIME`, `EXPRESS_LEAD_TIME`) | Franja de 3 hs a elección, último rango 17 a 19 hs | Por distancia: `EXPRESS_TIERS` + `EXPRESS_PRICE_PER_KM` (`src/lib/pricing.ts`) | `/servicios/envios-express` · cotiza en `/cotizar` |
| **LowCost** | *"Entregas sin eleccion de rango horario"* (D §3) | 13:00 hs (`LOWCOST_CUTOFF_TIME`) | En el día, antes de 19:00 hs (`LOWCOST_DELIVERY_DEADLINE`) | Por distancia: `LOW_COST_TIERS` + `LOW_COST_PRICE_PER_KM` | `/servicios/envios-lowcost` · cotiza en `/cotizar` |
| **Mercado Envíos Flex** | *"Entregas exclusivas para vendedores de MercadoLibre"* (D §3) | 15:00 hs (`FLEX_CUTOFF_TIME`) | Antes de 20:00 hs (`FLEX_DELIVERY_DEADLINE`). Solo Mar del Plata | Misma tarifa que LowCost (X `02!E7`). Niveles 2/3 `$6.500`/`$4.500` **sin respaldo** (`src/components/servicios/flex/FlexPricing.tsx:50,59`) | `/servicios/enviosflex` |
| **Cuenta Corriente Flexible** | *"Para emprendedores y comercios que quieren tener un equipo de entregas de confianza, aunque la cantidad de pedidos cambie cada día"* (D §3) | 15:00 hs, 2 hs de anticipación | Franjas de 3 hs, como Express | Tarifas LowCost. *"Depende cantidad de envíos (comparto archivo de valores)"* (X `02!E10`): el archivo **no está en el repo** | `/servicios/empresas-cuenta-corriente` (antes también `/servicios/plan-emprendedores`, hoy redirect 308) |
| **E-commerce 24HS** | *"Falta agregar e Commerce 24hs (se retira hoy se entrega mañana)"* (X `02!F8`) | Retiro en el día | Día hábil siguiente | `$3.800`/envío, **confirmación verbal** del 2026-09-29 (literal en `src/app/servicios/page.tsx:230` y `:274`, sin constante). Recolección gratis desde 10 envíos (C). DropOFF `-20 %` solo acá (X `01!E13`) | Tarjeta `/servicios#ecommerce-24hs`; ficha en `/servicios/deposito-fulfillment` |
| **E-commerce Same Day** | *"Dejas un stock en nuestro deposito, y todas las ventas que realices hasta las 15hs serán entregadas en el día, permite coordinacion de rango horario, tarifa fija a toda la ciudad"* (D §3) | 15:00 hs | Antes de 20:00 hs, rango a coordinar | `$6.000` fijo: `SAME_DAY_FIXED_PRICE` (`src/lib/promises.ts:92`) | `/servicios/deposito-fulfillment` |

**Transversales (no son servicios en la vista):** Contrareembolso `$0` de comisión (`CONTRAREEMBOLSO_COMMISSION_PERCENT`), rendición *"en el día, al día siguiente o semanal, según acordado"* (D §3). La ficha `/servicios/envios-contrareembolso` redirige a `/servicios` desde 2026-09-29. Cotizadores separados `/cotizar/express` y `/cotizar/lowcost` redirigen a `/cotizar` (pedido del dueño, X `01!E7`).

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
| Contrareembolso | **Sí, y sin cargo extra** | CSV pregunta 21 |

> **El CSV no da el número del `$6.000`**, dice solo "tarifa plana a toda la ciudad". El número viene del `.docx`, que es fuente del dueño. `SAME_DAY_FIXED_PRICE = 6000` en `promises.ts` está respaldado.

**Nomenclatura comercial correcta:** este servicio se llama **E-Commerce Same Day** en el sitio, no "3PL" a secas. "3PL" describe la operación; el nombre que compra el cliente es Same Day.

**Detalle operativo del picking:** el informe estratégico especifica **picking por código QR**, y el sitio **ya lo publica** en `/servicios`, `/servicios/deposito-fulfillment` y `EmprendedoresFeatures`. Coincide con lo que el dueño dijo del 3PL. Es un diferenciador real que ya está bien implementado.

### 1.5 E-Commerce 24HS (Next Day) — ✅ precio confirmado

Definido por el dueño en la planilla y con detalle en el cuestionario de 31 preguntas:

> **Planilla, notas:** "Falta agregar eCommerce 24hs (entregas en 24hs, se retira hoy se entrega mañana)"

> **Cuestionario (25/5/2026), verbatim:** *"E Commerce 24hs (Next day) Entregas al siguiente dia, **recoleccion gratuita si son mas de 10 envios, si no tiene un costo de $4000**."*

| Atributo | Valor | Fuente |
|---|---|---|
| Qué es | Se retira **hoy**, se entrega **mañana** | X `02!F8` (nota del dueño en rojo) |
| Precio | **✅ `$3.800/envío`**, confirmado por Matías el 2026-09-29 | Confirmación verbal |
| **Recolección** | **Gratis desde 10 envíos.** Por debajo de 10, la recolección tiene costo | CSV pregunta 19 |
| DropOFF | Se puede combinar: `-20 %` sobre la tarifa final (§1.8) | CSV pregunta 19 |
| Horario de recepción en base | Sin dato del dueño. El "Lun-Vie 9-18" solo existe en la transcripción no fiel | — |

**Historia del precio, para que nadie lo toque sin aviso:**

| Momento | Número | Dónde |
|---|---|---|
| 25/5/2026 | `$4.000` sin recolección gratis | CSV — el dueño todavía no había decidido el corte de 10 envíos |
| Sitio al 2026-09-29 | `"$3.800" por envío` | `src/app/servicios/page.tsx:230` y `:274` |
| **2026-09-29** | **`$3.800` confirmado** por Matías | Confirmación verbal |

El CSV dice `$4.000`, el sitio dice `$3.800`. **El sitio tiene razón** y el CSV quedó desactualizado: el precio bajó cuando se agregó la cantidad mínima de 10 envíos para la recolección gratis. **El CSV es la fuente más antigua del archivo (mayo), no la más nueva.** No usarlo para el precio del 24HS.

**Pendiente de implementación, no de precio:** el 24HS no tiene constante ni función de cálculo: el `$3.800` está escrito en `src/app/servicios/page.tsx:230` y `:274`. El botón de la tarjeta lleva a `/servicios/deposito-fulfillment`, que describe el servicio pero no lo cotiza.

**DropOFF aplica solo acá.** El `-20 %` es exclusivo del 24HS según la planilla (X `01!E13`), que manda sobre el CSV de mayo (§1.8).

### 1.6 Contrareembolso

> "Cobramos tus productos al entregar, efectivo o transferencia, y te rendimos lo cobrando en el día, al día siguiente o de forma semanal, segun acordado. Este servicio no tiene costo extra"

| Atributo | Valor |
|---|---|
| Costo del servicio | **$0.** Sin cargo, sin límite y sin comisión por gestión de cobranza |
| Medios de pago | Efectivo, transferencia, QR |
| **Rendición** | En el día, al día siguiente o semanal, **según lo acordado** |
| Facturación | No emiten Factura A. El tipo de factura no lo declaró el dueño (`../01-fuentes-dueno/conflictos-abiertos.md` #2) |

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
| Facturación | **No Factura A** (D §4). Pagos semanales, quincenales o mensuales (D §3); liquidaciones *"A coordinar con cada cliente"* (X `01!E17`). Tipo de factura sin declarar |
| Portal | **Portal del comercio** con la información de todos los envíos a mano |
| Beneficio de gestión | Resumen de todos los envíos + facturación conjunta = mejor control y estadísticas |

**Dos diferencias clave frente a LowCost**, y son las que hay que explicitar en la tabla comparativa: el corte es 15:00 hs y no 13:00 hs, y tiene franjas a elección. Plan Emprendedores es LowCost con **prioridad de agenda**, no LowCost barato.

### 1.8 Modalidad DropOFF (vigente, general, publicada sin explicar)

> **Verbatim del dueño (CSV, 25/5/2026):** *"Opcion DropOFF: Trae a nuestro deposito los envios, y obtene un 20% de descuento en la tarifa final"*

| Atributo | Valor |
|---|---|
| Qué es | El comercio **deja el paquete ya listo** en el hub de Friuli 1972, en vez de esperar el retiro |
| Beneficio | **`-20 %`** sobre **la tarifa final** de cada envío (`DROPOFF_DISCOUNT_PERCENT`) |
| Corte | **No publicar.** El 13:00 hs viene del informe estratégico; el dueño no lo mencionó (`../01-fuentes-dueno/conflictos-abiertos.md` #9) |
| Alcance | **Solo E-commerce 24HS.** *"Solo en E-commerce 24HS"* (X `01!E13`) |

**Dos fuentes discrepan sobre el alcance, y manda la planilla:**

| Fuente | Qué dice | Estado |
|---|---|---|
| **Planilla (sep-2026), X `01!E13`** | *"Solo en E-commerce 24HS"* | **Vigente.** La planilla es más nueva y manda sobre el CSV |
| CSV, pregunta 19 (may-2026) | *"Trae a nuestro deposito los envios, y obtene un 20% de descuento en la tarifa final"* | Redacción general, anterior. Corregido el 2026-09-29: antes la KB tomaba esta como la válida, contra su propio orden de autoridad |

**Lo que sí falta:** el `-20 %` se anuncia en la tarjeta del 24HS, pero no se explica **qué es DropOFF** (el comercio trae los envíos listos a Friuli 1972).

---


---

## 2. Tabla resumen de servicios

| Servicio | Corte | Entrega | Ventana a elección | Tarifa |
|---|---|---|---|---|
| **Express** | 15:00 hs | En el día, límite 19 hs | Sí, 3 hs | Por distancia (tabla maestra) |
| **LowCost** | 13:00 hs | Antes de 19 hs | No | Por distancia (tabla maestra) |
| **Flex** | 15:00 hs | Antes de 20 hs | No | Por nivel de volumen (§1.3.1) |
| **E-Commerce Same Day** | 15:00 hs | Antes de 20 hs | Sí | **$6.000 fijo** a toda la ciudad |
| **DropOFF** | Sin dato del dueño | según 24HS | — | **`-20 %`** sobre la tarifa final, **solo E-commerce 24HS** |
| **E-Commerce 24HS** | Retiro en el día | Día siguiente | — | **✅ `$3.800`** confirmado. Recolección gratis desde 10 envíos |
| **Cuenta Corriente Flexible** (ex Plan Emprendedores) | 15:00 hs | En el día | Sí, 3 hs | **Tarifas LowCost** |
| **Contrareembolso** | — | transversal | — | **$0** |

---
