

import React from "react";
import { ShoppingCart, Store, Building2, TrendingUp, Users, Search, Paintbrush, Code2, TestTube, Award, Zap, MessageSquare, Handshake, Target } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

// Custom process data for Ecommerce Development
const processData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Requirement Discovery
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We understand your business goals, target customers, product workflows, and integration needs — and define the right platform, features, and technical approach for your ecommerce solution.
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
                        <Paintbrush className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Experience & Storefront Design
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We design conversion-focused, mobile-responsive storefronts with intuitive navigation, optimized product pages, and seamless checkout flows that enhance user experience and increase sales.
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
                        <Code2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Ecommerce Web Development
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We build scalable, secure, and high-performance ecommerce platforms with the right tech stack, clean architecture, payment integrations, and backend workflows for products, orders, and fulfillment.
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
                        <TestTube className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Testing, Launch & Ongoing Support
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We perform end-to-end testing, deploy with zero disruption, enable performance monitoring, and continue optimizing your store with updates, enhancements, and growth-focused improvements.
                </p>
            </div>
        ),
    },
];

// Custom features for Ecommerce Development (Services we offer)
const features = [
    {
        icon: <ShoppingCart className="w-full h-full" />,
        title: "Custom Ecommerce Development Solutions",
        description: "We design and build custom ecommerce platforms tailored to your products, workflows, and customer journeys — ensuring your store aligns with how your business actually operates. Our solutions combine scalable architecture, conversion-focused design, and seamless system integrations, helping you improve customer experience while supporting long-term growth and expansion.",
    },
    {
        icon: <Building2 className="w-full h-full" />,
        title: "Enterprise Ecommerce Development Solutions",
        description: "We develop enterprise-grade ecommerce platforms built for performance, stability, and operational control at scale. Our solutions support complex pricing models, high-volume transactions, multi-store environments, and unified B2B/B2C commerce — enabling enterprises to run mission-critical digital commerce with reliability and confidence.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "Scalable Ecommerce Platform Development",
        description: "We engineer scalable ecommerce platforms designed to grow with your catalog, users, and transaction volume — without disruption. Our architecture prioritizes cloud-native performance, modular expansion, and future-ready capabilities, ensuring your platform remains fast, flexible, and capable of supporting new markets, channels, and product lines.",
    },
    {
        icon: <Users className="w-full h-full" />,
        title: "Multi-Vendor Ecommerce Marketplace Development",
        description: "We build multi-vendor ecommerce marketplace platforms that bring sellers, brands, and partners together within a unified commerce ecosystem. Our marketplace solutions enable vendor onboarding, commission automation, centralized checkout, and operational transparency — delivering a seamless buying experience while simplifying platform management.",
    },
];

// Tech stack for Ecommerce - using IntegrationsSection with custom data
const ecommerceTechLeft = [
    { label: "React", icon: "react", color: "#61DAFB" },
    { label: "Next JS", icon: "nextjs", color: "#000000" },
    { label: "Angular Js", icon: "angular", color: "#DD0031" },
    { label: "Vue.JS", icon: "vue", color: "#4FC08D" },
    { label: "PHP", icon: "php", color: "#777BB4" },
];

const ecommerceTechRight = [
    { label: "Node.JS", icon: "nodejs", color: "#339933" },
    { label: "MySQL", icon: "mysql", color: "#4479A1" },
    { label: "MongoDB", icon: "mongodb", color: "#47A248" },
    { label: "AWS", icon: "aws", color: "#FF9900" },
    { label: "Azure", icon: "azure", color: "#0078D4" },
];

// Why Choose benefits for Ecommerce
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Proven Track Record",
        description: "We've launched successful ecommerce platforms across industries, from fashion and electronics to B2B manufacturing and digital products.",
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Technology Agnostic",
        description: "We recommend and implement the best technology for your specific needs rather than pushing a one-size-fits-all solution.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Agile Development Process",
        description: "Regular sprints, transparent communication, and iterative development ensure you're involved throughout the project.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Post-Launch Partnership",
        description: "Our relationship doesn't end at launch. We provide ongoing optimization, feature enhancements, and strategic guidance as your business grows.",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Conversion Focus",
        description: "Every design decision and technical implementation is guided by data and best practices that maximize your revenue.",
    },
];

export default function EcommercePage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="Transform your vision into powerful Ecommerce"
                subtitle="Ecommerce Solutions"
                description="As a leading ecommerce development company, we specialize in creating high-performance online stores that drive sales and deliver exceptional customer experiences. Our custom ecommerce development solutions are designed to meet your unique business requirements, whether you're launching your first online store or scaling an enterprise platform."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<ShoppingCart className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - Services we offer */}
            <ServiceFeaturesSection
                title="Intangible Ecommerce Development services we offer"
                titleHighlight=""
                features={features}
            />

            {/* Process Section - Development Process */}
            <ServiceProcessSection
                title="Our Ecommerce Development Process"
                titleHighlight="A structured, outcome-driven ecommerce development process that ensures clarity, predictable delivery, and high-performance results."
                processData={processData}
            />

            {/* Tech Stack Section - Using IntegrationsSection with custom data */}
            <IntegrationsSection
                title="Technologies we use for Ecommerce"
                titleHighlight=""
                leftTechItems={ecommerceTechLeft}
                rightTechItems={ecommerceTechRight}
            />

            {/* Why Choose Section - Custom inline */}
            <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                    {/* Section Header */}
                    <div className="mb-16 max-w-4xl">
                        <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Why Choose Our E-Commerce Development Services?
                        </h2>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white mb-6">
                                    {benefit.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors">
                                    {benefit.title}
                                </h3>

                                {/* Description */}
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section - Resources */}
            <BlogSection />

            {/* Final CTA */}
            <ServiceCTASection
                title="Let's Build an Ecommerce Platform That Drives Real Business Growth"
                description="We build ecommerce platforms that perform better, convert higher, and scale with your business — empowering you with faster storefronts, stronger reliability, and measurable revenue impact."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
