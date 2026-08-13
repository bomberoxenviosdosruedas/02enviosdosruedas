const { Hero, SectionHeading, BadgePill, Button, CtaPill, Marquee, IconTile, Icon,
  ServiceCard, StatCard, BentoCard, SocialCard, FeatureRow, Modal, Field, SubscribeForm } = window.XTRAMusicDesignSystem_bd8062;
const D = window.EDR_DATA;

const SECTION={maxWidth:'var(--container)',margin:'0 auto',padding:'0 32px'};

function ServicesSection({onOpen}){
  const [i,setI]=React.useState(0);
  const [auto,setAuto]=React.useState(true);
  React.useEffect(()=>{if(!auto)return;const t=setInterval(()=>setI(p=>(p+1)%D.servicios.length),4500);return()=>clearInterval(t);},[auto]);
  const nav=d=>{setAuto(false);setI(p=>(p+d+D.servicios.length)%D.servicios.length);};
  const roundBtn={padding:12,borderRadius:'var(--radius-pill)',background:'rgba(255,255,255,.1)',
    border:'1px solid rgba(255,255,255,.2)',color:'#fff',cursor:'pointer',display:'inline-flex'};
  return <section style={{padding:'96px 0',background:'var(--brand-ink)',color:'#fff',position:'relative',overflow:'hidden'}}>
    <div style={{position:'absolute',top:0,left:0,width:384,height:384,background:'rgba(9,80,246,.1)',borderRadius:'50%',filter:'blur(64px)',pointerEvents:'none'}}/>
    <div style={{position:'absolute',bottom:0,right:0,width:500,height:500,background:'rgba(255,236,1,.05)',borderRadius:'50%',filter:'blur(64px)',pointerEvents:'none'}}/>
    <div style={{...SECTION,position:'relative',zIndex:1}}>
      <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:24,marginBottom:64,
        borderBottom:'1px solid var(--border-glass)',paddingBottom:32}}>
        <SectionHeading onDark badge="Nuestros Servicios" badgeTone="blue" title="Soluciones logísticas" highlight="A tu medida" underline/>
        <div style={{display:'flex',alignItems:'center',gap:16,flexShrink:0}}>
          <button onClick={()=>setAuto(!auto)} style={{padding:'8px 16px',borderRadius:'var(--radius-pill)',
            fontFamily:'var(--font-subheading)',fontSize:'.75rem',fontWeight:700,letterSpacing:'var(--ls-wide)',cursor:'pointer',
            background:auto?'var(--brand-yellow)':'rgba(255,255,255,.1)',color:auto?'var(--brand-blue-700)':'var(--brand-blue-200)',
            border:'1px solid '+(auto?'var(--brand-yellow)':'rgba(255,255,255,.2)'),textTransform:'uppercase'}}>
            {auto?'Rotación automática':'Rotación pausada'}</button>
          <button onClick={()=>nav(-1)} style={roundBtn} aria-label="Anterior"><Icon name="ChevronLeft" size={20}/></button>
          <button onClick={()=>nav(1)} style={roundBtn} aria-label="Siguiente"><Icon name="ChevronRight" size={20}/></button>
        </div>
      </div>
      <div style={{position:'relative',height:540,display:'flex',alignItems:'center',justifyContent:'center',
        perspective:2000,transformStyle:'preserve-3d'}}>
        {D.servicios.map((s,n)=>{
          const total=D.servicios.length;
          const off=((n-i+total/2)%total)-total/2, abs=Math.abs(off), center=off===0;
          return <div key={s.id} onClick={()=>center?onOpen(s):(setI(n),setAuto(false))}
            style={{position:'absolute',cursor:'pointer',transition:'all .7s ease-out',zIndex:total-abs,
              opacity:center?1:Math.max(.15,1-abs*.4),
              transform:`translateX(${off*250}px) translateZ(${center?120:-abs*180}px) rotateY(${off*-28}deg) scale(${center?1.05:Math.max(.65,1-abs*.18)})`}}>
            <ServiceCard {...s} width={350} height={490}/>
          </div>;
        })}
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:8,marginTop:24}}>
        {D.servicios.map((s,n)=><button key={s.id} onClick={()=>{setI(n);setAuto(false);}} aria-label={s.title}
          style={{width:n===i?32:8,height:8,borderRadius:'var(--radius-pill)',border:'none',cursor:'pointer',
            background:n===i?'var(--brand-yellow)':'rgba(255,255,255,.25)',transition:'all var(--dur-base)'}}/>)}
      </div>
    </div>
  </section>;
}

