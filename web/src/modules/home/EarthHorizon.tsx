"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";

export default function EarthHorizon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbitCanvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: { mass: 1, tension: 280, friction: 40, precision: 0.001 },
  }));

  // ── COBE Globe ─────────────────────────────────────────────────────
  useEffect(() => {
    let phi = 1.6; // Show Asia / Indian Ocean region (matches reference)
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth;
    };
    window.addEventListener("resize", onResize);
    onResize();
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 1,
      width: width,
      height: width,
      phi: phi,
      theta: 0.3,
      dark: 1,
      diffuse: 1.6,
      mapSamples: 18000,
      mapBrightness: 6,    // Lower brightness keeps city dots small & realistic
      baseColor: [0.04, 0.06, 0.16],
      markerColor: [0.95, 0.58, 0.05], // Golden city lights
      glowColor: [0.28, 0.10, 0.88],
      markers: [],
      // @ts-expect-error: cobe types may not include onRender
      onRender: (state: Record<string, number>) => {
        if (!pointerInteracting.current) phi += 0.0015;
        state.phi = phi + r.get();
        state.width = width;
        state.height = width;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [r]);

  // ── Orbital Arc Canvas ──────────────────────────────────────────────
  useEffect(() => {
    const canvas = orbitCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = [
      { arc: 0, pos: 0.10, size: 3.0, color: "#38bdf8", pulse: 0.0, speed: 0.05 },
      { arc: 0, pos: 0.28, size: 5.0, color: "#a855f7", pulse: 1.1, speed: 0.04 },
      { arc: 0, pos: 0.47, size: 5.5, color: "#ec4899", pulse: 2.0, speed: 0.06 },
      { arc: 0, pos: 0.70, size: 3.5, color: "#60a5fa", pulse: 0.5, speed: 0.05 },
      { arc: 0, pos: 0.88, size: 4.0, color: "#c084fc", pulse: 1.5, speed: 0.03 },
      { arc: 1, pos: 0.16, size: 3.5, color: "#818cf8", pulse: 0.8, speed: -0.04 },
      { arc: 1, pos: 0.38, size: 5.0, color: "#38bdf8", pulse: 1.3, speed: -0.05 },
      { arc: 1, pos: 0.62, size: 5.5, color: "#f472b6", pulse: 0.3, speed: -0.03 },
      { arc: 1, pos: 0.82, size: 3.0, color: "#a855f7", pulse: 1.8, speed: -0.04 },
      { arc: 2, pos: 0.24, size: 3.0, color: "#60a5fa", pulse: 0.7, speed: 0.03 },
      { arc: 2, pos: 0.54, size: 4.0, color: "#ec4899", pulse: 1.4, speed: 0.04 },
      { arc: 2, pos: 0.77, size: 3.5, color: "#38bdf8", pulse: 0.2, speed: 0.02 },
    ];

    // Uplifting data particles rising from the Earth
    const particles = Array.from({ length: 45 }).map(() => ({
      x: Math.random(), 
      y: Math.random(), 
      speed: 0.001 + Math.random() * 0.002,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      angle += 0.003;

      // Arc center below viewport (matching horizon center)
      const cx = w / 2;
      const cy = h * 1.48;
      const radii = [h * 1.18, h * 1.28, h * 1.40];

      // Faint dashed orbital rings
      radii.forEach((radius, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius, Math.PI * 1.18, Math.PI * 1.82, false);
        ctx.strokeStyle = i === 0
          ? "rgba(96,165,250,0.12)"
          : i === 1
          ? "rgba(168,85,247,0.10)"
          : "rgba(236,72,153,0.08)";
        ctx.lineWidth = 1;
        ctx.setLineDash(i === 0 ? [3, 9] : i === 1 ? [4, 12] : [2, 10]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Calculate current node positions
      const currentNodes = nodes.map((node) => {
        const radius = radii[node.arc];
        const pos = (node.pos + angle * node.speed + 10) % 1;
        const theta = Math.PI * 1.20 + pos * (Math.PI * 0.60);
        return {
          x: cx + radius * Math.cos(theta),
          y: cy + radius * Math.sin(theta),
          ...node
        };
      });

      // Draw network connections between nodes
      ctx.lineWidth = 0.5;
      for (let i = 0; i < currentNodes.length; i++) {
        for (let j = i + 1; j < currentNodes.length; j++) {
          const dx = currentNodes[i].x - currentNodes[j].x;
          const dy = currentNodes[i].y - currentNodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < h * 0.35) {
            const opacity = 1 - (dist / (h * 0.35));
            ctx.beginPath();
            ctx.moveTo(currentNodes[i].x, currentNodes[i].y);
            ctx.lineTo(currentNodes[j].x, currentNodes[j].y);
            
            // Hex color to rgba conversion for gradient
            const hexToRgb = (hex: string) => {
              const r = parseInt(hex.slice(1, 3), 16);
              const g = parseInt(hex.slice(3, 5), 16);
              const b = parseInt(hex.slice(5, 7), 16);
              return `${r},${g},${b}`;
            };
            
            const grad = ctx.createLinearGradient(currentNodes[i].x, currentNodes[i].y, currentNodes[j].x, currentNodes[j].y);
            grad.addColorStop(0, `${currentNodes[i].color}${Math.floor(opacity * 80).toString(16).padStart(2, '0')}`);
            grad.addColorStop(1, `${currentNodes[j].color}${Math.floor(opacity * 80).toString(16).padStart(2, '0')}`);
            ctx.strokeStyle = grad;
            ctx.stroke();
          }
        }
      }

      // Draw Glowing nodes
      currentNodes.forEach((node) => {
        const pulse = Math.sin(Date.now() * 0.003 + node.pulse * Math.PI) * 0.3 + 0.7;

        const g = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 5 * pulse);
        g.addColorStop(0, node.color + "cc");
        g.addColorStop(0.4, node.color + "44");
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 5 * pulse, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.65, 0, Math.PI * 2);
        ctx.fill();

        if (node.size >= 5) {
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 0.8;
          const fl = node.size * 3 * pulse;
          ctx.beginPath();
          ctx.moveTo(node.x - fl, node.y); ctx.lineTo(node.x + fl, node.y);
          ctx.moveTo(node.x, node.y - fl); ctx.lineTo(node.x, node.y + fl);
          ctx.stroke();
        }
      });

      // Draw rising data particles
      particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) {
          p.y = 1;
          p.x = Math.random();
        }
        
        const px = p.x * w;
        // Map y to space above the globe
        const py = h * 0.7 * p.y; 
        
        const alpha = p.opacity * p.y;
        
        ctx.fillStyle = `rgba(168, 85, 247, ${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(px, py + p.speed * 2000);
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── The 52% figure: canvas top is at 52% of viewport.
  // ── COBE sphere fills the canvas. Sphere top = canvas top = 52% of viewport.
  // ── The visible globe arc starts at 52% and expands downward → Earth surface shows.
  const GLOBE_TOP = "52%";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* ── 1. Wide outer violet/purple atmospheric flare ─────────────── */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: GLOBE_TOP,
          width: "min(1500px, 145vw)",
          height: "460px",
          transform: "translateX(-50%) translateY(-50%)",
          background:
            "radial-gradient(ellipse 70% 58% at 50% 50%, rgba(110,35,220,0.8) 0%, rgba(80,25,190,0.55) 30%, rgba(50,80,240,0.28) 62%, transparent 88%)",
          filter: "blur(45px)",
          zIndex: 10,
        }}
      />

      {/* ── 2. Tight white/cyan core flare at the apex of the arc ──────── */}
      <div
        className="absolute left-1/2 pointer-events-none"
        style={{
          top: GLOBE_TOP,
          width: "min(560px, 55vw)",
          height: "88px",
          transform: "translateX(-50%) translateY(-50%)",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,1) 0%, rgba(220,180,255,0.9) 28%, rgba(140,80,245,0.55) 65%, transparent 100%)",
          filter: "blur(14px)",
          zIndex: 11,
        }}
      />

      {/* ── 3. Pink / magenta glow — right side ──────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: GLOBE_TOP,
          left: "54%",
          width: "min(600px, 50vw)",
          height: "220px",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(236,72,153,0.50) 0%, transparent 72%)",
          filter: "blur(38px)",
          zIndex: 10,
        }}
      />

      {/* ── 4. Cyan / blue glow — left side ──────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: GLOBE_TOP,
          right: "54%",
          width: "min(600px, 50vw)",
          height: "220px",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(56,189,248,0.45) 0%, transparent 72%)",
          filter: "blur(38px)",
          zIndex: 10,
        }}
      />

      {/* ── 5. COBE 3D Globe — top of canvas = 52% of viewport ─────────── */}
      <div
        className="pointer-events-auto"
        style={{
          position: "absolute",
          top: GLOBE_TOP,
          left: "50%",
          // Large enough that we see the arc + Earth surface below it
          width: "clamp(1100px, 165vw, 2400px)",
          height: "clamp(1100px, 165vw, 2400px)",
          transform: "translateX(-50%)",
          zIndex: 5,
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", contain: "layout paint size" }}
          className="cursor-grab active:cursor-grabbing"
          onPointerDown={(e) => {
            pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
            if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            if (canvasRef.current) canvasRef.current.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            if (canvasRef.current) canvasRef.current.style.cursor = "grab";
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 200 });
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              api.start({ r: delta / 100 });
            }
          }}
        />
      </div>

      {/* ── Side edge masks — hide oversized markers at globe limb ────── */}
      {/* Left edge fade */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, bottom: 0,
          width: "18%",
          background: "linear-gradient(to right, #030308 0%, rgba(3,3,8,0.85) 40%, transparent 100%)",
          zIndex: 18,
        }}
      />
      {/* Right edge fade */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, right: 0, bottom: 0,
          width: "18%",
          background: "linear-gradient(to left, #030308 0%, rgba(3,3,8,0.85) 40%, transparent 100%)",
          zIndex: 18,
        }}
      />

      {/* ── 7. Orbital Constellation Canvas ──────────────────────────── */}
      <canvas
        ref={orbitCanvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 12 }}
      />

      {/* ── 8. Bottom fade to next section ──────────────────────────── */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 50%, transparent 100%)",
          zIndex: 30,
        }}
      />
    </div>
  );
}
