"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { AppWindow, Box, Zap, Building2, Link2 } from "lucide-react";

interface ProcessItem {
    title: string;
    content: React.ReactNode;
}

interface ServiceProcessSectionProps {
    title?: string;
    titleHighlight?: string;
    processData?: ProcessItem[];
}

const defaultProcessData: ProcessItem[] = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <AppWindow className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Custom Application Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We design and develop secure, scalable, and domain-specific software applications tailored to real-world business workflows. Our solutions improve efficiency, collaboration, and process visibility across web and cloud systems, internal platforms, workflow tools, and line-of-business applications — engineered to be reliable, intuitive, and ready to evolve as your organization grows.
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
                        <Box className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Software Product Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We work with founders and product teams to build and scale modern SaaS products and digital platforms. Our approach combines structured product discovery, modular feature development, and multi-tenant architecture — ensuring strong performance, great user experience, and commercial readiness from the start.
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
                        <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        MVP Development & Rapid Prototyping
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We help you validate product ideas faster through lean, test-ready MVPs that deliver real user feedback in shorter cycles. Our MVP development model focuses on rapid prototyping, core-feature delivery, and a clear roadmap to scale — enabling a smooth transition from idea to working product to market traction.
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
                        <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Enterprise Software Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We design and implement mission-critical enterprise systems for complex operations and high-scale environments. Our engineering emphasizes performance, reliability, and compliance — supporting ERP extensions, workflow platforms, enterprise portals, and automation systems that operate securely across distributed teams.
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
                        <Link2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Integration-First Platforms & API Engineering
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We build integration-ready, API-first software platforms that connect seamlessly with your existing CRM, ERP, data, and third-party systems. Our architecture approach enables secure data exchange, workflow alignment, automation, and interoperability — creating a unified, scalable digital ecosystem.
                </p>
            </div>
        ),
    },
];

export function ServiceProcessSection({
    title = "From Idea to Enterprise Scale",
    titleHighlight = "Our Core Software Capabilities",
    processData = defaultProcessData,
}: ServiceProcessSectionProps) {
    return (
        <section className="relative bg-black overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

            {/* Header */}
            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32">
                {/* Left Aligned Title */}
                <div className="mb-16 md:mb-20 max-w-5xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        {title}
                        <br />
                        <span className="text-neutral-500">{titleHighlight}</span>
                    </h2>
                </div>
            </div>

            {/* Timeline */}
            <Timeline data={processData} />
        </section>
    );
}
