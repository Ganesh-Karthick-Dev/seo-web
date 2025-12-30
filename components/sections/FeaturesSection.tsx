"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "Modern Design",
        description:
            "Experience cutting-edge design patterns that make your website stand out. Our modern approach ensures your brand looks professional and contemporary across all devices.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <p className="text-4xl font-bold">Modern Design</p>
            </div>
        ),
    },
    {
        title: "Responsive Layout",
        description:
            "Built with mobile-first principles, ensuring your website looks perfect on any device. From smartphones to large desktop screens, your content adapts seamlessly.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white">
                <p className="text-4xl font-bold">Responsive</p>
            </div>
        ),
    },
    {
        title: "Performance Optimized",
        description:
            "Lightning-fast load times and smooth interactions. We optimize every aspect of your website to ensure the best possible user experience and SEO rankings.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <p className="text-4xl font-bold">Fast & Optimized</p>
            </div>
        ),
    },
];

export function FeaturesSection() {
    return (
        <div className="w-full">
            <StickyScroll content={content} />
        </div>
    );
}
