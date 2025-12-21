"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShootingStarsBackground } from "@/components/ShootingStarBackground";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const yHero = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const projects = [
        { id: 1, title: "NEON HORIZON", category: "BRANDING", image: "/project1.jpg", size: "col-span-1 md:col-span-2 row-span-2" },
        { id: 2, title: "VELOCITY", category: "WEB DESIGN", image: "/project2.jpg", size: "col-span-1" },
        { id: 3, title: "ECHO CHAMBER", category: "CAMPAIGN", image: "/project3.jpg", size: "col-span-1" },
        { id: 4, title: "VOID", category: "MOTION", image: "/project4.jpg", size: "col-span-1 md:col-span-2" },
    ];
    return (
        <div>
            <>
                <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white overflow-x-hidden"><div className="fixed inset-0 z-0">
                    <ShootingStarsBackground />
                </div></main>



            </>
        </div>
    )
}