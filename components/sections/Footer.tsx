"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Linkedin, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { name: "Custom Software Development", href: "/services/custom-software-development" },
    { name: "Web & Mobile Development", href: "/services/web-mobile-development" },
    { name: "3D Website Development", href: "/services/3d-website-development" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
    { name: "E-Commerce", href: "/services/ecommerce" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "IT Strategy Consulting", href: "/services/it-strategy-consulting" },
];

const products = [
    { name: "Temp Mail Blocker", href: "/products/temp-mail-blocker" },
    { name: "Zylex360", href: "/products/zylex-360" },
];

const industries = [
    { name: "Healthcare", href: "/industries" },
    { name: "Fintech", href: "/industries" },
    { name: "E-Commerce", href: "/industries" },
    { name: "Education", href: "/industries" },
    { name: "Real Estate", href: "/industries" },
    { name: "Logistics", href: "/industries" },
];

const company = [
    { name: "About Us", href: "/about-us" },
    { name: "Industries", href: "/industries" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
];

const resources = [
    { name: "Resources", href: "/resources" },
];

const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Mail", icon: Mail, href: "mailto:contact@zylex.ai" },
];

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background ZYLEX text animation
            gsap.fromTo(
                bgTextRef.current,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 95%", // Trigger earlier
                        toggleActions: "play none none none", // Don't reset
                    },
                }
            );

            // Fade in content
            gsap.fromTo(
                contentRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={containerRef} className="relative w-full bg-neutral-100 overflow-hidden flex flex-col pt-24">
            {/* Large Background Text - ZYLEX */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span
                    ref={bgTextRef}
                    className="text-[20vw] md:text-[25vw] font-bold text-neutral-200/80 tracking-tight select-none"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
                    }}
                >
                    ZYLEX
                </span>
            </div>

            {/* Main Footer Content */}
            <div ref={contentRef} className="relative z-10 w-full">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 border-b border-neutral-200 pb-16">

                        {/* Logo & Description */}
                        <div className="lg:col-span-2 space-y-6">
                            <Link href="/" className="inline-block">
                                <span className="text-3xl font-bold text-neutral-900 tracking-tight">ZYLEX</span>
                            </Link>
                            <p className="text-neutral-600 max-w-sm">
                                Engineering-driven software development for scalable, reliable digital products.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3 pt-2">
                                {socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-blue-500 flex items-center justify-center text-neutral-600 hover:text-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* All Services */}
                        <div className="lg:col-span-1">
                            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                All Services
                            </h4>
                            <ul className="space-y-3">
                                {services.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-blue-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                Products
                            </h4>
                            <ul className="space-y-3">
                                {products.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-blue-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                Industries
                            </h4>
                            <ul className="space-y-3">
                                {industries.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-blue-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* About Company */}
                        <div>
                            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                About Company
                            </h4>
                            <ul className="space-y-3">
                                {company.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-blue-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {resources.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-blue-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="relative z-10 w-full mb-8">
                    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            {/* Copyright & Legal */}
                            <div className="text-sm text-neutral-500 order-2 md:order-1">
                                © {new Date().getFullYear()} Zylex. All rights reserved.
                            </div>

                            {/* Status */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white order-1 md:order-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs text-neutral-600 font-mono">ALL SYSTEMS OPERATIONAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
