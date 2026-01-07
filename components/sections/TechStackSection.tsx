"use client";

import React from "react";

interface TechCategory {
    name: string;
    technologies: string[];
}

interface TechStackSectionProps {
    title?: string;
    titleHighlight?: string;
    categories: TechCategory[];
    description?: string;
}

export function TechStackSection({
    title = "Technologies We Use",
    titleHighlight,
    categories,
    description,
}: TechStackSectionProps) {
    return (
        <section className="w-full py-24 lg:py-32 bg-black relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05),transparent_60%)] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="font-bold text-white leading-[1.1]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                        {title}
                        {titleHighlight && (
                            <>
                                <br />
                                <span className="text-neutral-500">{titleHighlight}</span>
                            </>
                        )}
                    </h2>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-sky-500/30 transition-all duration-500"
                        >
                            {/* Category Name */}
                            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-sky-100 transition-colors">
                                {category.name}
                            </h3>

                            {/* Technologies List */}
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1.5 text-sm rounded-full bg-neutral-800/80 text-neutral-300 border border-neutral-700/50 hover:border-sky-500/30 hover:text-white transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional Description */}
                {description && (
                    <div className="mt-12 max-w-3xl">
                        <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
