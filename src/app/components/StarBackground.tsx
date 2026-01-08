"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    type Star = { x: number; y: number; r: number; d: number };
    let stars: Star[] = [];
    const numStars = 250; 

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() * 2 + 0.5, 
          d: Math.random() * 0.7 + 0.1, 
        });
      }
    };

    initStars();

    type Meteor = { x: number; y: number; len: number; speed: number };
    let meteors: Meteor[] = [];

    const createMeteor = () => {
      meteors.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        len: Math.random() * 120 + 50,
        speed: Math.random() * 6 + 6, 
      });
    };

    const draw = () => {
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0F172A");
      gradient.addColorStop(1, "#020617");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Stars
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Meteors
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 2;
      meteors.forEach((m) => {
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.len, m.y + m.len / 3); 
        m.x += m.speed;
        m.y += m.speed / 3;
      });

      // Move stars
      stars.forEach((star) => {
        star.y += star.d;
        if (star.y > height) star.y = 0;
      });

      // Remove meteors out of bounds
      meteors = meteors.filter((m) => m.x < width && m.y < height);

      requestAnimationFrame(draw);
    };

    draw();

    const meteorInterval = setInterval(createMeteor, 1500);
    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(meteorInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
}
