# BL-04 — Contadores con valor final en SSR y texto animado sin romper espacios

## 1. Objetivo y IDs que resuelve
Corregir dos bugs del mismo patrón (animación que rompe el contenido inicial): los contadores de la home muestran "+0K" hasta que la animación dispara, y el párrafo de `EmprendedoresHome` se renderiza sin espacios entre palabras en el HTML inicial. Ambos afectan por igual a SEO (lo que indexa Google), accesibilidad (lo que lee un lector de pantalla) y a la primera impresión de un usuario con conexión lenta. Resuelve: **DC-07** (opacity:0 en 33 bloques), **DC-08** (contadores en 0), **DC-09** (texto sin espacios), **A11Y-09**, **A11Y-10**, **CAMP-07**.

## 2. Alcance
**Entra:** que el HTML inicial (antes de cualquier animación) muestre el valor final real de cada contador y el texto completo con espacios; que las 33 secciones que hoy nacen en `opacity:0` sean visibles por defecto y solo animen `transform`, no `opacity` desde cero; retirar o marcar como "A VERIFICAR" las afirmaciones que no tienen fuente ("+50 emprendedores confían", "0 paquetes extraviados" — esto último también lo toca BL-14, coordinarlo para no duplicar el cambio en el mismo archivo).
**Queda fuera:** decidir el valor real de "+50k envíos" (bloqueado, ver más abajo) — este ítem deja el mecanismo para mostrar cualquier valor correctamente en SSR, no decide el número.

## 3. Archivos a modificar o crear
- `src/components/home/VisionSection.tsx` (líneas 7-34, 167, 191-196 según F2-1/F2-2).
- `src/components/home/EmprendedoresHome.tsx` (línea 12, `descriptionText.split(" ")`; líneas 105-111).
- `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx` (mismo patrón de palabra por palabra en el H1).
- `src/components/ui/vertical-cut-reveal.tsx` (usado por los cuatro `*Pricing.tsx` — confirmar que el fix ahí no rompe ninguno de esos cuatro usos).

## 4. Layout por breakpoint
Sin cambios de layout — el valor final ocupa el mismo espacio que el valor animado (el contenedor ya tiene el ancho reservado, según las capturas de F2-1). Verificar en móvil y escritorio que el número final no rompe el salto de línea del contenedor (probar con el valor más largo posible, ej. "+50.000" si esa termina siendo la cifra real).

## 5. Tokens exactos
Sin cambios de color/tipografía — es un fix de comportamiento (SSR + accesibilidad), no de diseño. Mantener las clases existentes (`text-6xl font-mono font-bold`, etc.).

## 6. Estados
- **Estado inicial (SSR, sin JS):** debe mostrar el valor final real, no "0".
- **Estado animado (con JS, tras `onViewportEnter`):** puede seguir animando desde un valor visualmente bajo hasta el real, pero el nodo debe tener `aria-hidden="true"` y un `<span class="sr-only">` con el valor final fijo al lado, para que un lector de pantalla no dependa de la animación (A11Y-09).
- **`prefers-reduced-motion` activo:** mostrar directamente el valor final sin animar.

## 7. Contenido
- El contador "0 paquetes extraviados" se reformula como parte de **BL-14** (no duplicar el copy acá) — coordinar el PR para no pisarse.
- "+50 emprendedores confían" queda marcado como **A VERIFICAR** (no se elimina ni se inventa un número) hasta que el dueño lo confirme.
- Párrafo de `EmprendedoresHome`: mismo texto que hoy, con los espacios reales restaurados — no es un cambio de copy, es un fix técnico.

## 8. Accesibilidad
- `aria-hidden="true"` en el número/texto animado; `sr-only` con el valor estático al lado.
- Las 33 secciones con `opacity: 0` inicial pasan a ser visibles por defecto (`initial={{ opacity: 1, y: 12 }}` o animación condicionada a `window.IntersectionObserver` existente y `prefers-reduced-motion` no activo) — esto además resuelve DC-07, que hoy hace que rastreadores y lectores de pantalla vean una página casi vacía.

## 9. SEO
El HTML inicial (antes de hidratación) debe contener el texto completo y correcto — confirmable con "Ver código fuente" del navegador o `curl` a la página, sin ejecutar JavaScript.

## 10. Datos y lógica
Cambio en componentes cliente existentes (`'use client'`, ya usan Framer Motion). No se agregan Server Actions ni llamadas a datos nuevas. Sin eventos de analítica nuevos.

## 11. Casos borde
- Con JavaScript deshabilitado, la página debe verse igual de completa que con JS (sin contar la animación en sí).
- Si el valor final de un contador cambia en el futuro (ej. sube "+50k" a otro número), el punto de cambio debe ser una sola constante/prop, no un valor hardcodeado en dos lugares (el visible y el `sr-only`).

## 12. Criterios de aceptación y pruebas
- `curl` a `/` sin ejecutar JS muestra el valor final de cada contador, no "0" ni "+0K".
- El párrafo de `EmprendedoresHome` es seleccionable/copiable con espacios correctos (probar con clic y arrastre, o test de accesibilidad que lea el `textContent`).
- Auditoría de Lighthouse/axe no marca "contenido oculto al cargar" en la home.
- Prueba nueva (Playwright): cargar la home con JS deshabilitado y verificar que el `textContent` de los contadores y del párrafo de Emprendedores no contiene "0" literal donde debería ir el valor real, ni palabras pegadas.

## Bloqueo
El valor real de "+50k envíos" y "+50 emprendedores confían" requiere confirmación del dueño (F2-4 §9, pregunta 2). Este ítem puede completarse dejando esos dos valores como **A VERIFICAR** explícito en el componente (comentario en el código o placeholder visible) sin bloquear el resto del fix.
