# **DESIGN.md**

## **1\. Concepto de Marca y Dirección Visual**

El ecosistema digital del Correo Oficial de la República Argentina S.A. se fundamenta en una interfaz visual que debe resolver una profunda dicotomía institucional: equilibrar la herencia de una entidad estatal con más de quinientos años de historia y la necesidad imperiosa de proyectar agilidad tecnológica en el competitivo mercado de la logística e-commerce1. La arquitectura de la experiencia de usuario (UX) y el diseño de la interfaz (UI) del sitio web operan como un manifiesto semiótico que materializa los valores fundamentales de la organización: confianza, honestidad, transparencia, identidad nacional y confidencialidad4.  
La esencia de la marca se encuentra indisolublemente ligada a su rol como "Correo de Bandera" y a su obligación legal de garantizar el Servicio Básico Universal (S.B.U.), lo que implica conectar todo el territorio nacional mediante una red que supera las 1.400 sucursales1. Históricamente, la institución ha atravesado múltiples transformaciones, desde la creación del "Correo Mayor de las Indias" en 1514, la conformación de la Empresa Nacional de Correos y Telégrafos (ENCOTEL) en 1972, su privatización en 1997, hasta su reestatización en 20031. Cada uno de estos hitos ha dejado una huella en su identidad visual. Los rediseños de la marca ejecutados en los años 2014, 2017 y 2020 han iterado sobre un mismo conjunto de símbolos fundacionales, alterando ocasionalmente la dominancia cromática, pero manteniendo un núcleo discursivo estable6.  
La dirección visual contemporánea se articula a través de cuatro elementos simbólicos que deben guiar cualquier refactorización del frontend. El primero es la evocación de la geografía y la naturaleza; en el ideario popular, la labor del correo ocurre "a la distancia y a la intemperie", lo que justifica una paleta cromática inspirada en el agua, el sol y el cielo5. El segundo elemento es el Sol y la Escarapela, que asoman en lo más alto del diseño como garantes de la soberanía estatal8. El tercero es la histórica cornamusa, un instrumento tradicionalmente utilizado por la mensajería y las diligencias para anunciar su llegada, que ha sido reinterpretado a lo largo de las décadas6. Finalmente, la identidad gráfica abraza el símbolo del "byte", una clara declaración de conectividad y transformación digital que soporta el eslogan principal de la plataforma: "Impulsando la logística inteligente"1.  
En términos de impresión psicológica, el diseño de la interfaz busca proyectar una síntesis entre sobriedad gubernamental y velocidad transaccional. La estructura del sitio, centrada en herramientas de acceso rápido como el widget de seguimiento de envíos o el buscador del Código Postal Argentino (CPA), prioriza la resolución de tareas1. Los usuarios que ingresan al portal, ya sean ciudadanos que buscan rastrear un Documento Nacional de Identidad (DNI) o pequeñas y medianas empresas que necesitan integrar la API de Paq.ar en sus plataformas de WooCommerce o VTEX, requieren una experiencia libre de fricciones cognitivas1. La UI comunica eficiencia mediante el uso de espacios en blanco amplios, delimitaciones claras entre componentes y una jerarquía de información rigurosa1.  
El tono de comunicación escrita, conocido como UX Writing, refuerza esta percepción de eficiencia y cercanía. La plataforma adopta un tono directivo, utilitario y profundamente centrado en la acción del usuario2. Se emplea sistemáticamente el voseo rioplatense en modo imperativo para guiar las interacciones, formulando llamados a la acción (CTAs) claros y concisos. Frases como "Conocé el estado de tu envío", "Descargá la APP", "Seleccioná el tipo de envío" o "Registrate en forma online" eliminan cualquier ambigüedad sobre la función de cada componente1. A nivel macro, este tono transaccional se suaviza con mensajes de anclaje emocional ubicados en espacios promocionales, tales como "Todo lo que das llega" o "Renovamos la ilusión", que conectan la logística pura con el impacto humano de la comunicación y el comercio1. El diseño de contenido asume que el usuario tiene poco tiempo y una tarea específica que cumplir, por lo que la redacción minimiza el ruido institucional en favor de la usabilidad directa12.

## **2\. Paleta de Colores (Design Tokens)**

