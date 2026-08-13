import * as React from 'react';
/** Tarjeta de red social del bloque Comunidad. Usa los colores oficiales de cada red, no los de la marca. */
export interface SocialCardProps { network?: 'facebook'|'instagram'|'whatsapp'; handle?: string; title: string; description?: string; cta?: string; href?: string; style?: React.CSSProperties; }
export declare function SocialCard(props: SocialCardProps): JSX.Element;
