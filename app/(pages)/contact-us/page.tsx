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
        <main className="min-h-screen text-white selection:bg-red-500 selection:text-black overflow-hidden relative flex flex-col pb-14">
            <VortexBackground />
            <section className="flex-1 flex items-center justify-center relative z-10 pt-20 pb-10">

                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isAnimating ? {} : { opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Centered Headers */}
                        <div className="text-center mb-16">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter text-primary mix-blend-mode-difference font-artistic leading-tight">
                                THE UNKNOWN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-primary to-secondary">AWAITS</span>
                            </h1>
                            <p className="text-lg text-zinc-400 max-w-lg mx-auto">
                                We are ready to bring your vision to life. Reach out and let's create something extraordinary together.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column: Contact Info */}
                            <div className="flex flex-col justify-center space-y-8 h-full">
                                <div className="space-y-8 pl-4 lg:pl-0">
                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                                            <p className="text-zinc-400 text-lg">+20 100 000 0000</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                                            <a href="mailto:dbh.creative@gmail.com" className="text-zinc-400 text-lg hover:text-primary transition-colors">
                                                dbh.creative@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-6 group">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-colors shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div className="pt-2">
                                            <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                                            <a
                                                href="https://maps.app.goo.gl/MNJC1cUbTU5snF6L6"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-400 text-lg hover:text-primary transition-colors block"
                                            >
                                                633 Abu Qir Street, Gianaclis<br />
                                                In Front of Mostafa El Sallab<br />
                                                Alexandria, Egypt<br />
                                                Apartment 1, 5th Floor, Entrance 1
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="w-full relative">
                                <AnimatePresence mode="wait">
                                    {isSubmitted ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="bg-black/40 p-12 rounded-3xl border border-green-500/50 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center h-[500px]"
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
                                            className="space-y-5 text-left bg-black/40 p-8 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
                                            action="https://formspree.io/f/mojaykdb"
                                            method="POST"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

                                            <div>
                                                <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                                                <input
                                                    {...register("name")}
                                                    id="name"
                                                    type="text"
                                                    className={`w-full mt-1 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-zinc-600`}
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
                                                    className={`w-full mt-1 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all duration-300 placeholder:text-zinc-600`}
                                                    placeholder="how@can.we.reach.you"
                                                />
                                                {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                                                <textarea
                                                    {...register("message")}
                                                    id="message"
                                                    rows={5}
                                                    className={`w-full mt-1 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary transition-all duration-300 resize-none placeholder:text-zinc-600`}
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
                                                className="w-full bg-white text-black hover:bg-zinc-200 mt-2 rounded-xl font-bold flex items-center justify-center space-x-2 group h-12"
                                            >
                                                {isSubmitting ? (
                                                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                                ) : (
                                                    <>
                                                        <span>IGNITE YOUR LEGACY</span>
                                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform mb-px" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section></main>
    </>)
}
