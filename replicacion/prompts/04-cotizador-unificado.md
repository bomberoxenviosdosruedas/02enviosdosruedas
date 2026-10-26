# Bloque 04: Cotizador Unificado y Motor Tarifario

> **Ubicación:** `replicacion/prompts/04-cotizador-unificado.md`  
> **Componentes:** `src/app/cotizar/page.tsx`, `useCotizadorUnified.ts`, `quote.ts`, `CotizadorUnificado.tsx`, `CotizadorForm.tsx`, `CotizadorMapa.tsx`, `CotizadorComparativa.tsx`, `CotizadorRecargos.tsx`, endpoints `/api/places/*`  
> **Objetivo:** Implementar el cotizador interactivo insignia de Envíos DosRuedas: cálculo de distancia vial con Google Maps en Mar del Plata, cálculo dual en paralelo (Express y LowCost), renderizado de ruta en Leaflet y confirmación vía WhatsApp.  

---

## 🎯 MODALIDAD 1: PROMPT DECLARATIVO / FUNCIONAL

```text
Actúa como Arquitecto de Software Fullstack y Especialista en Algoritmos y UI.

Tu misión es implementar el Cotizador Unificado de "Envíos DosRuedas" para la ciudad de Mar del Plata.

Lógica de Negocio y Requerimientos:
1. Entrada de Datos Única:
   - El usuario introduce Punto de Retiro (Origen) y Punto de Entrega (Destino).
   - Los campos cuentan con autocompletado inteligente de direcciones mediante Google Places API restringido a Mar del Plata y 30 km a la redonda.
   - Campos adicionales: Nombre/Comercio, Teléfono y Detalle opcional del paquete.
2. Servidor Seguro y Cálculo de Distancia (`src/actions/quote.ts`):
   - Server Action que recibe las coordenadas, consulta Google Directions API del lado del servidor para calcular la distancia vial exacta (km reales de asfalto).
   - Usa `React.cache()` para no pedir la distancia dos veces al comparar Express y LowCost en paralelo.
3. Motor Tarifario Puro (`src/lib/pricing.ts`):
   - Express:
     * 0 a 3 km: $3.700
     * 3 a 5 km: $4.600
     * 5 a 7 km: $6.100
     * 7 a 10 km: $8.200
     * +10 km: distanciaKm * $1.000 (cálculo lineal total redondeado).
   - LowCost:
     * 0 a 3 km: $3.000
     * 3 a 5 km: $4.000
     * 5 a 7 km: $5.300
     * 7 a 10 km: $7.000
     * +10 km: distanciaKm * $700 (cálculo lineal total redondeado).
   - Distancias mayores a 20 km: Se clasifica como "A consultar" (destino periférico de ruta).
4. Componentes UI:
   - `CotizadorMapa.tsx`: Visualiza el origen, destino y trazado de la ruta sobre mapa Leaflet centrado en Mar del Plata (-38.0055, -57.5426).
   - `CotizadorComparativa.tsx`: Tarjetas lado a lado mostrando los dos precios en Geist Mono gigante, horarios de corte (Express corte 15:00 hs con franja de 3 hs; LowCost corte 13:00 hs con entrega en el día hasta las 19:00 hs), y botones individuales para confirmar el pedido en WhatsApp con mensaje codificado en URL.
   - `CotizadorRecargos.tsx`: Información transparente sobre recargo por lluvia (30% a 50%), espera en puerta (10 min sin cargo, luego $2.200 por bloque de 10 min), paradas extra (+50% hasta 2 km) y bulto extra (más de 5 kg o 40x40x30 cm desde $1.800).
```

---

## 🛠️ MODALIDAD 2: PROMPT TÉCNICO / CÓDIGO E IMPORTS EXACTOS

```text
Actúa como un Ingeniero Senior de Software. Creá e integrá la lógica del Cotizador Unificado:

### 1. `src/lib/pricing.ts`
```ts
export interface PriceTier { minKm: number; maxKm: number; price: number; }

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

export function calculateExpressPrice(distanceKm: number): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';
  const tier = EXPRESS_TIERS.find((t) => distanceKm <= t.maxKm);
  return tier ? tier.price : Math.round(distanceKm * EXPRESS_PRICE_PER_KM);
}

export function calculateLowCostPrice(distanceKm: number): number | 'consultar' {
  if (distanceKm > 20) return 'consultar';
  const tier = LOW_COST_TIERS.find((t) => distanceKm <= t.maxKm);
  return tier ? tier.price : Math.round(distanceKm * LOW_COST_PRICE_PER_KM);
}
```

### 2. `src/actions/quote.ts`
```ts
'use server';
import { cache } from 'react';
import { z } from 'zod';
import { calculateExpressPrice, calculateLowCostPrice } from '@/lib/pricing';

const quoteSchema = z.object({
  origenLat: z.number().finite(),
  origenLng: z.number().finite(),
  destinoLat: z.number().finite(),
  destinoLng: z.number().finite(),
  serviceType: z.enum(['EXPRESS', 'LOW_COST']),
});

const fetchRouteDistance = cache(async (oLat: number, oLng: number, dLat: number, dLng: number) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) return null;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${oLat},${oLng}&destination=${dLat},${dLng}&key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== 'OK' || !data.routes?.[0]?.legs?.[0]) return null;
  return Math.round((data.routes[0].legs[0].distance.value / 1000) * 10) / 10;
});

export async function calculateQuoteAction(prevState: any, formData: FormData) {
  const validated = quoteSchema.parse({
    origenLat: Number(formData.get('origenLat')),
    origenLng: Number(formData.get('origenLng')),
    destinoLat: Number(formData.get('destinoLat')),
    destinoLng: Number(formData.get('destinoLng')),
    serviceType: formData.get('serviceType'),
  });

  const distanceKm = await fetchRouteDistance(validated.origenLat, validated.origenLng, validated.destinoLat, validated.destinoLng);
  if (distanceKm === null) return { success: false, error: 'No se pudo calcular la ruta vial' };

  const price = validated.serviceType === 'EXPRESS' 
    ? calculateExpressPrice(distanceKm) 
    : calculateLowCostPrice(distanceKm);

  return { success: true, price, distanceKm, error: null };
}
```

### 3. Autocompletado Perimetral (`src/app/api/places/autocomplete/route.ts`)
- Restricción obligatoria a Mar del Plata:
  ```ts
  locationRestriction: {
    circle: {
      center: { latitude: -38.0055, longitude: -57.5426 },
      radius: 30000.0,
    },
  }
  ```
- Comprobación de cabecera `sec-fetch-site !== 'cross-site'`.
```
