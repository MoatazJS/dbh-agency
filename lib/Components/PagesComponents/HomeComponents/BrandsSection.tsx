"use client"
import { fetchAllBrands } from "@/lib/Services/ApiServices"
import { Client } from "@/lib/interfaces/interface"
import { motion } from "framer-motion"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function BrandsSection() {
    const [brands, setBrands] = useState<Client[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadBrands = async () => {
            try {
                const data = await fetchAllBrands();
                if (Array.isArray(data)) {
                    setBrands(data);
                }
            } catch (error) {
                console.error("Failed to load brands:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadBrands();
    }, [])

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono tracking-widest text-sm mb-4 block uppercase">Our Partners</span>
                    <h2 className="text-4xl md:text-6xl font-black font-artistic uppercase text-white">
                        <span className="text-primary">Building Legacies</span> <br /> <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Together</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                    {isLoading ? (
                        // Skeleton Loading
                        [...Array(10)].map((_, i) => (
                            <div key={i} className="w-32 h-24 bg-zinc-900/50 rounded-lg animate-pulse" />
                        ))
                    ) : (
                        brands.map((brand, i) => (
                            <motion.div
                                key={brand.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative w-32 md:w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 flex-shrink-0"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={brand.image_url}
                                        alt={brand.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Background flourish */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </section>
    )
}