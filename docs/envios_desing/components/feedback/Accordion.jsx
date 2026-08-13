import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Acordeón de preguntas frecuentes. */
export function Accordion({items=[],defaultOpen=0,style}){
  const [open,setOpen]=React.useState(defaultOpen);
  return <div style={{display:'flex',flexDirection:'column',gap:12,...style}}>
    {items.map((it,i)=>{
      const on=open===i;
      return <div key={it.q} style={{borderRadius:'var(--radius-lg)',border:'1px solid '+(on?'var(--brand-yellow)':'var(--brand-blue-100)'),
        background:on?'#fff':'var(--brand-blue-50)',overflow:'hidden',transition:'all var(--dur-base)',
        boxShadow:on?'var(--shadow-soft-elevation)':'none'}}>
        <button onClick={()=>setOpen(on?-1:i)} style={{width:'100%',display:'flex',alignItems:'center',
          justifyContent:'space-between',gap:16,padding:'18px 20px',background:'transparent',border:'none',cursor:'pointer',
          fontFamily:'var(--font-subheading)',fontSize:'1.125rem',letterSpacing:'var(--ls-wide)',textTransform:'uppercase',
          color:'var(--brand-blue-700)',textAlign:'left'}}>
          <span>{it.q}</span>
          <span style={{transform:on?'rotate(180deg)':'none',transition:'transform var(--dur-base)',display:'inline-flex',
            color:'var(--brand-blue-700)'}}><Icon name="ChevronDown" size={20}/></span>
        </button>
        {on&&<div style={{padding:'0 20px 20px',fontSize:'.875rem',lineHeight:'var(--lh-relaxed)',color:'var(--brand-blue-600)'}}>{it.a}</div>}
      </div>;
    })}
  </div>;
}
