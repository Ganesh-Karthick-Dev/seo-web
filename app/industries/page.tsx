"use client";

import ParticleEffectHero from "@/components/ui/particle-effect-for-hero";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";

export default function Industries() {
    return (
        <div className="relative w-full bg-black antialiased">
            {/* Hero Section with Particle Effect */}
            <ParticleEffectHero />

            {/* Industries Showcase Section - Pinned on scroll */}
            <ScrollMorphHero />
        </div>
    );
}
