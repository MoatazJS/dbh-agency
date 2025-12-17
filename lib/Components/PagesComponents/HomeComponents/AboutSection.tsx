"use client";
import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-5 relative overflow-hidden min-h-fit">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap:6 md:gap-16 lg:gap-16 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-center md:text-start lg:text-start xl:text-start text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-8 leading-tight">
              WE MAKE <span className="text-primary italic">SENSE</span>.<br />
              NOT JUST <span className="text-primary italic">LOOKS</span>.
            </h2>
            <p className="text-center md:text-start lg:text-start xl:text-start text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-4 md:mb-6">
              We are the place where brands come when they&apos;re ready to
              become memorable. We blur the line between commerce and creation,
              crafting identities that don&apos;t shout, but echo.
            </p>
            <p className="text-center md:text-start lg:text-start xl:text-start text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
              Unlike agencies that chase fleeting trends, we create work that
              lives. Not content that vanishes in the scroll, but stories that
              stay with you.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            className="order-1 md:order-2 relative w-full h-50 md:h-150 lg:h-full lg:min-h-175"
          >
            <Image
              src="/DbhLogo.png"
              alt="DBH Logo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
