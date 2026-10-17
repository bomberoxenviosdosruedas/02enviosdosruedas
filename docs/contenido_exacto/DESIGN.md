# Design System: Envíos DosRuedas (Stitch Semantic Specification)

> **Archivo Canónico:** `docs/contenido_exacto/DESIGN.md`  
> **Referencia de Contenidos:** [`docs/contenido_exacto/CATALOGO_PAGINAS.md`](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/contenido_exacto/CATALOGO_PAGINAS.md)  
> **Directorio Base:** `C:\Users\prest\proyectos\02enviosdosruedassetiembre`  
> **Entorno Técnico:** Next.js 16 (App Router) · React 19 · TypeScript 5.7 · Tailwind CSS v4 · Motion  
> **Propósito:** Especificación semántica y única fuente de verdad (SSOT) para la generación de pantallas en Google Stitch y el desarrollo frontend de producción, combinando el criterio anti-slop, la identidad vial de Mar del Plata y la Ley de Tres Colores de Marca.

---

## 1. Tema Visual y Atmósfera (Visual Theme & Atmosphere)

* **Atmósfera General:** Logística vial de alta energía, limpia, confiable y precisa. Evoca la vibración operativa del asfalto marplatense, la exactitud de un despacho de última milla y la accesibilidad de una empresa de cercanía. El espacio respira orden geométrico sin caer en frialdad corporativa genérica.
* **Calibración del Espectro:**
  * **Densidad:** `5/10` (Daily App Balanced) en páginas institucionales y de servicios; escala a `8/10` (Cockpit Dense) en el Cotizador Unificado y paneles de seguimiento de envíos.
  * **Varianza:** `7/10` (Offset Asymmetric). Jerarquías dinámicas con módulos en zig-zag, tarjetas asimétricas y tipografía display de gran escala contrastada con texto de lectura fluido.
  * **Intensidad de Movimiento:** `7/10` (Fluid Physics). Micro-interacciones reactivas basadas en física de resortes (Spring Physics), transiciones de elevación en tarjetas y carruseles con scroll continuo sin fin.
* **Firma Geométrica:** Doble Bezel (`double-bezel-outer` y `double-bezel-inner`), creando contenedores de precisión técnica con bordes anidados y sombras teñidas que elevan visualmente los elementos interactivos sobre el lienzo blanco.

---

## 2. Paleta Canónica y Roles Funcionales (Color Palette & Roles)

La identidad se rige por la **Ley de Tres Colores de Marca**. Se prohíbe terminantemente el uso de fondos negros puros (`#000000`) o tonos más oscuros que el azul institucional. Toda la escala de sombras y neutros está teñida en base a la luz azul y el reflejo vial.

### 2.1 Colores Principales de Marca

| Token Semántico | Hex Literal | Rol Funcional y Aplicación |
| :--- | :--- | :--- |
| **Azul Corporativo (Tope de Oscuridad)** | `#0950F6` | Techo máximo de oscuridad de toda la aplicación. Lienzo de secciones Hero, Header institucional, Footer, titulares H1/H2, anillos de foco y texto sobre botones amarillos. (`brand-blue-500`, `brand-blue-700`, `brand-blue-900`). |
| **Amarillo Vial (Señal y Acción)** | `#FFEC01` | Llamado prioritario a la acción (CTAs primarios), acentos visuales de señalización, pasos completados en steppers, precios destacados sobre fondos azules y franja de remate de 6px en cabecera y pie. Máximo 15% de cobertura visual. (`brand-yellow-500`). |
| **Blanco Puro (Lienzo Universal)** | `#FFFFFF` | Superficie general de lectura, tarjetas de contenido, formularios limpios y contraste absoluto sobre bloques azules. (`color-white`). |

### 2.2 Escala Tonal de Soporte Vial (Sin Neutros Genéricos)

* **Azul Escalonado:**
  * `brand-blue-50` (`#E6EEFE`): Superficies secundarias ultra suaves, fondos de tarjetas alternas, skeletons y hover de botones fantasma.
  * `brand-blue-100` (`#BACEFD`): Líneas de división estructural, bordes de inputs en reposo y conectores de paso inactivos.
  * `brand-blue-200` (`#8EAFFB`): Bordes de tarjeta en hover interactivo, anillos de radio y trazos de diagramas viales.
  * `brand-blue-300` (`#628FF9`): Borde de foco secundario y detalles vectoriales en mapas.
  * `brand-blue-400` (`#3570F8`): Íconos funcionales de soporte y texto de gran escala atenuado (≥24px).
  * `brand-blue-800` (`#3570F8`): Estado hover de fondos azules (se aclara conscientemente ya que está prohibido oscurecer por debajo de `#0950F6`).
