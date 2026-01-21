"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutVisionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const para1Ref = useRef<HTMLParagraphElement>(null);
    const para2Ref = useRef<HTMLParagraphElement>(null);
    const para3Ref = useRef<HTMLParagraphElement>(null);
    const parallaxBg1Ref = useRef<HTMLDivElement>(null);
    const parallaxBg2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Strong Parallax background effect - noticeable movement
            gsap.to(parallaxBg1Ref.current, {
                y: -150,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            gsap.to(parallaxBg2Ref.current, {
                y: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                },
            });

            // Content parallax - subtle upward movement
            gsap.to(contentRef.current, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 2,
                },
            });

            // Title animation - clip reveal with slide up
            gsap.fromTo(titleRef.current,
                {
                    y: 80,
                    opacity: 0,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)"
                },
                {
                    y: 0,
                    opacity: 1,
                    clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Paragraph 1 - fade up
            gsap.fromTo(para1Ref.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: para1Ref.current,
                        start: "top 85%",
                    },
                }
            );

            // Paragraph 2 - slide from left with border reveal
            gsap.fromTo(para2Ref.current,
                { x: -80, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: para2Ref.current,
                        start: "top 85%",
                    },
                }
            );

            // Paragraph 3 - scale up entrance
            gsap.fromTo(para3Ref.current,
                { scale: 0.9, opacity: 0, y: 40 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: para3Ref.current,
                        start: "top 85%",
                    },
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-32 overflow-hidden bg-black"
        >
            {/* Parallax Background Elements - Large and noticeable */}
            <div
                ref={parallaxBg1Ref}
                className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none"
            />
            <div
                ref={parallaxBg2Ref}
                className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[80px] pointer-events-none"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Content Container - matches homepage max-w-[90rem] */}
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div ref={contentRef}>
                    {/* Left Aligned Title - matches homepage pattern */}
                    <div ref={titleRef} className="mb-16 max-w-4xl overflow-hidden">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            We Build Technology That <br />
                            <span className="text-neutral-500">Keeps Up With Your</span>{" "}
                            <span className="text-cyan-500">Vision.</span>
                        </h2>
                    </div>

                    {/* Paragraphs with different animations */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div className="space-y-10">
                            {/* Paragraph 1 */}
                            <p
                                ref={para1Ref}
                                className="text-xl md:text-2xl text-neutral-300 leading-relaxed"
                            >
                                That&apos;s why <span className="text-white font-semibold">Zylex exists</span>.
                                We&apos;re a team of engineers, architects, and strategists who believe great software
                                isn&apos;t just functional — it&apos;s <span className="text-cyan-400 font-semibold">reliable</span>,
                                <span className="text-cyan-400 font-semibold"> scalable</span>, and
                                <span className="text-white font-semibold"> built to evolve</span> with your business.
                            </p>

                            {/* Paragraph 2 - with left border accent */}
                            <div
                                ref={para2Ref}
                                className="border-l-2 border-cyan-500/40 pl-6"
                            >
                                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                                    We&apos;ve seen too many companies held back by fragile systems and partners
                                    who prioritize speed over sustainability. So we built Zylex differently —
                                    obsessed with <span className="text-cyan-400 font-medium">engineering excellence</span>,
                                    <span className="text-cyan-400 font-medium"> transparent execution</span>, and
                                    solutions designed for the <span className="text-white font-medium">long term</span>.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex items-center">
                            {/* Paragraph 3 - Featured callout */}
                            <div
                                ref={para3Ref}
                                className="relative p-8 border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
                            >
                                {/* Accent corner */}
                                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50" />
                                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-500/50" />

                                <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-medium">
                                    Whether you&apos;re <span className="text-cyan-400">launching a product</span>,
                                    <span className="text-cyan-400"> scaling a platform</span>, or
                                    <span className="text-cyan-500"> modernizing legacy systems</span> —
                                    we&apos;re here to turn <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4">ambitious visions</span> into
                                    <span className="underline decoration-cyan-500/50 decoration-2 underline-offset-4"> reliable execution</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

