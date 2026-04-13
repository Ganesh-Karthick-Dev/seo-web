import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Bot,
    Building2,
    Check,
    CheckCircle2,
    Clock3,
    Code2,
    FileText,
    Gauge,
    GitBranch,
    Layers3,
    Lightbulb,
    Lock,
    MessageSquare,
    Network,
    Rocket,
    Search,
    ShieldCheck,
    Target,
    Users,
    Workflow,
} from "lucide-react";
import { ServiceProcessSection } from "@/components/sections/ServiceProcessSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { IndustriesShowcaseSection } from "@/components/sections/IndustriesShowcaseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { OffshoreControlCardsSection } from "@/components/sections/OffshoreControlCardsSection";
import { OffshorePinnedStorySection } from "@/components/sections/OffshorePinnedStorySection";
import FAQs from "@/components/ui/faqs-component";
import { getAllBlogPosts } from "@/lib/blog-data";

const canonicalPath = "/services/offshore-software-development-india";
const canonicalUrl = `https://zylex.io${canonicalPath}`;

const seoKeywords = [
    "offshore software development company in india",
    "offshore software development india",
    "offshore development center in india",
    "offshore software development in india",
    "offshore developers india",
    "hire offshore developers india",
    "offshore development services in india",
    "indian offshore software development company",
];

const offshorePrinciples = [
    {
        icon: Target,
        title: "Your Offshore Team Works Only on Your Product",
        description:
            "Your offshore developers in India are not shared across multiple clients. They are exclusively focused on your product every single day. That focus builds deeper knowledge, faster execution, and better results over time.",
    },
    {
        icon: Workflow,
        title: "Aligned With Your Workflow From Day One",
        description:
            "We do not force new processes on you. Your offshore team adapts to your tools, coding standards, and communication style so everything works smoothly from the start. Engineering that serves your strategy, not just your sprint.",
    },
    {
        icon: Clock3,
        title: "Consistent Progress Without You Managing Everything",
        description:
            "You do not need to follow up daily. Work moves forward in structured sprints, and you always have clarity on what is being built and what is coming next. Questions are resolved quickly, feedback is implemented fast, and decisions never slow down progress.",
    },
    {
        icon: GitBranch,
        title: "Product Knowledge That Compounds With Every Sprint",
        description:
            "Unlike project-based teams that reset with every engagement, your offshore team grows smarter about your product over time. Every sprint adds context, every decision builds understanding, and that knowledge stays with your product long term.",
    },
];

const oneStandardBlocks = [
    {
        description:
            "Zylex brings deep expertise in offshore software development that stays aligned with your product from day one. We don't treat offshore as task execution. We build dedicated teams that understand your system, your users, and your long-term goals.",
        image: "/service-page/offshore/Dedicated_Offshore_Team_202604092233.png",
        alt: "Dedicated offshore software team working closely together around the product.",
        imagePosition: "right" as const,
    },
    {
        description:
            "We run every offshore engagement on a sprint-based delivery model. That means your offshore development team in India is not operating in a black box. You see working software every 15 days, stay in control of the direction, and always know exactly where your product stands.",
        image: "/service-page/offshore/Sprint_Visibility_Through_202604092223.png",
        alt: "Sprint delivery dashboards showing visible progress and clear status.",
        imagePosition: "left" as const,
    },
    {
        description:
            "Our standard does not change based on project size. Whether you are building your first product or scaling an established platform, the same engineering discipline, documentation practice, and delivery accountability apply across every offshore engagement we run.",
        image: "/service-page/offshore/Strong_Software_Architecture_202604092224.png",
        alt: "Engineering architecture and documentation workspace for long-term delivery discipline.",
        imagePosition: "right" as const,
    },
];

