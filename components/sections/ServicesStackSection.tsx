"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Custom Software Development",
        description: "We deliver software development services built exactly for your business—secure, scalable, and completely yours. No trying to fit a square peg in a round hole.",
        cta: "Build Something Real",
        href: "/services/custom-software-development",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=800&fit=crop",
        gradient: "from-blue-500/20 to-cyan-500/5"
    },
    {
        title: "Web & Mobile Apps",
        description: "Our custom web and mobile app development creates experiences that don't just function—they feel great to use. Fast, intuitive interfaces that your customers will actually love.",
        cta: "Start Your App Journey",
        href: "/services/web-mobile-development",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=800&fit=crop",
        gradient: "from-blue-500/20 to-cyan-500/5"
    },
    {
        title: "3D Web Experiences",
        description: "Why be flat? We specialize in custom 3D website development services that grab attention and make your brand unforgettable in a crowded market.",
        cta: "Enter the 3D Dimension",
        href: "/services/3d-website-development",
        image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&h=800&fit=crop",
        gradient: "from-purple-500/20 to-pink-500/5"
    },
    {
        title: "App Modernization & Digital Transformation",
        description: "Need to upgrade without shutting down? We rebuild and improve your old systems while keeping your business running smoothly.",
        cta: "Turn Legacy Chaos Into Structure",
        href: "/services/digital-transformation",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop",
        gradient: "from-green-500/20 to-emerald-500/5"
    },
    {
        title: "E-commerce Solutions",
        description: "Sell without the stress. We build platforms that handle your biggest sales days without blinking.",
        cta: "Grow Your Commerce Business",
        href: "/services/ecommerce",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop",
        gradient: "from-red-500/20 to-blue-500/5"
    },
    {
        title: "AI and Automation",
        description: "Forget the hype. Our AI and software development approach automates the boring stuff and finds real opportunities in your data that save you money.",
        cta: "Get Smarter",
        href: "/services/ai-automation",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop",
        gradient: "from-indigo-500/20 to-violet-500/5"
    },
    {
        title: "Cloud & DevOps",
        description: "Make release day boring. We automate your updates so you can ship faster and safer, without the panic.",
        cta: "Make Release Day Boring Again",
        href: "/services/cloud-devops",
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=800&fit=crop",
        gradient: "from-sky-500/20 to-blue-500/5"
    },
    {
        title: "Strategic IT Consulting",
        description: "We don't just take orders; we help you validate them. Get honest technical advice that protects your budget and keeps you on the right track.",
        cta: "Get Expert Opinion",
        href: "/services/it-strategy-consulting",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=800&fit=crop",
        gradient: "from-yellow-500/20 to-cyan-500/5"
    }
];


export function ServicesStackSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const title = titleRef.current;
        if (!title) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(title,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    immediateRender: false,
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        scroller: document.documentElement,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-32">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Left Aligned Title */}
                <div className="mb-24 max-w-4xl">
                    <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                        What We Bring to Your Team <br />
                        <span className="text-neutral-500">The technical skills you need to lead your industry.</span>
                    </h2>
                </div>

                {/* Stacking Cards Container */}
                <div ref={cardsRef} className="flex flex-col gap-8 pb-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="sticky top-32 group"
                            style={{
                                top: "150px",
                                scale: 1,
                                transformOrigin: "top center"
                            }}
                        >
                            <div className={cn(
                                "relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-blue-400/50 hover:shadow-lg",
                                "h-[500px] flex flex-col",
                                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                            )}>

                                {/* Gradient Background */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-30 transition-opacity duration-500 group-hover:opacity-40",
                                    service.gradient
                                )} />

                                {/* Content Side */}
                                <div className="relative z-10 flex-1 p-8 md:p-12 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-black mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-lg text-neutral-600 mb-8 max-w-xl leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-500 transition-colors group/link"
                                    >
                                        {service.cta}
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>

                                {/* Visual Side (Image) */}
                                <div className={cn(
                                    "relative w-full md:w-1/3 overflow-hidden hidden md:flex items-center justify-center",
                                    index % 2 === 1 ? "border-r border-neutral-100" : "border-l border-neutral-100"
                                )}>
                                    {/* Image */}
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading="lazy"
                                        className="object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
