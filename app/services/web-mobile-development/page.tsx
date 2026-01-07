"use client";

import { Smartphone, MonitorSmartphone, Globe, Users, TrendingUp, RefreshCw, Layers, Zap, Rocket, Search, Paintbrush, Code2, TestTube, Settings } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

// Custom process data for Web & Mobile Application Development
const processData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Business-Driven Web Application Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We design and develop secure, scalable, and high-performance web applications tailored to your real-world workflows and customer experiences. Our solutions enhance usability, streamline operations, and support long-term product growth — built for stability, integration readiness, and performance at scale.
                </p>
            </div>
        ),
    },
    {
        title: "02",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Modern Mobile Application Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We build mobile applications that deliver intuitive user journeys, responsive interactions, and consistent performance across devices. Our team specializes in custom mobile application development and cross-platform delivery — creating mobile experiences that are reliable, user-focused, and ready to evolve as your product grows.
                </p>
            </div>
        ),
    },
    {
        title: "03",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
                        <MonitorSmartphone className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Unified Cross-Platform App Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We help businesses reduce development time and maintenance effort through unified cross-platform application development — without compromising performance or user experience. Our approach enables faster release cycles, a single maintainable codebase, and seamless consistency across iOS and Android environments.
                </p>
            </div>
        ),
    },
    {
        title: "04",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                        <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Hire Web & Mobile App Developers
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Scale your team with experienced web and mobile app developers who integrate seamlessly into your workflows — helping you accelerate delivery, enhance applications, and build features faster with reliable, on-demand expertise.
                </p>
            </div>
        ),
    },
];

// Custom features for Web & Mobile Application Development
const features = [
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "Your Existing Platforms Can't Handle Growth",
        description: "As users, workflows, and data scale — performance drops and complexity increases. Our enterprise web application development solutions restore stability, flexibility, and scalability.",
    },
    {
        icon: <Rocket className="w-full h-full" />,
        title: "Product & Feature Expansion Slows Delivery",
        description: "Multiple integrations and technical dependencies increase risk. Our custom web and mobile app development approach ensures predictable delivery and sustainable growth.",
    },
    {
        icon: <RefreshCw className="w-full h-full" />,
        title: "Legacy Applications Restrict Innovation",
        description: "Older architectures block integrations, automation, and new capabilities. We modernize systems using structured web application development services — without disrupting operations.",
    },
    {
        icon: <Smartphone className="w-full h-full" />,
        title: "Mobile Experience Becomes a Competitive Requirement",
        description: "You need mobile presence without maintaining multiple codebases. Our cross-platform mobile app development services deliver unified, consistent experiences across iOS and Android.",
    },
];

export default function WebMobileApplicationDevelopmentPage() {
    return (
        <main className="bg-black min-h-screen">
            <ServiceHeroSection
                title="Build Applications Your Users Love — Across Web & Mobile"
                subtitle="Web & Mobile Solutions"
                description="Your customers expect seamless digital experiences — fast, responsive, intuitive, and reliable across every device. Our Web and Mobile Application Development services help businesses create applications that perform at scale, deliver real business value, and evolve as your organization grows."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={MonitorSmartphone}
            />

            <ServiceFeaturesSection
                title="When Investing in Web & Mobile Applications Creates Real Impact"
                titleHighlight="Where Web & Mobile Development Creates the Most Value"
                features={features}
            />

            <ServiceProcessSection
                title="End-to-End Web & Mobile Application Development Solutions"
                titleHighlight="Our Core Application Capabilities"
                processData={processData}
            />

            <ServiceCTASection
                title="Let's Discuss Your Product Vision"
                description="Ready to build a high-performance web or mobile application? Let's discuss your goals and the right execution approach."
                primaryButtonText="Let's Discuss"
                primaryButtonHref="/contact"
            />

            <ServiceScrollSection hue={180} />

            <IntegrationsSection />

            <WhyChooseUsSection />

            <BlogSection />

            <CTASection />
        </main>
    );
}
