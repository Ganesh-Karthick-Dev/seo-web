import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Bot,
    Check,
    CheckCircle2,
    Clock3,
    Eye,
    FileText,
    Layers3,
    Lightbulb,
    MessageSquare,
    RefreshCw,
    Rocket,
    Search,
    ShoppingCart,
    Smartphone,
    Users,
    Workflow,
} from "lucide-react";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { IndustriesShowcaseSection } from "@/components/sections/IndustriesShowcaseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { Testimonial } from "@/components/ui/design-testimonial";
import FAQs from "@/components/ui/faqs-component";
import { OutsourceDifferenceGrid } from "@/components/ui/outsource-difference-grid";
import { OutsourceStandardsParallax } from "@/components/ui/outsource-standards-parallax";
import { SoftwareOutsourcingHero } from "@/components/ui/software-outsourcing-hero";
import { VerticalTabs } from "@/components/ui/vertical-tabs";
import { getAllBlogPosts } from "@/lib/blog-data";

const canonicalPath = "/services/outsource-software-development-india";
const canonicalUrl = `https://zylex.io${canonicalPath}`;

const seoKeywords = [
    "outsourcing software development india",
    "outsourcing software development in india",
    "software outsourcing companies in india",
    "india software outsourcing",
    "software development outsourcing companies in india",
    "outsourcing app development india cost",
    "outsource development to india",
    "outsourced product development companies in india",
    "outsourcing development india",
];

const heroContent = {
    title: "Outsourcing Software Development in India That Delivers Real Business Progress",
    description:
        "Work with a dedicated engineering team that plans before building, delivers in visible sprints, and stays aligned with your goals from the first call to final release.",
    supportingText: "No delays. No guesswork. Just working software you can see with 15-day sprints.",
    ctaText: "Start Your First Sprint",
};

const operatingPrinciples = [
    {
        icon: Eye,
        title: "Full Visibility Into Your Software Development Process",
        description:
            "No black boxes. No chasing updates. Every sprint delivers working software you can review, test, and validate. You always know what is being built and where things stand.",
    },
    {
        icon: FileText,
        title: "We Plan Before We Build Every Single Time",
        description:
            "Every outsourcing engagement starts with a deep scoping session. We understand your goals, your users, and your constraints before writing a single line of code.",
    },
    {
        icon: Clock3,
        title: "Your Time Zone Is Never a Barrier to Progress",
        description:
            "We maintain a guaranteed daily overlap window with your team. Questions get answered fast. Decisions never wait 24 hours. Your project keeps moving.",
    },
    {
        icon: Users,
        title: "Direct Access to the Engineers Building Your Product",
        description:
            "You work directly with the team building your product. No layers, no miscommunication, just clear conversations and faster execution from people who understand your system.",
    },
];

const engineeringFocus = [
    "We design systems that handle growth from the start, not after problems appear.",
    "We structure applications so features can evolve without breaking existing functionality.",
    "We ensure your software connects smoothly with third-party tools and internal systems.",
    "We build with performance in mind so your product stays fast as users increase.",
    "We implement security practices that protect your data without affecting usability.",
    "We keep your system observable so issues are identified and resolved early.",
];

const engineeringRisks = [
    "Rebuilding after launch",
    "Scaling issues under real traffic",
    "Costly fixes due to poor architecture",
];

