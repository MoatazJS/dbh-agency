"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { VortexBackground } from "@/components/VortexBackground";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/lib/Context/LoadingContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contactSchema";
import { submitContactForm } from "@/lib/Services/ApiServices";
import { CheckCircle2, Send } from "lucide-react";

export default function Contact() {
    const { isAnimating } = useAnimation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
            await submitContactForm(data);
            setIsSubmitted(true);
            reset();
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error: any) {
            setSubmitError(error.response?.data?.error || "Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                        <div className="max-w-md mx-auto relative">
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="bg-black/40 p-12 rounded-3xl border border-green-500/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-white mb-2">Magic Initiated!</h4>
                                        <p className="text-gray-400">Thanks for reaching out. We've received your vision and will respond shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-4 text-left bg-black/40 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl"
                                        action="https://formspree.io/f/mojaykdb"
                                        method="POST"
                                    >
                                        <div>
                                            <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                                            <input
                                                {...register("name")}
                                                id="name"
                                                type="text"
                                                className={`w-full mt-1 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors`}
                                                placeholder="Who are you?"
                                            />
                                            {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                type="email"
                                                className={`w-full mt-1 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors`}
                                                placeholder="how@can.we.reach.you"
                                            />
                                            {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                            <textarea
                                                {...register("message")}
                                                id="message"
                                                rows={4}
                                                className={`w-full mt-1 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none`}
                                                placeholder="Tell us your vision..."
                                            />
                                            {errors.message && <p className="text-xs text-red-500 mt-1 ml-1">{errors.message.message}</p>}
                                        </div>

                                        {submitError && (
                                            <p className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg text-center">
                                                {submitError}
                                            </p>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            size="lg"
                                            className="w-full bg-white text-black hover:bg-zinc-200 mt-4 rounded-xl font-bold flex items-center justify-center space-x-2 group"
                                        >
                                            {isSubmitting ? (
                                                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <span>IGNITE YOUR LEGACY</span>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section></main>
    </>)
}
