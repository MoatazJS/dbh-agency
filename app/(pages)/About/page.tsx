"use client"
import React from "react";
import AboutHero from "@/lib/Components/PagesComponents/AboutComponents/AboutHero";
import AboutCards from "@/lib/Components/PagesComponents/AboutComponents/AboutCards";
import AboutPhilosophy from "@/lib/Components/PagesComponents/AboutComponents/AboutPhilosophy";
import AboutCTA from "@/lib/Components/PagesComponents/AboutComponents/AboutCTA";
import LogoSection from "@/lib/Components/PagesComponents/HomeComponents/LogoSection";

export default function About() {
    return (
        <>
            <AboutHero />
            <LogoSection />
            <AboutCards />
            <AboutPhilosophy />
            <LogoSection />
            <AboutCTA />
        </>)
}