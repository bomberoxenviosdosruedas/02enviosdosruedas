# Tarifas, tarifas fijas y recargos — Envíos DosRuedas

> **Copia única** de los precios en la KB. Todo otro archivo enlaza acá. Verificado contra `src/lib/pricing.ts` y `src/lib/promises.ts` el 2026-09-29.

> **Fuente consolidada:** `docs/contexto/precios.md`, `PROJECT.md` §3, `src/lib/pricing.ts`, `prisma/schema.prisma`, y la entrevista al dueño del 2026-09-28 (`docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md`).
>
> **⚠️ DOCUMENTO CRÍTICO Y FUENTE DE VERDAD:** Ningún componente, cotizador o texto comercial debe mostrar precios distintos a los aquí consignados.
>
> **Alcance:** §1 son las tarifas por distancia; §1.1 las tarifas fijas; §7 los recargos; §8-§13 el flujo server-side, las capas de precio, las reglas y el testing.

---

## 1. Tabla Maestra de Tarifas 2026

| Servicio | Rango | Distancia Mín (km) | Distancia Máx (km) | Precio Base ARS | Regla de Cálculo |
|---|---|---|---|---|---|
| **EXPRESS** | 0 a 3 km | `0.0` | `3.0` | **$3.700** | Tarifa fija base |
| **EXPRESS** | 3 a 5 km | `3.0` | `5.0` | **$4.600** | Tarifa fija base |
| **EXPRESS** | 5 a 7 km | `5.0` | `7.0` | **$6.100** | Tarifa fija base |
| **EXPRESS** | 7 a 10 km | `7.0` | `10.0` | **$8.200** | Tarifa fija base |
| **EXPRESS** | +10 km a 20 km | `10.0` | `9999.0` | **$1.000 / km** | `Math.ceil(km) × $1.000` |
| **EXPRESS** | > 20 km | `20.0` | `∞` | *Consultar* | Derivación directa a WhatsApp |
| **LOW_COST** | 0 a 3 km | `0.0` | `3.0` | **$3.000** | Tarifa fija base |
| **LOW_COST** | 3 a 5 km | `3.0` | `5.0` | **$4.000** | Tarifa fija base |
| **LOW_COST** | 5 a 7 km | `5.0` | `7.0` | **$5.300** | Tarifa fija base |
| **LOW_COST** | 7 a 10 km | `7.0` | `10.0` | **$7.000** | Tarifa fija base |
| **LOW_COST** | +10 km a 20 km | `10.0` | `9999.0` | **$700 / km** | `Math.ceil(km) × $700` |
| **LOW_COST** | > 20 km | `20.0` | `∞` | *Consultar* | Derivación directa a WhatsApp |

