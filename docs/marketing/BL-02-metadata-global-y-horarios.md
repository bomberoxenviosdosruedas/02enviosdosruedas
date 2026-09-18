# BL-02 — Metadata global, títulos y horarios reales en JSON-LD

## 1. Objetivo y IDs que resuelve
Corregir los titles duplicados/largos, quitar `keywords` (deprecado por Google desde 2009), y — lo más importante — hacer que el horario que lee Google (`openingHoursSpecification`) diga lo mismo que el horario que ve el cliente en el footer y en `/contacto`. Resuelve: **D-9** (title.template), **CAMP-04** (parte de metadata/horarios), **MARCA-01** (horario inconsistente, crítico en F2-4).
Por qué importa: un cliente que confía en el horario de Google y llega un sábado a las 19:00 encuentra el local cerrado — es un problema de confianza real, no solo de SEO.

## 2. Alcance
**Entra:** `title.template` sin repetir la marca en cada `page.tsx`; eliminar el campo `keywords` de la metadata; corregir `openingHoursSpecification` para que coincida con el horario real (una vez que el dueño lo confirme — ver bloqueo); unificar `sameAs`, `logo`, agregar `hasMap` e `image` al JSON-LD de `Organization`/`LocalBusiness`.
**Queda fuera:** activar los tipos de schema `Service`, `FAQPage`, `BreadcrumbList` que ya existen en `SchemaMarkup.tsx` pero no se usan — eso depende de que ese componente resuelva primero el claim de "certificado" (BL-39) y no es parte de este ítem.

## 3. Archivos a modificar o crear
- `src/app/layout.tsx` — bloque JSON-LD (líneas ~150-180 según la auditoría), `title.template`.
- `src/app/**/page.tsx` — quitar la repetición de marca en cada `title` individual (dejar que el template la agregue una sola vez).

## 4. Layout por breakpoint
No aplica — metadata y datos estructurados, sin cambios visuales.

## 5. Tokens exactos
No aplica.

## 6. Estados
No aplica.

## 7. Contenido
- Title de home, ya definido en F2-3 §7: **"Mensajería en moto y logística en Mar del Plata"** (COPY, F2-3).
- El horario exacto a poner en `openingHoursSpecification` **no se define en esta spec** — depende de la respuesta del dueño (ver bloqueo). No inventar un valor intermedio entre las dos versiones existentes.

## 8. Accesibilidad
No aplica directamente (JSON-LD no es visible), salvo que la limpieza de `title` ayuda indirectamente al anuncio de página en lectores de pantalla al navegar (el title es lo primero que anuncia un lector de pantalla al cargar una página).

## 9. SEO
- Ningún `title` debe superar 60 caracteres ni repetir la marca dos veces.
- `keywords` fuera de la metadata de toda página.
- El validador de Rich Results de Google debe mostrar `LocalBusiness` sin errores, con horario consistente con el sitio.
- `sameAs` debe listar los perfiles reales (`facebook.com/enviosdosruedas`, `instagram.com/enviosdosruedas`) una sola vez, sin duplicados.

## 10. Datos y lógica
Cambio de configuración de metadata (Server Components, `generateMetadata`/objeto `metadata` estático según cómo esté hoy cada `page.tsx`). Sin Server Actions, sin eventos de analítica.

## 11. Casos borde
- Si alguna página ya define un `title` corto y correcto, no tocarla — verificar antes de aplicar el template a todas por igual.
- El horario de sábado debe poder representarse como un bloque `OpeningHoursSpecification` separado del de lunes a viernes (el schema lo permite con múltiples entradas en el array) — no forzar un solo bloque como está hoy.

## 12. Criterios de aceptación y pruebas
- Ningún `title` en el sitio supera 60 caracteres ni repite "Envíos DosRuedas" dos veces.
- El validador de Rich Results de Google (test manual, no automatizable en CI) muestra `LocalBusiness` sin errores.
- El horario del JSON-LD es idéntico, día por día, al que muestran `OptimizedFooter.tsx` y `ContactInfo.tsx`.
- Prueba nueva (Vitest, si el proyecto testea metadata) o verificación manual: `curl` a cada página y confirmar longitud de `<title>`.

## Bloqueo
**No se puede completar el punto del horario sin la respuesta del dueño** (F2-4 §9, pregunta 5: ¿cuál es el horario real?). El resto del ítem (titles, keywords, sameAs/logo/hasMap/image) no depende de esa respuesta y puede avanzar en paralelo.
