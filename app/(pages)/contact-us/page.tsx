"use client";
import { Button } from "@/components/ui/button";
import { VortexBackground } from "@/components/VortexBackground";
import { motion } from "framer-motion";
import { useAnimation } from "@/lib/Context/LoadingContext";

export default function Contact() {
    const { isAnimating } = useAnimation();
    return (<>

        <main className="min-h-screen bg-black text-white selection:bg-red-500 selection:text-black overflow-hidden relative flex flex-col pb-14">
            <VortexBackground />
            <section className="flex-1 flex items-center justify-center relative z-10 pt-20">

                <div className="container px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isAnimating ? {} : { opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black mb-8 tracking-tighter text-primary mix-blend-mode-difference font-artistic">
                            THE UNKNOWN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-primary to-secondary">AWAITS</span>
                        </h1>

                        <form className="max-w-md mx-auto space-y-4 text-left bg-black/40 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                            <div>
                                <label className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                                <input type="text" className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Who are you?" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                                <input type="email" className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="how@can.we.reach.you" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                <textarea rows={4} className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us your vision..." />
                            </div>

                            <Button size="lg" className="w-full bg-white text-black hover:bg-zinc-200 mt-4 rounded-xl font-bold">
                                ENTER THE VOID
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section></main>
    </>)
}