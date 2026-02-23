"use client";

import Link from "next/link";
import { Zylex360HeroSection } from "@/components/sections/Zylex360HeroSection";
import { ProductChallengeSection } from "@/components/sections/ProductChallengeSection";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Features } from "@/components/ui/features-section";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { TextRotate } from "@/components/ui/text-rotate";
import { NoiseBackground } from "@/components/ui/noise-background";
import { CTA3 } from "@/components/ui/cta-3";
import Image from "next/image";

export default function Zylex360Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zylex 360",
  "description": "Zylex 360 is a web-based business software platform that enables organizations to monitor, manage, and optimize operational processes, system performance, and digital workflows through a centralized interface.",
  "url": "https://zylex.io/products/zylex-360",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web"
}`
                }}
            />
            <main className="relative w-full bg-[#030308]">
                <Zylex360HeroSection />

                <section className="w-full flex justify-center py-6 md:py-8 px-4">
                    <div className="w-full md:w-[85%] lg:w-[70%] xl:w-[60%] relative bg-neutral-900/60 py-16 md:py-24 lg:py-32 flex items-center justify-center rounded-2xl md:rounded-3xl">
                        <div className="w-full max-w-5xl mx-auto p-4 flex flex-col items-center justify-center text-center">
                            <p className="text-xl md:text-2xl lg:text-4xl font-light text-white/60 mb-6 md:mb-8">
                                Ready to make your business
                            </p>
                            <div className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
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

                            <div className="mt-8 md:mt-12">
                                <NoiseBackground
                                    containerClassName="w-full max-w-sm sm:w-fit p-2 rounded-full mx-auto"
                                    gradientColors={[
                                        "rgb(255, 100, 150)",
                                        "rgb(100, 150, 255)",
                                        "rgb(255, 200, 100)",
                                    ]}
                                >
                                    <Link
                                        href="/contact"
                                        className="block h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-6 sm:px-8 py-3 text-sm sm:text-base text-black font-medium shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)] text-center"
                                    >
                                        See Zylex360 in Action — Book Your Demo &rarr;
                                    </Link>
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
                                alt="Zylex 360 unified business platform dashboard"
                                fill
                                className="object-contain rounded-2xl"
                                sizes="(max-width: 768px) 100vw, 1280px"
                                draggable={false}
                                priority
                            />
                        </div>
                    </ContainerScroll>
                </section>

                <ProductChallengeSection
                    title="The Challenge"
                    subtitle="Most businesses juggle 5+ disconnected systems, creating:"
                    items={[
                        "Data silos across departments",
                        "Inventory errors between channels and warehouses",
                        "High overhead from duplicate software licenses",
                        "Scaling roadblocks for global expansion",
                    ]}
                    variant="zylex"
                />

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

                <section className="w-full py-16 md:py-24 px-4">
                    <CTA3
                        variant="dark"
                        title="Ready to unify your operations?"
                        subtitle="Book a demo and see Zylex360 in action."
                        primaryButtonText="Visit Site"
                        primaryButtonHref="/contact"
                        secondaryButtonText="Contact Sales"
                        secondaryButtonHref="/contact"
                    />
                </section>

            </main>
        </>
    );
}
