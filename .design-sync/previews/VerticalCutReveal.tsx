import { VerticalCutReveal } from '@enviosdosruedas/ui';

// Text animates up from behind a per-word/char mask on mount (autoStart) —
// short staggers so the settled, fully-revealed state is what shows.
const dark: React.CSSProperties = { padding: '32px 24px', borderRadius: 16, maxWidth: 760 };

export const TituloPorPalabras = () => (
  <div className="bg-brand-blue-700 text-center" style={dark}>
    <span className="font-subheading uppercase tracking-widest text-xs text-brand-yellow-500">Tarifario vigente 2026</span>
    <h2 className="font-display uppercase text-5xl text-white mt-2" style={{ display: 'flex', justifyContent: 'center', lineHeight: 1.25 }}>
      <VerticalCutReveal splitBy="words" staggerDuration={0.1} staggerFrom="first" containerClassName="justify-center">
        TARIFAS POR DISTANCIA
      </VerticalCutReveal>
    </h2>
    <p className="font-sans text-base text-brand-blue-100 mt-3">Express desde <span className="font-mono tabular-nums font-bold text-brand-yellow-500">$3.700</span> dentro de los 3 km.</p>
  </div>
);

export const PorCaracteres = () => (
  <div style={{ padding: '24px 8px', maxWidth: 760 }}>
    <h2 className="font-display uppercase text-6xl text-brand-blue-700" style={{ lineHeight: 1.25 }}>
      <VerticalCutReveal splitBy="characters" staggerDuration={0.02} staggerFrom="center">
        RASTREÁ TU PAQUETE
      </VerticalCutReveal>
    </h2>
    <p className="font-sans text-base text-brand-ink mt-3">Seguí la moto en vivo desde el Centro hasta tu puerta en Chauvín.</p>
  </div>
);

export const PorLineas = () => (
  <div className="bg-brand-blue-900" style={dark}>
    <h2 className="font-display uppercase text-4xl text-white" style={{ lineHeight: 1.25 }}>
      <VerticalCutReveal splitBy="lines" staggerDuration={0.12} wordLevelClassName="text-white">
        {'NIVELES Y TARIFAS FLEX\nENTREGAS EN EL DÍA\nPARA TU TIENDA EN MDQ'}
      </VerticalCutReveal>
    </h2>
  </div>
);

export const DesdeArriba = () => (
  <div className="bg-brand-yellow-500" style={{ ...dark, textAlign: 'center' }}>
    <h2 className="font-display uppercase text-5xl text-brand-blue-900" style={{ display: 'flex', justifyContent: 'center', lineHeight: 1.25 }}>
      <VerticalCutReveal splitBy="words" reverse staggerDuration={0.08} staggerFrom="last" containerClassName="justify-center">
        ENVIÁ HOY, LLEGA HOY
      </VerticalCutReveal>
    </h2>
    <p className="font-subheading uppercase tracking-wider text-sm text-brand-blue-700 mt-2">Playa Grande · Punta Mogotes · Güemes</p>
  </div>
);
