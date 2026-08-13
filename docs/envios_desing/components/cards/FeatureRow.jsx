import React from 'react';
import { IconTile } from '../core/IconTile.jsx';

/** Fila de beneficio: chip de ícono, título en Bebas y descripción. Se corre 4px al hover. */
export function FeatureRow({icon,title,children,style}){
  const [h,setH]=React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:'flex',gap:16,alignItems:'flex-start',padding:16,borderRadius:'var(--radius-md)',
      border:'1px solid '+(h?'var(--brand-blue-700)':'transparent'),background:h?'#fff':'transparent',
      transform:h?'translateX(4px)':'none',transition:'all var(--dur-base)',cursor:'default',...style}}>
    <IconTile name={icon} size={48} animate="tilt"/>
    <div>
      <h3 style={{fontFamily:'var(--font-subheading)',fontSize:'1.5rem',textTransform:'uppercase',
        letterSpacing:'var(--ls-wide)',color:'var(--brand-blue-700)',lineHeight:1,margin:'0 0 8px'}}>{title}</h3>
      <p style={{fontSize:'.875rem',color:'var(--brand-blue-600)',lineHeight:'var(--lh-relaxed)',margin:0}}>{children}</p>
    </div>
  </div>;
}
