"use client";

import React from "react";
import { ScrollHeroSection, ScrollHeroSectionProps } from "@/components/ui/scroll-hero-section";

interface ServiceScrollSectionProps extends ScrollHeroSectionProps { }

export function ServiceScrollSection(props: ServiceScrollSectionProps) {
    return (
        <section className="relative">
            <ScrollHeroSection {...props} />
        </section>
    );
}
