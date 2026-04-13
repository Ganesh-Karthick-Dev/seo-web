"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VerticalTabItem {
    description: string;
    id: string;
    image: string;
    title: string;
}

interface VerticalTabsProps {
    autoPlayDuration?: number;
    className?: string;
    items: VerticalTabItem[];
}

const DEFAULT_AUTO_PLAY_DURATION = 5000;

export function VerticalTabs({
    autoPlayDuration = DEFAULT_AUTO_PLAY_DURATION,
    className,
    items,
}: VerticalTabsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const handleNext = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, [items.length]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length]);

    const handleTabClick = useCallback((index: number) => {
        if (index === activeIndex) return;

        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setIsPaused(false);
    }, [activeIndex]);

    useEffect(() => {
        if (isPaused || items.length <= 1) return;

        const interval = window.setInterval(() => {
            handleNext();
        }, autoPlayDuration);

        return () => window.clearInterval(interval);
    }, [activeIndex, autoPlayDuration, handleNext, isPaused, items.length]);

    if (items.length === 0) {
        return null;
    }

    const variants = {
        center: {
            opacity: 1,
            y: 0,
            zIndex: 1,
        },
        enter: (currentDirection: number) => ({
            opacity: 0,
            y: currentDirection > 0 ? "-100%" : "100%",
        }),
        exit: (currentDirection: number) => ({
            opacity: 0,
            y: currentDirection > 0 ? "100%" : "-100%",
            zIndex: 0,
        }),
    };

    return (
        <div className={cn("w-full", className)}>
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
                <div className="order-2 flex flex-col justify-center lg:order-1 lg:pt-4">
                    <div className="flex flex-col space-y-0">
                        {items.map((item, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleTabClick(index)}
                                    className={cn(
                                        "group relative flex items-start gap-4 border-t border-white/10 py-6 text-left transition-all duration-500 first:border-t-0 first:pt-0 md:gap-5 md:py-8",
                                        isActive
                                            ? "text-white"
                                            : "text-white/45 hover:text-white/80",
                                    )}
                                >
                                    <div className="absolute top-0 bottom-0 left-0 w-px bg-white/10">
                                        {isActive ? (
                                            <motion.div
                                                key={`progress-${index}-${isPaused}`}
                                                className="absolute top-0 left-0 w-full origin-top bg-white"
                                                initial={{ height: "0%" }}
                                                animate={isPaused ? { height: "0%" } : { height: "100%" }}
                                                transition={{
                                                    duration: autoPlayDuration / 1000,
                                                    ease: "linear",
                                                }}
                                            />
                                        ) : null}
                                    </div>

                                    <span className="pl-4 text-[10px] font-medium tabular-nums tracking-[0.28em] text-white/30 md:pl-6">
                                        /{item.id}
                                    </span>

                                    <div className="flex flex-1 flex-col gap-2">
                                        <span
                                            className={cn(
                                                "text-2xl font-semibold tracking-tight transition-colors duration-500 md:text-3xl lg:text-[2rem]",
                                                isActive ? "text-white" : "",
                                            )}
                                        >
                                            {item.title}
                                        </span>

                                        <AnimatePresence mode="wait">
                                            {isActive ? (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{
                                                        duration: 0.3,
                                                        ease: [0.23, 1, 0.32, 1],
                                                    }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="max-w-xl pb-2 text-sm leading-relaxed text-neutral-400 md:text-base">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="order-1 flex h-full flex-col justify-center lg:order-2">
                    <div
                        className="relative group/gallery"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] md:aspect-[4/3] lg:aspect-[16/11]">
                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.div
                                    key={items[activeIndex].id}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        y: { type: "spring", stiffness: 260, damping: 32 },
                                        opacity: { duration: 0.4 },
                                    }}
                                    className="absolute inset-0 h-full w-full cursor-pointer"
                                    onClick={handleNext}
                                >
                                    <Image
                                        src={items[activeIndex].image}
                                        alt={items[activeIndex].title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/gallery:scale-[1.03]"
                                        sizes="(max-width: 1024px) 100vw, 58vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                                </motion.div>
                            </AnimatePresence>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/45 to-transparent" />

                            <div className="absolute right-5 bottom-5 z-20 flex gap-2 md:right-7 md:bottom-7 md:gap-3">
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handlePrev();
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-all hover:bg-black/80 active:scale-95 md:h-12 md:w-12"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        handleNext();
                                    }}
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-all hover:bg-black/80 active:scale-95 md:h-12 md:w-12"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerticalTabs;
