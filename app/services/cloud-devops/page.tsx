

import React from "react";
import { Cloud, Rocket, Server, RefreshCw, Layers, Search, Paintbrush, Code2, Monitor, Gauge, Award, Shield, MessageSquare, Zap, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems
const features = [
    {
        icon: <Rocket className="w-full h-full" />,
        title: "The Deployment Deadlock (Manual Friction)",
        description: "Slow, manual, and risk-prone releases are a silent drain on your survival. We streamline delivery pipelines through hardened CI/CD automation—improving release frequency, predictable rollouts, and absolute rollback readiness.",
    },
    {
        icon: <Server className="w-full h-full" />,
        title: "The Complexity Anchor (Operational Overhead)",
        description: "Infrastructure that is hard to manage is a liability that kills scaling. We provide Cloud infrastructure management services that enhance uptime and performance through resource optimization and infrastructure hardening—turning fragmented environments into a unified digital powerhouse.",
    },
    {
        icon: <RefreshCw className="w-full h-full" />,
        title: "The Migration Gap (Legacy Stagnation)",
        description: "Outdated systems anchor your vision in the past. We deliver zero-disruption Cloud migration and modernization services that move your platforms to secure, cost-efficient, and future-ready architectures without breaking the operations that drive your current revenue.",
    },
    {
        icon: <Layers className="w-full h-full" />,
        title: "The Scaling Void (Brittle Foundations)",
        description: "Growth requires more than just \"more servers.\" We build Cloud-native application engineering foundations designed for resilience and elasticity—ensuring your systems learn, optimize, and scale as your vision demands.",
    },
];

// 5 Phases - Delivery Approach
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
                        Strategic Audit & Future-State Alignment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> We review the risks, identify the gaps, and map the modernization path.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> You get a prioritized roadmap with execution milestones—not a generic slide deck.
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
                        Architecture & Automation Blueprinting
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> We define the target-state architecture and CI/CD strategy.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> You get a validated blueprint and implementation plan designed for absolute scale and security.
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
                        Hardened Build & Integration
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> We containerize workloads and implement IaC with surgical precision.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> You get a stable, automated delivery ecosystem built for predictable releases.
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
                        <Monitor className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Rollout, Observability & Reliability Enablement
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> We enable the safeguards and runbooks needed for production readiness.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> You get predictable deployments and reduced release risk.
                </p>
            </div>
        ),
    },
    {
        title: "05",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Gauge className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Continuous Optimization & Performance Tuning
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> We stay engaged for evolution. We continue optimizing for cost and performance.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> Ensuring your cloud environment remains a long-term competitive advantage.
                </p>
            </div>
        ),
    },
];

