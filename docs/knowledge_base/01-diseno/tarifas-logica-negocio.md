# Tarifas y Lógica de Negocio — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §12, `src/lib/pricing.ts`, `prisma/schema.prisma`, `src/actions/quote.ts`, `docs/knowledge_base/00-proyecto/servicios-tarifas-2026.md`.

---

## 1. Principio Fundamental

> **Las tarifas se leen en el servidor.** Un Server Action **nunca** calcula con tarifas que lleguen del cliente (`FormData`, props serializadas, query). Obtiene `PriceRange` vía Prisma y cae al fallback de `src/lib/pricing.ts`.

---

## 2. Flujo de Cálculo (Server-Side)

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

## 3. Funciones Puras (`src/lib/pricing.ts`)

### 3.1 Constantes Exportadas (Fallback)

```typescript
// Express
export const EXPRESS_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 5, price: 4600 },
  { minKm: 5, maxKm: 7, price: 6100 },
  { minKm: 7, maxKm: 10, price: 8200 },
];
export const EXPRESS_PRICE_PER_KM = 1000;

// LowCost
export const LOW_COST_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 5, price: 4000 },
  { minKm: 5, maxKm: 7, price: 5300 },
  { minKm: 7, maxKm: 10, price: 7000 },
];
export const LOW_COST_PRICE_PER_KM = 700;
```

### 3.2 Funciones Principales

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

**Lógica compartida:**
1. Si `distanceKm > 20` → `'consultar'`.
2. Filtrar `priceRanges` por `serviceType`.
3. Buscar rango: `(distanciaMinKm === 0 ? distanceKm >= min : distanceKm > min) && distanceKm <= maxKm`.
4. Si `maxKm === 9999` (tramo excedente) → `Math.ceil(distanceKm) * precioRango`.
5. Si no hay rango coincidente → `fallbackPrice(distanceKm, TIERS, PRICE_PER_KM)`.
6. Si no hay rangos en BD → usa constantes `*_TIERS` arriba.

---

## 4. Modelo de Datos (Prisma)

### 4.1 Esquema

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

### 4.2 Semántica de `distanciaMaxKm: 9999`

- **Centinela** para tramo excedente (+10 km).
- En `pricing.ts`: `if (matchingRange.distanciaMaxKm === 9999) return Math.ceil(distanceKm) * matchingRange.precioRango;`
- **No** es un rango real de 10-9999 km; el límite operativo es 20 km (validado antes).

### 4.3 Seed Exacto (`prisma/seed.ts`)

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

---

## 5. Capas de Precio y Claims Legales

> **Fuente:** `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` §1 y §2.

La tabla de §1 (tarifas por distancia) es **una** de las tres capas de precio. Los servicios con tarifa fija por servicio no están en `PriceRange` y por eso viven en `src/lib/promises.ts`.

| Capa | Dónde vive | Qué cubre |
|---|---|---|
| **1. Por distancia** | `PriceRange` (BD) → fallback `pricing.ts` | Express y LowCost |
| **2. Fija por servicio** | `src/lib/promises.ts` | Same Day `$6.000`, DropOFF `-20 %`, Contrareembolso `$0`, Periferia `$1.200 × km` |
| **3. En el componente, sin centralizar** | **Defecto a corregir** | E-Commerce 24HS `$3.800`. El precio **está confirmado por el dueño** (2026-09-29), pero vive hardcodeado en `app/servicios/page.tsx:183`, sin `ServiceType`, sin rango en `PriceRange`, sin función en `pricing.ts`, y con un CTA que no lleva a ningún cotizador |

> La capa 2 está **deliberadamente** fuera de `PriceRange`: son precios cerrados por servicio, no rangos por distancia. La regla de "fuente única de tarifas" sigue intacta — lo que se prohíbe es hardcodear en el **componente**, no centralizar en `promises.ts`.
>
> **La capa 3 es exactamente el mismo defecto que la capa 2, pero sin la centralización.** El 24HS no necesita un rango por distancia: necesita una constante. Es el único servicio con precio confirmado y sin calculadora.

### 5.1 Regla de claims legales y de servicio

