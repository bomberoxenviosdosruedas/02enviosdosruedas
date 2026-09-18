# BL-19 — Unificar el email de contacto público

```
LECTURA PREVIA
Antes de tocar nada, leé en este orden: docs/knowledge_base/contexto.md (si existe), AGENTS.md, DESIGN.md, docs/marketing/F4-1-specs/BL-19-email-de-contacto-unico.md, y docs/marketing/F2-4-brand-review.md §5 (tabla de coherencia de datos del negocio).

OBJETIVO
README.md cita dev@enviosdosruedas.com.ar como contacto, mientras el código de contacto usa matiascejas@enviosdosruedas.com — dos dominios distintos (.com.ar vs .com) para lo que podría ser el mismo propósito o dos propósitos distintos sin aclarar. Este PR unifica o aclara explícitamente cuál es cuál.

ALCANCE
Archivos a tocar: README.md, y el/los componente(s) de contacto que muestran un email al cliente (identificalos en el paso 1 — no se confirmó con certeza en la auditoría cuál aparece en la UI pública).
Archivos prohibidos: no toques ningún otro dato de contacto (teléfono, dirección) — esos ya están confirmados como consistentes en toda la auditoría, no hace falta tocarlos.

PASOS
1. Buscá en el repo (grep de "@enviosdosruedas") todas las apariciones de ambos emails y confirmá en qué contexto aparece cada uno (¿es visible al cliente en alguna página? ¿es solo metadata? ¿es solo documentación interna?). Presentá un plan breve.
2. SI tenés una respuesta confirmada de cuál es el email público real (revisá si te la dieron por fuera de este prompt, ligada a la pregunta 6 de docs/marketing/F2-4-brand-review.md §9): aplicala de forma consistente en README.md y en el sitio.
3. SI NO tenés esa confirmación: no elijas uno de los dos por tu cuenta. En su lugar, aclará en README.md, en la línea donde aparece dev@enviosdosruedas.com.ar, que es un contacto interno/técnico y no el de atención al cliente (si eso es correcto — confirmalo por el contexto del archivo, no lo asumas si no es evidente). Dejá un comentario TODO en el código del componente de contacto indicando que el email definitivo está pendiente de confirmación del dueño.

RESTRICCIONES
No inventes ni elijas el email "correcto" sin evidencia clara. Solo pnpm. Sin dependencias nuevas.

CRITERIOS DE ACEPTACIÓN
- Si se unificó: un solo dominio de email aparece para el mismo propósito en README.md y en el sitio.
- Si no se pudo unificar: ambos emails están explícitamente etiquetados según su propósito real (o marcados como pendientes de confirmar), sin ambigüedad para quien lea el README.

VERIFICACIÓN
pnpm build, pnpm run lint, pnpm tsc --noEmit, pnpm test.

ENTREGA
Rama: fix/docs-contact-email-consistency
Commit: fix(docs): aclarar o unificar el email de contacto público
Descripción del PR: qué, por qué, cómo probarlo, IDs resueltos (MARCA-02, BL-19), y nota explícita si quedó pendiente de confirmación del dueño.

SI ALGO NO CIERRA
Este es un dato de negocio (qué casilla de correo usa la empresa de cara al cliente), no algo que se pueda inferir con certeza del código. Si tras el paso 1 seguís sin poder distinguir cuál email es el público y cuál el interno, no lo decidas — dejalo documentado como pendiente y preguntá.
```
