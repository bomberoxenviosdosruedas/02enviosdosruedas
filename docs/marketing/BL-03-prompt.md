# BL-03 — Constantes únicas de promesa y fórmula de precio consistente

```
LECTURA PREVIA
Antes de tocar nada, leé en este orden: docs/knowledge_base/contexto.md (si existe), AGENTS.md (especialmente la tabla oficial de tarifas), DESIGN.md, docs/marketing/F4-1-specs/BL-03-promesas-unificadas-y-formula-precio.md, y src/lib/pricing.ts completo (no lo modifiques, pero tenés que entender exactamente su fórmula antes de escribir el copy que la describe).

OBJETIVO
Para un envío de 12km, la página de servicio Express hoy promete "$8.200 base + $1.000 por km adicional" = $10.200, pero el cotizador real calcula Math.ceil(km) × $1.000 = $12.000 para el tramo de +10km. Es una contradicción visible entre dos partes del mismo sitio. Además, la ventana de tiempo de Express tiene cuatro versiones distintas en circulación. Este PR crea un lugar único para estos datos y corrige el copy de la fórmula de precio (no toca la fórmula de cálculo en sí, que ya es correcta en pricing.ts).

ALCANCE
Archivos a tocar: src/lib/promises.ts (nuevo), src/components/home/HeroAnimado.tsx, src/components/cotizar/express/* (donde se muestre el umbral o la ventana de tiempo), src/components/servicios/express/ExpressPricing.tsx, src/components/servicios/lowcost/LowCostPricing.tsx, src/app/layout.tsx (JSON-LD, solo la parte de descripción de servicio si aplica), public/llms.txt.
Archivos prohibidos: NO modifiques la lógica de cálculo en src/lib/pricing.ts — es la fuente de verdad y ya es correcta. Este PR corrige el copy que describe esa fórmula, no la fórmula.

PASOS
1. Inspeccioná src/lib/pricing.ts y confirmá el umbral exacto de "consultar" que usa hoy (según la auditoría, 20km) y la fórmula real de +10km (Math.ceil(km) × tarifa, sin cargo base). Inspeccioná también dónde el copy actual dice algo distinto (según la auditoría: "+15 km" en el cotizador, "$8.200 base + $1.000/km" en la página Express). Presentá un plan breve.
2. Creá src/lib/promises.ts con las constantes EXPRESS_WINDOW, MAX_WEIGHT_KG, RAIN_SURCHARGE_FLEX, CONSULT_THRESHOLD_KM. Para CONSULT_THRESHOLD_KM, usá el mismo valor que ya usa pricing.ts internamente — no un número copiado a mano que pueda desincronizarse (si pricing.ts no expone ese umbral como constante exportada, exportalo desde ahí y reexportalo o referencialo desde promises.ts).
3. Para EXPRESS_WINDOW y RAIN_SURCHARGE_FLEX, SI no hay una respuesta confirmada del dueño sobre cuál de las cuatro versiones de la ventana de tiempo es la real, dejá la constante con el valor que hoy usa la mayoría de las fuentes (revisá F2-1 DC-03 para el detalle) PERO marcada con un comentario TODO explícito de que está pendiente de confirmación — no la des por definitiva.
4. Corregí el copy de "+10 km" en ExpressPricing.tsx y LowCostPricing.tsx para que describa la fórmula real, usando el patrón: "+10 km: cotizá tu tramo exacto en el cotizador" en vez de un monto fijo incorrecto.
5. Reemplazá los strings sueltos de ventana de tiempo/umbral en los demás archivos del ALCANCE para que todos importen de promises.ts.

RESTRICCIONES
Precios: nunca escribas un monto fijo de DosRuedas fuera de lo que ya calcula pricing.ts — el copy nuevo de "+10km" no debe tener un número, debe remitir al cotizador. Voseo en cualquier copy nuevo. Solo pnpm, sin dependencias nuevas. No cambiar URLs.

CRITERIOS DE ACEPTACIÓN
- Un grep de "15 km", "20 km", "30-90 min", "2 horas", "3 hs" en src/ y public/llms.txt no devuelve resultados fuera de promises.ts y sus consumidores.
- Para un viaje de 12km, el texto de la página Express ya no contradice el resultado del cotizador (verificado manualmente).
- CONSULT_THRESHOLD_KM en promises.ts es el mismo valor que usa pricing.ts, no una copia separada.

VERIFICACIÓN
pnpm build, pnpm run lint, pnpm tsc --noEmit, pnpm test. Sumá una prueba Vitest que compare el string renderizado de ExpressPricing.tsx contra el resultado real de calculateExpressPrice() para un caso de +10km.

ENTREGA
Rama: fix/pricing-promises-consistency
Commit: fix(pricing): unificar promesas de tiempo y corregir copy de fórmula +10km
Descripción del PR: qué, por qué (contradicción de $10.200 vs $12.000 detectada en la auditoría), cómo probarlo, IDs resueltos (DC-03, DC-13, CAMP-06, BL-03), y nota explícita de que la ventana de tiempo definitiva sigue pendiente de confirmación del dueño.

SI ALGO NO CIERRA
No decidas por tu cuenta cuál de las cuatro promesas de tiempo es la correcta — es una decisión de negocio, no técnica. Si el PR llega a este punto sin que el equipo te haya dado una respuesta, dejá el valor más conservador marcado como TODO y priorizá que al menos la fórmula de precio (que sí tiene una fuente de verdad clara en pricing.ts) quede consistente en todos lados.
```
