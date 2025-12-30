"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Code2,
    Smartphone,
    Box,
    RefreshCw,
    ShoppingBag,
    Bot,
    Cloud,
    Lightbulb,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Custom Software Development and Product Engineering",
        description: "We build scalable, secure, and future-ready custom applications designed for your unique business needs.",
        cta: "Build Your Custom Solution",
        icon: Code2,
        gradient: "from-orange-500/20 to-amber-500/5"
    },
    {
        title: "Web and Mobile Application Development",
        description: "We create high-performance web and mobile applications that deliver exceptional user experiences.",
        cta: "Start your App project",
        icon: Smartphone,
        gradient: "from-blue-500/20 to-cyan-500/5"
    },
    {
        title: "3D Website Development",
        description: "We build immersive 3D websites that create interactive, visually stunning brand experiences.",
        cta: "Explore 3D possibilities",
        icon: Box,
        gradient: "from-purple-500/20 to-pink-500/5"
    },
    {
        title: "Digital Transformation Services",
        description: "We modernize legacy systems and re-architect applications while maintaining business continuity.",
        cta: "Begin your Transformation",
        icon: RefreshCw,
        gradient: "from-green-500/20 to-emerald-500/5"
    },
    {
        title: "E-Commerce",
        description: "We build scalable, high-performance ecommerce platforms that enhance customer experience, boost conversions, and support sustainable growth.",
        cta: "Grow your commerce Business",
        icon: ShoppingBag,
        gradient: "from-red-500/20 to-orange-500/5"
    },
    {
        title: "AI, ML and Automation",
        description: "We automate workflows and deliver practical AI solutions with real business impact.",
        cta: "Discover AI solutions",
        icon: Bot,
        gradient: "from-indigo-500/20 to-violet-500/5"
    },
    {
        title: "Cloud and DevOps Engineering",
        description: "We modernize cloud infrastructure and automate delivery pipelines for reliable, faster releases.",
        cta: "Modernize your Infrastructure",
        icon: Cloud,
        gradient: "from-sky-500/20 to-blue-500/5"
    },
    {
        title: "IT Consulting",
        description: "We act as your strategic technology partner, helping you plan, validate, and execute with clarity and confidence.",
        cta: "Get Expert Guidance",
        icon: Lightbulb,
        gradient: "from-yellow-500/20 to-amber-500/5"
    }
];

export function ServicesStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

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

            // Cards Stacking Animation
            const cards = cardsRef.current?.children;
            if (cards) {
                Array.from(cards).forEach((card, index) => {
                    ScrollTrigger.create({
                        trigger: card,
                        start: "top top+=150",
                        end: "bottom top",
                        scrub: true,
                    });
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 bg-black">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Left Aligned Title */}
                <div className="mb-24 max-w-4xl">
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        Where we help you <br />
                        <span className="text-neutral-500">Build, Modernize and Scale</span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
                        Whether you're launching your first product or transforming enterprise systems, we provide the expertise you need at every stage.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div ref={cardsRef} className="flex flex-col gap-8 pb-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="sticky top-32 group"
                            style={{ top: `${150 + index * 20}px` }}
                        >
                            <div className={cn(
                                "relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/30 hover:shadow-[0_0_50px_-12px_rgba(249,115,22,0.3)]",
                                "h-[400px] flex flex-col md:flex-row"
                            )}>

                                {/* Gradient Background */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-20 transition-opacity duration-500 group-hover:opacity-30",
                                    service.gradient
                                )} />

                                {/* Content Side */}
                                <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-neutral-400 mb-8 max-w-xl leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-400 transition-colors group/link"
                                    >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>

                                {/* Visual Side (Hero Icon) */}
                                <div className="relative w-full md:w-1/3 bg-white/5 border-l border-white/5 overflow-hidden hidden md:flex items-center justify-center group-hover:bg-white/10 transition-colors duration-500">

                                    {/* Background Decor */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />

                                    {/* Animated Rings */}
                                    <div className="absolute w-64 h-64 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute w-48 h-48 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]" />

                                    {/* Large Hero Icon */}
                                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                                        <div className={cn(
                                            "absolute inset-0 blur-2xl opacity-30 bg-gradient-to-tr",
                                            service.gradient
                                        )} />
                                        <service.icon
                                            strokeWidth={1}
                                            className={cn(
                                                "w-32 h-32 drop-shadow-2xl",
                                                "text-white/90"
                                            )}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
