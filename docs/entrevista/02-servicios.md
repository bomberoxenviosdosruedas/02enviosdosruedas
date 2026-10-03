# ENTREVISTA 02 — SERVICIOS (Definición Canónica)
**Fuente de verdad para AGENTS.md, DESIGN.md, knowledge_base, copy, pricing.ts, promises.ts, UI components, schema.org**

> **Fuentes primarias**: `docs/informes/identidad-y-servicios-dosruedas.md` + `docs/informes/contenido-completo-pdf-abril-2026.md` (respuestas textuales del dueño, abril 2026).
> **Instrucciones**: Un servicio = una fila completa. Datos ya completados desde fuentes primarias. Si un campo no aplica, "N/A". Marcá `[CONFIRMAR]` solo si hay divergencia con realidad actual 2026. **No dejes campos vacíos.**

---

## 2.1 Mapa de Servicios (Resumen)

| ID Interno | Nombre Público | Activo | URL Canónica | Cotizador | Prioridad SEO |
|---|---|---|---|---|---|
| `EXPRESS` | Envíos Express | SÍ | `/servicios/envios-express` | Unificado (`/cotizar`) | ALTA |
| `LOW_COST` | Envíos LowCost | SÍ | `/servicios/envios-lowcost` | Unificado (`/cotizar`) | ALTA |
| `FLEX` | Mercado Envíos Flex | SÍ | `/servicios/enviosflex` | Unificado (`/cotizar`) | ALTA |
| `DEPOSITO` | Depósito & Fulfillment (3PL) | SÍ | `/servicios/deposito-fulfillment` | Contacto / WhatsApp | MEDIA |
| `CONTRAREEMBOLSO` | Contrareembolso | SÍ | `/servicios/envios-contrareembolso` → 301 a `/servicios` | Incluido en otros | BAJA |
| `CUENTA_CORRIENTE` | Cuenta Corriente / Empresas | SÍ | `/servicios/empresas-cuenta-corriente` | Contacto / WhatsApp | MEDIA |
| `EMPRENDEDORES` | Plan Emprendedores / E-commerce | SÍ | `/servicios/plan-emprendedores` → 301 a `/servicios/empresas-cuenta-corriente` | Contacto / WhatsApp | MEDIA |

> **Nota**: `CONTRAREEMBOLSO` y `EMPRENDEDORES` son **condiciones/planes** que se ofrecen dentro de otros servicios, no landings independientes (decisión dueño 2026-09-29, confirmado en `next.config.ts`).

---

## 2.2 Ficha Canónica por Servicio

### 2.2.1 EXPRESS — Envíos Express

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Envíos Express | Informes §2 |
| **Tagline** (1 línea, voseo) | Cadetería prioritaria punto a punto: pedís, retiramos y vamos derecho al destino. | Informes §2 |
| **Descripción extendida** (2-3 líneas, voseo) | Entrega en franja horaria de 3 hs a tu elección, con 2 hs de anticipación mínima. Cubrimos todo Mar del Plata y periferia consultada. Bultos hasta 5 kg / 40×40×40 cm sin recargo. Flota propia, sin tercerizar. | Informes §2 |
| **Promesa de entrega** | Franja de 3 hs (ej: 10-13, 14-17, 17-19). Pedido hasta 15:00 para entrega en el día. | Informes §2 |
| **Corte horario** | 15:00 hs | Informes §2 |
| **Anticipación mínima** | 2 hs | Informes §2 |
| **Peso / dimensiones sin cargo** | ≤ 5 kg y ≤ 40 × 40 × 40 cm por bulto | Informes §2, §9 |
| **Recargos propios** | Lluvia 50% · Espera >10 min: $2.200 c/10 min · Parada intermedia: 50% (máx 2 km desvío) · Reintento: 100% · Periferia: $1.000/km ruta · Bulto extra: desde $1.800 | Informes §2, §10 |
| **Tarifas base (MDQ urbana)** | Z1 (0-3 km): $3.700 · Z2 (3-5 km): $4.600 · Z3 (5-7 km): $6.100 · Z4 (7-10 km): $8.200 · Z5 (>10 km): `Math.ceil(km) × $1.000` | Informes §2 |
| **Tarifa periferia** | $1.000 / km de ruta (consultar por WhatsApp) | promises.ts + Entrevista 1.4 |
| **¿Tiene landing propia?** | SÍ (`/servicios/envios-express`) | next.config.ts |
| **¿Usa cotizador unificado?** | SÍ (`/cotizar` → RadioCardGroup EXPRESS) | Arquitectura |
| **Schema.org Service type** | `ParcelDelivery`, `CourierService` | Estándar |
| **Palabras clave SEO** | envíos express mar del plata, cadetería urgente mdq, entrega mismo día, franja horaria 3 horas | Inferido |
| **Diferencial vs competencia** | Franja a elección (no "60-90 min"), flota propia, precio por km real, sin techo de peso publicado | AGENTS.md |
| **Estado** | ACTIVO — Fuente: `pricing.ts` (EXPRESS_TIERS) + `promises.ts` | Código |

