# Anti-Patrones (Prohibidos) — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §10, `AGENTS.md` "Errores conocidos", auditorías 2026-09.
> **Cualquier ocurrencia en código nuevo es bloqueo de PR.**

---

## 1. Colores y Estilos

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| `bg-[#…]`, `text-[#…]`, `border-[#…]`, `ring-[#…]` | `bg-brand-blue-700`, `text-brand-yellow-500`, `border-brand-blue-100` | 🔴 Crítico |
| `bg-black`, `text-black`, `border-black`, `shadow-black` | No existen en paleta. Usar `brand-blue-700/900/950` | 🔴 Crítico |
| `slate-*`, `gray-*`, `zinc-*`, `neutral-*`, `stone-*` | `brand-blue-*` / `brand-yellow-*` / `brand-white-*` (remapeados) | 🔴 Crítico |
| Colores navy legacy: `#0636A5`, `#052D8C`, `#052C87`, `#04236B`, `#021440`, `#00277C`, `#041F5E`, `#001035`, `#002068`, `#151B2D` | **Nada más oscuro que `#0950F6`** | 🔴 Crítico |
| `rgba(6,54,165,…)`, `rgba(0,39,124,…)`, `rgba(0,0,0,…)` en sombras/bordes | `rgba(9,80,246,α)`, `rgba(255,236,1,α)` | 🔴 Crítico |
| Gradientes hacia grises/oscuros (`from-slate-900`, `via-black`, `to-gray-800`) | Gradiente canónico: `linear-gradient(135deg, #0950F6 0%, #0950F6 55%, #3570F8 100%)` | 🔴 Crítico |
| Token huérfano `#D6E4FE` | `border-brand-blue-100` (`#BACEFD`) o `bg-brand-blue-50` (`#E6EEFE`) | 🔴 Crítico |
| Verde en UI (ni en WhatsApp CTA) | Fondo `brand-yellow-500`, glifo verde solo **dentro** del ícono `FaWhatsapp` | 🔴 Crítico |
| Amarillo como fondo de sección / tarjeta grande / párrafo | Amarillo ≤ 15%: solo CTA primario, step activo, precio, knockout, badge `urgent/accent`, nodos grilla, franja ≤ 6px | 🔴 Crítico |
| Más de un CTA primario amarillo por pantalla | Un solo CTA primario; secundarios `outline`/`ghost`/link texto | 🔴 Crítico |
| `rounded-[20px]`, `rounded-[24px]`, `rounded-[28px]`, `rounded-[30px]` | Escala redefinida: `rounded-xl` (16px), `rounded-2xl` (24px), `rounded-3xl` (32px), `rounded-4xl` (40px) | 🟠 Alto |
| `text-[8px]`, `text-[9px]`, `text-[10px]`, `text-[11px]` | `text-2xs` (10px), `text-xs` (12px) | 🟠 Alto |
| `font-bold`, `font-extrabold`, `font-black` en Anton/Bebas | Solo peso 400; jerarquía por `text-*`, `tracking-*`, color | 🟠 Alto |

---

## 2. Layout y Estructura

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| `h-screen` | `min-h-[100dvh]` / `min-h-[90dvh]` | 🔴 Crítico |
| `animate-bounce` | Springs (`stiffness 100, damping 20`) | 🟠 Alto |
| `border-l-4` (ni en toasts, ni errores) | `border-2 border-brand-blue-100` + `ring-2 ring-red-500/20` en error | 🟠 Alto |
| Hero centrado en desktop (`text-center` en `lg:`) | Asimétrico 7/5 (`lg:col-span-7` / `lg:col-span-5`) | 🔴 Crítico |
| "Scroll para explorar", chevrons rebotando, flechas animadas | El contenido invita al scroll naturalmente | 🟠 Alto |
| Texto sobre imágenes (sin overlay/contrast garantizado) | Overlay `bg-black/40` + texto blanco, o `DoubleBezelCard variant="dark"` | 🟠 Alto |
| Partículas violetas/neón (`#8B5CF6`, `#A855F7`, `#D946EF`) | Solo paleta 3 colores: azul, amarillo, blanco | 🔴 Crítico |
| Más de un acento amarillo grande por sección | Un solo elemento `bg-brand-yellow-500` grande por vista | 🔴 Crítico |
| `div role="button"`, `div role="link"`, `span onClick` | `<button>`, `<a>`, `<Link>` nativos | 🔴 Crítico (A11y) |
| `useState` para valores continuos (mouse, scroll, physics) | `useMotionValue` / `useTransform` / `useScroll` (Motion) | 🔴 Crítico (Perf) |
| `window.addEventListener('scroll', …)` | `useScroll()`, `ScrollTrigger`, `IntersectionObserver`, CSS scroll-driven animations | 🔴 Crítico (Perf) |
| `requestAnimationFrame` tocando React state | `useMotionValue` + `useTransform` | 🔴 Crítico (Perf) |
| `layout` / `layoutId` en contenido estático | Solo en cambios visibles de estado (reorder, expand modal, shared element) | 🟠 Alto |

