"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutMissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const trigger = sectionRef.current;
            if (!trigger || !titleRef.current || !blockRef.current) return;

            gsap.fromTo(
                titleRef.current,
                { y: 32, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: { trigger, start: "top 78%" },
                }
            );

            gsap.fromTo(
                blockRef.current,
                { y: 28, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.15,
                    scrollTrigger: { trigger, start: "top 78%" },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-32 overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(6,182,212,0.06)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={titleRef} className="mb-16 max-w-4xl overflow-hidden">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                        Our Mission <br />
                        <span className="text-neutral-500">To Transform How Businesses</span>{" "}
                        <span className="text-cyan-500">Execute.</span>
                    </h2>
                </div>

                {/* Mission statement – enhanced block */}
                <div
                    ref={blockRef}
                    className="relative max-w-4xl border-l-2 border-cyan-500/50 pl-6 md:pl-8 py-2"
                >
                    <p className="text-xl md:text-2xl text-neutral-300 leading-relaxed">
                        Through{" "}
                        <span className="text-cyan-400 font-semibold">scalable solutions</span>
                        {" — "}
                        <span className="text-cyan-400 font-semibold">transparent execution</span>
                        {" — and "}
                        <span className="text-cyan-400 font-semibold">engineering practices</span>
                        {" that turn "}
                        <span className="text-neutral-400 italic">technical complexity</span>
                        {" into "}
                        <span className="text-white font-semibold">business advantage</span>.
                    </p>
                    {/* Accent line under payoff */}
                    <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-500/60 to-transparent" />
                </div>
            </div>
        </section>
    );
}
