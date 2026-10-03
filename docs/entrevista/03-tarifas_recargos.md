# ENTREVISTA 03 — TARIFAS Y RECARGO (Especificación Técnica)
**Fuente de verdad para `src/lib/pricing.ts`, `src/lib/promises.ts`, validadores Zod, tests Vitest, copy-guard, tipos TypeScript, JSON-LD, llms.txt**

> **Fuentes primarias**: `docs/informes/identidad-y-servicios-dosruedas.md` + `docs/informes/contenido-completo-pdf-abril-2026.md` + `src/lib/pricing.ts` actual + `src/lib/promises.ts` actual.
> **Instrucciones**: Especificación técnica lista para implementar. Cada constante, tipo, función y test debe derivarse de aquí. Marcá `[CONFIRMAR]` solo si hay decisión de dueño pendiente.

---

## 3.1 Arquitectura de Tarifas (Single Source of Truth)

### 3.1.1 Jerarquía de fuentes (orden de autoridad)
```
1. Tabla `PriceRange` (BD, Prisma) → fuente viva, editable por admin
2. `src/lib/pricing.ts` (fallback hardcodeado) → EXPRESS_TIERS, LOW_COST_TIERS, pricePerKm
3. `src/lib/promises.ts` → tarifas fijas, recargos, umbrales, reglas de negocio
4. Informes abril 2026 → validación de valores con dueño
```

### 3.1.2 Reglas de precedencia
- **Tarifas por distancia (Express/LowCost)**: BD `PriceRange` → si vacía → `pricing.ts` fallback
- **Tarifas fijas (Flex, E-com, 3PL, Contrareembolso, Periferia, Bulto)**: Solo `promises.ts`
- **Recargos operativos**: Solo `promises.ts`
- **NUNCA** literales en componentes UI, NUNCA cálculo en cliente

---

## 3.2 Estructura `src/lib/pricing.ts`

### 3.2.1 Tipos TypeScript

```typescript
// Fuente: pricing.ts actual + informes
export interface PriceRangeRow {
  id: number;
  serviceType: 'EXPRESS' | 'LOW_COST';
  distanciaMinKm: number;
  distanciaMaxKm: number;  // 9999 = "más de X km"
  precioRango: number;     // en ARS centavos o pesos enteros
  descripcion: string;     // ej: "Zona 1 - Hasta 3 km"
}

export interface PriceTier {
  minKm: number;           // inclusivo (excepto 0)
  maxKm: number;           // inclusivo
  price: number;           // ARS
}

export type ServiceType = 'EXPRESS' | 'LOW_COST' | 'FLEX' | 'DEPOSITO' | 'ECOMMERCE_24HS' | 'ECOMMERCE_SAME_DAY' | 'CONTRAREEMBOLSO' | 'CUENTA_CORRIENTE';
```

### 3.2.2 Constantes EXPRESS (fallback BD vacía)

```typescript
// Valores de Informes §2 + pricing.ts actual (coinciden)
export const EXPRESS_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3700 },
  { minKm: 3, maxKm: 5, price: 4600 },
  { minKm: 5, maxKm: 7, price: 6100 },
  { minKm: 7, maxKm: 10, price: 8200 },
] as const;

export const EXPRESS_PRICE_PER_KM = 1000;  // Math.ceil(km) × $1000 para >10km
export const EXPRESS_MAX_AUTO_KM = 20;      // >20km = "consultar"
```

### 3.2.3 Constantes LOW_COST (fallback BD vacía)

```typescript
// Valores de Informes §3 + pricing.ts actual (coinciden)
export const LOW_COST_TIERS: readonly PriceTier[] = [
  { minKm: 0, maxKm: 3, price: 3000 },
  { minKm: 3, maxKm: 5, price: 4000 },
  { minKm: 5, maxKm: 7, price: 5300 },
  { minKm: 7, maxKm: 10, price: 7000 },
] as const;

export const LOW_COST_PRICE_PER_KM = 700;   // Math.ceil(km) × $700 para >10km
export const LOW_COST_MAX_AUTO_KM = 20;     // >20km = "consultar"
```

### 3.2.4 Funciones puras de cálculo

