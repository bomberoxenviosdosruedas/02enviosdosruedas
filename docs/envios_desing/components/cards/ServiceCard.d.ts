import * as React from 'react';
/**
 * Tarjeta de servicio (Express / LowCost / Flex / 3PL). Cada tema trae su propio par de colores,
 * su tratamiento de imagen y su sombra dura — no los mezcles.
 */
export interface ServiceCardProps {
  theme?: 'express'|'lowcost'|'flex'|'3pl';
  icon?: string; badge?: string; city?: string; title: string; description?: string;
  stats?: { time: string; price: string; weight: string };
  image?: string; width?: number; height?: number; onClick?: () => void; style?: React.CSSProperties;
}
export declare function ServiceCard(props: ServiceCardProps): JSX.Element;
