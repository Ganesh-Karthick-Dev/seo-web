"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail, Instagram, Twitter, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/zylex-io", color: "hover:bg-[#0077b5]" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/zylex_technologies/", color: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]" },
    { name: "X", icon: Twitter, href: "https://x.com/Zylex_Official", color: "hover:bg-black" },
    { name: "Mail", icon: Mail, href: "mailto:connect@zylex.io", color: "hover:bg-[#EA4335]" },
];

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgTextRef = useRef<HTMLSpanElement>(null);
    const [openSection, setOpenSection] = useState<string | null>(null);

    const footerSections = [
        { label: "All Services", items: services },
        { label: "Products", items: products },
        { label: "Industries", items: industries },
        { label: "About Company", items: company },
        { label: "Resources", items: resources },
    ];

    useEffect(() => {
        const container = containerRef.current;
        const bgText = bgTextRef.current;
        const content = contentRef.current;
        if (!container || !bgText || !content) return;

        const ctx = gsap.context(() => {
            const triggerConfig = {
                trigger: container,
                start: "top 95%",
                toggleActions: "play none none none",
                scroller: document.documentElement, // Match Lenis scrollerProxy
            };

            // Animate only y-offset (no opacity) so content stays visible if ScrollTrigger delays
            gsap.fromTo(
                bgText,
                { y: 60 },
                {
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: triggerConfig,
                }
            );

            gsap.fromTo(
                content,
                { y: 24 },
                {
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        ...triggerConfig,
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
                                <div className="relative w-32 h-10 overflow-hidden">
                                    <Image
                                        src="/logo/crop_logo.webp"
                                        alt="Zylex Software Development & SaaS Engineering Company Logo"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 128px, 128px"
                                        priority
                                    />
                                </div>
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
                                        className={`w-10 h-10 rounded-full bg-neutral-200 ${social.color} flex items-center justify-center text-neutral-600 hover:text-white transition-all duration-300`}
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Link Sections */}
                        {footerSections.map((section) => (
                            <div key={section.label} className="lg:col-span-1 border-b border-neutral-200 lg:border-none">
                                {/* Desktop Title */}
                                <h4 className="hidden lg:block text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-6">
                                    {section.label}
                                </h4>

                                {/* Mobile Title (Accordion Trigger) */}
                                <button
                                    onClick={() => setOpenSection(openSection === section.label ? null : section.label)}
                                    className="flex lg:hidden w-full items-center justify-between py-4 group"
                                >
                                    <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wider">
                                        {section.label}
                                    </span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${openSection === section.label ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Desktop List */}
                                <ul className="hidden lg:block space-y-3">
                                    {section.items.map((item) => (
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

                                {/* Mobile List (Accordion Content) */}
                                <AnimatePresence>
                                    {openSection === section.label && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden lg:hidden"
                                        >
                                            <ul className="pb-6 space-y-3">
                                                {section.items.map((item) => (
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
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
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
