import * as React from 'react';
/** CTA principal: píldora con ícono en círculo anidado que avanza 4px al hover y se hunde a 0.95 al presionar. */
export interface CtaPillProps { children?: React.ReactNode; tone?: 'yellow'|'ghost'|'blue'; icon?: string; href?: string; onClick?: () => void; pulse?: boolean; style?: React.CSSProperties; }
export declare function CtaPill(props: CtaPillProps): JSX.Element;
