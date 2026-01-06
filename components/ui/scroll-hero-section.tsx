'use client';

import { useEffect, useRef } from 'react';
import { GradientCard } from '@/components/ui/gradient-card';
import { Search, PenTool, Code2, CheckCircle, Rocket } from 'lucide-react';

export interface ScrollHeroSectionProps {
    /** Enable view-timeline animations if supported */
    animate?: boolean;
    /** Accent hue (0–359) */
    hue?: number;
    /** Section title */
    title?: string;
    /** Section title highlight */
    titleHighlight?: string;
    /** Section description */
    description?: string;
}

// Card data for the 5 phases
const cardData = [
    {
        badgeText: "Phase 1",
        badgeColor: "#0EA5E9", // Sky
        title: "Discovery & Strategic Alignment",
        description: "Analyze business requirements, map workflows, review existing systems, assess risks, define success metrics, and align technology decisions with business outcomes.",
        ctaText: "Clear implementation roadmap →",
        ctaHref: "/contact",
        gradient: "sky" as const,
        icon: <Search className="w-full h-full" />,
    },
    {
        badgeText: "Phase 2",
        badgeColor: "#8B5CF6", // Purple
        title: "Architecture & Solution Design",
        description: "Design scalable system architecture, define APIs and integration models, create database schemas, establish security frameworks, and plan performance.",
        ctaText: "Future-ready blueprint →",
        ctaHref: "/contact",
        gradient: "purple" as const,
        icon: <PenTool className="w-full h-full" />,
    },
    {
        badgeText: "Phase 3",
        badgeColor: "#F59E0B", // Amber
        title: "Development & Integration",
        description: "Build custom features, implement business logic, develop user interfaces, integrate third-party systems, and automate workflows through structured sprints.",
        ctaText: "Production-ready software →",
        ctaHref: "/contact",
        gradient: "orange" as const,
        icon: <Code2 className="w-full h-full" />,
    },
    {
        badgeText: "Phase 4",
        badgeColor: "#10B981", // Green
        title: "Quality Validation & Release",
        description: "Perform functional, regression, performance, and security testing — followed by user acceptance testing, deployment setup, and monitoring enablement.",
        ctaText: "Stable, high-performance app →",
        ctaHref: "/contact",
        gradient: "green" as const,
        icon: <CheckCircle className="w-full h-full" />,
    },
    {
        badgeText: "Phase 5",
        badgeColor: "#06B6D4", // Cyan
        title: "Support, Optimization & Evolution",
        description: "Provide ongoing support, implement enhancements, improve performance, scale infrastructure, and evolve functionality as your business grows.",
        ctaText: "Continuously improving →",
        ctaHref: "/contact",
        gradient: "sky" as const,
        icon: <Rocket className="w-full h-full" />,
    },
];

