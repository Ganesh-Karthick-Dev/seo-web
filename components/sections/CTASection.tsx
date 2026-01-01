"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
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
                buttonRef.current,
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

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-24 md:py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500" />

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-700/30 via-transparent to-amber-400/20" />

            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />

            {/* Floating Shapes */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-400/30 blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-600/30 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Headline */}
                    <div className="overflow-hidden mb-6">
                        <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Accelerate delivery — without compromising quality, stability, or reliability.
                        </h2>
                    </div>

                    {/* Description */}
                    <p ref={descRef} className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
                        We align engineering decisions to your goals, growth plans, and long-term value.
                    </p>

                    {/* CTA Button */}
                    <Link
                        ref={buttonRef}
                        href="/contact"
                        className="group relative flex h-14 items-center justify-center gap-3 rounded-full overflow-hidden bg-white px-10 text-orange-600 font-semibold transition-all hover:scale-105 hover:shadow-2xl hover:shadow-black/20"
                    >
                        <span className="relative z-10 flex items-center gap-2 text-lg">
                            Talk to our team
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>

                        {/* Hover background effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-orange-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
