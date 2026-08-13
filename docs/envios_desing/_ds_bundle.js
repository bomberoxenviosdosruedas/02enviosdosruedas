/* @ds-bundle: {"format":4,"namespace":"XTRAMusicDesignSystem_bd8062","components":[{"name":"BentoCard","sourcePath":"components/cards/BentoCard.jsx"},{"name":"FeatureRow","sourcePath":"components/cards/FeatureRow.jsx"},{"name":"FloatingPill","sourcePath":"components/cards/FloatingPill.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"SocialCard","sourcePath":"components/cards/SocialCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"BadgePill","sourcePath":"components/core/BadgePill.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CtaPill","sourcePath":"components/core/CtaPill.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"SubscribeForm","sourcePath":"components/forms/SubscribeForm.jsx"},{"name":"Footer","sourcePath":"components/layout/Footer.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"Navbar","sourcePath":"components/layout/Navbar.jsx"}],"sourceHashes":{"components/cards/BentoCard.jsx":"ae591044a392","components/cards/FeatureRow.jsx":"6437a7f27695","components/cards/FloatingPill.jsx":"9930d430c51d","components/cards/ServiceCard.jsx":"9bd1fbaaa6a0","components/cards/SocialCard.jsx":"971a58a5cbc4","components/cards/StatCard.jsx":"87b6b391c954","components/core/BadgePill.jsx":"31927bef92c8","components/core/Button.jsx":"80cc87a4c9a3","components/core/CtaPill.jsx":"dcc9b22714e8","components/core/Icon.jsx":"b8dfbb8c7b40","components/core/IconTile.jsx":"7fdf05e59cc3","components/core/Marquee.jsx":"fde8d5f0ce50","components/core/SectionHeading.jsx":"6bca234d4547","components/feedback/Accordion.jsx":"6c0e48a8f1df","components/feedback/Modal.jsx":"5a4bfffc12c0","components/feedback/Toast.jsx":"ec272d935993","components/forms/Field.jsx":"1036690d1fc0","components/forms/SubscribeForm.jsx":"0f02d47919a2","components/layout/Footer.jsx":"13b08b7fa82c","components/layout/Hero.jsx":"3e1de218c8e7","components/layout/Navbar.jsx":"5edd485beb4d","ui_kits/home/HomeScreen.jsx":"b572eebb5d5f","ui_kits/home/data.js":"52cc84d5f4b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XTRAMusicDesignSystem_bd8062 = window.XTRAMusicDesignSystem_bd8062 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BadgePill.jsx
try { (() => {
const T = {
  yellow: {
    background: 'var(--brand-yellow)',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-yellow)'
  },
  yellowSoft: {
    background: 'rgba(255,236,1,.2)',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-yellow)'
  },
  blue: {
    background: 'var(--brand-blue-700)',
    color: 'var(--brand-yellow)',
    border: '1px solid var(--brand-blue-700)'
  },
  ink: {
    background: 'var(--brand-ink)',
    color: 'var(--brand-yellow)',
    border: '1px solid rgba(255,236,1,.3)'
  },
  glass: {
    background: 'rgba(255,255,255,.05)',
    color: 'var(--brand-yellow)',
    border: '1px solid rgba(255,236,1,.2)'
  },
  white: {
    background: 'rgba(255,255,255,.2)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.1)'
  }
};
/** Etiqueta en píldora: Bebas Neue, muy tracked, sobre cualquier fondo. */
function BadgePill({
  children,
  tone = 'yellow',
  pulse = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: '6px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      animation: pulse ? 'edrBorderPulse 2s ease-in-out infinite' : 'none',
      ...T[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { BadgePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BadgePill.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/** Lucide glyph. Requires the lucide UMD script on the page (window.lucide). */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    let cancelled = false;
    const paint = () => {
      const L = window.lucide;
      if (cancelled || !ref.current) return;
      if (!L || !L.icons) {
        setTimeout(paint, 60);
        return;
      }
      const def = L.icons[name] || L.icons.Package;
      if (!def) return;
      const el = L.createElement(def);
      el.setAttribute('width', size);
      el.setAttribute('height', size);
      el.setAttribute('stroke-width', strokeWidth);
      el.style.display = 'block';
      ref.current.innerHTML = '';
      ref.current.appendChild(el);
    };
    paint();
    return () => {
      cancelled = true;
    };
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": true,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      flexShrink: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/BentoCard.jsx
try { (() => {
/** Tarjeta de vidrio con doble marco para secciones oscuras. */
function BentoCard({
  icon,
  tag,
  title,
  description,
  items = [],
  footer,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 'var(--radius-2xl)',
      padding: 8,
      background: h ? 'rgba(219,234,254,.1)' : 'rgba(219,234,254,.05)',
      border: '1px solid ' + (h ? 'rgba(255,236,1,.3)' : 'rgba(9,80,246,.2)'),
      transition: 'all var(--dur-base)',
      boxShadow: h ? '0 25px 50px -12px rgba(0,0,0,.4)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      background: 'var(--surface-card-dark)',
      border: '1px solid rgba(9,80,246,.2)',
      boxShadow: 'inset 0 2px 4px 0 rgba(0,0,0,.15)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      opacity: .05,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 144
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 12,
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      borderRadius: 'var(--radius-md)',
      boxShadow: '2px 2px 0px #00277C',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.625rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--brand-ink)',
      color: 'var(--brand-yellow)',
      border: '1px solid rgba(255,236,1,.3)'
    }
  }, tag)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.875rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      margin: 0,
      transition: 'all var(--dur-base)',
      transform: h ? 'translateX(4px)' : 'none',
      color: h ? 'var(--brand-yellow)' : '#fff'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      color: 'var(--brand-blue-200)',
      lineHeight: 'var(--lh-relaxed)',
      marginTop: 8
    }
  }, description)), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: '.75rem'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ShieldCheck",
    size: 16,
    color: "var(--brand-yellow)"
  }), /*#__PURE__*/React.createElement("span", null, it))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { BentoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/BentoCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FloatingPill.jsx
try { (() => {
const T = {
  white: {
    background: '#fff',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-blue-100)',
    shadow: '0 20px 25px -5px rgba(0,0,0,.1)'
  },
  yellow: {
    background: 'var(--brand-yellow)',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-yellow)',
    shadow: '2px 2px 0px #0636A5'
  },
  blue: {
    background: 'var(--brand-blue-700)',
    color: '#fff',
    border: '1px solid var(--brand-yellow)',
    shadow: '2px 2px 0px #FFEC01'
  }
};
/** Píldora flotante del hero, con la animación de flote lento. */
function FloatingPill({
  icon,
  children,
  tone = 'white',
  delay = 0,
  float = true,
  style
}) {
  const t = T[tone] || T.white;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      padding: '10px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-mono)',
      fontSize: '.625rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      background: t.background,
      color: t.color,
      border: t.border,
      boxShadow: t.shadow,
      animation: float ? `edrFloatSlow 4s ease-in-out infinite ${delay}s` : 'none',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}
Object.assign(__ds_scope, { FloatingPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FloatingPill.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
const THEMES = {
  express: {
    border: 'var(--brand-yellow)',
    bg: 'linear-gradient(to bottom right,#0636A5,#00277C)',
    color: '#fff',
    badge: {
      background: 'var(--brand-yellow)',
      color: '#0636A5',
      border: '1px solid rgba(253,224,71,.3)'
    },
    accent: 'var(--brand-yellow)',
    body: 'var(--brand-blue-100)',
    stat: 'rgba(255,255,255,.1)',
    statBorder: 'rgba(255,255,255,.1)',
    statColor: '#fff',
    shadow: 'none'
  },
  lowcost: {
    border: 'var(--brand-blue-500)',
    bg: 'linear-gradient(to bottom right,#fff,#E6EEFE)',
    color: 'var(--brand-ink)',
    badge: {
      background: 'var(--brand-blue-600)',
      color: 'var(--brand-yellow)',
      border: '1px solid rgba(7,66,202,.3)'
    },
    accent: 'var(--brand-blue-600)',
    body: '#1d4ed8',
    stat: 'rgba(219,234,254,.8)',
    statBorder: '#bfdbfe',
    statColor: 'var(--brand-ink)',
    shadow: '8px 8px 0px rgba(6,54,165,.2)'
  },
  flex: {
    border: 'var(--brand-blue-700)',
    bg: 'linear-gradient(to bottom right,#FFEC01,#FFF12E)',
    color: 'var(--brand-ink)',
    badge: {
      background: 'var(--brand-ink)',
      color: '#fff',
      border: '1px solid rgba(30,58,138,.3)'
    },
    accent: 'var(--brand-ink)',
    body: 'rgba(30,58,138,.8)',
    stat: 'rgba(6,54,165,.1)',
    statBorder: 'rgba(6,54,165,.2)',
    statColor: 'var(--brand-ink)',
    shadow: '8px 8px 0px rgba(255,236,1,.25)'
  },
  '3pl': {
    border: 'var(--brand-blue-700)',
    bg: 'linear-gradient(to bottom right,#0636A5,#001035)',
    color: '#fff',
    badge: {
      background: 'var(--brand-ink)',
      color: '#fff',
      border: '1px solid rgba(30,58,138,.3)'
    },
    accent: 'var(--brand-yellow)',
    body: 'var(--brand-blue-100)',
    stat: 'rgba(255,255,255,.1)',
    statBorder: 'rgba(255,255,255,.1)',
    statColor: '#fff',
    shadow: 'none'
  }
};

/** Tarjeta de servicio del carrusel 3D: imagen de fondo, badge, stats y borde de 4px. */
function ServiceCard({
  theme = 'express',
  icon = 'Zap',
  badge,
  city,
  title,
  description,
  stats,
  image,
  width = 350,
  height = 490,
  onClick,
  style
}) {
  const t = THEMES[theme] || THEMES.express;
  const stat = (v, l) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderRadius: 'var(--radius-md)',
      backdropFilter: 'blur(4px)',
      background: t.stat,
      border: '1px solid ' + t.statBorder,
      color: t.statColor
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      fontWeight: 700,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '.5625rem',
      textTransform: 'uppercase',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wide)',
      opacity: .75
    }
  }, l));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      width,
      height,
      borderRadius: 'var(--radius-3xl)',
      border: '4px solid ' + t.border,
      background: t.bg,
      color: t.color,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: t.shadow,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: theme === 'lowcost' ? .15 : theme === 'flex' ? .2 : .25,
      filter: theme === 'lowcost' ? 'grayscale(1)' : 'none',
      mixBlendMode: theme === 'express' || theme === '3pl' ? 'overlay' : 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top,rgba(0,39,124,.8),rgba(0,39,124,.2),transparent)',
      opacity: .6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      bottom: 16,
      opacity: .05,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 144
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 12,
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-hard-blue-sm)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.625rem',
      fontWeight: 700,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      letterSpacing: 'var(--ls-wide)',
      ...t.badge
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 'auto'
    }
  }, city && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      color: t.accent
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "MapPin",
    size: 14
  }), city), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '1.875rem',
      textTransform: 'uppercase',
      lineHeight: 1,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.75rem',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0,
      color: t.body
    }
  }, description)), stats && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      paddingTop: 16,
      marginTop: 12,
      borderTop: '1px solid rgba(0,0,0,.05)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      textAlign: 'center'
    }
  }, stat(stats.time, 'Entrega'), stat(stats.price, 'Tarifa'), stat(stats.weight, 'Peso')));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/SocialCard.jsx
