import Image from 'next/image';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { CTANestedPill, Knockout } from '@/src/components/ui';
import HeroProceduralBackground from '@/src/components/ui/HeroProceduralBackground';
import { SUPPORT_PHONE } from '@/src/lib/promises';
import { FAQ_DATA } from './faqData';

const TOTAL_QUESTIONS = FAQ_DATA.reduce((total, group) => total + group.questions.length, 0);

/**
 * Firma visual: "la forma de lo que se pregunta".
 *
 * Una barra por categoría de `FAQ_DATA`, con la altura proporcional a cuántas
 * preguntas tiene cada una. La banda no es decoración: es el índice del FAQ
 * dibujado — el mismo dato que alimenta el acordeón de abajo, sin duplicar su
 * buscador. Las barras se encienden en cascada (`pulse` escalonado) y con
 * `prefers-reduced-motion` quedan todas encendidas.
 *
 * Vive en el padding inferior del hero y su alto es exactamente ese padding
 * (`h-28 sm:h-36 lg:h-44` = `pb-28 sm:pb-36 lg:pb-44`), así que no puede pisar
 * el texto ni el CTA.
 *
 * La proporción va por `scaleY` y no por `flex-grow`: cada barra es el único
 * hijo de su propia columna, y un ítem flex sin competencia se queda con el
 * 100% del espacio libre sin importar cuánto crezca. Escalar una caja de
 * `h-full` (misma resolución de porcentaje que ya usa la cadena) sí diferencia
 * las alturas, y `scaleY` no toca el layout: el rótulo de cantidad queda
 * siempre en su fila.
 */
const MAX_QUESTIONS = Math.max(...FAQ_DATA.map((group) => group.questions.length));
/** 0.86 deja aire entre la barra más alta y el rótulo de cantidad. */
const BAR_FILL = 0.86;

const bars = FAQ_DATA.map((group, i) => ({
  id: group.id,
  short: group.id.charAt(0).toUpperCase() + group.id.slice(1),
  count: group.questions.length,
  scaleY: (group.questions.length / MAX_QUESTIONS) * BAR_FILL,
  delay: i * 0.16,
}));

/**
 * Hero Preguntas Frecuentes — concepto "la forma de lo que se pregunta".
 *
 * EXCEPCIÓN DOCUMENTADA: este es el único hero centrado en desktop. Una pantalla
 * de respuestas es un documento, no un landing: se lee de arriba hacia abajo y
 * compone bien en un eje central. El resto de los heroes mantiene 7/5.
 *
 * La página ya tiene buscador y acordeón en `Faq-categories`, así que el hero
 * no repite ninguno de los dos: sólo anuncia cuántas preguntas hay, en cuántas
 * categorías, y ofrece el canal humano para lo que no esté.
 *
 * Todo el contenido sale de `FAQ_DATA` y `promises.ts`; el fallback es el
 * teléfono de soporte, no un SLA inventado.
 */
export default function FaqHero() {
  return (
    <section
      id="faq-hero"
      aria-label={`Preguntas frecuentes de Envíos DosRuedas en Mar del Plata: ${TOTAL_QUESTIONS} respuestas sobre servicios, tiempos, tarifas y confianza`}
      className="relative isolate flex min-h-[90dvh] w-full flex-col overflow-hidden bg-brand-blue-500 text-white"
    >
      <HeroProceduralBackground variant="default" tone="blue" />

      <div className="relative flex-1 flex items-center overflow-hidden">
        {/* Firma visual: una barra por categoría, alto = cantidad de preguntas. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-28 sm:h-36 lg:h-44 pointer-events-none"
        >
          {/* `pt-*` es holgura, no padding del hero: separa los rótulos de la
              última línea de texto sin romper la regla banda == pb. */}
          <ul className="mx-auto flex h-full max-w-3xl items-end justify-center gap-4 px-6 pt-2 sm:gap-8 sm:pt-3 lg:pt-4">
            {bars.map((bar) => (
              <li key={bar.id} className="flex h-full w-14 flex-col items-center gap-1.5 sm:w-16">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/85 tabular-nums">
                  {bar.count}
                </span>
                <span className="flex w-full flex-1 flex-col justify-end">
                  <span
                    className="w-full h-full origin-bottom rounded-t-sm bg-white/35 motion-safe:animate-pulse"
                    style={{ transform: `scaleY(${bar.scaleY})`, animationDelay: `${bar.delay}s` }}
                  />
                </span>
                <span className="font-subheading text-[10px] uppercase tracking-[0.16em] text-brand-yellow-500">
                  {bar.short}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-44">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:gap-8">
            <Image
              src="/elementos/dudas_transparent.webp"
              alt="Pieza de marca de Envíos DosRuedas con signos de interrogación para el centro de preguntas frecuentes"
              width={320}
              height={280}
              priority
              sizes="(min-width: 640px) 160px, 120px"
              className="h-24 w-auto object-contain sm:h-32 lg:h-36"
            />

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest bg-brand-yellow-500 text-brand-blue-500 shadow-accent-sm -rotate-1">
              <HelpCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              Centro de soporte · MDQ
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
              <span className="block">¿Tenés dudas?</span>
              <Knockout>acá la respondemos</Knockout>
            </h1>

            <p className="text-base sm:text-lg font-sans text-white/85 max-w-[56ch] leading-relaxed font-light">
              {TOTAL_QUESTIONS} respuestas sobre servicios, tiempos, tarifas y confianza, escritas
              por el equipo que opera en Mar del Plata. Si la tuya no está, preguntanos y te la
              respondemos.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <CTANestedPill
                href="https://wa.me/542236602699?text=Hola!%20Tengo%20una%20duda%20sobre%20los%20env%C3%ADos%20de%20DosRuedas"
                id="faq-hero-cta-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                className="focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500"
              >
                Preguntanos por WhatsApp
              </CTANestedPill>
              <a
                href="#faq-categories"
                className="inline-flex min-h-[44px] items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-500 rounded-md"
              >
                <ChevronDown className="h-5 w-5 shrink-0" aria-hidden="true" />
                Ver las {TOTAL_QUESTIONS} preguntas
              </a>
            </div>

            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.18em] text-white/85 tabular-nums">
              {TOTAL_QUESTIONS} preguntas · {FAQ_DATA.length} categorías · {SUPPORT_PHONE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
