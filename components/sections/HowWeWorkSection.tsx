"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Scale, Milestone, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Begin with strategic alignment",
        description: "We understand your goals, customers, constraints, and success metrics — before making technology decisions.",
        icon: Target,
    },
    {
        number: "02",
        title: "Design for Scalability & Real-World Use",
        description: "We architect solutions that scale smoothly, integrate well, and enable long-term growth.",
        icon: Scale,
    },
    {
        number: "03",
        title: "Deliver With Structured & Transparent Milestones",
        description: "We execute in predictable sprints with clear communication, progress visibility, and risk transparency.",
        icon: Milestone,
    },
    {
        number: "04",
        title: "Optimize, Evolve & Scale",
        description: "We refine performance, improve reliability, and expand capability as your business grows.",
        icon: TrendingUp,
    },
];

export function HowWeWorkSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionBgRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background color transition - white when in section
            gsap.to(sectionBgRef.current, {
                backgroundColor: "#ffffff",
                duration: 0.8,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom 40%",
                    toggleActions: "play reverse play reverse",
                },
            });

            // Text color transitions for title
            const titleH2 = titleRef.current?.querySelector("h2");
            const titleSpan = titleRef.current?.querySelector("span");

            if (titleH2) {
                gsap.to(titleH2, {
                    color: "#171717",
                    duration: 0.8,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        toggleActions: "play reverse play reverse",
                    },
                });
            }

            if (titleSpan) {
                gsap.to(titleSpan, {
                    color: "#737373",
                    duration: 0.8,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom 40%",
                        toggleActions: "play reverse play reverse",
                    },
                });
            }

            // Card background and border transitions
            const cards = stepsRef.current?.querySelectorAll(".step-card");
            if (cards) {
                cards.forEach((card) => {
                    gsap.to(card, {
                        backgroundColor: "rgba(245, 245, 245, 0.8)",
                        borderColor: "rgba(229, 229, 229, 1)",
                        duration: 0.8,
                        ease: "power2.inOut",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 60%",
                            end: "bottom 40%",
                            toggleActions: "play reverse play reverse",
                        },
                    });

                    // Card title color
                    const cardTitle = card.querySelector(".card-title");
                    if (cardTitle) {
                        gsap.to(cardTitle, {
                            color: "#171717",
                            duration: 0.8,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        });
                    }

                    // Card description color
                    const cardDesc = card.querySelector(".card-desc");
                    if (cardDesc) {
                        gsap.to(cardDesc, {
                            color: "#525252",
                            duration: 0.8,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        });
                    }

                    // Icon box
                    const iconBox = card.querySelector(".icon-box");
                    if (iconBox) {
                        gsap.to(iconBox, {
                            backgroundColor: "rgba(249, 115, 22, 0.1)",
                            borderColor: "rgba(249, 115, 22, 0.3)",
                            duration: 0.8,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        });
                    }

                    // Icon color
                    const icon = card.querySelector(".icon-svg");
                    if (icon) {
                        gsap.to(icon, {
                            color: "#ea580c",
                            duration: 0.8,
                            ease: "power2.inOut",
                            scrollTrigger: {
                                trigger: containerRef.current,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        });
                    }
                });
            }

            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Steps Animation - staggered reveal
            const stepCards = stepsRef.current?.children;
            if (stepCards) {
                gsap.fromTo(
                    stepCards,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: stepsRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }

            // CTA Animation
            gsap.fromTo(
                ctaRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 90%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 overflow-hidden">
            {/* Animated Background */}
            <div
                ref={sectionBgRef}
                className="absolute inset-0 bg-black transition-colors"
                style={{ willChange: "background-color" }}
            />

            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Left Aligned Title */}
                <div ref={titleRef} className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        How we work <br />
                        <span className="text-neutral-500">From vision to reliable execution</span>
                    </h2>
                </div>

                {/* Steps Grid */}
                <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className={cn(
                                "step-card relative h-full p-8 md:p-10 rounded-3xl",
                                "border border-white/10 bg-zinc-900/50 backdrop-blur-sm",
                                "transition-all duration-500",
                                "hover:border-orange-500/30",
                                "hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.25)]"
                            )}>
                                {/* Gradient Overlay on Hover */}
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Connecting Line (visual element) */}
                                <div className="absolute -top-px left-10 w-px h-8 bg-gradient-to-b from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block" />

                                <div className="relative z-10">
                                    {/* Number & Icon Row */}
                                    <div className="flex items-center gap-6 mb-6">
                                        {/* Step Number */}
                                        <span className="text-6xl md:text-7xl font-bold text-orange-500/20 group-hover:text-orange-500/40 transition-colors duration-500 select-none">
                                            {step.number}
                                        </span>

                                        {/* Icon */}
                                        <div className="icon-box w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-500">
                                            <step.icon className="icon-svg w-7 h-7 text-white group-hover:text-orange-400 transition-colors duration-500" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="card-title text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="card-desc text-lg text-neutral-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div ref={ctaRef} className="flex justify-center pt-8">
                    <Link
                        href="/contact"
                        className="group relative flex h-14 items-center justify-center gap-2 rounded-full overflow-hidden bg-orange-600 px-10 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            Let's Talk
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
