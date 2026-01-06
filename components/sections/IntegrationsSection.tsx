"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
    Cloud,
    Database,
    Server,
    Code2,
    Smartphone,
    Globe,
    Cpu
} from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 md:size-16 items-center justify-center rounded-full border-2 border-neutral-200 bg-white p-3 shadow-lg",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function IntegrationsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <section className="w-full py-20 lg:py-32 bg-black">
            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Our Advanced Technology Stack
                        <br />
                        <span className="text-neutral-500">for Custom Software Development</span>
                    </h2>
                </div>

                {/* Animated Beam Demo */}
                <div
                    className="relative flex h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-10"
                    ref={containerRef}
                >
                    <div className="flex size-full flex-col max-w-lg max-h-[250px] items-stretch justify-between gap-8 md:gap-10">
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div1Ref}>
                                <Cloud className="w-6 h-6 md:w-8 md:h-8 text-sky-500" />
                            </Circle>
                            <Circle ref={div5Ref}>
                                <Database className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div2Ref}>
                                <Server className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
                            </Circle>
                            <Circle ref={div4Ref} className="size-16 md:size-20">
                                <Cpu className="w-8 h-8 md:w-10 md:h-10 text-cyan-500" />
                            </Circle>
                            <Circle ref={div6Ref}>
                                <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                            </Circle>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <Circle ref={div3Ref}>
                                <Code2 className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
                            </Circle>
                            <Circle ref={div7Ref}>
                                <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
                            </Circle>
                        </div>
                    </div>

                    {/* Beams from left side to center */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div1Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                        gradientStartColor="#0ea5e9"
                        gradientStopColor="#06b6d4"
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div2Ref}
                        toRef={div4Ref}
                        gradientStartColor="#22c55e"
                        gradientStopColor="#10b981"
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div3Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                        gradientStartColor="#ec4899"
                        gradientStopColor="#f43f5e"
                    />

                    {/* Beams from center to right side (reverse) */}
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div5Ref}
                        toRef={div4Ref}
                        curvature={-75}
                        endYOffset={-10}
                        reverse
                        gradientStartColor="#a855f7"
                        gradientStopColor="#8b5cf6"
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div6Ref}
                        toRef={div4Ref}
                        reverse
                        gradientStartColor="#f97316"
                        gradientStopColor="#fb923c"
                    />
                    <AnimatedBeam
                        containerRef={containerRef}
                        fromRef={div7Ref}
                        toRef={div4Ref}
                        curvature={75}
                        endYOffset={10}
                        reverse
                        gradientStartColor="#3b82f6"
                        gradientStopColor="#60a5fa"
                    />
                </div>

                {/* Integration Labels */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    <div className="text-center p-4">
                        <p className="text-white font-medium">Cloud Services</p>
                        <p className="text-neutral-500 text-sm">AWS, Azure, GCP</p>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-white font-medium">Databases</p>
                        <p className="text-neutral-500 text-sm">SQL, NoSQL, Graph</p>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-white font-medium">APIs & Services</p>
                        <p className="text-neutral-500 text-sm">REST, GraphQL, gRPC</p>
                    </div>
                    <div className="text-center p-4">
                        <p className="text-white font-medium">Platforms</p>
                        <p className="text-neutral-500 text-sm">Web, Mobile, IoT</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
