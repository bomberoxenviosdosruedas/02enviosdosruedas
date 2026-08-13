import React from 'react';
import { CtaPill } from '../core/CtaPill.jsx';
import { BadgePill } from '../core/BadgePill.jsx';
import { Icon } from '../core/Icon.jsx';
import { FloatingPill } from '../cards/FloatingPill.jsx';

/** Hero de la home: fondo azul con red logística, titular cinético y tarjeta flotante. */
export function Hero({badge='Tu Solución Confiable',lines=[],lead,primaryCta='Solicitar Servicio',secondaryCta='Ver Servicios',
  trust=[],counter=5000,counterLabel='ENVÍOS',mapImage='assets/card_mapa.webp',bgImage='assets/hero-background.jpeg'}){
  const [n,setN]=React.useState(0);
  React.useEffect(()=>{
    const start=performance.now(),dur=2200;
    let raf;const tick=t=>{const p=Math.min((t-start)/dur,1);setN(Math.round(counter*(1-Math.pow(1-p,3))));if(p<1)raf=requestAnimationFrame(tick);};
    raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf);
  },[counter]);
  return <section style={{position:'relative',minHeight:'95vh',display:'flex',alignItems:'center',justifyContent:'center',
    padding:'128px 32px 80px',overflow:'hidden',background:'var(--brand-blue-700)',color:'#fff'}}>
    <div style={{position:'absolute',inset:0,pointerEvents:'none',
      background:'radial-gradient(circle at 30% 30%,rgba(255,255,255,.03),transparent 40%),radial-gradient(circle at 70% 80%,rgba(255,236,1,.03),transparent 50%)'}}/>
    <div style={{position:'absolute',inset:0,opacity:.05,mixBlendMode:'overlay',pointerEvents:'none',
      background:`url('${bgImage}') center/cover no-repeat`}}/>
    <div style={{maxWidth:'var(--container)',margin:'0 auto',position:'relative',zIndex:1,width:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:48,alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',gap:24,alignItems:'flex-start'}}>
          <BadgePill tone="yellow" pulse>{badge}</BadgePill>
          <h1 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'clamp(2.25rem,5vw,3.75rem)',
            textTransform:'uppercase',letterSpacing:'var(--ls-display)',lineHeight:1.05,color:'#fff',margin:0,
            display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
            {lines.map((l,i)=><span key={i} style={l.mark?{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',
              padding:'4px 10px',margin:'4px 0'}:undefined}>{l.text||l}</span>)}
          </h1>
          <p style={{fontSize:'var(--fs-lead)',color:'var(--brand-blue-100)',maxWidth:'36rem',lineHeight:'var(--lh-relaxed)',margin:0}}>{lead}</p>
          <div style={{display:'flex',gap:16,flexWrap:'wrap',paddingTop:8}}>
            <CtaPill tone="yellow">{primaryCta}</CtaPill>
            <CtaPill tone="ghost">{secondaryCta}</CtaPill>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:24,paddingTop:24,borderTop:'1px solid var(--border-glass)',width:'100%',maxWidth:'32rem'}}>
            {trust.map(t=><div key={t.label} style={{display:'flex',alignItems:'center',gap:12}}>
              <span style={{padding:8,background:'rgba(255,255,255,.1)',borderRadius:'var(--radius-sm)',
                color:'var(--brand-yellow)',display:'inline-flex'}}><Icon name={t.icon} size={16}/></span>
              <span style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',letterSpacing:'var(--ls-wider)',
                textTransform:'uppercase',color:'var(--brand-blue-100)'}}>{t.label}</span>
            </div>)}
          </div>
        </div>
        <div style={{position:'relative',height:450,display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div style={{width:'100%',maxWidth:400,height:'100%',position:'relative'}}>
            <div style={{position:'absolute',top:48,right:0,width:'78%',borderRadius:'var(--radius-2xl)',overflow:'hidden',
              border:'1px solid var(--brand-blue-100)',background:'#fff',padding:12,boxShadow:'var(--shadow-hard-blue)',zIndex:2}}>
              <img src={mapImage} alt="Mapa de cobertura de Mar del Plata" style={{width:'100%',height:190,objectFit:'cover',borderRadius:'var(--radius-lg)'}}/>
              <div style={{marginTop:12,display:'flex',alignItems:'center',justifyContent:'space-between',
                fontFamily:'var(--font-mono)',color:'#0f172a'}}>
                <span style={{fontSize:'.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'var(--ls-wide)'}}>Ruteo de Envíos</span>
                <span style={{fontSize:'.5625rem',padding:'2px 8px',border:'1px solid var(--brand-blue-400)',background:'#fff',
                  color:'var(--brand-blue-700)',fontWeight:700,textTransform:'uppercase',borderRadius:'var(--radius-pill)'}}>Optimizado</span>
              </div>
            </div>
            <div style={{position:'absolute',top:48,left:16,zIndex:3}}>
              <FloatingPill icon="ShieldCheck" tone="white">Seguridad garantizada</FloatingPill></div>
            <div style={{position:'absolute',top:'50%',left:0,transform:'translateY(-50%)',zIndex:4}}>
              <FloatingPill icon="MapPin" tone="yellow" delay={0.6}>100% Marplatense</FloatingPill></div>
            <div style={{position:'absolute',bottom:32,left:24,zIndex:5}}>
              <FloatingPill icon="Zap" tone="blue" delay={1.2}>Envíos en el día</FloatingPill></div>
            <div style={{position:'absolute',bottom:-16,right:16,zIndex:6,background:'#fff',color:'var(--brand-blue-700)',
              border:'1px solid var(--brand-blue-100)',boxShadow:'0 25px 50px -12px rgba(0,0,0,.25)',padding:'8px 16px',
              borderRadius:'var(--radius-xl)',fontFamily:'var(--font-display)',fontSize:'1.25rem',display:'flex',alignItems:'center',gap:6,
              animation:'edrFloatSlow 4s ease-in-out infinite 1.8s'}}>
              <span style={{color:'var(--brand-yellow)',fontWeight:700}}>+</span><span>{n}</span>
              <span style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',letterSpacing:'var(--ls-wider)',marginLeft:4,textTransform:'uppercase'}}>{counterLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
