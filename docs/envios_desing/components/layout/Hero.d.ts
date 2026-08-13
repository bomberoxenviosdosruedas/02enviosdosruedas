import * as React from 'react';
/**
 * Hero de la home: fondo azul institucional, titular Anton en tres líneas (una resaltada en amarillo),
 * par de CTAs en píldora, fila de garantías y visual con tarjeta de mapa + píldoras flotantes + contador.
 */
export interface HeroProps {
  badge?: string;
  /** Cada línea del titular; `mark: true` la pinta como bloque amarillo */
  lines?: ({ text: string; mark?: boolean } | string)[];
  lead?: string; primaryCta?: string; secondaryCta?: string;
  trust?: { icon: string; label: string }[];
  counter?: number; counterLabel?: string; mapImage?: string; bgImage?: string;
}
export declare function Hero(props: HeroProps): JSX.Element;
