import React from 'react';
import { Icon } from '../core/Icon.jsx';

const NETS={
  facebook:{bg:'#1877F2',shadow:'12px 12px 0px 0px rgba(24,119,242,.3)',tilt:'-1deg',icon:'Facebook'},
  instagram:{bg:'linear-gradient(to top right,#f09433,#dc2743,#bc1888)',shadow:'12px 12px 0px 0px rgba(220,39,67,.3)',tilt:'1deg',icon:'Instagram'},
  whatsapp:{bg:'#25D366',shadow:'12px 12px 0px 0px rgba(37,211,102,.3)',tilt:'-1deg',icon:'MessageCircle'}
};
/** Tarjeta de red social. Se ensancha y rota levemente al pasar el mouse. */
export function SocialCard({network='facebook',handle,title,description,cta='Seguir comunidad',href,style}){
  const [h,setH]=React.useState(false);
  const n=NETS[network]||NETS.facebook;
  return <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{flex:h?1.4:1,height:420,padding:48,display:'flex',flexDirection:'column',justifyContent:'space-between',
      borderRadius:'var(--radius-2xl)',border:'1px solid var(--border-glass)',background:n.bg,boxShadow:n.shadow,
      transition:'all var(--dur-slow) var(--smooth-ease)',transform:h?`rotate(${n.tilt})`:'none',
      position:'relative',overflow:'hidden',textDecoration:'none',color:'#fff',...style}}>
    <div style={{position:'absolute',right:-48,top:-48,color:'rgba(255,255,255,.1)',pointerEvents:'none',
      transition:'transform var(--dur-carousel)',transform:h?'scale(1.5) rotate(12deg)':'none'}}><Icon name={n.icon} size={272}/></div>
    <div style={{position:'relative',zIndex:1,textAlign:'left'}}>
      {handle&&<span style={{fontSize:'.625rem',fontWeight:700,letterSpacing:'var(--ls-wider)',background:'rgba(255,255,255,.2)',
        color:'#fff',padding:'4px 12px',borderRadius:'var(--radius-pill)',textTransform:'uppercase',
        border:'1px solid var(--border-glass)',marginBottom:16,display:'inline-block'}}>{handle}</span>}
      <h3 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'2.25rem',textTransform:'uppercase',
        letterSpacing:'var(--ls-tighter)',lineHeight:1,margin:'0 0 12px'}}>{title}</h3>
      <p style={{color:'rgba(255,255,255,.8)',fontSize:'.875rem',maxWidth:'20rem',lineHeight:'var(--lh-relaxed)',fontWeight:500,margin:0}}>{description}</p>
    </div>
    <div style={{position:'relative',zIndex:1,display:'flex',alignItems:'center',gap:16,fontWeight:700,
      fontSize:'.75rem',letterSpacing:'var(--ls-wide)'}}>
      <span>{cta}</span>
      <span style={{width:32,height:32,borderRadius:'var(--radius-pill)',background:h?'rgba(255,255,255,.25)':'rgba(255,255,255,.15)',
        border:'1px solid var(--border-glass)',display:'flex',alignItems:'center',justifyContent:'center',
        transform:h?'translateX(12px)':'none',transition:'all var(--dur-slow)'}}><Icon name="ExternalLink" size={14}/></span>
    </div>
  </a>;
}
