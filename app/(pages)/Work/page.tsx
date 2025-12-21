"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShootingStarsBackground } from "@/components/ShootingStarBackground";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const projects = [
        { id: 1, title: "NEON HORIZON", category: "BRANDING", image: "/project1.jpg", size: "col-span-1 md:col-span-2 row-span-2" },
        { id: 2, title: "VELOCITY", category: "WEB DESIGN", image: "/project2.jpg", size: "col-span-1" },
        { id: 3, title: "ECHO CHAMBER", category: "CAMPAIGN", image: "/project3.jpg", size: "col-span-1" },
        { id: 4, title: "VOID", category: "MOTION", image: "/project4.jpg", size: "col-span-1 md:col-span-2" },
    ];
    return (
        <>
            <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden">

                <div className="fixed inset-0 z-0">
                    <ShootingStarsBackground />
                </div>

                {/* FEATURED HERO */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden z-10 p-4 pt-32">
                    <motion.div style={{ y: yHero }} className="w-full max-w-6xl h-full max-h-[600px] relative rounded-[3rem] overflow-hidden border border-white/10 group">
                        <div className="absolute inset-0 bg-zinc-900 animate-pulse" /> {/* Placeholder Image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="text-primary font-mono tracking-widest text-sm mb-4 block">FEATURED CASE</span>
                                <h1 className="text-6xl md:text-8xl font-black mb-4 font-artistic leading-none">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">SILENT</span> <br /> <span className="text-white">FORCE</span>
                                </h1>
                                <p className="max-w-md text-zinc-300 mb-8">
                                    Rebranding a fintech giant into a sleek, silent powerhouse.
                                    We stripped away the noise and left only the signal.
                                </p>
                                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-primary hover:scale-105 transition-all duration-300">
                                    VIEW CASE STUDY
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>


                <section className="relative py-20 container px-4 mx-auto z-10">
                    <div className="flex items-end justify-between mb-16">
                        <h2 className="text-6xl font-black font-artistic">SELECTED <br /><span className="text-zinc-600">WORKS</span></h2>
                        <div className="hidden md:block text-right">
                            <p className="text-zinc-400">2023 - 2025</p>
                            <p className="text-primary">ARCHIVE</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-10%" }}
                                transition={{ delay: i * 0.1 }}
                                className={cn(
                                    "relative group rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 cursor-pointer",
                                    project.size
                                )}
                            >
                                <div className="absolute inset-0 bg-zinc-800 transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500" />

                                <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute bottom-0 left-0 p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-3xl font-black mb-2 font-artistic text-primary">{project.title}</h3>
                                    <div className="h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>




            </main>
        </>
    )
}