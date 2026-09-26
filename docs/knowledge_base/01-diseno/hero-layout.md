# Hero Section — Envíos DosRuedas

> **Fuente:** `DESIGN.md` §4, `src/components/ui/HeroProceduralBackground.tsx`, páginas en `src/app/*/page.tsx`.

---

## 1. Estructura Canónica

### 1.1 Grid Asimétrico 7/5 (Desktop)

```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
  {/* LEFT: 7 cols — Copy + CTA */}
  <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
    {/* Badge + H1 + Promise + CTA + 3 Chips */}
  </div>

  {/* RIGHT: 5 cols — Visual */}
  <div className="lg:col-span-5 relative w-full max-w-lg mx-auto">
    {/* FloatTiltCard / Hero Card Media / Image */}
  </div>
</div>
```

- **Mobile (< lg):** stack vertical, `text-center`, visual arriba o abajo según jerarquía.
- **Nunca** hero centrado en desktop (`text-center` solo `< lg`).

### 1.2 Fondo Procedural (Obligatorio)

```tsx
<section className="relative isolate overflow-hidden bg-brand-blue-700">
  <HeroProceduralBackground variant="express" />  {/* o lowcost, flex, 3pl, contact, default */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid 7/5 */}
  </div>
</section>
```

- **Los heros NO escriben su propio gradiente inline.** Consumen la primitiva `HeroProceduralBackground`.
- La primitiva pinta: gradiente canónico `#0950F6` → `#3570F8`, halos amarillo/azul, grilla SVG punteada 48px, y gráficos vectoriales específicos por `variant`.

### 1.3 Altura

- `min-h-[90dvh]` o `min-h-[100dvh]`.
- **Jamás `h-screen`** (salto en iOS Safari address bar).

---

## 2. Anatomía del Hero (Izquierda - 7 cols)

| Elemento | Especificación | Ejemplo |
|---|---|---|
| **Badge de contexto** | `inline-flex px-4 py-1.5 bg-brand-yellow-500 text-brand-blue-900 font-subheading text-xs uppercase tracking-widest -rotate-1 shadow-glow-yellow` | "Mar del Plata · 15+ años · 2026" |
| **Titular (H1)** | `font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight leading-[0.92] text-white` + **un** knockout rotado | `COTIZÁ TU <span className="bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded -rotate-1">ENVÍO</span> EXPRESS` |
| **Promesa (voseo)** | `text-lg text-white/85 max-w-prose font-sans leading-relaxed` | "Calculá tu envío en segundos y coordiná por WhatsApp al instante." |
| **CTA Primario** | `<CTANestedPill href="/cotizar/express" size="large">Cotizá tu envío</CTANestedPill>` | Un solo CTA primario amarillo por pantalla |
| **CTA Secundario (opcional)** | Link texto `underline decoration-brand-yellow-500` o `CTANestedPill variant="outline"` | "O escribinos por WhatsApp" |
| **Chips Factuales (3)** | `grid grid-cols-3 gap-3` → cards `p-3 rounded-xl bg-white/10 border border-white/20` | "15:00 hs", "100% Mismo Día", "Sin Mínimos" |

---

## 3. Anatomía del Hero (Derecha - 5 cols)

### 3.1 FloatTiltCard (Preferido para Home / Servicios)

```tsx
<FloatTiltCard>
  <Image src="/elementos/hero_express.webp" alt="Moto Express en MDQ" fill className="object-cover" priority />
</FloatTiltCard>
```

- Tilt 3D suave تتبع mouse (`motion/react`).
- Imagen real de courier o diorama 3D isométrico clay mate + satin plastic.

### 3.2 Hero Card Media / DoubleBezelCard (Para landings de servicio)

```tsx
<DoubleBezelCard variant="dark" className="w-full max-w-md">
  <div className="space-y-4">
    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
      <Image src="/elementos/icono_express.webp" alt="..." fill className="object-cover" priority />
    </div>
    <div className="flex items-center justify-between text-sm font-mono text-white/90">
      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-brand-yellow-500" /> Todo Mar del Plata</span>
      <span className="text-brand-yellow-500">Punto a punto</span>
    </div>
  </div>
</DoubleBezelCard>
```

---

## 4. Variantes de `HeroProceduralBackground`

| Variant | Uso | Gráficos Vectoriales Específicos |
|---|---|---|
| `"express"` | `/cotizar/express`, `/servicios/envios-express` | Arterias de velocidad (paths amarillos/azules animados) + nodos |
| `"lowcost"` | `/cotizar/lowcost`, `/servicios/envios-lowcost` | Anillos concéntricos de ruteo batch + línea central |
| `"flex"` | `/servicios/enviosflex` | Corredor matriz dispatch verificado + rectángulos dash |
| `"3pl"` | `/servicios/deposito-fulfillment`, `/servicios/plan-emprendedores` | Nodos hub inventario (polígono + círculos) |
| `"contact"` | `/contacto` | Radar GPS beacon (círculos pulsantes) |
| `"community"` | `/nosotros/nuestras-redes` | Red social nodos + enlaces |
| `"default"` | `/nosotros/sobre-nosotros`, fallback | Solo gradiente + halos + grilla base |

