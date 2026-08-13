repo: dosruedasmdq/02enviosdosruedas
branch: localmente

## Last sync
date: 2026-08-12T00:00:00Z
source: carpeta local adjunta `07enviosdosruedas/` (lectura directa; no se leyó vía API de GitHub, por eso no hay commit)

### Updated in this project
- Se reemplazó por completo el sistema anterior (XTRA Music) por la identidad de Envíos DosRuedas.
- Tokens reescritos desde `src/app/globals.css`: paleta azul/amarillo, radios, sombras duras y curvas de easing.
- 21 componentes nuevos derivados de los componentes reales de la home.
- UI kit de la Home navegable, con carrusel 3D de servicios y cotizador simplificado.

## Screen map
| Pantalla del proyecto | Archivos del repo |
|---|---|
| `ui_kits/home/index.html` | `src/app/layout.tsx`, `src/app/page.tsx` |
| `ui_kits/home/HomeScreen.jsx` | `src/components/Hero.tsx`, `Features.tsx`, `Services.tsx`, `IndustrySlider.tsx`, `Coverage.tsx`, `Calculator.tsx`, `CTA.tsx` |
| `ui_kits/home/data.js` | `src/components/layout/Navbar.tsx`, `src/components/Services.tsx`, `src/components/Coverage.tsx` |
| `components/layout/Navbar.jsx` | `src/components/layout/Navbar.tsx` |
| `components/layout/Footer.jsx` | `src/components/Footer.tsx` |
| `components/layout/Hero.jsx` | `src/components/Hero.tsx` |
| `components/cards/*` | `src/components/{Services,Features,Coverage,CTA}.tsx` |
| `components/core/Button.jsx` | `src/components/ui/button.tsx`, `src/app/globals.css` |
| `components/core/CtaPill.jsx`, `BadgePill.jsx` | `src/app/globals.css` (`.cta-nested-pill`, `.badge-pill`) |
| `tokens/*` | `src/app/globals.css`, `src/app/layout.tsx` |
