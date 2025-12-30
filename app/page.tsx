"use client";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-black/[0.96] antialiased">
      {/* Hero Section */}
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-grid-white/[0.02]">

        {/* Orange/Amber Gradient Orbs (Replacing Spotlight for consistency) */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-center px-4 pt-20">
          <div className="flex flex-col items-center gap-8 text-center max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm font-medium text-orange-400">Engineering Excellence</span>
            </div>

            {/* Headline */}
            <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-7xl leading-tight tracking-tight">
              Your Vision Deserves Better Delivery — <br className="hidden md:block" />
              <span className="text-white">Build, Modernize & Scale</span> <br />
              with Engineering-driven Software Development.
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-lg font-normal text-neutral-400 md:text-xl leading-relaxed">
              You’re building mission-critical digital platforms — and you need scalable software development and reliable engineering execution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-4">
              <Link
                href="/contact"
                className="group relative flex h-12 w-full items-center justify-center gap-2 rounded-full overflow-hidden bg-orange-600 px-8 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 md:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500" />
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Talk
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/services"
                className="flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:w-auto"
              >
                View Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-neutral-500">
              {["Enterprise Grade Security", "Scalable Architecture", "24/7 Support"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative w-full py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">
            Why Choose Us
          </h2>
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}
