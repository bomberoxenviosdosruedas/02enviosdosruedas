# **DESIGN.md \- Especificaciones de Diseño y Blueprint Técnico UI/UX: Correo Uruguayo**

## **1\. Concepto de Marca y Dirección Visual**

El diseño de interfaces para instituciones estatales y empresas públicas de alcance nacional exige una arquitectura de la información y una dirección visual que prioricen la universalidad, la confiabilidad y la eficiencia operativa por encima de las tendencias estéticas pasajeras. El Correo Uruguayo, operando como la empresa postal pública de Uruguay, ostenta el mandato fundamental de materializar el acceso universal para toda la sociedad uruguaya, facilitando la satisfacción de demandas de comunicación, servicios logísticos y de índole financiera1. Esta responsabilidad demográfica absoluta determina que la plataforma digital no sea meramente un canal de marketing, sino una infraestructura de servicio público crítico.  
La esencia de la marca se fundamenta en su rol histórico y logístico como un factor de inclusión social que acorta distancias y aproxima personas, organizaciones y naciones1. Por consiguiente, la interfaz de usuario (UI) debe proyectar valores institucionales inquebrantables. La primera impresión psicológica que la interfaz transmite es de una sobriedad institucional inconfundible combinada con una agilidad logística optimizada. Al tratar con correspondencia sensible, giros internacionales, paquetería de valor y el manejo de datos personales protegidos por la Ley 18.3312, el diseño visual debe evocar máxima seguridad y transparencia. La inclusión del logotipo de la iniciativa gubernamental "Uruguay Digital" en el encabezado superior ancla visualmente a la empresa dentro del ecosistema de modernización del Estado, estableciendo un marco de confianza unificado4. El sector de mercado en el que opera interseca la logística tradicional con el comercio electrónico internacional, lo que obliga a la interfaz a equilibrar la solidez del servicio público con las expectativas de inmediatez del consumidor digital moderno.  
El tono de comunicación escrita, conocido en la disciplina como UX Writing, es un componente estructural que refleja esta dualidad entre la autoridad gubernamental y el servicio al cliente. El análisis del portal revela un tono formal, instructivo, directo y altamente orientado a la resolución de tareas. La comunicación evita deliberadamente las jergas tecnológicas innecesarias o el lenguaje excesivamente coloquial, manteniendo una postura de asistencia objetiva y procedimental. Los textos principales emplean verbos de acción en modo imperativo o infinitivo de manera cortés y clara, estructurando llamadas a la acción (CTAs) inequívocas como "Declare su compra en el exterior", "Rastrear envío", "Saber más", "Ver comunicado" y "Envía dinero a Cuba"4.  
Un aspecto notable de la estrategia de contenido es la segmentación explícita de la audiencia para reducir la carga cognitiva. El lenguaje y los flujos de interacción se bifurcan en tres pilares claramente delimitados: "Personas", "Pymes" y "Grandes Empresas"4. Esta categorización permite que la micro-copia y la terminología técnica se adapten a la madurez logística del usuario. Mientras que a un ciudadano común se le asiste con instrucciones simples sobre cómo usar su dirección física en Estados Unidos ("Casilla Mía") o cómo declarar un obsequio, el lenguaje dirigido a "Grandes Empresas" incorpora plataformas de autogestión corporativa ("Ahíva") y cotizaciones de servicios masivos4.  
Asimismo, se detecta un rigor legal y precautorio indispensable en la comunicación de incidentes y normativas. Frente a la proliferación de estafas cibernéticas, la plataforma utiliza un tono de advertencia severo e informativo en banners de alto nivel, alertando sobre fraudes digitales y suplantación de identidad (phishing), detallando explícitamente que la institución no realiza la venta directa de paquetes perdidos de acuerdo con los procedimientos de la Unión Postal Universal4. En los formularios de declaración de envíos internacionales y control aduanero, el UX Writing se vuelve estricto, indicando que los usuarios deben suministrar sus datos personales de forma "idéntica a como aparecen en su cédula de identidad", previniendo así errores en la cadena logística y de verificación estatal6.

## **2\. Paleta de Colores (Design Tokens)**

El sistema cromático de una entidad gubernamental debe equilibrar el reconocimiento histórico e institucional de la marca con las exigencias ergonómicas de la lectura en pantallas retroiluminadas. La cromatología del Correo Uruguayo se apoya en una paleta contenida y utilitaria, diseñada para evitar la saturación visual y guiar la atención del usuario de manera semántica hacia operaciones logísticas urgentes4.  
A partir del análisis técnico de los registros visuales institucionales, documentos de patentes y la interfaz pública en producción, se ha estructurado un sistema de *Design Tokens* cromáticos que actúan como la fuente única de verdad para el desarrollo en frameworks como Tailwind CSS. Este sistema se fundamenta en un azul corporativo dominante que transmite confianza, respaldado por un color de acento amarillo/naranja vibrante para la conversión8.

