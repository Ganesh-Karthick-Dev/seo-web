"use client";

import { Zylex360HeroSection } from "@/components/sections/Zylex360HeroSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx";
import { Features } from "@/components/ui/features-section";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { TextRotate } from "@/components/ui/text-rotate";
import { NoiseBackground } from "@/components/ui/noise-background";
import Image from "next/image";

const scrollSections = [
    {
        leftLabel: "Departments",
        title: "Data Silos",
        rightLabel: "Across",
        background: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
    {
        leftLabel: "Channels",
        title: "Inventory Errors",
        rightLabel: "Warehouses",
        background: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    },
    {
        leftLabel: "Duplicate",
        title: "High Overhead",
        rightLabel: "Licenses",
        background: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
    },
    {
        leftLabel: "Global",
        title: "Scaling Roadblocks",
        rightLabel: "Expansion",
        background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Zylex360Page() {
    return (
        <main className="relative w-full bg-[#030308]">
            <Zylex360HeroSection />

            <section className="w-full flex justify-center py-8">
                <div className="w-[60%] relative bg-neutral-900/60 py-32 flex items-center justify-center rounded-3xl">
                <div className="w-full max-w-5xl mx-auto p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-2xl md:text-4xl font-light text-white/60 mb-8">
                        Ready to make your business
                    </p>
                    <div className="text-4xl md:text-7xl font-bold text-white flex flex-col md:flex-row items-center gap-4">
                        <span>Make it</span>
                        <TextRotate
                            texts={[
                                "seamless",
                                "efficient",
                                "scalable",
                                "intelligent",
                                "Zylex360",
                            ]}
                            mainClassName="text-white px-4 bg-blue-600 overflow-hidden py-2 justify-center rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </div>

                    <div className="mt-12">
                        <NoiseBackground
                            containerClassName="w-fit p-2 rounded-full mx-auto"
                            gradientColors={[
                                "rgb(255, 100, 150)",
                                "rgb(100, 150, 255)",
                                "rgb(255, 200, 100)",
                            ]}
                        >
                            <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-8 py-3 text-black font-medium shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
                                See Zylex360 in Action — Book Your Demo &rarr;
                            </button>
                        </NoiseBackground>
                    </div>
                </div>
                </div>
            </section>

            <section className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                                Unleash the power of <br />
                                <span className="text-neutral-500">
                                    Zylex360
                                </span>
                            </h1>
                        </>
                    }
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/products/zylex_360_dashboard.png"
                            alt="Zylex360 Dashboard"
                            fill
                            className="object-contain rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 1280px"
                            draggable={false}
                            priority
                        />
                    </div>
                </ContainerScroll>
            </section>

            <section className="relative w-full">
                <FullScreenScrollFX
                    sections={scrollSections}
                    header={
                        <div className="flex flex-col items-center gap-4 pt-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">The Challenge</h2>
                            <p className="text-white/60 text-lg md:text-xl max-w-2xl text-center font-light uppercase tracking-widest">
                                Most businesses juggle 5+ disconnected systems, creating:
                            </p>
                        </div>
                    }
                    footer={<div className="text-white/50 text-sm">Zylex360 Platform</div>}
                    showProgress
                    durations={{ change: 0.7, snap: 800 }}
                />
            </section>

            <Features />

            <section className="w-full relative bg-black py-32">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 max-w-4xl">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Zylex360 <br />
                            <span className="text-neutral-500">Built For</span>
                        </h2>
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto p-4">
                    <div className="flex flex-col items-start justify-center text-left gap-8">
                        <TextGradientScroll
                            text="✓ Global retailers expanding into new markets"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                        <TextGradientScroll
                            text="✓ Omnichannel distributors synchronizing online and offline sales"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                        <TextGradientScroll
                            text="✓ SME leaders consolidating their tech stack"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                    </div>
                </div>
            </section>

        </main>
    );
}
