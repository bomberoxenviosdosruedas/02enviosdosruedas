import * as React from 'react';
/** Acordeón de preguntas frecuentes; el panel abierto pasa a blanco con filo amarillo. */
export interface AccordionProps { items?: { q: string; a: React.ReactNode }[]; defaultOpen?: number; style?: React.CSSProperties; }
export declare function Accordion(props: AccordionProps): JSX.Element;
