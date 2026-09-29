import React from 'react';
import { Clock, Package, Tag, Zap } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, DoubleBezelCard, Knockout } from '@/components/ui';
import Badge from '@/components/ui/Badge';
import HeroProceduralBackground from '@/components/ui/HeroProceduralBackground';
import { EXPRESS_TIERS } from '@/lib/pricing';
import { EXPRESS_WINDOW, EXPRESS_WINDOW_SHORT, STANDARD_WEIGHT_KG } from '@/lib/promises';

const ars = (value: number) => `$${value.toLocaleString('es-AR')}`;

/** Los tres números que un cliente de Express necesita antes de cotizar. */
const chips = [
  { icon: Clock, value: EXPRESS_WINDOW_SHORT, label: 'Entrega' },
  { icon: Tag, value: ars(EXPRESS_TIERS[0].price), label: 'Tarifa desde' },
  { icon: Package, value: `${STANDARD_WEIGHT_KG} kg`, label: 'Por bulto' },
];

/**
 * El cronómetro: el argumento del servicio dibujado como reloj.
 *
 * El dial son 12 horas. Sobre él se pintan las dos únicas horas que el dueño
 * garantizó: primero la anticipación (amarillo) y después la franja de entrega
 * (azul). Nunca "60 a 90 minutos": esa promesa se retiró por inexacta, y un
 * reloj que marka minutos invites a volver a leer un número que no prometimos.
 */
const RADIO_DIAL = 86;
/** Perímetro del dial: 2 × π × 86 ≈ 540. */
const PERIMETRO_DIAL = 2 * Math.PI * RADIO_DIAL;
/** Una hora sobre el dial. */
const HORA_DIAL = PERIMETRO_DIAL / 12;
const LEN_ANTICIPACION = Math.round(HORA_DIAL * 2);
const LEN_FRANJA = Math.round(HORA_DIAL * 3);
/** La anticipación arranca a las 12; la franja sigue justo donde termina. */
const GRADO_INICIO_FRANJA = -90 + (LEN_ANTICIPACION / PERIMETRO_DIAL) * 360;

function CronometroExpress() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <svg
        viewBox="0 0 200 200"
        aria-hidden="true"
        className="h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#FFFFFF" />
        <circle
          cx="100"
          cy="100"
          r={RADIO_DIAL}
          fill="none"
          stroke="#E6EEFE"
          strokeWidth="14"
        />
        {/* Marcas de las 12, 3, 6 y 9: el dial se lee como reloj, no como anillo. */}
        <g stroke="#BACEFD" strokeWidth="2">
          <line x1="100" y1="6" x2="100" y2="16" />
          <line x1="194" y1="100" x2="184" y2="100" />
          <line x1="100" y1="194" x2="100" y2="184" />
          <line x1="6" y1="100" x2="16" y2="100" />
        </g>
        <circle
          className="motion-safe:animate-draw"
          cx="100"
          cy="100"
          r={RADIO_DIAL}
          fill="none"
          stroke="#FFEC01"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={LEN_ANTICIPACION}
          transform={`rotate(-90 100 100)`}
          style={{ '--draw-len': LEN_ANTICIPACION } as React.CSSProperties}
        />
        <circle
          className="motion-safe:animate-draw"
          cx="100"
          cy="100"
          r={RADIO_DIAL}
          fill="none"
          stroke="#0950F6"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={LEN_FRANJA}
          transform={`rotate(${GRADO_INICIO_FRANJA} 100 100)`}
          style={{ '--draw-len': LEN_FRANJA, animationDelay: '0.5s' } as React.CSSProperties}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center pb-[10%] text-center">
        <span className="font-mono text-[2.75rem] font-bold leading-[0.9] tracking-[-0.05em] tabular-nums text-brand-blue-500 sm:text-5xl">
          3 hs
        </span>
        <span className="font-subheading text-[13px] uppercase tracking-[0.12em] text-brand-blue-500 sm:text-base">
          Franja a elección
        </span>
      </div>
    </div>
  );
}

/**
 * Hero Express — concepto "la traza directa".
 *
 * Idea: Express es el único servicio punto a punto sin agrupar, así que la
 * firma visual es UNA traza que se dibuja sola de origen a destino (keyframe
 * `draw`), rematada por un barrido de radar en el nodo de llegada. El
 * contraste con Home ("la calzada", líneas de carril horizontales) es
 * deliberado: acá la ruta es única, no una red.
 *
 * El trazo arranca en su estado final legible y la animación es `motion-safe:`,
 * así que con reduced-motion o sin JS se ve la ruta completa, sólo quieta.
 */