| Nomenclatura del Token | Rol en el Sistema UI | Código \#HEX | Comportamiento y Casos de Uso Recomendados | Proporción Estimada |
| :---- | :---- | :---- | :---- | :---- |
| primary-600 | Color Primario (Foco Institucional) | \#3C63AD | Identificador cromático principal de la marca. Se aplica en la barra de navegación superior (Navbar), logotipos corporativos, enlaces de navegación profunda, y fondos de bloques estructurales como el Footer4. Proyecta estabilidad y alineación con directrices internacionales9. | 30% |
| primary-800 | Interacción Primaria (Estado Activo) | \#2A457A | Variación oscurecida del azul primario. Esencial para proporcionar retroalimentación visual en estados :hover o :active sobre botones principales, y para fondos de alto contraste donde se superpone texto en blanco. | Uso puntual (\< 5%) |
| accent-500 | Color de Acento (Llamada a la Acción) | \#F6AF27 | Un amarillo-anaranjado dinámico extraído de la identidad de servicios destacados. Se utiliza de manera quirúrgica para captar la atención en elementos críticos: botones de conversión ("Buscar", "Rastrear"), banners promocionales e insignias de alerta4. | 10% |
| accent-600 | Interacción de Acento | \#D9961A | Tonalidad ensombrecida del acento, utilizada estrictamente para el cambio de estado al interactuar con los botones de conversión (mouse over o focus por teclado). | Uso puntual (\< 5%) |
| neutral-50 | Fondo Principal de Aplicación | \#F9FAFB | Blanco roto o gris de extrema luminosidad. Constituye el lienzo base de todo el sitio web. Reduce la fatiga ocular producida por el blanco absoluto y permite que los contenedores de información generen una percepción de profundidad mediante sombras. | 40% |
| neutral-white | Superficies y Contenedores | \#FFFFFF | Blanco puro. Reservado exclusivamente para el fondo interior de componentes elevados: tarjetas de noticias, formularios de inicio de sesión, modales emergentes y los campos de entrada de texto (inputs)4. | 15% |
| slate-900 | Texto Primario (High-Contrast) | \#0F172A | Gris extremadamente oscuro, casi negro. Aplicado a todos los encabezados principales (H1, H2, H3) y párrafos de lectura extensa. Su uso en lugar de \#000000 reduce el deslumbramiento y mejora el confort visual en sesiones largas. | Rol Tipográfico |
| slate-500 | Texto Secundario (Soporte) | \#64748B | Gris de tono medio utilizado para metadatos que no requieren lectura crítica inmediata, tales como fechas de publicación en artículos de prensa, textos de marcador de posición (placeholders) en campos de búsqueda de paquetes, y avisos legales en el pie de página4. | Rol Tipográfico |
| danger-600 | Estado Semántico: Alerta / Error | \#DC2626 | Rojo puro. Crítico para la infraestructura de comunicación de riesgos institucionales, aplicado en los bloques de prevención de "phishing", alertas sobre fraudes, y validaciones de errores en la inserción de números de rastreo aduanero4. | Condicional |
| success-600 | Estado Semántico: Éxito / Online | \#16A34A | Verde de confirmación. Empleado en retroalimentaciones positivas del sistema, como la confirmación de la declaración de una compra internacional, el éxito en la apertura de la "Casilla Mía", o el estado "entregado" en la línea de tiempo del tracking4. | Condicional |

El ecosistema visual del Correo Uruguayo aplica magistralmente la regla arquitectónica de interfaces conocida como la proporción 60-30-10, adaptada a un entorno corporativo. El 60% de la carga visual recae sobre los tonos neutros (neutral-50 y neutral-white), creando un espacio negativo sustancial. Este diseño espacioso es fundamental en interfaces ricas en datos burocráticos, ya que el espacio en blanco actúa como el principal delimitador visual entre secciones dispares, como la separación estructural entre los bloques de atención al ciudadano y las herramientas empresariales4. El 30% del espacio lo ocupa el azul institucional, anclando permanentemente la identidad del gobierno y marcando los límites de la página (el header topológico y el fat footer inferior)4. Finalmente, el 10% del color recae en el acento \#F6AF27, reservado casi de manera dogmática para la conversión directa y las herramientas de resolución interactiva8.

## **3\. Sistema Tipográfico**

La arquitectura tipográfica de un portal de servicios logísticos y estatales trasciende la estética para adentrarse en el terreno de la legibilidad pura, la accesibilidad universal y la prevención de errores de entrada. El sistema debe soportar una densidad de información fluctuante que va desde normativas de políticas de privacidad y reclamaciones de indemnización2, hasta cadenas alfanuméricas complejas que componen los números de seguimiento internacional (por ejemplo, RJ284204981CN o EE014626510UY)4.  
Aunque los documentos de guía para la impresión de etiquetas físicas del Correo Uruguayo sugieren familias tipográficas del sistema operativo como Verdana, Lucida Console y Courier New11, la traducción de estas necesidades a una interfaz web contemporánea requiere tipografías optimizadas para pantallas de alta y baja densidad de píxeles, con una excelente altura de la "x" (x-height) y contraformas abiertas.  
Se establece el siguiente sistema de fuentes equivalentes mediante Google Fonts, estructurando la plataforma web en dos familias complementarias:

1. **Tipografía Principal (Navegación, Encabezados y Cuerpo Textual): Inter o Roboto.**  
   * La elección recae en tipos sans-serif geométricos y humanistas. Roboto constituye un estándar histórico en las administraciones públicas sudamericanas debido a su neutralidad. Sin embargo, Inter ofrece una legibilidad superior en pantallas digitales para textos largos, especialmente en los avisos legales y las densas listas de requerimientos aduaneros.  
   * Esta familia gestiona todo el peso de la interfaz de usuario, desde la jerarquía de los mega-menús de navegación hasta las descripciones de los servicios como "Exporta Fácil"4.  
