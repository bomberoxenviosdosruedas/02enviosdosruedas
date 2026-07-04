'use client';

import React, { useRef, useEffect } from 'react';

export default function LogisticaNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // 9 Nodos clave geográficamente aproximados de Mar del Plata
    const createNodes = () => [
      { id: 'cd', x: width * 0.45, y: height * 0.6, label: 'Sede Central (Friuli)', size: 6 },
      { id: 'centro', x: width * 0.68, y: height * 0.42, label: 'Centro', size: 4 },
      { id: 'la_perla', x: width * 0.65, y: height * 0.3, label: 'La Perla', size: 4 },
      { id: 'constitucion', x: width * 0.52, y: height * 0.18, label: 'Constitución', size: 4 },
      { id: 'guemes', x: width * 0.73, y: height * 0.52, label: 'Zona Güemes', size: 4 },
      { id: 'playa_grande', x: width * 0.77, y: height * 0.63, label: 'Playa Grande', size: 4 },
      { id: 'puerto', x: width * 0.72, y: height * 0.76, label: 'Puerto', size: 4 },
      { id: 'bosque', x: width * 0.64, y: height * 0.88, label: 'Bosque Peralta Ramos', size: 4 },
      { id: 'batan', x: width * 0.22, y: height * 0.72, label: 'Batán / P. Industrial', size: 5 },
    ];

    let nodes = createNodes();

    // Conexiones de ruteo que simulan avenidas y costanera de MDQ
    const connections = [
      { from: 'cd', to: 'batan' },
      { from: 'cd', to: 'centro' },
      { from: 'cd', to: 'guemes' },
      { from: 'cd', to: 'puerto' },
      { from: 'cd', to: 'constitucion' },
      { from: 'constitucion', to: 'la_perla' },
      { from: 'constitucion', to: 'centro' },
      { from: 'la_perla', to: 'centro' },
      { from: 'centro', to: 'guemes' },
      { from: 'guemes', to: 'playa_grande' },
      { from: 'playa_grande', to: 'puerto' },
      { from: 'puerto', to: 'bosque' },
    ];

    interface Particle {
      fromNode: typeof nodes[0];
      toNode: typeof nodes[0];
      progress: number;
      speed: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const maxParticles = 16; // Más partículas para una red más grande

    const spawnParticle = () => {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = nodes.find(n => n.id === conn.from);
      const toNode = nodes.find(n => n.id === conn.to);
      if (!fromNode || !toNode) return;

      particles.push({
        fromNode,
        toNode,
        progress: 0,
        speed: 0.002 + Math.random() * 0.004,
        size: 1.8 + Math.random() * 1.8,
        color: Math.random() > 0.4 ? '#ffffff' : '#FFEC01',
      });
    };

    // Inicializar partículas
    for (let i = 0; i < maxParticles; i++) {
      spawnParticle();
      particles[i].progress = Math.random();
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const heroSection = canvas.closest('section');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
      heroSection.addEventListener('touchmove', handleTouchMove);
      heroSection.addEventListener('touchend', handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      nodes = createNodes();

      // 1. Dibujar conexiones (caminos de ruteo)
      ctx.lineWidth = 1.0;
      connections.forEach(conn => {
        const fromNode = nodes.find(n => n.id === conn.from);
        const toNode = nodes.find(n => n.id === conn.to);
        if (!fromNode || !toNode) return;

        const dx = (fromNode.x + toNode.x) / 2 - mouseRef.current.x;
        const dy = (fromNode.y + toNode.y) / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        ctx.strokeStyle = dist < 180 
          ? `rgba(255, 236, 1, ${0.15 + (1 - dist / 180) * 0.3})` // Brillo amarillo al acercar
          : 'rgba(255, 255, 255, 0.12)'; // Línea sutil blanca
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // 2. Dibujar partículas (paquetes)
      particles.forEach((p) => {
        p.progress += p.speed;

        if (p.progress >= 1) {
          p.progress = 0;
          const conn = connections[Math.floor(Math.random() * connections.length)];
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          if (fromNode && toNode) {
            p.fromNode = fromNode;
            p.toNode = toNode;
          }
        }

        const x = p.fromNode.x + (p.toNode.x - p.fromNode.x) * p.progress;
        const y = p.fromNode.y + (p.toNode.y - p.fromNode.y) * p.progress;

        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let currentSize = p.size;
        let glow = 0;

        if (dist < 120) {
          const force = (1 - dist / 120);
          currentSize += force * 1.5;
          glow = force * 4;
        }

        ctx.fillStyle = p.color;
        if (glow > 0) {
          ctx.shadowBlur = glow;
          ctx.shadowColor = p.color;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.beginPath();
        ctx.arc(x, y, currentSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Dibujar nodos (centros de la red)
      nodes.forEach(node => {
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < 150;
        
        if (isNear) {
          ctx.fillStyle = 'rgba(255, 236, 1, 0.4)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isNear ? '#FFEC01' : '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        if (isNear || node.id === 'cd') {
          ctx.fillStyle = isNear ? '#FFEC01' : '#ffffff';
          ctx.font = '500 10px var(--font-mono)';
          ctx.fillText(node.label.toUpperCase(), node.x + 10, node.y + 3);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (heroSection) {
        heroSection.removeEventListener('mousemove', handleMouseMove);
        heroSection.removeEventListener('mouseleave', handleMouseLeave);
        heroSection.removeEventListener('touchmove', handleTouchMove);
        heroSection.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
