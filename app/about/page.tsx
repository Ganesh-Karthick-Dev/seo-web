"use client";

import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutVisionSection } from "@/components/sections/AboutVisionSection";

export default function About() {
    return (
        <div className="relative w-full bg-black antialiased">
            {/* Hero Section with Animated Text */}
            <AboutHeroSection />

            {/* Vision Section with Parallax */}
            <AboutVisionSection />

            {/* Mission & Values Section */}
            <section className="relative w-full py-24 md:py-32">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Mission */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
                            Our Mission
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Empowering businesses with engineering-first digital solutions
                        </h2>
                        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                            To drive growth, enhance user experiences, and create lasting value through
                            innovative digital solutions built on solid engineering foundations.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovation */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-orange-500/30 hover:bg-zinc-900/80">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Constantly pushing boundaries and exploring new technologies to deliver cutting-edge solutions.
                                </p>
                            </div>
                        </div>

                        {/* Quality */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/30 hover:bg-zinc-900/80">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Delivering excellence in every project through rigorous engineering standards and best practices.
                                </p>
                            </div>
                        </div>

                        {/* Integrity */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                                <p className="text-neutral-400 leading-relaxed">
                                    Building trust through transparency, honest communication, and keeping our commitments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