---

## 3. Componentes y Patrones UI

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| Inputs nativos con clases HEX hardcodeadas | `InputField` primitiva | 🔴 Crítico |
| Botones maquetados a mano (`bg-yellow-500 px-8 py-3 rounded-full`) | `CTANestedPill` primitiva | 🔴 Crítico |
| Tarjetas con double-bezel manual (`p-2 bg-blue-50 border-blue-100 rounded-2xl` + inner `p-6 bg-white rounded-xl`) | `DoubleBezelCard` primitiva | 🔴 Crítico |
| Gradientes hero inline en componente | `<HeroProceduralBackground variant="…" />` | 🔴 Crítico |
| Steppers manuales (números en círculos + líneas) | `StepperHorizontal` / `StepperVertical` | 🟠 Alto |
| Radios/checkboxes nativos sin estilo | `RadioCardGroup` / primitivas futuras | 🟠 Alto |
| Grids asimétricas manuales (`lg:col-span-7` hardcodeado en cada componente) | `BentoGrid` + `BentoGridItem` | 🟠 Alto |
| Badges manuales (`px-2 py-1 rounded-full bg-yellow-500 text-blue-900`) | `Badge` primitiva | 🟠 Alto |
| `LogosCarousel` con partners inventados / clases inexistentes (`animate-marquee`) | `LogosCarousel` corregido + partners reales (`simple-icons`) | 🟠 Alto |
| `BentoGridItem` generando `md:col-span-${n}` dinámico | Spans estáticos o CSS Grid inline | 🟠 Alto |

---

## 4. Tarifas y Lógica de Negocio

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| Inventar precios en componente / copy / seed | Fuente única: `PriceRange` (BD) → fallback `src/lib/pricing.ts` | 🔴 Crítico |
| Server Action calculando con `FormData` del cliente | Server Action lee `PriceRange` vía Prisma → fallback `pricing.ts` | 🔴 Crítico |
| Mostrar precios para Flex / Emprendedores sin fila en `PriceRange` | CTA "Cotización a medida por WhatsApp" | 🔴 Crítico |
| `Math.floor(km)`, `Math.round(km)`, truncar decimales | **Siempre** `Math.ceil(km)` en excedentes >10km | 🔴 Crítico |
| Copiar tablas de precios a mano en componentes | Derivar de `EXPRESS_TIERS`, `LOW_COST_TIERS` exportadas por `pricing.ts` | 🟠 Alto |

---

## 5. Copy y Contenido

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| "Usted", "su", "su empresa" | **Voseo rioplatense**: "Vos", "tu", "tu negocio" | 🔴 Crítico |
| "Cotice", "Envíe", "Calcule", "Ingrese" | **Voseo**: "Cotizá", "Enviá", "Calculá", "Ingresá" | 🔴 Crítico |
| Nombres genéricos: "Juan Pérez", "Acme", "Empresa XYZ" | Placeholder explícito `[métrica]` o datos reales | 🟠 Alto |
| Métricas inventadas: "99.99%", "50%", "1234567" | Datos reales o `[métrica]` | 🟠 Alto |
| Emojis en UI (🚀, 📦, ✅, ⭐) | Íconos `lucide-react` | 🟠 Alto |
| Rayas (—) en texto visible | Punto, coma, dos puntos, salto de línea | 🟡 Medio |
| Texto < 12px legible (párrafos, labels) | Mínimo `text-xs` (12px); `text-2xs` (10px) solo metadato mono/Bebas UPPERCASE | 🟠 Alto |

