import React from 'react';
import { Icon } from './Icon.jsx';

/** CTA en píldora con ícono anidado que se desplaza al pasar el mouse. */
export function CtaPill({children,tone='yellow',icon='ArrowRight',href,onClick,pulse=false,style}){
  const [h,setH]=React.useState(false),[a,setA]=React.useState(false);
  const T={
    yellow:{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)',chip:'rgba(6,54,165,.15)',hoverShadow:'0 8px 20px -8px rgba(255,236,1,.5)'},
    ghost:{background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.3)',chip:'rgba(255,255,255,.1)',hoverShadow:'none'},
    blue:{background:'var(--brand-blue-700)',color:'#fff',border:'1px solid var(--brand-blue-700)',chip:'rgba(255,236,1,.2)',hoverShadow:'0 8px 20px -8px rgba(6,54,165,.5)'}
  }[tone];
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setA(false);}}
    onMouseDown={()=>setA(true)} onMouseUp={()=>setA(false)}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'space-between',gap:'.5rem',borderRadius:'var(--radius-pill)',
      padding:'.75rem 1.5rem',fontWeight:700,fontFamily:'var(--font-mono)',fontSize:'.85rem',letterSpacing:'var(--ls-wide)',
      textTransform:'uppercase',cursor:'pointer',textDecoration:'none',
      transition:'all .25s var(--smooth-ease)',transform:a?'scale(.95)':h?'scale(1.02)':'scale(1)',
      background:T.background,color:T.color,border:T.border,boxShadow:h?T.hoverShadow:'none',
      animation:pulse?'edrBorderPulse 2s ease-in-out infinite':'none',...style}}>
    <span>{children}</span>
    <span style={{display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:'var(--radius-pill)',
      width:'1.75rem',height:'1.75rem',marginLeft:'.5rem',background:T.chip,
      transform:h?'translateX(4px)':'none',transition:'transform var(--dur-base) ease'}}><Icon name={icon} size={16}/></span>
  </a>;
}
