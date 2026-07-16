# 📚 SKILLS.md — Índice de Skills del Proyecto

Catálogo completo de todos los skills disponibles en `.agents/skills/`.
Organizado por categoría. Leer antes de iniciar una tarea para elegir el skill correcto.

> **Ubicación de los skills:** `.agents/skills/<nombre>/SKILL.md`

---

## 🏍️ Skills Propios del Proyecto (DosRuedas)

Estos 4 skills son específicos de Envíos DosRuedas. Son los más importantes y deben consultarse primero.

| Skill | Cuándo usarlo |
|---|---|
| **[dos-ruedas-maestro](.agents/skills/dos-ruedas-maestro/SKILL.md)** | Reglas del negocio: horarios (09–18 hs), cortes logísticos (13 hs LowCost, 15 hs Flex), tarifas 2026, tono de voz, voseo rioplatense, consignas de marca. Leer antes de escribir cualquier copy o lógica de negocio. |
| **[dos-ruedas-ui-ux](.agents/skills/dos-ruedas-ui-ux/SKILL.md)** | Contratos de interfaz: tokens de Tailwind (`bg-brand-blue`, `text-brand-yellow`), patrón double-bezel, botones `cta-nested-pill`, gradientes en fondos oscuros, efectos glow/sombras. Leer antes de crear o modificar cualquier componente visual. |
| **[dos-ruedas-prompter](.agents/skills/dos-ruedas-prompter/SKILL.md)** | Generación de prompts de imágenes de marca — cubre Nano Banana MCP y Google Flows. Estructura de 5 partes obligatoria. Paleta Egyptian Blue + Sunbeam Yellow. Contexto Mar del Plata. |
| **[dos-ruedas-verify](.agents/skills/dos-ruedas-verify/SKILL.md)** | Checklist pre-ship por criticidad (🔴🟠🟡🟢). Verificar precios, tokens UI, lint, build, tests y commits antes de hacer merge o deploy. |

---

## 🎨 Diseño Visual y UI/UX

Skills para diseño de interfaces, sistemas de diseño y estética visual.

| Skill | Cuándo usarlo |
|---|---|
| **[design-md](.agents/skills/design-md/SKILL.md)** | Analizar proyectos Stitch y sintetizar el sistema de diseño en archivos `DESIGN.md`. Usar cuando se necesita documentar formalmente el design system. |
| **[design-taste-frontend](.agents/skills/design-taste-frontend/SKILL.md)** | Sistema de diseño semántico premium para Stitch — tipografía estricta, color calibrado, layouts asimétricos, micro-motion. |
| **[design-taste-frontend-v1](.agents/skills/design-taste-frontend-v1/SKILL.md)** | Versión anterior de `design-taste-frontend`. Usar solo si se necesita compatibilidad con proyectos Stitch más antiguos. |
| **[taste-design](.agents/skills/taste-design/SKILL.md)** | Sistema de diseño semántico para Stitch. Genera `DESIGN.md` con estándares premium anti-genéricos. |
| **[ui-ux-designer](.agents/skills/ui-ux-designer/SKILL.md)** | Diseño de interfaces, wireframes y design systems. Investigación de usuario, accesibilidad y herramientas de diseño. |
| **[ui-ux-pro-max](.agents/skills/ui-ux-pro-max/SKILL.md)** | UI/UX avanzado: 50+ estilos, 161 paletas, 57 pairings tipográficos, 161 tipos de producto, 99 guías UX. Soporta React, Next.js, Tailwind, shadcn/ui, Flutter y más. |
| **[frontend-design](.agents/skills/frontend-design/SKILL.md)** | Diseño frontend premium para web — composición, color, tipografía, responsive. |
| **[high-end-visual-design](.agents/skills/high-end-visual-design/SKILL.md)** | Estándares de diseño visual de alto nivel. Eleva la calidad visual de interfaces a nivel premium. |
| **[industrial-brutalist-ui](.agents/skills/industrial-brutalist-ui/SKILL.md)** | Interfaces mecánicas y brutales: tipografía suiza, terminales militares, grillas rígidas, degradación analógica. Para dashboards o portfolios que necesitan sentirse como planos clasificados. |
| **[minimalist-ui](.agents/skills/minimalist-ui/SKILL.md)** | Interfaces editoriales limpias: paleta monochrome cálida, contraste tipográfico, bento grids, pasteles apagados. Sin gradientes ni sombras pesadas. |
| **[3d-web-experience](.agents/skills/3d-web-experience/SKILL.md)** | Experiencias web 3D interactivas — WebGL, Three.js, efectos de profundidad y animaciones espaciales. |
| **[canvas-design](.agents/skills/canvas-design/SKILL.md)** | Diseño y renderizado en Canvas HTML5 — gráficos vectoriales, animaciones custom, visualizaciones 2D. |
| **[gpt-taste](.agents/skills/gpt-taste/SKILL.md)** | Criterio estético de diseño — evalúa y mejora el gusto visual de interfaces generadas por IA. |

