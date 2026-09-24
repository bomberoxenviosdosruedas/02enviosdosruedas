# Reporte Detallado de Auditoría y Auditoría de Adherencia al Sistema de Diseño Ajustado (Max #0950F6)

**Fecha de ejecución:** 2026
**Proyecto:** Envíos DosRuedas (Mar del Plata)
**Referencia de Sistema de Diseño:** `DESIGN.md` y `docs/DESIGN-idear-diseño-index.md`

---

## 1. Resumen de la Optimización del Sistema de Diseño

Se optimizó la especificación `DESIGN.md` para integrar todas las reglas, tokens y principios descritos en `docs/DESIGN-idear-diseño-index.md`:

1. **Límite de Oscuridad Absoluta (Max `#0950F6`)**: Se reconfirma `#0950F6` como el azul más oscuro permitido en toda la interfaz (eliminando totalmente `#0636A5`, `#052D8C`, `#04236B`, `#021440`, `#00277C`).
2. **Ley de Tres Colores**: El sistema cromático se restringe a **Azul Vibrante (`#0950F6`)**, **Amarillo Vial (`#FFEC01`)** y **Blanco Puro (`#FFFFFF`)**, junto con las escalas tonales de soporte (`#E6EEFE` para biseles exteriores, `#D6E4FE` para perfiles). Queda prohibido el uso de negro puro `#000000`, escalas neutras de Tailwind (`slate`, `gray`, `zinc`) y verdes.
3. **Firmas Geométricas e Insignia**:
   - `DoubleBezelCard`: Marco exterior concéntrico (`bg-brand-blue-50/80` / `#E6EEFE`) + Borde `#D6E4FE` / `#BACEFD` + Núcleo interno `#FFFFFF` (`rounded-xl p-6`).
   - `CTANestedPill`: Botón píldora `rounded-full` en `#FFEC01` con rotulación `Bebas Neue` en `#0950F6` y orbe circular interno blanco de 32px con glifo de flecha que se desplaza en `hover` (`translateX(4px)`).
   - `StepperVertical`: Línea de avance sobre fondo `#0950F6` con barra `#3B7BF8` y nodos en amarillo `#FFEC01` con micro-anillos blancos (sin verde).
   - `Knockout`: Titulares monumentales en `Anton` (`UPPERCASE`, leading `0.85-1.0`) que incorporan una cápsula amarilla `#FFEC01` rotada a `-1°` con texto `#0950F6`.
   - `Bento Asimétrico`: Grilla de 12 columnas con patrones 7/5 y 5/7, evitando héroes y grillas centradas en desktop.

---

## 2. Auditoría Detallada Página por Página y Componente por Componente

### 2.1. SECCIÓN: Cotizar (`src/app/cotizar`)

#### A. Cotizador Express (`src/app/cotizar/express` & `src/components/cotizar/express`)

- **`src/app/cotizar/express/page.tsx`**
  - **Estado:** Alineado funcionalmente.
  - **Desalineaciones:**
    - Renderiza el héroe sin envolver el área principal en estructura Bento 7/5.

- **`CotizadorExpressHero.tsx`**
  - **Desalineaciones:**
    - El título H1 no incluye la cápsula *knockout* amarilla `#FFEC01` rotada a `-1°` prescrita por la firma de titulares.
    - El CTA secundario no utiliza la píldora blanca elevada `cta-nested-pill` con borde `#D6E4FE`.

- **`CotizadorExpressForm.tsx` & `CotizadorExpressFormFields.tsx`**
  - **Desalineaciones:**
    - **Inputs:** Los campos de texto y selectores no cumplen estrictamente la firma de inputs (marco `#FFFFFF`, trazo de 1.5px en `#D6E4FE`, `rounded-xl`, etiquetas flotantes en `Bebas Neue` uppercase color `#0950F6`).
    - **Botón de Cálculo:** El botón submit utiliza un `<button>` genérico con `bg-brand-yellow-500` pero carece del orbe circular interno de 32px característico del `CTANestedPill`.

- **`CotizadorExpressResults.tsx`**
  - **Desalineaciones:**
    - **Contenedor:** La tarjeta de desglose de precios utiliza una card blanca plana con sombra neutra Tailwind en lugar del contenedor `DoubleBezelCard` (`double-bezel-outer` + `double-bezel-inner`).
    - **Tipografía de Datos:** Ciertos valores métricos (kilometraje y precio final) no están vistiendo `Geist Mono` con `tabular-nums` explícito.

