"use client";

import React from "react";
import { Box, Sparkles, Eye, Heart, Gem, Paintbrush, Code2, Users, Search, Layers, Monitor, Rocket, Award, Lightbulb, Settings, MessageSquare, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems where 3D creates impact
const features = [
    {
        icon: <Sparkles className="w-full h-full" />,
        title: "When Storytelling Matters More Than Static Design",
        description: "3D website design allows your brand to create rich, immersive narratives that traditional web layouts cannot communicate.",
    },
    {
        icon: <Eye className="w-full h-full" />,
        title: "When Products Need to Be Experienced — Not Just Viewed",
        description: "Interactive product visuals, rotations, zoomed perspectives, and configurators improve buying confidence and conversions.",
    },
    {
        icon: <Heart className="w-full h-full" />,
        title: "When Customer Experience Drives Brand Perception",
        description: "Our interactive 3D website development approach helps brands deliver memorable, high-impact experiences that increase retention.",
    },
    {
        icon: <Gem className="w-full h-full" />,
        title: "When You Want Your Website to Feel Premium & Futuristic",
        description: "We blend interactive 3D experience design with usability, accessibility, and performance — not just visual effects.",
    },
];

// 5 Steps - Development Approach
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
                        Discovery & Experience Mapping
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We understand your goals, target users, and interaction expectations — then define the right depth of 3D for your use case.
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
                        Experience & Motion Design
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Our design team creates interaction flows, scene behavior, motion curves, and intuitive navigation.
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
                        3D Development & Optimization
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We build experiences using modern frameworks and performance-first engineering techniques.
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
                        Testing Across Devices & Browsers
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We validate rendering, animation accuracy, and responsiveness across environments.
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
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Launch, Support & Experience Evolution
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We continue optimizing for performance, engagement, and future enhancements.
                </p>
            </div>
        ),
    },
];

// Tech Stack - 3D Web Technologies (for IntegrationsSection animated beam)
const threeDTechLeft = [
    { label: "WebGL", icon: "react", color: "#61DAFB" },
    { label: "Three.js", icon: "nodejs", color: "#339933" },
    { label: "Babylon.js", icon: "graphql", color: "#E10098" },
    { label: "React", icon: "react", color: "#61DAFB" },
    { label: "Next.js", icon: "nextjs", color: "#000000" },
];

const threeDTechRight = [
    { label: "Vue.js", icon: "vue", color: "#4FC08D" },
    { label: "GPU Opt", icon: "docker", color: "#2496ED" },
    { label: "Textures", icon: "aws", color: "#FF9900" },
    { label: "Rendering", icon: "prometheus", color: "#E6522C" },
    { label: "Assets", icon: "kubernetes", color: "#326CE5" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Immersive Experiences with Real-World Performance",
        description: "We build 3D websites that balance creativity with technical discipline — engaging, interactive, and optimized for real-world usage.",
    },
    {
        icon: <Lightbulb className="w-7 h-7" />,
        title: "Design-Led, Experience-Driven Approach",
        description: "Every 3D interaction is crafted to enhance storytelling, user engagement, and brand perception — not just visual appeal.",
    },
    {
        icon: <Settings className="w-7 h-7" />,
        title: "Performance, Scalability & Maintainability Built-In",
        description: "Our 3D experiences are engineered for smooth rendering, stable performance, and future feature expansion.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Structured, Milestone-Driven Execution",
        description: "Clear roadmap, predictable timelines, and transparent delivery from concept to launch.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Partnership Beyond Deployment",
        description: "We help you enhance, extend, and evolve your 3D experiences as your brand grows.",
    },
];

export default function ThreeDWebsiteDevelopmentPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="3D Website Development — Build Immersive, Interactive Web Experiences"
                subtitle="3D Website Development"
                description="Our 3D website development services help you create immersive, visually engaging, and interactive web experiences — from product visualization and virtual showrooms to 3D storytelling pages — built to be fast, intuitive, and performance-optimized."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={Box}
            />

            {/* Features Section - 4 Problems */}
            <ServiceFeaturesSection
                title="Where 3D Websites Create Real Business Impact"
                titleHighlight="Not every brand needs a 3D website — but for the right use cases, it creates powerful differentiation and deeper engagement."
                features={features}
            />

            {/* Services Section - 3 Services (Card Grid) */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            End-to-End 3D Website Development Services
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We are a 3D web development company specializing in modern, interactive, and performance-optimized 3D web experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Service 1 - Immersive 3D Website Design */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Paintbrush className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                Immersive 3D Website Design
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design immersive and visually engaging 3D website experiences that elevate brand storytelling and deepen user interaction. As a 3D web development company, we create cinematic interfaces, interactive 3D journeys, and motion-led navigation that enhance engagement and strengthen brand perception — delivering experiences that feel intuitive, meaningful, and seamlessly woven into your digital presence.
                            </p>
                        </div>

                        {/* Service 2 - Custom 3D Website Development */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <Code2 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                Custom 3D Website Development Services
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design and develop immersive, high-performance 3D web experiences tailored to your brand and audience. Our custom 3D website development services include interactive landing pages, product visualization platforms, portfolio showcases, and WebGL-driven environments — built with clean architecture, strong stability, and room to evolve as your digital experience grows.
                            </p>
                        </div>

                        {/* Service 3 - Hire 3D Website Developers */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                Hire 3D Website Developers — Flexible Engagement
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                Hire expert 3D website developers to extend your team and accelerate execution. Our specialists support product launches, campaign experiences, feature enhancements, and new 3D initiatives — delivering clean, scalable WebGL and Three.js development with a collaborative working model.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - 5 Steps (Timeline) */}
            <ServiceProcessSection
                title="Our Approach to 3D Website Development"
                titleHighlight="We design immersive 3D experiences — without compromising performance or accessibility."
                processData={processData}
            />

            {/* Tech Stack Section - Animated Beam */}
            <IntegrationsSection
                title="Technology Stack for 3D Website Development"
                titleHighlight="We use lightweight, production-ready 3D frameworks to ensure smooth rendering and high performance."
                leftTechItems={threeDTechLeft}
                rightTechItems={threeDTechRight}
                description="Our technology choices ensure visual richness — without sacrificing usability."
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
                            Why Brands Choose Zylex for 3D Website Development
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
                title="Let's Build a 3D Website Experience Your Users Will Remember"
                description="Whether you're launching a brand storytelling experience, interactive product showcase, or immersive digital platform — our 3D website development team helps you design, develop, and deliver experiences that stand out."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
