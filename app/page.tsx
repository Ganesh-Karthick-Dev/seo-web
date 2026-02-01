import { getAllBlogPosts } from "@/lib/blog-data";
import HomeClient from "./home-client";

export const metadata = {
  title: "Zylex | Strategic AI & SaaS Development Agency for US Startups",
  description:
    "Ship production-ready SaaS platforms in 15 days. We provide elite engineering for AI automation, custom software, and cloud infrastructure.",
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

  return <HomeClient initialBlogPosts={firstThree} />;
}