- **`CotizadorExpressDetails.tsx` & `CotizadorExpressHelp.tsx`**
  - **Desalineaciones:**
    - Los bloques de detalles y ayuda usan tarjetas simples con borde `border-brand-blue-100` en lugar de tarjetas de doble bisel.

---

#### B. Cotizador LowCost (`src/app/cotizar/lowcost` & `src/components/cotizar/lowcost`)

- **`src/app/cotizar/lowcost/page.tsx`**
  - **Estado:** Estructura limpia.

- **`CotizadorLowCostHero.tsx`**
  - **Desalineaciones:**
    - Falta sello angular *knockout* rotado a `-1°` en el H1.

- **`BatchGrid.tsx` (Lotes Programados)**
  - **Alineación:** Implementa `DoubleBezelCard` de forma correcta.
  - **Desalineaciones:**
    - Los badges de horario límite utilizan tonos desaturados genéricos en lugar de `Bebas Neue` 14px sobre cápsula `#0950F6` con dot pulsante `#FFEC01`.

- **`CotizadorLowCostForm.tsx`, `CotizadorLowCostDetails.tsx`, `CotizadorLowCostHelp.tsx`**
  - **Desalineaciones:**
    - Mismos patrones que en Express: falta de `DoubleBezelCard` en el contenedor de resultados y falta de orbe dinámico en el botón de acción principal.

---

### 2.2. SECCIÓN: Nosotros (`src/app/nosotros`)

#### A. Página Principal Nosotros (`src/app/nosotros/page.tsx`)
- **Desalineaciones:**
  - Importa `CTANestedPill` correctamente para el CTA final.
  - Las tarjetas de presentación de pilares empresariales no están encapsuladas en `DoubleBezelCard`.

#### B. Sobre Nosotros (`src/app/nosotros/sobre-nosotros` & `src/components/nosotros/sobre-nosotros`)
- **`AboutHero.tsx`**: Cumple con `CTANestedPill` y tipografía `Anton`. Falta pastilla *knockout* en el titular.
- **`AboutAdvantages.tsx` & `AboutValues.tsx`**:
  - **Desalineaciones:**
    - Las tarjetas de ventajas y valores utilizan cajas simples con fondo `bg-brand-blue-50`. Deben refactorizarse a `DoubleBezelCard` para mantener la Firma Geométrica Oficial en todas las páginas internas.
- **`AboutTimeline.tsx` (Línea de Tiempo / Historia)**:
  - **Desalineaciones:**
    - La línea de tiempo utiliza círculos estándar con bordes planos. Debe alinearse con el componente `StepperVertical` (eje en `#3B7BF8`, nodos completados en amarillo `#FFEC01` con micro-anillos concéntricos blancos y fechas/años en `Geist Mono`).
- **`AboutTeam.tsx` & `AboutMissionVision.tsx`**:
  - **Desalineaciones:**
    - Faltan badges de estado operativo y tipografía de datos `Geist Mono` en las cifras de trayectoria.

#### C. Nuestras Redes (`src/app/nosotros/nuestras-redes` & `src/components/nosotros/nuestras-redes`)
- **`NetworksHero.tsx` & `NetworksChannels.tsx`**:
  - **Excepción de Marca Permitida:** Los íconos y marcas sociales (Facebook `#1877F2`, Instagram gradiente `#833AB4`→`#FD1D1D`→`#F77737`) están permitidos como excepción acotada en esta sección.
  - **Desalineaciones:**
    - `NewsletterSubscribe.tsx` utiliza un `<button>` plano en lugar de `CTANestedPill`.
    - Los inputs de suscripción deben vestir el estilo oficial (borde 1.5px `#D6E4FE`, `rounded-xl`, etiqueta `Bebas Neue`).

#### D. Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes` & `src/components/nosotros/preguntas-frecuentes`)
- **`FaqHero.tsx` & `FaqCta.tsx`**:
  - **Desalineaciones:**
    - En `FaqCta.tsx`, el botón de contacto utiliza verde WhatsApp (`#25D366` / `bg-emerald-500`).
    - **Alineación Requerida:** Bajo la Ley de 3 Colores del sistema ajustado, todos los botones de contacto directo / WhatsApp deben vestir en Amarillo Vial (`#FFEC01`) con glifo y texto en Azul `#0950F6`.
