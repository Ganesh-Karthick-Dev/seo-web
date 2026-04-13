"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type OffshoreControlCard = {
    title: string;
    description: string;
};

export function OffshoreControlCardsSection({
    items,
}: {
    items: OffshoreControlCard[];
}) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLElement | null>>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            const animateCards = (distance: number) => {
                cardRefs.current.forEach((card, index) => {
                    if (!card) return;

                    const fromLeft = index % 2 === 0;

                    gsap.fromTo(
                        card,
                        {
                            x: fromLeft ? -distance : distance,
                            autoAlpha: 0,
                            clipPath: fromLeft
                                ? "inset(0 100% 0 0 round 1.75rem)"
                                : "inset(0 0 0 100% round 1.75rem)",
                        },
                        {
                            x: 0,
                            autoAlpha: 1,
                            clipPath: "inset(0 0% 0 0% round 1.75rem)",
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 88%",
                                end: "top 62%",
                                scrub: 0.75,
                            },
                        }
                    );
                });
            };

            mm.add("(min-width: 1024px)", () => animateCards(140));
            mm.add("(max-width: 1023px)", () => animateCards(84));
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="grid gap-5">
            {items.map((item, index) => (
                <article
                    key={item.title}
                    ref={(node) => {
                        cardRefs.current[index] = node;
                    }}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7 md:p-8 will-change-transform"
                >
                    <div>
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-neutral-400">
                            {item.description}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    );
}
