import React from 'react';
import { Icon } from '../core/Icon.jsx';

const T={
  white:{background:'#fff',color:'var(--brand-blue-700)',border:'1px solid var(--brand-blue-100)',shadow:'0 20px 25px -5px rgba(0,0,0,.1)'},
  yellow:{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)',shadow:'2px 2px 0px #0636A5'},
  blue:{background:'var(--brand-blue-700)',color:'#fff',border:'1px solid var(--brand-yellow)',shadow:'2px 2px 0px #FFEC01'}
};
/** Píldora flotante del hero, con la animación de flote lento. */
export function FloatingPill({icon,children,tone='white',delay=0,float=true,style}){
  const t=T[tone]||T.white;
  return <span style={{display:'inline-flex',alignItems:'center',gap:8,whiteSpace:'nowrap',
    padding:'10px 16px',borderRadius:'var(--radius-pill)',fontFamily:'var(--font-mono)',fontSize:'.625rem',
    fontWeight:700,letterSpacing:'var(--ls-wider)',textTransform:'uppercase',
    background:t.background,color:t.color,border:t.border,boxShadow:t.shadow,
    animation:float?`edrFloatSlow 4s ease-in-out infinite ${delay}s`:'none',...style}}>
    {icon&&<Icon name={icon} size={16}/>}{children}</span>;
}