```typescript
// Lógica: encuentra tier donde distanceKm <= maxKm (inclusivo)
// Si distanceKm > 10km (maxKm === 9999 o >10), usa Math.ceil(km) × pricePerKm
// Si distanceKm > 20km → retorna 'consultar'

export function calculateExpressPrice(
  distanceKm: number,
  priceRanges: PriceRangeRow[]
): number | 'consultar';

export function calculateLowCostPrice(
  distanceKm: number,
  priceRanges: PriceRangeRow[]
): number | 'consultar';

// Helper interno (no exportar)
function fallbackPrice(distanceKm: number, tiers: readonly PriceTier[], pricePerKm: number): number;
```

### 3.2.5 Reglas de borde (edge cases)

| Caso | Comportamiento |
|---|---|
| `distanceKm === 0` | Tier 0-3 km (minKm=0 inclusivo) |
| `distanceKm === 3` | Tier 0-3 km (maxKm=3 inclusivo) |
| `distanceKm === 3.1` | Tier 3-5 km (minKm=3 exclusivo, maxKm=5 inclusivo) |
| `distanceKm === 10.01` | Excedente: `Math.ceil(10.01) × pricePerKm` = 11 × pricePerKm |
| `distanceKm > 20` | `'consultar'` (string literal) |
| `priceRanges` vacía | Usa fallback `EXPRESS_TIERS` / `LOW_COST_TIERS` |
| `distanceKm < 0` | Lanzar error / retornar `'consultar'` |

---

## 3.3 Estructura `src/lib/promises.ts`

### 3.3.1 Constantes de Ventanas y Cortes (Informes §2, §3, §4, §5)

```typescript
// Express
export const EXPRESS_WINDOW = 'franja horaria de 3 hs';           // Forma larga: "Entrega en franja horaria de 3 hs"
export const EXPRESS_WINDOW_SHORT = 'Franja de 3 hs';             // Forma corta: chips, tablas
export const EXPRESS_LEAD_TIME = '2 hs de anticipación';          // Mínimo para coordinar
export const EXPRESS_CUTOFF_TIME = '15:00 hs';                    // Último pedido para entrega en el día

// LowCost
export const LOWCOST_CUTOFF_TIME = '13:00 hs';                    // Corte de carga
export const LOWCOST_DELIVERY_DEADLINE = '19:00 hs';              // Entrega antes de

// Flex
export const FLEX_CUTOFF_TIME = '15:00 hs';                       // Corte
export const FLEX_DELIVERY_DEADLINE = '20:00 hs';                 // Entrega antes de

// 3PL / E-Commerce Same Day
export const SAME_DAY_CUTOFF_TIME = '15:00 hs';                   // Corte pedidos
export const SAME_DAY_DELIVERY_WINDOW = '9:00 a 20:00 hs';        // Franja entrega

// E-Commerce 24HS
export const ECOM_24HS_DELIVERY_WINDOW = '9:00 a 20:00 hs';       // Next Day

// Horarios atención base (Informes §11)
export const OPERATING_HOURS = {
  weekdays: '08:00 a 18:00 hs',
  saturdays: '10:00 a 15:00 hs',
  sundays: 'Cerrado',
  whatsapp: '08:00 a 22:00 hs (todos los días)',
} as const;
```

### 3.3.2 Recargos Operativos (Informes §2, §3, §4, §5, §6, §7, §10)

```typescript
// ⚠️ ACTUALIZAR A VALORES INFORMES ABRIL 2026 (difieren de código actual)
// Código actual: WAIT_CHARGE_ARS = 2100, BULK_EXTRA_FROM_ARS = 1950
// Informes: $2.200 espera, $1.800 bulto extra

export const RAIN_SURCHARGE_PERCENT = 30;                         // Base (Flex, 3PL, 24HS, Cuenta Corriente)
export const RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50;         // Express, LowCost

export const WAIT_TOLERANCE_MIN = 10;                             // Tolerancia sin cargo
export const WAIT_CHARGE_ARS = 2200;                              // **ACTUALIZAR: era 2100** c/10 min extra
export const WAIT_CHARGE_BLOCK_MIN = 10;                          // Bloque de cobro

export const EXTRA_STOP_SURCHARGE_PERCENT = 50;                   // Parada intermedia sobre ruta
export const EXTRA_STOP_MAX_DETOUR_KM = 2;                        // Máx desvío 2km, sino envío aparte

export const RETRY_CHARGE_PERCENT = 100;                          // 2da visita / reintento

export const PERIPHERY_PRICE_PER_KM = 1000;                       // $1000/km ruta (confirmado 2026-09-30)

export const BULK_EXTRA_FROM_ARS = 1800;                          // **ACTUALIZAR: era 1950** desde $1800
```

