"use client"
import React from "react";
import AboutHero from "@/lib/Components/PagesComponents/AboutComponents/AboutHero";
import AboutCards from "@/lib/Components/PagesComponents/AboutComponents/AboutCards";
import AboutPhilosophy from "@/lib/Components/PagesComponents/AboutComponents/AboutPhilosophy";

export default function About() {
    return (
        <>
            <AboutHero />
            <AboutCards />
            <AboutPhilosophy />
        </>)
}