# F2-2 — Accesibilidad (WCAG 2.1 AA)

**Envíos DosRuedas** · Mar del Plata, Argentina · Nivel objetivo: WCAG 2.1 AA
Método: auditoría de código sobre el repo clonado (`bomberoxenviosdosruedas/02enviosdosruedas`, commit `46bf3c6`), cálculo de contraste por fórmula WCAG sobre los tokens reales de `src/app/globals.css`, y cruce con las capturas/DOM capturados en F2-1. No reemplaza una pasada con lector de pantalla real (ver §5).

Se referencian por ID los hallazgos ya registrados en `F2-1-design-critique.md` (DC-xx) en lugar de duplicarlos.

---

## 1. Resumen — lo que más pesa

1. **El cotizador no anuncia nada a lectores de pantalla.** Ni el precio, ni el error de cobertura, ni el "A Consultar" (A11Y-11). Es el paso de conversión principal del sitio.
2. **El menú móvil no es operable por teclado ni por lector de pantalla** (A11Y-04) — y la mayoría del tráfico es celular, según el propio contexto del proyecto.
3. **El color "muted" oficial del sistema de diseño no pasa contraste AA.** `brand-blue-400` (`#3570F8`), documentado en `DESIGN.md` §12 como texto secundario, da 4.35:1 sobre blanco (se necesita 4.5:1) y se usa en ayudas de formulario, descripciones de tarjeta y placeholders (A11Y-01).
4. **El contador animado de la home anuncia un dato falso ("+0K")** a quien usa lector de pantalla, no solo a quien mira la pantalla antes de que corra la animación (A11Y-09, cruza con DC-08).
5. **El anillo de foco por defecto es casi invisible sobre los fondos azules** que el propio sistema usa para héroes, header y CTAs oscuros (1.68:1 contra el mínimo de 3:1) — quien navega por teclado pierde de vista dónde está parado (A11Y-03).

---

## 2. Tabla de contraste (valores calculados, fórmula WCAG 2.1)

Colores tomados literalmente de `src/app/globals.css` (no de la paleta nominal de `DESIGN.md`, que redondea `brand-blue-700` a "el azul" — la escala real tiene 11 pasos, de `blue-50` a `blue-950`).

| Combinación | Ratio | Texto normal (4.5:1) | Texto grande (3:1) | Componente UI (3:1) |
|---|---:|:---:|:---:|:---:|
| Blanco sobre `brand-blue-700` #0636A5 (botón primario, header, footer) | 10.10 | PASA | PASA | PASA |
| `brand-blue-900` sobre `brand-yellow-500` (texto real en CTA amarillo) | 11.83 | PASA | PASA | PASA |
| `brand-ink` #00277C (texto de cuerpo) sobre blanco | 13.28 | PASA | PASA | PASA |
| `brand-blue-700` (headings) sobre blanco | 10.10 | PASA | PASA | PASA |
| `brand-yellow-500` sobre `brand-blue-700` (badges, chips, íconos) | 8.30 | PASA | PASA | PASA |
| `brand-blue-500` #0950F6 (foco/hover) sobre blanco | 6.02 | PASA | PASA | PASA |
| `brand-blue-100` texto sobre fondo `brand-blue-700` (listbox autocompletar) | 6.41 | PASA | PASA | PASA |
| **`brand-blue-400` #3570F8 ("muted" oficial) sobre blanco** | **4.35** | **FALLA** | PASA | PASA |
| **`brand-blue-300` sobre fondo `brand-blue-700` (línea secundaria del listbox)** | **3.28** | **FALLA** | PASA | PASA |
| `brand-blue-300` sobre blanco (uso solo decorativo/ícono `aria-hidden`) | 3.08 | FALLA | PASA | PASA |
| **Anillo de foco `brand-blue-500` sobre fondo `brand-blue-700`** | **1.68** | — | — | **FALLA (mín. 3:1)** |
| `brand-yellow-500` directo sobre blanco (peor caso posible de la paleta) | 1.22 | FALLA | FALLA | FALLA |
| `brand-yellow-600` (hover) sobre blanco | 1.52 | FALLA | FALLA | FALLA |