function CoverageSection(){
  return <section style={{padding:'144px 0',background:'var(--brand-ink)',color:'#fff',position:'relative',
    overflow:'hidden',borderTop:'1px solid var(--border-glass)',borderBottom:'1px solid var(--border-glass)'}}>
    <div style={{position:'absolute',bottom:0,right:0,width:600,height:600,background:'rgba(255,236,1,.05)',borderRadius:'50%',filter:'blur(150px)',pointerEvents:'none'}}/>
    <div style={{...SECTION,position:'relative',zIndex:1}}>
      <div style={{maxWidth:'64rem',marginBottom:96}}>
        <SectionHeading onDark badge="Socio Estratégico Local" badgeTone="glass"
          title="Potenciamos tu marca en Mar del Plata"
          lead="Diseñamos una arquitectura logística integral adaptada al mercado marplatense: cadetería urbana inmediata, colecta gratis a domicilio para MercadoLibre Flex y gestión 3PL completa en nuestro depósito inteligente."/>
        <div style={{height:2,width:96,background:'var(--brand-yellow)',borderRadius:'var(--radius-pill)',marginTop:8}}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'7fr 5fr',gap:32,alignItems:'stretch'}}>
        <BentoCard icon="Landmark" tag="Emprendedores" title="Logística E-Commerce"
          description="Gestión de última milla pensada para PyMEs y marcas locales. Optimizamos tus costos de envío con retiros programados a domicilio y soporte post-venta."
          items={['Soporte comercial dedicado vía WhatsApp','Entregas contrareembolso integradas sin cargo extra','Retiro programado en tu domicilio o depósito']}
          footer={<Button variant="default" iconRight="ArrowRight">Consultá planes</Button>}/>
        <BentoCard icon="Building2" tag="Corporativo" title="Distribución Urbana"
          description="Transformamos la última milla de tu empresa con una flota ágil y especializada, y facturación mensual centralizada."
          items={['Rutas fijas y ventanas horarias pactadas','Reportes de entrega y facturación mensual']}
          footer={<Button variant="outline" iconRight="ArrowRight">Hablar con un asesor</Button>}/>
      </div>
      <div style={{marginTop:48,display:'flex',flexWrap:'wrap',gap:12}}>
        {D.zonas.map(z=><span key={z} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'8px 16px',
          borderRadius:'var(--radius-pill)',background:'rgba(255,255,255,.05)',border:'1px solid var(--border-glass)',
          fontFamily:'var(--font-mono)',fontSize:'.6875rem',letterSpacing:'var(--ls-wide)',textTransform:'uppercase'}}>
          <Icon name="MapPin" size={12} color="var(--brand-yellow)"/>{z}</span>)}
      </div>
    </div>
  </section>;
}

function CalculatorSection({onQuote}){
  const [servicio,setServicio]=React.useState('Envíos Express');
  const [km,setKm]=React.useState(3);
  const base=servicio==='Envíos Express'?3700:3000;
  const total=base+Math.max(0,km-3)*450;
  return <section style={{padding:'96px 0',background:'var(--brand-white)'}}>
    <div style={{...SECTION,display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center'}}>
      <div>
        <SectionHeading badge="Cotizá en 10 segundos" title="Sabé cuánto sale" highlight="antes de pedirlo"
          lead="Tarifa base por los primeros 3 km y un adicional por kilómetro. Sin sorpresas ni recargos escondidos."/>
        <div style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-mono)',fontSize:'.75rem',
            color:'var(--brand-blue-600)'}}><Icon name="ShieldCheck" size={14} color="var(--brand-blue-700)"/>Seguro incluido</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--font-mono)',fontSize:'.75rem',
            color:'var(--brand-blue-600)'}}><Icon name="Clock" size={14} color="var(--brand-blue-700)"/>Retiro coordinado</span>
        </div>
      </div>
      <div style={{background:'var(--brand-blue-50)',border:'1px solid var(--brand-blue-100)',borderRadius:'var(--radius-3xl)',padding:8}}>
        <div style={{background:'#fff',borderRadius:'var(--radius-2xl)',padding:32,boxShadow:'var(--shadow-minimal)'}}>
          <Field label="Servicio" as="select" options={['Envíos Express','Envíos LowCost']} value={servicio} onChange={e=>setServicio(e.target.value)}/>
          <div style={{marginTop:16}}>
            <label style={{fontFamily:'var(--font-subheading)',fontSize:'.75rem',letterSpacing:'var(--ls-wider)',
              textTransform:'uppercase',color:'var(--brand-blue-700)',fontWeight:700}}>Distancia · {km} km</label>
            <input type="range" min="1" max="20" value={km} onChange={e=>setKm(+e.target.value)}
              style={{width:'100%',marginTop:10,accentColor:'var(--brand-blue-700)'}}/>
          </div>
          <div style={{marginTop:24,padding:'20px 24px',borderRadius:'var(--radius-xl)',background:'var(--brand-blue-700)',
            color:'#fff',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <span style={{fontFamily:'var(--font-subheading)',fontSize:'.875rem',letterSpacing:'var(--ls-wider)',textTransform:'uppercase'}}>Estimado</span>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'2rem',fontWeight:700,letterSpacing:'var(--ls-tighter)'}}>${total.toLocaleString('es-AR')}</span>
          </div>
          <div style={{marginTop:16}}><Button block iconRight="ArrowRight" onClick={onQuote}>Pedir este envío</Button></div>
        </div>
      </div>
    </div>
  </section>;
}

