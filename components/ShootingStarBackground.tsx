"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const ShootingStarsBackground = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let stars: Star[] = [];
        let animationFrameId: number;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class Star {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 10 + 5;
                this.opacity = Math.random();
            }

            update() {
                this.x -= this.speed;
                this.y -= this.speed * 0.5; // Angled movement

                if (this.x < -100 || this.y < -100) {
                    this.x = canvas!.width + Math.random() * 200;
                    this.y = Math.random() * canvas!.height + 200;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                // Brand Yellow: oklch(0.85 0.18 95) is roughly #facc15
                ctx.strokeStyle = `rgba(250, 204, 21, ${this.opacity})`;
                ctx.lineWidth = 2;
                ctx.lineCap = "round";

                // Add glow
                ctx.shadowBlur = 8;
                ctx.shadowColor = "rgba(250, 204, 21, 0.8)";

                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y + this.length * 0.5);
                ctx.stroke();

                // Reset shadow for subsequent draws
                ctx.shadowBlur = 0;
            }
        }

        const init = () => {
            stars = [];
            const numberOfStars = 40; // Slightly fewer for better focus on yellow glow
            for (let i = 0; i < numberOfStars; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw small background stars (static-ish) in yellow
            ctx.fillStyle = "rgba(250, 204, 21, 0.3)";
            for (let i = 0; i < 100; i++) {
                const x = (Math.sin(i) * 0.5 + 0.5) * canvas.width;
                const y = (Math.cos(i) * 0.5 + 0.5) * canvas.height;
                ctx.fillRect(x, y, 1, 1);
            }

            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0 bg-background", className)}>
            {/* Gradient overlay for depth using brand colors */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-80" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};
