// components/StarryBackground.jsx
"use client";
import { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const stars = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        glowIntensity: 0,

        glowSpeed: 0.005 + Math.random() * 0.015,
        glowDirection: 1,
      });
    }

    const drawStars = () => {
      stars.forEach((star) => {
        // Update glow effect
        star.glowIntensity += star.glowSpeed * star.glowDirection;

        if (star.glowIntensity > 1) {
          star.glowIntensity = 1;
          star.glowDirection = -1;
        } else if (star.glowIntensity < 0) {
          star.glowIntensity = 0;
          star.glowDirection = 1;
        }

        ctx.beginPath();

        const glow = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.radius * (3 + star.glowIntensity * 5)
        );

        const glowColor = `rgba(135, 99, 239, ${0.3 * star.glowIntensity})`;
        const coreColor = `rgba(255, 255, 255, ${
          0.7 + 0.3 * star.glowIntensity
        })`;

        glow.addColorStop(0, coreColor);
        glow.addColorStop(0.4, glowColor);
        glow.addColorStop(1, "rgba(135, 99, 239, 0)");

        ctx.fillStyle = glow;
        ctx.arc(
          star.x,
          star.y,
          star.radius * (3 + star.glowIntensity * 5),
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = coreColor;
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      stars.forEach((star) => {
        ctx.clearRect(
          star.x - star.radius * 10,
          star.y - star.radius * 10,
          star.radius * 20,
          star.radius * 20
        );
      });

      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "transparent" }}
    />
  );
};

export default StarryBackground;
