# Reporte de Auditoría de Alineación con el Sistema de Diseño (DESIGN.md)

**Proyecto:** Envíos DosRuedas (MDQ)
**Versión de Sistema:** 2026.09 — Ajuste Max `#0950F6`
**Fecha de Auditoría:** Septiembre 2026
**Auditor:** Arquitecto de Frontend Senior & Especialista en Sistemas de Diseño

---

## 1. Resumen Ejecutivo

### 1.1 Diagnóstico General
Se ha realizado una auditoría estática y dinámica exhaustiva del código fuente ubicado en las rutas principales y sus respectivos subcomponentes internos:
- `src/app/cotizar/**` & `src/components/cotizar/**`
- `src/app/nosotros/**` & `src/components/nosotros/**`
- `src/app/servicios/**` & `src/components/servicios/**`
- `src/app/contacto/**` & `src/components/contacto/**`

El **Nivel de Alineación Global Estimado** con respecto a `DESIGN.md` y `src/app/globals.css` es del **64%**.

### 1.2 Nivel de Alineación por Capa de Arquitectura
1. **Capa de Tokens CSS (`src/app/globals.css`): 95% Alineación.**
   - La base de tokens Tailwind v4 (`@theme`) implementa correctamente la Ley de Tres Colores con el tope de oscuridad `#0950F6`, la eliminación de tonos navy/midnight, sombras teñidas con `rgba(9,80,246,α)` y la configuración tipográfica de Anton, Bebas Neue, Outfit y Geist Mono.
2. **Capa de Componentes e Interfaz (`cotizar`, `nosotros`, `servicios`, `contacto`): 58% Alineación.**
   - Alto volumen de código consumidor que bypasses la capa de tokens escribiendo clases con valores HEX hardcodeados (`bg-[#0950F6]`, `border-[#D6E4FE]`, `bg-[#FFEC01]`).
   - Faux bold aplicado a las fuentes Anton (`font-display`) y Bebas Neue (`font-subheading`), que solo están cargadas en peso 400.
   - Presencia de un token huérfano `#D6E4FE` no definido en `@theme` que sustituye incorrectamente a `border-brand-blue-100` (`#BACEFD`) o `bg-brand-blue-50` (`#E6EEFE`).
   - Baja adopción de componentes primitivos (`DoubleBezelCard`, `InputField`, `CTANestedPill`, `Badge`, `RadioCardGroup`, `HeroProceduralBackground`).

### 1.3 Desglose por Ruta Evaluada
| Ruta del Sitio | Grado de Alineación Estimado | Estado General |
| :--- | :---: | :--- |
| `src/app/cotizar/**` | **68%** | Formularios funcionales pero con inputs/tarjetas maquetados a mano con HEX hardcodeados. |
| `src/app/nosotros/**` | **55%** | Bloques informativos con alto volumen de valores `#0950F6` y `#D6E4FE` hardcodeados y faux bold. |
| `src/app/servicios/**` | **62%** | Sombras legacy `rgba(6,54,165,0.15)` y precios en Flex/Emprendedores sin respaldo en `pricing.ts`. |
| `src/app/contacto/**` | **52%** | Mayor acumulación de desvíos: 99+ clases con HEX hardcodeado y sin consumo de `InputField` ni `CTANestedPill`. |

---

## 2. Matriz de Inconsistencias por Página

