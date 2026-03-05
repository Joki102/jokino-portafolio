"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Dots
    const DOTS = 80;
    const dots = Array.from({ length: DOTS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const CONNECT_DIST = 140;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, "#020d18");
      bg.addColorStop(0.5, "#030f1f");
      bg.addColorStop(1, "#020c16");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Subtle blue glow top-right
      const glow1 = ctx.createRadialGradient(W * 0.8, H * 0.1, 0, W * 0.8, H * 0.1, W * 0.4);
      glow1.addColorStop(0, "rgba(30, 80, 180, 0.07)");
      glow1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, W, H);

      // Subtle green glow bottom-left
      const glow2 = ctx.createRadialGradient(W * 0.15, H * 0.85, 0, W * 0.15, H * 0.85, W * 0.35);
      glow2.addColorStop(0, "rgba(0, 160, 80, 0.06)");
      glow2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, W, H);

      // Update and draw dots
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > W) dot.vx *= -1;
        if (dot.y < 0 || dot.y > H) dot.vy *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 180, 255, ${dot.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(80, 160, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