---

### 2.2.2 LOW_COST — Envíos LowCost

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Envíos LowCost | Informes §3 |
| **Tagline** (1 línea, voseo) | Paquetería consolidada: la tarifa más baja para envíos programados en el día. | Informes §3 |
| **Descripción extendida** (2-3 líneas, voseo) | Pedís antes de las 13:00 y entregamos antes de las 19:00, sin franja horaria fija. Ruteo urbano optimizado para máxima eficiencia. Ideal para volúmenes recurrentes. | Informes §3 |
| **Promesa de entrega** | Entrega antes de 19:00 hs (sin franja a elección). | Informes §3 |
| **Corte horario** | 13:00 hs | Informes §3 |
| **Anticipación mínima** | 2 hs para coordinar retiro | Informes §3 |
| **Peso / dimensiones sin cargo** | ≤ 5 kg y ≤ 40 × 40 × 40 cm por bulto | Informes §3, §9 |
| **Recargos propios** | Lluvia 50% · Espera >10 min: $2.200 c/10 min · Parada intermedia: 50% (máx 2 km desvío) · Reintento: 100% · Periferia: $1.000/km ruta · Bulto extra: desde $1.800 | Informes §3, §10 |
| **Tarifas base (MDQ urbana)** | Z1 (0-3 km): $3.000 · Z2 (3-5 km): $4.000 · Z3 (5-7 km): $5.300 · Z4 (7-10 km): $7.000 · Z5 (>10 km): `Math.ceil(km) × $700` | Informes §3 |
| **Tarifa periferia** | $1.000 / km de ruta (consultar por WhatsApp) | promises.ts + Entrevista 1.4 |
| **¿Tiene landing propia?** | SÍ (`/servicios/envios-lowcost`) | next.config.ts |
| **¿Usa cotizador unificado?** | SÍ (`/cotizar` → RadioCardGroup LOW_COST) | Arquitectura |
| **Schema.org Service type** | `ParcelDelivery`, `CourierService` | Estándar |
| **Palabras clave SEO** | envíos lowcost mar del plata, cadetería económica mdq, envíos programados, ruteo consolidado | Inferido |
| **Diferencial vs competencia** | No es "agrupado por cliente" — es ruteo consolidado de toda la operación. Corte 13:00, entrega <19:00. | AGENTS.md |
| **Estado** | ACTIVO — Fuente: `pricing.ts` (LOW_COST_TIERS) + `promises.ts` | Código |

---

### 2.2.3 FLEX — Mercado Envíos Flex

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Mercado Envíos Flex (MeLi) | Informes §4 |
| **Tagline** (1 línea, voseo) | Logística Same-Day para tus ventas de Mercado Libre: retiramos, entregamos, cuidamos tu reputación. | Informes §4 |
| **Descripción extendida** (2-3 líneas, voseo) | Corte 15:00 hs, entrega antes de 20:00 hs. Desde 1 paquete, retiros múltiples por día. Devoluciones sin cargo si el comprador rechaza. Choferes capacitados, flota uniformeada. 100% cumplimiento objetivo. | Informes §4 |
| **Promesa de entrega** | Entrega en el día (antes de 20:00). | Informes §4 |
| **Corte horario** | 15:00 hs | Informes §4 |
| **Anticipación mínima** | N/A (corte fijo 15:00) | Informes §4 |
| **Peso / dimensiones sin cargo** | Según políticas MeLi Flex (estándar: ≤ 5 kg / 40×40×40 cm) | Informes §9 |
| **Recargos propios** | Lluvia 30% · Espera >10 min: $2.200 c/10 min · Parada: 50% · Reintento: 100% · Periferia: $1.000/km ruta · Bulto extra: desde $1.800 | Informes §4, §10 |
| **Niveles y tarifas** | **Nivel 1 (1-4 envíos/día)**: Z1 $3.000 · Z2 $4.000 · Z3 $5.300 · Z4 $7.000 · Z5 $700/km · 2da visita 50% todas zonas. **Nivel 2 (+5 envíos/día)**: Z1 $3.000 · Z2 $4.000 · Z3 $5.300 · Z4/Z5 **Tarifa fija $6.500** · 2da visita: Z1 gratis, Z2-Z5 50%. **Nivel 3 (+10 envíos/día - MercadoLíderes)**: **Tarifa plana $4.500** todo MDQ · 2da visita **100% bonificada todas zonas**. | Informes §4 |
| **Colecta / Retiro** | SIN CARGO en todo Mar del Plata | Informes §4 |
| **Tarifa periferia** | $1.000 / km de ruta (consultar por WhatsApp) | promises.ts |
| **¿Tiene landing propia?** | SÍ (`/servicios/enviosflex`) | next.config.ts |
| **¿Usa cotizador unificado?** | SÍ (`/cotizar` → RadioCardGroup FLEX) | Arquitectura |
| **Schema.org Service type** | `ParcelDelivery`, `CourierService` | Estándar |
| **Palabras clave SEO** | mercado envios flex mar del plata, entregas mismo dia mercado libre, logistica meli mdq, reputacion mercadolider | Inferido |
| **Diferencial vs competencia** | Retiro desde 1 paquete, múltiples retiros/día, devoluciones sin cargo, foco en reputación ML. | Informes §4 |
| **Estado** | ACTIVO — **Niveles 2 y 3 [SIN CONFIRMAR 2026]** (ver `promises.ts` + `FlexPricing.tsx`) | Código + AGENTS.md |

