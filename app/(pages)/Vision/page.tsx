"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { LiquidBackground } from "@/components/ui/LuquidBackground";
import LogoSection from "@/lib/Components/PagesComponents/HomeComponents/LogoSection";
import Link from "next/link";
import { useAnimation } from "@/lib/Context/LoadingContext";

export default function VisionPage() {
    const { isAnimating } = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white overflow-x-hidden">
            <div className="fixed inset-0 z-0">
                <LiquidBackground />
            </div>

            {/* HERO */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden z-10">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] font-black tracking-tighter mix-blend-overlay opacity-50 leading-none font-artistic drop-shadow-[0_0_20px_rgba(0,0,0,0.9)]">
                            UNBOUND
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[8rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 relative -mt-2 md:-mt-8 z-20 leading-none font-artistic drop-shadow-[0_0_30px_rgba(0,0,0,1)]">
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
            <LogoSection />
            {/* MANIFESTO - STICKY SCROLL */}
            <section className="relative z-10 py-40 px-4 md:px-8 bg-black/30 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-zinc-500 mb-10 font-artistic">THE MANIFESTO</h2>
                    <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-tight md:leading-[1.1] space-y-8 md:space-y-12 font-artistic">
                        <ScrollRevealText>
                            We don't predict the future.
                        </ScrollRevealText>
                        <ScrollRevealText className="text-primary">
                            We build it.
                        </ScrollRevealText>
                        <ScrollRevealText>
                            In a world of copycats, we choose to be the glitch.
                            The anomaly that captures attention.
                        </ScrollRevealText>
                        <ScrollRevealText className="text-white mix-blend-difference">
                            We dream with our eyes open.
                        </ScrollRevealText>
                    </div>
                </div>
            </section>
            <LogoSection />

            {/* THE PILLARS - INTERACTIVE CARDS */}
            <section className="relative z-10 py-32 px-4 container mx-auto">
                <h2 className="text-center text-4xl md:text-6xl font-black mb-20 font-artistic">OUR <span className="text-secondary">PILLARS</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
                    <PillarCard title="INNOVATION" number="01" desc="Pushing the boundaries of what is technically possible." />
                    <PillarCard title="CULTURE" number="02" desc="Shaping the zeitgeist, not just following it." delay={0.2} />
                    <PillarCard title="IMPACT" number="03" desc="Creating work that matters and moves the needle." delay={0.4} />
                </div>
            </section>

            {/* FLOATING QUOTES */}
            <section className="relative z-10 py-40 overflow-hidden flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px" }}
                    className="max-w-4xl px-4 relative z-10"
                >
                    <p className="text-3xl md:text-6xl font-serif italic text-white/80 leading-tight">
                        "The best way to predict the future is to create it."
                    </p>
                    <p className="mt-8 text-primary font-bold tracking-widest">— DBH PHILOSOPHY</p>
                </motion.div>
            </section>

            {/* NEXT STEP CTA */}
            <section className="py-20 text-center relative z-10 border-t border-white/10 bg-black">
                <Link href="/Method" className="group inline-flex flex-col items-center gap-4">
                    <span className="text-zinc-500 text-sm tracking-widest group-hover:text-primary transition-colors">NEXT: THE PATH</span>
                    <span className="text-4xl md:text-6xl font-black text-white group-hover:tracking-widest transition-all duration-500">OUR METHOD</span>
                </Link>
            </section>
        </main>
    );
}

const ScrollRevealText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.p
            initial={{ opacity: 0.1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8 }}
            className={cn("transition-colors duration-500", className)}
        >
            {children}
        </motion.p>
    );
}

const PillarCard = ({ title, number, desc, delay = 0 }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            whileHover={{ y: -20, rotateX: 5, rotateY: 5, scale: 1.05 }}
            className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group cursor-default"
        >
            <div className="text-6xl font-black text-white/5 mb-8 group-hover:text-primary transition-colors duration-500">{number}</div>
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-zinc-400 group-hover:text-white transition-colors">{desc}</p>
        </motion.div>
    );
}
