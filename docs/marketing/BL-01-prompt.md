# BL-01 — Redirecciones 301 y bloqueo del duplicado en Vercel

```
LECTURA PREVIA
Antes de tocar nada, leé en este orden: docs/knowledge_base/contexto.md (si existe), AGENTS.md, DESIGN.md, docs/marketing/F4-1-specs/BL-01-redirecciones-301-y-bloqueo-vercel.md. También revisá next.config.ts y (si existe) middleware.ts para entender qué configuración de enrutamiento hay hoy.

OBJETIVO
La URL vieja /enviosflex sigue indexada en Google como 404 y es hoy el resultado mejor posicionado de DosRuedas para "envíos flex mar del plata" — está roto. Además, el deployment 02enviosdosruedas.vercel.app es una copia indexable del sitio que compite con el dominio real por las mismas búsquedas. Este PR cierra ambas fugas.

ALCANCE
Archivos a tocar: next.config.ts, y middleware.ts (crearlo solo si decidís que el bloqueo de Vercel se resuelve por código en vez de configuración del proyecto en Vercel — evaluá ambas opciones en el paso 1 y explicá cuál elegiste y por qué).
Archivos prohibidos: no toques ningún componente de página, ningún archivo de docs/marketing/, ni la lógica de src/lib/pricing.ts. Un prompt, un pull request — no aproveches este PR para arreglar otra cosa que veas de paso, anotala para otro ítem del backlog.

PASOS
1. Inspeccioná el código actual de next.config.ts (¿existe ya un bloque redirects()?) y confirmá si el proyecto tiene middleware.ts. Presentá un plan breve: cómo vas a implementar la redirección de /enviosflex y cómo vas a resolver el bloqueo de Vercel (por header, por redirect de host, o señalando que requiere un cambio de configuración en el dashboard de Vercel que no se puede hacer por código — en ese caso, documentalo en el PR en vez de simularlo).
2. Agregá la entrada de redirects() para /enviosflex → /servicios/enviosflex con permanent: true.
3. Implementá el bloqueo/redirección del host de Vercel según lo que decidiste en el paso 1.
4. Verificá que no queden otras rutas del README (/servicios/express, /servicios/lowcost, /servicios/flex, /servicios/3pl) needing redirección si se usan como enlaces externos — si encontrás alguna, sumala con el mismo criterio, documentándolo en el PR.
5. Confirmá que sitemap.ts no liste /enviosflex en ningún lado.

RESTRICCIONES
Tokens de marca no aplican a este ítem (no hay UI). Voseo no aplica (no hay copy). Precios: no se tocan. Solo pnpm. No agregar dependencias nuevas. No cambiar ninguna URL sin su redirección correspondiente — este es justamente el ítem que arregla eso, así que aplicá el mismo cuidado a cualquier URL nueva que tu propio cambio pueda afectar.

CRITERIOS DE ACEPTACIÓN
- curl -I https://www.enviosdosruedas.com/enviosflex devuelve 308 (o 301) con Location apuntando a /servicios/enviosflex.
- La URL de Vercel responde 301 al dominio real, o devuelve X-Robots-Tag: noindex si el 301 por host no es viable en el plan actual — documentado explícitamente en el PR si es esta segunda opción.
- La redirección preserva los query params si los hay.
- No se genera un bucle de redirección.

VERIFICACIÓN
pnpm build, pnpm run lint, pnpm tsc --noEmit, pnpm test — todo en verde. Sumá o actualizá una prueba (Playwright o de configuración) que confirme que /enviosflex resuelve al contenido de /servicios/enviosflex sin 404.

ENTREGA
Rama: fix/seo-redirects-enviosflex-vercel
Commit: fix(seo): redirigir /enviosflex y bloquear duplicado de Vercel
Descripción del PR: qué (redirección 301 + bloqueo de Vercel), por qué (fuga de indexación identificada en F1-2/F2-1), cómo probarlo (comandos curl de arriba), IDs resueltos (D-3 parcial, CAMP-04 parcial, BL-01).

SI ALGO NO CIERRA
Si el bloqueo de Vercel no se puede resolver completamente por código (por ejemplo, si el plan de Vercel no permite Deployment Protection ni redirección por host desde next.config.ts/middleware.ts), no inventes una solución que no vas a poder verificar — parate, documentá la limitación en el PR con la opción de mitigación parcial (X-Robots-Tag: noindex) y preguntá si hace falta un cambio manual en el dashboard de Vercel que esté fuera del alcance de este PR.
```
