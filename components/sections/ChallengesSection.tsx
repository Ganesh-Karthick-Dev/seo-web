"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

// --- Custom Graphics (Replicating Bequant Style) ---

const GridVisual = () => (
    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 opacity-80">
        <div className="grid grid-cols-3 gap-3 transform -rotate-12">
            {[...Array(9)].map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "w-12 h-16 rounded-lg border border-white/10 transition-all duration-1000",
                        [1, 4, 7].includes(i) ? "border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.3)] bg-orange-500/10" : "bg-transparent"
                    )}
                />
            ))}
        </div>
    </div>
);

const WaveVisual = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-20 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent blur-3xl" />
        <svg className="absolute top-0 right-0 w-full h-full opacity-60" viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0,100 C100,150 200,50 400,100" fill="none" stroke="url(#orangeGradient)" strokeWidth="40" strokeLinecap="round" filter="url(#glow)" />
            <path d="M0,100 C100,150 200,50 400,100" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.5" />
            <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="10" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    </div>
);

const ChartVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-full h-32 border-t border-b border-white/10 flex items-end justify-between px-2">
            {[30, 50, 45, 70, 60, 85, 80, 95, 60, 40].map((h, i) => (
                <div key={i} className="relative group">
                    <div
                        className="w-2 bg-orange-500/20 rounded-t-sm transition-all duration-1000"
                        style={{ height: `${h}%` }}
                    />
                    <div
                        className="absolute bottom-0 w-2 bg-orange-500 rounded-t-sm shadow-[0_0_10px_rgba(249,115,22,0.5)] animate-pulse"
                        style={{ height: `${h * 0.3}%`, animationDelay: `${i * 0.1}s` }}
                    />
                </div>
            ))}
            {/* Connecting Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path d="M0,70 Q40,50 80,55 T160,30 T240,40 T320,10" fill="none" stroke="#f97316" strokeWidth="2" strokeOpacity="0.5" />
            </svg>
        </div>
    </div>
);

const NetworkVisual = () => (
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-transparent border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="absolute inset-0 bg-orange-500/50 rounded-full animate-ping" />
            </div>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-white/20 to-transparent origin-left"
                    style={{ transform: `rotate(${deg}deg) translateY(-50%)` }}
                >
                    <div
                        className="absolute right-0 w-1 h-1 bg-white/50 rounded-full"
                        style={{ animation: `pulse 2s infinite ${i * 0.2}s` }}
                    />
                </div>
            ))}
        </div>
    </div>
);

// --- Main Component ---

export function ChallengesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(titleRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                    }
                }
            );

            // Grid Items Stagger
            const items = gridRef.current?.children;
            if (items) {
                gsap.fromTo(items,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: gridRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-black overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Left Aligned Title */}
                <div className="mb-20 max-w-4xl">
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        AI-powered optimization <br />
                        <span className="text-neutral-500">solving complex problems.</span>
                    </h2>
                </div>

                {/* Bento Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[350px]">

                    {/* Card 1: Projects (Large Left) - Span 7 */}
                    <div className="group relative md:col-span-7 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-orange-500/30 transition-colors duration-500">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                        <GridVisual />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />

                        <div className="relative z-20 h-full flex flex-col justify-center items-end p-12 text-right w-full">
                            <div className="max-w-md">
                                <span className="text-xs font-bold text-orange-500 tracking-widest uppercase mb-2 block">
                                    EFFICIENCY BOTTLENECKS
                                </span>
                                <h3 className="text-3xl font-medium text-white mb-4 leading-tight">
                                    Projects take longer <br /> than expected
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Timelines extend, progress slows, and momentum becomes harder to sustain.
                                    Optimization is key to regaining control.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Integration (Medium Right) - Span 5 */}
                    <div className="group relative md:col-span-5 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-orange-500/30 transition-colors duration-500">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                        <WaveVisual />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                        <div className="relative z-20 h-full flex flex-col justify-end p-10">
                            <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-2 block">
                                SYSTEM FRAGILITY
                            </span>
                            <h3 className="text-2xl font-medium text-white mb-3">
                                Complex Integration <br /> creates fragile systems
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Multiple tools and systems create dependencies that lead to instability and performance issues.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Scalability (Medium Left) - Span 5 */}
                    <div className="group relative md:col-span-5 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-orange-500/30 transition-colors duration-500">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                        <ChartVisual />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                        <div className="relative z-20 h-full flex flex-col justify-end p-10">
                            <span className="text-xs font-bold text-blue-500 tracking-widest uppercase mb-2 block">
                                GROWTH PAINS
                            </span>
                            <h3 className="text-2xl font-medium text-white mb-3">
                                Scalability and performance <br /> break under growth
                            </h3>
                            <p className="text-neutral-400 text-sm">
                                Systems struggle under growing load, leading to latency and downtime risk.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Standards (Large Right) - Span 7 */}
                    <div className="group relative md:col-span-7 rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-orange-500/30 transition-colors duration-500">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute right-0 top-0 w-1/2 h-full">
                            <NetworkVisual />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />

                        <div className="relative z-20 h-full flex flex-col justify-center p-12">
                            <div className="max-w-md">
                                <span className="text-xs font-bold text-neutral-500 tracking-widest uppercase mb-2 block">
                                    PROCESS CHAOS
                                </span>
                                <h3 className="text-3xl font-medium text-white mb-4 leading-tight">
                                    Lack of Standardized <br /> Engineering Practices
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                    Inconsistent workflows and weak testing lead to rework, production issues, and delivery uncertainty.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div>
                                        <div className="text-3xl font-bold text-white">-35%</div>
                                        <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Efficiency Loss</div>
                                    </div>
                                    <div className="w-px h-8 bg-white/10" />
                                    <div>
                                        <div className="text-3xl font-bold text-orange-500">+40%</div>
                                        <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Bug Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
