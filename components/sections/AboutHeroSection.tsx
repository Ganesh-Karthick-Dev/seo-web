"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutHeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const helloRef = useRef<HTMLSpanElement>(null);
    const wereRef = useRef<HTMLSpanElement>(null);
    const zylexRef = useRef<HTMLSpanElement>(null);
    const sublineRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline
            const master = gsap.timeline({ delay: 0.3 });

            // Split "Hello," into letters
            const helloText = "Hello,";
            if (helloRef.current) {
                helloRef.current.innerHTML = helloText
                    .split("")
                    .map((char, i) =>
                        `<span class="inline-block opacity-0 translate-y-[100px] rotate-[15deg]" style="transform-origin: bottom left;" data-char="${i}">${char === " " ? "&nbsp;" : char}</span>`
                    )
                    .join("");
            }

            // Split "We're" into letters
            const wereText = "We're";
            if (wereRef.current) {
                wereRef.current.innerHTML = wereText
                    .split("")
                    .map((char, i) =>
                        `<span class="inline-block opacity-0 translate-y-[100px] rotate-[15deg]" style="transform-origin: bottom left;" data-char="${i}">${char === " " ? "&nbsp;" : char}</span>`
                    )
                    .join("");
            }

            // Set initial state for Zylex (animate as whole to preserve gradient)
            gsap.set(zylexRef.current, {
                opacity: 0,
                scale: 0.5,
                filter: "blur(10px)",
            });

            // Animate "Hello," letters - cascading entrance
            const helloChars = helloRef.current?.querySelectorAll("span") || [];
            master.to(helloChars, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)",
            });

            // Animate "We're" letters with slight delay
            const wereChars = wereRef.current?.querySelectorAll("span") || [];
            master.to(wereChars, {
                opacity: 1,
                y: 0,
                rotation: 0,
                duration: 0.5,
                stagger: 0.04,
                ease: "back.out(1.5)",
            }, "-=0.3");

            // Animate "Zylex." - explosive entrance with scale and blur (whole word to preserve gradient)
            master.to(zylexRef.current, {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.8,
                ease: "elastic.out(1.2, 0.5)",
            }, "-=0.2");

            // Seamless fire gradient sweep - bottom to top (no jarring loop)
            gsap.fromTo(zylexRef.current,
                { backgroundPosition: "50% 0%" },
                {
                    backgroundPosition: "50% -100%",
                    duration: 2.5,
                    repeat: -1,
                    ease: "none",
                    delay: 2,
                }
            );

            // Subline 1 - Reveal with clip-path
            if (line1Ref.current) {
                const words1 = line1Ref.current.querySelectorAll(".word");
                master.fromTo(words1,
                    {
                        opacity: 0,
                        y: 40,
                        rotationX: -90,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        rotationX: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power4.out",
                    },
                    "-=0.5"
                );
            }

            // Subline 2 - Slide in from right with typewriter cursor
            if (line2Ref.current) {
                const words2 = line2Ref.current.querySelectorAll(".word");
                master.fromTo(words2,
                    {
                        opacity: 0,
                        x: 30,
                        filter: "blur(4px)",
                    },
                    {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.4"
                );
            }

            // Cursor blink animation
            if (cursorRef.current) {
                master.to(cursorRef.current, {
                    opacity: 1,
                    duration: 0.01,
                }, "-=0.4");

                gsap.to(cursorRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut",
                    delay: 2,
                });
            }

            // Floating animation for background elements
            gsap.to(".hero-orb-1", {
                y: -30,
                x: 20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-orb-2", {
                y: 40,
                x: -30,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".hero-orb-3", {
                y: -20,
                x: -20,
                duration: 3.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Animated Background Orbs */}
            <div className="hero-orb-1 absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none" />
            <div className="hero-orb-2 absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
            <div className="hero-orb-3 absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Radial Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_black_70%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[1.05] mb-8">
                    {/* Line 1: Hello, */}
                    <div className="overflow-hidden mb-2 md:mb-4">
                        <span
                            ref={helloRef}
                            className="inline-block text-white"
                        >
                            Hello,
                        </span>
                    </div>

                    {/* Line 2: We're Zylex. */}
                    <div className="overflow-hidden flex items-center justify-center gap-3 md:gap-6">
                        <span
                            ref={wereRef}
                            className="inline-block text-white"
                        >
                            We&apos;re
                        </span>
                        <span
                            ref={zylexRef}
                            className="inline-block text-cyan-500"
                        >
                            Zylex.
                        </span>
                    </div>
                </h1>

                {/* Subheadline */}
                <div
                    ref={sublineRef}
                    className="max-w-4xl mx-auto"
                    style={{ perspective: "1000px" }}
                >
                    {/* Line 1 */}
                    <div
                        ref={line1Ref}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-300 mb-2"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <span className="word inline-block">Built</span>{" "}
                        <span className="word inline-block">on</span>{" "}
                        <span className="word inline-block text-white font-semibold">Engineering</span>{" "}
                        <span className="word inline-block text-white font-semibold">Rigor.</span>
                    </div>

                    {/* Line 2 */}
                    <div
                        ref={line2Ref}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-300"
                    >
                        <span className="word inline-block">Focused</span>{" "}
                        <span className="word inline-block">on</span>{" "}
                        <span className="word inline-block text-cyan-400 font-semibold">Business</span>{" "}
                        <span className="word inline-block text-cyan-400 font-semibold">Impact.</span>
                        <span
                            ref={cursorRef}
                            className="inline-block w-[3px] md:w-[4px] h-[1.2em] bg-cyan-500 ml-1 opacity-0 align-middle"
                        />
                    </div>
                </div>

                {/* Subtext */}
                <p className="max-w-2xl mx-auto mt-8 text-lg text-neutral-400 leading-relaxed animate-fade-in-up delay-1000">
                    You focus on the big picture. We&apos;ll build the engineering engine that makes it actually happen.
                </p>

                {/* CTA Button */}
                <div className="mt-10 animate-fade-in-up delay-1200">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-cyan-600 rounded-full hover:bg-cyan-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 focus:ring-offset-black"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            </div>

            {/* Scroll Indicator - Bottom Center */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-xs text-neutral-400 uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-400 to-transparent" />
            </div>
        </section>
    );
}