| Ruta / Archivo | Componente / Elemento | Desviación Detectada | Regla Violada de DESIGN.md | Severidad (Alta/Media/Baja) | Solución Recomendada |
| :--- | :--- | :--- | :--- | :---: | :--- |
| `src/app/cotizar/express/page.tsx` & `CotizadorExpressHero.tsx` | Cabecera y badge de cotizador Express | Uso de `bg-[#0950F6]`, `bg-[#FFEC01]`, `text-[11px]`, `rounded-[20px]` y `font-bold` en Bebas Neue. | §2.5 (No HEX arbitrarios), §3.1 (No bold en Anton/Bebas), §6.3 (Escala de radios) | **Alta** | Reemplazar por `bg-brand-blue-700`, `bg-brand-yellow-500`, `text-2xs`, `rounded-2xl` y eliminar `font-bold`. Usar `<HeroProceduralBackground variant="express" />`. |
| `src/components/cotizar/express/CotizadorExpressFormFields.tsx` | Campos del formulario de cotización Express | 35 ocurrencias de `border-[#D6E4FE]`, `bg-[#E6EEFE]`, `text-[#0950F6]`, `placeholder:text-[#0950F6]/50` e inputs HTML nativos a mano. | §2.2 (Consumo de tokens), §5.3 (Uso obligatorio de `InputField`), §10.1 (Regla 4) | **Alta** | Refactorizar los campos para consumir la primitiva `InputField` con sus props `label`, `error`, `helpText` e `icon`. |
| `src/components/cotizar/express/CotizadorExpressDetails.tsx` | Tarjeta de detalles del envío | 12 ocurrencias de HEX hardcodeado (`#0950F6`, `#D6E4FE`) y `font-bold` en Bebas Neue. | §2.2 (Tokens semánticos), §3.1 (No bold en Bebas), §5.1 (Uso de DoubleBezelCard) | **Media** | Migrar la tarjeta a `DoubleBezelCard` o `Card variant="bezel"`, usando `text-brand-blue-900` y `border-brand-blue-100`. |
| `src/app/cotizar/lowcost/page.tsx` & `CotizadorLowCostHero.tsx` | Hero de Cotizador LowCost | 25 ocurrencias de `bg-[#0950F6]`, `bg-[#FFEC01]`, `border-[#D6E4FE]`, `text-[11px]` y `font-bold` en Anton/Bebas. | §2.5 (Cero HEX inline), §3.1 (Jerarquía de peso), §3.2 (Escala de micro-texto) | **Alta** | Reemplazar por tokens `brand-*`, sustituir `text-[11px]` por `text-2xs`, eliminar `font-bold` y consumir `CTANestedPill`. |
| `src/components/cotizar/lowcost/BatchGrid.tsx` | Grilla de lotes LowCost | 34 ocurrencias de `bg-[#E6EEFE]`, `border-[#D6E4FE]`, `text-[#0950F6]`, `font-bold` en Bebas. | §2.2 (Tokens), §3.1 (Fuentes), §5.1 (DoubleBezelCard) | **Alta** | Reemplazar tarjetas manuales por `DoubleBezelCard`, usando `border-brand-blue-100` y `text-brand-blue-900`. |
| `src/components/cotizar/lowcost/CotizadorLowCostForm.tsx` | Formulario de lotes y ruteo | 52 ocurrencias de HEX hardcodeados, inputs ad-hoc sin `InputField` y `font-bold` en Bebas Neue. | §2.2 (Tokens), §5.3 (InputField), §10.1 (Anti-patrón 4) | **Alta** | Reemplazar inputs por `InputField` con manejo de estados `aria-invalid` y `aria-describedby`. |
| `src/app/nosotros/page.tsx` | Vista principal de Nosotros | Tarjetas con `border-[#D6E4FE]`, `bg-[#E6EEFE]`, `text-[#0950F6]` y `font-bold` en Anton. | §2.2 (Tokens), §3.1 (Pesos de fuente), §5.1 (Primitivas) | **Media** | Migrar contenedores a `DoubleBezelCard`, eliminar `font-bold` de Anton y consumir tokens `brand-*`. |
| `src/components/nosotros/sobre-nosotros/AboutHero.tsx` | Hero de Sobre Nosotros | 32 ocurrencias de HEX hardcodeado (`#0950F6`, `#FFEC01`), `text-[10px]`, `text-[11px]` y `font-bold` en Anton/Bebas. | §2.5 (Ley de Tres Colores), §3.1 (Jerarquía Anton/Bebas), §3.2 (Textos huérfanos) | **Alta** | Usar `bg-brand-blue-700`, `text-brand-yellow-500`, sustituir `text-[10px]` por `text-2xs` y eliminar `font-bold`. |
| `src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx` | Sección de Ventajas Competitivas | 31 ocurrencias de `#0950F6`, `#D6E4FE`, `bg-[#E6EEFE]` y `font-bold` en Bebas Neue. | §2.2 (Tokens semánticos), §3.1 (Pesos tipográficos) | **Media** | Reemplazar `#D6E4FE` por `border-brand-blue-100`, `#E6EEFE` por `bg-brand-blue-50`, `#0950F6` por `text-brand-blue-900`. |
| `src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx` | Tarjetas de Misión y Visión | 27 ocurrencias de HEX hardcodeado y `font-bold` en Anton. | §2.2 (Tokens), §3.1 (Faux bold), §5.1 (DoubleBezelCard) | **Media** | Encapsular en `DoubleBezelCard variant="light"` y `variant="dark"`, removiendo `font-bold`. |
| `src/components/nosotros/nuestras-redes/NetworksHero.tsx` | Hero de Canales Digitales | 5 HEX hardcodeados, `drop-shadow-[0_20px_35px_rgba(0,16,53,0.7)]` (sombra no teñida), `text-[11px]` y `font-bold`. | §2.3 (Sombras teñidas), §2.5 (No hex `#001035`), §3.1 (Pesos) | **Alta** | Reemplazar sombra por `shadow-elevated` o `rgba(9,80,246,0.25)`, eliminar `#001035` y mover textos a `text-2xs`. |
| `src/components/nosotros/nuestras-redes/NetworksChannels.tsx` | Tarjetas de redes sociales | 30 ocurrencias de `#0950F6`, `#FFEC01`, `#D6E4FE` y `#1877F2` (Facebook HEX hardcodeado). | §2.2 (Tokens), §2.5 (Paleta de marca), §3.1 (Pesos) | **Media** | Reemplazar `#1877F2` por `text-brand-blue-700` o token semántico, sustituir `#D6E4FE` por `border-brand-blue-100`. |
| `src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx` | Formulario de suscripción | 18 ocurrencias de `#0950F6`, `#D6E4FE` e inputs manuales con `font-bold` en Bebas. | §2.2 (Tokens), §5.3 (InputField), §5.2 (CTANestedPill) | **Media** | Migrar el campo de email a `InputField` y el botón de envío a `CTANestedPill`. |
| `src/components/nosotros/preguntas-frecuentes/Faq-categories.tsx` | Selector de categorías FAQ | 60 ocurrencias de `#0950F6`, `#FFEC01`, `#D6E4FE` y `font-bold` en Bebas Neue. | §2.2 (Tokens), §3.1 (Bebas sin bold), §5.10 (Badge) | **Alta** | Refactorizar usando `Badge` o botones comprimidos con `bg-brand-blue-700` y `text-white` sin `font-bold`. |
| `src/components/nosotros/preguntas-frecuentes/FaqHero.tsx` | Hero de Preguntas Frecuentes | 11 ocurrencias de HEX hardcodeado, `text-[10px]`, `text-[11px]` y `font-bold` en Anton. | §2.5 (Ley de Tres Colores), §3.1 (Faux bold), §3.2 (Escala micro) | **Media** | Utilizar `bg-brand-blue-700`, `text-2xs` y eliminar `font-bold` de las etiquetas. |
| `src/app/servicios/page.tsx` | Hub principal de Servicios | Tarjetas con `border-[#D6E4FE]`, `bg-[#E6EEFE]` y `font-bold` en Bebas Neue. | §2.2 (Tokens), §3.1 (Pesos), §5.1 (DoubleBezelCard) | **Media** | Renderizar las tarjetas con `DoubleBezelCard` y consumir `CTANestedPill` para las llamadas a la acción. |
| `src/components/servicios/express/ExpressHero.tsx` & `ExpressPricing.tsx` | Hero y Tarifario de Envíos Express | Duplicación inline de gradiente hero, `font-bold` en Anton y `border-[#D6E4FE]`. | §2.5 (Gradiente hero canónico), §3.1 (Pesos), §5.13 (HeroProceduralBackground) | **Alta** | Sustituir el gradiente inline por `<HeroProceduralBackground variant="express" />` y remover `font-bold`. |
| `src/components/servicios/lowcost/LowCostFeatures.tsx` | Bloque de características LowCost | Sombra legacy `boxShadow: "0 20px 40px -15px rgba(6, 54, 165, 0.15)..."` con `#0636A5`. | §2.3 (Sombras teñidas), §2.5 (Prohibición de `#0636A5`) | **Alta** | Cambiar `rgba(6, 54, 165, 0.15)` por `rgba(9, 80, 246, 0.18)` o la clase `shadow-elevated`. |
| `src/components/servicios/flex/FlexPricing.tsx` & `FlexHero.tsx` | Tarifas y propuesta de Envíos Flex | Muestra tarifas estáticas ($3.000, $4.500, Z5 $7.000+$700/km) sin respaldo en `pricing.ts` o `PriceRange`. | §12.1 (Fuente de verdad de tarifas), §12.2 (Alineación UI ↔ lógica) | **Alta** | Vincular precios con constantes de `pricing.ts` o derivar a CTA de consulta por WhatsApp si no hay tarifario de base de datos. |
| `src/components/servicios/emprendedores/EmprendedoresPricing.tsx` | Tarifas de Plan Emprendedores | Muestra precios ($6.000, desde $3.800, recolección $4.000) sin fila en `PriceRange` ni `pricing.ts`. | §12.1 (Integridad de tarifas), §12.2 (Sincronización de precios) | **Alta** | Reemplazar valores fijos por constantes oficiales de `pricing.ts` o leyenda "Cotización a medida por WhatsApp". |
| `src/components/contacto/ContactHero.tsx` | Hero de la página de Contacto | 18 ocurrencias de `#0950F6`, `bg-[#E6EEFE]/60`, `border-[#D6E4FE]`, `text-[11px]` y `font-bold`. | §2.2 (Tokens), §2.5 (Paleta), §3.1 (Faux bold), §3.2 (Textos huérfanos) | **Alta** | Consumir `<HeroProceduralBackground variant="contact" />`, usar `text-2xs` y eliminar `font-bold` en Anton/Bebas. |
| `src/components/contacto/ContactInfo.tsx` | Tarjeta de Información y Canales MDQ | 41 ocurrencias de `#0950F6`, `#FFEC01`, `#E6EEFE`, `border-[#D6E4FE]`, `rounded-[20px]` y botones a mano. | §2.2 (Tokens), §2.5 (Cero HEX inline), §5.2 (CTANestedPill), §6.3 (Radios) | **Alta** | Refactorizar con `DoubleBezelCard`, reemplazar botones por `CTANestedPill` e implementar `border-brand-blue-100`. |
| `src/components/contacto/ContactForm.tsx` | Formulario principal de Contacto | 40 ocurrencias de `#0950F6`, `#FFEC01`, `border-[#D6E4FE]`, inputs nativos sin `InputField` y `font-bold` en labels. | §2.2 (Tokens semánticos), §5.3 (Uso de InputField), §10.1 (Regla 20) | **Alta** | Sustituir todos los campos por `InputField`, asociando mensajes de error con `aria-describedby` y `role="alert"`. |
| `src/components/contacto/ConversionBanner.tsx` | Banner de Cierre de Conversión | 3 ocurrencias de `#0950F6`, `rounded-[20px]`, `bg-[#FFEC01]` y `font-bold` en font-mono. | §2.2 (Tokens), §6.3 (Escala de radios), §10.1 (Anti-patrón 4) | **Media** | Reemplazar por `bg-brand-blue-700`, `rounded-3xl` (32px) y `bg-brand-yellow-500`. |

