"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gem, Eye, Handshake, Target, ListChecks } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
    {
        icon: Gem,
        title: "Engineering Excellence (No Band-Aids)",
        description: "We build for longevity and performance, not just the launch day. You get a solid foundation that handles 10x growth, not a quick fix that needs constant rework.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
    },
    {
        icon: Eye,
        title: "Transparency First (No Black Boxes)",
        description: "You'll never have to wonder \"Where is it?\" We trade uncertainty for predictable sprints and clear communication, so you always know exactly where your project stands.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
    },
    {
        icon: Target,
        title: "Outcome Over Output (Result-Driven)",
        description: "We don't just ship code; we solve business problems. As a digital solutions provider, we measure success by your impact—faster launches, smoother operations, and technology that fuels your growth.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
    },
    {
        icon: Handshake,
        title: "Long-Term Partnership (We're In It With You)",
        description: "We don't just \"hand over\" and disappear. We stay invested in your success, ensuring your systems evolve and thrive as your business reaches new milestones.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
    },
    {
        icon: ListChecks,
        title: "Structured Execution (Enterprise Rigor, Startup Speed)",
        description: "You get the professional discipline of a big consultancy with the energy and agility of a team that actually moves as fast as you do. As a software services firm, we combine enterprise-grade standards with startup velocity.",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/30",
    },
];

export function AboutValuesSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation - slide up with clip reveal
            gsap.fromTo(titleRef.current,
                {
                    y: 80,
                    opacity: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Cards cascading parallax - STRONG effect with continuous movement
            // NO OPACITY - all cards visible, only Y position changes
            const cards = cardsRef.current?.children;
            if (cards) {
                Array.from(cards).forEach((card, index) => {
                    // Each subsequent card has more travel distance
                    // Cards start below, align, then continue moving up
                    const startOffset = index * 200; // Start: 0, 200, 400, 600, 800
                    const endOffset = -(index * 100); // End: 0, -100, -200, -300, -400

                    // Set initial position - FULLY VISIBLE
                    gsap.set(card, { y: startOffset });

                    // Parallax scroll animation - only Y position, no opacity
                    gsap.to(card, {
                        y: endOffset,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 90%",
                            end: "bottom 20%",
                            scrub: 0.3 + (index * 0.15), // Different scrub speeds for layered effect
                        },
                    });

                    // Icon animation - just scale bounce, no opacity
                    const icon = card.querySelector(".icon-wrapper");
                    if (icon) {
                        gsap.fromTo(icon,
                            {
                                scale: 0.8,
                                rotate: -30,
                            },
                            {
                                scale: 1,
                                rotate: 0,
                                duration: 0.6,
                                ease: "back.out(2)",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "top 80%",
                                },
                            }
                        );
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-32 bg-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <div ref={titleRef} className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        What Drives Us <br />
                        <span className="text-neutral-500 text-3xl md:text-4xl block mt-4">The principles that keep your business moving forward.</span>
                    </h2>
                </div>

                {/* Cards Grid - Horizontal Row */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                >
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col"
                        >
                            {/* Card */}
                            <div className="relative p-8 h-72 flex items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/90 hover:scale-[1.02] hover:-translate-y-1">
                                {/* Colored glow on hover */}
                                <div className={`absolute inset-0 rounded-3xl ${value.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className={`icon-wrapper relative z-10 w-24 h-24 flex items-center justify-center rounded-2xl ${value.bgColor} ${value.borderColor} border transition-all duration-500 group-hover:scale-110`}>
                                    <value.icon className={`w-12 h-12 ${value.color}`} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title & Description - Below Card */}
                            <div className="card-text mt-8 text-left">
                                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                                    {value.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
