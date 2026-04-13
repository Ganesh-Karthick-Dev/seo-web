"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface StandardItem {
    description: string;
    title: string;
}

interface OutsourceStandardsParallaxProps {
    items: StandardItem[];
}

const desktopSlotClasses = [
    "left-0 top-6 w-[31%]",
    "left-1/2 top-6 w-[31%] -translate-x-1/2",
    "right-0 top-6 w-[31%]",
];

export function OutsourceStandardsParallax({ items }: OutsourceStandardsParallaxProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLElement | null>>([]);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        const ctx = gsap.context(() => {
            mm.add("(min-width: 1024px)", () => {
                const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
                if (!pinnedRef.current || cards.length === 0) return;

                gsap.set(cards, {
                    autoAlpha: 0,
                    scale: 0.965,
                    y: 40,
                });
                gsap.set(cards[0], { x: -120, y: 0 });
                gsap.set(cards[1], { x: 0, y: 88 });
                gsap.set(cards[2], { x: 120, y: 0 });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: pinnedRef.current,
                        start: "top top+=120",
                        end: "+=1700",
                        pin: true,
                        scrub: 1.1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                timeline
                    .to(cards[0], {
                        autoAlpha: 1,
                        duration: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                    })
                    .to({}, { duration: 0.55 })
                    .to(cards[1], {
                        autoAlpha: 1,
                        duration: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                    })
                    .to({}, { duration: 0.55 })
                    .to(cards[2], {
                        autoAlpha: 1,
                        duration: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                    })
                    .to({}, { duration: 0.8 });
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            mm.revert();
        };
    }, [items]);

    const cardMarkup = (
        item: StandardItem,
        index: number,
        cardClassName?: string,
        withRef = false,
    ) => (
        <article
            key={item.title}
            ref={withRef ? (node) => {
                cardRefs.current[index] = node;
            } : undefined}
            className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-8 backdrop-blur-sm md:p-10",
                cardClassName,
            )}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_34%)] opacity-70" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/20 via-white/8 to-transparent" />

            <div className="relative flex h-full min-h-[24rem] flex-col">
                <div className="flex items-start justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white">
                        <ShieldCheck className="h-6 w-6" />
                    </span>
                    <span className="text-[10px] font-medium tracking-[0.3em] text-white/22">
                        /{String(index + 1).padStart(2, "0")}
                    </span>
                </div>

                <div className="mt-14 max-w-sm">
                    <h3 className="text-2xl font-semibold leading-[1.12] tracking-tight text-white md:text-[2rem]">
                        {item.title}
                    </h3>
                    <p className="mt-6 text-base leading-relaxed text-neutral-400 md:text-lg">
                        {item.description}
                    </p>
                </div>
            </div>
        </article>
    );

    return (
        <div ref={sectionRef} className="relative pt-4">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-12 left-[4%] h-72 w-72 rounded-full bg-white/[0.05] blur-[140px]" />
                <div className="absolute right-[8%] bottom-8 h-96 w-96 rounded-full bg-white/[0.035] blur-[170px]" />
            </div>

            <div className="relative grid grid-cols-1 gap-6 lg:hidden">
                {items.map((item, index) => cardMarkup(item, index))}
            </div>

            <div ref={pinnedRef} className="relative hidden lg:block">
                <div className="relative h-[34rem]">
                    {items.map((item, index) => (
                        <div
                            key={item.title}
                            className={cn("absolute", desktopSlotClasses[index] ?? "left-0 top-6 w-[31%]")}
                        >
                            {cardMarkup(item, index, undefined, true)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
