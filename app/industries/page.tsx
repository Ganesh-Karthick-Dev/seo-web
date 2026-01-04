"use client";

import ParticleEffectHero from "@/components/ui/particle-effect-for-hero";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { IndustriesShowcaseSection } from "@/components/sections/IndustriesShowcaseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { IndustriesCTASection } from "@/components/sections/IndustriesCTASection";

export default function Industries() {
    return (
        <div className="relative w-full bg-black antialiased">
            {/* Hero Section with Particle Effect */}
            <ParticleEffectHero />

            {/* Industries Showcase Section - Pinned on scroll */}
            <ScrollMorphHero />

            {/* Industries Details Section */}
            <IndustriesShowcaseSection />

            {/* Blog Section */}
            <BlogSection />

            {/* CTA Section */}
            <IndustriesCTASection />
        </div>
    );
}



