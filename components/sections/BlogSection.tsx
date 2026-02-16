"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog-data";

gsap.registerPlugin(ScrollTrigger);

interface BlogSectionProps {
    initialBlogPosts?: BlogPost[];
}

export function BlogSection({ initialBlogPosts = [] }: BlogSectionProps) {
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
        <section ref={containerRef} className="relative w-full py-32 overflow-hidden bg-black">
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

                {/* Blog Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {initialBlogPosts.length > 0 ? (
                        initialBlogPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/resources/blog/${post.slug}`}
                                className="group relative bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wide rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 space-y-4 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-400 text-sm line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 text-xs text-neutral-500 pt-4 border-t border-white/10 mt-auto">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </div>
                                    </div>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-blue-500 font-medium text-sm group-hover:gap-3 transition-all pt-2">
                                        Read Article
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        /* Fallback state if no posts */
                        [1, 2, 3].map((i) => (
                            <div key={i} className="relative rounded-3xl border border-white/10 bg-neutral-900/50 p-8 h-[450px] flex flex-col justify-center items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                                    <Clock className="w-6 h-6 text-neutral-600" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">New Insights Incoming</h3>
                                <p className="text-neutral-500 text-sm">Our engineering team is currently documenting our latest breakthroughs.</p>
                            </div>
                        ))
                    )}
                </div>

                {/* View All CTA - links to Resources page */}
                <div className="flex justify-center mt-16">
                    <Link
                        href="/resources"
                        className="group flex items-center gap-2 text-lg text-neutral-400 hover:text-white transition-colors font-medium border-b border-white/10 pb-1"
                    >
                        view all blogs
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
