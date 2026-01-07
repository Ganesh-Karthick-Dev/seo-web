"use client";

import React from "react";
import { Users, Target, Server, TrendingUp, Cog, Lightbulb, Building2, Settings, Layers, Search, Paintbrush, Code2, Rocket, Monitor, Award, Shield, MessageSquare, RefreshCw, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems
const features = [
    {
        icon: <Target className="w-full h-full" />,
        title: "Technology investments lack alignment with business goals",
        description: "We provide IT strategy consulting to help leadership teams define priorities, reduce risk, and focus investments where they create maximum value.",
    },
    {
        icon: <Server className="w-full h-full" />,
        title: "Legacy systems limit agility, scalability, and innovation",
        description: "Through IT process consulting and modernization, we streamline workflows, stabilize environments, and enable faster delivery.",
    },
    {
        icon: <Cog className="w-full h-full" />,
        title: "IT operations become complex as teams and systems scale",
        description: "Our IT infrastructure consulting helps improve reliability, performance, and operational efficiency across cloud, hybrid, and on-prem environments.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "Transformation initiatives require expert guidance & execution",
        description: "We deliver enterprise IT consulting solutions with governance, architecture discipline, and milestone-driven delivery.",
    },
];

// 5 Phases - IT Consulting Process
const processData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Discovery & Strategy
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Define business objectives, assess current IT systems, identify risks and opportunities, and build a strategic IT roadmap aligned with organizational goals.
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
                        <Paintbrush className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Design & Architecture
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Create scalable and secure solution blueprints covering infrastructure, cloud, integrations, data flows, and technology stack alignment.
                </p>
            </div>
        ),
    },
    {
        title: "03",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                        <Code2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Implementation & Testing
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Deploy solutions in controlled phases, validate performance and security, benchmark against requirements, and ensure compliance across environments.
                </p>
            </div>
        ),
    },
    {
        title: "04",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Deploy, Track & Scale
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Go live smoothly with monitored rollout, track performance and adoption, optimize reliability, and align systems with evolving business needs.
                </p>
            </div>
        ),
    },
    {
        title: "05",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Monitor className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Continuous Improvement
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Monitor operations, implement upgrades, refine processes, and support ongoing modernization to drive long-term IT efficiency and value.
                </p>
            </div>
        ),
    },
];

// Why Partner - 5 points
const whyPartnerBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Business-Aligned, Not Technology-Driven",
        description: "We design IT strategies that support growth, efficiency, and revenue outcomes — not tools, trends, or vendor bias.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Proven Expertise Across Startup & Enterprise Environments",
        description: "From fast-scaling products to complex enterprise landscapes — we bring hands-on delivery experience, not theoretical consulting.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Structured, Transparent & Milestone-Driven Execution",
        description: "Clear roadmaps, measurable outcomes, risk visibility, and decision transparency at every phase of engagement.",
    },
    {
        icon: <RefreshCw className="w-7 h-7" />,
        title: "Modernization Without Disruption",
        description: "We strengthen infrastructure, processes, and systems — while preserving uptime, security, and operational continuity.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Long-Term Strategic Technology Partner",
        description: "Beyond advisory — we support implementation, optimization, and continuous improvement as your organization evolves.",
    },
];

export default function ITConsultingPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="Your strategic technology partner — from roadmap to modernization, delivery, and beyond."
                subtitle="IT Consulting"
                description="We help businesses make smarter technology decisions, modernize legacy systems, streamline operations, and align IT strategy with real business outcomes — not just technical implementation."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={Users}
            />

            {/* Features Section - 4 Problems */}
            <ServiceFeaturesSection
                title="A Consulting Partner for Businesses Navigating Technology Change"
                titleHighlight="Organizations work with us when they need clarity, modernization, and confidence in execution."
                features={features}
            />

            {/* Services Section - 4 Service Categories (Card Grid) */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Our Core IT Consulting Service Capabilities
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We don't just advise — we help organizations plan, validate, and execute technology initiatives with clarity and confidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service 1 - Strategy & Advisory */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors">
                                Strategy & Advisory
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Align IT with business goals and long-term growth priorities.</p>
                            <ul className="space-y-2 text-neutral-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-400 mt-1">•</span>
                                    <span>IT Strategy & Roadmap Development</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-400 mt-1">•</span>
                                    <span>Technology Due Diligence & Audits</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-400 mt-1">•</span>
                                    <span>Digital Transformation Planning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-sky-400 mt-1">•</span>
                                    <span>Business–IT Alignment</span>
                                </li>
                            </ul>
                        </div>

                        {/* Service 2 - Enterprise IT Consulting */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                                Enterprise IT Consulting
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Strengthen enterprise systems, governance, and operational stability.</p>
                            <ul className="space-y-2 text-neutral-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Enterprise Architecture Assessment</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Target-State Architecture Design</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>System Consolidation & Modernization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    <span>Performance & Reliability Improvement</span>
                                </li>
                            </ul>
                        </div>

                        {/* Service 3 - IT Infrastructure & Operations */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                IT Infrastructure & Operations Consulting
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Build reliable, secure, and future-ready IT environments.</p>
                            <ul className="space-y-2 text-neutral-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Infrastructure Architecture Review</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Cloud, Hybrid & On-Prem Modernization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Business Continuity & Disaster Recovery</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span>Operational Stability & Monitoring Enablement</span>
                                </li>
                            </ul>
                        </div>

                        {/* Service 4 - IT Process Consulting */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Settings className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-violet-100 transition-colors">
                                IT Process Consulting & Implementation Support
                            </h3>
                            <p className="text-neutral-500 text-sm mb-4">Improve execution discipline, delivery predictability, and adoption success.</p>
                            <ul className="space-y-2 text-neutral-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>ITSM Process Optimization</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>Release & Deployment Governance</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>DevOps & Collaboration Enablement</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-violet-400 mt-1">•</span>
                                    <span>Program Oversight & Post-Deployment Optimization</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - 5 Phases (Timeline) */}
            <ServiceProcessSection
                title="Our IT Consulting Process"
                titleHighlight="An iterative framework that delivers value at every step."
                processData={processData}
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
                            Why Partner With Zylex
                        </h2>
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
                title="Let's Transform Your IT into a Strategic Growth Enabler"
                description="From roadmap planning to implementation oversight, we help you turn IT strategy into practical execution — reducing risk, improving delivery maturity, and enabling smarter technology decisions."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
