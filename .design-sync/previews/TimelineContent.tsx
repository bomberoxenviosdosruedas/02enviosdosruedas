import { TimelineContent, DoubleBezelCard, Badge } from '@enviosdosruedas/ui';
import { ZapIcon as Zap } from '@enviosdosruedas/ui';
import type { Variants } from 'motion/react';

// Scroll-triggered entrance (whileInView, once). viewportMargin="0px" onUpdate={noWaapi} so the
// trigger fires even in a short preview frame. The built-in presets are
// springs that take ~1.5s to settle, so these cells pass short tween
// `customVariants` (the pattern the real pricing sections use: blur/slide +
// `animationNum` stagger) so the settled state is what a static render shows.
const reveal: Variants = {
  hidden: { opacity: 0, y: -20, filter: 'blur(10px)' },
  visible: (i: number) => ({ opacity: 1, y: 0, filter: 'blur(0px)', transition: { delay: i * 0.05, duration: 0.25 } }),
};
const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};
const clipUp: Variants = {
  hidden: { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
  visible: (i: number) => ({ clipPath: 'inset(0% 0 0 0)', opacity: 1, transition: { delay: i * 0.05, duration: 0.25 } }),
};

// Opts out of motion's WAAPI path (JS-driven frames), so the settled state is
// committed promptly in the static capture harness.
const noWaapi = () => {};
const dark: React.CSSProperties = { padding: '32px 24px', borderRadius: 16, maxWidth: 760 };

export const EncabezadoTarifario = () => (
  <div className="bg-brand-blue-700 text-center" style={dark}>
    <TimelineContent as="span" customVariants={reveal} animationNum={0} viewportMargin="0px" onUpdate={noWaapi}
      className="inline-block px-4 py-1 rounded-full bg-brand-yellow-500 text-brand-blue-900 font-subheading font-bold uppercase tracking-widest text-xs">
      Tarifario vigente 2026
    </TimelineContent>
    <TimelineContent as="h2" customVariants={reveal} animationNum={1} viewportMargin="0px" onUpdate={noWaapi}
      className="font-display uppercase text-5xl text-white mt-3">
      Tarifas por distancia
    </TimelineContent>
    <TimelineContent as="p" customVariants={reveal} animationNum={2} viewportMargin="0px" onUpdate={noWaapi}
      className="font-sans text-base text-brand-blue-100 mt-3 leading-relaxed">
      Precios oficiales por rango kilométrico para envíos inmediatos en Mar del Plata.
    </TimelineContent>
  </div>
);

export const TarjetaDesdeIzquierda = () => (
  <div style={{ maxWidth: 400, padding: 8 }}>
    <TimelineContent customVariants={slideLeft} viewportMargin="0px" onUpdate={noWaapi}>
      <DoubleBezelCard hoverEffect={false}>
        <Badge variant="urgent" size="sm" icon={<Zap className="w-3.5 h-3.5" />}>Express</Badge>
        <h3 className="font-display uppercase text-3xl text-brand-blue-700 mt-3">0 a 3 km</h3>
        <p className="font-mono tabular-nums text-4xl font-bold text-brand-blue-700 mt-2">$3.700</p>
        <p className="font-sans text-sm text-brand-ink mt-2 leading-relaxed">
          De Zona Güemes a Plaza Mitre, con rango de entrega de 3 horas.
        </p>
      </DoubleBezelCard>
    </TimelineContent>
  </div>
);

export const RevelarEditorial = () => (
  <div style={{ maxWidth: 560, padding: 8 }}>
    <TimelineContent as="h3" customVariants={clipUp} animationNum={0} viewportMargin="0px" onUpdate={noWaapi}
      className="font-display uppercase text-4xl text-brand-blue-700" style={{ paddingTop: 8 }}>
      Rastreá tu paquete
    </TimelineContent>
    <TimelineContent as="p" customVariants={clipUp} animationNum={1} viewportMargin="0px" onUpdate={noWaapi}
      className="font-sans text-base text-brand-ink mt-2 leading-relaxed">
      Te mandamos el link de seguimiento por WhatsApp apenas la moto sale de la base en Friuli 1972.
    </TimelineContent>
  </div>
);
