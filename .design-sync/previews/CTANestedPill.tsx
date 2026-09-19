import { CTANestedPill } from '@enviosdosruedas/ui';
import { PhoneIcon as Phone, ZapIcon as Zap, PackageIcon as Package, MessageCircleIcon as MessageCircle } from '@enviosdosruedas/ui';

const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center' };

export const HeroPair = () => (
  <div style={row}>
    <CTANestedPill variant="primary" size="large">Cotizá Express</CTANestedPill>
    <CTANestedPill variant="elevated" size="large">Mirá los Servicios</CTANestedPill>
  </div>
);

export const AllVariants = () => (
  <div style={row}>
    <CTANestedPill variant="primary">Cotizá tu envío</CTANestedPill>
    <CTANestedPill variant="elevated">Rastreá tu paquete</CTANestedPill>
    <CTANestedPill variant="outline">Contactanos</CTANestedPill>
    <CTANestedPill variant="ghost">Mirá las tarifas 2026</CTANestedPill>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <CTANestedPill size="compact">Enviá hoy</CTANestedPill>
    <CTANestedPill size="default">Enviá hoy</CTANestedPill>
    <CTANestedPill size="large">Enviá hoy</CTANestedPill>
  </div>
);

export const CustomIcons = () => (
  <div style={row}>
    <CTANestedPill variant="primary" icon={<Zap className="w-4 h-4" />}>Express en el día</CTANestedPill>
    <CTANestedPill variant="elevated" icon={<Phone className="w-4 h-4" />}>Escribinos por WhatsApp</CTANestedPill>
    <CTANestedPill variant="outline" iconPosition="left" icon={<Package className="w-4 h-4" />}>
      Planilla Low Cost
    </CTANestedPill>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <CTANestedPill variant="primary" disabled>Calculando ruta…</CTANestedPill>
    <CTANestedPill variant="elevated" disabled>Sin cobertura en Batán</CTANestedPill>
  </div>
);

export const OnBrandBlue = () => (
  <div className="bg-brand-blue-700" style={{ padding: 32, borderRadius: 16, maxWidth: 640 }}>
    <p className="font-subheading uppercase tracking-wider text-sm text-brand-yellow-500">Mar del Plata · 2026</p>
    <h3 className="font-display uppercase text-3xl text-white mt-2">Tu envío, hoy mismo</h3>
    <p className="font-sans text-sm text-white/80 mt-2 leading-relaxed">
      Retiramos en Zona Güemes y entregamos en Punta Mogotes desde $3.700.
    </p>
    <div style={{ ...row, marginTop: 24 }}>
      <CTANestedPill variant="primary" size="large">Cotizá Express</CTANestedPill>
      <CTANestedPill variant="elevated" size="large" icon={<MessageCircle className="w-4 h-4" />}>
        Hablá con nosotros
      </CTANestedPill>
    </div>
  </div>
);
