

import React from "react";
import { Brain, Cog, Database, TrendingUp, Zap, Sparkles, MessageSquare, BarChart3, Settings, Code2, Search, Layers, Rocket, Monitor, Award, Target, Shield, Building2, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";

// Features - 4 Problems where AI creates impact
const features = [
    {
        icon: <Cog className="w-full h-full" />,
        title: "Manual processes slow execution",
        description: "We eliminate repetitive, fragmented workflows through automation — improving speed, accuracy, and operational efficiency.",
    },
    {
        icon: <Database className="w-full h-full" />,
        title: "Data exists — but insights don't",
        description: "Our predictive analytics and ML solutions turn raw data into actionable intelligence for smarter decisions and forecasting.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "Legacy tools limit intelligence & scalability",
        description: "We modernize systems with AI-driven capabilities that enhance performance, adapt to change, and support real-time decisioning.",
    },
    {
        icon: <Zap className="w-full h-full" />,
        title: "Growing operations need smarter systems — not more manpower",
        description: "We build scalable AI solutions that learn, optimize, and improve outcomes as your business grows.",
    },
];

// 5 Phases - Implementation Blueprint
const phasesData = [
    {
        title: "01",
        content: (
            <div className="pb-10">
                <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                        <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Discovery & Business Alignment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Identify the right AI opportunities, assess feasibility, evaluate data readiness, and align initiatives to measurable business outcomes.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A prioritized AI roadmap with use-cases, value mapping, delivery milestones, and success metrics.
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
                        Data Readiness & Architecture Design
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Audit data sources, define pipelines, select ML architecture, plan integrations, and establish governance & security standards.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> Data foundation blueprint, pipeline strategy, tech stack validation, and integration architecture.
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
                        Prototype & Value Validation
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Build a working AI / ML pilot to validate accuracy, performance, workflows, and real-world business impact.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A validated prototype with benchmarks, user feedback insights, and implementation recommendations.
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
                        <Rocket className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Full-Scale Development & Deployment
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Develop production-grade AI applications, integrate with business systems, automate workflows, and ensure secure deployment.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A fully integrated, production-ready AI solution with documentation, reliability controls, and monitored rollout.
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
                        <Monitor className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                        Monitoring, Optimization & Scale
                    </h4>
                </div>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">
                    <strong className="text-white">What We Do:</strong> Track performance, retrain models, manage drift, optimize cost & accuracy, and expand AI to new workflows.
                </p>
                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                    <strong className="text-white">What You Get:</strong> A continuously improving AI ecosystem — scalable, reliable, and aligned with long-term business growth.
                </p>
            </div>
        ),
    },
];

// Tech Stack - AI/ML focused (for IntegrationsSection animated beam)
const aiTechLeft = [
    { label: "AI & ML", icon: "react", color: "#61DAFB" },
    { label: "NLP", icon: "nodejs", color: "#339933" },
    { label: "Analytics", icon: "postgresql", color: "#4169E1" },
    { label: "Data", icon: "graphql", color: "#E10098" },
    { label: "Cloud", icon: "aws", color: "#FF9900" },
];

const aiTechRight = [
    { label: "MLOps", icon: "docker", color: "#2496ED" },
    { label: "Automation", icon: "kafka", color: "#ffffff" },
    { label: "Security", icon: "auth0", color: "#EB5424" },
    { label: "Monitoring", icon: "prometheus", color: "#E6522C" },
    { label: "Scale", icon: "kubernetes", color: "#326CE5" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Outcome-Focused AI Delivery",
        description: "We design AI and ML solutions around business outcomes — improving efficiency, decision-making, customer experience, and operational performance.",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Strategy-Led, Use-Case-Driven Approach",
        description: "Every implementation starts with problem discovery, feasibility analysis, and measurable success criteria — not technology-first execution.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Enterprise-Ready, Secure & Governed AI",
        description: "Our solutions follow security, privacy, compliance, and model governance standards — ensuring safe and responsible adoption.",
    },
    {
        icon: <Building2 className="w-7 h-7" />,
        title: "Scalable Architecture, Built for Real-World Use",
        description: "AI models, pipelines, and automations are designed for performance, retraining, monitoring, and long-term scalability.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "Partnership Beyond Deployment",
        description: "We support continuous improvement — model optimization, performance tuning, automation extension, and adoption enablement.",
    },
];

export default function AIAutomationPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Hero Section */}
            <ServiceHeroSection
                title="AI Development for Smarter, Intelligent Applications"
                subtitle="AI & Automation"
                description="Our AI development services help you design and deploy practical AI, machine learning, and automation solutions that enhance decision-making, streamline operations, and drive growth — delivering secure, scalable, business-ready AI, not experimental prototypes."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Brain className="w-4 h-4 text-cyan-400" />}
            />

            {/* Features Section - 4 Problems */}
            <ServiceFeaturesSection
                title="Where AI, ML & Automation Drive the Most Business Impact"
                titleHighlight="We focus on AI initiatives that streamline operations, strengthen decision-making, and create measurable business outcomes."
                features={features}
            />

            {/* Solutions Section - 5 Solutions (Simple Card Grid) */}
            <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                <div className="max-w-[90rem] mx-auto relative z-10">
                    <div className="mb-16 md:mb-20 max-w-5xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            AI, Machine Learning & Automation Development
                        </h2>
                        <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                            From Idea to Production-Ready Systems — From discovery to rollout, we ensure every initiative moves forward with clarity, structured milestones, and outcome-driven execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Solution 1 - Generative AI */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                <Sparkles className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                Generative AI Solutions
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We design practical, enterprise-ready Generative AI solutions that improve productivity, accelerate knowledge access, and enhance customer experiences — while maintaining security, governance, and compliance. Our implementations include intelligent assistants, automated document processing, content workflows, and support enablement — engineered for efficiency and measurable operational value.
                            </p>
                        </div>

                        {/* Solution 2 - NLP */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                Natural Language & Text Intelligence (NLP)
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We build NLP-driven solutions that extract insights, classify information, and streamline text-heavy processes. Our capabilities include conversational automation, entity and document recognition, sentiment interpretation, and knowledge retrieval — helping teams respond faster, reduce manual effort, and make informed decisions at scale.
                            </p>
                        </div>

                        {/* Solution 3 - Predictive Analytics */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                <BarChart3 className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                Predictive Analytics & Machine Learning Solutions
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We develop predictive analytics and ML models that help organizations forecast outcomes, detect anomalies, and personalize experiences. From churn prediction and demand forecasting to risk detection and recommendation engines — our models are delivered with monitored performance, retraining strategies, and real-world validation for dependable results.
                            </p>
                        </div>

                        {/* Solution 4 - Automation */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                            <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                <Settings className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-violet-100 transition-colors">
                                Automation Development Services
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We implement intelligent workflow and process automation that reduces manual effort, improves accuracy, and accelerates execution across teams and systems. Our automation solutions enable approval workflows, reporting automation, data processing, and integration-led orchestration — designed to scale without disrupting existing operations.
                            </p>
                        </div>

                        {/* Solution 5 - Custom AI */}
                        <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-500 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                <Brain className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-emerald-100 transition-colors">
                                Custom AI Development Solutions
                            </h3>
                            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                We provide custom AI development solutions tailored to your domain, data landscape, and business outcomes. From AI-powered applications and ML platforms to decision intelligence systems — we architect, build, and operationalize AI solutions that align with your workflows, governance needs, and long-term scalability roadmap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Blueprint - 5 Phases (Timeline) */}
            <ServiceProcessSection
                title="From Idea to Intelligent Execution"
                titleHighlight="Our AI Implementation Blueprint — Turn AI initiatives into measurable business impact with a structured, outcome-driven delivery model built for clarity, speed, and real-world adoption."
                processData={phasesData}
            />

            {/* Tech Stack Section - Animated Beam */}
            <IntegrationsSection
                title="Tech Stack"
                titleHighlight="Built for Performance, Scale & Real-World Delivery"
                leftTechItems={aiTechLeft}
                rightTechItems={aiTechRight}
                description="Our technology choices are guided by your business goals — not trends. Every stack is selected for reliability, maintainability, and long-term scalability, so your AI and automation initiatives continue to perform as your organization grows."
            />

            {/* Why Choose Section - 5 Points */}
            <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 relative">
                    <div className="mb-16 max-w-4xl">
                        <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                            Why Businesses Choose Zylex for AI, Machine Learning & Automation Development
                        </h2>
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
            <BlogSection />

            {/* Final CTA */}
            <ServiceCTASection
                title="Ready to Turn AI Ideas Into Production-Ready Business Solutions?"
                description="From AI applications and predictive analytics to workflow automation — we help you build solutions that deliver measurable business value with structured, milestone-driven execution."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
