import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Confirmación abajo a la derecha. */
export function Toast({message,show=false,icon='CircleCheck'}){
  return <div style={{position:'fixed',bottom:24,right:24,zIndex:9999,display:'flex',alignItems:'center',gap:12,
    background:'var(--brand-blue-700)',color:'#fff',border:'2px solid var(--brand-yellow)',borderRadius:'var(--radius-pill)',
    padding:'12px 20px',fontFamily:'var(--font-sans)',fontSize:'.875rem',fontWeight:600,
    boxShadow:'var(--shadow-soft-elevation)',pointerEvents:'none',
    transform:show?'translateY(0)':'translateY(24px)',opacity:show?1:0,transition:'all var(--dur-base) var(--spring-ease)'}}>
    <Icon name={icon} size={18} color="var(--brand-yellow)"/>{message}
  </div>;
}
