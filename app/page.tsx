import { getAllBlogPosts } from "@/lib/blog-data";
import HomeClient from "./home-client";

export const metadata = {
  title: "Zylex360: One Platform. Every Business Function.",
  description:
    "E-commerce, CRM, ERP, and Inventory—unified in real-time. Eliminate data silos and inventory errors. One platform. Complete operational visibility.",
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

  return <HomeClient initialBlogPosts={firstThree} />;
}
