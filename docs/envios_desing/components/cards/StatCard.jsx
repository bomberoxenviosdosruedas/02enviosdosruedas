import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Tarjeta de cifra. `hero` es la azul grande; `tint` es la clara con marco interior. */
export function StatCard({variant='tint',icon,tag,value,label,style}){
  const [h,setH]=React.useState(false);
  if(variant==='hero') return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{padding:32,background:'var(--brand-blue-700)',border:'2px solid var(--brand-blue-700)',
      borderRadius:'var(--radius-2xl)',color:'#fff',transition:'all var(--dur-base)',
      transform:h?'translateY(-6px)':'none',boxShadow:h?'var(--shadow-hard-yellow)':'var(--shadow-hard-blue)',...style}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:48}}>
      {icon&&<span style={{padding:12,background:'var(--brand-yellow)',color:'var(--brand-blue-700)',borderRadius:'var(--radius-md)',display:'inline-flex'}}><Icon name={icon} size={24}/></span>}
      {tag&&<span style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',letterSpacing:'var(--ls-wider)',
        textTransform:'uppercase',padding:'4px 12px',borderRadius:'var(--radius-sm)',background:'var(--brand-ink)',color:'var(--brand-yellow)',fontWeight:700}}>{tag}</span>}
    </div>
    <h3 style={{fontFamily:'var(--font-mono)',fontSize:'4.5rem',fontWeight:700,letterSpacing:'var(--ls-tighter)',
      textTransform:'uppercase',lineHeight:1,margin:'0 0 12px'}}>{value}</h3>
    <p style={{fontSize:'.875rem',color:'var(--brand-blue-100)',textTransform:'uppercase',letterSpacing:'var(--ls-wide)',margin:0}}>{label}</p>
  </div>;
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:'var(--brand-blue-50)',border:'1px solid var(--brand-blue-100)',borderRadius:'var(--radius-3xl)',
      padding:8,transition:'all var(--dur-base)',transform:h?'translateY(-6px)':'none',
      boxShadow:h?'var(--shadow-soft-elevation)':'none',...style}}>
    <div style={{background:'#fff',borderRadius:'var(--radius-xl)',boxShadow:'inset 0 2px 4px 0 rgba(6,54,165,.05)',
      padding:24,display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%',minHeight:200}}>
      {icon&&<span style={{padding:12,borderRadius:'var(--radius-md)',width:'fit-content',marginBottom:24,display:'inline-flex',
        background:h?'var(--brand-blue-700)':'var(--brand-blue-50)',color:h?'var(--brand-yellow)':'var(--brand-blue-700)',
        border:'1px solid var(--brand-blue-100)',transition:'all var(--dur-base)'}}><Icon name={icon} size={20}/></span>}
      <div>
        <h3 style={{fontFamily:'var(--font-mono)',fontSize:'3rem',fontWeight:700,letterSpacing:'var(--ls-tighter)',
          color:'var(--brand-blue-700)',lineHeight:1,margin:'0 0 8px'}}>{value}</h3>
        <p style={{fontSize:'.625rem',color:'var(--brand-blue-600)',textTransform:'uppercase',letterSpacing:'var(--ls-wider)',fontWeight:600,margin:0}}>{label}</p>
      </div>
    </div>
  </div>;
}
