import * as React from 'react';
/** Titular de sección: badge + Anton en mayúscula + bajada. La segunda línea va en amarillo. */
export interface SectionHeadingProps {
  badge?: string; badgeTone?: 'yellow'|'yellowSoft'|'blue'|'ink'|'glass'|'white';
  title: string; highlight?: string; lead?: string;
  align?: 'left'|'center'; onDark?: boolean;
  /** Subraya la línea amarilla con el azul 500, como en "A tu medida" */
  underline?: boolean; style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
