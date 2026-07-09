# Prompt para Google Stitch - Generador de DESIGN.md (Light & Dark Mode)

Este archivo contiene el prompt maestro altamente optimizado para ser ingresado en Google Stitch. Está diseñado para indicarle a la inteligencia artificial de Stitch cómo generar o reestructurar el archivo de documentación de diseño `DESIGN.md` de tu proyecto web, especificando las fichas técnicas, tokens, atmósfera visual y la consistencia entre los temas **Light** y **Dark**.

---

## Copiar y Pegar el Siguiente Prompt en Google Stitch:

```text
Actúa como un Ingeniero Principal de UI/UX y Director de Diseño. Tu tarea es analizar nuestro proyecto web actual y generar un archivo de especificación de sistema de diseño llamado `DESIGN.md`. Este archivo servirá como la única fuente de verdad (Single Source of Truth) para la UI de nuestra aplicación y debe contemplar de forma nativa e integrada tanto el tema claro (Light Mode) como el tema oscuro (Dark Mode).

El diseño debe sentirse sumamente premium, alejándose de cualquier plantilla genérica ("slop AI UI"). 

Sigue rigurosamente la siguiente estructura para el archivo DESIGN.md resultante:

---

# DESIGN.md - Sistema de Diseño Semántico

## 1. Atmósfera Visual y Densidad
- **Densidad:** Definir el nivel de compactación visual (ej. Balanza Diaria de la App 5/10, o Panel de Control Denso 8/10).
- **Asimetría/Varianza:** Forzar layouts asimétricos interesantes. Prohibir la típica estructura de "3 columnas idénticas".
- **Concepto:** Describir la atmósfera visual (ej. "Un estudio de arquitectura bien iluminado en el tema claro que transiciona a una cabina de control nocturna y minimalista en el tema oscuro").

## 2. Paletas de Colores Calibradas (Dual-Theme)
Define con códigos HEX exactos y nombres semánticos la paleta para ambos modos. No mezcles grises fríos con cálidos en la misma pantalla.
Máximo 1 color de acento principal. La saturación de este acento debe estar por debajo del 80%.

### Modo Claro (Light Mode)
- **Primary Canvas / Fondo Principal:** (Ej. Blanco suave o gris de baja saturación, ej. #F9FAFB)
- **Surface / Contenedores:** (Ej. Blanco puro para tarjetas elevadas, #FFFFFF)
- **Primary Text / Texto Principal:** (Ej. Charcoal profundo, Zinc-950, #18181B)
- **Muted Text / Texto Secundario:** (Ej. Gris medio o acero, #71717A)
- **Borders / Bordes sutiles:** (Ej. rgba/slate sutil de 1px)
- **Accent / Color de Acento:** (Ej. Azul corporativo calibrado)

### Modo Oscuro (Dark Mode)
- **Primary Canvas / Fondo Principal:** (Nunca uses negro absoluto #000000. Usa un Off-Black o Zinc-950, ej. #09090B o #0B0F19)
- **Surface / Contenedores:** (Ej. Slate-900 o negro carbón elevado con bordes sutiles, ej. #141824)
- **Primary Text / Texto Principal:** (Ej. Blanco tiza o gris muy claro, #F4F4F5)
- **Muted Text / Texto Secundario:** (Ej. Gris acero silenciado, #A1A1AA)
- **Borders / Bordes sutiles:** (Ej. Bordes oscuros y suaves, ej. rgba(255,255,255,0.08))
- **Accent / Color de Acento:** (El mismo acento calibrado o una variante adaptada con menor brillo pero alta legibilidad)

## 3. Arquitectura Tipográfica
- **Tipografía de Display (Títulos):** Forzar fuentes con carácter (como Satoshi, Outfit, Cabinet Grotesk, Anton o Bebas Neue) en lugar de la fuente genérica Inter. Deben usar track-tight y jerarquía mediante peso visual y contraste cromático.
- **Tipografía de Cuerpo (Body):** Fuentes altamente legibles con leading relajado y máximo 65 caracteres por línea.
- **Tipografía Mono (Códigos/Datos/Métricas):** Para números en dashboards, timestamps o identificadores.
- **Restricción de Serif:** Las fuentes serif genéricas están prohibidas. Si se requiere serif para propósitos editoriales, usar fuentes con personalidad (ej. Fraunces, Gambarino). Prohibir serif en interfaces de software o tableros de datos.

## 4. Estilos de Componentes y Estados de Interacción
Describe el comportamiento, bordes, sombras y micro-animaciones para ambos temas:
- **Botones:** Tacto reactivo (micro-desplazamiento de -1px en el eje Y al hacer click/tap). Sin brillos exteriores de neón artificiales.
- **Tarjetas/Cards:** Radio de esquinas pronunciado y suave (ej. rounded-3xl / 24px-32px). Sombras difusas y tintadas con el color del fondo (no sombras grises duras). En alta densidad de información, sustituir tarjetas por líneas divisorias superiores delgadas para evitar sobrecarga visual.
- **Inputs/Formularios:** Etiquetas siempre arriba, textos de ayuda u errores abajo. Anillo de enfoque con el color de acento calibrado.
- **Carga (Loaders):** Skeletal loaders que imiten las dimensiones exactas de la UI. Prohibidos los spinners circulares genéricos.

## 5. Principios de Layout y Adaptabilidad
- Prohibir elementos que colisionen o se superpongan de manera absoluta. Cada elemento debe habitar su zona espacial limpia.
- Diseño mobile-first estricto: colapsar grids a una sola columna por debajo de 768px.
- Evitar desbordamiento horizontal en pantallas móviles (es un fallo de diseño crítico).
- Usar variables dinámicas o clamps para espaciados y tamaños de fuentes.

## 6. Filosofía de Movimiento y Animación
- Configuración de Spring por defecto: `stiffness: 100, damping: 20` para una sensación de peso real y premium. Evitar transiciones lineales artificiales.
- Revelaciones con retraso escalonado (cascada) al cargar elementos en listas.
- Optimizar animaciones usando exclusivamente propiedades de `transform` y `opacity` aceleradas por hardware.

## 7. Lista Negra de Anti-Patrones (Restricciones Strict)
Define explícitamente en el archivo DESIGN.md que los siguientes elementos están TERMINANTEMENTE PROHIBIDOS:
- Prohibido el uso de emojis en títulos o botones profesionales.
- Prohibido el uso de la fuente 'Inter' para diseños creativos premium.
- Prohibido el color negro absoluto (#000000) en el lienzo general.
- Prohibido el uso de sombras brillantes o resplandores exteriores estilo neón ("AI Cyberpunk glow").
- Prohibida la generación de datos, métricas o estadísticas inventadas (ej. "99.9% Uptime", "15k Deploys"). Usar etiquetas claras de marcadores de posición ej. `[métrica]` si no hay datos reales disponibles.
- Prohibido el uso de modismos de copywriting trillados por IA ("Seamless", "Elevate", "Next-Gen", "Unleash").
- Prohibido el uso de enlaces de imágenes de Unsplash rotos o genéricos; usar recursos locales consolidados o placeholders SVG limpios.
```
