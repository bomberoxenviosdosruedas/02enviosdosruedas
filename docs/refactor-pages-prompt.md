# Prompt de Refactorización Visual para Páginas Restantes (Cotizar, Nosotros, Servicios)

Este prompt está diseñado para guiar de manera precisa a un agente de IA o a ti mismo para realizar la sustitución de colores y sombras en todos los archivos de componentes dentro de las carpetas `src/app/cotizar`, `src/app/nosotros`, `src/app/servicios` y componentes asociados, para que coincidan con la nueva paleta de colores de la marca establecida en [DESIGN.md](../../DESIGN.md).

---

## 🎨 Reglas Estéticas a Respetar
1.  **Reemplazo de Azul Antiguo:** Cambiar todas las sombras duras y referencias quemadas al color azul antiguo `#0636A5` por el nuevo azul corporativo `#003399`.
2.  **Reemplazo de Amarillo Antiguo:** Cambiar todas las sombras duras y referencias quemadas al amarillo antiguo `#FFEC01` por el nuevo amarillo de acento `#FFCC00`.
3.  **RGB equivalents (para rgba):**
    *   Cambiar `rgba(6, 54, 165, ...` por `rgba(0, 51, 153, ...`.
    *   Cambiar `rgba(255, 236, 1, ...` por `rgba(255, 204, 0, ...`.
4.  **Siluetas:** Conservar las curvas redondeadas suaves (`rounded-3xl`, `rounded-2xl`, etc.) de los componentes tal como están implementados actualmente.

---

## 📂 Archivos Identificados para Modificar

Aplica los cambios en los siguientes archivos y líneas de código donde se han detectado los valores quemados antiguos:

### 1. Páginas de Servicios (`src/app/servicios` y `src/components/servicios`)
*   **[src/app/servicios/envios-express/components/Header.tsx](../../src/app/servicios/envios-express/components/Header.tsx):**
    *   Línea 86: Reemplazar `stroke="#0636A5"` por `stroke="#003399"`.
    *   Línea 90: Reemplazar `fill="#0636A5"` por `fill="#003399"`.
    *   Línea 102: Reemplazar `fill="#0636A5"` por `fill="#003399"`.
*   **[src/app/servicios/envios-express/components/Hero.tsx](../../src/app/servicios/envios-express/components/Hero.tsx):**
    *   Línea 11: Reemplazar `bg-[#0636A5]/30` por `bg-[#003399]/30`.
*   **[src/components/servicios/emprendedores/EmprendedoresBenefits.tsx](../../src/components/servicios/emprendedores/EmprendedoresBenefits.tsx):**
    *   Línea 79: Reemplazar `shadow-[4px_4px_0px_#0636A5]` y `shadow-[2px_2px_0px_#0636A5]` por `#003399`.
    *   Línea 82: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
*   **[src/components/servicios/emprendedores/EmprendedoresFeatures.tsx](../../src/components/servicios/emprendedores/EmprendedoresFeatures.tsx):**
    *   Línea 81: Reemplazar `hover:shadow-[4px_4px_0px_#0636A5]` por `hover:shadow-[4px_4px_0px_#003399]`.

### 2. Páginas de Nosotros y Comunidad (`src/app/nosotros` y `src/components/nosotros`)
*   **[src/components/nosotros/nuestras-redes/NetworksBenefits.tsx](../../src/components/nosotros/nuestras-redes/NetworksBenefits.tsx):**
    *   Línea 76: Reemplazar `shadow-[4px_4px_0px_#0636A5]` y `shadow-[2px_2px_0px_#0636A5]` por `#003399`.
*   **[src/components/nosotros/nuestras-redes/NetworksChannels.tsx](../../src/components/nosotros/nuestras-redes/NetworksChannels.tsx):**
    *   Línea 78: Reemplazar `shadow-[4px_4px_0px_#0636A5]` por `shadow-[4px_4px_0px_#003399]`.
    *   Línea 140: Reemplazar `shadow-[6px_6px_0px_#0636A5]` y `shadow-[4px_4px_0px_#0636A5]` por `#003399`.
    *   Línea 174: Reemplazar `shadow-[4px_4px_0px_#0636A5]` por `shadow-[4px_4px_0px_#003399]`.
