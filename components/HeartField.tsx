"use client";

import { useEffect, useRef } from "react";

type Heart = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  sway: number;
  swaySpeed: number;
  opacity: number;
  color: string;
  rot: number;
  rotSpeed: number;
};

export default function HeartField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let frameId = 0;

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const colors = ["#ffd3da", "#f0a8ae", "#f2c069", "#fff9f5"];

    function makeHeart(): Heart {
      return {
        x: Math.random() * w,
        y: h + 20 + Math.random() * h,
        // slightly wider size range for variety
        size: 6 + Math.random() * 18,
        // slightly faster and varied speeds for liveliness
        speed: 0.4 + Math.random() * 0.9,
        drift: (Math.random() - 0.5) * 0.9,
        sway: Math.random() * Math.PI * 2,
        swaySpeed: 0.01 + Math.random() * 0.03,
        opacity: 0.12 + Math.random() * 0.42,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      };
    }

    // Increase heart density and vary by viewport for a fuller effect
    const count = reduceMotion
      ? 0
      : window.innerWidth < 480
      ? 24
      : window.innerWidth < 1024
      ? 44
      : 72;
    const hearts: Heart[] = Array.from({ length: count }, makeHeart);

    function drawHeart(p: Heart) {
      ctx!.save();
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rot);
      ctx!.globalAlpha = p.opacity;
      ctx!.fillStyle = p.color;
      const s = p.size;
      ctx!.beginPath();
      ctx!.moveTo(0, s * 0.3);
      ctx!.bezierCurveTo(-s * 0.5, -s * 0.4, -s, s * 0.15, 0, s);
      ctx!.bezierCurveTo(s, s * 0.15, s * 0.5, -s * 0.4, 0, s * 0.3);
      ctx!.fill();
      ctx!.restore();
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      hearts.forEach((p) => {
        p.y -= p.speed;
        p.sway += p.swaySpeed;
        p.x += Math.sin(p.sway) * 0.4 + p.drift * 0.05;
        p.rot += p.rotSpeed;
        if (p.y < -20) {
          Object.assign(p, makeHeart(), { y: h + 20 });
        }
        drawHeart(p);
      });
      frameId = requestAnimationFrame(tick);
    }

    if (!reduceMotion) tick();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="heart-field" />;
}