### 3.3.3 Umbrales y Límites (Informes §9 + AGENTS.md)

```typescript
export const CONSULT_THRESHOLD_KM = 20;                           // >20km = "consultar"
export const STANDARD_WEIGHT_KG = 5;                              // Único umbral peso sin recargo
export const STANDARD_DIMENSIONS_CM = '40 × 40 × 30 cm';          // **UNIFICAR: informes dicen 30cm alto, código 40cm**
// export const MAX_WEIGHT_KG = 15;  // ELIMINADO (decisión dueño 2026-09-30, copy-guard lo bloquea)
```

### 3.3.4 Tarifas Fijas (Informes §4, §5, §6)

```typescript
// Flex (Niveles - [SIN CONFIRMAR 2026])
export const FLEX_NIVEL_1_TIERS = { /* zonificados como Express/LowCost */ };
export const FLEX_NIVEL_2_Z4_Z5_CAP = 6500;        // [SIN CONFIRMAR] Tope fijo Z4/Z5
export const FLEX_NIVEL_3_FLAT = 4500;             // [SIN CONFIRMAR] Tarifa plana todo MDQ

// E-Commerce Same Day (3PL)
export const SAME_DAY_FIXED_PRICE = 6000;          // $6.000 todo MDQ

// E-Commerce 24HS (Escalas volumen mensual)
export const ECOMMERCE_24HS_TIERS = {
  INICIAL: { min: 1, max: 199, price: 3800 },
  PRO: { min: 200, max: 1199, price: 3500 },
  ELITE: { min: 1200, max: 1999, price: 3200 },
  PARTNER: { min: 2000, price: 3000 },
} as const;
export const ECOMMERCE_24HS_BASE_PRICE = 3800;     // Confirmado 2026-09-29

// DropOFF
export const DROPOFF_DISCOUNT_PERCENT = 20;        // Solo E-com 24HS / Plan Inicial DropOFF

// Contrareembolso
export const CONTRAREEMBOLSO_COMMISSION_PERCENT = 0;  // 0% comisión

// Cuenta Corriente
export const CUENTA_CORRIENTE_BENEFIT = 'Tarifa LowCost con condiciones Express';
```

### 3.3.5 Contacto Unificado (Informes §1.1, §11)

```typescript
export const CONTACT_EMAIL = 'MatiasCejas@enviosdosruedas.com';
export const SUPPORT_PHONE = '+54 223 660-2699';
export const WHATSAPP_NUMBER = '542236602699';  // Para wa.me links
```

---

## 3.4 Validadores Zod (para Server Actions, API, Forms)

### 3.4.1 Esquema de Cotización (Server Action `quote.ts`)

```typescript
import { z } from 'zod';

// Coordenadas válidas MDQ aprox
const MDQ_LAT_MIN = -38.5, MDQ_LAT_MAX = -37.5;
const MDQ_LNG_MIN = -58.5, MDQ_LNG_MAX = -57.0;

export const QuoteInputSchema = z.object({
  serviceType: z.enum(['EXPRESS', 'LOW_COST', 'FLEX']),
  origin: z.object({
    lat: z.number().min(MDQ_LAT_MIN).max(MDQ_LAT_MAX),
    lng: z.number().min(MDQ_LNG_MIN).max(MDQ_LNG_MAX),
    address: z.string().min(5).max(200),
    neighborhood: z.string().optional(),
  }),
  destination: z.object({
    lat: z.number().min(MDQ_LAT_MIN).max(MDQ_LAT_MAX),
    lng: z.number().min(MDQ_LNG_MIN).max(MDQ_LNG_MAX),
    address: z.string().min(5).max(200),
    neighborhood: z.string().optional(),
  }),
  distanceKm: z.number().positive().max(200),  // Server-side recalculado idealmente
  package: z.object({
    weightKg: z.number().positive().max(50),   // Límite físico moto ~50kg
    dimensionsCm: z.object({
      length: z.number().positive(),
      width: z.number().positive(),
      height: z.number().positive(),
    }).optional(),
    isBulky: z.boolean().default(false),       // >5kg o >40×40×30cm
  }).optional(),
  extras: z.object({
    rain: z.boolean().default(false),
    waitMinutes: z.number().int().min(0).default(0),
    extraStops: z.number().int().min(0).default(0),
    retry: z.boolean().default(false),
    isPeriphery: z.boolean().default(false),
  }).optional(),
  metadata: z.object({
    clientId: z.string().optional(),
    source: z.enum(['web', 'whatsapp', 'api']).default('web'),
    timestamp: z.number().default(() => Date.now()),
  }).optional(),
});

export type QuoteInput = z.infer<typeof QuoteInputSchema>;
```