---

### 2.2.4 DEPOSITO — Depósito & Fulfillment 3PL (Plan E-Commerce Same Day)

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Depósito & Fulfillment (3PL) / Plan E-Commerce Same Day | Informes §5 |
| **Tagline** (1 línea, voseo) | Tu stock en Friuli 1972: nosotros pickemeamos, empaquetamos y despachamos Same Day. | Informes §5 |
| **Descripción extendida** (2-3 líneas, voseo) | Almacenamiento sin costo en depósito propio. Picking por QR al instante. Despacho Same Day en MDQ. DropOFF: traés tus paquetes listos y te descontamos 20%. Contrareembolso $0 comisión. | Informes §5, §6 |
| **Promesa de entrega** | Same Day (corte 15:00 para Express/Flex, 13:00 para LowCost). Entrega 9:00-20:00. | Informes §5 |
| **Corte horario** | 15:00 hs (pedidos hasta 15:00 se entregan en el día) | Informes §5 |
| **Anticipación mínima** | N/A (fulfillment propio) | Informes §5 |
| **Peso / dimensiones sin cargo** | ≤ 5 kg / 40×40×40 cm (estándar moto). Mayores: consultar. | Informes §9 |
| **Recargos propios** | Lluvia 30% · Espera >10 min: $2.200 c/10 min · Parada: 50% · Reintento: 100% · Periferia: $1.000/km · Bulto extra: desde $1.800 | Informes §5, §10 |
| **Tarifa plana** | **$6.000** a todo Mar del Plata | Informes §5 |
| **Servicios incluidos** | Almacenamiento (stock operativo) · Preparación (Picking) y embalaje básico (bolsa y film estándar) · Despacho y Entrega Same Day · Cobranza contra entrega GRATIS · 2da Visita **100% Bonificada** · Gestión 100% vía WhatsApp | Informes §5 |
| **Reglas de stock** | Admite: indumentaria, calzado, marroquinería, tecnología chica. No admite: voluminosos, líquidos, frágiles. Devoluciones: 50% valor original. | Informes §5 |
| **DropOFF -20%** | **NO** (solo en E-commerce 24HS / Plan Inicial DropOFF) | Informes §6 + AGENTS.md |
| **¿Tiene landing propia?** | SÍ (`/servicios/deposito-fulfillment`) | next.config.ts |
| **¿Usa cotizador unificado?** | NO → Contacto / WhatsApp (calculadora DropOFF en landing) | Arquitectura |
| **Schema.org Service type** | `WarehouseService`, `FulfillmentService`, `ParcelDelivery` | Estándar |
| **Palabras clave SEO** | deposito fulfillment mar del plata, 3pl mdq, pick pack ship, drop off envios, almacenamiento ecommerce | Inferido |
| **Diferencial vs competencia** | Depósito propio (no tercerizado), picking QR, stock gratis en plan 3PL, 2da visita 100% gratis. | Informes §5 |
| **Estado** | ACTIVO — Tarifas fijas en `promises.ts` (SAME_DAY_FIXED_PRICE=6000) | Código |

---

