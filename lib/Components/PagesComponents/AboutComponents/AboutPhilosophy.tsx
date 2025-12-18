"use client"
import React from "react";
import { motion } from "framer-motion";
import { ParticlesBackground } from "@/components/Particles";
import { Card } from "../../Card";


export default function AboutPhilosophy() {
    return (
        <>
            <section className="py-32 relative bg-zinc-900/50">
                <ParticlesBackground />
                <div className="container px-4 mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-8xl font-black mb-20 text-center md:text-left font-artistic"
                    >
                        OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">DNA</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card title="THE VISION" number="01">
                            We see what others miss. The hidden potential in every brand story waiting to be unleashed.
                        </Card>
                        <Card title="THE CRAFT" number="02">
                            Obsessive attention to detail. From the typography to the motion curves, everything communicates.
                        </Card>
                        <Card title="THE IMPACT" number="03">
                            We don't aim for likes. We aim for legacy. Creating work that stands the test of time.
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}