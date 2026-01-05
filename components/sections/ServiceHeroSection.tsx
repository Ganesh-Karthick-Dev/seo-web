"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { GradientWave } from "@/components/ui/gradient-wave";
import { ShinyButton } from "@/components/ui/shiny-button";
import gsap from "gsap";

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
    gradientColors = ["#38bdf8", "#ffffff", "#38bdf8", "#ffffff", "#38bdf8", "#ffffff"],
    highlights = [],
    icon: Icon,
}: ServiceHeroProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Split title into words and letters
    const titleStructure = useMemo(() => {
        const words = title.split(' ');
        return words.map((word, wordIndex) => ({
            word,
            isLast: wordIndex === words.length - 1,
            letters: word.split(''),
        }));
    }, [title]);

    useEffect(() => {
        if (!titleRef.current) return;

        const letterElements = titleRef.current.querySelectorAll('.title-letter');
        const lettersArray = Array.from(letterElements);

        // Create a shuffled array of indices for random order animation
        const shuffledIndices = lettersArray
            .map((_, i) => i)
            .sort(() => Math.random() - 0.5);

        // Set initial state - letters start from "in front" of the screen
        gsap.set(letterElements, {
            opacity: 0,
            scale: 3,
            z: 500,
            rotateX: -20,
            transformPerspective: 1000,
        });

        // Animate each letter in random order
        shuffledIndices.forEach((originalIndex, animationOrder) => {
            gsap.to(lettersArray[originalIndex], {
                opacity: 1,
                scale: 1,
                z: 0,
                rotateX: 0,
                duration: 1.1,
                ease: "power3.out",
                delay: 0.3 + (animationOrder * 0.04), // Stagger based on animation order
            });
        });
    }, [title]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-400">
            {/* Animated Gradient Background */}
            <GradientWave
                colors={gradientColors}
                isPlaying={true}
                darkenTop={false}
                noiseSpeed={0.00001}
                noiseFrequency={[0.0001, 0.0009]}
                deform={{
                    incline: 0.5,
                    noiseAmp: 250,
                    noiseFlow: 5,
                }}
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-[1]" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="text-center" style={{ perspective: '1000px' }}>
                    {/* Subtitle badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
                    >
                        {Icon && <Icon className="w-4 h-4 text-sky-400" />}
                        <span className="text-sm font-medium text-white/90">{subtitle}</span>
                    </motion.div>

                    {/* Main title with GSAP animation - each letter independent */}
                    <h1
                        ref={titleRef}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        {titleStructure.map((wordData, wordIndex) => (
                            <span key={wordIndex} className="inline-block whitespace-nowrap">
                                {wordData.letters.map((letter, letterIndex) => (
                                    <span
                                        key={`${wordIndex}-${letterIndex}`}
                                        className={`title-letter inline-block ${wordData.isLast
                                                ? 'bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent'
                                                : ''
                                            }`}
                                        style={{ transformStyle: 'preserve-3d' }}
                                    >
                                        {letter}
                                    </span>
                                ))}
                                {wordIndex < titleStructure.length - 1 && (
                                    <span className="inline-block">&nbsp;</span>
                                )}
                            </span>
                        ))}
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    {/* Highlights */}
                    {highlights.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.3 }}
                            className="flex flex-wrap justify-center gap-4 mb-10"
                        >
                            {highlights.map((highlight, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-sky-400" />
                                    <span className="text-sm text-white/90">{highlight}</span>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
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
                transition={{ delay: 1.8, duration: 0.6 }}
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
