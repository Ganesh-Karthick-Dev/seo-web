

import React from "react";
import { Brain, Cog, Database, TrendingUp, Zap, Sparkles, MessageSquare, BarChart3, Settings, Code2, Search, Layers, Rocket, Monitor, Award, Target, Shield, Building2, Handshake, Lock, Network } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CardData } from "@/components/ui/scroll-hero-section";

// Features - The Intelligence Impact
const features = [
    {
        icon: <Cog className="w-full h-full" />,
        title: "The Manual Tax (Workflow Erosion)",
        description: "Manual processes aren't just slow; they're a drain on your survival. We eliminate repetitive, fragmented workflows through intelligent automation—trading human error for surgical precision and terminal velocity.",
    },
    {
        icon: <Database className="w-full h-full" />,
        title: "The Insight Blackout (Data as Overhead)",
        description: "Data exists everywhere, but without connection, it's just storage cost. Our predictive analytics and ML solutions turn raw data into actionable intelligence, ensuring you're making decisions based on foresight, not just forensic analysis of why you missed the target.",
    },
    {
        icon: <TrendingUp className="w-full h-full" />,
        title: "The Legacy Anchor (System Stagnation)",
        description: "Outdated tools dictate your speed. We modernize your existing systems with AI integration services that adapt to change and support real-time decisioning—turning technical debt into a scalable competitive advantage.",
    },
    {
        icon: <Zap className="w-full h-full" />,
        title: "Systems That Grow, Not Just Scale",
        description: "Growing operations need smarter systems, not more payroll. We build scalable AI solutions that learn, optimize, and improve outcomes as your business grows—because scaling your team to match your code is a losing game.",
    },
];

// Delivery Framework - 5 Phases for ServiceScrollSection
const deliveryPhases: CardData[] = [
    {
        badgeText: "Phase 1",
        badgeColor: "#06B6D4", // Cyan
        title: "High-Stakes Audit & Alignment",
        description: "Identify the intelligence gaps, assess data readiness, and map initiatives to unshakeable business outcomes. Result: A prioritized AI roadmap with value mapping and clear execution milestones—not a generic slide deck about the 'future of tech.'",
        ctaText: "Strategic alignment →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Search className="w-full h-full" />,
    },
    {
        badgeText: "Phase 2",
        badgeColor: "#3B82F6", // Blue
        title: "Data Architecture & Scaling Blueprints",
        description: "Audit sources, define pipelines, and select the right ML architecture for your specific scale. Result: A data foundation blueprint and a validated tech stack that supports secure, scalable integration into your current ecosystem.",
        ctaText: "Architecture design →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Layers className="w-full h-full" />,
    },
    {
        badgeText: "Phase 3",
        badgeColor: "#06B6D4", // Cyan
        title: "Value-Driven Pilot & Validation",
        description: "Build a working AI pilot to validate performance and real-world impact. Result: A validated prototype with hard benchmarks and implementation recommendations based on actual data, not optimism.",
        ctaText: "Prototype validation →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Code2 className="w-full h-full" />,
    },
    {
        badgeText: "Phase 4",
        badgeColor: "#3B82F6", // Blue
        title: "Hardened Development & Deployment",
        description: "Develop production-grade applications and integrate them into your systems. Result: A fully integrated AI solution with secure deployment controls and reliability documentation—zero 'experimental' excuses.",
        ctaText: "Production deployment →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Rocket className="w-full h-full" />,
    },
    {
        badgeText: "Phase 5",
        badgeColor: "#06B6D4", // Cyan
        title: "Continuous Optimization & Managed Scale",
        description: "Track performance, manage model drift, and retrain for accuracy. Result: A continuously improving AI ecosystem that scales with your growth, ensuring your intelligence layer remains a strategic advantage.",
        ctaText: "Managed scale →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Monitor className="w-full h-full" />,
    },
];

