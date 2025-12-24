"use client";

import { createContext, useContext, useState } from "react";

import { AnimationContextType } from "@/lib/interfaces/interface";

const AnimationContext = createContext<AnimationContextType | null>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
    const [isAnimating, setIsAnimating] = useState(true);

    return (
        <AnimationContext.Provider value={{ isAnimating, setIsAnimating }}>
            {children}
        </AnimationContext.Provider>
    );
}

export function useAnimation() {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error("useAnimation must be used within AnimationProvider");
    }
    return context;
}