* **Amarillo Escalonado:**
  * `brand-yellow-50` (`#FFFDE6`): Fondo de servicio Flex o Express cuando está seleccionado activamente.
  * `brand-yellow-100` (`#FFFAB8`): Halos sutiles de selección y fondos de micro-badges.
  * `brand-yellow-400` (`#FFF12E`): Estado hover del botón primario y selector de WhatsApp.
  * `brand-yellow-600` (`#E6D400`): Estado pressed (click activo) del botón primario.

### 2.3 Canales y Redes Sociales Oficiales (Identidades Aisladas)

* **WhatsApp Oficial:** `#128C7E` (Base profunda) y `#25D366` (Verde vibrante). Textos y badges siempre en blanco puro (`#FFFFFF`) para máximo contraste accesible.
* **Instagram Oficial:** Degradado lineal `#833AB4` → `#E1306C` → `#FD1D1D` → `#F77737`. Exclusivo de su tarjeta y canal; prohibido usar degradados similares en otros módulos.
* **Facebook Oficial:** `#0866FF` / `#1877F2` (Azul corporativo Meta). Textos e insignias en blanco con marcas de agua atenuadas al 10%.

### 2.4 Sistema de Sombras Teñidas (Tinted Shadows)

Quedan prohibidas las sombras en grises muertos o negros (`rgba(0,0,0,...)`). Toda sombra se calcula a partir de la refracción del azul o el resplandor del amarillo:
* `shadow-sm`: `0 2px 4px rgba(9, 80, 246, 0.06), 0 1px 2px rgba(9, 80, 246, 0.03)`
* `shadow-md`: `0 4px 8px rgba(9, 80, 246, 0.08), 0 2px 4px rgba(9, 80, 246, 0.04)`
* `shadow-lg`: `0 8px 16px rgba(9, 80, 246, 0.1), 0 4px 8px rgba(9, 80, 246, 0.06)`
* `shadow-float`: `0 25px 50px -12px rgba(9, 80, 246, 0.15)`
* `shadow-hover-lift`: `0 24px 64px rgba(9, 80, 246, 0.20)`
* `shadow-accent-sm`: `0 2px 4px rgba(255, 236, 1, 0.15)`
* `shadow-cta-glow`: `0 0 28px rgba(255, 236, 1, 0.45), 0 8px 24px rgba(9, 80, 246, 0.18)`

---

## 3. Arquitectura Tipográfica (Typography Rules)

La tipografía combina robustez vial e impacto cartelero con excelente legibilidad en pantalla táctil y escritorio.

```
+--------------------------------------------------------------------------------+
|  DISPLAY: Anton SC / Anton (Mayúsculas, condensada, masiva, leading 0.9)       |
|  SUBHEADING: Bebas Neue (Mayúsculas, técnica, tracking 0.05em, vial)           |
|  BODY / SANS: Outfit / IBM Plex Sans (Geométrica, humana, leading relajado)    |
|  MONO: Geist Mono (Tabular numbers, coordenadas GPS, tarifas, distancias km)  |
+--------------------------------------------------------------------------------+
```

### 3.1 Familias y Aplicaciones

1. **Titulares Display (`font-display`):**
   * Familia: `Anton SC`, `Anton`, sans-serif.
   * Reglas: Texto 100% en mayúsculas (`uppercase`), `leading-none` o `0.9`, balanceado (`text-wrap: balance`), tracking ajustado (`tracking-tighter` / `-0.05em`).
   * Uso: H1 de portada, grandes números de impacto, cifras de tarifas principales y titulares de secciones principales.
2. **Subtítulos y Cabeceras Técnicas (`font-subheading`):**
   * Familia: `Bebas Neue`, sans-serif.
   * Reglas: Mayúsculas, espaciado abierto (`tracking-wider` / `0.05em`), peso semi-pesado.
   * Uso: Botones CTAs, categorías de servicios, badges de estado, pasos de procesos y encabezados de columnas.
