"use strict";
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Cpu, Shuffle, Rocket, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Zap,
        title: "Speed You Can Actually See",
        description: "We work in focused 15-day sprints. You don't have to guess if we're working—you'll see real progress, fast.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        position: "lg:top-[20%] lg:left-[2%]" // 9:30 Position
    },
    {
        icon: Cpu,
        title: "Tech That Just Works",
        description: "We build systems that survive the real world. Security and uptime aren't 'extra features'—they're the bare minimum.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        position: "lg:top-[5%] lg:left-1/2 lg:-translate-x-1/2 lg:max-w-[300px]" // 12:00 Position
    },
    {
        icon: Shuffle,
        title: "Built for Your Reality",
        description: "No cookie-cutter templates or lazy shortcuts. We build solutions that fit your specific context and grow exactly how you need them to.",
        color: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        position: "lg:top-[28%] lg:right-[2%]" // 3:00 Position
    },
    {
        icon: Rocket,
        title: "The Right Mix: Enterprise Discipline, Startup Speed",
        description: "You get the professional rigor of a big consultancy, but with the energy and agility of a team that actually moves with you.",
        color: "text-fuchsia-400",
        bg: "bg-fuchsia-500/10",
        border: "border-fuchsia-500/20",
        position: "lg:bottom-[10%] lg:right-[8%]" // 4:30 Position
    },
    {
        icon: ShieldCheck,
        title: "Future Proof",
        description: "Scalable architecture designed to grow with your ambition, not against it.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        position: "lg:bottom-[10%] lg:left-[8%]" // 7:00 Position
    },
];

export function WhyChooseSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // DESKTOP ONLY: Pinned Scroll Animation
            mm.add("(min-width: 1024px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "+=3000",
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                    },
                });

                // Initial State: Hidden below screen
                gsap.set(".feature-card", { y: window.innerHeight, opacity: 0 });

                // 1. Reveal Animation
                tl.to(".feature-card", {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: {
                        amount: 0.5,
                        from: "random"
                    },
                    ease: "power3.out"
                });

                // 2. Hold phase
                tl.to({}, { duration: 0.5 });

                // 3. Exit Animation
                tl.to(".feature-card", {
                    y: -window.innerHeight,
                    opacity: 0,
                    duration: 1,
                    stagger: {
                        amount: 0.5,
                        from: "random"
                    },
                    ease: "power2.in"
                });
            });

            // MOBILE: No animation, cards are visible by default because gsap.set only runs on desktop matchMedia

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-zinc-950 overflow-hidden min-h-screen lg:h-screen flex flex-col justify-center py-20 lg:py-0"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Container: Flex col on mobile, Block on Desktop */}
            <div className="relative w-full h-full max-w-7xl mx-auto pointer-events-none flex flex-col items-center gap-8 lg:block px-4 lg:px-0">

                {/* Center Big Title - Mobile: Relative, Desktop: Absolute Center */}
                <div className="relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 text-center w-full px-4 mb-8 lg:mb-0">
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white tracking-tight"
                    >
                        Why Choose <span className="text-blue-500">Zylex?</span>
                    </h2>
                </div>

                {/* Cards - Mobile: Stacked, Desktop: Scattered Absolute */}
                {features.map((feature, i) => (
                    <div
                        key={i}
                        className={cn(
                            "feature-card relative lg:absolute w-full max-w-sm md:max-w-md lg:w-[280px] h-auto min-h-[160px] lg:h-[200px] bg-white p-6 flex flex-col justify-center shadow-2xl pointer-events-auto z-10 mx-auto",
                            feature.position
                        )}
                    >
                        <h3 className="text-black text-sm md:text-base font-bold uppercase tracking-wide mb-2 lg:mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-neutral-600 text-xs leading-relaxed font-medium">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}


