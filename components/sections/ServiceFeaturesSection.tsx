"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Layers, Rocket, RefreshCw, Cog } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: cardRef.current,
                        start: 'top 85%',
                        end: 'top 60%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, [index]);

    return (
        <div ref={cardRef} className="group">
            <Card className="h-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="mb-6 inline-flex p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                        {icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-sky-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-white/70 leading-relaxed mb-4">
                        {description}
                    </p>
                    <div className="flex items-center text-sky-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

interface ServiceFeaturesSectionProps {
    title?: string;
    titleHighlight?: string;
    features?: {
        icon: React.ReactNode;
        title: string;
        description: string;
    }[];
}

export function ServiceFeaturesSection({
    title = "Problems We Solve",
    titleHighlight = "Where Custom Software Development Creates the Most Value",
    features = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Outgrown Your Current Software",
            description: "When standard platforms no longer support your operations, our business software development solutions unlock simplicity, performance, and control.",
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Need Market Validation — Fast",
            description: "Our MVP development expertise helps you release working software early so you can gather real customer feedback and refine your product direction with confidence.",
        },
        {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Legacy Systems Limit Progress",
            description: "Modernizing outdated software can be disruptive — unless it's done with a disciplined enterprise software development approach that protects continuity.",
        },
        {
            icon: <Cog className="w-6 h-6" />,
            title: "Automation That Actually Works",
            description: "Stop forcing generic tools to fit critical workflows. Our custom solutions automate real processes with better data insights and fewer exceptions.",
        },
    ],
}: ServiceFeaturesSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (headingRef.current) {
                gsap.fromTo(
                    headingRef.current,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                        },
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.08),transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Left Aligned Title */}
                <div className="mb-16 md:mb-20 max-w-4xl">
                    <h2
                        ref={headingRef}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                    >
                        {title}
                        <br />
                        <span className="text-neutral-500">{titleHighlight}</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {features.map((feature, index) => (
                        <ServiceCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
