# Servicios y Tarifas Oficiales 2026 — Envíos DosRuedas

> **Fuente consolidada:** `docs/contexto/precios.md`, `PROJECT.md` §3, `src/lib/pricing.ts`, `prisma/schema.prisma`, y la entrevista al dueño del 2026-09-28 (`docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md`).
>
> **⚠️ DOCUMENTO CRÍTICO Y FUENTE DE VERDAD:** Ningún componente, cotizador o texto comercial debe mostrar precios distintos a los aquí consignados.
>
> **Alcance:** §1 cubre **solo las tarifas por distancia**. Los servicios con tarifa fija por servicio (E-Commerce Same Day, DropOFF, Contrareembolso) y los recargos viven en `src/lib/promises.ts` y se documentan en `01-diseno/tarifas-logica-negocio.md` §4bis. No buscar precios de servicios sin rango aquí.

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

> **Flex y Emprendedores:** No tienen fila en `PriceRange`. **No mostrar números** para estos servicios (hoy `FlexPricing`, `FlexHero`, `EmprendedoresPricing` los muestran: deuda pendiente de decisión del dueño, ver `DESIGN.md` §12.2).
>
> **Servicios con tarifa fija** (tienen precio pero no dependen de la distancia, así que no están en esta tabla): E-Commerce Same Day `$6.000 fijos` a toda la ciudad; DropOFF `-20 %` con corte 13:00 hs; Contrareembolso `$0` de comisión. Definidos por el dueño el 2026-09-28, centralizados en `src/lib/promises.ts`.
>
> **E-Commerce 24HS (Next Day):** **precio confirmado = `$3.800`/envío** (Matías, 2026-09-29). Además, **recolección gratis desde 10 envíos**; por debajo de 10, la recolección tiene costo. El sitio lo publica correctamente en `app/servicios/page.tsx:183`, pero el número vive **hardcodeado**: no hay `ServiceType`, ni rango en `PriceRange`, ni función en `pricing.ts`, y el botón "Seleccionar 24HS" no lleva a ningún cotizador. **El defecto es la implementación, no el precio.** Ver `02-dominio/entrevista-dueno-2026-09-28.md` §1.5.
>
> ⚠️ El CSV de mayo (25/5/2026) decía `$4.000`. **El CSV es la fuente más antigua del archivo, no la más nueva:** el precio bajó después. No usar el CSV para el 24HS.
>
> **Tarifa de periferia:** `$1.200 × km` de **km ruta**, para destinos fuera de la urbana de MDQ (Félix U. Camet, La Florida, Camet, 2 de Abril, El Retazo, Estación Camet, Acantilados, San Patricio, San Jacinto). Se liquida aparte del excedente dentro del radio de 20 km.
>
> ✅ **Conflicto resuelto el 2026-09-29.** El informe estratégico del 2026-09-28 mencionaba `$1.200`/km también para el excedente de Express en el rango +10 km. **No es así:** son dos tarifas distintas. `$1.200 × km` es **periferia** (fuera de MDQ urbana, lista cerrada de barrios). `$1.000`/km es el **excedente dentro del radio** de Express (10 → 20 km), y `$700`/km el de LowCost. Confirmado por Matías: **`EXPRESS_PRICE_PER_KM = 1000` queda como está y `pricing.ts` no se toca.** Ver `02-dominio/entrevista-dueno-2026-09-28.md` §3.1.
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
| DropOFF | `DROPOFF_DISCOUNT_PERCENT` | **`-20 %`** sobre la tarifa final | ✅ CSV verbatim: *"obtene un 20% de descuento en la tarifa final"*. Aplica a **cualquier servicio**, no solo 24HS. Corte 13:00 hs (del informe, no del dueño) |
| Contrareembolso | — | **`$0`** comisión | `.docx` y CSV (pregunta 21) coinciden |
| Periferia | — | **`$1.200 × km`** de km ruta | `.docx` §5. Destinos fuera de la urbana de MDQ |
| Bulto extra | — | **Sin monto fijo.** Varía según servicio | `.docx`; el "$1.950 desde" de la planilla es **[PLANTILLA]** |
| Flex Nivel 2 Pro (Z4/Z5) | — | `$6.500` tope | 🔴 Hardcodeado, **sin confirmar** |
| Flex Nivel 3 Elite | — | `$4.500` planos | 🔴 Hardcodeado, **sin confirmar** |

> **Same Day, 24HS, DropOFF, Contrareembolso y Periferia son tarifas fijas, no tablas por distancia.** No tienen fila en `PriceRange` porque el modelo es otro. Eso no las exime de la regla: su valor va en `promises.ts` y el componente lo importa. **El 24HS es la excepción:** todavía no tiene constante propia, y por eso está hardcodeado en el JSX.

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
| Sistema de diseño (tokens) | `docs/knowledge_base/01-diseno/design-system.md` §2 |
| Quick reference (cheat sheet) | `docs/knowledge_base/04-referencia-rapida/cheat-sheet.md` |