> **Flex y Cuenta Corriente:** no tienen fila en `PriceRange`. Cuenta Corriente se muestra como "Tarifas LowCost" (lo dijo el dueño, X `02!B10`); los niveles 2 y 3 de Flex siguen con números sin respaldo (`FlexPricing.tsx:50,59`). Ver `DESIGN.md` §12.2.
>
> **Servicios con tarifa fija** (no dependen de la distancia): E-Commerce Same Day `$6.000` fijos a toda la ciudad; DropOFF `-20 %`, solo E-commerce 24HS; Contrareembolso `$0` de comisión. Centralizados en `src/lib/promises.ts` (§1.1).
>
> **E-Commerce 24HS (Next Day):** **precio confirmado = `$3.800`/envío** (Matías, 2026-09-29). Además, **recolección gratis desde 10 envíos**; por debajo de 10, la recolección tiene costo. El sitio lo publica en `src/app/servicios/page.tsx:230` y `:274`, pero el número vive **hardcodeado**: no hay constante, ni `ServiceType`, ni rango en `PriceRange`, ni función en `pricing.ts`. La tarjeta enlaza a `/servicios/deposito-fulfillment`, que no lo cotiza. **El defecto es la implementación, no el precio.** Ver `02-dominio/entrevista-dueno-2026-09-28.md` §1.5.
>
> ⚠️ El CSV de mayo (25/5/2026) decía `$4.000`. **El CSV es la fuente más antigua del archivo, no la más nueva:** el precio bajó después. No usar el CSV para el 24HS.
>
> **Tarifa de periferia:** `$1.000 × km` de **km ruta** (`PERIPHERY_PRICE_PER_KM`, confirmado por el dueño el 2026-09-30), para envíos fuera de Mar del Plata. **No hay lista cerrada de barrios:** *"No hay zonas establecidas con limites"* (X `01!E18`). Los barrios Félix U. Camet, La Florida, Camet, 2 de Abril, El Retazo, Estación Camet, Acantilados, San Patricio y San Jacinto son los que el dueño nombró como **fricción del mapa** (D §2), no como zona tarifaria. Se liquida aparte del excedente dentro del radio de 20 km. El `$1.200` que figura en el cuestionario y la planilla **no se aplica**: ver §7.1.
>
> ✅ **Excedente: cerrado el 2026-09-29.** `$1.000`/km es el **excedente dentro del radio** de Express (10 → 20 km) y `$700`/km el de LowCost. `EXPRESS_PRICE_PER_KM = 1000` y `pricing.ts` no se tocan.
>
> 🔴 **Periferia: corregido el 2026-09-30.** El 2026-09-29, al cerrar el excedente, se había dado por hecho que `$1.200` era la tarifa de periferia, tomándola del cuestionario y de la planilla y bajando el código para que casara. **Ese fue el error:** la periferia es `$1.000` por km de ruta. Ver §7.1, que explica por qué el `$1.200` de las fuentes no se aplica.
>
> **Escalas de Flex por volumen** (Nivel 1/2/3): **ya publicadas** en `components/servicios/flex/FlexPricing.tsx`. El Nivel 1 se deriva de `LOW_COST_TIERS`; los **Niveles 2 y 3 tienen los precios hardcodeados** en el componente (`$6.500` y `$4.500`).
>
> El dueño **sí validó el concepto**, por escrito en el CSV de mayo: *"El valor del envios es el mismo que el LowCost"* y *"No se solicita minimos de envios, pero a mayor cantidad de envios diarios, mejor valor va a obtener"*. O sea: base LowCost, descuento por volumen, sin mínimo. **Los números concretos no los respalda ninguna fuente.** No tocar los valores sin su respuesta. Ver `02-dominio/entrevista-dueno-2026-09-28.md` §1.3.1.

### 1.1 Tarifas fijas (no dependen de la distancia)

Viven en `src/lib/promises.ts`, no en `PriceRange`. Mismo criterio de fuente única: **el componente importa la constante, nunca escribe el número.**

| Concepto | Constante | Valor | Respaldo |
|---|---|---|---|
| E-Commerce Same Day (Friuli 1972) | `SAME_DAY_FIXED_PRICE` | `$6.000` fijos a toda la ciudad | `.docx` ("tarifa fija a toda la ciudad ($6.000)"). El CSV dice "plana" sin número |
| E-Commerce 24HS (Next Day) | — | **`$3.800`/envío** | ✅ Confirmado por Matías el 2026-09-29. **Recolección gratis desde 10 envíos** |
| DropOFF | `DROPOFF_DISCOUNT_PERCENT` | **`-20 %`** sobre la tarifa final | ✅ **Solo E-commerce 24HS** (X `01!E13`). El CSV de mayo lo decía general; manda la planilla. Sin horario de corte del dueño |
| Contrareembolso | — | **`$0`** comisión | `.docx` y CSV (pregunta 21) coinciden |
| Periferia | `PERIPHERY_PRICE_PER_KM` | **`$1.000 × km`** de km ruta | Confirmado por el dueño 2026-09-30. Fuera de Mar del Plata, sin lista de barrios. El `$1.200` del cuestionario y la planilla no se aplica (§7.1) |
| Bulto extra | `BULK_EXTRA_FROM_ARS` | **Desde `$1.950`**, el monto final varía según el servicio | ✅ Respuesta del dueño, X `03!C6` (celda de respuesta). La KB lo marcaba como [PLANTILLA] por error hasta el 2026-09-29 |
| Flex Nivel 2 Pro (Z4/Z5) | — | `$6.500` tope | 🔴 Hardcodeado, **sin confirmar** |
| Flex Nivel 3 Elite | — | `$4.500` planos | 🔴 Hardcodeado, **sin confirmar** |

> **Same Day, 24HS, DropOFF, Contrareembolso y Periferia son tarifas fijas, no tablas por distancia.** No tienen fila en `PriceRange` porque el modelo es otro. Eso no las exime de la regla: su valor va en `promises.ts` y el componente lo importa. **El 24HS es la excepción:** todavía no tiene constante propia, y por eso está hardcodeado en `src/app/servicios/page.tsx:230`.

