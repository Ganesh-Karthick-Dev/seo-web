
import React from "react";
import { Sparkles, Server, Workflow, TrendingUp, Database, Lightbulb, Building2, RefreshCw, Search, Layers, Code2, Rocket, Award, Target, Shield, MessageSquare, Handshake, Zap, Lock, Eye } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export const metadata = {
    title: "digital transformation services | Eliminate Legacy Constraints | Zylex",
    description: "Zylex digital transformation services destroy legacy anchors—from app modernization to legacy modernization and transformation. Absolute execution.",
    alternates: {
        canonical: "/services/digital-transformation",
    },
};

// Features - The Technical Ceilings
const features = [
    {
        icon: <Layers className="w-full h-full" />,
        title: "The Legacy Anchor (Architecture Rigidity)",
        description: "Brittle codebases aren't just a nuisance—they're a liability that kills innovation and makes scaling a fantasy. We overhaul your legacy stack through app modernisation initiatives that balance high-stakes transformation with low-risk execution, allowing you to evolve without breaking the operations that drive your current success.",
    },
    {
        icon: <Workflow className="w-full h-full" />,
        title: "The Execution Void (Process Friction)",
        description: "Fragmented workflows and manual \"patchwork\" are a silent drain on your survival. We harden your operations through structured modernization and deep integration—delivering absolute visibility and terminal velocity instead of another spreadsheet.",
    },
    {
        icon: <Target className="w-full h-full" />,
        title: "The Strategic Blindspot (Technical Misalignment)",
        description: "Buying tools is easy; engineering a market dominance foundation is rare. We ensure every modernization initiative is mapped to your unshakeable business goals through proven digital strategy, ensuring technology supports your future-scale capability—not just your vendor's bottom line.",
    },
    {
        icon: <Database className="w-full h-full" />,
        title: "The Insight Blackout (Fragmented Intelligence)",
        description: "Data exists everywhere, but without connection, it's just overhead. We build unified data ecosystems and actionable intelligence layers that turn fragmented information into decisive, faster decision-making across the entire organization.",
    },
];

// Core Capabilities - App Modernization
const capabilitiesData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Lightbulb className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Execution-Driven Strategy & Roadmap
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">Vision Requires a Technical Engine.</strong> We partner with you to define a roadmap that removes friction and aligns every modernization initiative with your core business objectives. We provide the strategic path that ensures your technical investments create actual value—focused on building the foundations that move your business forward.
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
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Operational Evolution & Systems Scaling
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">Stay at the Forefront of Your Industry.</strong> We help you evolve alongside shifting markets and emerging tech. Our digital transformation solutions identify the high-stakes platforms and integrated AI capabilities that strengthen your operations and accelerate the innovation required to maintain your market lead.
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
                        <RefreshCw className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Technical Foundation Modernization
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">Legacy Constraints Shouldn't Hold Back Your Roadmap.</strong> We transform brittle, outdated systems into secure, scalable, and high-performing digital pillars through legacy modernization and transformation. We upgrade your architecture and security while ensuring your daily operations continue with professional rigor and zero downtime.
                </p>
            </div>
        ),
    },
];

// Delivery Framework - 4 Phases
const deliveryData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Phase 1 — High-Stakes Audit & Alignment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We audit your technical debt and capability gaps. You get a clear execution blueprint with investment mapping and prioritized milestones that align with your unshakeable outcomes—not a generic slide deck.
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
                        <Layers className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Phase 2 — Blueprints for Absolute Scale
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    We define the modernization pillars and integration strategy. You get a future-ready technical foundation that has been battle-tested against your specific constraints.
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
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Phase 3 — Hardened Execution
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Velocity without the excuses. We execute through rigorous delivery cycles with absolute transparency (no hiding behind status reports). You get predictable implementation, stable releases, and outcomes that actually move the needle.
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
                        <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Phase 4 — Operational Dominance
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    Enduring Performance. We continuously sharpen performance and maturity as your organization scales. You get a mature, digital-first operation built for long-term dominance and zero regrets.
                </p>
            </div>
        ),
    },
];

