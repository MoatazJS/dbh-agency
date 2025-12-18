"use client"
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export default function StickyCard({ children, index, bgColor }: { children: React.ReactNode, index: number, bgColor: string }) {
    return (
        <motion.div
            className={cn(
                "sticky top-32 p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md min-h-[400px] flex items-center justify-center text-4xl md:text-6xl font-bold leading-tight font-artistic text-center",
                bgColor
            )}
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{
                zIndex: index,
                // Add a subtle rotation based on index for variety
                rotate: index % 2 === 0 ? 2 : -2
            }}
        >
            <p className="text-white">{children}</p>
        </motion.div>
    );
};