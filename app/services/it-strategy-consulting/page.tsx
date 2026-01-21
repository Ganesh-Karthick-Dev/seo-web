

import React from "react";
import { Users, Target, Server, TrendingUp, Cog, Lightbulb, Building2, Settings, Layers, Search, Paintbrush, Code2, Rocket, Monitor, Award, Shield, MessageSquare, RefreshCw, Handshake, Lock, Network } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CardData } from "@/components/ui/scroll-hero-section";

// Features - The Strategic Ceilings
const features = [
    {
        icon: <Target className="w-full h-full" />,
        title: "The Strategic Blindspot (Legacy Friction)",
        description: "Vision requires a technical engine that can actually keep up. We provide the it strategy consulting needed to identify the friction points holding you back, ensuring every investment is a deliberate step toward market dominance—not just a line item in a vendor's budget.",
    },
    {
        icon: <Cog className="w-full h-full" />,
        title: "The Execution Void (Process Rigidity)",
        description: "Brittle workflows are the silent killer of innovation. We harden your operations through structured process consulting, stabilizing your environment and destroying the technical ceilings that limit your team's terminal velocity.",
    },
    {
        icon: <Server className="w-full h-full" />,
        title: "The Complexity Trap (Operational Anchors)",
        description: "Scale shouldn't feel like pulling teeth. We re-engineer your infrastructure architecture across cloud, hybrid, and on-prem environments—replacing 'reactive troubleshooting' with the unshakeable reliability your future-scale demands.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "The Transformation Gap (Architecture Failure)",
        description: "Modernization without discipline is a liability. We deliver tech consulting with surgical architectural rigor, ensuring your roadmap is protected by unshakeable governance and future-ready foundations.",
    },
];

// Delivery Framework - 5 Phases for ServiceScrollSection
const deliveryPhases: CardData[] = [
    {
        badgeText: "Phase 1",
        badgeColor: "#06B6D4", // Cyan
        title: "Strategic Audit & Data Discovery",
        description: "We assess the debt, identify the risks, and map the breakthroughs. You get a prioritized execution roadmap aligned with your most ambitious business outcomes—not a generic slide deck.",
        ctaText: "Strategic audit →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Search className="w-full h-full" />,
    },
    {
        badgeText: "Phase 2",
        badgeColor: "#3B82F6", // Blue
        title: "Architectural Blueprinting & Strategy",
        description: "We design the secure, scalable blueprints that will carry your vision forward. You get an implementation strategy that covers everything from data flows to tech stack validation, built for unshakeable stability.",
        ctaText: "Blueprint design →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Layers className="w-full h-full" />,
    },
    {
        badgeText: "Phase 3",
        badgeColor: "#06B6D4", // Cyan
        title: "Implementation & Hardened Validation",
        description: "We deploy in high-stakes phases, benchmarking every release against your requirements. We validate for performance and security, ensuring the 'breakthrough' is a stable reality in the real world.",
        ctaText: "Validation →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Code2 className="w-full h-full" />,
    },
    {
        badgeText: "Phase 4",
        badgeColor: "#3B82F6", // Blue
        title: "Managed Deployment & Scaling",
        description: "We manage the rollout with surgical precision. You get a stable, high-performing environment that scales without the drama, tracked by metrics that actually move the needle for your business.",
        ctaText: "Deployment →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Rocket className="w-full h-full" />,
    },
    {
        badgeText: "Phase 5",
        badgeColor: "#06B6D4", // Cyan
        title: "Continuous Optimization & Performance Tuning",
        description: "We stay engaged to sharpen your maturity. We provide the ongoing enhancement and support needed to ensure your technical foundations continue to evolve as a formidable competitive advantage.",
        ctaText: "Optimization →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Monitor className="w-full h-full" />,
    },
];