export function ScrollHeroSection({
    animate = true,
    hue = 200,
    title = "Our delivery approach",
    titleHighlight = "Structured, Transparent & Predictable Execution",
    description = "Our custom software development process follows an iterative, milestone-driven, and outcome-focused delivery model — ensuring clarity, engineering discipline, and business alignment at every stage.",
}: ScrollHeroSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.style.setProperty('--hue', String(hue));
    }, [hue]);

    return (
        <div
            ref={containerRef}
            className="scroll-hero-container"
            data-animate={String(animate)}
            style={{ '--hue': hue } as React.CSSProperties}
        >
            {/* Spacer for scroll effect */}
            <div className="scroll-hero-spacer" />

            {/* White card section */}
            <main className="scroll-hero-main">
                <div className="scroll-hero-main-content">
                    {/* Section Title */}
                    <div className="scroll-hero-header">
                        <h2 className="scroll-hero-title">
                            {title}
                            <br />
                            <span className="scroll-hero-title-highlight">{titleHighlight}</span>
                        </h2>
                        {description && (
                            <p className="scroll-hero-description">{description}</p>
                        )}
                    </div>

                    {/* Gradient Cards Grid */}
                    <div className="scroll-hero-cards">
                        {cardData.map((card, index) => (
                            <GradientCard
                                key={index}
                                badgeText={card.badgeText}
                                badgeColor={card.badgeColor}
                                title={card.title}
                                description={card.description}
                                ctaText={card.ctaText}
                                ctaHref={card.ctaHref}
                                gradient={card.gradient}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                </div>
            </main>

            <style jsx global>{`
                .scroll-hero-container {
                    --hue: 200;
                    --accent: hsl(var(--hue) 90% 50%);
                    position: relative;
                    width: 100%;
                    background: black;
                }

                /* Grid background */
                .scroll-hero-container::before {
                    --size: 45px;
                    --line: rgba(255, 255, 255, 0.08);
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    background:
                        linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size))
                            calc(var(--size) * 0.36) 50% / var(--size) var(--size),
                        linear-gradient(var(--line) 1px, transparent 1px var(--size)) 0%
                            calc(var(--size) * 0.32) / var(--size) var(--size);
                    mask: linear-gradient(-20deg, transparent 50%, white);
                    pointer-events: none;
                }

                .scroll-hero-spacer {
                    height: 50vh;
                }

                .scroll-hero-main {
                    width: 100%;
                    min-height: 100vh;
                    position: relative;
                    z-index: 2;
                }

                .scroll-hero-main::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    z-index: -1;
                    background: white;
                    border-radius: 1.5rem 1.5rem 0 0;
                }

                .scroll-hero-main-content {
                    width: 100%;
                    max-width: 90rem;
                    margin: 0 auto;
                    padding: 5rem 1.5rem;
                }

                .scroll-hero-header {
                    margin-bottom: 4rem;
                    max-width: 56rem;
                }

                .scroll-hero-title {
                    font-size: clamp(2.5rem, 6vw, 5rem);
                    font-weight: 700;
                    line-height: 1.1;
                    color: black;
                    margin: 0;
                }

                .scroll-hero-title-highlight {
                    color: #9ca3af;
                }

                .scroll-hero-description {
                    margin-top: 1.5rem;
                    font-size: 1.125rem;
                    line-height: 1.7;
                    color: #4b5563;
                    max-width: 48rem;
                }

                .scroll-hero-cards {
                    display: grid;
                    grid-template-columns: repeat(1, 1fr);
                    gap: 1.5rem;
                }

                @media (min-width: 768px) {
                    .scroll-hero-cards {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2rem;
                    }
                    
                    .scroll-hero-main-content {
                        padding: 6rem 2rem;
                    }
                }

                @media (min-width: 1280px) {
                    .scroll-hero-cards {
                        grid-template-columns: repeat(3, 1fr);
                    }
                    
                    .scroll-hero-main-content {
                        padding: 8rem 2rem;
                    }
                }

                /* View-timeline animations for smooth card entry AND exit */
                @supports (animation-timeline: view()) {
                    [data-animate='true'] .scroll-hero-main {
                        view-timeline: --section;
                    }

                    [data-animate='true'] .scroll-hero-main::before {
                        transform-origin: 50% 50%;
                        animation: scroll-hero-grow both ease-out;
                        animation-timeline: --section;
                        animation-range: entry 0% exit 100%;
                    }

                    @keyframes scroll-hero-grow {
                        0% { 
                            scale: 0.92; 
                            border-radius: 2rem 2rem 0 0; 
                        }
                        30% { 
                            scale: 1; 
                            border-radius: 0; 
                        }
                        70% { 
                            scale: 1; 
                            border-radius: 0; 
                        }
                        100% { 
                            scale: 0.92; 
                            border-radius: 0 0 2rem 2rem; 
                        }
                    }
                }

                @media (max-width: 768px) {
                    .scroll-hero-spacer {
                        height: 30vh;
                    }
                }
            `}</style>
        </div>
    );
}