2. **Tipografía Monoespaciada (Identificadores Logísticos y Formularios Técnicos): JetBrains Mono o Fira Code (como equivalentes modernos a Courier New).**  
   * Este requerimiento es crítico en el sector postal. En el rastreo y declaración de envíos, los usuarios deben ingresar códigos donde la diferenciación absoluta entre el número "0" y la letra "O", o entre la "I" (i mayúscula) y la "l" (ele minúscula), previene fallos catastróficos en el control logístico y de aduanas7. La familia monoespaciada se asignará explícitamente a los campos de entrada de rastreo, visualización de códigos postales y resultados técnicos.

### **Escala Tipográfica y Ritmo Vertical**

La jerarquía visual de la plataforma se modela sobre una escala tipográfica matemática (Modular Scale) con un ratio de crecimiento armónico, usualmente de 1.25 (Major Third), tomando como raíz base los 16px (1rem). El ritmo vertical de la página exige un interlineado (line-height) relajado para favorecer la lectura de usuarios con discapacidades visuales o cognitivas.

| Nivel Jerárquico | Token Equivalente CSS | Tamaño Calculado (rem / px) | Interlineado (Line-Height) | Peso Tipográfico (Font-Weight) | Función y Ubicación en la Interfaz |
| :---- | :---- | :---- | :---- | :---- | :---- |
| **Display / Hero** | text-4xl | 2.25rem (36px) | 1.2 (Tight) | Bold (700) u ExtraBold (800) | Títulos promocionales de máximo impacto situados en el Action Slider superior, como promociones del servicio "Express Internacional" o envíos de dinero4. |
| **Header 1 (H1)** | text-3xl | 1.875rem (30px) | 1.25 (Tight) | Bold (700) | Enunciadores principales de sección de página o categorías magnas de navegación (ej., "Institucional", "Productos y Servicios", "Trámites")4. |
| **Header 2 (H2)** | text-2xl | 1.5rem (24px) | 1.3 (Snug) | Medium (500) o Bold (700) | Títulos separadores de grandes bloques de arquitectura, como las columnas delimitadoras para "Personas", "Pymes" y "Grandes Empresas"4. |
| **Header 3 (H3)** | text-xl | 1.25rem (20px) | 1.4 (Snug) | Medium (500) | Encabezados de componentes individuales, como el título dentro de las tarjetas del "Feature Highlight Grid" ("Plataforma Ahíva", "Casilla Mía")4. |
| **Body Large** | text-lg | 1.125rem (18px) | 1.5 (Normal) | Regular (400) | Textos introductorios en comunicados de prensa institucionales o explicaciones críticas sobre la obligatoriedad de los datos aduaneros5. |
| **Body Base** | text-base | 1rem (16px) | 1.5 o 1.6 | Regular (400) | El estándar general para el 80% de la lectura de la página: descripciones de noticias, artículos de política de privacidad y términos de uso2. |
| **Body Small** | text-sm | 0.875rem (14px) | 1.5 (Normal) | Regular (400) o Medium (500) | Datos complementarios como las fechas de publicación en la sección "Noticias", enlaces en la barra de utilidades superior, y columnas del pie de página (Footer)4. |
| **Microcopy / Etiquetas** | text-xs | 0.75rem (12px) | 1.5 (Normal) | Medium (500) | Avisos legales de copyright, mensajes de validación de formularios, información de actualización de contenidos al pie ("Última actualización: 04/05/2026") y tooltips6. |

## **4\. Componentes Visuales y Grilla (UI Components)**

El portal institucional del Correo Uruguayo está ensamblado bajo el paradigma del diseño modular o Component-Driven Development. Dada la vasta cantidad de información, la arquitectura visual debe ser fragmentada en bloques funcionales, independientes y predecibles. El análisis revela una alta densidad de módulos interactivos diseñados para atrapar la intención del usuario y dirigirla hacia embudos transaccionales en el menor tiempo posible4.

### **Arquitectura de Grilla y Comportamiento Responsivo (Grid System)**

El marco estructural se cimienta en un sistema de grillas basado en CSS Grid y Flexbox que muta fluidamente dependiendo de las capacidades del dispositivo, operando bajo la filosofía "Mobile-First".

* **Entorno Móvil (Breakpoints \< 768px):** El diseño se contrae a una sola columna fundamental (grid-cols-1). La prioridad se asigna a las acciones inmediatas: el cuadro de búsqueda general y la herramienta de inserción de seguimiento ("Rastrear envío") se posicionan prominentemente debajo del encabezado4. Los extensos menús institucionales ("Institucional", "Filatelia") se encapsulan dentro de un menú lateral o desplegable gobernado por un componente tipo Hamburguesa (Hamburger Button). Las tres grandes columnas de audiencia se convierten en acordeones o bloques apilados secuencialmente.  
* **Entorno Tablet (Breakpoints 768px \- 1023px):** La grilla muta para aprovechar el espacio horizontal adicional, usualmente transicionando a un sistema de dos columnas (grid-cols-2). Esto permite agrupar las tarjetas promocionales de servicios de manera pareada y reorganizar la matriz inferior de aplicaciones directas ("Acceso a aplicaciones").  
* **Entorno de Escritorio (Breakpoints \> 1024px):** El layout alcanza su máxima expansión, estabilizando el contenido dentro de un contenedor centralizado (con una anchura máxima definida, por ejemplo, max-w-7xl o 1280px) utilizando márgenes simétricos (mx-auto). En esta vista panorámica, la proeza organizativa de la página web se revela al desplegar una partición simultánea en tres tercios (grid-cols-3 o equivalente). Cada columna está dedicada a un segmento de usuario distinto: "Personas", "Pymes" y "Grandes Empresas"4. Esta disposición topológica reduce exponencialmente el tiempo de toma de decisiones (Ley de Hick), permitiendo a cada cohorte de usuarios ignorar el contenido irrelevante y dirigirse hacia plataformas específicas como la de autogestión corporativa ("Ahíva")4.

