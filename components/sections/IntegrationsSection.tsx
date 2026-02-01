"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
    SiReact,
    SiNextdotjs,
    SiAngular,
    SiVuedotjs,
    SiNodedotjs,
    SiPhp,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiGraphql,
    SiAmazonwebservices,
    SiDocker,
    SiGooglecloud,
    SiKubernetes,
    SiApachekafka,
    SiAuth0,
    SiPrometheus,
    SiTerraform,
    SiPulumi,
    SiGithub,
    SiGitlab,
    SiJenkins,
    SiGrafana,
    SiDatadog,
} from "react-icons/si";
import { Cloud, Database, Shield, CreditCard } from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 md:size-14 items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 shadow-lg",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

// Tech icons from react-icons (Simple Icons) - use brand colors for visibility on white circles
const iconClass = "w-6 h-6 md:w-7 md:h-7 flex-shrink-0";
type IconFn = (props: { color?: string }) => React.ReactElement;

const icon = (Comp: React.ComponentType<{ className?: string; style?: React.CSSProperties }>, fallbackColor?: string) =>
    (({ color }) => (
        <Comp
            className={iconClass}
            style={{ color: color && color !== "#ffffff" ? color : fallbackColor || "#231F20" }}
        />
    )) as IconFn;

const Icons: Record<string, IconFn> = {
    react: icon(SiReact, "#61DAFB"),
    nextjs: icon(SiNextdotjs, "#000000"),
    angular: icon(SiAngular, "#DD0031"),
    vue: icon(SiVuedotjs, "#4FC08D"),
    nodejs: icon(SiNodedotjs, "#339933"),
    php: icon(SiPhp, "#777BB4"),
    mysql: icon(SiMysql, "#4479A1"),
    mongodb: icon(SiMongodb, "#47A248"),
    postgresql: icon(SiPostgresql, "#4169E1"),
    graphql: icon(SiGraphql, "#E10098"),
    aws: icon(SiAmazonwebservices, "#FF9900"),
    azure: icon(Cloud, "#0078D4"),
    docker: icon(SiDocker, "#2496ED"),
    gcp: icon(SiGooglecloud, "#4285F4"),
    kubernetes: icon(SiKubernetes, "#326CE5"),
    kafka: icon(SiApachekafka, "#231F20"),
    auth0: icon(SiAuth0, "#EB5424"),
    prometheus: icon(SiPrometheus, "#E6522C"),
    terraform: icon(SiTerraform, "#7B42BC"),
    pulumi: icon(SiPulumi, "#8A3391"),
    github: icon(SiGithub, "#181717"),
    gitlab: icon(SiGitlab, "#FC6D26"),
    jenkins: icon(SiJenkins, "#D24939"),
    grafana: icon(SiGrafana, "#F46800"),
    datadog: icon(SiDatadog, "#632CA6"),
    payment: icon(CreditCard, "#635BFF"),
    erp: icon(Database, "#00A1E0"),
    crm: icon(Shield, "#00A1E0"),
    pim: icon(Cloud, "#6B7280"),
};

// Default tech items for Custom Software Development
const defaultLeftTechItems = [
    { label: "React / Next.js", icon: "react", color: "#61DAFB" },
    { label: "Node.js / Python", icon: "nodejs", color: "#339933" },
    { label: "Postgres / Mongo", icon: "postgresql", color: "#4169E1" },
    { label: "GraphQL / REST", icon: "graphql", color: "#E10098" },
    { label: "AWS / Azure", icon: "aws", color: "#FF9900" },
];

const defaultRightTechItems = [
    { label: "Docker / CI-CD", icon: "docker", color: "#2496ED" },
    { label: "Kafka / Redis", icon: "kafka", color: "#231F20" },
    { label: "Auth0 / IAM", icon: "auth0", color: "#EB5424" },
    { label: "Prometheus / ELK", icon: "prometheus", color: "#E6522C" },
    { label: "Kubernetes / K8s", icon: "kubernetes", color: "#326CE5" },
];

interface TechItem {
    label: string;
    icon: string;
    color: string;
}

interface IntegrationsSectionProps {
    title?: string;
    titleHighlight?: string;
    leftTechItems?: TechItem[];
    rightTechItems?: TechItem[];
    description?: string;
}

