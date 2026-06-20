import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  nodeCount?: number;
  className?: string;
  color?: string;
  linkDistance?: number;
  pointerRadius?: number;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function ParticleField({
  nodeCount = 60,
  className = "",
  color = "0, 212, 255",
  linkDistance = 170,
  pointerRadius = 200,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationFrame: number;
    let pointer: { x: number; y: number } | null = null;

    const createNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 2.5 + Math.random() * 3.5,
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

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        pointer = { x, y };
      } else {
        pointer = null;
      }
    };

    const handlePointerLeave = () => {
      pointer = null;
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (pointer) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < pointerRadius) {
            const pull = (1 - dist / pointerRadius) * 0.02;
            n.vx += (dx / dist) * pull;
            n.vy += (dy / dist) * pull;
          }
        }

        n.vx *= 0.98;
        n.vy *= 0.98;

        n.x += n.vx;
        n.y += n.vy;

        if (n.x <= 0 || n.x >= width) n.vx *= -1;
        if (n.y <= 0 || n.y >= height) n.vy *= -1;
        n.x = Math.min(Math.max(n.x, 0), width);
        n.y = Math.min(Math.max(n.y, 0), height);

        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        glow.addColorStop(0, `rgba(${color}, 0.35)`);
        glow.addColorStop(1, `rgba(${color}, 0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.9)`;
        ctx.fill();
      }

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
            ctx.strokeStyle = `rgba(${color}, ${0.18 * (1 - dist / linkDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(step);
    };

    resize();

    animationFrame = requestAnimationFrame(step);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [nodeCount, color, linkDistance, pointerRadius]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default ParticleField;