try { (() => {
const NETS = {
  facebook: {
    bg: '#1877F2',
    shadow: '12px 12px 0px 0px rgba(24,119,242,.3)',
    tilt: '-1deg',
    icon: 'Facebook'
  },
  instagram: {
    bg: 'linear-gradient(to top right,#f09433,#dc2743,#bc1888)',
    shadow: '12px 12px 0px 0px rgba(220,39,67,.3)',
    tilt: '1deg',
    icon: 'Instagram'
  },
  whatsapp: {
    bg: '#25D366',
    shadow: '12px 12px 0px 0px rgba(37,211,102,.3)',
    tilt: '-1deg',
    icon: 'MessageCircle'
  }
};
/** Tarjeta de red social. Se ensancha y rota levemente al pasar el mouse. */
function SocialCard({
  network = 'facebook',
  handle,
  title,
  description,
  cta = 'Seguir comunidad',
  href,
  style
}) {
  const [h, setH] = React.useState(false);
  const n = NETS[network] || NETS.facebook;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      flex: h ? 1.4 : 1,
      height: 420,
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--border-glass)',
      background: n.bg,
      boxShadow: n.shadow,
      transition: 'all var(--dur-slow) var(--smooth-ease)',
      transform: h ? `rotate(${n.tilt})` : 'none',
      position: 'relative',
      overflow: 'hidden',
      textDecoration: 'none',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -48,
      top: -48,
      color: 'rgba(255,255,255,.1)',
      pointerEvents: 'none',
      transition: 'transform var(--dur-carousel)',
      transform: h ? 'scale(1.5) rotate(12deg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: n.icon,
    size: 272
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      textAlign: 'left'
    }
  }, handle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.625rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wider)',
      background: 'rgba(255,255,255,.2)',
      color: '#fff',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      textTransform: 'uppercase',
      border: '1px solid var(--border-glass)',
      marginBottom: 16,
      display: 'inline-block'
    }
  }, handle), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '2.25rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-tighter)',
      lineHeight: 1,
      margin: '0 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.8)',
      fontSize: '.875rem',
      maxWidth: '20rem',
      lineHeight: 'var(--lh-relaxed)',
      fontWeight: 500,
      margin: 0
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontWeight: 700,
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wide)'
    }
  }, /*#__PURE__*/React.createElement("span", null, cta), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 'var(--radius-pill)',
      background: h ? 'rgba(255,255,255,.25)' : 'rgba(255,255,255,.15)',
      border: '1px solid var(--border-glass)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: h ? 'translateX(12px)' : 'none',
      transition: 'all var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "ExternalLink",
    size: 14
  }))));
}
Object.assign(__ds_scope, { SocialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SocialCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
/** Tarjeta de cifra. `hero` es la azul grande; `tint` es la clara con marco interior. */
function StatCard({
  variant = 'tint',
  icon,
  tag,
  value,
  label,
  style
}) {
  const [h, setH] = React.useState(false);
  if (variant === 'hero') return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: 32,
      background: 'var(--brand-blue-700)',
      border: '2px solid var(--brand-blue-700)',
      borderRadius: 'var(--radius-2xl)',
      color: '#fff',
      transition: 'all var(--dur-base)',
      transform: h ? 'translateY(-6px)' : 'none',
      boxShadow: h ? 'var(--shadow-hard-yellow)' : 'var(--shadow-hard-blue)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 48
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 12,
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      borderRadius: 'var(--radius-md)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      padding: '4px 12px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--brand-ink)',
      color: 'var(--brand-yellow)',
      fontWeight: 700
    }
  }, tag)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '4.5rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tighter)',
      textTransform: 'uppercase',
      lineHeight: 1,
      margin: '0 0 12px'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      color: 'var(--brand-blue-100)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      margin: 0
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--brand-blue-50)',
      border: '1px solid var(--brand-blue-100)',
      borderRadius: 'var(--radius-3xl)',
      padding: 8,
      transition: 'all var(--dur-base)',
      transform: h ? 'translateY(-6px)' : 'none',
      boxShadow: h ? 'var(--shadow-soft-elevation)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'inset 0 2px 4px 0 rgba(6,54,165,.05)',
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      minHeight: 200
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 12,
      borderRadius: 'var(--radius-md)',
      width: 'fit-content',
      marginBottom: 24,
      display: 'inline-flex',
      background: h ? 'var(--brand-blue-700)' : 'var(--brand-blue-50)',
      color: h ? 'var(--brand-yellow)' : 'var(--brand-blue-700)',
      border: '1px solid var(--brand-blue-100)',
      transition: 'all var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tighter)',
      color: 'var(--brand-blue-700)',
      lineHeight: 1,
      margin: '0 0 8px'
    }
  }, value), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.625rem',
      color: 'var(--brand-blue-600)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wider)',
      fontWeight: 600,
      margin: 0
    }
  }, label))));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const V = {
  default: {
    background: 'var(--brand-yellow)',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-yellow)',
    hover: {
      background: '#fff',
      boxShadow: 'var(--shadow-yellow-glow)'
    }
  },
  brand: {
    background: 'var(--brand-blue-700)',
    color: '#fff',
    border: '1px solid rgba(255,236,1,.4)',
    hover: {
      background: 'var(--brand-ink)',
      borderColor: 'var(--brand-yellow)'
    }
  },
  outline: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.3)',
    hover: {
      background: 'rgba(255,255,255,.1)',
      borderColor: '#fff'
    }
  },
  outlineBlue: {
    background: 'transparent',
    color: 'var(--brand-blue-700)',
    border: '1px solid var(--brand-blue-700)',
    hover: {
      background: 'var(--brand-blue-50)'
    }
  },
  secondary: {
    background: 'var(--brand-ink)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,.1)',
    hover: {
      background: 'var(--brand-blue-700)'
    }
  },
  ghost: {
    background: 'transparent',
    color: '#fff',
    border: '1px solid transparent',
    hover: {
      background: 'rgba(255,255,255,.1)',
      color: 'var(--brand-yellow)'
    }
  }
};
const S = {
  sm: {
    height: 32,
    padding: '0 12px',
    fontSize: 11
  },
  md: {
    height: 40,
    padding: '0 16px',
    fontSize: 12
  },
  lg: {
    height: 48,
    padding: '0 24px',
    fontSize: 14
  }
};

