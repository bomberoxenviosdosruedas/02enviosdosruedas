import * as React from 'react';
/** Etiqueta de sección o de tarjeta (`.badge-pill` en el código fuente). */
export interface BadgePillProps { children?: React.ReactNode; tone?: 'yellow'|'yellowSoft'|'blue'|'ink'|'glass'|'white'; pulse?: boolean; style?: React.CSSProperties; }
export declare function BadgePill(props: BadgePillProps): JSX.Element;
