"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function VisionHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    return <>
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10">
            <motion.div style={{ y: yHero, opacity: opacityHero }} className="text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] font-black tracking-tighter mix-blend-overlay opacity-50 leading-none font-artistic drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                        UNBOUND
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary relative -mt-2 md:-mt-8 z-20 leading-none font-artistic drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
                        VISION
                    </h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-8 text-xl text-zinc-300 animate-pulse"
                >
                    Scroll to see the future
                </motion.p>
            </motion.div>
        </section>
    </>
}