"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutMissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const horizontalContent = horizontalRef.current;
            const trigger = triggerRef.current;
            const textContainer = textRef.current;

            if (!horizontalContent || !trigger || !textContainer) return;

            // Split text into individual letters
            const text = "Through scalable solutions — transparent execution — and engineering practices that turn technical complexity into business advantage.";
            textContainer.innerHTML = text.split("").map((char, i) =>
                char === " "
                    ? `<span class="letter inline-block" data-index="${i}">&nbsp;</span>`
                    : `<span class="letter inline-block" data-index="${i}">${char}</span>`
            ).join("");

            const letters = textContainer.querySelectorAll(".letter");

            // Get the width of horizontal content
            const getScrollWidth = () => {
                return horizontalContent.scrollWidth - window.innerWidth + 300;
            };

            // Title animation
            gsap.fromTo(titleRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: trigger,
                        start: "top 80%",
                    },
                }
            );

            // Create the horizontal scroll animation first (we need its ID)
            const horizontalScroll = gsap.to(horizontalContent, {
                x: () => -getScrollWidth(),
                ease: "none",
                scrollTrigger: {
                    id: "horizontal",
                    trigger: trigger,
                    start: "top top",
                    end: () => `+=${getScrollWidth()}`,
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Get the ScrollTrigger instance
            const st = ScrollTrigger.getById("horizontal");

            // Letters assemble as they scroll into the viewport from the right
            letters.forEach((letter) => {
                const randomY = (Math.random() - 0.5) * 200;
                const randomRotate = (Math.random() - 0.5) * 90;
                const randomScale = 0.5 + Math.random() * 0.3;

                // Set initial scattered state
                gsap.set(letter, {
                    x: 100 + Math.random() * 100,
                    y: randomY,
                    rotation: randomRotate,
                    scale: randomScale,
                    opacity: 0,
                });

                // Animate to final position when letter comes into view
                gsap.to(letter, {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: letter,
                        containerAnimation: horizontalScroll,
                        start: "left 95%",
                        end: "left 70%",
                        scrub: 0.3,
                    },
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-black overflow-hidden">
            {/* Pinned Container */}
            <div ref={triggerRef} className="relative min-h-screen">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(6,182,212,0.08)_0%,_transparent_50%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                {/* Content */}
                <div className="relative h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-16">
                    {/* Title */}
                    <div ref={titleRef} className="mb-16 max-w-5xl">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Our Mission <br />
                            <span className="text-neutral-500">To Transform How Businesses</span>{" "}
                            <span className="text-cyan-500">Execute.</span>
                        </h2>
                    </div>

                    {/* Horizontal Scrolling Text - All White */}
                    <div className="overflow-visible">
                        <div
                            ref={horizontalRef}
                            className="inline-block"
                        >
                            <div
                                ref={textRef}
                                className="text-4xl md:text-6xl lg:text-8xl font-medium text-white whitespace-nowrap"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
