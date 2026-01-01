"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Linkedin, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
    { name: "Custom Software Development", href: "/services/custom-software" },
    { name: "Web & Mobile Apps", href: "/services/web-mobile" },
    { name: "3D Website Development", href: "/services/3d-websites" },
    { name: "Digital Transformation", href: "/services/digital-transformation" },
    { name: "E-Commerce", href: "/services/ecommerce" },
    { name: "AI, ML & Automation", href: "/services/ai-ml" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "IT Consulting", href: "/services/consulting" },
];

const industries = [
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Fintech", href: "/industries/fintech" },
    { name: "E-Commerce", href: "/industries/ecommerce" },
    { name: "Education", href: "/industries/education" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Logistics", href: "/industries/logistics" },
];

const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "FAQ", href: "/faq" },
];

const socials = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in content
            gsap.fromTo(
                contentRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={containerRef} className="relative w-full min-h-screen bg-neutral-100 overflow-hidden flex flex-col">
            {/* Large Background Text - ZYLEX */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <span
                    className="text-[20vw] md:text-[25vw] font-bold text-neutral-200/80 tracking-tight select-none"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                    }}
                >
                    ZYLEX
                </span>
            </div>

            {/* Main Footer Content */}
            <div ref={contentRef} className="relative z-10 flex-1 flex flex-col justify-end">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">

                        {/* Logo & Newsletter */}
                        <div className="lg:col-span-2 space-y-6">
                            <Link href="/" className="inline-block">
                                <span className="text-3xl font-bold text-neutral-900 tracking-tight">ZYLEX</span>
                            </Link>
                            <p className="text-neutral-600 max-w-sm">
                                Engineering-driven software development for scalable, reliable digital products.
                            </p>

                            {/* Newsletter */}
                            <div className="pt-4">
                                <p className="text-sm font-medium text-neutral-900 mb-3">Subscribe to our newsletter</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 h-12 px-4 rounded-full border border-neutral-300 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                    <button className="h-12 px-6 rounded-full bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2">
                                        Subscribe
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-3 pt-2">
                                {socials.map((social) => (
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-neutral-200 hover:bg-orange-500 flex items-center justify-center text-neutral-600 hover:text-white transition-all duration-300"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* All Services */}
                        <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                                All Services
                            </h4>
                            <ul className="space-y-3">
                                {services.slice(0, 5).map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-orange-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Industries */}
                        <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                                Industries
                            </h4>
                            <ul className="space-y-3">
                                {industries.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-orange-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* About Company */}
                        <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                                About Company
                            </h4>
                            <ul className="space-y-3">
                                {company.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-orange-500 transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                {resources.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="text-neutral-600 hover:text-orange-500 transition-colors text-sm"
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
                <div className="relative z-10 border-t border-neutral-200">
                    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Status */}
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm text-neutral-600">All systems operational</span>
                            </div>

                            {/* Copyright & Legal */}
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-neutral-500">
                                <span>© 2025 Zylex. All rights reserved</span>
                                <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms" className="hover:text-orange-500 transition-colors">
                                    Terms of Use
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