| Claim | Correcto | Por qué |
|---|---|---|
| Rendición de contrareembolso | "En el día, al día siguiente o semanal, **según acordado**" | El dueño niega que exista garantía de rendición inmediata |
| Tipo de factura | **Factura C** consolidada | Factura A no se emite |
| Punto de retiro | Friuli 1972 es **base logística y depósito**, no punto de retiro | Negado explícitamente por el dueño |
| Bulto extra | "Varía según el servicio" | Sin monto fijo publicado. **No** usar el `$1.950` de la planilla (dato de plantilla) |
| Dimensión del bulto | `40 × 40 cm` o `+5 kg` | ⚠️ El CSV del dueño dice 40 × 30 cm. Conflicto abierto: **el sitio sigue con 40 × 40** hasta que confirme |
| Fuera de Mar del Plata | `$1.200 × km` de **km ruta** | Tarifa de **periferia**, distinta del excedente dentro del radio de 20 km (`$1.000`/km Express, `$700`/km LowCost) |
| Cobertura Flex | **Todo Mar del Plata, no las zonas aledañas** | Verbatim del dueño. Sin Batán y sin periferia: Flex es más restrictivo que Express y LowCost |
| Indemnización por pérdida | **No existe** | El dueño respondió "No" a la pregunta de seguro. El "70 % del valor declarado" de la planilla es **[PLANTILLA]**. Prohibido publicar |
| Límite de stock del 3PL | **"Solo productos pequeños y medianos, en un stock limitado"** | Restricción real del dueño. El sitio publica el servicio sin esta aclaración |
| Servicio "más rentable" | **No se declara ninguno** | Las dos fuentes se contradicen y no preguntan lo mismo (§12 del doc canónico). Lo que ambas confirman: hay que escalar Cuenta Corriente |
| Prueba social | Solo **5.0 estrellas con +120 valoraciones** | MailAmericas existe pero **no está autorizado para publicar**. No inventar testimonios |

---

## 6. Protocolos Operativos (No son Promesas, Son Reglas Internas)

> **Fuente:** `docs/knowledge_base/02-dominio/entrevista-dueno-2026-09-28.md` §5.

| Situación | Protocolo | Exponer en el sitio |
|---|---|---|
| Paquete Flex no entregado en el primer intento | Se avisa al comercio; con su autorización se hace la nueva visita al día siguiente | Sí, en la guía Flex. Es lo que cuida la reputación |
| Comprador rechaza el producto en puerta | El retorno **no tiene costo**; se rinde generalmente al día siguiente | Falta explicitarlo en TyC (pendiente) |
| Reclamo de trato de un cadete | Se charla con el repartidor para que mejore su actitud | Sí, es argumento de "flota propia, cero tercerización" |
| Dinero cobrado por contrareembolso | El cadete rinde en la base; el comercio lo recibe al día siguiente o se le transfiere | Sí, con el matiz de §5.1 |
| Época de alta congestión (verano, centro, Güemes) | **No hay diferencias** de operativa | No publicar márgenes estacionales |
| Destinos con desvío de routing | Félix U. Camet, La Florida, Camet, 2 de abril, El Retazo, Estación Camet; en el sur acantilados, San Patricio, San Jacinto | No publicar como "zonas lentas" |
| **No hay disponibilidad para cubrir un envío** | **Se rechaza el envío.** *"Preferimos decir que no podemos, a fallar"* (línea roja del dueño) | **Sí, y debería estar publicado.** Es la promesa de fiabilidad más fuerte del archivo: la competencia promete llegar siempre, DosRuedas tiene permiso explícito del dueño para decir que no |
| **El comercio falta el respeto al cadete** | No se toleró. *"No toleramos faltas de respeto hacia nuestros repartidores"* | No es una nota de TyC: es una **regla de relación**. El comercio que abruma al repartidor deja de ser cliente |
| **Mercadería ilegal o no declarada** | No se transporta | Falta la lista completa en TyC (pendiente) |

**Zona de fricción de routing** es la razón por la que las tarifas usan **km de ruta** y no distancia en línea recta: la medición por routing puede subestimar el tiempo real en esos barrios.

> Las tres últimas filas salen del cuestionario de 31 preguntas del dueño (25/5/2026), no de la entrevista de septiembre. Son **líneas rojas**, no preferencias. Ver `02-dominio/entrevista-dueno-2026-09-28.md` §4.7, §4.8, §4.9 y §11.1.

