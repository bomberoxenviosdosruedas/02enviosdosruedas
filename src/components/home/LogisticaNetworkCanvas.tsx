'use client';

import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

// Deterministic particle configuration (pre-calculated, no Math.random at runtime)
const DETERMINISTIC_PARTICLES = [
  { connIndex: 0, speed: 0.0035, size: 2.8, color: 'var(--color-brand-yellow-500)', initialProgress: 0.1 },
  { connIndex: 1, speed: 0.0028, size: 3.2, color: 'var(--color-white)', initialProgress: 0.3 },
  { connIndex: 2, speed: 0.0042, size: 2.5, color: 'var(--color-white)', initialProgress: 0.5 },
  { connIndex: 3, speed: 0.0031, size: 3.0, color: 'var(--color-brand-yellow-500)', initialProgress: 0.7 },
  { connIndex: 4, speed: 0.0038, size: 2.7, color: 'var(--color-white)', initialProgress: 0.2 },
  { connIndex: 5, speed: 0.0025, size: 3.3, color: 'var(--color-brand-yellow-500)', initialProgress: 0.4 },
  { connIndex: 6, speed: 0.0045, size: 2.4, color: 'var(--color-white)', initialProgress: 0.6 },
  { connIndex: 7, speed: 0.0032, size: 2.9, color: 'var(--color-white)', initialProgress: 0.8 },
  { connIndex: 8, speed: 0.0037, size: 2.6, color: 'var(--color-brand-yellow-500)', initialProgress: 0.05 },
  { connIndex: 9, speed: 0.0029, size: 3.1, color: 'var(--color-white)', initialProgress: 0.25 },
  { connIndex: 10, speed: 0.0041, size: 2.3, color: 'var(--color-white)', initialProgress: 0.45 },
  { connIndex: 11, speed: 0.0033, size: 2.85, color: 'var(--color-brand-yellow-500)', initialProgress: 0.65 },
  { connIndex: 12, speed: 0.0036, size: 2.75, color: 'var(--color-white)', initialProgress: 0.85 },
  { connIndex: 13, speed: 0.0030, size: 3.05, color: 'var(--color-brand-yellow-500)', initialProgress: 0.15 },
  { connIndex: 14, speed: 0.0043, size: 2.45, color: 'var(--color-white)', initialProgress: 0.35 },
  { connIndex: 15, speed: 0.0034, size: 2.95, color: 'var(--color-brand-yellow-500)', initialProgress: 0.55 },
];

