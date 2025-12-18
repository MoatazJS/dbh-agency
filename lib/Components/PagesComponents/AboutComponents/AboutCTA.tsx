"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function AboutCTA() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
    return (
        <>
            <section className="h-[80vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10" />
                <motion.div style={{ scale, rotate }} className="relative z-10 text-center">
                    <h2 className="text-8xl md:text-[12rem] font-black leading-none tracking-tighter opacity-20 select-none font-artistic">
                        READY?
                    </h2>
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href="/Contact" className="text-4xl md:text-6xl font-bold bg-white text-black px-12 py-6 rounded-full hover:bg-primary transition-colors">
                            LET'S TALK
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}
