"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-data";

gsap.registerPlugin(ScrollTrigger);

interface BlogSectionProps {
    initialBlogPosts: BlogPost[];
}

export function BlogSection({ initialBlogPosts }: BlogSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title Animation
            gsap.fromTo(
                titleRef.current,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                    },
                }
            );

            // Cards Animation
            const cards = cardsRef.current?.children;
            if (cards) {
                gsap.fromTo(
                    cards,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: "power3.out",
                        immediateRender: false,
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: "top 80%",
                        },
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Left Aligned Title */}
                <div ref={titleRef} className="mb-20 max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        Insights & Resources <br />
                        <span className="text-neutral-500">From Our Engineering Team</span>
                    </h2>
                    <p className="mt-6 text-xl text-neutral-400 max-w-2xl">
                        Expert perspectives on software development, digital transformation, and engineering best practices.
                    </p>
                </div>

                {/* Blog Cards Grid - first 3 from Resources */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {initialBlogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/resources/blog/${post.slug}`}
                            className="group block"
                        >
                            <div className="relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.25)]">
                                {/* Blog Image */}
                                <div className="h-48 w-full relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Animated Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Title */}
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-4 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Read Article Link */}
                                    <div className="flex items-center gap-2 text-blue-500 font-medium text-sm group-hover:text-blue-400 transition-colors">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA - links to Resources page */}
                <div className="flex justify-center mt-16">
                    <Link
                        href="/resources"
                        className="group flex items-center gap-2 text-lg text-neutral-400 hover:text-white transition-colors font-medium"
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
