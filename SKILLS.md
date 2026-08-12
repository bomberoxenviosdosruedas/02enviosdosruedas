# 📚 SKILLS.md — Índice de Skills del Proyecto

Catálogo completo de todos los skills disponibles en `.agents/skills/`.
Organizado por categoría. Leer antes de iniciar una tarea para elegir el skill correcto.

> **Ubicación de los skills:** `.agents/skills/<nombre>/SKILL.md`

---

## 🛠️ Skills de Mantenimiento e Infraestructura (Comandos Universales)

| Skill | Cuándo usarlo |
|---|---|
| **[agent-init](.agents/skills/agent-init/SKILL.md)** | Inicializar o actualizar AGENTS.md, SKILLS.md (verificado contra el disco) y archivos puente en cualquier repo. Idempotente. |
| **[repo-doctor](.agents/skills/repo-doctor/SKILL.md)** | Diagnóstico de salud: lint, typecheck, deps, enlaces rotos en docs, archivos huérfanos y deriva docs↔código. |
| **[token-optimizer](.agents/skills/token-optimizer/SKILL.md)** | Analizar el repo y generar archivos de contexto condensados en `.agents/context/` para optimizar consumo de tokens. |
| **[design-sync](.agents/skills/design-sync/SKILL.md)** | Extraer los tokens reales del código (globals.css, tailwind.config) y actualizar DESIGN.md. |

---

## 🎨 Diseño Visual, UI/UX y Estética Frontend

| Skill | Cuándo usarlo |
|---|---|
| **[design-md](.agents/skills/design-md/SKILL.md)** | Analizar proyectos Stitch y sintetizar el sistema de diseño en archivos `DESIGN.md`. |
| **[design-taste-frontend](.agents/skills/design-taste-frontend/SKILL.md)** | Anti-slop frontend para landing pages, portfolios y rediseños. |
| **[frontend-design](.agents/skills/frontend-design/SKILL.md)** | Dirección visual distintiva para UI y maquetación web. |
| **[high-end-visual-design](.agents/skills/high-end-visual-design/SKILL.md)** | Estándares de diseño de agencias de alto nivel (tipografía, spacing, sombras premium). |
| **[industrial-brutalist-ui](.agents/skills/industrial-brutalist-ui/SKILL.md)** | Interfaces mecánicas: tipografía suiza, terminales militares y grillas rígidas. |
| **[minimalist-ui](.agents/skills/minimalist-ui/SKILL.md)** | Interfaces editoriales limpias: monochrome cálido, bento grids planos, sin sombras pesadas. |
| **[gpt-taste](.agents/skills/gpt-taste/SKILL.md)** | UX/UI e ingeniería de animación con GSAP, ScrollTrigger y tipografía editorial. |
| **[taste-design](.agents/skills/taste-design/SKILL.md)** | Sistema de diseño semántico para Stitch y generación de `DESIGN.md`. |
| **[redesign-existing-projects](.agents/skills/redesign-existing-projects/SKILL.md)** | Auditoría y actualización de sitios existentes a estándares premium. |

---

## 📸 Prompts y Generación de Imágenes

| Skill | Cuándo usarlo |
|---|---|
| **[brandkit](.agents/skills/brandkit/SKILL.md)** | Generación de tableros de identidad visual, guías de marca y mockups premium. |
| **[imagegen-frontend-web](.agents/skills/imagegen-frontend-web/SKILL.md)** | Genera una referencia visual horizontal por cada sección de una landing page. |
| **[imagegen-frontend-mobile](.agents/skills/imagegen-frontend-mobile/SKILL.md)** | Diseños de pantallas e interfaces nativas para aplicaciones móviles. |
| **[enhance-prompt](.agents/skills/enhance-prompt/SKILL.md)** | Transforma ideas vagas de UI en prompts optimizados para Stitch y modelos de imagen. |

---

## 🎬 Stitch (Design System y Prototipado)

