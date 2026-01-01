"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Cpu, Shuffle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Zap,
        title: "10-day rapid delivery sprint",
        description: "From idea to working prototype in as fast as 10 days — with predictable, milestone-driven execution.",
    },
    {
        icon: Cpu,
        title: "Engineering first Problem solving",
        description: "Solutions are designed for scalability, security, and real-world performance — not just short-term output.",
    },
    {
        icon: Shuffle,
        title: "Flexible engagement model",
        description: "Project-based, team extension, or advisory support based on maturity and need.",
    },
    {
        icon: Rocket,
        title: "Startup Agility meets enterprise grade stability",
        description: "We adapt to your operating style — product-led, engineering-driven, or transformation-focused.",
    },
];

export function WhyChooseSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const imageOverlayRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline for left side
            const leftTl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                },
            });

            // Title animation - words slide up with stagger
            leftTl.fromTo(
                titleRef.current,
                {
                    y: 80,
                    opacity: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power4.out",
                }
            );

            // Description fade in
            leftTl.fromTo(
                descRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            // Image reveal animation - curtain effect
            leftTl.fromTo(
                imageOverlayRef.current,
                { scaleY: 1 },
                {
                    scaleY: 0,
                    duration: 1.2,
                    ease: "power4.inOut",
                    transformOrigin: "top",
                },
                "-=0.4"
            );

            // Image scale and parallax
            leftTl.fromTo(
                imageRef.current?.querySelector("img"),
                { scale: 1.3 },
                {
                    scale: 1,
                    duration: 1.5,
                    ease: "power3.out",
                },
                "-=1.2"
            );

            // Cards animation - staggered slide from right with rotation
            const cards = cardsRef.current?.children;
            if (cards) {
                gsap.fromTo(
                    cards,
                    {
                        x: 100,
                        opacity: 0,
                        rotateY: 15,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        rotateY: 0,
                        duration: 0.9,
                        stagger: 0.12,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                        },
                    }
                );

                // Icon pulse animation on each card
                Array.from(cards).forEach((card, index) => {
                    const icon = card.querySelector(".icon-container");
                    if (icon) {
                        gsap.fromTo(
                            icon,
                            { scale: 0, rotate: -180 },
                            {
                                scale: 1,
                                rotate: 0,
                                duration: 0.6,
                                ease: "back.out(1.7)",
                                delay: 0.3 + index * 0.12,
                                scrollTrigger: {
                                    trigger: cardsRef.current,
                                    start: "top 80%",
                                },
                            }
                        );
                    }
                });
            }

            // Floating animation for the image (subtle parallax on scroll)
            gsap.to(imageRef.current, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-zinc-950 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                {/* Blueprint/Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Side - Title, Description & Image */}
                    <div className="flex flex-col h-full">
                        {/* Title */}
                        <div className="mb-8 overflow-hidden">
                            <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Why Choose <br />
                                <span className="text-orange-500">Zylex</span>
                            </h2>
                            <p ref={descRef} className="text-xl text-neutral-400 max-w-lg leading-relaxed">
                                With Zylex, you don't just get faster delivery — you get structured execution with clarity, consistency, and reliability.
                            </p>
                        </div>

                        {/* Image - Sharp Corners, Fills Remaining Space */}
                        <div ref={imageRef} className="relative flex-1 min-h-[300px] overflow-hidden border border-white/10">
                            <Image
                                src="/why-choose/team-collab.png"
                                alt="Zylex Team Collaboration"
                                fill
                                className="object-cover"
                            />
                            {/* Curtain Reveal Overlay */}
                            <div
                                ref={imageOverlayRef}
                                className="absolute inset-0 bg-zinc-950 z-10 origin-top"
                            />
                            {/* Gradient Overlay for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent z-[5]" />
                        </div>
                    </div>

                    {/* Right Side - Feature Cards */}
                    <div ref={cardsRef} className="flex flex-col justify-between h-full gap-5" style={{ perspective: "1000px" }}>
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative flex-1"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className={cn(
                                    "relative h-full p-6",
                                    "border border-white/10 bg-zinc-900/50 backdrop-blur-sm",
                                    "transition-all duration-500",
                                    "hover:border-orange-500/30 hover:bg-zinc-900/80",
                                    "hover:shadow-[0_0_30px_-12px_rgba(249,115,22,0.25)]",
                                    "hover:translate-x-2"
                                )}>
                                    {/* Hover Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Left accent line on hover */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                    <div className="relative z-10 flex gap-5 items-start h-full">
                                        {/* Icon */}
                                        <div className="icon-container flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-500">
                                            <feature.icon className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-500" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-50 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
