"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  color: string;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    // Star color palette - matches deep space look
    const starColors = [
      "255,255,255",
      "200,220,255",
      "255,240,200",
      "180,200,255",
      "255,220,240",
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Regenerate stars on resize
      generateStars();
    };

    const generateStars = () => {
      stars = [];
      const count = Math.floor((window.innerWidth * window.innerHeight) / 4000);
      for (let i = 0; i < Math.min(count, 350); i++) {
        stars.push({
          // Stars mostly in upper 65% of screen (space area, not earth surface)
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight * 0.65,
          r: Math.random() < 0.15
            ? Math.random() * 1.5 + 0.8   // Few bright stars
            : Math.random() * 0.7 + 0.15, // Mostly tiny
          alpha: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.004 + 0.001,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        // Twinkle
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.1) s.speed *= -1;

        // Bright stars get a subtle glow
        if (s.r > 0.9) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          glow.addColorStop(0, `rgba(${s.color},${(s.alpha * 0.5).toFixed(2)})`);
          glow.addColorStop(1, `rgba(${s.color},0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha.toFixed(2)})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
