"use client";

import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutVisionSection } from "@/components/sections/AboutVisionSection";
import { AboutMissionSection } from "@/components/sections/AboutMissionSection";
import { AboutValuesSection } from "@/components/sections/AboutValuesSection";
import { AboutCTASection } from "@/components/sections/AboutCTASection";

export default function About() {
    return (
        <div className="relative w-full bg-black antialiased">
            {/* Hero Section with Animated Text */}
            <AboutHeroSection />

            {/* Vision Section with Parallax */}
            <AboutVisionSection />

            {/* Mission Section with Horizontal Scroll */}
            <AboutMissionSection />

            {/* Values Section with Cascading Parallax */}
            <AboutValuesSection />

            {/* CTA Section */}
            <AboutCTASection />
        </div>
    );
}
