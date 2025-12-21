"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validations/contactSchema";
import { submitContactForm } from "@/lib/Services/ApiServices";

const ContactSection = () => {
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
            console.log("Submitting form with data:", data);
            await submitContactForm(data);
            setIsSubmitted(true);
            reset();
            // Reset success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (error: any) {
            console.error("Submission error:", error);
            setSubmitError(error.response?.data?.error || "Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden" id="contact">

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">

                    {/* Brand Info */}
                    <div className="flex flex-col justify-center space-y-8 glass p-8 rounded-2xl">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-artistic text-primary">
                                Let's Create Magic
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                Ready to elevate your brand? Reach out to us and let's start a conversation about your next big project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Call Us</p>
                                    <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email Us</p>
                                    <p className="text-lg font-semibold">hello@dbh.agency</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Visit Us</p>
                                    <p className="text-lg font-semibold">
                                        123 Creative Avenue,<br />
                                        Design District, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl shadow-xl border border-white/10"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>

                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center py-12 text-center"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-400">Thanks for reaching out. We'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                                        />
                                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            id="email"
                                            placeholder="your@email.com"
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                                        />
                                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className={`w-full bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                                        />
                                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                                    </div>

                                    {submitError && (
                                        <p className="text-sm text-red-500 bg-red-500/10 p-3 rounded-lg text-center animate-shake">
                                            {submitError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
