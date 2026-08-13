import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Tarjeta de vidrio con doble marco para secciones oscuras. */
export function BentoCard({icon,tag,title,description,items=[],footer,style}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{borderRadius:'var(--radius-2xl)',padding:8,background:h?'rgba(219,234,254,.1)':'rgba(219,234,254,.05)',
      border:'1px solid '+(h?'rgba(255,236,1,.3)':'rgba(9,80,246,.2)'),transition:'all var(--dur-base)',
      boxShadow:h?'0 25px 50px -12px rgba(0,0,0,.4)':'none',...style}}>
    <div style={{borderRadius:'var(--radius-lg)',padding:32,background:'var(--surface-card-dark)',
      border:'1px solid rgba(9,80,246,.2)',boxShadow:'inset 0 2px 4px 0 rgba(0,0,0,.15)',color:'#fff',
      display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',position:'relative',overflow:'hidden'}}>
      {icon&&<div style={{position:'absolute',right:16,bottom:16,opacity:.05,pointerEvents:'none'}}><Icon name={icon} size={144}/></div>}
      <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',gap:24}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          {icon&&<span style={{padding:12,background:'var(--brand-yellow)',color:'var(--brand-blue-700)',
            borderRadius:'var(--radius-md)',boxShadow:'2px 2px 0px #00277C',display:'inline-flex'}}><Icon name={icon} size={20}/></span>}
          {tag&&<span style={{fontFamily:'var(--font-subheading)',fontSize:'.625rem',fontWeight:700,letterSpacing:'var(--ls-wider)',
            textTransform:'uppercase',padding:'6px 12px',borderRadius:'var(--radius-sm)',background:'var(--brand-ink)',
            color:'var(--brand-yellow)',border:'1px solid rgba(255,236,1,.3)'}}>{tag}</span>}
        </div>
        <div>
          <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.875rem',textTransform:'uppercase',
            letterSpacing:'var(--ls-display)',margin:0,transition:'all var(--dur-base)',
            transform:h?'translateX(4px)':'none',color:h?'var(--brand-yellow)':'#fff'}}>{title}</h3>
          {description&&<p style={{fontSize:'.875rem',color:'var(--brand-blue-200)',lineHeight:'var(--lh-relaxed)',marginTop:8}}>{description}</p>}
        </div>
        {items.length>0&&<ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:10}}>
          {items.map(it=><li key={it} style={{display:'flex',alignItems:'center',gap:8,fontSize:'.75rem'}}>
            <Icon name="ShieldCheck" size={16} color="var(--brand-yellow)"/><span>{it}</span></li>)}
        </ul>}
      </div>
      {footer&&<div style={{position:'relative',zIndex:1,marginTop:24}}>{footer}</div>}
    </div>
  </div>;
}
