"use client";

import React, { useRef } from "react";
// import Ballpit from "@/components/Ballpit";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
    };

    return (
        <section className="relative min-h-screen w-full overflow-hidden" id="contact">
            {/* Background Ballpit */}
            {/* <div className="absolute inset-0 z-0">
                <Ballpit
                    count={50}
                    gravity={0.7}
                    friction={0.8}
                    wallBounce={0.9}
                    followCursor={true}
                    size0={0.4} // Smaller cursor ball
                    colors={[
                        0xffff00, // Bright Vivid Yellow (Cursor Ball)
                        0xd4af37, // Metallic Gold
                        0xb8860b, // Dark Goldenrod
                        0xffbf00, // Amber
                    ]}
                />
            </div> */}

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
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 group"
                            >
                                <span>Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
