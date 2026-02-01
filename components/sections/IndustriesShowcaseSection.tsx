"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/industries-data";

gsap.registerPlugin(ScrollTrigger);

export function IndustriesShowcaseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                headerRef.current,
                { x: -80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Cards staggered animation
            const cards = gridRef.current?.children;
            if (cards && cards.length > 0) {
                gsap.fromTo(
                    cards,
                    { y: 60, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        stagger: 0.08,
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-black overflow-hidden">
            {/* Subtle Background Grid */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Ambient Glow Effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div ref={headerRef} className="mb-24 max-w-5xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                        Industries We Serve <br />
                        <span className="text-neutral-500">
                            The industries where our services create the strongest business and operational impact.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        From regulatory complexity to operational scale, our software development for industries combines deep domain expertise with execution-focused engineering. Whether you&apos;re disrupting finance, transforming healthcare, or scaling e-commerce, we build the foundations that turn vision into market dominance.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group relative rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-white/[0.08] overflow-visible",
                                    "hover:border-white/20 transition-all duration-500 cursor-pointer",
                                    "hover:scale-[1.02] hover:shadow-2xl",
                                    industry.borderGlow
                                )}
                            >
                                {/* Floating Icon - Appears on Hover (Top Center, Half Out, Tilted) */}
                                <div className={cn(
                                    "absolute -top-8 left-1/2 -translate-x-1/2 z-20",
                                    "w-16 h-16 rounded-2xl flex items-center justify-center",
                                    "bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/20",
                                    "shadow-2xl shadow-black/50",
                                    "opacity-0 scale-50 rotate-[-20deg] translate-y-8",
                                    "group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-[-12deg] group-hover:translate-y-0",
                                    "transition-all duration-500 ease-out"
                                )}>
                                    <Icon className={cn("w-8 h-8", industry.accentColor)} />
                                </div>

                                {/* Background Pulsing Icon - Hidden on Hover */}
                                <div className={cn(
                                    "absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl",
                                    "opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                                )}>
                                    <Icon
                                        className={cn(
                                            "w-40 h-40 text-white/[0.08] animate-pulse",
                                        )}
                                        strokeWidth={0.5}
                                    />
                                </div>

                                {/* Gradient Background */}
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
                                        industry.gradient
                                    )}
                                />

                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-2xl" />

                                {/* Content */}
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-1 tracking-tight group-hover:text-white transition-colors duration-300">
                                        {industry.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="text-sm font-medium text-orange-400/80 mb-3">
                                        {industry.subtitle}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-400 leading-relaxed flex-grow group-hover:text-neutral-300 transition-colors duration-300">
                                        {industry.description}
                                    </p>

                                    {/* View details link */}
                                    <Link
                                        href="/industries"
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        view details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
