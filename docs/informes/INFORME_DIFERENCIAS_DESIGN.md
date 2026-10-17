# Informe de Brechas y Divergencias: Análisis Comparativo de Sistema de Diseño

> **Documento Analizado:** [`docs/informes/DESIGN.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/informes/DESIGN.md) (Propuesta de diseño externa basada en prototipos HTML estáticos)  
> **Código Activo Contrastado:** [`src/`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/) (Next.js 16 App Router · React 19 · Tailwind CSS v4 · Motion v13)  
> **Referencias Canónicas:** [`AGENTS.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/AGENTS.md), [`src/app/globals.css`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/globals.css) y [`docs/contenido_exacto/CATALOGO_PAGINAS.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/contenido_exacto/CATALOGO_PAGINAS.md)  
> **Fecha de Emisión:** 17 de Octubre de 2026  
> **Objetivo:** Identificar exhaustivamente los desvíos técnicos, conceptuales y de arquitectura entre el diseño externo y el código productivo real, previniendo regresiones visuales y de negocio.

---

## 1. Resumen Ejecutivo y Matriz de Divergencias

El archivo [`docs/informes/DESIGN.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/informes/DESIGN.md) proviene de un entorno de pruebas con maquetas estáticas (`.html` planas en `0pruebas/envios_paginas/`). Si bien comparte la premisa de la Ley de Tres Colores y el contexto de logística urbana en Mar del Plata, **se aleja sustancialmente de la arquitectura real de producción implementada en `src/`**.

Si se intentara aplicar ese archivo tal como está redactado sobre el proyecto activo, causaría quiebres inmediatos en:
1. La identidad visual de botones y cabeceras por omisión de tipografías troncales.
2. La suite de iconos al forzar una librería externa no instalada (`Material Symbols Outlined`).
3. La coherencia cromática y el ADR 02 al reintroducir sombras azul noche oscuras (`rgba(0, 20, 100, 0.45)`).
4. El sistema geométrico, reemplazando la firma de Doble Bezel por bordes pesados de 4px que saturan la interfaz.
5. El motor de animaciones, degradando la física de resortes de Motion a transiciones lineales de CSS.

### Matriz Comparativa Rápida

| Dimensión Técnica | Propuesta Externa (`docs/informes/DESIGN.md`) | Código Real en Producción (`src/`) | Grado de Divergencia |
| :--- | :--- | :--- | :--- |
| **Arquitectura de Sombras** | Sombra pesada azul noche: `rgba(0, 20, 100, 0.45)` | Sombras teñidas al azul oficial: `rgba(9, 80, 246, 0.15)` | **Crítico** (Rompe ADR 02) |
| **Tipografía en CTAs/Badges** | `Anton` mayúsculas en botones | `Bebas Neue` (`font-subheading`) en botones y badges | **Crítico** (Rompe consistencia) |
| **Iconografía** | `Material Symbols Outlined` (Google Fonts webfont) | `lucide-react` (Componentes SVG tree-shakeable) | **Crítico** (Incompatibilidad técnica) |
| **Geometría de Tarjetas** | Phone-like con borde sólido de 4px (`border-4`) | Doble Bezel (`double-bezel-outer` + `inner`) 1px | **Alto** (Divergencia estética) |
| **Motor de Movimiento** | CSS puro + `animate-marquee` básico | `motion/react` v13 + resortes + `useReducedMotion` | **Alto** (Pérdida de interactividad) |
| **Componentes de Dominio** | Picking Racks (`RACK-A1`) y Banner de Monitoreo GPS | `DropoffCalculator`, `EmprendedoresDropoff` | **Moderado** (Componentes inventados) |
| **Tokens CSS** | Variables arbitrarias (`surface_ice`, `accent_hover`) | Tokens canónicos Tailwind v4 `@theme` en `globals.css` | **Moderado** (Desfasaje de nomenclatura) |

---

## 2. Categoría 1: Arquitectura Cromática y Tokens de Marca

### 2.1 Reintroducción de Azules Oscuros en Sombras (Violación a ADR 02)
* **Lo que propone el diseño externo:**  
  En la sección 4.2 define:
  ```css
  box-shadow: 0 30px 60px -12px rgba(0, 20, 100, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.15);
  ```
