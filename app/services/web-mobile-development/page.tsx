
import { Smartphone, MonitorSmartphone, Globe, Users, TrendingUp, RefreshCw, Layers, Zap, Rocket, Search, Handshake } from "lucide-react";
import { ServiceHeroSection } from "@/components/sections/ServiceHeroSection";
import { ServiceFeaturesSection } from "@/components/sections/ServiceFeaturesSection";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { ServiceCTASection } from "@/components/sections/ServiceCTASection";
import { ServiceScrollSection } from "@/components/sections/ServiceScrollSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { BlogSection } from "@/components/sections/BlogSection";


export const metadata = {
    title: "Website and App Development Services That Users Love | Zylex",
    description: "Stop shipping fragile code. Zylex delivers website and app development and cross-platform mobile app development services. Absolute execution.",
};

export default function WebMobileApplicationDevelopmentPage() {
    return (
        <main className="bg-black min-h-screen">
            <ServiceHeroSection
                title="Web & Mobile Application Development: High-Performance Products Your Users Actually Love"
                subtitle="Web & Mobile Solutions"
                description="Your users don't care about your technical constraints—they care about speed, intuition, and reliability on the screen in front of them. We build the high-stakes digital experiences that keep your audience engaged and your business moving. Our website and app development solutions deliver elite engineering rigor across every device."
                ctaText="Let's Talk"
                ctaHref="/contact"
                icon={<MonitorSmartphone className="w-4 h-4 text-cyan-400" />}
            />

            <ServiceFeaturesSection
                title={'Strategic Impact: When "Good Enough" Apps Stop Scaling'}
                titleHighlight="Stop letting technical friction dictate your user experience. We solve the execution gaps that hold your product back."
                features={[
                    {
                        icon: <TrendingUp className="w-full h-full" />,
                        title: "The Performance Ceiling (Scale Issues)",
                        description: "When users, workflows, and data volume increase, \"pretty\" apps start to break. Our web application development services restore the stability and flexibility needed to support your most ambitious growth phases.",
                    },
                    {
                        icon: <Rocket className="w-full h-full" />,
                        title: "The Complexity Trap (Delivery Lag)",
                        description: "Expansion shouldn't kill your momentum. We untangle dependencies and technical overhead through a structured development approach that ensures predictable feature delivery and sustainable long-term growth.",
                    },
                    {
                        icon: <RefreshCw className="w-full h-full" />,
                        title: "The Innovation Anchor (Legacy Constraints)",
                        description: "Outdated code blocks the integrations and automation your business needs to stay competitive. We modernize your legacy stack using structured engineering services—without disrupting the operations that generate your revenue today.",
                    },
                    {
                        icon: <Smartphone className="w-full h-full" />,
                        title: "The Unified Experience Gap (Mobile Friction)",
                        description: "Maintaining separate codebases is an expensive, fragmented mess. Our cross-platform mobile app development services deliver a native feel on iOS and Android from a single, maintainable source—getting you to market faster.",
                    },
                ]}
            />

            <ServiceProcessSection
                title="Core Capabilities"
                titleHighlight="From Web Platforms to Mobile Ecosystems"
                ctaLink={{ text: "View case studies", href: "/resources" }}
                processData={[
                    {
                        title: "01",
                        content: (
                            <div className="pb-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                        <Globe className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Business-Driven Web Application Development
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Custom Platforms Built for Growth.</strong> We engineer secure, high-performance web applications tailored to your real-world workflows. Focused on usability and integration readiness, our platforms are built to scale alongside your most ambitious business goals—ensuring performance never becomes a bottleneck.
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
                                    <strong className="text-white">Elite Mobile Experiences.</strong> We build mobile apps that users never want to close. From intuitive journeys to responsive interactions, our custom mobile solutions are reliable, user-focused, and commercially ready from day one.
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
                                        <MonitorSmartphone className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Unified Cross-Platform App Development
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Cross-Platform Velocity.</strong> Stop wasting time on redundant development. We help you reach iOS and Android users simultaneously through unified codebases that sacrifice zero performance while maximizing maintenance efficiency and release speed.
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
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                                        Hire Web and Mobile App Developers (Staffing)
                                    </h4>
                                </div>
                                <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                                    <strong className="text-white">Accelerate Your Roadmap.</strong> Need to hire mobile app developer talent or hire application developer resources? Scale your internal capabilities with developers who integrate directly into your workflows. Accelerate delivery, harden your applications, and build high-impact features with on-demand engineering expertise.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />

            <ServiceCTASection
                title="Let's Discuss Your Product Vision"
                description="Ready to build a high-performance web or mobile application? Let's discuss your goals and the right execution approach."
                primaryButtonText="Let's Discuss"
                primaryButtonHref="/contact"
            />

            <ServiceScrollSection
                hue={200}
                title="Our Delivery Lifecycle: High-Performance Execution"
                titleHighlight="We follow a milestone-driven model that prioritizes business results over just writing code."
                description=""
            />

            <IntegrationsSection
                title="The Tech Stack"
                titleHighlight="Reality Over Hype"
                description="We select our stack based on your specific requirements for scale, security, and maintenance."
            />

            <WhyChooseUsSection
                title="Why Zylex is Your Ideal App Development Partner"
                titleHighlight="Because your users expect engineering excellence."
                benefits={[
                    {
                        icon: <Users className="w-7 h-7" />,
                        title: "User Experience Drives Every Choice",
                        description: "We don't just build code; we create intuitive experiences that users love, driving engagement and long-term retention.",
                        accent: "from-cyan-400 to-blue-600",
                    },
                    {
                        icon: <Layers className="w-7 h-7" />,
                        title: "Architecture Built for Scale",
                        description: "We design for tomorrow. Your application will be extensible and high-performing from the foundation, not bolted on as an afterthought.",
                        accent: "from-cyan-400 to-sky-500",
                    },
                    {
                        icon: <Search className="w-7 h-7" />,
                        title: "Radical Transparency",
                        description: "Regular sprint reviews, open communication, and detailed documentation ensure we are always aligned with your business goals.",
                        accent: "from-blue-400 to-indigo-600",
                    },
                    {
                        icon: <Zap className="w-7 h-7" />,
                        title: "Speed Without Quality Compromise",
                        description: "Our structured agile methodology delivers working software in focused 15-day sprints while maintaining elite stability standards.",
                        accent: "from-cyan-400 to-blue-500",
                    },
                    {
                        icon: <MonitorSmartphone className="w-7 h-7" />,
                        title: "Full-Spectrum Capability",
                        description: "We handle the entire digital presence. No need to coordinate between fragmented web and mobile development teams. When you need complete website and app development execution, we deliver end-to-end.",
                        accent: "from-sky-400 to-blue-600",
                    },
                    {
                        icon: <Handshake className="w-7 h-7" />,
                        title: "Long-Term Partnership",
                        description: "We stay engaged post-launch, helping you tune, scale, and evolve your application as your organization grows.",
                        accent: "from-cyan-400 to-sky-600",
                    },
                ]}
            />

            <BlogSection />

            <ServiceCTASection
                title="Ready to Build the Digital Pillar of Your Industry?"
                description="Don't just ship code—ship an unshakeable advantage. Partner with an engineering team that specializes in high-performance reality and turn your roadmap into a market-leading outcome."
                primaryButtonText="Let's Talk"
                primaryButtonHref="/contact"
            />
        </main>
    );
}