export function IntegrationsSection({
    title = "Our Advanced Technology Stack",
    titleHighlight = "for Custom Software Development",
    leftTechItems = defaultLeftTechItems,
    rightTechItems = defaultRightTechItems,
    description = "Technology decisions are driven by your requirements — not our preferences. We select the right stack based on scalability needs, team capabilities, integration requirements, and long-term maintenance strategy.",
}: IntegrationsSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Left side refs (5 nodes)
    const leftRef1 = useRef<HTMLDivElement>(null);
    const leftRef2 = useRef<HTMLDivElement>(null);
    const leftRef3 = useRef<HTMLDivElement>(null);
    const leftRef4 = useRef<HTMLDivElement>(null);
    const leftRef5 = useRef<HTMLDivElement>(null);

    // Center ref
    const centerRef = useRef<HTMLDivElement>(null);

    // Right side refs (5 nodes)
    const rightRef1 = useRef<HTMLDivElement>(null);
    const rightRef2 = useRef<HTMLDivElement>(null);
    const rightRef3 = useRef<HTMLDivElement>(null);
    const rightRef4 = useRef<HTMLDivElement>(null);
    const rightRef5 = useRef<HTMLDivElement>(null);

    const leftRefs = [leftRef1, leftRef2, leftRef3, leftRef4, leftRef5];
    const rightRefs = [rightRef1, rightRef2, rightRef3, rightRef4, rightRef5];
    const curvatures = [-50, -25, 0, 25, 50];

    return (
        <section className="w-full py-20 lg:py-32 bg-black">
            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                        {title}
                        {titleHighlight && (
                            <>
                                <br />
                                <span className="text-neutral-500">{titleHighlight}</span>
                            </>
                        )}
                    </h2>
                </div>

                {/* Animated Beam Diagram */}
                <div
                    className="relative flex h-[500px] md:h-[600px] w-full items-center justify-center overflow-hidden p-6 md:p-10"
                    ref={containerRef}
                >
                    <div className="flex size-full max-w-5xl items-center justify-between gap-4 md:gap-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {leftTechItems.slice(0, 5).map((item, index) => {
                                const IconComponent = Icons[item.icon];
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="text-white text-xs md:text-sm font-medium text-right w-20 md:w-24 hidden sm:block">
                                            {item.label}
                                        </span>
                                        <Circle ref={leftRefs[index]}>
                                            {IconComponent ? <IconComponent color={item.color} /> : null}
                                        </Circle>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Center - Zylex Z Logo */}
                        <div
                            ref={centerRef}
                            className="z-10 flex size-20 md:size-24 items-center justify-center rounded-full border-2 border-white/20 bg-neutral-900 p-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] overflow-hidden"
                        >
                            <svg
                                viewBox="195 355 265 305"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full object-contain"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <path d="M430.5 380H224.5L222 429H360.5C395.5 395.5 430.5 380 430.5 380Z" fill="white" stroke="#1D3655"/>
                                <path d="M453 370.82C388.136 412.306 317.226 471.882 210.5 620.5L208 648.5L436 645L437.5 599H324C308.5 599 286.905 604.5 278.5 609C270.095 613.5 271.5 612.5 271.5 612.5C374 498 447 379.5 447 379.5L453 370.82Z" fill="#0F9CEE"/>
                            </svg>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-6 md:gap-8">
                            {rightTechItems.slice(0, 5).map((item, index) => {
                                const IconComponent = Icons[item.icon];
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <Circle ref={rightRefs[index]}>
                                            {IconComponent ? <IconComponent color={item.color} /> : null}
                                        </Circle>
                                        <span className="text-white text-xs md:text-sm font-medium w-20 md:w-24 hidden sm:block">
                                            {item.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Beams from left side to center */}
                    {leftTechItems.slice(0, 5).map((item, index) => (
                        <AnimatedBeam
                            key={`left-${index}`}
                            containerRef={containerRef}
                            fromRef={leftRefs[index]}
                            toRef={centerRef}
                            curvature={curvatures[index]}
                            gradientStartColor={item.color}
                            gradientStopColor={item.color}
                        />
                    ))}

                    {/* Beams from center to right side (reverse) */}
                    {rightTechItems.slice(0, 5).map((item, index) => (
                        <AnimatedBeam
                            key={`right-${index}`}
                            containerRef={containerRef}
                            fromRef={rightRefs[index]}
                            toRef={centerRef}
                            curvature={curvatures[index]}
                            reverse
                            gradientStartColor={item.color}
                            gradientStopColor={item.color}
                        />
                    ))}
                </div>

                {/* Description text below beam */}
                {description && (
                    <div className="mt-12 max-w-3xl mx-auto text-center">
                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
