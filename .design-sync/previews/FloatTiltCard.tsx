import { FloatTiltCard, Badge } from '@enviosdosruedas/ui';
import { MapPinIcon as MapPin, NavigationIcon as Navigation, ZapIcon as Zap, ClockIcon as Clock, CheckIcon as Check } from '@enviosdosruedas/ui';

const layer = (z: number): React.CSSProperties => ({ transform: `translateZ(${z}px)` });

export const TrackingHero = () => (
  <div style={{ maxWidth: 380, padding: 16 }}>
    <FloatTiltCard className="double-bezel-outer bg-brand-blue-50 border border-brand-blue-100 rounded-2xl p-2 shadow-float">
      <div className="bg-white rounded-xl p-6 shadow-sm" style={{ ...layer(10), display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ ...layer(40), display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>Express</Badge>
          <span className="font-mono tabular-nums text-xs text-brand-blue-400">#EDR-2026-0412</span>
        </div>
        <div style={layer(70)}>
          <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">En camino</p>
          <h3 className="font-display uppercase text-3xl text-brand-blue-700 leading-tight">Llega en 25 min</h3>
        </div>
        <div className="pt-4 border-t border-brand-blue-100" style={{ ...layer(40), display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div className="flex items-center gap-2 text-brand-ink">
            <MapPin className="w-4 h-4 text-brand-blue-500" />
            <span className="font-sans text-sm">Retiro · Friuli 1972, Zona Güemes</span>
          </div>
          <div className="flex items-center gap-2 text-brand-ink">
            <Navigation className="w-4 h-4 text-brand-blue-500" />
            <span className="font-sans text-sm">Entrega · Playa Grande</span>
          </div>
        </div>
        <div style={{ ...layer(80), display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400">3 a 5 km</span>
          <span className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700">$4.600</span>
        </div>
      </div>
    </FloatTiltCard>
  </div>
);

export const QuoteOnBlue = () => (
  <div className="bg-brand-blue-700" style={{ padding: 32, borderRadius: 16, maxWidth: 420 }}>
    <FloatTiltCard className="bg-brand-yellow-500 rounded-2xl p-6 shadow-float">
      <div style={{ ...layer(40), display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p className="font-subheading uppercase tracking-wider text-sm text-brand-blue-700">Tu cotización Low Cost</p>
        <p className="font-mono tabular-nums text-5xl font-bold text-brand-blue-900 leading-none" style={layer(70)}>$5.300</p>
        <p className="font-sans text-sm text-brand-blue-900">Centro → Punta Mogotes · 6,2 km · entrega mañana</p>
      </div>
    </FloatTiltCard>
  </div>
);

export const StatusStack = () => (
  <div style={{ maxWidth: 380, padding: 16 }}>
    <FloatTiltCard perspective={800} className="bg-white border border-brand-blue-100 rounded-2xl p-6 shadow-float">
      <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-400" style={layer(20)}>Hoy en Mar del Plata</p>
      <div style={{ ...layer(50), display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
        {[
          ['Retirado en Constitución', '10:12', true],
          ['En viaje por la costa', '10:31', true],
          ['Entregado en Chauvín', '10:58', false],
        ].map(([t, h, done]) => (
          <div key={t as string} className="flex items-center gap-3">
            <span
              className={done ? 'w-6 h-6 rounded-full bg-brand-yellow-500 text-brand-blue-900 flex items-center justify-center' : 'w-6 h-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center'}
            >
              {done ? <Check className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
            </span>
            <span className="font-sans text-sm text-brand-ink flex-1">{t}</span>
            <span className="font-mono tabular-nums text-xs text-brand-blue-400">{h}</span>
          </div>
        ))}
      </div>
    </FloatTiltCard>
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 360, padding: 16 }}>
    <FloatTiltCard disabled className="bg-brand-blue-50 border border-brand-blue-100 rounded-2xl p-6">
      <p className="font-subheading uppercase tracking-wider text-xs text-brand-blue-500">Tilt desactivado</p>
      <h3 className="font-display uppercase text-2xl text-brand-blue-700 mt-2">Flex MercadoLibre</h3>
      <p className="font-sans text-sm text-brand-ink mt-2">Tarjeta estática: respeta reducción de movimiento y listas densas.</p>
    </FloatTiltCard>
  </div>
);
