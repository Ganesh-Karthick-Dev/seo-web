"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type OffshoreStoryBlock = {
    description: string;
    image: string;
    alt: string;
    imagePosition: "left" | "right";
};

export function OffshorePinnedStorySection({
    blocks,
}: {
    blocks: OffshoreStoryBlock[];
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinnedRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
            if (!sectionRef.current || !pinnedRef.current || slides.length === 0) return;

            const setupSlides = (distance: number) => {
                slides.forEach((slide, index) => {
                    const text = slide.querySelector(".offshore-story-text");
                    const media = slide.querySelector(".offshore-story-media");

                    if (index === 0) {
                        gsap.set(slide, { autoAlpha: 1 });
                        gsap.set(text, { autoAlpha: 1, y: 0 });
                        gsap.set(media, { autoAlpha: 1, y: 0, scale: 1 });
                    } else {
                        gsap.set(slide, { autoAlpha: 0 });
                        gsap.set(text, { autoAlpha: 0, y: 36 });
                        gsap.set(media, { autoAlpha: 0, y: 20, scale: 0.965 });
                    }
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: `+=${slides.length * distance}`,
                        pin: pinnedRef.current,
                        scrub: 1.1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                slides.forEach((slide, index) => {
                    const text = slide.querySelector(".offshore-story-text");
                    const media = slide.querySelector(".offshore-story-media");

                    timeline.to({}, { duration: 0.42 });

                    if (index === slides.length - 1) {
                        timeline.to({}, { duration: 0.48 });
                        return;
                    }

                    const nextSlide = slides[index + 1];
                    const nextText = nextSlide.querySelector(".offshore-story-text");
                    const nextMedia = nextSlide.querySelector(".offshore-story-media");
                    const phase = `story-switch-${index}`;

                    timeline.to(
                        text,
                        {
                            autoAlpha: 0,
                            y: -26,
                            duration: 0.34,
                            ease: "power2.in",
                        },
                        phase
                    );

                    timeline.to(
                        media,
                        {
                            autoAlpha: 0,
                            y: -18,
                            scale: 0.975,
                            duration: 0.38,
                            ease: "power2.inOut",
                        },
                        phase
                    );

                    timeline.set(nextSlide, { autoAlpha: 1 }, `${phase}+=0.08`);

                    timeline.fromTo(
                        nextText,
                        { autoAlpha: 0, y: 34 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 0.42,
                            ease: "power3.out",
                        },
                        `${phase}+=0.12`
                    );

                    timeline.fromTo(
                        nextMedia,
                        { autoAlpha: 0, y: 18, scale: 0.965 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.5,
                            ease: "power3.out",
                        },
                        `${phase}+=0.08`
                    );

                    timeline.set(slide, { autoAlpha: 0 }, `${phase}+=0.42`);
                });
            };

            const mm = gsap.matchMedia();
            mm.add("(min-width: 1024px)", () => setupSlides(980));
            mm.add("(max-width: 1023px)", () => setupSlides(760));
        }, sectionRef);

        return () => ctx.revert();
    }, [blocks]);

    return (
        <div ref={sectionRef} className="relative">
            <div ref={pinnedRef} className="relative min-h-[72svh] lg:min-h-[80svh]">
                <div className="relative flex min-h-[72svh] items-center pt-8 lg:min-h-[80svh] lg:items-start lg:pt-24">
                    {blocks.map((block, index) => (
                        <article
                            key={block.image}
                            ref={(node) => {
                                slideRefs.current[index] = node;
                            }}
                            className="offshore-story-slide absolute inset-0 grid items-center gap-10 pt-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:pt-24"
                        >
                            {block.imagePosition === "left" ? (
                                <>
                                    <div className="offshore-story-media relative">
                                        <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/6 blur-3xl" />
                                        <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-500/15 bg-white/[0.03] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                                            <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.6rem]">
                                                <Image
                                                    src={block.image}
                                                    alt={block.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 42rem, 100vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-cyan-400/10" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="offshore-story-text max-w-2xl">
                                        <p className="text-[1.2rem] leading-[1.9] text-neutral-300 md:text-[1.38rem]">
                                            {block.description}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="offshore-story-text max-w-2xl">
                                        <p className="text-[1.2rem] leading-[1.9] text-neutral-300 md:text-[1.38rem]">
                                            {block.description}
                                        </p>
                                    </div>
                                    <div className="offshore-story-media relative">
                                        <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/6 blur-3xl" />
                                        <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-500/15 bg-white/[0.03] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                                            <div className="relative aspect-[1.45/1] overflow-hidden rounded-[1.6rem]">
                                                <Image
                                                    src={block.image}
                                                    alt={block.alt}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 42rem, 100vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-cyan-400/10" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
