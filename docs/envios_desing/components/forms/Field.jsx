import React from 'react';

/** Campo de formulario sobre fondo claro: relleno azul 50, foco amarillo. */
export function Field({label,type='text',as='input',placeholder,value,onChange,options=[],rows=4,hint,style}){
  const [f,setF]=React.useState(false);
  const base={width:'100%',background:f?'#fff':'var(--brand-blue-50)',border:'1px solid '+(f?'var(--brand-yellow)':'var(--brand-blue-100)'),
    borderRadius:'var(--radius-md)',color:'var(--brand-blue-700)',padding:'12px 16px',fontFamily:'var(--font-sans)',
    fontSize:'var(--fs-body-sm)',outline:'none',boxShadow:f?'0 0 0 3px rgba(255,236,1,.25)':'none',
    transition:'all var(--dur-fast) var(--smooth-ease)'};
  const common={placeholder,value,onChange,onFocus:()=>setF(true),onBlur:()=>setF(false),style:base};
  return <div style={{display:'flex',flexDirection:'column',gap:6,...style}}>
    {label&&<label style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',letterSpacing:'var(--ls-wider)',
      textTransform:'uppercase',color:'var(--brand-blue-700)',fontWeight:700}}>{label}</label>}
    {as==='textarea'?<textarea rows={rows} {...common} style={{...base,resize:'vertical',minHeight:120}}/>
      :as==='select'?<select {...common}>{options.map(o=><option key={o} value={o}>{o}</option>)}</select>
      :<input type={type} {...common}/>}
    {hint&&<span style={{fontSize:'.75rem',color:'var(--brand-blue-600)'}}>{hint}</span>}
  </div>;
}