const experiencePoints = [
    {
        id: "01",
        image: "/service-page/offshore/Discovery_Through_System_202604092221.png",
        title: "You Get a Scoping Document Before Work Begins",
        description:
            "No assumptions. No jumping straight into code. Before anything is built, you receive a clear written scope that outlines exactly what we are building and why.",
    },
    {
        id: "02",
        image: "/service-page/offshore/Live_Working_Software,_202604092226.png",
        title: "Every Sprint Ends With a Live Demo",
        description:
            "Not a screenshot. Not a slide. A working build you can interact with, share with your stakeholders, and give direct feedback on before the next sprint begins.",
    },
    {
        id: "03",
        image: "/service-page/offshore/Sprint_Visibility_Through_202604092223.png",
        title: "Your Feedback Shapes the Next Sprint Immediately",
        description:
            "Nothing sits in a backlog for weeks. What you say at the end of one sprint directly influences what gets built in the next. Fast decisions. Faster delivery.",
    },
    {
        id: "04",
        image: "/service-page/offshore/Dedicated_Offshore_Product_202604092222.png",
        title: "You Own Everything From Day One",
        description:
            "All code, all assets, all intellectual property are yours. No lock-in. No licensing fees. Full ownership transfers to you at every stage of the engagement.",
    },
    {
        id: "05",
        image: "/service-page/offshore/Dedicated_Offshore_Team_202604092233.png",
        title: "One Point of Contact Who Knows Your Product Inside Out",
        description:
            "You are not passed around. One dedicated person from our team knows your project end to end and is your single point of contact throughout the entire engagement.",
    },
    {
        id: "06",
        image: "/service-page/offshore/Security,_Documentation,_and_202604092231.png",
        title: "We Document As We Build",
        description:
            "Every decision, every architecture choice, every integration is documented as it happens. When your product ships, the documentation ships with it.",
    },
];

const differencePoints = [
    {
        title: "You Don't Wait Months to Know If It Is Working",
        description:
            "Development is broken into short, focused cycles where meaningful output is delivered regularly. You see how things are progressing early, make decisions faster, and keep the product moving in the right direction.",
    },
    {
        title: "Built to Handle Real Usage from Day One",
        description:
            "The systems we build are designed for actual users, real traffic, and real business operations. Performance, stability, and reliability are considered from the start, not added later.",
    },
    {
        title: "Designed Around How Your Business Actually Works",
        description:
            "We do not adjust your workflows to fit the software. The software is shaped around your processes, your users, and the way your business operates daily.",
    },
    {
        title: "Built for Your Reality, Not Copied From a Template",
        description:
            "Your business has a specific context. We learn it before we build. Every solution is scoped, architected, and delivered around your exact needs, never retrofitted from a generic template.",
    },
    {
        title: "Built to Grow Without Rebuilding",
        description:
            "The foundation is designed for change. As your product evolves, your system supports new features, integrations, and scale without breaking or needing a complete rebuild.",
    },
];

const serviceCoverage = [
    {
        icon: Workflow,
        title: "Custom Software Development Built Around Your Business",
        description:
            "We build software around your exact workflow and business logic. No templates, no shortcuts. Just clean, scalable, production-ready solutions designed specifically for how your business operates and grows.",
    },
    {
        icon: Smartphone,
        title: "Mobile App Development for iOS and Android",
        description:
            "We create mobile app development solutions that are fast, stable, and easy to use. Your app works smoothly across devices and connects well with your existing software and backend systems.",
    },
    {
        icon: Bot,
        title: "AI Development and Business Automation Solutions",
        description:
            "Our production-grade AI systems and automation tools remove real manual work from your operations. Working solutions that integrate into your business and deliver measurable results from day one.",
    },
    {
        icon: ShoppingCart,
        title: "E-Commerce Development That Converts Visitors Into Customers",
        description:
            "We build e-commerce platforms that are fast, secure, and built to scale. Designed around your catalogue, your checkout flow, and the growth targets your business is working toward.",
    },
    {
        icon: RefreshCw,
        title: "App Modernisation and Digital Transformation Services",
        description:
            "We modernise legacy systems, migrate to scalable cloud architecture, and future-proof your technology stack without disrupting current operations or losing business continuity in the process.",
    },
    {
        icon: Lightbulb,
        title: "Strategic IT Consulting for Smarter Technology Decisions",
        description:
            "We offer IT consulting services to help you make the right technology decisions. From planning to execution, we guide you with clarity so your investment leads to real business outcomes.",
    },
];

const standards = [
    {
        title: "We Focus on Doing the Work Right From the Start",
        description:
            "Clear planning, structured execution, and consistent delivery define how we build, not claims or marketing statements.",
    },
    {
        title: "Clients Work With Us for Clarity and Consistency",
        description:
            "Teams choose to work with us because they get visibility into progress, structured delivery, and a development approach that keeps their product moving without confusion.",
    },
    {
        title: "Every Project Is Built for Real Use, Not Just Delivery",
        description:
            "We do not build for handover alone. We build software that is meant to be used, scaled, and improved over time so your investment keeps delivering value.",
    },
];

