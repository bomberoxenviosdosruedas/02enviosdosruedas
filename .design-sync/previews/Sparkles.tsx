import { useEffect, useState } from 'react';
import { Sparkles, CTANestedPill } from '@enviosdosruedas/ui';
import { ArrowRightIcon as ArrowRight } from '@enviosdosruedas/ui';

// Sparkles is a tsParticles canvas that fills its className box — host it in a
// sized, dark, relative container. The component's ParticlesProvider keeps a
// module-level init guard: a second instance mounting before the engine has
// loaded throws. So only the first cell on a page mounts right away; the rest
// wait until a particles canvas exists (engine ready). Single-story renders
// have one cell, so they mount immediately.
let claimed = false;
function useEngineSlot() {
  const [first] = useState(() => { const f = !claimed; claimed = true; return f; });
  const [ready, setReady] = useState(first);
  useEffect(() => {
    if (ready) return;
    const t = setInterval(() => {
      if (document.querySelector('canvas')) { setReady(true); clearInterval(t); }
    }, 50);
    return () => clearInterval(t);
  }, [ready]);
  return ready;
}

const frame: React.CSSProperties = { position: 'relative', height: 320, maxWidth: 760, borderRadius: 16, overflow: 'hidden' };
const layer: React.CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%' };
const copy: React.CSSProperties = {
  position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 32px',
};

export const HeroNocturno = () => {
  const ready = useEngineSlot();
  return (
    <div className="bg-brand-blue-700" style={frame}>
      {ready && <Sparkles color="#FFEC01" density={220} size={2.4} minSize={1} speed={0.6} opacity={0.9} className="w-full h-full" />}
      <div style={{ ...copy, position: 'absolute', inset: 0 }}>
        <span className="font-subheading uppercase tracking-widest text-sm text-brand-yellow-500">Mar del Plata · 2026</span>
        <h2 className="font-display uppercase text-5xl text-white mt-2" style={{ lineHeight: 0.98 }}>
          Tu envío llega <span className="text-brand-yellow-500">esta noche</span>
        </h2>
        <p className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed" style={{ maxWidth: 440 }}>
          Del Puerto a Playa Grande, repartimos hasta las 21 hs. Quedate tranquilo: te avisamos cuando sale la moto.
        </p>
      </div>
    </div>
  );
};

export const PolvoBlanco = () => {
  const ready = useEngineSlot();
  return (
    <div className="bg-brand-blue-900" style={frame}>
      {ready && (
        <div style={layer}>
          <Sparkles color="#FFFFFF" density={500} size={1.1} speed={1.2} direction="top" className="w-full h-full" />
        </div>
      )}
      <div style={{ ...copy, position: 'absolute', inset: 0 }}>
        <h2 className="font-display uppercase text-4xl text-white" style={{ lineHeight: 0.98 }}>
          Última milla en moto
        </h2>
        <p className="font-mono tabular-nums text-3xl font-bold text-brand-yellow-500 mt-3">15+ años</p>
        <p className="font-subheading uppercase tracking-wider text-sm text-brand-blue-200 mt-1">moviendo paquetes de Camet a Batán</p>
      </div>
    </div>
  );
};

export const BandaCTA = () => {
  const ready = useEngineSlot();
  return (
    <div className="bg-brand-blue-500" style={{ ...frame, height: 220 }}>
      {ready && (
        <div style={layer}>
          <Sparkles color="#FFEC01" density={180} size={2.2} minSize={0.8} speed={0.4} opacitySpeed={1.5} className="w-full h-full" />
        </div>
      )}
      <div style={{ ...copy, position: 'absolute', inset: 0 }}>
        <h2 className="font-display uppercase text-4xl text-white" style={{ lineHeight: 0.98 }}>
          Cotizá en 30 segundos
        </h2>
        <div style={{ marginTop: 16 }}>
          <CTANestedPill variant="primary" icon={<ArrowRight className="h-4 w-4" />}>Calculá tu envío</CTANestedPill>
        </div>
      </div>
    </div>
  );
};
