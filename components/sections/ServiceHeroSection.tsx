"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";
import { ShinyButton } from "@/components/ui/shiny-button";

interface ServiceHeroProps {
    // Core content
    title: string;
    subtitle: string;
    description: string;

    // CTA
    ctaText?: string;
    ctaHref?: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;

    // Visual
    gradientColors?: string[];
    highlights?: string[];

    // Icon for the service (Lucide icon component)
    icon?: React.ComponentType<{ className?: string }>;
}

export function ServiceHeroSection({
    title,
    subtitle,
    description,
    ctaText = "Get Started",
    ctaHref = "/contact",
    secondaryCtaText,
    secondaryCtaHref,
    gradientColors = ["#ea580c", "#f97316", "#fb923c", "#fdba74", "#fed7aa"],
    highlights = [],
    icon: Icon,
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <GradientWave
                colors={gradientColors}
                isPlaying={true}
                darkenTop={false}
                noiseSpeed={0.000008}
                noiseFrequency={[0.00012, 0.00024]}
                deform={{
                    incline: 0.3,
                    noiseAmp: 200,
                    noiseFlow: 4,
                    noiseSpeed: 8,
                }}
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center">
                    {/* Subtitle badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                    >
                        {Icon && <Icon className="w-4 h-4 text-orange-400" />}
                        <span className="text-sm font-medium text-white/90">{subtitle}</span>
                    </motion.div>

                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
                    >
                        {title.split(' ').map((word, index, arr) => (
                            <span key={index}>
                                {index === arr.length - 1 ? (
                                    <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                                        {word}
                                    </span>
                                ) : (
                                    word + ' '
                                )}
                            </span>
                        ))}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4 mb-10"
                        >
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                                    <span className="text-sm text-white/90">{highlight}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center justify-center"
                    >
                        <Link href={ctaHref}>
                            <ShinyButton>
                                {ctaText}
                            </ShinyButton>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-1.5 h-2.5 rounded-full bg-white/60"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
