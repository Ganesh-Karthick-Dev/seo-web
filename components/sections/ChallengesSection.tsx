"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Clock,
    Layers,
    TrendingUp,
    AlertTriangle,
    Database
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
    {
        title: "Projects take longer than expected",
        description: "Timelines extend, progress slows, and momentum becomes harder to sustain.",
        icon: Clock,
    },
    {
        title: "Complex Integration creates fragile systems",
        description: "Multiple tools and systems create dependencies that lead to instability and performance issues.",
        icon: Layers,
    },
    {
        title: "Scalability and performance break under growth",
        description: "Systems struggle under growing load, leading to latency and downtime risk.",
        icon: TrendingUp,
    },
    {
        title: "Lack of Standardized Engineering Practices",
        description: "Inconsistent workflows and weak testing lead to rework, production issues, and delivery uncertainty.",
        icon: AlertTriangle,
    },
    {
        title: "Legacy systems and Technical Debt",
        description: "Outdated platforms and rigid architectures slow innovation, increase risk, and limit progress.",
        icon: Database,
    },
];

export function ChallengesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Header Text Reveal (Word by Word)
            const titleWords = headerRef.current?.querySelectorAll(".word");
            if (titleWords) {
                gsap.fromTo(titleWords,
                    { y: 50, opacity: 0, rotateX: -45 },
                    {
                        y: 0,
                        opacity: 1,
                        rotateX: 0,
                        duration: 1,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headerRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }

            // 2. Cards 3D Stagger Reveal
            const cards = gridRef.current?.children;
            if (cards) {
                gsap.fromTo(cards,
                    {
                        y: 100,
                        opacity: 0,
                        scale: 0.9,
                        rotateX: -15,
                        transformPerspective: 1000
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotateX: 0,
                        duration: 1.2,
                        stagger: 0.15,
                        ease: "power3.out",
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

    // Mouse Follow Logic for Spotlight
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (gridRef.current) {
            const rect = gridRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full py-32 bg-black overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-[1000px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        {/* Split text manually for animation */}
                        {"What’s Getting in the Way of Your Growth?".split(" ").map((word, i) => (
                            <span key={i} className="word inline-block mr-3 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                                {word}
                            </span>
                        ))}
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Sound familiar? These are the challenges holding back businesses at your stage:
                    </p>
                </div>

                {/* Spotlight Grid */}
                <div
                    ref={gridRef}
                    onMouseMove={handleMouseMove}
                    className="group grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
                >
                    {/* Spotlight Overlay (Follows Mouse) */}
                    <div
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 40%)`
                        }}
                    />

                    {challenges.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-full p-8 rounded-3xl bg-neutral-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-500"
                        >
                            {/* Card Spotlight (Individual) */}
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.05), transparent 40%)`
                                }}
                            />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon Box */}
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 flex items-center justify-center mb-8 group-hover/card:scale-110 transition-transform duration-500">
                                    <item.icon className="w-7 h-7 text-orange-400" />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-orange-100 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