export default function ExpressHero() {
  return (
    <section
      id="express-hero"
      aria-label="Envíos Express en moto con entrega en franja horaria de 3 horas a elección en Mar del Plata"
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="express" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: la traza directa + radar de llegada. */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          {/* La traza va en un SVG estirado (`preserveAspectRatio="none"`): son
              curvas finas, la distorsión no se nota y nos deja barrer todo el
              ancho. El radar, en cambio, necesita círculos reales — por eso va
              aparte, en un SVG cuadrado con su propio aspect ratio. */}
          <svg
            className="absolute inset-0 h-full w-full"
            style={{ opacity: 0.32 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 620"
            preserveAspectRatio="none"
          >
            {/* Ruta origen → destino. --draw-len (1800) >= longitud real del
                path (1634) para que el trazo sea un único dash y se vea
                completo al terminar la animación. */}
            <path
              d="M -40 570 C 250 555, 430 300, 770 305 S 1190 130, 1500 78"
              fill="none"
              stroke="#FFEC01"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1800"
              className="motion-safe:animate-draw"
              style={{ '--draw-len': '1800' } as React.CSSProperties}
            />
            {/* Guía estática bajo la traza: la ruta existe aunque no se anime. */}
            <path
              d="M -40 570 C 250 555, 430 300, 770 305 S 1190 130, 1500 78"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="6 10"
              opacity="0.45"
            />
            {/* Nodo de origen. */}
            <circle cx="96" cy="540" r="7" fill="#FFFFFF" opacity="0.85" />
            <circle cx="96" cy="540" r="16" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 8" opacity="0.5" />
          </svg>

          {/* Nodo de destino: barrido de radar. */}
          <svg
            className="absolute right-[4%] top-[8%] w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] lg:w-[300px] lg:h-[300px]"
            style={{ opacity: 0.34 }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 -150 300 300"
          >
            <g className="motion-safe:animate-radar">
              <path d="M 0 0 L 86 0 A 86 86 0 0 0 60.8 -60.8 Z" fill="#FFEC01" opacity="0.4" />
            </g>
            <circle r="86" fill="none" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="6 10" opacity="0.7" />
            <circle r="132" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="4 12" opacity="0.4" />
            <circle r="6" fill="#FFEC01" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 — copy + CTA. Nunca centrado en desktop. */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<Zap className="h-4 w-4" aria-hidden="true" />}
              >
                Mensajería en moto · Flota propia
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Envíos Express,</span>
                <Knockout className="whitespace-nowrap">puerta a puerta</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Retiramos tu paquete y lo entregamos en {EXPRESS_WINDOW} a elección en todo Mar del
                Plata. Sin agrupar ni esperar: tarifa fija por distancia y coordinación directa por
                WhatsApp.
              </p>

              {/* Recorrido directo: el servicio es punto a punto, sin desvíos. */}
              <p className="flex items-center gap-2.5 font-subheading text-base uppercase tracking-[0.08em] text-white">
                <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-blue-500 font-mono text-xs font-bold">
                  A
                </span>
                Retiro
                <span
                  className="h-0 min-w-10 flex-1 border-t-[3px] border-dashed border-brand-yellow-500"
                  aria-hidden="true"
                />
                Entrega
                <span className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-brand-yellow-500 font-mono text-xs font-bold text-brand-blue-500">
                  B
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="/cotizar"
                  id="express-hero-cta-cotizar"
                  variant="primary"
                  size="large"
                  className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
                >
                  Cotizá tu envío Express
                </CTANestedPill>
                <a
                  href="https://wa.me/542236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20Express"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0" aria-hidden="true" />
                  O escribinos por WhatsApp
                </a>
              </div>

              <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-3 max-w-xl mx-auto lg:mx-0">
                {chips.map((chip) => (
                  <li key={chip.label} className="p-3 rounded-xl bg-white/10 border border-white/20 text-center">
                    <chip.icon className="w-4 h-4 mx-auto text-brand-yellow-500" aria-hidden="true" />
                    <span className="block font-mono text-lg sm:text-2xl text-brand-yellow-500 tabular-nums mt-1.5">{chip.value}</span>
                    <span className="block font-subheading text-[11px] sm:text-sm uppercase tracking-wider text-white mt-0.5">{chip.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT 5 — bezel doble con la pieza de marca del servicio. */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard variant="dark" className="w-full max-w-md" innerClassName="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="font-subheading text-sm tracking-widest text-brand-yellow-500 uppercase">
                    Retiro → entrega directa
                  </span>
                </div>

                <div className="relative w-full rounded-xl bg-brand-blue-700 p-4 sm:p-5">
                  <CronometroExpress />
                </div>

                <ul className="flex items-center justify-center gap-3 text-center font-sans text-xs text-white/85">
                  <li className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand-yellow-500" aria-hidden="true" />
                    2 hs de anticipación
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                    3 hs de franja
                  </li>
                </ul>

                <div className="border-t border-white/15 pt-3 flex items-center justify-between gap-3 font-mono text-xs sm:text-sm text-white/85 tabular-nums">
                  <span className="truncate">{EXPRESS_WINDOW_SHORT} a elección</span>
                  <span className="text-brand-yellow-500 shrink-0">Punto a punto</span>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
