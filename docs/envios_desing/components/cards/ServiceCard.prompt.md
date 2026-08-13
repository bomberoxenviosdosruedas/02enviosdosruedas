Una línea: la tarjeta de servicio del carrusel 3D de la home, con borde de 4px y tres stats al pie.

```jsx
<ServiceCard theme="express" icon="Zap" badge="URGENTE" city="Cobertura MDQ" title="Envíos Express"
  description="Mensajería en moto con entregas inmediatas." image="assets/cards/fondo_express.webp"
  stats={{time:'30-90 min',price:'$3.700 Base',weight:'Hasta 10 kg'}} />
```

Los cuatro temas son fijos: `express` (azul→ink, filo amarillo), `lowcost` (blanco→azul 50, filo azul 500), `flex` (amarillo, filo azul 700), `3pl` (azul→dark). El ícono se repite gigante al 5% en la esquina inferior derecha.
