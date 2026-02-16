import type { Metadata } from "next";
import { NeonOrbs } from "@/components/ui/neon-orbs";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { IndustriesShowcaseSection } from "@/components/sections/IndustriesShowcaseSection";
import { CrossIndustryExpertiseSection } from "@/components/sections/CrossIndustryExpertiseSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { IndustriesCTASection } from "@/components/sections/IndustriesCTASection";
import { getAllBlogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "industry specific software solutions | Built for Scale | Zylex",
    description: "Zylex delivers industry specific software solutions and software development for industries, engineering custom software for businesses to lead.",
    alternates: {
        canonical: "/industries"
    }
};

export const revalidate = 60; // Enable ISR for fresh blog content

export default async function Industries() {
    let blogPosts: any[] = [];
    try {
        const posts = await getAllBlogPosts();
        blogPosts = posts.slice(0, 3);
    } catch (error) {
        console.warn('Industries Page: Blog data not available');
    }

    return (
        <div className="relative w-full bg-black antialiased">
            {/* Hero Section with Neon Orbs (Moved from Homepage) */}
            <NeonOrbs
                title="Own the Edge. We'll Build the Foundation to Hold It."
                description="You define the future. We build the unshakeable architecture that carries you there—engineered for 10x growth, not just launch day."
            />

            {/* Industries Showcase Section - Pinned on scroll */}
            <ScrollMorphHero />

            {/* Industries Details Section */}
            <IndustriesShowcaseSection />

            {/* Cross-Industry Expertise Section */}
            <CrossIndustryExpertiseSection />

            {/* Blog Section */}
            <BlogSection initialBlogPosts={blogPosts} />

            {/* CTA Section */}
            <IndustriesCTASection />
        </div>
    );
}