const rightFitSegments = [
    {
        icon: Rocket,
        title: "Startups That Have Validated Their Product and Need to Scale Fast",
        description:
            "You have proven your concept. Now you need to build fast without burning your entire runway on local engineering salaries. A dedicated offshore development team in India gives you the engineering firepower to scale without the overhead.",
    },
    {
        icon: Gauge,
        title: "Scale-Ups That Want to Reduce Hiring Costs Without Reducing Quality",
        description:
            "You are growing. Hiring locally is slow, expensive, and competitive. An offshore team in India lets you expand your engineering capacity with experienced developers who integrate directly into your existing team and workflow.",
    },
    {
        icon: Building2,
        title: "Established Businesses That Want a Dedicated India Tech Team Without Setting Up Their Own Entity",
        description:
            "You want the benefits of an India-based development center without the legal complexity of registering an entity, managing HR, or handling local compliance. Zylex handles all of that, so you get the team without the overhead.",
    },
];

const controlPoints = [
    {
        title: "Your Team Knows Your Product as Well as You Do",
        description:
            "From the first sprint, your offshore team is onboarded into your product, your architecture, and your business context. By sprint three, they are making decisions that reflect a deep understanding of what you are building and why.",
    },
    {
        title: "Communication Feels Seamless Across Time Zones",
        description:
            "Daily standups, sprint reviews, and async updates happen in your tools of choice. Your offshore team in India works within a guaranteed overlap window, so decisions never sit waiting overnight.",
    },
    {
        title: "Every Sprint Delivers Something Real",
        description:
            "No long silences followed by a big reveal. Every 15 days, you receive working software you can test, review, and give feedback on. Progress is always visible and always measurable.",
    },
    {
        title: "Your Codebase Stays Clean and Well Documented",
        description:
            "Your offshore developers write code that your team can read, maintain, and build on. Every architectural decision is documented as it is made. When a developer transitions off, knowledge stays with your product, not with the individual.",
    },
    {
        title: "Your Team Grows Smarter About Your Business Over Time",
        description:
            "Unlike project outsourcing, where context resets with every engagement, your offshore team accumulates deep product knowledge over time. The longer they work on your product, the more valuable they become to it.",
    },
];

const securityPoints = [
    "NDA and IP agreements before development begins",
    "Full ownership of code and assets at every stage",
    "Controlled access to systems and environments",
    "Secure development practices are followed consistently",
];

const partnerReasons = [
    {
        title: "Dedicated Teams That Stay With Your Product",
        description:
            "Engineers stay consistent on your project, building deep product understanding, reducing ramp-up time, and delivering better decisions across every development sprint.",
    },
    {
        title: "Progress You Can See Every Sprint",
        description:
            "Every 15-day sprint delivers working software you can review, test, and validate, ensuring continuous visibility, faster feedback, and real progress without uncertainty.",
    },
    {
        title: "We Scope Before We Staff",
        description:
            "We do not assign engineers before we understand your product. Every offshore team at Zylex is assembled around your specific technical requirements, not pulled from a generic bench.",
    },
    {
        title: "Built for Long-Term Product Growth",
        description:
            "We focus on sustainable architecture and continuous development, helping your product evolve instead of delivering short-term fixes that slow future growth.",
    },
    {
        title: "We Build for Where You Are Going, Not Just Where You Are",
        description:
            "Every technical decision your offshore team makes is made with your long-term growth in mind. Scalable architecture, clean codebases, and forward-thinking design mean you do not rebuild from scratch as your business scales.",
    },
    {
        title: "India Advantage for Offshore Development",
        description:
            "India offers skilled developers, cost-efficient scaling, and flexible time-zone collaboration, making it one of the most trusted locations for offshore software development.",
    },
];

