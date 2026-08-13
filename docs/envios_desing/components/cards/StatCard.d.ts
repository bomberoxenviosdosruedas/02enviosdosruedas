import * as React from 'react';
/** Cifra destacada del bento de Features. Las cifras siempre van en la mono, nunca en Anton. */
export interface StatCardProps { variant?: 'hero'|'tint'; icon?: string; tag?: string; value: string; label: string; style?: React.CSSProperties; }
export declare function StatCard(props: StatCardProps): JSX.Element;