---

## 7. Reglas de Integridad (No Negociables)

| Regla | Descripción |
|---|---|
| **Fuente única servidor** | Tarifas SIEMPRE desde `PriceRange` (BD) → fallback `pricing.ts`. Nunca del cliente. |
| **No copiar a mano** | Cualquier precio en código, copy, seed, marketing = tabla maestra exacta. |
| **Derivar, no duplicar** | UI deriva de `EXPRESS_TIERS`, `LOW_COST_TIERS`, `*_PRICE_PER_KM` exportadas por `pricing.ts`. |
| **Flex / Emprendedores** | **Sin fila en `PriceRange`** → NO mostrar números. CTA: "Cotización a medida por WhatsApp". ⚠️ Excepción ya presente en el sitio y **pendiente de decisión**: `FlexPricing.tsx` publica tres niveles con números. Los del Nivel 1 salen de `LOW_COST_TIERS`; los de los Niveles 2 y 3 están **hardcodeados y sin confirmar por el dueño** |
| **Redondeo excedentes** | **Siempre** `Math.ceil(km)` en tramo +10km. Nunca `Math.floor`, `Math.round`, truncar. |
| **Límite operativo** | > 20 km → `'consultar'` + WhatsApp precompletado. |
| **Franja ≠ duración** | `EXPRESS_WINDOW` ("franja horaria de 3 hs") es ventana. `EXPRESS_WINDOW_SHORT` ("Franja de 3 hs") es rótulo. **Nunca** "en 3 hs" |
| **5 kg ≠ 15 kg** | `STANDARD_WEIGHT_KG` (5) es lo que va sin recargo y es el número del copy. `MAX_WEIGHT_KG` (15) es el techo absoluto. No intercambiables |
| **Tarifa fija ≠ tabla por distancia** | Same Day, DropOFF, Periferia y 24HS no tienen fila en `PriceRange` **porque el modelo es otro**. Eso no las exime: su valor va en `promises.ts` y el componente lo importa |

---

## 8. Ejemplos Validados (No Inventar Otros)

| Distancia | Servicio | Cálculo | Resultado |
|---|---|---|---|
| 2.5 km | Express | Tier 0-3km | $3.700 |
| 4.0 km | Express | Tier 3-5km | $4.600 |
| 6.0 km | Express | Tier 5-7km | $6.100 |
| 8.5 km | Express | Tier 7-10km | $8.200 |
| 10.3 km | Express | `Math.ceil(10.3)=11 × $1.000` | **$11.000** |
| 12.0 km | Express | `Math.ceil(12.0)=12 × $1.000` | **$12.000** |
| 2.5 km | LowCost | Tier 0-3km | $3.000 |
| 4.0 km | LowCost | Tier 3-5km | $4.000 |
| 6.0 km | LowCost | Tier 5-7km | $5.300 |
| 8.5 km | LowCost | Tier 7-10km | $7.000 |
| 10.1 km | LowCost | `Math.ceil(10.1)=11 × $700` | **$7.700** |
| 15.4 km | LowCost | `Math.ceil(15.4)=16 × $700` | **$11.200** |
| 20.1 km | Ambos | > 20 km | `'consultar'` + WhatsApp |

---

## 9. UI: Cómo Mostrar Tarifas

### 9.1 Cotizadores (Express / LowCost)

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

### 9.2 Páginas de Servicios (Pricing Tables)

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

### 9.3 Flex / Emprendedores (Sin `PriceRange`)

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

## 10. Server Action Correcta (`src/actions/quote.ts`)

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

## 11. Testing de Tarifas

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

## 12. Referencias Cruzadas

| Documento | Ubicación |
|---|---|
| Tabla maestra 2026 | `docs/knowledge_base/00-proyecto/servicios-tarifas-2026.md` |
| Lógica pura | `src/lib/pricing.ts` |
| Esquema Prisma | `prisma/schema.prisma` |
| Seed BD | `prisma/seed.ts` |
| Server Action | `src/actions/quote.ts` |
| Sistema de diseño (tokens) | `docs/knowledge_base/01-diseno/tokens-colores.md` |
| Anti-patrones tarifas | `docs/knowledge_base/01-diseno/anti-patrones.md` §4 |