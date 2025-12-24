"use client";
import HeroSection from "@/lib/Components/PagesComponents/HomeComponents/HeroSection";
import React, { useEffect } from "react";
import { fetchHomeProjects } from "@/lib/Services/ApiServices";

export default function Home() {
    useEffect(() => {
        fetchHomeProjects();
    }, []);

    return (
        <>
            <HeroSection />
        </>
    );
}