### 2.2.5 ECOMMERCE_24HS — Plan E-Commerce 24hs (Distribución Next Day)

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Plan E-Commerce 24hs (Distribución Next Day) | Informes §6 |
| **Tagline** (1 línea, voseo) | Tarifa plana previsible para escalar tu tienda: retiramos hoy, entregamos mañana en toda la ciudad. | Informes §6 |
| **Descripción extendida** (2-3 líneas, voseo) | Retiro en el día y entrega garantizada al día siguiente (Next Day) en franja 9-20hs. Escalas por volumen mensual. DropOFF -20% trayendo paquetes a Friuli 1972. | Informes §6 |
| **Promesa de entrega** | Next Day (retiro hoy, entrega mañana). Franja 9:00-20:00. | Informes §6 |
| **Corte horario** | Retiro consolidado día anterior / coordinado | Informes §6 |
| **Anticipación mínima** | N/A | Informes §6 |
| **Peso / dimensiones sin cargo** | ≤ 5 kg / 40×40×30 cm (estándar moto). Mayores: consultar. | Informes §9, §10 |
| **Recargos propios** | Lluvia 50% (u opción posponer) · Espera >10 min: $2.200 c/10 min · Parada: 50% · Reintento: 100% · Periferia: $1.000/km · Bulto extra: desde $1.800 · Logística inversa (cambios): 50% | Informes §6, §10 |
| **Escalas por volumen mensual** | **Inicial (1-199 envíos/mes)**: $3.800/envío · **Pro (200-1.199)**: $3.500 · **Elite (1.200-1.999)**: $3.200 · **Partner (+2.000)**: $3.000 | Informes §6 |
| **DropOFF -20%** | **SÍ** — Trayendo paquetes a Friuli 1972: 20% descuento directo sobre tarifa aplicable + evita costo de retiro | Informes §6 |
| **Retiro diario** | GRATIS superando 10 paquetes. Menor volumen: costo pase moto $4.000. Alternativa: DropOFF. | Informes §6 |
| **Servicios incluidos** | 2da Visita **GRATIS (Bonificada)** · Cobranza en destino **GRATIS** · Logística inversa (cambios): 50% valor | Informes §6 |
| **¿Tiene landing propia?** | SÍ (sección en `/servicios/deposito-fulfillment` o `/servicios#ecommerce-24hs`) | Arquitectura |
| **¿Usa cotizador unificado?** | NO → Contacto / WhatsApp | Arquitectura |
| **Schema.org Service type** | `ParcelDelivery`, `DeliveryService` | Estándar |
| **Palabras clave SEO** | ecommerce 24hs mar del plata, envio next day mdq, distribucion programada, drop off 20%, tarifa plana por volumen | Inferido |
| **Diferencial vs competencia** | Tarifa plana previsible por volumen, DropOFF -20% real, 2da visita y contrareembolso gratis, retiro gratis +10 paquetes. | Informes §6 |
| **Estado** | ACTIVO — `promises.ts` ECOMMERCE_24HS_PRICE=3800 (base Inicial) | Código |

---

### 2.2.6 CUENTA_CORRIENTE — Cuenta Corriente Flexible (PyMEs y Emprendedores)

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Cuenta Corriente Flexible / Empresas | Informes §7 |
| **Tagline** (1 línea, voseo) | Tarifa LowCost con condiciones Express: elegís franja, corte 15:00, facturación flexible. | Informes §7 |
| **Descripción extendida** (2-3 líneas, voseo) | Para emprendedores y empresas sin volumen fijo. Abonás tarifa LowCost pero gozás condiciones Express (elección de rango, recepción hasta 15:00, 2hs anticipación). Facturación personalizada (Factura C / Factura A corporativas). Frecuencia: diaria, semanal, quincenal, mensual. Pago flexible: remitente o destinatario. 2da visita bonificada 50%. | Informes §7 |
| **¿Es servicio independiente?** | SÍ — Landing propia + condiciones comerciales | Informes §7 |
| **Beneficio exclusivo** | **Valor LowCost + Servicio Express** (único en el mercado) | Informes §7 |
| **Volumen mínimo** | Sin mínimo fijo (diseñado para sin volumen fijo) | Informes §7 |
| **Condiciones de pago** | Diario / Semanal / Quincenal / Mensual (a elección) | Informes §7 |
| **Factura** | Factura C estándar. Factura A en cuentas corporativas grandes. | Informes §7, §3 |
| **Atención** | Operador dedicado por WhatsApp | Informes §7 |
| **Recargos** | Lluvia 50% · Bulto +$1.800 · Demora +$2.200 c/10min · Vuelta 50% · 2da visita 50% | Informes §7 |
| **¿Tiene landing propia?** | SÍ (`/servicios/empresas-cuenta-corriente`) | next.config.ts |
| **¿Usa cotizador?** | NO → Contacto / WhatsApp (tarifa a medida) | Arquitectura |
| **Schema.org Service type** | `FinancialService`, `BusinessService` | Estándar |
| **Palabras clave SEO** | cuenta corriente empresas mar del plata, logistica corporativa mdq, facturacion mensual envios, tarifa lowcost condiciones express | Inferido |
| **Estado** | ACTIVO — Landing en `/servicios/empresas-cuenta-corriente` | Código |