export default function LogisticaNetworkCanvas() {
  const reduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particleRefs = useRef<Array<{
    fromNode: { x: number; y: number };
    toNode: { x: number; y: number };
    progress: number;
    speed: number;
    size: number;
    color: string;
    connIndex: number;
  }>>([]);
  const nodeMapRef = useRef<Map<string, { id: string; x: number; y: number; label: string; size: number }>>(new Map());
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationFrameId = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resolve CSS custom properties for canvas rendering
    const style = getComputedStyle(document.documentElement);
    const brandYellow = style.getPropertyValue('--color-brand-yellow-500').trim() || '#FFEC01';
    const white = style.getPropertyValue('--color-white').trim() || '#FFFFFF';
    const fontSans = style.getPropertyValue('--font-sans').trim() || 'Outfit, sans-serif';

    ctxRef.current = ctx;

    const syncCanvasDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = canvas.offsetWidth;
      const cssHeight = canvas.offsetHeight;
      widthRef.current = cssWidth;
      heightRef.current = cssHeight;
      canvas.width = Math.max(1, Math.round(cssWidth * dpr));
      canvas.height = Math.max(1, Math.round(cssHeight * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    syncCanvasDimensions();

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
      { id: 'martillo',     label: 'El Martillo / P. Ind.', size: 5, xRatio: 0.22, yRatio: 0.72 },
    ];

    // Conexiones de ruteo (avenidas / costanera de MDQ)
    const connections: { from: string; to: string }[] = [
      { from: 'cd',          to: 'martillo' },
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

    const buildNodeMap = () => {
      const newMap = new Map<string, { id: string; x: number; y: number; label: string; size: number }>();
      nodeDefs.forEach((def) => {
        newMap.set(def.id, {
          id: def.id,
          x: widthRef.current * def.xRatio,
          y: heightRef.current * def.yRatio,
          label: def.label,
          size: def.size,
        });
      });
      nodeMapRef.current = newMap;
    };

    buildNodeMap();

    // Initialize deterministic particles
    particleRefs.current = DETERMINISTIC_PARTICLES.map((p) => {
      const conn = connections[p.connIndex % connections.length];
      const fromNode = nodeMapRef.current.get(conn.from);
      const toNode = nodeMapRef.current.get(conn.to);
      return {
        fromNode: fromNode!,
        toNode: toNode!,
        progress: p.initialProgress,
        speed: p.speed,
        size: p.size,
        color: p.color === 'var(--color-brand-yellow-500)' ? brandYellow : white,
        connIndex: p.connIndex,
      };
    });

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

    const parentSection = canvas.closest('section');
    if (parentSection) {
      parentSection.addEventListener('mousemove', handleMouseMove, { passive: true });
      parentSection.addEventListener('mouseleave', handleMouseLeave);
      parentSection.addEventListener('touchmove', handleTouchMove, { passive: true });
      parentSection.addEventListener('touchend', handleMouseLeave);
    }

    const isVisibleRef = { current: true };
    let observer: IntersectionObserver | null = null;

    // ─── Render loop con delta time real ─────────────────────────────────────────
    const render = (timestamp: number) => {
      if (!isVisibleRef.current || window.innerWidth < 640) {
        animationFrameId.current = null;
        lastTimeRef.current = null;
        return;
      }
      const ctx = ctxRef.current;
      if (!ctx) return;

      const prevTime = lastTimeRef.current ?? timestamp;
      const dtSeconds = Math.min(Math.max((timestamp - prevTime) / 1000, 0), 0.1);
      lastTimeRef.current = timestamp;

      ctx.clearRect(0, 0, widthRef.current, heightRef.current);

      // 1. Conexiones
      ctx.lineWidth = 1.0;
      connections.forEach((conn) => {
        const fromNode = nodeMapRef.current.get(conn.from);
        const toNode = nodeMapRef.current.get(conn.to);
        if (!fromNode || !toNode) return;

        const dx = (fromNode.x + toNode.x) / 2 - mouseRef.current.x;
        const dy = (fromNode.y + toNode.y) / 2 - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        ctx.strokeStyle =
          dist < 180
            ? `rgba(255, 236, 1, ${0.15 + (1 - dist / 180) * 0.3})`
            : 'rgba(255, 255, 255, 0.14)';

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.stroke();
      });

      // 2. Partículas con delta time real (normalizado a base 60fps: speed * 60 * dtSeconds)
      particleRefs.current.forEach((p) => {
        p.progress += p.speed * 60 * dtSeconds;

        if (p.progress >= 1) {
          p.progress %= 1;
          const conn = connections[p.connIndex % connections.length];
          const fromNode = nodeMapRef.current.get(conn.from);
          const toNode = nodeMapRef.current.get(conn.to);
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
      nodeMapRef.current.forEach((node) => {
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

        ctx.fillStyle = isNear ? brandYellow : white;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        if (isNear || node.id === 'cd') {
          ctx.fillStyle = isNear ? brandYellow : white;
          ctx.font = `500 10px ${fontSans}`;
          ctx.fillText(node.label.toUpperCase(), node.x + 10, node.y + 3);
        }
      });

      animationFrameId.current = requestAnimationFrame(render);
    };

    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && window.innerWidth >= 640) {
            if (!animationFrameId.current) {
              lastTimeRef.current = null;
              animationFrameId.current = requestAnimationFrame(render);
            }
          } else {
            if (animationFrameId.current) {
              cancelAnimationFrame(animationFrameId.current);
              animationFrameId.current = null;
              lastTimeRef.current = null;
            }
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    }

    if (window.innerWidth >= 640) {
      animationFrameId.current = requestAnimationFrame(render);
    }

    // ─── Resize handler ──────────────────────────────────────────────────────────
    const handleResize = () => {
      if (!canvas) return;
      syncCanvasDimensions();
      buildNodeMap();

      particleRefs.current.forEach((p) => {
        const conn = connections[p.connIndex % connections.length];
        const fromNode = nodeMapRef.current.get(conn.from);
        const toNode = nodeMapRef.current.get(conn.to);
        if (fromNode && toNode) {
          p.fromNode = fromNode;
          p.toNode = toNode;
        }
      });

      if (window.innerWidth >= 640 && isVisibleRef.current && !animationFrameId.current) {
        lastTimeRef.current = null;
        animationFrameId.current = requestAnimationFrame(render);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (parentSection) {
        parentSection.removeEventListener('mousemove', handleMouseMove);
        parentSection.removeEventListener('mouseleave', handleMouseLeave);
        parentSection.removeEventListener('touchmove', handleTouchMove);
        parentSection.removeEventListener('touchend', handleMouseLeave);
      }
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0 bg-brand-blue-500/30"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
