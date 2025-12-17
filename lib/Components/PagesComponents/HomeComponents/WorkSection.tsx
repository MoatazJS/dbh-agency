"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shuffle from "@/components/Shuffle";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Brand Revolution",
    category: "Branding & Identity",
    description: "Transforming a legacy brand into a modern powerhouse",
    image: "/placeholder-work-1.jpg",
  },
  {
    id: 2,
    title: "Digital Dreams",
    category: "Web Experience",
    description: "Crafting immersive digital experiences that captivate",
    image: "/placeholder-work-2.jpg",
  },
  {
    id: 3,
    title: "Visual Poetry",
    category: "Creative Direction",
    description: "Where art meets commerce in perfect harmony",
    image: "/placeholder-work-3.jpg",
  },
  {
    id: 4,
    title: "Future Forward",
    category: "Campaign Strategy",
    description: "Bold campaigns that break through the noise",
    image: "/placeholder-work-4.jpg",
  },
];

export default function WorkSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % workItems.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + workItems.length) % workItems.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative min-h-screen py-32 overflow-hidden">
      {/* Animated Background - Gradient Mesh */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950">
        {/* Animated gradient blobs */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 80% 20%, rgba(250, 204, 21, 0.1) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-full h-full"
          style={{
            background: "radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              style={{
                left: `${(i * 37 + 13) % 100}%`,
                top: `${(i * 53 + 29) % 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (i % 3 - 1) * 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + (i % 5),
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 100, -100],
            y: [-50, 50, -50],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] animate-grid-flow" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">

          <div className="mb-6 md:mb-8">
            <Shuffle
              text="OUR WORK"
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 font-artistic"
              shuffleDirection="right"
              duration={0.5}
              stagger={0.05}
              shuffleTimes={3}
              animationMode="evenodd"
              threshold={0.2}
              triggerOnce={false}
              triggerOnHover={true}
              loop={true}
              loopDelay={5}
              colorFrom="#facc15"
              colorTo="#fde047"
              onShuffleComplete={() => { }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-zinc-400 leading-relaxed px-4"
          >
            Where creativity meets impact. Each project is a testament to our
            commitment to excellence and innovation.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0"
              >
                <div className="group relative h-full cursor-pointer">
                  <div className="relative h-full overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800/50 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500">
                    {/* Image Container with Overlay */}
                    <div className="relative h-full overflow-hidden bg-zinc-900">
                      {/* Base gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />

                      {/* Dark overlay that changes on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 0.95 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Full card color overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-blue-500/0"
                        initial={{ opacity: 0 }}
                        whileHover={{
                          opacity: 0.3,
                          background: "linear-gradient(135deg, rgba(250, 204, 21, 0.4) 0%, rgba(59, 130, 246, 0.4) 100%)"
                        }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <div className="flex items-start justify-between mb-3 md:mb-4">
                            <span className="text-xs sm:text-sm md:text-base font-medium text-yellow-400 uppercase tracking-wider bg-yellow-500/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-yellow-500/20">
                              {workItems[currentIndex].category}
                            </span>
                            <motion.div
                              whileHover={{ scale: 1.3, rotate: 45 }}
                              transition={{ duration: 0.3 }}
                              className="text-yellow-400 bg-yellow-500/10 backdrop-blur-sm p-2 md:p-3 rounded-full border border-yellow-500/20"
                            >
                              <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6" />
                            </motion.div>
                          </div>

                          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 group-hover:text-yellow-400 transition-colors duration-300 font-artistic leading-tight">
                            {workItems[currentIndex].title}
                          </h3>

                          <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                            {workItems[currentIndex].description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Floating particles on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                            style={{
                              left: `${(i * 41 + 17) % 100}%`,
                              top: `${(i * 59 + 31) % 100}%`,
                            }}
                            animate={{
                              y: [0, -150],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2 + (i % 3),
                              repeat: Infinity,
                              delay: i * 0.25,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/0 via-yellow-500/30 to-blue-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-md border border-yellow-500/20 text-yellow-400 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-md border border-yellow-500/20 text-yellow-400 p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
            {workItems.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentIndex
                  ? "w-8 md:w-12 h-2 md:h-3 bg-yellow-400"
                  : "w-2 md:w-3 h-2 md:h-3 bg-yellow-400/30 hover:bg-yellow-400/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 md:mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] cursor-pointer text-sm md:text-base"
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-75" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150" />
    </section>
  );
}
