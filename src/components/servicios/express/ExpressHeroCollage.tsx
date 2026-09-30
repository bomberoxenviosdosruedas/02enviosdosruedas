'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';
import { EXPRESS_CUTOFF_TIME } from '@/lib/promises';

/**
 * Collage del hero Express (propuesta "figma").
 *
 * Teselas sueltas que se superponen por detrás de la columna de texto: foto de
 * la moto, repartidor en duotono azul, palabras en Anton y un sticker amarillo
 * con el corte. Es decorativo (`aria-hidden`), no repite la promesa del texto.
 *
 * Motion: entrada escalonada al entrar en viewport (IntersectionObserver) y un
 * parallax leve con el puntero. Solo transform/opacity, sin listeners de
 * scroll; el puntero escribe variables CSS por ref, sin re-render. Con
 * reduced-motion las teselas aparecen quietas y sin parallax.
 */

interface Tile {
  key: string;
  /** Posición y tamaño: mobile apilado debajo del texto, desktop a la derecha. */
  className: string;
  /** Rotación en grados. */
  r: number;
  /** Profundidad del parallax en px por unidad de puntero. */
  d: number;
  /** Orden en la entrada escalonada. */
  i: number;
  content?: React.ReactNode;
}

const wordClass =
  'flex items-center justify-center font-display uppercase leading-[0.85] tracking-[-0.01em]';

const tiles: Tile[] = [
  {
    key: 'moto',
    className:
      'left-0 top-0 w-[64%] aspect-[560/262] overflow-hidden rounded-xl bg-brand-blue-50 lg:left-[24%] lg:top-[3%] lg:w-1/2',
    r: -2,
    d: 8,
    i: 0,
    content: (
      <Image
        src="/heroes/express-moto.webp"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 400px, 64vw"
        className="object-cover object-top"
      />
    ),
  },
  {
    key: 'rider',
    // Duotono: grayscale + screen sobre #3570F8. El negro de la foto queda en
    // azul y el blanco en blanco: nada más oscuro que #0950F6 en pantalla.
    className:
      'right-0 top-[120px] w-[54%] aspect-[1408/768] isolate overflow-hidden rounded-2xl bg-brand-blue-400 lg:top-[38%] lg:w-[44%]',
    r: 3,
    d: 12,
    i: 1,
    content: (
      <Image
        src="/img/generales/repartidor.webp"
        alt=""
        fill
        sizes="(min-width: 1024px) 360px, 54vw"
        className="object-cover grayscale contrast-[1.05] mix-blend-screen"
      />
    ),
  },
  {
    key: 'word',
    // "Servicio Express" en dos líneas: en una sola no entra en el ancho de la
    // tesela sin romper el ritmo de las otras. Anton es condensada, ~0.52em por
    // carácter en mayúscula.
    className: cn(
      wordClass,
      'flex-col left-[2%] top-[248px] h-[104px] w-[46%] rounded-sm bg-brand-blue-400 text-[26px] text-white lg:left-[24%] lg:top-[60%] lg:h-[184px] lg:w-[32%] lg:text-[42px]'
    ),
    r: -3,
    d: 10,
    i: 2,
    content: (
      <>
        <span>Servicio</span>
        <span>Express</span>
      </>
    ),
  },
  {
    key: 'desde',
    className: cn(
      wordClass,
      'hidden lg:flex left-[58%] top-[80%] h-[84px] w-[22%] rounded-md bg-brand-yellow-500 text-[40px] text-brand-blue-500'
    ),
    r: 4,
    d: 9,
    i: 6,
    content: 'Desde',
  },
  {
    key: 'soft',
    className:
      'left-[46%] top-[310px] size-14 rounded-sm bg-brand-blue-100 lg:left-[80%] lg:top-[86%] lg:size-[72px]',
    r: 6,
    d: 4,
    i: 3,
  },
  {
    key: 'note',
    className:
      'right-[2%] top-[320px] flex items-center justify-center rounded-md bg-white px-3 py-2 text-center font-mono text-xs leading-[1.3] tracking-[0.05em] tabular-nums text-brand-blue-500 lg:left-[30%] lg:right-auto lg:top-[58%]',
    r: 1,
    d: 3,
    i: 4,
    content: 'Retiro A · Entrega B',
  },
  {
    key: 'sticker',
    className:
      'right-[4%] top-10 whitespace-nowrap rounded-full bg-brand-yellow-500 px-4 py-2.5 font-subheading text-lg uppercase leading-none tracking-[0.08em] text-brand-blue-500 lg:right-[6%] lg:top-[10%]',
    r: 4,
    d: 14,
    i: 5,
    content: `Corte ${EXPRESS_CUTOFF_TIME}`,
  },
];

export default function ExpressHeroCollage({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [inView, setInView] = useState(false);
  // Con reduced-motion no hay entrada: las teselas se muestran quietas desde el inicio.
  const shown = inView || Boolean(reduceMotion);

  // Entrada: una sola vez, cuando el collage asoma al viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduceMotion]);

  // Parallax con el puntero sobre todo el hero, solo con mouse/trackpad.
  useEffect(() => {
    const el = ref.current;
    const hero = el?.closest('section');
    if (!el || !hero) return;
    const reset = () => {
      el.style.setProperty('--mx', '0');
      el.style.setProperty('--my', '0');
    };
    if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) {
      reset();
      return;
    }
    let raf = 0;
    let nx = 0;
    let ny = 0;
    const onMove = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.setProperty('--mx', nx.toFixed(3));
          el.style.setProperty('--my', ny.toFixed(3));
          raf = 0;
        });
      }
    };
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', reset);
    return () => {
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-in={shown ? 'true' : 'false'}
      className={cn('group pointer-events-none relative', className)}
      style={
        {
          '--mx': 0,
          '--my': 0,
          '--enter': shown ? '0px' : '12px',
        } as React.CSSProperties
      }
    >
      {tiles.map((tile) => (
        <div
          key={tile.key}
          className={cn(
            'absolute motion-safe:group-data-[in=false]:opacity-0',
            tile.className
          )}
          style={{
            transform: `translate3d(calc(var(--mx) * ${tile.d}px), calc(var(--my) * ${tile.d}px + var(--enter)), 0) rotate(${tile.r}deg)`,
            transition: `transform 500ms cubic-bezier(.2,.7,.2,1), opacity 400ms ease ${tile.i * 60}ms`,
          }}
        >
          {tile.content}
        </div>
      ))}
    </div>
  );
}
