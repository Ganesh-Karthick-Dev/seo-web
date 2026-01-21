import type { Metadata } from "next";
import ParticleEffectHero from "@/components/ui/particle-effect-for-hero";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { IndustriesShowcaseSection } from "@/components/sections/IndustriesShowcaseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { IndustriesCTASection } from "@/components/sections/IndustriesCTASection";

export const metadata: Metadata = {
    title: "industry specific software solutions | Built for Scale | Zylex",
    description: "Zylex delivers industry specific software solutions and software development for industries, engineering custom software for businesses to lead.",
};

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



