import { StepperVertical, type VerticalStep } from '@enviosdosruedas/ui';

const howItWorks: VerticalStep[] = [
  {
    title: 'Cotizá online',
    description: 'Ingresá origen y destino en Mar del Plata y obtené la tarifa 2026 al instante.',
    detail: 'Express 0–3 km: $3.700',
  },
  {
    title: 'Coordinamos el retiro',
    description: 'Te confirmamos por WhatsApp y un repartidor pasa a buscar tu paquete por Zona Güemes o donde estés.',
  },
  {
    title: 'Entregamos en el día',
    description: 'Seguí tu envío en tiempo real hasta que llega a destino, de Camet a Punta Mogotes.',
  },
  {
    title: 'Quedate tranquilo',
    description: 'Te avisamos con foto de entrega y firma de quien recibe.',
  },
];

export const HowItWorks = () => (
  <div style={{ maxWidth: 560, padding: 8 }}>
    <StepperVertical steps={howItWorks} activeStep={1} />
  </div>
);

export const DarkVariant = () => (
  <div className="bg-brand-blue-700" style={{ padding: 32, borderRadius: 16, maxWidth: 600 }}>
    <StepperVertical steps={howItWorks} activeStep={2} variant="dark" />
  </div>
);

export const TrackingWithBadges = () => (
  <div style={{ maxWidth: 560, padding: 8 }}>
    <StepperVertical
      activeStep={2}
      completedSteps={[0, 1]}
      steps={[
        {
          title: 'Retirado',
          description: 'Paquete retirado en Centro de Distribución, Puerto.',
          detail: '09:12 hs · 18/09/2026',
          badge: 'OK',
        },
        {
          title: 'En viaje',
          description: 'Repartidor en moto camino a Playa Grande.',
          detail: '09:40 hs · 3,8 km',
          badge: 'OK',
        },
        {
          title: 'Llegando',
          description: 'Tu envío está a menos de 5 minutos. Esperá en la puerta.',
          detail: 'ETA 10:05 hs',
          badge: 'Ahora',
        },
        { title: 'Entregado', description: 'Te avisamos cuando se confirme la entrega.' },
      ]}
    />
  </div>
);
