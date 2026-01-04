"use client";

import { useEffect, useRef } from "react";
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
        description: "We design and develop scalable ecommerce platforms, multi-vendor marketplaces, order and inventory systems, and seamless omnichannel shopping experiences that improve conversions, speed, and operational performance.",
        icon: ShoppingCart,
        gradient: "from-orange-500/30 via-amber-500/20 to-transparent",
        accentColor: "text-orange-400",
        borderGlow: "group-hover:shadow-orange-500/20"
    },
    {
        title: "SaaS & Technology Product Companies",
        description: "We support product teams with platform engineering, MVP development, feature scaling, architecture modernization, and long-term product evolution for SaaS and B2B technology platforms.",
        icon: Code2,
        gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
        accentColor: "text-blue-400",
        borderGlow: "group-hover:shadow-blue-500/20"
    },
    {
        title: "Fintech & Financial Services",
        description: "We work with banks, fintech startups, and financial institutions to build secure platforms for payments, lending, investment management, compliance, and digital banking — designed for scale, performance, and regulatory alignment.",
        icon: Landmark,
        gradient: "from-emerald-500/30 via-green-500/20 to-transparent",
        accentColor: "text-emerald-400",
        borderGlow: "group-hover:shadow-emerald-500/20"
    },
    {
        title: "Healthcare & HealthTech",
        description: "We help healthcare providers, health startups, and medical platforms build patient portals, telehealth solutions, workflow systems, and interoperable health platforms that improve accessibility, efficiency, and care coordination.",
        icon: HeartPulse,
        gradient: "from-rose-500/30 via-pink-500/20 to-transparent",
        accentColor: "text-rose-400",
        borderGlow: "group-hover:shadow-rose-500/20"
    },
    {
        title: "Logistics, Supply Chain & Transportation",
        description: "We build logistics and operations platforms including shipment tracking, fleet systems, route optimization, warehouse management, and real-time operations dashboards for high-movement environments.",
        icon: Truck,
        gradient: "from-amber-500/30 via-yellow-500/20 to-transparent",
        accentColor: "text-amber-400",
        borderGlow: "group-hover:shadow-amber-500/20"
    },
    {
        title: "Manufacturing & Industrial",
        description: "We help manufacturers digitize operations with workflow automation, production management systems, IoT dashboards, analytics platforms, and process optimization tools built for reliability and plant-level execution.",
        icon: Factory,
        gradient: "from-slate-500/30 via-zinc-500/20 to-transparent",
        accentColor: "text-slate-400",
        borderGlow: "group-hover:shadow-slate-500/20"
    },
    {
        title: "EdTech & Learning Platforms",
        description: "We build learning management systems, assessment platforms, content delivery applications, student portals, and virtual learning environments that scale with enrollments and usage demands.",
        icon: GraduationCap,
        gradient: "from-violet-500/30 via-purple-500/20 to-transparent",
        accentColor: "text-violet-400",
        borderGlow: "group-hover:shadow-violet-500/20"
    },
    {
        title: "Real Estate",
        description: "We develop property listing platforms, real-estate marketplaces, tenant management systems, virtual tour websites, and transaction workflows that streamline discovery, engagement, and operations.",
        icon: Building2,
        gradient: "from-teal-500/30 via-cyan-500/20 to-transparent",
        accentColor: "text-teal-400",
        borderGlow: "group-hover:shadow-teal-500/20"
    },
    {
        title: "Hospitality, Travel & Tourism",
        description: "We build booking platforms, customer engagement portals, experience websites, operations panels, and mobile applications that enhance guest journeys and improve service delivery.",
        icon: Plane,
        gradient: "from-sky-500/30 via-blue-500/20 to-transparent",
        accentColor: "text-sky-400",
        borderGlow: "group-hover:shadow-sky-500/20"
    },
    {
        title: "Media, Entertainment & Digital Experiences",
        description: "We create high-performance content platforms, interactive 3D websites, storytelling experiences, streaming dashboards, and marketing experience hubs focused on engagement and performance.",
        icon: Film,
        gradient: "from-fuchsia-500/30 via-pink-500/20 to-transparent",
        accentColor: "text-fuchsia-400",
        borderGlow: "group-hover:shadow-fuchsia-500/20"
    },
    {
        title: "Insurance & InsurTech",
        description: "We support insurers with claims automation platforms, underwriting workflows, agent portals, risk analytics dashboards, and policy management systems designed for performance and compliance.",
        icon: Shield,
        gradient: "from-indigo-500/30 via-blue-500/20 to-transparent",
        accentColor: "text-indigo-400",
        borderGlow: "group-hover:shadow-indigo-500/20"
    },
    {
        title: "Energy, Utilities & Environment",
        description: "We build monitoring dashboards, asset management platforms, reporting systems, and operations control tools that help organizations improve visibility, safety, and performance across distributed environments.",
        icon: Zap,
        gradient: "from-yellow-500/30 via-lime-500/20 to-transparent",
        accentColor: "text-yellow-400",
        borderGlow: "group-hover:shadow-yellow-500/20"
    },
    {
        title: "Telecom & Connectivity Services",
        description: "We design customer self-service portals, provisioning workflows, billing systems, operational dashboards, and network-support platforms that improve service delivery and operational control.",
        icon: Wifi,
        gradient: "from-cyan-500/30 via-teal-500/20 to-transparent",
        accentColor: "text-cyan-400",
        borderGlow: "group-hover:shadow-cyan-500/20"
    },
    {
        title: "Professional Services & Consulting Firms",
        description: "We develop delivery management platforms, workflow automation systems, CRM extensions, proposal and reporting systems that improve collaboration, utilization, and execution efficiency.",
        icon: Briefcase,
        gradient: "from-neutral-500/30 via-stone-500/20 to-transparent",
        accentColor: "text-neutral-400",
        borderGlow: "group-hover:shadow-neutral-500/20"
    },
    {
        title: "Education",
        description: "We partner with universities and training organizations to build academic portals, administration systems, learning applications, and collaboration platforms that enhance digital learning infrastructure.",
        icon: BookOpen,
        gradient: "from-purple-500/30 via-violet-500/20 to-transparent",
        accentColor: "text-purple-400",
        borderGlow: "group-hover:shadow-purple-500/20"
    },
    {
        title: "Automotive & Mobility",
        description: "We create platforms for dealership operations, vehicle configurators, inventory systems, mobility apps, and digital experience solutions for automotive and EV-based businesses.",
        icon: Car,
        gradient: "from-red-500/30 via-rose-500/20 to-transparent",
        accentColor: "text-red-400",
        borderGlow: "group-hover:shadow-red-500/20"
    },
    {
        title: "Construction, Infrastructure & Engineering",
        description: "We build project management platforms, workflow automation tools, field-tracking systems, vendor and contract dashboards, and reporting applications for infrastructure-heavy businesses.",
        icon: HardHat,
        gradient: "from-orange-600/30 via-amber-600/20 to-transparent",
        accentColor: "text-orange-500",
        borderGlow: "group-hover:shadow-orange-600/20"
    },
    {
        title: "Food, Delivery & On-Demand Services",
        description: "We support on-demand and delivery startups with ordering platforms, operations dashboards, partner/vendor portals, and mobile applications optimized for real-time execution.",
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
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div ref={headerRef} className="mb-16 md:mb-24 max-w-4xl">
                    <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-4">
                        Industries We Serve
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        The industries where our services create{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                            the strongest business and operational impact.
                        </span>
                    </h2>
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
                                    "group relative rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-white/[0.08] overflow-hidden",
                                    "hover:border-white/20 transition-all duration-500 cursor-pointer",
                                    "hover:scale-[1.02] hover:shadow-2xl",
                                    industry.borderGlow
                                )}
                            >
                                {/* Gradient Background */}
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                        industry.gradient
                                    )}
                                />

                                {/* Glossy Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                                {/* Content */}
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    {/* Icon */}
                                    <div className={cn(
                                        "w-14 h-14 rounded-xl flex items-center justify-center mb-6",
                                        "bg-white/[0.05] border border-white/[0.08]",
                                        "group-hover:bg-white/[0.08] group-hover:border-white/15 transition-all duration-300"
                                    )}>
                                        <Icon
                                            className={cn(
                                                "w-7 h-7 transition-all duration-300",
                                                "text-white/70 group-hover:text-white",
                                                `group-hover:${industry.accentColor}`
                                            )}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-neutral-400 leading-relaxed flex-grow group-hover:text-neutral-300 transition-colors duration-300">
                                        {industry.description}
                                    </p>

                                    {/* Hover Indicator */}
                                    <div className="mt-6 pt-4 border-t border-white/[0.05]">
                                        <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                                            <span>Learn More</span>
                                            <svg
                                                className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
