

import React from "react";
import { Box, Sparkles, Eye, Heart, Gem, Paintbrush, Code2, Users, Search, Layers, Monitor, Rocket, Award, Lightbulb, Settings, MessageSquare, Handshake, Zap, Globe } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CardData } from "@/components/ui/scroll-hero-section";

// Features - The Impact Space
const features = [
    {
        icon: <Sparkles className="w-full h-full" />,
        title: "Storytelling as a Technical Engine",
        description: "If your brand story is static, it's being skipped. We engineer rich, immersive narratives that traditional web layouts simply cannot communicate, turning your digital presence into a high-stakes competitive advantage.",
    },
    {
        icon: <Eye className="w-full h-full" />,
        title: "Experience Over Passive Viewing",
        description: "Products should be felt, not just seen. We build interactive configurators and zoomed 3D perspectives that improve buying confidence and conversions—because a 360-degree rotation is the difference between a \"viewer\" and a \"customer.\"",
    },
    {
        icon: <Heart className="w-full h-full" />,
        title: "Memorable Retention Layers",
        description: "Memorable experiences aren't accidental; they're engineered. Our interactive approach helps brands deliver high-impact environments that increase user retention and strengthen brand perception long after the tab is closed.",
    },
    {
        icon: <Gem className="w-full h-full" />,
        title: "Premium Perception as a Metric",
        description: "Futuristic design shouldn't kill your performance. We blend cinematic 3D experiences with usability and accessibility—ensuring your website feels premium without making your users' fans spin like jet engines.",
    },
];

// Delivery Framework - 5 Phases for ServiceScrollSection
const deliveryPhases: CardData[] = [
    {
        badgeText: "Phase 1",
        badgeColor: "#06B6D4", // Cyan
        title: "Experience Mapping & Strategic Audit",
        description: "We analyze your goals, users, and interaction expectations. You get a clear definition of the right '3D depth' for your use case—ensuring we're building a strategic asset, not just an expensive visual effect.",
        ctaText: "Strategic clarity →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Search className="w-full h-full" />,
    },
    {
        badgeText: "Phase 2",
        badgeColor: "#3B82F6", // Blue
        title: "Interaction & Motion Blueprinting",
        description: "Our team creates the interaction flows, scene behavior, and motion curves. We design how the world moves before writing the first line of code, ensuring the user experience remains intuitive and frictionless from day one.",
        ctaText: "Motion design →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Paintbrush className="w-full h-full" />,
    },
    {
        badgeText: "Phase 3",
        badgeColor: "#06B6D4", // Cyan
        title: "Hardened 3D Engineering",
        description: "We build using performance-first techniques and modern frameworks. From shader optimization to GPU-level asset management, we ensure your 3D environment runs smooth—even on hardware that isn't built for high-end rendering.",
        ctaText: "Performance engineering →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Code2 className="w-full h-full" />,
    },
    {
        badgeText: "Phase 4",
        badgeColor: "#3B82F6", // Blue
        title: "Stress Testing & Cross-Platform Validation",
        description: "We validate rendering and animation accuracy across every relevant environment. We ensure your 3D experience is responsive and stable, whether it's being viewed on a high-end workstation or a mobile browser.",
        ctaText: "Quality assurance →",
        ctaHref: "/contact",
        gradient: "blue",
        icon: <Monitor className="w-full h-full" />,
    },
    {
        badgeText: "Phase 5",
        badgeColor: "#06B6D4", // Cyan
        title: "Launch & Continuous Evolution",
        description: "We manage the rollout and stay engaged for evolution. We continue optimizing for engagement and future enhancements, ensuring your 3D platform remains a long-term competitive advantage.",
        ctaText: "Long-term growth →",
        ctaHref: "/contact",
        gradient: "cyan",
        icon: <Rocket className="w-full h-full" />,
    },
];

// Tech Stack - 3D Web Technologies
const threeDTechLeft = [
    { label: "WebGL", icon: "react", color: "#61DAFB" },
    { label: "Three.js", icon: "nodejs", color: "#339933" },
    { label: "Babylon.js", icon: "graphql", color: "#E10098" },
    { label: "React Three Fiber", icon: "react", color: "#61DAFB" },
    { label: "Next.js", icon: "nextjs", color: "#000000" },
];

const threeDTechRight = [
    { label: "Vue.js", icon: "vue", color: "#4FC08D" },
    { label: "GPU Opt", icon: "docker", color: "#2496ED" },
    { label: "Texture Comp", icon: "aws", color: "#FF9900" },
    { label: "Lazy Rendering", icon: "prometheus", color: "#E6522C" },
    { label: "Asset Mgmt", icon: "kubernetes", color: "#326CE5" },
];

// Why Choose - 5 points
const whyChooseBenefits = [
    {
        icon: <Award className="w-7 h-7" />,
        title: "Engineering Excellence as the Standard",
        description: "Excellence is built into every stage of delivery. Most 3D sites fail because 'flashy' was the only goal. We prioritize architectural integrity and GPU discipline so we don't have to have 'emergency meetings' about why the site won't load on mobile later.",
    },
    {
        icon: <Lightbulb className="w-7 h-7" />,
        title: "Design-Led, Performance-First Approach",
        description: "Every interaction is a choice, not a gimmick. Our 3D web design services craft interactions to enhance storytelling and brand perception. We skip the visual noise and focus on meaningful engagement that actually helps your brand stand out in a sea of static pages.",
    },
    {
        icon: <Settings className="w-7 h-7" />,
        title: "Stability & Scalability Built-In",
        description: "We build for the future you are planning today. Our environments are engineered for smooth rendering and future expansion. We build the architecture that supports your growth, not the glue holding a 'fragile' visual effect together.",
    },
    {
        icon: <MessageSquare className="w-7 h-7" />,
        title: "Predictable Execution & Radical Transparency",
        description: "Execution is the only metric that matters. We swap guesswork for milestone-driven progress. You get a clear roadmap, predictable timelines, and transparent delivery that ensures you know exactly where your project stands at all times.",
    },
    {
        icon: <Handshake className="w-7 h-7" />,
        title: "An Unshakeable Partnership Beyond Launch",
        description: "We are your partners in growth, not just another vendor. We don't just ship and disappear. We help you enhance, extend, and evolve your 3D website development platforms as your brand scales, because engineering is better when both teams are actually on the same side.",
    },
];

