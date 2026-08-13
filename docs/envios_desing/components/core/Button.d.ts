import * as React from 'react';
/** Botón sólido: Bebas Neue en mayúscula, radio 8px, sin sombra en reposo. */
export interface ButtonProps {
  children?: React.ReactNode;
  /** default = amarillo (CTA), brand = azul con filo amarillo, outline (sobre oscuro), outlineBlue (sobre blanco), secondary, ghost */
  variant?: 'default'|'brand'|'outline'|'outlineBlue'|'secondary'|'ghost';
  size?: 'sm'|'md'|'lg';
  /** Nombre Lucide en PascalCase */
  icon?: string; iconRight?: string;
  block?: boolean; disabled?: boolean;
  as?: 'button'|'a'; href?: string; onClick?: () => void; style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
