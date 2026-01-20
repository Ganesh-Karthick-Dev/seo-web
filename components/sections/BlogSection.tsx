"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: 1,
        image: "/blog/engineering-excellence.png",
        highlightWord: "Engineering Excellence",
        titleBefore: "",
        titleAfter: "in Modern Software Development",
        description: "Discover how structured engineering practices lead to more reliable, maintainable, and scalable software solutions.",
        highlightBg: "bg-blue-500/20",
        highlightBorder: "border-blue-500/40",
        pointerColor: "text-blue-500",
    },
    {
        id: 2,
        image: "/blog/digital-transformation.png",
        highlightWord: "Digital Transformation",
        titleBefore: "The Path to",
        titleAfter: "That Actually Works",
        description: "Why most digital transformations fail and how strategic alignment ensures successful modernization.",
        highlightBg: "bg-purple-500/20",
        highlightBorder: "border-purple-500/40",
        pointerColor: "text-purple-500",
    },
    {
        id: 3,
        image: "/blog/scalable-architecture.png",
        highlightWord: "Scalable Architecture",
        titleBefore: "Building",
        titleAfter: "for Growing Businesses",
        description: "Essential patterns and practices for architecting systems that grow seamlessly with your business needs.",
        highlightBg: "bg-emerald-500/20",
        highlightBorder: "border-emerald-500/40",
        pointerColor: "text-emerald-500",
    },
];

export function BlogSection() {
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

                {/* Blog Cards Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href="#"
                            className="group block"
                        >
                            <div className="relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.25)]">
                                {/* Blog Image */}
                                <div className="h-48 w-full relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.highlightWord}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Animated Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    {/* Title with PointerHighlight */}
                                    <div className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug mb-4">
                                        {post.titleBefore && <span>{post.titleBefore} </span>}
                                        <PointerHighlight
                                            rectangleClassName={`${post.highlightBg} ${post.highlightBorder} leading-relaxed`}
                                            pointerClassName={`${post.pointerColor} h-3 w-3`}
                                            containerClassName="inline-block mx-1"
                                        >
                                            <span className="relative z-10 px-1">{post.highlightWord}</span>
                                        </PointerHighlight>
                                        {post.titleAfter && <span> {post.titleAfter}</span>}
                                    </div>

                                    {/* Description */}
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                        {post.description}
                                    </p>

                                    {/* Read More Link */}
                                    <div className="flex items-center gap-2 text-blue-500 font-medium text-sm group-hover:text-blue-400 transition-colors">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="flex justify-center mt-16">
                    <Link
                        href="/blog"
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
