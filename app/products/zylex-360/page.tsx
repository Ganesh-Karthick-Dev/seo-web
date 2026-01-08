"use client";

import { Zylex360HeroSection } from "@/components/sections/Zylex360HeroSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx";
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
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                        alt="Zylex360 Dashboard"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
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
        </main>
    );
}