*   **[src/components/nosotros/nuestras-redes/NetworksHero.tsx](../../src/components/nosotros/nuestras-redes/NetworksHero.tsx):**
    *   Línea 78: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
*   **[src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx](../../src/components/nosotros/nuestras-redes/NewsletterSubscribe.tsx):**
    *   Línea 31: Reemplazar `shadow-[3px_3px_0px_#0636A5]` por `shadow-[3px_3px_0px_#003399]`.
    *   Línea 65: Reemplazar `focus:shadow-[2px_2px_0px_#0636A5]` por `focus:shadow-[2px_2px_0px_#003399]`.
    *   Línea 69: Reemplazar `shadow-[3px_3px_0px_#0636A5]` y `shadow-[1px_1px_0px_#0636A5]` por `#003399`.
*   **[src/components/nosotros/nuestras-redes/RecentPosts.tsx](../../src/components/nosotros/nuestras-redes/RecentPosts.tsx):**
    *   Línea 81: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
    *   Línea 104: Reemplazar `shadow-[4px_4px_0px_#0636A5]` y `shadow-[2px_2px_0px_#0636A5]` por `#003399`.
*   **[src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx](../../src/components/nosotros/preguntas-frecuentes/FaqAccordion.tsx):**
    *   Línea 94: Reemplazar `shadow-[4px_4px_0px_#0636A5]` por `shadow-[4px_4px_0px_#003399]`.
    *   Línea 95: Reemplazar `hover:shadow-[3px_3px_0px_#0636A5]` por `hover:shadow-[3px_3px_0px_#003399]`.
    *   Línea 124: Reemplazar `hover:shadow-[4px_4px_0px_#0636A5]` por `hover:shadow-[4px_4px_0px_#003399]`.
*   **[src/components/nosotros/preguntas-frecuentes/FaqCta.tsx](../../src/components/nosotros/preguntas-frecuentes/FaqCta.tsx):**
    *   Línea 55 y 64: Reemplazar `shadow-[4px_4px_0px_#0636A5]` y `shadow-[2px_2px_0px_#0636A5]` por `#003399`.
*   **[src/components/nosotros/preguntas-frecuentes/FaqHero.tsx](../../src/components/nosotros/preguntas-frecuentes/FaqHero.tsx):**
    *   Línea 78: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
*   **[src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx](../../src/components/nosotros/sobre-nosotros/AboutAdvantages.tsx):**
    *   Líneas 29, 50, 100 y 116: Reemplazar `shadow-[..._#0636A5]` por `#003399`.
*   **[src/components/nosotros/sobre-nosotros/AboutHero.tsx](../../src/components/nosotros/sobre-nosotros/AboutHero.tsx):**
    *   Línea 78: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
*   **[src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx](../../src/components/nosotros/sobre-nosotros/AboutMissionVision.tsx):**
    *   Líneas 30 y 79: Reemplazar `shadow-[..._#0636A5]` por `#003399`.
*   **[src/components/nosotros/sobre-nosotros/AboutTeam.tsx](../../src/components/nosotros/sobre-nosotros/AboutTeam.tsx):**
    *   Línea 76: Reemplazar `shadow-[..._#0636A5]` por `#003399`.
*   **[src/components/nosotros/sobre-nosotros/AboutTimeline.tsx](../../src/components/nosotros/sobre-nosotros/AboutTimeline.tsx):**
    *   Líneas 71 y 119: Reemplazar `shadow-[..._#0636A5]` por `#003399`.
*   **[src/components/nosotros/sobre-nosotros/AboutValues.tsx](../../src/components/nosotros/sobre-nosotros/AboutValues.tsx):**
    *   Línea 67: Reemplazar `shadow-[..._#0636A5]` por `#003399`.

### 3. Componentes Compartidos Adicionales
*   **[src/components/layout/Carrusel-Redes.tsx](../../src/components/layout/Carrusel-Redes.tsx):**
    *   Líneas 89, 102, 126 y 145: Reemplazar `shadow-[..._#0636A5]` por `#003399`. Reemplazar `#FFEC01` por `#FFCC00`.
*   **[src/components/layout/CarruselRedes.tsx](../../src/components/layout/CarruselRedes.tsx):**
    *   Línea 62: Reemplazar `shadow-[2px_2px_0px_#0636A5]` por `shadow-[2px_2px_0px_#003399]`.
