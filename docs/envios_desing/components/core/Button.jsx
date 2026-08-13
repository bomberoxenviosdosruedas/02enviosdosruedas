import React from 'react';
import { Icon } from './Icon.jsx';

const V={
  default:{background:'var(--brand-yellow)',color:'var(--brand-blue-700)',border:'1px solid var(--brand-yellow)',hover:{background:'#fff',boxShadow:'var(--shadow-yellow-glow)'}},
  brand:{background:'var(--brand-blue-700)',color:'#fff',border:'1px solid rgba(255,236,1,.4)',hover:{background:'var(--brand-ink)',borderColor:'var(--brand-yellow)'}},
  outline:{background:'transparent',color:'#fff',border:'1px solid rgba(255,255,255,.3)',hover:{background:'rgba(255,255,255,.1)',borderColor:'#fff'}},
  outlineBlue:{background:'transparent',color:'var(--brand-blue-700)',border:'1px solid var(--brand-blue-700)',hover:{background:'var(--brand-blue-50)'}},
  secondary:{background:'var(--brand-ink)',color:'#fff',border:'1px solid rgba(255,255,255,.1)',hover:{background:'var(--brand-blue-700)'}},
  ghost:{background:'transparent',color:'#fff',border:'1px solid transparent',hover:{background:'rgba(255,255,255,.1)',color:'var(--brand-yellow)'}}
};
const S={sm:{height:32,padding:'0 12px',fontSize:11},md:{height:40,padding:'0 16px',fontSize:12},lg:{height:48,padding:'0 24px',fontSize:14}};

/** Botón sólido de la marca. Bebas Neue en mayúscula, esquinas apenas redondeadas. */
export function Button({children,variant='default',size='md',icon,iconRight,block=false,disabled=false,as='button',href,onClick,style}){
  const [h,setH]=React.useState(false);
  const v=V[variant]||V.default, s=S[size]||S.md, Tag=as==='a'?'a':'button';
  return <Tag href={href} onClick={disabled?undefined:onClick} disabled={Tag==='button'?disabled:undefined}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{display:block?'flex':'inline-flex',width:block?'100%':undefined,alignItems:'center',justifyContent:'center',gap:8,
      whiteSpace:'nowrap',borderRadius:'var(--radius-sm)',fontFamily:'var(--font-subheading)',fontWeight:700,
      textTransform:'uppercase',letterSpacing:'var(--ls-wide)',textDecoration:'none',cursor:disabled?'not-allowed':'pointer',
      opacity:disabled?.5:1,transition:'all var(--dur-fast) var(--smooth-ease)',
      background:v.background,color:v.color,border:v.border,...s,...(h&&!disabled?v.hover:null),...style}}>
    {icon&&<Icon name={icon} size={16}/>}{children}{iconRight&&<Icon name={iconRight} size={16}/>}
  </Tag>;
}
