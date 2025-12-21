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
            <div className="relative z-10 text-center px-4">
                <h1 className="text-[10rem] md:text-[20rem] font-black leading-none tracking-tighter text-white mix-blend-difference font-artistic animate-pulse">
                    404
                </h1>

                <div className="relative inline-block">
                    <h2 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-primary mb-8 font-artistic relative z-10">
                        LOST IN THE VOID
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black text-red-600/50 absolute top-1 left-1 blur-sm animate-ping">
                        LOST IN THE VOID
                    </h2>
                </div>

                <p className="text-xl text-zinc-400 max-w-lg mx-auto mb-12">
                    The signal has been lost. You have ventured too far into the unknown.
                    Re-establish connection immediately.
                </p>

                <Link href="/">
                    <Button size="lg" className="bg-white text-black hover:bg-red-600 hover:text-white transition-all duration-300 font-bold tracking-widest text-lg px-10 py-6 rounded-none skew-x-[-10deg]">
                        RE-ESTABLISH SIGNAL
                    </Button>
                </Link>
            </div>
        </main>
    </>)
}