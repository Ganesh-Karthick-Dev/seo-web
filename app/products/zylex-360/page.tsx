"use client";

import { Zylex360HeroSection } from "@/components/sections/Zylex360HeroSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

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
        </main>
    );
}
