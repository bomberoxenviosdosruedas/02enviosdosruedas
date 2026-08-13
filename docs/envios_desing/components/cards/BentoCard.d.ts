import * as React from 'react';
/** Tarjeta de vidrio con doble marco (contenedor translúcido + panel interior) para secciones oscuras. */
export interface BentoCardProps { icon?: string; tag?: string; title: string; description?: string; items?: string[]; footer?: React.ReactNode; style?: React.CSSProperties; }
export declare function BentoCard(props: BentoCardProps): JSX.Element;
