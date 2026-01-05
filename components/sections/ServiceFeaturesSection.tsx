"use client";

import React, { useEffect, useRef } from 'react';
import { Layers, Rocket, RefreshCw, Cog } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Animated Border Component - Expands from top-left in both directions, meets at bottom-right, then fades
const AnimatedBorder = ({ delay = 0 }: { delay?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const path1Ref = useRef<SVGPathElement>(null);
    const path2Ref = useRef<SVGPathElement>(null);

    useEffect(() => {
        if (!path1Ref.current || !path2Ref.current || !containerRef.current) return;

        const path1 = path1Ref.current;
        const path2 = path2Ref.current;
        const container = containerRef.current;

        const length1 = path1.getTotalLength();
        const length2 = path2.getTotalLength();

        // Set initial state - both paths hidden
        gsap.set([path1, path2], {
            strokeDasharray: (i) => i === 0 ? length1 : length2,
            strokeDashoffset: (i) => i === 0 ? length1 : length2,
        });

        // Create timeline for the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        // Both paths animate simultaneously - expanding from top-left
        tl.to(path1, {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: delay,
            ease: "power2.out",
        }, 0);

        tl.to(path2, {
            strokeDashoffset: 0,
            duration: 1.2,
            delay: delay,
            ease: "power2.out",
        }, 0);

        // After paths meet, fade out the border
        tl.to([path1, path2], {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
        }, `>+0.1`);

    }, [delay]);

    // Using viewBox 0 0 200 100 for better aspect ratio control
    // r = 12 in viewBox units (represents ~24px on actual card)
    const r = 12;
    const w = 200;
    const h = 100;

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-30">
            <svg 
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${w} ${h}`}
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
            >
                {/* Path 1: Top-left corner → Top edge → Top-right corner → Right edge → Bottom-right corner (clockwise half) */}
                <path
                    ref={path1Ref}
                    d={`M ${r},1 L ${w - r},1 Q ${w - 1},1 ${w - 1},${r} L ${w - 1},${h - r} Q ${w - 1},${h - 1} ${w - r},${h - 1}`}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.9"
                    vectorEffect="non-scaling-stroke"
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                />
                {/* Path 2: Top-left corner → Left edge → Bottom-left corner → Bottom edge → Bottom-right corner (counter-clockwise half) */}
                <path
                    ref={path2Ref}
                    d={`M ${r},1 Q 1,1 1,${r} L 1,${h - r} Q 1,${h - 1} ${r},${h - 1} L ${w - r},${h - 1}`}
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeOpacity="0.9"
                    vectorEffect="non-scaling-stroke"
                    className="drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                />
            </svg>
        </div>
    );
};

interface ServiceFeaturesSectionProps {
    title?: string;
    titleHighlight?: string;
    features?: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
}

export function ServiceFeaturesSection({
    title = "Problems We Solve",
    titleHighlight = "Where Custom Software Development Creates the Most Value",
    features = [
        {
            icon: <Layers className="w-full h-full" />,
            title: "Outgrown Your Current Software",
            description: "When standard platforms no longer support your operations, our business software development solutions unlock simplicity, performance, and control.",
        },
        {
            icon: <Rocket className="w-full h-full" />,
            title: "Need Market Validation — Fast",
            description: "Our MVP development expertise helps you release working software early so you can gather real customer feedback and refine your product direction with confidence.",
        },
        {
            icon: <RefreshCw className="w-full h-full" />,
            title: "Legacy Systems Limit Progress",
            description: "Modernizing outdated software can be disruptive — unless it's done with a disciplined enterprise software development approach that protects continuity.",
        },
        {
            icon: <Cog className="w-full h-full" />,
            title: "Automation That Actually Works",
            description: "Stop forcing generic tools to fit critical workflows. Our custom solutions automate real processes with better data insights and fewer exceptions.",
        },
    ],
}: ServiceFeaturesSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation - slide from left
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, x: -80 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                    },
                }
            );

            // Cards animation - staggered fade in
            const cards = gridRef.current?.children;
            if (cards && cards.length >= 4) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse',
                    },
                });

                // Card 1: From top-left
                tl.fromTo(cards[0],
                    { y: -60, x: -30, opacity: 0 },
                    { y: 0, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    0
                );
                // Card 2: From top-right
                tl.fromTo(cards[1],
                    { y: -60, x: 30, opacity: 0 },
                    { y: 0, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    0.12
                );
                // Card 3: From bottom-left
                tl.fromTo(cards[2],
                    { y: 60, x: -30, opacity: 0 },
                    { y: 0, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    0.24
                );
                // Card 4: From bottom-right
                tl.fromTo(cards[3],
                    { y: 60, x: 30, opacity: 0 },
                    { y: 0, x: 0, opacity: 1, duration: 0.9, ease: 'power3.out' },
                    0.36
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-8 bg-black overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-sky-500/5 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto relative z-10">
                {/* Left Aligned Title */}
                <div className="mb-16 md:mb-24 max-w-5xl">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        {title}
                        <br />
                        <span className="text-neutral-500">{titleHighlight}</span>
                    </h2>
                </div>

                {/* Premium Bento Grid */}
                <div
                    ref={gridRef}
                    className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]"
                >
                    {/* Card 1: Large Left - Span 7 */}
                    <div className="group relative md:col-span-7 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-sky-500/30 transition-all duration-500">
                        {/* Animated Border */}
                        <AnimatedBorder delay={0.3} />

                        {/* Big Icon Background - Right Side */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 text-sky-500/10 group-hover:text-sky-500/15 transition-colors duration-500">
                            {features[0].icon}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-12">
                            <div className="max-w-md">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight group-hover:text-sky-100 transition-colors duration-300">
                                    {features[0].title}
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                    {features[0].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Medium Right - Span 5 */}
                    <div className="group relative md:col-span-5 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                        {/* Animated Border */}
                        <AnimatedBorder delay={0.5} />

                        {/* Big Icon Background - Right Side */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-52 h-40 md:h-52 text-cyan-500/10 group-hover:text-cyan-500/15 transition-colors duration-500">
                            {features[1].icon}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-10">
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight group-hover:text-cyan-100 transition-colors duration-300">
                                {features[1].title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                {features[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Medium Left - Span 5 */}
                    <div className="group relative md:col-span-5 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                        {/* Animated Border */}
                        <AnimatedBorder delay={0.7} />

                        {/* Big Icon Background - Right Side */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-52 h-40 md:h-52 text-blue-500/10 group-hover:text-blue-500/15 transition-colors duration-500">
                            {features[2].icon}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-10">
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 leading-tight group-hover:text-blue-100 transition-colors duration-300">
                                {features[2].title}
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                {features[2].description}
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Large Right - Span 7 */}
                    <div className="group relative md:col-span-7 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 overflow-hidden hover:border-sky-500/30 transition-all duration-500">
                        {/* Animated Border */}
                        <AnimatedBorder delay={0.9} />

                        {/* Big Icon Background - Right Side */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 text-sky-500/10 group-hover:text-sky-500/15 transition-colors duration-500">
                            {features[3].icon}
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 via-zinc-900/60 to-transparent z-10" />

                        {/* Content */}
                        <div className="relative z-20 h-full flex flex-col justify-center p-8 md:p-12">
                            <div className="max-w-md">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 leading-tight group-hover:text-sky-100 transition-colors duration-300">
                                    {features[3].title}
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                    {features[3].description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
