"use client";
import React from "react";
import LogoLoop from "@/components/LogoLoop";

export default function LogoSection() {
    const logos = [
        { src: "/DbhLogo.png", alt: "DBH Logo" },
        { src: "/DbhLogo.png", alt: "DBH Logo" },
        { src: "/DbhLogo.png", alt: "DBH Logo" },
        { src: "/DbhLogo.png", alt: "DBH Logo" },
        { src: "/DbhLogo.png", alt: "DBH Logo" },
        { src: "/DbhLogo.png", alt: "DBH Logo" },
    ];

    return (
        <section className="py-10 bg-black overflow-hidden">
            <div className="w-full">
                {/* @ts-ignore - JS component props */}
                <LogoLoop
                    logos={logos}
                    speed={100}
                    direction="left"
                    width="100%"
                    logoHeight={80}
                    gap={60}
                    pauseOnHover={false}
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </section>
    );
}
