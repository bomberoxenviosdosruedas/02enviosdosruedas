import * as React from 'react';
/** Control de formulario del sistema: relleno azul 50, radio 12px, foco amarillo con halo. */
export interface FieldProps {
  label?: string; type?: string; as?: 'input'|'textarea'|'select';
  placeholder?: string; value?: string; onChange?: (e: any) => void;
  options?: string[]; rows?: number; hint?: string; style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
