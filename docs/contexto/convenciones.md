# Convenciones

## Estilos y Tailwind CSS v4
*   **Tema Centralizado:** Se deben utilizar siempre variables del sistema de diseño (e.g., `bg-brand-blue`, `text-brand-yellow`).
*   **Colores Prohibidos:** No se deben utilizar valores hexadecimales ad-hoc en las clases de Tailwind, a menos que sea en Canvas o SVGs nativos.
*   **Diseño Neo-Brutalista y Premium:**
    *   Bordes y Formas: Esquinas suaves con `rounded-2xl` o `rounded-3xl` en tarjetas principales.
    *   Resplandores: Utilizar efectos como `glow-blue`, `glow-yellow`, `glow-blue-lg`.
    *   Sombras de Acento: `shadow-accent-sm`, `shadow-accent-md`, etc.
    *   Glassmorphism: Utilizar fondos semi-transparentes y bordes sutiles.

## Tipografía y Naming
*   **Tipografía de Impacto:**
    *   `font-display` (Anton): Para títulos principales (`h1`, `h2`) estilo señalización vial.
    *   `font-subheading` (Bebas Neue): Para subtítulos rápidos, números y badges.
    *   `font-sans` (Inter): Para el cuerpo y textos descriptivos.
*   **TypeScript Estricto:** Obligatorio. Se prohíbe el uso de `any` siempre que sea posible.

## Componentes y Next.js
*   **Server Components:** Todo componente es por defecto de servidor.
*   **Client Components:** El uso de la directiva `'use client'` se reserva únicamente cuando sea estrictamente necesario para interactivos (hooks de React o bibliotecas como `motion`).

## Tono de Voz y Contenido
*   **Voseo Rioplatense:** Uso estricto de modismos locales de Argentina en todos los copys de la interfaz y respuestas al usuario final (e.g., "Ingresá tus datos", "Contactanos").
*   **Geolocalización:** El servicio aplica exclusivamente a **Mar del Plata**. Los textos simulados deben incluir zonas como "Zona Güemes", "Puerto", etc.
*   **Año de Vigencia:** Todas las referencias temporales a tarifas y operaciones deben indicar el año **2026**.

## Prompts de Imágenes
*   Las indicaciones para imágenes generadas deben seguir estructuras estandarizadas listadas en `AGENTS.md` (e.g., `[Sujeto...] + [Estilo...] + [Composición...]`).

## Tests y Commits
*   **Tests:** [PENDIENTE: No existen convenciones ni configuración de pruebas documentada o implementada].
*   **Commits:** Los commits recientes en el registro sugieren el uso de formato estilo *Conventional Commits* (ej. `feat: ...`), pero [PENDIENTE: No está estrictamente definido en un documento normativo].
