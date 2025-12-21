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
                    this.y = Math.random() * canvas!.height + 200; // Allow spawning below to move up-left
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 1;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y + this.length * 0.5);
                ctx.stroke();
            }
        }

        const init = () => {
            stars = [];
            const numberOfStars = 50;
            for (let i = 0; i < numberOfStars; i++) {
                stars.push(new Star());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Standard static stars background
            ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

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
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black", className)}>
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};
