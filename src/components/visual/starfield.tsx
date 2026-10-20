"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number; // depth 0..1 — drives size, brightness, and parallax
  r: number;
  base: number; // base opacity
  tw: number; // twinkle phase
  tws: number; // twinkle speed
}

/**
 * Fixed, full-viewport night sky. Stars drift slowly and parallax a few pixels
 * toward the pointer; the whole thing collapses to a still field under
 * prefers-reduced-motion. This is the page's single authored motion moment.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    let raf = 0;
    let start = performance.now();

    function build() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(360, Math.floor((width * height) / 4600));
      stars = Array.from({ length: density }, () => {
        const z = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z,
          r: 0.5 + z * 1.2,
          base: 0.35 + z * 0.45,
          tw: Math.random() * Math.PI * 2,
          tws: 0.4 + Math.random() * 1.1,
        };
      });
    }

    function draw(now: number) {
      const t = (now - start) / 1000;
      ctx!.clearRect(0, 0, width, height);

      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;

      for (const s of stars) {
        const twinkle = reduceMotion
          ? 1
          : 0.65 + 0.35 * Math.sin(s.tw + t * s.tws);
        const drift = reduceMotion ? 0 : (t * 4 * s.z) % (height + 20);
        const px = s.x + pointer.x * s.z * 22;
        let py = s.y + drift + pointer.y * s.z * 22;
        if (py > height + 10) py -= height + 20;

        const alpha = Math.max(0, Math.min(1, s.base * twinkle));
        const tint = s.z > 0.8 ? "205, 189, 255" : "205, 223, 255";

        // soft glow only on the brightest twinkles, kept subtle
        if (s.z > 0.82) {
          ctx!.beginPath();
          ctx!.arc(px, py, s.r * 2.4, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${tint}, ${alpha * 0.1})`;
          ctx!.fill();
        }

        ctx!.beginPath();
        ctx!.arc(px, py, s.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${tint}, ${alpha})`;
        ctx!.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    function onPointer(e: PointerEvent) {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    }

    build();
    start = performance.now();
    raf = requestAnimationFrame(draw);
    if (!reduceMotion) window.addEventListener("pointermove", onPointer);

    const onResize = () => {
      build();
      if (reduceMotion) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(draw);
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Painted nebula backdrop — the world's ground material */}
      <div className="absolute inset-0 bg-night-900" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/nebula-bg.webp')" }}
      />
      {/* light readability veil only under the central text column */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 52%, rgba(11,16,38,0.4) 0%, rgba(11,16,38,0) 70%)",
        }}
      />
      {/* animated twinkle layer on top of the painted stars */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