// Tech Stack - AI/ML focused
const aiTechLeft = [
    { label: "OpenAI", icon: "react", color: "#61DAFB" }, // Using react icon as placeholder if needed, or generic
    { label: "PyTorch", icon: "nodejs", color: "#339933" },
    { label: "TensorFlow", icon: "graphql", color: "#E10098" },
    { label: "HuggingFace", icon: "react", color: "#61DAFB" },
    { label: "Snowflake", icon: "nextjs", color: "#000000" },
];

const aiTechRight = [
    { label: "Databricks", icon: "vue", color: "#4FC08D" },
    { label: "MLflow", icon: "docker", color: "#2496ED" },
    { label: "Kubernetes", icon: "aws", color: "#FF9900" },
    { label: "Docker", icon: "prometheus", color: "#E6522C" },
    { label: "Python", icon: "kubernetes", color: "#326CE5" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Outcome-Focused Engineering Excellence",
        description: "AI should produce results, not just headlines. We design AI and ML solutions around actual business outcomes—improving efficiency and decision-making from day one, so we don't have to have 'status meetings' about hypothetical gains later.",
    },
    {
        icon: <Target className="w-7 h-7" />,
        title: "Strategy-Led, Use-Case-Driven Approach",
        description: "Technology is the tool, not the goal. Every implementation starts with problem discovery and feasibility analysis. Our AI development services skip the 'technology-first' trap and focus on measurable success criteria that actually move the needle for your organization.",
    },
    {
        icon: <Shield className="w-7 h-7" />,
        title: "Enterprise-Ready, Secure & Governed AI",
        description: "Innovation doesn't mean ignoring the rules. Our solutions follow strict security, privacy, and model governance standards. We ensure your AI adoption is safe and compliant—because 'it's complicated' is never a valid excuse for a security breach.",
    },
    {
        icon: <Building2 className="w-7 h-7" />,
        title: "Scalable Architecture Built for the Real World",
        description: "If it doesn't scale, it's just a hobby. Our models, pipelines, and automations are designed for performance, retraining, and long-term survival. We build the architecture that grows with your organization, not just a one-off visual effect.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "An Unshakeable Partnership Beyond Deployment",
        description: "We stay engaged because your growth is our metric. We don't just ship and disappear. We support continuous performance tuning and automation extension, ensuring your intelligence layers remain a formidable competitive advantage.",
    },
];

