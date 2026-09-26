# 💰 Tarifario Oficial y Fuente de Verdad de Precios 2026

> **DOCUMENTO CRÍTICO Y FUENTE DE VERDAD:**
> Este documento define las tarifas oficiales vigentes para el año operativo **2026** de **Envíos DosRuedas** en Mar del Plata (Partido de General Pueyrredón).
> Ningún componente, cotizador o texto comercial debe mostrar precios distintos a los aquí consignados.

---

## 1. Tabla de Tarifas Oficiales 2026

| Servicio | Rango Distancia | Distancia Mín (km) | Distancia Máx (km) | Precio Unitario / Base ARS | Regla de Cálculo |
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

---

## 2. Regla de Cálculo para Tramos Excedentes (+10 km)

Para distancias mayores a 10 km y hasta el límite urbano operativo de 20 km:
1. Se redondea la distancia real en kilómetros hacia el número entero superior inmediato usando `Math.ceil(km)`.
2. Se multiplica dicho valor entero por la tarifa por kilómetro del servicio:
   - **Express:** `Math.ceil(km) * 1000`
   - **LowCost:** `Math.ceil(km) * 700`

### Ejemplos Validados:
- **10.3 km Express:** `Math.ceil(10.3) = 11 km` → `11 × $1.000 = $11.000 ARS`
- **12.0 km Express:** `Math.ceil(12.0) = 12 km` → `12 × $1.000 = $12.000 ARS`
- **10.1 km LowCost:** `Math.ceil(10.1) = 11 km` → `11 × $700 = $7.700 ARS`
- **15.4 km LowCost:** `Math.ceil(15.4) = 16 km` → `16 × $700 = $11.200 ARS`
- **20.1 km en ambos servicios:** Supera el umbral operativo automático → Devuelve `'consultar'` y abre canal WhatsApp con datos precompletados.

---

## 3. Mapeo en Base de Datos (Prisma: `PriceRange`)

Entidad definida en `prisma/schema.prisma` y poblada en `prisma/seed.ts`:

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

### Registros Exactos en DB:
```typescript
[
  { serviceType: 'LOW_COST', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3000, descripcion: 'LOW_COST: 0 a 3 km' },
  { serviceType: 'LOW_COST', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4000, descripcion: 'LOW_COST: 3 a 5 km' },
  { serviceType: 'LOW_COST', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 5300, descripcion: 'LOW_COST: 5 a 7 km' },
  { serviceType: 'LOW_COST', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 7000, descripcion: 'LOW_COST: 7 a 10 km (Precio base)' },
  { serviceType: 'LOW_COST', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 700, descripcion: 'LOW_COST: km adicional excedente (10+ km)' },

  { serviceType: 'EXPRESS', distanciaMinKm: 0, distanciaMaxKm: 3, precioRango: 3700, descripcion: 'EXPRESS: 0 a 3 km' },
  { serviceType: 'EXPRESS', distanciaMinKm: 3, distanciaMaxKm: 5, precioRango: 4600, descripcion: 'EXPRESS: 3 a 5 km' },
  { serviceType: 'EXPRESS', distanciaMinKm: 5, distanciaMaxKm: 7, precioRango: 6100, descripcion: 'EXPRESS: 5 a 7 km' },
  { serviceType: 'EXPRESS', distanciaMinKm: 7, distanciaMaxKm: 10, precioRango: 8200, descripcion: 'EXPRESS: 7 a 10 km (Precio base)' },
  { serviceType: 'EXPRESS', distanciaMinKm: 10, distanciaMaxKm: 9999, precioRango: 1000, descripcion: 'EXPRESS: km adicional excedente (10+ km)' },
]
```

---

## 4. Implementación en Código

La función pura de cálculo se ubica en:
- `src/lib/pricing.ts` (`calculateExpressPrice` y `calculateLowCostPrice`)

Ambas funciones contemplan fallback a estas mismas constantes en caso de desconexión transitoria de base de datos.

## 5. A VERIFICAR — Condiciones comercialesDepósito & Fulfillment

Estas dos condiciones se muestran al cliente pero **no** están en la tabla oficial de tarifas
ni en la BD (`PriceRange`). Se declararon como constantes en `src/lib/promises.ts` tomando como
fuente el texto ya publicado en las FAQ.

| Constante | Valor | Dónde se usa | Fuente textual |
|---|---|---|---|
| `DROPOFF_DISCOUNT_PERCENT` | `20` | Hero de Plan Emprendedores | `faqData.ts` → «traés tus envíos listos a nuestro depósito y obtenés un 20% de descuento sobre la tarifa final» |
| `CONTRAREEMBOLSO_COMMISSION_PERCENT` | `0` | Hero de Plan Emprendedores | `faqData.ts` → «no cobramos ningún extra ni porcentaje de comisión por este servicio» |

**Pendiente:** confirmar con Matías el plazo de vigencia del 20% y si aplica también a
Mercado Envíos Flex dentro de la modalidad Drop-Off. Hasta entonces, consumirlas siempre
desde `src/lib/promises.ts` — nunca hardcodearlas en un componente.