### **Taxonomía de los Componentes Clave**

La disección de la página revela reglas de diseño consistentes en los micro-componentes, conformando el lenguaje visual de la plataforma.

#### **A. Entradas de Texto (Inputs) y Herramientas de Rastreo**

Como núcleo del servicio postal, los puntos de inserción de texto acaparan la jerarquía operativa central. El campo de "Rastrear envío" o búsqueda de compras internacionales en la sección superior actúa como el motor transaccional primario4.

* **Anatomía:** Los campos están modelados para ser generosos y amigables táctilmente. Poseen una altura mínima recomendada de 44px a 48px para garantizar la precisión de toque.  
* **Estética Pasiva:** Exhiben un fondo puramente blanco (neutral-white) engastado en un borde fino de un pixel en gris perla (border-slate-300), rematados con radios de borde suaves (border-radius: 4px o rounded-md) que denotan accesibilidad sin perder el carácter oficial.  
* **Estados Reactivos y Retroalimentación:**  
  * **:focus-within:** Al activarse mediante un clic o navegación por tabulador, el componente debe comunicar inequívocamente su disposición de entrada de datos. El borde sutil es reemplazado por un reborde vibrante de color institucional (border-primary-600) y se emite un halo luminiscente exterior (box-shadow tipo anillo o ring en Tailwind), previniendo que el usuario pierda el contexto de su cursor en pantallas masivas.  
  * **Placeholders Instructivos:** El interior del campo debe alojar una guía formativa translúcida (text-slate-400). El análisis muestra explícitamente el uso de textos de ejemplo constructivos como RR123456789UY o EE014626510UY, orientando al usuario antes de la pulsación4.

#### **B. Sistema de Tarjetas (Card Components y Contenedores)**

El sitio emplea extensamente componentes tipo "Card" para compartimentar la promoción de servicios (Feature Highlight Grid), la presentación cronológica de noticias y los atajos del portal de aplicaciones4.

* **Morfología:** Contenedores sólidos que separan temáticas sin requerir pesadas líneas divisorias. Típicamente emplean un redondeo moderado en las esquinas (border-radius: 8px o rounded-lg) que suaviza la apariencia de un portal estatal típicamente rígido.  
* **Elevación y Profundidad (Sombras):**  
  * **Estado de Reposo:** Flotan sobre el fondo neutral-50 gracias a una sombra proyectada difusa y muy sutil orientada hacia el eje Y inferior (box-shadow: 0 1px 3px rgba(0,0,0,0.1)). Esta sutilidad separa capas sin abrumar visualmente.  
  * **Interacción (:hover):** Al pasar el cursor, el diseño debe traducir la intencionalidad del enlace. La sombra se intensifica y se expande en radio (box-shadow: 0 10px 15px \-3px rgba(0,0,0,0.1)), produciendo una ilusión óptica de elevación.  
* **Estructura Interna:** Las tarjetas de prensa ("Noticias") exhiben un comportamiento estandarizado: un bloque de imagen superior que respeta un ratio de aspecto panorámico (16:9 o aspect-video), coronado en su base por un bloque textual (Padding general de 1.5rem o 24px) que contiene la fecha secuencial, un titular de impacto y un fragmento de soporte4.

#### **C. Jerarquía de Botones (Llamadas a la Acción)**

Los botones son la manifestación táctil de las intenciones organizacionales del correo. El ecosistema detectado orquesta una escala precisa de prioridades interactivas.