---

### 2.2.7 CONTRAREEMBOLSO — Contrareembolso (Condición transversal)

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Contrareembolso / Cobro en destino | Informes §7, §8 |
| **Tagline** (1 línea, voseo) | Cobramos en mano al entregar. $0 comisión. Rendición ágil (en el día, 24hs o semanal) con arqueo detallado. | Informes §8 |
| **Descripción extendida** (2-3 líneas, voseo) | Se suma a Express, LowCost, Flex, 3PL, 24hs, Cuenta Corriente. No es servicio aparte. El destinatario paga en efectivo/transferencia al recibir. Rendición: en el día / 24hs / semanal (acordado) con reporte y arqueo. Valor físico transportado por cuenta y orden del cliente. | Informes §8 |
| **¿Es servicio independiente?** | NO — Es condición/opción dentro de todos los servicios | Informes §8 |
| **Comisión** | **0% (GRATIS en todos los servicios)** | Informes §8 |
| **Rendición** | En el día / 24hs / Semanal (acordado) + arqueo detallado | Informes §8 |
| **Factura** | Factura C (no emite A salvo corporativas) | Informes §3, §8 |
| **¿Tiene landing propia?** | NO — Redirige a `/servicios` (decisión 2026-09-29) | next.config.ts |
| **¿Usa cotizador?** | NO — Se cotiza como recargo $0 en el servicio base | Arquitectura |
| **Schema.org Service type** | `PaymentService` (como feature) | Estándar |
| **Palabras clave SEO** | contrareembolso mar del plata, cobro en destino, envio contra entrega mdq | Inferido |
| **Estado** | ACTIVO COMO FEATURE — `promises.ts` CONTRAREEMBOLSO_COMMISSION_PERCENT=0 | Código |

---

### 2.2.8 EMPRENDEDORES — Plan Emprendedores / E-commerce

| Campo | Valor | Fuente |
|---|---|---|
| **Nombre público** | Plan Emprendedores / E-commerce | Informes §7 (mismo que Cuenta Corriente) |
| **Tagline** (1 línea, voseo) | Logística a medida para tu tienda online: Same Day, 24HS, DropOFF -20%, stock gratis. | Inferido de §5, §6 |
| **Descripción extendida** (2-3 líneas, voseo) | Tres planes: Inicial DropOFF ($2.400/envío), 3PL ($3.000 + stock gratis), PyME Corporativo (a medida). Incluye contrareembolso $0, picking QR, tracking GPS. | Informes §5, §6 |
| **¿Es servicio independiente?** | NO — Mismo contenido que Cuenta Corriente / Depósito (decisión 2026-09-29) | next.config.ts |
| **Redirección** | `/servicios/plan-emprendedores` → 301 a `/servicios/empresas-cuenta-corriente` | next.config.ts |
| **Planes** | Ver `DEPOSITO` (2.2.4) y `ECOMMERCE_24HS` (2.2.5) — mismos 3 planes por vertical | Informes §5, §6 |
| **¿Tiene landing propia?** | NO — Redirige | next.config.ts |
| **Schema.org Service type** | `BusinessService` | Estándar |
| **Estado** | REDIRIGE — `next.config.ts` líneas 38-42 | Código |

---

## 2.3 Matriz de Recargos por Servicio (de `promises.ts` + Informes)