### 3.4.2 Esquema de Respuesta de Cotización

```typescript
export const QuoteResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    serviceType: z.enum(['EXPRESS', 'LOW_COST', 'FLEX']),
    basePrice: z.number().int().positive(),
    distanceKm: z.number().positive(),
    breakdown: z.array(z.object({
      concept: z.string(),
      amount: z.number().int(),  // puede ser negativo (descuentos)
      detail: z.string().optional(),
    })),
    totalPrice: z.number().int().positive(),
    currency: z.literal('ARS'),
    deliveryPromise: z.string(),  // ej: "Franja de 3 hs (10-13hs)"
    cutoffTime: z.string(),       // ej: "15:00 hs"
    warnings: z.array(z.string()).optional(),  // ej: ["Zona periferia: consultar WhatsApp"]
    validUntil: z.string().datetime(),         // ISO 8601
  }).optional(),
  error: z.object({
    code: z.string(),
    message: z.string(),
    details: z.record(z.unknown()).optional(),
  }).optional(),
});

export type QuoteResponse = z.infer<typeof QuoteResponseSchema>;
```

### 3.4.3 Validadores de Copy (Copy Guard)

```typescript
// copy-guard.test.ts - Bloquea patrones prohibidos en código
import { readFileSync } from 'fs';
import { globSync } from 'glob';

const FORBIDDEN_PATTERNS = [
  // Techo de peso
  { pattern: /MAX_WEIGHT_KG\s*=\s*15/, message: 'Techo de peso 15kg eliminado (decisión dueño 2026-09-30)' },
  { pattern: /(máximo|máx|tope)\s*(de\s*)?(peso|kg)\s*\d+/, message: 'No publicar techo de peso numérico' },
  
  // Promesas de tiempo prohibidas
  { pattern: /(60|90)\s*min/, message: 'No usar "60-90 min" (Express es franja 3hs)' },
  { pattern: /en\s*3\s*hs?\b/, message: 'No usar "en 3 hs" (usar "franja de 3 hs")' },
  { pattern: /menos\s*de\s*2\s*h/, message: 'No usar "menos de 2 h"' },
  
  // LowCost mal descrito
  { pattern: /(agrupad[oa]|por\s*lote)/i, message: 'LowCost no es "agrupado" ni "por lote"' },
  
  // Factura A
  { pattern: /Factura\s*A\b(?!.*no)/i, message: 'No afirmar Factura A (no se emite)' },
  
  // Rendición inmediata
  { pattern: /rendici[oó]n\s*inmediata/i, message: 'Contrareembolso: rendición en día/24hs/semanal, no inmediata' },
  
  // DropOFF mal aplicado
  { pattern: /DropOFF.*-?20%/i, message: 'DropOFF -20% solo en E-commerce 24HS / Plan Inicial' },
  
  // Valores hardcodeados en componentes
  { pattern: /\$\s*[\d.]{3,}/, message: 'Posible precio hardcodeado - usar pricing.ts/promises.ts' },
];

export function runCopyGuard(): { passed: boolean; violations: Array<{file: string, line: number, pattern: string, message: string}> } {
  const files = globSync('src/**/*.{ts,tsx}', { ignore: ['**/*.test.ts', '**/*.d.ts'] });
  const violations = [];
  
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      FORBIDDEN_PATTERNS.forEach(({ pattern, message }) => {
        if (pattern.test(line)) {
          violations.push({ file, line: idx + 1, pattern: pattern.source, message });
        }
      });
    });
  }
  
  return { passed: violations.length === 0, violations };
}
```

---

## 3.5 Tests Vitest (Integridad Tarifas ↔ UI)

### 3.5.1 Tests `pricing.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import { calculateExpressPrice, calculateLowCostPrice, EXPRESS_TIERS, LOW_COST_TIERS, EXPRESS_PRICE_PER_KM, LOW_COST_PRICE_PER_KM } from './pricing';

