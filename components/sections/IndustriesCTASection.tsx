"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Code2, Lightbulb, Rocket, Palette, Mail, ArrowRight } from "lucide-react";
import { useAnimate } from "motion/react";

import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export function IndustriesCTASection() {
    const [scope, animate] = useAnimate();

    React.useEffect(() => {
        animate(
            [
                ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
                ["#tag-1", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 50, top: 102 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#tag-1", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#tag-2", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 224, top: 170 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#tag-2", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#tag-3", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 88, top: 198 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#tag-3", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#tag-4", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 200, top: 60 },
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#tag-4", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
            ],
            {
                repeat: Number.POSITIVE_INFINITY,
            },
        );
    }, [animate]);

    return (
        <section className="relative mx-auto py-20 md:py-32 bg-black">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <HighlightGroup className="group h-full">
                    <div
                        className="group/item h-full"
                        data-aos="fade-down"
                    >
                        <HighlighterItem className="rounded-3xl p-px">
                            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
                                <Particles
                                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                                    quantity={200}
                                    color={"#06b6d4"}
                                    vy={-0.2}
                                />
                                <div className="flex justify-center">
                                    <div className="flex h-full flex-col justify-center gap-10 p-6 md:p-8 md:h-[350px] md:flex-row">
                                        {/* Animated Tags Section */}
                                        <div
                                            className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                                            ref={scope}
                                        >
                                            {/* Center Logo */}
                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                                                <Rocket className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Floating Tags */}
                                            <div
                                                id="tag-4"
                                                className="absolute bottom-12 left-14 rounded-full border border-white/20 bg-zinc-800/80 px-3 py-1.5 text-xs text-white opacity-50 backdrop-blur-sm flex items-center gap-2"
                                            >
                                                <Palette className="w-3 h-3 text-purple-400" />
                                                UI/UX Design
                                            </div>
                                            <div
                                                id="tag-2"
                                                className="absolute left-2 top-20 rounded-full border border-white/20 bg-zinc-800/80 px-3 py-1.5 text-xs text-white opacity-50 backdrop-blur-sm flex items-center gap-2"
                                            >
                                                <Code2 className="w-3 h-3 text-blue-400" />
                                                Development
                                            </div>
                                            <div
                                                id="tag-3"
                                                className="absolute bottom-20 right-1 rounded-full border border-white/20 bg-zinc-800/80 px-3 py-1.5 text-xs text-white opacity-50 backdrop-blur-sm flex items-center gap-2"
                                            >
                                                <Rocket className="w-3 h-3 text-emerald-400" />
                                                Digital Strategy
                                            </div>
                                            <div
                                                id="tag-1"
                                                className="absolute right-12 top-10 rounded-full border border-white/20 bg-zinc-800/80 px-3 py-1.5 text-xs text-white opacity-50 backdrop-blur-sm flex items-center gap-2"
                                            >
                                                <Lightbulb className="w-3 h-3 text-cyan-400" />
                                                Consulting
                                            </div>

                                            {/* Animated Pointer */}
                                            <div id="pointer" className="absolute">
                                                <svg
                                                    width="16.8"
                                                    height="18.2"
                                                    viewBox="0 0 12 13"
                                                    className="fill-cyan-500"
                                                    stroke="white"
                                                    strokeWidth="1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                                                    />
                                                </svg>
                                                <span className="relative -top-1 left-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-2 py-0.5 text-[10px] text-white font-medium">
                                                    Zylex
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="-mt-16 flex h-full flex-col justify-center p-2 md:-mt-0 md:ml-10 md:w-[400px]">
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">
                                                    Let&apos;s Build Together
                                                </span>
                                                <h3 className="pb-2 font-bold">
                                                    <span className="text-2xl md:text-4xl text-white leading-tight">
                                                        Ready to Lead Your Industry?
                                                    </span>
                                                </h3>
                                            </div>
                                            <p className="mb-6 text-neutral-400 text-sm leading-relaxed">
                                                Don't let technical bottlenecks hold you back. Partner with an engineering team that delivers industry specific software solutions designed for your market's unique demands—built to scale, engineered to dominate.
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                <Link href="/contact">
                                                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 gap-2">
                                                        Let's Talk
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Button>
                                                </Link>
                                                <Link
                                                    href="mailto:info@zylex.com"
                                                    className={cn(
                                                        buttonVariants({
                                                            variant: "outline",
                                                            size: "icon",
                                                        }),
                                                        "border-white/20 bg-transparent hover:bg-white/10 text-white"
                                                    )}
                                                >
                                                    <Mail className="h-5 w-5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </HighlighterItem>
                    </div>
                </HighlightGroup>
            </div>
        </section>
    );
}
