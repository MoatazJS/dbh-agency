"use client";

import { cn } from "@/lib/utils";

export const VortexBackground = ({ className }: { className?: string }) => {

    return (
        <div className={cn("absolute inset-0 overflow-hidden bg-black pointer-events-none z-0", className)}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] animate-spin-slow opacity-30">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary),transparent,var(--secondary),transparent,var(--accent),transparent,var(--primary))]" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] animate-spin-reverse-slow opacity-30 mix-blend-overlay">
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,var(--secondary),transparent,var(--accent),transparent,var(--primary),transparent,var(--secondary))]" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]" />
        </div>
    );
}
