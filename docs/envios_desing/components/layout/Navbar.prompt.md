Una línea: el header fijo — logo + wordmark, nav con celdas separadas por hairlines y dropdowns, teléfono y CTA de WhatsApp.

```jsx
<Navbar items={[{id:'inicio',label:'Inicio',icon:'Home'},{id:'servicios',label:'Servicios',icon:'Bike',children:[...]}]}
  active="inicio" onNavigate={go} scrolled={y>30} />
```

El fondo es `rgba(7,31,92,.7)` con blur, pasa a `.95` + sombra tras 30px. El wordmark siempre parte en dos: "ENVÍOS" blanco, "DOSRUEDAS" amarillo.