import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "3D website development | Immersive Engineering | Zylex",
    description: "Stop building flat pages. Zylex 3D website development transforms brands through interactive 3D website development and 3D web design services.",
    alternates: {
        canonical: "/services/3d-website-development",
    },
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function ThreeDWebsiteDevelopmentPage() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('3D Website Page: Blog data not available');
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
    "name": "3D Website Development",
    "item": "https://zylex.io/services/3d-website-development"  
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
  "name": "3D Website Development",
  "description": "Zylex provides 3D website development services that help businesses design and build immersive, interactive web experiences using modern 3D technologies and web standards, tailored to their branding, user engagement, and performance requirements.",
  "provider": {
    "@type": "Organization",
    "name": "Zylex",
    "url": "https://zylex.io/"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "serviceType": "3D Website Development",
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Startups, Brands, Creative Teams, SMEs, Enterprise Teams"
  },
  "url": "https://zylex.io/services/3d-website-development",
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
                    title="3D Website Development: Stop Building Pages. Start Engineering Immersive Environments."
                    subtitle="Static Design is an Anchor. 3D Engineering is the Catalyst."
                    description="Traditional layouts are a limitation your vision can no longer afford. We specialize in high-performance 3D website development that transforms passive observers into active participants. No lag, no bloat, and zero 'GPU-exhaustion' excuses—just unshakeable digital environments built for scale, speed, and absolute market differentiation."
                    ctaText="Let's Talk"
                    ctaHref="/contact"
                    icon={<Box className="w-4 h-4 text-cyan-400" />}
                />

                {/* Features Section - The Impact Space */}
                <ServiceFeaturesSection
                    title="The Impact Space: Where 3D Refuses to Be Ignored"
                    titleHighlight="3D isn't a gimmick; it's a technical differentiator for brands that have moved beyond 'good enough.'"
                    features={features}
                />

                {/* Services Section - End-to-End 3D Engineering Services */}
                <section className="relative py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

                    <div className="max-w-[90rem] mx-auto relative z-10">
                        <div className="mb-16 md:mb-20 max-w-5xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                End-to-End 3D Engineering Services
                            </h2>
                            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                                We don't just "build sites"; we engineer performance-optimized digital worlds.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Service 1 - Cinematic Interface & UX Design */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6">
                                    <Paintbrush className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                    Cinematic Interface & UX Design
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Engineering Cinematic Depth.</strong> We design visually engaging 3D website design experiences that elevate brand storytelling. From interactive 3D journeys to motion-led navigation, we create interfaces that feel intuitive and meaningful—delivering impact that is seamlessly woven into your digital presence.
                                </p>
                            </div>

                            {/* Service 2 - High-Performance WebGL Frameworks */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                                    High-Performance WebGL Frameworks
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Custom Development for Real-World Scale.</strong> We build immersive, high-performance environments tailored to your audience. Our interactive 3D website development services include product visualization platforms, WebGL environments, and custom landing pages built with clean architecture and the stability to evolve as your business grows.
                                </p>
                            </div>

                            {/* Service 3 - Specialist 3D Team Extension */}
                            <div className="group relative p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-all duration-500">
                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition-colors">
                                    Specialist 3D Team Extension
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                                    <strong className="text-white block mb-2">Hire Mastery, Not Just Capacity.</strong> Need to hire 3D website developer talent who understand GPU optimization? Extend your team with expert specialists who deliver clean, scalable Three.js and Babylon.js development within a collaborative model. We support product launches and campaign experiences that demand technical excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Delivery Framework - ServiceScrollSection with custom phases */}
                <ServiceScrollSection
                    hue={200}
                    title="Our Delivery Framework: Structured for Precision"
                    titleHighlight="We skip the 'works on my machine' excuses. Every milestone is a hard step toward an unshakeable deployment."
                    description=""
                    cards={deliveryPhases}
                />

                {/* Tech Stack Section */}
                <IntegrationsSection
                    title="The Engineering Stack: Built for Render, Not for Bloat"
                    titleHighlight="We pick the tech that handles the heavy lifting without sacrificing the user experience."
                    leftTechItems={threeDTechLeft}
                    rightTechItems={threeDTechRight}
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
                                Why Brands Choose Zylex for 3D Development
                            </h2>
                            <p className="text-neutral-400 text-lg mt-4">
                                Because your roadmap shouldn't be limited by legacy rendering.
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
                    title="Ready to Build an Experience Your Users Can't Ignore?"
                    description="Stop settling for static layouts that get lost in the noise. Partner with the specialists in high-performance 3D engineering to build the immersive digital environments your vision demands."
                    primaryButtonText="Let's Talk"
                    primaryButtonHref="/contact"
                />
            </main>
        </>
    );
}
