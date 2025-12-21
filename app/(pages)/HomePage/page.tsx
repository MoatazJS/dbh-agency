"use client";
import HeroSection from "@/lib/Components/PagesComponents/HomeComponents/HeroSection";
import React, { useEffect } from "react";
import { fetchProjects } from "@/lib/Services/ApiServices";

export default function page() {
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <HeroSection />
    </>
  );
}
