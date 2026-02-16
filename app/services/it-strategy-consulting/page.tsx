

import React from "react";
import { Users, Target, Server, TrendingUp, Cog, Lightbulb, Building2, Settings, Layers, Search, Paintbrush, Code2, Rocket, Monitor, Award, Shield, MessageSquare, RefreshCw, Handshake, Lock, Network } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
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
        description: "Scale shouldn't feel like pulling teeth. We re-engineer your infrastructure architecture across cloud, hybrid, and on-prem environments—replacing \"reactive troubleshooting\" with the unshakeable reliability your future-scale demands.",
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
        description: "We deploy in high-stakes phases, benchmarking every release against your requirements. We validate for performance and security, ensuring the \"breakthrough\" is a stable reality in the real world.",
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
        description: "Strategy must produce results, not just reports. We design IT roadmaps that support growth and revenue outcomes—not tools or trends. We focus on the high-stakes engineering that moves your business forward, so we don't have to have \"emergency meetings\" about why the roadmap failed.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Hardened Expertise, Not Theoretical Advice",
        description: "We bring the maturity of those who actually ship. Our technology and consulting expertise comes from hands-on experience in high-growth startups and complex enterprise landscapes. We don't just \"tell\" you the path; we provide the engineering authority that comes from actually building the road.",
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

import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "IT consulting services | Strategy into Execution | Zylex",
    description: "Stop drowning in plans. Zylex delivers IT consulting services engineered for scale—IT strategy and consulting and tech consulting. Execution focused.",
    alternates: {
        canonical: "/services/it-strategy-consulting",
    },
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function ITConsultingPage() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('IT Consulting Page: Blog data not available');
    }

    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="IT Strategy & Consulting: Stop Navigating Friction. Start Engineering Terminal Velocity."
                subtitle="Your Vision Sets the Direction. We Engineer the Breakthrough."
                description={'Traditional consulting is just expensive overhead. We act as the engineering catalyst that transforms strategic debt into unshakeable growth engines. Our IT consulting services re-engineer your technical foundation to ensure you ship results, not apologies. From roadmap design to full-scale modernization—no technical noise, no "it\'s complicated" excuses. Just absolute momentum.'}
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

            {/* Process Section - Core Capabilities (Refactored) */}
            <ServiceProcessSection
                title="Hardened Consulting Capabilities"
                titleHighlight="Built for the Breakthrough"
                processData={[
                    {
                        title: "01",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Lightbulb className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Strategic Advisory & Roadmap Engineering
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Secure Your Competitive Advantage.</strong> We design high-stakes IT strategies built for the real world. Our it strategy and consulting approach delivers technical due diligence, digital transformation blueprints, and vendor evaluations—ensuring your IT investments directly support revenue, scalability, and absolute outcome certainty.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "02",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Enterprise Architecture & Operational Hardening
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Engineering Unshakeable Foundations.</strong> We evaluate the gaps, destroy the redundancies, and define a target-state architecture that survives the real world. We simplify your systems so your vision has the room it needs to dominate, not just "exist."
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "03",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Server className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Infrastructural Certainty & Cloud Modernization
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Architectures Built for Heroic Scale.</strong> We identify the gaps across your network, compute, and security layers. We build the resilient, high-performance environments that allow you to move faster than the market—ensuring your operations are unshakeable.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "04",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Settings className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Execution Discipline & Process Optimization
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Improve Delivery Velocity across the Team.</strong> We skip the "it's complicated" narrative. From ITSM optimization to DevOps enablement, we harden your delivery speed and team coordination—ensuring every release is a stable, disruption-free step toward your next milestone.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />

            {/* Mid-page CTA */}
            <ServiceCTASection
                title="Get the engineering powerhouse your vision deserves."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />

            {/* Delivery Framework - ServiceScrollSection */}
            <ServiceScrollSection
                hue={200} // Cyan/Blue
                title="The Engineering Blueprint: Structured for Precision"
                titleHighlight={'We skip the "wait and see" approach. Every milestone is a hard step toward market dominance.'}
                description=""
                cards={deliveryPhases}
            />

            {/* Why Choose Us Section (Refactored) */}
            <WhyChooseUsSection
                title="Why Partner with Zylex for IT Strategy"
                titleHighlight="Because your roadmap shouldn't require a leap of faith."
                benefits={[
                    {
                        icon: <Award className="w-7 h-7" />,
                        title: "Engineering Excellence as the North Star",
                        description: "Strategy must produce results, not just reports. We design IT roadmaps that support growth and revenue outcomes—not tools or trends. We focus on the high-stakes engineering that moves your business forward, so we don't have to have \"emergency meetings\" about why the roadmap failed.",
                        accent: "from-cyan-400 to-blue-600",
                    },
                    {
                        icon: <Shield className="w-7 h-7" />,
                        title: "Hardened Expertise, Not Theoretical Advice",
                        description: "We bring the maturity of those who actually ship. Our technology and consulting expertise comes from hands-on experience in high-growth startups and complex enterprise landscapes. We don't just \"tell\" you the path; we provide the engineering authority that comes from actually building the road.",
                        accent: "from-cyan-400 to-sky-500",
                    },
                    {
                        icon: <MessageSquare className="w-7 h-7" />,
                        title: "Radical Transparency & Milestone-Driven Delivery",
                        description: "Execution is the only metric that matters. We swap guesswork for predictable progress. You get absolute risk visibility and decision transparency at every phase, ensuring everyone is aligned on the path to the breakthrough.",
                        accent: "from-blue-400 to-indigo-600",
                    },
                    {
                        icon: <RefreshCw className="w-7 h-7" />,
                        title: "Modernization Without the Disruption",
                        description: "Dominance requires stability. We strengthen your infrastructure and processes without breaking the operations that drive your current success. We specialize in zero-disruption execution—ensuring uptime and security are never sacrificed for speed.",
                        accent: "from-cyan-400 to-blue-500",
                    },
                    {
                        icon: <Handshake className="w-7 h-7" />,
                        title: "An Unshakeable Strategic Partnership",
                        description: "We are your partners in growth, not just another vendor. We stay engaged beyond the plan to support implementation and optimization. Our IT consulting services build technical foundations that evolve and dominate as your business scales, because engineering is better when both teams are on the same side.",
                        accent: "from-sky-400 to-blue-600",
                    },
                ]}
            />

            {/* Blog Section - Resources */}
            <BlogSection initialBlogPosts={blogPosts} />

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
