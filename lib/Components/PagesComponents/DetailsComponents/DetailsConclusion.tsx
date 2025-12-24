"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DetailsConclusionProps {
    title?: string;
    description?: string;
    imageSrc?: string;
}

export default function DetailsConclusion({
    title = "THE CONCLUSION",
    description = "Our journey together resulted in more than just a visual update; it birthed a new era for the brand. By actively listening and iterating on feedback, we delivered a cohesive identity that stands tall in a crowded market. The final product is a testament to the power of collaboration and bold creative vision.",
    imageSrc = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" // Placeholder
}: DetailsConclusionProps) {
    return (
        <section className="w-full py-20 px-6 bg-background relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
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

                    {/* Right Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="relative">
                            <h2 className="text-4xl md:text-6xl font-black font-artistic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                                {title}
                                <span className="text-white">.</span>
                            </h2>
                            {/* Matching the separator style from DetailsChallenge/Solution */}
                            <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full" />
                        </div>

                        <div className="text-lg md:text-xl text-zinc-300 leading-relaxed space-y-6">
                            <p>
                                {description}
                            </p>
                        </div>

                        {/* Decorative Quote or Highlight */}
                        <div className="border-l-4 border-primary pl-6 py-2">
                            <p className="italic font-serif text-xl text-primary font-medium tracking-wide">
                                "The end is just a new beginning."
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}