import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutVisionSection } from "@/components/sections/AboutVisionSection";
import { AboutMissionSection } from "@/components/sections/AboutMissionSection";
import { AboutValuesSection } from "@/components/sections/AboutValuesSection";
import { AboutCTASection } from "@/components/sections/AboutCTASection";

export const metadata: Metadata = {
    title: "technology solutions company | Built for Execution | Zylex",
    description: "Meet Zylex, a technology solutions company engineered for impact. As your technology partner, we deliver SaaS product development for results.",
};

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