---

## 3. Inventario de Tokens Huérfanos/No Válidos

### 3.1 Valores HEX Hardcodeados Encontrados en Código Consumidor
| Valor HEX / Expresión | Ocurrencias en Rutas Auditadas | Diagnóstico de Sistema | Sustituto Oficial de DESIGN.md |
| :--- | :---: | :--- | :--- |
| `#0950F6` | **379** | HEX hardcodeado del color primario. | `bg-brand-blue-700`, `text-brand-blue-900`, `text-brand-ink` |
| `#FFEC01` | **226** | HEX hardcodeado del amarillo de señal. | `bg-brand-yellow-500`, `text-brand-yellow-500` |
| `#D6E4FE` | **70** | **Token Huérfano.** No existe en `@theme`. Usado erróneamente para bordes. | `border-brand-blue-100` (`#BACEFD`) o `bg-brand-blue-50` (`#E6EEFE`) |
| `#E6EEFE` | **29** | HEX hardcodeado de la superficie suave. | `bg-brand-blue-50` |
| `#FFFFFF` | **25** | HEX hardcodeado de blanco puro. | `bg-white`, `text-white`, `border-white` |
| `#F8FAFC` | **10** | HEX de neutro externo (Slate-50). Prohibido. | `bg-brand-white-50` o `bg-brand-blue-50` |
| `#1877F2` | **5** | HEX de marca externa (Facebook). Hardcodeado. | `text-brand-blue-700` o token semántico |
| `#3B7BF8` | **3** | HEX de azul intermedio hardcodeado. | `border-brand-blue-300` (`#628FF9`) o `text-brand-blue-400` (`#3570F8`) |
| `#BACEFD` | **1** | HEX hardcodeado de borde azul. | `border-brand-blue-100` |
| `#FFF12E` | **1** | HEX hardcodeado de hover amarillo. | `hover:bg-brand-yellow-400` |
| `#3570F8` | **1** | HEX hardcodeado de azul muted. | `text-brand-blue-400` |