const faqs = [
    {
        question: "What does outsourcing software development to India actually involve?",
        answer:
            "Outsourcing software development to India means partnering with an India-based engineering team to plan, build, and deliver your software product. At Zylex, this includes everything from initial scoping and architecture to development, testing, and post-launch support. You stay involved at every stage through sprint reviews and direct team communication while we handle the full engineering execution.",
    },
    {
        question: "How much does it cost to outsource software development to India?",
        answer:
            "The cost depends on your project scope, complexity, and timeline. India-based software development is significantly more cost-efficient than hiring locally in the US or UK without compromising on engineering quality. At Zylex, we offer sprint-based engagements so you only commit to one sprint at a time, giving you full cost visibility and control throughout the project.",
    },
    {
        question: "How do you handle time zone differences with US, UK, and Australian clients?",
        answer:
            "We maintain a guaranteed daily overlap window with your team regardless of your time zone. Questions are answered the same day. Sprint reviews are scheduled at times that work for your region. You are never waiting 24 hours for a response on something that matters to your project.",
    },
    {
        question: "Who owns the code and intellectual property after the project is complete?",
        answer:
            "You do. One hundred percent. All code, all assets, and all intellectual property belong to you from the moment they are written. We sign an NDA and IP assignment agreement before any project discussion begins. There are no licensing fees, no lock-in, and no dependency on Zylex to access or use what we build for you.",
    },
    {
        question: "How is Zylex different from other software outsourcing companies in India?",
        answer:
            "Most outsourcing companies give you a project manager as your only point of contact and deliver a finished product months later. At Zylex, you work directly with the engineers building your product, receive working software every 15 days, and have full visibility into every decision made along the way. We plan before we build, document as we go, and treat your product as if it were our own.",
    },
    {
        question: "What types of businesses do you work with?",
        answer:
            "We work with startups, scale-ups, and established businesses across the US, UK, Australia, Canada, and Singapore. Our clients include founders building their first product, CTOs scaling an existing platform, and business owners digitising their operations. If you have a real problem that software can solve, we are built to help you solve it.",
    },
    {
        question: "Can Zylex work with an early-stage idea, or do I need a full specification?",
        answer:
            "You do not need a full specification to start. Most of our clients come with an idea, a problem, or a rough concept. Our discovery phase is specifically designed to turn that into a clear, agreed scope before development begins. We ask the right questions, map your requirements, and give you a documented plan before any sprint starts.",
    },
    {
        question: "What industries and sectors does Zylex build software for?",
        answer:
            "We build software for businesses across fintech, e-commerce, SaaS, healthcare, logistics, education, and professional services. Rather than being a generalist agency, we bring sector-specific understanding to every project so the software we build reflects how your industry actually operates, not just how software is generically built.",
    },
    {
        question: "How quickly can Zylex start on a new project?",
        answer:
            "Once we complete the discovery and scoping session and you approve the sprint plan, development typically begins within one to two weeks. We do not keep clients waiting for long in onboarding queues. The goal is to get your project moving as fast as responsibly possible without skipping the planning steps that make delivery reliable.",
    },
    {
        question: "What happens after the software is launched?",
        answer:
            "Launch is not the end of our engagement. We provide post-launch support, performance monitoring, and ongoing sprint-based development as your product grows. If you need new features, performance improvements, or infrastructure scaling, your Zylex team is available to continue building with the same standards and visibility you experienced from day one.",
    },
];

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://zylex.io/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Outsource Software Development India",
            item: canonicalUrl,
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Outsourcing Software Development in India",
    description:
        "Zylex is an outsourcing software development company in India offering custom software, app development, and scalable solutions to help businesses reduce costs, improve efficiency, and grow faster with 15-day sprint delivery.",
    provider: {
        "@type": "Organization",
        name: "Zylex",
        url: "https://zylex.io/",
    },
    areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Singapore" },
    ],
    serviceType: "Outsourcing Software Development in India",
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Startups, scale-ups, founders, CTOs, and established businesses",
    },
    url: canonicalUrl,
    offers: {
        "@type": "Offer",
        url: "https://zylex.io/contact",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export const metadata: Metadata = {
    title: "Outsourcing Software Development in India | Custom Software Solutions",
    description:
        "Zylex is an outsourcing software development company in India offering custom software, app development, and scalable solutions to help businesses reduce costs, improve efficiency, and grow faster with 15-day sprint delivery.",
    keywords: seoKeywords,
    alternates: {
        canonical: canonicalPath,
    },
    openGraph: {
        title: "Outsource Software Development to India That Delivers Real Results | Zylex",
        description:
            "Work with Zylex to outsource software development to India with confidence. Build scalable, custom solutions with faster delivery, transparent progress, and systems designed for real-world performance.",
        url: canonicalUrl,
        siteName: "Zylex",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Outsource Software Development to India That Delivers Real Results | Zylex",
        description:
            "Work with Zylex to outsource software development to India with confidence. Build scalable, custom solutions with faster delivery, transparent progress, and systems designed for real-world performance.",
    },
};

export const revalidate = 60;

function SectionShell({
    eyebrow,
    title,
    titleHighlight,
    description,
    children,
}: {
    eyebrow?: string;
    title: string;
    titleHighlight?: string;
    description?: string;
    children: ReactNode;
}) {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mb-16 md:mb-20">
                    {eyebrow ? (
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                            {eyebrow}
                        </p>
                    ) : null}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08]">
                        {title}
                        {titleHighlight ? (
                            <>
                                <br />
                                <span className="text-neutral-500">{titleHighlight}</span>
                            </>
                        ) : null}
                    </h2>
                    {description ? (
                        <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-400">
                            {description}
                        </p>
                    ) : null}
                </div>
                {children}
            </div>
        </section>
    );
}

