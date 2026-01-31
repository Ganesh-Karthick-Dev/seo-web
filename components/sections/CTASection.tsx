"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonWrapperRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
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
                        start: "top 60%",
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
                    start: "top 55%",
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

            // Button animation with bounce
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

    // Button follows cursor only when section is in view and user has not requested reduced motion (saves rAF on low-end)
    useEffect(() => {
        const container = containerRef.current;
        const buttonWrapper = buttonWrapperRef.current;
        const section = sectionRef.current;

        if (!container || !buttonWrapper || !section) return;

        const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return;

        let originalX = 0;
        let originalY = 0;
        let isInitialized = false;
        let currentX = 0;
        let currentY = 0;
        let targetX = 0;
        let targetY = 0;
        let animationId: number;
        let inView = false;

        const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

        const handleMouseMove = (e: MouseEvent) => {
            if (!inView) return;
            const rect = container.getBoundingClientRect();
            const wrapperRect = buttonWrapper.getBoundingClientRect();
            if (!isInitialized) {
                originalX = wrapperRect.left - rect.left + wrapperRect.width / 2;
                originalY = wrapperRect.top - rect.top + wrapperRect.height / 2;
                isInitialized = true;
            }
            targetX = e.clientX - rect.left - originalX;
            targetY = e.clientY - rect.top - originalY;
        };

        const animate = () => {
            if (!inView) {
                animationId = requestAnimationFrame(animate);
                return;
            }
            currentX = lerp(currentX, targetX, 0.06);
            currentY = lerp(currentY, targetY, 0.06);
            gsap.set(buttonWrapper, { x: currentX, y: currentY });
            animationId = requestAnimationFrame(animate);
        };

        const handleMouseLeave = () => {
            targetX = 0;
            targetY = 0;
        };

        const io = new IntersectionObserver(
            ([e]) => {
                inView = e.isIntersecting;
                if (!inView) {
                    gsap.set(buttonWrapper, { x: 0, y: 0 });
                    currentX = 0;
                    currentY = 0;
                    targetX = 0;
                    targetY = 0;
                }
            },
            { threshold: 0.2 }
        );
        io.observe(section);

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
        animationId = requestAnimationFrame(animate);

        return () => {
            io.disconnect();
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
                    src="/home/cta-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark Overlay with Orange Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-blue-950/50 to-black/70" />

            {/* Subtle Orange Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-cyan-500/10" />

            <div ref={containerRef} className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Headline */}
                    <div className="overflow-hidden mb-6">
                        <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Ready to Lead Your Industry?
                        </h2>
                    </div>

                    {/* Description */}
                    <p ref={descRef} className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
                        Don&apos;t let technology be the bottleneck. Partner with an engineering team that takes your success as seriously as you do.
                    </p>

                    {/* CTA Button Wrapper - Follows cursor freely */}
                    <div
                        ref={buttonWrapperRef}
                        className="relative pointer-events-auto"
                        style={{ willChange: "transform" }}
                    >
                        <Link
                            ref={buttonRef}
                            href="/contact"
                            className="group relative flex h-14 items-center justify-center gap-3 rounded-full overflow-hidden bg-white px-10 text-blue-600 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                        >
                            <span className="relative z-10 flex items-center gap-2 text-lg">
                                Let&apos;s Talk
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>

                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
