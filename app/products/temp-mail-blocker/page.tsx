"use client";

import { TempMailHeroSection } from "@/components/sections/TempMailHeroSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx";
import { TempMailFeatures } from "@/components/ui/temp-mail-features";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { TextRotate } from "@/components/ui/text-rotate";
import { NoiseBackground } from "@/components/ui/noise-background";
import Image from "next/image";

const scrollSections = [
    {
        leftLabel: "Metrics",
        title: "Fake Conversions",
        rightLabel: "Inflated",
        background: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    },
    {
        leftLabel: "Sales",
        title: "Wasted Time",
        rightLabel: "Prospects",
        background: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop",
    },
    {
        leftLabel: "CRM",
        title: "Junk Contacts",
        rightLabel: "Costs",
        background: "https://images.unsplash.com/photo-1504384308090-c54be3855463?q=80&w=2664&auto=format&fit=crop",
    },
    {
        leftLabel: "Email",
        title: "High Bounce Rates",
        rightLabel: "Reputation",
        background: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    },
];

export default function TempMailBlockerPage() {
    return (
        <main className="relative w-full bg-[#030308]">
            <TempMailHeroSection />

            <section className="w-full relative bg-black py-32 flex items-center justify-center">
                <div className="w-full max-w-5xl mx-auto p-4 flex flex-col items-center justify-center text-center">
                    <p className="text-2xl md:text-4xl font-light text-white/60 mb-8">
                        Ready to secure your pipeline?
                    </p>
                    <div className="text-4xl md:text-7xl font-bold text-white flex flex-col md:flex-row items-center gap-4">
                        <span>Make it</span>
                        <TextRotate
                            texts={[
                                "Clean",
                                "Secure",
                                "Real",
                                "Verified",
                                "Temp Mail Blocker",
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
                                Start Free Trial — No Credit Card Required &rarr;
                            </button>
                        </NoiseBackground>
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
                                    Temp Mail Blocker
                                </span>
                            </h1>
                        </>
                    }
                >
                    <div className="relative w-full h-full">
                        <Image
                            src="/products/temp_mail_dashboard.png"
                            alt="Temp Mail Blocker Dashboard"
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
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase">The Cost of Disposable Emails</h2>
                            <p className="text-white/60 text-lg md:text-xl max-w-2xl text-center font-light uppercase tracking-widest">
                                Temporary email addresses sabotage B2B growth by:
                            </p>
                        </div>
                    }
                    footer={<div className="text-white/50 text-sm">Temp Mail Blocker Platform</div>}
                    showProgress
                    durations={{ change: 0.7, snap: 800 }}
                />
            </section>

            <TempMailFeatures />

            <section className="w-full relative bg-black py-32">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20 max-w-4xl">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                            Temp Mail <br />
                            <span className="text-neutral-500">Perfect For</span>
                        </h2>
                    </div>
                </div>

                <div className="w-full max-w-5xl mx-auto p-4">
                    <div className="flex flex-col items-start justify-center text-left gap-8">
                        <TextGradientScroll
                            text="✓ B2B SaaS teams protecting trial economics"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                        <TextGradientScroll
                            text="✓ Marketing ops maintaining email deliverability"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                        <TextGradientScroll
                            text="✓ Data teams requiring clean analytics inputs"
                            className="font-bold text-white leading-relaxed text-2xl md:text-4xl"
                        />
                    </div>
                </div>
            </section>

        </main>
    );
}