describe('pricing.ts - Integridad tarifas', () => {
  const emptyRanges: PriceRangeRow[] = [];

  // EXPRESS - Tier exactos (Informes §2)
  it.each([
    [0.5, 3700], [1, 3700], [2.9, 3700], [3, 3700],  // Z1: 0-3km
    [3.1, 4600], [4, 4600], [5, 4600],                // Z2: 3-5km
    [5.1, 6100], [6, 6100], [7, 6100],                // Z3: 5-7km
    [7.1, 8200], [8, 8200], [10, 8200],               // Z4: 7-10km
  ])('Express %skm → $%s', (km, expected) => {
    expect(calculateExpressPrice(km, emptyRanges)).toBe(expected);
  });

  // EXPRESS - Excedente >10km (Math.ceil)
  it.each([
    [10.01, 11000], [11, 11000], [11.5, 12000], [15, 15000], [20, 20000],
  ])('Express %skm (excedente) → $%s', (km, expected) => {
    expect(calculateExpressPrice(km, emptyRanges)).toBe(expected);
  });

  // EXPRESS - Límite consultar
  it('Express >20km → "consultar"', () => {
    expect(calculateExpressPrice(20.1, emptyRanges)).toBe('consultar');
    expect(calculateExpressPrice(50, emptyRanges)).toBe('consultar');
  });

  // LOW_COST - Tier exactos (Informes §3)
  it.each([
    [0.5, 3000], [1, 3000], [2.9, 3000], [3, 3000],  // Z1
    [3.1, 4000], [4, 4000], [5, 4000],                // Z2
    [5.1, 5300], [6, 5300], [7, 5300],                // Z3
    [7.1, 7000], [8, 7000], [10, 7000],               // Z4
  ])('LowCost %skm → $%s', (km, expected) => {
    expect(calculateLowCostPrice(km, emptyRanges)).toBe(expected);
  });

  // LOW_COST - Excedente >10km
  it.each([
    [10.01, 7700], [11, 7700], [11.5, 8400], [15, 10500], [20, 14000],
  ])('LowCost %skm (excedente) → $%s', (km, expected) => {
    expect(calculateLowCostPrice(km, emptyRanges)).toBe(expected);
  });

  // LOW_COST - Límite consultar
  it('LowCost >20km → "consultar"', () => {
    expect(calculateLowCostPrice(20.1, emptyRanges)).toBe('consultar');
  });

  // Fallback tiers coinciden con constantes exportadas
  it('EXPRESS_TIERS coincide con Informes §2', () => {
    expect(EXPRESS_TIERS).toEqual([
      { minKm: 0, maxKm: 3, price: 3700 },
      { minKm: 3, maxKm: 5, price: 4600 },
      { minKm: 5, maxKm: 7, price: 6100 },
      { minKm: 7, maxKm: 10, price: 8200 },
    ]);
  });

  it('LOW_COST_TIERS coincide con Informes §3', () => {
    expect(LOW_COST_TIERS).toEqual([
      { minKm: 0, maxKm: 3, price: 3000 },
      { minKm: 3, maxKm: 5, price: 4000 },
      { minKm: 5, maxKm: 7, price: 5300 },
      { minKm: 7, maxKm: 10, price: 7000 },
    ]);
  });
});
```

### 3.5.2 Tests `promises.test.ts`

```typescript
import { describe, it, expect } from 'vitest';
import {
  EXPRESS_WINDOW, EXPRESS_CUTOFF_TIME, EXPRESS_LEAD_TIME,
  LOWCOST_CUTOFF_TIME, LOWCOST_DELIVERY_DEADLINE,
  FLEX_CUTOFF_TIME, FLEX_DELIVERY_DEADLINE,
  RAIN_SURCHARGE_PERCENT, RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST,
  WAIT_CHARGE_ARS, BULK_EXTRA_FROM_ARS,
  PERIPHERY_PRICE_PER_KM,
  DROPOFF_DISCOUNT_PERCENT,
  CONTRAREEMBOLSO_COMMISSION_PERCENT,
  STANDARD_WEIGHT_KG, STANDARD_DIMENSIONS_CM,
  SAME_DAY_FIXED_PRICE, ECOMMERCE_24HS_PRICE,
} from './promises';

