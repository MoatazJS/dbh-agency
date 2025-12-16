"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

export default function HeroSection() {
  return (
    <>
      <section>
        <div>
          <div className="container px-4 text-center z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-primary mb-6 backdrop-blur-md">
                Creative Advertising Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] font-artistic"
            >
              <span className="block text-white">VISION</span>
              <span className="block bg-linear-to-r from-primary via-yellow-200 to-secondary bg-clip-text text-transparent">
                UNBOUND
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-md"
            >
              We are the architects of the unseen. DBH blends diverse artistic
              prowess with cutting-edge technology to deliver immersive
              experiences that leave a lasting mark on the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto text-lg">
                See Our Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-lg"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
