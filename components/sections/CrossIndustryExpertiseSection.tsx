"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedCounter } from "@/components/ui/animated-counter";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { countTo: 10, suffix: "M+", label: "Transactions Processed" },
    { countTo: 50, suffix: "+", label: "Industries Served" },
    { countTo: 99, suffix: ".9%", label: "System Uptime" },
];

export function CrossIndustryExpertiseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const textBlockRef = useRef<HTMLDivElement>(null);
    const glassCardRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const floatingOrbsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating orbs continuous animation
            const orbs = floatingOrbsRef.current?.children;
            if (orbs) {
                Array.from(orbs).forEach((orb, i) => {
                    gsap.to(orb, {
                        y: `${(i % 2 === 0 ? -1 : 1) * 30}`,
                        x: `${(i % 3 === 0 ? -1 : 1) * 20}`,
                        duration: 4 + i * 0.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                    });
                });
            }

            // Title animation
            gsap.fromTo(
                titleRef.current,
                { x: -80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    },
                }
            );

            // Text block parallax fade
            gsap.fromTo(
                textBlockRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: textBlockRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Glass card 3D entrance
            gsap.fromTo(
                glassCardRef.current,
                {
                    y: 80,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: glassCardRef.current,
                        start: "top 85%",
                    },
                }
            );


        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full py-32 md:py-40 bg-black overflow-hidden"
        >
            {/* Floating Orbs Background */}
            <div ref={floatingOrbsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full blur-[80px]" />
                <div className="absolute top-1/2 right-[5%] w-96 h-96 bg-gradient-to-br from-indigo-500/15 to-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-[30%] w-64 h-64 bg-gradient-to-br from-cyan-500/15 to-teal-500/10 rounded-full blur-[70px]" />
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title Section - Same as Home Page */}
                <div className="mb-20 max-w-5xl">
                    <h2
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        Why Cross-Industry Expertise Matters <br />
                        <span className="text-neutral-500">
                            Engineered foundations built on deep understanding.
                        </span>
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Side - Text Content */}
                    <div ref={textBlockRef} className="space-y-8">
                        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                            Our technology solutions for industries aren&apos;t just adapted templates—they&apos;re
                            <span className="text-white font-medium"> engineered foundations</span> built on deep understanding of your market&apos;s specific challenges. We&apos;ve shipped platforms that handle millions in transactions, treatment records that save lives, and supply chain systems that never sleep.
                        </p>
                        <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light">
                            When you partner with Zylex for custom software for businesses, you get more than developers. You get
                            <span className="text-white font-medium"> engineers who understand</span> regulatory compliance, operational complexity, and the technical precision your industry demands. We don&apos;t just build software—
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
                                we build competitive advantages
                            </span>.
                        </p>
                    </div>

                    {/* Right Side - Glassmorphic Card */}
                    <div ref={glassCardRef} className="relative">
                        {/* Main Glass Card */}
                        <div className="relative rounded-3xl overflow-hidden">
                            {/* Glass Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl" />

                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-3xl border border-white/10" />

                            {/* Card Content */}
                            <div className="relative z-10 p-8 md:p-10">
                                {/* Quote Section */}
                                <div className="mb-10">
                                    <div className="text-6xl text-cyan-500/30 font-serif leading-none mb-4">&ldquo;</div>
                                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                                        We don&apos;t just build software—we build
                                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> competitive advantages</span>.
                                    </p>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

                                {/* Stats Grid with Animated Counter */}
                                <div ref={statsRef} className="grid grid-cols-3 gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center">
                                            <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center">
                                                <AnimatedCounter
                                                    from={0}
                                                    to={stat.countTo}
                                                    suffix={stat.suffix}
                                                    duration={2.5}
                                                />
                                            </div>
                                            <div className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/30 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 z-20">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-50" />
                                <div className="relative px-5 py-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-2xl">
                                    <span className="text-sm font-bold text-white uppercase tracking-wider">Proven Results</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

