import React from 'react';
import { Button } from '../core/Button.jsx';

/** Captura de email en píldora: input y botón dentro del mismo contenedor. */
export function SubscribeForm({placeholder='tu@email.com',cta='Suscribirme',onSubmit,onDark=true,style}){
  const [v,setV]=React.useState(''),[f,setF]=React.useState(false);
  return <form onSubmit={e=>{e.preventDefault();onSubmit&&onSubmit(v);}}
    style={{display:'flex',alignItems:'center',gap:8,padding:6,borderRadius:'var(--radius-pill)',
      background:onDark?'rgba(255,255,255,.05)':'var(--brand-blue-50)',
      border:'1px solid '+(f?'var(--brand-yellow)':onDark?'rgba(255,255,255,.2)':'var(--brand-blue-100)'),
      transition:'border-color var(--dur-fast)',...style}}>
    <input value={v} onChange={e=>setV(e.target.value)} onFocus={()=>setF(true)} onBlur={()=>setF(false)} placeholder={placeholder}
      style={{flex:1,background:'transparent',border:'none',outline:'none',padding:'8px 16px',
        fontFamily:'var(--font-sans)',fontSize:'.875rem',color:onDark?'#fff':'var(--brand-blue-700)'}}/>
    <Button size="sm" iconRight="ArrowRight" style={{borderRadius:'var(--radius-pill)',height:36}}>{cta}</Button>
  </form>;
}
