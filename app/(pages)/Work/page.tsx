"use client"
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShootingStarsBackground } from "@/components/ShootingStarBackground";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { fetchAllProjects } from "@/lib/Services/ApiServices";
import { WorkProject } from "@/lib/interfaces/interface";
import Link from "next/link";
import Image from "next/image";

export default function Work() {
    const [projects, setProjects] = useState<WorkProject[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchAllProjects();
                if (Array.isArray(data)) {
                    setProjects(data);
                }
            } catch (error) {
                console.error("Failed to load work projects:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadProjects();
    }, []);

    const heroProject = projects[0];
    const gridProjects = projects.slice(1);

    return (
        <>
            <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">

                <div className="fixed inset-0 z-0">
                    <ShootingStarsBackground />
                </div>

                {/* FEATURED HERO */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden z-10 p-4 pt-32">
                    <motion.div style={{ y: yHero }} className="w-full max-w-6xl h-full max-h-[600px] relative rounded-[3rem] overflow-hidden border border-white/10 group bg-zinc-900/50 backdrop-blur-sm">
                        {isLoading ? (
                            // HERO SKELETON
                            <div className="w-full h-full animate-pulse flex flex-col justify-end p-8 md:p-16">
                                <div className="absolute inset-0 bg-zinc-800/50" />
                                <div className="relative z-10 space-y-6">
                                    <div className="h-4 w-32 bg-zinc-700 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="h-16 w-3/4 bg-zinc-700 rounded-lg" />
                                        <div className="h-16 w-1/2 bg-zinc-700 rounded-lg" />
                                    </div>
                                    <div className="h-4 w-full max-w-md bg-zinc-700 rounded-full" />
                                    <div className="h-4 w-2/3 max-w-md bg-zinc-700 rounded-full" />
                                </div>
                            </div>
                        ) : heroProject ? (
                            <>
                                <Image
                                    src={heroProject.image || ""}
                                    alt={heroProject.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <span className="text-primary font-mono tracking-widest text-sm mb-4 block">FEATURED PROJECT</span>
                                        <h1 className="text-6xl md:text-8xl font-black mb-4 font-artistic leading-none uppercase">
                                            <span className="text-primary">{heroProject.title}</span>
                                        </h1>
                                        <p className="max-w-md text-zinc-300 mb-8">
                                            {heroProject.description}
                                        </p>
                                    </motion.div>
                                </div>
                            </>
                        ) : null}
                    </motion.div>
                </section>


                <section className="relative py-20 container px-4 mx-auto z-10">
                    <div className="flex items-end justify-between mb-16">
                        <h2 className="text-6xl font-black font-artistic uppercase">SELECTED <br /><span className="text-primary">WORKS</span></h2>
                        <div className="hidden md:block text-right">
                            <p className="text-zinc-400 font-mono">2023 - 2025</p>
                            <p className="text-primary font-bold">ARCHIVE</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                        {isLoading ? (
                            // SKELETON GRID - Matches Bento Pattern
                            [...Array(6)].map((_, i) => {
                                const patternIndex = i % 4;
                                let sizeClass = "col-span-1";
                                if (patternIndex === 0) sizeClass = "col-span-1 md:col-span-2 row-span-2";
                                else if (patternIndex === 3) sizeClass = "col-span-1 md:col-span-2";

                                return (
                                    <div
                                        key={i}
                                        className={cn(
                                            "relative rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/50 backdrop-blur-sm animate-pulse",
                                            sizeClass
                                        )}
                                    >
                                        <div className="absolute inset-0 bg-zinc-800/30" />
                                        <div className="absolute bottom-0 left-0 p-8 w-full z-20 space-y-4">
                                            <div className="h-8 w-3/4 bg-zinc-700/50 rounded-lg" />
                                            <div className="space-y-2">
                                                <div className="h-4 w-full bg-zinc-700/50 rounded-full" />
                                                <div className="h-4 w-2/3 bg-zinc-700/50 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            gridProjects.map((project, i) => {
                                // Bento Grid Pattern: [Large, Small, Small, Wide]
                                // 0: Large (2x2)
                                // 1: Small (1x1)
                                // 2: Small (1x1)
                                // 3: Wide (2x1)
                                const patternIndex = i % 4;
                                let sizeClass = "col-span-1";
                                if (patternIndex === 0) sizeClass = "col-span-1 md:col-span-2 row-span-2";
                                else if (patternIndex === 3) sizeClass = "col-span-1 md:col-span-2";

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={cn(
                                            "relative group rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 cursor-default", // Removed cursor-pointer
                                            sizeClass
                                        )}
                                    >
                                        <div className="w-full h-full relative">
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono">
                                                    NO IMAGE
                                                </div>
                                            )}

                                            {/* Subtle Dark Overlay */}
                                            <div className="absolute inset-0 bg-black/30 pointer-events-none" />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                            {/* Restored Category Tag Visual */}
                                            <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span className="bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-primary/30 text-primary">
                                                    WORK
                                                </span>
                                            </div>

                                            <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-3xl font-black mb-2 font-artistic text-white group-hover:text-primary transition-colors uppercase drop-shadow-lg">{project.title}</h3>
                                                <p className="text-zinc-400 text-sm line-clamp-2 mb-2 group-hover:text-white transition-colors drop-shadow-lg">{project.description}</p>
                                                <div className="h-0.5 w-10 group-hover:w-full bg-primary transition-all duration-500" />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </div>
                </section>

                <section className="py-20 border-t border-white/10 relative z-10 bg-black overflow-hidden">
                    <div className="flex whitespace-nowrap animate-marquee">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-20 items-center mx-10">
                                {["NIKE", "SPOTIFY", "TESLA", "APPLE", "RED BULL", "SONY", "ADIDAS", "GOOGLE"].map((client) => (
                                    <span key={client} className="text-4xl md:text-6xl font-black text-primary/10 font-artistic hover:text-primary transition-colors cursor-default">
                                        {client}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