import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "AI development services | Engineered for Results | Zylex",
    description: "Stop experimenting. Zylex AI development services are engineered for scale—custom AI development solutions and AI integration services. Absolute execution.",
    alternates: {
        canonical: "/services/ai-automation",
    },
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function AIAutomationPage() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('AI Automation Page: Blog data not available');
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Home",
    "item": "https://zylex.io/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "AI & Automation",
    "item": "https://zylex.io/services/ai-automation"  
  }]
}`
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation",
  "description": "Zylex provides AI automation services that help businesses streamline workflows, reduce manual effort, and improve efficiency by integrating intelligent automation solutions using AI technologies tailored to operational and business needs.",
  "provider": {
    "@type": "Organization",
    "name": "Zylex",
    "url": "https://zylex.io/"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "serviceType": "AI Automation",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Startups, SME Businesses, Enterprise Teams, CTOs, Operations Leaders"
  },
  "url": "https://zylex.io/services/ai-automation",
  "offers": {
    "@type": "Offer",
    "url": "https://zylex.io/contact"
  }
}`
                }}
            />
            <main className="bg-black min-h-screen">
                {/* Hero Section */}
                <ServiceHeroSection
                    title="AI & Automation: Turning Experimental Noise into Operational Momentum."
                    subtitle="AI is the Vision. Execution is the Engine."
                    description="Experimental prototypes are for labs; market dominance is for those who execute. We specialize in high-performance AI development services that actually move the needle on your bottom line. No technical fluff, no 'black box' excuses—just secure, scalable, and business-ready AI engineered for real-world dominance."
                    ctaText="Let's Talk"
                    ctaHref="/contact"
                    icon={<Brain className="w-4 h-4 text-cyan-400" />}
                />

                {/* Features Section - The Intelligence Impact */}
                <ServiceFeaturesSection
                    title="The Intelligence Impact: Where AI Refusal is a Liability"
                    titleHighlight="We focus on the high-stakes initiatives where intelligence meets operational reality."
                    features={features}
                />

                {/* Services Section - Core Capabilities */}
                <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                    <div className="max-w-[90rem] mx-auto relative z-10">
                        <div className="mb-16 md:mb-20 max-w-5xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Engineering the Intelligence Layer: Core Capabilities
                            </h2>
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                                We don't just "build models"; we engineer unshakeable intelligence that scales.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Solution 1 - Generative AI */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                    <Sparkles className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                    Enterprise-Ready Generative AI
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Engineering Productivity, Not Just Chat.</strong> We design practical, high-performance Generative AI solutions that accelerate knowledge access and harden customer experiences. Our AI software development approach builds intelligent assistants and automated document processing—foundations that actually improve operational value while keeping your data secured against the noise.
                                </p>
                            </div>

                            {/* Solution 2 - NLP */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                    <MessageSquare className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                    Natural Language Intelligence (NLP)
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Extract Certainty from Information.</strong> We build NLP-driven solutions that extract insights and streamline text-heavy processes. Our capabilities include conversational automation and document recognition—helping your team respond faster and make informed decisions without the manual grind of "digging through files."
                                </p>
                            </div>

                            {/* Solution 3 - Predictive Analytics */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                    <BarChart3 className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                    Predictive Mastery & Machine Learning
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Forecast Success with Hardened Data.</strong> We develop predictive models that help you detect anomalies and forecast outcomes with surgical accuracy. Our AI application development delivers churn prediction, risk detection, and demand forecasting with monitored performance and real-world validation—because a model that doesn't work in production is just a non-production prototype.
                                </p>
                            </div>

                            {/* Solution 4 - Automation */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-violet-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-6">
                                    <Settings className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-violet-100 transition-colors">
                                    Intelligent Process Hardening (Automation)
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Reduce Effort, Accelerate Execution.</strong> We implement automation that reduces manual load and improves accuracy across your entire architecture. Our solutions enable integration-led orchestration and reporting automation—designed to scale without disrupting the operations that keep you in business.
                                </p>
                            </div>

                            {/* Solution 5 - Custom AI */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-emerald-500/30 transition-all duration-500 md:col-span-2 lg:col-span-1">
                                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                                    <Brain className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-emerald-100 transition-colors">
                                    Custom AI Engineering Solutions
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Tailored Intelligence for Your Reality.</strong> We provide custom AI development solutions designed for your specific domain and governance needs. From specialized ML platforms to decision intelligence systems, we architect and operationalize the technology that aligns with your long-term scalability roadmap.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Delivery Framework - ServiceScrollSection with custom phases */}
                <ServiceScrollSection
                    hue={270} // Violet/Purple for AI
                    title="The AI Blueprint: Structured for Absolute Certainty"
                    titleHighlight="We skip the 'wait and see' approach. Every milestone is a hard step toward a stable, intelligent release."
                    description=""
                    cards={deliveryPhases}
                />

                {/* Tech Stack Section */}
                <IntegrationsSection
                    title="The AI Stack: Engineered for Reality, Not for Trends"
                    titleHighlight="We select technologies based on proven performance and real-world enterprise requirements."
                    leftTechItems={aiTechLeft}
                    rightTechItems={aiTechRight}
                    description="Our tech choices ensure visual richness without the usability drama."
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
                                Why Businesses Choose Zylex for AI & Automation
                            </h2>
                            <p className="text-neutral-400 text-lg mt-4">
                                Because your roadmap shouldn't be a laboratory experiment.
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
                    title="Ready to Turn AI Ideas Into Production-Ready Reality?"
                    description="Stop struggling with 'what if' and start building 'what works.' Partner with the specialists in high-performance AI engineering to build the intelligent foundations your vision demands."
                    primaryButtonText="Let's Talk"
                    primaryButtonHref="/contact"
                />
            </main>
        </>
    );
}
