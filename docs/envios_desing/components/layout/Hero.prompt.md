Una línea: el hero de la home, con el titular de tres líneas y la línea del medio en bloque amarillo.

```jsx
<Hero lines={[{text:'Mensajería y Logística'},{text:'E-Commerce',mark:true},{text:'en Mar del Plata'}]}
  lead="Somos tu partner estratégico en mensajería y última milla."
  trust={[{icon:'ShieldCheck',label:'100% Seguro'},{icon:'Zap',label:'Rápido'},{icon:'MapPin',label:'Cobertura total'}]} />
```

El contador sube de 0 a +5000 con easing cúbico. La versión de producción además dibuja una red de nodos en canvas sobre el fondo; acá se reemplaza por los radiales, que es lo que se ve el 90% del tiempo.