3. **Texto de Cuerpo y Lectura (`font-sans`):**
   * Familia: `Outfit`, `IBM Plex Sans`, sans-serif. **Prohibido el uso de Inter.**
   * Reglas: Interlineado relajado (`leading-relaxed` / `1.625`), límite de ancho óptimo de 65 caracteres por línea (`max-w-[65ch]`), contraste mínimo WCAG AA (4.5:1).
   * Uso: Párrafos explicativos, descripciones de servicios, preguntas frecuentes y formularios.
4. **Datos Numéricos y Métricas (`font-mono`):**
   * Familia: `Geist Mono`, monospace.
   * Reglas: `font-variant-numeric: tabular-nums`, precisión técnica.
   * Uso: Tarifas por kilómetro, cálculos matemáticos, distancias viales (`14.2 km`), rangos de horario (`15:00 hs`), códigos de seguimiento y teléfonos.

### 3.2 Escala Modular

* **Hero H1:** `clamp(2.5rem, 6vw, 4.5rem)` (`text-4xl sm:text-6xl lg:text-7xl`)
* **H2 Sección:** `clamp(2rem, 4vw, 3rem)` (`text-3xl sm:text-5xl`)
* **H3 Tarjeta:** `1.5rem` a `1.875rem` (`text-2xl sm:text-3xl`)
* **Subhead / Badge:** `0.75rem` a `0.875rem` (`text-xs sm:text-sm uppercase tracking-wider`)
* **Cuerpo Normal:** `1rem` (`16px`, mínimo absoluto para legibilidad)
* **Texto Secundario / Legal:** `0.75rem` a `0.875rem` (`text-xs` / `text-sm`)

---

## 4. Estilos y Comportamiento de Componentes (Component Stylings)

### 4.1 Botones de Acción (CTAs)

* **Botón Primario Vial (CTA Main):**
  * Estructura: Cápsula redondeada completa (`rounded-full`), relleno amarillo vial (`bg-brand-yellow-500`), tipografía `font-subheading font-bold text-brand-blue-500 uppercase tracking-wider`.
  * Padding: `px-8 py-4` (grande) o `px-6 py-3` (estándar). Altura mínima táctil de 48px.
  * Sombras y Estados: Sombra cálida `shadow-accent-sm` o `shadow-cta-glow`.
  * Interacción: En hover `bg-brand-yellow-400 scale-[1.02] -translate-y-0.5`. En active (click) `bg-brand-yellow-600 scale-[0.98] translate-y-0`.
* **Botón Secundario / Outline:**
  * Estructura: Cápsula `rounded-full`, borde sólido de 2px `border-brand-blue-500` (o `border-white` sobre azul), fondo transparente.
  * Texto: `text-brand-blue-500 font-subheading font-bold` (o `text-white`).
  * Hover: Fondo suave `hover:bg-brand-blue-50` (o `hover:bg-white/10`).
* **Botón WhatsApp Flotante:**
  * Fondo verde `#25D366`, ícono y texto blanco, sombra flotante verde y efecto de pulso sutil cada 4 segundos.

### 4.2 Tarjetas y Contenedores (Cards & Double Bezel)

* **Double Bezel Oficial:**
  * Exterior (`double-bezel-outer`): Borde de 1px en `#BACEFD` (`brand-blue-100`), relleno `#E6EEFE` con 80% de opacidad, radio exterior de `24px` (`rounded-2xl` o `rounded-3xl`), sombra `shadow-float`.
  * Interior (`double-bezel-inner`): Relleno blanco puro (`#FFFFFF`), radio interior coordinado (`16px` o `20px`), padding generoso de `1.5rem` a `2.5rem`.
* **Tarjetas de Servicio Elevadas:**
  * Fondo blanco, borde fino de 1px `border-brand-blue-100/60`, radio de `24px` (`rounded-2xl`).
  * En hover: Transición suave de resorte, elevación vertical de `-4px` (`-translate-y-1`), intensificación de sombra a `shadow-hover-lift` y borde activo `border-brand-blue-300`.

### 4.3 Formularios e Inputs de Datos

