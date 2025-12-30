"use client";

import { useEffect, useRef } from "react";
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
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.fromTo(headerRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 90%",
                    }
                }
            );

            // Cards Stagger Animation
            const cards = cardsRef.current?.children;
            if (cards) {
                gsap.fromTo(cards,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Subtle Orange Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="text-center mb-20 opacity-0"> {/* Initial opacity 0 to prevent flash */}
                    <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6">
                        What’s Getting in the Way of Your Growth?
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Sound familiar? These are the challenges holding back businesses at your stage:
                    </p>
                </div>

                {/* Grid */}
                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challenges.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 opacity-0" // Initial opacity 0
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-transparent group-hover:from-orange-500/10 transition-all duration-500 rounded-2xl" />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-500">
                                    <item.icon className="w-6 h-6 text-orange-500" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-100 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
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