- **`FaqAccordion.tsx`**:
  - **Desalineaciones:**
    - Las preguntas del acordeón no especifican explícitamente `font-subheading` (`Bebas Neue`) o `font-sans` (`Outfit` semibold), permitiendo herencia imprecisa.

---

### 2.3. SECCIÓN: Servicios (`src/app/servicios`)

#### A. Página Principal de Servicios (`src/app/servicios/page.tsx`)
- **Estado:** Alta alineación. Implementa `CTANestedPill`, `Anton` y `Geist Mono`.
- **Desalineaciones:**
  - Las tarjetas de la grilla de servicios utilizan borde simple `border-brand-blue-100` en lugar de `DoubleBezelCard`.

#### B. Envíos Express (`src/app/servicios/envios-express` & `src/components/servicios/express`)
- **`ExpressHero.tsx`**:
  - **DESVIACIÓN CRÍTICA (Hex Prohibidos):** Contiene referencias hardcodeadas a colores oscuros abolidos: `#0636A5`, `#04236B`, `#00277C`, `#021440`.
  - **Alineación Requerida:** Sustituir inmediatamente por `bg-brand-blue-700` / `#0950F6`.
- **`ExpressFeatures.tsx`, `ExpressPricing.tsx`, `ExpressUseCases.tsx`**:
  - **Desalineaciones:**
    - Las tarjetas de tarifas y casos de uso usan grillas simétricas planas en lugar del Bento Asimétrico 7/5.
    - Cifras de precios y tiempos deben envolverse estrictamente en cápsulas de `Geist Mono` con `tabular-nums`.

#### C. Envíos LowCost (`src/app/servicios/envios-lowcost` & `src/components/servicios/lowcost`)
- **`LowCostHero.tsx`**: Excelente alineación (implementa `DoubleBezelCard` y `CTANestedPill`).
- **`LowCostFeatures.tsx`, `LowCostPricing.tsx`, `LowCostHowItWorks.tsx`, `LowCostBenefits.tsx`**:
  - **Desalineaciones:**
    - Los pasos de "Cómo Funciona" (`LowCostHowItWorks.tsx`) no utilizan la variante horizontal de `StepperVertical` / nodos con numeración en `Geist Mono`.

#### D. MercadoLibre Flex (`src/app/servicios/enviosflex` & `src/components/servicios/flex`)
- **`FlexHero.tsx`**:
  - **DESVIACIÓN CRÍTICA (Hex Prohibidos):** Contiene referencias a `#0636A5`, `#04236B`, `#00277C`, `#021440`.
  - **Alineación Requerida:** Reemplazar por `bg-brand-blue-700` (`#0950F6`).
- **`FlexFeatures.tsx`, `FlexBenefits.tsx`, `FlexPricing.tsx`, `FlexRequirements.tsx`**:
  - **Desalineaciones:**
    - Los requerimientos de integración Flex carecen de tarjetas `DoubleBezelCard` y badges en `Bebas Neue`.

#### E. Empresas Cuenta Corriente (`src/app/servicios/empresas-cuenta-corriente`)
- **Estado:** Alta adherencia.
- **`page.tsx`**: Implementa `DoubleBezelCard` y `CTANestedPill`.
- **Desalineaciones:**
  - El formulario de solicitud B2B requiere estandarización de inputs con bordes 1.5px `#D6E4FE` y foco resplandeciente `rgba(9, 80, 246, 0.10)`.

#### F. Plan Emprendedores (`src/app/servicios/plan-emprendedores` & `src/components/servicios/emprendedores`)
- **`src/app/servicios/plan-emprendedores/page.tsx`**:
  - **Desviación Estructural:** Archivo stub/redirección muy corto (148 chars).
- **`EmprendedoresHero.tsx`**:
  - **DESVIACIÓN CRÍTICA (Hex Prohibidos):** Contiene `#0636A5`, `#04236B`, `#00277C`, `#021440`.
- **`EmprendedoresFeatures.tsx`, `EmprendedoresBenefits.tsx`, `EmprendedoresPricing.tsx`**:
  - **Desalineaciones:**
    - Falta de pastilla *knockout* en titulares y falta de `DoubleBezelCard` en las tarjetas de beneficios.

#### G. Depósito & Fulfillment (`src/app/servicios/deposito-fulfillment`)
- **`page.tsx`**:
  - **Desalineaciones:**
    - No utiliza componentes `DoubleBezelCard` en los módulos de almacenamiento y pick & pack.
    - Botón CTA de consulta sin orbe dinámico.

