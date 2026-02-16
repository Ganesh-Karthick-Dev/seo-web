

import { Code2 } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BlogSection } from "@/components/sections/BlogSection";

import { Layers, Rocket, RefreshCw, Cog, AppWindow, Box, Zap, Building2, Link2, Award, Target, MessageSquare, Settings, Shield, Handshake } from "lucide-react";

import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "Custom Software Development Services: 15-Day Rapid Delivery | Zylex",
    description:
        "Build scalable, high-performance digital products. Our engineering-first approach ensures absolute execution for MVPs and enterprise modernization.",
    alternates: {
        canonical: "/services/custom-software-development",
    },
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function CustomSoftwareDevelopmentPage() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('Custom Software Page: Blog data not available');
    }

    return (
        <main className="bg-black min-h-screen">
            <ServiceHeroSection
                title="Custom Software Development: The Architecture for Your Highest Ambitions"
                subtitle="Custom Software Development Services"
                description="Big ambitions need a solid foundation. You focus on defining the future; we'll build the high-performance technical catalyst that makes it actually happen. Our custom software development services deliver unshakeable systems that scale with your growth—no square pegs in round holes."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<Code2 className="w-4 h-4 text-cyan-400" />}
            />

            <ServiceFeaturesSection
                title="The Execution Gap: Where Technology Meets Reality"
                titleHighlight="You've proven the market. Now, let's remove the friction between your current state and your next stage of growth."
                features={[
                    {
                        icon: <Layers className="w-full h-full" />,
                        title: "The Scalability Wall",
                        description: "Success shouldn't break your systems. When your current setup starts acting like a brick, we build solutions that handle 10x growth as easily as today. We build tech that scales up, not falls down.",
                    },
                    {
                        icon: <Rocket className="w-full h-full" />,
                        title: "The \"Wait and See\" Risk",
                        description: "Market validation shouldn't take forever. We help you ship working software early through lean MVP application development, trading technical uncertainty for real-world data and user feedback.",
                    },
                    {
                        icon: <RefreshCw className="w-full h-full" />,
                        title: "The Legacy Anchor",
                        description: "Don't let outdated systems hold you back. We modernize your legacy tech with a disciplined approach that turns technical debt into a strength—without breaking the parts that actually make you money.",
                    },
                    {
                        icon: <Cog className="w-full h-full" />,
                        title: "The Manual Grind",
                        description: "Stop forcing your team to fit workflows into generic tools. We build platforms that automate your real business processes, not the ones a generic software salesman thinks you have.",
                    },
                ]}
            />

            <ServiceProcessSection
                title="From Concept to Scale"
                titleHighlight="Our Core Engineering Capabilities"
                ctaLink={{ text: "View case studies", href: "/resources" }}
                processData={[
                    {
                        title: "01",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <AppWindow className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Custom Application Development
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Build Something Real.</strong> Secure, scalable applications designed specifically for your unique business logic. We build internal platforms and line-of-business apps that improve visibility and collaboration—intuitive tools engineered to grow with you.
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
                                        <Box className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Software Product Development
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">SaaS Built for Market Leaders.</strong> We help founders and teams build modern digital products that stay ahead of the curve. Our software product development services combine modular, multi-tenant architecture with superior user experience, ensuring your product is commercially ready from day one.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "03",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        MVP Development & Rapid Prototyping
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Start Your Product Journey Fast.</strong> Validate your core features through lean, test-ready prototypes that deliver actual value. We build MVPs with a clear roadmap to scale, taking you from initial concept to market traction without the usual technical mess.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "04",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Building2 className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Enterprise Software Development
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Mission-Critical Stability for Complex Operations.</strong> High-scale environments need engineering, not just &quot;code.&quot; We implement robust ERP extensions, automation platforms, and secure portals designed to support distributed teams and high-volume data without the headache.
                                </p>
                            </div>
                        ),
                    },
                    {
                        title: "05",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Link2 className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Integration-First Platforms & API Engineering
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Unified, Integrated Digital Ecosystems.</strong> Fragmentation is an anchor. We build API-first platforms that connect seamlessly with your existing CRM, ERP, and data systems. We trade data silos for unshakeable interoperability and frictionless workflows.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />

            <ServiceCTASection
                title="Get the engineering powerhouse your vision deserves."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />

            <ServiceScrollSection
                hue={200}
                title="Our Delivery Lifecycle — From &quot;Concept&quot; to &quot;Launch&quot;"
                titleHighlight="Going live is just the beginning."
                description="We follow a milestone-driven model that ensures every choice drives a real business result."
            />

            <IntegrationsSection
                title="The Technology Stack"
                titleHighlight="Performance Over Trends"
                description="We select our stack based on your specific requirements for scale, security, and maintenance."
            />

            <WhyChooseUsSection
                title="Why Choose Zylex for Custom Software Development?"
                titleHighlight="Because we move your roadmap forward—on schedule, at scale."
                benefits={[
                    {
                        icon: <Award className="w-7 h-7" />,
                        title: "Engineering Excellence as the Standard",
                        description: "Excellence is built into every stage of delivery. We don't \"add\" quality later. From architecture-driven design and clean code standards to security discipline and scalability planning—we engineer for the long game.",
                        accent: "from-cyan-400 to-blue-600",
                    },
                    {
                        icon: <Target className="w-7 h-7" />,
                        title: "Predictable Execution & Milestone-Driven Delivery",
                        description: "Vision requires a reliable engine. We replace technical uncertainty with structured, milestone-driven progress. Through rigorous sprints, clear acceptance criteria, and transparent tracking—you always know where you stand.",
                        accent: "from-cyan-400 to-sky-500",
                    },
                    {
                        icon: <MessageSquare className="w-7 h-7" />,
                        title: "Digital Transparency & Complete Project Visibility",
                        description: "Clarity is the baseline for high-performance teams. We skip the black boxes. You get open collaboration, detailed sprint reviews, and actionable documentation that keeps everyone aligned.",
                        accent: "from-blue-400 to-indigo-600",
                    },
                    {
                        icon: <Settings className="w-7 h-7" />,
                        title: "Flexible Engagement Models Built for Scale",
                        description: "Adaptability is a strategic engineering advantage. Whether you're launching a high-velocity MVP or orchestrating complex enterprise delivery, our end-to-end software development services are tailored to your organizational maturity and growth trajectory.",
                        accent: "from-cyan-400 to-blue-500",
                    },
                    {
                        icon: <Shield className="w-7 h-7" />,
                        title: "Software Engineered for Performance & Real-World Reliability",
                        description: "We build for the future you're planning today. We design high-availability architectures and integration-ready systems that don't just \"work\"—they scale without breaking when success hits.",
                        accent: "from-sky-400 to-blue-600",
                    },
                    {
                        icon: <Handshake className="w-7 h-7" />,
                        title: "An Unshakeable Partnership Mindset",
                        description: "We're your partners in growth, not just another vendor. We avoid the \"one-and-done\" delivery model. We help you build technical foundations that evolve and dominate as your business accelerates.",
                        accent: "from-cyan-400 to-sky-600",
                    },
                ]}
            />

            <BlogSection initialBlogPosts={blogPosts} />

            <ServiceCTASection
                title="Ready to Build Software That Actually Scales?"
                description="Stop struggling with off-the-shelf limitations. Partner with the specialists in custom software development to build the high-performance foundations your vision demands."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
