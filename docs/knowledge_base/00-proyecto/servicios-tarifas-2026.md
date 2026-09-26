# Servicios y Tarifas Oficiales 2026 — Envíos DosRuedas

> **Fuente consolidada:** `docs/contexto/precios.md`, `PROJECT.md` §3, `src/lib/pricing.ts`, `prisma/schema.prisma`
>
> **⚠️ DOCUMENTO CRÍTICO Y FUENTE DE VERDAD:** Ningún componente, cotizador o texto comercial debe mostrar precios distintos a los aquí consignados.

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