const engineeringDepth = [
    {
        icon: Rocket,
        title: "Cloud-Native Architecture Designed for Scale",
        description:
            "Every system your offshore team builds runs on modern cloud infrastructure from day one. Your product handles real growth without performance degradation or expensive architectural rework down the line.",
    },
    {
        icon: Network,
        title: "API-First Development for Seamless System Integration",
        description:
            "We build every product to connect. Third-party tools, internal systems, and future platform expansions integrate cleanly because your offshore team designs for interoperability from the start.",
    },
    {
        icon: Bot,
        title: "AI and Intelligent Automation Built Into Your Core Product",
        description:
            "We engineer AI capabilities and automation workflows into your product where they create real business value, smarter operations, faster decisions, and measurable efficiency gains that compound over time.",
    },
    {
        icon: Lock,
        title: "Security Engineered In From the First Line of Code",
        description:
            "Data protection, access control, and threat prevention are not afterthoughts. They are built into every layer of your product by your offshore development team before it ever touches a live environment.",
    },
    {
        icon: Code2,
        title: "Clean Codebases Your Internal Team Can Own and Extend",
        description:
            "Your offshore team writes code that is readable, maintainable, and extendable. No black-box engineering. No dependency on specific developers to make changes. Full ownership and full control at every stage.",
    },
];

