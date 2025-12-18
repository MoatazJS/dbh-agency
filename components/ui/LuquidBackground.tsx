"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LiquidBackground = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden bg-black pointer-events-none z-0", className)}>
            <svg className="hidden">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className="absolute inset-0 filter url(#goo) opacity-30">
                {[...Array(5)].map((_, i) => (
                    <LiquidBlob key={i} index={i} />
                ))}
            </div>
        </div>
    );
};

const LiquidBlob = ({ index }: { index: number }) => {
    // Deterministic random generator to prevent hydration mismatch
    const random = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    const width = random(index) * 400 + 200;
    const height = random(index + 100) * 400 + 200;
    const left = `${random(index + 200) * 80}%`;
    const top = `${random(index + 300) * 80}%`;

    const xMove = random(index + 400) * 400 - 200;
    const yMove = random(index + 500) * 400 - 200;
    const duration = random(index + 600) * 10 + 10;
    const delay = random(index + 700) * 5;

    return (
        <motion.div
            className={cn(
                "absolute rounded-full mix-blend-screen opacity-40 blur-2xl",
                index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-secondary" : "bg-accent"
            )}
            style={{
                width: width,
                height: height,
                left: left,
                top: top,
            }}
            animate={{
                x: [0, xMove, 0],
                y: [0, yMove, 0],
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
            }}
        />
    );
};
