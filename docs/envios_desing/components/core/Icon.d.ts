import * as React from 'react';
/** Lucide icon wrapper — the site's only icon system. Names are PascalCase (Zap, ShieldCheck, MapPin). */
export interface IconProps { name: string; size?: number; strokeWidth?: number; color?: string; style?: React.CSSProperties; }
export declare function Icon(props: IconProps): JSX.Element;