const faqs = [
    {
        question: "What is offshore software development in India?",
        answer:
            "Offshore software development in India means partnering with a dedicated engineering team based in India to build, maintain, and scale your software product. Unlike outsourcing a one-time project, offshore development involves a long-term team that integrates into your workflows, learns your codebase deeply, and operates as an extension of your in-house team. India is the leading destination for offshore software development globally due to its depth of engineering talent, English proficiency, cost efficiency, and time-zone flexibility with the US, UK, and Australia.",
    },
    {
        question: "Why do companies choose India for offshore software development?",
        answer:
            "Companies choose India for offshore software development because it offers the largest pool of English-speaking software engineers in the world, with deep expertise across fintech, SaaS, e-commerce, healthcare, and enterprise platforms. India-based offshore development delivers significant cost advantages compared to hiring locally in the US or UK without compromising engineering quality. Indian offshore teams also offer flexible time-zone overlap with major English-speaking markets, making real-time collaboration practical and consistent.",
    },
    {
        question: "What is the difference between offshore software development and outsourcing?",
        answer:
            "Offshore software development and outsourcing are not the same thing. Outsourcing typically means engaging an external team to complete a defined project and the relationship ends when the deliverable is handed over. Offshore software development means building a dedicated team in India that works exclusively on your product long term. Your offshore team accumulates deep product knowledge, integrates into your company culture, and evolves with your business rather than resetting with every new project.",
    },
    {
        question: "How much does it cost to hire offshore developers in India?",
        answer:
            "The cost of hiring offshore developers in India depends on the size of your team, the seniority of the engineers required, and the technical complexity of your product. India-based offshore development is typically 50 to 70 percent more cost-efficient than hiring equivalent engineers locally in the US or UK. At Zylex, offshore engagements are structured around dedicated monthly retainers with full cost transparency from the start, with no hidden fees and no surprise invoices at any stage of the engagement.",
    },
    {
        question: "How do offshore developers in India communicate with teams in the US, UK, and Australia?",
        answer:
            "Offshore developers in India maintain structured daily overlap windows with client teams across the US, UK, and Australia. At Zylex, your offshore team communicates through your existing tools such as Slack, Linear, or Notion. Daily standups, sprint reviews, and async updates keep both sides aligned. Questions are answered the same day and decisions are never left waiting overnight due to time-zone gaps.",
    },
    {
        question: "How do I protect my intellectual property when working with an offshore software development company in India?",
        answer:
            "Protecting your intellectual property when working with an offshore development company in India starts with legal agreements before any work begins. At Zylex, a non-disclosure agreement and a full IP assignment agreement are signed before your project is discussed. Every line of code, every design asset, and every piece of intellectual property created by your offshore team belongs to you from the moment it is written. There is no licensing model, no ownership dispute, and no dependency on Zylex to access what your team builds.",
    },
    {
        question: "How quickly can an offshore development team in India get started on my product?",
        answer:
            "An offshore development team in India can typically begin active development within one to two weeks of completing the scoping and team assembly process. At Zylex, the first step is a discovery session where we define your team structure, technical requirements, and sprint plan. Once your team is assembled and approved, onboarding begins immediately and the first sprint starts within days, not months.",
    },
    {
        question: "What happens if I need to scale my offshore development team in India up or down?",
        answer:
            "Scaling your offshore development team in India up or down is straightforward when your engagement is built on documented codebases and clear engineering standards. At Zylex, every architectural decision and technical choice is documented as it is made so adding new engineers to your offshore team does not disrupt delivery momentum. You can increase team size to accelerate development or reduce it during quieter phases without the friction and cost of local hiring or redundancy.",
    },
    {
        question: "What types of software can an offshore development company in India build?",
        answer:
            "An offshore software development company in India can build across the full spectrum of software products including custom enterprise software, SaaS platforms, mobile applications for iOS and Android, AI and automation systems, e-commerce platforms, cloud infrastructure, and digital transformation solutions. At Zylex, offshore development teams are assembled with the specific technical skills your product requires and not pulled from a generic pool of generalist developers.",
    },
    {
        question: "How is Zylex different from other offshore software development companies in India?",
        answer:
            "Zylex differs from other offshore software development companies in India in four concrete ways. First, every offshore team at Zylex is dedicated exclusively to your product and your engineers do not split their time across multiple clients. Second, delivery runs on 15-day sprints so you have full visibility into progress at every stage of a long-term engagement. Third, you communicate directly with the engineers building your product with no account managers or middlemen. Fourth, every engagement is built on a documentation standard that protects your product knowledge regardless of team changes over time.",
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
            name: "Offshore Software Development India",
            item: canonicalUrl,
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Offshore Software Development Company in India",
    description:
        "Zylex helps you build a dedicated offshore software development team in India. Work with offshore developers who integrate with your workflows, ensuring consistent delivery, control, and long-term scalability.",
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
    serviceType: "Offshore Software Development in India",
    audience: {
        "@type": "BusinessAudience",
        audienceType: "Startups, scale-ups, CTOs, product teams, and established businesses",
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
    title: "Offshore Software Development Company in India | Dedicated Offshore Teams",
    description:
        "Zylex helps you build a dedicated offshore software development team in India. Work with offshore developers who integrate with your workflows, ensuring consistent delivery, control, and long-term scalability.",
    keywords: seoKeywords,
    alternates: {
        canonical: canonicalPath,
    },
    openGraph: {
        title: "Build Your Offshore Development Team in India with Zylex",
        description:
            "Hire offshore developers in India who work as an extension of your team. Zylex provides dedicated offshore development teams focused on long-term delivery, collaboration, and scalable software growth.",
        url: canonicalUrl,
        siteName: "Zylex",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Build Your Offshore Development Team in India with Zylex",
        description:
            "Hire offshore developers in India who work as an extension of your team. Zylex provides dedicated offshore development teams focused on long-term delivery, collaboration, and scalable software growth.",
    },
};

export const revalidate = 60;

function SectionShell({
    eyebrow,
    title,
    description,
    children,
}: {
    eyebrow?: string;
    title: ReactNode;
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

export default async function OffshoreSoftwareDevelopmentIndiaPage() {
    let blogPosts: Awaited<ReturnType<typeof getAllBlogPosts>> = [];

    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn("Offshore Software Development India page: Blog data not available", error);
    }

    const processData = [
        {
            title: "01",
            content: (
                <ProcessContent
                    icon={<Search className="w-6 h-6" />}
                    title="Team Scoping and Role Definition"
                    description="We start by understanding your product, your current engineering gaps, and your growth trajectory. Together, we define the exact roles, skills, and team size you need, so you are not paying for engineers you do not need or missing the ones you do."
                    outcome="A clear team-structure document with defined roles, skills, and a hiring timeline."
                />
            ),
        },
        {
            title: "02",
            content: (
                <ProcessContent
                    icon={<Users className="w-6 h-6" />}
                    title="Team Assembly and Vetting"
                    description="We assemble your offshore development team from our network of senior engineers in India. Every engineer is vetted against your specific technical requirements, not just general capability. You meet the team before work begins."
                    outcome="A named, approved team of offshore developers ready to onboard into your product."
                />
            ),
        },
        {
            title: "03",
            content: (
                <ProcessContent
                    icon={<FileText className="w-6 h-6" />}
                    title="Onboarding Into Your Product and Workflows"
                    description="Your team spends the first sprint getting deeply familiar with your codebase, your architecture, your tools, and your standards. No assumptions. No guessing. Just structured onboarding that sets the foundation for long-term delivery."
                    outcome="A team that understands your product before it writes a single line of new code."
                />
            ),
        },
        {
            title: "04",
            content: (
                <ProcessContent
                    icon={<CheckCircle2 className="w-6 h-6" />}
                    title="First Sprint: Proof of Delivery"
                    description="The first 15-day sprint is designed to prove the model works. Your team picks up real work, delivers against agreed goals, and demonstrates the communication and delivery standard you can expect going forward."
                    outcome="Working software, a live demo, and full confidence in your offshore team before the long-term engagement deepens."
                />
            ),
        },
        {
            title: "05",
            content: (
                <ProcessContent
                    icon={<Rocket className="w-6 h-6" />}
                    title="Ongoing Cadence and Long-Term Growth"
                    description="After the first sprint, your offshore development engagement settles into a consistent cadence. Regular sprint reviews, transparent reporting, and a team that evolves with your product, adding new skills and capacity as your business grows."
                    outcome="A long-term offshore engineering partner that gets more valuable the longer you work together."
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
                <section className="relative overflow-hidden">
                    <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-36 md:pb-32">
                        <div className="max-w-5xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.35rem] font-bold tracking-tight leading-[0.98]">
                                Offshore Software Development Company in India That Works Like Your Own Engineering Team
                            </h1>
                            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-neutral-300">
                                Build a dedicated offshore development team in India that understands your product, aligns with your workflow, and delivers consistent progress in focused 15-day sprints.
                            </p>
                            <div className="mt-10">
                                <PrimaryCta href="/contact">Build Your Offshore Team</PrimaryCta>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionShell
                    title={
                        <>
                            Offshore Software Development in India
                            <br />
                            <span className="text-neutral-500">
                                That Becomes Part of How Your Business Operates, Built by Engineers Who Own Your Product Like It Is Their Own
                            </span>
                        </>
                    }
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {offshorePrinciples.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                            <Icon className="w-5 h-5" />
                                        </span>
                                        <h3 className="text-xl font-semibold text-white leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="mt-5 text-base leading-relaxed text-neutral-400">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </SectionShell>

                <SectionShell
                    title={
                        <>
                            Zylex Is an Offshore Software Development Company in India
                            <br />
                            <span className="text-neutral-500">Built on One Standard</span>
                        </>
                    }
                >
                    <OffshorePinnedStorySection blocks={oneStandardBlocks} />
                </SectionShell>

                <SectionShell
                    title={
                        <>
                            Is Offshore Software Development in India
                            <br />
                            <span className="text-neutral-500">Right for Your Business?</span>
                        </>
                    }
                    description="Offshore development is not a one-size-fits-all solution. It works exceptionally well for the right kind of business. Here is who gets the most value from it."
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {rightFitSegments.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <h3 className="mt-5 text-2xl font-semibold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </SectionShell>

                <IntegrationsSection
                    title="Capability Depth Your Offshore Team Can Plug Into"
                    titleHighlight="Architecture, product engineering, and platform thinking that scale with your roadmap"
                    description="Your offshore team is stronger when the engineering foundations are strong. We bring the same stack discipline, integration thinking, and product architecture standards we use across our broader software engineering work."
                    backgroundClassName="bg-transparent"
                />

                <section className="relative overflow-hidden py-24">
                    <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-8 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                                    See How Your Offshore Team Would Actually Work Before You Commit
                                </h2>
                                <p className="mt-5 text-base md:text-lg leading-relaxed text-neutral-400">
                                    Start with one sprint. See the quality, the communication, and the delivery standard for yourself before making a long-term commitment.
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:flex-none">
                                <PrimaryCta href="/contact">Start Your First Sprint</PrimaryCta>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionShell
                    title={
                        <>
                            High-Performing Offshore Development Team in India
                            <br />
                            <span className="text-neutral-500">Built Around Control and Consistency</span>
                        </>
                    }
                >
                    <OffshoreControlCardsSection items={controlPoints} />
                </SectionShell>

                <ServiceProcessSection
                    title="How We Build and Launch Your Offshore Development Center in India"
                    titleHighlight="A clear path from team design to long-term cadence"
                    processData={processData}
                    ctaLink={{ text: "See our custom software delivery model", href: "/services/custom-software-development" }}
                    backgroundClassName="bg-transparent"
                    showBackgroundEffects={false}
                />

                <IndustriesShowcaseSection backgroundClassName="bg-transparent" showBackgroundEffects={false} />

                <SectionShell
                    title="Your Code, Your Data, Your IP, Protected at Every Stage"
                    description="We ensure your product, data, and systems are secure from day one."
                >
                    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.85fr)]">
                        <div className="rounded-[2rem] border border-cyan-500/15 bg-cyan-500/[0.04] p-8 md:p-10">
                            <div className="flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                    <ShieldCheck className="w-5 h-5" />
                                </span>
                                <h3 className="text-2xl font-semibold text-white">Secure by agreement and by process</h3>
                            </div>
                            <div className="mt-8 space-y-4">
                                {securityPoints.map((item) => (
                                    <div key={item} className="flex gap-3">
                                        <Check className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                                        <p className="text-base leading-relaxed text-neutral-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <article className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
                            <h3 className="text-2xl font-semibold text-white">A secure development environment you can trust</h3>
                            <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                You do not just get a team. You get an operating model that protects ownership, access, and continuity from the first conversation through long-term delivery.
                            </p>
                            <div className="mt-8 space-y-4">
                                <div className="flex items-start gap-3">
                                    <Lock className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                                    <p className="text-sm leading-relaxed text-neutral-400">Access controls stay intentional as the team grows.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FileText className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                                    <p className="text-sm leading-relaxed text-neutral-400">Documentation protects continuity when responsibilities shift.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                                    <p className="text-sm leading-relaxed text-neutral-400">Named team ownership reduces knowledge loss and operational drift.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </SectionShell>

                <SectionShell title="Why Zylex Is the Right Partner">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {partnerReasons.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
                            >
                                <h3 className="text-2xl font-semibold text-white leading-tight">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </SectionShell>

                <SectionShell
                    title="The Engineering Thinking Behind Every Offshore Software Development Project"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {engineeringDepth.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8"
                                >
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                                        <Icon className="w-5 h-5" />
                                    </span>
                                    <h3 className="mt-5 text-2xl font-semibold text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </SectionShell>

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
                                        Let&apos;s Build Your Offshore Development Team in India and Start Shipping
                                    </h2>
                                    <p className="mt-6 text-lg md:text-xl leading-relaxed text-neutral-300">
                                        Tell us about your product and where you want to take it. We will come back with a clear offshore team structure, an honest timeline, and exactly how we can help you get there.
                                    </p>
                                    <div className="mt-8">
                                        <PrimaryCta href="/contact">Build Your Offshore Team With Zylex</PrimaryCta>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "NDA signed before we discuss your project",
                                        "100% IP ownership guaranteed from day one",
                                        "A dedicated team assembled around your exact requirements",
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
                    title="Frequently Asked Questions"
                    description="Honest answers to what you actually want to know before making a decision."
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