#### H. Envíos Contrareembolso (`src/app/servicios/envios-contrareembolso`)
- **`page.tsx`**:
  - **Alineación:** Implementa `DoubleBezelCard` y `CTANestedPill`.
  - **Desalineaciones:**
    - Mínimas: estandarizar montos de comisiones y límites de efectivo estrictamente en `Geist Mono` (`tabular-nums`).

---

### 2.4. SECCIÓN: Contacto (`src/app/contacto` & `src/components/contacto`)

- **`ContactHero.tsx`**:
  - **Desalineaciones:**
    - El título principal no incluye cápsula *knockout* amarilla `#FFEC01` rotada a `-1°`.

- **`ContactInfo.tsx`**:
  - **DESVIACIÓN CRÍTICA (Hex Prohibido):** Contiene referencia explícita al hex `#04236B`.
  - **Alineación Requerida:** Sustituir por token `brand-blue-700` (`#0950F6`).
  - **Métricas:** Teléfonos y dirección (Friuli 1972) deben renderizarse en `Geist Mono`.

- **`ContactForm.tsx`**:
  - **Desalineaciones:**
    - **Campos:** Los `<input>` y `<textarea>` usan bordes y radios planos (`rounded-lg`) en lugar de `rounded-xl` con borde 1.5px `#D6E4FE`.
    - **Etiquetas:** Falta aplicar `font-subheading` (`Bebas Neue` uppercase) en las etiquetas de cada campo.
    - **Botón Submit:** Se utiliza un `<button>` estándar en lugar de `CTANestedPill`.

- **`ConversionBanner.tsx`**:
  - **Desalineaciones:**
    - Banner de conversión secundario sin contenedor `DoubleBezelCard`.

---

## 3. Cuadro Resumen de Desalineaciones Clave

| Clasificación | Elemento Afectado | Archivos Principales Afectados | Regla del Sistema de Diseño Violada |
|---|---|---|---|
| **Colores Prohibidos** | Hex `#0636A5`, `#04236B`, `#00277C`, `#021440` | `ExpressHero.tsx`, `FlexHero.tsx`, `EmprendedoresHero.tsx`, `ContactInfo.tsx` | **Ajuste Max `#0950F6`**: Límite de oscuridad absoluta. Prohibido descender a tonos más oscuros. |
| **Colores Prohibidos** | Verde WhatsApp / Emerald | `FaqCta.tsx`, `AboutHero.tsx` (en botones) | **Ley de 3 Colores**: CTAs de contacto/WhatsApp deben usar Amarillo Vial `#FFEC01`. |
| **Componente Insignia Faltante** | `DoubleBezelCard` | `CotizadorExpressResults.tsx`, `AboutAdvantages.tsx`, `ExpressFeatures.tsx`, `EmprendedoresBenefits.tsx`, `ContactForm.tsx` | **Firma Geométrica**: Contenedores principales deben usar estructura de doble bisel (`#E6EEFE` + `#FFFFFF`). |
| **Componente Insignia Faltante** | `CTANestedPill` | `ContactForm.tsx`, `CotizadorExpressForm.tsx`, `NewsletterSubscribe.tsx`, `CotizadorLowCostForm.tsx` | **Firma Táctil**: Botones primarios de conversión deben ser píldoras amarillas `#FFEC01` con orbe dinámico. |
| **Firma Tipográfica** | Pastilla *Knockout* rotada `-1°` | `CotizadorExpressHero.tsx`, `CotizadorLowCostHero.tsx`, `AboutHero.tsx`, `ContactHero.tsx` | **Display Anton**: H1/H2 deben incluir cápsula amarilla `#FFEC01` rotada a `-1°` con texto `#0950F6`. |
| **Formularios e Inputs** | Inputs genéricos | `CotizadorExpressFormFields.tsx`, `ContactForm.tsx`, `NewsletterSubscribe.tsx` | **Entradas de Datos**: Marco `#FFFFFF`, trazo 1.5px `#D6E4FE`, `rounded-xl`, etiqueta `Bebas Neue`. |
| **Formato Numérico** | Falta de `tabular-nums` | `CotizadorExpressResults.tsx`, `ExpressPricing.tsx`, `FlexPricing.tsx`, `ContactInfo.tsx` | **Data Geist Mono**: Kilometrajes, tarifas y teléfonos deben usar `Geist Mono` con `tabular-nums`. |

---

*Fin del Reporte de Desalineación del Sistema de Diseño.*
