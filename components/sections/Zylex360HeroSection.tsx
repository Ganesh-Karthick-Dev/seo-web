"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Users, BarChart3, Package } from 'lucide-react';
import Image from 'next/image';

export function Zylex360HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple fade-in animations
            gsap.from(".hero-badge", {
                opacity: 0, y: 20, duration: 0.8, ease: "power3.out"
            });
            gsap.from(".hero-title", {
                opacity: 0, y: 40, duration: 1, delay: 0.2, ease: "power3.out"
            });
            gsap.from(".hero-subtitle", {
                opacity: 0, y: 30, duration: 0.8, delay: 0.5, ease: "power3.out"
            });
            gsap.from(".hero-cta", {
                opacity: 0, y: 20, duration: 0.8, delay: 0.7, ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const features = [
        { icon: ShoppingCart, label: "E-commerce" },
        { icon: Users, label: "CRM" },
        { icon: BarChart3, label: "ERP" },
        { icon: Package, label: "Inventory" },
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-[#030308] flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/C:/Users/ganes/.gemini/antigravity/brain/fd744e3d-a059-415c-9bad-d68743456be7/zylex360_hero_bg_1769654570418.png"
                    alt="Zylex360 Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#030308]/80 via-transparent to-[#030308]" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
                {/* Badge */}
                <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                        Zylex360 — The Unified Business Management Suite
                    </span>
                </div>

                {/* Main Title */}
                <div className="hero-title leading-[0.9] tracking-tight mb-8">
                    <span className="text-white block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black">
                        Zylex360
                    </span>
                    {/* Using Bebas Neue - geometric font renders clean strokes */}
                    <span
                        className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase"
                        style={{
                            fontFamily: 'var(--font-bebas), sans-serif',
                            color: 'transparent',
                            WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        One Platform. Every Business Function.
                    </span>
                </div>

                {/* Subtitle - Removed as requested */}
                <p className="hero-subtitle text-lg md:text-xl text-white/50 max-w-xl mb-6 leading-relaxed">
                    Unified in real-time.
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="feature-badge inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <ShoppingCart className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-white/80">E-commerce</span>
                    </div>
                    <div className="feature-badge inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <Users className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-white/80">CRM</span>
                    </div>
                    <div className="feature-badge inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <BarChart3 className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-white/80">ERP</span>
                    </div>
                    <div className="feature-badge inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                        <Package className="w-5 h-5 text-cyan-400" />
                        <span className="text-sm font-medium text-white/80">Inventory</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
