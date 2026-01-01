"use client";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { ServicesStackSection } from "@/components/sections/ServicesStackSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full bg-black/[0.96] antialiased">
      {/* Hero Section with Wavy Background */}
      <div className="relative w-full overflow-hidden">
        <WavyBackground
          className="max-w-[90rem] mx-auto pb-40"
          containerClassName="min-h-screen"
          colors={["#f97316", "#f59e0b", "#ea580c", "#fbbf24", "#c2410c"]}
          waveWidth={50}
          backgroundFill="black"
          blur={10}
          speed="slow"
          waveOpacity={0.5}
        >
          <div className="flex flex-col items-center justify-center px-4 pt-52">
            <div className="flex flex-col items-center gap-6 text-center max-w-7xl">

              {/* Headline */}
              <h1 className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl leading-[1.1] tracking-tight max-w-6xl">
                Your Vision Deserves Better Delivery — <br className="hidden lg:block" />
                <span className="text-white">Build, Modernize & Scale</span> <br className="hidden lg:block" />
                with Engineering-driven Software Development.
              </h1>

              {/* Subheadline */}
              <p className="max-w-4xl text-lg font-normal text-neutral-400 md:text-xl leading-relaxed">
                You're building mission-critical digital platforms — and you need scalable software development and reliable engineering execution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-6">
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
            </div>
          </div>
        </WavyBackground>
      </div>

      {/* Challenges Section */}
      <ChallengesSection />

      {/* Services Stack Section */}
      <ServicesStackSection />

      {/* How We Work Section */}
      <HowWeWorkSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Why Choose Zylex Section */}
      <WhyChooseSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