---

## 6. Accesibilidad

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| Error sin `aria-describedby` + `role="alert"` | InputField con `aria-describedby` + mensaje `role="alert"` | 🟠 Alto |
| `required` solo visual en label (no en input nativo) | `InputField` reenvía `required` al `<input>` | 🟠 Alto |
| Íconos sin `aria-hidden="true"` | `aria-hidden="true"` en todos los decorativos | 🟠 Alto |
| Touch targets < 44×44px | `min-h-[44px]` CTAs, `h-11` inputs | 🟠 Alto |
| `prefers-reduced-motion` ignorado | Gate en todo Motion/GSAP/CSS | 🔴 Crítico |
| Contraste < 4.5:1 texto normal | Ver `tokens-colores.md` §6 | 🔴 Crítico |
| Focus invisible / solo `outline-none` | `focus-visible:ring-2 ring-brand-blue-500 ring-offset-2` | 🟠 Alto |

---

## 7. Código y Arquitectura

| ❌ Prohibido | ✅ Correcto | Severidad |
|---|---|---|
| `any` en TypeScript | `unknown` + type guard | 🔴 Crítico (Strict) |
| `export default` en `src/components/ui/` | `export const Nombre = ...` (named exports) | 🟠 Alto |
| `@/src/components/ui` en imports nuevos | `@/components/ui` (alias canónico) | 🟡 Medio |
| `npm` / `yarn` / `pnpm install` sin lockfile | Solo `pnpm` + `pnpm-lock.yaml` | 🔴 Crítico |
| `pnpm test` a secas (watch mode) | `pnpm exec vitest run ...` / `pnpm exec vitest related --run` | 🔴 Crítico (Agent hang) |
| Secrets / `.env` en commits | `.gitignore` + Vercel env vars | 🔴 Crítico (Seguridad) |
| `git push --force` / `--no-verify` | Hooks pre-commit activos | 🔴 Crítico |

---

## 8. Referencia Rápida: "Si ves esto, corrígelo así"

| Patrón Detectado | Fix Inmediato |
|---|---|
| `bg-[#0950F6]` | `bg-brand-blue-700` |
| `text-[#FFEC01]` | `text-brand-yellow-500` |
| `border-[#D6E4FE]` | `border-brand-blue-100` |
| `bg-[#E6EEFE]` | `bg-brand-blue-50` |
| `rounded-[20px]` | `rounded-xl` (16px) o `rounded-2xl` (24px) |
| `text-[11px]` | `text-2xs` |
| `font-bold` en `font-display`/`font-subheading` | **Borrar** la clase de peso |
| `<input className="bg-white border-[#D6E4FE]...">` | `<InputField ... />` |
| `<button className="bg-yellow-500...">` | `<CTANestedPill variant="primary">` |
| `<div className="p-2 bg-blue-50 border-blue-100 rounded-2xl"><div className="p-6 bg-white rounded-xl">` | `<DoubleBezelCard>` |
| `background: linear-gradient(...#0636A5...)` | `<HeroProceduralBackground variant="express" />` |
| `price: 4600` hardcodeado | `EXPRESS_TIERS[1].price` desde `pricing.ts` |
| `"Cotice su envío"` | `"Cotizá tu envío"` |
| `Math.floor(distance)` | `Math.ceil(distance)` |

---

## 9. Enforcement Automatizado (Pendiente — Plan §12)

- [ ] ESLint rule: `no-restricted-syntax` para `bg-[#…]`, `text-[#…]`, `border-[#…]`, colores prohibidos.
- [ ] Test Vitest: verifica presencia de `brand-*` tokens en componentes críticos.
- [ ] Test Vitest: verifica `InputField` / `CTANestedPill` / `DoubleBezelCard` en formularios y CTAs.
- [ ] Test Vitest: verifica `Math.ceil` en `pricing.ts` y ausencia de precios hardcodeados en Flex/Emprendedores.
- [ ] CI gate: `pnpm typecheck` + `pnpm exec eslint` + `pnpm exec vitest run` obligatorios en PR.