function PrimaryCta({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
        >
            {children}
            <ArrowRight className="w-4 h-4" />
        </Link>
    );
}

function ProcessContent({
    icon,
    title,
    description,
    outcome,
}: {
    icon: ReactNode;
    title: string;
    description: string;
    outcome: string;
}) {
    return (
        <div className="pb-10">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">{icon}</div>
                <h4 className="text-xl md:text-2xl font-bold text-white" style={{ transformStyle: "preserve-3d" }}>
                    {title}
                </h4>
            </div>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed mb-4">{description}</p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">What you get</p>
                <p className="mt-3 text-base leading-relaxed text-neutral-300">{outcome}</p>
            </div>
        </div>
    );
}

export default async function OutsourceSoftwareDevelopmentIndiaPage() {
    let blogPosts: Awaited<ReturnType<typeof getAllBlogPosts>> = [];

    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn("Outsource Software Development India page: Blog data not available", error);
    }

    const processData = [
        {
            title: "01",
            content: (
                <ProcessContent
                    icon={<Search className="w-6 h-6" />}
                    title="Discovery and Business Alignment"
                    description="We start by understanding your business, not just your requirements. Your goals, your users, your constraints, and your definition of success are documented and agreed upon before anything else moves forward."
                    outcome="A clear scope document and project roadmap you approve before work begins."
                />
            ),
        },
        {
            title: "02",
            content: (
                <ProcessContent
                    icon={<Users className="w-6 h-6" />}
                    title="Sprint Planning and Team Onboarding"
                    description="Your dedicated engineering team is assembled based on your specific project needs. The first sprint is mapped in detail so you know exactly what gets built, by whom, and by when."
                    outcome="A named team, a sprint plan, and a shared workspace where everything is visible."
                />
            ),
        },
        {
            title: "03",
            content: (
                <ProcessContent
                    icon={<Layers3 className="w-6 h-6" />}
                    title="Sprint-Based Development and Daily Transparency"
                    description="Development runs in focused 15-day sprints. You have daily visibility into progress through your preferred tool. No chasing, no silence. Just steady, consistent delivery you can follow in real time."
                    outcome="Working software every 15 days and a direct line to your engineering team throughout."
                />
            ),
        },
        {
            title: "04",
            content: (
                <ProcessContent
                    icon={<MessageSquare className="w-6 h-6" />}
                    title="Review, Feedback and Next Sprint"
                    description="At the end of every sprint, you get a live demo of what was built. Your feedback directly shapes the next sprint. Nothing moves forward without your input and approval."
                    outcome="A tested, approved build and a plan for what comes next before the next sprint begins."
                />
            ),
        },
        {
            title: "05",
            content: (
                <ProcessContent
                    icon={<Rocket className="w-6 h-6" />}
                    title="Launch, Handover and Ongoing Support"
                    description="When your product is ready to go live, we handle deployment, documentation, and a full handover. You own everything. We stay available for support, optimisation, and future development as your business grows."
                    outcome="A fully documented, production-ready product with complete IP ownership and continued access to your team."
                />
            ),
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen text-white">
                <SoftwareOutsourcingHero
                    title={heroContent.title}
                    description={heroContent.description}
                    supportingText={heroContent.supportingText}
                    ctaText={heroContent.ctaText}
                    ctaHref="/contact"
                />

                <SectionShell
                    title="Outsourcing Software Development in India That Understands Your Business Before Writing a Line of Code"
                    titleHighlight="Built by Engineers Who Plan, Execute, and Deliver with Clarity"
                >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {operatingPrinciples.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-7 transition-colors duration-300 hover:border-white/18 md:p-8"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="inline-flex items-center gap-3">
                                            <span className="text-xs font-medium tracking-[0.28em] text-white/35">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="h-px w-10 bg-white/12" />
                                        </div>
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/80">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 max-w-[22rem] text-2xl font-semibold leading-[1.2] text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-neutral-400">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </SectionShell>

                <section className="relative overflow-hidden py-24 md:py-32">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.035),transparent_34%)] pointer-events-none" />
                    <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mb-16 md:mb-20">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.08]">
                                Built on Strong Engineering Thinking
                                <br />
                                <span className="text-neutral-500">Not Just Development Execution</span>
                            </h2>
                            <div className="mt-6 max-w-3xl space-y-3">
                                <p className="text-lg md:text-xl leading-relaxed text-neutral-200">
                                    We don&apos;t just write code.
                                </p>
                                <p className="text-lg md:text-xl leading-relaxed text-neutral-400">
                                    We design systems that hold up under real usage, scale without breaking, and stay maintainable as your business grows.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
                            <article className="rounded-[2rem] border border-cyan-500/18 bg-[linear-gradient(180deg,rgba(3,15,20,0.92),rgba(6,11,14,0.88))] p-8 md:p-10 lg:p-12">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                                    What We Focus on When Building Your Software
                                </p>
                                <div className="mt-8 space-y-6">
                                    {engineeringFocus.map((item) => (
                                        <div
                                            key={item}
                                            className="flex gap-4 border-t border-white/8 pt-6 first:border-t-0 first:pt-0"
                                        >
                                            <Check className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                                            <p className="text-lg leading-relaxed text-neutral-100">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <div className="grid gap-6">
                                <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                                    <h3 className="text-3xl font-semibold leading-tight text-white">
                                        Why This Matters for Your Business
                                    </h3>
                                    <p className="mt-5 text-lg leading-relaxed text-neutral-300">
                                        Most outsourcing fails not because of effort, but because of poor technical decisions early on.
                                    </p>
                                    <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                        We focus on getting those decisions right so you don&apos;t face:
                                    </p>
                                    <div className="mt-6 space-y-4">
                                        {engineeringRisks.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/70" />
                                                <p className="text-base leading-relaxed text-neutral-200">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </article>

                                <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                                    <h3 className="text-3xl font-semibold leading-tight text-white">
                                        Built to Support Real World Usage
                                    </h3>
                                    <div className="mt-5 space-y-3">
                                        <p className="text-lg leading-relaxed text-neutral-300">
                                            Your software is not just meant to be delivered.
                                        </p>
                                        <p className="text-base leading-relaxed text-neutral-400">
                                            It is meant to be used daily, handle pressure, and grow with your business without constant rework.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionShell
                    title="What Outsourcing Software Development to Zylex"
                    titleHighlight="Actually Feels Like"
                >
                    <VerticalTabs items={experiencePoints} />
                </SectionShell>

                <SectionShell
                    title="What Makes Our Software Development Approach Different"
                    titleHighlight="From Typical Outsourcing"
                >
                    <OutsourceDifferenceGrid items={differencePoints} />
                </SectionShell>

                <section className="relative overflow-hidden py-24">
                    <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                    Tell us what you are building. We will tell you exactly how we can help.
                                </h2>
                                <p className="mt-5 text-base md:text-lg leading-relaxed text-neutral-400">
                                    Partner with a reliable outsourcing software development company in India that delivers on time, on budget, and with complete visibility. Your dedicated team is ready.
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:flex-none">
                                <PrimaryCta href="/contact">Start Your First Sprint</PrimaryCta>
                            </div>
                        </div>
                    </div>
                </section>

                <Testimonial />

                <SectionShell
                    title="Software Outsourcing Services From India That Cover Everything Your Business Needs"
                    description="From early-stage products to complex enterprise systems, we build software that solves real problems, scales with real growth, and works exactly the way your business needs it to."
                >
                    <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_300px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {serviceCoverage.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
                                    >
                                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                            <Icon className="w-5 h-5" />
                                        </span>
                                        <h3 className="mt-5 text-xl font-semibold text-white leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                            {item.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>

                        <aside className="grid gap-6 self-start">
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
                                    Client satisfaction
                                </p>
                                <p className="mt-4 text-5xl font-bold text-white">98%</p>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                                    Teams come back because delivery stays visible, practical, and aligned with business goals.
                                </p>
                            </div>
                            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">
                                    Projects delivered
                                </p>
                                <p className="mt-4 text-5xl font-bold text-white">150+</p>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                                    From product builds to enterprise modernisation, the delivery model adapts without losing clarity.
                                </p>
                            </div>
                        </aside>
                    </div>
                    <p className="mt-10 max-w-3xl text-base md:text-lg leading-relaxed text-neutral-400">
                        Every service is delivered within your budget and timeline, so you see progress, stay in control, and always know what comes next.
                    </p>
                </SectionShell>

                <IntegrationsSection
                    title="Technology Decisions That Keep Outsourced Delivery Stable"
                    titleHighlight="The stack is chosen around your product, scale, and integration reality"
                    description="We select tools, frameworks, cloud services, and integration patterns based on maintainability, reliability, team fit, and long-term growth, not whatever is currently trending."
                    backgroundClassName="bg-transparent"
                />

                <ServiceProcessSection
                    title="How We Run Every Outsourced Software Development Engagement"
                    titleHighlight="A clear operating rhythm from discovery to launch"
                    processData={processData}
                    ctaLink={{ text: "See how we build custom software", href: "/services/custom-software-development" }}
                    backgroundClassName="bg-transparent"
                    showBackgroundEffects={false}
                />

                <SectionShell
                    title="This Is the Standard We Hold"
                    titleHighlight="Every Outsource Engagement To"
                >
                    <OutsourceStandardsParallax items={standards} />
                </SectionShell>

                <IndustriesShowcaseSection backgroundClassName="bg-transparent" showBackgroundEffects={false} />

                <BlogSection
                    initialBlogPosts={blogPosts}
                    backgroundClassName="bg-transparent"
                    showBackgroundEffects={false}
                />

                <section className="relative overflow-hidden py-24 md:py-32">
                    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent p-8 md:p-12 lg:p-16">
                            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
                                <div className="max-w-3xl">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05]">
                                        Let&apos;s Build Something That Moves Your Business Forward
                                    </h2>
                                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                                        You have the idea. We have the team, the process, and the engineering standard to make it real. The first conversation costs you nothing.
                                    </p>
                                    <div className="mt-8">
                                        <PrimaryCta href="/contact">Start Your Project With Zylex</PrimaryCta>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "100% IP ownership guaranteed",
                                        "NDA signed before we discuss your project",
                                        "Response within 24 hours",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-4"
                                        >
                                            <CheckCircle2 className="h-5 w-5 flex-none text-cyan-300" />
                                            <span className="text-sm md:text-base text-neutral-200">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FAQs
                    title="Frequently Asked Questions About Outsourcing Software Development to India"
                    faqItems={faqs.map((faq, index) => ({
                        id: `item-${index + 1}`,
                        question: faq.question,
                        answer: faq.answer,
                    }))}
                />
            </main>
        </>
    );
}
