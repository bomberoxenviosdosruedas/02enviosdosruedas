# 🤖 Reglas del Proyecto para Agentes de IA (AGENTS.md)

Este archivo define las reglas de comportamiento, convenciones de código y principios de diseño específicos para cualquier agente que trabaje en el repositorio de **Envíos Dos Ruedas**.

---

## 📌 Contexto General del Proyecto
*   **Proyecto:** Envíos Dos Ruedas (Logística de última milla, mensajería y soluciones E-Commerce).
*   **Ubicación Principal:** Mar del Plata, Argentina.
*   **Dominio Técnico:** Logística local Same-Day, integraciones de MercadoLibre Flex, y ruteo LowCost.
*   **Estructura del Código:**
    *   `src/app/`: Rutas de la aplicación (Next.js App Router).
    *   `src/app/cotizar/`: Vistas y flujos de cotización (Express y LowCost).
    *   `src/app/servicios/`: Detalles de servicios (Express, LowCost, Flex, 3PL).
    *   `src/components/`: Componentes modulares y reutilizables.
    *   `docs/`: Documentación del proyecto (diagramas de mapas, guías de prompts, contenido de páginas).

---

## 🛠️ Reglas de Código y Arquitectura

1.  **TypeScript Estricto:** Todo el código nuevo debe estar escrito en TypeScript, evitando el uso de `any` siempre que sea posible.
2.  **Next.js App Router (React 19):**
    *   Usa componentes de servidor por defecto (`Server Components`).
    *   Usa la directiva `'use client'` al principio de los archivos solo cuando sea estrictamente necesario para interactivos (hooks como `useState`, `useEffect` o bibliotecas como `motion`).
3.  **Gestión de Dependencias:** Utiliza `pnpm` para todas las operaciones de instalación y ejecución.

---

## 🎨 Reglas de Estilo CSS y UI (Tailwind CSS v4)

1.  **Uso del Sistema de Temas:**
    *   No utilices colores en formato Hex o Tailwind genérico ad-hoc en los componentes si existen variables oficiales.
    *   **Azul Principal:** Usa `bg-brand-blue` o `text-brand-blue` (refiere a `#0636A5`).
    *   **Amarillo Acento:** Usa `bg-brand-yellow` o `text-brand-yellow` (refiere a `#FFEC01`).
    *   **Neutros:** `slate-50` para fondos claros, `slate-900`/`slate-950` para fondos oscuros.
2.  **Sombras y Brillos:**
    *   Aplica efectos de brillo definidos en [globals.css](file:///E:/proyectos/02enviosdosruedashector/src/app/globals.css) como `glow-blue`, `glow-yellow`, `glow-blue-lg`, `glow-yellow-lg`.
    *   Utiliza las sombras de acento como `shadow-accent-sm`, `shadow-accent-md`, `shadow-accent-lg`.
3.  **Bordes y Formas:**
    *   Usa esquinas suaves y redondeadas preferentemente con `rounded-2xl` o `rounded-3xl` en tarjetas principales.
4.  **Tipografías del Sistema:**
    *   Usa `font-display` (Anton) para títulos principales (H1, H2 de gran tamaño).
    *   Usa `font-subheading` (Bebas Neue) para subtítulos rápidos, números destacados o badges.
    *   Usa `font-sans` (Inter) para textos descriptivos y cuerpo de la interfaz.

---

## 🗣️ Tono de Voz y Contenido

1.  **Modismos locales de Argentina:** Al redactar copys, botones, mensajes del chatbot o textos descriptivos para el usuario final, utiliza modismos locales (voseo): "Vos elegís", "Ingresá tus datos", "Contactanos", "Envíanos".
2.  **Contextualización:** El servicio se brinda exclusivamente en Mar del Plata. Haz mención a zonas locales ("Zona Güemes", "Centro de Distribución", "Constitución", "Puerto") en ejemplos o datos simulados.
3.  **Año de Referencia:** El año de vigencia operativa y de tarifas es **2026**.

---

## 📸 Reglas para Prompts de Imágenes (Nano Banana)

Al redactar o proponer prompts de imágenes para cualquier parte del proyecto, usa las siguientes dos estructuras oficiales de la skill:
1.  **Imagen Nueva (Sin Referencias):** `[Sujeto y descripción detallada] + [Estilo artístico/visual] + [Composición/Ángulo de cámara] + [Iluminación y atmósfera] + [Paleta de colores específica]`
2.  **Con Referencia (Logos, Personajes o Estilo):** `[Acción/Transformación] + [Referencia específica] + [Cambios o integración] + [Contexto del entorno] + [Consistencia de marca]`
