# 02 — Motor de Cotización y Dominio de Negocio (Domain & Pricing Engine)

## 1. Servicios del Negocio

Envíos DosRuedas opera 6 servicios principales en Mar del Plata:

1. **Envíos Express**: Entrega dentro de una franja horaria de 3 horas elegida por el cliente (`EXPRESS_WINDOW`), solicitada con 2 horas de anticipación (corte 15:00 hs).
2. **Envíos LowCost**: Reparto programado en el día sin franja horaria fija (corte 13:00 hs, entregas antes de las 19:00 hs).
3. **Envíos Flex**: Solución integrada para vendedores de Mercado Libre.
4. **E-commerce 24HS**: Tarifas preferenciales para envíos programados de tiendas online.
5. **Cadetería para Empresas / Cuentas Corrientes**: Facturación mensual consolida para clientes recurrentes.
6. **Depósito y Fulfillment**: Almacenamiento y empaquetado estratégico.

---

## 2. Motor de Cotización por Distancia (`src/lib/pricing.ts`)

### 2.1. Estrategia de Fallback Resiliente
El cálculo de cotizaciones intenta consultar primero las tarifas configuradas en la base de datos a través de Prisma (`PriceRange`). Si la consulta a la BD falla o no está disponible, el sistema utiliza de forma transparente el fallback estático codificado en `src/lib/pricing.ts`.

### 2.2. Algoritmo de Cálculo de Distancia
- **Distancia < 1 km**: Se aplica el valor base del tramo de 0 a 1 km.
- **Distancia entre 1 km y 10 km**: Se cotiza según la tabla de rangos por kilómetro exacto.
- **Distancia entre 10 km y 20 km**: Se cobra el tramo base de 10 km más un adicional por kilómetro excedente usando `Math.ceil(km)`:
  - Adicional Express: `$1.000` por km excedente.
  - Adicional LowCost: `$700` por km excedente.
- **Periferia / Fuera de Mar del Plata**:
  - Para distancias mayores a 20 km o rutas en ejidos fuera de la ciudad, se aplica la tarifa plana de periferia: **`$1.000` por kilómetro de ruta** (`PERIPHERY_PRICE_PER_KM`).

---

## 3. Tarifas Fijas y Recargos (`src/lib/promises.ts`)

### 3.1. Umbral Único de Peso Estándar
- Sin recargo: **hasta 5 kg o dimensiones de 40 × 40 cm** (`STANDARD_WEIGHT_KG = 5`).
- **Importante**: No se publica ni admite un límite máximo arbitrario de peso (el valor `MAX_WEIGHT_KG = 15` fue eliminado según la confirmación oficial del negocio).

### 3.2. Recargos y Adicionales
- Recargo por peso excedente (entre 5 kg y el límite coordinado).
- Recargo por lluvia o mal tiempo.
- Recargo por días feriados o fuera del horario regular de cortes.

---

## 4. Reglas Inflexibles de Copy y Mensajería (Guardrails)

Para garantizar la fidelidad con los compromisos reales de la empresa, el sitio web tiene bloqueadas mediante pruebas automatizadas (`src/lib/copy-guard.test.ts`) las siguientes expresiones desautorizadas:

- **TIEMPO DE ENTREGA PROMETIDO**: Prohibido prometer "entrega en 60-90 min", "menos de 2 horas" o "entrega en 3 horas". Express es una **franja horaria de 3 hs a elección**, no una duración estimada del viaje.
- **LOWCOST**: Prohibido utilizar la palabra "agrupado" o insinuar que se consolidan paquetes de un mismo cliente en un solo lote.
- **FACTURACIÓN**: Prohibido prometer Factura A.
- **CONTRAREEMBOLSO**: La rendición de dinero se realiza al cierre de la jornada, al día siguiente o de forma semanal según acuerdo previo; **nunca** de forma inmediata al momento de la entrega.
