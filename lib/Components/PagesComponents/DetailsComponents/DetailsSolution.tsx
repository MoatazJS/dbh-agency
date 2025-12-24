"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { DetailsSolutionProps } from "@/lib/interfaces/interface";

export default function DetailsSolution({
    title = "THE SOLUTION",
    description = "We crafted a comprehensive visual strategy that merges the precision of technology with the warmth of human creativity. By utilizing a dynamic color palette and fluid typography, we established a brand presence that feels both timeless and futuristic. The result is an identity that commands attention and inspires trust across all touchpoints.",
    imageSrc = "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop" // Placeholder
}: DetailsSolutionProps) {
    return (
        <section className="w-full py-20 px-6 bg-seconday relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image (Reversed from Challenge) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square w-full rounded-2xl overflow-hidden group">
                            {/* Stylish Border/Frame Effect */}
                            <div className="absolute inset-0 border border-white/10 z-20 pointer-events-none rounded-2xl" />

                            {/* Image */}
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${imageSrc})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />

                            {/* Floating decorative element */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-[50px] rounded-full z-10" />
                        </div>
                    </motion.div>

                    {/* Right Column: Text (Reversed from Challenge) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div className="relative">
                            <h2 className="text-4xl md:text-6xl font-black font-artistic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                                {title}
                                <span className="text-white">.</span>
                            </h2>
                            <div className="w-full h-1 bg-gradient-to-r from-transparent to-primary mt-4 rounded-full" />
                        </div>

                        <div className="text-lg md:text-xl text-zinc-300 leading-relaxed space-y-6">
                            <p>
                                {description}
                            </p>
                        </div>

                        {/* Decorative Quote or Highlight */}
                        <div className="border-r-4 border-primary pr-6 py-2 text-right">
                            <p className="italic font-serif text-xl text-primary font-medium tracking-wide">
                                "Simplifying the complex."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}