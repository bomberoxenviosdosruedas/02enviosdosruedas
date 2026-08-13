import * as React from 'react';
/** Cinta de clientes/rubros que cruza la home entre secciones. */
export interface MarqueeProps { items?: React.ReactNode[]; duration?: number; tone?: 'dark'|'yellow'|'light'; separator?: string; style?: React.CSSProperties; }
export declare function Marquee(props: MarqueeProps): JSX.Element;
