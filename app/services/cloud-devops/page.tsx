

import React from "react";
import { Cloud, Rocket, Server, RefreshCw, Layers, Search, Paintbrush, Code2, Monitor, Gauge, Award, Shield, MessageSquare, Zap, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems
const features = [
    {
        icon: <Rocket className="w-full h-full" />,
        title: "Deployments Are Slow, Manual, and Risk-Prone",
        description: "We streamline delivery pipelines through CI/CD automation, improving release frequency, predictability, and rollback readiness.",
    },
    {
        icon: <Server className="w-full h-full" />,
        title: "Infrastructure Is Hard to Manage & Scale",
        description: "Our cloud infrastructure management services enhance performance, uptime, and resource utilization across environments.",
    },
    {
        icon: <RefreshCw className="w-full h-full" />,
        title: "Legacy Systems Limit Modernization",
        description: "We deliver cloud migration and modernization services that move platforms to scalable, secure, and cost-efficient architectures.",
    },
    {
        icon: <Layers className="w-full h-full" />,
        title: "Growth Requires Cloud-Native Capabilities",
        description: "We build cloud-native application engineering foundations designed for resilience, scalability, and future expansion.",
    },
];

// 5 Phases - Delivery Approach
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
                        Assessment & Future-State Alignment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Review current infrastructure, delivery workflows, reliability gaps, deployment risks, and scalability constraints — mapping challenges against business priorities.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A modernization roadmap with priorities, execution milestones, dependency mapping, and investment view.
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
                        Architecture & Automation Design
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Define target-state cloud architecture, CI/CD pipelines, security and compliance controls, scaling models, and environment standards.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A validated architecture blueprint, automation strategy, and implementation plan.
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
                        Build, Automate & Integrate
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Containerize workloads, standardize environments, implement IaC, automate pipelines, and integrate delivery workflows across systems.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A stable, automated, and scalable delivery ecosystem ready for predictable releases.
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
                        <Monitor className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Rollout, Monitoring & Reliability Enablement
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Enable observability, logging, alerting, rollback safeguards, and operational runbooks — ensuring safe rollout and production readiness.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> Predictable deployments, reduced release risk, and long-term operational reliability.
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
                        <Gauge className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Optimization & Continuous Improvement
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Monitor workload usage, optimize cost and performance, expand automation coverage, and evolve environments as needs scale.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A continuously improving cloud environment — efficient, resilient, and future-ready.
                </p>
            </div>
        ),
    },
];

// Tech Stack - Cloud & DevOps (for IntegrationsSection animated beam)
const cloudTechLeft = [
    { label: "Cloud", icon: "aws", color: "#FF9900" },
    { label: "Containers", icon: "docker", color: "#2496ED" },
    { label: "IaC", icon: "kubernetes", color: "#326CE5" },
    { label: "CI/CD", icon: "nodejs", color: "#339933" },
    { label: "Security", icon: "auth0", color: "#EB5424" },
];

const cloudTechRight = [
    { label: "Monitoring", icon: "prometheus", color: "#E6522C" },
    { label: "Data", icon: "postgresql", color: "#4169E1" },
    { label: "APIs", icon: "graphql", color: "#E10098" },
    { label: "Serverless", icon: "react", color: "#61DAFB" },
    { label: "Platform", icon: "kafka", color: "#ffffff" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Business-Outcome Driven Modernization",
        description: "We align cloud and DevOps initiatives with reliability, scalability, cost efficiency, and operational performance — not tool-centric implementations.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Hands-On Experience Across Startup & Enterprise Environments",
        description: "From high-growth digital platforms to complex enterprise ecosystems, we deliver modernization that works in real-world production environments.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Structured, Predictable & Milestone-Based Delivery",
        description: "Every engagement runs on a clear execution roadmap with phased rollout, measurable improvements, and full visibility across stakeholders.",
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Automation That Improves Stability — Not Just Speed",
        description: "We engineer CI/CD, observability, and infrastructure automation to reduce deployment risk, improve uptime, and strengthen operational control.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Partnership Beyond Initial Implementation",
        description: "Post-rollout, we support optimization, performance tuning, cost governance, and continuous improvement to ensure long-term platform resilience.",
    },
];