| Recargo | EXPRESS | LOW_COST | FLEX | DEPOSITO/3PL | ECOM_24HS | CUENTA_CORRIENTE | CONTRAREEMBOLSO |
|---|---|---|---|---|---|---|---|
| **Lluvia** | 50% | 50% | **30%** | **30%** | 50% (u opción posponer) | 50% | Según servicio base |
| **Espera >10 min** | $2.200 c/10 min | $2.200 c/10 min | $2.200 c/10 min | $2.200 c/10 min | $2.200 c/10 min | $2.200 c/10 min | Según servicio base |
| **Parada intermedia** | 50% (máx 2 km) | 50% (máx 2 km) | 50% (máx 2 km) | 50% (máx 2 km) | 50% (máx 2 km) | 50% (máx 2 km) | Según servicio base |
| **Reintento (2da visita)** | 100% | 100% | Según nivel | **100% Bonificada** | **100% Bonificada** | 50% | Según servicio base |
| **Periferia** | $1.000/km ruta | $1.000/km ruta | $1.000/km ruta | $1.000/km ruta | $1.000/km ruta | $1.000/km ruta | Según servicio base |
| **Bulto extra (>5kg/40cm)** | Desde $1.800 | Desde $1.800 | Desde $1.800 | Desde $1.800 | Desde $1.800 | Desde $1.800 | Según servicio base |
| **DropOFF -20%** | NO | NO | NO | NO | **SÍ (Solo este + Plan Inicial DropOFF)** | NO | N/A |
| **Retiro gratis** | N/A | N/A | SÍ (todo MDQ) | N/A | +10 paquetes/día (si no $4.000) | N/A | N/A |
| **Logística inversa** | N/A | N/A | N/A | Devoluciones 50% | Cambios 50% | N/A | N/A |

> **Nota**: Valores de `promises.ts` usan $2.100 para espera y $1.950 para bulto extra. **Los informes dicen $2.200 y $1.800**. Decidir cuál prevalece (recomendación: actualizar `promises.ts` a valores de informes abril 2026).

---

## 2.4 Reglas de Negocio Críticas (para copy, UI, validadores)

| Regla | Descripción | Fuente |
|---|---|---|
| **Express ≠ "60-90 min" ni "en 3 hs"** | Es "franja horaria de 3 hs a elección" + "2 hs anticipación" | Informes §2 + `promises.ts` EXPRESS_WINDOW |
| **LowCost ≠ "agrupado" ni "por lote"** | Es "reparto programado en el día, sin franja" | Informes §3 + `promises.ts` |
| **No publicar techo de peso** | Decisión dueño 2026-09-30. `MAX_WEIGHT_KG` eliminada. Límite = capacidad física moto. | AGENTS.md + Informes §9 |
| **DropOFF -20% solo E-com 24HS** | No aplica a Express, LowCost, Flex, 3PL, Contrareembolso, Cuenta Corriente. | Informes §6 + AGENTS.md |
| **Factura A: NO (salvo corporativas)** | Estándar: Factura C. Corporativas grandes: Factura A. No afirmar "Factura C" genérico sin confirmar. | Informes §3, §7 |
| **Rendición contrareembolso** | No "inmediata". Es: en el día / 24hs / semanal (acordado) + arqueo. | Informes §8 |
| **Friuli 1972 ≠ punto de retiro** | No es sucursal para clientes. Es hub operativo / depósito. | AGENTS.md |
| **Flex solo MDQ** | No fuera de Mar del Plata. | AGENTS.md |
| **Horarios fuera de atención: NO** | No envíos fuera de 08-22 WhatsApp / 08-18 base. | Informes §11 |
| **Devolución si rechaza en puerta** | Ida se paga, retorno (vuelta al local) **SIN CARGO**. | Informes §10 |
| **2da visita por ausente** | Express/LowCost: viaje nuevo. Cuenta Corriente: 50%. Flex: según nivel (N1 50%, N2 Z1 gratis resto 50%, N3 gratis). E-com 3PL/24hs: **100% gratis**. | Informes §10 |
| **Bulto excedente** | >5 kg o >40×40×30 cm (Informes §9) o >40×40×40 cm (código actual). **Unificar a 40×40×30 cm**. | Informes §9 vs código |

---

## 2.5 URLs y Redirecciones (de `next.config.ts`)

| Origen | Destino | Tipo | Motivo |
|---|---|---|---|
| `/enviosflex` | `/servicios/enviosflex` | 301 | Legacy |
| `/servicios/express` | `/servicios/envios-express` | 301 | Legacy |
| `/servicios/lowcost` | `/servicios/envios-lowcost` | 301 | Legacy |
| `/servicios/flex` | `/servicios/enviosflex` | 301 | Legacy |
| `/servicios/3pl` | `/servicios/deposito-fulfillment` | 301 | Legacy |
| `/servicios/plan-emprendedores` | `/servicios/empresas-cuenta-corriente` | 301 | Mismo contenido que Cuenta Corriente |
| `/servicios/envios-contrareembolso` | `/servicios` | 301 | No landing propia, es feature |
| `/cotizar/express` | `/cotizar` | 301 | Cotizador unificado |
| `/cotizar/lowcost` | `/cotizar` | 301 | Cotizador unificado |

---

## 2.6 Datos para UI Components (RadioCardGroup, ServicePricing, Stepper)

### RadioCardGroup Options (Cotizador Unificado)

