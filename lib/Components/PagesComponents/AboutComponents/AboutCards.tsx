"use client";
import { ParticlesBackground } from "@/components/Particles";
import React from "react";
import StickyCard from "../StickyCard";

export default function AboutCards() {
    return (
        <section className="pt-20 relative bg-black/50 min-h-screen">
            <ParticlesBackground />
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-4xl mx-auto space-y-[15vh] pb-[40vh]">
                    <StickyCard index={0} bgColor="bg-zinc-900">
                        We believe in the power of <span className="text-primary">chaos</span> tailored into form.
                    </StickyCard>
                    <StickyCard index={1} bgColor="bg-zinc-800">
                        In a digital landscape saturated with noise, silence is fatal.
                        We craft voices that <span className="text-secondary italic">echo</span>.
                    </StickyCard>
                    <StickyCard index={2} bgColor="bg-zinc-700">
                        DBH is not just an agency. It is a <span className="text-accent">collision</span> of art, technology, and human psychology.
                    </StickyCard>
                </div>
            </div>
        </section>
    );
}