// Why Partner - 5 points
const whyPartnerBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Engineering Excellence as the North Star",
        description: "Strategy must produce results, not just reports. We design IT roadmaps that support growth and revenue outcomes—not tools or trends. We focus on the high-stakes engineering that moves your business forward, so we don't have to have 'emergency meetings' about why the roadmap failed.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Hardened Expertise, Not Theoretical Advice",
        description: "We bring the maturity of those who actually ship. Our technology and consulting expertise comes from hands-on experience in high-growth startups and complex enterprise landscapes. We don't just 'tell' you the path; we provide the engineering authority that comes from actually building the road.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Radical Transparency & Milestone-Driven Delivery",
        description: "Execution is the only metric that matters. We swap guesswork for predictable progress. You get absolute risk visibility and decision transparency at every phase, ensuring everyone is aligned on the path to the breakthrough.",
    },
    {
        icon: <RefreshCw className="w-7 h-7" />,
        title: "Modernization Without the Disruption",
        description: "Dominance requires stability. We strengthen your infrastructure and processes without breaking the operations that drive your current success. We specialize in zero-disruption execution—ensuring uptime and security are never sacrificed for speed.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "An Unshakeable Strategic Partnership",
        description: "We are your partners in growth, not just another vendor. We stay engaged beyond the plan to support implementation and optimization. Our IT consulting services build technical foundations that evolve and dominate as your business scales, because engineering is better when both teams are on the same side.",
    },
];

export const metadata = {
    title: "IT consulting services | Strategy into Execution | Zylex",
    description: "Stop drowning in plans. Zylex delivers IT consulting services engineered for scale—IT strategy and consulting and tech consulting. Execution focused.",
};

export default function ITConsultingPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="IT Strategy & Consulting: Stop Navigating Friction. Start Engineering Terminal Velocity."
                subtitle="Your Vision Sets the Direction. We Engineer the Breakthrough."
                description="Traditional consulting is just expensive overhead. We act as the engineering catalyst that transforms strategic debt into unshakeable growth engines. Our IT consulting services re-engineer your technical foundation to ensure you ship results, not apologies. From roadmap design to full-scale modernization—no technical noise, no 'it's complicated' excuses. Just absolute momentum."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Users className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - The Strategic Ceilings */}
            <ServiceFeaturesSection
                title="The Strategic Ceilings: Where Complexity Kills Your Momentum"
                titleHighlight="Organizations partner with us when they need absolute clarity and unshakeable execution."
                features={features}
            />

            {/* Services Section - Core Capabilities */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Hardened Consulting Capabilities: Built for the Breakthrough
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We don't just "build plans"—we engineer the unshakeable architecture that secures your future.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service 1 - Strategy & Advisory */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors">
                                Strategic Advisory & Roadmap Engineering
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Secure Your Competitive Advantage</p>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design high-stakes IT strategies built for the real world. Our it strategy and consulting approach delivers technical due diligence, digital transformation blueprints, and vendor evaluations—ensuring your IT investments directly support revenue, scalability, and absolute outcome certainty.
                            </p>
                        </div>

                        {/* Service 2 - Enterprise IT Consulting */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                                Enterprise Architecture & Operational Hardening
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Engineering Unshakeable Foundations</p>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We evaluate the gaps, destroy the redundancies, and define a target-state architecture that survives the real world. We simplify your systems so your vision has the room it needs to dominate, not just "exist."
                            </p>
                        </div>

                        {/* Service 3 - IT Infrastructure & Operations */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                Infrastructural Certainty & Cloud Modernization
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Architectures Built for Heroic Scale</p>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We identify the gaps across your network, compute, and security layers. We build the resilient, high-performance environments that allow you to move faster than the market—ensuring your operations are unshakeable.
                            </p>
                        </div>

                        {/* Service 4 - IT Process Consulting */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Settings className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-violet-100 transition-colors">
                                Execution Discipline & Process Optimization
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Improve Delivery Velocity across the Team</p>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We skip the "it's complicated" narrative. From ITSM optimization to DevOps enablement, we harden your delivery speed and team coordination—ensuring every release is a stable, disruption-free step toward your next milestone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Framework - ServiceScrollSection with custom phases */}
            <ServiceScrollSection
                hue={200} // Cyan/Blue
                title="The Engineering Blueprint: Structured for Precision"
                titleHighlight="We skip the 'wait and see' approach. Every milestone is a hard step toward market dominance."
                description=""
                cards={deliveryPhases}
            />

            {/* Why Partner Section - 5 Points */}
            <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Why Partner with Zylex for IT Strategy
                        </h2>
                        <p className="text-neutral-400 text-lg mt-4">
                            Because your roadmap shouldn't require a leap of faith.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyPartnerBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section - Resources */}
            <BlogSection />

            {/* Final CTA */}
            <ServiceCTASection
                title="Ready to Engineer Your Next Breakthrough?"
                description="Your vision is too important for a brittle strategy. Partner with the specialists in high-performance execution to build the unshakeable foundations your future demands."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
