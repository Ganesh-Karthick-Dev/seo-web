"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";

const Dithering = lazy(() =>
    import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

interface DitheringCardProps {
    badge?: string;
    title: React.ReactNode;
    description: string;
    ctaText: string;
    ctaHref?: string;
    accentColor?: string;
}

export function DitheringCard({
    badge,
    title,
    description,
    ctaText,
    ctaHref = "#",
    accentColor = "#3B82F6", // Blue - project primary color
}: DitheringCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full max-w-6xl relative mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-[48px] border border-neutral-800 bg-neutral-900/50 shadow-sm min-h-[500px] md:min-h-[550px] flex flex-col items-center justify-center duration-500">
                <Suspense fallback={<div className="absolute inset-0 bg-neutral-800/20" />}>
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-screen">
                        <Dithering
                            colorBack="#00000000"
                            colorFront={accentColor}
                            shape="warp"
                            type="4x4"
                            speed={isHovered ? 0.6 : 0.2}
                            className="size-full"
                            minPixelRatio={1}
                        />
                    </div>
                </Suspense>

                <div className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">
                    {badge && (
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            {badge}
                        </div>
                    )}

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                        {description}
                    </p>

                    {/* Button */}
                    <a
                        href={ctaHref}
                        className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-10 text-base font-medium text-white transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        <span className="relative z-10">{ctaText}</span>
                        <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