function HomeScreen({onQuote,onOpenService,openService,onCloseService}){
  return <div>
    <Hero mapImage="../../assets/card_mapa.webp" bgImage="../../assets/hero-background.jpeg"
      badge="Tu Solución Confiable"
      lines={[{text:'Mensajería y Logística'},{text:'E-Commerce',mark:true},{text:'en Mar del Plata'}]}
      lead="Somos tu partner estratégico en mensajería, envíos en el día y delivery de última milla. Soluciones ágiles, seguras y competitivas para potenciar tu marca."
      trust={[{icon:'ShieldCheck',label:'100% Seguro'},{icon:'Zap',label:'Rápido'},{icon:'MapPin',label:'Cobertura total'}]}/>

    {/* FEATURES */}
    <section style={{padding:'96px 0',background:'var(--brand-white)',position:'relative',zIndex:1}}>
      <div style={{...SECTION,display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',gap:32,alignItems:'flex-start'}}>
          <SectionHeading badge="Partner Logístico Especializado" title="Conectamos Mar del Plata de punta a punta"
            lead="Nos especializamos en la distribución de última milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen en tiempo récord con tarifas transparentes."/>
          <div style={{display:'flex',flexDirection:'column',gap:20,width:'100%'}}>
            <FeatureRow icon="Clock" title="Entregas a tiempo">Puntualidad garantizada en cada envío. Optimizamos cada ruta mediante geolocalización avanzada.</FeatureRow>
            <FeatureRow icon="ShieldCheck" title="Envíos seguros">Protección total de tus paquetes. Despachos con custodia digital y firmas de entrega seguras.</FeatureRow>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
          <StatCard variant="hero" icon="Truck" tag="Mar del Plata 2026" value="+50K"
            label="Envíos y entregas realizadas con éxito en toda la región" style={{gridColumn:'1 / -1'}}/>
          <StatCard icon="ShieldCheck" value="0" label="Paquetes extraviados"/>
          <StatCard icon="Users" value="+50" label="Emprendedores confían"/>
        </div>
      </div>
    </section>

    <ServicesSection onOpen={onOpenService}/>
    <Marquee items={D.partners} duration={35} tone="yellow"/>
    <CoverageSection/>
    <CalculatorSection onQuote={onQuote}/>

    {/* COMUNIDAD */}
    <section style={{padding:'96px 0',background:'var(--brand-dark)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,pointerEvents:'none',
        background:'radial-gradient(circle at center,rgba(6,54,165,.15),transparent 70%)'}}/>
      <div style={{...SECTION,position:'relative',zIndex:1}}>
        <div style={{display:'flex',justifyContent:'center',marginBottom:64}}>
          <SectionHeading align="center" onDark badge="Conectá con nosotros" title="Sumate a nuestra comunidad" highlight="en redes sociales"
            lead="Seguí el movimiento diario de la flota en Mar del Plata, enterate de avisos operativos y contactate con nuestro equipo al instante."/>
        </div>
        <div style={{display:'flex',gap:24,alignItems:'stretch'}}>
          <SocialCard network="facebook" handle="Envíos DosRuedas" title="Facebook"
            description="Seguí nuestro día a día, novedades operativas y comunidad en Mar del Plata."
            cta="Seguir comunidad" href="https://www.facebook.com/enviosdosruedas/"/>
          <SocialCard network="instagram" handle="@enviosdosruedas" title="Instagram"
            description="Mirá el detrás de escena de nuestros riders y la flota recorriendo la ciudad."
            cta="Ver contenido" href="https://www.instagram.com/enviosdosruedas/"/>
          <SocialCard network="whatsapp" handle="223 660 2699" title="WhatsApp"
            description="Atención personalizada e inmediata para cotizaciones y consultas."
            cta="Enviar mensaje" href="https://wa.me/542236602699"/>
        </div>
        <div style={{marginTop:48,maxWidth:520,marginLeft:'auto',marginRight:'auto'}}>
          <SubscribeForm onSubmit={onQuote}/>
        </div>
      </div>
    </section>

    <Modal open={!!openService} onClose={onCloseService}
      title={openService?openService.title:''} badge={openService?openService.badge:''}
      footer={openService?<Button block iconRight="ArrowRight" onClick={onCloseService}>{openService.cta}</Button>:null}>
      {openService&&<div>
        <p style={{marginTop:0}}>{openService.summary}</p>
        <ul style={{listStyle:'none',padding:0,margin:'20px 0 0',display:'flex',flexDirection:'column',gap:12}}>
          {openService.features.map(x=><li key={x} style={{display:'flex',gap:10,alignItems:'flex-start'}}>
            <Icon name="ShieldCheck" size={18} color="var(--brand-blue-700)"/><span>{x}</span></li>)}
        </ul>
      </div>}
    </Modal>
  </div>;
}
Object.assign(window,{HomeScreen});