### 3.2 Sombras e Iluminaciones No Validadas
| Expresión / Código | Archivo / Ubicación | Problema | Sustituto Oficial |
| :--- | :--- | :--- | :--- |
| `drop-shadow-[0_20px_35px_rgba(0,16,53,0.7)]` | `NetworksHero.tsx:178` | Sombra oscura no teñida utilizando `#001035` (color prohibido por §2.5). | `shadow-elevated` o `rgba(9,80,246,0.22)` |
| `rgba(6, 54, 165, 0.15)` | `FlexFeatures.tsx:85`, `LowCostFeatures.tsx:85` | Sombra teñida con el código de azul legacy `#0636A5`. | `rgba(9, 80, 246, 0.18)` o `shadow-elevated` |

### 3.3 Clases de Tamaño de Texto Huérfanas y Fuera de Jerarquía
| Clase Encontrada | Ocurrencias | Problema de Sistema | Sustituto Oficial |
| :--- | :---: | :--- | :--- |
| `text-[11px]` | **18** | Tamaño arbitrario por debajo de la escala regular. | `text-2xs` (10px) o `text-xs` (12px) |
| `text-[10px]` | **12** | Tamaño de micro-texto hardcodeado. | `text-2xs` (0.625rem / 10px) |
| `text-[9px]` / `text-[8px]` | **2** | Micro-texto ilisible prohibido por §3.2. | `text-2xs` (piso absoluto de 10px) |

