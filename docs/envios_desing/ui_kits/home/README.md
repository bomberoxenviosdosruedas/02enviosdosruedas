# Home — Envíos DosRuedas

Recreación navegable de la home, armada íntegramente con los componentes del sistema.

| Archivo | Contenido | Origen en el repo |
|---|---|---|
| `index.html` | Shell: Navbar fijo, HomeScreen, Footer, Toast | `src/app/layout.tsx`, `src/app/page.tsx` |
| `HomeScreen.jsx` | Hero, Features, Servicios (carrusel 3D + modal), cinta de clientes, Cobertura, Cotizador, Comunidad | `src/components/{Hero,Features,Services,IndustrySlider,Coverage,Calculator,CTA}.tsx` |
| `data.js` | Nav, servicios con tarifas reales, partners y zonas | `src/components/layout/Navbar.tsx`, `src/components/Services.tsx`, `src/components/Coverage.tsx` |

## Notas
- Ningún primitivo se reimplementa acá: todo sale de `window.XTRAMusicDesignSystem_*`.
- El carrusel de servicios copia la matemática del original (`rotateY = offset × -28°`, `translateX = offset × 250px`, `translateZ` 120 / −180·abs, rotación automática cada 4,5 s).
- El cotizador es una versión simplificada de `Calculator.tsx`: tarifa base + $450 por km adicional después de los 3 km. **No es la lógica de precios real** — esa vive en `src/lib/pricing.ts` y en la base de datos.
- El hero de producción dibuja además una red de nodos animada en `<canvas>` (sedes y barrios de Mar del Plata). Acá se omite y quedan los degradados radiales, que es lo que se ve la mayor parte del tiempo.
