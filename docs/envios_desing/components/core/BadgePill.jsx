import React from 'react';

const T={
  yellow:{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)'},
  yellowSoft:{background:'rgba(255,236,1,.2)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)'},
  blue:{background:'var(--brand-blue-700)',color:'var(--brand-yellow)',border:'1px solid var(--brand-blue-700)'},
  ink:{background:'var(--brand-ink)',color:'var(--brand-yellow)',border:'1px solid rgba(255,236,1,.3)'},
  glass:{background:'rgba(255,255,255,.05)',color:'var(--brand-yellow)',border:'1px solid rgba(255,236,1,.2)'},
  white:{background:'rgba(255,255,255,.2)',color:'#fff',border:'1px solid rgba(255,255,255,.1)'}
};
/** Etiqueta en píldora: Bebas Neue, muy tracked, sobre cualquier fondo. */
export function BadgePill({children,tone='yellow',pulse=false,style}){
  return <span style={{display:'inline-block',padding:'6px 16px',borderRadius:'var(--radius-pill)',
    fontFamily:'var(--font-subheading)',fontSize:'.75rem',fontWeight:700,letterSpacing:'var(--ls-wider)',
    textTransform:'uppercase',animation:pulse?'edrBorderPulse 2s ease-in-out infinite':'none',...T[tone],...style}}>{children}</span>;
}