```typescript
const SERVICE_OPTIONS = [
  {
    id: 'express',
    serviceType: 'EXPRESS',
    label: 'Envíos Express',
    description: 'Franja de 3 hs a elección. Retiro y entrega en el día.',
    price: 'Desde $3.700',
    badge: 'Prioritario',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 'lowcost',
    serviceType: 'LOW_COST',
    label: 'Envíos LowCost',
    description: 'Entrega antes de 19:00 hs. Corte 13:00. Tarifa consolidada.',
    price: 'Desde $3.000',
    badge: 'Económico',
    icon: <TrendingDown className="w-5 h-5" />,
  },
  {
    id: 'flex',
    serviceType: 'FLEX',
    label: 'Mercado Envíos Flex',
    description: 'Same Day para Mercado Libre. Corte 15:00. Desde 1 paquete.',
    price: 'Desde $3.000',
    badge: 'MeLi Partner',
    icon: <ShoppingBag className="w-5 h-5" />,
  },
];
```

### ServicePricing Tiers (para ServicePricing component)

```typescript
// EXPRESS
const EXPRESS_TIERS = [
  { range: 'Zona 1', distance: '0-3 km', price: '$3.700', features: ['Franja 3 hs a elección', '2 hs anticipación', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 2', distance: '3-5 km', price: '$4.600', features: ['Franja 3 hs a elección', '2 hs anticipación', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 3', distance: '5-7 km', price: '$6.100', features: ['Franja 3 hs a elección', '2 hs anticipación', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 4', distance: '7-10 km', price: '$8.200', features: ['Franja 3 hs a elección', '2 hs anticipación', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Periferia', distance: '>10 km', price: 'Math.ceil(km) × $1.000', features: ['Consultar por WhatsApp', '$1.000/km ruta'], unit: '/ km', tag: 'Consultar' },
];

// LOW_COST
const LOW_COST_TIERS = [
  { range: 'Zona 1', distance: '0-3 km', price: '$3.000', features: ['Corte 13:00', 'Entrega <19:00', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 2', distance: '3-5 km', price: '$4.000', features: ['Corte 13:00', 'Entrega <19:00', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 3', distance: '5-7 km', price: '$5.300', features: ['Corte 13:00', 'Entrega <19:00', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Zona 4', distance: '7-10 km', price: '$7.000', features: ['Corte 13:00', 'Entrega <19:00', 'Hasta 5 kg'], unit: '/ envío' },
  { range: 'Periferia', distance: '>10 km', price: 'Math.ceil(km) × $700', features: ['Consultar por WhatsApp', '$700/km excedente'], unit: '/ km', tag: 'Consultar' },
];

// FLEX (Niveles)
const FLEX_LEVELS = [
  { title: 'Nivel 1 · Crecimiento', range: '1-4 envíos/día', price: '$3.000', features: ['Tarifa estándar por km', 'Z5 (+10km): $7.000 + $700/km adic.'], unit: '/ liq. quincenal' },
  { title: 'Nivel 2 · Pro', range: '5-10 envíos/día', price: '$3.000', features: ['Tope fijo $6.500 en Z4/Z5 [SIN CONFIRMAR]', '2da visita Z1 gratis, otras 50%', 'Retiro bonificado sin cargo'], unit: '/ liq. quincenal', tag: 'Recomendado', featured: true },
  { title: 'Nivel 3 · Elite', range: '+10 envíos/día', price: '$4.500', features: ['Tarifa plana unificada a toda la ciudad [SIN CONFIRMAR]'], unit: '/ liq. quincenal' },
];

// ECOMMERCE_24HS (Escalas volumen mensual)
const ECOMMERCE_24HS_TIERS = [
  { title: 'Inicial', range: '1-199 envíos/mes', price: '$3.800', features: ['Tarifa plana todo MDQ', 'Retiro gratis +10 paquetes', '2da visita gratis', 'Contrareembolso gratis', 'DropOFF -20% en Friuli 1972'], unit: '/ envío', tag: 'Inicial' },
  { title: 'Pro', range: '200-1.199 envíos/mes', price: '$3.500', features: ['Tarifa plana todo MDQ', 'Retiro gratis +10 paquetes', '2da visita gratis', 'Contrareembolso gratis', 'DropOFF -20% en Friuli 1972'], unit: '/ envío', tag: 'Pro', featured: true },
  { title: 'Elite', range: '1.200-1.999 envíos/mes', price: '$3.200', features: ['Tarifa plana todo MDQ', 'Retiro gratis +10 paquetes', '2da visita gratis', 'Contrareembolso gratis', 'DropOFF -20% en Friuli 1972'], unit: '/ envío', tag: 'Elite' },
  { title: 'Partner', range: '+2.000 envíos/mes', price: '$3.000', features: ['Tarifa plana todo MDQ', 'Retiro gratis +10 paquetes', '2da visita gratis', 'Contrareembolso gratis', 'DropOFF -20% en Friuli 1972'], unit: '/ envío', tag: 'Partner' },
];

// DEPOSITO / E-COMMERCE SAME DAY (3PL)
const ECOMMERCE_SAME_DAY = [
  { title: 'Plan 3PL Same Day', range: 'Todo Mar del Plata', price: '$6.000', features: ['Tarifa plana', 'Stock gratis en Friuli 1972', 'Picking QR instantáneo', 'Despacho Same Day 9-20hs', '2da visita 100% gratis', 'Contrareembolso gratis', 'Gestión WhatsApp'], unit: '/ envío', tag: '3PL Same Day', featured: true },
];

// CUENTA CORRIENTE (Empresas)
const CUENTA_CORRIENTE_PLAN = [
  { title: 'Cuenta Corriente Flexible', range: 'Sin volumen mínimo', price: 'Tarifa LowCost', features: ['Condiciones Express (franja 3hs)', 'Corte 15:00', '2hs anticipación', 'Factura C / A corporativa', 'Cierre diario/semanal/quincenal/mensual', 'Pago remitente o destinatario', '2da visita 50%'], unit: '/ envío', tag: 'LowCost + Express' },
];
```