* **La realidad en `src/app/globals.css`:**  
  El ADR 02 estipula que `#0950F6` (`rgb(9, 80, 246)`) es el **techo máximo de oscuridad de toda la aplicación**. El valor `rgba(0, 20, 100, 0.45)` introduce un azul marino casi negro con componentes cromáticas de `R:0, G:20, B:100`, oscureciendo artificialmente los bordes inferiores.
  En [`src/app/globals.css`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/globals.css#L164-L184), las sombras están estrictamente teñidas con el azul corporativo institucional:
  ```css
  --shadow-float: 0 25px 50px -12px rgba(9, 80, 246, 0.15);
  --shadow-hover-lift: 0 24px 64px rgba(9, 80, 246, 0.20);
  --shadow-cta-glow: 0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18);
  ```
* **Impacto y Riesgo:** El uso de `rgba(0, 20, 100)` ensucia el fondo blanco, genera bordes sombríos y desentona con la limpieza visual que exige la identidad.

### 2.2 Desconexión de Tokens en Tailwind CSS v4
* **Lo que propone el diseño externo:**  
  Utiliza identificadores en YAML como `surface_subtle: "#f0f5ff"`, `surface_ice: "#e0ebff"`, `accent_hover: "#fff240"`.
* **La realidad en `src/`:**  
  El proyecto utiliza Tailwind CSS v4 con la directiva `@theme`. No existen variables `surface_ice`. La escala está rigurosamente unificada en pasos del 50 al 500 (`--color-brand-blue-50` a `--color-brand-blue-500` y `--color-brand-yellow-50` a `--color-brand-yellow-600`), neutralizando las paletas por defecto de Tailwind (`slate`, `gray`, `zinc`, etc.) para evitar fugas de estilo.

---

## 3. Categoría 2: Arquitectura Tipográfica y Ausencia de `Bebas Neue`

### 3.1 Omisión Crítica de la Tipografía de Subencabezados y CTAs
* **Lo que propone el diseño externo:**  
  Documenta únicamente tres fuentes: `Anton` (Display), `Outfit` (Cuerpo) y `Geist Mono` (Telemetría).  
  Para los botones de acción indica explícitamente:  
  *“Tipografía: Azul Corporativo (`#0950f6`), fuente Anton, mayúsculas sostenidas, tracking-wider”*.
* **La realidad en `src/`:**  
  El sistema de diseño consolidado en [`src/app/globals.css`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/globals.css#L111-L117) y [`src/components/ui/CTANestedPill.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/CTANestedPill.tsx) cuenta con **cuatro** familias oficiales:
  1. `--font-display`: `Anton SC`, `Anton` (exclusivo para H1, grandes cifras y lemas gigantes).
  2. `--font-subheading`: `Bebas Neue` (condensada técnica, obligatoria para botones primarios, CTAs anidados, badges de estado y categorías).
  3. `--font-sans`: `Outfit`, `IBM Plex Sans` (cuerpo de texto, 65 caracteres por línea).
  4. `--font-mono`: `Geist Mono` (cálculos tarifarios, distancias en km y horas de corte).
* **Impacto y Riesgo:** `Anton` es una fuente masiva ultra-pesada pensada para cartelería; usarla en botones genera textos toscos y con problemas de kerning en pantallas móviles pequeñas. `Bebas Neue` aporta la agilidad y esbeltez requerida en botones y pastillas viales.

---

## 4. Categoría 3: Librerías e Iconografía (Material Symbols vs. Lucide)

### 4.1 Incompatibilidad de Sistema de Iconos
* **Lo que propone el diseño externo:**  
  Prescribe el uso obligatorio de `Google Material Symbols Outlined` (con glifos como `arrow_forward` y configuración inline `FILL 1`).
* **La realidad en `src/`:**  
  `package.json` **no tiene instalada ninguna dependencia de Material Symbols**, ni existen fuentes tipográficas de iconos cargadas en los layouts.  
  El 100% de los componentes en `src/components/` importa y renderiza iconos vectoriales de [`lucide-react`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/package.json#L41) (`ArrowRight`, `MapPin`, `Zap`, `Clock`, `ShieldCheck`, `CheckCircle2`, `MessageCircle`).
* **Impacto y Riesgo:**
  - Si un desarrollador o agente sigue el diseño externo, colocará etiquetas `<span className="material-symbols-outlined">arrow_forward</span>` que se renderizarán como texto plano roto (`arrow_forward`) en el navegador.
  - Cargar la fuente de Material Symbols penalizaría el Core Web Vitals (LCP y CLS) al descargar un archivo `.woff2` adicional cuando ya se dispone de `lucide-react` con Tree-Shaking a nivel de build.

---

## 5. Categoría 4: Geometría de Componentes y Doble Bezel

### 5.1 Tarjetas Phone-Like de 4px vs. Firma Oficial Doble Bezel
* **Lo que propone el diseño externo:**  
  Exige tarjetas que simulen teléfonos móviles con bordes sólidos de 4px (`border-4 border-white` o `border-4 border-brand-yellow`), esquinas hipertrofiadas de hasta `rounded-[36px]` y etiquetas con rotaciones forzadas (`-rotate-1`).
* **La realidad en `src/`:**  
  El lenguaje de diseño de producción no utiliza marcos pesados de 4px que reducen el área útil y saturan la lectura. La firma geométrica oficial es el **Doble Bezel** ([`src/app/globals.css`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/app/globals.css#L228-L245)):
  - Marco Exterior (`double-bezel-outer`): Borde de 1px en `brand-blue-100`, fondo tenue translúcido `brand-blue-50/80` y radio suave de `24px`.
  - Tarjeta Interior (`double-bezel-inner`): Blanco puro, radio coordinado de `16px` o `20px` y padding generoso.
* **Impacto y Riesgo:** El Doble Bezel confiere un acabado de precisión técnica, sutil y moderno, mientras que el borde de 4px con rotación `-rotate-1` crea un estilo más infantil o "de historieta" que contradice la seriedad logística de la plataforma.

---

## 6. Categoría 5: Componentes Ficticios e Inexistentes en el Dominio

El archivo externo describe elementos de interfaz que no guardan correlato con los servicios y datos reales de la empresa:

1. **"Picking Rack Visualizer" (`RACK-A1`, `RACK-B2`):**
   - El documento externo propone un módulo interactivo de estanterías y códigos de depósito tipo Amazon.
   - En [`src/components/servicios/emprendedores/`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/servicios/emprendedores/), el servicio se resuelve a través de [`DropoffCalculator.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/servicios/emprendedores/DropoffCalculator.tsx), [`EmprendedoresDropoff.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/servicios/emprendedores/EmprendedoresDropoff.tsx) y [`EmprendedoresPricing.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/servicios/emprendedores/EmprendedoresPricing.tsx), explicando el almacenamiento real en Base Friuli sin simular un software WMS industrial inexistente.
2. **"Operaciones Banner" con Telemetría GPS en Vivo:**
   - Propone un banner de monitoreo: *"OPERACIONES ACTIVAS EN MAR DEL PLATA - DESPACHOS Y RUTAS EN TIEMPO REAL"* con `animate-ping`.
   - En `src/`, la aplicación no dispone ni simula una API de telemetría de motos en tiempo real para no generar falsas expectativas al cliente sobre geolocalización pública de repartidores.
3. **Hero con División Rígida 7/5 Columnas:**
   - La propuesta externa prescribe un Hero dividido rígidamente en 7 columnas para narrativa y 5 para telemetría.
   - En [`src/components/home/HeroAnimado.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/home/HeroAnimado.tsx), el Hero utiliza una composición orgánica centrada con fondo procedural vial ([`HeroProceduralBackground.tsx`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/src/components/ui/HeroProceduralBackground.tsx)), badges viales y fichas contextuales ancladas (`Base Friuli 1972` y `Entrega en el día`).

---

## 7. Categoría 6: Motor de Animaciones e Interactividad

| Característica | Propuesta Externa | Código Productivo (`src/`) |
| :--- | :--- | :--- |
| **Librería de Animación** | Ninguna (CSS vanilla y keyframes) | [`motion/react`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/package.json#L42) v13.4.4 |
| **Física de Resortes** | No soportada | Spring physics (`stiffness: 360, damping: 28`) |
| **Orquestación en Cascada** | No contemplada | Variantes con `staggerChildren: 0.1` |
| **Accesibilidad de Movimiento** | No contemplada | `useReducedMotion()` obligatorio |
| **Curvas Easing de Emil Kowalski** | No contempladas | `--ease-out`, `--ease-drawer`, `--ease-snappy` en `globals.css` |

* **Impacto y Riesgo:** Adoptar la especificación externa implicaría descartar toda la arquitectura reactiva de Motion v13 construida en `src/`, perdiendo la sensación táctil y la fluidez que diferencian a la plataforma.

---

## 8. Recomendaciones y Conclusión Técnica

1. **Mantener la Fuente de Verdad Canónica:**  
   La especificación activa y oficial del proyecto debe ser la consignada en [`docs/contenido_exacto/DESIGN.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/contenido_exacto/DESIGN.md), la cual refleja con exactitud los componentes, tokens, tipografías y reglas de negocio reales de `src/`.
2. **Relegar `docs/informes/DESIGN.md` a Documento de Referencia Exploratorio:**  
   Dicho archivo debe considerarse como un ejercicio de diseño preliminar o de laboratorio (procedente de maquetas HTML de prueba) y no como una guía de implementación para Stitch ni para asistentes de IA.
3. **Puntos Rescatables para Futuras Mejoras Visuales:**  
   - La idea de micro-pastillas informativas en 3 columnas (`CORTE` | `ENTREGA` | `TARIFA`) dentro de las tarjetas de servicio puede ser una buena incorporación visual para el Hub de Servicios, siempre que se maquete con `double-bezel` y tipografía `font-subheading` en lugar de bordes pesados de 4px.
   - El separador visual tipo rombo (`◆`) en los tickers puede adoptarse como detalle decorativo sutil.