| Skill | Cuándo usarlo |
|---|---|
| **[stitch-loop](.agents/skills/stitch-loop/SKILL.md)** | Flujo iterativo baton-passing para construir sitios web en Stitch. |
| **[stitch-generate-design](.agents/skills/stitch-generate-design/SKILL.md)** | Generar pantallas nuevas desde prompts o editar pantallas existentes. |
| **[stitch-extract-design-md](.agents/skills/stitch-extract-design-md/SKILL.md)** | Extraer un `DESIGN.md` completo desde código fuente frontend. |
| **[stitch-extract-static-html](.agents/skills/stitch-extract-static-html/SKILL.md)** | Extraer HTML estático autocontenido con CSS/imágenes inline. |
| **[stitch-react-components](.agents/skills/stitch-react-components/SKILL.md)** | Convertir diseños de Stitch a componentes React / Next.js. |
| **[stitch-react-native](.agents/skills/stitch-react-native/SKILL.md)** | Convertir diseños de Stitch a componentes React Native con StyleSheet. |
| **[stitch-upload-to-stitch](.agents/skills/stitch-upload-to-stitch/SKILL.md)** | Cargar assets y archivos a un proyecto Stitch. |
| **[stitch-code-to-design](.agents/skills/stitch-code-to-design/SKILL.md)** | Convertir código frontend existente en un diseño Stitch. |
| **[stitch-manage-design-system](.agents/skills/stitch-manage-design-system/SKILL.md)** | Gestionar y aplicar design systems dentro de Stitch via MCP. |
| **[stitch-design-taste](.agents/skills/stitch-design-taste/SKILL.md)** | Estándares semánticos de diseño para Stitch. |

---

## 🗄️ Prisma ORM y Base de Datos

| Skill | Cuándo usarlo |
|---|---|
| **[prisma-cli](.agents/skills/prisma-cli/SKILL.md)** | Comandos CLI de Prisma: `init`, `generate`, `migrate`, `db`, `studio`. |
| **[prisma-client-api](.agents/skills/prisma-client-api/SKILL.md)** | Consultas y operaciones CRUD con Prisma Client API. |
| **[prisma-database-setup](.agents/skills/prisma-database-setup/SKILL.md)** | Configuración de conectores BD (PostgreSQL, MySQL, SQLite, MongoDB). |
| **[prisma-postgres-setup](.agents/skills/prisma-postgres-setup/SKILL.md)** | Aprovisionamiento de base de datos Prisma Postgres. |
| **[prisma-compute](.agents/skills/prisma-compute/SKILL.md)** | Despliegue y hosting en Prisma Compute. |
| **[prisma-driver-adapter-implementation](.agents/skills/prisma-driver-adapter-implementation/SKILL.md)** | Implementación de driver adapters para Prisma v7. |
| **[prisma-upgrade-v7](.agents/skills/prisma-upgrade-v7/SKILL.md)** | Guía de migración de Prisma v6 a v7 (breaking changes). |

---

## 🚀 Calidad, Rendimiento, SEO y Otros

| Skill | Cuándo usarlo |
|---|---|
| **[vercel-react-best-practices](.agents/skills/vercel-react-best-practices/SKILL.md)** | Buenas prácticas y rendimiento React / Next.js de Vercel. |
| **[seo-audit](.agents/skills/seo-audit/SKILL.md)** | Auditoría técnica y corrección de SEO en sitio. |
| **[full-output-enforcement](.agents/skills/full-output-enforcement/SKILL.md)** | Enforzar generación de código completa sin truncar ni usar placeholders. |
| **[shadcn-ui](.agents/skills/shadcn-ui/SKILL.md)** | Instalación y uso de componentes shadcn/ui. |
| **[remotion](.agents/skills/remotion/SKILL.md)** | Creación de videos walkthrough programmaticos. |

---

*Última actualización: 2026-08-12 · Total de skills verificados en disco: 39*
