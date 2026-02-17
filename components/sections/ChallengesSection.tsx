"use strict";
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, TrendingUp, Code, Anchor } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const challenges = [
    {
        label: "TIMELINE TRAP",
        title: 'The "Where Is It?" Trap',
        description:
            "Deadlines shouldn't be suggestions. You need a partner who focuses on shipping, not excuses. We trade uncertainty for predictable sprints, so you always know when \"done\" is actually done.",
        icon: Clock,
        color: "#3b82f6", // blue
    },
    {
        label: "SCALABILITY",
        title: "The Crash Ceiling",
        description:
            "Success shouldn't break your site. You need infrastructure that handles 10x growth as easily as it handles today. We build tech that scales up, not falls down.",
        icon: TrendingUp,
        color: "#22d3ee", // cyan
    },
    {
        label: "CODE QUALITY",
        title: "The Messy Code Problem",
        description:
            "Bad code isn't just annoying—it's a business risk. You deserve a clean, organized system that speeds up new features instead of making every update a struggle.",
        icon: Code,
        color: "#a78bfa", // violet
    },
    {
        label: "LEGACY SYSTEMS",
        title: 'The "Old Tech" Anchor',
        description:
            "Don't let outdated systems hold you back. We modernize your stack so your legacy tech becomes a strength, not something you have to work around.",
        icon: Anchor,
        color: "#f59e0b", // amber
    },
];

export function ChallengesSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // DESKTOP: Pinned scroll with crossfade
            mm.add("(min-width: 1024px)", () => {
                const slides = gsap.utils.toArray<HTMLElement>(".challenge-slide");
                const totalSlides = slides.length;

                // Hide all slides and their text elements
                slides.forEach((slide, i) => {
                    const textEls = slide.querySelectorAll(".challenge-label, .challenge-title, .challenge-desc");
                    const iconEl = slide.querySelector(".challenge-icon");

                    if (i === 0) {
                        // First slide: reveal text elements with stagger
                        gsap.set(slide, { opacity: 1 });
                        gsap.set(textEls, { opacity: 1, y: 0 });
                        gsap.set(iconEl, { opacity: 1, scale: 1 });
                    } else {
                        gsap.set(slide, { opacity: 1 });
                        gsap.set(textEls, { opacity: 0, y: 60 });
                        gsap.set(iconEl, { opacity: 0, scale: 0.8 });
                    }
                });

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=${totalSlides * 1000}`,
                        pin: true,
                        scrub: 1.5,
                        anticipatePin: 1,
                    },
                });

                for (let i = 0; i < totalSlides - 1; i++) {
                    const currentTextEls = slides[i].querySelectorAll(".challenge-label, .challenge-title, .challenge-desc");
                    const currentIcon = slides[i].querySelector(".challenge-icon");
                    const nextTextEls = slides[i + 1].querySelectorAll(".challenge-label, .challenge-title, .challenge-desc");
                    const nextIcon = slides[i + 1].querySelector(".challenge-icon");

                    // Brief hold on current slide
                    tl.to({}, { duration: 0.3 });

                    // Exit + Enter happen together (overlapping)
                    const exitLabel = `exit${i}`;

                    // Exit current text (slides up, fades out)
                    tl.to(currentTextEls, {
                        opacity: 0,
                        y: -40,
                        duration: 0.35,
                        stagger: 0.05,
                        ease: "power2.in",
                    }, exitLabel);

                    // Exit current icon
                    tl.to(currentIcon, {
                        opacity: 0,
                        scale: 0.85,
                        duration: 0.3,
                        ease: "power2.in",
                    }, exitLabel);

                    // Enter next text (starts while exit is still happening)
                    tl.fromTo(
                        nextTextEls,
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.4,
                            stagger: 0.06,
                            ease: "power3.out",
                        },
                        `${exitLabel}+=0.15`
                    );

                    // Enter next icon
                    tl.fromTo(
                        nextIcon,
                        { opacity: 0, scale: 0.85 },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.4,
                            ease: "power3.out",
                        },
                        `${exitLabel}+=0.15`
                    );
                }

                // Hold last slide
                tl.to({}, { duration: 0.4 });
            });

            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden bg-zinc-950"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 h-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                {/* Title - Always Visible */}
                <div className="mb-16">
                    <h2
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        The Growth Blockers <br />
                        <span className="text-neutral-500">
                            What&apos;s Really Stopping You?
                        </span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
                        You&apos;ve already proven people want your product. Now
                        let&apos;s eliminate the technical bottlenecks slowing you
                        down.
                    </p>
                </div>

                {/* Slides Container - Relative so slides stack */}
                <div className="relative w-full flex-1 max-h-[400px]">
                    {challenges.map((challenge, i) => (
                        <div
                            key={i}
                            className="challenge-slide absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                        >
                            {/* Left: Text Content */}
                            <div className="flex flex-col justify-center">
                                <span
                                    className="challenge-label text-xs font-bold tracking-[0.2em] uppercase mb-4 block"
                                    style={{ color: challenge.color }}
                                >
                                    {challenge.label}
                                </span>
                                <h3 className="challenge-title text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    {challenge.title}
                                </h3>
                                <p className="challenge-desc text-neutral-400 text-base md:text-lg leading-relaxed max-w-lg">
                                    {challenge.description}
                                </p>


                            </div>

                            {/* Right: Big Icon */}
                            <div className="challenge-icon hidden lg:flex items-center justify-center">
                                <div
                                    className="relative w-[280px] h-[280px] flex items-center justify-center rounded-3xl"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${challenge.color}15, transparent 70%)`,
                                    }}
                                >
                                    {/* Glow ring */}
                                    <div
                                        className="absolute inset-0 rounded-3xl border opacity-30"
                                        style={{
                                            borderColor: challenge.color,
                                            boxShadow: `0 0 60px ${challenge.color}20, inset 0 0 60px ${challenge.color}10`,
                                        }}
                                    />
                                    <challenge.icon
                                        className="w-32 h-32"
                                        style={{ color: challenge.color }}
                                        strokeWidth={1}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
