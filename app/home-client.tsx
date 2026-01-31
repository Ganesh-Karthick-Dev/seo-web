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
import type { BlogPost } from "@/lib/blog-data";

gsap.registerPlugin(ScrollTrigger);

interface HomeClientProps {
  initialBlogPosts: BlogPost[];
}

export default function HomeClient({ initialBlogPosts }: HomeClientProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const globalBgRef = useRef<HTMLDivElement>(null);
  const howWeWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

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
      <div
        ref={globalBgRef}
        className="fixed inset-0 -z-50"
        style={{ backgroundColor: "#000000" }}
      />

      <ParticleEffectHero
        subtitle="High-Performance Engineering. Unstoppable Business Velocity."
        title="Accelerate Beyond Manual Workflows"
        description="Your vision is too ambitious to be slowed by manual work. We engineer AI-driven systems that give your growth unshakeable stability. By automating the noise, we empower you to lead with absolute certainty while your team focuses on the only metric that matters: customer mastery."
      />

      <ChallengesSection />

      <ServicesStackSection />

      <div ref={howWeWorkRef}>
        <HowWeWorkSection />
      </div>

      <BlogSection initialBlogPosts={initialBlogPosts} />

      <WhyChooseSection />

      <Testimonial />

      <CTASection />
    </div>
  );
}