/** Botón sólido de la marca. Bebas Neue en mayúscula, esquinas apenas redondeadas. */
function Button({
  children,
  variant = 'default',
  size = 'md',
  icon,
  iconRight,
  block = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const v = V[variant] || V.default,
    s = S[size] || S.md,
    Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-subheading)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      transition: 'all var(--dur-fast) var(--smooth-ease)',
      background: v.background,
      color: v.color,
      border: v.border,
      ...s,
      ...(h && !disabled ? v.hover : null),
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CtaPill.jsx
try { (() => {
/** CTA en píldora con ícono anidado que se desplaza al pasar el mouse. */
function CtaPill({
  children,
  tone = 'yellow',
  icon = 'ArrowRight',
  href,
  onClick,
  pulse = false,
  style
}) {
  const [h, setH] = React.useState(false),
    [a, setA] = React.useState(false);
  const T = {
    yellow: {
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      border: '1px solid var(--brand-yellow)',
      chip: 'rgba(6,54,165,.15)',
      hoverShadow: '0 8px 20px -8px rgba(255,236,1,.5)'
    },
    ghost: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.3)',
      chip: 'rgba(255,255,255,.1)',
      hoverShadow: 'none'
    },
    blue: {
      background: 'var(--brand-blue-700)',
      color: '#fff',
      border: '1px solid var(--brand-blue-700)',
      chip: 'rgba(255,236,1,.2)',
      hoverShadow: '0 8px 20px -8px rgba(6,54,165,.5)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '.5rem',
      borderRadius: 'var(--radius-pill)',
      padding: '.75rem 1.5rem',
      fontWeight: 700,
      fontFamily: 'var(--font-mono)',
      fontSize: '.85rem',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'all .25s var(--smooth-ease)',
      transform: a ? 'scale(.95)' : h ? 'scale(1.02)' : 'scale(1)',
      background: T.background,
      color: T.color,
      border: T.border,
      boxShadow: h ? T.hoverShadow : 'none',
      animation: pulse ? 'edrBorderPulse 2s ease-in-out infinite' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      width: '1.75rem',
      height: '1.75rem',
      marginLeft: '.5rem',
      background: T.chip,
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) ease'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })));
}
Object.assign(__ds_scope, { CtaPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CtaPill.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
/** Cuadrado redondeado con un glifo. Amarillo sobre azul es el par por defecto. */
function IconTile({
  name,
  size = 48,
  tone = 'yellow',
  shadow = true,
  animate = 'none',
  style
}) {
  const [h, setH] = React.useState(false);
  const T = {
    yellow: {
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      border: '1px solid var(--brand-yellow)',
      sh: 'var(--shadow-hard-blue-sm)'
    },
    glass: {
      background: 'rgba(255,255,255,.1)',
      color: 'var(--brand-yellow)',
      border: '1px solid rgba(255,255,255,.1)',
      sh: 'none'
    },
    tint: {
      background: 'var(--brand-blue-50)',
      color: 'var(--brand-blue-700)',
      border: '1px solid var(--brand-blue-100)',
      sh: 'none'
    },
    blue: {
      background: 'var(--brand-blue-700)',
      color: 'var(--brand-yellow)',
      border: '1px solid var(--brand-blue-700)',
      sh: 'var(--shadow-hard-yellow-sm)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: T.background,
      color: T.color,
      border: T.border,
      boxShadow: shadow ? T.sh : 'none',
      transition: 'transform var(--dur-base) var(--spring-ease),background var(--dur-base)',
      transform: h && animate === 'tilt' ? 'scale(1.05) rotate(12deg)' : 'none',
      animation: animate === 'bob' ? 'edrIconBob 3s ease-in-out infinite' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureRow.jsx
try { (() => {
/** Fila de beneficio: chip de ícono, título en Bebas y descripción. Se corre 4px al hover. */
function FeatureRow({
  icon,
  title,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      padding: 16,
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (h ? 'var(--brand-blue-700)' : 'transparent'),
      background: h ? '#fff' : 'transparent',
      transform: h ? 'translateX(4px)' : 'none',
      transition: 'all var(--dur-base)',
      cursor: 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    name: icon,
    size: 48,
    animate: "tilt"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--brand-blue-700)',
      lineHeight: 1,
      margin: '0 0 8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.875rem',
      color: 'var(--brand-blue-600)',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
/** Cinta infinita de texto. Se pausa al pasar el mouse, como en el sitio. */
function Marquee({
  items = [],
  duration = 35,
  tone = 'dark',
  separator = '—',
  style
}) {
  const [p, setP] = React.useState(false);
  const T = tone === 'dark' ? {
    background: 'var(--brand-ink)',
    color: '#fff'
  } : tone === 'yellow' ? {
    background: 'var(--brand-yellow)',
    color: 'var(--brand-blue-700)'
  } : {
    background: 'var(--brand-white)',
    color: 'var(--brand-blue-700)'
  };
  const run = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setP(true),
    onMouseLeave: () => setP(false),
    style: {
      overflow: 'hidden',
      borderTop: '1px solid var(--border-glass)',
      borderBottom: '1px solid var(--border-glass)',
      ...T,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 'max-content',
      alignItems: 'center',
      padding: '1rem 0',
      animation: `edrMarquee ${duration}s linear infinite`,
      animationPlayState: p ? 'paused' : 'running'
    }
  }, run.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2rem',
      padding: '0 2rem',
      fontFamily: 'var(--font-subheading)',
      fontSize: '1.125rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, it, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .35
    }
  }, separator)))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/** Bloque de titular: badge, título Anton en mayúscula y bajada opcional. */
function SectionHeading({
  badge,
  badgeTone,
  title,
  highlight,
  lead,
  align = 'left',
  onDark = false,
  underline = false,
  style
}) {
  const c = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: c ? 'center' : 'flex-start',
      textAlign: c ? 'center' : 'left',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement(__ds_scope.BadgePill, {
    tone: badgeTone || (onDark ? 'yellow' : 'yellowSoft')
  }, badge), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--fs-h2)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 'var(--lh-tight)',
      color: onDark ? '#fff' : 'var(--brand-ink)',
      margin: 0
    }
  }, title, highlight && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-yellow)',
      textDecoration: underline ? 'underline' : 'none',
      textUnderlineOffset: 8,
      textDecorationColor: 'var(--brand-blue-500)'
    }
  }, highlight))), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-relaxed)',
      fontWeight: 500,
      maxWidth: '42rem',
      margin: 0,
      color: onDark ? 'var(--brand-blue-100)' : 'var(--brand-blue-600)'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/** Acordeón de preguntas frecuentes. */