describe('promises.ts - Valores canónicos (Informes abril 2026)', () => {
  // Ventanas y cortes
  it('EXPRESS_WINDOW = "franja horaria de 3 hs"', () => {
    expect(EXPRESS_WINDOW).toBe('franja horaria de 3 hs');
  });
  it('EXPRESS_WINDOW_SHORT = "Franja de 3 hs"', () => {
    expect(EXPRESS_WINDOW_SHORT).toBe('Franja de 3 hs');
  });
  it('EXPRESS_LEAD_TIME = "2 hs de anticipación"', () => {
    expect(EXPRESS_LEAD_TIME).toBe('2 hs de anticipación');
  });
  it('EXPRESS_CUTOFF_TIME = "15:00 hs"', () => {
    expect(EXPRESS_CUTOFF_TIME).toBe('15:00 hs');
  });
  it('LOWCOST_CUTOFF_TIME = "13:00 hs"', () => {
    expect(LOWCOST_CUTOFF_TIME).toBe('13:00 hs');
  });
  it('LOWCOST_DELIVERY_DEADLINE = "19:00 hs"', () => {
    expect(LOWCOST_DELIVERY_DEADLINE).toBe('19:00 hs');
  });
  it('FLEX_CUTOFF_TIME = "15:00 hs"', () => {
    expect(FLEX_CUTOFF_TIME).toBe('15:00 hs');
  });
  it('FLEX_DELIVERY_DEADLINE = "20:00 hs"', () => {
    expect(FLEX_DELIVERY_DEADLINE).toBe('20:00 hs');
  });

  // Recargos (VALORES INFORMES ABRIL 2026)
  it('RAIN_SURCHARGE_PERCENT = 30 (base)', () => {
    expect(RAIN_SURCHARGE_PERCENT).toBe(30);
  });
  it('RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50', () => {
    expect(RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST).toBe(50);
  });
  it('WAIT_CHARGE_ARS = 2200 (actualizado desde 2100)', () => {
    expect(WAIT_CHARGE_ARS).toBe(2200);
  });
  it('BULK_EXTRA_FROM_ARS = 1800 (actualizado desde 1950)', () => {
    expect(BULK_EXTRA_FROM_ARS).toBe(1800);
  });
  it('PERIPHERY_PRICE_PER_KM = 1000', () => {
    expect(PERIPHERY_PRICE_PER_KM).toBe(1000);
  });

  // Tarifas fijas
  it('SAME_DAY_FIXED_PRICE = 6000', () => {
    expect(SAME_DAY_FIXED_PRICE).toBe(6000);
  });
  it('ECOMMERCE_24HS_PRICE = 3800 (base Inicial)', () => {
    expect(ECOMMERCE_24HS_PRICE).toBe(3800);
  });
  it('DROPOFF_DISCOUNT_PERCENT = 20', () => {
    expect(DROPOFF_DISCOUNT_PERCENT).toBe(20);
  });
  it('CONTRAREEMBOLSO_COMMISSION_PERCENT = 0', () => {
    expect(CONTRAREEMBOLSO_COMMISSION_PERCENT).toBe(0);
  });

  // Umbrales
  it('STANDARD_WEIGHT_KG = 5', () => {
    expect(STANDARD_WEIGHT_KG).toBe(5);
  });
  it('STANDARD_DIMENSIONS_CM = "40 × 40 × 30 cm" (unificado)', () => {
    expect(STANDARD_DIMENSIONS_CM).toBe('40 × 40 × 30 cm');
  });
  it('CONSULT_THRESHOLD_KM = 20', () => {
    expect(CONSULT_THRESHOLD_KM).toBe(20);
  });
  it('MAX_WEIGHT_KG NO existe (eliminado)', () => {
    // @ts-expect-error - no debe exportarse
    expect(MAX_WEIGHT_KG).toBeUndefined();
  });
});
```

### 3.5.3 Tests `copy-guard.test.ts` (ya existe, reforzar)

```typescript
// Ver 3.4.3 - Ejecutar en CI: pnpm test:ci -- copy-guard
```

---

## 3.6 Sincronización `llms.txt` / `llms-full.txt` / JSON-LD

### 3.6.1 `public/llms.txt` (mínimo para IA)

```markdown
# Envíos DosRuedas - Datos Canónicos 2026

## Servicios
- **Express**: Franja 3hs a elección, corte 15:00, 2hs anticipación, $3.700-$8.200 + $1000/km >10km
- **LowCost**: Entrega <19hs, corte 13:00, $3.000-$7.000 + $700/km >10km
- **Flex (MeLi)**: Same Day, corte 15:00, entrega <20hs, 3 niveles, retiro gratis
- **3PL Same Day**: $6.000 todo MDQ, stock gratis Friuli 1972, picking QR
- **E-com 24HS**: Next Day, $3.800-$3.000 según volumen, DropOFF -20%
- **Cuenta Corriente**: Tarifa LowCost + condiciones Express, facturación flexible
- **Contrareembolso**: $0 comisión, rendición día/24hs/semanal

