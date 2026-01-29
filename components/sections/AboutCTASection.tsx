"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function AboutCTASection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonWrapperRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section curtain reveal - opens from center to both sides
            gsap.fromTo(sectionRef.current,
                {
                    clipPath: "inset(0 50% 0 50%)", // Starts closed at center
                },
                {
                    clipPath: "inset(0 0% 0 0%)", // Opens fully
                    duration: 1.5,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%", // Triggers later when more visible
                    },
                }
            );

            // Background parallax - Stronger and more professional
            gsap.fromTo(bgRef.current,
                {
                    yPercent: -25,
                    scale: 1.2,
                },
                {
                    yPercent: 25,
                    scale: 1, // Subtle zoom out effect adds depth
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0, // Instant response for tighter feel
                    },
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 55%", // Content animates after reveal
                },
            });

            // Headline animation
            tl.fromTo(
                headlineRef.current,
                {
                    y: 60,
                    opacity: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 1,
                    ease: "power4.out",
                }
            );

            // Description animation
            tl.fromTo(
                descRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.5"
            );

            // Button animation
            tl.fromTo(
                buttonWrapperRef.current,
                { y: 20, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                },
                "-=0.3"
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Button follows cursor freely with extra smoothness
    useEffect(() => {
        const container = containerRef.current;
        const buttonWrapper = buttonWrapperRef.current;

        if (!container || !buttonWrapper) return;

        // Get original button position
        let originalX = 0;
        let originalY = 0;
        let isInitialized = false;

        // For extra smoothness - lerped position
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let animationId: number;

        const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const wrapperRect = buttonWrapper.getBoundingClientRect();

            // Initialize original position on first move
            if (!isInitialized) {
                originalX = wrapperRect.left - rect.left + wrapperRect.width / 2;
                originalY = wrapperRect.top - rect.top + wrapperRect.height / 2;
                isInitialized = true;
            }

            // Get cursor position relative to container
            const cursorX = e.clientX - rect.left;
            const cursorY = e.clientY - rect.top;

            // Set target position
            targetX = cursorX - originalX;
            targetY = cursorY - originalY;
        };

        // Smooth animation loop with lerp
        const animate = () => {
            // Lerp towards target with smooth factor (lower = smoother)
            currentX = lerp(currentX, targetX, 0.06);
            currentY = lerp(currentY, targetY, 0.06);

            gsap.set(buttonWrapper, {
                x: currentX,
                y: currentY,
            });

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseLeave = () => {
            targetX = 0;
            targetY = 0;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        animationId = requestAnimationFrame(animate);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                ref={bgRef}
                className="absolute -top-[20%] -bottom-[20%] left-0 right-0"
                style={{ willChange: "transform" }}
            >
                <img
                    src="/C:/Users/ganes/.gemini/antigravity/brain/fd744e3d-a059-415c-9bad-d68743456be7/global_cta_bg_1769655030245.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay with Blue Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/50 to-black/70" />

            {/* Subtle Blue Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 via-transparent to-blue-500/10" />

            <div ref={containerRef} className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Headline */}
                    <div className="overflow-hidden mb-6">
                        <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Move From Fragile Systems to Lasting Stability.
                        </h2>
                    </div>

                    {/* Description */}
                    <p ref={descRef} className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
                        You don&apos;t have to work around technical debt anymore. Partner with a technology solutions company that builds reliable, scalable foundations—ready for growth today and tomorrow.
                    </p>

                    {/* CTA Button Wrapper - Follows cursor freely */}
                    <div
                        ref={buttonWrapperRef}
                        className="relative pointer-events-auto"
                        style={{ willChange: "transform" }}
                    >
                        <Link
                            href="/contact"
                            className="group relative flex h-14 items-center justify-center gap-3 rounded-full overflow-hidden bg-white px-10 text-cyan-600 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                Let&apos;s Talk
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>

                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