---

## 📸 Generación de Imágenes

Skills para crear prompts y assets visuales con IA.

| Skill | Cuándo usarlo |
|---|---|
| **[nano-banana-prompter](.agents/skills/nano-banana-prompter/SKILL.md)** | Prompts optimizados para modelos Nano Banana con identidad de marca DosRuedas. *(Nota: el skill `dos-ruedas-prompter` lo supera y unifica — preferir ese.)* |
| **[nano-banana-pro-prompts-recommend-skill](.agents/skills/nano-banana-pro-prompts-recommend-skill/SKILL.md)** | Recomendador de prompts pro para Nano Banana — sugiere la estructura y el estilo óptimos según el tipo de imagen. |
| **[imagegen-frontend-web](.agents/skills/imagegen-frontend-web/SKILL.md)** | Genera referencias visuales premium para sitios web. Produce **una imagen por sección** del sitio — landing page con 8 secciones = 8 imágenes. Para marketing sites y producto comps. |
| **[imagegen-frontend-mobile](.agents/skills/imagegen-frontend-mobile/SKILL.md)** | Genera conceptos de pantallas para apps móviles (iOS, Android, cross-platform). Incluye mockups con frame de iPhone. Genera imágenes, no código. |
| **[image-to-code](.agents/skills/image-to-code/SKILL.md)** | Convierte imágenes o mockups de diseño en código de componentes React/Tailwind. Útil para implementar diseños de Stitch. |
| **[enhance-prompt](.agents/skills/enhance-prompt/SKILL.md)** | Mejora y refina prompts de texto — útil antes de pasar un prompt a cualquier modelo de imagen o de lenguaje. |

---

## 🎬 Stitch — Design System y Prototipado

Skills para trabajar con Google Stitch en la generación y gestión del design system.

| Skill | Cuándo usarlo |
|---|---|
| **[stitch-loop](.agents/skills/stitch-loop/SKILL.md)** | Construir sitios web iterativamente con Stitch usando el patrón de loop autónomo (baton-passing). Flujo principal de trabajo con Stitch. |
| **[stitch-generate-design](.agents/skills/stitch-generate-design/SKILL.md)** | Generar un diseño nuevo en Stitch desde cero o desde una descripción. |
| **[stitch-extract-design-md](.agents/skills/stitch-extract-design-md/SKILL.md)** | Extraer el design system de un proyecto Stitch y guardarlo como `DESIGN.md`. |
| **[stitch-extract-static-html](.agents/skills/stitch-extract-static-html/SKILL.md)** | Extraer HTML estático de un proyecto Stitch para usarlo como referencia o como base de implementación. |
| **[stitch-react-components](.agents/skills/stitch-react-components/SKILL.md)** | Convertir diseños de Stitch en componentes React/Next.js listos para producción. |
| **[stitch-react-native](.agents/skills/stitch-react-native/SKILL.md)** | Convertir diseños de Stitch en componentes React Native para apps móviles. |
| **[stitch-upload-to-stitch](.agents/skills/stitch-upload-to-stitch/SKILL.md)** | Subir diseños o assets a un proyecto Stitch existente. |
| **[stitch-code-to-design](.agents/skills/stitch-code-to-design/SKILL.md)** | Convertir código existente de vuelta a un diseño en Stitch — para sincronizar cambios hechos en código con el prototipo. |
| **[stitch-manage-design-system](.agents/skills/stitch-manage-design-system/SKILL.md)** | Gestionar y actualizar el design system dentro de un proyecto Stitch. |
| **[stitch-design-taste](.agents/skills/stitch-design-taste/SKILL.md)** | Aplicar criterio de diseño premium (anti-genérico) a proyectos Stitch. |

---

## 🗄️ Prisma ORM y Base de Datos

Skills para trabajar con Prisma y PostgreSQL.

