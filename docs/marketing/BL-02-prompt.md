# BL-02 — Metadata global, títulos y horarios reales en JSON-LD

```
LECTURA PREVIA
Antes de tocar nada, leé en este orden: docs/knowledge_base/contexto.md (si existe), AGENTS.md, DESIGN.md, docs/marketing/F4-1-specs/BL-02-metadata-global-y-horarios.md. También leé docs/marketing/F2-4-brand-review.md §5 (tabla de coherencia de datos del negocio) para entender exactamente la inconsistencia de horarios.

OBJETIVO
El horario que Google lee en el JSON-LD de layout.tsx (lunes a sábado, 08:00–20:00) no coincide con el horario que el cliente ve en el footer y en /contacto (lunes a viernes 09:00–18:00, sábados 10:00–15:00 aparte). Un cliente que confía en Google puede llegar a un local cerrado. Además, hay titles duplicando la marca y el campo keywords deprecado desde 2009. Este PR corrige la metadata global.

ALCANCE
Archivos a tocar: src/app/layout.tsx (title.template, bloque JSON-LD), y cada src/app/**/page.tsx que hoy repita la marca en su title individual.
Archivos prohibidos: no toques contenido visible de ninguna página (eso es otro tipo de ítem), no toques src/components/seo/SchemaMarkup.tsx (ese componente no está conectado a ninguna página hoy — es BL-39, fuera de este alcance).

PASOS
1. Inspeccioná el bloque JSON-LD actual en layout.tsx y el title.template. Presentá un plan breve antes de modificar.
2. Quitá el campo keywords de toda la metadata.
3. Ajustá title.template para que ninguna página repita la marca dos veces; corregí cada page.tsx que hoy incluya la marca en su propio title.
4. Para el horario del JSON-LD: SI el dueño ya confirmó el horario real (revisá si hay una respuesta a la pregunta 5 de docs/marketing/F2-4-brand-review.md §9 en algún lugar del repo o en instrucciones que te hayan dado por fuera de este prompt), aplicalo exactamente igual en el JSON-LD, en el footer y en /contacto. SI NO hay confirmación, no inventes un horario: dejá un comentario TODO explícito en el código junto al bloque openingHoursSpecification indicando que este dato está pendiente de confirmación del dueño, y no toques ese bloque más que para dejar el comentario.
5. Sumá/corregí sameAs, logo, hasMap e image en el JSON-LD de Organization/LocalBusiness con los datos reales ya presentes en el código (perfiles de Instagram/Facebook, logo real).

RESTRICCIONES
Tokens de marca: no aplica (sin UI nueva). Voseo: aplica al title de home ya definido en F2-3 ("Mensajería en moto y logística en Mar del Plata") — no lo reescribas, usalo tal cual. Precios: no se tocan. Solo pnpm. No agregar dependencias. No cambiar ninguna URL. Respetar prefers-reduced-motion no aplica acá.

CRITERIOS DE ACEPTACIÓN
- Ningún title supera 60 caracteres ni repite "Envíos DosRuedas" dos veces.
- keywords no aparece en ninguna metadata.
- El validador de Rich Results de Google (verificación manual, dejar instrucciones en el PR de cómo correrlo) muestra LocalBusiness sin errores.
- Si se aplicó un horario nuevo: es idéntico en JSON-LD, footer y /contacto. Si no había confirmación: queda un TODO explícito y NINGÚN horario inventado.

VERIFICACIÓN
pnpm build, pnpm run lint, pnpm tsc --noEmit, pnpm test — todo en verde.

ENTREGA
Rama: fix/seo-metadata-global
Commit: fix(seo): limpiar metadata global y corregir datos estructurados
Descripción del PR: qué, por qué, cómo probarlo, IDs resueltos (D-9, CAMP-04 parcial, MARCA-01, BL-02), y una nota explícita si el horario quedó pendiente de confirmación.

SI ALGO NO CIERRA
El horario real es un dato de negocio, no una decisión técnica — si no está confirmado en ningún lado accesible para vos, NO seleccione ni el horario del footer ni el del JSON-LD como "el correcto" por tu cuenta. Parate, dejá el TODO, y preguntá. Lo mismo si encontrás otro dato de negocio (teléfono, dirección) que no coincida entre fuentes durante este trabajo.
```
