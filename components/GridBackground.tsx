"use client";

import { cn } from "@/lib/utils";

export const GridBackground = ({ className }: { className?: string }) => {
    return (
        <div className={cn("absolute inset-0 overflow-hidden bg-black pointer-events-none z-0", className)}>
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-grid-flow" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

            {/* Floating Dots (CSS only) */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-accent/30 rounded-full animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
        </div>
    );
};