---

## 2. Regla Obligatoria `Math.ceil(km)` para Excedentes

Para distancias **> 10 km y ≤ 20 km**:

1. Se redondea la distancia real en kilómetros hacia el **entero superior inmediato** usando `Math.ceil(km)`.
2. Se multiplica dicho valor entero por la tarifa por kilómetro del servicio:
   - **Express:** `Math.ceil(km) * 1000`
   - **LowCost:** `Math.ceil(km) * 700`

### Ejemplos Validados (No Inventar Otros)

| Distancia | Servicio | Cálculo | Resultado |
|---|---|---|---|
| 10.3 km | Express | `Math.ceil(10.3) = 11` → `11 × $1.000` | **$11.000 ARS** |
| 12.0 km | Express | `Math.ceil(12.0) = 12` → `12 × $1.000` | **$12.000 ARS** |
| 10.1 km | LowCost | `Math.ceil(10.1) = 11` → `11 × $700` | **$7.700 ARS** |
| 15.4 km | LowCost | `Math.ceil(15.4) = 16` → `16 × $700` | **$11.200 ARS** |
| 20.1 km | Ambos | Supera umbral operativo | `'consultar'` + WhatsApp precompletado |

---

## 3. Mapeo en Base de Datos (Prisma)

### Esquema (`prisma/schema.prisma`)

```prisma
enum ServiceType {
  LOW_COST
  EXPRESS
}

model PriceRange {
  id             Int         @id @default(autoincrement())
  serviceType    ServiceType
  distanciaMinKm Float
  distanciaMaxKm Float
  precioRango    Float
  descripcion    String
}
```

### Registros Exactos en DB (Seed `prisma/seed.ts`)

```typescript
// LOW_COST
{ serviceType: 'LOW_COST', distanciaMinKm: 0,   distanciaMaxKm: 3,   precioRango: 3000, descripcion: 'LOW_COST: 0 a 3 km' },
{ serviceType: 'LOW_COST', distanciaMinKm: 3,   distanciaMaxKm: 5,   precioRango: 4000, descripcion: 'LOW_COST: 3 a 5 km' },
{ serviceType: 'LOW_COST', distanciaMinKm: 5,   distanciaMaxKm: 7,   precioRango: 5300, descripcion: 'LOW_COST: 5 a 7 km' },
{ serviceType: 'LOW_COST', distanciaMinKm: 7,   distanciaMaxKm: 10,  precioRango: 7000, descripcion: 'LOW_COST: 7 a 10 km (Precio base)' },
{ serviceType: 'LOW_COST', distanciaMinKm: 10,  distanciaMaxKm: 9999, precioRango: 700,  descripcion: 'LOW_COST: km adicional excedente (10+ km)' },

// EXPRESS
{ serviceType: 'EXPRESS', distanciaMinKm: 0,   distanciaMaxKm: 3,   precioRango: 3700, descripcion: 'EXPRESS: 0 a 3 km' },
{ serviceType: 'EXPRESS', distanciaMinKm: 3,   distanciaMaxKm: 5,   precioRango: 4600, descripcion: 'EXPRESS: 3 a 5 km' },
{ serviceType: 'EXPRESS', distanciaMinKm: 5,   distanciaMaxKm: 7,   precioRango: 6100, descripcion: 'EXPRESS: 5 a 7 km' },
{ serviceType: 'EXPRESS', distanciaMinKm: 7,   distanciaMaxKm: 10,  precioRango: 8200, descripcion: 'EXPRESS: 7 a 10 km (Precio base)' },
{ serviceType: 'EXPRESS', distanciaMinKm: 10,  distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'EXPRESS: km adicional excedente (10+ km)' },
```

> **Nota:** `distanciaMaxKm: 9999` es el centinela para el tramo excedente (+10 km). La lógica en `src/lib/pricing.ts` detecta este valor y aplica `Math.ceil(km) * precioRango`.

---

## 4. Implementación en Código (`src/lib/pricing.ts`)

### Constantes Exportadas (Fallback si BD vacía)

```typescript
export const EXPRESS_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 5, price: 4600 },
  { minKm: 5, maxKm: 7, price: 6100 },
  { minKm: 7, maxKm: 10, price: 8200 },
];
export const EXPRESS_PRICE_PER_KM = 1000;

export const LOW_COST_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 5, price: 4000 },
  { minKm: 5, maxKm: 7, price: 5300 },
  { minKm: 7, maxKm: 10, price: 7000 },
];
export const LOW_COST_PRICE_PER_KM = 700;
```