export default function CloudDevOpsPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="Cloud & DevOps Engineering Services That Accelerate Delivery & Operational Reliability"
                subtitle="Cloud & DevOps"
                description="Our Cloud and DevOps engineering services help organizations modernize infrastructure, automate delivery pipelines, and build scalable cloud-native systems. We improve deployment reliability, accelerate release cycles, and optimize cloud operations — while ensuring stability and business continuity."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Cloud className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - 4 Problems */}
            <ServiceFeaturesSection
                title="Where Cloud & DevOps Create Measurable Operational Advantage"
                titleHighlight="We focus on initiatives that strengthen reliability, improve deployment speed, and create long-term scalability."
                features={features}
            />

            {/* Services Section - 4 Services (Card Grid) */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            End-to-End Cloud & DevOps Engineering Services
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            Our delivery approach balances modernization, automation, reliability, and operational control — ensuring technology supports real-world execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service 1 - Cloud Infrastructure Management */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                Cloud Infrastructure Management Services
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design, manage, and optimize cloud environments to improve reliability, scalability, and performance — while reducing operational overhead and cost inefficiencies. Our approach covers architecture optimization, automated provisioning, environment standardization, cost governance, backup, disaster recovery, and high-availability enablement — ensuring your cloud infrastructure remains secure, stable, and easy to scale as your business grows.
                            </p>
                        </div>

                        {/* Service 2 - Cloud Migration & Modernization */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                Cloud Migration & Modernization Services
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We help organizations transition from legacy systems to modern, scalable cloud platforms through controlled, low-risk migration programs. Our work spans on-prem to cloud migration, re-platforming, refactoring, containerization, and performance optimization — enabling modernization without operational disruption, while aligning every phase of migration to business priorities and continuity needs.
                            </p>
                        </div>

                        {/* Service 3 - Cloud-Native Application Engineering */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Layers className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                Cloud-Native Application Engineering
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design and build platforms using modern cloud-native principles — enabling elasticity, resilience, and long-term scalability. Our engineering approach includes microservices and event-driven architecture, API-first platforms, deep observability, and resilience engineering — helping organizations accelerate delivery cycles, improve scalability economics, and strengthen platform reliability across environments.
                            </p>
                        </div>

                        {/* Service 4 - Cloud DevOps Services */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-violet-100 transition-colors">
                                Cloud DevOps Services — Automation, Delivery & Observability
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We implement DevOps operating models that accelerate deployment speed while reducing risk, failure rates, and operational noise. Our services include CI/CD engineering, infrastructure-as-code, environment provisioning, release governance, monitoring, alerting, and reliability controls — delivering faster releases, predictable rollouts, and measurable improvements in platform stability and performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - 5 Phases (Timeline) */}
            <ServiceProcessSection
                title="From Strategy to Reliable Cloud Operations"
                titleHighlight="Our Delivery Approach — Turn modernization and DevOps initiatives into measurable outcomes with a structured, transparent, and milestone-driven execution model."
                processData={processData}
            />

            {/* Tech Stack Section - Animated Beam */}
            <IntegrationsSection
                title="Technology Foundation That Powers Reliable, Scalable Cloud Operations"
                titleHighlight=""
                leftTechItems={cloudTechLeft}
                rightTechItems={cloudTechRight}
                description="We carefully select technologies based on business fit, stability, maintainability, and long-term scalability — not trends or tool bias."
            />

            {/* Why Choose Section - 5 Points */}
            <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Why Organizations Choose Zylex for Cloud & DevOps Engineering
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseBenefits.map((benefit, index) => (
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
                title="Accelerate Delivery — Without Compromising Stability"
                description="Your cloud and DevOps initiatives shouldn't feel risky, slow, or fragmented. We help you modernize infrastructure, automate delivery, and scale platforms with predictable execution and measurable reliability improvements."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