// Tech Stack
const techLeft = [
    { label: "AWS", icon: "aws", color: "#FF9900" },
    { label: "Azure", icon: "azure", color: "#0078D4" },
    { label: "Docker", icon: "docker", color: "#2496ED" },
    { label: "React", icon: "react", color: "#61DAFB" },
    { label: "Next.js", icon: "nextjs", color: "#000000" },
];

const techRight = [
    { label: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
    { label: "GraphQL", icon: "graphql", color: "#E10098" },
    { label: "Auth0", icon: "auth0", color: "#EB5424" },
    { label: "Terraform", icon: "terraform", color: "#7B42BC" },
    { label: "Datadog", icon: "datadog", color: "#632CA6" },
];

export default function DigitalTransformationPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="App Modernization: Turn Your Legacy Constraints into Unshakeable Engineering Advantages"
                subtitle="App Modernization & Digital Transformation"
                description="Outdated software doesn't just slow you down—it anchors your growth and leaks revenue. We specialize in hard-hitting application modernization that destroys technical friction and rebuilds your systems into high-performance digital foundations. Our digital transformation services deliver absolute engineering execution—no excuses, no downtime, no 'weekend emergency calls' as your standard operating procedure."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Sparkles className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - The Technical Ceilings */}
            <ServiceFeaturesSection
                title="The Technical Ceilings: What's Blocking Your Dominance?"
                titleHighlight="If your current technology dictates your speed, you've already lost. We solve the execution failures that brittle systems create."
                features={features}
            />

            {/* Solutions Section - App Modernization */}
            <ServiceProcessSection
                title="App Modernization: From Legacy Constraints to High-Performance Pillars"
                titleHighlight="Build the technical momentum your vision deserves."
                processData={capabilitiesData}
            />

            {/* Delivery Framework */}
            <ServiceProcessSection
                title="Our Delivery Framework: Structured for Certainty"
                titleHighlight="We skip the process-for-the-sake-of-process bloat. Every milestone is a hard step toward market dominance."
                processData={deliveryData}
            />

            {/* Tech Stack Section */}
            <IntegrationsSection
                title="The Tech Stack"
                titleHighlight="We select technologies based on your specific requirements for scale, security, and long-term sustainability."
                leftTechItems={techLeft}
                rightTechItems={techRight}
            />

            {/* Why Choose Section */}
            <WhyChooseUsSection
                title="Why Choose Zylex for App Modernization?"
                titleHighlight="Because your systems should be a high-performance engine, not an anchor."
                benefits={[
                    {
                        icon: <Award className="w-7 h-7" />,
                        title: "Real-World Experience",
                        description: "We've overhauled crumbling legacy systems for industry leaders who can't afford to be \"down.\" We know exactly what fails and how to engineer past it.",
                        accent: "from-cyan-400 to-blue-600",
                    },
                    {
                        icon: <Target className="w-7 h-7" />,
                        title: "Outcome-Led, Zero-Fluff",
                        description: "We don't implement tech for the sake of checking a box. We plan every effort around your productivity, scale, and long-term business value. Our digital transformation services focus on measurable outcomes, not vanity metrics.",
                        accent: "from-cyan-400 to-sky-500",
                    },
                    {
                        icon: <Shield className="w-7 h-7" />,
                        title: "Zero-Disruption Reality",
                        description: "We specialize in migrating systems without the disruption that kills momentum. Low risk, high impact, no \"Monday morning surprises.\"",
                        accent: "from-blue-400 to-indigo-600",
                    },
                    {
                        icon: <Eye className="w-7 h-7" />,
                        title: "Radical Transparency",
                        description: "You see the progress in every cycle. Our roadmap ensures you have a clear view of reality—not a corporate \"re-interpretation\" of status.",
                        accent: "from-cyan-400 to-blue-500",
                    },
                    {
                        icon: <Handshake className="w-7 h-7" />,
                        title: "Relentless Support",
                        description: "We stay engaged post-deployment, providing the continuous tuning and enhancements needed to keep you at the front of the pack.",
                        accent: "from-sky-400 to-blue-600",
                    },
                ]}
            />

            {/* Blog Section */}
            <BlogSection />

            {/* Final CTA */}
            <ServiceCTASection
                title="Stop Managing Debt. Start Shipping Mastery."
                description="Your vision is too ambitious for brittle architecture. Rebuild your foundation into a high-performance engine that scales without the excuses. No legacy anchors. Just absolute execution."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