function Accordion({
  items = [],
  defaultOpen = 0,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: it.q,
      style: {
        borderRadius: 'var(--radius-lg)',
        border: '1px solid ' + (on ? 'var(--brand-yellow)' : 'var(--brand-blue-100)'),
        background: on ? '#fff' : 'var(--brand-blue-50)',
        overflow: 'hidden',
        transition: 'all var(--dur-base)',
        boxShadow: on ? 'var(--shadow-soft-elevation)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-subheading)',
        fontSize: '1.125rem',
        letterSpacing: 'var(--ls-wide)',
        textTransform: 'uppercase',
        color: 'var(--brand-blue-700)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base)',
        display: 'inline-flex',
        color: 'var(--brand-blue-700)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ChevronDown",
      size: 20
    }))), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 20px',
        fontSize: '.875rem',
        lineHeight: 'var(--lh-relaxed)',
        color: 'var(--brand-blue-600)'
      }
    }, it.a));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
/** Diálogo de detalle de servicio, sobre velo azul. */
function Modal({
  open,
  title,
  badge,
  children,
  footer,
  onClose,
  width = 680
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 2000,
      background: 'rgba(0,16,53,.85)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      border: '2px solid var(--brand-blue-700)',
      boxShadow: 'var(--shadow-hard-blue)',
      width: '100%',
      maxWidth: width,
      position: 'relative',
      overflow: 'hidden',
      color: 'var(--brand-blue-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 32px',
      borderBottom: '1px solid var(--brand-blue-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.625rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-block',
      marginBottom: 8
    }
  }, badge), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.875rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1,
      margin: 0,
      color: 'var(--brand-ink)'
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'var(--brand-blue-50)',
      border: '1px solid var(--brand-blue-100)',
      borderRadius: 'var(--radius-pill)',
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: 'var(--brand-blue-700)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "X",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      fontSize: '.9375rem',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--brand-blue-600)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 32px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Confirmación abajo a la derecha. */
function Toast({
  message,
  show = false,
  icon = 'CircleCheck'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--brand-blue-700)',
      color: '#fff',
      border: '2px solid var(--brand-yellow)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: '.875rem',
      fontWeight: 600,
      boxShadow: 'var(--shadow-soft-elevation)',
      pointerEvents: 'none',
      transform: show ? 'translateY(0)' : 'translateY(24px)',
      opacity: show ? 1 : 0,
      transition: 'all var(--dur-base) var(--spring-ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--brand-yellow)"
  }), message);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Campo de formulario sobre fondo claro: relleno azul 50, foco amarillo. */
function Field({
  label,
  type = 'text',
  as = 'input',
  placeholder,
  value,
  onChange,
  options = [],
  rows = 4,
  hint,
  style
}) {
  const [f, setF] = React.useState(false);
  const base = {
    width: '100%',
    background: f ? '#fff' : 'var(--brand-blue-50)',
    border: '1px solid ' + (f ? 'var(--brand-yellow)' : 'var(--brand-blue-100)'),
    borderRadius: 'var(--radius-md)',
    color: 'var(--brand-blue-700)',
    padding: '12px 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--fs-body-sm)',
    outline: 'none',
    boxShadow: f ? '0 0 0 3px rgba(255,236,1,.25)' : 'none',
    transition: 'all var(--dur-fast) var(--smooth-ease)'
  };
  const common = {
    placeholder,
    value,
    onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: base
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--brand-blue-700)',
      fontWeight: 700
    }
  }, label), as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, common, {
    style: {
      ...base,
      resize: 'vertical',
      minHeight: 120
    }
  })) : as === 'select' ? /*#__PURE__*/React.createElement("select", common, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, common)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.75rem',
      color: 'var(--brand-blue-600)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/SubscribeForm.jsx
