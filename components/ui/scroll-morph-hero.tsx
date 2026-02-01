"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { industries } from "@/lib/industries-data";

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface FlipCardProps {
    icon: (typeof industries)[number]["icon"];
    accentColor: string;
    index: number;
    total: number;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

// --- FlipCard Component ---
const CARD_WIDTH = 60;
const CARD_HEIGHT = 85;

function FlipCard({
    icon: Icon,
    accentColor,
    index,
    target,
}: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 15,
            }}
            style={{
                position: "absolute",
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180 }}
            >
                {/* Front Face - Industry Icon */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-white dark:bg-zinc-800 flex items-center justify-center border border-neutral-200 dark:border-neutral-700"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <Icon className={cn("w-8 h-8", accentColor)} strokeWidth={1.5} />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden rounded-xl shadow-lg bg-gray-900 flex flex-col items-center justify-center p-4 border border-gray-700"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mb-1">View</p>
                        <p className="text-xs font-medium text-white">Details</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function ScrollMorphHero() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    // --- Container Size ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- GSAP ScrollTrigger for Pinning ---
    useEffect(() => {
        if (!triggerRef.current || !containerRef.current) return;

        const trigger = ScrollTrigger.create({
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000", // Pin for 3000px of scrolling
            pin: containerRef.current,
            scrub: 1,
            onUpdate: (self) => {
                setScrollProgress(self.progress);
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);

    // --- Intro Sequence ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const totalCards = industries.length;

    // --- Random Scatter Positions ---
    const scatterPositions = useMemo(() => {
        return industries.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    // Calculate animation values from scroll progress
    // Phase 1: 0-0.2 = morph from circle to arc
    // Phase 2: 0.2-1.0 = rotate/shuffle the arc
    const morphValue = Math.min(scrollProgress / 0.2, 1);
    const rotateValue = scrollProgress > 0.2 ? (scrollProgress - 0.2) / 0.8 : 0;

    // Content opacity
    const contentOpacity = morphValue > 0.8 ? (morphValue - 0.8) / 0.2 : 0;
    const contentY = 20 - (contentOpacity * 20);

    return (
        <div ref={triggerRef} className="relative w-full">
            <div ref={containerRef} className="relative w-full h-screen bg-[#FAFAFA] overflow-hidden">
                <div className="flex h-full w-full flex-col items-center justify-center">

                    {/* Intro Text */}
                    <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" } : { opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 1 }}
                            className="text-2xl font-medium tracking-tight text-gray-800 md:text-4xl"
                        >
                            Industries We Transform
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500"
                        >
                            SCROLL TO EXPLORE
                        </motion.p>
                    </div>

                    {/* Arc Active Content */}
                    <div
                        style={{ opacity: contentOpacity, transform: `translateY(${contentY}px)` }}
                        className="absolute top-[10%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-4">
                            Explore Our Industries
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 max-w-lg leading-relaxed">
                            Discover how we deliver scalable solutions across diverse sectors. <br className="hidden md:block" />
                            From healthcare to fintech, we transform businesses with cutting-edge technology.
                        </p>
                    </div>

                    {/* Main Container */}
                    <div className="relative flex items-center justify-center w-full h-full">
                        {industries.map((industry, i) => {
                            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                            if (introPhase === "scatter") {
                                target = scatterPositions[i];
                            } else if (introPhase === "line") {
                                const lineSpacing = 70;
                                const lineTotalWidth = totalCards * lineSpacing;
                                const lineX = i * lineSpacing - lineTotalWidth / 2;
                                target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                            } else {
                                const isMobile = containerSize.width < 768;
                                const minDimension = Math.min(containerSize.width, containerSize.height);

                                const circleRadius = Math.min(minDimension * 0.35, 350);
                                const circleAngle = (i / totalCards) * 360;
                                const circleRad = (circleAngle * Math.PI) / 180;
                                const circlePos = {
                                    x: Math.cos(circleRad) * circleRadius,
                                    y: Math.sin(circleRad) * circleRadius,
                                    rotation: circleAngle + 90,
                                };

                                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
                                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                                const arcCenterY = arcApexY + arcRadius;
                                const spreadAngle = isMobile ? 100 : 130;
                                const startAngle = -90 - (spreadAngle / 2);
                                const step = spreadAngle / (totalCards - 1 || 1);

                                const maxRotation = spreadAngle * 0.8;
                                const boundedRotation = -rotateValue * maxRotation;

                                const currentArcAngle = startAngle + (i * step) + boundedRotation;
                                const arcRad = (currentArcAngle * Math.PI) / 180;

                                const arcPos = {
                                    x: Math.cos(arcRad) * arcRadius,
                                    y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                    rotation: currentArcAngle + 90,
                                    scale: isMobile ? 1.4 : 1.8,
                                };

                                target = {
                                    x: lerp(circlePos.x, arcPos.x, morphValue),
                                    y: lerp(circlePos.y, arcPos.y, morphValue),
                                    rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                    scale: lerp(1, arcPos.scale, morphValue),
                                    opacity: 1,
                                };
                            }

                            return (
                                <FlipCard
                                    key={i}
                                    icon={industry.icon}
                                    accentColor={industry.accentColor}
                                    index={i}
                                    total={totalCards}
                                    target={target}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
