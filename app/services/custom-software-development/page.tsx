"use client";

import { Code2 } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";

export default function CustomSoftwareDevelopmentPage() {
    return (
        <main className="bg-black min-h-screen">
            <ServiceHeroSection
                title="Custom Software Development Services That Drive Business Growth"
                subtitle="Enterprise Solutions"
                description="Our custom software development services help organizations build tailored solutions that solve complex business challenges. We design, develop, and deploy scalable software that streamlines operations, enhances productivity, and accelerates digital transformation — while ensuring quality, security, and long-term maintainability."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={Code2}
                gradientColors={[
                    "#ea580c",
                    "#f97316",
                    "#fb923c",
                    "#fdba74",
                    "#7c2d12",
                ]}
            />

            {/* More sections will be added here */}
        </main>
    );
}
