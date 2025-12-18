"use client"
import { motion } from "framer-motion";
import React from "react";

export default function MethodHero() {
    return (
        <>
            <section className="relative min-h-[50vh] flex flex-col justify-center items-center py-32 z-10 ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[10rem] font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-primary to-yellow-200 font-artistic leading-none">
                        THE PATH
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        From chaos to clarity. The DBH method is a rigorous journey of deduction and rampant creativity.
                    </p>
                </motion.div>
            </section>
        </>
    );
}
