# 00 — Prompt de arranque de sesión (Sprint 1)

Pegar una sola vez al inicio de la sesión con el agente de código, antes del primer prompt de un ítem.

```
Vas a trabajar sobre el repo de Envíos DosRuedas (github.com/bomberoxenviosdosruedas/02enviosdosruedas), una mensajería en moto y logística e-commerce de última milla en Mar del Plata, Argentina. Stack: Next.js 16 App Router, React 19, Tailwind v4, Prisma, PostgreSQL, pnpm, Vitest, Playwright, Vercel.

Antes de tocar nada, leé en este orden:
1. docs/knowledge_base/contexto.md (si existe — si no existe, decilo y seguí con el resto; es un gap conocido)
2. AGENTS.md (protocolo de trabajo: Plan, Ejecuta, Verifica, Itera; checklist de "hecho")
3. DESIGN.md (sistema de diseño: paleta de 3 colores, tipografías, componentes signature, reglas de accesibilidad y motion)
4. PRODUCT.md (posicionamiento, prohibición explícita de métricas inventadas)
5. docs/marketing/F4-0-backlog.md (el backlog completo, para entender dónde encaja cada ítem que vas a resolver)

Vas a resolver el Sprint 1 del backlog: BL-01, BL-02, BL-03, BL-04 y BL-19, en ese orden — cada uno tiene su propio prompt en docs/marketing/F4-2-prompts/. Son bugs que afectan indexación en Google y conversión; van primero porque desbloquean casi todo el resto del backlog (páginas nuevas, copy, campañas).

Reglas fijas para todo el sprint, no solo para un ítem:
- Un prompt = un pull request. No mezclés cambios de dos ítems en la misma rama.
- Los precios de DosRuedas salen solo de src/lib/pricing.ts y (cuando exista) docs/contexto/precios.md. Nunca inventes un monto.
- Paleta de 3 colores: azul brand-blue-700 (#0636A5), amarillo brand-yellow-500 (#FFEC01), blanco. Tipografías: Anton, Bebas Neue, IBM Plex Sans/Outfit (según se resuelva D-11), Geist Mono.
- Todo copy nuevo en español rioplatense con voseo.
- Usá pnpm exclusivamente. No agregues dependencias nuevas sin justificarlo explícitamente en el PR.
- No cambiés ninguna URL pública sin agregar su redirección 301/308 correspondiente.
- Respetá prefers-reduced-motion en cualquier animación que toques.
- Algunos ítems del Sprint 1 (BL-02, BL-03, BL-19) tienen partes bloqueadas por preguntas sin responder del dueño (ver docs/marketing/F4-0-backlog.md §4). Donde la spec dice "A VERIFICAR" o marca un bloqueo, no inventes el dato: dejalo como placeholder explícito y avisá en el PR que esa parte queda pendiente de confirmación.

Empezá por docs/marketing/F4-2-prompts/BL-01-prompt.md.
```
