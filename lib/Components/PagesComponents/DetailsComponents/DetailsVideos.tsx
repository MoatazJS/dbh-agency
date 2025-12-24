"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { ProjectVideo } from "@/lib/interfaces/interface";
import { DetailsVideosProps } from "@/lib/interfaces/interface";

export default function DetailsVideos({ videos = [] }: DetailsVideosProps) {
    if (!videos || videos.length === 0) {
        return null;
    }

    return (
        <section className="w-full py-12 container mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-artistic text-primary uppercase">
                    Video Gallery
                </h2>
                <div className="w-1/2 h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full" />
            </div>

            {/* Grid Layout conforming to 'stick next to each other' */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-[800px] md:h-[600px] w-full bg-card/50 border border-primary/20 rounded-xl overflow-hidden shadow-2xl shadow-primary/5 p-1 gap-1">
                {videos.slice(0, 3).map((video, index) => {
                    // Dynamic classes based on index to create the Bento Grid
                    // Index 0: Main large video (2x2)
                    // Index 1: Top right (1x1)
                    // Index 2: Bottom right (1x1)

                    let gridClass = "";
                    if (index === 0) {
                        gridClass = "md:col-span-2 md:row-span-2";
                    } else {
                        gridClass = "md:col-span-1 md:row-span-1";
                    }

                    return (
                        <div
                            key={video.id}
                            className={cn(
                                "relative group overflow-hidden bg-black/80 rounded-sm hover:z-10 transition-all duration-300",
                                gridClass
                            )}
                        >
                            <iframe
                                src={video.video_url}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-none"
                            />

                            {/* Optional: Brand Theme Frame/Border on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 pointer-events-none transition-colors duration-300" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
