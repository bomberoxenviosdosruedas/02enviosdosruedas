import * as React from 'react';
/** Captura de email en píldora — newsletter del pie y del bloque de comunidad. */
export interface SubscribeFormProps { placeholder?: string; cta?: string; onSubmit?: (email: string) => void; onDark?: boolean; style?: React.CSSProperties; }
export declare function SubscribeForm(props: SubscribeFormProps): JSX.Element;
