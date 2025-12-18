"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutVisionMission() {
    return (
        <section className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 font-artistic tracking-tighter">
                            VISION
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                            To be the global heartbeat of creative rebellion. We envision a world where brands don't just exist, they <span className="text-primary italic font-bold">pulse</span> with life, challenging the mundane and architecting the unseen.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6 md:mt-32"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200 font-artistic tracking-tighter">
                            MISSION
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
                            To deconstruct the ordinary and rebuild it into the extraordinary. We blend artistic prowess with cutting-edge strategy to deliver immersive experiences that leave an indelible mark on the human psyche.
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 opacity-30" />
            <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-zinc-800 to-transparent -translate-x-1/2 opacity-30 hidden md:block" />

        </section>
    );
}
