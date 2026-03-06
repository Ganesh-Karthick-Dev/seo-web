"use client";

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { Cpu, Database, Activity, Scale, Sparkles, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero({ onStart }: { onStart: () => void }) {
    return (
        <div className="relative h-[100dvh] w-full bg-black/[0.96] antialiased overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="cyan"
            />

            {/* Wrapper to handle navbar spacing without breaking 100vh */}
            <div className="flex flex-col lg:flex-row w-full h-full pt-20 lg:pt-24 pb-6 lg:pb-10">

                {/* Left content */}
                <div className="flex-1 px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 flex flex-col justify-center h-full max-h-full">

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 lg:mb-6 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm w-fit">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-xs sm:text-sm text-neutral-300 font-medium">
                            Lead Magnet — AI Readiness Assessment
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                        Data & AI <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Readiness Assessment
                        </span>
                    </h1>

                    <p className="text-neutral-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-snug mb-3 max-w-2xl font-medium">
                        Evaluate your organization's ability to turn data into a competitive advantage and scale AI with confidence.
                    </p>

                    <p className="text-neutral-500 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 max-w-2xl">
                        In an era where AI is the primary driver of innovation, your underlying data foundation determines your speed of delivery. This assessment empowers leaders to look past the buzzwords and conduct a rigorous evaluation of the technical infrastructure and governance protocols that define their data landscape.
                    </p>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4 mb-8">
                        <div className="flex items-center gap-2 text-neutral-300 group">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Cpu className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium">Engineering Excellence</span>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-300 group">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Database className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium">Data Trust</span>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-300 group">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Activity className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium">Operational Resilience</span>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-300 group">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Scale className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium">Compliance & Risk</span>
                        </div>

                        <div className="flex items-center gap-2 text-neutral-300 group">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Sparkles className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium">AI Enablement</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-auto sm:mt-0">
                        <button
                            onClick={onStart}
                            className="group relative cursor-pointer px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 text-white overflow-hidden transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-500/20 w-full sm:w-auto shrink-0"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-500" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                                Start Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <div className="text-xs sm:text-sm text-neutral-400 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-cyan-500" /> ~8 minutes to complete
                        </div>
                    </div>
                </div>

                {/* Right content */}
                <div className="flex-1 relative w-full h-[40vh] lg:h-full z-0 overflow-hidden flex items-center justify-center">
                    <SplineScene
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        className="w-full h-full object-contain"
                    />
                </div>

            </div>
        </div>
    );
}
