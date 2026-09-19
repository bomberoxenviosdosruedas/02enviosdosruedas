import { StepperHorizontal, type HorizontalStep } from '@enviosdosruedas/ui';

const quoteSteps: HorizontalStep[] = [
  { title: 'Direcciones', subtitle: 'Origen y destino' },
  { title: 'Servicio', subtitle: 'Express o Low Cost' },
  { title: 'Tus datos', subtitle: 'Nombre y WhatsApp' },
  { title: 'Confirmación', subtitle: 'Tarifa 2026' },
];

const wrap: React.CSSProperties = { maxWidth: 640, padding: '8px 24px' };

export const FirstStep = () => (
  <div style={wrap}>
    <StepperHorizontal steps={quoteSteps} currentStep={0} />
  </div>
);

export const InProgress = () => (
  <div style={wrap}>
    <StepperHorizontal steps={quoteSteps} currentStep={2} onStepClick={() => {}} />
  </div>
);

export const AllCompleted = () => (
  <div style={wrap}>
    <StepperHorizontal steps={quoteSteps} currentStep={quoteSteps.length} />
  </div>
);

export const ThreeStepsNoSubtitles = () => (
  <div style={{ ...wrap, maxWidth: 480 }}>
    <StepperHorizontal
      steps={[{ title: 'Cargá la planilla' }, { title: 'Revisá los envíos' }, { title: 'Confirmá' }]}
      currentStep={1}
    />
  </div>
);
