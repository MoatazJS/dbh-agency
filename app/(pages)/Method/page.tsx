"use client"
import { GridBackground } from "@/components/GridBackground";
import MethodHero from "@/lib/Components/PagesComponents/MethodComponents/MethodHero";
import StepsSection from "@/lib/Components/PagesComponents/MethodComponents/StepsSection";
import React, { useRef } from "react";

export default function MethodPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
                <div className="fixed inset-0 z-0">
                    <GridBackground />
                </div>
                <MethodHero />
                <StepsSection containerRef={containerRef} />
            </main>
        </>
    );
}