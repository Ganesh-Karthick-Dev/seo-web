

import React from "react";
import { Sparkles, Server, Workflow, TrendingUp, Database, Lightbulb, Building2, RefreshCw, Search, Layers, Code2, Rocket, Award, Target, Shield, MessageSquare, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems where Digital Transformation creates impact
const features = [
    {
        icon: <Server className="w-full h-full" />,
        title: "When Legacy Systems Hold the Business Back",
        description: "Outdated applications slow innovation, increase risk, and make scaling difficult. Our legacy modernization and transformation initiatives help organizations evolve without disrupting operations.",
    },
    {
        icon: <Workflow className="w-full h-full" />,
        title: "When Processes Are Manual, Fragmented, or Inefficient",
        description: "We streamline workflows through business process digital transformation, automation, and integration — improving productivity and visibility across teams.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "When Growth Requires Technology Alignment",
        description: "We help align technology investments with business strategy — ensuring every transformation initiative supports measurable outcomes and future-scale capability.",
    },
    {
        icon: <Database className="w-full h-full" />,
        title: "When Data Exists — But Insights Don't",
        description: "We enable connected systems, unified data, and actionable analytics to support smarter decision-making across the organization.",
    },
];

// Solutions we offer - 3 items (Timeline 1)
const solutionsData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Digital Strategy & Consulting
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We partner with you to define your digital vision, set clear transformation goals, and align every initiative with your core business objectives. As a leading digital transformation company, our consultants provide strategic guidance that ensures your digital investments create real business value.
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
                        Digital Business Transformation
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We help organizations evolve with changing markets, emerging technologies, and regulatory shifts. As trusted digital transformation service providers, we identify the right digital platforms and AI-driven solutions to strengthen capabilities, streamline operations, and accelerate innovation — enabling your business to operate smarter and scale with confidence.
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
                        <RefreshCw className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Legacy Application Modernization
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We transform outdated legacy systems into secure, scalable, and high-performing digital platforms. Our legacy application modernization services upgrade architecture, enhance reliability and security, and align your applications with modern technologies — while ensuring minimal disruption to ongoing operations.
                </p>
            </div>
        ),
    },
];

// Engagement Approach - 4 Phases (Timeline 2)
const phasesData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Discovery & Business Alignment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Assess existing systems, workflows, risks, business goals, and capability gaps — ensuring transformation priorities align with strategic outcomes.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A clear transformation roadmap with milestones, investment mapping, dependencies, and execution priorities.
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
                        <Layers className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Solution & Transformation Architecture
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Define modernization architecture, integration plans, platform evolution strategy, security alignment, and scalability models.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> Future-ready transformation blueprint with phased execution plan and technology validation.
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
                        Implementation & Rollout
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Execute transformation initiatives through structured delivery cycles with progress visibility, governance, and controlled change management.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> Predictable implementation, stable releases, and business-aligned delivery outcomes.
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
                        Optimization, Scale & Continuous Evolution
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Improve performance, maturity, automation, and operational scalability as systems and teams evolve.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A mature, scalable, digital-first organization — built for long-term growth.
                </p>
            </div>
        ),
    },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Proven Transformation Success",
        description: "We've helped businesses modernize systems, digitize workflows, and improve operational efficiency across industries.",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Strategy-Led, Business-Aligned Approach",
        description: "Every initiative is planned around outcomes — productivity, scalability, and long-term value.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Smooth & Low-Risk Modernization",
        description: "We upgrade legacy platforms and migrate systems without disrupting daily operations.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Transparent, Milestone-Driven Delivery",
        description: "Clear execution roadmap, measurable progress, and predictable implementation.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Long-Term Growth Partnership",
        description: "Post-deployment optimization, enhancements, and continuous capability expansion.",
    },
];

export default function DigitalTransformationPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="Empower your business with innovative digital transformation solutions"
                subtitle="Digital Transformation"
                description="Modern businesses don't just need new tools — they need transformation that improves efficiency, strengthens operations, and accelerates growth. Our Digital Transformation Services help modernize systems, streamline workflows, and build digital capabilities that create lasting business value."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Sparkles className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - 4 Problems */}
            <ServiceFeaturesSection
                title="Where Digital Transformation Creates the Highest Business Impact"
                titleHighlight=""
                features={features}
            />

            {/* Solutions Section - 3 Solutions (Simple Card Grid) */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Digital Transformation Solutions we offer
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We combine strategy, process transformation, and implementation to help organizations move from legacy constraints to scalable, modern digital ecosystems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Solution 1 */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Lightbulb className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                Digital Strategy & Consulting
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We partner with you to define your digital vision, set clear transformation goals, and align every initiative with your core business objectives. As a leading digital transformation company, our consultants provide strategic guidance that ensures your digital investments create real business value.
                            </p>
                        </div>

                        {/* Solution 2 */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <Building2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                Digital Business Transformation
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We help organizations evolve with changing markets, emerging technologies, and regulatory shifts. As trusted digital transformation service providers, we identify the right digital platforms and AI-driven solutions to strengthen capabilities, streamline operations, and accelerate innovation — enabling your business to operate smarter and scale with confidence.
                            </p>
                        </div>

                        {/* Solution 3 */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                Legacy Application Modernization
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We transform outdated legacy systems into secure, scalable, and high-performing digital platforms. Our legacy application modernization services upgrade architecture, enhance reliability and security, and align your applications with modern technologies — while ensuring minimal disruption to ongoing operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engagement Approach - 4 Phases (Timeline) */}
            <ServiceProcessSection
                title="How We Deliver Digital Transformation"
                titleHighlight="Our Engagement Approach — Our transformation model balances strategy, execution discipline, and change enablement."
                processData={phasesData}
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
                            Why Businesses Choose Zylex for Digital Transformation
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
                title="Ready to Move From Technology Adoption to Real Digital Transformation?"
                description="Whether you're modernizing legacy systems, digitizing operations, or building data-driven capabilities — we help you execute transformation initiatives with clarity, measurable outcomes, and minimal business disruption."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
