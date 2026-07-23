import React, { useEffect, useRef } from "react";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let animationFrameId;
    let particles = [];
    let isMobile = window.innerWidth < 768;

    const mouse = {
      x: null,
      y: null,
      radius: isMobile ? 80 : 130,
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = (parent?.clientWidth || window.innerWidth) * dpr;
      canvas.height = (parent?.clientHeight || window.innerHeight) * dpr;
      
      canvas.style.width = (parent?.clientWidth || window.innerWidth) + 'px';
      canvas.style.height = (parent?.clientHeight || window.innerHeight) + 'px';

      context.scale(dpr, dpr);
      
      isMobile = window.innerWidth < 768;
      mouse.radius = isMobile ? 80 : 130;
      
      createParticles();
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(randomY = false) {
        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
        
        this.x = Math.random() * canvasWidth;
        this.y = randomY
          ? Math.random() * canvasHeight
          : -Math.random() * 100;

        // Smaller particles on mobile
        const sizeMultiplier = isMobile ? 0.7 : 1;
        this.size = (Math.random() * 2.5 + 0.7) * sizeMultiplier;
        this.speedY = (Math.random() * 0.7 + 0.25) * (isMobile ? 0.6 : 1);
        this.speedX = (Math.random() * 0.5 - 0.25) * (isMobile ? 0.6 : 1);
        this.opacity = Math.random() * 0.55 + 0.2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius && distance > 0) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;

            this.x -= directionX * force * 1.5;
            this.y -= directionY * force * 1.5;
          }
        }

        const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
        
        if (
          this.y > canvasHeight + 10 ||
          this.x < -20 ||
          this.x > canvasWidth + 20
        ) {
          this.reset(false);
        }
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        context.fillStyle = `rgba(247, 191, 4, ${this.opacity})`;
        context.shadowColor = "rgba(247, 191, 4, 0.7)";
        context.shadowBlur = isMobile ? 4 : 8;

        context.fill();
        context.closePath();

        context.shadowBlur = 0;
      }
    }

    function createParticles() {
      const canvasWidth = canvas.width / (window.devicePixelRatio || 1);
      const canvasHeight = canvas.height / (window.devicePixelRatio || 1);
      
      const particleCount = Math.min(
        isMobile ? 100 : 180,
        Math.max(isMobile ? 40 : 70, Math.floor((canvasWidth * canvasHeight) / 15000))
      );

      particles = [];

      for (let index = 0; index < particleCount; index += 1) {
        particles.push(new Particle());
      }
    }

    const connectParticles = () => {
      const maxDistance = isMobile ? 70 : 100;

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        for (
          let secondIndex = firstIndex + 1;
          secondIndex < particles.length;
          secondIndex += 1
        ) {
          const dx = particles[firstIndex].x - particles[secondIndex].x;
          const dy = particles[firstIndex].y - particles[secondIndex].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;

            context.beginPath();
            context.moveTo(
              particles[firstIndex].x,
              particles[firstIndex].y
            );
            context.lineTo(
              particles[secondIndex].x,
              particles[secondIndex].y
            );

            context.strokeStyle = `rgba(247, 191, 4, ${
              opacity * (isMobile ? 0.08 : 0.12)
            })`;
            context.lineWidth = isMobile ? 0.4 : 0.6;

            context.stroke();
            context.closePath();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const canvasRect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - canvasRect.left;
      mouse.y = event.clientY - canvasRect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Handle resize with debounce for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
      }, 200);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="animated-background-canvas"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;