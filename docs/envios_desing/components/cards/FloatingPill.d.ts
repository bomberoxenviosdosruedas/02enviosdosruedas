import * as React from 'react';
/** Píldora flotante que se superpone al visual del hero. */
export interface FloatingPillProps { icon?: string; children?: React.ReactNode; tone?: 'white'|'yellow'|'blue'; delay?: number; float?: boolean; style?: React.CSSProperties; }
export declare function FloatingPill(props: FloatingPillProps): JSX.Element;
