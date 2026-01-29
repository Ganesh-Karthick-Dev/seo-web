"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChallengesSection } from "@/components/sections/ChallengesSection";
import { ServicesStackSection } from "@/components/sections/ServicesStackSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";
import { Testimonial } from "@/components/ui/design-testimonial";
import ParticleEffectHero from "@/components/ui/particle-effect-for-hero";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const globalBgRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);

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

  // Global background color animation
  useEffect(() => {
    if (!globalBgRef.current || !howWeWorkRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(globalBgRef.current, {
        backgroundColor: "#ffffff",
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: howWeWorkRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative w-full antialiased">
      {/* Global Background Layer - fixed behind everything */}
      <div
        ref={globalBgRef}
        className="fixed inset-0 -z-50"
        style={{ backgroundColor: "#000000" }}
      />

      {/* Hero Section with Particle Effect (Moved from Industries) */}
      <ParticleEffectHero
        subtitle="High-Performance Engineering. Unstoppable Business Velocity."
        title="Accelerate Beyond Manual Workflows"
        description="Your vision is too ambitious to be slowed by manual work. We engineer AI-driven systems that give your growth unshakeable stability. By automating the noise, we empower you to lead with absolute certainty while your team focuses on the only metric that matters: customer mastery."
      />

      {/* Challenges Section */}
      <ChallengesSection />

      {/* Services Stack Section */}
      <ServicesStackSection />

      {/* How We Work Section - wrapped with ref for scroll detection */}
      <div ref={howWeWorkRef}>
        <HowWeWorkSection />
      </div>

      {/* Blog Section */}
      <BlogSection />

      {/* Why Choose Zylex Section */}
      <WhyChooseSection />

      {/* Testimonial Section */}
      <Testimonial />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
