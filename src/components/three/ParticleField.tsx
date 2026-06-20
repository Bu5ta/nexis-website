import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  /** Number of particles to render */
  nodeCount?: number;
  /** Extra classes applied to the canvas (e.g. opacity) */
  className?: string;
  /** Hex color used for nodes + connecting lines */
  color?: string;
  /** Max distance (px) at which two nodes draw a connecting line */
  linkDistance?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/**
 * Lightweight canvas-based "network" particle background.
 * Fills its parent container (expects the parent to provide sizing,
 * e.g. `absolute inset-0`).
 */
export function ParticleField({
  nodeCount = 60,
  className = "",
  color = "0, 212, 255",
  linkDistance = 130,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrame: number;

    const createNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }));
    };

    const resize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createNodes();
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      // update + draw nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
        n.x = Math.min(Math.max(n.x, 0), width);
        n.y = Math.min(Math.max(n.y, 0), height);

        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.8)`;
        ctx.fill();
      }

      // draw links between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${color}, ${0.25 * (1 - dist / linkDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(step);
    };

    resize();

    if (prefersReducedMotion) {
      // Draw a single static frame instead of animating.
      step();
    } else {
      animationFrame = requestAnimationFrame(step);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [nodeCount, color, linkDistance]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default ParticleField;
