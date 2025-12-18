"use client"
import { ParticlesBackground } from "@/components/Particles"
import { motion } from "framer-motion"
import React from "react"

export default function AboutHero() {
    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <ParticlesBackground />
                <div className="absolute inset-0 bg-black/20 z-0">
                    <div className="container px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "circOut" }}
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black tracking-tighter mb-4 mix-blend-overlay font-artistic text-primary">
                                ARCHITECTS
                            </h1>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent animate-gradient-x font-artistic">
                                OF THE UNSEEN
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="mt-8 text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
                        >
                            We don't just build brands. We build worlds.
                        </motion.p>
                    </div></div>
            </section>
        </>
    )
}