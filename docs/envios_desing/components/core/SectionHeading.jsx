import React from 'react';
import { BadgePill } from './BadgePill.jsx';

/** Bloque de titular: badge, título Anton en mayúscula y bajada opcional. */
export function SectionHeading({badge,badgeTone,title,highlight,lead,align='left',onDark=false,underline=false,style}){
  const c=align==='center';
  return <div style={{display:'flex',flexDirection:'column',gap:'1rem',alignItems:c?'center':'flex-start',
    textAlign:c?'center':'left',...style}}>
    {badge&&<BadgePill tone={badgeTone||(onDark?'yellow':'yellowSoft')}>{badge}</BadgePill>}
    <h2 style={{fontFamily:'var(--font-display)',fontWeight:400,fontSize:'var(--fs-h2)',textTransform:'uppercase',
      letterSpacing:'var(--ls-display)',lineHeight:'var(--lh-tight)',color:onDark?'#fff':'var(--brand-ink)',margin:0}}>
      {title}{highlight&&<><br/><span style={{color:'var(--brand-yellow)',
        textDecoration:underline?'underline':'none',textUnderlineOffset:8,textDecorationColor:'var(--brand-blue-500)'}}>{highlight}</span></>}
    </h2>
    {lead&&<p style={{fontSize:'var(--fs-lead)',lineHeight:'var(--lh-relaxed)',fontWeight:500,maxWidth:'42rem',margin:0,
      color:onDark?'var(--brand-blue-100)':'var(--brand-blue-600)'}}>{lead}</p>}
  </div>;
}
