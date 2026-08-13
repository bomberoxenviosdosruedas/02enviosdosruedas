import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/** Header fijo de vidrio: logo, nav con celdas delimitadas y dropdowns, CTA de WhatsApp. */
export function Navbar({logoSrc='assets/logo-envios-simplified.webp',items=[],active,onNavigate,scrolled=false,phone='223 660 2699',sticky=true}){
  const [open,setOpen]=React.useState(null);
  return <header style={{position:sticky?'fixed':'relative',top:0,left:0,width:'100%',zIndex:50,
    background:scrolled?'var(--header-glass-scrolled)':'var(--header-glass)',
    backdropFilter:scrolled?'blur(12px)':'blur(4px)',borderBottom:'1px solid var(--border-glass)',
    boxShadow:scrolled?'0 10px 30px rgba(7,31,92,.8)':'none',
    padding:scrolled?'12px 48px':'20px 48px',transition:'all var(--dur-base)'}}>
    <div style={{maxWidth:'var(--container)',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <a href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(items[0]&&items[0].id);}}
        style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
        <img src={logoSrc} alt="Envíos DosRuedas" style={{height:40,width:'auto',objectFit:'contain'}}/>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',textTransform:'uppercase',
          letterSpacing:'var(--ls-wide)',color:'#fff',lineHeight:1.1}}>ENVÍOS <span style={{color:'var(--brand-yellow)'}}>DOSRUEDAS</span></span>
      </a>
      <nav style={{display:'flex',borderLeft:'1px solid var(--border-glass)'}}>
        {items.map(it=>{
          const on=active===it.id||open===it.id;
          return <div key={it.id} style={{position:'relative'}} onMouseEnter={()=>setOpen(it.id)} onMouseLeave={()=>setOpen(null)}>
            <button onClick={()=>onNavigate&&onNavigate(it.id)}
              style={{fontFamily:'var(--font-display)',fontSize:'1rem',textTransform:'uppercase',letterSpacing:'var(--ls-wider)',
                color:on?'#fff':'rgba(255,255,255,.8)',background:on?'rgba(255,255,255,.05)':'transparent',border:'none',
                borderRight:'1px solid var(--border-glass)',padding:'20px 28px',position:'relative',cursor:'pointer',
                display:'flex',alignItems:'center',gap:8,transition:'all var(--dur-base)'}}>
              <Icon name={it.icon||'Home'} size={16} color="var(--brand-yellow)"/>
              <span>{it.label}</span>
              {it.children&&<Icon name="ChevronDown" size={16} color={on?'var(--brand-yellow)':'rgba(255,255,255,.6)'}/>}
              <span style={{position:'absolute',bottom:0,left:0,width:'100%',height:4,background:'var(--brand-yellow)',
                transform:on?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform var(--dur-base)'}}/>
            </button>
            {it.children&&open===it.id&&<div style={{position:'absolute',left:0,top:'100%',paddingTop:8,width:288,zIndex:60}}>
              <div style={{background:'var(--brand-navy)',borderRadius:'var(--radius-2xl)',border:'1px solid var(--border-glass)',
                boxShadow:'0 25px 50px -12px rgba(0,0,0,.5)',padding:10,display:'grid',gap:4}}>
                {it.children.map(c=><a key={c.label} href="#" onClick={e=>{e.preventDefault();onNavigate&&onNavigate(it.id);}}
                  style={{display:'flex',alignItems:'flex-start',gap:12,padding:10,borderRadius:'var(--radius-md)',textDecoration:'none'}}
                  onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,.1)'}
                  onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                  <span style={{padding:8,borderRadius:'var(--radius-sm)',background:'rgba(255,255,255,.05)',
                    color:'var(--brand-yellow)',display:'inline-flex',flexShrink:0}}><Icon name={c.icon||'Zap'} size={16}/></span>
                  <span>
                    <span style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',textTransform:'uppercase',
                      letterSpacing:'var(--ls-wide)',color:'#fff',display:'block',fontWeight:700}}>{c.label}</span>
                    {c.description&&<span style={{fontSize:'.625rem',color:'rgba(191,219,254,.7)',display:'block',marginTop:2}}>{c.description}</span>}
                  </span>
                </a>)}
              </div>
            </div>}
          </div>;
        })}
      </nav>
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <span style={{display:'flex',alignItems:'center',gap:8,fontFamily:'var(--font-mono)',fontSize:'.75rem',
          color:'var(--brand-blue-100)',letterSpacing:'var(--ls-wide)'}}><Icon name="Phone" size={14} color="var(--brand-yellow)"/>{phone}</span>
        <Button icon="MessageCircle">WhatsApp</Button>
      </div>
    </div>
  </header>;
}
