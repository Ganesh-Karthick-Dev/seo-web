"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    ShoppingCart,
    Code2,
    Landmark,
    HeartPulse,
    Truck,
    Factory,
    GraduationCap,
    Building2,
    Plane,
    Film,
    Shield,
    Zap,
    Wifi,
    Briefcase,
    BookOpen,
    Car,
    HardHat,
    UtensilsCrossed
} from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        title: "E-Commerce & Retail",
        subtitle: "Dominating the Digital Storefront",
        description: "Stop settling for systems that buckle under pressure. We build high-performance marketplaces and omnichannel ecosystems designed for longevity. The result? Flawless checkouts and inventory that never loses count.",
        icon: ShoppingCart,
        gradient: "from-orange-500/30 via-amber-500/20 to-transparent",
        accentColor: "text-orange-400",
        borderGlow: "group-hover:shadow-orange-500/20"
    },
    {
        title: "SaaS & Technology Product Companies",
        subtitle: "Architecture That Clears the Way",
        description: "Eliminate technical debt and accelerate your evolution. We build solid foundations that turn your tech stack into a weapon, moving you from MVP to market leader at record speed.",
        icon: Code2,
        gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
        accentColor: "text-blue-400",
        borderGlow: "group-hover:shadow-blue-500/20"
    },
    {
        title: "Fintech & Financial Services",
        subtitle: "Secure Finance. Absolute Precision",
        description: "In finance, \"compliance\" is the floor, not the ceiling. We build secure, high-performance payment platforms with total transparency. You'll never wonder \"Where is it?\" with our predictable delivery.",
        icon: Landmark,
        gradient: "from-emerald-500/30 via-green-500/20 to-transparent",
        accentColor: "text-emerald-400",
        borderGlow: "group-hover:shadow-emerald-500/20"
    },
    {
        title: "Healthcare & HealthTech",
        subtitle: "Frictionless Flow for Patient Care",
        description: "We build interoperable portals and health platforms that prioritize data integrity. Reliability isn't optional here—we handle the technical complexity so you can focus on the human impact.",
        icon: HeartPulse,
        gradient: "from-rose-500/30 via-pink-500/20 to-transparent",
        accentColor: "text-rose-400",
        borderGlow: "group-hover:shadow-rose-500/20"
    },
    {
        title: "Logistics, Supply Chain & Transportation",
        subtitle: "Operations That Never Miss a Beat",
        description: "High-movement environments demand high-reliability tech. We build logistics platforms and operational dashboards that turn data into direction. Predictable execution (No Black Boxes) for a world that never stops.",
        icon: Truck,
        gradient: "from-amber-500/30 via-yellow-500/20 to-transparent",
        accentColor: "text-amber-400",
        borderGlow: "group-hover:shadow-amber-500/20"
    },
    {
        title: "Manufacturing & Industrial",
        subtitle: "Digitizing the Industrial Floor",
        description: "Workflow automation built for the plant floor, not the boardroom. We build for longevity, ensuring your production systems are as robust as the machines they manage.",
        icon: Factory,
        gradient: "from-slate-500/30 via-zinc-500/20 to-transparent",
        accentColor: "text-slate-400",
        borderGlow: "group-hover:shadow-slate-500/20"
    },
    {
        title: "EdTech & Learning Platforms",
        subtitle: "Learning Systems That Scale with You",
        description: "Don't let an enrollment spike crash your classroom. We build virtual learning environments designed for massive usage. We trade technical noise for predictable performance, keeping your students connected.",
        icon: GraduationCap,
        gradient: "from-violet-500/30 via-purple-500/20 to-transparent",
        accentColor: "text-violet-400",
        borderGlow: "group-hover:shadow-violet-500/20"
    },
    {
        title: "Real Estate",
        subtitle: "Transaction Tech Built for Speed",
        description: "Property listing platforms and transaction workflows that remove the friction from discovery. We focus on the outcome—faster engagement and smoother operations—backed by an unbreakable foundation.",
        icon: Building2,
        gradient: "from-teal-500/30 via-cyan-500/20 to-transparent",
        accentColor: "text-teal-400",
        borderGlow: "group-hover:shadow-teal-500/20"
    },
    {
        title: "Hospitality, Travel & Tourism",
        subtitle: "Guest Journeys Reimagined",
        description: "Booking platforms and customer portals that stay invisible so your service can stand out. We build for the guest journey, ensuring your tech stack handles peak season with zero stress.",
        icon: Plane,
        gradient: "from-sky-500/30 via-blue-500/20 to-transparent",
        accentColor: "text-sky-400",
        borderGlow: "group-hover:shadow-sky-500/20"
    },
    {
        title: "Media, Entertainment & Digital Experiences",
        subtitle: "Content Hubs That Command Attention",
        description: "Why be flat when you can be immersive? We build interactive 3D sites and storytelling platforms with clear communication. Catchy experiences, high-performance results.",
        icon: Film,
        gradient: "from-fuchsia-500/30 via-pink-500/20 to-transparent",
        accentColor: "text-fuchsia-400",
        borderGlow: "group-hover:shadow-fuchsia-500/20"
    },
    {
        title: "Insurance & InsurTech",
        subtitle: "Underwriting Accuracy at Scale",
        description: "Precision engineering for an industry that demands it. We support insurers with claims platforms and risk analytics built for performance and compliance. Solid foundations for complex risk.",
        icon: Shield,
        gradient: "from-indigo-500/30 via-blue-500/20 to-transparent",
        accentColor: "text-indigo-400",
        borderGlow: "group-hover:shadow-indigo-500/20"
    },
    {
        title: "Energy, Utilities & Environment",
        subtitle: "Visibility Across Distributed Assets",
        description: "Improving safety and performance requires data you can trust. We build monitoring dashboards and asset management platforms that solve the visibility problem, keeping critical infrastructure stable and safe.",
        icon: Zap,
        gradient: "from-yellow-500/30 via-lime-500/20 to-transparent",
        accentColor: "text-yellow-400",
        borderGlow: "group-hover:shadow-yellow-500/20"
    },
    {
        title: "Telecom & Connectivity Services",
        subtitle: "Self-Service with Style and Speed",
        description: "Stop frustrating your customers with legacy friction. We design portals and billing systems with predictable milestones. Improved service delivery, total operational control.",
        icon: Wifi,
        gradient: "from-cyan-500/30 via-teal-500/20 to-transparent",
        accentColor: "text-cyan-400",
        borderGlow: "group-hover:shadow-cyan-500/20"
    },
    {
        title: "Professional Services & Consulting Firms",
        subtitle: "Execution Efficiency for Elite Teams",
        description: "Delivery management platforms that fuel your team's utilization. Success isn't just \"shipping the code\"—it's providing the tools that help your team collaboration and growth.",
        icon: Briefcase,
        gradient: "from-neutral-500/30 via-stone-500/20 to-transparent",
        accentColor: "text-neutral-400",
        borderGlow: "group-hover:shadow-neutral-500/20"
    },
    {
        title: "Education",
        subtitle: "Campus Infrastructure (Built for the Long Term)",
        description: "Replace fragmented academic systems with a cohesive digital foundation. We build administration portals and collaboration platforms that scale with your mission, not just your enrollment.",
        icon: BookOpen,
        gradient: "from-purple-500/30 via-violet-500/20 to-transparent",
        accentColor: "text-purple-400",
        borderGlow: "group-hover:shadow-purple-500/20"
    },
    {
        title: "Automotive & Mobility",
        subtitle: "Mobility Apps That Keep You Moving",
        description: "From vehicle configurators to dealership systems, we build apps that feel great and perform even better. Better customer journeys, smoother operations—digital presence with zero drag.",
        icon: Car,
        gradient: "from-red-500/30 via-rose-500/20 to-transparent",
        accentColor: "text-red-400",
        borderGlow: "group-hover:shadow-red-500/20"
    },
    {
        title: "Construction, Infrastructure & Engineering",
        subtitle: "Project Certainty Through Predictable Sprints",
        description: "Infrastructure-heavy businesses can't afford the \"Where is it?\" trap. We build field-tracking systems and vendor dashboards using transparent execution. Engineering certainty for a world of concrete.",
        icon: HardHat,
        gradient: "from-orange-600/30 via-amber-600/20 to-transparent",
        accentColor: "text-orange-500",
        borderGlow: "group-hover:shadow-orange-600/20"
    },
    {
        title: "Food, Delivery & On-Demand Services",
        subtitle: "Real-Time Powerhouses for Infinite Demand",
        description: "On-demand startups live or die by execution. We build the ordering platforms and partner portals needed for massive scale, ensuring your service never misses a beat.",
        icon: UtensilsCrossed,
        gradient: "from-lime-500/30 via-green-500/20 to-transparent",
        accentColor: "text-lime-400",
        borderGlow: "group-hover:shadow-lime-500/20"
    },
];

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
