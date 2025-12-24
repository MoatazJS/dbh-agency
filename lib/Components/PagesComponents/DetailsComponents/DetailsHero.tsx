"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { DetailsHeroProps } from "@/lib/interfaces/interface";

export default function DetailsHero({
    title = "Project Title",
    description = "A short description of the project goes here. This outlines the core objectives and the impact of the work delivered.",
    imageSrc = "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1920&auto=format&fit=crop" // Placeholder default
}: DetailsHeroProps) {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-60 scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                />
                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Artistic Title */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-primary font-artistic drop-shadow-2xl">
                        {title}
                        <span className="text-primary">.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed font-sans">
                        {description}
                    </p>
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                    className="w-24 h-1 bg-primary mx-auto mt-10 rounded-full"
                />
            </div>
        </section>
    );
}