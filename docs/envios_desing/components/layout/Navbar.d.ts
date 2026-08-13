import * as React from 'react';
/** Header fijo de todo el sitio: azul navy translúcido, celdas de nav delimitadas y barra amarilla deslizante. */
export interface NavbarProps {
  logoSrc?: string;
  items?: { id: string; label: string; icon?: string; children?: { label: string; description?: string; icon?: string }[] }[];
  active?: string; onNavigate?: (id: string) => void;
  /** Pasa al estado opaco con sombra después de 30px de scroll */
  scrolled?: boolean; phone?: string; sticky?: boolean;
}
export declare function Navbar(props: NavbarProps): JSX.Element;