* **Estructura Vertical:** Etiqueta (`label`) siempre arriba, clara, en negrita y legible; campo de entrada en el centro; mensaje de ayuda o error tipado en rojo vial abajo. Se prohíben etiquetas flotantes que desaparecen o confunden el contexto.
* **Input State:**
  * Reposo: Fondo blanco, borde de 1.5px `border-brand-blue-200`, radio `rounded-xl`, tipografía `font-sans text-brand-blue-900`, padding `px-4 py-3.5`.
  * Foco: Anillo de 3px `ring-2 ring-brand-blue-500 border-transparent outline-none`, sombra sutil `shadow-sm`.
  * Error: Borde `#EF4444`, ícono de advertencia e indicación textual inmediata.
* **Inputs de Autocompletado de Direcciones (Google Maps Places):**
  * Menú desplegable flotante con `double-bezel-outer`, items con hover en `bg-brand-blue-50`, íconos de pin vial y distancia calculada en `font-mono`.

### 4.4 Badges y Pastillas de Estado (Pills & Tags)

* **Badge Express 3hs:** Fondo `bg-brand-blue-50`, borde `border-brand-blue-200`, texto `text-brand-blue-500 font-subheading font-bold text-xs`.
* **Badge LowCost Reparto Día:** Fondo `#F0FDF4`, borde `#BBF7D0`, texto `#15803D`.
* **Badge Flex Llega Hoy:** Fondo `bg-brand-yellow-100`, borde `border-brand-yellow-300`, texto `text-brand-blue-500 font-bold`.
* **Badge Zona de Cobertura (Zonas A, B, C, D):** Cápsulas compactas `rounded-full px-3 py-1 text-xs font-mono font-bold`.

### 4.5 Loaders y Estados Vacíos (Loaders & Empty States)

* **Loaders:** Skeletons rectangulares que calcan exactamente la silueta del contenido final (`bg-brand-blue-50 animate-pulse rounded-xl`). Se prohíben spinners circulares aislados.
* **Empty States:** Composición con ilustración de moto mensajería vectorizada en azul y amarillo, titular claro y CTA inmediato para iniciar cotización o acción.

---

## 5. Principios de Layout y Arquitectura Responsive

### 5.1 Grilla y Contención Espacial

* **Ancho Máximo:** Los bloques principales se encierran en `max-w-7xl` (`80rem` / `1280px` - `1400px`) centrado automáticamente (`mx-auto px-4 sm:px-6 lg:px-8`).
* **Secciones de Pantalla Completa:** Deben utilizar `min-h-[100dvh]` y nunca `h-screen` (para prevenir saltos abruptos de scroll en Safari iOS y navegadores móviles con barra dinámica).
* **Espaciado Vertical Rítmico:** Secciones separadas por `py-16 sm:py-24 lg:py-32` (`clamp(4rem, 8vw, 8rem)`). Gaps internos de grilla en múltiplos de 8px (`gap-6`, `gap-8`, `gap-12`).
* **Cero Superposición Indeseada:** Ningún bloque de texto flota o se monta encima de imágenes o botones sin una tarjeta contenedora opaca que garantice contraste y legibilidad absoluta.

### 5.2 Responsive y Mobile-First

* **Colapso a Columna Única (< 768px):** Todas las grillas multicolumna (2, 3 o 4 columnas) colapsan a una sola columna en pantallas móviles.
* **Tolerancia Cero a Scroll Horizontal:** Prohibido cualquier desborde horizontal (`overflow-x-hidden` en raíz y anchos fluidos al 100%).
* **Áreas Táctiles Mínimas (Tap Targets):** Todos los botones, links de navegación y controles de formulario poseen un área mínima de interacción de `44px x 44px` (idealmente 48px).
* **Navegación Móvil:** Cabecera con menú hamburguesa que despliega un drawer suave de pantalla completa o panel lateral con `AnimatePresence` y efecto desenfoque `backdrop-blur-md`.

---

## 6. Filosofía de Movimiento y Animaciones (Motion Engine)

Inspirado en la filosofía de precisión física (Emil Kowalski) e implementado mediante la librería Motion.

### 6.1 Resortes Físicos y Curvaturas Canónicas

* **Resorte de UI Rápida (Snappy UI Spring):**
  * Valores: `{ stiffness: 360, damping: 28 }`
  * Uso: Botones, tarjetas interactivas, aperturas de modales y tabs. Respuesta instantánea sin rebote excesivo.
