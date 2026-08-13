import * as React from 'react';
/** Chip cuadrado redondeado con un ícono Lucide — encabeza features, tarjetas y filas. */
export interface IconTileProps { name: string; size?: number; tone?: 'yellow'|'glass'|'tint'|'blue'; shadow?: boolean; animate?: 'none'|'tilt'|'bob'; style?: React.CSSProperties; }
export declare function IconTile(props: IconTileProps): JSX.Element;
