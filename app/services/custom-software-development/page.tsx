"use client";

import { Code2 } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BlogSection } from "@/components/sections/BlogSection";

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
            />

            <ServiceFeaturesSection />

            <ServiceProcessSection />

            <ServiceCTASection
                title="Let's explore the right approach for your software initiative."
                primaryButtonText="Schedule a Discovery Call"
                primaryButtonHref="/contact"
            />

            <ServiceScrollSection hue={200} />

            <IntegrationsSection />

            <WhyChooseUsSection />

            <BlogSection />
        </main>
    );
}