### 3.4 Radio de Bordes Arbitrarios
| Clase Encontrada | Ocurrencias | Problema de Sistema | Sustituto Oficial |
| :--- | :---: | :--- | :--- |
| `rounded-[20px]` | **14** | Valor arbitrario fuera de la escala redefinida (§6.3). | `rounded-xl` (16px) o `rounded-2xl` (24px) |
| `rounded-[24px]` | **6** | Valor numérico inline innecesario. | `rounded-2xl` |

---

## 4. Plan de Acción de Remediación

A continuación se detalla la hoja de ruta técnica ordenada por prioridad para llevar la alineación de las rutas auditadas al **100%**:

### Fase 1: Erradicación de Inconsistencias Cromáticas y Tokens Huérfanos (Prioridad Alta)
1. **Sustitución Global de HEX Hardcodeados por Tokens Tailwind v4:**
   - Reemplazar todas las apariciones de `bg-[#0950F6]`, `text-[#0950F6]` y `ring-[#0950F6]` por `bg-brand-blue-700`, `text-brand-blue-900` o `text-brand-ink`.
   - Reemplazar `bg-[#FFEC01]` y `text-[#FFEC01]` por `bg-brand-yellow-500` y `text-brand-yellow-500`.
   - Reemplazar el token huérfano `border-[#D6E4FE]` por `border-brand-blue-100` (`#BACEFD`) y `bg-[#E6EEFE]` por `bg-brand-blue-50`.
   - Reemplazar `#F8FAFC` por `bg-brand-white-50`.