### Funciones Puras (Testables, Sin I/O)

```typescript
export function calculateExpressPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar'

export function calculateLowCostPrice(
  distanceKm: number,
  priceRanges: PriceRangeProp[]
): number | 'consultar'
```

**Lógica compartida:** Busca rango en `PriceRange` filtrando por `serviceType`. Si encuentra rango con `distanciaMaxKm === 9999`, aplica `Math.ceil(distanceKm) * precioRango`. Si no hay rangos en BD, cae a las constantes `*_TIERS` arriba.

---

## 5. Reglas de Integridad (No Negociables)

| Regla | Descripción |
|---|---|
| **Fuente única** | Tarifas se leen en servidor (`PriceRange` vía Prisma → fallback `pricing.ts`). **Nunca** confiar en tarifas enviadas por el cliente. |
| **No copiar a mano** | Cualquier precio en código, copy, seed o marketing debe coincidir **exactamente** con esta tabla. |
| **Derivar, no duplicar** | Componentes UI deben derivar precios de `src/lib/pricing.ts` (constantes exportadas), no hardcodear tablas. |
| **Flex/Emprendedores** | Sin fila en `PriceRange` → **no mostrar números**. Mostrar CTA "Cotización a medida por WhatsApp". |
| **Redondeo** | Siempre `Math.ceil(km)` en excedentes. **Nunca** `Math.floor`, `Math.round` ni truncar. |

---

## 6. Referencias Cruzadas

| Documento | Ubicación |
|---|---|
| Lógica pura de cálculo | `src/lib/pricing.ts` |
| Esquema Prisma | `prisma/schema.prisma` |
| Seed de base de datos | `prisma/seed.ts` |
| Server Action de cotización | `src/actions/quote.ts` |
| Sistema de diseño (tokens) | `docs/knowledge_base/03-diseno/design-system.md` §2 |
| Quick reference (cheat sheet) | `docs/knowledge_base/06-referencia/cheat-sheet.md` |

---

## 7. Recargos y adicionales

Fuente: pestaña 03 de la planilla (X `03!*`) y respuestas del `.docx`. **Publicado desde 2026-09-29** en `/cotizar`, sección "Lo que puede sumar al precio" (`src/components/cotizar/unified/CotizadorRecargos.tsx`), con los valores de `src/lib/promises.ts`: `RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST`, `RAIN_SURCHARGE_PERCENT`, `WAIT_TOLERANCE_MIN`, `WAIT_CHARGE_ARS`, `WAIT_CHARGE_BLOCK_MIN`, `EXTRA_STOP_SURCHARGE_PERCENT`, `EXTRA_STOP_MAX_DETOUR_KM`, `RETRY_CHARGE_PERCENT`, `BULK_EXTRA_FROM_ARS`, `PERIPHERY_PRICE_PER_KM`.

