"use client";

import { useAnimation } from "@/lib/Context/LoadingContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
};

const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 }
};

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { isAnimating, setIsAnimating } = useAnimation();
    // Reset animation state on path change
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 2000); // Wait for animation

        return () => clearTimeout(timer);
    }, [pathname, setIsAnimating]);

    return (
        <>
            {/* The actual page content */}
            <motion.div
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ delay: 1.8, duration: 0.4 }}
                key={pathname}
            >
                {children}
            </motion.div>

            {/* Transition Overlay */}
            {isAnimating && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ delay: 1.8, duration: 0.5, ease: "easeInOut" }}
                >
                    <svg width="300" height="150" viewBox="0 0 300 150" className="stroke-primary stroke-[3px] fill-none overflow-visible">
                        {/* D */}
                        <motion.path
                            d="M 20 20 L 20 130 L 60 130 C 100 130 100 20 60 20 Z"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                        />
                        {/* B */}
                        <motion.path
                            d="M 120 20 L 120 130 L 160 130 C 190 130 190 80 160 80 L 120 80 M 120 80 L 160 80 C 190 80 190 20 160 20 L 120 20"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                        />
                        {/* H */}
                        <motion.path
                            d="M 220 20 L 220 130 M 280 20 L 280 130 M 220 75 L 280 75"
                            variants={pathVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
                        />
                    </svg>
                </motion.div>
            )}
        </>
    );
}
