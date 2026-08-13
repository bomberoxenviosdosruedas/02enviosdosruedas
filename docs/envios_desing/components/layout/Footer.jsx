import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Pie azul con barra amarilla superior, cuatro columnas y línea legal. */
export function Footer({logoSrc='assets/logo-envios-simplified.webp',tagline='tu solución confiable',
  about,columns=[],socials=[{name:'Instagram',href:'#'},{name:'Facebook',href:'#'},{name:'MessageCircle',href:'#'}],
  legal='© 2026 Envíos DosRuedas · Mar del Plata, Argentina'}){
  return <footer style={{background:'var(--brand-blue-700)',color:'#fff',borderTop:'1px solid var(--border-glass)',
    position:'relative',overflow:'hidden',fontFamily:'var(--font-sans)'}}>
    <div style={{height:6,background:'var(--brand-yellow)',width:'100%',boxShadow:'0 4px 6px rgba(255,236,1,.3)'}}/>
    <div style={{position:'absolute',inset:0,pointerEvents:'none',
      background:'radial-gradient(circle at 50% 0%,rgba(255,204,0,.08),transparent 50%),radial-gradient(circle at 10% 90%,rgba(0,51,153,.4),transparent 40%)'}}/>
    <div style={{maxWidth:'var(--container)',margin:'0 auto',padding:'64px 32px',position:'relative',zIndex:1,
      display:'grid',gridTemplateColumns:'5fr 3fr 2fr 2fr',gap:48,alignItems:'flex-start'}}>
      <div style={{display:'flex',flexDirection:'column',gap:24}}>
        <a href="#" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
          <img src={logoSrc} alt="Envíos DosRuedas" style={{width:44,height:44,objectFit:'contain'}}/>
          <span>
            <span style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',letterSpacing:'var(--ls-wide)',color:'#fff',
              display:'block',textTransform:'uppercase',lineHeight:1.1}}>Envíos <span style={{color:'var(--brand-yellow)'}}>Dosruedas</span></span>
            <span style={{display:'block',fontSize:'.5625rem',letterSpacing:'var(--ls-wider)',color:'var(--brand-blue-100)',
              textTransform:'uppercase',lineHeight:1,fontWeight:700}}>{tagline}</span>
          </span>
        </a>
        <p style={{color:'var(--brand-blue-100)',fontSize:'.875rem',lineHeight:'var(--lh-relaxed)',maxWidth:'24rem',margin:0}}>{about}</p>
        <div>
          <span style={{fontSize:'.75rem',fontWeight:700,color:'var(--brand-yellow)',textTransform:'uppercase',
            letterSpacing:'var(--ls-wider)',display:'block',marginBottom:12}}>Seguinos en redes</span>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            {socials.map(s=><a key={s.name} href={s.href} style={{width:40,height:40,borderRadius:'var(--radius-md)',
              background:'rgba(255,255,255,.05)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',
              border:'2px solid rgba(255,255,255,.2)',boxShadow:'var(--shadow-hard-yellow-sm)',textDecoration:'none',
              transition:'all var(--dur-base)'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--brand-yellow)';e.currentTarget.style.color='var(--brand-blue-700)';e.currentTarget.style.transform='translateY(-4px)';}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.05)';e.currentTarget.style.color='#fff';e.currentTarget.style.transform='none';}}>
              <Icon name={s.name} size={18}/></a>)}
          </div>
        </div>
      </div>
      {columns.map(col=><div key={col.title} style={{display:'flex',flexDirection:'column',gap:16}}>
        <h4 style={{fontFamily:'var(--font-subheading)',fontSize:'1.125rem',fontWeight:400,letterSpacing:'var(--ls-wide)',
          color:'var(--brand-yellow)',textTransform:'uppercase',borderBottom:'1px solid var(--border-glass)',paddingBottom:8,margin:0}}>{col.title}</h4>
        <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:14,fontSize:'.875rem'}}>
          {col.links.map(l=><li key={l.label}><a href={l.href||'#'} style={{color:'var(--brand-blue-100)',textDecoration:'none',
            display:'flex',alignItems:'center',gap:10,transition:'all var(--dur-base)'}}
            onMouseEnter={e=>{e.currentTarget.style.color='var(--brand-yellow)';e.currentTarget.style.transform='translateX(4px)';}}
            onMouseLeave={e=>{e.currentTarget.style.color='var(--brand-blue-100)';e.currentTarget.style.transform='none';}}>
            {l.icon&&<Icon name={l.icon} size={16} color="var(--brand-yellow)"/>}<span>{l.label}</span></a></li>)}
        </ul>
      </div>)}
    </div>
    <div style={{position:'relative',zIndex:1,borderTop:'1px solid var(--border-glass)',padding:'20px 32px',
      textAlign:'center',fontSize:'.75rem',color:'var(--brand-blue-100)'}}>{legal}</div>
  </footer>;
}
