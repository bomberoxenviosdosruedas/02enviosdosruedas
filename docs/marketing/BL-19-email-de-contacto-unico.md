# BL-19 — Unificar el email de contacto público

## 1. Objetivo y IDs que resuelve
Hoy conviven dos emails con dominios distintos (`dev@enviosdosruedas.com.ar` en `README.md`, `matiascejas@enviosdosruedas.com` en el código de contacto) — se unifica a uno solo para que la documentación y el sitio no se contradigan. Resuelve: **MARCA-02**.

## 2. Alcance
**Entra:** reemplazar en `README.md` la referencia a `dev@enviosdosruedas.com.ar` por el email real que confirme el dueño (si corresponde, aclarar que es un contacto interno de desarrollo y no el de atención al cliente); confirmar que el email visible en el sitio (`matiascejas@enviosdosruedas.com` u otro) es el correcto para mostrarle a un cliente.
**Queda fuera:** cualquier cambio de infraestructura de correo (crear casillas nuevas, alias, etc.) — esto es solo un cambio de qué texto se muestra dónde.

## 3. Archivos a modificar o crear
- `README.md`.
- Componente(s) de contacto que muestran el email al cliente (confirmar cuál es hoy — no se identificó con certeza en esta auditoría si `matiascejas@enviosdosruedas.com` aparece en la UI pública o solo en el código/metadata).

## 4. Layout por breakpoint
No aplica — es un cambio de texto, sin impacto de layout.

## 5. Tokens exactos
No aplica.

## 6. Estados
No aplica.

## 7. Contenido
El email definitivo a usar **no se define en esta spec** — depende de la respuesta del dueño (ver bloqueo). Una vez confirmado, debe aparecer igual en `README.md` y en el sitio, sin variaciones de dominio (`.com` vs `.com.ar`).

## 8. Accesibilidad
Si el email se muestra como enlace (`mailto:`), confirmar que tiene un nombre accesible claro (no solo el email crudo si el contexto no lo aclara) — mismo criterio que A11Y-12 para WhatsApp/teléfono.

## 9. SEO
Si el email aparece en el JSON-LD de `Organization`/`LocalBusiness` (`email` field), debe coincidir con el que se decida acá.

## 10. Datos y lógica
Cambio de texto/configuración, sin lógica nueva.

## 11. Casos borde
Si el email de desarrollo (`dev@...`) tiene un uso legítimo interno (por ejemplo, para reportes de error automatizados), no eliminarlo sin más — aclarar en el README que es un contacto técnico interno, distinto del canal de atención al cliente, en vez de borrarlo directamente.

## 12. Criterios de aceptación y pruebas
- Un solo dominio de email aparece en `README.md` y en el sitio para el mismo propósito (atención al cliente).
- Si hay dos emails con propósitos distintos (cliente vs. desarrollo), ambos están explícitamente etiquetados como tales en `README.md`.
- `pnpm build` sin errores nuevos.

## Bloqueo
**Requiere que el dueño confirme cuál es el email de contacto público real** (F2-4 §9, pregunta 6). Sin esa respuesta, este ítem no puede cerrarse — puede dejarse documentado en el PR como "pendiente de confirmación" si se decide avanzar solo con la aclaración de que son dos contactos distintos.
