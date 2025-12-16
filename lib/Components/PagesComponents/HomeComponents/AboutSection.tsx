"use client";
import { ParticlesBackground } from "@/components/Particles";
import { motion } from "framer-motion";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              WE MAKE <span className="text-primary italic">SENSE</span>.<br />
              NOT JUST <span className="text-primary italic">LOOKS</span>.
            </h2>
          </motion.div>
          <div>image</div>
        </div>
      </div>
    </section>
  );
}