// Tech Stack - Cloud & DevOps (for IntegrationsSection animated beam)
const cloudTechLeft = [
    { label: "AWS", icon: "aws", color: "#FF9900" },
    { label: "Azure", icon: "azure", color: "#0078D4" },
    { label: "Google Cloud", icon: "gcp", color: "#4285F4" },
    { label: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
    { label: "Docker", icon: "docker", color: "#2496ED" },
    { label: "Terraform", icon: "terraform", color: "#7B42BC" },
    { label: "Pulumi", icon: "pulumi", color: "#8A3391" },
];

const cloudTechRight = [
    { label: "GitHub Actions", icon: "github", color: "#ffffff" },
    { label: "GitLab CI", icon: "gitlab", color: "#FC6D26" },
    { label: "Jenkins", icon: "jenkins", color: "#D24939" },
    { label: "Prometheus", icon: "prometheus", color: "#E6522C" },
    { label: "Grafana", icon: "grafana", color: "#F46800" },
    { label: "Datadog", icon: "datadog", color: "#632CA6" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Outcome-Focused Engineering Excellence",
        description: "Modernization must produce results. We align cloud initiatives with actual business outcomes—improving reliability and cost efficiency from day one, so we don't have to have \"emergency meetings\" about why the cloud spend is leaking revenue.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Hardened Expertise across Startup & Enterprise",
        description: "Theoretical advice belongs in a classroom. We bring hands-on experience from high-growth digital platforms and complex enterprise ecosystems. Our Cloud and DevOps engineering services don't just \"talk\" about modernization; we provide the engineering authority that comes from actually shipping stable environments.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Structured Transparency & Milestone-Driven Delivery",
        description: "Execution is the only metric that matters. We swap guesswork for predictable progress. You get absolute risk visibility and decision transparency at every phase.",
    },
    {
        icon: <Zap className="w-7 h-7" />,
        title: "Automation That Improves Stability, Not Just Speed",
        description: "Velocity is worthless if you're crashing. We engineer CI/CD and infrastructure automation to reduce deployment risk and strengthen operational control. We focus on the \"no-nonsense\" engineering that ensures uptime is the baseline.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "An Unshakeable Strategic Partnership",
        description: "We are your partners in growth, not just another vendor. We go beyond the initial implementation to support continuous optimization. We build the resilient foundations that evolve with your business.",
    },
];

import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "Cloud & DevOps Services | Automate & Scale | Zylex",
    description: "Stop manual patchwork. Zylex Cloud & DevOps engineering services destroy operational friction and rebuild your delivery pipelines into unshakeable engines.",
    alternates: {
        canonical: "/services/cloud-devops",
    },
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function CloudDevOpsPage() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('Cloud & DevOps Page: Blog data not available');
    }

    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="Cloud & DevOps Engineering: Manual is a Liability. Automation is the Catalyst."
                subtitle="Scale Without Friction. Deploy Without Fear."
                description={'Infrastructure shouldn\'t be a bottleneck, and deployments shouldn\'t require a prayer. We engineer high-performance Cloud and DevOps engineering services that destroy operational friction and rebuild your delivery pipelines into unshakeable engines of momentum. No manual patchwork, no "it worked on my machine" excuses—just absolute reliability and terminal velocity.'}
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Cloud className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - The Technical Ceilings */}
            <ServiceFeaturesSection
                title="The Technical Ceilings: Where Infrastructure Kills Innovation"
                titleHighlight="We focus on the high-stakes execution failures that generic 'cloud support' ignores."
                features={features}
            />

            {/* Services Section - Cloud & DevOps Engineering Services */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Cloud & DevOps Engineering Services
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            We don't just "manage clouds"—we engineer performance-optimized digital foundations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Service 1 - Infrastructure Hardening & Optimization */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Server className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                Infrastructure Hardening & Optimization
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                <strong className="text-white block mb-2">Engineering Unshakeable Reliability</strong>
                                We design and optimize cloud environments to improve performance while destroying cost inefficiencies. From architecture hardening and environment standardization to high-availability enablement, we ensure your infrastructure remains secure, stable, and ready for massive business expansion.
                            </p>
                        </div>

                        {/* Service 2 - Zero-Disruption Migration & Modernization */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <RefreshCw className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                Zero-Disruption Migration & Modernization
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                <strong className="text-white block mb-2">Modernize Without the Drama</strong>
                                We transition legacy systems to modern cloud platforms through controlled, low-risk programs. Whether it's re-platforming, refactoring, or containerization, we enable modernization without the operational disruption that kills momentum.
                            </p>
                        </div>

                        {/* Service 3 - Resilient Cloud-Native Engineering */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <Layers className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                Resilient Cloud-Native Engineering
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                <strong className="text-white block mb-2">Built for Elasticity and Heroic Scale</strong>
                                We design platforms using modern cloud-native principles. Our approach—including microservices, API-first design, and deep observability—helps you accelerate delivery cycles and strengthen platform reliability across any environment.
                            </p>
                        </div>

                        {/* Service 4 - CI/CD & Delivery Governance */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Rocket className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-violet-100 transition-colors">
                                CI/CD & Delivery Governance
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                <strong className="text-white block mb-2">Deploy Faster. Fail Less</strong>
                                We implement Cloud DevOps services that accelerate speed while reducing operational noise. From infrastructure-as-code (IaC) to release governance and reliability controls, we deliver predictable rollouts and measurable improvements in platform stability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - The Engineering Blueprint */}
            <ServiceProcessSection
                title="The Engineering Blueprint: Structured for Precision"
                titleHighlight={'We skip the "wait and see" approach. Every milestone is a hard step toward market dominance.'}
                processData={processData}
            />

            {/* Tech Stack Section - The Engineering Stack */}
            <IntegrationsSection
                title="The Engineering Stack: Built for Scale"
                titleHighlight=""
                leftTechItems={cloudTechLeft}
                rightTechItems={cloudTechRight}
                description="We carefully select technologies based on business fit, stability, maintainability, and long-term scalability — not trends or tool bias."
            />

            {/* Why Choose Section */}
            <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Why Organizations Choose Zylex for Cloud & DevOps
                        </h2>
                        <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
                            Because your roadmap shouldn't be limited by fragile infrastructure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseBenefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center text-white mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-100 transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Section - Resources */}
            <BlogSection initialBlogPosts={blogPosts} />

            {/* Final CTA */}
            <ServiceCTASection
                title="Ready to Engineer Your Next Breakthrough?"
                description="Your vision is too important for manual patchwork. Partner with the specialists in high-performance Cloud and DevOps engineering to build the unshakeable foundations your future demands."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