## Recargos
- Lluvia: 50% (Express/LowCost), 30% (Flex/3PL/24HS)
- Espera >10min: $2.200 c/10min
- Parada: 50% (máx 2km)
- Reintento: 100%
- Periferia: $1.000/km ruta
- Bulto extra: desde $1.800 (>5kg o >40×40×30cm)

## Restricciones
- No Factura A (salvo corporativas), no "60-90 min", no "agrupado", no techo peso
- DropOFF -20% solo E-com 24HS
- Friuli 1972 no es punto de retiro
- Flex solo Mar del Plata
```

### 3.6.2 JSON-LD Service (para cada landing)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "ParcelDelivery",
  "name": "Envíos Express",
  "description": "Cadetería prioritaria punto a punto con franja horaria de 3 hs a elección.",
  "provider": { "@type": "LocalBusiness", "name": "Envíos DosRuedas" },
  "areaServed": { "@type": "GeoCircle", "geoMidpoint": {"@type":"GeoCoordinates","latitude":-38.0055,"longitude":-57.5426}, "geoRadius": "20000" },
  "priceRange": "$3.700 - $8.200",
  "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://www.enviosdosruedas.com/cotizar" }
}
```

---

## 3.7 Checklist de Implementación (Orden de Ejecución)

| Paso | Archivo | Acción | Validación |
|---|---|---|---|
| 1 | `src/lib/pricing.ts` | Verificar EXPRESS_TIERS, LOW_COST_TIERS, pricePerKm coinciden Informes | `pnpm test pricing` |
| 2 | `src/lib/promises.ts` | **Actualizar**: WAIT_CHARGE_ARS=2200, BULK_EXTRA_FROM_ARS=1800, STANDARD_DIMENSIONS_CM='40 × 40 × 30 cm' | `pnpm test promises` |
| 3 | `src/lib/promises.ts` | Verificar todas las constantes coinciden tabla 3.3 | `pnpm test promises` |
| 4 | `src/actions/quote.ts` | Usar QuoteInputSchema + calculate*Price + promises.ts recargos | `pnpm test quote` |
| 5 | `src/lib/copy-guard.test.ts` | Añadir patrones 3.4.3 + test copy-guard | `pnpm test copy-guard` |
| 6 | `public/llms.txt` | Generar desde tabla 3.6.1 | Revisar manual |
| 7 | `public/llms-full.txt` | Versión extendida con todas las fichas 2.2 | Revisar manual |
| 8 | JSON-LD en landings | Inyectar Service schema por página | `pnpm build` + validar Google Rich Results |
| 9 | `src/components/cotizar/unified/*` | Consumir RadioCardGroup + ServicePricing genéricos | Revisar visual |
| 10 | `src/components/servicios/*/Pricing.tsx` | Migrar a ServicePricing genérico + props | Revisar visual |

---

## 3.8 Decisiones Pendientes (Bloqueantes)

| # | Decisión | Opciones | Recomendación |
|---|---|---|---|
| 1 | **`promises.ts` valores recargos** | A) Mantener código actual (2100/1950) B) Actualizar a informes (2200/1800) | **B** — Informes abril 2026 son más recientes |
| 2 | **Dimensiones bulto estándar** | A) Código: 40×40×40cm B) Informes: 40×40×30cm | **B** — Unificar a 40×40×30cm |
| 3 | **Flex Nivel 2/3 precios** | A) Mantener [SIN CONFIRMAR] B) Confirmar con dueño y publicar | **B** — Preguntar a Matías ya |
| 4 | **E-commerce 24HS escalas** | A) Solo base $3.800 en promises.ts B) Publicar 4 escalas completas | **B** — Informes §6 trae las 4 |
| 5 | **`MAX_WEIGHT_KG` en copy-guard** | A) Bloquear cualquier número >5kg B) Solo bloquear 15kg específico | **A** — No publicar techo numérico |

---

**Próximo paso**: Con esta especificación técnica completa, el equipo puede implementar `pricing.ts`, `promises.ts`, validadores, tests y sincronizar `llms.txt` / JSON-LD. Quedan pendientes las 5 decisiones arriba para cerrar al 100%.