| Concepto | Aplica | Monto | Condición / tolerancia | Nota |
|---|---|---|---|---|
| **Lluvia / mal tiempo** | Sí | **+50 %** Express y LowCost · **+30 %** Flex, Fulfillment, Emprendedores y Cuentas Corrientes | Lluvia activa o calzada mojada. Tolerancia: *"llovizna muy leve"* (X `03!D5`) | `RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST` (50) y `RAIN_SURCHARGE_PERCENT` (30) |
| **Bulto extra** | Sí | **Desde `$1.950`** (X `03!C6`, respuesta del dueño); *"extra según el servicio"* (D) | Se cobra **siempre** que lo transportado sea **mayor a 40 × 40 cm o +5 kg** | `BULK_EXTRA_FROM_ARS`. **🔴 La dimensión está en disputa**: el CSV dice *"5kg y más de 40x30cm"* (conflicto #5) |
| **Tiempo de espera** | Sí | **$2.100 cada 10 min** | Tolerancia de **10 min** sin cargo; corre **a partir del minuto 11** | El cadete espera en puerta o en una parada |
| **Paradas adicionales** | Sí | **+50 %** de la tarifa del envío por punto intermedio | Solo si la parada está **sobre la ruta** del viaje (hasta ~2 km entre paradas) | Si la parada **desvía** del trayecto planeado, se cotiza como **envío independiente**, no como recargo |
| **Horario nocturno / feriados / domingos** | **No** | **No se trabaja fuera del horario laboral. Sin excepción.** | — | Esto es una restricción, no un recargo. No hay tarifa nocturna que publicar |
| **Reintento de entrega** | Sí | **100 %** en Express y LowCost (`RETRY_CHARGE_PERCENT`) | El destinatario no está | En los demás, *"50% o sin cargo"* (D). *"Zonas cercanas a veces realizamos 2da visita sin costo"* (X `03!D10`). El "bonificado al 100 % en el nivel máximo" sale de `FlexPricing.tsx`, no del dueño |
| **Logística inversa (Flex)** | Sí | **$0** | El comprador rechaza el paquete en puerta | El paquete vuelve al local del vendedor sin cargo |
| **Gestión de cobranza / depósito bancario** | **No** | **Sin costo, sin límite** | — | No hay porcentaje por montos elevados cobrados en contrareembolso |
| **Periferia / larga distancia** | Sí | **`$1.000` por km de ruta** (`PERIPHERY_PRICE_PER_KM`) | Envíos **fuera de Mar del Plata**. Sin lista de barrios (X `01!E18`) | Tarifa aparte, no es el excedente dentro del radio (§7.1) |
| **Mercadería excluida** | — | **No se acepta** | *"Liquidos, tortas, productos mal embalados, cosas ilegales, animales"* (X `01!E22`, respuesta del dueño) | Debe estar en `/terminos-y-condiciones`. Ausente hoy |

**El umbral de bulto es uno solo, expresado de dos formas:** 5 kg y 40 × 40 cm son lo mismo en masa y en volumen. Pasado ese umbral, el bulto se coordina aparte y entra el recargo desde `$1.950` según el servicio.

> **No hay techo de peso publicado, y es una decisión del dueño (2026-09-30).** Existió una constante `MAX_WEIGHT_KG = 15` que el sitio llegó a publicar como *"el máximo que lleva la moto es 15 kg"*. **Ningún documento del dueño lo respalda:** el 15 kg venía solo del `.docx`, siempre como pregunta sin respuesta registrada o como aserción del propio `.docx` — la misma clase de número viejo que el dueño ya corrigió ahí ("60-90 min: ESTO ES FALSO"). Lo que el dueño **sí** respondió, textual, fue *"todo lo que pueda ser llevado en moto"* (CSV, pregunta 4), **sin cifra**. La constante se eliminó. El número queda bloqueado en `src/lib/copy-guard.test.ts`, junto con "60-90 min" y "rendición inmediata".

> **🔴 La única dimensión en disputa es la del bulto.** El CSV, contestando *"¿Cuál es el límite de tamaño y peso?"*, escribió *"mayor a 5kg y mas de **40x30cm**"*. El resto de las fuentes y todo el código usan **40 × 40 cm**. Diez centímetros en el umbral que dispara el recargo. **Mientras el dueño no lo diga, el sitio sigue con 40 × 40** (es el valor que el código ya usa y el que aparece en el copy publicado), pero queda anotado en `../01-fuentes-dueno/conflictos-abiertos.md` #5.

### 7.1 🔴 Sin resolver: ¿el km de periferia es `$1.000` o `$1.200`?

> **Matías confirmó el 2026-09-30: la periferia se cobra a `$1.000` por km de ruta.** `PERIPHERY_PRICE_PER_KM = 1000`, el código no cambia, y esta KB y el test de `/cotizar` se corrigieron para dejar de decir `$1.200`.
>
> **⚠️ Contradicción viva con las fuentes, y es deliberada.** El cuestionario (`.docx` §6) y la planilla (`01!E10`, `01!E19`) dicen `$1.200 × km` **literal y dos veces**. Sobrevivieron a la contradicción porque el 2026-09-29 se resolvió el tema al revés (se tomó el `$1.200` de las fuentes y se bajó el código, que es exactamente lo que este párrafo advertía que no había que hacer). Ese error ya está corregido. **No vuelvas a "armonizar" el código con las fuentes:** la respuesta del dueño del 2026-09-30 es posterior a ellas y manda.
>
> Este párrafo existe porque el mismo número aparece en dos fuentes del dueño con `$1.200` y en un test con `$1.000`. La próxima vez que aparezca, ya está contestado.

El informe estratégico §5 usaba el `$1.200` para argumentar que la tarifa canónica era esa. Lo que en realidad había:

| Fuente | Afirmación | Estado |
|---|---|---|
| Cuestionario `.docx` §6 | *"los envíos fuera de Mar del Plata, se cobran a $1200 x km (KM RUTA)"* | ⚠️ **No se aplica.** Confirmado por Matías el 2026-09-30 |
| Planilla `01!E10` y `01!E19` | *"el valor se calcula a KM Ruta a $1200 para localidades aledañas de mar del plata"* | ⚠️ **No se aplica.** Misma confirmación |
| Informe §4 / §5 | *"$1.200 por km de ruta"* | Informe derivado de las fuentes anteriores. **Descartado** |
| **Planilla, pestaña 02** | Express *"Z5 (+10km): `$1.000` x km"* · LowCost *"Z5 (+10km): `$700` x km"* | Coincide con el código |
| **Dueño, 2026-09-30** | Periferia a `$1.000` por km de ruta | ✅ **Manda.** `PERIPHERY_PRICE_PER_KM = 1000` |

**Regla operativa:** siguen siendo dos tarifas distintas —no hay que confundirlas aunque hoy coincidan en el número—, porque se calculan sobre bases distintas y se cobran por canales distintos.

| | Tarifa | Base de cálculo | Cuándo aplica |
|---|---|---|---|
| **Excedente dentro del radio** | Express `$1.000`/km · LowCost `$700`/km | km (`Math.ceil`) | Pasados los 10 km, **hasta los 20 km**, dentro del cálculo automático |
| **Periferia** | `$1.000` × km de ruta | km de ruta | **Fuera de Mar del Plata**, sin lista de barrios. Se cotiza por separado |

---


---

## 8. Flujo de Cálculo (Server-Side)

```
Cliente (cotizador)
    │
    ▼
Server Action `calculateQuoteAction` (src/actions/quote.ts)
    │
    ├─► Recibe: origen, destino, coords, serviceType (EXPRESS/LOW_COST)
    │
    ▼
`useGoogleRoute` hook → OSRM → `distanceKm` (número real, ej: 10.3)
    │
    ▼
Prisma: `priceRange.findMany({ where: { serviceType } })`
    │
    ├─► Si hay rangos en BD → `calculateExpressPrice(distanceKm, priceRanges)`
    │
    └─► Si BD vacía → Fallback `EXPRESS_TIERS` / `LOW_COST_TIERS` de `pricing.ts`
    │
    ▼
Retorna: `number` (ARS) | `'consultar'` (si > 20 km)
    │
    ▼
Cliente: muestra tarifa + genera link WhatsApp con `quoteId`
```

---


## 9. Capas de Precio y Claims Legales

> **Fuente:** `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` §1 y §2.

La tabla de §1 (tarifas por distancia) es **una** de las tres capas de precio. Los servicios con tarifa fija por servicio no están en `PriceRange` y por eso viven en `src/lib/promises.ts`.

| Capa | Dónde vive | Qué cubre |
|---|---|---|
| **1. Por distancia** | `PriceRange` (BD) → fallback `pricing.ts` | Express y LowCost |
| **2. Fija por servicio** | `src/lib/promises.ts` | Same Day `$6.000`, DropOFF `-20 %` (solo 24HS), Contrareembolso `$0`, Periferia `$1.000 × km`, Bulto extra desde `$1.950`, recargos (§7) |
| **3. En el componente, sin centralizar** | **Defecto a corregir** | E-Commerce 24HS `$3.800` (confirmación verbal 2026-09-29), hardcodeado en `src/app/servicios/page.tsx:230` y `:274`, sin constante ni función de cálculo |

> La capa 2 está **deliberadamente** fuera de `PriceRange`: son precios cerrados por servicio, no rangos por distancia. La regla de "fuente única de tarifas" sigue intacta — lo que se prohíbe es hardcodear en el **componente**, no centralizar en `promises.ts`.
>
> **La capa 3 es exactamente el mismo defecto que la capa 2, pero sin la centralización.** El 24HS no necesita un rango por distancia: necesita una constante. Es el único servicio con precio confirmado y sin calculadora.

### 9.1 Regla de claims legales y de servicio

| Claim | Correcto | Por qué |
|---|---|---|
| Rendición de contrareembolso | "En el día, al día siguiente o semanal, **según acordado**" | El dueño niega que exista garantía de rendición inmediata |
| Tipo de factura | **"No emitimos Factura A"** | Es lo único que dijo el dueño. No afirmar "Factura C" hasta que lo confirme (conflicto #2) |
| Punto de retiro | Friuli 1972 es **base logística y depósito**, no punto de retiro | Negado explícitamente por el dueño |
| Bulto extra | "Desde `$1.950`, según el servicio" | Respuesta del dueño (X `03!C6`). Publicado en `/cotizar` |
| Dimensión del bulto | `40 × 40 cm` o `+5 kg` | ⚠️ El CSV del dueño dice 40 × 30 cm. Conflicto abierto: **el sitio sigue con 40 × 40** hasta que confirme |
| Fuera de Mar del Plata | `$1.000 × km` de **km ruta** | Tarifa de **periferia**, distinta del excedente dentro del radio de 20 km (que es también `$1.000`/km en Express y `$700`/km en LowCost, pero se calcula sobre km, no km de ruta). Sin lista de barrios |
| Cobertura Flex | **Todo Mar del Plata, no las zonas aledañas** | Verbatim del dueño. Sin Batán y sin periferia: Flex es más restrictivo que Express y LowCost |
| Indemnización por pérdida | **No publicar** | Conflicto abierto #1: en la planilla respondió *"el 70% del valor del producto"* (X `01!E21`); en el `.docx` respondió "No" a redactar política de seguro. Hasta que lo aclare, nada de porcentajes |
| Límite de stock del 3PL | **"Solo productos pequeños y medianos, en un stock limitado"** | Restricción real del dueño. El sitio publica el servicio sin esta aclaración |
| Servicio "más rentable" | **No se declara ninguno** | Las dos fuentes se contradicen y no preguntan lo mismo (§12 del doc canónico). Lo que ambas confirman: hay que escalar Cuenta Corriente |
| Prueba social | Solo **5.0 estrellas con +120 valoraciones** | MailAmericas existe pero **no está autorizado para publicar**. No inventar testimonios |

---


## 10. Reglas de Integridad (No Negociables)

| Regla | Descripción |
|---|---|
| **Fuente única servidor** | Tarifas SIEMPRE desde `PriceRange` (BD) → fallback `pricing.ts`. Nunca del cliente. |
| **No copiar a mano** | Cualquier precio en código, copy, seed, marketing = tabla maestra exacta. |
| **Derivar, no duplicar** | UI deriva de `EXPRESS_TIERS`, `LOW_COST_TIERS`, `*_PRICE_PER_KM` exportadas por `pricing.ts`. |
| **Flex / Emprendedores** | **Sin fila en `PriceRange`** → NO mostrar números. CTA: "Cotización a medida por WhatsApp". ⚠️ Excepción ya presente en el sitio y **pendiente de decisión**: `FlexPricing.tsx` publica tres niveles con números. Los del Nivel 1 salen de `LOW_COST_TIERS`; los de los Niveles 2 y 3 están **hardcodeados y sin confirmar por el dueño** |
| **Redondeo excedentes** | **Siempre** `Math.ceil(km)` en tramo +10km. Nunca `Math.floor`, `Math.round`, truncar. |
| **Límite operativo** | > 20 km → `'consultar'` + WhatsApp precompletado. |
| **Franja ≠ duración** | `EXPRESS_WINDOW` ("franja horaria de 3 hs") es ventana. `EXPRESS_WINDOW_SHORT` ("Franja de 3 hs") es rótulo. **Nunca** "en 3 hs" |
| **Un solo umbral de bulto** | `STANDARD_WEIGHT_KG` (5) y `STANDARD_BULLET_DIMENSIONS_CM` (40 × 40 cm) son el mismo umbral en masa y volumen. Es lo que va sin recargo y es el único número de peso del copy. **No hay techo publicado**: el 15 kg que se publicaba hasta el 2026-09-30 no lo respaldaba ninguna fuente del dueño y se eliminó. Ver §7 |
| **Tarifa fija ≠ tabla por distancia** | Same Day, DropOFF, Periferia y 24HS no tienen fila en `PriceRange` **porque el modelo es otro**. Eso no las exime: su valor va en `promises.ts` y el componente lo importa |

---


## 11. UI: Cómo Mostrar Tarifas

### 11.1 Cotizadores (Express / LowCost)

```tsx
// En componente resultado (tras Server Action)
{result.precio === 'consultar' ? (
  <CTANestedPill href="/contacto" variant="outline">Pedir Cotización Especial</CTANestedPill>
) : (
  <>
    <span className="font-mono text-4xl tabular-nums text-brand-blue-900">
      ${result.precio.toLocaleString('es-AR')}
    </span>
    <CTANestedPill href={whatsappUrl} variant="primary">Pedí por WhatsApp</CTANestedPill>
  </>
)}
```

### 11.2 Páginas de Servicios (Pricing Tables)

```tsx
// Derivar de constantes exportadas (NO hardcodear)
import { EXPRESS_TIERS, LOW_COST_TIERS, EXPRESS_PRICE_PER_KM, LOW_COST_PRICE_PER_KM } from '@/lib/pricing';

<tbody>
  {EXPRESS_TIERS.map((tier, i) => (
    <tr key={i}>
      <td>Z{i+1} ({tier.minKm}–{tier.maxKm} km)</td>
      <td className="font-mono tabular-nums">${tier.price.toLocaleString('es-AR')}</td>
    </tr>
  ))}
  <tr>
    <td>Z5 (+10 km)</td>
    <td className="font-mono tabular-nums">
      ${EXPRESS_TIERS[3].price.toLocaleString('es-AR')} + ${EXPRESS_PRICE_PER_KM.toLocaleString('es-AR')}/km
    </td>
  </tr>
</tbody>
```

### 11.3 Flex / Emprendedores (Sin `PriceRange`)

```tsx
// ❌ PROHIBIDO: hardcodear precios
// <span>$3.000</span> <span>$4.500</span>

// ✅ CORRECTO: CTA a WhatsApp
<CTANestedPill href="https://wa.me/542236602699" variant="primary">
  Cotización a medida por WhatsApp
</CTANestedPill>

// O si hay lógica propia documentada y aprobada por dueño → derivar de constantes propias en pricing.ts
```

---


## 12. Server Action Correcta (`src/actions/quote.ts`)

```typescript
// ❌ ACTUAL (VIOLA REGLA): confía en price del FormData
const formData = new FormData();
formData.append('distanceKm', distanceKm.toString());
// ... price viene del cliente

// ✅ CORRECTO: recalcula en servidor
const priceRanges = await prisma.priceRange.findMany({
  where: { serviceType: formData.get('serviceType') as ServiceType }
});

const price = serviceType === 'EXPRESS'
  ? calculateExpressPrice(distanceKm, priceRanges)
  : calculateLowCostPrice(distanceKm, priceRanges);

// Guardar quote con price calculado en servidor
await prisma.quote.create({ data: { ..., price: typeof price === 'number' ? price : null } });
```

---


## 13. Testing de Tarifas

```typescript
// src/lib/pricing.test.ts
import { calculateExpressPrice, calculateLowCostPrice, EXPRESS_TIERS, LOW_COST_TIERS } from './pricing';

describe('calculateExpressPrice', () => {
  const emptyRanges: PriceRangeProp[] = [];

  test('Tier 0-3km', () => expect(calculateExpressPrice(2.5, emptyRanges)).toBe(3700));
  test('Tier 3-5km', () => expect(calculateExpressPrice(4.0, emptyRanges)).toBe(4600));
  test('Tier 5-7km', () => expect(calculateExpressPrice(6.0, emptyRanges)).toBe(6100));
  test('Tier 7-10km', () => expect(calculateExpressPrice(8.5, emptyRanges)).toBe(8200));
  test('Excedente 10.3km → Math.ceil(10.3)=11 × 1000', () => expect(calculateExpressPrice(10.3, emptyRanges)).toBe(11000));
  test('Excedente 12.0km → Math.ceil(12.0)=12 × 1000', () => expect(calculateExpressPrice(12.0, emptyRanges)).toBe(12000));
  test('>20km → consultar', () => expect(calculateExpressPrice(20.1, emptyRanges)).toBe('consultar'));
});

describe('calculateLowCostPrice', () => {
  test('Excedente 10.1km → Math.ceil(10.1)=11 × 700', () => expect(calculateLowCostPrice(10.1, [])).toBe(7700));
  test('Excedente 15.4km → Math.ceil(15.4)=16 × 700', () => expect(calculateLowCostPrice(15.4, [])).toBe(11200));
});

describe('Constants match seed', () => {
  test('EXPRESS_TIERS matches prisma seed', () => {
    expect(EXPRESS_TIERS).toEqual([
      { minKm: 0, maxKm: 3, price: 3700 },
      { minKm: 3, maxKm: 5, price: 4600 },
      { minKm: 5, maxKm: 7, price: 6100 },
      { minKm: 7, maxKm: 10, price: 8200 },
    ]);
  });
});
```

---
