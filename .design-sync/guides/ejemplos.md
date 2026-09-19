# Ejemplos de composición — patrones de página

Patrones reales del sitio Envíos DosRuedas armados con los componentes del bundle. Todos asumen:

```jsx
const {
  HeroProceduralBackground, CTANestedPill, Badge, DoubleBezelCard, Card, CardHeader, CardTitle,
  CardDescription, CardContent, CardFooter, BentoGrid, BentoGridItem, RadioCardGroup, InputField,
  StepperHorizontal, StepperVertical, LogosCarousel, TimelineGroup, TimelineContent,
  ZapIcon, WalletIcon, PackageIcon, WarehouseIcon, MapPinIcon, PhoneIcon, MessageCircleIcon, CalculatorIcon,
} = window.EnviosDosRuedas;
```

Layout de página: contenedor `max-w-7xl mx-auto px-4 md:px-6`, secciones con `py-16 md:py-24`, alternando
`bg-white` / `bg-brand-blue-50` / `bg-brand-blue-700`.

## 1. Hero de servicio

`HeroProceduralBackground` es `absolute inset-0`: necesita un host `relative` con altura y `overflow-hidden`.

```jsx
<section className="relative overflow-hidden bg-brand-blue-700" style={{ minHeight: 520 }}>
  <HeroProceduralBackground variant="express" />
  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-24">
    <Badge variant="urgent" icon={<ZapIcon className="w-3.5 h-3.5" />}>Mensajería en moto · MDQ 2026</Badge>
    <h1 className="font-display uppercase text-5xl md:text-7xl text-white mt-4 leading-tight">
      Envíos Express <span className="block text-brand-yellow-500">en el día</span>
    </h1>
    <p className="font-sans text-lg text-brand-blue-100 mt-4 max-w-xl">
      Retiramos en Zona Güemes y entregamos en Playa Grande en un rango de 3 horas. Te avisamos en cada paso.
    </p>
    <div className="flex flex-wrap gap-3 mt-8">
      <CTANestedPill variant="primary" size="large" href="/cotizar/express">Cotizá tu envío</CTANestedPill>
      <CTANestedPill variant="elevated" size="large" href="/servicios">Mirá los servicios</CTANestedPill>
    </div>
  </div>
</section>
```

Variantes de fondo: `express`, `lowcost`, `flex`, `3pl`, `community`, `contact`, `default`.

## 2. Servicios en bento asimétrico (7/5)

```jsx
<BentoGrid>
  <BentoGridItem span="hero" variant="dark" innerClassName="flex-1 flex flex-col">
    <Badge variant="urgent" size="sm">Más rápido</Badge>
    <h3 className="font-display uppercase text-3xl mt-3">Express</h3>
    <p className="font-sans text-sm text-brand-blue-100 mt-2">Retiro y entrega en el día dentro de Mar del Plata.</p>
    <p className="font-mono tabular-nums text-2xl font-bold text-brand-yellow-500 mt-auto">$3.700</p>
  </BentoGridItem>
  <BentoGridItem span="standard" innerClassName="flex-1 flex flex-col">
    <Badge variant="economic" size="sm">Económico</Badge>
    <h3 className="font-display uppercase text-3xl text-brand-blue-700 mt-3">Low Cost</h3>
    <p className="font-sans text-sm text-brand-ink mt-2">Entrega programada al día siguiente.</p>
    <p className="font-mono tabular-nums text-2xl font-bold text-brand-blue-700 mt-auto">$3.000</p>
  </BentoGridItem>
  <BentoGridItem span="full" doubleBezel={false} className="bg-brand-blue-700 rounded-2xl p-10">
    <h3 className="font-display uppercase text-4xl text-white">Cotizá tu envío en segundos</h3>
    <CTANestedPill variant="primary" href="/cotizar/express" className="mt-6">Cotizá ahora</CTANestedPill>
  </BentoGridItem>
</BentoGrid>
```

Regla: `hero` (7) para Express y E-Commerce 3PL; `standard` (5) para Low Cost y Flex; `full` para el CTA del cotizador.

## 3. Tarifario