* **Botón Primario (Solid):** Dedicado a conversiones imperativas. Emplea un fondo plano del color primario azul (\#3C63AD), desprovisto de bordes periféricos, utilizando texto de alto contraste en neutral-white con peso tipográfico Medium o Bold. Al ser enfocado (:hover), el material de fondo transiciona a un tono más solemne y oscuro (\#2A457A).  
* **Botón de Acento (Highlight CTA):** Una disrupción visual calculada para interrupciones del flujo normal de navegación, promociones o advertencias urgentes. Presenta un fondo sólido en amarillo-naranja (\#F6AF27). Se aplica a reclamos importantes de ventas o alertas de estafas4. Por motivos de legibilidad y accesibilidad, el texto interior de este botón debe estar renderizado en slate-900, no en blanco.  
* **Botón Secundario o Fantasma (Ghost Outline):** Implementado para acciones periféricas o complementarias que no deben eclipsar a las primarias, tales como "Ver todas las noticias", la descarga de archivos suplementarios como el PDF de destinos habilitados ("Ver destinos internacionales habilitados por producto"), o los enlaces de tipo "Saber más"4. Consisten en texto azul corporativo y un contorno del mismo color sobre fondo transparente, mutando a un fondo con un tenue lavado azul (primary-50) al recibir interacción de puntero.  
* **Escala Espacial:** Las métricas de espaciado interior obedecen a escalas táctiles comprobadas, generalmente asignando el doble de espacio horizontal que vertical (por ejemplo, padding: 0.75rem 1.5rem o px-6 py-3 en la nomenclatura técnica).

#### **D. Infraestructura de Navegación Periférica**

El esqueleto del sitio está contenido entre dos estructuras masivas de enrutamiento que anclan la experiencia en la parte superior e inferior de la ventana de visualización.

* **El Encabezado Superior (Top Header & Utility Bar):** El techo de la plataforma arranca con una delgada barra de utilidades de fondo neutro que alberga enlaces veloces pero vitales para el ecosistema ciudadano: un enlace ancla de accesibilidad ("Saltar al contenido"), el compendio de "Preguntas frecuentes", convocatorias laborales, vías de contacto institucionales, y enlaces técnicos a servicios web interconectados4. Justo debajo, la barra de navegación principal (Navbar) actúa como la verdadera arteria del sitio, estructurando el caos logístico en cuatro conductos masivos a través de menús desplegables: Institucional, Productos y Servicios, Filatelia y Trámites directos4.  
* **El "Fat Footer" Institucional:** Lejos de ser un apéndice estético, el pie de página es un nodo maestro de final de trayecto. Su diseño de gran volumen y fondo oscuro replica con fidelidad todas las opciones jerárquicas de navegación principales para evitar que el ciudadano deba desplazarse nuevamente hacia la cima. Incorpora datos físicos auditables: el domicilio central histórico en "Buenos Aires 451, Montevideo", las líneas telefónicas centrales (2916 0200\) y de atención gratuita (0800 2108), vías contemporáneas como WhatsApp, e íconos interactivos de plataformas sociales (Instagram, X, LinkedIn, YouTube)4. Además, actúa como repositorio legal al enlazar directamente con la estructura de protección de la Ley N° 18.331 y los documentos vinculantes de Política de Privacidad y Términos de Uso2.

### **Escala de Espaciado (Spacing Scale)**

Para mantener la cadencia y cohesión de todo el layout, el espaciado entre contenedores (margin) y dentro de los mismos (padding) no se asigna de manera aleatoria. Toda distancia en el blueprint técnico debe ser un múltiplo fundamentado de una matriz base de 8px (0.5rem).

| Propósito Estructural | Tamaño Escalar | Valor Rem | Equivalencia Pixeles |
| :---- | :---- | :---- | :---- |
| Separación interna fina (Iconos a texto) | space-2 | 0.5rem | 8px |
| Padding vertical estándar en botones | space-3 | 0.75rem | 12px |
| Ritmo regular (Márgenes entre párrafos) | space-4 | 1rem | 16px |
| Relleno interno de tarjetas (Cards) | space-6 | 1.5rem | 24px |
| Hendidura vertical entre módulos menores | space-8 | 2rem | 32px |
| Separación mayor entre bloques de página | space-12 | 3rem | 48px |
| Brecha entre secciones mastodónticas | space-24 | 6rem | 96px |

## **5\. Animaciones y Micro-interacciones**

La percepción de eficiencia gubernamental en un entorno digital se encuentra intrínsecamente ligada al comportamiento cinético de la interfaz. Mientras que plataformas comerciales o de entretenimiento abusan de movimientos elásticos, un portal que tramita cédulas de identidad, seguimientos aduaneros y políticas estrictas debe exhibir animaciones mesuradas, utilitarias y que eviten desencadenar problemas vestibulares6. Todas las micro-interacciones deben responder instantáneamente al comando del usuario pero resolverse de manera imperceptible.

* **Coreografía y Curvas de Aceleración (Timing Functions):** El movimiento robótico y lineal daña la percepción de calidad. Se debe dictaminar el uso absoluto de curvas de aceleración natural, específicamente ease-in-out (cubic-bezier(0.4, 0, 0.2, 1)) para interacciones donde un componente entra y abandona la escena (como la aparición y desaparición de un mega-menú de productos), y ease-out para retroalimentaciones de estado unidireccionales (el cambio de color de un botón al posicionar el cursor sobre él).  
* **Orquestación Temporal (Transition Duration):**  
  * **Velocidad Rápida (150ms):** Se asocia a funciones hápticas o reflejas de respuesta. Toda permutación de color de fondo, transición de opacidad del texto y manifestación de anillos de foco (:focus) debe completarse en 150 milisegundos para registrarse instintivamente como un sistema reactivo y en tiempo real.  
  * **Velocidad Media (300ms):** Reservada para mutaciones espaciales o estructurales. Cuando una tarjeta de servicio del bloque "Accesos rápidos" sufre un levantamiento (transform translateY(-4px)) y proyecta una sombra más oscura, un tiempo de 300 milisegundos imita adecuadamente el peso y la física de un objeto material sin frustrar el flujo cognitivo.  
  * **Velocidad Lenta (500ms a más):** Restringida a presentaciones automatizadas de contenido. Por ejemplo, el mecanismo de transición o disolución cruzada del carrusel de alertas principal (el "Action Slider" superior promocionando "Express Internacional")4 demanda transiciones sedadas y largas que eviten distraer bruscamente la visión periférica del usuario.  
* **Mecánica de Despliegue de Menús:** La interacción con el complejo sub-menú bajo "Filatelia" o "Institucional"4 prohíbe cortes abruptos o apariciones mágicas sin interpolación. Se instrumenta mediante una transición combinada donde la opacidad fluye de cero a cien (opacity-0 a opacity-100) sincronizada con un desplazamiento milimétrico sobre el eje vertical (translate-y-2 a translate-y-0) a lo largo de un ciclo vital de 200ms.

## **6\. Pautas de Accesibilidad Universal (a11y) y Rendimiento Base**

El Correo Uruguayo, por definición estatutaria e institucional, funciona como un habilitador público y un conector esencial entre la población, incluyendo a las personas mayores, usuarios de dispositivos de asistencia visual e individuos operando desde conectividades de red geográficamente limitadas1. Ignorar las normativas de accesibilidad en este diseño es equivalente a cerrar las oficinas postales físicas a una fracción de la demografía.

### **Cumplimiento Ergonómico (WCAG 2.1 AA/AAA)**

1. **Vigilancia del Contraste de Componentes:** El ratio de luminosidad relativo entre cualquier unidad tipográfica y el color de lienzo que habita debe superar obligatoriamente el cociente de **4.5:1** para cuerpos de texto regulares, y **3.0:1** para pesos tipográficos robustos (titulares de gran envergadura).  
   * Este mandamiento presenta un conflicto común con la paleta de marca: el uso de la fuente en blanco absoluto (\#FFFFFF) sobre el bloque de color de acento amarillo promocional (\#F6AF27) o el verde de éxito logístico (\#16A34A) violaría las especificaciones del Nivel AA de la WCAG debido a un deslumbramiento deficiente. Por tanto, sobre insignias de acento o de error claro, las etiquetas deben renderizarse forzosamente en grafito denso (slate-900) para garantizar la comprensión instantánea. El contraste del gris secundario (slate-500) sobre lienzos neutros (neutral-50) también deberá ser meticulosamente auditado4.  
2. **Arquitectura de Navegación Sustitutiva (Teclado y Lectores de Pantalla):**  
   * **Skip Links Funcionales:** La presencia del enlace "Saltar al contenido" detectado en el ápice de la ventana4 demuestra una intención de accesibilidad, permitiendo a los usuarios evitar recitar de nuevo toda la barra de navegación. Este enlace debe mantenerse oculto en el flujo de la página principal hasta que el usuario lo invoque mediante la tecla de tabulación (:focus-within), forzando en ese momento su aparición visual de forma absoluta en el eje Z.  
   * **Semántica Estructural de Entradas:** Los componentes masivos como los campos para registrar el número de paquete no pueden depender solo de sugerencias visuales fantasma (placeholders). Deben estar codificados respaldados por etiquetas \<label\> estrictamente enlazadas. En situaciones donde las imposiciones del diseño impidan la visibilidad del texto de la etiqueta, el campo \<input\> debe recibir atributos semánticos ricos como aria-label="Ingrese el número de registro del envío para rastreo". Especial énfasis requiere la advertencia a nuevos usuarios en formularios aduaneros que instruye sobre introducir datos personales exactos a los del documento de identidad6. Estas alertas deben ser capturadas por propiedades aria-describedby para asegurar que el software de lectura en voz alta enuncie la advertencia legal de inmediato, previniendo invalidaciones.  
3. **Auditoría de Enfoque Activo (Focus Management):** Absolutamente cada botón, campo de inserción, artículo del Feature Grid y red social interactiva debe manifestar una alteración visible en su periferia geométrica (outline o ring de al menos 2px de grosor, emparejado con un offset y color institucional \#3C63AD) al asimilar el estado activo mediante control remoto o tabulación manual, invalidando cualquier regla CSS irresponsable como outline: none; sin un sustituto idóneo.

### **Optimización del Flujo de Rendimiento (LCP y Core Web Vitals)**

En términos de conectividad, un retraso excesivo (Latency) o inestabilidades de carga gráfica (Cumulative Layout Shift) en la ejecución del portal degrada rápidamente la sensación ciudadana de eficacia burocrática. El Largest Contentful Paint (LCP) es la métrica gobernante de esta percepción.

1. **Instrumentación Técnica de Archivos Multimedia (Imágenes):** Las extensas matrices de tarjetas infográficas y las noticias cronológicas dependientes de un flujo pictórico demandan una disciplina espartana de ingeniería de entrega de contenidos4. Todo bloque visual fotográfico posicionado fuera de la primera vista crítica de pantalla (el límite virtual "Above the Fold") debe recibir el directivo de renderizado aplazado nativo del navegador (loading="lazy"). Concurrentemente, es un requisito sistémico implementar arquitecturas que abracen el estándar moderno, sirviendo copias de los recursos gráficos recodificadas hacia formatos WebP o AVIF amparadas bajo contenedores de selección semántica \<picture\> en HTML.  
2. **Higiene Vectorial y Renderización Limpia (Formato SVG):** Los activos visuales representativos fundamentales—tales como la dualidad de logotipos corporativos primarios ("Correo Uruguayo" y "Uruguay Digital"), conjuntamente con los pictogramas de la herramienta "Accesos rápidos" (Chatbot de asistencia, localización Geopostal, iconografía filatélica)4—no tienen justificación técnica para estar incrustados como ficheros rasterizados (.jpg, .png). Deben compilarse inherentemente en el marcado estructural mediante lenguaje de formato SVG. La directiva CSS expansiva de reasignación de color nativo (fill="currentColor") infundida dentro de estas geometrías de código proporcionará a los desarrolladores un control total sobre las metamorfosis visuales al someterlas a eventos de interacción del cursor.

## **7\. Código de Configuración de Estilos (Tailwind CSS Config)**

La abstracción teórica de este documento debe solidificarse en artefactos de software operativos. Para proyectos integrados en pilas de tecnología modernas (React, Vue, Next.js, Angular, o entornos estáticos compilados) que confían en filosofías de utilidades-primero como Tailwind CSS, el siguiente archivo provee la estructura nuclear tailwind.config.js indispensable.  
Este segmento de código no emite suposiciones teóricas genéricas. En su lugar, inyecta programáticamente la herencia cromática institucional de los Ministerios y Entes Públicos de Uruguay, la escala tipográfica extraída (favoreciendo tipografías aptas para códigos de barras aduaneros)7, y las características de radio y espaciales identificadas a partir de la reconstrucción deductiva del layout principal del portal.

JavaScript  
/\*\* @type {import('tailwindcss').Config} \*/  
module.exports \= {  
  // Delimitación exhaustiva de los directorios a inspeccionar para la recolección  
  // del árbol sintáctico. Fundamental para no hinchar de CSS inútil la versión final.  
  content: \[  
    "./src/\*\*/\*.{html,js,jsx,ts,tsx,vue}",  
    "./components/\*\*/\*.{html,js,jsx,ts,tsx,vue}",  
    "./public/index.html",  
  \],  
  theme: {  
    // Reemplazamos partes del tema por completo si no queremos que los tokens  
    // por defecto de Tailwind confundan a los desarrolladores al escribir utilidades.  
    // Usamos 'extend' para sumar a la librería base.  
    extend: {  
      // 1\. PALETA DE COLORES (Design Tokens Institucionales del Correo)  
      colors: {  
        primary: {  
          50: '\#F0F4FA',  
          100: '\#E1E9F5',  
          200: '\#C3D3EB',  
          300: '\#A5BEE1',  
          400: '\#6994CC',  
          500: '\#4B7AB8',  
          600: '\#3C63AD', // Punto G: Azul Corporativo Correo Uruguayo \[Referencia HEX exacta\]  
          700: '\#325291',  
          800: '\#2A457A', // Tonos de sombra para los botones de interacción y estado :hover  
          900: '\#223863',  
        },  
        accent: {  
          50: '\#FEF8EB',  
          100: '\#FDF1D7',  
          200: '\#FBE3AF',  
          300: '\#F9D587',  
          400: '\#F7C25F',  
          500: '\#F6AF27', // Punto G: Acento cálido amarillo/naranja para disrupciones visuales  
          600: '\#D9961A', // Acento ensombrecido para pseudo-clases :hover en alertas  
          700: '\#B57B12',  
          800: '\#94640F',  
          900: '\#7A520E',  
        },  
        neutral: {  
          50: '\#F9FAFB',  // Nivel superior del espacio negativo general de la plataforma web  
          100: '\#F3F4F6',  
          200: '\#E5E7EB',  
          300: '\#D1D5DB', // Contornos de campos logísticos y bordes de celdas  
          400: '\#9CA3AF',  
          500: '\#6B7280', // Elementos textuales adyacentes y fechas de notificaciones  
          600: '\#4B5563',  
          700: '\#374151',  
          800: '\#1F2937', // Títulos de sub-secciones y etiquetas de acordeones  
          900: '\#0F172A', // Texto canónico de lectura exhaustiva (WCAG AA contraste asegurado)  
          white: '\#FFFFFF', // Refugio interior inmaculado para las tarjetas ("Cards")  
        },  
        status: {  
          success: '\#16A34A', // Verificación del tracking de envíos finalizado con triunfo  
          danger: '\#DC2626',  // Emergencias rojas absolutas (Fraudes Digitales Phishing)  
          warning: '\#F59E0B', // Discrepancias aduaneras a resolver o requerimientos  
          info: '\#2563EB',    // Indicaciones gubernamentales informativas asépticas  
        }  
      },

      // 2\. CONGLOMERADO TIPOGRÁFICO  
      fontFamily: {  
        // Estirpe sans-serif humanista abanderada para las burocracias digitales y legibilidad  
        sans: \[  
          'Inter',   
          'Roboto',   
          '-apple-system',   
          'BlinkMacSystemFont',   
          '"Segoe UI"',   
          'Arial',   
          'sans-serif'  
        \],  
        // Estirpe rígidamente espaciada para la inspección quirúrgica de códigos postales   
        // internacionales, mitigando ambigüedades entre los grafemas O/0 e I/l.  
        mono: \[  
          '"JetBrains Mono"',   
          '"Fira Code"',  
          '"Courier New"',   
          'Courier',   
          'monospace'  
        \],  
      },

      // 3\. MORFOLOGÍA ESQUINADA (Border Radius)  
      borderRadius: {  
        'sm': '0.125rem',   // 2px \- Detalles imperceptibles como tooltips técnicos  
        DEFAULT: '0.25rem', // 4px \- Mandamiento estándar de inputs y botones institucionales  
        'md': '0.375rem',   // 6px \- Elementos interactivos medianos y menús tipo Dropdown  
        'lg': '0.5rem',     // 8px \- Ablandamiento sutil de tarjetas de promoción ("Casilla Mía")  
        'xl': '0.75rem',    // 12px \- Contenedores formidables o pop-ups de alerta de seguridad  
        'full': '9999px',   // Insignias circulares, avatares o pastillas de recuentos logísticos  
      },

      // 4\. ESTEREOSCOPIA DE PROFUNDIDADES (Box Shadows y Elevación)  
      boxShadow: {  
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',  
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px \-1px rgba(0, 0, 0, 0.1)', // Grilla estática  
        'md': '0 4px 6px \-1px rgba(0, 0, 0, 0.1), 0 2px 4px \-2px rgba(0, 0, 0, 0.1)',  
        'lg': '0 10px 15px \-3px rgba(0, 0, 0, 0.1), 0 4px 6px \-4px rgba(0, 0, 0, 0.1)', // Grilla dinámica :hover  
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', // Percepción de hundimiento al oprimir botones  
        'outline': '0 0 0 3px rgba(60, 99, 173, 0.4)', // Foco de validación a11y por tabulación perimetral  
      },

      // 5\. CINEMÁTICA Y MICRO-INTERACCIONES FÍSICAS  
      transitionTimingFunction: {  
        'ui-ease': 'cubic-bezier(0.4, 0, 0.2, 1)', // Tensión de aceleración oficial estándar  
        'ui-bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Rebote reservado muy cauteloso  
      },  
      transitionDuration: {  
        'fast': '150ms', // Alteraciones colorimétricas fulminantes y estados reflejos  
        'base': '300ms', // Mutaciones morfológicas, dilataciones de sombras y tarjetas  
        'slow': '500ms', // Relevos coreográficos masivos en sliders principales de página  
      },

      // 6\. FLUJO ESTRUCTURAL Y CONTENCIÓN MARGINAL  
      container: {  
        center: true, // El bloque central debe equilibrarse magnéticamente en escritorio  
        padding: {  
          DEFAULT: '1rem', // Márgenes limitados en visualizaciones de telefonía móvil (320px+)  
          sm: '1.5rem',    // Holgura perimetral en tabletas panorámicas (768px+)  
          lg: '2rem',      // Márgenes formales asimilables por monitores convencionales (1024px+)  
          xl: '2.5rem',    // Respiración absoluta para resoluciones ultrawide y masivas  
        },  
      },  
    },  
  },  
  plugins: \[  
    // La incorporación funcional de bibliotecas especializadas es crítica para gobernar un CMS.  
    // Se recomienda forzosamente habilitar el control tipográfico de artículos legales y de prensa  
    // junto con el reset estandarizado de formulismos de recolección de datos (inputs).  
    // require('@tailwindcss/forms'),  
    // require('@tailwindcss/typography'),  
  \],  
}

#### **Obras citadas**

1. Institucional \- Correo Uruguayo, [https://www.correo.com.uy/institucional](https://www.correo.com.uy/institucional)  
2. Política de Privacidad \- Montevideo \- Correo Uruguayo, [https://www.correo.com.uy/politica-de-privacidad](https://www.correo.com.uy/politica-de-privacidad)  
3. Ley 18.331 \- Protección de Datos Personales y acción de Habeas Data \- Correo Uruguayo, [https://www.correo.com.uy/ley-18331](https://www.correo.com.uy/ley-18331)  
4. Correo Uruguayo \- Correo Uruguayo, [https://www.correo.com.uy/home](https://www.correo.com.uy/home)  
5. Comunicado de Correo Uruguayo sobre publicaciones falsas en redes sociales \- GUB.UY, [https://www.gub.uy/unidad-reguladora-servicios-comunicaciones/comunicacion/noticias/comunicado-correo-uruguayo-sobre-publicaciones-falsas-redes-sociales](https://www.gub.uy/unidad-reguladora-servicios-comunicaciones/comunicacion/noticias/comunicado-correo-uruguayo-sobre-publicaciones-falsas-redes-sociales)  
6. Declare su compra u obsequio proveniente del exterior \- Correo Uruguayo, [https://www.correo.com.uy/compras-exterior](https://www.correo.com.uy/compras-exterior)  
7. Cómo declarar su compra u obsequio proveniente del exterior \- Correo Uruguayo, [https://www.correo.com.uy/como-declarar-su-compra-u-obsequio](https://www.correo.com.uy/como-declarar-su-compra-u-obsequio)  
8. Boletín 310 \- GUB.UY, [https://www.gub.uy/ministerio-industria-energia-mineria/sites/ministerio-industria-energia-mineria/files/documentos/publicaciones/Boletin%20310.pdf](https://www.gub.uy/ministerio-industria-energia-mineria/sites/ministerio-industria-energia-mineria/files/documentos/publicaciones/Boletin%20310.pdf)  
9. Lanzamiento de sellos personalizados de la Asociación de Veteranos de Operaciones de Paz de Uruguay \- Novedades Filatélicas, [https://www.correo.com.uy/novedades-filatelicas/-/asset\_publisher/dKvds5Yk5ZGS/content/lanzamiento-sellos-personalizados-asociacion-veteranos-operaciones-paz-uruguay-avopu-minas](https://www.correo.com.uy/novedades-filatelicas/-/asset_publisher/dKvds5Yk5ZGS/content/lanzamiento-sellos-personalizados-asociacion-veteranos-operaciones-paz-uruguay-avopu-minas)  
10. Términos de uso \- Correo Uruguayo, [https://www.correo.com.uy/terminos-de-uso](https://www.correo.com.uy/terminos-de-uso)  
11. ¿Cómo debo escribir la dirección en el envío? \- Preguntas frecuentes \- Correo Uruguayo, [https://www.correo.com.uy/preguntas-frecuentes/-/asset\_publisher/ZuxsE4WytQ4A/content/-como-debo-escribir-la-direccion-de-los-envios-](https://www.correo.com.uy/preguntas-frecuentes/-/asset_publisher/ZuxsE4WytQ4A/content/-como-debo-escribir-la-direccion-de-los-envios-)  
12. Casilla Mía: tu dirección en EEUU \- Montevideo \- Correo Uruguayo, [https://www.correo.com.uy/casillamia](https://www.correo.com.uy/casillamia)  
13. MANUAL DE DOCUMENTO DE IDENTIDAD Y PASAPORTE ELECTRÓNICO \- Nacionalidad.UY, [https://www.nacionalidad.uy/downloads/DNIC-MANUAL-DE-DOCUMENTO-DE-IDENTIDAD-Y-PASAPORTE-ELECTRNICO-160119.pdf](https://www.nacionalidad.uy/downloads/DNIC-MANUAL-DE-DOCUMENTO-DE-IDENTIDAD-Y-PASAPORTE-ELECTRNICO-160119.pdf)