2. **Saneamiento de Sombras Legacy y Colores Prohibidos:**
   - Eliminar las referencias a `rgba(6,54,165,...)` y `rgba(0,16,53,...)` en `FlexFeatures.tsx`, `LowCostFeatures.tsx` y `NetworksHero.tsx`, sustituyéndolas por la escala teñida `rgba(9,80,246,α)`.

### Fase 2: Normalización Tipográfica y Corrección de Faux Bold (Prioridad Alta)
3. **Eliminación de Pesos Sintéticos en Anton y Bebas Neue:**
   - Remover las clases `font-bold`, `font-extrabold` y `font-semibold` de todos los elementos que utilicen `font-display` o `font-subheading` en las 4 rutas auditadas.
   - Ajustar la jerarquía visual únicamente mediante la escala de tamaño (`text-xs` a `text-7xl`), `tracking-*` y color.
4. **Normalización de Escala de Micro-texto:**
   - Reemplazar todas las clases `text-[10px]` y `text-[11px]` por el token `text-2xs` (10px) o `text-xs` (12px).
   - Erradicar `text-[8px]` y `text-[9px]`.

### Fase 3: Adopción Obligatoria de Primitivas del Sistema de Diseño (Prioridad Media)
5. **Formularios de Cotización y Contacto (`CotizadorExpressFormFields`, `CotizadorLowCostForm`, `ContactForm`):**
   - Refactorizar todos los campos `<input>` y `<select>` nativos para utilizar la primitiva `@/components/ui/InputField`.
   - Asegurar que `InputField` comunique correctamente las propiedades `label`, `error`, `helpText`, `required` y asocie los errores mediante `aria-describedby` y `role="alert"`.
6. **Contenedores y Tarjetas (`ContactInfo`, `BatchGrid`, `CotizadorDetails`):**
   - Encapsular las tarjetas de información y resúmenes de cotización dentro de `DoubleBezelCard` o `Card variant="bezel"`.
7. **Botones de Acción y CTAs:**
   - Reemplazar los botones maquetados a mano por la primitiva `CTANestedPill` con sus variantes `primary`, `elevated` u `outline`.
8. **Fondos de Hero (`ExpressHero`, `ContactHero`, `CotizadorExpressHero`):**
   - Sustituir los gradientes inline por la primitiva `<HeroProceduralBackground variant="..." />`.

### Fase 4: Sincronización de Tarifas e Integridad de Negocio (Prioridad Alta)
9. **Alineación de Precios en Vistas de Servicios (`FlexPricing.tsx`, `EmprendedoresPricing.tsx`):**
   - Sincronizar las tablas de precios mostradas en las páginas de Flex y Emprendedores con la fuente de verdad en `src/lib/pricing.ts` o agregar la llamada a acción directa a WhatsApp si el servicio requiere cotización dinámica.

### Fase 5: Enforcement Automático y Prevención de Regresiones (Prioridad Media)
10. **Implementación de Tests de Verificación de Tokens:**
    - Agregar reglas de ESLint (`no-restricted-syntax`) para impedir el commit de cadenas con `bg-[#...]`, `text-[#...]`, `border-[#...]` y colores prohibidos.
    - Actualizar los tests unitarios de Vitest (`express.test.tsx`, `lowcost.test.tsx`, `contacto.test.tsx`, `sobre-nosotros.test.tsx`) para verificar la presencia de clases de token (`bg-brand-blue-700`, `bg-brand-blue-500`, `DoubleBezelCard`) y el cumplimiento de textos literales.

---
