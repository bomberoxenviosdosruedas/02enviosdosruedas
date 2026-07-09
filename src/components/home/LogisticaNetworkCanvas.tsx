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
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // ─── Definición de nodos (posiciones relativas al viewport) ─────────────────
    type NodeDef = { id: string; label: string; size: number; xRatio: number; yRatio: number };
    const nodeDefs: NodeDef[] = [
      { id: 'cd',           label: 'Sede Central (Friuli)', size: 6, xRatio: 0.45, yRatio: 0.60 },
      { id: 'centro',       label: 'Centro',                size: 4, xRatio: 0.68, yRatio: 0.42 },
      { id: 'la_perla',     label: 'La Perla',              size: 4, xRatio: 0.65, yRatio: 0.30 },
      { id: 'constitucion', label: 'Constitución',          size: 4, xRatio: 0.52, yRatio: 0.18 },
      { id: 'guemes',       label: 'Zona Güemes',           size: 4, xRatio: 0.73, yRatio: 0.52 },
      { id: 'playa_grande', label: 'Playa Grande',          size: 4, xRatio: 0.77, yRatio: 0.63 },
      { id: 'puerto',       label: 'Puerto',                size: 4, xRatio: 0.72, yRatio: 0.76 },
      { id: 'bosque',       label: 'Bosque Peralta Ramos',  size: 4, xRatio: 0.64, yRatio: 0.88 },
      { id: 'batan',        label: 'Batán / P. Industrial', size: 5, xRatio: 0.22, yRatio: 0.72 },
    ];

    // Map indexado por id — acceso O(1) en el loop de render
    type Node = { id: string; x: number; y: number; label: string; size: number };
    let nodeMap = new Map<string, Node>();

    /** Reconstruye el nodeMap con posiciones absolutas según el tamaño actual del canvas. */
    const buildNodeMap = () => {
      nodeMap = new Map(
        nodeDefs.map((def) => [
          def.id,
          { id: def.id, x: width * def.xRatio, y: height * def.yRatio, label: def.label, size: def.size },
        ])
      );
    };

    buildNodeMap();

    // ─── Conexiones de ruteo (avenidas / costanera de MDQ) ──────────────────────
    const connections: { from: string; to: string }[] = [
      { from: 'cd',          to: 'batan' },
      { from: 'cd',          to: 'centro' },
      { from: 'cd',          to: 'guemes' },
      { from: 'cd',          to: 'puerto' },
      { from: 'cd',          to: 'constitucion' },
      { from: 'constitucion', to: 'la_perla' },
      { from: 'constitucion', to: 'centro' },
      { from: 'la_perla',    to: 'centro' },
      { from: 'centro',      to: 'guemes' },
      { from: 'guemes',      to: 'playa_grande' },
      { from: 'playa_grande', to: 'puerto' },
      { from: 'puerto',      to: 'bosque' },
    ];

    // ─── Resize — recalcula posiciones solo cuando cambia el viewport ────────────
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      buildNodeMap(); // O(n) solo en resize, nunca dentro del requestAnimationFrame
    };

    window.addEventListener('resize', handleResize);

    // ─── Partículas ──────────────────────────────────────────────────────────────
    interface Particle {
      fromNode: Node;
      toNode: Node;
      progress: number;
      speed: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const maxParticles = 16;

    const spawnParticle = () => {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const fromNode = nodeMap.get(conn.from); // O(1)
      const toNode = nodeMap.get(conn.to);     // O(1)
      if (!fromNode || !toNode) return;

      particles.push({
        fromNode,
        toNode,
        progress: 0,
        speed: 0.002 + Math.random() * 0.004,
        size: 1.8 + Math.random() * 1.8,
        color: Math.random() > 0.4 ? '#ffffff' : '#FFCC00',
      });
    };

    for (let i = 0; i < maxParticles; i++) {
      spawnParticle();
      particles[i].progress = Math.random();
    }

    // ─── Eventos de mouse / touch ────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
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

    // ─── Loop de render ──────────────────────────────────────────────────────────
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Conexiones — acceso O(1) al nodeMap, sin .find() en cada frame
      ctx.lineWidth = 1.0;
      connections.forEach((conn) => {
        const fromNode = nodeMap.get(conn.from);
        const toNode = nodeMap.get(conn.to);
        if (!fromNode || !toNode) return;

        const dx = (fromNode.x + toNode.x) / 2 - mouseRef.current.x;
        const dy = (fromNode.y + toNode.y) / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        ctx.strokeStyle =
          dist < 180
            ? `rgba(255, 204, 0, ${0.15 + (1 - dist / 180) * 0.3})`
            : 'rgba(255, 255, 255, 0.12)';

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // 2. Partículas (paquetes en movimiento)
      particles.forEach((p) => {
        p.progress += p.speed;

        if (p.progress >= 1) {
          p.progress = 0;
          const conn = connections[Math.floor(Math.random() * connections.length)];
          const fromNode = nodeMap.get(conn.from); // O(1)
          const toNode = nodeMap.get(conn.to);     // O(1)
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
          const force = 1 - dist / 120;
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

      // 3. Nodos (centros de la red logística)
      nodeMap.forEach((node) => {
        const dx = node.x - mouseRef.current.x;
        const dy = node.y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNear = dist < 150;

        if (isNear) {
          ctx.fillStyle = 'rgba(255, 204, 0, 0.4)';
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isNear ? '#FFCC00' : '#ffffff';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        if (isNear || node.id === 'cd') {
          ctx.fillStyle = isNear ? '#FFCC00' : '#ffffff';
          ctx.font = '500 10px var(--font-sans)';
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
