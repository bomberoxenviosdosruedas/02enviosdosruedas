# BL-03 — Constantes únicas de promesa y fórmula de precio consistente

## 1. Objetivo y IDs que resuelve
Unificar en un solo lugar del código los datos que hoy están repetidos y contradichos en cuatro sitios distintos: la ventana de tiempo de Express, el umbral de "a consultar", y el copy de la fórmula de +10km, que hoy no coincide con lo que calcula `pricing.ts`. Resuelve: **DC-03** (ventana de tiempo, cuatro versiones), **DC-13** (umbral y fórmula de +10km), **CAMP-06**.
Por qué importa: para un viaje de 12km el sitio hoy promete $8.200 + $2.000 = $10.200 y el cotizador calcula $12.000 — es una contradicción que un cliente puede capturar en una captura de pantalla.

## 2. Alcance
**Entra:** crear `src/lib/promises.ts` con las constantes (`EXPRESS_WINDOW`, `MAX_WEIGHT_KG`, `RAIN_SURCHARGE_FLEX`, `CONSULT_THRESHOLD_KM`) y consumirlas desde home, páginas de servicio, cotizadores, JSON-LD y `llms.txt`; corregir el copy de "+10 km" en las páginas Express y LowCost para que describa la fórmula real de `pricing.ts` (`Math.ceil(km) × tarifa`, sin cargo base) en vez de la fórmula incorrecta actual.
**Queda fuera:** cambiar la fórmula de cálculo en sí (`pricing.ts` es la fuente de verdad, no se toca su lógica); decidir cuál de las cuatro promesas de tiempo es la real (eso es una decisión del dueño, ver bloqueo) — este ítem prepara el lugar único donde esa decisión, una vez tomada, se aplica en todos lados a la vez.

## 3. Archivos a modificar o crear
- `src/lib/promises.ts` (nuevo).
- `src/lib/pricing.ts` (solo lectura, no modificar la lógica — confirmar que la constante de `promises.ts` para el umbral de "consultar" sea la misma que ya usa `pricing.ts` internamente, no una copia que pueda desincronizarse).
- `src/components/home/HeroAnimado.tsx`, `src/components/cotizar/express/*`, `src/components/servicios/express/ExpressPricing.tsx`, `src/components/servicios/lowcost/LowCostPricing.tsx`, `src/app/layout.tsx` (JSON-LD), `public/llms.txt`.

## 4. Layout por breakpoint
No aplica — cambio de datos/copy, no de estructura visual. El texto de la fórmula de +10km debe caber en el mismo espacio que ocupa hoy en `ExpressPricing.tsx`/`LowCostPricing.tsx`, sin necesitar rediseño.

## 5. Tokens exactos
No aplica — no hay cambio de estilos.

## 6. Estados
No aplica.

## 7. Contenido
Texto final de la fórmula de +10km (a aplicar en `ExpressPricing.tsx`, reemplazando "+10km: $8.200 base + $1.000 por km adicional"):
**"+10 km: {precio por km, redondeado hacia arriba} — cotizá tu tramo exacto en el cotizador."** (usar `{precio}` como referencia a `pricing.ts`, no escribir un monto fijo en el copy, porque el monto real depende del km exacto, tal como ya lo calcula el código).
El texto de la ventana de tiempo de Express **no se define en esta spec** — depende del bloqueo (ver abajo).

## 8. Accesibilidad
No aplica directamente — verificar que el nuevo copy de +10km no rompa el contraste ni el tamaño de fuente ya definidos en el componente.

## 9. SEO
Una vez fijada la promesa de tiempo real, debe coincidir textualmente en: home, página Express, chip del cotizador, JSON-LD (`description` del `Service`), y `llms.txt` — los cinco lugares que hoy dicen cosas distintas.

## 10. Datos y lógica
- `promises.ts` exporta constantes tipadas (`export const EXPRESS_WINDOW = '...'`, etc.), sin lógica de cálculo — el cálculo real sigue en `pricing.ts`.
- Ningún componente debe tener el umbral o la ventana de tiempo hardcodeada como string suelto después de este cambio; todos importan de `promises.ts`.
- Sin Server Actions nuevas. Sin eventos de analítica nuevos (los eventos de cotización son BL-25).

## 11. Casos borde
- Si `pricing.ts` cambia su umbral de "consultar" en el futuro, `promises.ts` debe seguir siendo la única fuente que hay que tocar — verificar que no quede ningún string duplicado del umbral en otro archivo tras este cambio (buscar con grep el valor numérico actual, no solo el nombre de la constante).
- El texto de `llms.txt` es estático (no se genera desde código) — si cambia la promesa en el futuro, alguien tiene que acordarse de actualizarlo a mano; dejar un comentario en `promises.ts` que lo mencione.

## 12. Criterios de aceptación y pruebas
- Un grep de los valores actuales del umbral ("15 km", "20 km") y de la ventana de tiempo ("30-90 min", "2 horas", "3 hs") en `src/` y `public/llms.txt` no debe devolver ningún resultado fuera de `promises.ts` y sus consumidores directos.
- Para un viaje de 12km, el texto de la página Express y el resultado del cotizador dicen el mismo número (verificar manualmente o con un test que compare el string renderizado contra `calculateExpressPrice(12)`).
- `pnpm build`, `pnpm tsc --noEmit` sin errores nuevos.
- Prueba nueva (Vitest): snapshot o assertion de que `ExpressPricing.tsx` y `pricing.ts` coinciden para al menos un caso de +10km.

## Bloqueo
**La ventana de tiempo real de Express y el umbral definitivo de "a consultar" (15 km del cotizador vs. 20 km de `pricing.ts`) requieren una decisión del dueño** (F2-1 A VERIFICAR). Este ítem puede avanzar creando `promises.ts` con placeholders documentados y aplicando ya la corrección de la fórmula de +10km (que no depende de esa decisión), pero no debe darse por "terminado" hasta que la ventana de tiempo esté confirmada.
