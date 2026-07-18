# **DESIGN.md: Especificaciones de Diseño y Arquitectura Front-End (FedEx LATAM)**

El presente documento de especificaciones técnicas y arquitectura front-end constituye una auditoría exhaustiva de la interfaz visual, la maquetación y la experiencia de usuario (UX/UI) del dominio web de FedEx para la región de Latinoamérica. El análisis toma como base el portal desplegado para Argentina, contemplando su comportamiento, redireccionamiento y presentación de servicios transfronterizos para usuarios accediendo desde Uruguay (https://www.fedex.com/es-ar/home.html). El ecosistema digital de esta corporación se rige por un sistema de diseño centralizado, internamente documentado bajo el ecosistema *FedEx Digital Design System (1DX)*, el cual establece directrices estrictas de fundamentos visuales, lineamientos de escritura, componentes interactivos y repositorios de interfaz para mantener una consistencia global inequívoca a través de miles de puntos de contacto digitales.  
El objetivo primordial de este reporte es decodificar dichos fundamentos visuales, extraer los "Design Tokens" precisos y proporcionar un *blueprint* técnico estructurado. Esta guía de estilo servirá como documento maestro para la recreación, refactorización o auditoría técnica del sitio web por parte de equipos de ingeniería de software, utilizando como base frameworks modernos basados en clases de utilidad, específicamente Tailwind CSS, o implementaciones mediante CSS puro y arquitecturas BEM.

## **1\. Concepto de Marca y Dirección Visual**

El diseño visual de la plataforma digital de FedEx no responde a tendencias estéticas efímeras; representa la culminación de décadas de evolución corporativa estrictamente orientada a la eficiencia logística, la velocidad y la confiabilidad inquebrantable. Para implementar de manera fidedigna el front-end del sitio, resulta imperativo comprender las directrices psicológicas, los pilares históricos y el tono de comunicación que sostienen y dirigen la arquitectura de la información.

### **1.1. Esencia Histórica y Arquitectura Psicológica del Diseño**

La identidad visual contemporánea de FedEx se encuentra profundamente anclada en el rediseño paradigmático introducido el 23 de junio de 1994 por el diseñador Lindon Leader, de la agencia Landor Associates. Este hito coincidió con la transición oficial de la nomenclatura corporativa de "Federal Express" a la contracción "FedEx", un cambio impulsado por el uso conversacional de los clientes. El rediseño tuvo como objetivo principal destilar y comunicar tres valores innegociables: velocidad, precisión y confiabilidad absoluta.  
El elemento más crítico, célebre y estructural de esta identidad gráfica es el uso magistral del espacio negativo. Al ajustar meticulosamente el interletraje (kerning) y fusionar características tipográficas específicas entre la "E" mayúscula y la "x" minúscula, se formó una flecha oculta orientada hacia la derecha. En el ámbito de la interfaz de usuario (UI) digital, este concepto fundacional de "impulso hacia adelante", "direccionalidad" y "precisión" rige toda la maquetación. Las interfaces web están calculadas para guiar la vista del usuario de manera ininterrumpida hacia la derecha y hacia abajo, emulando el movimiento de la flecha mediante patrones de lectura en Z y en F. Este flujo visual culmina invariablemente en llamadas a la acción (CTAs) de alto contraste que, con frecuencia, incorporan iconos direccionales como cheurones (chevrons) para reforzar el movimiento subliminal.

### **1.2. Impresión Psicológica y Sector de Mercado**

La interfaz de FedEx opera en el sector de la logística global y el comercio electrónico, sirviendo simultáneamente a clientes individuales (B2C) y corporativos (B2B). El diseño transmite un conjunto de valores fundamentales mediante una semántica visual muy específica:

* **Velocidad y Eficiencia Operativa:** La ausencia casi total de elementos decorativos superfluos, texturas complejas o gradientes innecesarios se alinea con un diseño predominantemente plano (flat design). Esta limpieza visual reduce drásticamente la carga y la fricción cognitiva del usuario. Los componentes de interacción primaria, como los formularios de rastreo de paquetes y los cotizadores de tarifas, están inmediatamente disponibles en la sección superior de la página (Hero Section), eliminando la necesidad de navegación secundaria o desplazamiento vertical (scroll) para cumplir la tarea principal.  
* **Confiabilidad y Autoridad Corporativa:** El uso extensivo y disciplinado de colores corporativos fríos, específicamente el púrpura patentado, ancla visualmente la interfaz. Esta decisión cromática diferencia a la marca de competidores directos en la industria del transporte que dependen de colores primarios más agresivos o utilitarios. El púrpura comunica autoridad, profesionalismo y un servicio de categoría *premium*, generando confianza inmediata en la custodia de bienes valiosos.  
* **Accesibilidad, Claridad y Cercanía:** A pesar de su inmensa escala corporativa, la interfaz web debe resultar accesible para usuarios no técnicos. La incorporación de radios de borde (border-radius) sutilmente redondeados en los contenedores de tarjetas (cards) y en los botones de conversión atenúa la rigidez corporativa clásica. Esta geometría suavizada hace que la interfaz sea amigable y táctil en dispositivos móviles, sin alienar a los clientes de carga pesada o empresariales.

### **1.3. Tono de Comunicación (UX Writing) y Localización**

El texto de la interfaz (UX Writing) no es un mero contenedor, sino un elemento de diseño activo que refleja los atributos fundamentales dictaminados por la marca: un tono que debe ser invariablemente simplificador, optimizador, seguro, personal, inventivo y conector. En el contexto del sitio analizado para Argentina y el Cono Sur, el idioma español se emplea de manera conversacional, directa y altamente resolutiva, evitando la jerga logística innecesaria.  
La arquitectura de la información escrita se divide en capas de interacción:

* **Titulares Prominentes (Headers):** Frases aspiracionales y de posicionamiento, como "Conectados con el mañana" o directrices funcionales como "Administra tus envíos", se presentan sistemáticamente en voz activa. Proyectan innovación, control y empoderan al usuario sobre su cadena de suministro.  
* **Microcopy Funcional y Llamadas a la Acción:** La ambigüedad está estrictamente prohibida en los elementos interactivos. En lugar de utilizar verbos genéricos y pasivos como "Enviar" o "Continuar", la interfaz despliega imperativos contextuales precisos escritos en mayúsculas sostenidas para denotar urgencia y claridad, tales como "RASTREAR", "ABRIR UNA CUENTA" o "PERMÍTENOS AYUDARTE".  
* **Soporte al Usuario:** El texto de asistencia intenta guiar al usuario paso a paso con empatía corporativa. Abundan formulaciones interrogativas seguidas de soluciones inmediatas (ejemplo: "¿Eres nuevo en FedEx? Nuestro nuevo Centro de Atención al Cliente te guía en todos los pasos necesarios..."). Esta estructura reduce la ansiedad asociada con los envíos internacionales y los procesos aduaneros complejos.

## **2\. Paleta de Colores (Design Tokens)**

El ecosistema cromático de FedEx es uno de los activos de marca más reconocibles y estudiados a nivel mundial. Históricamente, la compañía operaba bajo un complejo sistema de arquitectura de marca modular donde el color de las letras "Ex" en el logotipo mutaba para identificar distintas divisiones operativas: Naranja para FedEx Express, Verde para FedEx Ground, Rojo para FedEx Freight, Azul para FedEx Office y Amarillo para FedEx Trade Networks.  
No obstante, la estrategia digital contemporánea y la interfaz web moderna han consolidado su branding bajo el esquema insignia unificado de Púrpura y Naranja. Esta consolidación garantiza la consistencia de la experiencia del usuario y elimina la confusión cognitiva, relegando los antiguos colores divisionales a roles semánticos estrictos dentro de la interfaz de usuario (alertas, estados, confirmaciones).  
A continuación, se especifican los códigos exactos, sus equivalencias históricas, roles funcionales y la proporción matemática de uso recomendada para la estructuración de hojas de estilo en cascada (CSS).

### **2.1. Colores Core de la Marca**

| Rol en el Diseño | Nombre Interno | Código HEX | Valores RGB | Equivalencia Pantone | Proporción de Uso Visual |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Primario (Foco)** | FedEx Purple | \#4D148C | 77, 20, 140 | PMS 2685 C | \~20% \- 25% |
| **Acento (Conversión)** | FedEx Orange | \#FF6600 | 255, 102, 0 | PMS 1505 C / 021 C | \~5% \- 10% |

**Análisis de Implementación:**

* **FedEx Purple (\#4D148C):** Actúa como la columna vertebral estructural de la interfaz. Su aplicación se reserva para la navegación principal global (Header/Navbar), el pie de página masivo (Footer), los fondos de los módulos críticos de interacción (como el widget de rastreo principal) y la tipografía de nivel superior (encabezados H1 y H2). El alto contraste de este tono púrpura oscuro garantiza que cualquier elemento blanco superpuesto alcance niveles óptimos de legibilidad.  
* **FedEx Orange (\#FF6600):** El color de acento se raciona cuidadosamente. Su escasez deliberada incrementa su potencia psicológica para inducir conversiones. Está estrictamente reservado para los botones primarios de acción (CTAs), los estados activos de las pestañas (tab indicators), hipervínculos críticos subrayados y elementos gráficos que denotan velocidad o progreso. Para los estados interactivos (Hover/Focus), el sistema requiere un oscurecimiento controlado del 10% al 15% para simular retroalimentación táctil, lo que resulta en un color hexadecimal estimado de \#E65C00 o \#CC5200.

### **2.2. Colores Neutros y Estructurales**

Los tonos neutros constituyen el espacio negativo y la estructura del *Grid*. Son fundamentales para crear la jerarquía visual sin abrumar al usuario con los potentes colores corporativos.

| Rol en el Diseño | Nombre Interno / Función | Código HEX | Valores RGB | Equivalencia Pantone |
| :---- | :---- | :---- | :---- | :---- |
| **Bordes y Metadatos** | FedEx Light Platinum | \#999999 | 153, 153, 153 | PMS 877 C / Cool Gray 6 |
| **Texto Principal** | Dark Gray (Body Text) | \#2C2C2C | 44, 44, 44 | N/A |
| **Fondo Base** | Off-White / Background | \#FAFAFA | 250, 250, 250 | N/A |
| **Contraste Puro** | White | \#FFFFFF | 255, 255, 255 | Base Paper |

**Análisis de Implementación:**

* **Light Platinum (\#999999):** Empleado de manera ubicua para los bordes de los contenedores, campos de entrada de formularios (inputs), líneas divisorias horizontales (HR) y texto de baja prioridad como marcas de tiempo o *placeholders*.  
* **Dark Gray (\#2C2C2C):** La tipografía del cuerpo del texto jamás emplea un negro absoluto (\#000000). Se utiliza un gris antracita oscuro para mitigar la fatiga visual (eye strain) en pantallas retroiluminadas durante lecturas prolongadas de documentos legales, aduaneros o guías de envío.  
* **Off-White (\#FAFAFA) y White (\#FFFFFF):** El blanco puro se utiliza para las tarjetas de contenido (cards) y modales, que se superponen sobre un fondo base del documento (\<body\>) sutilmente grisáceo (\#FAFAFA). Esta técnica de estratificación (layering) permite delinear las áreas de contenido sin recurrir al abuso de líneas o bordes duros, apoyándose en la agrupación implícita. En conjunto, dominan el 60% del peso visual del sitio.

### **2.3. Sistema de Colores Semánticos (Estados de Interfaz)**

La genialidad del sistema de diseño actual radica en la reutilización de la paleta histórica de las divisiones de la empresa (Ground, Freight, Office) transformándola en un lenguaje de retroalimentación semántica universal para el usuario.

| Estado Semántico | Color Heredado | Código HEX | Rol en la Interfaz (UI) |
| :---- | :---- | :---- | :---- |
| **Éxito / Confirmación** | FedEx Green (Ground) | \#00A550 | Validaciones de formulario correctas, paquetes "Entregados", pasos de registro completados. |
| **Error / Peligro** | FedEx Red (Freight) | \#ED1C24 | Errores críticos de rastreo, campos obligatorios omitidos, excepciones de entrega. |
| **Información** | FedEx Blue (Office) | \#0099CC | Banners de notificaciones no críticas, *tooltips* explicativos sobre regulaciones aduaneras. |
| **Advertencia** | FedEx Yellow (Trade) | \#FFCC00 | Alertas de servicio por clima, demoras en el tránsito regional. |

## **3\. Sistema Tipográfico**

La tipografía corporativa de FedEx debe proyectar la autoridad geométrica del legendario logotipo, pero simultáneamente exige una optimización radical para asegurar una legibilidad perfecta en pantallas que varían desde monitores 4K de escritorio hasta dispositivos móviles antiguos operando bajo redes 3G intermitentes en la región de Latinoamérica.

### **3.1. Arquitectura y Familias Tipográficas**

Históricamente, el logotipo original fue concebido por Lindon Leader mediante la fusión y modificación extrema de las fuentes *Univers 67 (Bold Condensed)* y *Futura Bold*. Leader incrementó la altura de la x (x-height) y manipuló el kerning para generar la flecha en el espacio negativo.  
Para trasladar este ADN al ecosistema web contemporáneo sin comprometer el rendimiento, la corporación ha desarrollado una familia tipográfica geométrica propietaria, servida dinámicamente a través de la regla CSS @font-face utilizando formatos optimizados .woff y .woff2.

* **Fuente Principal (Custom Web Font):** FedEx Sans.  
* **Variantes Estructurales Detectadas:** FedExSans\_W-Regular, FedExSans\_W-Bold, FedExSans\_W-Light.

**Pila Tipográfica de Respaldo (Font Stack):** El diseño web resiliente exige que, si la fuente propietaria es bloqueada por la red del usuario, por configuraciones de privacidad, o sufre demoras de carga, el sistema debe degradarse graciosamente hacia tipografías nativas del sistema operativo sin causar reflows masivos en la maquetación (Cumulative Layout Shift). El sistema de diseño emplea un *font stack* robusto de fuentes sin remates (sans-serif) de tipo neo-grotesco y humanista:  
font-family: 'FedEx Sans', system-ui, \-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

*Nota para el Desarrollo y Refactorización:* Para desarrolladores front-end que construyan plataformas sin acceso a las licencias corporativas de FedEx Sans, se recomienda encarecidamente utilizar tipografías de Google Fonts con arquitecturas neo-grotescas, altura de la x pronunciada y terminales horizontales. Las equivalencias gratuitas más fieles son **Inter**, **Roboto** o **Montserrat**.

### **3.2. Escala Tipográfica Matemática (Type Scale)**

La jerarquía visual de la página de inicio se articula mediante una estricta progresión tipográfica. Esta escala se implementa idealmente con unidades de medida relativas (rem) en CSS, asegurando que el diseño respete las configuraciones de zoom y accesibilidad a nivel del navegador del usuario (donde 1rem equivale típicamente al tamaño base de 16px).

| Elemento Estructural UI | Rol Semántico en la Página | Tamaño Relativo (rem) / Píxeles | Peso Tipográfico (Font-Weight) | Interlineado (Line-Height) | Tracking (Letter-Spacing) |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Display / Hero Banner** | Titulares Promocionales (Ej. "Conectados con el mañana") | 2.5rem (40px) | Bold (700) | 1.2 (Ajustado) | \-0.02em (Condensado) |
| **Heading 1 (H1)** | Títulos principales de sección funcional | 2rem (32px) | Bold (700) | 1.2 | Normal |
| **Heading 2 (H2)** | Sub-secciones (Ej. "Más de FedEx") | 1.5rem (24px) | Bold (700) | 1.3 | Normal |
| **Heading 3 (H3)** | Títulos de tarjetas (Cards) y nombres de herramientas | 1.25rem (20px) | Medium (500) | 1.4 | Normal |
| **Body (Párrafo Base)** | Descripciones de servicios, textos legales, enlaces | 1rem (16px) | Regular (400) | 1.5 (Relajado) | Normal |
| **Microcopy / Metadatos** | Notas al pie, deslindes legales, *Tooltips* | 0.875rem (14px) | Light (300) o Regular | 1.5 | Normal |
| **Llamadas a la Acción (CTA)** | Etiquetas de Botones (Ej. "RASTREAR") | 1rem o 1.125rem | Bold (700) | 1.0 (Centrado Flexbox) | \+0.05em (Expandido) |

### **3.3. Directrices de Tratamiento Tipográfico**

* **Manejo del Espaciado (Kerning/Tracking):** Dado que la fuente FedEx Sans hereda la naturaleza ligeramente condensada de *Univers 67*, los títulos de gran tamaño (Display) requieren un letter-spacing sutilmente negativo para emular la densidad compacta y sólida del propio logotipo. Por el contrario, los botones en mayúsculas exigen un espaciado expandido para mejorar la legibilidad óptica a distancias cortas.  
* **Sintaxis de Capitalización:** Los títulos explicativos y orientados al servicio utilizan sistemáticamente la capitalización tipo oración ("Sentence case", ej. "Administra tus envíos") para proyectar una voz conversacional, moderna y cercana. En estricto contraste, los botones primarios, las etiquetas de navegación crítica y los formularios emplean mayúsculas sostenidas ("ALL-CAPS") para denotar jerarquía, precisión y autoridad procesal (Ej. "OBTENER TARIFAS", "ABRIR UNA CUENTA").

## **4\. Componentes Visuales y Grilla Estructural (UI Components)**

La arquitectura de la página se fundamenta en un sistema rígido e hiper-modular diseñado para canalizar las intenciones del usuario de la forma más rápida posible. En la industria logística de última milla, la estética se subordina a la funcionalidad utilitaria: el usuario visita la página exclusivamente para enviar un paquete, rastrear un envío o cotizar un servicio.

### **4.1. Sistema de Grilla y Comportamiento Adaptativo (Grid System & Breakpoints)**

La maquetación se rige por un manifiesto *Mobile-First*, basado en un sistema clásico de cuadrícula (Grid) de 12 columnas.  
El diseño utiliza contenedores para encapsular el contenido y evitar que la información se extienda indefinidamente en monitores panorámicos ultra-anchos, lo cual destruiría la longitud óptima de lectura (típicamente entre 65 y 75 caracteres por línea). Mientras que los elementos de fondo, como la banda púrpura del Header o el gris del Footer, se extienden al 100% del ancho del navegador (width: 100%), el contenido interior se restringe mediante márgenes automáticos.  
**Definición de Breakpoints (Puntos de Quiebre):** Los puntos de quiebre alteran el número de columnas activas y el comportamiento de los componentes de acuerdo con el ancho del dispositivo del usuario (Viewport).

| Breakpoint CSS | Ancho Mínimo (min-width) | Ancho del Contenedor Interno | Comportamiento del Layout |
| :---- | :---- | :---- | :---- |
| **xs / Mobile** | 320px | 100% (Fluido con padding de 10px) | 1 Columna. Elementos apilados verticalmente. Menú de navegación colapsado en icono "hamburguesa". Formularios expandidos al 100% de ancho. |
| **sm / Mobile Landscape** | 576px / 640px | Fluido hasta 740px | Transición menor. Ajustes de tamaño tipográfico para evitar desbordamientos. |
| **md / Tablet** | 768px | 740px | 2 Columnas. Tarjetas de contenido (como promociones) se agrupan en matrices de 2x2. Los formularios de rastreo permiten inputs paralelos. |
| **lg / Desktop Base** | 992px / 1024px | 980px | 3 Columnas. La barra de navegación de hamburguesa se expande revelando enlaces completos y mega-menús. |
| **xl / Desktop Wide** | 1200px | 1140px \- 1240px | 4 Columnas. Aprovechamiento total del espacio horizontal para la sección "Más de FedEx". |
| **xxl / Ultra-Wide** | 1440px o mayor | Max-Width bloqueado en 1440px | El contenido se centra en la pantalla. Aumento de márgenes laterales. |

### **4.2. Escala de Espaciado (Spacing Scale)**

El ritmo rítmico, vertical y horizontal, obedece estrictamente a una escala geométrica basada en multiplicadores de 8 píxeles (Base-8), introduciendo divisores de 4px únicamente para micro-ajustes de alineación de iconos.

* **Espaciado de Secciones (Section Padding):** Para crear límites implícitos entre secciones lógicas de la página (agrupación visual sin usar líneas), los bloques grandes de contenido aplican un padding masivo, comúnmente equivalente a py-16 (64px) o py-24 (96px) en Tailwind. Esta inyección de "respiración" o espacio en blanco (white space) organiza la información según la Ley de Proximidad de la Gestalt.  
* **Densidad de Componentes:** El espaciado interno de los botones interactivos (padding) ronda los 24px horizontales por 12px verticales (px-6 py-3), asegurando que el objetivo táctil supere los 44x44 píxeles recomendados para usabilidad móvil.

### **4.3. Anatomía de los Componentes Clave**

**A. El Módulo Hero y el Widget Funcional (Core Utility)** La sección superior domina por completo la jerarquía visual de la página, constituyendo la herramienta principal de conversión.

* Se compone de un fondo visual (fotografía corporativa o textura abstracta) sobre la cual se superpone un *Card* central masivo, elevando su Z-index.  
* Este contenedor presenta tres Pestañas (Tabs) de navegación internas fundamentales: "TARIFAS Y TIEMPOS DE TRÁNSITO", "RASTREA" y "ENVÍA".  
* **Especificación Geométrica:** Las pestañas requieren bordes perfectamente cuadrados (border-radius: 0\) para integrarse arquitectónicamente con la base de la tarjeta. El estado activo (Active State) se indica de manera inequívoca mediante una franja superior o inferior (top/bottom border) de 4px de grosor en color Naranja (\#FF6600) o Púrpura (\#4D148C).

**B. Entradas de Texto (Inputs) y Formularios de Búsqueda** Los campos de captura de datos, particularmente el Input de rastreo alfanumérico ("Nº DE RASTREO"), están estilizados para eliminar la fricción.

* **Diseño Base:** Contornos limpios con un borde de 1px solid \#999999 (FedEx Light Platinum) y un color de fondo blanco puro para maximizar el contraste del texto introducido.  
* **Estado Focus (Interacción):** Al hacer clic o navegar con la tecla Tab, el input debe transicionar inmediatamente. Se suprime el contorno (outline) por defecto del navegador y se reemplaza por un borde Púrpura (\#4D148C) de 2px, a menudo acompañado por un sutil halo exterior (Box-Shadow), dictando el control de la experiencia de marca a nivel de formulario.

**C. Contenedores de Contenido (Cards)** Los contenedores que encapsulan noticias corporativas, alertas de servicio en Argentina, y campañas promocionales regionales (ej. "¡Actívate con FedEx\!", programa "Exporta Simple") operan como entidades independientes.

* **Elevación y Sombra (Box-Shadow):** Se hace un uso muy moderado y realista de las sombras paralelas para indicar profundidad (Z-index). Un valor CSS estructural sería: box-shadow: 0 4px 12px rgba(0,0,0,0.08).  
* **Radio de Borde (Border-Radius):** La geometría debe transmitir la solidez de una empresa de logística. Un radio de borde excesivo resultaría infantil. Se utilizan valores bajos y estructurados, entre 4px y 6px (rounded-md en Tailwind).

**D. Sistema de Botones (Button Hierarchy)** La interactividad se codifica visualmente según la prioridad de la acción comercial.

1. **Botón Primario (Conversión Principal \- Ej. "RASTREAR", "ABRE TU CUENTA"):**  
   * Fondo: Púrpura (\#4D148C) o Naranja (\#FF6600).  
   * Texto: Blanco (\#FFFFFF), centrado, en peso Bold (700) y en mayúsculas.  
   * Borde: Ninguno (b\[span\_76\](start\_span)\[span\_76\](end\_span)order: none).  
   * Forma: Esquinas suavemente redondeadas (border-radius: 4px).  
2. **Botón Secundario (Acción Alternativa / Utilidad):**  
   * Suele presentarse como un botón "Fantasma" (Ghost Button) con fondo transparente, un borde sólido de 2px de color Púrpura y texto Púrpura.  
3. **Botón Textual (Text Link):**  
   * Utilizado para "Más Información". Para distinguirlo de texto normal, el enlace en estado *hover* revela un subrayado, o incorpora dinámicamente un icono vectorial de flecha (chevron) hacia la derecha, induciendo la psicología del progreso continuo.

**E. Infraestructura de Navegación (Header y Footer)**

* **Header (Barra de Navegación Global):** Presenta una barra sólida color Púrpura (\#4D148C). Aloja a la izquierda el logotipo corporativo en formato vectorial escalable (SVG). El centro concentra la navegación principal desplegable (Mega-menús) que revela sub-rutas estructurales (ej. Herramientas de aduana, Centro de comercio electrónico). A la derecha, ancla las utilidades de usuario ("Inscribirse/Iniciar sesión") y un icono de búsqueda.  
* **Footer (Pie de Página Institucional):** Es un componente monolítico que asume el 100% del ancho del viewport. Generalmente cuenta con un fondo gris antracita oscuro (\#2C2C2C) o púrpura oscuro. Distribuye una inmensa cantidad de enlaces corporativos en columnas estrictas (Nuestra compañía, Servicio al cliente, Datos fiscales de AFIP para Argentina), e incluye obligatoriamente un selector de idioma/región y los iconos monocromáticos de redes sociales.

## **5\. Animaciones y Micro-interacciones**

En las interfaces corporativas y logísticas orientadas a la tarea, la animación de la interfaz (motion design) tiene prohibido cumplir una función puramente decorativa. Cada movimiento debe ser intencional, informativo y confirmar la acción del usuario reduciendo su carga cognitiva.

### **5.1. Dinámica de Transiciones Base**

Las transiciones de color en botones, fondos y la alteración de opacidad para revelar los mega-menús deben manifestarse de forma fluida pero imperativamente rápida. Esto materializa digitalmente la promesa central de la marca: "velocidad y eficiencia".

* **Duración Estándar (Transition-Duration):** Los tiempos deben oscilar matemáticamente entre 200ms y 300ms. Cualquier transición que supere los 400 milisegundos se percibirá inconscientemente como lentitud del sistema (lag), lo cual contradice la psicología de un proveedor de mensajería *Express*.  
* **Curvas de Aceleración Bézier (Timing Function):** Se debe aplicar una curva ease-out o ease-in-out (cubic-bezier(0.4, 0, 0.2, 1)). La función ease-out es especialmente vital para la aparición de elementos modales o menús desplegables: el movimiento comienza con gran velocidad (sugiriendo una respuesta inmediata del software) y desacelera orgánicamente hacia el final de la animación para no agredir la visión del usuario.

### **5.2. Interacciones Contextuales Específicas**

* **Botones en Estado Hover y Active:** Al posicionar el cursor sobre un botón primario, el fondo debe oscurecerse entre un 10% y un 15% (por ejemplo, transicionando de \#FF6600 a \#E65C00). Alternativamente, algunas arquitecturas modernas aplican un sutil desplazamiento hacia abajo en el eje Y (transform: translateY(1px)) acoplado a un cambio en la sombra de caja (Drop Shadow) para emular el efecto físico de presionar un botón mecánico (Pressdown hover effect).  
* **Tarjetas Interactivas (Hovering Cards):** Las tarjetas que funcionan íntegramente como hipervínculos masivos (ej. los módulos que dirigen al "Centro de eCommerce") responden al cursor presentando una micro-elevación virtual: un movimiento vertical sutil (transform: translateY(-2px) o \-4px) en sincronía con una expansión de la sombra perimetral (pasando de una sombra dura a una más difusa), indicando claramente que toda la superficie es *clickeable*.  
* **Estado de Enfoque (Focus Visibility):** Como requisito crítico de accesibilidad para los usuarios que navegan el sitio empleando exclusivamente el teclado (tecla Tab), los enlaces y botones revelan un anillo de enfoque (outline) distintivo de 2px de grosor, color azul brillante o púrpura. Este anillo presenta un desfase exterior (offset) de 2px para no colisionar visualmente con los bordes propios del componente.  
* **Retroalimentación de Procesamiento Asíncrono:** Debido a que funciones críticas como "RASTREAR" o "COTIZAR" ejecutan llamadas asíncronas a la base de datos central (API), la transición entre el clic del usuario y el renderizado del resultado en pantalla debe estar mediada por un indicador de carga giratorio (Spinner circular, generalmente estilizado en los colores púrpura y naranja de la marca). Esto mitiga la ansiedad del usuario durante la latencia inherente de la red.

## **6\. Pautas de Accesibilidad (a11y) y Rendimiento Arquitectónico**

Dado que el público objetivo de FedEx abarca virtualmente todo el espectro demográfico, tecnológico y geográfico mundial (desde oficinas corporativas con fibra óptica hasta usuarios particulares en dispositivos móviles en tránsito), la robustez del código subyacente y la observancia dogmática de las pautas de accesibilidad internacional no son opcionales.

### **6.1. Cumplimiento de Accesibilidad Visual (Estándares WCAG 2.1)**

El cálculo del Contraste de Color rige y restringe las decisiones de diseño sobre la interfaz:

* **Tipografía sobre Fondo Corporativo (Púrpura):** El color blanco puro (\#FFFFFF) renderizado sobre el fondo oscuro FedEx Purple (\#4D148C) proporciona un ratio de contraste masivo de aproximadamente **8.5:1**. Este índice supera sobradamente los exigentes requisitos mínimos de 4.5:1 (Nivel AA) e incluso el de 7:1 (Nivel AAA) dictaminados por las Pautas de Accesibilidad para el Contenido Web (WCAG), garantizando legibilidad total para personas con deficiencias visuales moderadas.  
* **Manejo Crítico del Color Naranja:** El texto blanco sobre el fondo FedEx Orange (\#FF6600) presenta un escenario de contraste mucho más riesgoso, bordeando un ratio de **3.0:1**. Según las normativas estrictas de accesibilidad, para que esta combinación apruebe el umbral AA de las WCAG, el texto debe presentarse obligatoriamente en un **tamaño tipográfico grande** (definido como un mínimo de 18pt normal o 14pt en negrita/bold). Si la arquitectura requiere el uso de naranja en textos pequeños, se recomienda encarecidamente utilizar texto oscuro antracita (\#2C2C2C) en lugar de blanco, u oscurecer artificialmente el botón naranja para equilibrar el contraste.  
* **Dependencia del Color en Formularios:** En el manejo de errores (ej. un número de rastreo inválido), el sistema tiene terminantemente prohibido confiar de manera exclusiva en alteraciones de color (bordes rojos para error, verdes para éxito) debido al gran porcentaje de usuarios con daltonismo. Los cambios de estado de color siempre deben ir acompañados de un mensaje de texto explicativo explícito ("Número no válido") o un glifo vectorial inequívoco (una 'X' para fallos, un 'Check' para confirmaciones).

### **6.2. Optimización de Rendimiento (Web Core Vitals)**

La métrica esencial de rendimiento web, el *Largest Contentful Paint (LCP)*, mide la velocidad con la que se procesa visualmente el elemento más grande de la pantalla. En la URL analizada (https://www.fedex.com/es-ar/home.html), este elemento suele corresponder a la fotografía de fondo del *Hero Banner* o al complejo contenedor interactivo del widget de rastreo y cotización.

* **Tratamiento Categórico de Vectores (Assets SVGs):** El logotipo corporativo y toda la iconografía crítica del sistema (lupas de búsqueda, iconos del menú hamburguesa, flechas direccionales en CTAs) se incrustan en el HTML como gráficos vectoriales escalables (SVG) de forma *in-line*. Esta práctica anula el peso de realizar solicitudes HTTP adicionales, garantiza una nitidez absoluta sin importar la densidad de píxeles del dispositivo (ej. pantallas Retina o monitores 4K), y permite manipular el color interno de los iconos (fill, stroke) dinámicamente mediante CSS durante las animaciones de *hover*.  
* **Gestión y Pre-carga de Web Fonts:** Para mitigar el temido *Flash of Unstyled Text (FOUT)* —un fenómeno donde el texto se renderiza brevemente en una fuente del sistema antes de saltar abruptamente a la fuente corporativa causando un Layout Shift— las declaraciones críticas de @font-face para los archivos optimizados FedExSans\_W-Regular.woff2 deben inyectarse tempranamente en la cabecera \<head\> del documento HTML empleando la etiqueta \<link rel="preload" as="font" type="font/woff2" crossorigin\>.  
* **Imágenes Adaptables:** Los activos fotográficos de la marca (imágenes de camiones de reparto, aviones o mensajeros) deben servirse obligatoriamente utilizando los atributos srcset y el elemento \<picture\>, acompañados de formatos de compresión de próxima generación (como WebP o AVIF). Esta táctica entrega versiones drásticamente más ligeras de la imagen a dispositivos móviles, evitando la saturación de redes de ancho de banda restringido comunes en múltiples zonas de la geografía latinoamericana.

## **7\. Código de Configuración de Estilos (Tailwind CSS Config Blueprint)**

Como entrega técnica final, se provee la configuración maestra para el motor del framework Tailwind CSS (tailwind.config.js). Este bloque de código transfiere matemáticamente todos los "Design Tokens" extraídos durante la auditoría (colores corporativos, sombras estructurales, escala tipográfica personalizada y radios de borde geométricos) hacia clases de utilidad nativas. Esta herramienta permite a un ingeniero de front-end recrear fielmente la experiencia visual del portal web de FedEx, asegurando la consistencia milimétrica exigida por el sistema de diseño original.  
/\*\* @type {import('tailwindcss').Config} \*/  
module.exports \= {  
  // Las rutas deben ajustarse según la arquitectura del repositorio de destino.  
  content: \[  
    "./src/\*\*/\*.{html,js,jsx,ts,tsx}",  
    "./public/index.html"  
  \],  
  theme: {  
    extend: {  
      colors: {  
        /\* Design Tokens: Core Brand Colors \*/  
        fx: {  
          purple: {  
            DEFAULT: '\#4D148C', // FedEx Purple \- Color de enfoque primario  
            hover: '\#3A0E6B',   // Oscurecimiento matemático para interactividad táctil  
          },  
          orange: {  
            DEFAULT: '\#FF6600', // FedEx Orange \- Acento puro para CTAs  
            hover: '\#E65C00',   // Variante oscura accesible para estados Hover/Active  
          },  
          platinum: {  
            light: '\#E7E7E7',   // Utilizado en bordes de contenedores y separadores  
            DEFAULT: '\#999999', // FedEx Light Platinum \- Placeholders  
            dark: '\#666666',    // Texto deshabilitado o metadatos  
          },  
          dark: '\#2C2C2C',      // Texto de cuerpo optimizado para prevenir fatiga visual  
          bg: '\#FAFAFA',        // Fondo grisáceo extra-claro para resaltar tarjetas blancas  
        },  
        /\* Design Tokens: Semantic State Colors (Legacy Divisions) \*/  
        semantic: {  
          success: '\#00A550',   // FedEx Ground Green \- Validaciones exitosas  
          danger: '\#ED1C24',    // FedEx Freight Red \- Alertas críticas y errores  
          info: '\#0099CC',      // FedEx Office Blue \- Notas informativas en UI  
          warning: '\#FFCC00',   // FedEx Trade Networks Yellow \- Alertas de clima/tránsito  
        }  
      },  
      fontFamily: {  
        /\* Primary Typography Stack (Fallback Degradation Mechanism) \*/  
        sans: \[  
          'FedEx Sans',         // Prioridad absoluta corporativa  
          'Univers',            // Raíz tipográfica histórica  
          'system-ui',          // Inyección de fuentes nativas del SO para velocidad  
          '-apple-system',   
          'BlinkMacSystemFont',   
          '"Segoe UI"',   
          'Roboto',   
          'Helvetica',   
          'Arial',   
          'sans-serif'  
        \],  
      },  
      fontSize: {  
        /\* Fluid-like Typographic Scale with predefined Line-Heights \*/  
        'xs': \['0.75rem', { lineHeight: '1.5' }\],                     // 12px \- Notas legales  
        'sm': \['0.875rem', { lineHeight: '1.5' }\],                    // 14px \- Metadatos  
        'base': \['1rem', { lineHeight: '1.5' }\],                      // 16px \- Cuerpo de texto  
        'lg': \['1.125rem', { lineHeight: '1.4' }\],                    // 18px \- Subtítulos  
        'xl': \['1.25rem', { lineHeight: '1.4' }\],                     // 20px \- H3 (Tarjetas)  
        '2xl': \['1.5rem', { lineHeight: '1.3' }\],                     // 24px \- H2  
        '3xl': \['2rem', { lineHeight: '1.2' }\],                       // 32px \- H1  
        '4xl': \['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }\], // 40px \- Display/Hero Banner  
      },  
      boxShadow: {  
        /\* Structural Depth & Elevation Shadows \*/  
        'card': '0 4px 12px rgba(0, 0, 0, 0.08)',                     // Elevación base de contenedores  
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',               // Elevación dinámica interactiva  
        'input-focus': '0 0 0 2px rgba(77, 20, 140, 0.4)',            // Anillo de enfoque Púrpura (A11y)  
      },  
      borderRadius: {  
        /\* Corporate Geometries \*/  
        'sm': '2px',  
        'DEFAULT': '4px',       // Radio estándar para preservar rigor corporativo en CTAs  
        'md': '6px',  
        'lg': '8px',            // Límite máximo para suavizar tarjetas prominentes  
      },  
      spacing: {  
        /\* Base-8 Grid Spacing Extensions \*/  
        '18': '4.5rem',         // 72px \- Padding asimétrico  
        '22': '5.5rem',         // 88px  
        '112': '28rem',         // Max-width constrainer base  
        '128': '32rem',  
      },  
      transitionDuration: {  
        '250': '250ms',         // Tiempo óptimo matemático para micro-interacciones UI  
      },  
      transitionTimingFunction: {  
        'fx-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',                    // Curva base estandarizada (ease-in-out)  
      }  
    },  
  },  
  plugins: \[  
    require('@tailwindcss/forms'), // Plugin imperativo para estandarizar el reseteo visual de inputs HTML  
  \],  
}

#### **Fuentes citadas**

1\. Entrega exprés, servicios de mensajería y envíos | Argentina \- FedEx, https://www.fedex.com/es-ar/home.html 2\. Service Guide | FedEx, https://www.fedex.com/content/dam/fedex/us-united-states/services/Service\_Guide\_2025.pdf 3\. FedEx Digital Design System: Login, https://design.fedex.com/ 4\. FedEx Logo: A Wordmark That Delivers More Than You Think, https://rabbitlogo.com/blog/fedex-logo/ 5\. The FedEx Logo History, Colors, Font, And Meaning \- Designyourway.net, https://www.designyourway.net/blog/fedex-logo/ 6\. Learn FedEx Logo History & Evolution to Inspire Your Transport Company, https://www.freelogoservices.com/blog/fedex-logo-history/ 7\. The FedEx Logo Meaning, History, and Evolution \- Designhill, https://www.designhill.com/design-blog/the-fedex-logo-meaning-history-and-evolution/ 8\. FedEx Logo Meaning, Hidden Arrow, Font and Evolution \- Ofspace, https://www.ofspace.co/blog/fedex-logo-evolution 9\. The FedEx Logo History: Lindon Leader & The Hidden Arrow \- Inkbot Design, https://inkbotdesign.com/history-of-the-fedex-logo-design/ 10\. 41 Best CSS Button Hover Effects to Use in 2026 | TestMu AI (Formerly LambdaTest), https://www.testmuai.com/blog/best-css-button-hover-effects/ 11\. The FedEx Logo: History, Meaning & Hidden Arrow Design Explained, https://www.designermurat.com/post/the-fedex-logo-a-masterclass-in-simplicity-and-hidden-genius 12\. How to make a button hover transition with CSS \- SheCodes, https://www.shecodes.io/athena/76680-how-to-make-a-button-hover-transition-with-css 13\. My Dark Reader Setup \- GitHub Gist, https://gist.github.com/guilhermeprokisch/962349b3f23ee81562284b8a7b023d25 14\. The Ultimate Guide to Building Mobile Friendly Websites \- TestMu AI, https://www.testmuai.com/blog/the-ultimate-guide-to-building-a-mobile-friendly-website/ 15\. 47 Creative Button Hover Effects with Pure CSS | Savvy, https://savvy.co.il/en/blog/css/buttons-hover-effects-ideas/ 16\. FedEx Corporate Identity Quick Reference Guide, https://fabiosardinha.wordpress.com/wp-content/uploads/2008/01/fedex\_guidelines.pdf 17\. 25 brand style guide examples I love (for visual inspiration) \- HubSpot Blog, https://blog.hubspot.com/marketing/examples-brand-style-guides 18\. FedEx colours? : r/MandelaEffect \- Reddit, https://www.reddit.com/r/MandelaEffect/comments/znj0wb/fedex\_colours/ 19\. FedEx is making all of its logos Purple and Orange. \- Reddit, https://www.reddit.com/r/FedEx/comments/523cwl/fedex\_is\_making\_all\_of\_its\_logos\_purple\_and\_orange/ 20\. When Color Meets Constraints: A Guide to Brand–Product Collaboration | by Ben Martin, https://www.designsystemscollective.com/when-color-meets-constraints-a-guide-to-brand-product-collaboration-568fbc9a497b 21\. Fedex Color Palette (Hex and RGB) \- Design Pieces, https://www.designpieces.com/palette/fedex-color-palette-hex-and-rgb/ 22\. FedEx Colors \- Hex, RGB, CMYK, Pantone | Color Codes \- U.S. Brand Colors, https://usbrandcolors.com/fedex-colors/ 23\. CSS Button Style – Hover, Color, and Background \- freeCodeCamp, https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/ 24\. Botones CSS: Dando estilo a los botones \- Eniun, https://www.eniun.com/botones-css-estilos/ 25\. Grids & spacing – Material Design 3, https://m3.material.io/foundations/layout/grids-spacing/spacing 26\. FedEx Logo Review – What Makes This Simple Logo So Special? \- Gareth David Studio, https://garethdavidstudio.com/blog/fedex-logo-review/ 27\. FedEx eKYC UI/UX Design Case Study | Yellow Slice, https://www.yellowslice.in/project/fedex 28\. Index of /css/assets/fonts, https://payment.apac.fedex.com/css/assets/fonts/ 29\. Modern Font Stacks, https://modernfontstacks.com/ 30\. Font stack, https://email.digital.nsw.gov.au/styles/typography/font-stack 31\. 30 Best Fonts To Use In Logo Design, https://cdn.prod.website-files.com/63a9fb94e473f36dbe99c1b1/64932bc26d42b7f98bf381a5\_30%20Best%20Fonts%20to%20Use%20In%20Logo%20Design.pdf 32\. How To Use The FedEx Ship Manager Doc Tab \- ShipScience, https://www.shipscience.com/how-to-use-the-fedex-ship-manager-doc-tab/ 33\. Layout grid | U.S. Web Design System (USWDS), https://designsystem.digital.gov/utilities/layout-grid/ 34\. Layout: Grid – Design system \- ONS Service Manual \- Office for National Statistics, https://service-manual.ons.gov.uk/design-system/foundations/grid 35\. Framer Blog: Breakpoints in responsive web design: 2026 guide, https://www.framer.com/blog/responsive-breakpoints/ 36\. Breakpoints for Responsive Web Design in 2025 \- BrowserStack, https://www.browserstack.com/guide/responsive-design-breakpoints 37\. Layout and spacing guideline | UAE design system 2.0, https://designsystem.gov.ae/guidelines/layout 38\. Why does changing the background-color of a \<button\> change its border and border radius and hover effects? : r/css \- Reddit, https://www.reddit.com/r/css/comments/1hmj30d/why\_does\_changing\_the\_backgroundcolor\_of\_a\_button/ 39\. Build Kit – “Read Me” \- FedEx, https://www.fedex.com/content/dam/fedex-com/wiki/wiki\_pdfs/Build\_Kit\_ReadMe.pdf 40\. 20 Modern CSS Buttons – Hover Effects and Animations (2026) \- Veebilehed24, https://veebilehed24.ee/en/blog/css-effects/20-modern-css-buttons-hover-effects-and-animations-2026/ 41\. fedex » Beautiful Color Palettes for Your Next Design \- Loading.io, https://loading.io/color/feature/Fedex/ 42\. CSS System Font Stack Reference \- DigitalOcean, https://www.digitalocean.com/community/tutorials/css-system-font-stack 43\. Use custom fonts with CSS \- Medium, https://medium.com/@zmactavish/use-custom-fonts-with-css-b316781ef916