La estrategia cromática del sitio web se erige sobre un sistema de altísimo contraste protagonizado por los colores azul y amarillo. A nivel conceptual, estos tonos han sido definidos por la propia marca como representaciones de la "inmensa geografía" nacional, evocando los colores del sol, el cielo y los elementos naturales a los que se enfrentan los trabajadores postales5. Desde un punto de vista técnico y de interfaz de usuario, la polaridad entre un color frío y profundo (azul) y un color cálido y expansivo (amarillo) proporciona un marco ideal para estructurar la información jerárquicamente, guiar la atención del usuario hacia puntos de conversión clave y mantener la coherencia a través de múltiples aplicaciones digitales, desde el portal principal hasta plataformas de autogestión como MiCorreo o integraciones B2B1.  
La evolución del logotipo ha experimentado oscilaciones en la dominancia de estos tonos; mientras que en ciertas etapas gubernamentales el amarillo ocupó el rol principal, la configuración actual y más estable para interfaces digitales asienta al azul como el pilar estructural que otorga peso y credibilidad institucional, reservando el amarillo para el acento visual y la herencia de la clásica cornamusa6.  
A partir de las pautas analizadas y las necesidades inherentes a una plataforma logística de escala nacional, se define el siguiente sistema de Design Tokens (Variables CSS) con sus valores hexadecimales (\#HEX) estimados, roles estructurales y proporciones de uso.

| Rol del Color en la UI | Token (Variable CSS) | HEX Estimado | Proporción | Descripción y Reglas de Aplicación |
| :---- | :---- | :---- | :---- | :---- |
| **Primario (Foco de Marca)** | \--color-primary-blue | \#0050A0 | 45% | Constituye la columna vertebral de la interfaz. Se aplica en el Navbar superior, el Footer institucional, y en tipografías de alta jerarquía (H1, H2). Transmite la sobriedad, seguridad y confiabilidad requeridas para una empresa estatal y logística1. |
| **Secundario (Soporte)** | \--color-brand-yellow | \#FFCD00 | 15% | Representa la herencia histórica de la cornamusa. Se utiliza para elementos gráficos de acento, isotipos, subrayados decorativos y para aportar energía visual a las tarjetas de servicios. Nunca debe usarse como fondo para textos blancos debido a problemas de accesibilidad7. |
| **Acento (Conversión)** | \--color-accent-blue | \#007BFF | 10% | Tono vibrante derivado del primario, destinado exclusivamente a la interacción. Se aplica en botones de Call to Action (CTA) primarios, estados :hover, selectores del widget de Tracking y enlaces de hipervínculo como "Leer más"1. |
| **Interacción Oscura** | \--color-accent-dark | \#003E7A | 5% | Utilizado para los estados :active o :hover de los botones primarios, proporcionando retroalimentación visual al hacer clic. Mantiene la legibilidad y ofrece sensación de profundidad1. |
| **Fondo Principal** | \--color-bg-light | \#F8F9FA | 15% | Gris neutro de altísima luminosidad empleado como lienzo general de la página. Reduce el deslumbramiento visual y permite que los contenedores blancos destaquen sutilmente1. |
| **Fondo Componentes** | \--color-surface-white | \#FFFFFF | Variable | Blanco puro. Se reserva para tarjetas de contenido (*cards*), modales, menús desplegables y el interior de los campos de entrada de texto (*inputs*)1. |
| **Texto Principal** | \--color-text-dark | \#212529 | Variable | Gris casi negro para maximizar el contraste y la legibilidad en cuerpos de texto prolongados, como términos y condiciones o normativas de envíos1. |
| **Texto Secundario** | \--color-text-muted | \#6C757D | Variable | Gris medio para información de menor jerarquía, como fechas de publicación de noticias, *placeholders* de formularios o avisos legales en el pie de página1. |

Para dar soporte a la densa capa transaccional del sitio, que incluye la cotización de tarifas, el seguimiento algorítmico de paquetes, la generación de etiquetas en formato PDF de 10x15 cm para impresoras Zebra, y la validación de identidades biométricas ante el RENAPER para el envío de Cartas Documento online, es imperativo establecer una paleta complementaria de colores de estado17.

| Estado del Sistema | Token (Variable CSS) | HEX Estimado | Aplicación Funcional Detectada |
| :---- | :---- | :---- | :---- |
| **Éxito (Success)** | \--color-status-success | \#28A745 | Confirmaciones de validación facial de RENAPER, notificaciones de envíos entregados, y pagos procesados exitosamente en la plataforma MiCorreo14. |
| **Alerta (Warning)** | \--color-status-warning | \#FFC107 | Advertencias sobre requisitos de embalaje, demoras operativas o limitaciones de peso volumétrico (por ejemplo, piezas que superan los 50 kg o 300 cm totales)14. |
| **Error (Danger)** | \--color-status-error | \#DC3545 | Códigos de seguimiento inválidos, errores en la integración de APIs con WooCommerce/VTEX, y alertas urgentes sobre sitios web fraudulentos bloqueados para prevenir estafas10. |

## **3\. Sistema Tipográfico**

El sistema tipográfico diseñado para el Correo Argentino responde a exigencias de orden altamente pragmático y de accesibilidad universal1. La interfaz debe presentar una cantidad sustancial de información técnica, que abarca desde tablas de costos logísticos y escalas de bonificaciones de colecta (*pickup*), hasta códigos alfanuméricos de rastreo de 15 o más caracteres y densos textos legales asociados al envío de telegramas14. En este contexto, las florituras tipográficas están descartadas en favor de familias sin remates (*sans-serif*) que ofrezcan una altura de la letra "x" generosa, amplios contadores internos y caracteres claramente diferenciables (como la 'I' mayúscula, la 'l' minúscula y el número '1') para prevenir errores en la lectura de identificadores de paquetes12.  
La estructura tipográfica se divide en dos grandes familias complementarias que orquestan la jerarquía de la información en toda la plataforma, desde los *hero banners* institucionales hasta los manuales de integración de la API Paq.ar1.

1. **Tipografía de Títulos (Headers): Montserrat** La familia Montserrat actúa como la voz institucional y direccional del sitio26. Su arquitectura geométrica pero robusta transmite la solidez esperada de un organismo de alcance nacional4. Se reserva estrictamente para títulos de alto impacto (H1), delimitadores de sección (H2) como "Novedades" o "Red Comercial", y para las llamadas a la acción promocionales1. En caso de requerir optimización estricta sin carga de recursos externos, las fuentes de respaldo (*fallbacks*) recomendadas son Trebuchet MS, Arial o genéricas sans-serif.  
2. **Tipografía de Cuerpo (Body & UI): Roboto o Open Sans** Para el contenido general, las descripciones de servicios, los formularios de alta de usuarios en MiCorreo y las políticas de envíos internacionales, se implementan fuentes de naturaleza neo-grotesca como Roboto u Open Sans1. Estas tipografías han sido diseñadas específicamente para maximizar la legibilidad en pantallas de baja resolución y en dispositivos móviles, un factor crítico dado que una vasta porción de los usuarios rastrea sus envíos o valida su identidad mediante escaneo de códigos QR a través de teléfonos celulares14. Como respaldo seguro del sistema se deben configurar San Francisco (para entornos Apple), Segoe UI (para Windows), Helvetica Neue, o Arial.

Para asegurar un ritmo vertical armónico y predecible, se ha extraído y estandarizado la siguiente escala tipográfica. Las medidas se basan en un sistema de unidades relativas (rem) considerando un tamaño base de raíz de 16 píxeles, lo que garantiza el respeto por las preferencias de accesibilidad del navegador del usuario12.

| Jerarquía | Propósito y Aplicación en la UI | Tamaño (rem/px) | Peso (Weight) | Interlineado (Line-height) |
| :---- | :---- | :---- | :---- | :---- |
| **H1** | Título principal de la marca y mensajes de gran escala en *hero banners* ("Correo Argentino")1. | 2.5rem (40px) | ExtraBold (800) | 1.2 (Tight) |
| **H2** | Encabezados de secciones estructurales mayores ("Novedades", "Servicios Postales")1. | 2.0rem (32px) | Bold (700) | 1.25 |
| **H3** | Subsecciones modulares, como áreas de descarga de aplicaciones móviles ("Para iOS", "Para Android")1. | 1.5rem (24px) | Medium (500) | 1.3 |
| **H4** | Etiquetas de instrucción funcional y *Call-to-Actions* secundarios ("Conocé el estado de tu envío")1. | 1.25rem (20px) | Medium (500) | 1.4 |
| **Body L** | Párrafos introductorios y *taglines* descriptivos ("Impulsando la logística inteligente")1. | 1.125rem (18px) | Regular (400) | 1.5 (Relaxed) |
| **Body** | Cuerpo de texto estándar, descripciones de tarjetas de servicios, noticias, términos de uso1. | 1.0rem (16px) | Regular (400) | 1.5 (Normal) |
| **UI Labels** | Identificadores de navegación, etiquetas de categorización en el *Footer* (**SERVICIOS**, **CONTACTO**)1. | 0.875rem (14px) | Bold (700) | 1.0 (None) |
| **Legal** | Textos legales diminutos, políticas de privacidad, leyendas de copyright e información del Webmaster1. | 0.75rem (12px) | Regular (400) | 1.4 |

## **4\. Componentes Visuales y Grilla (UI Components)**

La maquetación del portal del Correo Argentino se basa en una filosofía de diseño modular y de componentes reutilizables1. Este enfoque no solo simplifica el mantenimiento del código mediante la eventual parametrización en sistemas de gestión de contenido (CMS) como Drupal o integraciones con WordPress, sino que también establece patrones de comportamiento predecibles para el usuario, reduciendo el esfuerzo necesario para concretar conversiones clave, como realizar un seguimiento o cotizar un despacho de paquetería e-commerce1.  
El diseño se enmarca en un sistema fluido que prioriza la experiencia móvil (*Mobile First*), respondiendo a la realidad analítica de que la mayoría de los usuarios consulta el estado de sus envíos en movimiento12.

### **Estructura de la Grilla Responsive y Escala de Espaciado**

La estructura espacial subyacente se apoya en una cuadrícula CSS (Grid o Flexbox) de 12 columnas que se adapta dinámicamente según los puntos de interrupción (*breakpoints*) del dispositivo12. Esta grilla se combina con una escala sistemática de márgenes (margin) y rellenos (padding) basada en múltiplos de 4 y 8 píxeles.

| Breakpoint | Ancho del Viewport | Configuración de la Grilla Estructural | Comportamiento del Contenido y Espaciado |
| :---- | :---- | :---- | :---- |
| **Mobile** | \< 768px | 4 Columnas | Los elementos complejos como las tarjetas de "Acceso Rápido" se apilan verticalmente (flex-col). El menú principal se colapsa en un patrón tipo "hamburguesa". Márgenes laterales del contenedor fijados en 16px. |
| **Tablet** | 768px \- 1023px | 8 Columnas | Transición hacia disposiciones en bloques de 2x2. Las tarjetas de "Novedades" se muestran en pares. Márgenes laterales expandidos a 24px o 32px para mayor respiro visual. |
| **Desktop** | \>= 1024px | 12 Columnas | Despliegue total. La sección de herramientas exhibe un diseño horizontal de 5 columnas para "MiCorreo", "Envíos Internacionales", "Carta Documento", "Red Comercial", y "CPA"1. Ancho máximo del contenedor centrado (max-width: 1280px). |

### **Especificaciones de Componentes Interactivos Clave**

El ecosistema de la interfaz presenta componentes estandarizados que rigen la interacción del usuario1.

#### **1\. Módulo de Rastreo (Tracking Widget)**

Posicionado estratégicamente cerca del límite superior de la página, es el punto de mayor tráfico e importancia operativa bajo el encabezado *"Conocé el estado de tu envío"*1.

* **Contenedor Base:** Funciona como una isla visual con fondo blanco (--color-surface-white). Posee un radio de borde (*border-radius*) de 8px (0.5rem) que suaviza su presencia, complementado con una sombra estructural sutil (box-shadow: 0 4px 6px \-1px rgba(0, 0, 0, 0.1)) que lo eleva sobre el fondo grisáceo circundante, indicando claramente su interactividad1.  
* **Selector Desplegable:** Incluye un menú interactivo con la directiva *"Seleccioná el tipo de envío"*. Las opciones abarcan rutas nacionales e internacionales, documentación crítica como DNI y Pasaportes, e integraciones comerciales como MercadoLibre o Paquetería e-commerce1. A nivel de estilos, el estado :focus debe generar un anillo de contorno (ring) de color azul de acento (\#007BFF) de al menos 2px para asistir la navegación por teclado.  
* **Entradas de Texto (Inputs):** Los campos para ingresar los alfanuméricos deben presentar una altura sustancial de 48px para asegurar un área táctil óptima en pantallas capacitivas. El texto interior utiliza la tipografía Roboto en su variante base1.

#### **2\. Tarjetas de Acceso Rápido y Herramientas**

Ubicadas en una banda central prominente, actúan como portales directos hacia servicios de autogestión1.

* **Estructura y Composición:** Estas tarjetas, que alojan los accesos a *MiCorreo*, *Envíos Internacionales*, *Carta Documento*, *Red Comercial* y *Código Postal*, se diseñan en un eje vertical. La mitad superior presenta iconografía monocromática en azul o destacada en amarillo, seguida de un título en peso tipográfico Bold y una breve descripción funcional de una o dos líneas1.  
* **Interactividad:** Todo el contenedor de la tarjeta funciona como un área de clic continua (\<a\> o \<button\>).

#### **3\. Tarjetas de Novedades y Contenido (Cards)**

Enfocadas en diseminar información institucional, aperturas de sucursales u operativos electorales1.

* **Layout:** Cuentan con un bloque superior que actúa como máscara de recorte para imágenes representativas en formato 16:9, con un border-radius superior de 8px y bordes inferiores rectos para conectar con el cuerpo de texto1.  
* **Tipografía Interna:** Título en H4, seguido de una sinopsis controlada mediante técnicas de truncado de CSS (line-clamp-2 o line-clamp-3) para mantener la uniformidad de altura de todas las tarjetas en la grilla. Un hipervínculo inferior rotulado como "Leer más" sirve como ancla de conversión hacia el artículo completo1.

#### **4\. Elementos de Navegación Estructural (Navbar y Footer)**

* **Navbar (Barra de Navegación):** Se configura mediante una arquitectura de dos niveles. Un cinturón utilitario superior muy estrecho aloja atajos de altísima demanda (Búsqueda CPA, Sucursales, Telegramas). Inmediatamente debajo, la banda principal contiene el logotipo primario y la categorización de servicios pesados: *Electoral*, *Servicios* (que a su vez contiene submenús para Paquetería, Postal, Logística, etc.), y *Filatelia*1.  
* **Footer (Pie de Página):** Diseñado como un macro-contenedor expansivo, rompe visualmente con el resto de la página al emplear un color de fondo corporativo sólido, generalmente azul oscuro (\#003E7A). La información se distribuye en columnas robustas categorizadas tipográficamente en mayúsculas negritas: **SERVICIOS**, **HERRAMIENTAS**, **SERVICIOS ESPECIALES**, **REDES SOCIALES** y **CONTACTO**. Destaca prominentemente el número telefónico de atención ciudadana (0810 \- 777 \- 7787\)1.

#### **5\. Botones y Llamados a la Acción (CTA)**

* **Morfología:** Se recomienda el uso de botones con esquinas ligeramente redondeadas (border-radius de 4px o 6px), evitando geometrías excesivamente circulares tipo "píldora" que restarían sobriedad al contexto institucional1.  
* **Padding:** Mantienen proporciones áureas, típicamente utilizando dimensiones como padding-top/bottom: 12px y padding-left/right: 24px.  
* **Insignias Externas (Badges):** Para promover la aplicación móvil del correo, se utilizan estandarizadamente los botones institucionales de "Download on the App Store" para iOS y "Get it on Google Play" para Android, respetando las guías de estilo inviolables de ambas corporaciones1.

## **5\. Animaciones y Micro-interacciones**

En una plataforma centrada en operaciones de logística y gestión gubernamental, la filosofía de la animación debe ser estrictamente funcional. El movimiento no persigue el deleite visual ornamental, sino la retroalimentación cognitiva; cada animación existe para confirmar al usuario que su acción ha sido registrada por el sistema, o para enmascarar latencias inevitables en consultas a bases de datos masivas (como el cotizador de Paq.ar o el validador de identidades del RENAPER)12.  
El motor de animación se apoya enteramente en transiciones CSS (transition) para asegurar un alto rendimiento sin la carga de librerías de JavaScript externas. Se recomienda una curva de aceleración universal de tipo ease-in-out combinada con una duración conservadora de 200ms a 300ms (transition-duration), lo cual emula la inercia natural de objetos físicos y resulta cómodo para el ojo humano13.  
Para los botones universales y enlaces de conversión (como el de "Leer más" o "Cotizar"), la micro-interacción primaria es un cambio sutil de opacidad o una oscurecimiento de fondo. Al aplicar el seudocódigo :hover, el azul brillante de acento transiciona gradualmente hacia un azul marino profundo (--color-accent-dark), comunicando disponibilidad interactiva1. En los elementos tipo tarjeta, como la cuadrícula de accesos directos, el comportamiento :hover desencadena una percepción de elevación tridimensional: la propiedad box-shadow se incrementa hacia una sombra media (shadow-md en el léxico de utilitarios), acompañada de un tenue desplazamiento sobre el eje vertical, expresado como transform: translateY(-4px)1.  
Los menús de navegación desplegables o submenús que emergen bajo ítems como "Servicios" o "Filatelia" evitan cortes abruptos1. Se prescriben entradas mediante una alteración simultánea de la opacidad (de 0 a 1\) y de desplazamiento (translateY(10px) a 0), creando el efecto visual de un panel que "cae" suavemente en su posición de lectura. Finalmente, los grandes carruseles de promoción, que exhiben comunicaciones como "Impulsando la logística inteligente", demandan transiciones horizontales fluidas basadas en funciones lineales, asegurando tiempos mínimos de permanencia estática en pantalla de cinco a siete segundos para permitir la lectura sin estrés cognitivo1.

## **6\. Pautas de Accesibilidad (a11y) y Rendimiento**

La naturaleza del Correo Argentino, atado a marcos normativos de inclusión y a la provisión de servicios universales que abarcan a toda la demografía del país, hace que la adherencia a estándares de accesibilidad visual y operabilidad digital no sea opcional, sino un imperativo de diseño1. La interfaz debe ser plenamente funcional según las pautas de Accesibilidad al Contenido en la Web (WCAG 2.1), alcanzando idealmente un nivel de conformidad AA12.  
En materia de contraste cromático, todas las cadenas de texto regulares deben exhibir un índice de luminancia mínimo de 4.5:1 respecto a su color de fondo subyacente. Para textos de gran dimensión (tipografías H1, H2), la exigencia se flexibiliza marginalmente a un ratio de 3:112. Una aplicación técnica crítica derivada de esta regla es la prohibición rotunda de superponer textos blancos sobre fondos que utilicen el amarillo corporativo de la marca (\#FFCD00); cualquier elemento interactivo o rótulo situado sobre un bloque amarillo debe estar obligatoriamente renderizado en gris oscuro (\#212529) o negro para garantizar la correcta discriminación visual por parte de usuarios con agudeza reducida o aquellos que utilizan monitores de baja calidad7. Adicionalmente, el diseño asume la obligación de facilitar la navegación a través de dispositivos de entrada alternativos al ratón, estipulando delineados visibles (outlines de al menos 2px) que enmarquen los elementos durante su estado :focus-visible, y la provisión exhaustiva de atributos aria-label para campos de entrada de formularios que no posean etiquetas textuales explícitas contiguas1.  
Desde la perspectiva del rendimiento web y la optimización para motores de búsqueda (SEO y Web Core Vitals), la velocidad de carga o Largest Contentful Paint (LCP) es primordial12. Un tiempo de pintura elevado frustra a usuarios móviles que dependen de redes de datos 3G/4G inestables en territorios distantes. Para mitigar esta latencia, la iconografía estructural del sitio —como la representación de la cornamusa, el sol, los logotipos vectoriales de las tarjetas de servicios y la propia marca institucional— debe inyectarse directamente en el árbol del documento de hipertexto como gráficos vectoriales escalables (SVG inline). Esta decisión técnica elimina penalizaciones por peticiones HTTP adicionales, permite el renderizado matemáticamente perfecto en pantallas de alta densidad de píxeles (Retina) y habilita la manipulación semántica del color utilizando la propiedad CSS fill: currentColor8.  
Para los componentes rasterizados, como las fotografías de los carruseles principales y las miniaturas de previsualización que acompañan los artículos periodísticos en la sección de Novedades, la directriz técnica exige el uso de formatos de compresión de última generación, primordialmente WebP o AVIF1. Asimismo, el maquetado debe incluir invariablemente los atributos de dimensión absoluta (width y height) en cada etiqueta \<img\> para reservar el espacio físico en el lienzo previo a la descarga del archivo, erradicando los reacomodamientos repentinos del diseño conocidos como Cumulative Layout Shift (CLS), un factor que erosiona gravemente la experiencia de uso12.

## **7\. Código de Configuración de Estilos (Tailwind CSS Config)**

Para garantizar la viabilidad técnica, la escalabilidad del sistema de diseño y la estricta alineación con el análisis precedente, se provee el siguiente archivo de configuración maestro. Este fragmento de código JavaScript está diseñado para inyectarse directamente como extensión del archivo tailwind.config.js en proyectos modernos10. El mismo codifica y formaliza la paleta de colores institucionales estimada, las familias tipográficas detectadas para una legibilidad transaccional óptima, los radios de curvatura institucionales y las lógicas de sombreado que estructuran los componentes.

JavaScript  
/\*\*   
 \* Configuración maestra de Tailwind CSS para la recreación del entorno   
 \* UI/UX del Correo Argentino.  
 \* @type {import('tailwindcss').Config}   
 \*/  
module.exports \= {  
  content: \[  
    "./src/\*\*/\*.{html,js,jsx,ts,tsx,vue}",  
    "./public/index.html"  
  \],  
  theme: {  
    extend: {  
      colors: {  
        /\*  
         \* Paleta Corporativa de Correo Argentino  
         \* Derivada de los tonos de la inmensa geografía (cielo, agua, sol)  
         \* y la herencia histórica de la cornamusa.  
         \*/  
        brand: {  
          blue: {  
            DEFAULT: '\#0050A0', // Azul Institucional Estructural (Navbar, Footer, Títulos mayores)  
            light: '\#3373B3',  
            dark: '\#003E7A',    // Azul profundo para hover y estados activos  
          },  
          yellow: {  
            DEFAULT: '\#FFCD00', // Amarillo de acento y soporte (Símbolos, subrayados)  
            light: '\#FFD733',  
            dark: '\#E6B800',  
          }  
        },  
        /\*  
         \* Sistema de Notificaciones de Logística y Estado (Paq.ar / MiCorreo)  
         \*/  
        status: {  
          success: '\#28A745', // Validaciones de identidad RENAPER, envíos entregados  
          warning: '\#FFC107', // Alertas de sobrepeso, demoras logísticas  
          error: '\#DC3545',   // Códigos postales no encontrados, errores transaccionales  
          info: '\#17A2B8',  
        },  
        /\*  
         \* Escala Monocromática para Textos, Contraste y Lienzos de Componentes  
         \*/  
        neutral: {  
          50: '\#F8F9FA',  // Lienzo general de la página (bajo impacto visual)  
          100: '\#F1F3F5', // Superficies modales  
          200: '\#E9ECEF', // Bordes divisorios sutiles  
          400: '\#CED4DA', // Placeholders en inputs de Tracking y formularios  
          600: '\#6C757D', // Soporte secundario, textos de baja jerarquía  
          800: '\#343A40', // Encabezados secundarios  
          900: '\#212529', // Texto corporal primario (garantiza ratio WCAG \> 4.5:1)  
        }  
      },  
      fontFamily: {  
        /\*  
         \* Jerarquía tipográfica corporativa  
         \*/  
        display: \['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'\],  
        // Roboto optimizado para números de seguimiento y alta densidad de datos  
        body: \['Roboto', 'Open Sans', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'\],  
      },  
      boxShadow: {  
        /\*  
         \* Sistema de elevación funcional y retroalimentación cognitiva  
         \*/  
        'card': '0 4px 6px \-1px rgba(0, 0, 0, 0.1), 0 2px 4px \-1px rgba(0, 0, 0, 0.06)',  
        'card-hover': '0 10px 15px \-3px rgba(0, 0, 0, 0.1), 0 4px 6px \-2px rgba(0, 0, 0, 0.05)',  
        'dropdown': '0 10px 25px \-5px rgba(0, 0, 0, 0.15), 0 8px 10px \-6px rgba(0, 0, 0, 0.1)',  
        'inner-input': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',  
      },  
      borderRadius: {  
        /\*  
         \* Geometría institucional moderada  
         \*/  
        'sm': '0.25rem', // 4px \- Empleado en botones de conversión, transmite rigidez estatal  
        'md': '0.5rem',  // 8px \- Estándar para tarjetas de novedades y contenedor de Tracking  
        'lg': '0.75rem', // 12px \- Excepcional para contenedores flotantes macro  
      },  
      transitionDuration: {  
        '250': '250ms', // Escala de tiempo para mitigar la fricción interactiva  
      },  
      transitionTimingFunction: {  
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)', // Interpolación orgánica (ease-in-out moderno)  
      }  
    },  
  },  
  plugins: \[  
    /\*  
     \* Módulos oficiales recomendados para gestionar la complejidad tipográfica  
     \* y los estilos predeterminados de formularios transaccionales.  
     \*/  
    require('@tailwindcss/forms'),  
    require('@tailwindcss/typography'),  
    require('@tailwindcss/line-clamp')  
  \],  
}

#### **Obras citadas**

1. Correo Argentino |, [https://www.correoargentino.com.ar/](https://www.correoargentino.com.ar/)  
2. Portal para Desarrolladores \- Correo Argentino |, [https://tintegraciones.correoargentino.com.ar/](https://tintegraciones.correoargentino.com.ar/)  
3. Caso de estudio: Correo Argentino \- Drupal Soul, [https://drupalsoul.com/caso-de-estudio-correo-argentino](https://drupalsoul.com/caso-de-estudio-correo-argentino)  
4. Código de Ética \- Correo Argentino |, [https://www.correoargentino.com.ar/sites/default/files/co-oo-006\_1.pdf](https://www.correoargentino.com.ar/sites/default/files/co-oo-006_1.pdf)  
5. Correo Argentino. \- FBDI, [https://www.estudiofbdi.com/detail/correo-argentino-184](https://www.estudiofbdi.com/detail/correo-argentino-184)  
6. Correo Argentino Nueva "identidad" (logo, marca) \- YouTube, [https://www.youtube.com/watch?v=aMibYLD4pTw](https://www.youtube.com/watch?v=aMibYLD4pTw)  
7. Historia del logo Correo Argentino \- Guía Impresión, [https://guiaimpresion.com/historia-del-logo-correo-argentino/](https://guiaimpresion.com/historia-del-logo-correo-argentino/)  
8. Renovamos nuestra imagen \- Correo Argentino |, [https://www.correoargentino.com.ar/prensa/video/renovamos-nuestra-imagen](https://www.correoargentino.com.ar/prensa/video/renovamos-nuestra-imagen)  
9. MiCorreo \- Correo Argentino |, [https://www.correoargentino.com.ar/MiCorreo/public/files/manual-usuario-plugin-para-woocommerce-v5.pdf](https://www.correoargentino.com.ar/MiCorreo/public/files/manual-usuario-plugin-para-woocommerce-v5.pdf)  
10. aplicación de Correo Argentino para VTEX, [https://www.correoargentino.com.ar/MiCorreo/public/img/pag/Modulo-de-Correo-Argentino-para-Vitex.pdf](https://www.correoargentino.com.ar/MiCorreo/public/img/pag/Modulo-de-Correo-Argentino-para-Vitex.pdf)  
11. correo argentino \- Wanderlust Codes, [https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/07/Copy-of-WANDERLUST-CORREO-ARGENTINO-nuevo.pdf](https://shop.wanderlust-webdesign.com/wp-content/uploads/2024/07/Copy-of-WANDERLUST-CORREO-ARGENTINO-nuevo.pdf)  
12. Diseño UX/UI y Desarrollo Web \- AB Project, [https://www.abproject.com.ar/servicios/desarrollo-web](https://www.abproject.com.ar/servicios/desarrollo-web)  
13. Variables en CSS: La función var() \- Elementor, [https://elementor.com/blog/es/variables-en-css-la-funcion-var/](https://elementor.com/blog/es/variables-en-css-la-funcion-var/)  
14. MiCorreo \- Correo Argentino |, [https://www.correoargentino.com.ar/MiCorreo/public/faqs](https://www.correoargentino.com.ar/MiCorreo/public/faqs)  
15. Variables CSS \- CSS en español, [https://lenguajecss.com/css/variables-css/css-custom-properties/](https://lenguajecss.com/css/variables-css/css-custom-properties/)  
16. Propiedades personalizadas (--\*): variables CSS \- MDN Web Docs, [https://developer.mozilla.org/es/docs/Web/CSS/Reference/Properties/--\*](https://developer.mozilla.org/es/docs/Web/CSS/Reference/Properties/--*)  
17. Ya se pueden enviar telegramas y cartas documento online: cómo es el procedimiento, [https://www.lmneuquen.com/pais/ya-se-pueden-enviar-telegramas-y-cartas-documento-online-como-es-el-procedimiento-n1160196](https://www.lmneuquen.com/pais/ya-se-pueden-enviar-telegramas-y-cartas-documento-online-como-es-el-procedimiento-n1160196)  
18. MANUAL SIE PERSONAS, [https://sie.correoargentino.com.ar/storage/Manual\_Sie\_Persona\_2024.pdf](https://sie.correoargentino.com.ar/storage/Manual_Sie_Persona_2024.pdf)  
19. Etiqueta de Envío Correo Argentino: Cómo Generarla y Pegarla Correctamente, [https://correoargentinopro.com/blog/etiqueta-envio-correo-argentino.html](https://correoargentinopro.com/blog/etiqueta-envio-correo-argentino.html)  
20. Cuánto Cuesta Enviar un Paquete por Correo Argentino en 2026, [https://correoargentinopro.com/blog/cuanto-cuesta-enviar-paquete-correo-argentino.html](https://correoargentinopro.com/blog/cuanto-cuesta-enviar-paquete-correo-argentino.html)  
21. MANUAL SIE EMPRESAS, [https://sie.correoargentino.com.ar/storage/Manual\_Sie\_Empresa\_2025.pdf](https://sie.correoargentino.com.ar/storage/Manual_Sie_Empresa_2025.pdf)  
22. Correo Argentino bloqueó sitio web falso para prevenir estafas virtuales, [https://www.correoargentino.com.ar/correo-argentino-bloqueo-sitio-web-falso-para-prevenir-estafas-virtuales](https://www.correoargentino.com.ar/correo-argentino-bloqueo-sitio-web-falso-para-prevenir-estafas-virtuales)  
23. TEXTO ORIGINAL \- Resolución 353 / 2022 \- MINISTERIO DE LAS MUJERES, GENEROS Y DIVERSIDAD, [https://www.argentina.gob.ar/normativa/nacional/norma-367059/texto](https://www.argentina.gob.ar/normativa/nacional/norma-367059/texto)  
24. Códigos postales de Argentina \- GitHub, [https://gist.github.com/lucasvazq/c4723278d94d868b0a16bb9861058506](https://gist.github.com/lucasvazq/c4723278d94d868b0a16bb9861058506)  
25. Correo Argentino Odoo App \- Pasarelas de Pagos, [https://www.pasarelasdepagos.com/shop/global/odoo-apps/correo-argentino-odoo-app/](https://www.pasarelasdepagos.com/shop/global/odoo-apps/correo-argentino-odoo-app/)  
26. Correo Argentino presenta una emisión postal para conmemorar a Médicos Sin Fronteras, [https://www.msf.org.ar/actualidad/correo-argentino-presenta-una-emision-postal-para-conmemorar-a-medicos-sin-fronteras/](https://www.msf.org.ar/actualidad/correo-argentino-presenta-una-emision-postal-para-conmemorar-a-medicos-sin-fronteras/)  
27. Agencia de diseño UX/UI en Argentina \- Uxion Agency, [https://www.uxionagency.com/servicios/agencia-diseno-ux-ui](https://www.uxionagency.com/servicios/agencia-diseno-ux-ui)  
28. Las Variables de SCSS Color \- HTML Color Codes, [https://htmlcolorcodes.com/es/blog/las-variables-de-scss-color/](https://htmlcolorcodes.com/es/blog/las-variables-de-scss-color/)  
29. Correo Argentino \- Apps en Google Play, [https://play.google.com/store/apps/details?id=com.correo.argentino\&hl=es\_AR](https://play.google.com/store/apps/details?id=com.correo.argentino&hl=es_AR)