* **Resorte Pesado de Panel (Drawer / Modal Spring):**
  * Valores: `{ stiffness: 200, damping: 25 }`
  * Curva CSS equivalente: `cubic-bezier(0.32, 0.72, 0, 1)`
  * Uso: Menú lateral móvil, acordeones de preguntas frecuentes y filtros del cotizador.
* **Transiciones de Micro-Feedback:**
  * Duración: `160ms` a `200ms` con curva `cubic-bezier(0.23, 1, 0.32, 1)`.

### 6.2 Dinámicas Perpetuas y Revelaciones Escalonadas

* **Ticker Continuo de Redes:** Desplazamiento horizontal lineal perpetuo de 36 segundos (`marquee-left 36s linear infinite`). En hover se pausa suavemente (`hover:[animation-play-state:paused]`) para permitir lectura y clic.
* **Efecto Flotante Sutil (`animate-floaty`):** Oscilación vertical sutil de 6 a 8 píxeles en un ciclo de 6 segundos para elementos de mapa o insignias de certificación.
* **Revelación en Cascada (Stagger Reveals):** Las listas de tarjetas o beneficios se animan mediante un contenedor padre con `staggerChildren: 0.08` a `0.12s`, con desplazamiento ascendente de `16px` y desvanecimiento de opacidad (`0 → 1`).
* **Optimización de Rendimiento:** Las animaciones se ejecutan exclusivamente sobre `transform` y `opacity`. Se prohíbe animar propiedades que fuercen re-layout (`top`, `left`, `width`, `height`, `margin`).
* **Accesibilidad:** Soporte mandatorio para `prefers-reduced-motion`. Si el usuario tiene reducción de movimiento activada en su sistema operativo, las animaciones complejas se desactivan o se reducen a un desvanecimiento simple de opacidad.

---

## 7. Anti-Patrones y Reglas Prohibidas (Banned AI Tells)

Para asegurar un diseño de nivel industrial y evitar clichés de interfaces sintéticas o promesas comerciales inválidas:

1. **PROHIBIDO el color negro puro (`#000000`):** El tope de oscuridad institucional es `#0950F6`. No usar negros ni fondos azul noche apagados.
2. **PROHIBIDO el uso de la fuente `Inter`:** Se utilizan exclusivamente las fuentes con carácter de marca: `Anton SC` (Display), `Bebas Neue` (Subheading), `Outfit` / `IBM Plex Sans` (Sans) y `Geist Mono` (Mono).
3. **PROHIBIDAS las tipografías serif genéricas:** (`Times New Roman`, `Georgia`, `Garamond`).
4. **PROHIBIDOS los gradientes violetas / neón de IA:** Nada de brillos violetas, botones fluorescentes ni estética "cyberpunk".
5. **PROHIBIDAS las grillas genéricas de 3 tarjetas idénticas sin jerarquía:** Todo bloque de características debe usar jerarquía asimétrica, módulos 2-column zig-zag o diferenciación de escala.
6. **PROHIBIDO el uso de `Math.ceil` en el cálculo tarifario vial:** El tramo entre 10 km y 20 km se cobra por kilómetro exacto (`distancia * precioPorKm`). Redondear hacia arriba viola las reglas de negocio fijadas en los tests.
7. **PROHIBIDAS las métricas o estadísticas inventadas:** Nada de "99.98% Uptime SLA", "124ms Latency" o "50.000 clientes satisfechos". Si no existe un dato verificado de la empresa, no se inventa.
8. **PROHIBIDO prometer Express "en 2 horas" o "en 3 hs":** La promesa estricta es: *"Entrega en una franja horaria de 3 hs a elección del cliente, solicitada con al menos 2 hs de anticipación; horario de corte 15:00 hs"*.
9. **PROHIBIDO catalogar el servicio LowCost como "agrupado" o "por lote":** Es un servicio de reparto programado económico en el día con tarifa individual y corte a las 13:00 hs.
10. **PROHIBIDO publicar techos de peso rígidos inventados:** La capacidad estándar incluida es de hasta 5 kg o 40 x 40 x 30 cm; bultos mayores se coordinan con recargo operativo.
11. **PROHIBIDO asegurar "sin sorpresas":** Existen recargos operativos estipulados (lluvia, tiempo de espera a partir del minuto 11, bultos especiales).
12. **PROHIBIDO prometer Factura A:** La empresa no emite Factura A.
13. **PROHIBIDOS los clichés de redacción:** Palabras vacías como *"Seamless"*, *"Elevate"*, *"Next-Gen"*, *"Unleash"* o textos de relleno como *"Scroll para explorar"*.

