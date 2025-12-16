"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import Ballpit from "@/components/Ballpit";
export default function HeroSection() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 bg-slate-950">
          <Ballpit
            count={100}
            gravity={0.1}
            friction={0.8}
            wallBounce={0.95}
            followCursor={true}
            colors={[0xfacc15, 0x1e3a8a, 0xffffff]}
          />
        </div>
        <div className="relative z-10">
          <div className="container px-4 text-center ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-yellow-500 mb-6 backdrop-blur-md">
                Creative Advertising Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 leading-[0.9] font-artistic"
            >
              <span className="block bg-linear-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                VISION
              </span>
              <span className="block bg-linear-to-r from-primary via-yellow-200 to-secondary bg-clip-text text-transparent">
                UNBOUND
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="
    max-w-2xl mx-auto mb-10 px-6 py-4
    text-lg md:text-xl font-semibold text-yellow-300
    bg-black/40 backdrop-blur-md
    rounded-xl
    shadow-[0_0_40px_rgba(250,204,21,0.15)]
    leading-relaxed
  "
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
