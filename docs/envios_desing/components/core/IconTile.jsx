import React from 'react';
import { Icon } from './Icon.jsx';

/** Cuadrado redondeado con un glifo. Amarillo sobre azul es el par por defecto. */
export function IconTile({name,size=48,tone='yellow',shadow=true,animate='none',style}){
  const [h,setH]=React.useState(false);
  const T={
    yellow:{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)',sh:'var(--shadow-hard-blue-sm)'},
    glass:{background:'rgba(255,255,255,.1)',color:'var(--brand-yellow)',border:'1px solid rgba(255,255,255,.1)',sh:'none'},
    tint:{background:'var(--brand-blue-50)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-blue-100)',sh:'none'},
    blue:{background:'var(--brand-blue-700)',color:'var(--brand-yellow)',border:'1px solid var(--brand-blue-700)',sh:'var(--shadow-hard-yellow-sm)'}
  }[tone];
  return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:size,height:size,flexShrink:0,display:'inline-flex',alignItems:'center',justifyContent:'center',
      borderRadius:'var(--radius-md)',background:T.background,color:T.color,border:T.border,
      boxShadow:shadow?T.sh:'none',transition:'transform var(--dur-base) var(--spring-ease),background var(--dur-base)',
      transform:h&&animate==='tilt'?'scale(1.05) rotate(12deg)':'none',
      animation:animate==='bob'?'edrIconBob 3s ease-in-out infinite':'none',...style}}>
    <Icon name={name} size={Math.round(size*0.42)}/>
  </span>;
}