try { (() => {
/** Captura de email en píldora: input y botón dentro del mismo contenedor. */
function SubscribeForm({
  placeholder = 'tu@email.com',
  cta = 'Suscribirme',
  onSubmit,
  onDark = true,
  style
}) {
  const [v, setV] = React.useState(''),
    [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(v);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 6,
      borderRadius: 'var(--radius-pill)',
      background: onDark ? 'rgba(255,255,255,.05)' : 'var(--brand-blue-50)',
      border: '1px solid ' + (f ? 'var(--brand-yellow)' : onDark ? 'rgba(255,255,255,.2)' : 'var(--brand-blue-100)'),
      transition: 'border-color var(--dur-fast)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: v,
    onChange: e => setV(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '8px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: '.875rem',
      color: onDark ? '#fff' : 'var(--brand-blue-700)'
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    iconRight: "ArrowRight",
    style: {
      borderRadius: 'var(--radius-pill)',
      height: 36
    }
  }, cta));
}
Object.assign(__ds_scope, { SubscribeForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SubscribeForm.jsx", error: String((e && e.message) || e) }); }

// components/layout/Footer.jsx
try { (() => {
/** Pie azul con barra amarilla superior, cuatro columnas y línea legal. */
function Footer({
  logoSrc = 'assets/logo-envios-simplified.webp',
  tagline = 'tu solución confiable',
  about,
  columns = [],
  socials = [{
    name: 'Instagram',
    href: '#'
  }, {
    name: 'Facebook',
    href: '#'
  }, {
    name: 'MessageCircle',
    href: '#'
  }],
  legal = '© 2026 Envíos DosRuedas · Mar del Plata, Argentina'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--brand-blue-700)',
      color: '#fff',
      borderTop: '1px solid var(--border-glass)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--brand-yellow)',
      width: '100%',
      boxShadow: '0 4px 6px rgba(255,236,1,.3)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 50% 0%,rgba(255,204,0,.08),transparent 50%),radial-gradient(circle at 10% 90%,rgba(0,51,153,.4),transparent 40%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 32px',
      position: 'relative',
      zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '5fr 3fr 2fr 2fr',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Env\xEDos DosRuedas",
    style: {
      width: 44,
      height: 44,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      letterSpacing: 'var(--ls-wide)',
      color: '#fff',
      display: 'block',
      textTransform: 'uppercase',
      lineHeight: 1.1
    }
  }, "Env\xEDos ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-yellow)'
    }
  }, "Dosruedas")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '.5625rem',
      letterSpacing: 'var(--ls-wider)',
      color: 'var(--brand-blue-100)',
      textTransform: 'uppercase',
      lineHeight: 1,
      fontWeight: 700
    }
  }, tagline))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--brand-blue-100)',
      fontSize: '.875rem',
      lineHeight: 'var(--lh-relaxed)',
      maxWidth: '24rem',
      margin: 0
    }
  }, about), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.75rem',
      fontWeight: 700,
      color: 'var(--brand-yellow)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wider)',
      display: 'block',
      marginBottom: 12
    }
  }, "Seguinos en redes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.name,
    href: s.href,
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(255,255,255,.05)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(255,255,255,.2)',
      boxShadow: 'var(--shadow-hard-yellow-sm)',
      textDecoration: 'none',
      transition: 'all var(--dur-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--brand-yellow)';
      e.currentTarget.style.color = 'var(--brand-blue-700)';
      e.currentTarget.style.transform = 'translateY(-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(255,255,255,.05)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.transform = 'none';
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s.name,
    size: 18
  })))))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '1.125rem',
      fontWeight: 400,
      letterSpacing: 'var(--ls-wide)',
      color: 'var(--brand-yellow)',
      textTransform: 'uppercase',
      borderBottom: '1px solid var(--border-glass)',
      paddingBottom: 8,
      margin: 0
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: '.875rem'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href || '#',
    style: {
      color: 'var(--brand-blue-100)',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      transition: 'all var(--dur-base)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--brand-yellow)';
      e.currentTarget.style.transform = 'translateX(4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--brand-blue-100)';
      e.currentTarget.style.transform = 'none';
    }
  }, l.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.icon,
    size: 16,
    color: "var(--brand-yellow)"
  }), /*#__PURE__*/React.createElement("span", null, l.label)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid var(--border-glass)',
      padding: '20px 32px',
      textAlign: 'center',
      fontSize: '.75rem',
      color: 'var(--brand-blue-100)'
    }
  }, legal));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Footer.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
