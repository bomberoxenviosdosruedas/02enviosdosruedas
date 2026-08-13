import React from 'react';

/** Cinta infinita de texto. Se pausa al pasar el mouse, como en el sitio. */
export function Marquee({items=[],duration=35,tone='dark',separator='—',style}){
  const [p,setP]=React.useState(false);
  const T=tone==='dark'?{background:'var(--brand-ink)',color:'#fff'}
    :tone==='yellow'?{background:'var(--brand-yellow)',color:'var(--brand-blue-700)'}
    :{background:'var(--brand-white)',color:'var(--brand-blue-700)'};
  const run=[...items,...items];
  return <div onMouseEnter={()=>setP(true)} onMouseLeave={()=>setP(false)}
    style={{overflow:'hidden',borderTop:'1px solid var(--border-glass)',borderBottom:'1px solid var(--border-glass)',...T,...style}}>
    <div style={{display:'flex',width:'max-content',alignItems:'center',padding:'1rem 0',
      animation:`edrMarquee ${duration}s linear infinite`,animationPlayState:p?'paused':'running'}}>
      {run.map((it,i)=><span key={i} style={{display:'inline-flex',alignItems:'center',gap:'2rem',
        padding:'0 2rem',fontFamily:'var(--font-subheading)',fontSize:'1.125rem',letterSpacing:'var(--ls-wider)',
        textTransform:'uppercase',whiteSpace:'nowrap'}}>{it}<span style={{opacity:.35}}>{separator}</span></span>)}
    </div>
  </div>;
}
