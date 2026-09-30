# Estado del sitio frente a lo que pidió el dueño

> Reemplaza la vieja §9 de la entrevista. **Re-verificado contra el código el 2026-09-29** con `grep` sobre `src/` (excluye tests). Si cambiás el código, actualizá la fila y la fecha. Las citas del dueño están en `../01-fuentes-dueno/` (D = `.docx`, X = planilla con celda, C = CSV).

## 1. Resuelto ✅

| # | Pedido o negación del dueño | Estado en el código |
|---|---|---|
| 1 | Express sin "60-90 min" (D §1-§2: *"ESTO ES FALSO"*) | Resuelto. Solo quedan menciones en comentarios de `src/lib/promises.ts` y `ExpressHero.tsx`, y la instrucción "NUNCA digas…" en `src/app/api/assistant/route.ts` |
| 2 | LowCost no es "cotizar envíos agrupados de un mismo cliente" (D §2) | Resuelto 2026-09-29: se eliminaron `BatchGrid` y la oferta de lotes; `/cotizar` compara envíos sueltos |
| 3 | Cotizador único (X `01!E7`: *"aparte les parece incómodo"*) | Resuelto 2026-09-29: `/cotizar` único; `/cotizar/express` y `/cotizar/lowcost` redirigen (308, `next.config.ts`) |
| 4 | Recargos visibles antes de confirmar (X `03!*`, D) | Resuelto 2026-09-29: `src/components/cotizar/unified/CotizadorRecargos.tsx` con constantes de `src/lib/promises.ts` |
| 5 | Bulto extra *"Desde $1950"*, +5 kg o 40 × 40 cm (X `03!C6`, `03!D6`) | Resuelto 2026-09-29: `BULK_EXTRA_FROM_ARS` en `promises.ts`, publicado en `CotizadorRecargos.tsx` |
| 6 | 5 kg o 40 × 40 cm por bulto, sin techo de peso publicado | `STANDARD_WEIGHT_KG` / `STANDARD_BULLET_DIMENSIONS_CM` |
| 7 | Dividir el 3PL en E-commerce 24HS y Same Day (X `01!E11`) | Resuelto 2026-09-29: dos tarjetas en `/servicios` (`src/app/servicios/page.tsx`), header y footer |
| 8 | "NO REALIZAMOS FACTURA A!" (D §4) | Resuelto: "Factura A" solo aparece como negación ("No emitimos Factura A") y "Factura C" ya no se afirma en `src/` |
| 9 | "Garantía de rendición inmediata no existe" (D §4) | Resuelto: la frase no aparece en `src/`; la ficha `/servicios/envios-contrareembolso` redirige a `/servicios` |
| 10 | Flex solo Mar del Plata, sin Batán (D §4) | Resuelto antes de 2026-09-29 (`ExpressFeatures`, `faqData`) |
| 11 | Respuesta en WhatsApp: menos de 5 min, no 2 (D §1) | Resuelto (`CtaSection`) |
| 12 | Same Day `$6.000` fijo (X `02!E8`) | `SAME_DAY_FIXED_PRICE` |
| 13 | Friuli no es punto de retiro (D §6) | El sitio no lo ofrece |
| 14 | Lluvia 50 % Express/LowCost, 30 % el resto | `RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST` (50) y `RAIN_SURCHARGE_PERCENT` (30) |
| 15 | "Preferimos decir que no podemos, a fallar" (C) | Publicado en `src/app/nosotros/page.tsx` y `faqData.ts` |

## 2. Pendiente ❌

| # | Tema | Gravedad | Dónde |
|---|---|---|---|
| 1 | **Flex Niveles 2 y 3** publican `$6.500` y `$4.500` sin respaldo del dueño | 🔴 Alta | `src/components/servicios/flex/FlexPricing.tsx:50,59` (conflicto #7) |
| 2 | **24HS sin constante ni cotizador**: `$3.800` escrito a mano | 🔴 Alta | `src/app/servicios/page.tsx:230` y `:274` |
| 3 | **Asistente virtual con afirmaciones sin respaldo del dueño**: "No suspendemos por llovizna costera suave… mochilas estancas", "Cuenta DNI", "Mercado Pago" | 🟠 Media | `src/app/api/assistant/route.ts:54-55` |
| 4 | **"LowCost agrupada"** en la línea de tiempo institucional | 🟡 Baja | `src/components/nosotros/sobre-nosotros/AboutTimeline.tsx:19` |
| 5 | **Páginas muertas en disco** detrás de redirects | 🟡 Baja | `src/app/servicios/envios-contrareembolso/page.tsx`, `src/app/servicios/plan-emprendedores/page.tsx` |
| 6 | **Productos prohibidos** del dueño fuera de TyC: *"Liquidos, tortas, productos mal embalados, cosas ilegales, animales"* (X `01!E22`) | 🟠 Media | `/terminos-y-condiciones` |
| 7 | **Guía "Cómo preparar un envío"**, pedida por el dueño (X `01!E20`) | 🟠 Media | No existe |
| 8 | **Propuesta de valor "El motor de tu última milla"** (X `01!E5`) sin usar | 🟡 Baja | Home |
| 9 | **Nombre inconsistente del 24HS**: "E-Commerce Next Day (24hs)" en la ficha, "E-commerce 24HS" en `/servicios` | 🟡 Baja | `src/app/servicios/deposito-fulfillment/page.tsx:72` |
| 10 | **Qué es DropOFF** no se explica (solo el `-20 %` en la tarjeta del 24HS) | 🟡 Baja | `/servicios`, `/servicios/deposito-fulfillment` |
| 11 | **Logística inversa sin costo** y **2ª visita a veces sin costo en zonas cercanas** fuera de TyC | 🟡 Baja | TyC |
| 12 | **Repartidores desde el día 1** y dominio operativo `www.logisticadosruedas.com` sin usar | 🟡 Baja | `/nosotros` |
| 13 | **Conflictos con el dueño** sin resolver: seguro 70 %, tipo de factura, archivo de valores de Cuenta Corriente, 24HS por escrito, 40 × 30 | — | `../01-fuentes-dueno/conflictos-abiertos.md` |

## 3. Descartado deliberadamente

| Tema | Por qué no se toca |
|---|---|
| Historia de éxito de un emprendedor local | El dueño: *"NO JAJA"* (X `05!C11`). El cliente estrella del CSV (MailAmericas) es un dato interno, sin autorización para publicar |
| Nombrar competidores (CDI, MMDP, Retorno) | Opinión interna en un formulario de trabajo |
| Ranking de rentabilidad entre servicios | Las fuentes se contradicen (conflicto #6) |
| "La IA nos recomienda primero que a todos" | Observación interna de posicionamiento, no un claim |
| Seguro / indemnización | Conflicto #1: no se publica hasta que el dueño aclare |
