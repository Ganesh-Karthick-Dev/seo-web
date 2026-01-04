"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { ServicesStackSection } from "@/components/sections/ServicesStackSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { NeonOrbs } from "@/components/ui/neon-orbs";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for all content to render, then refresh ScrollTrigger
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Also refresh on window load (for images, fonts, etc.)
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div ref={mainRef} className="relative w-full bg-black/[0.96] antialiased">
      {/* Hero Section with Neon Orbs */}
      <NeonOrbs />

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
    </div>
  );
}