---

## 5. Reglas de Oro (Checklist)

- [ ] **Asimétrico 7/5** en desktop (`lg:grid-cols-12` + `lg:col-span-7/5`).
- [ ] **Fondo via primitiva** `<HeroProceduralBackground variant="…" />` — sin gradiente inline.
- [ ] **Altura `min-h-[90dvh]`** mínimo — nunca `h-screen`.
- [ ] **Titular `font-display` UPPERCASE** 2–3 líneas, **un** knockout rotado `-rotate-1`.
- [ ] **Badge contexto** con dato real verificable (años, ciudad, año).
- [ ] **Promesa en voseo** + consecuencia concreta.
- [ ] **Un solo CTA primario** (`CTANestedPill variant="primary" size="large"`).
- [ ] **3 chips factuales** con datos reales MDQ.
- [ ] **Visual derecha:** `FloatTiltCard` (home) o `DoubleBezelCard variant="dark"` (servicios).
- [ ] **Mobile:** stack vertical, `text-center`, visual responde (no desaparece).
- [ ] **No "Scroll para explorar"**, no chevrons rebotando, no partículas violetas/neón.

---

## 5. Ejemplo Mínimo Completo

```tsx
// src/app/servicios/envios-express/page.tsx
import ExpressHero from '@/components/servicios/express/ExpressHero';

export default function ExpressPage() {
  return (
    <>
      <ExpressHero />
      {/* Resto de secciones: Features, Pricing, UseCases, CTA */}
    </>
  );
}
```

```tsx
// src/components/servicios/express/ExpressHero.tsx
import { Zap, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, HeroProceduralBackground } from '@/components/ui';
import { EXPRESS_TIERS } from '@/src/lib/pricing';
import { EXPRESS_WINDOW, EXPRESS_WINDOW_SHORT, MAX_WEIGHT_KG } from '@/src/lib/promises';

export default function ExpressHero() {
  const chips = [
    { value: EXPRESS_WINDOW_SHORT.replace('-', '–'), label: 'Entrega' },
    { value: `$${EXPRESS_TIERS[0].price.toLocaleString('es-AR')}`, label: 'Tarifa desde' },
    { value: `${MAX_WEIGHT_KG} kg`, label: 'Por bulto' },
  ];

  return (
    <section id="express-hero" aria-label="Envíos Express en moto en Mar del Plata"
      className="relative isolate w-full overflow-hidden bg-brand-blue-700 text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      <HeroProceduralBackground variant="express" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <span className="-rotate-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-900 shadow-accent-sm">
              <Zap className="h-4 w-4 shrink-0" aria-hidden="true" />
              Mar del Plata · +7 años · 2026
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-tight leading-[0.98] text-white">
              <span className="block">Mensajería en moto</span>
              <span className="inline-block bg-brand-yellow-500 text-brand-blue-900 px-3 py-1 rounded-lg -rotate-1 shadow-glow-yellow my-1">Envíos Express</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl">Entregados en {EXPRESS_WINDOW}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-sans text-white/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Retiramos tu paquete y lo entregamos en {EXPRESS_WINDOW} en todo Mar del Plata. Flota propia de motos, tarifa fija por distancia y coordinación directa por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-2">
              <CTANestedPill href="/cotizar/express" variant="primary" size="large">Cotizá tu envío Express</CTANestedPill>
              <a href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20Express" target="_blank" rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-700 rounded-md">
                <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" /> O escribinos por WhatsApp
              </a>
            </div>
            <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
              {chips.map((chip) => (
                <li key={chip.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
                  <span className="block font-mono text-xl sm:text-2xl text-brand-yellow-500 tabular-nums">{chip.value}</span>
                  <span className="block font-subheading text-xs sm:text-sm uppercase tracking-wider text-white/90 mt-0.5">{chip.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
            <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 animate-pulse-subtle" aria-hidden="true" />
                <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">Retiro → entrega directa</span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/20">
                <Image src="/elementos/icono_express.webp" alt="Moto Envíos DosRuedas Express en Mar del Plata" fill sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" priority />
              </div>
              <div className="pt-2 border-t border-white/15 flex items-center justify-between text-sm font-mono text-white/90">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-brand-yellow-500" aria-hidden="true" /> Todo Mar del Plata</span>
                <span className="text-brand-yellow-500">Punto a punto</span>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
```