```jsx
<DoubleBezelCard>
  <h3 className="font-subheading uppercase tracking-wider text-xl text-brand-blue-700">Tarifario 2026</h3>
  <p className="font-sans text-sm text-brand-ink mt-1">Precios por distancia dentro de Mar del Plata.</p>
  <table className="w-full mt-4 text-sm">
    <thead><tr className="font-subheading uppercase tracking-wider text-xs text-brand-blue-500">
      <th className="text-left py-2">Rango</th><th className="text-right">Express</th><th className="text-right">Low Cost</th></tr></thead>
    <tbody className="font-mono tabular-nums text-brand-blue-700">
      <tr><td className="font-sans py-1.5">0 – 3 km</td><td className="text-right">$3.700</td><td className="text-right">$3.000</td></tr>
      <tr><td className="font-sans py-1.5">3 – 5 km</td><td className="text-right">$4.600</td><td className="text-right">$4.000</td></tr>
      <tr><td className="font-sans py-1.5">5 – 7 km</td><td className="text-right">$6.100</td><td className="text-right">$5.300</td></tr>
      <tr><td className="font-sans py-1.5">7 – 10 km</td><td className="text-right">$8.200</td><td className="text-right">$7.000</td></tr>
    </tbody>
  </table>
</DoubleBezelCard>
```

## 4. Cotizador (paso 1 + selección de servicio)

```jsx
function Cotizador() {
  const [servicio, setServicio] = React.useState('express');
  return (
    <DoubleBezelCard>
      <StepperHorizontal currentStep={1} steps={[
        { title: 'Direcciones', subtitle: 'Origen y destino' }, { title: 'Servicio', subtitle: 'Express o Low Cost' },
        { title: 'Tus datos', subtitle: 'Nombre y WhatsApp' }, { title: 'Confirmación', subtitle: 'Tarifa 2026' }]} />
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <InputField label="Origen (retiro)" placeholder="Friuli 1972, Zona Güemes" icon={<MapPinIcon className="w-4 h-4" />} />
        <InputField label="Destino (entrega)" placeholder="Av. Colón 1234, Playa Grande" icon={<MapPinIcon className="w-4 h-4" />} />
      </div>
      <RadioCardGroup className="mt-6" value={servicio} onChange={setServicio} options={[
        { id: 'express', serviceType: 'EXPRESS', label: 'Express', description: 'En el día', price: '$3.700', icon: <ZapIcon className="w-6 h-6" /> },
        { id: 'lowcost', serviceType: 'LOW_COST', label: 'Low Cost', description: 'Día siguiente', price: '$3.000', icon: <WalletIcon className="w-6 h-6" /> },
        { id: 'flex', serviceType: 'FLEX', label: 'Flex', description: 'MercadoLibre Flex', icon: <PackageIcon className="w-6 h-6" /> },
      ]} />
      <CTANestedPill variant="primary" size="large" className="mt-6">Calculá tu envío</CTANestedPill>
    </DoubleBezelCard>
  );
}
```

## 5. Cómo funciona

```jsx
<section className="bg-brand-blue-700 py-24">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="font-display uppercase text-5xl text-white">Cómo funciona</h2>
    <StepperVertical variant="dark" activeStep={1} className="mt-10" steps={[
      { title: 'Cotizá online', description: 'Ingresá origen y destino y mirá la tarifa 2026 al instante.', detail: 'Express 0–3 km: $3.700' },
      { title: 'Coordinamos el retiro', description: 'Te confirmamos por WhatsApp y un repartidor pasa por Zona Güemes o donde estés.' },
      { title: 'Entregamos en el día', description: 'Seguí tu envío en tiempo real, de Camet a Punta Mogotes.' },
      { title: 'Quedate tranquilo', description: 'Te avisamos con foto de entrega y firma de quien recibe.' },
    ]} />
  </div>
</section>
```

## 6. Banda de confianza + CTA de WhatsApp

```jsx
<section className="bg-brand-blue-50 py-16">
  <p className="font-subheading uppercase tracking-wider text-sm text-brand-blue-700 text-center">
    Comercios de Mar del Plata que ya envían con nosotros
  </p>
  <LogosCarousel className="mt-6" logos={[{ name: 'Almacén Güemes' }, { name: 'Café Playa Grande' }, { name: 'Librería Chauvín' }]} />
  <div className="flex justify-center mt-10">
    <CTANestedPill variant="primary" href="https://wa.me/5492236602699" target="_blank" rel="noopener"
      icon={<MessageCircleIcon className="w-4 h-4" />}>Escribinos por WhatsApp</CTANestedPill>
  </div>
</section>
```

El CTA de WhatsApp es **amarillo de marca**, nunca verde.
