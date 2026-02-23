import { getAllBlogPosts } from "@/lib/blog-data";
import HomeClient from "./home-client";

export const metadata = {
  title: "Zylex | Strategic AI & SaaS Development Company for US Startups",
  alternates: {
    canonical: "https://zylex.io",
  },
};

export const revalidate = 60; // Revalidate every 60s so Insights & Resources gets fresh posts

export default async function Home() {
  let firstThree: Awaited<ReturnType<typeof getAllBlogPosts>> = [];
  try {
    const posts = await getAllBlogPosts();
    firstThree = posts.slice(0, 3);
  } catch {
    // Database not available; HomeClient will show empty or fallback
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zylex",
  "url": "https://zylex.io/",
  "logo": "https://zylex.io/logo/zylex-dark-caption.svg",
  "description": "Zylex is a B2B SaaS platform providing software solutions for businesses.",
  "sameAs": [
    "https://www.linkedin.com/company/zylex-io",
    "https://x.com/Zylex_Official",
    "https://www.instagram.com/zylex_technologies/"
  ]
}`
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Zylex",
  "url": "https://zylex.io/"
}`
        }}
      />
      <HomeClient initialBlogPosts={firstThree} />
    </>
  );
}
