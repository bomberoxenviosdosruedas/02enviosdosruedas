import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Diálogo de detalle de servicio, sobre velo azul. */
export function Modal({open,title,badge,children,footer,onClose,width=680}){
  if(!open) return null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:2000,background:'rgba(0,16,53,.85)',
    backdropFilter:'blur(6px)',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
    <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:'var(--radius-2xl)',
      border:'2px solid var(--brand-blue-700)',boxShadow:'var(--shadow-hard-blue)',width:'100%',maxWidth:width,
      position:'relative',overflow:'hidden',color:'var(--brand-blue-700)'}}>
      <div style={{padding:'24px 32px',borderBottom:'1px solid var(--brand-blue-100)',display:'flex',
        alignItems:'center',justifyContent:'space-between',gap:16}}>
        <div>
          {badge&&<span style={{fontFamily:'var(--font-subheading)',fontSize:'.625rem',fontWeight:700,
            letterSpacing:'var(--ls-wider)',textTransform:'uppercase',background:'var(--brand-yellow)',
            color:'var(--brand-blue-700)',padding:'4px 10px',borderRadius:'var(--radius-pill)',display:'inline-block',marginBottom:8}}>{badge}</span>}
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.875rem',textTransform:'uppercase',
            letterSpacing:'var(--ls-display)',lineHeight:1,margin:0,color:'var(--brand-ink)'}}>{title}</h3>
        </div>
        <button onClick={onClose} aria-label="Cerrar" style={{background:'var(--brand-blue-50)',border:'1px solid var(--brand-blue-100)',
          borderRadius:'var(--radius-pill)',width:36,height:36,display:'flex',alignItems:'center',justifyContent:'center',
          cursor:'pointer',color:'var(--brand-blue-700)',flexShrink:0}}><Icon name="X" size={18}/></button>
      </div>
      <div style={{padding:32,fontSize:'.9375rem',lineHeight:'var(--lh-relaxed)',color:'var(--brand-blue-600)'}}>{children}</div>
      {footer&&<div style={{padding:'0 32px 32px'}}>{footer}</div>}
    </div>
  </div>;
}