---

## 8. Mapeo Canónico de Páginas y Vistas del Sistema

A continuación se detalla cómo el sistema de diseño se aplica en cada una de las 13 páginas y los componentes compartidos documentados en el [Catálogo Maestro de Páginas](file:///C:/Users/prest/proyectos/02enviosdosruedassetiembre/docs/contenido_exacto/CATALOGO_PAGINAS.md).

### 8.0 Componentes de Layout Globales

* **Cabecera Institucional (`OptimizedHeader.tsx`):**
  * Fondo: `bg-white/90 backdrop-blur-md` anclado (`sticky top-0 z-50`) con franja de remate `border-b border-brand-blue-100/60`.
  * Tipografía de Enlaces: `font-subheading uppercase tracking-wider text-brand-blue-500 font-bold`.
  * CTA Primario: Píldora amarilla `bg-brand-yellow-500 text-brand-blue-500 hover:scale-105` ("COTIZAR ONLINE").
* **Pie de Página Corporativo (`OptimizedFooter.tsx`):**
  * Franja Superior: Línea decorativa de 6px en amarillo vial (`bg-brand-yellow-500`).
  * Superficie: Bloque azul corporativo `#0950F6` con tipografía de lectura en blanco atenuado (`text-white/80`).
  * Titulares de Bloque: `font-display text-xl text-brand-yellow-500 uppercase tracking-wider`.
* **Carrusel Infinito de Redes (`CarruselRedes.tsx`):**
  * Estructura: Cinta continua con 3 identidades nativas oficiales: WhatsApp (verde `#128C7E`), Instagram (degradado magenta-naranja) y Facebook (azul `#1877F2`).
  * Animación: `animate-marquee-left` (36s lineal), pausa interactiva al apoyar el cursor.

### 8.1 Portada Principal (`src/app/page.tsx`)
* **Hero Principal (`HeroAnimado.tsx`):** Fondo azul profundo `#0950F6`, H1 masivo en `font-display text-white`, CTA amarillo vial brillante con resplandor `shadow-cta-glow`, insignia vial superior y tarjeta interactiva de mapa en flotación sutil.
* **Segmentos de Clientes (`SegmentosHome.tsx`):** Tarjetas en grilla asimétrica para E-commerce, Comercios y Particulares, con micro-ilustraciones vectoriales y badges de servicio directo.
* **Resumen de Servicios (`ServicesOverview.tsx`):** Módulo central de 6 servicios en doble bezel con resalte perimetral sobre Express y Flex.
* **Soluciones para Emprendedores (`EmprendedoresHome.tsx`):** Bloque en zig-zag 2-column con énfasis en depósito céntrico, integración de stock y despacho inmediato.
* **Prueba Social (`SocialProofSection.tsx`):** Calificaciones 5.0 estrellas, testimonios de comercios locales de Mar del Plata e insignias de confiabilidad vial.
* **Llamado Final (`CtaSection.tsx`):** Contenedor azul curvado con texto de impacto y botón directo al cotizador.

### 8.2 Cotizador Unificado (`src/app/cotizar/page.tsx`)
* **Atmósfera y Densidad:** `8/10` (Cockpit de despacho). Enfoque en eficiencia de cálculo, claridad de datos y cero fricción.
* **Componente Central (`CotizadorUnificado.tsx`):** Formulario modular interactivo en doble bezel con tabs para Express, LowCost y Flex.
* **Selectores y Autocompletado:** Campos de Origen y Destino vinculados a Google Maps Platform con trazado de ruta en mapa interactivo.
* **Visualización de Tarifas:** Cifra de precio en `font-display text-4xl text-brand-blue-500` con desglose en `font-mono` (distancia exacta en km, tiempo estimado y recargos transparentes de lluvia o espera).
* **Tabla de Zonas Estáticas:** Matriz de referencia con radios A, B, C y D sobre Mar del Plata y Batán.

### 8.3 Contacto y Base Operativa (`src/app/contacto/page.tsx`)
* **Hero de Contacto (`ContactHero.tsx`):** Presentación clara del centro de atención y tiempos de respuesta.
* **Formulario Comercial (`ContactForm.tsx`):** Formulario vertical estricto validado en tiempo real con Zod, campos de nombre, teléfono de contacto, email y detalle de la consulta.
* **Datos Físicos (`ContactInfo.tsx`):** Tarjeta con dirección física en Friuli 1972, horarios de atención por turno y botón directo a Google Maps.
* **Banner de Conversión Inmediata (`ConversionBanner.tsx`):** Bloque amarillo vial con botón de discado directo a WhatsApp comercial.

### 8.4 Centro de Ayuda y Preguntas Frecuentes (`src/app/nosotros/preguntas-frecuentes/page.tsx`)
* **Hero Informativo (`FaqHero.tsx`):** Titular en `font-display` y buscador de dudas frecuentes.
* **Categorías Operativas (`Faq-categories`):** Pestañas temáticas para Cotizaciones, Envíos Express, Mercado Envíos Flex, Pagos y Facturación.
* **Acordeones Dinámicos:** Módulos expansibles con transición de altura suave mediante `AnimatePresence`, flecha rotatoria de 180° y respuesta redactada sin ambigüedades.
* **Soporte Personalizado (`FaqCta.tsx`):** Derivación al equipo de guardia en WhatsApp para consultas no catalogadas.

### 8.5 Institucional: Sobre Nosotros (`src/app/nosotros/sobre-nosotros/page.tsx`)
* **Hero de Identidad (`AboutHero.tsx`):** Historia de la empresa, nacimiento en las calles de Mar del Plata y evolución logística.
* **Ventajas Diferenciales (`AboutAdvantages.tsx`):** 4 pilares: flota propia equipada, monitoreo activo, cumplimiento horario y cercanía humana.
* **Línea de Tiempo (`AboutTimeline.tsx`):** Stepper vertical continuo con hitos de crecimiento desde los inicios hasta la actualidad.
* **Equipo y Base Operativa (`AboutTeam.tsx` & `AboutMissionVision`):** Fotografías reales de la flota en calle, sin imágenes de stock genéricas de bancos internacionales.

### 8.6 Nuestras Redes y Comunidad (`src/app/nosotros/nuestras-redes/page.tsx`)
* **Hero Comunitario (`NetworksHero.tsx`):** Conexión con los canales de comunicación y comunidad activa.
* **Canales Directos (`NetworksChannels.tsx`):** 3 tarjetas de gran escala para WhatsApp, Instagram y Facebook con sus colores de marca nativos y enlaces oficiales.
* **Feed y Publicaciones Recientes (`RecentPosts.tsx`):** Muro dinámico con novedades, recomendaciones de embalaje y operativos de clima.

### 8.7 Hub de Servicios (`src/app/servicios/page.tsx`)
* **Catálogo Integral:** Presentación de los 6 servicios principales dispuestos en tarjetas de doble bezel con micro-etiquetas de beneficio.
* **Tabla Comparativa de Prestaciones:** Matriz clara comparando tiempos de entrega, horarios de corte, métodos de rendición y tipos de paquetería permitidos.

### 8.8 Envíos Express (`src/app/servicios/envios-express/page.tsx`)
* **Hero Express (`ExpressHero.tsx`):** Énfasis en la franja horaria de 3 hs a elección del cliente solicitada con 2 hs de antelación.
* **Tarjetas de Reglas Operativas (`ExpressFeatures.tsx`):** Explicación visual del corte a las 15:00 hs y franjas disponibles (10 a 13, 11 a 14, 12 a 15, 13 a 16, 14 a 17, 15 a 18, 16 a 19 y 17 a 19 hs).
* **Simulador y Casos de Uso (`ExpressPricing.tsx` & `ExpressUseCases`):** Trámites urgentes, farmacia, llaves, documentación bancaria y repuestos.

### 8.9 Envíos LowCost (`src/app/servicios/envios-lowcost/page.tsx`)
* **Hero LowCost (`LowCostHero.tsx`):** Propuesta de valor: la tarifa más competitiva de la ciudad para envíos programados en el día antes de las 19:00 hs.
* **Mecánica del Servicio (`LowCostHowItWorks.tsx`):** Explicación clara: solicitud hasta las 13:00 hs, retiro durante la mañana y entrega durante la tarde. Tarifa individual por distancia sin exigencia de volumen agrupado.
* **Beneficios Económicos (`LowCostBenefits.tsx`):** Optimización de costos para comercios minoristas y particulares.

### 8.10 Mercado Envíos Flex (`src/app/servicios/enviosflex/page.tsx`)
* **Hero Flex (`FlexHero.tsx`):** Especialización para vendedores de Mercado Libre con distintivo "Llega Hoy" verde oficial.
* **Cumplimiento y Entregas (`FlexFeatures.tsx`):** Ventana de despacho hasta las 15:00 hs y entrega garantizada en domicilio del comprador antes de las 20:00 hs.
* **Seguridad y Trazabilidad (`FlexRequirements.tsx`):** Escaneo de código de barras, confirmación digital con foto del paquete y firma del receptor para evitar reclamos en la plataforma.

### 8.11 Depósito y Fulfillment (`src/app/servicios/deposito-fulfillment/page.tsx`)
* **Hero para Emprendedores (`EmprendedoresHero.tsx`):** Solución integral de guarda de mercadería en base operativa céntrica de Mar del Plata.
* **Circuito Operativo (`EmprendedoresFeatures.tsx`):** Recepción de stock, almacenamiento en estanterías dedicadas, armado de pedidos (picking/packing) y despacho automático en moto al concretarse una venta.
* **Planes de Almacenamiento (`EmprendedoresPricing.tsx`):** Tarifas fijas mensuales por volumen y bonificación en el costo de los envíos despachados.

### 8.12 Empresas y Cuenta Corriente (`src/app/servicios/empresas-cuenta-corriente/page.tsx`)
* **Hero Corporativo B2B:** Solución para empresas, estudios contables, distribuidoras y laboratorios con alto volumen diario.
* **Beneficios Administrativos:** Liquidación quincenal o mensual consolidada, panel de seguimiento de envíos con múltiples usuarios y choferes de confianza asignados.
* **Formulario de Alta Directa:** Solicitud de apertura de cuenta corriente con validación de datos comerciales y límite de crédito acordado.

### 8.13 Envíos Contrarreembolso (`src/app/servicios/envios-contrareembolso/page.tsx`)
* **Hero de Cobranza en Destino:** Seguridad total en la entrega y cobranza simultánea de mercadería.
* **Mecanismo de Rendición:** Cobro en efectivo o recepción de transferencia en puerta con verificación inmediata y transferencia de los fondos al vendedor en el acto.
* **Seguridad y Garantía:** Transporte seguro del dinero, remito firmado y aviso de liquidación en tiempo real por WhatsApp.

---

## 9. Lista de Verificación para Agentes e Interfaces (Design Checklist)

Antes de dar por finalizada la creación o edición de cualquier pantalla en Stitch o en código de producción:

- [ ] **¿Cumple la Ley de Tres Colores?** El fondo principal es blanco o azul corporativo `#0950F6`, los CTAs son amarillos `#FFEC01` y no existe ningún elemento más oscuro que `#0950F6` (cero negro puro `#000000`).
- [ ] **¿Usa las fuentes oficiales?** Titulares en `Anton SC`, subtítulos en `Bebas Neue`, texto normal en `Outfit` / `IBM Plex Sans` y números en `Geist Mono`. **Cero Inter**.
- [ ] **¿Las sombras están teñidas?** Todas las sombras usan tonos azulados o amarillos. Cero sombras en gris neutro.
- [ ] **¿Contenedores Double Bezel?** Los módulos destacados implementan el borde exterior suave anidado con tarjeta blanca interior.
- [ ] **¿El Hero es asimétrico y limpio?** No hay elementos de texto superpuestos a imágenes sin contenedor, ni flechas de relleno como "scroll para ver más".
- [ ] **¿Cumple las salvaguardas comerciales?**
  - Express: franja de 3 hs a elección con 2 hs de anticipación (corte 15:00 hs).
  - LowCost: en el día antes de las 19:00 hs (corte 13:00 hs).
  - Flex: "Llega Hoy" hasta las 20:00 hs (corte 15:00 hs).
  - Distancia lineal entre 10 km y 20 km sin `Math.ceil`.
  - Sin mención de Factura A ni techos inventados de peso rígido.
- [ ] **¿Es totalmente responsive?** Colapso a una columna en móviles, tap targets de al menos 44px y cero desborde horizontal.
- [ ] **¿Respeta la física de resortes?** Animaciones de interacción con `stiffness: 360, damping: 28` y soporte para `prefers-reduced-motion`.
