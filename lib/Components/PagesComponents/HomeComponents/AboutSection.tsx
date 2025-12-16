"use client";
import { ParticlesBackground } from "@/components/Particles";
import React from "react";

export default function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      <ParticlesBackground />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2>tata</h2>
            <h2>tatata</h2>
          </div>
          <div>image</div>
        </div>
      </div>
    </section>
  );
}
