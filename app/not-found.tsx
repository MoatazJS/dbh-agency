"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {

    return (<>

        <main>
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" stitchTiles="stitch" />
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
            <div>Content</div>
        </main>
    </>)
}