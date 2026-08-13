import * as React from 'react';
/** Pie del sitio: barra amarilla de 6px arriba, marca + columnas de enlaces + línea legal. */
export interface FooterProps {
  logoSrc?: string; tagline?: string; about?: string;
  columns?: { title: string; links: { label: string; href?: string; icon?: string }[] }[];
  socials?: { name: string; href?: string }[]; legal?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
