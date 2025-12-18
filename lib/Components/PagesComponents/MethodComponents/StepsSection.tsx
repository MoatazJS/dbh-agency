"use client"
import { motion, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function StepsSection() {
    const steps = [
        { title: "DISCOVERY", desc: "We dig deep. We find the soul of your brand in the noise.", icon: "🔍" },
        { title: "STRATEGY", desc: "We build the map. No journey begins without a destination.", icon: "🗺️" },
        { title: "CREATION", desc: "We give it form. Chaos tailored into art.", icon: "🎨" },
        { title: "LAUNCH", desc: "We set it free. And watch the world unite.", icon: "🚀" },
    ];
    const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <>
            <section className="relative py-20 container px-4 mx-auto z-10">
                {/* SVG Line connecting the steps */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:-ml-0.5 bg-zinc-800 hidden md:block">
                    <motion.div
                        style={{ scaleY: pathLength }}
                        className="w-full h-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
                    />
                </div>

                <div className="space-y-32 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-20%" }}
                            transition={{ duration: 0.8 }}
                            className={cn(
                                "flex flex-col md:flex-row items-center gap-8 md:gap-16",
                                i % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Card */}
                            <div className="flex-1 w-full relative group perspective-1000">
                                <div className="p-8 border border-white/10 bg-black/60 backdrop-blur-xl rounded-3xl hover:bg-white/5 transition-all duration-500 transform group-hover:rotate-y-12 group-hover:scale-105">
                                    <div className="text-6xl mb-4">{step.icon}</div>
                                    <div className="text-4xl font-bold text-white/10 mb-2 font-artistic absolute top-6 right-8 group-hover:text-primary transition-colors">0{i + 1}</div>
                                    <h3 className="text-3xl font-bold mb-4 font-artistic text-white group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
                                </div>
                            </div>

                            {/* Center Dot (Desktop only) */}
                            <div className="relative z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-black border-4 border-zinc-800">
                                <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                            </div>

                            {/* Empty space/Image placeholder for balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </section>s

        </>
    )

}
