import React from 'react';
import { Icon } from '../core/Icon.jsx';

const THEMES={
  express:{border:'var(--brand-yellow)',bg:'linear-gradient(to bottom right,#0636A5,#00277C)',color:'#fff',badge:{background:'var(--brand-yellow)',color:'#0636A5',border:'1px solid rgba(253,224,71,.3)'},accent:'var(--brand-yellow)',body:'var(--brand-blue-100)',stat:'rgba(255,255,255,.1)',statBorder:'rgba(255,255,255,.1)',statColor:'#fff',shadow:'none'},
  lowcost:{border:'var(--brand-blue-500)',bg:'linear-gradient(to bottom right,#fff,#E6EEFE)',color:'var(--brand-ink)',badge:{background:'var(--brand-blue-600)',color:'var(--brand-yellow)',border:'1px solid rgba(7,66,202,.3)'},accent:'var(--brand-blue-600)',body:'#1d4ed8',stat:'rgba(219,234,254,.8)',statBorder:'#bfdbfe',statColor:'var(--brand-ink)',shadow:'8px 8px 0px rgba(6,54,165,.2)'},
  flex:{border:'var(--brand-blue-700)',bg:'linear-gradient(to bottom right,#FFEC01,#FFF12E)',color:'var(--brand-ink)',badge:{background:'var(--brand-ink)',color:'#fff',border:'1px solid rgba(30,58,138,.3)'},accent:'var(--brand-ink)',body:'rgba(30,58,138,.8)',stat:'rgba(6,54,165,.1)',statBorder:'rgba(6,54,165,.2)',statColor:'var(--brand-ink)',shadow:'8px 8px 0px rgba(255,236,1,.25)'},
  '3pl':{border:'var(--brand-blue-700)',bg:'linear-gradient(to bottom right,#0636A5,#001035)',color:'#fff',badge:{background:'var(--brand-ink)',color:'#fff',border:'1px solid rgba(30,58,138,.3)'},accent:'var(--brand-yellow)',body:'var(--brand-blue-100)',stat:'rgba(255,255,255,.1)',statBorder:'rgba(255,255,255,.1)',statColor:'#fff',shadow:'none'}
};

/** Tarjeta de servicio del carrusel 3D: imagen de fondo, badge, stats y borde de 4px. */
export function ServiceCard({theme='express',icon='Zap',badge,city,title,description,stats,image,width=350,height=490,onClick,style}){
  const t=THEMES[theme]||THEMES.express;
  const stat=(v,l)=><div style={{padding:8,borderRadius:'var(--radius-md)',backdropFilter:'blur(4px)',
    background:t.stat,border:'1px solid '+t.statBorder,color:t.statColor}}>
    <div style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',fontWeight:700,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{v}</div>
    <div style={{fontSize:'.5625rem',textTransform:'uppercase',fontWeight:700,letterSpacing:'var(--ls-wide)',opacity:.75}}>{l}</div>
  </div>;
  return <div onClick={onClick} style={{width,height,borderRadius:'var(--radius-3xl)',border:'4px solid '+t.border,
    background:t.bg,color:t.color,padding:24,display:'flex',flexDirection:'column',justifyContent:'space-between',
    position:'relative',overflow:'hidden',boxShadow:t.shadow,cursor:onClick?'pointer':'default',...style}}>
    {image&&<div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0}}>
      <img src={image} alt="" style={{width:'100%',height:'100%',objectFit:'cover',
        opacity:theme==='lowcost'?.15:theme==='flex'?.2:.25,
        filter:theme==='lowcost'?'grayscale(1)':'none',
        mixBlendMode:theme==='express'||theme==='3pl'?'overlay':'multiply'}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,rgba(0,39,124,.8),rgba(0,39,124,.2),transparent)',opacity:.6}}/>
    </div>}
    <div style={{position:'absolute',right:16,bottom:16,opacity:.05,pointerEvents:'none'}}><Icon name={icon} size={144}/></div>
    <div style={{position:'relative',zIndex:1,display:'flex',alignItems:'center',gap:10}}>
      <span style={{padding:12,background:'var(--brand-yellow)',color:'var(--brand-blue-700)',borderRadius:'var(--radius-md)',
        boxShadow:'var(--shadow-hard-blue-sm)',display:'inline-flex'}}><Icon name={icon} size={20}/></span>
      <span style={{fontFamily:'var(--font-subheading)',fontSize:'.625rem',fontWeight:700,padding:'4px 10px',
        borderRadius:'var(--radius-pill)',letterSpacing:'var(--ls-wide)',...t.badge}}>{badge}</span>
    </div>
    <div style={{position:'relative',zIndex:1,display:'flex',flexDirection:'column',gap:8,marginTop:'auto'}}>
      {city&&<span style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',fontWeight:700,textTransform:'uppercase',
        letterSpacing:'var(--ls-wide)',display:'flex',alignItems:'center',gap:6,color:t.accent}}><Icon name="MapPin" size={14}/>{city}</span>}
      <h3 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'1.875rem',textTransform:'uppercase',lineHeight:1,margin:0}}>{title}</h3>
      <p style={{fontSize:'.75rem',lineHeight:'var(--lh-relaxed)',margin:0,color:t.body}}>{description}</p>
    </div>
    {stats&&<div style={{position:'relative',zIndex:1,paddingTop:16,marginTop:12,borderTop:'1px solid rgba(0,0,0,.05)',
      display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,textAlign:'center'}}>
      {stat(stats.time,'Entrega')}{stat(stats.price,'Tarifa')}{stat(stats.weight,'Peso')}
    </div>}
  </div>;
}
