"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import {
    Award,
    Target,
    MessageSquare,
    Settings,
    Shield,
    Handshake,
    ArrowRight
} from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const defaultBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Engineering excellence built into every stage of delivery",
        description: "Architecture-driven design, clean code standards, security discipline, and scalability planning from day one.",
        accent: "from-cyan-400 to-blue-600",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Predictable execution with milestone-driven delivery",
        description: "Structured sprints, clear acceptance criteria, risk visibility, and measurable progress at every phase.",
        accent: "from-cyan-400 to-sky-500",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Transparent communication and complete project visibility",
        description: "Open collaboration, sprint reviews, documentation, and alignment across stakeholders and engineering teams.",
        accent: "from-blue-400 to-indigo-600",
    },
    {
        icon: <Settings className="w-7 h-7" />,
        title: "Flexible engagement models for startup and enterprise",
        description: "MVP development, product engineering, team extension, or enterprise delivery — tailored to maturity and scale.",
        accent: "from-cyan-400 to-blue-500",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Software designed for performance and reliability",
        description: "High-availability architecture, integration-ready systems, and platforms built to support business expansion.",
        accent: "from-sky-400 to-blue-600",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Long-term partnership mindset — not vendor execution",
        description: "We help you build software foundations that continue to evolve as your business grows.",
        accent: "from-cyan-400 to-sky-600",
    },
];

interface BenefitItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    accent: string;
}

interface WhyChooseUsSectionProps {
    title?: string;
    titleHighlight?: string;
    benefits?: BenefitItem[];
}

interface BenefitRowProps {
    benefit: BenefitItem;
    index: number;
}

const BenefitRow = ({ benefit, index }: BenefitRowProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
        >
            <div className="relative py-8 border-b border-neutral-800/50 hover:border-neutral-700 transition-all duration-500">
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-800/30 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-6 md:gap-10">
                    {/* Number */}
                    <div className="shrink-0">
                        <motion.span
                            className="text-5xl md:text-6xl font-bold text-white opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                            initial={{ y: 20, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 0.4 } : { y: 20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </motion.span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-4">
                            {/* Icon */}
                            <motion.div
                                className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.accent} flex items-center justify-center text-white shadow-lg`}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                {benefit.icon}
                            </motion.div>

                            <div className="flex-1 pt-1">
                                <motion.h3
                                    className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-sky-50 transition-colors"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    {benefit.title}
                                </motion.h3>
                                <motion.p
                                    className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors"
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, delay: 0.5 }}
                                >
                                    {benefit.description}
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                        className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-neutral-700 items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-sky-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-sky-400 transition-colors" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export function WhyChooseUsSection({
    title = "Why Businesses Choose Zylex",
    titleHighlight = "for Custom Software Development",
    benefits = defaultBenefits
}: WhyChooseUsSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={containerRef} className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
            {/* Dynamic background */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{ y: backgroundY }}
            >
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
            </motion.div>

            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                {/* Two-column layout on desktop */}
                <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-start">
                    {/* Left column - Sticky header */}
                    <div className="lg:col-span-2 mb-12 lg:mb-0">
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Eyebrow */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-[2px] bg-gradient-to-r from-sky-500 to-cyan-500" />
                                    <span className="text-sky-400 text-sm font-medium tracking-wider uppercase">
                                        Why Choose Us
                                    </span>
                                </div>

                                {/* Title */}
                                <h2 className="font-bold text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                                    {title}
                                    <span className="block text-neutral-500 mt-2">{titleHighlight}</span>
                                </h2>

                                {/* Description */}
                                <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                                    We combine technical expertise with a deep understanding of business needs to deliver software that makes an impact.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-800">
                                    <div>
                                        <div className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-cyan-500 bg-clip-text text-transparent">
                                            98%
                                        </div>
                                        <div className="text-neutral-500 text-sm mt-1">Client Satisfaction</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold bg-gradient-to-br from-sky-400 to-cyan-500 bg-clip-text text-transparent">
                                            150+
                                        </div>
                                        <div className="text-neutral-500 text-sm mt-1">Projects Delivered</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right column - Benefits list */}
                    <div className="lg:col-span-3">
                        {/* Top border decoration */}
                        <div className="h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-4" />

                        {benefits.map((benefit, index) => (
                            <BenefitRow
                                key={index}
                                benefit={benefit}
                                index={index}
                            />
                        ))}

                        {/* Bottom CTA */}
                        <motion.div
                            className="mt-12 flex items-center justify-between"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <span className="text-neutral-500">
                                Ready to get started?
                            </span>
                            <Link href="/contact">
                                <ShinyButton>
                                    Start a Project
                                </ShinyButton>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