| Skill | Cuándo usarlo |
|---|---|
| **[prisma-cli](.agents/skills/prisma-cli/SKILL.md)** | Referencia de comandos CLI de Prisma: `init`, `generate`, `migrate`, `db push`, `studio`, `validate`. Usar para comandos de la terminal de Prisma. |
| **[prisma-client-api](.agents/skills/prisma-client-api/SKILL.md)** | API del cliente Prisma: queries, filtros, operadores, CRUD. Usar al escribir consultas con `findMany`, `create`, `update`, `delete`, `$transaction`. |
| **[prisma-database-setup](.agents/skills/prisma-database-setup/SKILL.md)** | Configurar Prisma con diferentes proveedores de BD (PostgreSQL, MySQL, SQLite, MongoDB). Útil al iniciar un proyecto o cambiar de BD. |
| **[prisma-postgres](.agents/skills/prisma-postgres/SKILL.md)** | Guía de Prisma Postgres — Console, CLI `create-db`, Management API y SDK. Para crear y gestionar bases de datos Prisma Postgres. |
| **[prisma-postgres-setup](.agents/skills/prisma-postgres-setup/SKILL.md)** | Setup rápido de Prisma Postgres: crear BD, obtener connection string, conectar proyecto local. |
| **[prisma-compute](.agents/skills/prisma-compute/SKILL.md)** | Deploy y hosting con Prisma Compute. Para frameworks Hono, Elysia, Next.js, Nuxt, Astro, etc. |
| **[prisma-driver-adapter-implementation](.agents/skills/prisma-driver-adapter-implementation/SKILL.md)** | Referencia para implementar driver adapters personalizados en Prisma v7. Incluye protocolo de ciclo de vida de transacciones y error mapping. |
| **[prisma-upgrade-v7](.agents/skills/prisma-upgrade-v7/SKILL.md)** | Guía completa de migración de Prisma ORM v6 → v7. Cubre todos los breaking changes, incluyendo el requisito de driver adapter. |

---

## 🚀 Deploy y Hosting

Skills para despliegue y optimización en producción.

| Skill | Cuándo usarlo |
|---|---|
| **[deploy-to-vercel](.agents/skills/deploy-to-vercel/SKILL.md)** | Desplegar el proyecto en Vercel — configuración, variables de entorno, dominios y CI/CD. |
| **[vercel-react-best-practices](.agents/skills/vercel-react-best-practices/SKILL.md)** | Optimización de rendimiento en React y Next.js según Vercel Engineering: componentes, data fetching, bundle, imágenes. |
| **[vercel-composition-patterns](.agents/skills/vercel-composition-patterns/SKILL.md)** | Patrones de composición avanzados para Next.js en Vercel — layouts, streaming, parallelism. |

---

## 🎥 Video y Animación

| Skill | Cuándo usarlo |
|---|---|
| **[remotion](.agents/skills/remotion/SKILL.md)** | Generar videos de walkthrough a partir de proyectos Stitch usando Remotion — transiciones suaves, zoom y overlays de texto. |

---

## 🏷️ Marca y Branding

| Skill | Cuándo usarlo |
|---|---|
| **[brand-guidelines](.agents/skills/brand-guidelines/SKILL.md)** | Guías oficiales de marca — voz, tono, colores, tipografías y uso correcto del logotipo. |
| **[brandkit](.agents/skills/brandkit/SKILL.md)** | Kit de marca completo — assets, plantillas y guías de aplicación de la identidad visual. |

---

## 🔧 Componentes UI Externos

| Skill | Cuándo usarlo |
|---|---|
| **[shadcn-ui](.agents/skills/shadcn-ui/SKILL.md)** | Integrar y personalizar componentes de shadcn/ui — descubrimiento, instalación y customización. Útil si se decide adoptar shadcn en el proyecto. |

---

## 🔄 Refactorización y Mejora

| Skill | Cuándo usarlo |
|---|---|
| **[redesign-existing-projects](.agents/skills/redesign-existing-projects/SKILL.md)** | Actualizar sitios o apps existentes a calidad premium. Audita el diseño actual, identifica patrones genéricos de IA y aplica estándares de alto nivel sin romper funcionalidad. |

---

## 📖 Guía de Uso Rápido

### "¿Qué skill uso para mi tarea?"

| Tarea | Skill a leer |
|---|---|
| Escribir un copy, mensaje o label de UI | `dos-ruedas-maestro` |
| Crear o modificar un componente React/Tailwind | `dos-ruedas-ui-ux` |
| Generar una imagen para el sitio | `dos-ruedas-prompter` |
| Verificar antes de hacer merge | `dos-ruedas-verify` |
| Trabajar con la BD o esquema Prisma | `prisma-cli` + `prisma-client-api` |
| Desplegar en Vercel | `deploy-to-vercel` |
| Generar diseño con Stitch | `stitch-loop` → `stitch-generate-design` |
| Extraer DESIGN.md de Stitch | `stitch-extract-design-md` |
| Convertir diseño Stitch a código React | `stitch-react-components` |
| Generar video walkthrough | `remotion` |
| Mejorar calidad visual del sitio | `redesign-existing-projects` |

---

*Última actualización: 2026-07-16 · Skills totales: 50*