/** Hero de la home: fondo azul con red logística, titular cinético y tarjeta flotante. */
function Hero({
  badge = 'Tu Solución Confiable',
  lines = [],
  lead,
  primaryCta = 'Solicitar Servicio',
  secondaryCta = 'Ver Servicios',
  trust = [],
  counter = 5000,
  counterLabel = 'ENVÍOS',
  mapImage = 'assets/card_mapa.webp',
  bgImage = 'assets/hero-background.jpeg'
}) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const start = performance.now(),
      dur = 2200;
    let raf;
    const tick = t => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(counter * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [counter]);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '95vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '128px 32px 80px',
      overflow: 'hidden',
      background: 'var(--brand-blue-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 30% 30%,rgba(255,255,255,.03),transparent 40%),radial-gradient(circle at 70% 80%,rgba(255,236,1,.03),transparent 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: .05,
      mixBlendMode: 'overlay',
      pointerEvents: 'none',
      background: `url('${bgImage}') center/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.BadgePill, {
    tone: "yellow",
    pulse: true
  }, badge), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(2.25rem,5vw,3.75rem)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-display)',
      lineHeight: 1.05,
      color: '#fff',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: l.mark ? {
      background: 'var(--brand-yellow)',
      color: 'var(--brand-blue-700)',
      padding: '4px 10px',
      margin: '4px 0'
    } : undefined
  }, l.text || l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-lead)',
      color: 'var(--brand-blue-100)',
      maxWidth: '36rem',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0
    }
  }, lead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CtaPill, {
    tone: "yellow"
  }, primaryCta), /*#__PURE__*/React.createElement(__ds_scope.CtaPill, {
    tone: "ghost"
  }, secondaryCta)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      paddingTop: 24,
      borderTop: '1px solid var(--border-glass)',
      width: '100%',
      maxWidth: '32rem'
    }
  }, trust.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: 8,
      background: 'rgba(255,255,255,.1)',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--brand-yellow)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--brand-blue-100)'
    }
  }, t.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 450,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 400,
      height: '100%',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 48,
      right: 0,
      width: '78%',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      border: '1px solid var(--brand-blue-100)',
      background: '#fff',
      padding: 12,
      boxShadow: 'var(--shadow-hard-blue)',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: mapImage,
    alt: "Mapa de cobertura de Mar del Plata",
    style: {
      width: '100%',
      height: 190,
      objectFit: 'cover',
      borderRadius: 'var(--radius-lg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      color: '#0f172a'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.75rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)'
    }
  }, "Ruteo de Env\xEDos"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.5625rem',
      padding: '2px 8px',
      border: '1px solid var(--brand-blue-400)',
      background: '#fff',
      color: 'var(--brand-blue-700)',
      fontWeight: 700,
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)'
    }
  }, "Optimizado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 48,
      left: 16,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FloatingPill, {
    icon: "ShieldCheck",
    tone: "white"
  }, "Seguridad garantizada")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FloatingPill, {
    icon: "MapPin",
    tone: "yellow",
    delay: 0.6
  }, "100% Marplatense")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 24,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FloatingPill, {
    icon: "Zap",
    tone: "blue",
    delay: 1.2
  }, "Env\xEDos en el d\xEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -16,
      right: 16,
      zIndex: 6,
      background: '#fff',
      color: 'var(--brand-blue-700)',
      border: '1px solid var(--brand-blue-100)',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,.25)',
      padding: '8px 16px',
      borderRadius: 'var(--radius-xl)',
      fontFamily: 'var(--font-display)',
      fontSize: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      animation: 'edrFloatSlow 4s ease-in-out infinite 1.8s'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-yellow)',
      fontWeight: 700
    }
  }, "+"), /*#__PURE__*/React.createElement("span", null, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wider)',
      marginLeft: 4,
      textTransform: 'uppercase'
    }
  }, counterLabel)))))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/Navbar.jsx
try { (() => {
/** Header fijo de vidrio: logo, nav con celdas delimitadas y dropdowns, CTA de WhatsApp. */
function Navbar({
  logoSrc = 'assets/logo-envios-simplified.webp',
  items = [],
  active,
  onNavigate,
  scrolled = false,
  phone = '223 660 2699',
  sticky = true
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'fixed' : 'relative',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: scrolled ? 'var(--header-glass-scrolled)' : 'var(--header-glass)',
      backdropFilter: scrolled ? 'blur(12px)' : 'blur(4px)',
      borderBottom: '1px solid var(--border-glass)',
      boxShadow: scrolled ? '0 10px 30px rgba(7,31,92,.8)' : 'none',
      padding: scrolled ? '12px 48px' : '20px 48px',
      transition: 'all var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Env\xEDos DosRuedas",
    style: {
      height: 40,
      width: 'auto',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-wide)',
      color: '#fff',
      lineHeight: 1.1
    }
  }, "ENV\xCDOS ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-yellow)'
    }
  }, "DOSRUEDAS"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      borderLeft: '1px solid var(--border-glass)'
    }
  }, items.map(it => {
    const on = active === it.id || open === it.id;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        position: 'relative'
      },
      onMouseEnter: () => setOpen(it.id),
      onMouseLeave: () => setOpen(null)
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => onNavigate && onNavigate(it.id),
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-wider)',
        color: on ? '#fff' : 'rgba(255,255,255,.8)',
        background: on ? 'rgba(255,255,255,.05)' : 'transparent',
        border: 'none',
        borderRight: '1px solid var(--border-glass)',
        padding: '20px 28px',
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        transition: 'all var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'Home',
      size: 16,
      color: "var(--brand-yellow)"
    }), /*#__PURE__*/React.createElement("span", null, it.label), it.children && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ChevronDown",
      size: 16,
      color: on ? 'var(--brand-yellow)' : 'rgba(255,255,255,.6)'
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 4,
        background: 'var(--brand-yellow)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base)'
      }
    })), it.children && open === it.id && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: '100%',
        paddingTop: 8,
        width: 288,
        zIndex: 60
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--brand-navy)',
        borderRadius: 'var(--radius-2xl)',
        border: '1px solid var(--border-glass)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)',
        padding: 10,
        display: 'grid',
        gap: 4
      }
    }, it.children.map(c => /*#__PURE__*/React.createElement("a", {
      key: c.label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
        padding: 10,
        borderRadius: 'var(--radius-md)',
        textDecoration: 'none'
      },
      onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.1)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: 8,
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(255,255,255,.05)',
        color: 'var(--brand-yellow)',
        display: 'inline-flex',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: c.icon || 'Zap',
      size: 16
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-subheading)',
        fontSize: '.75rem',
        textTransform: 'uppercase',
        letterSpacing: 'var(--ls-wide)',
        color: '#fff',
        display: 'block',
        fontWeight: 700
      }
    }, c.label), c.description && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '.625rem',
        color: 'rgba(191,219,254,.7)',
        display: 'block',
        marginTop: 2
      }
    }, c.description)))))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: '.75rem',
      color: 'var(--brand-blue-100)',
      letterSpacing: 'var(--ls-wide)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "Phone",
    size: 14,
    color: "var(--brand-yellow)"
  }), phone), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "MessageCircle"
  }, "WhatsApp"))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/home/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Hero,
  SectionHeading,
  BadgePill,
  Button,
  CtaPill,
  Marquee,
  IconTile,
  Icon,
  ServiceCard,
  StatCard,
  BentoCard,
  SocialCard,
  FeatureRow,
  Modal,
  Field,
  SubscribeForm
} = window.XTRAMusicDesignSystem_bd8062;
const D = window.EDR_DATA;
const SECTION = {
  maxWidth: 'var(--container)',
  margin: '0 auto',
  padding: '0 32px'
};
function ServicesSection({
  onOpen
}) {
  const [i, setI] = React.useState(0);
  const [auto, setAuto] = React.useState(true);
  React.useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setI(p => (p + 1) % D.servicios.length), 4500);
    return () => clearInterval(t);
  }, [auto]);
  const nav = d => {
    setAuto(false);
    setI(p => (p + d + D.servicios.length) % D.servicios.length);
  };
  const roundBtn = {
    padding: 12,
    borderRadius: 'var(--radius-pill)',
    background: 'rgba(255,255,255,.1)',
    border: '1px solid rgba(255,255,255,.2)',
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-flex'
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      background: 'var(--brand-ink)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 384,
      height: 384,
      background: 'rgba(9,80,246,.1)',
      borderRadius: '50%',
      filter: 'blur(64px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 500,
      height: 500,
      background: 'rgba(255,236,1,.05)',
      borderRadius: '50%',
      filter: 'blur(64px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      marginBottom: 64,
      borderBottom: '1px solid var(--border-glass)',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    badge: "Nuestros Servicios",
    badgeTone: "blue",
    title: "Soluciones log\xEDsticas",
    highlight: "A tu medida",
    underline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setAuto(!auto),
    style: {
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-wide)',
      cursor: 'pointer',
      background: auto ? 'var(--brand-yellow)' : 'rgba(255,255,255,.1)',
      color: auto ? 'var(--brand-blue-700)' : 'var(--brand-blue-200)',
      border: '1px solid ' + (auto ? 'var(--brand-yellow)' : 'rgba(255,255,255,.2)'),
      textTransform: 'uppercase'
    }
  }, auto ? 'Rotación automática' : 'Rotación pausada'), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(-1),
    style: roundBtn,
    "aria-label": "Anterior"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronLeft",
    size: 20
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav(1),
    style: roundBtn,
    "aria-label": "Siguiente"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 20
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 540,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      perspective: 2000,
      transformStyle: 'preserve-3d'
    }
  }, D.servicios.map((s, n) => {
    const total = D.servicios.length;
    const off = (n - i + total / 2) % total - total / 2,
      abs = Math.abs(off),
      center = off === 0;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: () => center ? onOpen(s) : (setI(n), setAuto(false)),
      style: {
        position: 'absolute',
        cursor: 'pointer',
        transition: 'all .7s ease-out',
        zIndex: total - abs,
        opacity: center ? 1 : Math.max(.15, 1 - abs * .4),
        transform: `translateX(${off * 250}px) translateZ(${center ? 120 : -abs * 180}px) rotateY(${off * -28}deg) scale(${center ? 1.05 : Math.max(.65, 1 - abs * .18)})`
      }
    }, /*#__PURE__*/React.createElement(ServiceCard, _extends({}, s, {
      width: 350,
      height: 490
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 24
    }
  }, D.servicios.map((s, n) => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => {
      setI(n);
      setAuto(false);
    },
    "aria-label": s.title,
    style: {
      width: n === i ? 32 : 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: n === i ? 'var(--brand-yellow)' : 'rgba(255,255,255,.25)',
      transition: 'all var(--dur-base)'
    }
  })))));
}
function CoverageSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '144px 0',
      background: 'var(--brand-ink)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid var(--border-glass)',
      borderBottom: '1px solid var(--border-glass)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: 600,
      height: 600,
      background: 'rgba(255,236,1,.05)',
      borderRadius: '50%',
      filter: 'blur(150px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '64rem',
      marginBottom: 96
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    onDark: true,
    badge: "Socio Estrat\xE9gico Local",
    badgeTone: "glass",
    title: "Potenciamos tu marca en Mar del Plata",
    lead: "Dise\xF1amos una arquitectura log\xEDstica integral adaptada al mercado marplatense: cadeter\xEDa urbana inmediata, colecta gratis a domicilio para MercadoLibre Flex y gesti\xF3n 3PL completa en nuestro dep\xF3sito inteligente."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: 96,
      background: 'var(--brand-yellow)',
      borderRadius: 'var(--radius-pill)',
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '7fr 5fr',
      gap: 32,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(BentoCard, {
    icon: "Landmark",
    tag: "Emprendedores",
    title: "Log\xEDstica E-Commerce",
    description: "Gesti\xF3n de \xFAltima milla pensada para PyMEs y marcas locales. Optimizamos tus costos de env\xEDo con retiros programados a domicilio y soporte post-venta.",
    items: ['Soporte comercial dedicado vía WhatsApp', 'Entregas contrareembolso integradas sin cargo extra', 'Retiro programado en tu domicilio o depósito'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "default",
      iconRight: "ArrowRight"
    }, "Consult\xE1 planes")
  }), /*#__PURE__*/React.createElement(BentoCard, {
    icon: "Building2",
    tag: "Corporativo",
    title: "Distribuci\xF3n Urbana",
    description: "Transformamos la \xFAltima milla de tu empresa con una flota \xE1gil y especializada, y facturaci\xF3n mensual centralizada.",
    items: ['Rutas fijas y ventanas horarias pactadas', 'Reportes de entrega y facturación mensual'],
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconRight: "ArrowRight"
    }, "Hablar con un asesor")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 12
    }
  }, D.zonas.map(z => /*#__PURE__*/React.createElement("span", {
    key: z,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(255,255,255,.05)',
      border: '1px solid var(--border-glass)',
      fontFamily: 'var(--font-mono)',
      fontSize: '.6875rem',
      letterSpacing: 'var(--ls-wide)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "MapPin",
    size: 12,
    color: "var(--brand-yellow)"
  }), z)))));
}
function CalculatorSection({
  onQuote
}) {
  const [servicio, setServicio] = React.useState('Envíos Express');
  const [km, setKm] = React.useState(3);
  const base = servicio === 'Envíos Express' ? 3700 : 3000;
  const total = base + Math.max(0, km - 3) * 450;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      background: 'var(--brand-white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    badge: "Cotiz\xE1 en 10 segundos",
    title: "Sab\xE9 cu\xE1nto sale",
    highlight: "antes de pedirlo",
    lead: "Tarifa base por los primeros 3 km y un adicional por kil\xF3metro. Sin sorpresas ni recargos escondidos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: '.75rem',
      color: 'var(--brand-blue-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ShieldCheck",
    size: 14,
    color: "var(--brand-blue-700)"
  }), "Seguro incluido"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: '.75rem',
      color: 'var(--brand-blue-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Clock",
    size: 14,
    color: "var(--brand-blue-700)"
  }), "Retiro coordinado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--brand-blue-50)',
      border: '1px solid var(--brand-blue-100)',
      borderRadius: 'var(--radius-3xl)',
      padding: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-2xl)',
      padding: 32,
      boxShadow: 'var(--shadow-minimal)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Servicio",
    as: "select",
    options: ['Envíos Express', 'Envíos LowCost'],
    value: servicio,
    onChange: e => setServicio(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.75rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase',
      color: 'var(--brand-blue-700)',
      fontWeight: 700
    }
  }, "Distancia \xB7 ", km, " km"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "1",
    max: "20",
    value: km,
    onChange: e => setKm(+e.target.value),
    style: {
      width: '100%',
      marginTop: 10,
      accentColor: 'var(--brand-blue-700)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: '20px 24px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--brand-blue-700)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-subheading)',
      fontSize: '.875rem',
      letterSpacing: 'var(--ls-wider)',
      textTransform: 'uppercase'
    }
  }, "Estimado"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-tighter)'
    }
  }, "$", total.toLocaleString('es-AR'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    iconRight: "ArrowRight",
    onClick: onQuote
  }, "Pedir este env\xEDo"))))));
}
function HomeScreen({
  onQuote,
  onOpenService,
  openService,
  onCloseService
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    mapImage: "../../assets/card_mapa.webp",
    bgImage: "../../assets/hero-background.jpeg",
    badge: "Tu Soluci\xF3n Confiable",
    lines: [{
      text: 'Mensajería y Logística'
    }, {
      text: 'E-Commerce',
      mark: true
    }, {
      text: 'en Mar del Plata'
    }],
    lead: "Somos tu partner estrat\xE9gico en mensajer\xEDa, env\xEDos en el d\xEDa y delivery de \xFAltima milla. Soluciones \xE1giles, seguras y competitivas para potenciar tu marca.",
    trust: [{
      icon: 'ShieldCheck',
      label: '100% Seguro'
    }, {
      icon: 'Zap',
      label: 'Rápido'
    }, {
      icon: 'MapPin',
      label: 'Cobertura total'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      background: 'var(--brand-white)',
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    badge: "Partner Log\xEDstico Especializado",
    title: "Conectamos Mar del Plata de punta a punta",
    lead: "Nos especializamos en la distribuci\xF3n de \xFAltima milla para e-commerce locales y retailers nacionales, asegurando que tus productos lleguen en tiempo r\xE9cord con tarifas transparentes."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "Clock",
    title: "Entregas a tiempo"
  }, "Puntualidad garantizada en cada env\xEDo. Optimizamos cada ruta mediante geolocalizaci\xF3n avanzada."), /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "ShieldCheck",
    title: "Env\xEDos seguros"
  }, "Protecci\xF3n total de tus paquetes. Despachos con custodia digital y firmas de entrega seguras."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    variant: "hero",
    icon: "Truck",
    tag: "Mar del Plata 2026",
    value: "+50K",
    label: "Env\xEDos y entregas realizadas con \xE9xito en toda la regi\xF3n",
    style: {
      gridColumn: '1 / -1'
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "ShieldCheck",
    value: "0",
    label: "Paquetes extraviados"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "Users",
    value: "+50",
    label: "Emprendedores conf\xEDan"
  })))), /*#__PURE__*/React.createElement(ServicesSection, {
    onOpen: onOpenService
  }), /*#__PURE__*/React.createElement(Marquee, {
    items: D.partners,
    duration: 35,
    tone: "yellow"
  }), /*#__PURE__*/React.createElement(CoverageSection, null), /*#__PURE__*/React.createElement(CalculatorSection, {
    onQuote: onQuote
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0',
      background: 'var(--brand-dark)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at center,rgba(6,54,165,.15),transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    onDark: true,
    badge: "Conect\xE1 con nosotros",
    title: "Sumate a nuestra comunidad",
    highlight: "en redes sociales",
    lead: "Segu\xED el movimiento diario de la flota en Mar del Plata, enterate de avisos operativos y contactate con nuestro equipo al instante."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(SocialCard, {
    network: "facebook",
    handle: "Env\xEDos DosRuedas",
    title: "Facebook",
    description: "Segu\xED nuestro d\xEDa a d\xEDa, novedades operativas y comunidad en Mar del Plata.",
    cta: "Seguir comunidad",
    href: "https://www.facebook.com/enviosdosruedas/"
  }), /*#__PURE__*/React.createElement(SocialCard, {
    network: "instagram",
    handle: "@enviosdosruedas",
    title: "Instagram",
    description: "Mir\xE1 el detr\xE1s de escena de nuestros riders y la flota recorriendo la ciudad.",
    cta: "Ver contenido",
    href: "https://www.instagram.com/enviosdosruedas/"
  }), /*#__PURE__*/React.createElement(SocialCard, {
    network: "whatsapp",
    handle: "223 660 2699",
    title: "WhatsApp",
    description: "Atenci\xF3n personalizada e inmediata para cotizaciones y consultas.",
    cta: "Enviar mensaje",
    href: "https://wa.me/542236602699"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      maxWidth: 520,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SubscribeForm, {
    onSubmit: onQuote
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!openService,
    onClose: onCloseService,
    title: openService ? openService.title : '',
    badge: openService ? openService.badge : '',
    footer: openService ? /*#__PURE__*/React.createElement(Button, {
      block: true,
      iconRight: "ArrowRight",
      onClick: onCloseService
    }, openService.cta) : null
  }, openService && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, openService.summary), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, openService.features.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ShieldCheck",
    size: 18,
    color: "var(--brand-blue-700)"
  }), /*#__PURE__*/React.createElement("span", null, x)))))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/home/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/home/data.js
try { (() => {
window.EDR_DATA = {
  nav: [{
    id: 'inicio',
    label: 'Inicio',
    icon: 'Home'
  }, {
    id: 'servicios',
    label: 'Servicios',
    icon: 'Bike',
    children: [{
      label: 'Envíos Express',
      description: 'Rápido, en 2 horas',
      icon: 'Zap'
    }, {
      label: 'Envíos LowCost',
      description: 'Económico e inteligente',
      icon: 'TrendingDown'
    }, {
      label: 'Envíos Flex (MeLi)',
      description: 'Socio MercadoLibre Flex',
      icon: 'Clock'
    }, {
      label: 'E-Commerce & 3PL',
      description: 'Logística para PyMEs',
      icon: 'ShoppingBag'
    }]
  }, {
    id: 'nosotros',
    label: 'Nosotros',
    icon: 'Info',
    children: [{
      label: 'Sobre Nosotros',
      description: 'Quiénes somos',
      icon: 'Info'
    }, {
      label: 'Preguntas Frecuentes',
      description: 'Todas tus dudas resueltas',
      icon: 'HelpCircle'
    }, {
      label: 'Nuestras Redes',
      description: 'Comunidad en movimiento',
      icon: 'Share2'
    }]
  }, {
    id: 'contacto',
    label: 'Contacto',
    icon: 'Mail'
  }],
  servicios: [{
    id: 'express',
    theme: 'express',
    icon: 'Zap',
    badge: 'URGENTE',
    city: 'Cobertura MDQ',
    title: 'Envíos Express',
    description: 'Mensajería en moto con entregas inmediatas de alta prioridad.',
    image: '../../assets/cards/fondo_express.webp',
    stats: {
      time: '30-90 min',
      price: '$3.700 Base',
      weight: 'Hasta 10 kg'
    },
    summary: 'Servicio de mensajería urbana inmediata, ideal para trámites urgentes, despacho de encomiendas y entrega de documentación. Se asigna un repartidor exclusivo para tu envío.',
    features: ['Tarifa base de $3.700 hasta 3 km.', 'Entrega garantizada puerta a puerta en tiempo récord.', 'Notificación automática de entrega por WhatsApp.'],
    cta: 'Cotizá tu Express'
  }, {
    id: 'lowcost',
    theme: 'lowcost',
    icon: 'Box',
    badge: 'ECONÓMICO',
    city: 'Todo Gral. Pueyrredón',
    title: 'Envíos LowCost',
    description: 'Envíos económicos planificados con retiro y entrega coordinados.',
    image: '../../assets/cards/fondo_lowcost.webp',
    stats: {
      time: 'Same / Next Day',
      price: '$3.000 Base',
      weight: 'Hasta 15 kg'
    },
    summary: 'La alternativa ideal para e-commerce locales que buscan optimizar costos de envío. Agrupamos los repartos en rutas inteligentes diarias para ofrecer la tarifa más baja de la ciudad.',
    features: ['Tarifa base de $3.000 hasta 3 km.', 'Retiro gratis a domicilio a partir de 5 envíos diarios.', 'Dos franjas horarias de entrega en el día.'],
    cta: 'Probá el LowCost'
  }, {
    id: 'flex',
    theme: 'flex',
    icon: 'Truck',
    badge: 'MERCADOLIBRE FLEX',
    city: 'Mar del Plata y Batán',
    title: 'Envíos Flex',
    description: 'Entregas en el día integradas para tus ventas de MercadoLibre.',
    image: '../../assets/cards/fondo_flex.webp',
    stats: {
      time: 'En el día',
      price: 'Zonificado LowCost',
      weight: 'Apto Moto / Auto'
    },
    summary: 'Habilitá Envíos Flex en tu cuenta de MercadoLibre y despachá todas tus ventas en el mismo día. Mejorá tu reputación y convertite en vendedor destacado con recolección gratuita.',
    features: ['Visitas bonificadas según tu volumen diario.', 'Reparto coordinado antes de las 20:00 hs.', 'Recolección a domicilio sin cargo extra.'],
    cta: 'Configurá Flex'
  }, {
    id: '3pl',
    theme: '3pl',
    icon: 'Warehouse',
    badge: 'LOGÍSTICA INTEGRAL',
    city: 'Depósito Friuli 1972',
    title: 'E-Commerce & 3PL',
    description: 'Logística integral: almacenamiento, preparación y despacho de pedidos.',
    image: '../../assets/cards/fondo_emprendedores.webp',
    stats: {
      time: '24 hs / Stock',
      price: 'Planes a Medida',
      weight: 'Sin límite'
    },
    summary: 'Almacená tus productos en nuestro depósito central en Mar del Plata y olvidate del empaque y los despachos. Nosotros nos encargamos de todo el proceso logístico para que te dediques a vender.',
    features: ['Control de stock digital por QR / código de barras.', 'Embalaje profesional y seguro.', 'Distribución Same-Day y Next-Day.'],
    cta: 'Consultá planes'
  }],
  partners: ['Costa Galana', 'Punto & Papel', 'Farmacias de la Costa', 'Antares MDQ', 'Supersalud', 'Mar del Plata Logística', 'Sur E-Commerce', 'Textil Güemes'],
  zonas: ['Centro', 'La Perla', 'Constitución', 'Zona Güemes', 'Playa Grande', 'Puerto', 'Bosque Peralta Ramos', 'Batán / P. Industrial']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/home/data.js", error: String((e && e.message) || e) }); }

__ds_ns.BentoCard = __ds_scope.BentoCard;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.FloatingPill = __ds_scope.FloatingPill;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.SocialCard = __ds_scope.SocialCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.BadgePill = __ds_scope.BadgePill;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CtaPill = __ds_scope.CtaPill;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SubscribeForm = __ds_scope.SubscribeForm;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
