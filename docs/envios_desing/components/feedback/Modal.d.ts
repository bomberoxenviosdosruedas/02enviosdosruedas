import * as React from 'react';
/** Diálogo de detalle (servicio, tarifa) sobre velo `--brand-dark` al 85% con blur. */
export interface ModalProps { open?: boolean; title: string; badge?: string; children?: React.ReactNode; footer?: React.ReactNode; onClose?: () => void; width?: number; }
export declare function Modal(props: ModalProps): JSX.Element | null;