---

## 2.7 Checklist de Consistencia (validar antes de publicar)

- [ ] Tarifas en UI = `pricing.ts` (EXPRESS_TIERS, LOW_COST_TIERS) + `promises.ts` (precios fijos)
- [ ] Recargos en UI = `promises.ts` (lluvia, espera, parada, reintento, periferia, bulto extra) **→ Actualizar a valores informes: $2.200 espera, $1.800 bulto**
- [ ] Cortes horarios en UI = `promises.ts` (EXPRESS_CUTOFF_TIME, LOWCOST_CUTOFF_TIME, FLEX_CUTOFF_TIME)
- [ ] Promesas de entrega = `promises.ts` (EXPRESS_WINDOW, LOWCOST_DELIVERY_DEADLINE, FLEX_DELIVERY_DEADLINE)
- [ ] No "60-90 min", no "agrupado", no "Factura A" genérica, no "rendición inmediata", no techo peso
- [ ] DropOFF -20% solo aparece en E-commerce 24HS / Plan Inicial DropOFF
- [ ] Flex Nivel 2 ($6.500) y Nivel 3 ($4.500) marcados **[SIN CONFIRMAR]** en UI
- [ ] E-commerce 24HS $3.800 confirmado 2026-09-29 (base Inicial)
- [ ] E-commerce Same Day $6.000 fijo
- [ ] Contrareembolso $0 comisión, rendición acordada (no inmediata)
- [ ] Redirecciones 301 funcionando en `next.config.ts`
- [ ] Cotizador unificado usa RadioCardGroup con 3 opciones (Express, LowCost, Flex)
- [ ] ServicePricing genérico recibe tiers por props (no hardcodeado)
- [ ] Bulto excedente unificado: >5 kg o >40×40×30 cm (Informes §9)

---

## 2.8 Pendientes de Confirmación con Dueño

| Dato | Estado | Acción |
|---|---|---|
| Flex Nivel 2: $6.500 tope fijo Z4/Z5 | [SIN CONFIRMAR 2026] | Preguntar a Matías (informes abril 2026 lo traen) |
| Flex Nivel 3: $4.500 tarifa plana | [SIN CONFIRMAR 2026] | Preguntar a Matías (informes abril 2026 lo traen) |
| Razón social exacta (1.2) | [PENDIENTE] | Preguntar a Matías |
| MailAmericas autorización logo | [PENDIENTE] | Preguntar a Matías |
| Certificaciones Flex Partner URL | [PENDIENTE] | Preguntar a Matías |
| Métricas exactas 2026 (envíos/mes, clientes) | [PENDIENTE] | Preguntar a Matías / extraer panel |
| **Actualizar `promises.ts` a valores informes**: espera $2.200, bulto $1.800 | [DECIDIR] | Alinear código con informes abril 2026 |
| **Bulto excedente dimensiones**: unificar a 40×40×30 cm | [DECIDIR] | Código usa 40×40×40 cm, informes 40×40×30 cm |

---

**Próximo paso**: Generar **ENTREVISTA 03 — TARIFAS Y RECARGO** (detalle técnico para `pricing.ts`, `promises.ts`, validadores Zod, tests de integridad, copy-guard, tipos TypeScript).