El caso "amarillo sobre blanco" es el que el enunciado señala como sospechoso principal: **se revisaron 16 componentes que usan `text-brand-yellow-*`** (`LowCostHero`, `LeafletRouteMap`, `CTANestedPill`, `RadioCardGroup`, `StepperVertical`, `DynamicRouteMap`, etc.) y en todos los casos el amarillo se apoya sobre un fondo azul oscuro, nunca directo sobre blanco. El sistema evita correctamente el peor caso — ver recomendación preventiva en A11Y-01 para que esto no se rompa a futuro.

---

## 3. Hallazgos

Formato: **ID** — Severidad — Criterio WCAG — Pantalla/componente — Archivo — Evidencia — Corrección propuesta (dentro de la paleta de 3 colores).

### Contraste

**A11Y-01** — Importante — WCAG 1.4.3 (Contraste mínimo) — Global, ayudas de formulario y descripciones de tarjeta — `src/components/ui/InputField.tsx:92`, `src/components/ui/card.tsx:75`, `src/components/ui/StepperHorizontal.tsx:76,94,100`, `src/components/ui/StepperVertical.tsx:114`, `src/components/ui/RadioCardGroup.tsx:177`, `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx:106,112,130`, `src/components/nosotros/nuestras-redes/NetworksChannels.tsx:67,120,172`
Evidencia: `brand-blue-400` (#3570F8) es el color "muted" oficial de `DESIGN.md` §12 y da 4.35:1 sobre blanco, por debajo de 4.5:1.
Corrección: reservar `brand-blue-400` para texto ≥ 19px o texto sobre fondos oscuros/decorativo; para texto secundario de 12–14px sobre blanco (help text, descripciones, placeholders) pasar a `brand-blue-500` (6.02:1) o `brand-blue-600` (9.52:1). Agregar una regla de lint (`stylelint`/ESLint plugin de Tailwind) que marque `text-brand-blue-400` cuando el tamaño de fuente sea menor a `text-lg`.

**A11Y-02** — Importante — WCAG 1.4.3 — Cotizadores, buscador de dirección — `src/components/ui/AddressAutocomplete.tsx` (línea ~158, `text-brand-blue-300` dentro de un `<li>` con `bg-brand-blue-700`)
Evidencia: 3.28:1, texto de 12px (`text-xs`) con la dirección completa de la sugerencia — es información necesaria para elegir la opción correcta, no decorativa.
Corrección: subir a `brand-blue-100` (6.41:1), ya usado en el mismo listado para el texto primario, o `brand-blue-50`.

**A11Y-03** — Importante — WCAG 1.4.11 (Contraste de componentes no textuales) — Global, cualquier elemento enfocable sobre fondo azul — `src/app/globals.css:298` (`--focus-ring: var(--color-brand-blue-500)`)
Evidencia: el anillo de foco por defecto (#0950F6) da 1.68:1 contra `brand-blue-700`, el fondo de header, footer, hero y CTAs oscuros. `DESIGN.md` §11 ya lo señala como deuda ("Focus-visible: cobertura ~20%... formalizar anillo amarillo sobre azul") pero el fix no está implementado.
Corrección: anillo de dos capas (halo blanco de 2px + núcleo `brand-blue-500`) o anillo `brand-yellow-500` sobre fondos oscuros (8.30:1), tal como el propio DESIGN.md propone, vía una utilidad `focus-ring-brand` que cambie de color según el fondo (`data-theme` o variante `dark:`).

### Teclado

**A11Y-04** — Crítico — WCAG 2.1.1 (Teclado) / 4.1.2 (Nombre, función, valor) — Navegación móvil — `src/components/layout/MobileNav.tsx`
Evidencia: no se encontró `aria-expanded`, `aria-haspopup`, `role="dialog"`/`"menu"` ni manejo de `onKeyDown` (Escape, trampa de foco) en el componente. Compara con `src/components/layout/OptimizedHeader.tsx`, que sí implementa `aria-expanded`/`aria-haspopup` en el menú de escritorio. Dado que el tráfico local es mayormente celular, este es el patrón de navegación menos accesible siendo el más usado.
Corrección: agregar `aria-expanded` al botón hamburguesa, `role="dialog" aria-modal="true"` al panel, trampa de foco mientras está abierto, cierre con Escape y devolución de foco al botón que lo abrió al cerrar.

**A11Y-05** — Importante — WCAG 4.1.2 / 1.1.1 — Cotizadores (mapa de ruta) — `src/components/ui/LeafletRouteMap.tsx`
Evidencia: no se detectó `role`, `aria-label` ni alternativa textual en el componente; un mapa interactivo de Leaflet no es operable ni interpretable por teclado o lector de pantalla por defecto.
Corrección: `aria-label="Mapa de la ruta de envío"` en el contenedor, y un resumen `sr-only` con origen, destino y distancia calculada (el mismo dato que ya usa el cotizador para el precio), para que la información no dependa del mapa.

**A11Y-06** — Menor / A verificar — WCAG 4.1.2 — Cotizador LowCost, planilla por lotes — `src/components/cotizar/lowcost/BatchGrid.tsx:160`
Evidencia: el botón de eliminar fila usa solo un ícono (`Trash`/similar); no se confirmó `aria-label` en el rango revisado. Puede estar resuelto fuera del bloque grepeado.
Corrección: confirmar con inspector; si falta, agregar `aria-label="Eliminar envío {n}"` dinámico.

### Movimiento

**A11Y-07** — Importante — WCAG 2.3.3 (Animación por interacciones) — Global — 21 de 58 archivos con animación usan `prefers-reduced-motion`/`useReducedMotion()` (~36%)
Evidencia: confirma la "cobertura parcial" que `DESIGN.md` §11 ya declara como deuda conocida ("falta formalizar el kill-switch global en `globals.css`").
Corrección: mover la lógica a un hook único (`useReducedMotion()` centralizado) consumido por todos los componentes motion, más el media query estricto en `globals.css` que el propio DESIGN.md especifica en su §8 pero aún no está aplicado global.

**A11Y-08** — Menor — WCAG 2.3.3 — `NewsletterSubscribe.tsx`, `LeafletRouteMap.tsx`
Evidencia: `animate-bounce` documentado como deuda en `DESIGN.md` §11 (línea 300). Un rebote elástico continuo sin pausa es, además del problema estético ya cubierto en F2-1, un disparador de incomodidad vestibular si no respeta `prefers-reduced-motion` — no confirmado que lo respete.
Corrección: además del reemplazo por spring/easing que ya pide DESIGN.md, condicionar la animación a `!prefers-reduced-motion`.

**A11Y-09** — Crítico — WCAG 1.3.1 (Información y relaciones) — Home, sección de métricas — `src/components/home/VisionSection.tsx` (`CounterMetric`) — cruza con **DC-08**
Evidencia: el contador anima desde 0 con `useMotionValue`/`onViewportEnter`; el HTML inicial (y lo que lee un lector de pantalla que llega a la sección antes de que dispare la animación) es "+0K", un dato falso, no solo un problema visual de SSR.
Corrección: además del fix de DC-08, marcar el número animado `aria-hidden="true"` y agregar un `<span class="sr-only">` con el valor final estático, para que el anuncio a asistive tech no dependa de la animación.

**A11Y-10** — Importante — WCAG 1.3.1 — Home, sección Emprendedores — `src/components/home/EmprendedoresHome.tsx:12` — cruza con **DC-09**
Evidencia: `descriptionText.split(" ")` para animar palabra por palabra; el HTML inicial concatena palabras sin espacios. Además del problema de SEO ya documentado en DC-09, un lector de pantalla en modo "leer todo" recibe el texto sin separación entre palabras.
Corrección: dividir visualmente con CSS (`display: inline-block` por palabra dentro de un contenedor con espacios reales en el DOM) en lugar de romper el string.

### Lectores de pantalla

**A11Y-11** — Crítico — WCAG 4.1.3 (Mensajes de estado) — Cotizador Express y LowCost — `src/components/cotizar/express/CotizadorExpressForm.tsx`, `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx`
Evidencia: la única región `aria-live` de todo el repo está en `src/app/admin/imagenes/AdminImagenesClient.tsx:466`, un panel de administración interno — no en el flujo de conversión. Nadie que use lector de pantalla recibe aviso del precio calculado, de "fuera de cobertura" o de "A Consultar".
Corrección: envolver el bloque de resultado en `role="status" aria-live="polite"` (no `"assertive"`, para no interrumpir); el mismo contenedor sirve para anunciar errores de cálculo de ruta.

**A11Y-12** — Importante — WCAG 2.4.4 / 4.1.2 (Nombre accesible) — Header, footer, contacto, CTAs de servicio — 18 componentes con enlaces a `wa.me`/WhatsApp y 7 con `tel:+542236602699` sin `aria-label` propio en el archivo (lista completa: `ContactInfo.tsx`, `ConversionBanner.tsx`, `ContactForm.tsx`, `ContactHero.tsx`, `LowCostPricing.tsx`, `LowCostHero.tsx`, `EmprendedoresPricing.tsx`, `EmprendedoresHero.tsx`, `ExpressHero.tsx`, `FlexHero.tsx`, `FlexPricing.tsx`, `CarruselRedes.tsx`, `FaqHero.tsx`, `FaqCta.tsx`, `NetworksHero.tsx`, `NetworksChannels.tsx`, `BatchGrid.tsx`, `CtaSection.tsx`, `SchemaMarkup.tsx`)
Evidencia: donde el texto visible del enlace es descriptivo ("Escribinos por WhatsApp") no hay problema; donde el enlace repite solo el número o es un ícono, el nombre accesible que anuncia el lector de pantalla es el número crudo sin contexto.
Corrección: revisar caso por caso (no todos son un problema); donde el contenido visible sea solo un número o ícono, agregar `aria-label="Escribir por WhatsApp a Envíos DosRuedas"` / `aria-label="Llamar a Envíos DosRuedas"`.

**A11Y-13** — Menor — WCAG 4.1.2 — Buscador de dirección — `src/components/ui/AddressAutocomplete.tsx` (~línea 151, `aria-selected="false"` fijo)
Evidencia: el `role="listbox"`/`role="option"` está bien planteado, pero `aria-selected` aparece hardcodeado en `"false"` en el fragmento revisado; si la navegación con flechas no lo actualiza, el resultado resaltado no se anuncia.
Corrección: confirmar y, si falta, actualizar `aria-selected` según el índice activo.

Imágenes — **sin hallazgo**: se detectaron 12 etiquetas `<Image>`/`<img>` en `src/`, las 12 con `alt=` (varias con fallback, ej. `alt={item.alt || item.name}`). Buena práctica, no requiere acción.

### Formularios

**A11Y-14** — A verificar — WCAG 3.3.1 / 1.3.1 — Todos los formularios (cotizadores, contacto)
No se pudo confirmar en esta pasada de código si los mensajes de error están asociados al campo vía `aria-describedby` + `aria-invalid="true"`. Requiere inspección en navegador con el formulario en estado de error (ver checklist manual, §4).

**A11Y-15** — A verificar — WCAG 1.3.1 / 4.1.2 — Cotizador LowCost, selector de volumen mensual
No se localizó el componente específico en esta pasada dirigida de grep. Requiere verificación manual: confirmar `<label>` asociado y que las opciones tengan texto legible por lector de pantalla (no solo íconos o rangos numéricos sin unidad).

### Táctil — sin hallazgo nuevo

Se detectaron 56 usos de `min-h-[44px]` / `min-w-[44px]` / `h-11` / `w-11` en `src/components`, lo que indica que el objetivo de 44px está bastante extendido como convención del sistema. No existe un botón flotante de WhatsApp/teléfono independiente en el repo (no hay ese componente). Queda pendiente confirmar en viewport 375px el tamaño real de los ítems del acordeón de FAQ y los pasos del stepper con padding reducido — se agrega al checklist manual.

---

## 4. Qué funciona bien y no hay que tocar

- **Skip link real**: `src/components/ClientLayout.tsx:18-21` implementa `href="#main-content"` con el texto "Saltar al contenido" — presente y funcional, no es un placeholder.
- **Acordeón de FAQ accesible**: `Faq-categories.tsx` usa `aria-expanded` (línea 161) y `role="region"` (línea 205) correctamente — es el único patrón de disclosure del sitio bien resuelto.
- **Menú de escritorio**: `OptimizedHeader.tsx` sí implementa `aria-expanded`/`aria-haspopup` en los desplegables de Servicios y Nosotros — el problema está específicamente en la versión móvil (A11Y-04), no en el patrón en general.
- **Carrusel de logos**: pausa en `hover`, `focusin` y `document.hidden`, y respeta `prefers-reduced-motion` según `DESIGN.md` §"Logos Carousel" — buen ejemplo a copiar para el resto de los componentes motion (ver A11Y-07).
- **Disciplina de contraste en el uso de amarillo**: como se detalla en §2, el amarillo nunca se usa como texto directo sobre blanco en ningún componente revisado.
- **Cobertura de `alt` en imágenes**: 100% de las etiquetas `<Image>`/`<img>` detectadas tienen texto alternativo.

---

## 5. Verificaciones manuales pendientes (requieren navegador o lector de pantalla real)

Esta auditoría es de código y cálculo de contraste; lo siguiente no se puede confirmar sin probar el sitio en vivo:

1. Recorrido completo de teclado (`Tab`/`Shift+Tab`/`Enter`/`Escape`) en: menú móvil, desplegables de Servicios y Nosotros, acordeón de FAQ, carrusel de logos, planilla LowCost, mapa Leaflet.
2. Recorrido con lector de pantalla real (NVDA o VoiceOver) del flujo completo de cotización Express y LowCost, de punta a punta, incluyendo el resultado y el paso a WhatsApp.
3. `aria-describedby`/`aria-invalid` reales en los formularios de contacto y cotización, provocando errores de validación a propósito.
4. Tamaño táctil real de los ítems de FAQ y stepper en viewport 375px (con el inspector, no solo grep de clases).
5. Confirmar si `animate-bounce` (`NewsletterSubscribe`, `LeafletRouteMap`) y las demás animaciones sin `useReducedMotion()` detectado realmente se desactivan con `prefers-reduced-motion: reduce` activado en el sistema operativo.
6. Auditoría automatizada complementaria con axe DevTools o Lighthouse sobre el sitio en producción, para contrastar contra estos hallazgos de código.
7. Selector de volumen mensual del cotizador LowCost (A11Y-15) y botón de eliminar fila de `BatchGrid.tsx` (A11Y-06): confirmar en el navegador, no se localizaron con certeza en el código revisado.

---

## 6. Supuestos y lo que no se pudo verificar

- Los hex de la paleta se tomaron de `src/app/globals.css` (valores reales aplicados), no de la tabla nominal de `DESIGN.md` §12, que redondea la escala a un solo hex por rol. Donde ambos coinciden (blanco/azul-700/amarillo-500) el resultado es el mismo; donde no (ej. `brand-blue-400`, `brand-blue-500`), se priorizó el valor real del código, que es el que efectivamente ve el usuario.
- No se ejecutó el sitio en vivo en esta fase (se reutilizó la evidencia de F2-1); los hallazgos de teclado, movimiento y lector de pantalla están basados en presencia/ausencia de atributos ARIA y hooks en el código fuente, no en una prueba interactiva. Ver checklist de §5.
- `docs/knowledge_base/contexto.md` y `docs/contexto/precios.md`, fuentes de verdad citadas en el BLOQUE BASE, siguen sin existir en el repo (ya señalado en F2-1) — no afecta a esta fase salvo por no poder verificar el diccionario de voz aplicado a mensajes de error, que se retoma en F2-3.
- A11Y-06, A11Y-14 y A11Y-15 quedan explícitamente como "a verificar": no se afirma que falten, solo que no se pudieron confirmar en el rango de código revisado.
