import React from 'react';

/** Lucide glyph. Requires the lucide UMD script on the page (window.lucide). */
export function Icon({name,size=20,strokeWidth=2,color='currentColor',style}){
  const ref=React.useRef(null);
  React.useEffect(()=>{
    let cancelled=false;
    const paint=()=>{
      const L=window.lucide;
      if(cancelled||!ref.current) return;
      if(!L||!L.icons){setTimeout(paint,60);return;}
      const def=L.icons[name]||L.icons.Package;
      if(!def) return;
      const el=L.createElement(def);
      el.setAttribute('width',size);el.setAttribute('height',size);
      el.setAttribute('stroke-width',strokeWidth);el.style.display='block';
      ref.current.innerHTML='';ref.current.appendChild(el);
    };
    paint();
    return()=>{cancelled=true;};
  },[name,size,strokeWidth]);
  return <span ref={ref} aria-hidden style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:size,height:size,color,flexShrink:0,...style}}/>;
}
